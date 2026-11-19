import dayjs from "dayjs";
import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/data/user";
import {
  getApaCitation,
  getBibtex,
  getDoiUrl,
  getFullTitle,
  getResearchBySlug,
  getResearchPdfUrl,
  getResearchUrl,
  RESEARCH,
} from "@/features/profile/data/research";
import type { ResearchPaper } from "@/features/profile/types/research";
import {
  absoluteUrl,
  getBreadcrumbJsonLd,
  ORCID_URL,
  PERSON_ID,
  toJsonLd,
  WEBSITE_ID,
} from "@/lib/structured-data";

const PAPER_LICENSE = "https://creativecommons.org/licenses/by/4.0/";
const CODE_LICENSE = "https://opensource.org/licenses/MIT";

export function generateStaticParams() {
  return RESEARCH.map((paper) => ({ slug: paper.slug }));
}

export const dynamicParams = false;

function getOgImage(paper: ResearchPaper) {
  return `/og/simple?title=${encodeURIComponent(paper.title)}`;
}

function getDescription(paper: ResearchPaper) {
  return `${paper.subtitle}. Technical report by Anish Prashun with open code and data.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const paper = getResearchBySlug((await params).slug);
  if (!paper) {
    return notFound();
  }

  const url = getResearchUrl(paper);
  const description = getDescription(paper);
  const ogImage = getOgImage(paper);

  return {
    title: paper.title,
    description,
    keywords: paper.topics,
    alternates: {
      canonical: url,
      types: { "text/markdown": "/research.md" },
    },
    openGraph: {
      url,
      type: "article",
      title: paper.title,
      description,
      publishedTime: dayjs(paper.datePublished).toISOString(),
      authors: [USER.displayName],
      tags: paper.topics,
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: paper.title,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: paper.title,
      description,
      images: [ogImage],
    },
    // Google Scholar reads these Highwire Press tags, not JSON-LD.
    other: {
      citation_title: getFullTitle(paper),
      citation_author: `${USER.lastName}, ${USER.firstName}`,
      citation_author_orcid: ORCID_URL,
      citation_publication_date: dayjs(paper.datePublished).format(
        "YYYY/MM/DD"
      ),
      citation_doi: paper.doi,
      citation_pdf_url: absoluteUrl(getResearchPdfUrl(paper)),
      citation_abstract_html_url: absoluteUrl(url),
      citation_language: "en",
      citation_keywords: paper.topics.join("; "),
    },
  };
}

function getPageJsonLd(paper: ResearchPaper) {
  const url = absoluteUrl(getResearchUrl(paper));
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${url}#article`,
    headline: paper.title,
    name: getFullTitle(paper),
    alternativeHeadline: paper.subtitle,
    description: getDescription(paper),
    abstract: paper.summary.replace(/`/g, ""),
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(getOgImage(paper)),
    datePublished: paper.datePublished,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: USER.displayName,
      url: absoluteUrl("/"),
      sameAs: ORCID_URL,
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "DOI",
      value: paper.doi,
      url: getDoiUrl(paper),
    },
    sameAs: getDoiUrl(paper),
    license: PAPER_LICENSE,
    keywords: paper.topics.join(", "),
    encoding: {
      "@type": "MediaObject",
      contentUrl: absoluteUrl(getResearchPdfUrl(paper)),
      encodingFormat: "application/pdf",
    },
    isBasedOn: {
      "@type": "SoftwareSourceCode",
      codeRepository: paper.repository,
      programmingLanguage: "Python",
      license: CODE_LICENSE,
      author: { "@id": PERSON_ID },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const paper = getResearchBySlug((await params).slug);
  if (!paper) {
    notFound();
  }

  const others = RESEARCH.filter((item) => item.slug !== paper.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(getPageJsonLd(paper)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            getBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Research", path: "/research" },
              { name: paper.title, path: getResearchUrl(paper) },
            ])
          ),
        }}
      />

      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="px-0 font-mono text-muted-foreground"
          variant="link"
          asChild
        >
          <Link href="/research">
            <ArrowLeftIcon />
            Research
          </Link>
        </Button>
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-before screen-line-after mb-6 font-semibold">
          {paper.title}
        </h1>

        <p className="lead mt-6 mb-2">{paper.subtitle}</p>

        <p className="mt-0 font-mono text-sm text-muted-foreground">
          <Link href="/">{USER.displayName}</Link> (ORCID{" "}
          <a href={ORCID_URL} target="_blank" rel="noopener">
            {USER.orcid}
          </a>
          ) · Independent researcher · Technical report ·{" "}
          <time dateTime={paper.datePublished}>
            {dayjs(paper.datePublished).format("D MMMM YYYY")}
          </time>
        </p>

        <p className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
          <a href={getResearchPdfUrl(paper)} target="_blank" rel="noopener">
            Read the paper (PDF)
          </a>
          <a href={paper.repository} target="_blank" rel="noopener">
            Code and data (GitHub)
          </a>
          <a href={getDoiUrl(paper)} target="_blank" rel="noopener">
            DOI {paper.doi}
          </a>
        </p>

        <h2>Summary</h2>
        <Markdown>{paper.summary}</Markdown>

        <h2>Key findings</h2>
        <ul>
          {paper.keyFindings.map((finding) => (
            <li key={finding}>{finding}</li>
          ))}
        </ul>

        <h2>Reproduce it</h2>
        <p>
          Python 3 standard library only, synthetic data, no network access.
          Clone the <a href={paper.repository}>repository</a> and run:
        </p>
        <pre className="not-prose my-4 overflow-x-auto rounded-xl border border-edge bg-zinc-950 p-4 font-mono text-sm leading-relaxed text-zinc-50 dark:bg-zinc-900">
          <code>{paper.reproduce}</code>
        </pre>

        <h2>Cite</h2>
        <p>{getApaCitation(paper)}</p>
        <pre className="not-prose my-4 overflow-x-auto rounded-xl border border-edge bg-zinc-950 p-4 font-mono text-sm leading-relaxed text-zinc-50 dark:bg-zinc-900">
          <code>{getBibtex(paper)}</code>
        </pre>

        <p className="text-sm text-muted-foreground">
          Paper and data: CC BY 4.0. Code: MIT. All data in the study is
          synthetic.
        </p>

        <ul className="not-prose flex flex-wrap gap-1.5 p-0">
          {paper.topics.map((topic) => (
            <li key={topic} className="flex">
              <Tag>{topic}</Tag>
            </li>
          ))}
        </ul>

        <h2>More research</h2>
        <ul>
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={getResearchUrl(item)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}
