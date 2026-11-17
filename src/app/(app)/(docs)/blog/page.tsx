import dayjs from "dayjs";
import type { Metadata } from "next";

import { PostItem } from "@/components/post-item";
import { getAllPosts } from "@/data/blog";
import {
  absoluteUrl,
  getBreadcrumbJsonLd,
  PERSON_ID,
  toJsonLd,
  WEBSITE_ID,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Anish Prashun on software engineering, AI agents, hackathons and building products, from a Smart India Hackathon winner and engineering lead.",
  alternates: {
    canonical: "/blog",
    types: {
      "text/markdown": "/blog.md",
      "application/rss+xml": "/rss",
    },
  },
  openGraph: {
    url: "/blog",
  },
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": absoluteUrl("/blog"),
            url: absoluteUrl("/blog"),
            name: "Blog – Anish Prashun",
            description: metadata.description,
            inLanguage: "en",
            isPartOf: { "@id": WEBSITE_ID },
            author: { "@id": PERSON_ID },
            publisher: { "@id": PERSON_ID },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            getBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ])
          ),
        }}
      />

      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {allPosts
            .slice()
            .sort((a, b) =>
              dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
            )
            .map((post, index) => (
              <PostItem
                key={post.slug}
                post={post}
                shouldPreloadImage={index <= 4}
              />
            ))}
        </div>
      </div>

      <div className="h-4" />
    </>
  );
}
