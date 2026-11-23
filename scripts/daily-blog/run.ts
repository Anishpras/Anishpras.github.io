/**
 * Daily blog generator.
 *
 * 1. Research: Claude searches the web for the day's biggest tech stories and
 *    picks POSTS_PER_DAY of them across categories (AI, fintech, security, ...).
 * 2. Write: for each story, Claude opens the sources, verifies, and writes an
 *    opinionated explainer in Anish's voice (scripts/daily-blog/voice.md).
 * 3. Structure: a tool-free call turns each draft into validated metadata
 *    (title, description, TL;DR, takeaways, tags, sources).
 * 4. Gate: scripts/daily-blog/quality.ts rejects weak posts; only passing posts
 *    are written to src/content/blog/.
 *
 * Structured outputs can't be combined with web-search citations (400), so
 * every step that searches returns prose and a separate call extracts JSON.
 *
 * Usage: ANTHROPIC_API_KEY=... node scripts/daily-blog/run.ts [--dry-run] [--count=5]
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";

import { CATEGORIES, checkPost, findBannedPhrases } from "./quality.ts";

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, "..", "..");
const BLOG_DIR = join(ROOT, "src", "content", "blog");

const MODEL = "claude-opus-5-5";
const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const COUNT = Number(
  args.find((a) => a.startsWith("--count="))?.split("=")[1] ??
    process.env.POSTS_PER_DAY ??
    5
);

const client = new Anthropic();

// Refusals on a policy classifier get re-run on a fallback model server-side.
const COMMON: Pick<
  Anthropic.Beta.MessageCreateParamsNonStreaming,
  "model" | "betas" | "fallbacks" | "thinking"
> = {
  model: MODEL,
  betas: ["server-side-fallback-2026-07-01"],
  fallbacks: "default",
  thinking: { type: "adaptive" },
};

const today = new Date();
const todayIso = today.toISOString().slice(0, 10);
const todayLong = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

type Seen = Map<string, string>; // url -> title

/** Run a tool-using turn to completion (resuming pause_turn), collecting every URL Claude actually saw. */
async function runResearch(
  system: string,
  prompt: string,
  maxSearches: number,
  maxFetches: number
) {
  const seen: Seen = new Map();
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    { role: "user", content: prompt },
  ];
  let message: Anthropic.Beta.BetaMessage | undefined;

  for (let attempt = 0; attempt < 6; attempt++) {
    message = await client.beta.messages
      .stream({
        ...COMMON,
        max_tokens: 64000,
        output_config: { effort: "high" },
        system,
        tools: [
          {
            type: "web_search_20260209",
            name: "web_search",
            max_uses: maxSearches,
          },
          {
            type: "web_fetch_20260209",
            name: "web_fetch",
            max_uses: maxFetches,
          },
        ],
        messages,
      })
      .finalMessage();

    for (const block of message.content) {
      if (
        block.type === "web_search_tool_result" &&
        Array.isArray(block.content)
      ) {
        for (const result of block.content) seen.set(result.url, result.title);
      } else if (
        block.type === "web_fetch_tool_result" &&
        block.content.type === "web_fetch_result"
      ) {
        seen.set(
          block.content.url,
          block.content.content.title ?? block.content.url
        );
      } else if (block.type === "text") {
        for (const citation of block.citations ?? []) {
          if ("url" in citation && citation.url)
            seen.set(citation.url, citation.title ?? citation.url);
        }
      }
    }

    if (message.stop_reason === "pause_turn") {
      // Resume: send the paused assistant turn back; the server continues it.
      messages.push({ role: "assistant", content: message.content });
      continue;
    }
    break;
  }

  if (!message) throw new Error("no response");
  if (message.stop_reason === "refusal") {
    throw new Error(`refused: ${message.stop_details?.category ?? "unknown"}`);
  }
  if (message.stop_reason === "pause_turn")
    throw new Error("still paused after 6 continuations");

  const text = message.content
    .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
    .map((b) => b.text)
    .join("");

  return { text, seen };
}

/** Tool-free call that returns schema-validated JSON. */
async function extract<T extends z.ZodType>(
  schema: T,
  system: string,
  prompt: string
): Promise<z.infer<T>> {
  const response = await client.beta.messages.parse({
    ...COMMON,
    max_tokens: 16000,
    output_config: { effort: "medium", format: betaZodOutputFormat(schema) },
    system,
    messages: [{ role: "user", content: prompt }],
  });
  if (response.stop_reason === "refusal") throw new Error("extraction refused");
  if (!response.parsed_output)
    throw new Error("extraction returned no parseable output");
  return response.parsed_output as z.infer<T>;
}

/** Titles of recent posts, so the same story isn't covered twice. */
function recentPostTitles(days = 10) {
  const cutoff = Date.now() - days * 86400_000;
  return readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readFileSync(join(BLOG_DIR, f), "utf8"))
    .map((src) => ({
      title: src.match(/^title:\s*"?(.+?)"?\s*$/m)?.[1] ?? "",
      date: Date.parse(src.match(/^createdAt:\s*"?([^"\n]+)"?/m)?.[1] ?? ""),
    }))
    .filter((p) => p.title && p.date >= cutoff)
    .map((p) => p.title);
}

const StoryList = z.object({
  stories: z.array(
    z.object({
      working_title: z.string(),
      category: z.enum(CATEGORIES),
      summary: z
        .string()
        .describe("3-5 sentences: what happened, with key facts and dates"),
      angle: z
        .string()
        .describe("The specific question or opinion the post should explore"),
      source_urls: z
        .array(z.string())
        .describe("URLs from the research notes, primary source first"),
    })
  ),
});

const PostMeta = z.object({
  title: z
    .string()
    .describe(
      "Specific, plain-English headline, 45-75 characters, no clickbait, no colon-subtitle unless needed"
    ),
  description: z
    .string()
    .describe(
      "Meta description, 120-160 characters, says what happened and why it matters"
    ),
  slug: z.string().describe("kebab-case, 3-7 words, lowercase ascii, no dates"),
  category: z.enum(CATEGORIES),
  tags: z
    .array(z.string())
    .describe(
      "3-6 lowercase topic tags, e.g. 'openai', 'stablecoins', 'ai agents'"
    ),
  tldr: z
    .string()
    .describe("One or two sentences, under 280 characters, answer-first"),
  keyTakeaways: z.array(z.string()).describe("3-5 short, concrete takeaways"),
  sources: z
    .array(
      z.object({ title: z.string(), url: z.string(), publisher: z.string() })
    )
    .describe(
      "2-6 sources the article relies on, chosen ONLY from the provided list, primary source first"
    ),
});

function yamlString(value: string) {
  return JSON.stringify(value); // JSON strings are valid YAML double-quoted scalars
}

function toFrontmatter(meta: z.infer<typeof PostMeta>, createdAt: string) {
  const list = (items: string[]) =>
    items.map((item) => `  - ${yamlString(item)}`).join("\n");
  return `---
title: ${yamlString(meta.title)}
description: ${yamlString(meta.description)}
category: ${meta.category}
tags:
${list(meta.tags)}
createdAt: ${createdAt}
updatedAt: ${createdAt}
tldr: ${yamlString(meta.tldr)}
keyTakeaways:
${list(meta.keyTakeaways)}
sources:
${meta.sources
  .map(
    (s) =>
      `  - title: ${yamlString(s.title)}\n    url: ${yamlString(s.url)}\n    publisher: ${yamlString(s.publisher)}`
  )
  .join("\n")}
---
`;
}

function cleanBody(markdown: string) {
  return markdown
    .replace(/^---[\s\S]*?---\s*/, "") // stray frontmatter
    .replace(/^#\s+.*\n+/, "") // leading H1
    .replace(/\n#{2,3}\s+(Sources|References)\b[\s\S]*$/i, "") // sources are rendered from frontmatter
    .trim();
}

function uniqueSlug(slug: string) {
  const base = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
  let candidate = base;
  let n = 2;
  while (
    existsSync(join(BLOG_DIR, `${candidate}.md`)) ||
    existsSync(join(BLOG_DIR, `${candidate}.mdx`))
  ) {
    candidate = `${base}-${n++}`;
  }
  return candidate;
}

async function pickStories() {
  const recent = recentPostTitles();
  const { text, seen } = await runResearch(
    `You are the research desk for Anish Prashun's tech blog. Today is ${todayLong}. Be rigorous: only report what sources say, with dates.`,
    `Find the ${COUNT} biggest technology stories of the last 36 hours for a readership of engineers, founders and curious professionals.

Cover a spread: at most 2 AI stories, and include fintech/payments/crypto infrastructure, security & privacy, big tech, developer tools, chips/hardware, startups/funding or tech policy where there is genuinely big news. Rank by real-world impact (money, users, regulation, what builders must change), not by social-media noise.

Rules:
- Each story must be confirmed by at least two independent sources; prefer primary sources (company announcements, filings, regulator releases, papers) plus one reputable outlet.
- Skip rumours, listicles, product-deal roundups and stories older than 36 hours.
- Do not pick stories already covered recently:${recent.length ? `\n${recent.map((t) => `  - ${t}`).join("\n")}` : " (none yet)"}

Write research notes for each story: a working headline, category (${CATEGORIES.join(", ")}), the key facts with numbers and dates, why it matters, an interesting angle for an opinionated explainer, and the source URLs you used.`,
    20,
    10
  );

  const picked = await extract(
    StoryList,
    "Extract structured data from research notes. Copy URLs exactly; never invent one.",
    `Extract exactly ${COUNT} stories (or fewer if the notes contain fewer) from these research notes:\n\n${text}`
  );

  return picked.stories
    .map((story) => ({
      ...story,
      source_urls: story.source_urls.filter((url) => seen.has(url)),
    }))
    .filter((story) => story.source_urls.length > 0)
    .slice(0, COUNT);
}

type Story = Awaited<ReturnType<typeof pickStories>>[number];

async function writePost(story: Story, voice: string, index: number) {
  const system = `${voice}\n\nToday is ${todayLong}.`;
  const { text, seen } = await runResearch(
    system,
    `Write today's post about this story.

Working title: ${story.working_title}
Category: ${story.category}
What we know so far: ${story.summary}
Angle to explore: ${story.angle}
Starting sources:
${story.source_urls.map((u) => `- ${u}`).join("\n")}

First open the starting sources with web_fetch and verify the facts. Search for at least one independent confirmation and any numbers or context the reader needs (prices, market size, prior events, what competitors do). Then write the post body in Markdown, following the structure and rules in your instructions exactly. Output only the post body.`,
    8,
    8
  );

  let body = cleanBody(text);

  // One cheap editing pass if the draft uses banned phrasing.
  const banned = findBannedPhrases(body);
  if (banned.length) {
    const edited = await extract(
      z.object({ body: z.string() }),
      "You are a copy editor. Change as little as possible.",
      `Rewrite only the sentences containing these phrases so they no longer use them: ${banned.join(", ")}. Keep everything else byte-for-byte identical, including headings and links.\n\n${body}`
    );
    body = cleanBody(edited.body);
  }

  const sourceList = [...seen.entries()]
    .map(([url, title]) => `- ${title} | ${url}`)
    .join("\n");
  const meta = await extract(
    PostMeta,
    "You write precise, non-clickbait metadata for a technical blog. Never invent URLs.",
    `Article:\n\n${body}\n\nSources the author opened (title | url):\n${sourceList}`
  );

  meta.sources = meta.sources.filter((s) => seen.has(s.url));
  meta.tags = meta.tags.map((t) => t.toLowerCase().trim()).slice(0, 6);
  meta.keyTakeaways = meta.keyTakeaways.slice(0, 5);

  const problems = checkPost({ ...meta, body });
  if (problems.length) {
    console.warn(`✗ Skipping "${meta.title}": ${problems.join("; ")}`);
    return null;
  }

  const slug = uniqueSlug(meta.slug);
  // Stagger timestamps so posts from one run keep a stable order.
  const createdAt = new Date(today.getTime() - index * 60_000).toISOString();
  const file = join(BLOG_DIR, `${slug}.md`);
  const content = `${toFrontmatter(meta, createdAt)}\n${body}\n`;

  if (DRY_RUN) {
    console.log(`\n===== ${file}\n${content}`);
  } else {
    writeFileSync(file, content);
    console.log(`✓ Wrote ${file}`);
  }
  return file;
}

async function main() {
  const voice = readFileSync(join(here, "voice.md"), "utf8");
  console.log(`Picking ${COUNT} stories for ${todayIso}…`);
  const stories = await pickStories();
  console.log(
    stories.map((s) => `  • [${s.category}] ${s.working_title}`).join("\n")
  );

  const written: string[] = [];
  for (const [index, story] of stories.entries()) {
    try {
      const file = await writePost(story, voice, index);
      if (file) written.push(file);
    } catch (error) {
      if (error instanceof Anthropic.RateLimitError) {
        console.error("Rate limited; stopping this run.");
        break;
      }
      console.error(
        `✗ Failed "${story.working_title}":`,
        error instanceof Error ? error.message : error
      );
    }
  }

  console.log(`\nPublished ${written.length}/${stories.length} posts.`);
  if (written.length === 0) process.exitCode = 1;
}

await main();
