/**
 * Marketing Narrative Checklist – per-task instructions for "View instructions".
 * Sources: data-leakage-consortium-summary.md (IBM 2025); can you focus on privacy and data collection conce.md (Chrome B2C).
 */
import { INSTRUCTION_DELIVERABLES } from '../data/marketingNarrativeInstructionDeliverables'
import { FORMAT_PLAYBOOK_INSTRUCTIONS } from '../data/marketingNarrativeFormatPlaybookInstructions'

export const INSTRUCTIONS = {
  ...FORMAT_PLAYBOOK_INSTRUCTIONS,
  'mn-change-01': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Link or create [[LINEAR|Linear]] issue; set linearId on this row.\n2. Open with the shift: IBM’s 2025 frame is the **AI Oversight Gap**. AI adoption and AI-related incidents outpace formal governance, access discipline, and resilience.\n3. Cite carefully: [[IBM_BREACH|IBM Cost of a Data Breach Report 2025]] (Ponemon partnership); do not reproduce the full report.\n4. Tie to [[CONSORTIUM|AI-in-Browser Data Protection Consortium]] as the operator-led response space.\n5. Close without product pitch, invite reaction (“does this match what you’re seeing?”).',
    alreadyDone:
      'Full problem/change/evidence breakdown in data-room `data-leakage-consortium-summary.md`. Live page: [[CONSORTIUM|kahana.co/data-leakage-consortium]].',
    successCriteria:
      'Reader names the oversight gap without being told they are “bad at security.” Includes one IBM-sourced stat and consortium CTA.',
    why: 'Story Framework · Name the change: change, not accusation.',
  },
  'mn-change-02': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Narrate: **AI moved into the browser as the default productivity surface** (ChatGPT, copilots, extensions, uploads).\n3. Contrast: security programs remain **Level 2**, documented policies, reactive execution, implementation gaps under pressure.\n4. Optional line: traditional DLP/SASE were not designed for prompt-level and in-tab AI workflows.\n5. Format: blog or sales deck slide 2.',
    alreadyDone:
      'Consortium executive summary: “Confidential data leaking through browser-based AI tools, prompts, copy/paste, uploads, extensions.”',
    successCriteria:
      'Non-technical executive understands *where* work moved (browser) vs. *where* controls lag.',
    why: 'Localizes the global shift to the surface Oasis/consortium address.',
  },
  'mn-change-03': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Lead stat: **49%** of organizations plan to increase security investment after a breach, **down from 63%** YoY ([[IBM_BREACH|IBM 2025]]).\n3. Implication: buyers want **implementation discipline and measurable controls**, not another disconnected tool after an incident.\n4. Carousel: 3 slides: stat → implication → question for CISOs.\n5. Avoid fear-mongering; frame as market maturity.',
    alreadyDone:
      'Documented under “Post-breach investment appetite” in consortium summary.',
    successCriteria:
      'Post stands alone on LinkedIn; comment thread discusses priorities, not vendor bashing.',
    why: 'Explains *why now* for consortium/browser-layer approach without budget-growth assumption.',
  },
  'mn-change-04': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Explain consortium in one sentence: invitation-only community of security leaders, practitioners, vendors, researchers.\n3. Mission: make browser AI **visible, governable, and safe** via browser-layer controls, telemetry standards, governance frameworks.\n4. List 2–3 workstreams (e.g. shadow AI governance, operational resilience, complexity reduction), see consortium summary Framework workstreams.\n5. CTA: visit [[CONSORTIUM|consortium page]] or express interest; no hard product sell.',
    alreadyDone:
      'Mission and workstreams in `data-leakage-consortium-summary.md`.',
    successCriteria:
      'Clear who it is for (security leaders) and what members get (patterns, not hype).',
    why: 'Positions Kahana as convener of the change, not only a vendor.',
  },
  'mn-change-05': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Script three beats (10–20 sec each): (1) Browser = AI workspace, (2) Oversight gap / governance lag, (3) Budgets tightening → discipline era.\n3. On-screen text: max 8 words per beat; one stat total (pick 49% or 97% access gap).\n4. End card: consortium or report link.\n5. Shoot for vertical + horizontal cuts.',
    alreadyDone:
      'Stats menu in consortium summary Key figures and Stats that matter.',
    successCriteria:
      'Viewer can repeat the three forces back; no Oasis feature mention in first 45 seconds.',
    why: 'Short-form top-of-funnel for the same narrative as long-form posts.',
  },
  'mn-winners-01': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. **Losers:** orgs with 80–98% unauthorized AI tool use, +$670K shadow-AI breach premium, **44%** of shadow AI incidents → data compromise.\n3. **Winners:** discover shadow AI, enforceable baselines for prompts/uploads/extensions, measurable reduction in ungoverned usage.\n4. Attribute: [[IBM_BREACH|IBM 2025]] via consortium curation.\n5. Chart or table; verify ranges before publish.',
    alreadyDone:
      'Shadow AI prevalence and BYOAI (78%) in consortium AI governance & shadow AI.',
    successCriteria:
      'Both futures feel data-backed; status quo explicitly expensive.',
    why: 'Story Framework · Name the villain: loss aversion via shadow AI scale, not vague “AI risk.”',
  },
  'mn-winners-02': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Problem frame (allowed here as *future cost*): confidential data exits via **prompts, paste, uploads, extensions**, often invisible to legacy DLP/SASE.\n3. List 3 leakage paths with one sentence each; no victim-blaming.\n4. Bridge: “This is why browser-layer visibility matters.”\n5. Optional diagram: employee → browser AI → data leaves boundary.',
    alreadyDone:
      'Consortium The problem: first bullet.',
    successCriteria:
      'Security practitioner says “that’s our blind spot” not “you’re calling us negligent.”',
    why: 'Makes the loser future concrete without opening with “you have a problem” in deck slide 1.',
  },
  'mn-winners-03': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Use **average company** composite: $6.68M expected breach cost, **241 days** identify/contain, **100+ days** recovery for most orgs.\n3. Frame as pressure-test, not prophecy (“if controls stay reactive…”).\n4. Compare winner: shorter recovery, tested runbooks, browser AI inventory.\n5. Executive PDF or Notion one-pager.',
    alreadyDone:
      'Consortium The average company (IBM-derived snapshot).',
    successCriteria:
      'CFO-readable; footnotes point to IBM source, not Kahana math.',
    why: 'Quantifies loser future for economic buyers.',
  },
  'mn-winners-04': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Headline stat: **97%** of organizations with AI-related incidents lacked proper AI access controls.\n3. Winner path: access design, identity hygiene, control verification *before* scaling workflows.\n4. Tie to consortium priority: access boundaries first.\n5. Blog or webinar slide; include editor’s note to verify against IBM PDF before ads.',
    alreadyDone:
      'Consortium Stats that matter: 97% AI access controls gap.',
    successCriteria:
      'Single memorable number with one actionable winner behavior.',
    why: 'Strongest “losers repeat incidents” stat in the brief.',
  },
  'mn-winners-05': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Explain **$2.9M+ preventable** narrative: skills shortages, shadow AI, missing security fundamentals (consortium page composite).\n3. Layer premiums: $1.57M skills shortage, +$670K shadow AI, base $4.44M average breach, only if footnoted.\n4. **Do not** promise fixed savings or ROI from Oasis.\n5. CTA: implementation patterns via [[CONSORTIUM|consortium]].',
    alreadyDone:
      'Consortium Key figures cross-cutting table.',
    successCriteria:
      'Legal/comms comfortable with claims; all figures sourced to IBM subset.',
    why: 'Connects problem economics to consortium value without product ROI hype.',
  },
  'mn-winners-06': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Pick one “Stats that matter” card: e.g. **86%** operational disruption, **76%** recovery >100 days, **41%** no formal AI governance (note 63% variant in average-company profile, verify cohort).\n3. Design infographic: headline %, 2-sentence summary, “why consortium cares.”\n4. Plan as **series** (link [[mn-winners-06|future posts]] in Linear as subtasks).\n5. Export PNG + alt text for accessibility.',
    alreadyDone:
      'Six stat blocks in consortium summary Stats that matter.',
    successCriteria:
      'One stat per asset; editor note on 41% vs 63% governance documented in draft.',
    why: 'Repurpose curated evidence into repeatable social proof.',
  },
  'mn-promised-01': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Present tense: “Imagine your security team can see which browser AI tools are in use, enforce policy at the browser layer, and prove controls to auditors, without blocking productivity.”\n3. Map to consortium mission: **visible, governable, safe**.\n4. One line on difficulty alone: tool sprawl, siloed governance, no shared telemetry standard.\n5. No product names.',
    alreadyDone:
      'Consortium Consortium response (brief).',
    successCriteria:
      'Champion can paste into Slack/email; passes “desirable + hard alone” test.',
    why: 'Story Framework · Winners and losers: Promised Land before magic gifts.',
  },
  'mn-promised-02': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Write 2–3 sentences a prospect says to their CIO: “These folks are building/practicing browser AI governance with other security leaders…”\n3. Include outcome words: visibility, enforceable policy, resilience.\n4. Test with teammate: “What do those guys do again?”\n5. Store in sales Notion.',
    alreadyDone:
      'Align with [[/b2b-strategic-narrative|B2B Strategic Narrative]] if enterprise-focused.',
    successCriteria:
      'Readable in under 15 seconds aloud.',
    why: 'Internal selling is the Promised Land’s job.',
  },
  'mn-gifts-01': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Obstacle (from [[mn-winners-01|shadow AI stats]]): unknown/unauthorized browser AI tools.\n3. Gift: **inventory and discovery at the browser layer** (not “another dashboard”).\n4. Old world → new world: from “we don’t know what employees use” to “we see and can act.”\n5. Cite consortium workstream: shadow AI discovery practice.',
    alreadyDone:
      'Consortium Shadow AI discovery practice: critical risk signal.',
    successCriteria:
      'One obstacle, one gift, tied to [[mn-promised-01|Promised Land]] visibility.',
    why: 'Story Framework · Promised Land: gift narrative for consortium pillar.',
  },
  'mn-gifts-02': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Obstacle: policy on paper, inconsistent enforcement for prompts/uploads/extensions.\n3. Gift: **enforceable governance at the browser layer** (block, warn, log, pick one outcome, not three products).\n4. Reference consortium workstream #2: AI governance and shadow AI.\n5. No ROI claims.',
    alreadyDone:
      'Consortium framework workstreams Name the villain and Present evidence (governance + integration).',
    successCriteria:
      'Reader sees how gift closes gap between policy intent and operational reality (Level 2 maturity trap).',
    why: 'Connects governance lag (change) to tangible control (gift).',
  },
  'mn-evidence-01': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Footnote pattern: “Source: IBM Cost of a Data Breach Report 2025 (The AI Oversight Gap), IBM Security / Ponemon Institute.”\n3. Link [[IBM_BREACH|report hub]] and optional download URL.\n4. State clearly: consortium page uses a **curated subset**, not full report reproduction.\n5. Run past legal if used in paid ads.',
    alreadyDone:
      'Primary source table in `data-leakage-consortium-summary.md`.',
    successCriteria:
      'Every stat in the piece has IBM attribution or is labeled consortium composite.',
    why: 'Credibility for evidence beat; avoids over-claiming.',
  },
  'mn-evidence-02': {
    howTo:
      'Category: B2B data leakage narrative.\n1. Set linearId.\n2. Structure: problem evidence (IBM) → consortium as operator-led response → six workstreams (cost mitigation, governance/shadow AI, supply chain, skills, resilience, integration).\n3. Screenshots or quotes from [[CONSORTIUM|live consortium page]] only with permission.\n4. Close: invitation / learn more, not “buy now.”\n5. Cross-link [[mn-change-04|consortium launch narrative]] if published.',
    alreadyDone:
      'Workstreams listed in consortium summary Framework workstreams.',
    successCriteria:
      'Reader believes standards work is real and ongoing; knows how to engage.',
    why: 'Story Framework · Magic gifts: proof the narrative is actionable.',
  },
  'mn-change-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the change villain (no PH).**\n1. Set [[LINEAR|Linear]] linearId.\n2. **Pull from copy bank The Villain: Ad Nauseam** ([[AD_NAUSEAM_BRIEF|copy bank]]). Publish as a **readable story**, not bullets. Adapt this draft (trim for LinkedIn):\n\n---\n\nIt is 2026, and we are in the thick of the **Rise of Ad Nauseam**.\n\nThe villain is not a single ad; it is **Ad Nauseam** itself. Your browser stops serving you and starts serving the highest bidder. The tab you opened for work becomes a **trap**: every scroll, click, and pause logged, auctioned, fed back to keep you staring longer.\n\nThis villain does not kick down the door. It **seeps in**, one more pre-roll, one more sidebar, one more “personalized” shoe.\n\nThe browser used to be a **portal**, a tool for work, research, and what you loved building. That world is gone.\n\nLast week: **fourteen minutes** of basketball highlights, **fourteen ads**. By ad six I stopped enjoying the sport. By ad fourteen I was not mad at one creator. I was tired. Every tab felt like a storefront.\n\nSo we named the era: **Ad Nauseam** *(n.)*, the fatigue of living inside constant advertising; attention never fully yours; “personalization” often means *they heard you, logged it, and followed you*.\n\nIn 2012, [[FORBES_TARGET|Forbes reported]] Target figured out a teen was pregnant before her father did, coupons in the mail, not her voice. That was before the browser became everyone’s dashboard.\n\nIf you remember the before-times, or your own Ad Nauseam moment, tell me in the comments.\n\n---\n\n3. Link [[FORBES_TARGET|Target / Forbes 2012]]; do not misquote (coupons tipped off the father).\n4. **Do not** lead with Chrome stats, save for [[mn-change-chrome-02|mosquitoes post]].\n5. **Do not** use winners/losers thesis or PH hook, that is Winners and losers+ ([[mn-villain-chrome-01|Name the villain colossus]], [[mn-winners-chrome-05|quiet rebels]], [[mn-ph-chrome-01|bridge]], [[PH_BRIEF|Brief 01]]). Handoff after Name the change: [[mn-villain-chrome-01|Chrome Colossus]].\n6. Cross-link next: [[mn-change-chrome-02|mosquitoes]] or [[mn-change-chrome-04|consequence]].',
    alreadyDone:
      'Name the change intro + copy bank Villain; 14/14 scene; Target story in privacy brief.',
    successCriteria:
      'Reader feels trap, seep-in, portal→trap, Ad Nauseam definition, and Target link, no W/L thesis, no product pitch.',
    why: 'Story Framework · Name the change: name the villain and the change in the world.',
  },
  'mn-change-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the change villain Name the villain.**\n1. Set linearId.\n2. **Pull from copy bank The Mosquitoes + The Cost** ([[AD_NAUSEAM_BRIEF|copy bank]]). Open in Name the change villain voice, not Winners and losers quiet rebels yet. Adapt:\n\n“You know the drone. Your mind is still cloudy from Ad Nauseam. Big tech is a cloud of **mosquitoes**, always hovering, always hungry. Each tracker, pixel, cookie, and ‘helpful’ assistant is another bite.\n\nYou do not feel every bite. That is the point. By the time you notice, your attention is covered in **welts**, ads stitched together by the assumption your data is theirs to drink.\n\nAt first it was annoying. Then normal. Your **field of view** fills with autoplay. Your **mental RAM** goes to ignoring instead of creating. Priority erodes under ‘this might be relevant to you.’”\n\n3. Ads are what you *see*; data collection is what drains you.\n4. Invite **horror stories**: worst ad pile-on, creepy retargeting, “why does it know that?”\n5. **One stat max** footnote: Chrome ~**20** data types vs **~6** peers ([[SURFSHARK_BROWSERS|Surfshark]]).\n6. CTA: [[CHROME_BLOG|Kahana Chrome post]]; next → [[mn-change-chrome-03|Fallen Portal]].',
    alreadyDone:
      'Copy bank Mosquitoes + Cost; Surfshark in privacy brief.',
    successCriteria:
      'Reader understands bites they do not feel (welts) plus visible cost (mental RAM); one stat max; no W/L thesis.',
    why: 'Name the change: mosquitoes under the scroll.',
  },
  'mn-change-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the change villain Winners and losers (structural).**\n1. Set linearId.\n2. **Pull from copy bank The Fallen Portal** ([[AD_NAUSEAM_BRIEF|copy bank]]). Adapt before stats:\n\n“The browser used to be a **portal**, a clean frame around the infinite library. Now it feels like a **bug zapper**. You walk toward the light because that is where your work lives, sticky sidebars, suggestions tuned to your weakest impulses, ‘free’ tools whose real price is your data.\n\nThe portal has been **booby-trapped**. Every path to deep work runs through billboards tuned to yank your attention off course.\n\nEven when you close the tab, the trap keeps running.”\n\n3. **AI layer:** Gemini in Chrome = **24 linked data types** when signed in ([[SURFSHARK_GEMINI|Surfshark]]), plain English: tied to you.\n4. **Policy layer:** Apr 2025, third-party cookies stay; cross-site tracking **default** ([[PRIVACY_SANDBOX|Privacy Sandbox]], [[DIDOMI_COOKIES|Didomi]]).\n5. Close with a question, not the PH hook: “Whose attention does this browser really serve?”\n6. **Do not** use “Your browser works for Google. Ours works for you.”, that is [[mn-ph-chrome-01|Winners and losers recognition bridge]] / [[PH_BRIEF|Brief 01]].',
    alreadyDone:
      'Copy bank Fallen Portal; privacy brief Gemini, cookies, tracking.',
    successCriteria:
      'Reader feels bug-zapper / booby-trapped corridor plus structural trap; Name the change villain arc complete; no PH tagline.',
    why: 'Completes Name the change: the trap does not stop when the ads end.',
  },
  'mn-change-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the change consequence beat.**\n1. Set linearId.\n2. **Pull from copy bank The Consequence: Forgetting Deep Work** ([[AD_NAUSEAM_BRIEF|copy bank]]). Adapt as prose, not bullets:\n\n“Under Ad Nauseam you do not just lose time, you lose the **memory** of how deep focus feels. Half-open tabs. Half-finished thoughts. Sessions punctured by ‘just one video.’ A constant tension in your nervous system, as if you are never fully here.\n\nYou forget the calm of getting lost in a problem for hours. You forget shipping something that required real, sustained effort. You forget when the browser was quiet enough to let you think.\n\nBefore Ad Nauseam, what did you do with a clear mind? Deep research. Building a company. A writing project. What ad or retargeting moment broke it?”\n\n3. Tie opening to [[mn-change-chrome-01|Rise of Ad Nauseam]] post.\n4. **No Oasis / no PH / no winners-losers thesis** in this post.\n5. Empathetic tone, name the villain, not the reader.',
    alreadyDone:
      'Copy bank Consequence; Name the change intro (mental RAM / forgot clarity).',
    successCriteria:
      'Reader feels half-open tabs, forgot calm/shipping; comments fill with deep-work stories; no W/L thesis.',
    why: 'Name the change: makes the cost of Ad Nauseam concrete beyond ads.',
  },
  'mn-villain-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the villain structural villain (market share).**\n1. Set [[LINEAR|Linear]] linearId.\n2. **Pull from [[CHROME_VILLAIN_BRIEF|copy bank Act I]]**: infographic or stat post.\n3. Key stats (attribute + “as of” date):\n• Chrome global share ~**47%** (2016) → **68%+** (Apr 2026)\n• Firefox worldwide ~**2.26%** (2026)\n• Safari holds much of remainder (mobile defaults)\n4. **Publishable line:** “The browser monoculture is no longer a market; it is a Chrome monoculture.”\n5. Sources in caption: https://gs.statcounter.com/browser-market-share , https://backlinko.com/browser-market-share\n6. **No Oasis product pitch** in Name the villain. Cross-link [[mn-change-chrome-04|Name the change consequence]] → this post → [[mn-villain-chrome-02|ad empire]].',
    alreadyDone: 'Copy bank Act I + Sources table.',
    successCriteria:
      'Shareable graphic or post with attributed share stats; monoculture line lands; no product CTA.',
    why: 'Story Framework · Name the villain: name the structural villain (Chrome Colossus).',
  },
  'mn-villain-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the villain ad empire + motive.**\n1. Set linearId.\n2. **Pull from [[CHROME_VILLAIN_BRIEF|copy bank Act II]]**: long post.\n3. Beats:\n• Chrome feeds behavioral data into Google’s ad systems\n• Advertising = majority of Alphabet revenue\n• Open-web ad-tech segment ~$30B+ (cite filings/reporting in copy bank)\n• Incentive: more tracking, profiling, tolerated ad load\n4. **Tie to Name the change:** Ad Nauseam mosquitoes = what you feel; Chrome = lens that feeds the ad machine.\n5. **Publishable line:** “Chrome is not just a browser; it is the skin of the ad machine.”\n6. Next → [[mn-villain-chrome-03|antitrust]] or [[mn-villain-chrome-05|bridge]].',
    alreadyDone: 'Copy bank Act II; privacy brief ad-tech context.',
    successCriteria:
      'Reader connects ads revenue motive to browser defaults; Name the change metaphor referenced once; no Oasis pitch.',
    why: 'Name the villain: motive behind the monoculture.',
  },
  'mn-villain-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the villain antitrust.**\n1. Set linearId.\n2. **Pull from [[CHROME_VILLAIN_BRIEF|copy bank Act III]]**.\n3. Facts:\n• DOJ **2025** win: Google illegally monopolized open-web digital ad markets\n• Court: controls tools for publishers, advertisers, auctions\n• Remedies **discussed** (divestitures, auction code), outcomes still evolving\n4. Cite: https://www.justice.gov/opa/pr/department-justice-prevails-landmark-antitrust-case-against-google , https://www.nytimes.com/2025/09/22/technology/google-second-antitrust-trial.html\n5. **Do not** claim breakup is final, legal/comms review on remedy language.\n6. Pair with [[mn-villain-chrome-04|breach post]] for “cracks in the fortress” thread.',
    alreadyDone: 'Copy bank Act III + DOJ/NYT URLs.',
    successCriteria: 'Factual antitrust post with attributed sources; no overclaim on divestiture outcome.',
    why: 'Name the villain: state names the villain too.',
  },
  'mn-villain-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the villain security breach.**\n1. Set linearId.\n2. **Pull from [[CHROME_VILLAIN_BRIEF|copy bank Act IV]]**.\n3. **June 2025:** Salesforce instance tied to Google Ads breached; ~**2.5M** business records (names, contacts, notes).\n4. Frame: centralized ad infrastructure = high-value target; same pipeline that fuels targeting.\n5. Attribute breach recap sources from copy bank Sources table.\n6. **No scare tactics**, factual timeline. Next → [[mn-villain-chrome-05|bridge]] or [[WINNERS_LOSERS_BRIEF|Winners and losers fork]].',
    alreadyDone: 'Copy bank Act IV.',
    successCriteria: 'Breach recap with sources; ties to concentrated ad stack; no product pitch.',
    why: 'Name the villain: cracks in the colossus.',
  },
  'mn-villain-chrome-05': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Name the villain bridge (Name the change → Winners and losers).**\n1. Set linearId.\n2. Short thread (400–900 chars): **Ad Nauseam** = feeling; **Chrome Colossus** = environment / skin of the ad machine.\n3. Close: who acts before the default browser finishes selling them out? → [[WINNERS_LOSERS_BRIEF|Winners and losers Winners and Losers]]\n4. **No Product Hunt hook.** Oasis/Firefox = alternative path only if mentioned, no “we defeated Chrome.”\n5. Do not duplicate [[mn-ph-chrome-01|Winners and losers recognition bridge]], this is structural handoff only.',
    alreadyDone: 'Copy bank Bridge section; Name the villain checklist intro para 3.',
    successCriteria: 'Clear Name the change → Name the villain→Winners and losers handoff; no PH CTA; futures framing for Winners and losers.',
    why: 'Name the villain: synthesis before the fork.',
  },
  'mn-winners-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Frame:** loser arc “deeper data trails” ([[WINNERS_LOSERS_BRIEF|loser arc / framework]]), futures, not blame; one line on hollow husk or identity splinters, then receipts.\n3. Visual: 8 rows. Identifiers, Contact, Financial, Location, Browsing, User content, Usage, Diagnostics ([[CHROME_BLOG|Kahana post]]).\n4. Loser future: all categories **linked to you** when signed in.\n5. Winner future: reduce surface area, limit what is linked (state Oasis truthfully per legal).\n6. **Do not** claim Oasis collects zero data.\n7. Pair with [[mn-winners-chrome-09|loser arc over time]] thread.',
    alreadyDone:
      'Eight categories in privacy brief; Winners and losers story in checklist + copy bank.',
    successCriteria:
      'Infographic is shareable; emotional frame + facts; comms approved “only major browser” claims if used.',
    why: 'Story Framework · Winners and losers: makes loser/winner futures concrete for B2C.',
  },
  'mn-winners-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Frame:** “Another sip from the mosquitoes”, contacts and money leave the device while you scroll ([[WINNERS_LOSERS_BRIEF|Winners and losers]]).\n3. Headline: Chrome is the **only major mobile browser** that collects **contacts + financial info** ([[SURFSHARK_BROWSERS|Surfshark]]).\n4. Loser future: payment methods, card numbers, bank details, address book tied to profile.\n5. Winner future: browser that does not pull contact/financial categories (verify product claims with legal).\n6. Run comms review before paid ads.',
    alreadyDone:
      'Privacy brief How much data Chrome collects.',
    successCriteria:
      'Legal sign-off on “only major browser” wording; Surfshark attributed.',
    why: 'High-impact B2C stat for switcher narrative.',
  },
  'mn-winners-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Frame:** loser future = history bleeding out while you wallow in Ad Nauseam; winner = understands and mitigates ([[WINNERS_LOSERS_BRIEF|Winners and losers]]).\n3. Explain visited-link CSS leak: sites could infer **parts of browsing history** for years.\n4. Google confirmed; fix rolling out **Chrome 136** (domain-scoped visited state).\n5. Cite [[FORBES_VISITED|Forbes Apr 2025]]; no scare tactics, factual timeline.',
    alreadyDone:
      'Privacy brief Tracking, cookies, and secret history leaks.',
    successCriteria:
      'Technically accurate; Forbes linked; Chrome 136 mentioned.',
    why: '“Secret tracking” story without opening with “you have a problem.”',
  },
  'mn-winners-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. Pairs with Winners and losers **stay on default** / mosquito metaphor, this task is **factual receipts** for the loser future.\n3. Use these copy-ready lines on the **“Working for Google”** / loser side of [[mn-ph-chrome-02|split-screen]] (attribute sources in footer), verbatim from [[WINNERS_LOSERS_BRIEF|copy bank: evidence block]]:\n• “Chrome is the most data-hungry popular browser, collecting 20–24 different types of personal data, far more than competitors that average just 6.”\n• “Chrome is the only major browser that pulls in your phone’s contacts and your payment details, then links that information to your identity and devices.”\n• “Google confirms that Chrome has leaked pieces of your browsing history for years via a fundamental browser behavior, now only being locked down in Chrome 136.”\n• “Google collects more data than any other big-tech firm, and Chrome-synced browsing history becomes part of the profile that powers its ad and AI systems.”\n4. Footnote Surfshark, Forbes, [[SECURITY_ORG|Security.org]], [[CHROME_BLOG|Kahana blog]].\n5. Right / **quiet rebel** side stays clean, full PH tagline on [[mn-ph-chrome-02|PH square]] / [[mn-ph-chrome-03|caption]] only.',
    alreadyDone:
      'Privacy brief : mosquito metaphor; [[WINNERS_LOSERS_BRIEF|docs/b2c-winners-losers-copy.md]].',
    successCriteria:
      'Metaphor + stats aligned; ad copy ≤60 words optional; all four lines available for landing hero.',
    why: 'Pre-packaged evidence block for campaigns.',
  },
  'mn-winners-chrome-05': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Thesis post** from [[WINNERS_LOSERS_BRIEF|copy bank Who winners are]], adapt:\n\n“Winners stop treating Ad Nauseam as background radiation. They treat the swarm as an **attack surface**. They are the quiet rebels: they notice the rigged casino, budget attention like money, and refuse to sit outside without a net.”\n\n3. Tie to [[mn-change-chrome-01|Name the change Ad Nauseam]] in the opening line.\n4. **Futures, not blame**, invite readers to share one moment they stopped gaslighting themselves about “normal” retargeting.\n5. No Oasis hard pitch; optional soft CTA to [[mn-winners-chrome-06|defend attention]] carousel next.\n6. Do not repeat full PH hook ([[PH_BRIEF|Brief 01]]).',
    alreadyDone:
      'Winners and losers intro paragraph 1; framework source in data room.',
    successCriteria:
      'Reader feels “attack surface” + quiet rebels; conversational; zero product hard sell.',
    why: 'Story Framework · Winners and losers: names who acts in the face of Ad Nauseam.',
  },
  'mn-winners-chrome-06': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Carousel or thread** (5 slides max) from [[WINNERS_LOSERS_BRIEF|winner behaviors]]:\n• Slide 1: Draw a hard line, blockers, kill third-party cookies, turn off autoplay.\n• Slide 2: Budget attention, unsubscribe ruthlessly; treat attention like money.\n• Slide 3: Reduce surface area, sign out where you can; fewer logins; sparser tracking graph.\n• Slide 4: Switch browsers / privacy-respecting tools (no “Oasis collects nothing” unless legal approves).\n• Slide 5: “Mosquitoes only win when you keep sitting outside without a net.”\n3. Practical tone, how-to, not lecture.\n4. Cross-link [[mn-winners-chrome-05|quiet rebels]] post.\n5. Optional: one Chrome stat footnote only ([[SURFSHARK_BROWSERS|Surfshark]]), not the focus.',
    alreadyDone:
      'Framework bullets: defend attention + reduce surface area.',
    successCriteria:
      'Actionable slides; reader can do one thing today; no shaming of non-switchers.',
    why: 'Turns winner framework into publishable habits content.',
  },
  'mn-winners-chrome-07': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Thread** from [[WINNERS_LOSERS_BRIEF|loser behaviors]], open: “Losers aren’t stupid. They stay on default.”\n3. Posts (adapt length):\n• **Normalize the swarm**: “That’s just how the internet works.”\n• **Cognition tax**: banners, pre-rolls, ghost-shoes; every task costs extra attention.\n• **Pay twice**: attention + data, then money for things you didn’t need and premium to escape the free tier.\n4. Close with Winners and losers line (optional): hollow husk / mosquitoes sipping, do not copy full checklist intro verbatim.\n5. **Futures, not blame**, ask “Which default hurt you most?” in replies.\n6. Link [[mn-winners-chrome-08|what winners get]] as the constructive follow-up.',
    alreadyDone:
      'Winners and losers intro paragraph 2; framework Who losers are.',
    successCriteria:
      'Thread feels empathetic, not preachy; three loser behaviors land; engagement question.',
    why: 'Makes “stay on default” concrete without insulting the audience.',
  },
  'mn-winners-chrome-08': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Outcomes post** from [[WINNERS_LOSERS_BRIEF|What winners get]], adapt:\n\n“Winners get clearer headspace, the internet feels like a tool again, not a trap. Truer signals: you buy because you needed it, not because forty impressions wore you down. And agency: ‘I didn’t just let this happen to me.’”\n\n3. Follow [[mn-winners-chrome-07|stay on default]] or [[mn-winners-chrome-06|defend attention]], this is the hopeful beat.\n4. **No hard Oasis pitch**. REFUGE/imagine language OK only if aligned with [[mn-promised-chrome-01|Promised Land tease]] rules (no Oasis name in tease channels).\n5. End with a question: “What did you get back first, time, calm, or trust in your own choices?”',
    alreadyDone:
      'Winners and losers intro paragraph 3 (stakes); framework outcomes.',
    successCriteria:
      'Reader feels agency and relief; no factual product claims without legal.',
    why: 'Balances loser thread with winner payoff before Promised Land tease.',
  },
  'mn-winners-chrome-09': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **Loser arc over time** from [[WINNERS_LOSERS_BRIEF|What happens to losers]]:\n• Numbness, the swarm stops feeling outrageous.\n• Deeper data trails every year, searches, locations, scrolls constrain what you see.\n• **Raw material**, your clicks train the next targeting system; customers and inventory.\n3. Pair with **evidence**: link or embed [[mn-winners-chrome-01|8 categories]], [[mn-winners-chrome-03|visited-link]], or [[mn-winners-chrome-04|four lines]].\n4. **Futures, not blame**, losers are not villains in this frame.\n5. Foreshadow fork: act before the default browser finishes selling you out (no full PH hook).',
    alreadyDone:
      'Winners and losers intro paragraph 3; privacy brief stats.',
    successCriteria:
      'Emotional arc + at least one cited third-party source; links to evidence tasks.',
    why: 'Closes Winners and losers loser storyline with structural stakes.',
  },
  'mn-promised-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative: **REFUGE tease (no Oasis).**\n1. Set linearId.\n2. Open with imagine frame from [[REFUGE_BRIEF|REFUGE copy bank]]: “Imagine a browser built like a refuge, not a billboard.”\n3. Draft (adapt):\n\n“Imagine tab groups, AI shortcuts, and split view. **without** your browsing history syncing into a 90-day ad profile. Imagine a calmer tab bar, private by default, and AI that helps without hijacking your attention. We call that vision **REFUGE** internally, a browser that works for *you*, not for an ad network.”\n\n4. Cross-link arc: [[mn-change-chrome-01|Name the change Ad Nauseam villain]] → [[mn-villain-chrome-02|Name the villain colossus]] → [[mn-ph-chrome-01|Winners and losers bridge]] → this post.\n5. **Do not** name Oasis. Footnote [[CHROME_BLOG|90-day history]] only if citing Chrome’s default.\n6. Legal: aspirational tease, no “zero tracking” unless approved.\n7. Optional: weave one line from [[REFUGE_DATA_BRIEF|copy bank Product-backed promises]] (local browse + sidebar on your terms).',
    alreadyDone:
      '[[REFUGE_BRIEF|docs/b2c-refuge-promised-land-copy.md]] variant 1; [[REFUGE_DATA_BRIEF|oasis-your-data-and-training]]; [[/b2c-strategic-narrative|B2C Strategic Narrative]].',
    successCriteria:
      'Reader feels relief via “imagine”; REFUGE named as codename only; zero “Oasis” in published copy.',
    why: 'Story Framework · Promised Land: Promised Land before product reveal.',
  },
  'mn-promised-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative: **REFUGE tease (no Oasis).**\n1. Set linearId.\n2. First-person switcher tease (3–5 sentences max for social):\n\n“After I left Chrome, I still get AI in my browser, but I’m not feeding everything into one ad profile. Tabs feel quieter. The feed stops chasing me. My data feels like *mine* again. That’s the REFUGE I was looking for, even before I knew what to call it.”\n\n3. Address “used to Chrome” lightly, familiar workflows, import, learning curve, without naming a product.\n4. **Never** say Oasis in tease posts.\n5. Expand for blog; keep imagine/REFUGE voice.\n6. Optional: one line from [[REFUGE_DATA_BRIEF|Product-backed promises]], data feels mine on my machine (no Oasis name).',
    alreadyDone:
      'NPS/themes: onboarding friction vs Chrome; [[REFUGE_BRIEF|REFUGE copy bank]]; [[REFUGE_DATA_BRIEF|data doc]].',
    successCriteria:
      'Sounds like a real person; REFUGE or “imagine a browser” only, no product name.',
    why: 'Champion/switcher language for pre-launch referrals.',
  },
  'mn-promised-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative: **REFUGE tease (no Oasis).**\n1. Set linearId.\n2. Publish **variant 1** from [[REFUGE_BRIEF|copy bank]] as a long LinkedIn/thread post (trim to length):\n\n“Imagine a browser built for people exhausted by noisy tabs, distracting feeds, and software that constantly demands attention. It’s a calmer way to browse, private by default, elegant by design, and powered by AI that helps without getting in the way. The more you use it, the more it understands what matters to **you**.”\n\n3. No PH CTA; no Oasis name.\n4. Tie back to [[mn-change-chrome-01|Ad Nauseam]] in opening line.\n5. Optional fourth-paragraph energy from [[REFUGE_DATA_BRIEF|Checklist · Promised Land intro]] (history on your machine).',
    alreadyDone:
      'Full paragraph in `docs/b2c-refuge-promised-land-copy.md` Variant 1; Promised Land intro synced in checklist.',
    successCriteria:
      'Post is publishable as-is; no Oasis; reader wants the Promised Land.',
    why: 'Primary REFUGE description for tease funnel.',
  },
  'mn-promised-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative: **REFUGE tease (no Oasis).**\n1. Set linearId.\n2. Carousel or thread: **two slides/posts** from [[REFUGE_BRIEF|copy bank]]:\n\n**Slide 1 (variant 2):** “Most browsers compete for your attention. Imagine one that **protects** it. REFUGE, privacy first, clean, focused, AI that moves you faster without overwhelming you. Your data remains fully yours, always.”\n\n**Slide 2 (variant 3):** “Browsers should feel like clarity, not chaos. Imagine privacy + elegant design + personal AI that adapts to **you**, remembers what matters, removes friction, keeps you in flow, without compromising your data.”\n\n3. One visual metaphor per slide (calm vs noisy tab bar).\n4. No Oasis; codename REFUGE OK on slide 2.\n5. CTA: “Which line landed?” engagement only.\n6. Optional third slide: one line from [[mn-promised-chrome-06|local refuge]] or [[mn-promised-chrome-07|assistant on your terms]].',
    alreadyDone:
      'Variants 2–3 in REFUGE copy bank; product-backed drafts in copy bank Publishable tease.',
    successCriteria:
      'Two distinct tease angles; carousel readable on mobile; no product name.',
    why: 'Expands Promised Land with proof-of-vision copy.',
  },
  'mn-promised-chrome-06': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Promised Land local refuge (product-backed tease).**\n1. Set linearId.\n2. **Pull [[REFUGE_DATA_BRIEF|copy bank Draft A: Local refuge]]** or [[REFUGE_BRIEF|Product-backed promises Pillar 1]].\n3. Beats (REFUGE voice, **no Oasis**):\n• Tabs, bookmarks, history stay **on your machine**\n• Memory/search serve **your work**, not an ad profile\n• Privacy-first engine = **fewer** cross-site tracker bites, not zero ads\n4. Source for internal review: `docs/marketing/oasis-your-data-and-training.md` Your browsing stays on your device.\n5. **Do not** claim “zero tracking” or sell browsing history.\n6. Handoff: [[mn-promised-chrome-07|assistant on your terms]] → [[mn-gifts-chrome-02|Magic gifts Gift 2 proof]].',
    alreadyDone:
      '[[REFUGE_DATA_BRIEF|data doc]] + copy bank Publishable tease Draft A.',
    successCriteria:
      'REFUGE-named tease only; reader understands on-device browsing promise; no Oasis in publish.',
    why: 'Promised Land: credible Promised Land: local browse promise.',
  },
  'mn-promised-chrome-07': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Promised Land assistant on your terms (product-backed tease).**\n1. Set linearId.\n2. **Pull [[REFUGE_DATA_BRIEF|copy bank Draft B: Assistant on your terms]]** or Pillar 2.\n3. Beats (REFUGE voice, **no Oasis**):\n• Sidebar AI helps workflow; **personalization off by default**\n• Improvement logs **not tied to your identity** unless you opt in\n• **Anonymous ≠ zero data**, network AI still answers; no account linkage by default\n4. Source: `docs/marketing/oasis-your-data-and-training.md` What Oasis collects.\n5. **Do not** claim Oasis blocks Gemini-in-Chrome, that is Magic gifts Gift 2 boundary.\n6. Close: “Proof in the gifts we ship next” → [[mn-gifts-chrome-02|Gift 2]]. Legal review before any comparative Chrome line.',
    alreadyDone:
      'Copy bank guardrails table + data doc Anonymous by default.',
    successCriteria:
      'Honest boundaries land; no “zero data”; REFUGE only; links forward to Magic gifts without duplicating Gift 2 post.',
    why: 'Promised Land: Promised Land: assistant default-off promise.',
  },
  'mn-promised-chrome-05': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Present evidence Oasis launch taglines** ([[OASIS_LIFE_BRIEF|tagline bank]] in copy bank, not in Checklist · Present evidence intro).\n1. Set linearId.\n2. Poll or A/B post: use these lines verbatim:\n• A browser learning how you flow!\n• Your web. Your data. Your Oasis.\n• A browser that works for you, not against you.\n• No selling. No profiling. No compromise.\n• Oasis - Where Privacy isn’t a Feature but a Foundation\n• Your Oasis - Sync with your habits, Tuned to your rhythms\n\n3. **Do not** use “Your browser works for Google…” in the same poll unless testing Brief 01 hook separately ([[PH_BRIEF|Brief 01]]).\n4. Ask audience which line should anchor PH hero subcopy.\n5. Square creative: max 2 lines overlay if pairing with [[mn-ph-chrome-02|split-screen]] or [[mn-ph-chrome-06|PH header]].',
    alreadyDone:
      'Tagline bank in `docs/b2c-oasis-life-evidence-copy.md`.',
    successCriteria:
      'All six Oasis lines posted; engagement data captured for comms; winner feeds PH hero subcopy.',
    why: 'Story Framework · Present evidence: validates launch taglines before May 27 PH.',
  },
  'mn-evidence-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Present evidence Oasis of Life poem.**\n1. Set linearId.\n2. Publish **verbatim** poem from [[OASIS_LIFE_BRIEF|copy bank]] or checklist **Read Oasis of Life (full poem)** modal, not the Present evidence two-paragraph story.\n3. Present evidence intro shows **story** (conclusion to [[mn-change-chrome-01|Name the change Ad Nauseam]]); opens with lived Ad Nauseam → “Relax, you found the Oasis.”\n4. **Carousel:** one stanza per slide (suggested breaks after “spread”, after “warm”, after “An Oasis for Life”, final slide “An Oasis for You”).\n5. **Thread:** same breaks; optional mood keywords on slide 1: Creative Flow, Zen, Austere, Serene, Tranquil.\n6. **Long post:** full poem + 1-line CTA to [[PRODUCT_HUNT|Product Hunt]] when live.\n7. Max 2 lines overlay on square creative if pairing with [[mn-ph-chrome-02|split-screen]].\n8. Poem is brand voice, not a factual product claim; legal review if pairing with privacy stats.',
    alreadyDone:
      'Verbatim poem in modal + copy bank; two-paragraph story in Checklist · Present evidence intro.',
    successCriteria:
      'Poem published in chosen format; line breaks match copy bank; engagement captured.',
    why: 'Story Framework · Present evidence: emotional evidence the Promised Land is real.',
  },
  'mn-evidence-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Present evidence Lena user story.**\n1. Set linearId.\n2. Title: **Oasis: An Organized Way to Browse**: publish verbatim from [[OASIS_LIFE_BRIEF|copy bank Lena]] (not in Checklist · Present evidence intro).\n3. Use Checklist · Present evidence **Oasis in action** gallery or add **tab group screenshot** (product-approved) after “neatly arranged into tab groups” paragraph.\n4. Channel: LinkedIn long post, blog, or PH launch story companion, not REFUGE tease channels.\n5. **Legal:** confirm tab group grouping + instant search claims before publish; no “zero clutter” unless approved.\n6. Optional close: link [[mn-evidence-chrome-01|Chrome privacy hub]] for readers who need receipts.',
    alreadyDone:
      'Full Lena story + gallery paths in `docs/b2c-oasis-life-evidence-copy.md`.',
    successCriteria:
      'Story live with approved product visuals; tab group/search claims verified.',
    why: 'Story Framework · Present evidence: product proof through narrative, not spec sheet.',
  },
  'mn-evidence-chrome-05': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Present evidence creative mood brief (internal).**\n1. Set linearId.\n2. One-pager for design + video: mood keywords from [[OASIS_LIFE_BRIEF|copy bank]]:\n**Creative Flow, Zen, Austere, Serene, Tranquil**\n3. Map to assets:\n• [[mn-ph-chrome-06|PH header]]: right half: spacious, uncluttered, soft light; left: noisy/dark Chrome world\n• [[mn-ph-chrome-07|PH video]]: Promised Land (Oasis): calm UI, no frantic scroll; optional poem line “No frantic search, no anxious scroll” as subtitle only if legal approves\n• [[mn-evidence-chrome-03|poem carousel]]: austere typography, serene palette\n4. Share with leads before production lock.\n5. Cross-link [[PH_BRIEF|Brief 01]] binary contrast (Working for Google / Working for you).',
    alreadyDone:
      'Mood keywords in [[OASIS_LIFE_BRIEF|copy bank]]; Present evidence checklist intro is story-only.',
    successCriteria:
      'Design + video leads sign off on mood one-pager; PH header/video reflect Zen/Serene right half.',
    why: 'Story Framework · Present evidence: aligns launch evidence assets with Oasis of Life voice.',
  },
  'mn-gifts-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Magic gifts reframe (product gap).**\n1. Set linearId.\n2. Optional preamble: [[MAGIC_GIFTS_BRIEF|copy bank Preamble]] (Spine #0, not ad-funded / free forever) if post needs structural frame.\n3. **Pull from [[MAGIC_GIFTS_BRIEF|copy bank mn-gifts-chrome-01]]**: mapping row 1 is **gap**; no standalone “we keep contacts out of profile” gift.\n4. Obstacle: Chrome **contact + financial** categories ([[mn-winners-chrome-02|evidence post]]).\n5. **Reframe:** Assistant telemetry is a **separate control** (Personalize the assistant **off** by default); governs assistant `llm_usage`, not Chrome’s 8-category model. Settings UI footnote in copy bank.\n6. **Legal review required** before comparative Chrome vs this browser lines.\n7. One obstacle; honest boundary, not a false product button.',
    alreadyDone:
      '[[MAGIC_GIFTS_BRIEF|copy bank]] + [[PRODUCT_CAPABILITY_INDEX|v1.0.0.12]] mapping; privacy brief.',
    successCriteria:
      'Reader gets honest compare + assistant boundary; no unapproved Chrome claim; legal flag cleared.',
    why: 'Magic gifts: reframe row 1 (contacts gap).',
  },
  'mn-gifts-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Magic gifts shipped gift.**\n1. Set linearId.\n2. **Pull from [[MAGIC_GIFTS_BRIEF|copy bank mn-gifts-chrome-02]]** + mapping row 2 + [[REFUGE_DATA_BRIEF|Promised Land promises]] (Pillar 2).\n3. **Open with You use…** (see copy bank draft): e.g. “You use the assistant … without opting into a linked pipeline on day one.”\n4. Deliver Promised Land promise: [[mn-promised-chrome-07|assistant tease]] → Magic gifts proof (no product name Oasis in post).\n5. Obstacle: **Gemini-in-Chrome** linked telemetry ([[mn-change-chrome-03|Name the change structural]]).\n6. **Gift (factual):** **52 tools**; **Personalize the assistant with my account** **unchecked by default** ([[PRODUCT_CAPABILITY_INDEX|product index]]).\n7. **Do not** claim this browser blocks Gemini-in-Chrome or “zero” logging; anonymous mode still sends prompt/response/tab context.\n8. Old world → new world; one command CTA. One gift only.',
    alreadyDone:
      'docs/product/privacy-data-and-telemetry.md + ai-assistant.md; copy bank draft.',
    successCriteria:
      'Reader sees AI workflow value + default-off personalization; no false Gemini block claim.',
    why: 'Magic gifts: assistant vs default linked pipeline.',
  },
  'mn-gifts-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Magic gifts partial gift (ETP).**\n1. Set linearId.\n2. **Pull from [[MAGIC_GIFTS_BRIEF|copy bank mn-gifts-chrome-03]]**: mapping row 3 **shipped-partial**.\n3. **Open with You use Enhanced Tracking Protection (built on Firefox) to…** per copy bank.\n4. Obstacle: search once → ads follow (Ad Nauseam).\n5. **Gift:** Firefox **ETP** + refuge profile defaults; **fewer** tracker bites, ads may still appear.\n6. **Do not** claim zero ads, zero retargeting, or “this browser invented ETP.”\n7. Optional CTA toward [[mn-ph-chrome-07|PH video]]. One gift only.',
    alreadyDone:
      'docs/product/browser-privacy-security.md; copy bank draft.',
    successCriteria:
      'Honest partial framing; ETP attributed to Firefox; reader not promised ad-free internet.',
    why: 'Magic gifts: tracking protection gift.',
  },
  'mn-gifts-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Magic gifts workflow gift.**\n1. Set linearId.\n2. **Pull from [[MAGIC_GIFTS_BRIEF|copy bank mn-gifts-chrome-04]]**: rows 4–5 **shipped / partial**.\n3. **Open with You use…** (clarification → organize_windows / close_duplicate_tabs / summarize_page / search_memory).\n4. Obstacle: tab chaos + stolen deep work ([[mn-change-chrome-04|Name the change consequence]]).\n5. **Gift:** See [[PRODUCT_CAPABILITY_INDEX|ai-assistant doc]]; natural-language commands, not willpower.\n6. **Do not** claim cure for Ad Nauseam.\n7. One concrete CTA. One gift per post.',
    alreadyDone:
      'docs/product/ai-assistant.md; copy bank draft.',
    successCriteria:
      'Reader sees calm workflow path; expectations honest about partial deep-work help.',
    why: 'Magic gifts: tab calm / focus workflow.',
  },
  'mn-evidence-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. Update or republish [[CHROME_BLOG|Kahana Chrome 2025 post]] as hub page.\n3. Inline links: [[SURFSHARK_BROWSERS|Surfshark browsers]], [[SURFSHARK_GEMINI|Surfshark Gemini]], [[SECURITY_ORG|Security.org]], [[FORBES_VISITED|Forbes visited-link]], cookies [[PRIVACY_SANDBOX|Privacy Sandbox]].\n4. **Comms guardrails:** attribute third parties; Kahana is not independent research; no “Oasis collects nothing.”\n5. Optional: embed mosquito block from [[mn-winners-chrome-04|mosquito lines]].',
    alreadyDone:
      'Privacy brief consolidates all URLs; blog already exists.',
    successCriteria:
      'Every stat footnoted; legal/comms approved for publish.',
    why: 'Owned evidence anchor for B2C narrative.',
  },
  'mn-evidence-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. Publish internal or public bibliography listing:\n• [[CHROME_BLOG|Kahana Chrome 2025]]\n• [[SURFSHARK_BROWSERS|Surfshark mobile browsers]]\n• [[SURFSHARK_GEMINI|Surfshark Gemini + Chrome]]\n• [[SECURITY_ORG|Security.org big tech data]]\n• [[FORBES_TARGET|Forbes Target pregnancy 2012]]\n• [[FORBES_VISITED|Forbes visited-link Apr 2025]]\n• [[PRIVACY_SANDBOX|Privacy Sandbox cookies]]\n• [[DIDOMI_COOKIES|Didomi explainer]]\n• [[PH_BRIEF|Product Hunt Brief 01]] + [[PRODUCT_HUNT|Product Hunt]]\n3. Add PH deliverable matrix (header 1270×760, square 1080×1080, story 1080×1920, thumbnail 240×240), see [[mn-ph-chrome-08|format pack]].\n4. For comms/legal review only or public transparency page.',
    alreadyDone:
      'All URLs in `marketingNarrativeSections.js` constants; brief in data room `docs/product-hunt-brief-01-privacy-angle.md`.',
    successCriteria:
      'Single page marketers can hand to legal; no broken links; PH assets listed.',
    why: 'Centralizes source hygiene for Chrome + launch content.',
  },
  'mn-ph-chrome-01': {
    howTo:
      'Category: B2C Chrome privacy narrative: **Winners and losers bridge (recognition beat).**\n1. Set [[LINEAR|Linear]] linearId.\n2. **Bridge post** after [[mn-change-chrome-01|Name the change Ad Nauseam]] + [[mn-villain-chrome-02|Name the villain Chrome Colossus]], assume readers felt the drone and named the monoculture.\n3. Pivot line (adapt): “Ad Nauseam is the *feeling*. Chrome is the *environment*. Here’s the structural truth: **your browser works for Google.** Not metaphorically, for ads, profiles, and AI training. You’ve noticed it. The ad that follows the search. The feed that knows too much.”\n4. **No Oasis hard pitch**, no Product Hunt CTA yet. End with: “When did you first notice your browser wasn’t on your side?”\n5. Full hook + visuals: [[mn-ph-chrome-02|split-screen]] and [[PH_BRIEF|Brief 01]].\n6. Place in checklist **Winners and losers** after winner/loser narrative tasks (after [[mn-villain-chrome-05|Name the villain bridge]] optional).',
    alreadyDone:
      '[[AD_NAUSEAM_BRIEF|Name the change copy bank]]; [[CHROME_VILLAIN_BRIEF|Name the villain copy bank]]; [[PH_BRIEF|Brief 01]] in data room.',
    successCriteria:
      'Reader moves from Name the change and Name the villain to recognition; no Oasis/PH CTA in post body.',
    why: 'Winners and losers: recognition before Promised Land and PH launch assets.',
  },
  'mn-ph-chrome-02': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **1080×1080** split-screen per [[PH_BRIEF|Brief 01]]:\n• **Left (stay on default):** Chrome logo + data icons; mosquito / cognition-tax / hollow-husk mood from [[WINNERS_LOSERS_BRIEF|Winners and losers]]. Label: **Working for Google.**\n• **Right (quiet rebel):** Oasis logo, calm, no tracker clutter. Label: **Working for you.**\n3. Overlay tagline (max 2 lines): **Your browser works for Google. Ours works for you.**\n4. Oasis logo bottom right; brand colors on Oasis side.\n5. Optional: pull 1–2 lines from [[mn-winners-chrome-04|evidence block]] for left-side caption; creative brief refs [[mn-winners-chrome-05|quiet rebels]] / [[mn-winners-chrome-07|stay on default]] posts.',
    alreadyDone:
      'Visual spec in `docs/product-hunt-brief-01-privacy-angle.md`.',
    successCriteria:
      'Contrast readable at feed size; tagline legible; labels match Brief 01 exactly.',
    why: 'Story Framework · Winners and losers: loser/winner futures in one frame.',
  },
  'mn-ph-chrome-03': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. Pair [[mn-ph-chrome-02|split-screen]] with this caption (from [[PH_BRIEF|Brief 01]]):\n\n“You searched for it once. It followed you for a week. That is not a coincidence. That is your browser working for Google. Oasis works for you. Link in bio.”\n\n3. Shorten for Twitter if needed; keep binary contrast.\n4. Link in bio → [[PRODUCT_HUNT|Product Hunt]] when live.\n5. Tone: direct, no jargon.',
    alreadyDone:
      'Caption in brief doc COPY DIRECTION: SOCIAL CAPTION.',
    successCriteria:
      'Caption + visual ship together; under 280 chars if posting to X from same copy.',
    why: 'Distribution-ready social for PH ramp.',
  },
  'mn-ph-chrome-04': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. Produce **two drafts**: do not mix them in one publish.\n\n**Draft A: REFUGE tease (pre-launch, no Oasis):**\n“Every search in Chrome is a data point. Every click. Every private moment you looked up. You already feel it, that is Ad Nauseam. Now imagine a browser built like a **refuge**: private by default, calm tabs, AI that helps without selling your attention. We call that vision **REFUGE**. It is not live on Product Hunt yet, this is the Promised Land we are building toward.”\n→ Use on LinkedIn/thread only. Link [[mn-promised-chrome-03|variant posts]].\n\n**Draft B: Oasis PH description (May 27, ≤150 words):**\nLead with problem from [[PH_BRIEF|Brief 01]], then pick/combine **Oasis launch paragraphs** from [[REFUGE_BRIEF|copy bank Launch reveal]] or [[REFUGE_DATA_BRIEF|Launch / Oasis channel block]]:\n\n“Every search you do in Chrome is a data point… We built **Oasis** because your browser should work for you and not for an ad network. [Oasis description B or C, legal-approved.] Try it free. Own your data.”\n\n3. **Legal:** no “zero tracking” unless approved on Draft B.\n4. Draft A: never say Oasis. Draft B: Oasis name required.\n5. Launch date: May 27, 2026.',
    alreadyDone:
      'REFUGE tease + Oasis launch blocks in `docs/b2c-refuge-promised-land-copy.md`; Brief 01 PH template.',
    successCriteria:
      'Two separate docs/files; Draft B ≤150 words with CTA; Draft A has zero Oasis mentions.',
    why: 'Promised Land tease vs launch-day Promised Land on PH.',
  },
  'mn-ph-chrome-05': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Internal doc (Notion/Google Doc), link from [[PH_BRIEF|Brief 01]] + [[AD_NAUSEAM_BRIEF|Name the change]] + [[REFUGE_BRIEF|REFUGE copy bank]] + [[WINNERS_LOSERS_BRIEF|Winners and losers]].\n2. **Emotion arc** for all PH creative:\n• **Villain (Name the change):** trap, seep-in, welts, mental RAM, bug zapper, forgot deep work ([[mn-change-chrome-01]]–[[mn-change-chrome-04]], [[AD_NAUSEAM_BRIEF|copy bank: structured beats]])\n• **Chrome Colossus (Name the villain):** monoculture, ad empire, antitrust, breach ([[mn-villain-chrome-01]]–[[mn-villain-chrome-04]], [[CHROME_VILLAIN_BRIEF|copy bank]])\n• **Quiet rebels vs stay on default (Winners and losers):** ([[mn-winners-chrome-05]]–[[mn-winners-chrome-07]])\n• **Loser arc / evidence (Winners and losers):** ([[mn-winners-chrome-09]], [[mn-winners-chrome-04|stat block]])\n• **Winner payoff (Winners and losers):** ([[mn-winners-chrome-08]])\n• **Recognition (Winners and losers):** browser serves Google ([[mn-ph-chrome-01|bridge]], [[mn-ph-chrome-02|split-screen]])\n• **Imagine relief (Promised Land):** REFUGE tease ([[mn-promised-chrome-01]]–[[mn-promised-chrome-07]]; local browse + assistant-on-your-terms per [[REFUGE_DATA_BRIEF|data promises]], no Oasis name in social)\n• **Gifts (Magic gifts):** shipped AI default-off ([[mn-gifts-chrome-02]]); partial ETP ([[mn-gifts-chrome-03]]); workflow calm ([[mn-gifts-chrome-04]]); reframe contacts gap ([[mn-gifts-chrome-01]]): [[MAGIC_GIFTS_BRIEF|mapping v1.0.0.12]]\n• **Conclusion (Present evidence):** “Relax, you found the Oasis.” ([[OASIS_LIFE_BRIEF|Checklist · Present evidence intro]])\n• **Reveal (launch only):** Oasis + Brief 01 hook on PH May 27\n3. Share with design + video before [[mn-ph-chrome-06|header]], [[mn-ph-chrome-07|video]], [[mn-ph-chrome-08|formats]].\n4. Clarify: REFUGE = pre-launch codename; Oasis = public name on PH assets only.',
    alreadyDone:
      'Emotion spec in `docs/product-hunt-brief-01-privacy-angle.md` EMOTION TO TRIGGER.',
    successCriteria:
      'Design/video leads confirm they read arc before producing assets.',
    why: 'Keeps PH campaign tonally consistent.',
  },
  'mn-ph-chrome-06': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **1270×760** PH header per [[PH_BRIEF|Brief 01]]:\n• Left half: dark/muted, noise, data, surveillance (Chrome’s world).\n• Right half: clean/bright. Oasis logo centered, calm/private: apply mood from [[mn-evidence-chrome-05|creative brief]] / [[OASIS_LIFE_BRIEF|Zen, Serene, Tranquil, Austere]].\n• Tagline under logo: **Your browser works for Google. Ours works for you.**\n3. Headline min **36px** at thumbnail scale test; logo min **120px** wide.\n4. Brand font + colors per brand guide.\n5. Legal review on any product claims in subcopy (if any).',
    alreadyDone:
      'Dimensions in brief doc; mood keywords in [[OASIS_LIFE_BRIEF|Oasis of Life copy bank]].',
    successCriteria:
      'Readable at PH thumbnail size; matches Brief 01 layout.',
    why: 'Story Framework · Magic gifts: hero gift visual for launch page.',
  },
  'mn-ph-chrome-07': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. **15–30s** beat sheet ([[PH_BRIEF|Brief 01]]):\n1) Personal search (health / salary / relationship).\n2) Ads everywhere, email, social, news, same topic.\n3) On-screen: **Your browser just watched that.**\n4) Same person in Oasis, clean feed, nothing follows; visual tone: **Serene, Tranquil** per [[mn-evidence-chrome-05|mood brief]] / [[OASIS_LIFE_BRIEF|copy bank]].\n5) On-screen: **Your browser works for Google. Ours works for you.**\n6) End card: Oasis logo + **Now on Product Hunt** + URL.\n3. Text-only OK (no VO required); subtitles if audio.\n4. **Legal:** do not show false “zero ads” claim; show *less follow-you* narrative per approved messaging.\n5. Export 1080×1920 and/or 1920×1080 per channel.',
    alreadyDone:
      'Video concept in brief doc; mood + poem in [[OASIS_LIFE_BRIEF|Oasis of Life copy bank]].',
    successCriteria:
      'All six beats present; end card has PH URL; legal approved.',
    why: 'Story Framework · Magic gifts: product proof in motion.',
  },
  'mn-ph-chrome-08': {
    howTo:
      'Category: B2C Chrome privacy narrative.\n1. Set linearId.\n2. Produce remaining formats from [[PH_BRIEF|Brief 01]]:\n• **Story/Reel:** 1080×1920: vertical split, text stacked, logo bottom center.\n• **PH thumbnail:** 240×240: Oasis logo only, brand background, **no text**.\n3. Checklist (tick when done):\n☐ Header 1270×760 [[mn-ph-chrome-06|header]]\n☐ Square 1080×1080 [[mn-ph-chrome-02|square]]\n☐ Story 1080×1920\n☐ Video [[mn-ph-chrome-07|video]]\n☐ Thumbnail 240×240\n☐ PH description [[mn-ph-chrome-04|copy]]\n4. Hand completed pack to comms for [[PRODUCT_HUNT|Product Hunt]] upload.',
    alreadyDone:
      'Full matrix in `docs/product-hunt-brief-01-privacy-angle.md` DELIVERABLES.',
    successCriteria:
      'All five format types accounted for; thumbnail works at 240px.',
    why: 'Story Framework · Present evidence: launch-ready evidence pack.',
  },
}

for (const taskId of Object.keys(INSTRUCTION_DELIVERABLES)) {
  if (INSTRUCTIONS[taskId]) {
    INSTRUCTIONS[taskId].deliverable = INSTRUCTION_DELIVERABLES[taskId]
  }
}
