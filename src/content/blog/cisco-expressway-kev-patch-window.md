---
title: "Cisco Expressway Hit After a Public PoC: Let KEV Set Your Patch Order"
description: "CISA added a 9.8 Cisco Expressway flaw to its exploited list with a three-day deadline. Why the PoC-to-attack window is shrinking and what to patch first."
category: security
tags:
  - "cisa kev"
  - "cisco expressway"
  - "vulnerability management"
  - "patch management"
  - "ai-assisted attacks"
createdAt: 2026-11-23T12:27:00.000Z
updatedAt: 2026-11-23T12:27:00.000Z
tldr: "CISA added four actively exploited flaws to its KEV catalog on 20 November, including a 9.8 Cisco Expressway bug that F6 saw exploited soon after a public PoC. Upgrade clustered Expressways to X15.5.20 and let KEV, not CVSS alone, drive patch order."
keyTakeaways:
  - "CVE-2026-76466 lets an unauthenticated attacker run commands as root on clustered Cisco Expressway-C and Expressway-E; the fix is X15.5.20 and Cisco lists no workaround."
  - "CISA added it to the KEV catalog on 20 November 2026 with a due date of 23 November, three days, alongside SAP NetWeaver, VMware vCenter and Apache Roller flaws."
  - "F6 says attackers exploited it shortly after a GitHub proof-of-concept and that their scripts showed signs of an AI assistant; that AI detail is F6's inference."
  - "Treat KEV membership as a patch-now signal for internet-facing edge devices, then check whether unpatched systems were already compromised."
sources:
  - title: "CISA Adds Four Known Exploited Vulnerabilities to Catalog"
    url: "https://www.cisa.gov/news-events/alerts/2026/11/20/cisa-adds-four-known-exploited-vulnerabilities-catalog"
    publisher: "CISA"
  - title: "Known Exploited Vulnerabilities Catalog"
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog?search_api_fulltext=CVE-2026-76466"
    publisher: "CISA"
  - title: "Cisco Expressway Series Remote Code Execution Vulnerability"
    url: "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-vcs-static-cred-hr7EWZ8t"
    publisher: "Cisco"
  - title: "Hackers Exploit Cisco Expressway Vulnerability Soon After PoC Release"
    url: "https://www.securityweek.com/hackers-exploit-cisco-expressway-vulnerability-soon-after-poc-release/"
    publisher: "SecurityWeek"
  - title: "CISA flags critical Cisco RCE flaw as actively exploited in attacks"
    url: "https://www.bleepingcomputer.com/news/security/cisa-flags-critical-cisco-expressway-rce-flaw-as-actively-exploited/"
    publisher: "BleepingComputer"
---

On 20 November 2026, CISA (the US Cybersecurity and Infrastructure Security Agency) added four actively exploited vulnerabilities to its Known Exploited Vulnerabilities catalog. The one I'd act on first is a critical Cisco Expressway flaw that a Russian security firm saw exploited shortly after a public proof-of-concept appeared, with scripts that the firm says showed signs of an AI assistant. The gap between "exploit code is public" and "someone is using it on you" is now measured in days, and patch processes built around monthly cycles don't fit inside it.

## What happened

CISA's alert lists four additions to the catalog:

- **CVE-2026-76466**, a Cisco Expressway Series use of hard-coded credentials vulnerability
- **CVE-2025-42884**, an SAP NetWeaver data query logic vulnerability
- **CVE-2026-123890**, a VMware vCenter authentication bypass
- **CVE-2026-129448**, an Apache Roller deserialization vulnerability

The catalog entry for the Cisco bug shows a date added of 2026-11-20 and a due date of 2026-11-23. That is three days for US federal civilian agencies, under CISA's Binding Operational Directive (BOD) 26-04, which also asks agencies to run forensic triage and assess each asset's internet exposure.

Cisco's advisory, first published on 21 October, rates CVE-2026-76466 at 9.8 (critical) on CVSS 3.1. It affects Expressway-C and Expressway-E, both virtual and appliance, but only when the devices are configured in a cluster. An unauthenticated remote attacker can run commands as root. Releases X15.5.3 and earlier are vulnerable and X15.5.20 is the fix; anyone on X14 or earlier has to migrate to a fixed release. Cisco says plainly that "there are no workarounds that address this vulnerability."

The exploitation evidence comes from F6, a Russian security firm. As reported by SecurityWeek on 19 November, F6 found that attackers breached two internet-facing Expressway X15.5.3 devices at an unnamed Russian organization shortly after a PoC was posted on GitHub, then pivoted to two more cluster nodes on the internal network. After getting root, they prepared custom Python scripts to scan the network, find SMB shares, talk to SQL Server and WinRM, and search GitLab repositories for credentials. F6 said the attackers modified those scripts during the attack, and that "the source code contained characteristic comments and descriptions of fixes indicating the use of an AI assistant."

One wrinkle: Cisco updated its advisory on 23 November to note the KEV listing, while adding that it has no direct evidence of active exploitation itself. The exploitation claim rests on F6's investigation and CISA's decision to list it.

## Why it matters

Expressway sits at the edge of an organization's Cisco collaboration setup, and in F6's case the vulnerable nodes were directly reachable from the internet. A root-level bug in an edge device like that gives an attacker a trusted foothold that can reach the internal network, which is exactly what F6 describes: two exposed nodes led to two internal ones through cluster trust.

The other three additions point the same way. vCenter manages virtualised infrastructure, NetWeaver runs core SAP business systems, and Roller is a web-facing blog server. All four are high-value systems that patch slowly because touching them is disruptive.

The AI detail matters less for what it proves than for what it suggests. F6's evidence is code comments and fix descriptions in the attackers' scripts. That is a reasonable inference, though a long way from proof that an AI tool wrote the exploit. Still, if assistants let a mid-skill attacker adapt a public PoC and write post-exploitation tooling on the fly, the number of people who can act on a fresh PoC goes up, and the window shrinks further.

## How the KEV catalog works

Most teams sort vulnerabilities by CVSS, the Common Vulnerability Scoring System. CVSS measures how bad a bug could be in theory. It does not tell you whether anyone is actually exploiting it, and a backlog sorted only by severity puts hundreds of theoretical criticals in the same queue as the one being used against you today.

The KEV catalog answers the other question. CISA lists a CVE there when it has evidence the flaw is being exploited in the wild, which is why this update describes all four as actively exploited. Each entry carries a date added, a due date, a required action and a flag for known ransomware use (listed as "Unknown" for this Cisco bug).

The due dates are binding only on US federal civilian agencies. Everyone else gets a free, curated, machine-readable list of "this is being used right now," which is the most useful prioritisation input a small security team can get for nothing.

## My take

I think the lesson here is mostly about process speed. Hard-coded credentials are an old class of bug, and Cisco shipped a fix in October. The organisation F6 investigated was still on X15.5.3 weeks later, and the PoC turned that lag into a breach.

I'm not convinced the AI angle changes the threat model as much as headlines will suggest. Public PoCs have always been weaponised quickly by people who can read code. What I'd bet on is that AI assistants compress the boring parts: adapting an exploit to a target, fixing a script that breaks mid-intrusion, writing a quick SMB scanner. I build agent infrastructure for a living, and that is the work these tools are genuinely good at. So I'd plan as if the PoC-to-exploitation gap is days, and treat any planning assumption of weeks as out of date.

The part that bothers me most is that Cisco lists no workaround. When an edge device has no mitigation, your only real control is how fast you can upgrade it. If that takes a change-advisory board and a maintenance window three weeks out, the attacker's timeline wins.

## What to do about it

**For security and infrastructure teams:**

- Inventory every Expressway-C and Expressway-E you run and check whether it is clustered. Clustered nodes on X15.5.3 or earlier are in scope; upgrade them to X15.5.20. X14 and earlier need a migration plan this week.
- If you cannot patch immediately, F6 recommends blocking TCP ports 4371 to 4372 at the firewall except from trusted cluster node IPs. That is F6's interim advice; Cisco itself lists no workaround.
- Assume compromise on anything that was exposed and unpatched. F6 points to the Erlang system log on Expressway devices as a place to look, and has published IP addresses and file paths from the incident.
- Work through the other three: vCenter, SAP NetWeaver and Apache Roller. Check vendor advisories for fixed versions and prioritise any instance reachable from the internet.
- Make KEV a standing input. Pull the catalog feed into your scanner or ticketing system and give KEV-listed, internet-facing assets their own fast-track SLA, separate from your normal patch cycle.
- Review cluster trust. F6's attackers moved from exposed nodes to internal ones because the cluster trusted itself. Segment edge appliances so a compromised one cannot reach everything.

**For everyday readers:** you don't run Expressway, but the habit transfers. Turn on automatic updates for your router, phone and browser, and when a vendor says a bug is being exploited, update that day instead of waiting.

## What to watch next

- **Cisco's advisory.** Whether Cisco revises its exploitation status from "no direct evidence" to confirmed, and whether more customers report incidents.
- **F6 attribution.** F6 has not named a threat actor. Attribution or new victims outside Russia would change the scale of this story.
- **Wider scanning.** Reports of mass scanning for ports 4371 to 4372 would signal the jump from one targeted intrusion to opportunistic exploitation.
- **More AI-assisted intrusion reports.** If other incident responders start documenting similar AI fingerprints in attacker tooling, the shrinking-window argument gets much stronger.
