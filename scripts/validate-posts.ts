/**
 * Checks every daily-analysis post (posts with `sources:`) against the same
 * quality gate the generator uses, plus duplicate titles across the blog.
 * Frontmatter schema itself is validated by `astro build` (src/content.config.ts).
 *
 * Usage: node scripts/validate-posts.ts
 */
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { checkPost } from "./daily-blog/quality.ts";

const BLOG_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "content",
  "blog"
);

const unquote = (value = "") => {
  const v = value.trim();
  return v.startsWith('"') ? (JSON.parse(v) as string) : v;
};

let failures = 0;
const titles = new Map<string, string>();

for (const file of readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f))) {
  const source = readFileSync(join(BLOG_DIR, file), "utf8");
  const [, frontmatter = "", body = ""] =
    source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) ?? [];
  const field = (name: string) =>
    unquote(frontmatter.match(new RegExp(`^${name}:\\s*(.+)$`, "m"))?.[1]);

  const title = field("title");
  if (titles.has(title.toLowerCase())) {
    console.error(
      `✗ ${file}: duplicate title of ${titles.get(title.toLowerCase())}`
    );
    failures++;
  }
  titles.set(title.toLowerCase(), file);

  if (!/^sources:/m.test(frontmatter)) continue; // hand-written posts

  const sources = [...frontmatter.matchAll(/^\s+url:\s*(.+)$/gm)].map((m) => ({
    url: unquote(m[1]),
  }));
  const problems = checkPost({
    title,
    description: field("description"),
    category: field("category"),
    sources,
    body,
  });
  if (problems.length) {
    console.error(`✗ ${file}: ${problems.join("; ")}`);
    failures++;
  }
}

if (failures) {
  console.error(`\n${failures} post(s) failed validation.`);
  process.exit(1);
}
console.log("All posts passed validation.");
