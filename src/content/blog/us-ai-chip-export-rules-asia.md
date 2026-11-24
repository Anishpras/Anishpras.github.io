---
title: "US AI Chip Rules Hit Southeast Asia: What Builders Abroad Must Do"
description: "BIS now requires licences for advanced AI chips to Indonesia, Malaysia, Singapore, Thailand and Brazil, and polices remote GPU access. What it means for builders."
category: policy
tags:
  - "export controls"
  - "ai chips"
  - "bis"
  - "southeast asia"
  - "gpu cloud"
  - "data centers"
createdAt: 2026-11-24T12:34:00.000Z
updatedAt: 2026-11-24T12:34:00.000Z
tldr: "A US rule effective 19 November requires licences for advanced AI chips going to Indonesia, Malaysia, Singapore, Thailand and Brazil, and for data centres anywhere renting over 12M TPP of compute to Chinese-headquartered firms."
keyTakeaways:
  - 'The Commerce Department''s BIS issued an interim final rule, "Addressing Remote Access to Advanced Semiconductors", on 16 November 2026, effective on Federal Register publication on 19 November, with comments open until 19 January 2027.'
  - "Advanced AI chips and servers (ECCNs 3A090 and 4A090) now need a licence to go to or move within Indonesia, Malaysia, Singapore, Thailand and Brazil, reviewed case by case; US-headquartered buyers are excluded if the exporter files monthly reports."
  - "Any data centre worldwide needs a licence for these chips if it gives more than 12 million aggregate TPP of compute to companies headquartered in China, other D:5 countries or Macau; existing arrangements get 90 days."
  - "The rule also formally rescinds the Biden-era AI Diffusion Rule, replacing country tiers with targeted licence requirements and know-your-customer duties for compute providers."
  - "Teams renting GPUs in Southeast Asia should expect ownership and end-use questionnaires, slower capacity expansion and a premium for providers that can prove clean customer lists."
sources:
  - title: "BIS Interim Final Rule Targets Remote Access to Advanced Semiconductors, Rescinds AI Diffusion Rule"
    url: "https://www.gtlaw.com/en/insights/2026/11/bis-interim-final-rule-targets-remote-access-to-advanced-semiconductors-rescinds-ai-diffusion-rule"
    publisher: "Greenberg Traurig"
  - title: "BIS targets remote access to advanced chips through overseas data centers"
    url: "https://www.nixonpeabody.com/insights/alerts/2026/11/16/bis-targets-remote-access-to-advanced-chips-through-overseas-data-centers"
    publisher: "Nixon Peabody"
  - title: "US extends chip sale restrictions to more Asian countries to reduce risk of 'diversion' to China"
    url: "https://www.theregister.com/a/5310307"
    publisher: "The Register"
  - title: "US moves to block China's remote access to AI chips amid Nvidia scandal"
    url: "https://aljazeera.com/economy/2026/11/17/us-moves-to-block-chinas-remote-access-to-ai-chips-amid-nvidia-scandal"
    publisher: "Al Jazeera"
  - title: "Nvidia halts China AI chip shipments despite US approval"
    url: "https://www.foxbusiness.com/fox-news-tech/nvidia-halts-china-ai-chip-shipments-despite-us-approval"
    publisher: "Fox Business"
---

The US now requires an export licence to ship advanced AI chips to Indonesia, Malaysia, Singapore, Thailand and Brazil, and it has made renting GPU time to Chinese companies from any data centre in the world a licensable activity above a set size. If you buy cloud compute in Southeast Asia, or run a business that resells it, this is the week your provider started asking who your customers really are.

## What happened

On 16 November 2026 the Commerce Department's Bureau of Industry and Security (BIS), the agency that runs US export controls, released an interim final rule titled "Addressing Remote Access to Advanced Semiconductors". According to Greenberg Traurig's analysis, it took effect on publication in the Federal Register on 19 November, with public comments open until 19 January 2027. An interim final rule applies immediately and can be revised after comments.

The rule does three things.

First, it adds a licence requirement for "advanced" AI chips and servers going to, or moving within, Indonesia, Malaysia, Singapore, Thailand and Brazil. Al Jazeera reports the administration labelled these countries as having an "unacceptable risk of diversion". The covered items are export classifications 3A090 and 4A090, which cover high-end AI accelerators and the servers built around them. BIS did not change the technical thresholds for those categories. Applications are reviewed case by case, and per Greenberg Traurig, BIS will weigh how well each country enforces export controls and cooperates with US enforcement. Buyers headquartered in the US are excluded, provided the exporter files a monthly report listing every party, the ultimate parent companies, and each product's classification, performance figure and quantity.

Second, it creates a new end-use control. Nixon Peabody's alert explains that a licence is needed for any data centre, in any country, that gives companies headquartered in China, other Country Group D:5 countries or Macau access to more than 12 million aggregate TPP of compute. That total counts across "linked data centers", so splitting capacity across sites doesn't avoid it. Data centres already serving such customers get 90 days to obtain a licence.

Third, it formally rescinds the Biden-era AI Diffusion Rule from January 2025, removing its country tiers and its controls on model weights.

The stated rationale is diversion: stopping US-designed compute from reaching China through third countries, either as shipped hardware or as rented time. The Register notes the rule targets the practice of Chinese customers renting GPUs abroad. On the same day, Commerce and the Justice Department confirmed a criminal investigation into Singapore-based data centre firm Megaspeed, according to Al Jazeera.

For context, Nvidia said on its 17 November earnings call that it is "no longer shipping licensed Hopper data center products to China", per Fox Business, after selling $2.4 billion of them in its fiscal third quarter.

## Why it matters

Southeast Asia has been one of the fastest-growing places to put AI data centres, partly because it was close to Chinese demand without being China. This rule makes that position a compliance cost.

The losers are clear. Chinese labs that trained on rented capacity in Singapore, Malaysia or Thailand lose an easy route; Counterpoint's Neil Shah told The Register it creates a "severe short-term compute bottleneck" for them. Regional operators whose order books leaned on Chinese-linked customers now face licence queues and lost revenue.

The less obvious losers are everyone else buying compute in those five countries. A company headquartered in India, Europe or Japan gets no carve-out of the kind US firms get. Nixon Peabody notes the five-country licence requirement applies whatever the buyer's headquarters. So an Indian startup leasing GPUs in a Malaysian or Indonesian facility now depends on that facility getting licensed supply, on a case-by-case timeline nobody has published.

The relative winners are US hyperscalers and US-parented operators, whose shipments into the region proceed on monthly paperwork while competitors wait on licences. I expect that to show up in GPU pricing and availability within a few quarters.

## How compute export controls work

US export rules don't only control where a chip is shipped. They control who benefits from it. Each chip gets a Total Processing Performance (TPP) score, roughly its peak operations per second multiplied by the bit length of those operations. Above certain TPP levels a chip becomes "advanced" and licensable.

Until now, the gap was rental. A Chinese company barred from buying top GPUs could rent them by the hour from a cloud in a third country, and the chips never crossed a border. This rule closes that by attaching the licence to the end customer, not the data centre's location.

How big is 12 million TPP? By my own rough arithmetic, an H100-class GPU scores a little under 16,000 TPP, so the threshold is somewhere around 750 of them. That is a mid-sized training cluster, not a hobbyist rental.

The enforcement mechanism is know-your-customer due diligence. Operators must trace customers to their ultimate parent, and the rule treats a data centre partner that can't supply ownership information as a red flag. Change of use after export also counts: if a permitted customer later starts serving a Chinese parent, that is treated as a new transfer.

## My take

I think this rule is more honest than the Diffusion Rule it replaces. Country tiers treated whole nations as trusted or not. This targets the actual leak, rented compute, and says so plainly. As a design goal, that is defensible.

I'm less convinced by the execution. "Case by case" for five whole countries, with no published timelines, is a licence queue with no SLA. Capacity planning for AI infrastructure runs on 12 to 18 month horizons, and a regional operator can't sign a power contract against a licence that may or may not arrive.

From where I sit, building an AI agent platform at Assistable AI, compute is a line item I watch closely. We cut operating cost from roughly $50K a month to under $8K by owning the layers that set our costs. Rules like this quietly move cost back to whoever can't prove where their compute goes. The cheapest GPU-hour in the region is no longer the cheapest if the provider loses its supply next quarter.

The part I'd take most seriously is the reporting. Monthly filings with ultimate parents, SKUs and quantities are an audit-trail problem, and audit trails fail when they're bolted on. I've written about [what audit logs need to stay useful](/research/audit-logs-after-redaction); the same logic applies here. If you can't reconstruct who used which capacity on what date, you don't have compliance.

## What to do about it

**For builders renting GPUs in Southeast Asia:** Ask your provider, in writing, whether its supply is licensed or relies on the US-headquartered exclusion, and what happens to your capacity if a licence is delayed. Keep a second region quoted, outside the five countries, so moving is a config change.

**For startups that resell or broker compute:** You are now part of someone's due-diligence chain. Collect ultimate-parent ownership for every customer, log workload type, and be ready to attest to end use. Expect upstream providers to add change-of-use clauses to contracts.

**For data-centre operators and investors in the region:** Map aggregate TPP served to China-, D:5- or Macau-headquartered customers across linked sites now. The 90-day clock started on 19 November.

**For Indian and other non-US companies:** Don't assume you're out of scope because you aren't Chinese. You don't get the US-headquartered exclusion, so your supply in these five countries runs through licences.

## What to watch next

- **19 January 2027 comment deadline.** Industry pushback could narrow the rule or add a faster path for trusted operators.
- **"Trusted access" deals.** Al Jazeera reports Singapore is exploring such an arrangement for its companies. A government-to-government deal would change the economics for the whole region.
- **First licence decisions.** How quickly BIS approves shipments into Malaysia and Indonesia will tell us whether this is a filter or a freeze.
- **Additional countries.** The rule lets the Commerce Secretary add destinations. Any addition would signal where enforcement attention goes next.
