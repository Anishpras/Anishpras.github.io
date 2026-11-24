---
title: "CrowdStrike Buys Zscaler: What Security Consolidation Costs You"
description: "CrowdStrike agreed to buy Zscaler for about $43.9B in stock. What one vendor owning endpoint and SASE means for lock-in, pricing and your next renewal."
category: big-tech
tags:
  - "crowdstrike"
  - "zscaler"
  - "sase"
  - "vendor lock-in"
  - "security platforms"
createdAt: 2026-11-24T12:30:00.000Z
updatedAt: 2026-11-24T12:30:00.000Z
tldr: "CrowdStrike agreed on 23 November 2026 to buy Zscaler in an all-stock deal worth about $43.9B, putting endpoint and network security under one vendor. Closing is months away, so use the gap to lock in renewal terms and exit options."
keyTakeaways:
  - "Zscaler holders get 1.135 CrowdStrike shares each, about $260.41 a share and a roughly 34% premium to the 20 November close; the combined company starts with more than $10B in ARR."
  - "The deal needs regulatory approval and a Zscaler shareholder vote and is expected to close in the second half of CrowdStrike's fiscal 2028; the companies run independently until then."
  - "CrowdStrike plans to sell both product lines on one Falcon Flex contract. That is convenient, and it also concentrates your negotiating risk in one counterparty."
  - "Before your next renewal, get price caps, a dated integration roadmap and data-export rights in writing, and price out at least one credible alternative."
sources:
  - title: "CrowdStrike to Acquire Zscaler, Bringing Network Security and Zero Trust to the Falcon Platform"
    url: "https://www.sec.gov/Archives/edgar/data/0001535527/000110465926130785/tm2630454d1_ex99-1.htm"
    publisher: "CrowdStrike (SEC filing)"
  - title: "CrowdStrike to buy Zscaler in $44 billion deal as AI supercharges cyberattacks"
    url: "https://www.cnbc.com/2026/11/23/crowdstrike-zscaler-aquisition-ai-cyberattacks.html"
    publisher: "CNBC"
  - title: "CrowdStrike's Zscaler deal is a $44B vote for platformization and a long-term threat to Palo Alto Networks"
    url: "https://siliconangle.com/2026/11/23/crowdstrikes-zscaler-deal-is-a-44b-vote-for-platformization-and-a-long-term-threat-to-palo-alto-networks/"
    publisher: "SiliconANGLE"
---

CrowdStrike agreed on 23 November 2026 to buy Zscaler in an all-stock deal that values Zscaler at about $43.9 billion. That puts the biggest name in endpoint security and the biggest name in cloud network security under one roof. If you buy from either company, the time to protect yourself is now, while the deal is pending and both sales teams still want your signature.

## What happened

According to CrowdStrike's press release, filed with the SEC, Zscaler shareholders will receive 1.135 CrowdStrike shares for each Zscaler share. That works out to about $260.41 per share, a premium of roughly 34% over Zscaler's closing price on 20 November. Both boards approved it unanimously. After closing, CrowdStrike shareholders would own about 84.1% of the combined company and Zscaler shareholders about 15.9%.

The combined business is expected to start with more than $10 billion in annual recurring revenue (ARR), with Zscaler contributing $3.9 billion of that from its latest quarter. CrowdStrike is targeting about $1 billion a year in revenue synergies within 30 months of closing and $500 million a year in cost savings within 18 to 24 months.

Jay Chaudhry, Zscaler's founder and CEO, will keep running the Zscaler business and join CrowdStrike's board. He and his affiliates hold about 34% of Zscaler's shares and have signed agreements to vote for the deal. Closing is expected in the second half of CrowdStrike's fiscal 2028, which SiliconANGLE reads as August 2027 to January 2028. It still needs regulatory approvals and a Zscaler shareholder vote, and the two companies operate independently until then.

The market didn't love it on day one. CNBC reported CrowdStrike shares fell 9% on Monday while Zscaler rose nearly 18%. CNBC also noted that the two companies' combined market value at Friday's close was above $265 billion, close to Palo Alto Networks at $282 billion.

## Why it matters

The press release is explicit about the commercial plan: cross-sell across both customer bases on a single Falcon Flex contract. Falcon Flex is CrowdStrike's licensing model, where you commit spend up front and draw it down across modules. CrowdStrike says about 8,000 Zscaler customers don't yet buy from CrowdStrike, and about 2,000 already buy from both.

Those 2,000 shared customers are the ones I'd think hardest about. Today they have two vendors that compete for budget, and that competition is leverage. After closing, they have one counterparty for both the agent on every laptop and the proxy that every packet passes through. A $500 million cost-savings target and a $1 billion revenue-synergy target have to come from somewhere, and some of the revenue part will come from existing customers paying for more.

The pitch has a real technical side too. CrowdStrike says the deal combines endpoint and network telemetry into one data set, so detections can correlate what a device did with where its traffic went. JPMorgan analysts, quoted by CNBC, framed it this way: "The addition of ZS to CRWD's platform could bring more breadth in an era of vendor consolidation." Breadth is the benefit. Concentration is the cost.

## How security platform consolidation works

Two product categories are merging here. Endpoint detection and response (EDR) is software on each laptop and server that watches processes and blocks attacks; CrowdStrike's Falcon is the market leader. Secure access service edge (SASE) moves network security into the cloud: instead of hauling traffic back to an office firewall, users connect to a nearby cloud proxy that inspects it and applies policy. Zscaler built the largest one, around a zero trust model where every connection is checked rather than trusted because it comes from inside the network.

"Platformization" is the industry's word for selling all of this as one bundle. SiliconANGLE's analysis makes a useful distinction: a real platform shares one data set, one agent and one policy engine. By that standard this isn't one yet. Falcon and Zscaler's client currently run as separate agents on separate clouds with separate release schedules. SiliconANGLE reports CrowdStrike has promised a single agent but given no timeline, and the engineering teams can't merge work until the deal closes. It also points out the combined company still has no firewall, which many enterprises still run.

So for at least the next year, a "unified" contract will mostly mean unified billing over two products.

## My take

I think the technical case is real and the commercial case is mostly for CrowdStrike. Correlating endpoint and network signals in one place is genuinely useful, and the two companies already ship 16 integrations. But you can get much of that value today through those integrations while keeping two vendors negotiating against each other.

My bias comes from cost work. On the agent platform I build at Assistable AI, a big part of taking operating cost from roughly $50K a month to under $8K was moving off a no-code stack we didn't control. The lesson I took from that is simple: the price you're quoted when you sign is rarely the price you pay once leaving gets expensive. Security is worse than most categories here, because ripping out an endpoint agent or a network proxy touches every device and every user.

I'd also weigh resilience. SiliconANGLE reminds readers of CrowdStrike's July 2024 faulty update, which hit an estimated 8.5 million Windows devices. Putting endpoint and network access with one vendor means one bad release process could, in the worst case, affect both layers. I'm not saying that will happen. I'm saying it belongs in your risk register.

Credit where due: if the single agent ships and the shared data set is real, this could be the most coherent security platform on the market. I'd judge it on that shipped product, not the slide.

## What to do about it

**For security teams with a renewal in the next 12 months:**

- Ask both vendors for renewal price caps covering at least two years past the expected close. Sales teams want commitments before a deal closes, which gives you leverage you won't have later.
- If you're offered a Falcon Flex bundle, get per-product pricing broken out so you can tell later what each piece costs and drop one cleanly.
- Get data-export rights in writing: raw telemetry, policies and configurations, in documented formats, with a defined window after termination.
- Ask for a dated integration roadmap, especially for the single agent, and tie any multi-year discount to it.
- Price at least one credible alternative for each layer, even if you don't plan to switch. A real quote is the only leverage a sales team believes.

**For builders and platform engineers:**

- Keep your detections, logs and policies in neutral formats in a store you control. If your SIEM rules or access policies only live in one vendor's console, you've already been locked in.
- Wrap vendor APIs behind your own thin layer so swapping a provider means changing one module rather than every pipeline.

**For everyday users:** nothing changes for you right now. The agent on your work laptop keeps working the same way.

## What to watch next

- **Regulatory review.** Whether US or EU competition authorities open an in-depth review, which would push closing later and could add conditions.
- **The Zscaler shareholder vote.** With about 34% already committed through Chaudhry's voting agreements, opposition would have to be large to matter.
- **A dated single-agent roadmap.** Until CrowdStrike publishes one, read "unified platform" as a description of the contract.
- **Renewal behaviour.** Early reports of bundle-only pricing or reduced standalone discounts for Zscaler would tell you how the synergy targets are going to be met.
