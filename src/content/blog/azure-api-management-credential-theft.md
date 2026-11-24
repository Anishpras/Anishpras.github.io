---
title: "Azure API Management Breach: A Patch Doesn't Un-Steal Your Secrets"
description: "A flaw in Azure API Management Classic tiers let attackers read stored secrets. Microsoft fixed it, but stolen keys stay valid until you rotate them."
category: security
tags:
  - "azure api management"
  - "secrets management"
  - "credential rotation"
  - "managed identity"
  - "cloud security"
createdAt: 2026-11-24T12:31:00.000Z
updatedAt: 2026-11-24T12:31:00.000Z
tldr: "Attackers used a flaw in Azure API Management Classic tiers to read stored secrets, and Norway's NSM tied it to attacks on energy firms including Equinor. Microsoft's fix closes the hole but does not invalidate stolen credentials, so rotate them yourself."
keyTakeaways:
  - "Microsoft says it identified the APIM Classic flaw on 18 November 2026 and mitigated it on 19 November; Developer, Basic, Standard and Premium Classic tiers were affected, while Consumption and v2 were not."
  - "Exposed data could include Named Values secrets, identity provider client secrets, subscription keys and management API tokens, according to Microsoft's advisory as reported by BleepingComputer."
  - "Microsoft's fix does not invalidate credentials taken before it shipped, and NSM tells customers to assume every secret and named value is compromised and rotate them all."
  - "Design gateways so a breach is survivable: prefer managed identity tokens over stored keys, reference Key Vault instead of pasting secrets, scope backend keys tightly, and rehearse rotation."
sources:
  - title: "Microsoft Azure flaw exploited to steal customers' API credentials"
    url: "https://www.bleepingcomputer.com/news/security/microsoft-azure-flaw-exploited-to-steal-customers-api-credentials/"
    publisher: "BleepingComputer"
  - title: "NSM deler tiltak mot sårbarhet i Azure API Management"
    url: "https://nsm.no/aktuelt/nsm-deler-tiltak-mot-sarbarhet-i-azure-api-management"
    publisher: "NSM (Norwegian National Security Authority)"
  - title: "Cyber-attack stopped"
    url: "https://equinor.com/news/20261711-equinor-detected-cyber-attack"
    publisher: "Equinor"
  - title: "How to Use Named Values in Azure API Management policies"
    url: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-properties"
    publisher: "Microsoft Learn"
  - title: "Azure API Management policy reference - authentication-managed-identity"
    url: "https://learn.microsoft.com/en-us/azure/api-management/authentication-managed-identity-policy"
    publisher: "Microsoft Learn"
---

Attackers used a flaw in Azure API Management (APIM), Microsoft's managed API gateway, to read secrets that customers had stored inside it. Microsoft has closed the hole, but its fix does not invalidate anything that was already taken, so every key that sat in an affected gateway is still a live key until its owner rotates it. Norway's National Security Authority has linked the activity to attacks on its energy sector, and I think the lesson reaches well beyond Azure: whatever your gateway stores, an attacker who owns the gateway owns too.

## What happened

According to a Microsoft advisory sent through Azure Service Health and reported by BleepingComputer on 23 November, Microsoft identified the vulnerability on 18 November 2026 and deployed a mitigation on 19 November. It also rotated Microsoft-controlled keys and credentials where appropriate. The flaw allowed unauthorized access to some management functionality on APIM Classic instances that were not configured according to recommended practices, and that access could be used for administrative operations, including reading secrets.

The affected tiers are Developer, Basic, Standard and Premium in APIM Classic. The Classic Consumption tier and all v2 tiers were not affected. BleepingComputer lists what may have been exposed: secrets stored in Named Values, client secrets for identity providers and OpenID Connect providers, subscription keys, and tokens used to call management APIs directly.

The key line from Microsoft, as quoted by BleepingComputer, is that the fix "does not automatically invalidate credentials that may have been accessed before the fix was deployed." Microsoft tells customers to rotate potentially exposed credentials immediately, investigate activity in the systems those credentials reach, and review their logs.

Norway's NSM published guidance on 20 November and updated it on 23 November. It says an unknown actor actively sought access tokens, secrets and named values in APIM, that the Norwegian energy sector found the flaw first, and that organisations in other sectors and abroad are affected too. NSM names Equinor and Skagerak Energi among the affected organisations, and says it is still unclear how widely the flaw was exploited.

Equinor disclosed an attack on "certain IT systems" on 17 November. On 20 November it said the attack had been stopped, that production was running normally, and that it had no indication data was stolen or altered. BleepingComputer reports that Skagerak Energi described an attempted attack with no impact on operations.

## Why it matters

An API gateway sits between the outside world and your backends. To do its job it often holds the keys to those backends: a database password in a named value, a partner's API key injected into a header, a client secret for your identity provider. That makes it a very efficient target. One compromise hands over credentials for many systems at once.

The provider fix only closes the door. A stolen subscription key or client secret works against your backend no matter how it was obtained, because the backend has no idea the gateway was breached. So the real cleanup is yours: rotate at the source, then check what those credentials touched between theft and rotation.

The scope is also wider than "Azure customers." Anything an APIM secret could reach is in scope, whether that is an internal service, a SaaS vendor or a payments API.

## How gateway secrets work in APIM

APIM stores reusable values in a feature called Named Values. Microsoft's documentation describes three types: plain text, secret (a string APIM encrypts itself), and Key Vault (a pointer to a secret held in Azure Key Vault). Policies, the small XML programs that run on each request, pull these in with `{{name}}` syntax, for example to add an API key header before forwarding a call.

Key Vault references are Microsoft's recommended option. The gateway uses its managed identity (an identity Azure issues to the service itself, with no password for you to store) to fetch the secret, and when you update the secret in Key Vault, APIM picks up the new value within four hours.

There is a catch the docs state openly. Anyone who can edit policies can read any named value by referencing it in a policy, so policy edit rights effectively grant read access to every named value in the instance. A Key Vault reference keeps the secret's master copy out of the gateway, but the gateway can still resolve it. If an attacker gets administrative control of APIM, a Key Vault reference does not stop them reading the value.

The stronger pattern is to avoid a long-lived secret entirely. APIM's `authentication-managed-identity` policy asks Microsoft Entra ID for an access token on each call (caching it until it expires) and sends it to the backend as a bearer token. Microsoft warns that people who can edit policies can still exfiltrate that token. The difference is that the token expires on its own, while a static API key works until someone remembers to rotate it.

## My take

I think the most useful sentence in this whole story is Microsoft admitting its fix doesn't un-steal anything. Teams treat "the vendor patched it" as the end of an incident. With secrets, it's the start of yours.

I'd stop treating the gateway as a vault. I build an omnichannel agent platform, where every channel integration means another credential living somewhere, and the question I find most useful is blast radius: if this one component leaks everything it can see, what breaks, and for how long? The answer should be "a few short-lived tokens, already expiring," not "every partner integration until we rotate by hand."

I'm also not convinced most teams could rotate everything in a day. Rotation is easy for one key and hard for fifty, especially when nobody wrote down which backend each named value feeds. NSM's advice to map what sits behind your instance is the work most organisations skipped, and it now has to happen under pressure.

One thing I'll give Microsoft and the Norwegian side credit for: the time from first detection to a global mitigation was short, and NSM published a concrete runtime version check rather than vague reassurance. That is how disclosure should look.

## What to do about it

**If you run APIM Classic (Developer, Basic, Standard or Premium):**

- Follow NSM's advice and assume every secret and named value is compromised. Rotate them at the source system, not just inside APIM, then revoke the old values.
- Check your gateway was patched. NSM says to open `https://<your-gateway-hostname>/internal-status-0123456789abcdef` and read the RuntimeVersion: 0.52.x is patched from build 31936, 0.53.x from 31938. Lower builds are still vulnerable, and NSM says to contact your vendor if so.
- Inventory what each named value, subscription key and identity provider secret can reach, then review logs on those backends for unusual use before and after 18 November.

**For any team running an API gateway:**

- Replace stored backend keys with managed identity tokens wherever the backend accepts Entra ID authentication.
- Where a static key is unavoidable, use a Key Vault reference without a version pin so rotation flows through, and scope the key to the smallest set of operations and IP ranges the backend allows.
- Treat policy edit rights as secret read rights, because Microsoft's docs say that is what they are. Keep that group small.
- Write and rehearse a rotation runbook: owner, source system and rotation steps for every gateway secret. If you can't rotate everything in an afternoon, that is your real finding.
- Log backend access by credential, so after a gateway incident you can see what each key did.

**For everyday users:** there is nothing for you to rotate here. If a service you use emails about a security incident, read it and change any password it mentions.

## What to watch next

- **A Microsoft public write-up.** So far the detail comes from a Service Health advisory. A full root cause, a CVE or published indicators would help defenders hunt.
- **NSM's exploitation estimate.** NSM says the extent is unclear. A firmer number, or named victims outside Norway, would change the scale.
- **Downstream incidents.** Watch for disclosures from companies whose backends were reached with keys taken from a gateway, which would show the stolen credentials were used.
- **Classic tier migration.** If Microsoft pushes customers harder toward v2 tiers, which it says were not affected, that tells you where it expects the long-term fix to live.
