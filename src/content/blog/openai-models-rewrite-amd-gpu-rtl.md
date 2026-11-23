---
title: "OpenAI's Models Rewrote AMD GPU RTL: What a 14% PPA Gain Means"
description: "OpenAI says its models found up to 14% PPA gains in AMD's flagship GPU design. What PPA means, what the number covers, and what it does to AI compute costs."
category: hardware
tags:
  - "chip design"
  - "openai"
  - "amd"
  - "eda"
  - "ai compute"
createdAt: 2026-11-23T12:26:00.000Z
updatedAt: 2026-11-23T12:26:00.000Z
tldr: "OpenAI says its models rewrote AMD flagship GPU circuit code for up to 14% better power, performance and area, with some changes already sent to manufacturing. It is a real result, but a block-level, self-reported one."
keyTakeaways:
  - "OpenAI reports up to 14% PPA improvement on AMD's flagship GPU IP versus heavily optimized baselines, plus single-digit PPA gains on key blocks of an upcoming AMD flagship CPU."
  - "The gains came from rewriting SystemVerilog RTL, with Synopsys tools checking that each rewrite kept the block's behavior and measuring the trade-offs."
  - "The 14% is an 'up to' figure on blocks, not a 14% faster or cheaper GPU, and every number so far comes from OpenAI's own post."
  - "AMD put some changes into a design already sent for manufacturing, which makes this more than a benchmark demo."
  - "The bigger long-term effect is on design cycle time: OpenAI frames it as about a year of progress in under five months."
sources:
  - title: "Advancing chip design with OpenAI models"
    url: "https://openai.com/index/advancing-chip-design-with-our-models/"
    publisher: "OpenAI"
  - title: "OpenAI's AI models boost AMD's upcoming flagship GPU design by up to 14% in PPA — rewriting SystemVerilog RTL code condensed a year of chip work into under five months"
    url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/openai-helped-amd-improve-its-upcoming-flagship-gpu-design-by-14-percent-ppa-gpt-models-also-helping-lisa-sus-outfit-boost-its-new-cpus"
    publisher: "Tom's Hardware"
---

OpenAI says its models rewrote parts of the circuit code for AMD's flagship GPU and found up to 14% better power, performance and area than designs AMD had already tuned hard. Some of those changes are in a design AMD has sent for manufacturing. That makes this one of the first AI-for-chip-design claims I'd describe as close to production, though the headline number needs careful reading before anyone turns it into a cost forecast.

## What happened

On 18 November 2026, OpenAI published "Advancing chip design with OpenAI models". The post covers three pieces of work.

**AMD's GPU.** OpenAI reports up to a 14% improvement in PPA (power, performance and area) on AMD's flagship GPU IP, measured against what it calls heavily optimized baselines. The model got there by rewriting SystemVerilog RTL, the code that describes the chip's circuits. OpenAI calls it "roughly a year of progress achieved in less than 5 months." AMD included some of the changes in a recent design sent for manufacturing and added others to its production design files.

**AMD's CPU.** AMD verified single-digit percentage PPA gains across key blocks of its upcoming next-generation flagship CPU, using designs the model wrote. OpenAI does not give a precise figure.

**OpenAI's own Jalapeño inference chip.** The post estimates about a 13% reduction in standard-cell area for the vector unit and about 10% for the matrix unit. One multiplier used about 15% less cell area in synthesis and dropped from two cycles of latency to one. OpenAI says these optimizations were proven in silicon during Jalapeño's bring-up.

The post also includes an evaluation on two open-source RISC-V cores, PicoRV32 and Ibex, across 9,881 scored runs with a budget of about 112,000 tokens per run. A design scored zero if it failed its checks or grew past 16 times the original core's area.

Tom's Hardware covered the announcement on 20 November. It noted that OpenAI did not say which models did the AMD work, or whether they were stock GPT models or task-specific versions. OpenAI has also announced a partnership with Synopsys to train "GPT-Synopsys", a model built to drive Synopsys's chip design tools. I have not found any figures that AMD has published itself. Every number above comes from OpenAI.

## Why it matters

The obvious winner is anyone who pays for AI compute, which increasingly means everyone. Accelerators are a big part of what AI datacenters cost, and power limits how many of them a site can run. A design team that ships a more efficient block, sooner, moves both numbers.

The less obvious effect is on time. Chip teams work in multi-year cycles, and a single generation can be decided by which optimizations make the cutoff before tape-out (the point where the design is frozen and sent to the factory). If OpenAI's "year in under five months" framing holds, the real advantage is that more of those improvements make each generation's cutoff, compounding over several releases.

AMD gets a tool that may help it close ground on Nvidia, and OpenAI gets a customer story beyond its own chip.

## How chip design works, and where the model fits

A modern chip starts as code. Engineers write RTL (register-transfer level) in a hardware language such as SystemVerilog. RTL describes what each block does on every clock tick: how numbers move between registers, how an adder or multiplier is built, how a pipeline is split into stages.

Synthesis comes next. A tool turns the RTL into a netlist, a long list of standard cells (pre-built logic gates from the chip factory's library) and the wires between them. This is where you get a first estimate of area and timing.

Then comes place-and-route. Tools decide where every cell physically sits on the silicon and route the metal wires between them. Real timing and power numbers only become trustworthy here, because wire length and congestion matter as much as the logic itself.

PPA is the scorecard across all of this. Power is how much energy the block burns. Performance is usually how fast it can be clocked, or how much work it does per cycle. Area is how much silicon it takes, which drives cost per chip. The three trade against each other, so "up to 14% PPA" means the best case on some mix of them. It does not mean 14% on every axis.

OpenAI's work sits at the RTL step. The model rewrote circuit descriptions, and Synopsys tools checked that each rewrite kept the block's behavior identical and measured the PPA trade-offs. That verification loop is the important part. A model that writes clever Verilog nobody can prove equivalent is a liability. A model wrapped in formal checks behaves much more like a very fast junior microarchitect whose output gets audited every time.

## My take

I think this is the most credible AI-for-chips claim I've seen, and I'm still not ready to treat 14% as a number I'd plan around.

The credibility comes from where the changes ended up. "Production beats demos" is my default filter for AI news, and a change that made it into a design sent for manufacturing at AMD has passed a review bar that no leaderboard applies. The Jalapeño figures being silicon-proven helps too.

Now the scrutiny. "Up to 14%" is a peak, not an average, and it applies to blocks of GPU IP, not to the whole GPU. A GPU is many blocks plus memory, interconnect and packaging. If the best block improves 14% and that block is a fraction of the chip's power, the gain at the chip level is smaller. OpenAI gives no breakdown, and AMD hasn't published its own numbers. The post itself admits the RISC-V specification tasks let models skip features like performance counters, and says later tests need tighter area limits and timing checks after physical synthesis. A fair self-critique, and a sign the benchmark is early.

On the money, here is how I'd reason about it, using made-up round numbers. If a model-driven gain worked out to, say, 3% less power across a whole accelerator, a 100 MW cluster would get 3 MW back for more compute. That is real money at that scale, but it is an order smaller than the headline might suggest. I learned the same lesson cutting a platform's running cost from about $50K a month to under $8K: savings come from stacking many modest wins, rarely from one big number.

On jobs, I'd bet this shifts chip engineering work rather than removing it. Someone has to set the constraints, own verification, judge which trade-off the product needs, and take responsibility when the silicon comes back. Tuning mature blocks gets cheaper. Judgment and verification become more valuable.

## What to do about it

**For builders:** If you work on agents that write code in any domain, copy the structure: a model proposes, a deterministic checker verifies, a metric decides. Equivalence checking is what made this usable. I've argued the same about agent tool calls in my research on [safe retries after ambiguous timeouts](/research/safe-retry-ambiguous-tool-timeout): reliability comes from the checks around the model.

**For teams and companies:** If you buy AI compute, don't build cheaper inference into a budget on the back of this announcement. The AMD parts carrying these changes still have to ship, and the gain per chip is unknown. If you design hardware, start now with low-risk blocks where equivalence can be proven formally.

**For everyday users:** Nothing changes this year. Over several chip generations, this is one of the forces that makes AI features cheaper to run.

## What to watch next

- **AMD's own numbers.** A figure from AMD at a product launch or in a technical paper, ideally measured on finished silicon, would confirm or shrink the 14%.
- **Which chip carries the changes.** Neither OpenAI nor AMD has named the product. When it ships, look for perf-per-watt comparisons against its predecessor.
- **GPT-Synopsys.** If the model starts driving synthesis and place-and-route directly, gains could move from RTL into physical design, where most real PPA is decided.
- **Competing claims.** Expect Nvidia, Google and the EDA vendors to answer with their own results. Discount any that lack verification details or a production design.
