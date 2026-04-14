# Playbook: New Signal Response

*What to do when a signal fires — from detection to first touch. Adapted for Oasis's B2C2B motion where PLG signals (product usage) are as important as firmographic ones.*

---

## Trigger

A Tier 1 or Tier 2 signal fires on an account or contact in your ICP.

---

## Step 1: Validate the Signal (5 min)

Before doing anything, confirm the signal is real and the account is qualified.

- [ ] Is the signal genuine? (Not a data error or test account)
- [ ] Is the account ICP-qualified? (Check against `context/icp-definition.md`)
- [ ] Is the account currently suppressed? (Existing customer, active HubSpot deal, recent contact, unsubscribe, competitor domain)
- [ ] Is the signal fresh? (Within the recency window from `context/signal-library.md`)
- [ ] For PLG signals: is this a real company email, not a personal or student address?

If any check fails: log the signal in HubSpot, do not proceed.

---

## Step 2: Score the Account (10 min)

Check the CDS Score and Fit Score in HubSpot, or calculate manually.

```
Read skills/icp-scoring/SKILL.md and score [company] given that the [signal name]
signal just fired.
```

- CDS ≥ 80 → Signal Status = Green → Tier 1 process
- CDS 50–79 → Signal Status = Yellow → Tier 2 process
- CDS < 50 → Log signal, no outreach unless Fit Score ≥ 75

---

## Tier 1 Response — PLG Signal: Paywall Hit

**This is your highest-priority trigger. Time budget: 30 minutes. Outreach within 24 hours.**

### 1a. Check the Account in HubSpot

- How many users from this domain are active?
- Which features have they activated?
- How long have they been on Oasis?
- Any other contacts from this company in HubSpot?

### 1b. Identify the Right Contact

The paywall-hit user is your starting point — but your outreach depends on context:

| Situation | Who to reach |
|-----------|-------------|
| Individual user, no other domain activity | Reach the user directly — they're already sold; have an upgrade conversation |
| 2+ users from same domain | Reach the most senior ESA or engineering title first — frame as a team conversation |
| 3+ users from same domain | Trigger the account-level signal playbook (multi-user) AND reach the champion |

### 1c. Write the First Touch

Don't use a template. Reference what you know:

```
Read context/personas/enterprise-solutions-architect.md and the account
data for [company.com] from HubSpot.

Write a first touch email for [contact name] who just hit the Oasis paywall.
[X] users from their domain are active. They've been using [features].
Keep it under 75 words. Lead with what they've already done, not what we offer.
Apply the PVP standard from skills/signal-to-sequence/SKILL.md.
```

### 1d. Send and Log

- Send from AE or founder email — not a sequence tool for this signal
- Log the outreach in HubSpot with signal context
- Set a 48-hour follow-up reminder if no reply

---

## Tier 1 Response — PLG Signal: 3+ Users From Same Domain

**B2C2B account-level trigger. This is the enterprise flywheel working. Time budget: 45 minutes.**

### 1a. Research the Account

```
Read skills/account-research/SKILL.md and research [company.com].
Signal context: [N] users from this domain are active in Oasis.
Known users: [list names/titles from HubSpot if available].
Save output to outputs/[date]-[company]-research.md
```

### 1b. Identify the Champion

From HubSpot contacts associated with this domain:
- Highest seniority ESA or Solutions Engineer = primary target
- If no ESA exists: VP Engineering or Head of Platform

### 1c. Write the First Touch

Reference the specific names of active users — this is not cold outreach.

```
Read context/personas/enterprise-solutions-architect.md and the research output.
Write a first touch email for [champion name] at [company].
Reference that [N] colleagues are already using Oasis by name if possible.
Frame as "formalizing something that's already happening."
Under 100 words. One CTA: a 20-minute call.
```

---

## Tier 1 Response — Demo Request / Contact Sales

**SLA: 15 minutes.** This person asked to talk to you. Don't write a pitch — have a conversation.

### Immediate action

1. Check HubSpot: what else do you know about this contact? Active Oasis user? Pricing page visited?
2. Reply within 15 minutes. Short. "Thanks for reaching out — are you looking at Oasis for yourself or for your team? Happy to find time today or tomorrow."
3. If they're already active users: skip intro, go straight to understanding what they need.

---

## Tier 2 Response (CDS 50–79)

**Time budget: 15 minutes. Sequence triggered within 48 hours.**

### 2a. Find the Matching Campaign

Check `outputs/campaigns/` for an active campaign matching this signal and persona. If one exists and is live, add the contact to it.

If no matching campaign:
```
Read skills/signal-to-sequence/SKILL.md.
Build a Tier 2 sequence for the [signal name] signal targeting [ESA / VP Eng].
```

### 2b. Personalize Touch 1

Even in automated sequences, touch 1 must reference the specific signal that fired. "I saw you were researching [topic]" is not personalization. "Saw [Company] just closed a Series B" is.

### 2c. Add to Sequence and Log

- Add contact to HubSpot sequence
- Log signal that triggered enrollment
- Set 7-day review reminder for reply status

---

## After First Touch

Log in HubSpot regardless of tier:
- Signal that triggered outreach
- Date of first touch
- Contact reached
- Sequence enrolled or manual outreach noted
- CDS Score at time of outreach

This data calibrates the signal library over time. Signals with low reply rates need investigation — either the message is wrong or the signal's predictive power is lower than assumed.
