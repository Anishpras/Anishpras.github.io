---
title: "Visa and NBX's Flex Card: one card for kroner and stablecoins"
description: "Visa, NBX, Tieto and IDT Finance plan a 2027 card that pays from fiat or stablecoin balances. How Visa Flexible Credential works and who carries the risk."
category: fintech
tags:
  - "stablecoins"
  - "visa"
  - "card issuing"
  - "mica"
  - "payments infrastructure"
createdAt: 2026-11-27T12:34:00.000Z
updatedAt: 2026-11-27T12:34:00.000Z
tldr: "Visa, NBX, Tieto and IDT Finance plan an NBX Visa Flex Card for 2027 that pays from fiat or stablecoin balances on one card, debit first in five European countries. Card networks are absorbing stablecoins as one more funding source."
keyTakeaways:
  - "Visa announced on 26 November 2026 that it, NBX, Tieto and IDT Finance plan an NBX Visa Flex Card, expected in 2027."
  - "It launches with debit in Norway, Sweden, Denmark, Finland and Germany; Poland and traditional credit are planned later."
  - "Visa Flexible Credential lets one card number route each purchase to a chosen balance, using rules evaluated at authorization."
  - "The merchant still gets a normal Visa payment. The stablecoin is a funding source behind the card, so the card rails do not change."
  - "Builders should copy the pattern: abstract funding sources behind one credential, and be explicit about who carries conversion and redemption risk."
sources:
  - title: "Visa and NBX plan single-card payments from traditional currency and stablecoin balances across five European markets"
    url: "https://news.europawire.eu/visa-and-nbx-plan-single-card-payments-from-traditional-currency-and-stablecoin-balances-across-five-european-markets/eu-press-release/2026/11/26/13/48/03/189766/"
    publisher: "EuropaWire (Visa release)"
  - title: "Visa and NBX plan stablecoin-linked payment card"
    url: "https://www.electronicpaymentsinternational.com/news/visa-and-nbx-plan-stablecoin-linked-payment-card/"
    publisher: "Electronic Payments International"
  - title: "Visa and NBX Launch Stablecoin-Linked Flex Card for Seamless Everyday Spending"
    url: "https://ffnews.com/news/visa-and-nbx-to-make-stablecoins-easier-to-use-for-everyday-spending-545b441f"
    publisher: "FF News"
  - title: "NBX selects Tieto Banktech to support digital and physical payment cards for stablecoin users"
    url: "https://www.tieto.com/en/newsroom/press-releases/2026/nbx-selects-tieto-banktech-to-support-digital-and-physical-payment-cards-for-stablecoin-users/"
    publisher: "Tieto"
  - title: "Visa Flexible Credential Goes Global: Transforming the Card for a Digital Future"
    url: "https://investor.visa.com/news/news-details/2024/Visa-Flexible-Credential-Goes-Global-Transforming-the-Card-for-a-Digital-Future/default.aspx"
    publisher: "Visa"
  - title: "Visa Flexible Credential: How-to"
    url: "https://developer.visa.com/docs/visa-flexible-credential/docs-how-to"
    publisher: "Visa Developer"
---

Visa and Norwegian Block Exchange (NBX) plan a card that pays from either a normal currency balance or a stablecoin balance, with no second card and no manual swap first. It is expected in 2027, debit first, in five European countries. I think the bigger point is about who is adapting to whom: the card network is folding stablecoins in as one more funding source behind a familiar card number, so it is not being replaced.

## What happened

On 26 November 2026, Visa announced that it, NBX, Tieto and IDT Finance plan to launch the NBX Visa Flex Card. The release was datelined London and distributed through EuropaWire. Electronic Payments International and FF News reported the same details. Each company has a defined role: Visa supplies the network, NBX the digital-asset side, Tieto Banktech the card and processing technology, and IDT Finance the issuing. IDT Finance issues through Justcards (Europe) Limited, which the Malta Financial Services Authority authorises.

The card runs on Visa Flexible Credential. According to the release, eligible NBX customers will be able to set payment preferences across their balances. Visa's example: use a local-currency balance for everyday spending and an eligible US dollar balance for dollar purchases, on the same card. The companies say this "may" mean fewer currency conversions.

The launch is expected in 2027, with debit first, in Norway, Sweden, Denmark, Finland and Germany. Poland is planned for later. NBX also plans to add more funding sources to the same credential over time, including traditional credit.

NBX is regulated by Finanstilsynet, Norway's financial supervisor, and holds an e-money institution (EMI) licence and a crypto-asset service provider (CASP) licence under MiCA, the EU's Markets in Crypto-Assets regulation. It is listed on Euronext Growth Oslo and issues USDM, a dollar-backed stablecoin on Cardano, in the European Economic Area. Visa's Mathieu Altwegg said the credential "gives consumers more choice in how they pay, through one familiar credential."

The plumbing was announced earlier. In September 2026, Tieto said NBX had picked Tieto Banktech for card issuing: administration, authorisations, PIN services, card production and financial-crime monitoring. IDT Finance would act as BIN sponsor, meaning NBX can run a card programme without its own banking licence or direct Visa membership.

## Why it matters

The standard crypto-card setup is clunky. Your stablecoins sit in one wallet and your spending money sits in a card account, and you move value between them before you can pay. This design takes out that step. The holder chooses which balance pays, and the merchant takes an ordinary Visa payment.

That is the strategic part. For years the pitch for stablecoins in payments was that they would route around card networks. What is actually happening is that the networks are making stablecoins one more thing a card can draw on. Merchants change nothing, acceptance stays universal, and Visa keeps the transaction. I covered a different version of the same pull this week with [Payoneer's trust bank](/blog/payoneer-occ-stablecoin-trust-bank), where a payments company wants stablecoins inside a closed system it controls. Here the control point is the card credential.

The winners are clear: NBX gets a spending product without becoming a bank, Tieto and IDT Finance sell infrastructure, and Visa gets volume. The losers are standalone crypto cards that depend on a one-off conversion and make money on that spread.

## How a flexible credential routes a payment

A normal card number maps to exactly one account. A flexible credential maps one card number to several funding sources and decides which one pays each time you use it. Visa launched it widely in November 2024. Live examples include Sumitomo Mitsui Card's Olive card in Japan and the Affirm Card in the US, and Liv in the UAE uses it to route purchases to the matching currency account.

Visa's developer documentation shows the moving parts. The issuer enrolls a card, links funding sources to it, and attaches rules. Rule types include a one-time override, time windows, amount ranges, merchant category, transaction type, individual merchant, and currency-based routing for cross-border purchases. A default rule covers the normal case, and a fallback rule, which must be the lowest priority, covers cases where no rule matches or the chosen source can't pay.

The decision happens at authorization. When a pending transaction arrives, Visa's Authorization Decision API returns a routing recommendation based on the issuer's and cardholder's rules. The merchant sees a regular authorization either way.

For NBX, a stablecoin balance is one of those funding sources. Exactly how a USDM balance becomes euros or kroner for settlement isn't described in the announcements I read, so I'm not going to guess at it. Whatever the mechanism, the conversion or ledger move has to clear in the time an authorization allows.

## My take

I think this is the most realistic path for stablecoins in consumer payments right now, and I give Visa credit for it. When the rail, the card terminal and the dispute process stay the same, adoption is about distribution, and Visa has plenty of it.

My caution is about risk, because nobody in the release says who holds it. My reading, which is analysis and not something the companies stated: the issuer side, IDT Finance through its programme with NBX, has to settle with Visa in fiat on time. If a stablecoin balance funds a purchase, someone has to turn that token into settlement currency at a rate fixed at authorization, and carry the gap until it is converted. If the token slips off its peg in between, or redemptions slow down, that gap is someone's loss. Visa's release does say USDM holders can redeem from NBX at par, subject to the white paper and terms. It also says an e-money token is not a bank deposit and is not covered by deposit guarantees. Both points matter for what a holder actually owns.

Compliance gets layered too. NBX has MiCA duties as a crypto service provider, IDT Finance has card-issuing duties, and Tieto runs fraud and transaction monitoring. Three parties for one swipe works well when the contracts are clear and badly when an incident sits between two of them.

This feels familiar from my own work. On the AI agent platform I build at Assistable AI, the hard part of a multi-provider design is never the routing rule. It is deciding which system is the source of truth when two disagree, and what happens on a timeout. Ambiguous outcomes are where the money goes missing. I've written about [safe retries after ambiguous tool timeouts](/research/safe-retry-ambiguous-tool-timeout) for agents, and a stablecoin-funded authorization that times out mid-conversion is the same problem with money attached.

## What to do about it

**For builders:** Copy the abstraction. Put funding sources behind one credential and route with explicit, prioritised rules, including a fallback. Make every conversion idempotent with a reference you can reconcile later, and log which rule chose which source for every transaction. Customer support will need that record.

**For teams and companies:** Write down who holds conversion risk, depeg risk and redemption delay before launch. That means FX windows, a rate locked at authorization, and what happens on a refund days later when rates have moved. Refunds and chargebacks on stablecoin-funded purchases are where I'd expect edge cases.

**For everyday users:** Read what the card is legally. At launch it is a debit product, and a stablecoin balance is an e-money token, not a bank deposit. Check the conversion terms for each balance before relying on it abroad.

## What to watch next

- **The 2027 launch terms:** whether NBX publishes conversion fees, the rate source and refund handling for stablecoin-funded purchases.
- **Which balances are live on day one.** The release says "supported" stablecoin balances without naming them, so the list, and whether USDM is on it, is still open.
- **Credit on the same card.** NBX says traditional credit comes later, and I'd want to see how a stablecoin balance and a credit line rank against each other in the routing rules.
- **Copycats.** If other MiCA-licensed exchanges sign Visa Flex programmes in 2027, that confirms the absorb-not-replace pattern. If none do, this is a one-off.
