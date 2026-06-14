/**
 * B2C format-playbook checklist instructions (mn-*-05+ per section).
 * Merged into INSTRUCTIONS in marketingNarrativeInstructions.js
 */
const PLAYBOOK = 'docs/marketing/b2c-format-content-playbook.md'

export const FORMAT_PLAYBOOK_INSTRUCTIONS = {
  'mn-change-chrome-05': {
    howTo: `Category: B2C: **Name the change: carousel.**\n1. Set linearId.\n2. Beat sheet: \`${PLAYBOOK}\`: Section 1: **The tab became a trap** (6 slides, 1080×1080).\n3. Slides: portal → one pre-roll → seep-in → mental RAM → bug-zapper corridor → CTA: when did you forget deep work?\n4. Pairs with [[mn-change-chrome-01]] as visual companion.\n5. **No Oasis, no PH.**`,
    alreadyDone: 'Playbook + [[AD_NAUSEAM_BRIEF|copy bank]].',
    successCriteria: 'Six-slide carousel published; final slide drives comments.',
    why: 'Format playbook: change stage carousel.',
  },
  'mn-change-chrome-06': {
    howTo: `Category: B2C: **Name the change: short-form video.**\n1. Set linearId.\n2. Beat sheet: \`${PLAYBOOK}\`: **14 ads in 14 minutes** (15–30s, 1080×1920).\n3. On-screen counter 0→14; optional deadpan facecam; end card: the villain is not one ad.\n4. Ship to Reels, TikTok, Shorts (same master).\n5. **No Oasis, no PH.**`,
    alreadyDone: 'Playbook short-form spec.',
    successCriteria: 'Vertical video live on ≥2 platforms; hook clear in first 3s.',
    why: 'Format playbook: change stage short-form.',
  },
  'mn-change-chrome-07': {
    howTo: `Category: B2C: **Name the change: humble animation.**\n1. Set linearId.\n2. Beat sheet: \`${PLAYBOOK}\`: stick-figure trap tab (~20s loop).\n3. Style: hand-drawn, wobbly lines, handwritten labels. **not** studio motion graphics (see playbook animation guide).\n4. Mosquito dots sip attention coins; no VO required.\n5. Export 9:16 + optional 1:1 cut.`,
    alreadyDone: 'Playbook animation style guide.',
    successCriteria: 'Animation reads clearly on mobile without sound; metaphor lands.',
    why: 'Format playbook: change stage animation.',
  },
  'mn-change-chrome-08': {
    howTo: `Category: B2C: **Name the change: LinkedIn poll.**\n1. Set linearId.\n2. Question: **What broke your focus first?** Options: pre-roll pile-on / creepy retargeting / autoplay feed / tab chaos.\n3. Run ~1 week; draft follow-up post using winning option.\n4. **No Oasis, no PH.**`,
    alreadyDone: 'Playbook poll copy.',
    successCriteria: 'Poll completed; follow-up post drafted from top option.',
    why: 'Format playbook: change stage audience research.',
  },
  'mn-change-chrome-09': {
    howTo: `Category: B2C: **Name the change: blog.**\n1. Set linearId.\n2. Title idea: **The Rise of Ad Nauseam**: \`${PLAYBOOK}\` Section 1 blog outline.\n3. Walk copy bank Name the change and Present evidence; footnote [[FORBES_TARGET|Target 2012]]; 800–1,500 words.\n4. Close with handoff to villain stage (no Chrome stat dump).\n5. Publish on kahana.io.`,
    alreadyDone: '[[AD_NAUSEAM_BRIEF|copy bank]] + playbook.',
    successCriteria: 'Blog live with footnotes; SEO H2s; no product pitch.',
    why: 'Format playbook: owned anchor for change stage.',
  },
  'mn-villain-chrome-06': {
    howTo: `Category: B2C: **Name the villain: carousel.**\n1. Set linearId.\n2. **Chrome monoculture in 6 numbers**: \`${PLAYBOOK}\` Section 2 (7 slides with CTA).\n3. One stat per slide; full sources in caption (StatCounter, DOJ, breach recaps).\n4. **No Oasis pitch.** Pair [[mn-villain-chrome-01]] infographic if reusing art.`,
    alreadyDone: '[[CHROME_VILLAIN_BRIEF|copy bank Acts I–IV]].',
    successCriteria: 'Attributed stat carousel; legal OK on remedy language.',
    why: 'Format playbook: villain stage carousel.',
  },
  'mn-villain-chrome-07': {
    howTo: `Category: B2C: **Name the villain: short-form.**\n1. Set linearId.\n2. **Your browser works for ___**: reveal Google ad business + one sourced stat (\`${PLAYBOOK}\` Name the villain).\n3. Text-only vertical OK; close: feeling vs environment.\n4. **No Oasis pitch.**`,
    alreadyDone: 'Playbook + copy bank Act II.',
    successCriteria: '15–25s vertical live; one stat attributed on screen or caption.',
    why: 'Format playbook: villain short-form.',
  },
  'mn-villain-chrome-08': {
    howTo: `Category: B2C: **Name the villain: humble animation.**\n1. Set linearId.\n2. Crayon pipeline: scroll → profile → auction (\`${PLAYBOOK}\` Name the villain, ~25s).\n3. Big browser rectangle; tiny users; end line: environment, not willpower.\n4. Humble stick-figure style per playbook intro.`,
    alreadyDone: 'Playbook animation guide.',
    successCriteria: 'Pipeline metaphor clear without narration.',
    why: 'Format playbook: villain animation.',
  },
  'mn-villain-chrome-09': {
    howTo: `Category: B2C: **Name the villain: poll.**\n1. Set linearId.\n2. **What makes the colossus feel real?** Market share / ad motive / antitrust / breach.\n3. Next post emphasizes winner angle.`,
    alreadyDone: 'Playbook Name the villain poll.',
    successCriteria: 'Poll done; follow-up angle chosen.',
    why: 'Format playbook: villain poll.',
  },
  'mn-villain-chrome-10': {
    howTo: `Category: B2C: **Name the villain: blog.**\n1. Set linearId.\n2. **Chrome is not neutral infrastructure**: Acts I–IV from [[CHROME_VILLAIN_BRIEF|copy bank]] (\`${PLAYBOOK}\` Name the villain blog).\n3. Embed StatCounter + DOJ links; careful antitrust remedy wording.\n4. Close toward winners/losers fork, no product CTA.`,
    alreadyDone: 'Copy bank + playbook.',
    successCriteria: 'Long-form blog with working footnotes.',
    why: 'Format playbook: villain owned content.',
  },
  'mn-winners-chrome-10': {
    howTo: `Category: B2C: **Winners/losers: carousel.**\n1. Set linearId.\n2. **Quiet rebel checklist**: 5 slides (\`${PLAYBOOK}\` Winners and losers); net metaphor on slide 5.\n3. **Futures, not blame** tone; optional A/B vs [[mn-winners-chrome-06]].\n4. No full PH hook.`,
    alreadyDone: '[[WINNERS_LOSERS_BRIEF|copy bank]].',
    successCriteria: 'Five-slide how-to carousel live; practical not preachy.',
    why: 'Format playbook: fork stage carousel.',
  },
  'mn-winners-chrome-11': {
    howTo: `Category: B2C: **Winners/losers: short-form.**\n1. Set linearId.\n2. Split screen default vs rebel (\`${PLAYBOOK}\` Winners and losers); cognition tax caption.\n3. **Tease cut:** no Oasis logo on calm side. **Launch cut:** logo + PH hook only if launch-ready.\n4. Pairs [[mn-ph-chrome-02]] creative direction.`,
    alreadyDone: 'Playbook + PH Brief 01.',
    successCriteria: 'Split-screen vertical ships; tease vs launch version filed correctly.',
    why: 'Format playbook: fork short-form.',
  },
  'mn-winners-chrome-12': {
    howTo: `Category: B2C: **Winners/losers: animation.**\n1. Set linearId.\n2. Two stick figures; net vs “that’s normal”; fork act/wait (\`${PLAYBOOK}\` Winners and losers).\n3. Humble style; ~20s.`,
    alreadyDone: 'Playbook Winners and losers animation.',
    successCriteria: 'Fork metaphor readable in one viewing.',
    why: 'Format playbook: fork animation.',
  },
  'mn-winners-chrome-13': {
    howTo: `Category: B2C: **Winners/losers: poll.**\n1. Set linearId.\n2. **Which stay-on-default cost hits hardest?** Time / attention / privacy / identity / money.\n3. Empathetic caption, futures not blame.`,
    alreadyDone: 'Playbook Winners and losers poll.',
    successCriteria: 'Poll live; top cost informs next writing post.',
    why: 'Format playbook: fork poll.',
  },
  'mn-winners-chrome-14': {
    howTo: `Category: B2C: **Winners/losers: blog.**\n1. Set linearId.\n2. **Futures, not blame**: expand framework doc into structured post (\`${PLAYBOOK}\` Winners and losers blog).\n3. Bridge line only for browser-serves-Google; **save full PH hook** for [[mn-ph-chrome-02]]+.\n4. Link [[mn-winners-chrome-01]] evidence if embedded.`,
    alreadyDone: 'Winners/losers framework source + copy bank.',
    successCriteria: 'Blog published; no shame framing; bridge not full hook.',
    why: 'Format playbook: fork long-form.',
  },
  'mn-promised-chrome-08': {
    howTo: `Category: B2C: **REFUGE tease: carousel.**\n1. Set linearId.\n2. **Refuge, not billboard**: 6 slides (\`${PLAYBOOK}\` Promised Land): noisy vs calm tabs; on-device history; assistant off icons.\n3. **REFUGE codename slide 6 only; no Oasis name.**\n4. Alt execution of [[mn-promised-chrome-04]] themes.`,
    alreadyDone: '[[REFUGE_BRIEF|copy bank]] + [[REFUGE_DATA_BRIEF]].',
    successCriteria: 'Six slides; tease rules respected; legal on promises.',
    why: 'Format playbook: promised land carousel.',
  },
  'mn-promised-chrome-09': {
    howTo: `Category: B2C: **REFUGE tease: short-form.**\n1. Set linearId.\n2. **Imagine a browser where…** three beats (\`${PLAYBOOK}\` Promised Land); REFUGE on last frame only.\n3. Whisper VO or captions only; **no Oasis name.**`,
    alreadyDone: 'REFUGE copy bank variants.',
    successCriteria: '20–30s vertical; calm tone; codename only at end.',
    why: 'Format playbook: promised land short-form.',
  },
  'mn-promised-chrome-10': {
    howTo: `Category: B2C: **REFUGE tease: animation.**\n1. Set linearId.\n2. Storm of pop-ups → simple room → breathe (\`${PLAYBOOK}\` Promised Land, ~22s).\n3. Handwritten: refuge, not billboard. **No Oasis.**`,
    alreadyDone: 'Playbook Promised Land animation.',
    successCriteria: 'Metaphor lands without product logo.',
    why: 'Format playbook: promised land animation.',
  },
  'mn-promised-chrome-11': {
    howTo: `Category: B2C: **REFUGE tease: poll.**\n1. Set linearId.\n2. **What would calm browsing mean?** Fewer ads / data stays mine / AI does not hijack / all three.\n3. Use results to pick REFUGE tagline tests.`,
    alreadyDone: 'Playbook Promised Land poll.',
    successCriteria: 'Poll complete; insight noted for copy tests.',
    why: 'Format playbook: promised land poll.',
  },
  'mn-promised-chrome-12': {
    howTo: `Category: B2C: **REFUGE tease: blog.**\n1. Set linearId.\n2. **What we mean by REFUGE**: \`${PLAYBOOK}\` Promised Land + [[REFUGE_DATA_BRIEF|data doc]] in tease voice.\n3. Local refuge + assistant boundaries; no hard launch CTA; no Oasis name if tease channel rules apply to blog. **confirm comms** (Oasis OK on owned blog if policy allows).\n4. Handoff to [[mn-gifts-chrome-02]] for proof later.`,
    alreadyDone: 'oasis-your-data-and-training.md + copy bank.',
    successCriteria: 'Blog honest on partial tracker relief; promises bounded.',
    why: 'Format playbook: promised land blog.',
  },
  'mn-gifts-chrome-05': {
    howTo: `Category: B2C: **Magic gifts: carousel series (×4).**\n1. Set linearId.\n2. One carousel per gift: 4 slides each: old → new → screenshot → honest boundary (\`${PLAYBOOK}\` Magic gifts).\n3. Order: reframe/contacts [[mn-gifts-chrome-01]], assistant [[mn-gifts-chrome-02]], ETP [[mn-gifts-chrome-03]], workflow [[mn-gifts-chrome-04]].\n4. **Legal** on comparative slides.`,
    alreadyDone: '[[MAGIC_GIFTS_BRIEF|copy bank]] + mapping doc.',
    successCriteria: 'Four carousels shipped; one obstacle per series.',
    why: 'Format playbook: gifts carousels.',
  },
  'mn-gifts-chrome-06': {
    howTo: `Category: B2C: **Magic gifts: short-form demos.**\n1. Set linearId.\n2. Four **15s** clips: tab group, close duplicates, clarify, summarize (\`${PLAYBOOK}\` Magic gifts).\n3. Screen capture + optional corner stick figure; same character each clip.\n4. One CTA per clip.`,
    alreadyDone: 'Product capability index + copy bank.',
    successCriteria: 'Four vertical demos live; commands shown clearly.',
    why: 'Format playbook: gifts short-form.',
  },
  'mn-gifts-chrome-07': {
    howTo: `Category: B2C: **Magic gifts: animation (×4).**\n1. Set linearId.\n2. Boulder labeled distraction; wrench removes one (\`${PLAYBOOK}\` Magic gifts); repeat per gift with new label.\n3. Same humble visual language all four.`,
    alreadyDone: 'Playbook Magic gifts animation.',
    successCriteria: 'Four short animations; one obstacle each.',
    why: 'Format playbook: gifts animation.',
  },
  'mn-gifts-chrome-08': {
    howTo: `Category: B2C: **Magic gifts: poll.**\n1. Set linearId.\n2. **Which obstacle would you remove first?** AI defaults / trackers / tab chaos / contact creep.\n3. Ship winning gift carousel/video next.`,
    alreadyDone: 'Playbook Magic gifts poll.',
    successCriteria: 'Poll done; production queue reflects winner.',
    why: 'Format playbook: gifts poll.',
  },
  'mn-gifts-chrome-09': {
    howTo: `Category: B2C: **Magic gifts: blog.**\n1. Set linearId.\n2. **Four magic gifts (honest version)**: table from [[MAGIC_GIFTS_BRIEF|mapping]] (\`${PLAYBOOK}\` Magic gifts).\n3. Call out partial ETP and contacts reframe explicitly.\n4. Oasis named; legal review before publish.`,
    alreadyDone: 'Mapping + copy bank + product index.',
    successCriteria: 'Blog maps obstacle→gift→truth; no overclaim.',
    why: 'Format playbook: gifts blog.',
  },
  'mn-evidence-chrome-06': {
    howTo: `Category: B2C: **Evidence: product gallery carousel.**\n1. Set linearId.\n2. **7 screenshots, 7 calm moments** (\`${PLAYBOOK}\` Present evidence), alternate to poem carousel [[mn-evidence-chrome-03]].\n3. Austere/serene captions; Oasis named; checklist gallery assets OK.\n4. Mood: Creative Flow, Zen, Serene per [[OASIS_LIFE_BRIEF|copy bank]].`,
    alreadyDone: 'Checklist Oasis in action gallery.',
    successCriteria: 'Seven-slide product carousel live.',
    why: 'Format playbook: evidence carousel alt.',
  },
  'mn-evidence-chrome-07': {
    howTo: `Category: B2C: **Evidence: launch montage video.**\n1. Set linearId.\n2. 25–35s: poem text cards + product flashes + PH hook + date (\`${PLAYBOOK}\` Present evidence).\n3. Reuse beats from [[mn-ph-chrome-07|Brief 01 video]]; vertical master.\n4. Oasis named; launch-ready only.`,
    alreadyDone: 'PH Brief 01 + poem copy bank.',
    successCriteria: 'Montage approved for PH + social cuts.',
    why: 'Format playbook: evidence launch video.',
  },
  'mn-evidence-chrome-08': {
    howTo: `Category: B2C: **Evidence: poem flipbook animation.**\n1. Set linearId.\n2. Stick figure finds oasis; key stanzas handwritten (\`${PLAYBOOK}\` Present evidence, ~30s).\n3. End: **Oasis for you** + wordmark.\n4. Poem is brand voice, not a factual privacy claim.`,
    alreadyDone: 'Poem modal + [[OASIS_LIFE_BRIEF|copy bank]].',
    successCriteria: 'Animation ships; poem lines match copy bank.',
    why: 'Format playbook: evidence animation.',
  },
  'mn-evidence-chrome-09': {
    howTo: `Category: B2C: **Evidence: proof-type poll.**\n1. Set linearId.\n2. Run **after** [[mn-promised-chrome-05|tagline poll]]: **What proof convinced you most?** Demo / user story / stats / poem.\n3. Use for launch asset prioritization.`,
    alreadyDone: 'Playbook Present evidence poll B.',
    successCriteria: 'Second poll complete; insight shared with comms.',
    why: 'Format playbook: evidence poll.',
  },
  'mn-evidence-chrome-10': {
    howTo: `Category: B2C: **Evidence: blog sprint.**\n1. Set linearId.\n2. Publish/refreshed [[mn-evidence-chrome-01|Chrome privacy hub]] + [[mn-evidence-chrome-04|Lena story]] as coordinated sprint (\`${PLAYBOOK}\` Present evidence).\n3. Every third-party stat footnoted; Lena claims legal-approved.\n4. Bibliography stays [[mn-evidence-chrome-02|internal PDF]].`,
    alreadyDone: 'Copy bank + existing blog tasks.',
    successCriteria: 'Hub updated; Lena live; cross-links between posts.',
    why: 'Format playbook: evidence blog bundle.',
  },
}
