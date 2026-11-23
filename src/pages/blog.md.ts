import { getAllPosts } from "@/data/blog";
import { blogIndexMd, markdownResponse } from "@/lib/markdown-docs";

export const GET = async () =>
  markdownResponse(blogIndexMd(await getAllPosts()));
