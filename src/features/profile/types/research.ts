export type ResearchPaper = {
  /** URL slug for /research/[slug] and the PDF file name in /public/research. */
  slug: string;
  title: string;
  subtitle: string;
  /** Publication date of the archived version, YYYY-MM-DD. */
  datePublished: string;
  /** Zenodo concept DOI (always resolves to the latest version). */
  doi: string;
  repository: string;
  /** One-paragraph plain-language summary. */
  summary: string;
  keyFindings: string[];
  /** One command that reproduces every number in the paper. */
  reproduce: string;
  topics: string[];
  /** Short id for the BibTeX key. */
  bibKey: string;
};
