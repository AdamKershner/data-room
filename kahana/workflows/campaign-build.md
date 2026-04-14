# Workflow: Campaign Build

*How we go from a target segment to a live campaign. Strategy before copy — always.*

---

## Purpose

A campaign is not a sequence. A sequence is copy and timing. A campaign is a defined target segment, a clear signal trigger, a measurement plan, and then a sequence. This workflow ensures we never write copy before the strategy is clear.

For Oasis, there are two types of campaigns to understand:
- **PLG-triggered:** Fired by product signals (paywall hit, domain multi-user, feature activation). These are warm — the product has done the selling already.
- **Outbound signal-triggered:** Fired by firmographic or behavioral signals (ESA hire, Series A/B, pricing page visit via Warmly). These are cold-to-warm.

The copywriting approach and sequence intensity are fundamentally different between the two.

---

## Pre-Campaign Checklist

Before starting any new campaign:

- [ ] Is there a clear signal or trigger defining this audience?
- [ ] Is the ICP tier and persona defined?
- [ ] Is the estimated audience ≥ 30 accounts? (Below this, the data won't be statistically meaningful at our current stage)
- [ ] Is this a PLG-triggered or outbound-triggered campaign? (Different workflow below)
- [ ] Is there a success metric and a timeline for evaluation?
- [ ] Is the value prop differentiated from any campaigns already running?

---

## Phase 1: Audience Definition

**Time:** 20 minutes

```markdown
## Campaign Target Definition

Signal(s): [From signal library — e.g., "ESA hire in last 30 days"]
Campaign type: [PLG-triggered / Outbound signal-triggered]
ICP Tier: [1 / 2 / 3]
Persona: [ESA / VP Engineering / IT Director]
Account status: [Cold / Has PLG users / Previously contacted]

Additional filters:
  - Industry: [B2B SaaS, FinTech, DevTools — specify]
  - Size: [50–500 employees]
  - Geography: [US, UK, Canada, AU, NZ]
  - Technographic: [No existing enterprise browser mandate]
  - Recency: Signal must have fired in last [30] days

Estimated list size: [X accounts]
Estimated contacts: [Y people]
```

---

## Phase 2: Enrichment

Run the enrichment workflow (`workflows/enrichment.md`) on the target list.

Quality gate: do not proceed until:
- ≥ 80% of contacts have verified email or LinkedIn URL
- ICP score calculated for all accounts
- HubSpot PLG activity checked for all domains (any existing Oasis users?)

---

## Phase 3: Message Strategy

**Time:** 30 minutes

Answer these questions in writing before writing any copy:

1. **What is the hook?** The specific, datable, observable trigger that justifies this outreach right now. Not a general pain — the specific event.

2. **What insight does that signal provide?** What does the event tell us about this ESA's or company's situation that they may not have fully considered?

3. **What's the one ask?** A single, frictionless next step. Not "let me know if you're interested." A specific action: "Worth 15 minutes to see how it works for your team?"

4. **What proof point is most relevant?** One customer outcome or command example most relevant to this specific segment. (At early stage: use command examples instead of customer metrics until pilot data exists.)

5. **Any competitive context?** If accounts in this segment are likely Arc users or Chrome-mandated shops, what angle applies?

---

## Phase 4: Sequence Build

Run the Signal to Sequence skill (`skills/signal-to-sequence/SKILL.md`).

**For PLG-triggered campaigns:**
- Touch 1 is warmer — the person knows Oasis. Skip the product intro entirely.
- The CTA is about team/enterprise, not personal use.
- Shorter sequence: 3 touches, not 5-6.

**For outbound signal-triggered campaigns:**
- Full 5-touch sequence per the skill.
- Touch 1 is cold — establish relevance quickly.

Outputs needed:
- [ ] Touch 1 email (3 subject line variants for A/B test)
- [ ] LinkedIn connection note
- [ ] Touch 3 email (different angle)
- [ ] Touch 4 email (use case or question)
- [ ] Break-up email

---

## Phase 5: QA

**Copy review:**
- [ ] Touch 1 passes PVP standard (see Signal to Sequence skill)
- [ ] No generic openers ("I wanted to reach out," "I noticed," "Hope this finds you well")
- [ ] Signal hook is specific and datable — not a category claim
- [ ] CTA is one action, not multiple options
- [ ] Under 120 words for Tier 2; under 80 words for Tier 1 (brevity signals respect for their time)
- [ ] ESA voice: peer-to-peer, technical, no marketing fluff

**List review:**
- [ ] No existing Oasis customers in the list
- [ ] No active HubSpot opportunities
- [ ] No suppressed contacts (DNC, unsubscribed, competitor domains)
- [ ] No student or personal email addresses
- [ ] Warmly: no company currently flagged as "do not contact"

**HubSpot setup review:**
- [ ] Sequence created in HubSpot
- [ ] Contacts enrolled in correct sequence
- [ ] Personalization tokens mapped and tested ({{first_name}}, {{company}}, etc.)
- [ ] Send time configured (Tuesday–Thursday, 8–10am local time recommended)
- [ ] Campaign folder created in `outputs/campaigns/[date]-[campaign-name]/`

---

## Phase 6: Launch and Monitor

**Week 1–2:** Monitor reply rates daily. Pause and rewrite touch 1 if reply rate < 1% after 40 sends.

**Week 3–4:** First performance review. Compare to targets in the measurement plan.

**Week 6:** Full campaign review. Continue / iterate / retire decision.

### Continue / Iterate / Retire Framework

| Situation | Decision | Action |
|-----------|----------|--------|
| Reply rate ≥ target, meetings booking | Continue | Keep running. Expand the account list. |
| Reply rate ≥ target, no meetings | Iterate | The message lands but the ask or fit is wrong. Rewrite CTA and tighten ICP. |
| Reply rate 50–80% of target | Iterate | Test a new subject line and rewrite touch 1 body. |
| Reply rate < 50% of target after 6 weeks | Retire | Kill it. Document what didn't work. The note is worth more than the campaign. |
| PLG-triggered: low reply from high-signal accounts | Investigate | These should be warm. Check: was outreach too sales-y? Was the account already a customer? Is the signal data accurate? |

---

## Campaign Performance Benchmarks

For Oasis, outbound to ESAs is a higher-quality audience than generic SaaS outbound. Expect higher reply rates than industry averages if the signal is strong.

| Metric | Strong | Average | Weak — investigate |
|--------|--------|---------|-------------------|
| Open rate | > 55% | 35–55% | < 35% |
| Reply rate (all) | > 7% | 3–7% | < 3% |
| Positive reply rate | > 4% | 1–4% | < 1% |
| Meeting rate | > 3% | 1–3% | < 1% |
| PLG-triggered reply rate | > 15% | 8–15% | < 8% (investigate signal data) |

---

## Campaign Archive

Every completed campaign gets archived in `outputs/campaigns/` with:
- Original brief
- Final sequence copy
- Performance results
- Two-sentence retrospective: what worked, what didn't

The archive is the most valuable GTM asset over time. Before building a new campaign for a similar segment, check what's already been tried.
