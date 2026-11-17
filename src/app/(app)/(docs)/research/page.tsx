import type { Metadata } from "next";

import { ResearchItem } from "@/features/profile/components/research/research-item";
import {
  getDoiUrl,
  getFullTitle,
  getResearchUrl,
  RESEARCH,
} from "@/features/profile/data/research";
import {
  absoluteUrl,
  getBreadcrumbJsonLd,
  PERSON_ID,
  toJsonLd,
  WEBSITE_ID,
} from "@/lib/structured-data";

const title = "Research";
const description =
  "Independent technical reports by Anish Prashun on AI agent reliability, security and privacy, each with a DOI, open code and a one-command reproduction.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/research",
    types: { "text/markdown": "/research.md" },
  },
  openGraph: {
    url: "/research",
    title: `${title} – Anish Prashun`,
    description,
    images: {
      url: `/og/simple?title=${encodeURIComponent("Research")}`,
      width: 1200,
      height: 630,
      alt: "Research by Anish Prashun",
    },
  },
};

function getPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl("/research"),
    url: absoluteUrl("/research"),
    name: "Research by Anish Prashun",
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": PERSON_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: RESEARCH.map((paper, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(getResearchUrl(paper)),
        item: {
          "@type": "ScholarlyArticle",
          "@id": `${absoluteUrl(getResearchUrl(paper))}#article`,
          headline: paper.title,
          name: getFullTitle(paper),
          url: absoluteUrl(getResearchUrl(paper)),
          datePublished: paper.datePublished,
          author: { "@id": PERSON_ID },
          sameAs: getDoiUrl(paper),
        },
      })),
    },
  };
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(getPageJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            getBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Research", path: "/research" },
            ])
          ),
        }}
      />

      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Research</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Independent technical reports on AI agent reliability, security and
          privacy. Each report is archived on Zenodo with a DOI and comes with
          open code, synthetic data and a single command that reproduces every
          number in it.
        </p>
      </div>

      <div>
        {RESEARCH.map((paper) => (
          <ResearchItem
            key={paper.slug}
            paper={paper}
            defaultOpen
            className="screen-line-after border-b border-edge last:border-b-0"
          />
        ))}
      </div>

      <div className="h-4" />
    </>
  );
}
