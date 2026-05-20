# B2C magical gifts: obstacle → product mapping

**Version:** Oasis `v1.0.0.12` · **Commit:** `8ecad89e5020`  
**Purpose:** Factual crosswalk from narrative obstacles ([b2c-narrative-spine.md](../b2c-narrative-spine.md) Magic gifts) to shipped product capabilities ([oasis-capability-index.md](../product/oasis-capability-index.md)).  
**Publishable copy:** [b2c-magic-gifts-copy.md](../b2c-magic-gifts-copy.md)

**Promised Land REFUGE promises → Magic gifts proof:** Promised Land tease (`mn-promised-chrome-06`, `07`) names local browse + assistant-on-your-terms in REFUGE voice ([b2c-refuge-promised-land-copy.md](../b2c-refuge-promised-land-copy.md), [oasis-your-data-and-training.md](oasis-your-data-and-training.md)). **Gift 2** (`mn-gifts-chrome-02`) delivers the assistant promise with Oasis product truth, do not duplicate the full Gift 2 post in Promised Land.

---

## Provenance legend

| Label | Meaning |
|-------|---------|
| **Oasis** | Oasis-shipped code path (assistant, telemetry UI, training, branding) |
| **Firefox** | Inherited from Firefox core / Oasis profile defaults |
| **Partial** | Helps the obstacle; does not fully solve it |
| **Gap** | No productized answer, do not claim as a standalone magic gift |
| **Reframe** | Obstacle stays in story; post must use comparative/evidence framing only |
| **Positioning** | Founder-approved narrative; not a feature flag in v1.0.0.12 |

---

## Capability inventory (v1.0.0.12)

| Capability | Status | Provenance | Doc | Spine obstacle(s) |
|------------|--------|------------|-----|-------------------|
| Not ad-funded / free forever / performance-as-product | positioning | Positioning | [business-model-and-positioning](../product/business-model-and-positioning.md) | 0 |
| Oasis Assistant (52 browser tools) | shipped | Oasis | [ai-assistant](../product/ai-assistant.md) | 2, 4, 5 |
| Meta-prompting clarification modal | shipped | Oasis | [ai-assistant](../product/ai-assistant.md) | 4, 5 |
| Voice input (push-to-talk) | shipped | Oasis | [ai-assistant](../product/ai-assistant.md) | 4 |
| Tab groups / split view / `organize_windows` | shipped | Oasis + Firefox | [ai-assistant](../product/ai-assistant.md) | 4, 5 |
| `close_duplicate_tabs`, `summarize_page`, `search_memory` | shipped | Oasis | [ai-assistant](../product/ai-assistant.md) | 5 |
| Personalize Oasis Assistant (telemetry toggle) | shipped | Oasis | [privacy-data](../product/privacy-data-and-telemetry.md) | 2 |
| Anonymous telemetry default **off** (unchecked) | shipped | Oasis | [privacy-data](../product/privacy-data-and-telemetry.md) | 2 |
| Identified telemetry (opt-in) | shipped | Oasis | [privacy-data](../product/privacy-data-and-telemetry.md) | 2 |
| Training thumbs (anonymous / personalized modes) | shipped | Oasis | [training-and-feedback](../product/training-and-feedback.md) | 2, 6 |
| Enhanced Tracking Protection (ETP) | shipped | Firefox | [browser-privacy](../product/browser-privacy-security.md) | 3 |
| Strict cookie / tracker profile defaults | shipped | Firefox (profile) | [browser-privacy](../product/browser-privacy-security.md) | 3 |
| Fingerprinting / cryptomining blockers | shipped | Firefox | [browser-privacy](../product/browser-privacy-security.md) | 3 |
| Contacts kept out of browser profile | **gap** | — | [oasis-capability-index](../product/oasis-capability-index.md) | 1 |
| Block all retargeting ads | **partial** | Firefox ETP | [oasis-capability-index](../product/oasis-capability-index.md) | 3 |
| Blocks Gemini-in-Chrome / third-party browser telemetry | **gap** | — | [privacy-data](../product/privacy-data-and-telemetry.md) | 2 |

---

## Master mapping table

| Spine # | Obstacle (narrative) | Product capability (factual) | Provenance | Status | Checklist task(s) |
|---------|----------------------|------------------------------|------------|--------|-------------------|
| 0 | Browser funded by ads / attention auction | **Positioning:** not ad-funded; **free forever**; wins on productivity, not impressions. Pair with Name the villain colossus; one post max. | positioning | **positioning** | preamble / Magic gifts intro P2 |
| 1 | Contact + financial data in browser profile | **Gap** for a dedicated Oasis feature. **Reframe:** comparative evidence. Chrome’s contact/financial categories vs Oasis assistant telemetry boundary (Oasis `llm_usage` does not mirror Chrome’s 8-category ad profile). Pair with [`mn-winners-chrome-02`](../financial-dashboard) evidence; **legal review** before comparative publish. | evidence + Oasis boundary | **reframe** | `mn-gifts-chrome-01` |
| 2 | Gemini-in-Chrome linked telemetry (24 data types) | **Oasis:** sidebar assistant with **52 tools**; Privacy → **Personalize Oasis Assistant with my account** defaults **unchecked** (anonymous `llm_usage`). User opts in for account-linked assistant data. **Does not** disable Gemini-in-Chrome or Firefox-wide telemetry. | Oasis | **shipped** | `mn-gifts-chrome-02` |
| 3 | Ads follow you after a private search | **Firefox ETP** + strict cookie/tracker defaults reduce cross-site tracking; **not** zero ads or zero retargeting. Honest: “fewer mosquitoes,” not “no ads.” | Firefox partial | **shipped-partial** | `mn-gifts-chrome-03`, `mn-ph-chrome-07` |
| 4 | Tab chaos / no calm | **Oasis:** tab-group commands, split view, `organize_windows`, clarification before acting, calmer assistant UI (v1.0.0.12 theme). **Firefox:** tab groups in core. | Oasis + Firefox | **shipped** | `mn-ph-chrome-06`, `mn-gifts-chrome-04` (workflow overlap) |
| 5 | Deep work stolen | **Partial workflow gift:** clarification reduces wrong turns; `close_duplicate_tabs`, `summarize_page`, `search_memory` support focus, not a cure for Ad Nauseam. | Oasis partial | **shipped-partial** | `mn-gifts-chrome-04` |
| 6 | AI only improves if I sell my data | **Oasis:** thumbs training + **anonymous** `feedback_events` mode; separate from `llm_usage` toggle. Anonymous still uploads content. | Oasis | **shipped** | copy bank: training (optional post) |
| PH | Visual binary contrast | Left: noisy Chrome world; right: calm refuge, mood per Brief 01. Claims must match **partial** ETP for ad/tracking lines. | creative | **shipped-partial** | `mn-ph-chrome-06`, `mn-ph-chrome-07` |

---

## You use → outcome (checklist Magic gifts intro)

| You use… | To… | Status |
|----------|-----|--------|
| (structural) this refuge, not an ads business | trust a **free forever** tool that wins on productivity | positioning |
| **Enhanced Tracking Protection** (Firefox) | thin cross-site trackers; notice your ideas again (ads may still appear) | partial |
| **clarification** | confirm what you meant before the browser acts | shipped |
| `organize_windows` / tab group commands | collapse tab chaos in one sentence | shipped |
| `close_duplicate_tabs` | reclaim RAM and attention | shipped |
| `summarize_page` | finish the page you opened for | shipped |
| `search_memory` | find that tab or bookmark without retracing the ad trail | shipped |
| **anonymous training** (thumbs) | improve workflows without tying feedback to your account | shipped |
| **Personalize the assistant with my account** (left **off**) | get sidebar help without a linked pipeline on day one | shipped |

---

## Old world → new world (shipped rows only)

| # | One-liner | Product footnote |
|---|-----------|------------------|
| 0 | **Old:** Your browser is a billboard that sells your attention. **New:** This refuge is **free forever** and not built on an ads business; it wins when you get more done. | [business-model-and-positioning](../product/business-model-and-positioning.md) |
| 2 | **You use** the assistant with personalization **off** by default **to** get workflow help without opting into account-linked assistant data on day one. | [privacy-data § User control](../product/privacy-data-and-telemetry.md) |
| 3 | **You use** Firefox **Enhanced Tracking Protection** (in this sanctuary) **to** cut follow-you stitching; honestly not zero ads. | [browser-privacy § ETP](../product/browser-privacy-security.md) |
| 4 | **You use** natural language (`organize_windows`, tab groups) **to** run the browser in one command instead of twenty drags. | [ai-assistant Tool catalog](../product/ai-assistant.md) |
| 5 | **You use** clarification, then `close_duplicate_tabs` / `summarize_page` **to** finish one focused pass at real work. | [ai-assistant Clarification](../product/ai-assistant.md) |
| 6 | **You use** thumbs-up training in **anonymous** mode **to** sharpen the assistant without selling every correction to your identity. | [training-and-feedback](../product/training-and-feedback.md) |

**Row 1 (reframe):** Do not use a magic-gift one-liner until legal approves Chrome vs Oasis comparative framing. See copy bank: `mn-gifts-chrome-01`.

---

## Do-not-claim list (aggregated)

- Do **not** claim Oasis “blocks all ads” or “stops all retargeting”: ETP is **partial** ([browser-privacy](../product/browser-privacy-security.md)).
- Do **not** claim “we collect nothing” when anonymous telemetry or anonymous training is on: prompt, response, tab context, or feedback content may still upload without `user_id` ([privacy-data](../product/privacy-data-and-telemetry.md), [training-and-feedback](../product/training-and-feedback.md)).
- Do **not** claim the Oasis data toggle blocks **Gemini-in-Chrome** or third-party browser telemetry: it governs **Oasis assistant** `llm_usage` only.
- Do **not** claim Oasis invented Enhanced Tracking Protection: “built on Firefox’s ETP.”
- Do **not** conflate **training mode** (feedback_events) with **interaction telemetry** (llm_usage): same words, different tables ([training-and-feedback](../product/training-and-feedback.md)).
- Do **not** claim “zero tracking” or “off the grid” without legal review and qualifiers.
- Do **not** market contacts-in-profile as a shipped Oasis feature: **gap** until productized.
- Do **not** claim password hashing / “unknown to others” until [business-model-and-positioning](../product/business-model-and-positioning.md) is updated with engineering-approved wording.

---

## Validation checklist

- [x] Aligned to `v1.0.0.12` / `8ecad89`
- [x] Oasis vs Firefox vs positioning provenance separated
- [x] Spine obstacles 0–6 + PH rows mapped
- [x] You-use table matches Checklist · Magic gifts intro
- [x] Gap row 1 marked reframe + legal flag
- [x] Links to product docs and copy bank

**Maintainers:** On `v1.0.0.13+`, update [oasis-capability-index](../product/oasis-capability-index.md), patch rows here, then [b2c-magic-gifts-copy.md](../b2c-magic-gifts-copy.md) and checklist instructions.
