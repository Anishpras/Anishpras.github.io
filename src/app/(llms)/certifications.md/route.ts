import { CERTIFICATIONS } from "@/features/profile/data/certifications";

const content = `# Certifications

${CERTIFICATIONS.map((item) => (item.credentialURL ? `- [${item.title}](${item.credentialURL})` : `- ${item.title}`)).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
