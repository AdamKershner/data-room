# Skill: Signal to Sequence

**Duration:** 2–4 hours per campaign
**Output:** `outputs/campaigns/[date]-[campaign-name]/`

---

## Quick Start

```
Read skills/signal-to-sequence/SKILL.md.
Build a Tier 2 campaign for accounts triggering the [signal name] signal.
Target the Enterprise Solutions Architect persona.
```

---

## Purpose

Turn a signal — or a set of accounts sharing a signal — into a live outreach campaign. This skill connects the Oasis signal library to actual sequences. The output is not a rough draft — it's copy ready to load into HubSpot sequences.

---

## When to Run This Skill

- A Tier 2 signal fires across multiple accounts (e.g., batch of Series A/B announcements or ESA hires)
- Launching a new outbound campaign for a new signal
- An existing campaign is underperforming and needs a rebuild
- A new ICP tier needs to be activated (e.g., expanding from SaaS to FinTech)

---

## Inputs

- Target signal(s) from `context/signal-library.md`
- ICP tier from `context/icp-definition.md`
- Persona(s) from `context/personas/`
- Competitive context from `context/competitor-radar.md` (if relevant)
- Company and product context from `context/profile.md`

---

## Step 1: Define the Trigger Logic (15 min)

Be precise about what fires this campaign.

**Single-signal trigger:**
- Which signal? (From signal library)
- Minimum CDS Score to activate?
- Recency: signal must have fired in last [X] days?

**Multi-signal trigger:**
- Signal A + Signal B = activate
- What does the combination tell you that neither alone tells you?

**Suppression conditions:**
- Active customer (any tier)
- Active HubSpot opportunity
- Contact unsubscribed or DNC in last 90 days
- Competitor domain
- Oasis user already enrolled in another sequence
- Contacted in last [X] days (see cooldown in signal library)

Document the trigger logic before writing a single word of copy.

---

## Step 2: Segment the Target List (15 min)

Pull accounts matching the trigger. Segment by:
- ICP tier (1/2/3 get different sequence intensity)
- Persona (ESA vs. VP Eng vs. IT Director — different message)
- Account status (cold prospect / has PLG users / previously contacted)

For each segment: clean list with contact name, title, email, LinkedIn URL, signal data attached.

---

## Step 3: Design the Sequence Structure (20 min)

Build the structure before writing copy.

**Oasis standard sequence structure:**

| Touch | Day | Channel | Goal | Personalization |
|-------|-----|---------|------|----------------|
| 1 | 0 | Email | Signal hook + insight | High — signal-specific |
| 2 | 3 | LinkedIn | Connect + brief context | Medium — reference email |
| 3 | 6 | Email | Different angle + proof point | Medium |
| 4 | 10 | Email | Asset or use case | Low — templatized |
| 5 | 16 | Email | Break-up + pivot | Low |

**Tier guidance:**
- Tier 1: 6–8 touches, all channels, manual personalization on touches 1–3, AE-sent
- Tier 2: 5 touches, email + LinkedIn, semi-automated, SDR reviews touch 1
- Tier 3: 4 touches, email-only, fully automated with variable injection

---

## Step 4: Write the Copy (60–90 min)

Write each touch. Apply the PVP Standard to Tier 1 and Tier 2 touch 1.

### The PVP Standard (Permissionless Value Prop)

A message passes PVP if the prospect would find it useful even if they never buy Oasis. It delivers an insight, not a pitch.

**Test:** Remove the CTA. If the message still has value, it passes. If it's pointless without the CTA, it's a pitch — rewrite it.

**Four questions every Tier 1 first touch must answer yes to:**
1. Does this contain an insight the prospect doesn't already have?
2. Would they forward this to a colleague?
3. Would they find this useful even if they never buy?
4. Is this market intelligence, not just personalization?

---

### Touch 1 — Email (Signal Hook)

**Body structure:**
```
[Signal hook — one specific, datable observation about the prospect or their company]

[Insight — what that signal means for their specific situation, something they may not have considered]

[Connection — how that maps to what Oasis does, in one sentence. Not a feature list.]

[CTA — one ask, frictionless: "Worth 15 minutes?"]

[Signature]
```

**Subject line variants (write 3, A/B test 2):**
- Curiosity-based: something they'd click to find out
- Direct/insight: lead with the relevant observation
- Question-based: something that makes them think

**Oasis-specific examples by signal:**

*ESA hire signal:*
```
Subject: [Company]'s new Solutions Architect

[First name],

[Company] just posted for an Enterprise Solutions Architect — third solutions hire this quarter.
New ESAs at fast-scaling SaaS companies typically inherit 4–6 client environments
with no standardized browser setup. The first 60 days means 40 tabs you didn't create
and zero context about how to organize them.

The ESAs I've seen get up to speed fastest use Oasis — you tell it what you want
("open client A docs alongside sandbox in split view") and the browser handles it.

Worth seeing if it's relevant for the team you're building?

[Name]
```

*Series A/B signal:*
```
Subject: Context switching at [Company]'s new scale

[First name],

Congrats on the [Series B] — that kind of funding means the Solutions team is about
to double. Here's what I've seen happen consistently: each new ESA brings their own
browser habits, nobody standardizes, and within 6 months the team is running on
20 different browser setups and nobody can easily share context.

Oasis was built for this moment — natural language commands that work the same
way for everyone. "Open client X research and product docs in split view" means
the same thing to every Solutions Architect on the team.

15 minutes to show you what this looks like?

[Name]
```

*Pricing page visit:*
```
Subject: Quick question about the Oasis pricing page

[First name],

Saw you were looking at the Oasis pricing — wanted to reach out directly
before you made a call.

Are you evaluating this for yourself or for your team? The answer changes
what makes sense to show you.

[Name]
```

---

### Touch 2 — LinkedIn Connection Request

```
[First name] — sent you an email [X] days ago about browser context switching for
your [ESA / solutions / engineering] team. Would be good to connect here too.
```

Keep to 2 sentences max. Reference the email you already sent.

---

### Touch 3 — Email (Different Angle)

Don't repeat touch 1. Lead with a different dimension:

```
[First name],

Following up from last week. Wanted to share something specific.

[Concrete use case or comparison — e.g., "The voice control piece is what
usually converts skeptics. You're in the middle of a client review and instead
of alt-tabbing to find the right context, you say 'open client A and the
architecture doc in split view' — it takes 2 seconds instead of 20."]

Happy to show it in action — [CTA].

[Name]
```

---

### Touch 4 — Email (Asset or Use Case)

Offer something concrete: a specific command example, a use case relevant to their industry, or a question worth thinking about.

```
[First name],

One last thing before I leave you alone.

[Specific question or observation that's relevant to their role and situation,
something that would make them think even if they don't reply — e.g.,
"Quick question: how does your Solutions team currently manage browser environments
for different client contexts? Curious if you've solved this."]

[Name]
```

---

### Touch 5 — Break-up Email

```
Subject: Closing the loop

[First name],

Reached out a few times — not going to keep at it.

If the timing isn't right or this isn't relevant for your team, totally understood.

If something changes — like you're scaling the Solutions team and browser setup
becomes a problem — feel free to reach back out.

[Name]
```

---

## Step 5: Measurement Plan (10 min)

Set targets before launch.

| Metric | Tier 1 target | Tier 2 target | Tier 3 target |
|--------|--------------|--------------|--------------|
| Reply rate | ≥ 10% | ≥ 5% | ≥ 2% |
| Meeting rate | ≥ 6% | ≥ 3% | ≥ 1% |
| PLG conversion per 100 outreaches | ≥ 5 trials | ≥ 2 trials | — |

**Review cadence:** First check at 2 weeks. Full review at 6 weeks.

---

## Output Structure

```
outputs/campaigns/[date]-[campaign-name]/
├── brief.md          ← Trigger logic, segments, objectives
├── sequences/
│   ├── tier1.md      ← Full Tier 1 copy
│   ├── tier2.md      ← Full Tier 2 copy
│   └── tier3.md      ← Full Tier 3 copy
├── metrics.md        ← Targets and measurement plan
└── results.md        ← Updated as campaign runs
```
