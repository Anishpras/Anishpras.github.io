import type { APIRoute, GetStaticPaths } from "astro";

import { getAllPosts } from "@/data/blog";
import { markdownResponse, postMd } from "@/lib/markdown-docs";

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) =>
  markdownResponse(postMd(props.post));
