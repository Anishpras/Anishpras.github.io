---
title: "Amazon's Decart Deal Is a Bet That Chip Portability Is the Moat"
description: "Amazon is buying Decart's optimization stack and team, reportedly for $7.5B. Why breaking CUDA lock-in matters for inference cost per task, and what to do."
category: startups
tags:
  - "amazon"
  - "decart"
  - "trainium"
  - "ai inference"
  - "nvidia cuda"
createdAt: 2026-11-23T12:29:00.000Z
updatedAt: 2026-11-23T12:29:00.000Z
tldr: "Amazon signed a deal on 23 November to buy the tech behind Decart's Optimization Stack and hire its founders, reportedly worth $7.5B. It is a bet that making models run well on any chip, including Trainium, is worth more than the chips."
keyTakeaways:
  - "Amazon is buying the proprietary technology behind the Decart Optimization Stack (DOS) plus its three co-founders and engineering team; Amazon did not disclose a price, and Calcalist reports $7.5 billion in cash and stock."
  - "Decart raised $300 million in May 2026 at a valuation of nearly $4 billion, with Nvidia among the investors, so the reported price is close to double that mark six months later."
  - "Decart's pitch is cutting per-chip model optimization from months to weeks, which lowers the cost of moving inference off Nvidia GPUs onto Google TPUs or Amazon Trainium."
  - "Vendor speed and cost claims, such as Amazon's figure of real-time video four times faster on Trainium at half the cost of GPUs, are unverified until you benchmark your own workload."
  - "Builders should keep model code hardware-neutral and measure cost per completed task, so a cheaper chip becomes a config change and not a rewrite."
sources:
  - title: "Amazon to purchase Decart's AI optimization technology to advance chip and model innovation for customers"
    url: "https://www.aboutamazon.com/news/company-news/amazon-decart-ai-optimization"
    publisher: "Amazon"
  - title: "Amazon signs $7.5 billion deal for Israeli AI startup Decart's technology and team"
    url: "https://www.calcalistech.com/ctechnews/article/g0mtcg4mi"
    publisher: "Calcalist (CTech)"
  - title: "Why Amazon might pay billions for Decart, a 3-year-old AI startup that hasn't disclosed its revenue"
    url: "https://www.geekwire.com/2026/why-amazon-might-pay-billions-for-decart-a-3-year-old-ai-startup-that-hasnt-disclosed-its-revenue/"
    publisher: "GeekWire"
  - title: "Amazon challenges Nvidia's software advantage with new tool for its own AI chips"
    url: "https://www.geekwire.com/2026/amazon-challenges-nvidias-software-advantage-with-new-tool-for-its-ai-chips/"
    publisher: "GeekWire"
  - title: "Decart raises $300M for its AI optimization software, world models"
    url: "https://siliconangle.com/2026/05/18/decart-raises-300m-ai-optimization-software-world-models/"
    publisher: "SiliconANGLE"
  - title: "Amazon Nearing $7.5 Billion Purchase of Decart"
    url: "https://www.theinformation.com/briefings/amazon-nearing-7-5-billion-purchase-decart"
    publisher: "The Information"
---

Amazon has signed an agreement to buy the technology behind Decart's Optimization Stack, the software that makes AI models run fast on Nvidia GPUs, Google TPUs and Amazon's own Trainium chips, and to hire the team that built it. Amazon didn't name a price; Israeli business outlet Calcalist puts it at $7.5 billion. I read this as Amazon paying a premium for the thing that keeps customers on Nvidia: the cost of moving software off it.

## What happened

On 23 November 2026, Amazon announced it will purchase the proprietary technology behind the Decart Optimization Stack (DOS) and bring over co-founders Dean Leitersdorf, Moshe Shalev and Orian Leitersdorf along with their researchers and engineers. The deal still needs customary closing conditions, including regulatory clearance. Amazon says Decart's team has worked with it since 2025 "to deliver strong performance results on Trainium."

Amazon's post gives no figure. Calcalist reports the deal is valued at $7.5 billion, paid in cash and stock over several instalments, with the founders committing to stay five years. The Information also reported Amazon was nearing a $7.5 billion purchase, and in October GeekWire, citing the Wall Street Journal, described talks at about $7 billion.

Decart is three years old. It was founded in 2023, and according to Calcalist it has raised more than $450 million and employs about 100 people. Its last round, in May 2026, was $300 million at a valuation of nearly $4 billion, led by Radical Ventures with Nvidia, Adobe Ventures and Toyota Ventures participating, per SiliconANGLE. Revenue has never been disclosed; Decart says DOS earns "significant revenue" from licensing to cloud providers and AI labs.

Amazon was not the first suitor. Calcalist reports Nvidia, already an investor, tried to buy Decart first, and that Anthropic got to advanced talks at about $6 billion before withdrawing in early September.

## Why it matters

Nvidia's lead is partly hardware and partly habit. As GeekWire put it in its October coverage of Amazon's chip software, much of the industry's AI code was written for Nvidia's CUDA platform, and adapting it to other chips can take months of engineering. That switching cost is why teams stay put even when another chip looks cheaper on paper.

Amazon has been attacking that cost from two sides. In October it launched TorchNeuron in public beta, a layer that lets PyTorch code run on Trainium after a configuration change. Decart covers the harder part: making a model fast on a given chip, not merely able to run on it. SiliconANGLE reports Decart says DOS shortens per-chip optimization from months to a few weeks.

The winners, if this works, are AWS and anyone buying inference at volume. Amazon gets a reason for customers to try Trainium without a rewrite. The pressure lands on Nvidia's pricing power, and on smaller inference-optimization startups whose best exit buyer just changed.

There's a catch. DOS was sold as hardware-neutral, licensed to clouds and labs. Under Amazon, I'd expect the Trainium path to get the most attention.

## How inference portability works

When you "run a model", you run a graph of maths operations: matrix multiplies, attention, normalisation. Each operation has to be turned into a kernel, a small program written for one specific chip's memory layout, cache sizes and compute units.

On Nvidia, those kernels mostly come from CUDA libraries tuned for years. On other chips, a compiler has to translate the model graph into that chip's instructions. A naive translation runs but runs slowly, because it ignores how the chip prefers data to move. The slow part of porting is the tuning: fusing operations so data stays in fast memory, picking tile sizes, overlapping compute with memory transfers, and handling the odd shapes that real models produce.

A portability stack sits between the model and the hardware. It takes one model definition and produces tuned kernels for each target. Do that well and a model's cost becomes a choice of chip, not a decision fixed at the moment someone wrote CUDA code.

Amazon claims the results can be large. GeekWire reports Amazon said Decart ran real-time video four times faster on Trainium at half the cost of GPUs, and that voice AI company Deepgram processed about 60% more audio per dollar on Trainium than on its existing GPU setup. Those are vendor-reported numbers on chosen workloads. Treat them as a reason to test, not a result.

## My take

I think the moat in AI infrastructure has moved from owning the fastest chip to owning the layer that decides which chip a workload runs on. Amazon is paying close to double Decart's May valuation for that layer, which tells you how seriously it takes the CUDA switching cost.

From where I sit, the interesting number is cost per completed task. I build voice and agent infrastructure at Assistable AI, where we cut operating cost from roughly $50K a month to under $8K by moving a no-code stack in-house and owning the layers that set our costs. Inference is the same problem one level down. If the same model can run on two or three chip families at similar quality, you can shop on price and capacity instead of accepting one vendor's rate card.

I'm not convinced by the headline speedups yet. Real-time voice cares about time to first token, tail latency under load, and how often a request times out and needs a retry. A chip that is cheaper per token but has worse p99 latency can cost more per conversation once you count retries and dropped calls. I've written about why ambiguous timeouts are dangerous for agents in my report on [safe retries after ambiguous tool timeouts](/research/safe-retry-ambiguous-tool-timeout), and a slower or flakier inference backend makes that problem more frequent.

I'd also bet the neutral version of DOS gets less neutral. Amazon has every reason to make Trainium the best-supported target. That is fine for AWS customers, but it means "portability" may come to mean "portable to AWS".

## What to do about it

**For builders:** Keep model code free of chip-specific calls where you can. Stay on mainstream frameworks like PyTorch, avoid hand-written CUDA unless the gain is measured, and isolate inference behind your own interface so the backend can change without touching product code.

**For teams running AI in production:** Measure cost per completed task, not cost per token. Include retries, timeouts and latency-driven abandonment. Then run a real slice of traffic on a second hardware target, such as Trainium or TPUs, and compare on those numbers. Vendor benchmarks are a starting point for which workloads to try first.

**For founders in inference tooling:** The buyer list just got shorter. If your product's value is hardware neutrality, be ready to explain why that survives one of the clouds owning a competitor.

## What to watch next

- **Regulatory clearance and closing.** Amazon says the deal needs regulatory approval; a long review or conditions on neutrality would change the picture.
- **What happens to existing DOS licensees.** If cloud providers and AI labs that licensed DOS lose access or updates, the hardware-neutral story is over.
- **Independent Trainium benchmarks.** I'd want third-party numbers on latency-sensitive workloads like voice, not only throughput.
- **Nvidia's response.** Watch for price moves or software that makes CUDA code easier to keep on Nvidia, since the switching cost is what Amazon is buying down.
