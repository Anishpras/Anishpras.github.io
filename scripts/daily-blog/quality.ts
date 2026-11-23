/**
 * Quality gate shared by the daily generator and `pnpm validate:posts`.
 * A post that fails is not published: five good posts beat five posts.
 */

export const CATEGORIES = [
  "ai",
  "fintech",
  "security",
  "developer-tools",
  "big-tech",
  "startups",
  "policy",
  "hardware",
] as const;

/** Phrases that make writing read as machine-generated (see voice.md). */
export const BANNED_PHRASES = [
  "delve",
  "tapestry",
  "game-changer",
  "game changer",
  "revolutionize",
  "revolutionise",
  "in today's",
  "in the ever-evolving",
  "it's important to note",
  "it is important to note",
  "navigate the complexities",
  "unlock the",
  "unleash",
  "seamless",
  "in conclusion",
  "as an ai",
  "language model",
  "buckle up",
  "let's dive",
  "dive into",
];

export const REQUIRED_HEADINGS = [
  "## What happened",
  "## Why it matters",
  "## My take",
];

export function countWords(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function findBannedPhrases(text: string) {
  const lower = text.toLowerCase();
  return BANNED_PHRASES.filter((phrase) => lower.includes(phrase));
}

export type QualityInput = {
  title: string;
  description: string;
  body: string;
  sources: { url: string }[];
  category: string;
};

/** Returns a list of problems; empty means publishable. */
export function checkPost(post: QualityInput): string[] {
  const problems: string[] = [];
  const words = countWords(post.body);

  if (words < 750) problems.push(`too short (${words} words)`);
  if (words > 1900) problems.push(`too long (${words} words)`);
  if (post.title.length < 20 || post.title.length > 90)
    problems.push(`title length ${post.title.length} (want 20–90)`);
  if (post.description.length < 90 || post.description.length > 170)
    problems.push(
      `description length ${post.description.length} (want 90–170)`
    );
  if (!(CATEGORIES as readonly string[]).includes(post.category))
    problems.push(`unknown category "${post.category}"`);

  const domains = new Set(
    post.sources.map((s) => new URL(s.url).hostname.replace(/^www\./, ""))
  );
  if (post.sources.length < 2 || domains.size < 2)
    problems.push("needs at least 2 sources from different sites");

  for (const heading of REQUIRED_HEADINGS) {
    if (!post.body.includes(heading)) problems.push(`missing "${heading}"`);
  }
  if (/^# /m.test(post.body)) problems.push("body contains an H1");

  const banned = findBannedPhrases(
    `${post.title}\n${post.description}\n${post.body}`
  );
  if (banned.length) problems.push(`AI-tell phrases: ${banned.join(", ")}`);
  if (/[\u{1F300}-\u{1FAFF}]/u.test(post.body)) problems.push("contains emoji");

  return problems;
}
