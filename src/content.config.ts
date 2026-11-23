import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(10).max(110),
    description: z.string().min(50).max(200),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    new: z.boolean().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    tldr: z.string().optional(),
    keyTakeaways: z.array(z.string()).optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.url(),
          publisher: z.string().optional(),
        })
      )
      .optional(),
    /** Keep a post out of search results (still reachable by URL). */
    noindex: z.boolean().optional(),
  }),
});

export const collections = { blog };
