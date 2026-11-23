import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";
import { categoryLabel } from "@/lib/post-utils";
import { absoluteUrl } from "@/lib/structured-data";

const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** RSS 2.0 with RFC-822 dates and an atom:link self reference. */
export async function GET() {
  const posts = (await getAllPosts()).slice(0, 50);
  const lastBuild = posts[0]?.metadata.updatedAt ?? new Date("2025-08-03");

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `    <item>
      <title>${escape(post.metadata.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(post.metadata.description)}</description>
      <category>${escape(categoryLabel(post.metadata.category))}</category>
      <dc:creator>Anish Prashun</dc:creator>
      <pubDate>${post.metadata.createdAt.toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog | ${escape(SITE_INFO.name)}</title>
    <link>${absoluteUrl("/blog")}</link>
    <atom:link href="${absoluteUrl("/rss")}" rel="self" type="application/rss+xml" />
    <description>Daily analysis of the biggest stories in AI, fintech, security and developer tools by Anish Prashun.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
