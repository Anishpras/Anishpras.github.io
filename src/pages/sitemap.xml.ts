import { getAllPosts } from "@/data/blog";
import { RESEARCH } from "@/features/profile/data/research";
import { getActiveCategories, pageCount } from "@/lib/blog-pages";
import { getOgImageUrl } from "@/lib/post-utils";
import { absoluteUrl } from "@/lib/structured-data";

type Entry = { path: string; lastmod: string; image?: string };

const day = (d: Date | string) => new Date(d).toISOString().slice(0, 10);
const latest = (dates: string[]) => dates.slice().sort().at(-1) ?? "2025-08-03";

/** Real content dates rather than the build time, so lastmod only moves when a page changed. */
export async function GET() {
  const posts = (await getAllPosts()).filter((post) => !post.metadata.noindex);
  const postDates = posts.map((post) => day(post.metadata.updatedAt));
  const researchDates = RESEARCH.map((paper) => paper.datePublished);
  const categories = await getActiveCategories();

  const entries: Entry[] = [
    {
      path: "/",
      lastmod: latest([...postDates, ...researchDates]),
      image: "/anish-og-image.png",
    },
    { path: "/research", lastmod: latest(researchDates) },
    { path: "/blog", lastmod: latest(postDates) },
    ...Array.from({ length: pageCount(posts.length) - 1 }, (_, i) => ({
      path: `/blog/page/${i + 2}`,
      lastmod: latest(postDates),
    })),
    ...categories.map((category) => ({
      path: `/blog/topic/${category}`,
      lastmod: latest(
        posts
          .filter((post) => post.metadata.category === category)
          .map((post) => day(post.metadata.updatedAt))
      ),
    })),
    ...RESEARCH.map((paper) => ({
      path: `/research/${paper.slug}`,
      lastmod: paper.datePublished,
      image: `/og/research-${paper.slug}.png`,
    })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      lastmod: day(post.metadata.updatedAt),
      image: post.metadata.image || getOgImageUrl(post.slug),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (entry) => `  <url>
    <loc>${absoluteUrl(entry.path === "/" ? "" : entry.path) || absoluteUrl("/")}</loc>
    <lastmod>${entry.lastmod}</lastmod>${entry.image ? `\n    <image:image><image:loc>${absoluteUrl(entry.image)}</image:loc></image:image>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
