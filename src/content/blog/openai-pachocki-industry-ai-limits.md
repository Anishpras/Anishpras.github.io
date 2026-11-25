---
title: "OpenAI's Pachocki Wants Shared AI Limits. Who Checks Them?"
description: "OpenAI's chief scientist proposes industry limits on AI progress based on perplexity. Why voluntary red lines need verification, and what it means for builders."
category: policy
tags:
  - "ai safety"
  - "openai"
  - "frontier models"
  - "ai regulation"
  - "perplexity"
  - "raise act"
createdAt: 2026-11-25T12:34:00.000Z
updatedAt: 2026-11-25T12:34:00.000Z
tldr: "Jakub Pachocki proposed on 22 November that AI labs agree on common limits, based on perplexity and other measures, that they won't cross until monitoring improves. No verifier, number or start date is named."
keyTakeaways:
  - 'On 22 November 2026, OpenAI chief scientist Jakub Pachocki published "Perplexity and Intelligence", proposing industry-wide limits that developers would commit not to cross until their ability to understand and monitor AI behaviour reaches a milestone.'
  - "OpenAI disclosed log-perplexity figures for its models for the first time: about 0.99 for GPT-3.5, about 0.91 for GPT-4, and below 0.8 for models showing new cybersecurity and maths abilities, measured on a fixed snapshot of OpenAI's internal codebase."
  - "The essay names no first limit, no start date and no outside verifier, and critics note the benchmark is one outsiders cannot run."
  - "Binding rules are arriving anyway: New York's RAISE Act takes effect on 1 January 2027, and the state attorney general created an enforcement unit for it on 17 November."
  - "Teams building on frontier models should plan for capability pauses as a supply risk, and write model-availability and change-notice terms into contracts."
sources:
  - title: "Perplexity and Intelligence"
    url: "https://openai.com/index/perplexity-and-intelligence/"
    publisher: "OpenAI"
  - title: "OpenAI Chief Scientist Urges Industry Limits on AI Development"
    url: "https://www.insurancejournal.com/news/national/2026/11/23/893408.htm"
    publisher: "Insurance Journal (Bloomberg)"
  - title: "OpenAI's Jakub Pachocki Proposes AI Scaling Limits Scored on Private Test Only OpenAI Can Run"
    url: "https://www.techtimes.com/articles/331307/20261123/openais-jakub-pachocki-proposes-ai-scaling-limits-scored-private-test-only-openai-can-run.htm"
    publisher: "Tech Times"
  - title: "Pacing model development in an era of cyber-critical capabilities"
    url: "https://openai.com/index/pacing-model-development-cyber-capabilities/"
    publisher: "OpenAI"
  - title: "NY Attorney General James announces new unit to oversee AI safety and enforcement"
    url: "https://thenationaldesk.com/news/americas-news-now/ny-attorney-letitia-general-james-announces-new-unit-to-oversee-ai-safety-and-enforcement-new-york-artificial-intelligence-technologies-chatbots-governor-kathy-hochul-raise-act-asset-unit-shield-safety-legislation-penal-law-cbs6-wrgb"
    publisher: "The National Desk"
  - title: "New York joins California in regulating development of frontier AI models"
    url: "https://www.davispolk.com/insights/client-update/governor-hochul-signs-final-version-responsible-ai-safety-and-education"
    publisher: "Davis Polk"
---

OpenAI's chief scientist, Jakub Pachocki, has proposed that AI labs agree on shared limits on how capable their models get, and promise not to cross each limit until they can properly monitor what their systems are doing. It is the most concrete red-line proposal a frontier lab has put its name to. It also leaves out the part that decides whether it works: who checks.

## What happened

On Sunday 22 November 2026, Pachocki published an essay on OpenAI's website titled "Perplexity and Intelligence". Its central line is short: "I further propose common limits, based on perplexity and other measurements." Developers would commit not to cross each limit until their "ability to understand and monitor AI behavior" reaches a milestone. The example he gives is building a successor to chain-of-thought monitors, the tools that read a model's intermediate reasoning to catch bad behaviour.

He also calls for shared norms for evaluating models and for red-teaming each other's safety cases, plus common transparency standards. To start that off, OpenAI published log-perplexity figures for its own models for the first time: about 0.99 for GPT-3.5, about 0.91 for GPT-4, and below 0.8 for the models where expert-level cybersecurity and maths abilities started to appear. A model at about 0.76 produced results on open maths problems. Pachocki expects further "transformative capabilities" in a window around 0.68 to 0.7. Bloomberg reports he also warned that AI could start speeding up its own development as early as 2027.

Bloomberg's report, republished by Insurance Journal, notes that Pachocki did not say where the first limit would sit or when it would apply. Sam Altman endorsed the essay on X, calling it "the most important thing OpenAI has published in awhile." Bloomberg places it against a renewed US regulation debate after Democrats' midterm wins, with President Trump opposed to broad restrictions.

Tech Times focused on the gap. The perplexity scores come from a fixed snapshot of OpenAI's internal codebase that outsiders can't access, and the essay names no auditor, no verification body and no numeric cap. In the outlet's words, the cap "cannot yet be checked by anyone else."

## Why it matters

There is precedent for OpenAI holding itself to a line. In August, in a post on pacing development around cyber capabilities, OpenAI said it had paused reinforcement-learning training for two weeks and that its "largest planned frontier RL run remains on hold." So the company has shown it will slow down on its own judgement.

Pachocki's proposal asks for something harder: a line that several competing labs share, measured the same way, held at the same time. That changes the economics. A lab that pauses alone loses ground to rivals. A lab that pauses with everyone else loses nothing relative to them. That is the case for coordination, and it is also why each party's incentive to defect is strongest right before the line.

Binding rules are coming whatever happens with the voluntary route. New York's Responsible AI Safety and Education (RAISE) Act takes effect on 1 January 2027. On 17 November, Attorney General Letitia James announced a new AI Safety, Standards, Enforcement and Transparency (ASSET) unit, led by Cristy Phillips, to enforce it. According to Davis Polk's summary, the law covers developers training models above 10^26 operations, with heavier duties for those with more than $500 million in annual revenue. They must publish a safety framework and report critical safety incidents within 72 hours, and the attorney general can seek penalties of up to $1 million for a first violation and $3 million after that.

## How a perplexity limit works

Perplexity measures how surprised a model is by text it hasn't seen. A text model like GPT assigns a probability to each next token (a word or word fragment). Log-perplexity is roughly the average of how wrong those guesses are, so lower means the model predicts better. It is the same quantity a model is trained to minimise during pretraining, which is why it tracks raw progress well.

The appeal as a safety metric is that it is cheap, continuous and measurable during training, before a model ships. You don't have to wait for a finished model and a week of capability evaluations to know roughly where you are.

The weaknesses are just as concrete. The score depends on the test text, so two labs scoring on different datasets aren't comparable. It also depends on the tokenizer, the scheme that splits text into tokens, which differs between labs. Tech Times cites research that perplexity can drift away from the evaluations that measure what a model can actually do. Pachocki's own wording, "perplexity and other measurements", suggests he knows a single number won't carry the whole job.

## My take

I think the transparency is real and worth crediting. Publishing your own loss curve against capabilities is more than most labs have done, and it gives outsiders a frame for reading future announcements.

I'm not convinced by the enforcement story, because there isn't one yet. A limit measured on a private dataset, set at an unnamed level, checked by nobody outside the lab, is a promise. Promises can be sincere. OpenAI's August pause suggests this one might be. But "trust our internal number" is the same posture the essay is trying to move the industry past.

This is a familiar engineering problem. In the agent systems I build, a retry is only safe if you can prove what already happened, which is the point of my work on [safe retries after ambiguous tool timeouts](/research/safe-retry-ambiguous-tool-timeout). A capability limit is the same: if nobody outside can reproduce the measurement, nobody can tell whether the line held. Verification has to be designed in. A shared held-out dataset, scored by a third party under confidentiality, would be a start. Without that, I'd expect binding state laws like RAISE to set the actual floor, with voluntary limits as a layer on top.

I'd also bet the first real test isn't a dramatic pause. It's a quiet one: a lab nearing a limit, a competitor not, and a board deciding whether "shared" still applies.

## What to do about it

**For builders on frontier APIs:** Treat a capability pause as a supply risk. If your product roadmap assumes next quarter's model, have a plan that ships on today's. Keep model choice behind a config flag so swapping providers isn't a rewrite.

**For teams negotiating enterprise contracts:** Ask about model availability and deprecation notice, what happens to committed spend if a planned model is delayed, and whether the provider will tell you when a safety framework change affects your use case. These are ordinary contract questions now, not exotic ones.

**For companies near the RAISE thresholds:** The 1 January 2027 date is fixed, and there is now a named enforcement unit. Get your incident-detection and 72-hour reporting path working before you need it.

**For everyone else:** When a lab says it is "pausing" or "holding a line", ask who outside the company can confirm it.

## What to watch next

- **Other labs' responses.** Whether any rival publicly accepts a shared metric, or publishes comparable perplexity numbers, decides whether this becomes a standard or stays an OpenAI essay.
- **A shared test set.** Any move to score labs on common data, run by a third party, would answer the verification question.
- **1 January 2027.** RAISE takes effect, and the ASSET unit's first actions will show how seriously binding rules get enforced.
- **The 2027 self-improvement warning.** If labs report AI meaningfully accelerating their own research, pressure for hard limits will rise quickly.
