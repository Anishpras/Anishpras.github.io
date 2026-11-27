---
title: "Character.AI's Bankruptcy Shows Your Chat History Is an Asset"
description: "42 attorneys general object to Character.AI selling 21M+ users' chats in bankruptcy. What privacy policies promise in a sale, and what builders should change."
category: policy
tags:
  - "character.ai"
  - "privacy"
  - "bankruptcy"
  - "data minimisation"
  - "children's data"
  - "state attorneys general"
createdAt: 2026-11-27T12:32:00.000Z
updatedAt: 2026-11-27T12:32:00.000Z
tldr: "42 attorneys general are asking a Delaware bankruptcy court to block or restrict a sale of Character.AI's platform and chat data from 21M+ US accounts, arguing the buyer wouldn't have to honour its privacy policy or deletion requests."
keyTakeaways:
  - "A bipartisan coalition of 42 attorneys general (41 states plus DC), in an objection California announced on 24 November 2026, says the proposed buyer of Character.AI's consumer platform would not be bound by its privacy policy or users' deletion requests."
  - "The data at issue covers chat histories from more than 21 million US accounts, over 2.1 million of them registered to minors, linked to metadata such as IP addresses, according to the states."
  - "Character.AI says user information continues to be protected under its privacy policy and that users can still delete their accounts or export their data."
  - "US bankruptcy law only forces a privacy review when a policy restricts transfers, so the wording of your privacy policy decides what happens to user data in a sale."
  - "Builders should treat stored conversations as a liability: minimise, set short retention, and make deletion a contractual obligation that binds any acquirer."
sources:
  - title: "Attorney General Bonta Opposes Asset Sale of Character.AI Amid Child Safety Concerns"
    url: "https://oag.ca.gov/news/press-releases/attorney-general-bonta-opposes-asset-sale-characterai-amid-child-safety-concerns"
    publisher: "California Attorney General"
  - title: "41 states oppose Character.AI's proposed sale of children's data"
    url: "https://www.newsweek.com/character-ai-bankruptcy-childrens-data-sale-states-12769233"
    publisher: "Newsweek"
  - title: "Character.ai Wants to Sell Millions of User Chats to the Highest Bidder"
    url: "https://gizmodo.com/character-ai-wants-to-sell-millions-of-user-chats-to-the-highest-bidder-2000845664"
    publisher: "Gizmodo"
  - title: "42 attorneys general fight Character.AI's plan to auction users' chats"
    url: "https://thenextweb.com/news/character-ai-chats-auction-attorneys-general-bankruptcy"
    publisher: "The Next Web"
  - title: "11 U.S. Code § 363 - Use, sale, or lease of property"
    url: "https://www.law.cornell.edu/uscode/text/11/363"
    publisher: "Cornell Law School Legal Information Institute"
---

A coalition of 42 state attorneys general is asking a Delaware bankruptcy court to stop, or at least heavily restrict, a sale of Character.AI's consumer platform and the chat histories that come with it. The states say the proposed buyer would have no duty to follow Character.AI's privacy policy or honour deletion requests. If you build AI products, this is the clearest reminder yet that every conversation you store ends up on a balance sheet, and someone else may end up owning it.

## What happened

Character Technologies, the company behind Character.AI, filed for Chapter 11 bankruptcy in Delaware in October, according to Newsweek. Gizmodo reports that the company's own blog post cited "significant legal, regulatory, and operational headwinds".

The sale has two parts. Newsweek reports that Disney Worldwide Services offered $20 million for a nonexclusive licence to Character.AI's intellectual property and technology, and that Smirks and Pangs Acquisition LLC offered $10 million for the consumer platform and user data. The California attorney general's office says Smirks is the only disclosed bidder for that platform. The California office and Newsweek both say the company was set up in Delaware on 13 November 2026, one day before Character.AI picked it as the base bid. Newsweek reports that the judge approved it as lead bidder after its financial backer was disclosed. An auction is scheduled for 1 December if qualifying competing bids arrive, and The Next Web reports sale hearings on 3 and 4 December.

On 24 November, California Attorney General Rob Bonta announced that a bipartisan coalition of 42 attorneys general (41 states plus the District of Columbia) had objected to the sale. According to the states, the data covers chat histories from more than 21 million US accounts, over 2.1 million of them registered to minors. The chats are linked to profiles and metadata such as IP addresses, possible location data, and risk scores for flagged users. The states say users discussed self-harm, eating disorders and suicidal thoughts.

The coalition's core allegation is that the deal "imposes no requirements on the buyer", in the words of the California release. The buyer would not have to follow Character.AI's privacy policies, honour opt-out or deletion requests, or refrain from reselling the data without notice. The states point out that Character.AI's policy told users "we do not sell personal information for monetary consideration." They ask the court to reject the terms, reject Smirks as lead bidder, deny its proposed $350,000 break-up fee, and at minimum exclude children's chats and other sensitive data.

Character.AI's response, as reported by Newsweek, is that user information "continues to be protected" under its privacy policy, that its privacy and security practices have not changed, and that users can still delete their accounts or export their data. The California release notes the company told the court the bidder has no ties to it. At the coalition's urging, the court has ordered a consumer privacy ombudsman to assess the sale.

## Why it matters

Most people think of a chat app as a service. In bankruptcy it becomes a pile of assets, and the user database is often one of the few things with resale value. Here the platform and its data are priced at $10 million, half of what Disney offered for a licence to the technology.

The people who lose out are the ones who never signed the purchase agreement: users, and particularly minors, whose most private conversations are being priced. Whoever buys the data gets a dataset that is unusually sensitive and unusually easy to tie to a real person through IP addresses and account metadata.

It also lands just before new rules. Newsweek notes that California, Colorado, New York and Connecticut have chatbot safety laws taking effect on 1 January 2027. A buyer taking over this platform would inherit those obligations along with the data.

## How privacy policies work in bankruptcy

The relevant rule is section 363(b)(1) of the US Bankruptcy Code. If a company gave users a privacy policy that prohibits transferring personally identifiable information to unaffiliated parties, and that policy was in force when the case began, the company cannot sell that data unless the sale is consistent with the policy, or a consumer privacy ombudsman is appointed and the court approves the sale after a hearing.

That second path is weaker than most users assume. Under section 332, the ombudsman advises the court on the privacy policy, the likely privacy gains or losses for consumers, and alternatives that would reduce harm. The court then weighs the circumstances and checks that no one has shown the sale would break other laws. The role is advisory, and the judge decides.

The bigger catch is that the protection depends on the policy's wording. If a policy includes a "business transfer" clause allowing data to move to a successor in a merger, acquisition or bankruptcy, a sale can be "consistent with such policy" and the special review may not be required at all. A promise not to sell data "for monetary consideration" is about advertisers and data brokers, and it may not cover selling the whole company.

## My take

I think the attorneys general are right to treat chat logs as a different category from an email list, and I'd like to see the court at least carve out minors' chats. I'm not judging the bidder or anyone behind it; the allegations belong to the states, and Character.AI disputes the risk. My point is about the structure: a privacy promise that only lasts until the company runs out of money is a weak promise.

I help build an AI agent platform that reports 40M+ conversations across voice, SMS, WhatsApp and web chat, so I know how easily transcripts pile up. They're useful for debugging, evaluation and training, and storage is cheap, so the default is to keep everything forever. That default is how a company ends up with millions of sensitive conversations to auction.

At BlockWill we went the other way: client-side encryption and zero-knowledge workflows, so the company never holds readable secrets. If Character.AI's chats had been encrypted with keys only users held, there would be nothing readable to sell. Not every chat product can work that way, because server-side models need plaintext to respond. But the system needs plaintext only for seconds, while the business keeps it for years.

Metadata matters too. My research on [how several "minimal" data releases can leak a hidden attribute](/research/minimal-findings-hidden-attribute) is a reminder that stripping names from a dataset is not the same as anonymising it, and this one reportedly carries IP addresses and risk scores alongside the chats.

## What to do about it

**For builders:** Store less. Keep conversation transcripts on a short, documented retention window, and keep only the derived data you actually need (aggregate metrics, labelled failure cases). Separate identity from content so a chat log is not linked to an IP address by default. If you need long-term transcripts for evaluation, get explicit, separate consent and make it easy to withdraw.

**For teams and companies:** Read your own privacy policy's business-transfer clause with a lawyer and decide whether it says what you'd want a court to enforce. Consider a policy that prohibits transfer of conversation content to unaffiliated parties, which triggers the section 363 review. Make deletion requests a recorded obligation, with an audit trail, that any acquirer must honour. My report on [what audit logs need after redaction](/research/audit-logs-after-redaction) covers how to prove a deletion happened without keeping the deleted data.

**For everyday users:** If you have a Character.AI account, the company says you can still export your data or delete your account. More generally, assume anything you type into an AI companion app could outlive the company, and avoid sharing health details or anything you couldn't stand to see change hands.

## What to watch next

- **1 December auction:** whether any competing bids arrive, and whether the user data is sold as a single lot or split from minors' chats.
- **The ombudsman's report:** whether it recommends excluding sensitive or minors' data, deletion before transfer, or binding the buyer to the existing policy.
- **The 3–4 December hearings:** whether the judge rejects the break-up fee or attaches privacy conditions to the sale order.
- **1 January 2027:** how the new state chatbot safety laws apply to whoever ends up running the platform.
