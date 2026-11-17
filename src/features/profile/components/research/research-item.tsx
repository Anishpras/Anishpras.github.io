import dayjs from "dayjs";
import {
  ArrowRightIcon,
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  FileTextIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";

import {
  getDoiUrl,
  getResearchPdfUrl,
  getResearchUrl,
} from "../../data/research";
import type { ResearchPaper } from "../../types/research";

export function ResearchItem({
  className,
  paper,
  defaultOpen,
}: {
  className?: string;
  paper: ResearchPaper;
  defaultOpen?: boolean;
}) {
  return (
    <Collapsible defaultOpen={defaultOpen} asChild>
      <article className={className}>
        <div className="flex items-center">
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center text-muted-foreground"
            aria-hidden="true"
          >
            <FileTextIcon className="size-5" />
          </div>

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="group/research flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {paper.title}
                </h3>

                <dl className="flex flex-wrap items-center gap-x-1.5 text-sm text-muted-foreground">
                  <dt className="sr-only">Type</dt>
                  <dd>Technical report</dd>
                  <dd aria-hidden>·</dd>
                  <dt className="sr-only">Published</dt>
                  <dd>
                    <time dateTime={paper.datePublished}>
                      {dayjs(paper.datePublished).format("MMM YYYY")}
                    </time>
                  </dd>
                </dl>
              </div>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <ChevronsDownUpIcon className="hidden group-data-[state=open]/research:block" />
                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/research:block" />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="space-y-4 border-t border-dashed border-edge p-4">
            <p className="text-sm text-pretty text-muted-foreground">
              {paper.subtitle}
            </p>

            <Prose>
              <Markdown>{paper.summary}</Markdown>
            </Prose>

            <ul className="flex flex-wrap gap-1.5">
              {paper.topics.map((topic) => (
                <li key={topic} className="flex">
                  <Tag>{topic}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>

        <ResearchLinks
          paper={paper}
          className="border-t border-dashed border-edge"
        />
      </article>
    </Collapsible>
  );
}

/** Plain, always-rendered links so crawlers and agents can follow them. */
export function ResearchLinks({
  paper,
  className,
}: {
  paper: ResearchPaper;
  className?: string;
}) {
  const linkClass = "underline-offset-4 hover:text-foreground hover:underline";

  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 py-2 pr-4 pl-14 font-mono text-sm text-muted-foreground ${className ?? ""}`}
    >
      <Link
        href={getResearchUrl(paper)}
        className={`${linkClass} inline-flex items-center gap-1 text-foreground`}
      >
        Summary
        <ArrowRightIcon className="size-3.5" aria-hidden />
        <span className="sr-only">: {paper.title}</span>
      </Link>
      <a
        href={getResearchPdfUrl(paper)}
        className={linkClass}
        target="_blank"
        rel="noopener"
      >
        PDF<span className="sr-only"> of {paper.title}</span>
      </a>
      <a
        href={paper.repository}
        className={linkClass}
        target="_blank"
        rel="noopener"
      >
        Code<span className="sr-only"> for {paper.title}</span>
      </a>
      <a
        href={getDoiUrl(paper)}
        className={linkClass}
        target="_blank"
        rel="noopener"
      >
        DOI {paper.doi}
      </a>
    </div>
  );
}
