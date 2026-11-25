---
title: "Huawei's Android-Free HarmonyOS Passes 100M: A Real Third Platform"
description: "Huawei says native HarmonyOS now runs on over 100 million phones, tablets and PCs. What a third mobile platform means for app developers and the split tech stack."
category: big-tech
tags:
  - "huawei"
  - "harmonyos"
  - "arkts"
  - "mobile development"
  - "china tech"
createdAt: 2026-11-25T12:33:00.000Z
updatedAt: 2026-11-25T12:33:00.000Z
tldr: "Huawei announced on 24 November that more than 100 million devices run native HarmonyOS 5, 6 and 7, which cannot run Android apps. That makes it a third mobile platform at real scale, and app teams that care about China now have to decide whether to build for it."
keyTakeaways:
  - "Huawei says more than 100 million smartphones, tablets and PCs now run HarmonyOS 5, 6 or 7, about 25 months after the Android-free architecture launched commercially."
  - "These versions run no Android code and no Linux kernel, so existing Android APKs do not work; apps have to be rebuilt, typically in ArkTS, Huawei's TypeScript-based language."
  - "Huawei reports more than 460,000 apps and services and more than 12 million registered developers; both are company figures, and the device count is not split by device type or region."
  - "Counterpoint put HarmonyOS at 19% of China smartphone sales in Q1 2026 and 24% in Q2 2026, which makes it hard to ignore for any app that wants Chinese users."
  - "For most teams outside China, the right move is to keep business logic portable and wait for a clear market reason before writing a native HarmonyOS client."
sources:
  - title: "Huawei's homegrown HarmonyOS tops 100 million devices"
    url: "https://english.news.cn/20261124/fa46a8d9b6db4a07823d65c54ca34274/c.html"
    publisher: "Xinhua"
  - title: "Huawei's HarmonyOS crosses 100 million devices, taking on Apple beyond smartphones"
    url: "https://www.digitimes.com/news/a20261124VL221/huawei-harmonyos-operating-system-apple-2026.html"
    publisher: "DIGITIMES"
  - title: "Huawei passes 100m mark in HarmonyOS takeup"
    url: "https://gbcode.rthk.hk/TuniS/news.rthk.hk/rthk/en/component/k2/1879073-20261124.htm?spTabChangeable=0"
    publisher: "RTHK"
  - title: "Huawei's native HarmonyOS tops 100 million installations, third-party tracker estimates"
    url: "https://technode.com/2026/11/16/huaweis-native-harmonyos-tops-100-million-installations-third-party-tracker-estimates/"
    publisher: "TechNode"
  - title: "Global Smartphone Sales Share by Operating System"
    url: "https://www.counterpointresearch.com/en/insights/global-smartphone-os-market-share"
    publisher: "Counterpoint Research"
  - title: "ArkTS - HUAWEI Developers"
    url: "https://developer.huawei.com/consumer/en/arkts/"
    publisher: "Huawei Developers"
---

Huawei says more than 100 million phones, tablets and PCs now run native HarmonyOS, the versions with no Android inside them. That turns HarmonyOS from an interesting experiment into a third mobile platform at a scale app teams have to take seriously, at least for China. I think it is also the clearest sign yet that the consumer tech stack is splitting along political lines, from the kernel up.

## What happened

On 24 November 2026, Huawei announced that devices running HarmonyOS 5, 6 and 7 had passed 100 million, according to Xinhua and DIGITIMES. Xinhua, whose report RTHK also carried, says the count covers smartphones, tablets and computers. Huawei introduced the new architecture with HarmonyOS 5 in October 2024, and it took about 25 months from commercial launch to reach the milestone.

Huawei also gave ecosystem numbers, as reported by Xinhua: more than 460,000 apps and services, and more than 12 million registered developers. These are company figures. Huawei did not break the 100 million down by device type or by country, so we don't know how many are phones.

The milestone was not a surprise. On 16 November, TechNode reported that a third-party tracker, Qimiao Toolbox, estimated from AppGallery data that HarmonyOS 5 and later had passed 100 million installations. Huawei's previous official figure, from 28 September, was more than 90 million devices on HarmonyOS 6 or 7.

## Why it matters

For a decade, "mobile" meant two platforms. If you shipped an Android app and an iOS app, you reached almost every smartphone user on earth. HarmonyOS 5 and later break that assumption, because they dropped Android app compatibility. Xinhua describes the system as having its own kernel, programming language and AI framework, built without the Linux kernel or Android open-source code. An Android APK simply does not run on it.

That matters because of where these devices sit. Counterpoint Research put HarmonyOS at 19% of China smartphone sales in Q1 2026 and 24% in Q2 2026. One caveat: Counterpoint's figure is for the HarmonyOS brand in sales, and the page I read doesn't say whether it separates native versions from older Android-compatible ones. Still, a platform near a quarter of new phone sales in the world's largest smartphone market is not one you can treat as a rounding error.

The winners are Huawei and Chinese app makers who already build for it. The people with a new problem are global companies that serve Chinese users through Android builds and assumed that would keep working.

## How a third mobile platform works

Every mobile platform is three layers. At the bottom is the operating system kernel, which manages memory, processes and hardware. In the middle are the frameworks and APIs that apps call to draw screens, take photos, send notifications and take payments. On top is the app store and its account system, which handles distribution, updates and billing.

Older HarmonyOS releases kept an Android compatibility layer, so Android apps could run on them. Native HarmonyOS removed it. Apps now target Huawei's own frameworks, and the main language is ArkTS. Huawei's developer site describes ArkTS as built on TypeScript's basic syntax, with stronger static checks added so more errors show up at compile time, plus a declarative UI style and built-in state management. ArkUI is the framework those declarative interfaces are written in.

If you have written React Native, SwiftUI or Jetpack Compose, the mental model will feel familiar: you describe what the screen should look like for a given state, and the framework redraws when the state changes. The code itself doesn't carry over. Your Kotlin or Swift views have to be rewritten, and every platform-specific integration, such as push notifications, sign-in, payments, maps and analytics, has to be swapped for the HarmonyOS equivalent.

That is the real cost of a third platform. The language is the easy part. The long tail of SDKs your app quietly depends on is the hard part.

## My take

I think 100 million is the number at which HarmonyOS stops being optional for anyone serious about China, and stays optional for almost everyone else.

I build an omnichannel AI agent platform at Assistable AI that runs across voice, SMS, WhatsApp and web chat. Every channel we add carries a fixed cost that never goes away: a new integration surface, new failure modes, new things to monitor and test. We only add one when the audience on it justifies that ongoing tax. A new mobile platform is the same decision at a bigger scale, and the honest answer for most Western startups is still "not yet".

I'm also not ready to take the ecosystem numbers at face value. "460,000 apps and services" is a Huawei count, and "services" can include lightweight mini-programs as well as full apps. "12 million registered developers" counts accounts, not people shipping production software. The device figure is more useful, and even that lacks a phone-versus-PC split.

The geopolitical part is what I find most significant. Huawei chose to rebuild the stack from the kernel up, with its own language and its own store, and Xinhua frames the milestone as a step toward an independent software ecosystem. When a company that size proves a parallel stack can reach 100 million devices in about two years, it lowers the perceived risk for other governments and companies that want the same independence. I'd bet we see more regional forks of the software stack, and that "write once, run everywhere" gets harder for anyone selling globally.

## What to do about it

**For builders:** Keep business logic out of your UI layer. If your pricing rules, validation and API clients live in a shared module or behind a well-documented backend API, a HarmonyOS client becomes a UI rewrite instead of a full rebuild. Make an inventory of every third-party SDK your app uses and check whether each has a HarmonyOS version. That list tells you the true porting cost faster than any estimate.

**For teams and companies:** Decide with data. If you have, or want, meaningful Chinese users, look at what share of them are on Huawei devices and whether your Android build still reaches them. If the answer is "we don't know", find out before the platform grows further. If China isn't in your plans, a responsive web app is a cheap way to stay reachable on any device without committing to a native client.

**For everyday users:** If you buy a Huawei phone running HarmonyOS 5 or later, check that the apps you rely on, especially banking and messaging, have native versions before you switch.

## What to watch next

- **A device breakdown.** If Huawei says how many of the 100 million are phones, and how many are outside China, we will know whether this is a phone platform or a China-only device family.
- **Global rollout.** Watch for native HarmonyOS phones sold outside China and for which major global apps ship native versions there.
- **Counterpoint's next quarterly data.** If HarmonyOS holds or grows from 24% of China sales, the case for building native apps gets stronger every quarter.
- **Tooling for cross-platform frameworks.** Mature HarmonyOS support in frameworks that teams already use would cut the cost of a third client sharply, and I'd treat that as the real adoption trigger.
