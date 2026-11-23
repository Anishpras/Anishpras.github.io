import { getCollection } from "astro:content";

import type { Post, PostLink } from "@/types/blog";

export * from "@/lib/post-utils";

let cache: Post[] | undefined;

/** All posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  if (cache) return cache;

  const entries = await getCollection("blog");
  cache = entries
    .map<Post>((entry) => ({
      slug: entry.id,
      metadata: { ...entry.data, body: entry.body },
    }))
    .sort(
      (a, b) =>
        b.metadata.createdAt.getTime() - a.metadata.createdAt.getTime() ||
        a.slug.localeCompare(b.slug)
    );
  return cache;
}

export async function getPostLinks(): Promise<PostLink[]> {
  return (await getAllPosts()).map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    category: post.metadata.category,
  }));
}

export function findNeighbour(posts: Post[], slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  return {
    previous: index > 0 ? posts[index - 1] : null,
    next: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}

/** Posts sharing the most tags/category with `post`, for "Related reading". */
export function getRelatedPosts(posts: Post[], post: Post, limit = 4) {
  const tags = new Set(post.metadata.tags ?? []);
  return posts
    .filter((other) => other.slug !== post.slug)
    .map((other) => {
      let score = 0;
      if (other.metadata.category === post.metadata.category) score += 2;
      for (const tag of other.metadata.tags ?? [])
        if (tags.has(tag)) score += 3;
      return { other, score };
    })
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.other.metadata.createdAt.getTime() -
          a.other.metadata.createdAt.getTime()
    )
    .slice(0, limit)
    .map(({ other }) => other);
}

export function getPostUrl(post: Post) {
  return `/blog/${post.slug}`;
}
