# [anishprashun.me](https://anishprashun.me)

My portfolio, independent research, and a daily tech-analysis blog.

Check out the live site: [anishprashun.me](https://anishprashun.me)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://assets.anishprashun.me/images/screenshot-desktop-dark.webp">
  <source media="(prefers-color-scheme: light)" srcset="https://assets.anishprashun.me/images/screenshot-desktop-light.webp">
  <img src="https://assets.anishprashun.me/images/screenshot-desktop-light.webp" alt="Screenshot">
</picture>

## Overview

### Tech Stack

- Astro 7 (static HTML, React islands only where interactive)
- Tailwind CSS v4
- shadcn/ui + Radix (islands)

### Featured

- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA
- Build-time OG images (satori + resvg)

### Blog

- MDX & Markdown support
- Access markdown by adding `.md` to URLs, e.g. `/blog/welcome.md`
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews

### Daily analysis pipeline

Every day at 12:30 UTC, `.github/workflows/daily-blog.yml` runs `scripts/daily-blog/run.ts`, which:

1. Uses Claude with web search to pick the five biggest tech stories of the last 36 hours (AI, fintech, security, big tech, dev tools, chips, policy).
2. Opens and verifies the sources, then writes each post in my voice, following `scripts/daily-blog/voice.md`.
3. Extracts metadata (title, description, TL;DR, key takeaways, tags, sources) with structured outputs.
4. Rejects weak posts with the quality gate in `scripts/daily-blog/quality.ts`, builds the site, and pushes.

Setup: add an `ANTHROPIC_API_KEY` repository secret. Run it by hand from the Actions tab ("Daily blog" → Run workflow) or locally with `ANTHROPIC_API_KEY=… pnpm blog:daily -- --dry-run`.

To change how posts sound, edit `scripts/daily-blog/voice.md`.

## Development

```bash
nvm use            # Node 24
pnpm install
pnpm dev           # http://localhost:1408
pnpm build && pnpm preview
pnpm check-types && pnpm lint && pnpm validate:posts
```

## License

Licensed under the [MIT license](./LICENSE).

> You're free to use my code! Just make sure to remove all my personal information before publishing your website. It's awesome to see my code being useful to someone!

## Star History

[![Star History](https://starchart.cc/anishpras/anishprashun.me.svg?variant=adaptive)](https://starchart.cc/anishpras/anishprashun.me)

## Acknowledgments

- [React](https://react.dev)
- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Motion](https://motion.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [Lucide](https://lucide.dev)
- [Fumadocs](https://fumadocs.dev)
- And many other open-source libraries used in `package.json`

## GitAds Sponsored

[![Sponsored by GitAds](https://gitads.dev/v1/ad-serve?source=anishpras/anishprashun.me@github)](https://gitads.dev/v1/ad-track?source=anishpras/anishprashun.me@github)

<!-- GitAds-Verify: QICCAB4PFWV9MHUGPGPN5B2I8SAXLAOK -->

# pixelated-portfolio
