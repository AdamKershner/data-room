# B2C Magic Gifts Copy Bank

**Story Framework · Magic gifts**: introduce features as **magic gifts**: each removes **one obstacle** on the path to REFUGE. Observable contrast, not a feature dump. **Do not use the product name Oasis** in publishable copy here; reserve Oasis for Present evidence and Product Hunt launch blocks.

**Product facts:** [b2c-magical-gifts-mapping.md](marketing/b2c-magical-gifts-mapping.md) (v1.0.0.12) · **Hub:** [oasis-capability-index.md](product/oasis-capability-index.md)  
**Emotional arc:** [b2c-narrative-spine.md](b2c-narrative-spine.md)

Track on `/marketing-narrative-checklist` (B2C filter), section **4. Introduce features as “magic gifts”**.

Token: `[[MAGIC_GIFTS_BRIEF]]` → `/b2c-strategic-narrative#magic-gifts`

---

## Magic gifts intro (checklist: canonical)

You imagined a refuge, a browser that protects attention instead of auctioning it. Ad Nauseam does not vanish because you pictured something better. The air is still thick with the drone, the mosquitoes, the tab that became a trap. **Magic gifts** are the observable steps off that path: each one removes **one obstacle** on the way to the Promised Land, not willpower lectures, not a feature dump. One pain, one gift, one old world → new world.

This refuge is not built on an ads business. We are not here to auction your attention to the highest bidder like the Chrome colossus behind the ad machine. It is **free forever**: the product wins when it makes you more productive, faster work, fewer interruptions, better outcomes, not when it sells more impressions.

You browse with **Enhanced Tracking Protection** on, built on Firefox, always on guard. Cross-site trackers and follow-you stitching thin out; ads may still appear, and we say so. You stop fighting the swarm in your head and start noticing your own ideas again.

You use **clarification** to confirm what you meant before the browser acts. You say “Group my research tabs” and the assistant organizes windows for you. You use **close duplicate tabs**, **summarize page**, and **search memory** to finish the work you opened the browser for, not twenty tabs later. You run the browser in natural language.

You thumbs-up a reply to **train** the assistant and choose **anonymous** training so feedback sharpens workflows without tying every correction to your account. You leave **Personalize the assistant with my account** off by default: help in the sidebar without opting into a linked pipeline on day one. Over time you fall in love with an assistant that understands how you speak, learns from your choices when you allow it, and becomes the reason this browser feels like yours: familiar, capable, and yours alone, without giving away what makes you, you.

### Magic gifts intro: You-use lines (social / PH reuse)

- You use a browser **not built on an ads business** to work without funding someone else’s impression machine.
- You use **Enhanced Tracking Protection** (Firefox) to thin the swarm; ads may still appear.
- You use **clarification** to confirm intent before the browser acts.
- You use **organize windows** / tab groups to collapse chaos in one command.
- You use **close duplicate tabs** and **summarize page** to finish one pass at real work.
- You use **anonymous training** to improve the assistant without selling your identity.
- You leave **Personalize the assistant with my account** off to get help without a linked pipeline on day one.

**Footnote (not intro body):** Anonymous telemetry/training can still send prompt, response, tab, or feedback content without `user_id`. Settings UI label: *Personalize Oasis Assistant with my account*. See [privacy-data-and-telemetry.md](product/privacy-data-and-telemetry.md) and [training-and-feedback.md](product/training-and-feedback.md).

### Magic gifts checklist ops (not intro body)

- **Product truth:** v1.0.0.12: [oasis-capability-index.md](product/oasis-capability-index.md), [business-model-and-positioning.md](product/business-model-and-positioning.md), [b2c-magical-gifts-mapping.md](marketing/b2c-magical-gifts-mapping.md)
- **Tasks:** `mn-gifts-chrome-01` … `04` (01 = reframe / contacts gap); preamble 00 below; training optional post; `mn-ph-chrome-06`–`07` (PH header + video contrast)
- **Proof / launch:** [product-hunt-brief-01-privacy-angle.md](product-hunt-brief-01-privacy-angle.md), Kahana Chrome blog: legal review on all claims
- **Emotional arc:** [b2c-narrative-spine.md](b2c-narrative-spine.md)

---

## Publishable beats (checklist tasks)

| Task | Obstacle | Status | Mapping row |
|------|----------|--------|-------------|
| preamble | Ads-business browser default | **positioning** | Spine #0 |
| `mn-gifts-chrome-01` | Chrome contact/financial profile | **reframe** | Spine #1 |
| `mn-gifts-chrome-02` | Gemini linked telemetry | **shipped** | Spine #2 |
| `mn-gifts-chrome-03` | Follow-you ads | **shipped-partial** | Spine #3 |
| `mn-gifts-chrome-04` | Tab chaos + deep work | **shipped** / partial | Spine #4–5 |
| optional training post | AI improves only if I sell data | **shipped** | Spine #6 |
| `mn-ph-chrome-06` | Visual calm vs noise | creative | PH header |
| `mn-ph-chrome-07` | Follow-you story | **shipped-partial** | PH video |

---

## Preamble: Not an ads business (Spine #0)

**Status:** **Positioning** ([business-model-and-positioning.md](product/business-model-and-positioning.md)). Not a feature flag; pair with Name the villain villain, one post.

**Draft (adapt: legal review before paid media):**

“You already named the colossus: a browser whose business is your attention. **You use** a different bargain: this refuge is **free forever** and not built on an ads business. We win when the tool makes you more productive, not when we sell more impressions.

That is the first magic gift, structural relief before the feature gifts. Everything else in Magic gifts is how that promise shows up in your week.”

---

## `mn-gifts-chrome-01`: Reframe (contacts / profile gap)

**Status:** **Gap**: no dedicated feature “keeps contacts out of browser profile.” **Do not** publish as a standalone magic gift without legal review.

**Recommended approach (option B):** Narrow post to **boundary + evidence**, not a false product gift.

**Draft (adapt: legal review required):**

“You have heard the Ad Nauseam drone. Here is one structural slice: Chrome’s signed-in world can pull **contacts and financial** signals into a linked advertising profile, eight categories deep when you are signed in ([[mn-winners-chrome-02|evidence post]]).

This refuge does not market a magic button that erases Chrome’s model. What we can say today: **assistant** data collection is a **separate control**. Privacy → *Personalize the assistant with my account* (settings UI: *Personalize Oasis Assistant with my account*), default **off**. That governs assistant `llm_usage`, not Chrome’s contact book categories.

If you are comparing browsers, compare receipts, not vibes. **Legal:** verify every Chrome vs this browser line before publish.”

**Pair with:** `mn-winners-chrome-02`: do not duplicate full stat block.

**Do not claim:** this browser blocks contact harvesting in Chrome; “we don’t touch your address book” without approved wording.

---

## `mn-gifts-chrome-02`: AI without the default pipeline (shipped)

**Obstacle:** Gemini-in-Chrome linked telemetry story ([[mn-change-chrome-03|Name the change structural trap]]).

**Gift (factual):** Sidebar assistant: **52 browser tools**; personalization **unchecked by default**; optional opt-in for account-linked assistant improvement. Settings UI: *Personalize Oasis Assistant with my account*.

**Draft:**

“You use **the assistant** in the sidebar to get workflow help without opting into a linked data pipeline on day one.

**Old world:** Help in the default browser comes with a linked telemetry story, dozens of data types tied to your account when you are signed in.

**New world:** Privacy → **Personalize the assistant with my account** is **off** by default. You use tab groups, search, and summarize without account-linked assistant data until you choose otherwise.

That toggle governs **assistant** logging in this refuge, not Gemini-in-Chrome. Be honest: we are not turning off Google’s browser. We are offering a different default for **our** assistant.

Try one command: ‘Group my research tabs’ or ‘Close duplicate tabs.’ One gift. One obstacle.”

**Guardrails:** See [privacy-data-and-telemetry.md](product/privacy-data-and-telemetry.md): anonymous mode still sends prompt/response/tab context to Supabase without `user_id`.

---

## `mn-gifts-chrome-03`: Fewer tracker bites (shipped-partial)

**Obstacle:** Ads and retargeting follow you after a private search.

**Gift (factual):** Built on **Firefox Enhanced Tracking Protection** + refuge profile cookie/tracker defaults. **partial** reduction, not zero ads.

**Draft:**

“You use **Enhanced Tracking Protection**, built on Firefox, to thin cross-site trackers so follow-you stitching loses its grip. Ads may still appear; we say so.

**Old world:** Cross-site trackers stitch your scroll into ‘relevant’ ads everywhere.

**New world:** This sanctuary ships with **Enhanced Tracking Protection** and stricter cookie defaults. They cut down third-party tracker behavior; they do **not** promise ad-free internet. Fewer bites. Honest partial relief.

We are not selling magic. We are selling a browser that **starts** from privacy-first defaults instead of ‘accept all’ as the hero.

What would ‘fewer follow-you moments’ mean for your week?”

**Do not claim:** this browser blocks all ads; zero retargeting.

---

## `mn-gifts-chrome-04`: Workflow calm (shipped / partial deep work)

**Obstacle:** Tab chaos + stolen deep work ([[mn-change-chrome-04|Name the change consequence]]).

**Gift (factual):** Clarification modal + tab hygiene tools (`close_duplicate_tabs`, `organize_windows`, `summarize_page`, `search_memory`), workflow help, not a cure for Ad Nauseam.

**Draft:**

“You use **clarification** to confirm what you meant, then **organize windows**, **close duplicate tabs**, or **summarize page** to finish one pass at the work you opened the browser for.

**Old world:** Every click spawns another tab; the browser rewards distraction.

**New world:** One natural-language command replaces twenty manual drags. **Search memory** helps you find the tab you need without retracing the ad trail.

It will not erase the ad drone. It can give you back one focused pass at the work you opened the browser for.

What is one task you would run if your tabs obeyed you for ten minutes?”

---

## Optional post: Train off the map (Spine #6)

**Status:** **Shipped** ([training-and-feedback.md](product/training-and-feedback.md)). Use as standalone thread or one slide in `mn-gifts-chrome-05` carousel.

**Draft:**

“You use **thumbs-up / thumbs-down** on an assistant reply to train the assistant, and you choose **anonymous** training so improvements do not require selling your identity.

**Old world:** Browser AI gets smarter only when you feed a linked profile.

**New world:** Feedback sharpens workflows on your terms. **Personalize the assistant with my account** stays off until you want account-linked assistant data. Over time the assistant understands your natural language and learns from choices you allow.

**Honest boundary:** Anonymous training still uploads feedback content; it is not ‘we collect nothing.’ See [privacy-data-and-telemetry.md](product/privacy-data-and-telemetry.md).”

---

## PH contrast (`mn-ph-chrome-06`, `mn-ph-chrome-07`)

Narrative only here, dimensions and beats in [[PH_BRIEF|Brief 01]].

- **Header / video:** Left = noisy Chrome world; right = calm refuge (Serene, Tranquil mood).
- **Ad/tracking lines:** Use **partial** language (“fewer trackers,” “less follow-you”) per [browser-privacy-security.md](product/browser-privacy-security.md).
- **Do not** show false “zero ads” in video without legal approval.

---

## Comms guardrails (Magic gifts)

- One obstacle → one gift per post.
- Cite product version **v1.0.0.12** for capability claims.
- Row 1 requires **legal** before comparative Chrome publish.
- Gifts earn Present evidence (screenshot, stat, or user story) when possible.
- **No Oasis** in publishable copy in this file; use refuge / sanctuary / space.

---

## Narrative arc

Promised Land REFUGE imagine → **Magic gifts (product truth)** → Present evidence / Oasis relief + proof

**Related:** [product-hunt-brief-01-privacy-angle.md](product-hunt-brief-01-privacy-angle.md) · [b2c-ad-nauseam-change-copy.md](b2c-ad-nauseam-change-copy.md)
