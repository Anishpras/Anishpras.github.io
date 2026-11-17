import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";
import { RESEARCH } from "@/features/profile/data/research";

function latest(dates: string[]) {
  return dates.slice().sort().at(-1) ?? dayjs().format("YYYY-MM-DD");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPosts();

  const postDates = allPosts.map((post) =>
    dayjs(post.metadata.updatedAt).format("YYYY-MM-DD")
  );
  const researchDates = RESEARCH.map((paper) => paper.datePublished);

  const posts = allPosts.map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const research = RESEARCH.map((paper) => ({
    url: `${SITE_INFO.url}/research/${paper.slug}`,
    lastModified: dayjs(paper.datePublished).toISOString(),
  }));

  // Real content dates rather than the build time, so lastmod only moves
  // when something on the page changed.
  const routes = [
    { route: "", date: latest([...postDates, ...researchDates]) },
    { route: "/research", date: latest(researchDates) },
    { route: "/blog", date: latest(postDates) },
  ].map(({ route, date }) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs(date).toISOString(),
  }));

  return [...routes, ...research, ...posts];
}
