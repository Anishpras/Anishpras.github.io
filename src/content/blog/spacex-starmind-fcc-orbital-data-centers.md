---
title: "SpaceX Starmind's FCC Grant: AI Infrastructure or an Orbital Land-Grab?"
description: "The FCC let SpaceX deploy up to 1 million Starmind data centre satellites. The grant covers backup radio, not compute. A builder's read on what it means."
category: hardware
tags:
  - "spacex"
  - "starmind"
  - "fcc"
  - "orbital data centers"
  - "satellites"
  - "ai infrastructure"
createdAt: 2026-11-27T12:31:00.000Z
updatedAt: 2026-11-27T12:31:00.000Z
tldr: "On 25 November the FCC authorised SpaceX's Starmind constellation of up to 1,000,000 orbital data centre satellites, with milestones from 2033 to 2040. The licence covers backup radio links; cooling, cost and debris above 600 km are still open."
keyTakeaways:
  - "The FCC Space Bureau granted SpaceX authority on 25 November 2026 for up to 1,000,000 Starmind satellites in 50 km shells between 500 and 1,002 km, granted in part and deferred in part."
  - "The licence itself covers only backup and emergency telemetry, tracking and command radio in 18.8-19.3 GHz and 28.6-29.1 GHz, on an unprotected, non-interference basis. Primary traffic runs over laser links to Starlink."
  - "Milestones: one satellite operating by 25 November 2033, 10% by 2035, 50% by 2038 and the full constellation by 25 November 2040, or the authorisation lapses."
  - "SpaceX must file a modification with a final debris plan before deploying any Starmind satellite above 600 km; its request to dispose of satellites into other orbits instead of re-entry was deferred."
  - "SpaceX's own IPO filing said orbital compute involves unproven technologies and may not achieve commercial viability, and the FCC explicitly declined to judge feasibility."
sources:
  - title: "SpaceX Orbital Data Center System (Starmind), Memorandum Opinion and Order and Authorization, DA 26-1273"
    url: "https://docs.fcc.gov/public/attachments/DA-26-1273A1.pdf"
    publisher: "Federal Communications Commission"
  - title: "FCC Authorizes 1 Million Satellites for Data Centers in Space"
    url: "https://docs.fcc.gov/public/attachments/DOC-427572A1.pdf"
    publisher: "Federal Communications Commission"
  - title: "SpaceX wins FCC approval to deploy 1 million orbital data center satellites"
    url: "https://www.cnbc.com/2026/11/25/spacex-fcc-satellite-approval.html"
    publisher: "CNBC"
  - title: "FCC clears SpaceX to put up to a million satellites in orbit for Starmind data center network"
    url: "https://www.geekwire.com/2026/fcc-clears-spacex-million-satellites-starmind-data-center/"
    publisher: "GeekWire"
  - title: "SpaceX gets FCC approval to deploy 1 million satellites for its AI orbital data center"
    url: "https://www.engadget.com/2329071/spacex-gets-fcc-approval-to-deploy-1-million-satellites-for-its-ai-orbital-data-center/"
    publisher: "Engadget"
  - title: "SpaceX's IPO filing says its orbital data centres may never work. Three months ago, Musk called them a no-brainer."
    url: "https://thenextweb.com/news/spacex-orbital-data-centres-ipo-risk-disclosure"
    publisher: "The Next Web"
---

The US Federal Communications Commission (FCC) has authorised SpaceX to put up to one million "orbital compute module" satellites into low Earth orbit for a space data centre network called Starmind. That headline number makes it sound like the US just approved a vast AI build-out. Read the order and the licence is much narrower: it covers backup radio links and sets deployment deadlines that run to 2040, while the hard questions about power, heat and cost are left entirely to SpaceX.

## What happened

On 25 November 2026 the FCC's Space Bureau released a Memorandum Opinion and Order (DA 26-1273) granting SpaceX's application "in part" and deferring it "in part". The FCC's press release calls it "the first authorization in U.S. history for a constellation of data centers in space."

The order authorises a non-geostationary constellation of 1,000,000 satellites in orbital shells each 50 km thick, at altitudes from 500 to 1,002 km, in 30-degree and sun-synchronous inclinations. SpaceX filed the application on 30 January 2026.

What the FCC actually licensed is spectrum. The grant covers backup and emergency telemetry, tracking and command (TT&C, the radio channel used to steer and monitor a satellite) in the Ka-band: 18.8-19.3 GHz down and 28.6-29.1 GHz up. These links are unprotected and must not interfere with anyone else. The order notes that Starmind "will rely on optical links for communications", meaning lasers between Starmind and Starlink satellites.

The deadlines are firm. SpaceX must have one satellite operating by 25 November 2033, 10% of the constellation by 25 November 2035, 50% by 25 November 2038 and all of it by 25 November 2040. Miss a milestone and the authorisation becomes "null and void". The FCC also waived the usual surety bond and processing-round rules.

On debris, the Bureau found SpaceX's plan compliant only for satellites below 600 km. Before deploying anything higher, SpaceX must file a modification with a final debris mitigation plan. Its request to retire higher satellites into "Earth disposal orbits or heliocentric orbits" instead of burning them up in the atmosphere was deferred for lack of information.

Kuiper Systems (Amazon Leo), Viasat and the American Astronomical Society (AAS) all filed petitions to deny. All three were denied. CNBC reports that Amazon's March petition called Starmind a "lofty ambition rather than a real plan". GeekWire reports that SpaceX said each satellite will carry Nvidia Rubin GPUs and Vera CPUs.

## Why it matters

The real value of this grant is position. Under the FCC's new milestone rules SpaceX has seven years to get one satellite working and fourteen to finish. Meanwhile it holds an authorisation for a million slots across six named shells. The order says the Bureau "declines to invent a de facto rule" capping the number of satellites in similar orbits, and that it will not substitute "the government's judgment regarding the viability of business endeavors" for SpaceX's.

That is a defensible regulatory stance. It also means the approval tells you nothing about whether orbital compute works. The FCC said so directly: comments doubting feasibility, thermal management, efficiency against ground data centres and economics all fall outside its radio mandate.

Competitors get pressure without clarity. Carr's statement mentions "many competitors working on their own orbital data centers", and CNBC notes Google's Project Suncatcher and Blue Origin's Project Sunrise. Being first to a grant like this sets the template the next applicants will be judged against.

## How orbital compute is supposed to work

The pitch is simple. In the right orbit a satellite sees the sun almost constantly, so solar panels can feed accelerators without a grid connection, land or water. Results travel back over laser links through Starlink.

The physics is less simple. Space is a vacuum, so there is no air to carry heat away. Every watt a GPU burns has to leave the satellite as infrared radiation from a radiator. Astrophysicist Adam Becker told AP, as quoted by Engadget, that there are "basic physical limits" to radiating that much heat. The AAS raised a related point in its petition: a million warm satellites could brighten the infrared sky. The FCC called that outside its scope.

Latency is better than people assume. Light covers 550 km in under 2 milliseconds, so the raw distance is not the problem. The real cost is the hops: Starmind to Starlink, Starlink to a ground gateway, gateway to your service. That suits batch work such as training runs and offline inference. It suits a live voice agent much less.

Then there is repair. A ground data centre swaps a failed GPU in an afternoon. In orbit a failed board stays failed until the satellite is retired.

## My take

I think this is a land-grab first and infrastructure maybe later, and the paperwork supports that reading.

The strongest evidence comes from SpaceX itself. In its IPO filing, as reported by The Next Web, the company warned that its plans "involve significant technical complexity and unproven technologies, and may not achieve commercial viability." I take that more seriously than the "Kardashev II civilization" language in the FCC press release.

I build voice and messaging agents, and the number I live by is cost per conversation. For compute, that becomes cost per GPU hour, and nobody has published one for orbit. To get there you need launch cost per kilogram, radiator mass per kilowatt, accelerator life under radiation, the failure rate you can't repair, and the spread of that capex over a satellite's useful life. The Next Web cites a Google analysis that launch could fall below $200 per kilogram by the mid-2030s. That is a forecast, not a price list.

I'll give SpaceX credit where it is due. It owns the launch vehicles and the laser network, which no competitor can match. If anyone can run this experiment at scale, it is SpaceX. But a licence with a 2033 first-satellite deadline is a reservation. It isn't capacity.

## What to do about it

**For builders:** Don't put orbital compute in any capacity plan before 2030. If you want to track it, write down the inputs you'd need for a cost-per-GPU-hour comparison with your current cloud bill and fill them in only from published numbers.

**For teams designing distributed jobs:** If orbital or other intermittent compute ever arrives, it will look like a node that can vanish mid-task. Design jobs to be idempotent and checkpointed now. I wrote about what goes wrong when a tool call times out with an unknown outcome in my report on [safe retries after ambiguous tool timeouts](/research/safe-retry-ambiguous-tool-timeout). The same logic applies to a GPU on the far side of a laser link.

**For founders pitching "space compute":** Investors will now cite this grant. Be ready to show thermal and cost numbers, because the FCC explicitly did not check them.

**For everyday users:** Nothing changes for your apps. The visible effects are astronomy concerns and more satellites in the night sky over the next decade.

## What to watch next

- **The above-600 km debris filing.** Four of the six nominal shells sit above 600 km. Until SpaceX files and wins that modification, most of the constellation can't legally deploy.
- **A first Starmind satellite with real thermal data.** Watts dissipated per square metre of radiator, and how long the GPUs last, would tell us more than any filing.
- **Competing decisions.** The FCC says it is reviewing other orbital data centre applications. Whether they get the same waivers will show if this is a template or a one-off.
- **SpaceX's 30-day window.** SpaceX has until roughly late December to decline the conditioned grant. Silence counts as acceptance, so expect it to stand.
