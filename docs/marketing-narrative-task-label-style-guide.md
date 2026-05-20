# Marketing narrative task labels: style guide

For `/marketing-narrative-checklist` (B2C and B2B). Task metadata lives in [`financial-dashboard/src/data/marketingNarrativeTaskMeta.js`](../financial-dashboard/src/data/marketingNarrativeTaskMeta.js); production specs in [`marketingNarrativeInstructionDeliverables.js`](../financial-dashboard/src/data/marketingNarrativeInstructionDeliverables.js).

---

## List row (at a glance)

Each task shows:

1. **Channel badge**: where it ships (LinkedIn, Product Hunt, Internal, Multi-channel, etc.)
2. **Format badge**: what you make (Writing, Carousel, Image, Video · mixed, etc.)
3. **Essence**: one sentence starting with **Imagine…** that paints the finished piece
4. **Refs** (muted): short line with `[[tokens]]` for copy banks and linked tasks

### Essence rules

- Start with **Imagine** (present tense).
- Describe the **finished asset** a creator can picture, not step-by-step instructions.
- **No dimensions** in essence (1080×1080, 15–30s belong in instructions **Deliverable** block).
- No shaming language; B2C Winners and losers uses “futures, not blame.”
- **Avoid em dashes (—) in publishable copy**; use commas, semicolons, colons, or short sentences instead. Keep en dashes (–) in numeric ranges (e.g. `15–30 sec`, `2–3 minutes`).
- **Sections 1–5 publishable copy:** do not use the product name **Oasis**; use refuge, sanctuary, space, or REFUGE codename. Reserve **Oasis** for Present evidence and Product Hunt launch blocks.
- **Exact UI strings** (e.g. “Personalize Oasis Assistant with my account”): copy-bank ops footnotes only, unless the channel is launch/PH.

**Good:** *Imagine a square split-screen: noisy Chrome labeled Working for Google on the left, calm Oasis labeled Working for you on the right.*

**Avoid:** *Infographic: 8 categories of Chrome data (identifiers → diagnostics).*

### Channel rules

- One primary `channel` per task.
- Use `channel: 'Multi'` + `channels: ['LinkedIn', 'Instagram']` only when the **same asset file** ships to multiple places.
- Use **Internal** for Notion/Google Doc briefs not meant for public publish.

### Format rules

Use taxonomy keys from `marketingNarrativeDeliverableTaxonomy.js`:

| Key | When to use |
|-----|-------------|
| `writing` | Single post or long-form article |
| `thread` | Multi-post text sequence |
| `carousel` | Multi-slide image or PDF carousel |
| `image` | One static graphic |
| `infographic` | Data-led visual |
| `videoOnCamera` | Talent speaking to camera |
| `videoAnimation` | Motion graphics / UI only |
| `videoMixed` | Screen capture + text beats + optional VO |
| `poll` | Native platform poll |
| `internalDoc` | Internal brief for design/video/sales |
| `pdf` | Deck slide or downloadable PDF |

---

## Instructions panel (production brief)

Open **View instructions** → **Deliverable** block first:

- Channel, format, dimensions, aspect ratio, duration, file types, typography, audio, talent
- **How to do this**: narrative, copy steps, legal guardrails (no sizes here if already in Deliverable)
- Already done, success criteria, why

Canonical PH sizes: `PH_DELIVERABLES` in `marketingNarrativeSections.js` and `docs/product-hunt-brief-01-privacy-angle.md`.

---

## B2C vs B2B defaults

| | B2C | B2B |
|---|-----|-----|
| Common channels | LinkedIn, Product Hunt, Multi | LinkedIn, Blog, Sales deck, Internal |
| Common formats | Writing, carousel, image, videoMixed | Writing, infographic, pdf, internalDoc |
| Voice | Name the change: trap, seep-in, welts, mental RAM, bug zapper, booby-trapped corridor; Name the villain: quiet rebels; Winners and losers+: REFUGE/Oasis | AI Oversight Gap, consortium, IBM stats |

---

## Adding a new task

1. Assign stable `id` in `marketingNarrativeSections.js` via `enrichTask({ id: 'mn-…' })`.
2. Add entry to `TASK_META` in `marketingNarrativeTaskMeta.js` (`channel`, `format`, `essence`, `label`).
3. Add `INSTRUCTION_DELIVERABLES[id]` in `marketingNarrativeInstructionDeliverables.js`.
4. Add full instruction object in `marketingNarrativeInstructions.js`.
5. **Do not rename** published task IDs (localStorage).
