---
title: "Klarna in Adyen's agent checkout: who pays when the AI buys wrong"
description: "Klarna is the first non-card option in Adyen's AI agent checkout. What that means for liability, double charges, consent and audit trails in agent payments."
category: fintech
tags:
  - "agentic commerce"
  - "payments"
  - "buy now pay later"
  - "ai agents"
  - "idempotency"
createdAt: 2026-11-23T12:28:00.000Z
updatedAt: 2026-11-23T12:28:00.000Z
tldr: "Klarna went live as the first non-card payment option in Adyen Agentic on 20 November. Agent checkout now spans cards and credit products, so consent records, idempotent payment calls and audit trails matter more than the launch itself."
keyTakeaways:
  - "Klarna is the first non-card method in Adyen Agentic, and merchants already offering Klarna through Adyen can switch it on without new integration work."
  - "The shopper still reviews and confirms every purchase, which keeps a human consent step in the loop for now."
  - "Unlimit joined Visa's Agentic Ready programme to test agent-initiated payments end to end, including refunds, disputes and reconciliation."
  - "Consumer Reports and Affirm published a draft framework for AI payment recommendations; guided models passed 71.8% of test cases versus 48.6% without it."
  - "Builders should treat every agent payment call as a retry hazard: idempotency keys, a per-intent ledger and a consent record are the minimum."
sources:
  - title: "Adyen Merchants Can Now Offer Klarna in AI Agent Checkout"
    url: "https://investors.klarna.com/News--Events/news/news-details/2026/Adyen-Merchants-Can-Now-Offer-Klarna-in-AI-Agent-Checkout/default.aspx"
    publisher: "Klarna"
  - title: "Adyen and Klarna Bring Payment Options Beyond Cards to AI Shopping"
    url: "https://www.pymnts.com/commerce/ecommerce/2026/adyen-taps-klarna-to-enable-agentic-commerce-payment-options-beyond-cards/"
    publisher: "PYMNTS"
  - title: "Adyen Announces Adyen Agentic As the Universal Translator for the Next Era of Commerce"
    url: "https://www.adyen.com/press-and-media/adyen-agentic"
    publisher: "Adyen"
  - title: "Visa Intelligent Commerce"
    url: "https://developer.visa.com/capabilities/visa-intelligent-commerce"
    publisher: "Visa Developer"
  - title: "Unlimit Joins Visa's Agentic Ready Program to Power the Next Era of AI-Driven Commerce"
    url: "https://www.unlimit.com/blog/press-release/unlimit-joins-visas-agentic-ready-program-to-power-the-next-era-of-ai-driven-commerce/"
    publisher: "Unlimit"
  - title: "Consumer Reports and Affirm Partner to Advance Consumer-First AI Payments"
    url: "https://www.financialcontent.com/article/bizwire-2026-11-18-consumer-reports-and-affirm-partner-to-advance-consumer-first-ai-payments"
    publisher: "Business Wire"
---

On 20 November, Klarna became the first payment option other than cards inside Adyen Agentic, Adyen's toolkit for letting AI agents check out on a merchant's behalf. That sounds like a product checkbox. It matters because agent checkout now reaches credit products, and the open questions about who approved a purchase, who pays when it goes wrong, and how a payment avoids running twice get harder once a loan is attached.

## What happened

Three agentic payments announcements landed in the same week.

**Adyen and Klarna.** According to the joint announcement published by Klarna and covered by PYMNTS, shoppers can now pay with Klarna when an AI agent checks out for them through Adyen Agentic. The agent shows the same Klarna options the merchant already offers (pay in full, interest-free instalments or financing), and the shopper reviews and confirms each purchase before it completes. Merchants already offering Klarna through Adyen can turn it on without new integration work. Adyen built it on Klarna's open payment handler, a published specification any payment provider can use, and Adyen is the first partner to take it live. Klarna's Darren Moore said: "Agentic commerce only works if shoppers keep the choice and control they have at any other checkout." Neither company named specific markets.

For context, Adyen launched Adyen Agentic on 16 June in limited availability for US enterprise merchants. It has three layers: a product feed, a cart layer that connects to existing checkout and order systems, and a payments layer covering authentication, token portability and fraud. Adyen says it works across Google's Universal Commerce Protocol (UCP), OpenAI's Agentic Commerce Protocol (ACP) and the Agent Payments Protocol (AP2).

**Unlimit and Visa.** On 20 November, payments company Unlimit said it had joined Visa's Agentic Ready programme for acceptance. The testing covers how payment credentials and authentication data are handled for agent-initiated purchases, end-to-end transaction flows, and post-purchase steps: refunds, disputes and reconciliation. Unlimit has not published results.

**Consumer Reports and Affirm.** On 18 November, the two published a draft instruction framework telling AI assistants how to recommend a payment method: compare total borrowing cost, flag missed-payment risk, and suggest alternatives including paying in full, waiting or not buying. In their case study, the average pass rate across four model configurations was 71.8% with the framework and 48.6% without it. They describe it as experimental and not ready for everyday consumer use.

## Why it matters

Most agent checkout so far has meant a card token. Cards come with decades of dispute rules, so when an agent buys the wrong thing there is at least a known path to a chargeback. Buy now, pay later (BNPL) adds a lender to the transaction. A mistaken agent purchase is no longer only a refund problem; it can become a repayment schedule.

That shifts the weight onto three questions. Did the shopper approve this exact purchase? Did the payment run once? Can anyone reconstruct what happened afterwards? The Klarna flow answers the first with a human confirmation on every purchase. The Visa testing Unlimit described goes straight at the third, since refunds, disputes and reconciliation are where unclear evidence turns into lost money.

The Consumer Reports and Affirm work points at a quieter risk. An agent that picks the payment method is making a credit decision for someone. If its instructions favour whatever checks out fastest, it will steer people into financing they didn't need.

## How agent checkout works

Strip away the branding and an agent payment has four parts.

1. **A credential the agent can use but not see.** In Visa Intelligent Commerce, a card is enrolled once and Visa issues a token. The agent stores the token reference, never the card number. Mastercard has its own network programme, Agent Pay, which Adyen's launch announcement also cites.
2. **Proof the human is present and consents.** Visa ties the token to the consumer's device with a Visa Payment Passkey, a FIDO-based credential, and falls back to step-up checks such as a one-time code when needed. Visa's developer documentation says that if passkey setup fails, the agent should not retry silently and should route the person through step-up instead.
3. **A consumer-approved instruction.** The agent submits an encrypted instruction describing what the person approved, and Visa releases credentials against that instruction. This is the delegated part: the person authorises a bounded intent, and the agent acts inside it.
4. **A handler for the payment method.** Klarna's open payment handler fills this slot for a non-card method: a published specification that lets a payment provider add Klarna to agent checkout, so the agent can show the merchant's existing Klarna options.

The design goal across all four is the same. The agent never holds raw credentials, and every payment can be traced to an explicit human approval.

## My take

I think the Adyen and Klarna integration is a sensible step, and the "shopper confirms every purchase" rule is the most important line in the announcement. I build an omnichannel AI agent platform across voice, SMS, WhatsApp and web chat, and the failure I worry about most in production is a model that is confidently wrong at the moment it calls a tool, rather than one that is obviously broken. A human confirmation step is a cheap defence against that.

Liability is where I'm not convinced the industry has an answer yet. None of these announcements says who carries the loss when an agent buys the wrong size, the wrong quantity or the wrong product with a confirmed Klarna plan. My reading, and it is a reading, not legal advice: whoever holds the best evidence will win the dispute. That makes audit logs a commercial asset. I wrote about what those logs still need to prove after sensitive data is redacted in [my research on audit logs](/research/audit-logs-after-redaction).

The risk I'd bet on first is the double charge. Agents call payment tools over networks that time out. If the call times out, the agent doesn't know whether the payment went through, and a naive retry can charge twice or open two instalment plans. In my [research on safe retries after ambiguous tool timeouts](/research/safe-retry-ambiguous-tool-timeout), a single status check before retrying still produced duplicates when status reads lagged; what worked was a stable idempotency key per intent plus reconciling status reads and webhooks before acting again. Rotating the key on each retry brought every duplicate back. With BNPL, a duplicate is a second loan for someone who meant to buy once.

I'll also give credit where it's due. Klarna publishing its handler as an open spec, and Consumer Reports and Affirm publishing a framework with pass rates, are the right instincts: things you can test, not slogans.

## What to do about it

**For builders:** Generate one idempotency key per purchase intent and reuse it on every retry. After a timeout, reconcile the payment status and any webhooks before calling again, and confirm your provider actually deduplicates on that key. Log the exact item, price, payment option and confirmation the shopper saw, with a timestamp, next to the payment reference. If you choose the payment method for the user, write the instructions down and test them the way Consumer Reports and Affirm did.

**For merchants and payment teams:** If you already offer Klarna through Adyen, switching it on is easy; preparing your dispute process is the harder part. Make sure order records can tell you which agent placed an order and what the shopper confirmed. Ask your payment provider how agent-initiated transactions are flagged in reports and disputes.

**For everyday users:** Read the confirmation screen properly, especially when an instalment plan is offered. Keep agent purchase limits narrow, and check your Klarna or card app after an agent buys something to confirm it ran once.

## What to watch next

- Whether Adyen names markets beyond the US for Klarna in agent checkout, and which non-card method it adds next.
- Published results from Visa's Agentic Ready acceptance testing, especially dispute and refund outcomes.
- Any network or BNPL provider rule that states who bears the loss for a confirmed but mistaken agent purchase.
- Whether a mainstream AI assistant adopts the Consumer Reports and Affirm framework, or a version of it, in production.
