import { SITE_INFO } from "@/config/site";

// Everything is public. AI search/answer bots and AI training bots are listed
// explicitly so the policy is a stated choice rather than an accident:
// search bots decide whether pages can be cited; training bots help models
// learn who Anish Prashun is (the research is CC BY 4.0 anyway).
const AI_SEARCH_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
];

const AI_TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

// Content Signals (contentsignals.org): states the same policy in machine-readable form.
const SIGNAL = "Content-Signal: search=yes, ai-input=yes, ai-train=yes";

const group = (agents: string[]) =>
  `${agents.map((agent) => `User-Agent: ${agent}`).join("\n")}\n${SIGNAL}\nAllow: /`;

export const GET = () =>
  new Response(
    `${group(["*"])}

${group(AI_SEARCH_BOTS)}

${group(AI_TRAINING_BOTS)}

Sitemap: ${SITE_INFO.url}/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
