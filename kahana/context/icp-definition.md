# ICP Definition — Oasis Browser

*This is the canonical ICP document. All campaigns, scoring models, and outreach sequences reference this file.*

Last updated: 2026-04-14

---

## Ideal Customer Profile

### Firmographics

| Dimension | Ideal Range | Notes |
|-----------|-------------|-------|
| Employee count | 50–500 | Below 50: browser chaos not yet painful enough to pay to fix. Above 500: procurement cycle too slow for current stage; revisit when enterprise admin features ship. |
| Revenue (if known) | $2M–$50M ARR | |
| Funding stage | Seed–Series C | Series D+ have too much IT governance overhead for PLG entry |
| Funding recency | Raised in last 24 months | Freshly funded = headcount scaling = browser chaos amplifying |
| Industry | B2B SaaS (primary), FinTech, DevTools, HR Tech (secondary) | Knowledge worker density needs to be high — most value in companies where 70%+ of work happens in a browser |
| Geography | US (primary), Canada, UK, Australia, New Zealand | Supported markets from scoring model |
| Business model | B2B SaaS, developer tools, FinTech | Companies where employees juggle 10+ browser tabs daily as part of their core job |

### Technographics

*What their current stack signals about fit?*

**Strong fit indicators:**
- Heavy SaaS tool stack (Notion, Linear, Figma, Jira, GitHub, Salesforce, Slack in browser) — signals browser-as-workspace behavior
- No existing enterprise browser mandate (no Island, no Chrome Enterprise policy) — greenfield deployment
- Firefox or mixed browser environment — Firefox base alignment
- Remote-first or hybrid team — distributed work amplifies context switching cost

**Weak fit indicators:**
- Google Workspace with enforced Chrome policy — deployment blocker
- Legacy on-prem infrastructure with thick-client apps — browser-centric work pattern doesn't apply
- Existing Island Browser or Chrome Enterprise contract — displacement conversation required

### Organizational signals

*What their team structure tells us:*

- Has a dedicated Solutions Engineering, Platform Engineering, or ESA team — our primary champions live here
- Engineering team actively hiring (signals growth and new tooling budgets)
- Recently hired VP of Engineering or CTO in last 12 months — new leader evaluating team productivity tools
- Actively hiring for roles with "solutions architect," "DevOps," "platform," or "infrastructure" in the title

---

## Tier Definitions

### Tier 1 — Dream Accounts (Top 150)

Accounts where a closed pilot is a reference customer and a case study. Full multi-channel, AE-owned, researched before every touch.

**Criteria:**
- Employee count 100–500
- Series A–C, funded in last 18 months
- 3+ Oasis users already active from the same domain (organic PLG signal)
- Solutions Engineering, ESA, or Platform Engineering team exists
- B2B SaaS or DevTools

**Outreach approach:** AE-owned, personally researched, enterprise pilot framing from first touch. Reference the specific team member(s) already using Oasis when reaching out.

---

### Tier 2 — High-Fit Accounts (300–600)

Strong ICP fit — haven't adopted Oasis organically yet, or 1 user active. Signal-triggered outreach.

**Criteria:**
- Employee count 50–250
- Any B2B SaaS funding stage; Seed or above
- 0–2 Oasis users active from domain, OR pricing page visit detected via Warmly
- ESA, Solutions Engineer, or engineering leadership role exists on the team

**Outreach approach:** SDR-owned, signal-triggered sequences. Semi-personalized. Lead with the productivity cost data or the role-specific hook.

---

### Tier 3 — Good-Fit Accounts (automated)

Meets minimum ICP criteria. Automated sequences with light personalization.

**Criteria:**
- Employee count 20–150
- B2B SaaS
- Any Oasis activity from domain OR Warmly website visit detected

**Outreach approach:** Automated sequences, template-based with company/role variable injection.

---

### Tier 4 — Monitor Only

Interesting accounts that don't meet criteria yet. Watch for trigger events.

- Series A companies under 50 employees — wait for headcount signal
- Companies with Chrome Enterprise mandate — watch for policy change signals
- Non-SaaS companies showing interest — re-qualify when relevant signal fires

---

## Anti-ICP

*Accounts we explicitly exclude.*

| Exclusion | Reason |
|-----------|--------|
| Non-tech companies (retail, manufacturing, logistics) | Browser-centric work pattern doesn't apply; knowledge worker density too low |
| Google Workspace + enforced Chrome policy | Deployment blocker at the IT level — can't install alternative browser |
| Island Browser or Chrome Enterprise under active contract | Displacement conversation, not greenfield — wrong motion at current stage |
| Pure consumer product companies | Their employees may use browsers but the business value framing doesn't translate |
| Procurement-heavy enterprises (2,000+ employees) | Too slow for PLG motion; no enterprise admin features yet to support large-scale deployment |
| Agencies and consulting firms | High browser use but no team adoption flywheel — employee churn breaks the B2C2B motion |
| Student email domains | Scored -25 in Fit Score; not a buying entity |
| Competitor domains | -50 in Fit Score; monitor, don't engage |

---

## Qualification Framework

*Use in discovery calls to quickly determine fit.*

### Must-have (deal-breaker if absent)
1. Knowledge worker density — 50%+ of employees spend 6+ hours/day in browser
2. No hard Chrome policy mandate blocking alternative browser installation
3. B2B SaaS or tech company — the productivity ROI framing must land

### Strong indicators (2+ = high confidence)
1. Has dedicated Solutions Engineering, ESA, or Platform Engineering team
2. 3+ SaaS tools actively used in browser daily (Notion, Linear, GitHub, Figma, etc.)
3. Recent funding (last 18 months) — budget and headcount scaling
4. Remote-first or hybrid work model — context switching cost amplified
5. Engineering leadership recently changed — new leader open to tooling upgrades
6. Already has active Oasis users from the domain (PLG signal)

### Red flags (2+ = deprioritize)
1. Google Workspace + Chrome as standard — IT policy blocker
2. Primary work is in thick-client desktop apps, not browser
3. No dedicated engineering or solutions team (too small or wrong function)
4. Procurement-led evaluation — wrong entry point for PLG motion
5. CISO is primary decision-maker — will evaluate on compliance, not productivity

---

## Fit Score Reference

*Aligned with HubSpot scoring model in `Sales_Lead_Scoring_Guide.md`*

| Component | Points | Criteria |
|-----------|--------|---------|
| Job Role Match | +25 | ESA, solutions architect, engineer, ops, IT, DevOps, infrastructure, SRE |
| Seniority | +20 | Senior, lead, principal, architect, manager, director, VP, head, executive, enterprise |
| Industry Match | +25 | B2B SaaS, FinTech, DevTools, HR Tech |
| Company Size | +20 | 50–500 employees |
| Geography | +10 | US, Canada, UK, Australia, New Zealand |
| Business Email | +20 | Non-personal, non-student domain |
| **Student email** | **-25** | .edu domain |
| **Competitor domain** | **-50** | Known competitor employee |
| **Vendor/Consultant** | **-15** | Agency, consulting, services firm |

---

## ICP Evolution Log

*Track how the ICP changes over time. Most valuable artifact after 12 months.*

**Review cadence:** Quarterly. Re-score full account list after any ICP change.

| Date | Change | Reason |
|------|--------|--------|
| 2026-04-14 | Initial ICP definition | Based on product positioning and scoring model. Validate against first 10 enterprise pilots. |
