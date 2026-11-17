import type { ResearchPaper } from "../types/research";

// Independent technical reports, newest first. Each is archived on Zenodo
// (concept DOI = all versions) with code, data and a one-command reproduction
// on GitHub. Numbers below are quoted from the papers.
export const RESEARCH: ResearchPaper[] = [
  {
    slug: "minimal-findings-hidden-attribute",
    title: "Can Several Minimal Findings Reveal a Hidden Attribute?",
    subtitle:
      "An Exactly Solvable Pilot on Linked, Coarsened and Task-Output Releases, with a Release-Audit Toolkit",
    datePublished: "2026-11-17",
    doi: "10.5281/zenodo.24304575",
    repository: "https://github.com/Anishpras/linked-findings-inference",
    summary:
      "Multi-stage AI workflows often pass a few structured findings between stages instead of raw records. This study measures how much several such findings, combined, reveal about an attribute that none of them states, in a synthetic testbed where the best possible attacker is computed exactly. It ships `release_audit`, a standard-library toolkit that computes the same leakage budget and the best release designs for your own pipeline.",
    keyFindings: [
      "Linking two releases about the same household raised attacker accuracy to 60.0%, against 51.9% and 53.3% for either release alone (38.9% for always guessing the most common band).",
      "In 193 of 3,000 test households the linked releases ruled out the low reserve band with certainty, which neither release allows on its own.",
      "Coarsening the linked releases removed 1.8 points of accuracy while keeping 80% of report action items, and met its pre-set criterion in only 3 of 6 seed runs.",
      "Releasing only the report-checklist answers kept full report utility but still leaked more than either single release.",
    ],
    reproduce: "python3 run_pilot.py",
    topics: [
      "Privacy engineering",
      "Attribute inference",
      "Composition attacks",
      "Data minimisation",
      "AI workflows",
    ],
    bibKey: "prashun2026findings",
  },
  {
    slug: "safe-retry-ambiguous-tool-timeout",
    title: "Safe Retry After an Ambiguous Tool Timeout",
    subtitle:
      "A Hand-Checkable Conformance Suite for Agent Recovery with Provider Contracts and Webhook Evidence",
    datePublished: "2026-11-17",
    doi: "10.5281/zenodo.24304849",
    repository: "https://github.com/Anishpras/ambiguous-retry-recovery",
    summary:
      "When an AI agent's side-effecting tool call times out, the agent cannot tell whether the action happened. This deterministic, hand-checkable simulator scores retry policies against stale status reads and webhooks that arrive late, twice, out of order or not at all, under providers with and without idempotency-key deduplication. It ships a provider contract checklist, a decision table and commands to test your own scenarios and policies.",
    keyFindings: [
      "Across 17 scripted operations without provider deduplication, immediate retry duplicated 12 and a single status check duplicated 8; the evidence-reconciling policy duplicated 1, only where the provider broke its own guarantee.",
      "Stable idempotency keys removed every policy-caused duplicate, and rotating the key on each retry brought them all back.",
      "Webhook delay, duplication and reordering did not affect a reconciler that only adds facts per attempt, while ignoring webhooks left 41 of 120 timing cases unresolved instead of 16.",
      "Wait-then-verify is safe exactly when its wait is at least the longest pending time plus the status lag, minus the timeout.",
    ],
    reproduce: "python3 run_sim.py",
    topics: [
      "AI agents",
      "Tool use",
      "Idempotency",
      "Retries",
      "Webhooks",
      "Distributed systems",
    ],
    bibKey: "prashun2026retry",
  },
  {
    slug: "audit-logs-after-redaction",
    title: "What Evidence Do AI Agent Audit Logs Need After Redaction?",
    subtitle:
      "A Matched-Pair Pilot on Verifying Consent from Masked and Aliased Logs",
    datePublished: "2026-11-12",
    doi: "10.5281/zenodo.24163831",
    repository: "https://github.com/Anishpras/redaction-audit-pilot",
    summary:
      "AI agent audit logs often have to be redacted before a reviewer sees them, yet the reviewer must still decide whether each recorded action was authorised. This matched-pair pilot measures which evidence a redacted log must keep for that decision. It ships `redaction_audit`, a standard-library toolkit that tests your own redaction schemes against your own authorisation policy.",
    keyFindings: [
      "Uniform masking made 6 of 10 matched pairs byte-identical, and the reviewer could confirm none of the 10 authorised actions.",
      "Consistent within-run aliases restored all 20 verdicts while exposing none of the 66 planted raw values.",
      "Removing expiry or revocation evidence left 12 of 20 decisions unresolved, including every authorised action.",
      "Hashing identifiers with a fresh salt per event led a reviewer unaware of the scheme to flag all 10 authorised actions as violations, so redacted logs should declare how they were redacted.",
    ],
    reproduce: "python3 run_pilot.py",
    topics: [
      "AI agents",
      "Audit logs",
      "Redaction",
      "Pseudonymisation",
      "Privacy engineering",
    ],
    bibKey: "prashun2026redaction",
  },
];

export function getResearchBySlug(slug: string) {
  return RESEARCH.find((paper) => paper.slug === slug);
}

export function getResearchUrl(paper: ResearchPaper) {
  return `/research/${paper.slug}`;
}

export function getResearchPdfUrl(paper: ResearchPaper) {
  return `/research/${paper.slug}.pdf`;
}

export function getDoiUrl(paper: ResearchPaper) {
  return `https://doi.org/${paper.doi}`;
}

/** Title and subtitle joined as one citation title ("Title? Subtitle" or "Title: Subtitle"). */
export function getFullTitle(paper: ResearchPaper) {
  return paper.title.endsWith("?")
    ? `${paper.title} ${paper.subtitle}`
    : `${paper.title}: ${paper.subtitle}`;
}

export function getApaCitation(paper: ResearchPaper) {
  const year = paper.datePublished.slice(0, 4);
  return `Prashun, A. (${year}). ${getFullTitle(paper)} [Technical report]. Zenodo. ${getDoiUrl(paper)}`;
}

export function getBibtex(paper: ResearchPaper) {
  const year = paper.datePublished.slice(0, 4);
  const title = getFullTitle(paper);
  return [
    `@misc{${paper.bibKey},`,
    `  author    = {Prashun, Anish},`,
    `  title     = {${title}},`,
    `  year      = {${year}},`,
    `  publisher = {Zenodo},`,
    `  doi       = {${paper.doi}},`,
    `  url       = {${getDoiUrl(paper)}},`,
    `  note      = {Technical report, code and data}`,
    `}`,
  ].join("\n");
}
