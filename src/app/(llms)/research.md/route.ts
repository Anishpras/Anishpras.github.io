import { SITE_INFO } from "@/config/site";
import {
  getApaCitation,
  getBibtex,
  getDoiUrl,
  getResearchPdfUrl,
  RESEARCH,
} from "@/features/profile/data/research";

const content = `# Research

Independent technical reports by Anish Prashun on AI agent reliability, security and privacy. Each is archived on Zenodo with a DOI and comes with open code, synthetic data and one command that reproduces every number in it. Papers and data: CC BY 4.0. Code: MIT.

${RESEARCH.map(
  (paper) => `## ${paper.title}

${paper.subtitle}

- Author: Anish Prashun (independent researcher)
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
\`\`\``
).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
