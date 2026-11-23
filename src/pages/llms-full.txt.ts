import { getAllPosts } from "@/data/blog";
import { llmsFullTxt, markdownResponse } from "@/lib/markdown-docs";

export const GET = async () =>
  markdownResponse(llmsFullTxt(await getAllPosts()));
