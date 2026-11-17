import dayjs from "dayjs";
import { getTableOfContents } from "fumadocs-core/server";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { InlineTOC } from "@/components/inline-toc";
import { MDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { findNeighbour, getAllPosts, getPostBySlug } from "@/data/blog";
import { USER } from "@/data/user";
import {
  absoluteUrl,
  getBreadcrumbJsonLd,
  PERSON_ID,
  toJsonLd,
  WEBSITE_ID,
} from "@/lib/structured-data";
import type { Post } from "@/types/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { title, description, image, createdAt, updatedAt } = post.metadata;

  const postUrl = getPostUrl(post);
  const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
      types: { "text/markdown": `${postUrl}.md` },
    },
    openGraph: {
      url: postUrl,
      type: "article",
      publishedTime: dayjs(createdAt).toISOString(),
      modifiedTime: dayjs(updatedAt).toISOString(),
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

function getPageJsonLd(post: Post): WithContext<PageSchema> {
  const url = absoluteUrl(getPostUrl(post));
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.metadata.title,
    description: post.metadata.description,
    image: absoluteUrl(
      post.metadata.image ||
        `/og/simple?title=${encodeURIComponent(post.metadata.title)}`
    ),
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    datePublished: dayjs(post.metadata.createdAt).toISOString(),
    dateModified: dayjs(post.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: USER.displayName,
      url: absoluteUrl("/"),
    },
    publisher: { "@id": PERSON_ID },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);

  const allPosts = getAllPosts();
  const { previous, next } = findNeighbour(allPosts, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(getPageJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLd(
            getBreadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.metadata.title, path: getPostUrl(post) },
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
          <Link href="/blog">
            <ArrowLeftIcon />
            Blog
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          {previous && (
            <Button variant="secondary" size="icon" asChild>
              <Link href={`/blog/${previous.slug}`}>
                <ArrowLeftIcon />
                <span className="sr-only">Previous</span>
              </Link>
            </Button>
          )}

          {next && (
            <Button variant="secondary" size="icon" asChild>
              <Link href={`/blog/${next.slug}`}>
                <span className="sr-only">Next</span>
                <ArrowRightIcon />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-before screen-line-after mb-6 font-semibold">
          {post.metadata.title}
        </h1>

        <p className="lead mt-6 mb-2">{post.metadata.description}</p>

        <p className="mt-0 mb-6 font-mono text-sm text-muted-foreground">
          By <Link href="/">{USER.displayName}</Link> ·{" "}
          <time dateTime={dayjs(post.metadata.createdAt).format("YYYY-MM-DD")}>
            {dayjs(post.metadata.createdAt).format("D MMMM YYYY")}
          </time>
          {post.metadata.updatedAt &&
            !dayjs(post.metadata.updatedAt).isSame(
              dayjs(post.metadata.createdAt),
              "day"
            ) && (
              <>
                {" "}
                · Updated{" "}
                <time
                  dateTime={dayjs(post.metadata.updatedAt).format("YYYY-MM-DD")}
                >
                  {dayjs(post.metadata.updatedAt).format("D MMMM YYYY")}
                </time>
              </>
            )}
        </p>

        <InlineTOC items={toc} />

        <div>
          <MDX code={post.content} />
        </div>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}

function getPostUrl(post: Post) {
  const isComponent = post.metadata.category === "components";
  return isComponent ? `/components/${post.slug}` : `/blog/${post.slug}`;
}
