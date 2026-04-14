# Workflow: Signal Routing

*How signals get detected, scored, and routed to the right action. This is the connective tissue between product telemetry, Warmly intent data, and outbound sequences.*

---

## Purpose

Signals mean nothing without routing. This workflow defines what happens when a signal fires — which account gets researched, which rep gets notified, which sequence triggers, and what gets suppressed.

For Oasis, routing has two distinct tracks:
- **PLG track:** Product signals (paywall, domain multi-user, feature activation) → warm enterprise conversion
- **Outbound track:** Firmographic/behavioral signals (ESA hire, Series A/B, Warmly visit) → cold/warm sequence

---

## Signal Detection Methods

### Real-time (fires within minutes)

| Signal | Detection method | Tool |
|--------|-----------------|------|
| Paywall hit | Product event webhook | Product → HubSpot webhook |
| Demo request / Contact Sales | Form submission | HubSpot form → workflow |
| Warmly website visit (company-level) | IP/domain identification | Warmly → HubSpot |
| 3+ users from same domain | Domain-match count threshold | HubSpot workflow |
| Core feature activated | Product event webhook | Product → HubSpot webhook |
| Teammate invite | Product event webhook | Product → HubSpot webhook |

### Daily (batch, runs overnight)

| Signal | Detection method | Tool |
|--------|-----------------|------|
| ESA / Solutions hire at target account | LinkedIn job posting monitor | Clay (Claygent) |
| Series A/B announced | Crunchbase / PitchBook | Clay enrichment |
| Tech stack change | BuiltWith delta | Clay |
| Warmly pricing page visit | Daily batch from Warmly | Warmly → HubSpot |

### Weekly (manual or scheduled)

| Signal | Detection method | Tool |
|--------|-----------------|------|
| CRM inactivity review | Accounts with no activity in 30+ days | HubSpot report |
| Signal score decay batch | Apply decay multipliers to aging signals | HubSpot workflow or manual |
| New target accounts added to Clay table | Clay enrichment run | Clay → HubSpot |

---

## Routing Logic

When a signal fires, this decision tree determines the action.

```
Signal fires on account X
│
├── Is X an existing Oasis customer?
│   └── Yes → Route to CSM for expansion or upsell signal. Stop.
│
├── Is X in active HubSpot pipeline?
│   └── Yes → Add signal note to deal. Alert assigned AE. Stop.
│
├── Is X suppressed (unsubscribed, DNC, competitor domain, recent contact)?
│   └── Yes → Log signal. Do not trigger outreach. Stop.
│
├── Is this a PLG signal? (Paywall / Multi-user / Feature activation)
│   └── Yes → Run PLG-to-enterprise playbook (playbooks/plg-to-enterprise.md)
│             → Calculate CDS Score
│             → If CDS ≥ 70 or multi-user confirmed: Tier 1 process
│             → If CDS 50–69: Tier 2 process
│
├── Calculate CDS Score (outbound signals)
│   │
│   ├── CDS ≥ 80 or Fit ≥ 75 (Green)
│   │   └── Alert AE immediately (Slack)
│   │       Run Account Research skill within 24 hours
│   │       AE reviews and approves outreach within 48 hours
│   │
│   ├── CDS 50–79 (Yellow)
│   │   └── Trigger Tier 2 sequence in HubSpot
│   │       Alert SDR for touch 1 review
│   │
│   ├── CDS 40–59
│   │   └── Add to Tier 3 automated sequence
│   │       No manual review
│   │
│   └── CDS < 40
│       └── Log signal. Update score. No outreach.
```

---

## Alert Templates

### Tier 1 Signal Alert (to AE — Slack)

```
🟢 Tier 1 Signal — [Company] — [Signal name]

Signal: [Signal name]
Fired: [Date]
CDS Score: [X]/100 | Signal Status: Green

ICP fit:
- [Key fit indicator 1 — e.g., "3 ESAs on team, Series B funded 3 months ago"]
- [Key fit indicator 2]

PLG activity: [Any existing Oasis users from domain? Paywall hit?]

Recommended contact: [Name, Title, Email]

Action needed: Review research brief and approve outreach by [Date + 48h].
Research: [Link to outputs/[date]-[company]-research.md]
```

### SDR Notification (Tier 2 — Slack or HubSpot task)

```
[Company] entered Tier 2 — [Signal name] fired [X] days ago.
CDS Score: [X]/100

Sequence: "[Sequence name]" queued in HubSpot. Touch 1 scheduled for [Date].
Review touch 1 personalization before send: [HubSpot sequence link]
```

### PLG Alert (Multi-user domain — to AE — Slack)

```
🚀 PLG Signal — [Company] — [N] users from domain

[N] people from @[company.com] have activated Oasis in the last 30 days:
- [Name, Title]
- [Name, Title]
- [Name, Title if known]

This is organic adoption — run the PLG-to-enterprise playbook.
Priority: High. Best outreach window is now.

HubSpot company record: [Link]
Research brief: [Link or "run account-research SKILL"]
```

---

## Suppression Rules

An account in any of the following states should NOT receive triggered outreach:

- Active Oasis customer (any tier)
- Active HubSpot opportunity (any stage)
- Contact unsubscribed in last 90 days
- Account marked "Do Not Contact" in HubSpot
- Competitor domain (@[competitor].com)
- Outreach sent in last X days (cooldown periods below)
- Student email or personal email domain

**Cooldown periods by tier:**
- Tier 1: 45 days after last sequence completion
- Tier 2: 60 days
- Tier 3: 90 days

---

## Signal Decay

Signal scores reduce over time. Configure this as a scheduled HubSpot workflow.

| Signal age | Score multiplier |
|------------|-----------------|
| 0–30 days | 100% |
| 31–60 days | 75% |
| 61–90 days | 50% |
| 91–180 days | 25% |
| 180+ days | 0% (signal expires) |

**Run weekly:** HubSpot workflow recalculates scores with decay applied. Accounts that drop below tier thresholds are automatically downgraded in Signal Status.

**PLG signals do not decay in the same way:** A paywall hit from 45 days ago that hasn't been followed up is still warm. The product proof is durable; the urgency decays. Treat PLG signals at 50% value after 60 days, not 25%.

---

## HubSpot Workflow Configuration

### Workflow: PLG Signal — Paywall Hit
- **Trigger:** Contact property `Paywall_Hit` = "Yes"
- **Action 1:** Set `Signal_Status` = "Green" (if Fit Score ≥ 50)
- **Action 2:** Create task for AE: "Paywall hit — enterprise outreach within 24h"
- **Action 3:** Send Slack notification via HubSpot → Slack integration

### Workflow: Domain Multi-User Alert
- **Trigger:** Company property `Company_User_Count_24h` ≥ 3
- **Action 1:** Set `Account_Signal_Status` = "Green"
- **Action 2:** Create task for AE: "3+ users from domain — run PLG playbook"
- **Action 3:** Send Slack notification

### Workflow: CDS Score Calculation
- **Trigger:** Any of: Fit Score, Intent Score, Product Usage Score, Momentum Score changes
- **Action:** Recalculate CDS Score using formula:
  `CDS = (Fit × 0.3) + (Intent × 0.3) + (Usage × 0.3) + (Momentum × 0.1)`
- **Action 2:** Update `Signal_Status` based on CDS + Fit dual-condition logic

### Workflow: Signal Status → Sequence Enrollment
- **Trigger:** Signal_Status changes to "Yellow" (and no active opportunity or sequence)
- **Action:** Enroll contact in appropriate Tier 2 sequence based on signal type
- **Suppression check:** Must pass all suppression rules before enrollment
