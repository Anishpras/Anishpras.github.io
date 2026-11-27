---
title: "ChatGPT's Shared Usage Meter Turns Your Seat Into a Compute Budget"
description: "OpenAI is putting ChatGPT Chat, Work and Codex on one token-based allowance from December. What changes, why limits stay opaque, and how teams should plan."
category: ai
tags:
  - "openai"
  - "chatgpt"
  - "codex"
  - "usage limits"
  - "ai pricing"
createdAt: 2026-11-27T12:33:00.000Z
updatedAt: 2026-11-27T12:33:00.000Z
tldr: "OpenAI is merging ChatGPT's Chat and Work modes and putting Chat, Work and Codex on one token-based allowance, starting with some Pro users and expanding in December. A flat subscription now behaves like a metered compute budget with an unpublished size."
keyTakeaways:
  - "OpenAI says Plus, Pro and Business usage will be shared across ChatGPT and Codex, measured in tokens, with the broad change starting in December."
  - "Instant chat stays unlimited and does not draw from the shared allowance. Heavier models and longer tasks use more of it."
  - "OpenAI expects most users won't hit resets more often, but told TechCrunch a small fraction of the heaviest users may hit limits sooner."
  - "OpenAI publishes no token figure for the pool, so the only reliable number is the one you measure yourself in Settings, Usage."
  - "Teams should track who burns allowance, decide the fallback when a seat runs dry, and compare seat cost with API or credit pricing for heavy workloads."
sources:
  - title: "Understanding ChatGPT and Codex usage limits"
    url: "https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits"
    publisher: "OpenAI"
  - title: "Managing usage with GPT-6 Astra in Work and Codex"
    url: "https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex"
    publisher: "OpenAI"
  - title: "ChatGPT Work: usage and cost"
    url: "https://learn.chatgpt.com/docs/enterprise/chatgpt-work-usage-and-cost"
    publisher: "OpenAI"
  - title: "OpenAI says heavy ChatGPT users may hit limits sooner as it merges Chat and Work"
    url: "https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/"
    publisher: "TechCrunch"
  - title: "OpenAI says it's doubling Pro usage limits and bringing Work features to Chat"
    url: "https://bleepingcomputer.com/news/artificial-intelligence/openai-says-its-doubling-pro-usage-limits-and-bringing-work-features-to-chat"
    publisher: "BleepingComputer"
---

OpenAI is folding ChatGPT's Chat and Work modes into one experience, and Chat, Work and Codex will all draw from a single usage allowance measured in tokens. It started with a small group of Pro subscribers, and OpenAI's help centre says the broad change begins in December. The practical effect is that a ChatGPT seat now behaves like a prepaid compute budget, and OpenAI doesn't tell you how big that budget is.

## What happened

On 25 November 2026 TechCrunch reported that OpenAI had begun merging Chat and Work for a small group of Pro subscribers, as announced on X by product lead Thibault Sottiaux. Under the merged setup, Chat and Work share one usage meter. An OpenAI spokesperson told TechCrunch that most users should not see more frequent resets, but that a small fraction of the heaviest users may hit their limits sooner. Conversations on the Instant model stay unlimited and don't count against the allowance.

OpenAI's own help article, "Understanding ChatGPT and Codex usage limits", sets out the wider change. For Plus, Pro and Business plans, usage "will be shared across ChatGPT and Codex" as Work's agentic features move into the main ChatGPT experience. It starts in December, and some users may see it earlier so OpenAI can collect feedback. Usage is counted in tokens, and heavier models and more complex tasks use more of it. Instant chat doesn't count. You can see combined remaining usage and reset times under Settings, Usage. When you run out, you can wait for the reset, upgrade, or buy credits for eligible features.

This was flagged weeks ago. BleepingComputer reported on 1 November that an OpenAI email to Pro users said: "Your use of ChatGPT and Codex will draw from the same allowance." The same report says Codex stays a separate app experience, and that OpenAI doubled Work and Codex allowances for its Pro 100, Pro 200 and Pro 500 plans from 29 October.

TechCrunch also notes pushback from subscribers on X, Reddit, GitHub and OpenAI's community forum. The main complaint is less access to advanced reasoning for the same subscription price.

## Why it matters

Before this, a heavy coding week in Codex and a heavy research week in Chat were separate problems. Now they compete. A developer who runs long Codex tasks in the morning may find their Chat reasoning budget gone by the afternoon, and the reverse.

The people who lose are the ones getting the most out of a flat fee: power users running multi-step agent tasks with the strongest models. The people who barely notice are those who mostly chat, especially if Instant covers their needs. That split matches what the spokesperson told TechCrunch.

For companies, the effect is on planning. A seat used to be a fixed line item with a fuzzy ceiling. Now it is a fixed line item with a shared, variable ceiling, and overflow is handled through credits or upgrades. That is a usage-based product sold under a subscription name.

## How token-based allowances work

A **token** is a small chunk of text, often part of a word, that the model reads or writes. Every request costs input tokens (your prompt, files and history) and output tokens (the answer, plus any hidden reasoning the model does first). Agentic tasks loop: they plan, call tools, read results and try again, so a single "do this" can burn many times the tokens of a chat reply.

OpenAI's Astra usage guide makes the spread concrete. For Plus and standard Business seats it estimates between 5 and 45 local messages per five-hour window on GPT-6 Astra, and between 350 and 3,000 on GPT-6 Luna. Those are OpenAI's estimates, not guarantees, and cloud tasks can cost more. Plus and Business seats have both a five-hour and a weekly window. Pro tiers have no five-hour limit in Work and Codex but still have a weekly allowance. Higher reasoning effort and Fast mode use more.

The important detail: the allowance is "not a fixed message or task count." The same seat can do ten tasks or a thousand depending on model, effort and task shape. A meter with no published capacity is fine for casual users and a planning headache for teams.

## My take

I think this is the honest version of what AI subscriptions always were. Inference costs real money per token, and agent tasks are expensive. Flat pricing on top of variable cost only works while most users are light. Folding everything into one meter is OpenAI admitting that the subscription is a compute budget, and I'd rather it say so than quietly throttle.

What I'm not convinced by is the opacity. OpenAI publishes ranges per model and a meter in settings, but no size for the pool. "Most users won't reset more often" is a reassurance, not a number. When we moved Assistable's no-code stack in-house and took operating cost from roughly $50K a month to under $8K, the work only paid off because we could see cost per conversation, per channel and per customer. You can't manage what you can only see as a progress bar.

I also think teams will underestimate how differently people use the same seat. OpenAI's own enterprise figures for an example Marketing group show Work spend of about $53 per employee per year at the median and about $1,154 at the 90th percentile. That is more than a twenty-fold spread inside one function. A shared allowance pushes that spread into each person's day.

I covered model churn in ChatGPT [two days ago](/blog/openai-gpt-6-2-sol-default-model-churn). This is the other half of the same dependency: you don't control the model, and now you don't fully control the capacity either.

## What to do about it

**For teams on ChatGPT or Codex seats:**

1. **Measure before December.** Ask your heaviest users to note Settings, Usage at the start and end of a typical week. Admins on credit-based plans can use the billing usage reports and Usage Insights. Find out who runs long Codex or Work tasks.
2. **Set model defaults on purpose.** OpenAI's guide says Astra at Low effort can beat Sol at High. Default to lower effort and step up only when a result falls short.
3. **Write down the fallback.** Decide what happens when a seat runs dry mid-task: wait, switch to Instant, buy credits, or move the job elsewhere. A blocked developer at 3pm is a real cost.
4. **Use the admin controls.** On credit-based workspaces you can set per-user and group limits, overage caps and alerts. OpenAI notes that alerts don't stop spending and that "no limit" is not a zero-spend cap.

**For builders deciding between seats and the API:** Treat a seat as good for interactive, human-paced work. For repeatable, high-volume jobs, like batch code review or nightly reports, the API or metered credits give you per-token pricing, logs and budget control you can actually reason about. Run the same workload both ways for a week and compare cost per finished task, not cost per month.

**For everyday users:** If you mostly chat, you'll likely notice nothing. If you lean on Codex, check your usage page before starting a large task, and use Instant for quick questions so they don't eat into your allowance.

## What to watch next

- **The December rollout.** Whether OpenAI publishes a firm date, and whether Free, Go, Enterprise or Edu plans get the same treatment.
- **Published capacity.** Any token figure for the shared pool, or a usage export individuals can analyse.
- **Limit changes after launch.** If complaints on the forum and GitHub lead OpenAI to raise allowances or add a separate Codex pool, that tells us how much pricing power it has.
- **Competitor pricing.** TechCrunch notes Anthropic merged Claude chat and Cowork in September. Watch whether pooled, token-metered seats become the default model across vendors.
