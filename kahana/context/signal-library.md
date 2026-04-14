# Signal Library — Oasis Browser

*Signals are observable events that predict pipeline conversion. Every outreach campaign traces back to at least one signal here.*

Last updated: 2026-04-14

---

## Signal Scoring Model

Accounts accumulate points as signals fire. Thresholds determine outreach intensity.
Aligned with the CDS scoring model in HubSpot.

| Score | Tier | Action |
|-------|------|--------|
| 80–100 | Hot | AE alert within 2 hours. Research brief within 24 hours. Outreach within 48 hours. |
| 60–79 | Warm | SDR triggers Tier 2 sequence within 48 hours. |
| 40–59 | Cool | Add to Tier 3 automated sequence. |
| 0–39 | Cold | Log and monitor. No outreach. |

---

## Tier 1 Signals — Act Immediately

*High predictive power. Alert within 2 hours, research within 24 hours, outreach within 48 hours.*

---

### Signal: Paywall Hit

**Category:** Product Usage (PLG)
**Points:** +40
**Source:** Product telemetry → HubSpot
**Refresh cadence:** Real-time

**Definition:** A user on the free/trial tier of Oasis hits the usage limit — a hard gate on features, tabs, or commands that requires an upgrade to continue.

**Why it predicts fit:** A paywall hit is the strongest possible PLG signal. The user has already validated that Oasis solves their problem — they've used it enough to hit a limit. The friction of upgrading is the only thing between them and paying. This is the warmest lead in the system.

**Detection method:**
```
HubSpot: Paywall_Hit property = "Yes"
Trigger: Product event "paywall_triggered" fires → HubSpot contact property updated via webhook
```

**Message hook:** "You've been using Oasis long enough to hit the limit — before you decide whether to upgrade, I'd like to show you what the team tier looks like for [Company]. We're working with a few companies your size on $50K pilots."

---

### Signal: 3+ Users From Same Company Domain Active

**Category:** Product Usage (PLG) + Account-Level
**Points:** +35 (account signal, overrides individual scoring)
**Source:** Product telemetry → HubSpot (domain matching)
**Refresh cadence:** Real-time / Daily batch

**Definition:** Three or more users sharing the same company email domain have installed and activated Oasis within any rolling 30-day window. This is organic team adoption — the product is spreading without any sales motion.

**Why it predicts fit:** Bottom-up adoption at 3+ users is the core signal of the B2C2B flywheel working. The product has already proven value to multiple people. An enterprise conversation at this point is not a cold outreach — it's formalizing something that's already happening. Close rates on multi-user accounts are significantly higher than on single-user accounts.

**Detection method:**
```
HubSpot: Company_User_Count_24h property or domain-matched contact count
Trigger: When 3 contacts from same @company.com domain reach "Activated" lifecycle stage
Alert: Immediate Slack notification → AE assigned
Account Signal Status → Green automatically
```

**Message hook:** "I noticed [3/4/5] people from [Company] have started using Oasis over the past few weeks — [Name], [Name], and [Name]. That kind of organic spread usually means there's a real workflow problem being solved. Worth talking about how a team tier would work?"

---

### Signal: Demo Request or Contact Sales Form Submitted

**Category:** Behavioral / Intent
**Points:** +40
**Source:** HubSpot form → CRM
**Refresh cadence:** Real-time

**Definition:** A lead submits the "Request a Demo" or "Contact Sales" form on kahana.co.

**Why it predicts fit:** This is an explicit buying signal. The person has already crossed the threshold of deciding they want a conversation with sales. This is not a research behavior — it's a decision behavior.

**Detection method:**
```
HubSpot: Demo_Request = "Yes" OR Contact_Sales = "Yes"
Trigger: Form submission → HubSpot contact property set → Workflow triggers Slack alert and task creation
SLA: 15-minute response required
```

**Message hook:** Respond, don't pitch. "Thanks for reaching out — I saw your note. Are you looking at Oasis for your own use or for your team? Happy to jump on a call today or tomorrow."

---

## Tier 2 Signals — Add to Active Sequences

*Moderate predictive power. Trigger sequences within 48 hours.*

---

### Signal: Pricing Page Visit (Warmly / HubSpot)

**Category:** Behavioral / Intent
**Points:** +15
**Source:** Warmly website intent OR HubSpot page view tracking
**Refresh cadence:** Real-time

**Definition:** An identified contact or company visits the kahana.co pricing page. Warmly identifies the company even if the contact is anonymous; HubSpot tracks identified contacts.

**Why it predicts fit:** Pricing page visitors are evaluating whether to buy. They're past the awareness stage. Combined with any Fit Score ≥ 50, this warrants outreach.

**Detection method:**
```
Warmly: Company-level intent → "pricing page viewed" event → HubSpot contact/company updated
HubSpot: Pricing_Page_Visit = "Yes" for identified contacts
```

**Message hook:** "Saw you were checking out the pricing page — happy to walk through what the team tier looks like for a company your size."

---

### Signal: ESA or Solutions Engineer Hire at Target Account

**Category:** Organizational
**Points:** +20
**Source:** Clay (LinkedIn job change monitoring) + LinkedIn Sales Navigator
**Refresh cadence:** Weekly

**Definition:** A target account posts or fills a role with "Solutions Architect," "Enterprise Solutions Architect," "Solutions Engineer," or "Platform Engineer" in the title in the last 30 days.

**Why it predicts fit:** New hires in these roles inherit the worst of the context switching problem — onboarding to a new company means navigating 10+ unfamiliar tools, multiple browser environments, and no established workflow. They're also most open to new tooling in their first 90 days, before they've locked into existing habits. This is the highest-change-appetite window.

**Detection method:**
```
Clay: Monitor LinkedIn job postings at target accounts
Filter: title contains "solutions architect" OR "solutions engineer" OR "platform engineer"
Posted in last 30 days
→ Clay webhook → HubSpot contact created/updated with "New_ESA_Hire" property
```

**Message hook:** "Congrats on the new role at [Company] — jumping between [product], [documentation], and [client environments] in the first few months is brutal. Oasis was built for exactly this situation."

---

### Signal: Series A or B Funding Announcement

**Category:** Firmographic
**Points:** +20 (if company is ICP-qualified)
**Source:** Crunchbase / Clay / TechCrunch
**Refresh cadence:** Daily

**Definition:** A target-ICP company announces Series A or B funding in the last 60 days.

**Why it predicts fit:** Post-funding = headcount scaling. More engineers, more ESAs, more knowledge workers — the browser chaos amplifies before anyone thinks to address it. Budget is also freshly available and teams are in "invest in infrastructure" mode.

**Detection method:**
```
Clay: Crunchbase enrichment → funding_stage = "Series A" OR "Series B"
last_funding_date within 60 days
→ Tag in HubSpot as "Series_A_B_Signal" = "Yes"
```

**Message hook:** "Congrats on the [Series A/B] — [Company] is clearly moving fast. The part nobody plans for: 15 new people onboarding means 15 new browser setups, 15 new tab-management habits, 15 more context switches per hour. We've been building something for exactly that moment."

---

### Signal: Warmly Anonymous Company Visit (Non-pricing Page)

**Category:** Behavioral / Intent
**Points:** +10
**Source:** Warmly
**Refresh cadence:** Real-time

**Definition:** Warmly identifies a company (via IP/domain) visiting kahana.co but NOT the pricing page. No contact identified yet.

**Why it predicts fit:** Indicates awareness and early research. Low on its own but highly relevant if combined with any other signal. Use as enrichment context, not a standalone trigger.

**Detection method:**
```
Warmly: Company-level visit → No pricing page → Intent score = "researching"
→ Queue for Clay enrichment to find relevant contact at the visiting company
→ If enriched contact has Fit Score ≥ 50 AND no previous contact: add to Tier 3 sequence
```

---

### Signal: Core Feature Activation (Product Usage)

**Category:** Product Usage (PLG)
**Points:** +30
**Source:** Product telemetry → HubSpot
**Refresh cadence:** Real-time

**Definition:** A user has activated a core Oasis feature — first successful natural language command executed, tab group created, or split view invoked.

**Why it predicts fit:** Feature activation means the user has moved past "installed" to "using." This is the first real retention signal in the PLG funnel. Activated users who return are the candidates for paywall hit and team expansion.

**Detection method:**
```
HubSpot: Feature_Activation = "Yes"
Trigger: Product event "core_feature_used" fires → HubSpot property updated
```

---

## Tier 3 Signals — Monitor

*Weak signals on their own. Valuable in combination.*

- **Case study download** (+10 pts) — Intent signal; researching use cases
- **3+ sessions in 7 days** (+20 pts) — Regular usage pattern building
- **Competitor comparison page visit** (+25 pts) — Actively evaluating alternatives
- **LinkedIn post engagement with Oasis content** (+5 pts) — Awareness signal
- **GitHub stars or follows from target company domain** (+5 pts) — Technical awareness
- **Job posting for "browser management" or "productivity tools"** (+10 pts) — Active tooling investment

---

## Signal Combinations

| Combination | Bonus | What it means | Action |
|-------------|-------|---------------|--------|
| Paywall hit + Core feature activated | Already included — paywall hit is max | User has proven product value AND hit limit | Immediate enterprise outreach within 24h |
| 3+ users from domain + Pricing page visit | +10 bonus | Bottom-up adoption + someone evaluating team pricing | AE outreach — deal is forming on its own |
| Series A/B signal + ESA hire | +10 bonus | Company scaling AND new ESA coming in | High-value window: reach the new hire in first 30 days |
| Warmly visit + Demo request | Already max for demo request | Company researched before requesting | Reference the research in your first reply |
| Pricing page + Competitor comparison | +15 bonus | Actively in a browser evaluation right now | Fast response, competitive angle, offer a direct comparison |

---

## Suppression Rules

- Existing customer (any tier) → route to CSM, not sales
- Contact unsubscribed or DNC in last 90 days → suppress all outreach
- Active opportunity in HubSpot → add signal note to deal, alert AE, do not re-enroll in sequences
- Competitor domain (email contains known competitor domain) → suppress automated sequences; flag for manual review
- Student email (.edu) → suppress sales outreach; route to self-serve only

---

## Signal Decay

Signal scores reduce over time. A 90-day-old signal is not the same as a 5-day-old signal.

| Signal age | Score multiplier |
|------------|-----------------|
| 0–30 days | 100% |
| 31–60 days | 75% |
| 61–90 days | 50% |
| 91–180 days | 25% |
| 180+ days | 0% (signal expires) |

Run weekly batch in HubSpot to recalculate scores with decay applied. Accounts that drop below tier thresholds are downgraded automatically.

---

## Signal Performance Log

*Track which signals generate pipeline. Update after every campaign.*

| Signal | Outreach sent | Replies | Meetings | Pipeline | Notes |
|--------|--------------|---------|----------|----------|-------|
| Paywall Hit | — | — | — | — | To be tracked after first campaigns |
| 3+ Users from Domain | — | — | — | — | |
| Demo Request | — | — | — | — | |
| Pricing Page Visit | — | — | — | — | |
| ESA Hire | — | — | — | — | |
| Series A/B Signal | — | — | — | — | |
