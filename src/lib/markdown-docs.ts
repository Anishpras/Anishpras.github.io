import dayjs from "dayjs";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { AWARDS } from "@/features/profile/data/awards";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";
import { EXPERIENCES } from "@/features/profile/data/experiences";
import { PROJECTS } from "@/features/profile/data/projects";
import {
  getApaCitation,
  getBibtex,
  getDoiUrl,
  getResearchPdfUrl,
  RESEARCH,
} from "@/features/profile/data/research";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";
import type { ResearchPaper } from "@/features/profile/types/research";
import { ORCID_URL } from "@/lib/structured-data";
import type { Post } from "@/types/blog";

export function markdownResponse(content: string) {
  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}

export const aboutMd = () => `# About

${USER.about.trim()}

## Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Location: ${USER.address}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}
`;

export const experienceMd = () => `# Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.join(", ") || "N/A";
      return `## ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${position.description?.trim()}`;
    })
    .join("\n\n")
).join("\n\n")}
`;

export const projectsMd = () => `# Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  const link = item.link ? `\n\nProject URL: ${item.link}` : "";
  return `## ${item.title}${link}${skills}${description}`;
}).join("\n\n")}
`;

export const awardsMd = () => `# Awards

${AWARDS.map((item) => `## ${item.prize} | ${item.title}\n\n${item.description}`).join("\n\n")}
`;

export const certificationsMd = () => `# Certifications

${CERTIFICATIONS.map((item) => (item.credentialURL ? `- [${item.title}](${item.credentialURL})` : `- ${item.title}`)).join("\n")}
`;

export function researchPaperMd(paper: ResearchPaper, level = 2) {
  const h = "#".repeat(level);
  return `${h} ${paper.title}

${paper.subtitle}

- Author: Anish Prashun (independent researcher, ORCID ${ORCID_URL})
- Published: ${paper.datePublished}
- Page: ${SITE_INFO.url}/research/${paper.slug}
- Paper (PDF): ${SITE_INFO.url}${getResearchPdfUrl(paper)}
- Code and data: ${paper.repository}
- DOI: ${getDoiUrl(paper)}
- Reproduce: \`${paper.reproduce}\`

${paper.summary}

Key findings:

${paper.keyFindings.map((finding) => `- ${finding}`).join("\n")}

Cite: ${getApaCitation(paper)}

\`\`\`bibtex
${getBibtex(paper)}
\`\`\``;
}

export const researchMd = () => `# Research

Independent technical reports by Anish Prashun (ORCID ${ORCID_URL}) on AI agent reliability, security and privacy. Each is archived on Zenodo with a DOI and comes with open code, synthetic data and one command that reproduces every number in it. Papers and data: CC BY 4.0. Code: MIT.

${RESEARCH.map((paper) => researchPaperMd(paper)).join("\n\n")}
`;

export const blogIndexMd = (posts: Post[]) => `# Blog

Daily analysis by Anish Prashun of the biggest stories in AI, fintech, security and developer tools: what happened, why it matters, and what to do about it.

${posts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md) (${dayjs(item.metadata.createdAt).format("YYYY-MM-DD")}): ${item.metadata.description}`).join("\n")}
`;

export function postMd(post: Post) {
  const {
    title,
    description,
    createdAt,
    updatedAt,
    tldr,
    keyTakeaways,
    sources,
  } = post.metadata;
  const summary = [
    tldr ? `**TL;DR:** ${tldr}` : "",
    keyTakeaways?.length
      ? `Key takeaways:\n\n${keyTakeaways.map((t) => `- ${t}`).join("\n")}`
      : "",
  ]
    .filter(Boolean)
    .join("\n\n");
  const sourceList = sources?.length
    ? `\n\n## Sources\n\n${sources.map((s) => `- [${s.title}](${s.url})${s.publisher ? ` (${s.publisher})` : ""}`).join("\n")}`
    : "";

  return `# ${title}

${description}

By Anish Prashun · Published ${dayjs(createdAt).format("MMMM D, YYYY")}

${summary ? `${summary}\n\n` : ""}${(post.metadata.body ?? "").trim()}${sourceList}

Last updated on ${dayjs(updatedAt).format("MMMM D, YYYY")}
`;
}

export const llmsTxt = (posts: Post[]) => `# Anish Prashun

> Portfolio, independent research and daily tech analysis by Anish Prashun, a software engineer and engineering lead working on AI platforms, voice systems and privacy engineering. He publishes independent technical reports on AI agent reliability, security and privacy (each with a DOI, open code and a one-command reproduction) and daily, sourced analysis of the biggest stories in AI, fintech, security and developer tools.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.
- [Research](${SITE_INFO.url}/research.md): Independent technical reports with summaries, key findings, DOIs and citations.
- [Awards](${SITE_INFO.url}/awards.md): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications.md): Certifications and credentials I've earned.
- [Everything in one file](${SITE_INFO.url}/llms-full.txt): All of the above plus the latest posts in full.

## Research

Author ORCID: ${ORCID_URL}

${RESEARCH.map((paper) => `- [${paper.title}](${SITE_INFO.url}/research/${paper.slug}.md): ${paper.subtitle}. DOI: ${getDoiUrl(paper)}`).join("\n")}

## Blog

- [All posts](${SITE_INFO.url}/blog.md): Index of blog posts.
${posts
  .slice(0, 50)
  .map(
    (item) =>
      `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`
  )
  .join("\n")}
`;

export const llmsFullTxt = (posts: Post[]) =>
  [
    aboutMd(),
    experienceMd(),
    projectsMd(),
    researchMd(),
    awardsMd(),
    certificationsMd(),
    `# Latest posts\n\n${posts
      .slice(0, 30)
      .map((post) => postMd(post).replace(/^# /, "## "))
      .join("\n\n---\n\n")}`,
  ].join("\n\n---\n\n");
