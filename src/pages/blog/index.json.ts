import { getPostLinks } from "@/data/blog";

/** Lightweight post index for the command menu (fetched on first open). */
export const GET = async () =>
  new Response(JSON.stringify(await getPostLinks()), {
    headers: { "Content-Type": "application/json" },
  });
