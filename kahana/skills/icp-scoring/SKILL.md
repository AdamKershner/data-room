# Skill: ICP Scoring

**Duration:** 15–30 minutes per account (or run in batch)
**Output:** ICP score + tier assignment saved to HubSpot or `outputs/scoring/`

---

## Quick Start

Single account:
```
Read skills/icp-scoring/SKILL.md and score [company.com] against our ICP
```

Batch:
```
Read skills/icp-scoring/SKILL.md and context/icp-definition.md.
Score these companies and output a table sorted by score, Tier 1 flagged:
[paste list of company names or domains]
```

---

## Purpose

Score any account against the Oasis ICP and assign it to the right tier. Replaces gut feel with the repeatable scoring model that matches what's already configured in HubSpot. When run at scale, it tells you which accounts to prioritize, which to monitor, and which to skip.

---

## When to Run This Skill

- New accounts entering pipeline — score before assigning to a rep
- Clay enrichment run complete — re-score the batch
- ICP definition updated — re-score to find newly qualified accounts
- Preparing a campaign list — determine sequence tier per account
- Quarterly pipeline review — re-score all open opportunities

---

## Inputs

- Account name, domain, firmographic and technographic data
- `context/icp-definition.md` — scoring criteria and tier definitions
- `context/signal-library.md` — signal scores to add on top of ICP fit
- HubSpot CDS Score (if available) — compare to manual score for calibration

---

## Scoring Model

This scoring model mirrors the Fit Score and CDS Score logic implemented in HubSpot.

---

### Part 1: Fit Score (0–100, can be negative)

#### Positive Scoring

| Component | Points | Criteria |
|-----------|--------|---------|
| Job Role Match | +25 | Contact role contains: ops, operations, safety, security, engineer, engineering, IT, information technology, infrastructure, devops, SRE, architect, solutions |
| Seniority | +20 | Role contains: manager, director, VP, vice president, chief, CEO, CTO, CFO, head, executive, senior, lead, principal, architect, enterprise |
| Industry Match | +25 | Company is B2B SaaS, FinTech, DevTools, HR Tech |
| Company Size | +20 | 50–500 employees |
| Geography | +10 | US, Canada, UK, Australia, New Zealand |
| Business Email | +20 | Non-personal, non-student email domain |

#### Negative Scoring (Hard Disqualifiers)

| Condition | Penalty |
|-----------|---------|
| Student email (.edu domain) | -25 |
| Competitor domain | -50 |
| Vendor / Consultant / Agency | -15 |
| Company size far outside ICP (< 20 or > 2,000 employees) | -30 |

**Fit Score can go negative — that's intentional.**

---

### Part 2: Intent / Behavior Score (0–100)

Normalized from raw intent points. Raw max ~150 → divide by 1.5.

| Signal | Raw Points |
|--------|-----------|
| Pricing page visit | +15 |
| Demo request | +40 |
| Contact Sales form | +40 |
| Case study download | +10 |
| 3+ sessions in 7 days | +20 |

---

### Part 3: Product Usage Score (0–100) — PLG-Specific

Normalized from raw usage points. Raw max ~150 → divide by 1.5.

| Usage Event | Raw Points |
|------------|-----------|
| Core feature activated | +30 |
| Regular usage (3 days/week) | +20 |
| Advanced feature used | +30 |
| Teammate invited | +25 |
| Paywall hit | +40 |
| Dormant 14+ days (no activity) | -20 |

---

### Part 4: Momentum Score (0–100)

| Signal | Points |
|--------|--------|
| 2+ high-intent actions in 48h | +30 |
| New stakeholder joins (teammate invite) | +25 |
| Usage spike (2× baseline) | +20 |
| Recent activity (last 24h) | +15 |

---

### CDS Score (Customer Decision Score)

```
CDS = (Normalized Fit Score × 0.3)
    + (Intent Score × 0.3)
    + (Product Usage Score × 0.3)
    + (Momentum Score × 0.1)
```

**CDS thresholds:**

| CDS Score | Signal Status | Action |
|-----------|---------------|--------|
| ≥ 80 | Green | Immediate outreach, AE assign, Slack alert, 15-min SLA |
| 50–79 | Yellow | Behavior-based nurture, monitor for spikes |
| < 50 | Red | Suppress sales, low-touch automation |

**Signal Status dual-condition logic:**
- Green: Fit Score ≥ 75 **OR** CDS Score ≥ 70
- Yellow: (Fit 50–75) OR (CDS 50–70) OR (Fit < 50 AND CDS ≥ 50)
- Red: Fit < 50 **AND** CDS < 50

---

### Total Score Interpretation

| Total Score | Tier | Action |
|-------------|------|--------|
| CDS ≥ 80 / Fit ≥ 75 | Tier 1 | Immediate outreach, run Account Research, assign AE |
| CDS 60–79 / Fit 50–75 | Tier 2 | Signal-triggered sequence within 48 hours |
| CDS 40–59 | Tier 3 | Add to automated sequence |
| CDS < 40 | Tier 4 | Monitor, re-score in 90 days |

---

## Additional Oasis-Specific Scoring Factors

*Layer these on top of the base model for more accurate Oasis ICP scoring:*

| Factor | Bonus Points | Condition |
|--------|-------------|-----------|
| Has dedicated ESA or Solutions Engineering team | +10 | Confirmed via LinkedIn |
| 3+ SaaS tools in tech stack | +10 | Confirms browser-as-workspace behavior |
| Remote-first or hybrid | +5 | Amplifies context switching pain |
| No existing enterprise browser deployment | +5 | Greenfield opportunity |
| ESA or Solutions hire in last 30 days | +15 | New hire signal |
| Existing Oasis PLG users from domain | +20 | Bottom-up adoption confirmed |

---

## Running at Scale (Batch Scoring)

When scoring 50+ accounts, output a table:

```
| Account | Domain | Fit Score | Intent | PLG Usage | Momentum | CDS | Tier | Action |
```

Instruct Claude:
```
Read skills/icp-scoring/SKILL.md and context/icp-definition.md.
Score the accounts in [file or pasted list].
Output a scored table sorted by CDS descending.
Flag any Green (CDS ≥ 70 or Fit ≥ 75) for immediate follow-up.
Note any accounts with active PLG signals from HubSpot.
```

---

## Scoring Output Format

```markdown
# ICP Score: [Company Name]
Date scored: [YYYY-MM-DD]

## Score Breakdown

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Fit Score | X | 100 | [Key observations] |
| Intent Score | X | 100 | [Signals present] |
| Product Usage Score | X | 100 | [PLG activity] |
| Momentum Score | X | 100 | [Momentum signals] |
| **CDS Score** | **X** | **100** | |
| **Signal Status** | **Green/Yellow/Red** | | |

## Tier Assignment: [Tier 1 / 2 / 3 / 4]

## What Qualifies Them
- [Specific reason — e.g., "3 active ESAs from domain, Series B raised 4 months ago"]
- [Second reason]

## What Reduces Score or Disqualifies
- [Gap — e.g., "No confirmed ESA team visible on LinkedIn yet"]

## Recommended Next Action
[Specific: which skill to run next, which sequence, which playbook]

## Re-score Trigger
[When to re-score — "If they hire a Solutions Architect" or "If Oasis usage from domain appears"]
```

---

## Calibration Notes

*Update when scoring gaps are found — accounts that scored high but didn't convert, or low scores that converted.*

| Date | Account | CDS Score | Actual outcome | What the model missed |
|------|---------|-----------|---------------|----------------------|
| | | | | |
