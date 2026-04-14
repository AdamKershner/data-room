# Skill: Setup

**Duration:** 15–30 minutes (including your review)
**Run once:** When onboarding a new GTM team member or refreshing the repo from scratch
**Output:** All context files verified and current, CLAUDE.md ready to use

---

## Quick Start

```
Read skills/setup/SKILL.md and verify this repo is current for kahana.co
```

---

## Purpose

This skill is different from the generic setup skill in the starter kit. The Oasis repo context files have already been written. This skill is for:

1. **Onboarding a new GTM team member** — walk them through the repo and verify everything is current
2. **Post-ICP update** — after the ICP or positioning shifts, re-verify all files are consistent
3. **Quarterly repo audit** — are all inferred fields replaced with real data? Are there new signals to add?

---

## Step 1: Read All Context Files and Check for Gaps

Read in this order:

1. `CLAUDE.md` — is the team table current? Are priorities updated?
2. `context/profile.md` — is the team section current? Are reference customers added after pilots close?
3. `context/icp-definition.md` — are the ICP ranges validated from real deal data?
4. `context/positioning.md` — are the reference customers section and proof points updated?
5. `context/competitor-radar.md` — are win/loss patterns updated from real deals?
6. `context/signal-library.md` — is the performance log populated?
7. `context/personas/` — do the personas reflect what you're hearing in discovery calls?

---

## Step 2: Flag Inferred vs. Confirmed Fields

Many fields in this repo were set at launch based on positioning and scoring model logic rather than real deal data. Flag any field that is still inferred and hasn't been validated:

| Field | Location | Status |
|-------|----------|--------|
| ACV / sales cycle | `context/profile.md` | Validate after first 3 pilots |
| Target company size range | `context/icp-definition.md` | Validate after first 10 qualified accounts |
| Competitor win/loss patterns | `context/competitor-radar.md` | Validate after first 3 competitive deals |
| Proof points / metrics | `context/positioning.md` | Update after pilot data is available |
| ESA persona pain points | `context/personas/enterprise-solutions-architect.md` | Refine after first 5 discovery calls |
| Signal performance log | `context/signal-library.md` | Populate after first 4 weeks of outreach |

For each gap: note it and ask the team member to fill it in during their first week.

---

## Step 3: Run the 5 Sharpening Questions

Ask exactly these 5 questions in a single message. These replace or sharpen inferred fields.

```
5 questions to sharpen the Oasis context:

1. Deal profile — what have the first pilots looked like?
   (Seats, price, company type, how the deal was initiated)

2. Anti-ICP in practice — who has been a waste of time so far?
   (Not the theory — actual companies or company types that showed up and went nowhere)

3. Top 3 signals that have actually generated meetings or pipeline?
   (Not from the signal library — from your actual experience)

4. This week's focus — what's top priority right now?
   (Active deals, campaigns being built, blockers you're working through)

5. Competitive reality — who are you actually seeing in deals?
   (The signals that have come up in real conversations, not just from the competitive landscape doc)
```

After receiving answers: update every relevant file, remove `[inferred]` flags from validated fields, add new data to the ICP evolution log.

---

## Step 4: Verify HubSpot Alignment

Confirm that the scoring model in this repo matches what's implemented in HubSpot:

- [ ] Fit Score properties exist in HubSpot (Job Role, Seniority, Industry, Company Size, Geography, Business Email)
- [ ] Intent Score properties exist (Pricing_Page_Visit, Demo_Request, Contact_Sales, Case_Study_Download, Sessions_Count)
- [ ] Product Usage Score properties exist (Feature_Activation, Usage_Velocity, Teammate_Invite, Paywall_Hit)
- [ ] Momentum Score workflow is running
- [ ] CDS Score calculation workflow is active
- [ ] Signal Status (Green/Yellow/Red) is being set correctly
- [ ] Warmly is pushing company visit data into HubSpot

If any of these are missing: flag it as a RevOps task before running any campaigns.

---

## Step 5: Verify Stack Integration

- [ ] Clay is enriching accounts with firmographic and technographic data
- [ ] Warmly is configured for kahana.co visitor identification
- [ ] Warmly is syncing company-level intent signals to HubSpot
- [ ] Product telemetry (Paywall_Hit, Feature_Activation, Teammate_Invite) is flowing to HubSpot via webhook
- [ ] Domain-level user count tracking is working (3+ users trigger = working)

---

## Output

After completing all steps, confirm what was verified and what still needs action:

```
Repo setup verified for [date].

Confirmed current:
- [List of files verified as accurate]

Fields still needing real data:
- [List of inferred fields + what data would validate them]

HubSpot alignment gaps:
- [Any scoring or integration gaps found]

Stack gaps:
- [Any integration not yet configured]

Next action: [What to do first to fill the most critical gaps]
```
