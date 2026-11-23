# Daily posts runbook

Run once a day from a Claude Code session in this repo. Goal: five verified, opinionated posts, published to `main`.

## 1. Check what's already covered

- Skip if today's posts already exist: `git log --oneline -5` shows `Daily analysis: <today>`.
- List the last 10 days of titles in `src/content/blog/` so no story is repeated.

## 2. Pick five stories

Search the news from the last 36 hours. Rank by real-world impact (money, users, regulation, what builders must change), not social-media noise.

- Spread: at most 2 AI stories; cover fintech/payments, security & privacy, big tech, developer tools, chips/hardware, startups/funding or policy where there's genuinely big news.
- Each story must be confirmable by at least two independent reputable sources (company or regulator releases, Reuters, Bloomberg, FT, WSJ, CNBC, AP, The Verge, TechCrunch, BleepingComputer, and similar). Roundup and aggregator sites don't count.

## 3. Write (one writer per story, in parallel)

Each writer:

1. Verifies the story from the sources. If the core can't be confirmed by two reputable sources, it drops the story rather than guess. Unconfirmed sub-claims are left out.
2. Follows `scripts/daily-blog/voice.md` exactly: first-person Anish, only his listed facts, the six H2 sections, 900–1,400 words, no H1, no sources section in the body.
3. Saves `src/content/blog/<kebab-slug>.md` with this frontmatter:

```yaml
---
title: "45–75 char specific headline"
description: "120–160 chars"
category: ai | fintech | security | developer-tools | big-tech | startups | policy | hardware
tags:
  - "lowercase tag"
createdAt: <today>T12:30:00.000Z # stagger by a minute per post
updatedAt: <today>T12:30:00.000Z
tldr: "1–2 sentences, under 280 chars"
keyTakeaways:
  - "3–5 concrete takeaways"
sources:
  - title: "Exact article title"
    url: "https://..."
    publisher: "Publisher"
---
```

Sources: 2–6, all actually opened, from at least 2 different sites, most authoritative first.

## 4. Review and publish

1. `node scripts/validate-posts.ts` must pass (word count, sources, required sections, banned phrases).
2. Read any post that names private individuals or allegations: every claim must be attributed, with denials included.
3. `pnpm build` must succeed.
4. Commit `Daily analysis: <YYYY-MM-DD>` with one line per post, push to `main`, and confirm the Vercel deploys succeed and the new URLs return 200.
