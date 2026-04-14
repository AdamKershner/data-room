# Skill: Account Research

**Duration:** 20–40 minutes per account
**Output:** `outputs/[date]-[account]-research.md`

---

## Quick Start

```
Read skills/account-research/SKILL.md and research [company.com]
```

Claude reads the ICP, signal library, and competitive context automatically and produces a structured research brief. The goal is not a company summary — it's finding the specific person, specific pain, and specific moment that makes this the right time to reach out.

---

## Purpose

Build a complete intelligence brief on a target account before any Tier 1 outreach. For Oasis, the research is ESA-centered: find the person managing the most complex browser environment, understand what they're juggling, and identify the specific trigger that makes right now the right moment.

---

## When to Run This Skill

- Before any Tier 1 outreach (always)
- When a multi-user domain signal fires and you need to identify the right champion
- Before a discovery call (refresh if research is older than 2 weeks)
- When an enterprise pilot is being scoped and you need full stakeholder context

---

## Inputs

- Account domain
- `context/icp-definition.md` — ICP fit criteria
- `context/signal-library.md` — active signals for this account
- `context/competitor-radar.md` — any competitive context
- `context/personas/` — stakeholder profiles
- HubSpot: any existing contacts, activity, or product usage data from this domain

---

## Research Steps

### Step 1: Company Snapshot (5 min)

- **Funding:** Last round, amount, date, lead investors. Months since last raise.
- **Headcount + growth:** Current size, growth rate last 12 months. Scaling = amplifying browser chaos.
- **Recent hires:** What roles added in last 90 days? Especially: ESA, Solutions Engineer, Platform Engineering, DevOps, IT.
- **Product/business:** What do they build? Who do they sell to? What does a typical workday for their ESA team look like?
- **Remote/hybrid:** Are they distributed? Remote-first amplifies context switching cost — this is a useful detail.

Sources: LinkedIn, Crunchbase, their website, job postings, Glassdoor, tech blog.

---

### Step 2: ESA and Engineering Team Mapping (10 min)

This is the core of Oasis research. Reference `context/personas/enterprise-solutions-architect.md`.

Identify:
1. **Primary target:** The most senior ESA or Solutions Engineer — "Enterprise Solutions Architect," "Principal Solutions Engineer," "Sr. Solutions Architect"
2. **Secondary target:** VP of Engineering or Head of Engineering — the economic buyer
3. **IT gatekeeper:** IT Director or Manager — for the deployment conversation

For each stakeholder:
- Full name, current title
- Time in role (shorter = more open to new tooling)
- LinkedIn activity: recent posts, what are they thinking about? Any mentions of productivity, browser, context switching, or workflow?
- Mutual context (shared communities, past companies, investors)
- Best channel based on their activity

Ask: is there anyone already using Oasis from this domain? Check HubSpot first.

---

### Step 3: PLG Signal Check (5 min)

Check HubSpot for any existing activity from this company domain:
- Any active users? Who? What features have they used?
- Any paywall hits?
- Any pricing page visits?
- Any previous outreach?

This context completely changes the outreach frame. If 3 people from this company are already active users, you're not doing cold outreach — you're formalizing organic adoption.

---

### Step 4: Signal Check (5 min)

Reference `context/signal-library.md`. For each Tier 1 and Tier 2 signal:
- Is this signal present for this account?
- When did it fire?
- What's the current signal score / CDS Score in HubSpot?

If score ≥ 60: outreach should go out within 48 hours.

---

### Step 5: Competitive Context (5 min)

Reference `context/competitor-radar.md`.

- Is there any evidence of an existing browser deployment? (Island, Chrome Enterprise, Here — job postings, news, LinkedIn)
- Are there Arc or SigmaOS fans on the team? (LinkedIn posts, job posting requirements)
- Is there an active browser evaluation? (RFP language, vendor evaluation job posting)

If competitive context exists: apply the relevant scenario from `playbooks/competitor-switch.md`.

---

### Step 6: The Angle (10 min)

This is the only step that requires judgment. Everything above is research. This is the insight.

Answer these four questions:

1. **Why now?** What's the specific event — a hire, a funding round, a product expansion, a new client environment — that makes this the right moment? If you can't answer this specifically, don't reach out yet.

2. **Why Oasis specifically?** What's the exact workflow pain this ESA team is experiencing that Oasis addresses? Don't say "context switching" — describe the specific situation. "They're managing 4 enterprise client environments simultaneously, each with its own documentation system and product sandbox."

3. **What's the hook?** The first line of the email. Reference something specific and datable. Not "I saw you're in the browser productivity space." "Saw [Company] just hired two new Solutions Architects — means [Name] is now managing [N] client environments with the same number of hours."

4. **Who leads?** Which stakeholder gets the first touch and through which channel?

---

## Output Format

```markdown
# Account Research: [Company Name]
Date: [YYYY-MM-DD]
Researched by: [Claude / Name]
CDS Score (HubSpot): [X/100]
Recommended action: [Immediate outreach / Sequence / Monitor / Skip]

## Company Snapshot
[2–3 sentences: what they do, stage, relevant recent momentum]

## Funding & Growth
- Last round: [Amount, Date, Lead]
- Headcount: [X, growth rate]
- Remote/hybrid: [Yes / No / Mixed]
- Key recent hires: [Roles, dates — especially ESA/Eng/IT]

## ESA / Engineering Team
[Who's on the solutions/engineering team. Titles, LinkedIn activity, context.]

## HubSpot / PLG Activity
- Active users from domain: [N]
- Features used: [List]
- Paywall hit: [Yes / No]
- Previous outreach: [Yes / No / Date]

## Active Signals
| Signal | Status | Fired | Score |
|--------|--------|-------|-------|
| [Signal] | Active/Inactive | [Date] | +[X] pts |

## Competitive Context
[Any browser deployment, Arc/SigmaOS users, or active evaluation signals]

## The Angle
**Why now:** [Specific trigger]
**Why Oasis:** [Specific workflow pain for this team]
**Hook:** [Proposed first line — specific, datable, connected to their situation]
**Recommended sender:** [AE / Founder / SDR]

## Suggested Next Action
[Specific: which playbook, which template, which stakeholder, which channel]
```

---

## Quality Check

Before filing the output:

- [ ] The "why now" is a datable event, not a generic assumption
- [ ] The ESA stakeholder map has at least 1 person with LinkedIn URL and contact info
- [ ] HubSpot PLG activity has been checked (not just public data)
- [ ] Competitive context has been assessed
- [ ] The hook would make sense to someone who doesn't know what Oasis is
- [ ] Signal score is calculated and matches HubSpot
