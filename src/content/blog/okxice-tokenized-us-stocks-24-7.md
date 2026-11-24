---
title: "OKXICE opens 24/7 tokenized US stocks: what changes and what doesn't"
description: "OKX and ICE's OKXICE venue launched 24/7 tokenized US stock trading on 23 November. What it changes for custody, rights and pricing, and what stays the same."
category: fintech
tags:
  - "tokenization"
  - "tokenized stocks"
  - "sec innovation exemption"
  - "market structure"
  - "self-custody"
createdAt: 2026-11-24T12:33:00.000Z
updatedAt: 2026-11-24T12:33:00.000Z
tldr: "OKXICE, the OKX and ICE joint venture, launched round-the-clock trading of tokenized US stocks on 23 November under the SEC's innovation exemption. Trading hours changed; the underlying share, its market and its price discovery mostly did not."
keyTakeaways:
  - "OKXICE launched on 23 November for eligible US OKX customers, with 113 assets confirmed for a phased rollout and six crypto-linked stocks named for launch."
  - "Each token is a security entitlement backed one-to-one by a real share, held in the customer's own wallet; holders are not registered shareholders unless they convert."
  - "The venue runs under a temporary SEC exemption and is not subject to Regulation NMS or the fair-access rules that apply to registered exchanges."
  - "When US markets are closed, Securitize warns liquidity may be thinner, spreads wider and token prices may differ from the underlying stock."
  - "67 companies, including Apple, Microsoft and Nvidia, filed objections that keep their shares off the venue."
sources:
  - title: "OKXICE launches tokenized securities venue with 113 assets confirmed for 24/7 trading"
    url: "https://www.theblock.co/news/business/2026-11-23-okxice-launches-tokenized-securities-venue-444898"
    publisher: "The Block"
  - title: "Securitize Serves as Tokenization Provider for OKXICE's Newly Launched 24/7 Securities Trading Venue"
    url: "https://www.prnewswire.com/news-releases/securitize-serves-as-tokenization-provider-for-okxices-newly-launched-247-securities-trading-venue-302947862.html"
    publisher: "PR Newswire"
  - title: "Tokenized stocks face pushback as NYSE, Nasdaq pivot for a new market"
    url: "https://www.cnbc.com/2026/11/23/tokenized-stocks-face-pushback-as-nyse-nasdaq-pivot-for-a-new-market-.html"
    publisher: "CNBC"
  - title: "OKXICE to debut tokenized stock trading with Strategy, Coinbase, Circle this month"
    url: "https://www.coindesk.com/business/2026/11/10/okxice-to-debut-tokenized-stock-trading-with-strategy-coinbase-circle-this-month"
    publisher: "CoinDesk"
  - title: "Fidelity Investments, Strive, Etoro join OKX-ICE tokenized securities venue"
    url: "https://www.coindesk.com/business/2026/11/23/fidelity-investments-strive-etoro-join-okx-ice-tokenized-securities-venue"
    publisher: "CoinDesk"
---

On 23 November, OKXICE, the joint venture between crypto exchange OKX and NYSE owner Intercontinental Exchange (ICE), opened a venue where eligible US OKX customers can trade tokens backed by real US shares around the clock. It matters because the company that runs the New York Stock Exchange is now part-owner of a stock market that never closes. What it changes is narrower than the "24/7 Wall Street" framing suggests, and the gaps are where builders and retail investors should pay attention.

## What happened

The Block reported on 23 November that OKXICE had launched its Tokenized Securities Venue (TSV) inside the OKX app, with 113 assets confirmed. CoinDesk, citing the firm, said trading was scheduled to start at 12 p.m. Eastern that day, and Securitize, the venue's tokenization provider, put out a release at noon saying the venue "launched its TSV today with 113 assets confirmed for a phased rollout."

Phased is the key word. CNBC reported that tokenized shares of Coinbase, Robinhood, Strategy, Circle, Securitize and BitGo would be available at launch, with other assets going live on a rolling basis. Earlier in November, CoinDesk had counted more than 70 confirmed assets, including 59 exchange-traded funds (ETFs) from Direxion, and a spokesperson said not all of them would be available at the start. By launch day, Fidelity Investments, eToro, Strive and Vida Global had joined.

The venue runs under the Securities and Exchange Commission's (SEC) innovation exemption, which The Block describes as a temporary five-year order allowing limited onchain trading of tokenized US-listed stocks without registering as an exchange. Securitize's release adds that the venue is not registered with the SEC for these activities, has not been approved by the SEC, and is not subject to Regulation NMS (the rules that make US exchanges route orders to the best available price) or the fair-access rules for registered exchanges.

The exemption also gives issuers a say. CNBC explains that a platform must notify a company, which then has 30 days to object, and an objection keeps that company's shares off the venue. According to The Block, citing the venue's latest public notice, 67 companies have objected, including Apple, Microsoft, Nvidia, Amazon, Tesla and JPMorgan Chase.

## Why it matters

The obvious change is hours. A US stock trades on exchanges for six and a half hours a day on weekdays, plus extended sessions. Here you can buy a token of Coinbase at 3 a.m. on a Sunday.

The less obvious change is who controls the plumbing. CNBC frames this as exchanges trying to keep control of trading as tokenization arrives: Nasdaq is planning an issuer-led model with Kraken's parent Payward, and Bullish is buying transfer agent Equiniti. ICE chose to co-own a third-party venue instead. Whichever model wins decides who earns the trading fees in an always-on market.

The objections tell you who is not convinced. Of the 62 companies OKXICE originally targeted, 56 objected, by CoinDesk's tally. CNBC reports that some companies worry 24/7 trading could affect their stock price and complicate when they release news. That is why the launch list leans so heavily toward crypto-linked firms. The demand side is real, but the blue chips have not signed up.

## How a tokenized stock actually works

Strip away the branding and there are four layers.

1. **The share.** A real US share sits with a regulated intermediary. Securitize says its tokens are security entitlements held through Securitize Markets, a registered broker-dealer.
2. **The token.** Each token is a claim on one of those shares, backed one-to-one. It lives on X Layer, OKX's Ethereum layer-2 network (a cheaper, faster chain that settles back to Ethereum).
3. **The wallet.** Tokens sit in the customer's self-custodial wallet. OKXICE says it does not hold customer assets or private keys, and smart contracts restrict trading to eligible, identity-checked wallets.
4. **The market.** Prices come from automated market maker (AMM) pools on Uniswap v4. An AMM is a pool of two assets with a formula that sets the price from the ratio between them, so you trade against the pool rather than against a matched buyer or seller in an order book.

Now the parts that do not change. The token holder is not a registered shareholder of the company unless they convert; dividends and voting are passed through under the venue's terms. The company's real price is still discovered on regular exchanges during regular hours. And on a Saturday, nothing is happening to the underlying share at all.

That last point is the one I would underline. Securitize's own disclosure says that when US markets are closed, liquidity may be lower, spreads may be wider, and token prices may differ from the underlying market. Securitize also says "24/7" means scheduled availability, not a guarantee of uninterrupted trading or liquidity, and that trading is subject to symbol and volume limits and halts.

## My take

I think this launch is meaningful and also oversold. Meaningful, because ICE is a mainstream exchange operator putting its name on onchain settlement and self-custody of real securities. Oversold, because a weekend price on a thin AMM pool is a guess about Monday, not a price in the market-structure sense. If news breaks on a Saturday, the token will move, the real share cannot, and on Monday morning those two numbers will meet. Someone holding a leveraged Direxion ETF token through that gap carries risk the price chart won't show them.

Self-custody is where my BlockWill work makes me cautious. I spend a lot of time on key management and what happens when someone loses access. Holding a stock in your own wallet means a lost seed phrase can cost you a share of Coinbase, and there is no broker's helpdesk to restore it. Securitize lists loss of private keys among the risks. I'd like to see recovery design treated as seriously as trading hours.

I'm also not convinced the exemption's investor protections are well understood by retail users. The venue sits outside the best-price routing rules that registered exchanges follow. Securitize Markets is a SIPC member (the US scheme that covers some losses if a broker fails), but the release does not say how that applies to tokens in your own wallet. If I were a user, I'd want that answered in writing before depositing.

Credit where it's due: the disclosures are unusually direct about weekend pricing and limits. That honesty is worth more than the press quotes.

## What to do about it

**For builders in fintech:** If you show prices for tokenized stocks, label which venue and which hour a price comes from, and show the gap to the last regular-session close. Treat AMM quotes as indicative and test slippage at realistic order sizes. Onchain trades also hit ambiguous failures, where a transaction is submitted and the result is unclear; reconcile chain state before retrying, the same lesson as my [research on safe retries after ambiguous tool timeouts](/research/safe-retry-ambiguous-tool-timeout). And design wallet recovery and eligibility checks before growth features.

**For teams and companies:** If you are a public company, the 30-day objection window is your one lever under this exemption, so decide your policy before a notice arrives.

**For retail investors:** This is not investment advice, just how I'd approach it. Read the venue's public notice and risk disclosures first. Assume weekend prices can be wrong in both directions, avoid large orders when US markets are closed, and back up your wallet keys properly. Remember you hold an entitlement, not a direct registered share.

## What to watch next

- How far weekend token prices drift from Monday opening prices for Coinbase, Circle and Strategy, once a few weekends of data exist.
- Whether any of the 67 objecting companies reverse course, or whether the list keeps growing.
- Clarification on how SIPC coverage and investor protections apply to tokens held in self-custodial wallets.
- Nasdaq's issuer-led model, planned for the second quarter of 2027, as the direct comparison to OKXICE's third-party approach.
