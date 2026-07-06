# 08 — Team Operating Model

[← Back to index](./README.md) · Prev: [07 — Product roadmap](./07-product-roadmap.md) · Next: [09 — Risks](./09-risks-and-mitigations.md)

## Executive summary

Scaling Kahana toward Amazon-level catalog and revenue requires clear **roles**, **cadence**, and **decision rights**. This doc proposes an operating model for the growth phase—with placeholders for your current roster.

**Tools:** [Linear](https://linear.app/kahana) is the system of record for product backlog (features, bugs, sprint work). **Slack** is the communication layer. See the data room [/operating-system](/operating-system) page for full workflow.

---

## Current team roster

| Name | Role | Primary ownership | [FILL IN] |
|------|------|-------------------|-----------|
| [FILL IN] | CEO / Founder | Vision, fundraising, key partnerships | |
| [FILL IN] | Product | Roadmap, prioritization | |
| [FILL IN] | Engineering | Ship Explore, Hub, payments | |
| [FILL IN] | Growth / Marketing | Acquisition, SEO, campaigns | |
| [FILL IN] | Creator success | Onboarding, top creator relationships | |

**Headcount today:** [FILL IN]

**Planned hires (12 mo):** [FILL IN]

---

## Recommended roles at scale

| Role | When to hire | KPIs |
|------|--------------|------|
| **Product** | Now | Roadmap delivery, conversion uplift |
| **Engineering** | Now | Uptime, ship rate, payment reliability |
| **Growth** | GMV > [FILL IN] or Explore traffic > [FILL IN] | CAC, organic %, funnel conversion |
| **Creator success** | > [FILL IN] active monetized creators | Creator retention, GMV per creator |
| **Trust & safety** | Adult content volume or dispute rate > [FILL IN] | Moderation SLA, chargeback rate |
| **Finance / ops** | MRR > [FILL IN] | Reporting accuracy, unit economics |

---

## Ownership matrix (RACI sketch)

| Area | Responsible | Accountable | Consulted | Informed |
|------|-------------|-------------|-----------|----------|
| Explore GMV | [FILL IN] | [FILL IN] | Product, Eng | All |
| Growth MRR | [FILL IN] | [FILL IN] | Product | All |
| Enterprise deals | [FILL IN] | [FILL IN] | Eng, Product | All |
| Hub UX quality | [FILL IN] | [FILL IN] | Growth | All |
| Trust & safety | [FILL IN] | [FILL IN] | Legal | All |

---

## Cadence

### Weekly

| Meeting | Duration | Attendees | Output |
|---------|----------|-----------|--------|
| **Metrics standup** | 30 min | Leadership + growth | Top-line numbers, blockers |
| **Product / eng sync** | 30 min | Product, eng | Linear backlog review, sprint progress, scope cuts |
| **Creator spotlight** | 15 min async | Growth, creator success | 1 creator win + 1 learning |

### Monthly

| Ritual | Doc |
|--------|-----|
| **Metrics review** | [Monthly template](./templates/monthly-metrics-review.md) |
| **Roadmap reprioritization** | [07 — Product roadmap](./07-product-roadmap.md) |
| **Top creator check-in** | CRM notes [FILL IN: tool] |

### Quarterly

| Ritual | Doc |
|--------|-----|
| **Business review** | [QBR template](./templates/quarterly-business-review.md) |
| **Strategy refresh** | Update [01](./01-vision-and-positioning.md), [05](./05-growth-strategy.md) |
| **Unit economics refresh** | [06 — Unit economics](./06-unit-economics.md) |

---

## KPI dashboard spec

Track in one place (Notion, Metabase, spreadsheet—[FILL IN: tool]).

### North-star metrics

| Metric | Definition | Source | Owner |
|--------|------------|--------|-------|
| GMV (monthly) | Hub sales volume | Stripe | [FILL IN] |
| MRR | Subscription revenue | Stripe | [FILL IN] |
| Active monetized hubs | Hubs with sales in last 30d | Firestore + Stripe | [FILL IN] |
| Explore unique visitors | Traffic | Mixpanel / analytics | [FILL IN] |
| Purchase conversion | Purchases / hub views | Mixpanel + Stripe | [FILL IN] |

### Supporting metrics

| Metric | Source |
|--------|--------|
| New signups | Firebase Auth / Mixpanel |
| Free → Growth conversion | Stripe + product events |
| Churn (Growth) | Stripe |
| Avg hub price | Stripe |
| Top 10 creator GMV share | Stripe |
| Support tickets | [FILL IN] |
| Uptime | Heroku / Firebase |

**Product fact:** Mixpanel events exist for billing CTAs (`Paid_Plan_Button_Clicked`, `Enterprise_Contact_Clicked`, profile save, etc.).

---

## Decision framework

When priorities conflict, use this order unless leadership explicitly overrides:

| Priority | When to favor | Example |
|----------|---------------|---------|
| 1. **Payment reliability** | Always | Stripe outage, paywall bug |
| 2. **Trust & safety** | Legal/reputation risk | Moderation failure |
| 3. **Conversion** | Funnel leak identified | Paywall drop-off |
| 4. **GMV growth** | Catalog and traffic exist | Featured creators |
| 5. **MRR growth** | Unit economics healthy | Growth upsell experiments |
| 6. **New features** | Core loop is healthy | Affiliates, H3 bets |

### GMV vs MRR tradeoff

- **Early stage:** Bias **GMV**—prove creators earn and marketplace works
- **Efficiency stage:** Bias **MRR**—improve margins and predictable revenue
- **Enterprise stage:** Bias **ACV**—fewer, larger deals

[FILL IN: which stage Kahana is in today]

---

### Daily / weekly (product & engineering)

| Ritual | Owner | Output |
|--------|-------|--------|
| **Linear triage** | PM (daily) | New issues labeled, duplicates merged |
| **Backlog prioritization** | PM (weekly) | Top issues ordered; engineers assigned |
| **Status updates** | Engineering | Issue status current in Linear |

---

## Communication norms

- **Default async** — Decisions documented in markdown, Notion, or Linear issue descriptions
- **Slack for conversation** — When work needs tracking, create a [Linear](https://linear.app/kahana) issue and link the thread
- **Weekly written metrics** — No metric, no meeting
- **Single roadmap** — [07 — Product roadmap](./07-product-roadmap.md) for horizon themes; [10 — Technical roadmap](./10-technical-roadmap.md) for Security / Trust / Algorithm focus; [Linear](https://linear.app/kahana) for execution backlog
- **Onboarding** — New hires review `/technical-roadmap` in the data room (Day 3 onboarding step)

---

## Related docs

- [04 — Revenue model](./04-revenue-model.md)
- [05 — Growth strategy](./05-growth-strategy.md)
- [Templates](./templates/monthly-metrics-review.md)
