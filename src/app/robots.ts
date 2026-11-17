import type { MetadataRoute } from "next";

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

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_SEARCH_BOTS, allow: "/" },
      { userAgent: AI_TRAINING_BOTS, allow: "/" },
    ],
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
  };
}
