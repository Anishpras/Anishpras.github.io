import { getAllPosts } from "@/data/blog";
import { CATEGORY_LABELS } from "@/lib/post-utils";
import {
  absoluteUrl,
  getBreadcrumbJsonLd,
  PERSON_ID,
  WEBSITE_ID,
} from "@/lib/structured-data";
import type { Post } from "@/types/blog";

export const PAGE_SIZE = 24;

export const BLOG_DESCRIPTION =
  "Daily analysis of the biggest stories in AI, fintech, security and developer tools by Anish Prashun: what happened, why it matters, and what to do about it.";

/** Categories in display order, only those that have posts. */
export async function getActiveCategories() {
  const posts = await getAllPosts();
  const used = new Set(posts.map((post) => post.metadata.category ?? ""));
  return Object.keys(CATEGORY_LABELS).filter((category) => used.has(category));
}

export function pageCount(total: number) {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

export function slicePage(posts: Post[], page: number) {
  return posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
}

export function getBlogJsonLd(
  posts: Post[],
  path: string,
  name: string,
  description: string
) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": absoluteUrl(path),
      url: absoluteUrl(path),
      name,
      description,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
        headline: post.metadata.title,
        url: absoluteUrl(`/blog/${post.slug}`),
        datePublished: post.metadata.createdAt.toISOString(),
      })),
    },
    getBreadcrumbJsonLd(
      path === "/blog"
        ? [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]
        : [
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name, path },
          ]
    ),
  ];
}
