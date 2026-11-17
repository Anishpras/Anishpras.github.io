import dayjs from "dayjs";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";

const allPosts = getAllPosts()
  .slice()
  .sort((a, b) =>
    dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
  );

const content = `# Blog

Articles by Anish Prashun on software engineering, AI agents, hackathons and building products.

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md) (${dayjs(item.metadata.createdAt).format("YYYY-MM-DD")}): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
