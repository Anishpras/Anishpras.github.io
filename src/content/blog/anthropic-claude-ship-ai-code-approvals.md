---
title: "Claude Ship Lets an AI Approve Your PRs. Who Owns the Merge?"
description: "Anthropic's Claude Ship can fix and approve pull requests against a policy file. What that does to separation of duties, branch protection and accountability."
category: developer-tools
tags:
  - "anthropic"
  - "code review"
  - "ai agents"
  - "github"
  - "software delivery"
createdAt: 2026-11-24T12:32:00.000Z
updatedAt: 2026-11-24T12:32:00.000Z
tldr: "Anthropic's Claude Ship adds a beta agent that approves pull requests against a policy file the team writes. That moves AI from suggesting merges to approving them, which makes the policy file the most important code in the repo."
keyTakeaways:
  - "Claude Ship has three parts: Code Review (generally available), PR Steward (beta, pushes fixes but is designed not to approve or merge) and Claude Approvals (beta, approves against a repo policy file)."
  - "It runs on Claude Team and Enterprise plans for GitHub repositories only, and is not offered to organizations using Zero Data Retention, the HIPAA configuration or customer-managed keys."
  - "Teams can make Claude Approvals a branch protection requirement, but Anthropic recommends starting in observe-only mode."
  - "Keeping the fixing agent and the approving agent separate is good design, but both are still the same vendor's models, so separation of duties is weaker than it looks."
  - "Roll out on one low-risk repo, keep required human approvals on risky paths, and measure reverts and escaped defects before and after."
sources:
  - title: "Introducing Claude Ship"
    url: "https://claude.com/resources/articles/introducing-claude-ship"
    publisher: "Anthropic"
  - title: "Anthropic launches Claude Ship, letting AI agents review, fix, and approve code changes"
    url: "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/"
    publisher: "TechCrunch"
  - title: "Anthropic's Claude Ship automates the final stage of the software development pipeline"
    url: "https://siliconangle.com/2026/11/23/anthropics-claude-ship-automates-the-final-stage-of-the-software-development-pipeline/"
    publisher: "SiliconANGLE"
---

Anthropic has launched Claude Ship, a set of agents that review pull requests, push fixes to them and, in beta, approve them against a policy the team writes. AI code review is old news by now. The new part is that an AI can now give the approval your branch protection checks for, and that changes who is answerable when a merged change breaks production.

## What happened

On 23 November 2026, Anthropic published "Introducing Claude Ship". TechCrunch and SiliconANGLE covered it the same day. The product has three parts:

- **Code Review** (generally available) reviews a PR from several angles, tries to disprove its own findings, then sorts the ones that survive and posts them on the PR.
- **PR Steward** (beta) tries to keep a PR green. It fixes failing CI (continuous integration) checks, resolves merge conflicts and responds to review feedback from Code Review, other tools or teammates. After every push it comments with what it changed and how to undo it. Anthropic says it is designed not to approve or merge. You can steer it with `@claude` or halt it with `@claude stop`.
- **Claude Approvals** (beta) applies an approval policy stored as a file in the repository. Anthropic calls it "a smarter CODEOWNERS file." The policy is written in natural language. It can approve routine changes automatically, or demand human sign-off, based on signals such as Code Review findings or custom classifiers.

It is available on Claude Team and Enterprise plans for GitHub repositories only. Anthropic says it is not available to organizations using Zero Data Retention, the HIPAA configuration or customer-managed encryption keys. Billing is by tokens. A policy that relies on Claude's review triggers a billed Code Review even in observe mode. Admins can set spend limits for Code Review and PR Steward. Developers can also start the whole flow with a `/ship` command in Claude Code.

Anthropic's one metric: on the Claude Code team, merged PRs more than doubled from June to September while the share of PRs reverted fell by more than 40%. Anthropic credits Code Review as one layer of a wider process, so this is an internal, self-reported number and not a controlled result.

## Why it matters

Most teams require at least one human approval before merging, for good reason. TechCrunch quotes Anthropic's blog on the problem: "Most teams want a person to approve every change, and that's easy to keep up with when people write every line." Once agents write most of the code, the human approver becomes the bottleneck, and tired approvers start rubber-stamping.

Claude Ship's answer is to move the human's work upstream. The human writes the policy, and the agent applies it to each PR. If that works, review time goes where the risk is. If it doesn't, you have automated the rubber stamp, and it now runs at machine speed.

## How approvals, branch protection and separation of duties fit together

On GitHub, branch protection is a set of rules on a branch such as `main`. Typical rules: a PR needs N approving reviews, certain status checks must pass, and changes to some paths need sign-off from the owners listed in a CODEOWNERS file. Branch protection is how a team turns "we review code" from a habit into something the platform enforces.

Anthropic says Claude Ship works with existing branch protection and required checks, and that teams can configure branch protection to require Claude Approvals' green light. Its page doesn't say whether that green light counts as a formal GitHub approving review or works as a required check. That detail matters, because it decides whether Claude can replace a human approval or only add to one.

Separation of duties is the old control idea underneath all this: the person who makes a change should not be the person who signs it off. Claude Ship respects that in form. PR Steward writes commits and is designed not to approve. Claude Approvals approves and, per SiliconANGLE, runs after PR Steward. But both are Anthropic models, configured by the same admins, possibly reading the same Code Review findings. Two agents from one vendor share blind spots in a way two engineers usually don't. I'd call this separation of roles rather than full separation of duties.

## My take

I think the design is more careful than the headline. Splitting fix and approve into different agents, posting an undo note on every push, and recommending observe-only mode first are the right instincts. I've built agent infrastructure that runs in production, and the agents that cause the worst incidents are the ones that can both act and confirm their own action.

What I'm less convinced about is the policy file. A natural-language policy is easy to write and hard to test. "Approve dependency bumps that pass CI" sounds precise until a minor version bump of an auth library slips through. The policy is now security-critical code and should be treated that way: owned, reviewed by humans, protected by CODEOWNERS, and changed only through its own PR. If an agent can edit the file that decides what the agent may approve, the control is circular. Anthropic says the policy is read from the default branch, which helps, but I'd still lock that file down explicitly.

Then accountability. When a Claude-approved change takes down production, the vendor won't be the one paged. The team that wrote the policy owns the outcome, the same way a team owns a bad alert threshold. That is a reasonable model, but it needs a record. For every auto-approval you want the policy version, the signals the agent saw, the commit it approved, and why. Anthropic's announcement doesn't describe an audit trail for approval decisions, and I couldn't confirm what gets logged. I wrote about this problem in [what audit logs need after redaction](/research/audit-logs-after-redaction): a log that can't reconstruct why a decision was made is close to useless in a postmortem.

The revert number is encouraging, but it comes from the team that built the product, and it is about review rather than auto-approval. I'd want to see escaped defects, meaning bugs found after merge, from customers running Approvals for months before I trust the approval half.

## What to do about it

**For builders:** Treat the policy file like code. Put it under CODEOWNERS with human reviewers, write example PRs that should and shouldn't pass, and rerun them every time the policy changes. Make sure any commit pushed after an approval forces a fresh evaluation.

**For teams and companies:** Here's how I'd roll it out.

1. **Observe first.** Run Approvals in observe-only mode on one repo for a few weeks. Compare its verdicts with what your human reviewers decided, and read every disagreement.
2. **Pick a low-blast-radius repo.** Internal tools, docs, test-only repos. Avoid payment, auth, data migrations and infrastructure-as-code.
3. **Start with narrow change classes.** Docs, copy changes, test additions, lockfile bumps with green CI. Expand one class at a time.
4. **Hard-code human approval for risky paths** through branch protection and CODEOWNERS, outside the natural-language policy. Auth, crypto, billing, migrations, CI config and the policy file itself should always need a person.
5. **Measure before and after.** Revert rate, escaped defects per merged PR, incident count tied to auto-approved changes, and time to merge. If escaped defects rise, roll back the change class.
6. **Set spend limits** and track token cost per PR, especially on Deep reviews.

If you run under Zero Data Retention, HIPAA or customer-managed keys, the decision is made for you: it isn't offered.

**For everyday users:** Nothing to do directly. If the software you rely on starts shipping faster, some of the approvals behind it may now be automated.

## What to watch next

- **How the approval registers on GitHub.** Whether Claude Approvals counts as an approving review or only as a status check decides how much human review it can actually replace.
- **Approval audit logs.** A per-decision record (policy version, signals, commit) that admins can export would answer my biggest concern.
- **Escaped-defect data from customers,** ideally from pilots like Carvana's, rather than Anthropic's own team.
- **Beta exit.** When PR Steward and Approvals leave beta, look at what changes in defaults, pricing and the excluded compliance configurations.
