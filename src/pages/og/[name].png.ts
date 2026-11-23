import type { APIRoute, GetStaticPaths } from "astro";

import { getAllPosts } from "@/data/blog";
import { RESEARCH } from "@/features/profile/data/research";
import { getActiveCategories } from "@/lib/blog-pages";
import { renderOgImage } from "@/lib/og";
import { categoryLabel } from "@/lib/post-utils";

/** Pre-rendered at build time: no runtime function, cacheable forever. */
export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  const categories = await getActiveCategories();

  return [
    {
      params: { name: "blog" },
      props: { title: "Tech, decoded daily", eyebrow: "Blog" },
    },
    {
      params: { name: "research" },
      props: {
        title: "Research on AI agent reliability, security and privacy",
        eyebrow: "Research",
      },
    },
    ...RESEARCH.map((paper) => ({
      params: { name: `research-${paper.slug}` },
      props: { title: paper.title, eyebrow: "Research" },
    })),
    ...categories.map((category) => ({
      params: { name: `topic-${category}` },
      props: {
        title: `${categoryLabel(category)}: news & analysis`,
        eyebrow: "Blog",
      },
    })),
    ...posts.map((post) => ({
      params: { name: post.slug },
      props: {
        title: post.metadata.title,
        eyebrow: categoryLabel(post.metadata.category),
      },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) =>
  new Response(
    new Uint8Array(
      await renderOgImage(props as { title: string; eyebrow?: string })
    ),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
