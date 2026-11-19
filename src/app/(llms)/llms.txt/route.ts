import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";
import { getDoiUrl, RESEARCH } from "@/features/profile/data/research";
import { ORCID_URL } from "@/lib/structured-data";

const allPosts = getAllPosts();

const content = `# Anish Prashun

> Portfolio, independent research and blog of Anish Prashun, a software engineer and engineering lead working on AI platforms, voice systems and privacy engineering. He publishes independent technical reports on AI agent reliability, security and privacy, each with a DOI, open code and a one-command reproduction.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Research](${SITE_INFO.url}/research.md): Independent technical reports with summaries, key findings, DOIs and citations.
- [Awards](${SITE_INFO.url}/awards.md): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.

## Research

Author ORCID: ${ORCID_URL}

${RESEARCH.map((paper) => `- [${paper.title}](${SITE_INFO.url}/research/${paper.slug}): ${paper.subtitle}. DOI: ${getDoiUrl(paper)}`).join("\n")}

## Blog

- [All posts](${SITE_INFO.url}/blog.md): Index of blog posts.
${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
