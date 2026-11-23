import { getAllPosts } from "@/data/blog";
import { llmsTxt, markdownResponse } from "@/lib/markdown-docs";

export const GET = async () => markdownResponse(llmsTxt(await getAllPosts()));
