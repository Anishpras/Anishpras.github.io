---
title: "GPT-6.2 Sol Hits ChatGPT as GPT-5.6 Retires: Model Churn Is a Risk"
description: "OpenAI put GPT-6.2 in ChatGPT's Chat tab and set 23 December to retire GPT-5.6 Sol. Why fast model churn is now a product risk, and how to plan for it."
category: ai
tags:
  - "openai"
  - "chatgpt"
  - "model deprecation"
  - "evals"
  - "llm ops"
createdAt: 2026-11-25T12:32:00.000Z
updatedAt: 2026-11-25T12:32:00.000Z
tldr: "OpenAI is rolling a Chat-tuned GPT-6.2 Sol out to paid ChatGPT users and will retire GPT-5.6 Sol on 23 December. When models change this fast, prompts, tone and costs drift, so teams need pinned versions, evals and a deprecation calendar."
keyTakeaways:
  - "On 23 November 2026 OpenAI began rolling a Chat-optimised version of GPT-6.2 out to ChatGPT Plus, Pro, Business and Enterprise. Free and Go are not included."
  - "OpenAI says GPT-5.6 Sol will be deprecated in ChatGPT Chat on 23 December 2026, with GPT-5.6 Sol and Terra leaving Work and Codex the same day."
  - "OpenAI says it will generally retire models that are two generations back, so a month's notice may become the normal pattern in ChatGPT."
  - "The announcement covers ChatGPT. The coverage I read does not describe any API shutdown, but API builders should still plan for one."
  - "Pin model versions, keep a regression set from real traffic, run evals on every upgrade, and keep a calendar of retirement dates."
sources:
  - title: "ChatGPT — Release Notes"
    url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
    publisher: "OpenAI"
  - title: "GPT-6 and other models in ChatGPT"
    url: "https://help.openai.com/en/articles/20001354-gpt-56"
    publisher: "OpenAI"
  - title: "GPT-6.2 Astra and Sol"
    url: "https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol"
    publisher: "OpenAI"
  - title: "ChatGPT expands GPT-6.2 Sol as OpenAI sets retirement date for two models"
    url: "https://9to5mac.com/2026/11/23/chatgpt-expands-gpt-6-2-sol-as-openai-sets-retirement-date-for-two-models/"
    publisher: "9to5Mac"
  - title: "ChatGPT-5.6 fans mourn model's demise as OpenAI confirms retirement date — but its GPT-6.2 replacement is already rolling out"
    url: "https://www.techradar.com/ai-platforms-assistants/chatgpt/chatgpt-5-6-fans-mourn-models-demise-as-openai-confirms-retirement-date-but-its-gpt-6-2-replacement-is-already-rolling-out"
    publisher: "TechRadar"
  - title: "OpenAI Brings GPT-6.2 Sol to ChatGPT's Chat Tab"
    url: "https://www.macrumors.com/2026/11/23/openai-gpt-6-2-sol-chatgpt/"
    publisher: "MacRumors"
---

OpenAI is rolling a version of GPT-6.2 Sol into ChatGPT's main Chat tab for paying users, and it has set 23 December 2026 as the day GPT-5.6 Sol goes away. The model is the smaller part of this story. The bigger part is the timing: a model people built habits around gets about a month's notice. If your product, workflow or team depends on a specific model, churn on that schedule is now a risk you have to manage.

## What happened

On 17 November 2026 OpenAI introduced GPT-6.2 Astra and GPT-6.2 Sol in ChatGPT Work and Codex, in preview, with API model IDs `gpt-6.2-astra` and `gpt-6.2-sol`. OpenAI describes Astra as its frontier model for complex professional work and Sol as a balance of reasoning and speed for everyday tasks. At that point the release notes said Chat kept its existing model choices.

That changed on 23 November. OpenAI's release notes say: "GPT‑6.2 starts rolling out globally to ChatGPT Plus, Pro, Business and Enterprise tiers today in the Chat tab." The Chat version is tuned for everyday conversation. OpenAI says it handles complex, multi-step requests and web research better, and is better at offering useful follow-ups such as a price-drop alert. MacRumors reports it is not available on the Free or Go plans, and that the Work and Codex models are unchanged. The one figure I'm repeating is OpenAI's own safety number, as reported by MacRumors: in challenging conversations the new model meets OpenAI's safety policies 91 to 94 percent of the time, up from 77 to 80 percent for GPT-6.

The same day, OpenAI's ChatGPT account on X set a retirement date. According to 9to5Mac and TechRadar, GPT-5.6 Sol will be deprecated in ChatGPT Chat on 23 December 2026, and GPT-5.6 Sol and GPT-5.6 Terra will be removed from Work and Codex on the same day. TechRadar quotes OpenAI's reasoning: "we'll generally continue to retire models that are two generations back." OpenAI says this frees up compute for its newer models. TechRadar also reports a lot of user frustration on X and Reddit, mostly from people who relied on GPT-5.6 for writing or specialist work.

The retirement covers ChatGPT. Neither 9to5Mac nor TechRadar mentions the API, and I couldn't find an OpenAI page on API shutdown dates for GPT-5.6, so treat API timing as unknown.

## Why it matters

Swapping a model changes more than its quality. It can change answer length, tone, how often the model refuses, how it formats output, how it calls tools and how many tokens it uses for the same task. Any of those can break something downstream.

For people using ChatGPT, OpenAI's help centre explains how the switch reaches you. If the picker shows GPT-6.2, the "Latest" option uses GPT-6.2. Anyone on "Latest" has already moved without doing anything. Anyone who explicitly picked GPT-5.6 Sol has until 23 December. Teams that wrote internal guides, custom instructions or review checklists around 5.6's behaviour will see the model under them change.

For builders, the stated policy matters more than this one date. "Two generations back" means retirements will keep coming on a schedule set by OpenAI's release pace, not by your roadmap. If big releases keep arriving every few months, every model you depend on has a shelf life you don't control.

## How model versions, aliases and deprecations work

Three ideas are worth keeping apart.

An **alias** is a moving name. "Latest" in ChatGPT is one: it points at whatever OpenAI currently thinks is best, and that target changes without you doing anything. In the API, a bare model ID can work the same way if the provider updates what sits behind it.

A **pinned version**, often called a snapshot, is a fixed model build you can keep calling until it is retired. Pinning trades automatic improvements for predictability. The public model page for `gpt-6.2-sol` currently lists no dated snapshot, so check what you're actually calling before you assume it is frozen.

**Deprecation** and **retirement** (or shutdown) are separate steps. Deprecation is the notice that a model will go away. Retirement is the day calls stop working or the option disappears. The gap between them is your migration window. For GPT-5.6 Sol in ChatGPT that gap is 30 days.

An **eval suite** connects all of this. It is a fixed set of inputs with a way to score outputs, run automatically against each candidate model. A **regression set** is the part of it built from real cases that once went wrong or matter most, so a new model can't quietly reintroduce an old failure.

## My take

I think a 30-day window is tight but workable for the consumer app, and it is a warning for everyone building on top of these models. I run voice and messaging agents in production, and in my experience a model upgrade is never only a quality bump. It shifts latency, token counts and the small behaviours your prompts depend on, like whether the model confirms before it acts or how it phrases a handoff. Those differences don't show up in a launch post. They show up when a customer conversation goes sideways.

I'm not criticising OpenAI for retiring old models. Running several model generations at once costs real compute, and the company has said plainly that it is freeing capacity. Stating a rule like "two generations back" is more useful than surprise removals, because you can plan around a rule.

What I'd push back on is the habit of treating the model as a fixed dependency. A model is closer to a vendor service that changes under you. You wouldn't let a payments API upgrade itself in production without a test pass. A model that writes your customer replies deserves the same care.

The user backlash TechRadar describes is a product lesson too. People don't just use a model, they get used to its voice. If your product presents a model's personality to your users, a forced change of model also changes your product.

## What to do about it

**For builders on the API:**

1. **Pin versions where you can** and record the exact model ID in your logs for every request. If only a moving ID exists, write that down as a known risk.
2. **Keep a regression set from real traffic.** Pull 100 to 300 representative and previously broken cases, with personal data removed, and store the expected behaviour.
3. **Run evals on every upgrade**, scoring quality, format compliance, refusal rate, tool-call correctness, latency and tokens per task. Cost per task can move even when the price per token doesn't.
4. **Roll out gradually.** Shadow-test the new model, then send it a small share of traffic, and keep a one-line config switch back to the old model until its retirement date.

**For teams that depend on ChatGPT:**

- **Keep a deprecation calendar.** Add 23 December 2026 now, and assign an owner for every model your workflows use.
- **Re-test your custom instructions and shared prompts** on GPT-6.2 this week rather than on 22 December.
- **Tell people what will change.** If your team relies on GPT-5.6's writing style, give them a few weeks to adjust their prompts.

**For everyday users:** If you're on a paid plan and "Latest" is selected, you're probably already on GPT-6.2. If you picked GPT-5.6 Sol on purpose, try the same tasks on GPT-6.2 before 23 December so the switch doesn't catch you mid-project.

## What to watch next

- **API timing.** Whether OpenAI publishes a shutdown date for GPT-5.6 in the API, and how long that window is compared with ChatGPT's 30 days.
- **Snapshot policy for GPT-6.2.** Whether dated, pinnable snapshots of `gpt-6.2-sol` appear on the model page.
- **23 December itself.** Whether the date holds after the user pushback, and how OpenAI handles existing GPT-5.6 conversations.
- **Free and Go plans.** When, or whether, GPT-6.2 reaches them, which would tell us how quickly the next retirement cycle starts.
