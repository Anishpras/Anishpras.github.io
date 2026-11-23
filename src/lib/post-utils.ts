// Pure helpers, safe to import from hydrated islands (no astro:content).

export const CATEGORY_LABELS: Record<string, string> = {
  ai: "AI",
  fintech: "Fintech",
  security: "Security & Privacy",
  "developer-tools": "Developer Tools",
  "big-tech": "Big Tech",
  startups: "Startups & Funding",
  policy: "Policy & Regulation",
  hardware: "Chips & Hardware",
  hackathon: "Hackathons",
};

export function categoryLabel(category?: string) {
  if (!category) return "Notes";
  return CATEGORY_LABELS[category] ?? category;
}

export function getOgImageUrl(slug: string) {
  return `/og/${slug}.png`;
}

export function wordCount(text = "") {
  return text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readingMinutes(text = "") {
  return Math.max(1, Math.round(wordCount(text) / 230));
}

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  ai: "Daily analysis of the biggest AI stories (models, agents, infrastructure and the business of AI) from an engineer who ships AI platforms in production.",
  fintech:
    "Fintech news decoded: payments, banking infrastructure, stablecoins and regulation, and what they mean for builders and users.",
  security:
    "Security and privacy stories that matter: breaches, vulnerabilities, encryption and data protection, explained with practical takeaways.",
  "developer-tools":
    "What's changing in the tools developers use every day, from frameworks and cloud platforms to AI coding assistants.",
  "big-tech":
    "Moves by Apple, Google, Microsoft, Meta, Amazon and Nvidia, and what they mean for engineers, startups and users.",
  startups:
    "Funding rounds, acquisitions and launches worth paying attention to, with a builder's read on why they matter.",
  policy:
    "Tech policy and regulation (AI rules, antitrust and data protection) translated into plain English.",
  hardware:
    "Chips, GPUs, devices and the compute supply chain that shapes what software can do next.",
  hackathon: "Hackathon advice from a Smart India Hackathon winner.",
};
