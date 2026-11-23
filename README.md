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

### Daily analysis posts

Five posts a day on the biggest stories in AI, fintech, security, big tech, dev tools, chips and policy. They're researched and written in a local Claude Code session on my machine (no CI job), following:

- `scripts/daily-blog/RUNBOOK.md`: the daily steps
- `scripts/daily-blog/voice.md`: voice, point of view, structure and hard rules
- `scripts/daily-blog/quality.ts`: the quality gate (`pnpm validate:posts`)

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
