// @ts-check
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

import { rehypeAddQueryParams } from "./src/lib/rehype-add-query-params.ts";

// Production sets APP_URL; the apex domain 308-redirects to www.
const SITE_URL = process.env.APP_URL || "https://www.anishprashun.me";

const UTM_PARAMS = {
  utm_source: "anishprashun.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};

export default defineConfig({
  site: SITE_URL,
  output: "static",
  // `/blog/welcome` is emitted as `blog/welcome.html`; vercel.json serves it
  // without the extension (cleanUrls) and without a trailing slash.
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [react(), mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] },
        ],
        [rehypeAddQueryParams, UTM_PARAMS],
      ],
    }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
