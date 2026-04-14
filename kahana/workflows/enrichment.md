# Workflow: Account Enrichment

*How we enrich accounts and contacts before scoring or outreach. The goal is not complete data — it's the right data for Oasis's ICP signals and scoring model.*

---

## Purpose

Populate accounts and contacts with the firmographic, technographic, and organizational data needed to score ICP fit and personalize outreach. For Oasis, this means specifically identifying the ESA function at a company and confirming no existing enterprise browser mandate.

---

## What "Enrichment Complete" Means for Oasis

An account is enrichment-complete when:

- [ ] Employee count: confirmed (not estimated range)
- [ ] Funding stage and last funding date: confirmed
- [ ] Industry: confirmed as B2B SaaS, FinTech, DevTools, or HR Tech
- [ ] Tech stack: at least 3 tools identified
- [ ] Solutions/ESA function: confirmed exists (or confirmed absent)
- [ ] Existing enterprise browser deployment: checked (Island, Chrome Enterprise, Here)
- [ ] HubSpot PLG check: any existing Oasis users from this domain?
- [ ] Primary contact: name, title, verified email, LinkedIn URL
- [ ] Contact is not on DNC or unsubscribed list

---

## Enrichment Waterfall

Run sources in this order. Stop when a field is confirmed. Don't pay for data you can get free.

### Tier 1: Free Sources (Always Run First)

1. **Company website + LinkedIn** — headcount, product description, team structure, recent hires
   - LinkedIn Company Page: current headcount, growth, recent hires
   - Team/About page: do they have a Solutions Engineering or ESA team?
   - Job postings: ESA or Solutions Engineer titles? Confirms the function exists.

2. **Crunchbase / PitchBook (free tier)** — funding history, last round, amount, investors

3. **BuiltWith / Wappalyzer** — tech stack fingerprint
   - Priority: CRM, project management, documentation tools (signals browser-as-workspace behavior)
   - Alert if: Island Browser, Chrome Enterprise policies visible in stack

4. **Warmly website history** — has this company visited kahana.co before?
   - Check Warmly dashboard before enriching — context changes the outreach frame

Use for: initial ICP screening, ESA function confirmation, competitive context

---

### Tier 2: Clay Waterfall

For accounts that pass Tier 1 screening (Fit Score ≥ 40), run through Clay:

```
Priority waterfall:
1. Clearbit Enrichment        → firmographics, headcount, estimated revenue, tech stack
2. People Data Labs (PDL)     → contact data, LinkedIn profiles, email
3. Apollo.io                  → email validation, additional contacts at domain
4. Hunter.io                  → email verification fallback
5. LinkedIn Sales Nav         → manual verification for Tier 1 targets
```

**Clay table setup for Oasis:**
- Input: company domain
- Required output fields: company size, industry, funding stage, last funding date, tech stack, ESA/Solutions roles present (boolean), key contacts (name, title, email, LinkedIn URL)
- Quality gate: flag contacts where email confidence < 80%

**Key Clay columns to build:**
- `has_esa_function`: True/False — does LinkedIn show ESA, Solutions Architect, or Solutions Engineer roles?
- `enterprise_browser_detected`: True/False — any Island, Chrome Enterprise in job postings or stack?
- `existing_oasis_users`: Check against HubSpot domain list — True/False
- `recent_funding`: True/False — funded in last 18 months?

---

### Tier 3: HubSpot Domain Check (Always Run)

Before any outreach, check HubSpot for existing domain activity:

```
In HubSpot: search for all contacts with @[company.com] email domain
Check:
- Any active Oasis users? (Feature_Activation = "Yes")
- Any paywall hits from this domain?
- Any previous outreach? (What was the last touch and when?)
- Any open opportunities?
- Any existing customers?
```

This is the most important enrichment step for Oasis's B2C2B motion and is free. Never skip it.

---

## Contact Enrichment

For each qualified account, identify and enrich 2–3 contacts matching target personas.

**Contact priority order:**
1. Enterprise Solutions Architect (primary — direct champion)
2. Sr. Solutions Engineer or Principal Solutions Architect (secondary champion)
3. VP Engineering or Head of Engineering (economic buyer — only engage if champions found first)
4. IT Director (only relevant for IT objection handling — don't cold outreach here)

**For each contact:**
- Full name + current title
- Work email (verified, ≥ 80% confidence)
- LinkedIn URL
- Time in current role (from LinkedIn — shorter tenure = higher change appetite)
- Recent LinkedIn activity: last post topic and date

---

## Data Quality Standards

| Field | Required? | Source |
|-------|-----------|--------|
| Employee count | Yes | LinkedIn / Clearbit |
| Funding stage + date | Yes | Crunchbase / Clay |
| Industry confirmed as ICP | Yes | Website + Clearbit |
| ESA function present | Yes | LinkedIn job postings |
| Enterprise browser mandate | Yes (check, not just confirm) | LinkedIn / BuiltWith |
| HubSpot domain activity | Yes | HubSpot |
| Primary contact email (≥80% confidence) | Yes | Clay waterfall |
| Primary contact LinkedIn URL | Yes | Clay / Sales Nav |
| Company Fit Score calculated | Yes | ICP Scoring skill |

---

## Enrichment Cadence

| Account tier | Re-enrich every |
|-------------|----------------|
| Tier 1 | 30 days |
| Tier 2 | 60 days |
| Tier 3 | 90 days |
| Tier 4 (monitor) | On trigger event |

---

## Email Deliverability Infrastructure

Enrichment is worthless if emails don't land. Configure before any sequence volume.

**Domain setup:**
- Send from a subdomain (`outbound.kahana.co` or similar), never the primary domain
- SPF, DKIM, and DMARC configured — verify with MXToolbox before sending
- Warm new sending domains for 4–6 weeks: start at 15 emails/day, increase 20% per week

**Sending limits:**
- Warmed mailbox: 40–50 emails/day max
- Per sequence: enforce daily cap in HubSpot
- Tier 1: dedicated sending mailbox, monitored manually for replies

**Bounce rate management:**
- Verify emails before HubSpot enrollment (Apollo, Hunter, or NeverBounce)
- Target: < 2% hard bounce rate per campaign
- Bounce rate > 5% → immediate pause + domain review

---

## CRM Sync After Enrichment

After enriching, update HubSpot:

| HubSpot Field | Source |
|---------------|--------|
| Company Size | Clay / Clearbit |
| Funding Stage | Crunchbase / Clay |
| Last Funding Date | Crunchbase / Clay |
| Industry | Clearbit / Manual |
| Has_ESA_Function | Clay custom enrichment |
| Enterprise_Browser_Detected | Clay / Manual |
| Fit Score | ICP Scoring skill |
| Account Tier | ICP Scoring skill |
| Existing_Oasis_Users | HubSpot domain check |
| Last Enriched Date | Auto-timestamp |
