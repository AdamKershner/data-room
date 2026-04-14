# Skill: Weekly Context Update

**Duration:** 10–15 minutes
**Cadence:** Monday morning
**Output:** Updated context files + entry in `outputs/weekly-log.md`

---

## Quick Start

```
Read skills/weekly-update/SKILL.md and run the weekly context update.
```

Claude reads the current state of the repo, identifies what's stale, drafts every section that needs updating, and asks for what it can't know.

---

## Purpose

Keep the repo accurate without making maintenance feel like a second job. This skill handles the diff — what changed since last week — not a full rewrite. The output is proposed edits for you to review and approve.

---

## What Claude Reads

1. `CLAUDE.md` — current priorities, active campaigns, team focus
2. `context/signal-library.md` — signal performance log and last-updated date
3. `context/icp-definition.md` — ICP evolution log and last-updated date
4. `context/competitor-radar.md` — win/loss patterns and last-updated date
5. All files in `outputs/campaigns/` — active campaigns and their results
6. Any files in `outputs/` dated in the last 14 days
7. `context/signal-performance-sync.json` — if sync scripts have been run

---

## Step 1: Staleness Check

Identify which sections are out of date.

| File / Section | Stale if... |
|---------------|-------------|
| `CLAUDE.md` → This Week | Not updated in last 7 days |
| Signal performance log | Campaign live for 14+ days with no results recorded |
| Campaign results table | Campaign running but results rows empty or older than 7 days |
| Competitor radar | Not updated in 60+ days |
| ICP evolution log | Not updated in 90+ days |
| Reference customers | New pilot closed but not added |

Print a summary of what's stale before drafting anything.

---

## Step 2: Draft Updates

For each stale section, draft a proposed update:

```
### [File] — [Section]
Last updated: [date]
Status: STALE — [reason]

CURRENT:
[existing content]

PROPOSED:
[drafted update based on what Claude can infer from the repo]

QUESTIONS FOR YOU:
- [Anything Claude can't know — requires human input]
```

---

### 2a. CLAUDE.md — This Week

Draft a new priorities block based on:
- Which campaigns are live (from `outputs/campaigns/`)
- Which signals are active (from `context/signal-library.md`)
- Last week's priorities (carry forward anything still relevant)

Then ask:
- What changed this week that's not in the repo?
- Any new accounts or PLG signals becoming a focus?
- Any pilots progressing, stalling, or closing?
- Any team changes to note?

---

### 2b. Signal Performance Log

Pull results from campaign output files updated in the last 7 days. For each active signal:
- Count sends, replies, meetings from results tables
- Calculate reply rate and meeting rate
- Compare to the existing log entry
- Draft an updated row if numbers changed

Flag: if a signal has 30+ sends with 0 meetings booked, call it out explicitly. That's a calibration signal.

**Oasis-specific check:** Look at PLG data separately from outbound. Are paywall hits converting? Are multi-user domain signals generating calls?

---

### 2c. Active Campaign Results

For each campaign in `outputs/campaigns/` with a live results table:
- Note if not updated in 7+ days
- Draft a placeholder row for this week: date filled in, metrics as `[update]`

Ask: what are the current reply, meeting, and pipeline numbers for each live campaign?

---

### 2d. Competitor Radar (if stale)

If not updated in 60+ days:
- Flag it
- Ask: any competitive deals won or lost? New objections you're hearing that aren't in the battlecard? Any new competitors showing up in deals?

Do not draft a competitive update without input.

---

### 2e. ICP Evolution Log (if stale)

If not updated in 90+ days:
- Draft a log entry template with today's date
- Ask: has anything changed about who you're targeting? Any segment performing better or worse than expected? Any new company type showing up in pipeline?

---

### 2f. Reference Customers (Oasis-specific check)

- Any pilots closed since last update? → Add to `context/profile.md` reference customers table
- Any pilots progressing to signature? → Note in CLAUDE.md priorities

---

## Step 3: Confirm and Apply

Present all proposed changes. For each:
- Show CURRENT vs. PROPOSED side by side
- Mark `[NEEDS YOUR INPUT]` for sections requiring human data
- After confirmation, apply all approved changes

Do not apply changes until confirmed. Do not invent performance data.

---

## Output

No separate output file. Changes applied directly to context files. Add one line to `outputs/weekly-log.md`:

```
YYYY-MM-DD: Updated [list of files]. [One sentence on the most significant change.]
```

---

## Running With Sync Scripts

Run sync scripts before this skill to get fresh numbers automatically:

```bash
python3 sync/sync-campaign-results.py   # Pulls from HubSpot sequences
python3 sync/sync-signal-performance.py  # Aggregates signal performance
```

Then run the skill. Claude will read the freshly synced data and draft updates without manual metric entry.
