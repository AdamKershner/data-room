/**
 * Marketing Narrative Checklist – B2C and B2B categories, each with five Story Framework beats.
 * Add tasks under the matching category + section in `NARRATIVE_CATEGORIES`.
 *
 * @typedef {object} MarketingNarrativeTask
 * @property {string} id – Stable for localStorage (do not rename once published)
 * @property {string} label – Short refs/links; shown below essence when present
 * @property {string} [channel] – Taxonomy key (see marketingNarrativeDeliverableTaxonomy.js)
 * @property {string[]} [channels] – When channel is Multi
 * @property {string} [format] – Deliverable format taxonomy key
 * @property {string} [essence] – "Imagine…" creative brief for the list row
 * @property {string} [linearId]
 * @property {string} [linearUrl]
 */


import { kahanaUrl } from '../constants/kahanaSite'

/** Kahana workspace on Linear */
export const LINEAR_WORKSPACE = 'kahana'
export const LINEAR_TEAM_KEY = 'KAH'
export const LINEAR_ALL_ISSUES_URL = `https://linear.app/${LINEAR_WORKSPACE}/team/${LINEAR_TEAM_KEY}/all`

export const STORY_FRAMEWORK_ARTICLE_URL =
  'https://medium.com/the-mission/the-greatest-sales-deck-ive-ever-seen-4f4ef3391ba0'

/** Tally: suggest content ideas (checklist feedback on every task row) */
export const TALLY_SUGGEST_IDEAS_URL = 'https://tally.so/r/Xx8PWO'
export const TALLY_SUGGEST_IDEAS_EMBED_BASE = 'https://tally.so/embed/Xx8PWO'

/** B2B: AI-in-Browser Data Protection Consortium / data leakage */
export const CONSORTIUM_PAGE_URL = kahanaUrl('/data-leakage-consortium')
export const IBM_BREACH_REPORT_HUB_URL = 'https://www.ibm.com/reports/data-breach'
export const IBM_BREACH_REPORT_2025_DOWNLOAD_URL =
  'https://www.ibm.com/downloads/documents/us-en/131cf87b20b31c91'

/** B2C: Chrome privacy / data collection */
export const CHROME_PRIVACY_BLOG_URL =
  kahanaUrl('/blog/google-chrome-data-collection-advertising-practices-2025')
export const SURFSHARK_MOBILE_BROWSERS_URL =
  'https://surfshark.com/research/chart/data-collection-mobile-browsers'
export const SURFSHARK_GEMINI_CHROME_URL =
  'https://surfshark.com/research/chart/gemini-chrome-user-data-collection'
export const SECURITY_ORG_BIG_TECH_URL =
  'https://www.security.org/resources/data-tech-companies-have/'
export const FORBES_VISITED_LINK_URL =
  'https://www.forbes.com/sites/zakdoffman/2025/04/15/google-confirms-secret-chrome-tracking-how-to-stop-it/'
export const FORBES_TARGET_PREGNANCY_URL =
  'https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/'
export const PRIVACY_SANDBOX_COOKIES_URL =
  'https://privacysandbox.google.com/blog/privacy-sandbox-next-steps'
export const DIDOMI_COOKIES_URL =
  'https://www.didomi.io/blog/google-chrome-third-party-cookies-april-2025'

/** B2C: Product Hunt launch (Brief 01: Privacy Angle) */
export const PH_PRIVACY_HOOK = 'Your browser works for Google. Ours works for you.'
export const PH_LAUNCH_DATE = '2026-05-27'
export const PH_LAUNCH_DATE_LABEL = 'May 27, 2026'
export const PRODUCT_HUNT_URL = 'https://www.producthunt.com/'
export const PH_BRIEF_DOC_PATH = 'docs/product-hunt-brief-01-privacy-angle.md'
export const PH_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#product-hunt-launch'

/** B2C: Promised Land tease (pre-launch); Oasis name reserved for PH launch assets */
export const REFUGE_CODENAME = 'REFUGE'
export const REFUGE_TEASE_DOC_PATH = 'docs/b2c-refuge-promised-land-copy.md'
export const REFUGE_IMAGINE_FRAME = 'Imagine a browser built like a refuge, not a billboard.'
export const REFUGE_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#refuge-promised-land'
export const REFUGE_DATA_PROMISE_ANCHOR = '/b2c-strategic-narrative#refuge-data-promises'

/** B2C: Data & training product story (Promised Land promises source) */
export const OASIS_DATA_TRAINING_DOC_PATH = 'docs/marketing/oasis-your-data-and-training.md'

/** Checklist · Promised Land intro: REFUGE tease (four paragraphs); synced with copy bank */
export const B2C_REFUGE_SECTION_INTRO = `Imagine a refuge built for people exhausted by noisy tabs, distracting feeds, and software that constantly demands attention. A calmer way to move online, private by default, elegant by design, powered by intelligence that helps without getting in the way. The more you live inside it, the more it understands what matters to you.

Most of what you use today competes for your attention. A refuge should protect it. Privacy first. Clean, focused, intelligently adaptive. You move faster without being overwhelmed, while your data remains fully yours, always.

We believe the internet should feel like clarity, not chaos. A refuge that combines privacy, elegant design, and personal intelligence, something that adapts to you over time, remembers what matters, removes friction, and helps you stay in flow without compromising ownership of your data.

Imagine a refuge where your browsing history helps you on your machine, not a profile auctioned to advertisers. Imagine help in the sidebar that improves the product without tying every prompt to your identity unless you choose that.`

/** B2C: Oasis of Life evidence & launch voice (Present evidence) */
export const OASIS_MOOD_KEYWORDS = 'Creative Flow, Zen, Austere, Serene, Tranquil'
export const OASIS_LIFE_DOC_PATH = 'docs/b2c-oasis-life-evidence-copy.md'
export const OASIS_LIFE_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#oasis-of-life'

/** Verbatim poem: modal + copy bank; not inlined in Checklist · Present evidence intro */
export const OASIS_OF_LIFE_POEM = `There is a stillness, I don't know of,
A quietness that's unheard of until now.
A peaceful resting space, uncluttered,
Hushed, untouched, serene and bare,
A hub of all hubs.
Not one tangled thread,
An open sky with a vision to spread

Let those restless minds pause,
Let us gather those thoughts
Let us go to that place so calm,
Let us give away something very warm

Walls unconfined, a vastness to explore,
Gentle cool waves on the shore,
That is what calls you,
To be so true,
An Oasis of Life
An Oasis for Life

Your pages rest in soothing streams,
Tranquil light, distilled in beams
No frantic search, no anxious scroll,
No one is there to troll
You got the space to breathe, to see what is whole
An Oasis for You`

/** Two-paragraph story for Checklist · Present evidence intro: conclusion to Name the change Ad Nauseam */
export const OASIS_OF_LIFE_STORY = `You lived through the Rise of Ad Nauseam: the ad that followed the search, the feed that already knew, the browser working for someone else's business, not yours. Then the noise thinned. Relax, you found the Oasis: a stillness you didn't know you were missing, a peaceful uncluttered place.

Here, restless minds pause. Thoughts gather. Walls feel unconfined; gentle waves on the shore call you to what's true, an Oasis of Life, an Oasis for Life. Your pages rest in soothing streams; tranquil light, distilled in beams. No frantic search, no anxious scroll, no one there to troll. You have room to breathe, to see what's whole, an Oasis for you.`

/** @deprecated Use OASIS_OF_LIFE_STORY: kept for any external imports */
export const OASIS_OF_LIFE_POEM_PARAPHRASE = OASIS_OF_LIFE_STORY

/** Checklist · Present evidence intro: story only; ops framing lives in [[OASIS_LIFE_BRIEF|copy bank]] */
export const B2C_EVIDENCE_SECTION_INTRO = OASIS_OF_LIFE_STORY

/** B2C: Overall narrative spine (story without features; Magic gifts gift gap) */
export const B2C_NARRATIVE_SPINE_PATH = 'docs/b2c-narrative-spine.md'
export const B2C_NARRATIVE_SPINE_ANCHOR = '/b2c-strategic-narrative#narrative-spine'

/** B2C: Chrome Colossus villain Name the villain (structural) */
export const CHROME_VILLAIN_DOC_PATH = 'docs/b2c-chrome-villain-copy.md'
export const CHROME_VILLAIN_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#chrome-villain'

/** Checklist · Name the villain intro: structural villain (three paragraphs); ops links in copy bank */
export const B2C_CHROME_VILLAIN_SECTION_INTRO = `Chrome’s rise is a villain origin story, not a product review. In 2008 it arrived as the fast, simple browser, bundled with Search, Gmail, and YouTube until “download once” became the default for a generation. By the mid-2010s it pulled away from Internet Explorer; by 2026 roughly seven in ten global browser users see the web through Chrome while Firefox hovers near ~2%, a privacy-friendly rival faded into the margins. The portal to the open web stopped being a competitive market; it became a Chrome monoculture that sets the rules for how most people work online.

That lens is not neutral. Chrome is the front door to Google’s ad stack: searches, visits, and viewing stitched into one identity graph. The majority of Alphabet’s revenue still comes from advertising; open-web ad-tech alone is tens of billions a year. With that much money in targeting, the incentive is to increase precision, volume, and ad load, to mine every last drop of attention and data from every scroll, click, and pause.

The state is starting to name the villain too. In 2025 the U.S. Department of Justice won a landmark case holding Google illegally monopolized open-web digital advertising markets; remedies could force divestitures in ad-tech. Meanwhile breaches like the June 2025 Google Ads customer-data incident (~2.5M business records) show how concentrated ad infrastructure becomes a concentrated target. The colossus is the environment Ad Nauseam breathes in, while some treat it as backdrop, others are learning to treat the swarm as an attack surface worth defending against.`

/** B2C: Magic gifts Magic gifts (product-aligned) */
export const MAGIC_GIFTS_DOC_PATH = 'docs/b2c-magic-gifts-copy.md'
export const MAGIC_GIFTS_MAPPING_PATH = 'docs/marketing/b2c-magical-gifts-mapping.md'
export const PRODUCT_CAPABILITY_INDEX_PATH = 'docs/product/oasis-capability-index.md'
export const MAGIC_GIFTS_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#magic-gifts'

/** Checklist · Magic gifts intro: magic gifts story (five paragraphs); ops links in copy bank */
export const B2C_MAGIC_GIFTS_SECTION_INTRO = `You imagined a refuge, a browser that protects attention instead of auctioning it. Ad Nauseam does not vanish because you pictured something better. The air is still thick with the drone, the mosquitoes, the tab that became a trap. Magic gifts are the observable steps off that path: each one removes one obstacle on the way to the Promised Land, not willpower lectures, not a feature dump. One pain, one gift, one old world → new world.

This refuge is not built on an ads business. We are not here to auction your attention to the highest bidder like the Chrome colossus behind the ad machine. It is free forever: the product wins when it makes you more productive, faster work, fewer interruptions, better outcomes, not when it sells more impressions.

You browse with Enhanced Tracking Protection on, built on Firefox, always on guard. Cross-site trackers and follow-you stitching thin out; ads may still appear, and we say so. You stop fighting the swarm in your head and start noticing your own ideas again.

You use clarification to confirm what you meant before the browser acts. You say "Group my research tabs" and the assistant organizes windows for you. You use close duplicate tabs, summarize page, and search memory to finish the work you opened the browser for, not twenty tabs later. You run the browser in natural language.

You thumbs-up a reply to train the assistant and choose anonymous training so feedback sharpens workflows without tying every correction to your account. You leave Personalize the assistant with my account off by default: help in the sidebar without opting into a linked pipeline on day one. Over time you fall in love with an assistant that understands how you speak, learns from your choices when you allow it, and becomes the reason this browser feels like yours: familiar, capable, and yours alone, without giving away what makes you, you.`

/** B2C: Ad Nauseam / Name the change (Name the change) */
export const AD_NAUSEAM_DOC_PATH = 'docs/b2c-ad-nauseam-change-copy.md'
export const AD_NAUSEAM_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#ad-nauseam-change'

/** Checklist · Name the change intro: villain narrative; no Product Hunt in this section */
export const B2C_CHANGE_SECTION_INTRO = `It is 2026, and we are in the thick of the Rise of Ad Nauseam. The browser used to be a portal to the vast universe of the internet, a tool for work, research, and the projects you cared about. That is the change we are naming: not that you are careless online, but that the default experience rewired itself while we were still mourning the old one.

The villain is not a single ad; it is Ad Nauseam itself. The tab you opened for work becomes a trap: every scroll, click, and pause logged and auctioned. This does not kick down the door; it seeps in: one more pre-roll, one more sidebar, one more “personalized” shoe. Big-tech mosquitoes sip your data while you scroll until the feed feels less like a window and more like a trap.

You cannot get a real breath for authentic deep work, the research paper, the company you are building, the writing project. Your mental RAM goes to ignoring instead of creating. You walk toward the browser like a bug zapper: booby-trapped corridors of billboards on every path to focus. You forgot what clarity felt like outside Ad Nauseam.

We are not inventing how far this goes. In 2012, [[FORBES_TARGET|Target knew a teen was pregnant before her father did]]: prediction and profiling before the browser became everyone's daily dashboard. That is the world we are living in now.

Below are real Ad Nauseam moments readers shared in May 2026.

Behind the monoculture stands a colossus, and a fork between those who endure Ad Nauseam and those who refuse to fund it with their attention.`

/** B2C: Winners and Losers (Winners and losers) */
export const WINNERS_LOSERS_DOC_PATH = 'docs/b2c-winners-losers-copy.md'
export const WINNERS_LOSERS_FRAMEWORK_SOURCE_PATH =
  'in the context of a narrative story framework with.md'
export const WINNERS_LOSERS_STRATEGIC_NARRATIVE_ANCHOR = '/b2c-strategic-narrative#winners-losers'

/** Checklist · Winners and losers intro: three beats after Name the change and Name the villain (quiet rebels → default → stakes) */
export const B2C_WINNERS_LOSERS_SECTION_INTRO = `Winners stop treating Ad Nauseam as background radiation and start treating the swarm as an attack surface. They are the quiet rebels: they notice when the internet feels like a rigged casino, they budget attention like money, they reduce their tracking surface, and they choose tools that do not live on surveillance. Mosquitoes only win when you keep sitting outside without a net.

Losers are not stupid; they stay on default. They tell themselves that is just how the internet works, pay a cognition tax on every task, and leave every switch on. Big-tech mosquitoes sip while they scroll until they are a hollow husk; time stretches thin, then ad after ad; identity splinters until nothing sacred is left to hold for themselves.

Over time, losers feel numbness instead of outrage: the swarm feels inevitable. Winners regain headspace and agency; losers become background to someone else’s optimization story. The fork is not blame; it is whether you act before the default browser finishes selling you out.`

/** @deprecated Paragraph 2 of Winners and losers intro: use B2C_WINNERS_LOSERS_SECTION_INTRO */
export const B2C_WINNERS_LOSERS_LOSER_STORY = `Losers are not stupid; they stay on default. They tell themselves that is just how the internet works, pay a cognition tax on every task, and leave every switch on. Big-tech mosquitoes sip while they scroll until they are a hollow husk; time stretches thin, then ad after ad; identity splinters until nothing sacred is left to hold for themselves.`

/** @deprecated Paragraph 1 of Winners and losers intro: use B2C_WINNERS_LOSERS_SECTION_INTRO */
export const B2C_WINNERS_LOSERS_WINNER_STORY = `Winners stop treating Ad Nauseam as background radiation and start treating the swarm as an attack surface. They are the quiet rebels: they notice when the internet feels like a rigged casino, they budget attention like money, they reduce their tracking surface, and they choose tools that do not live on surveillance.`

/** B2C format proposals: carousel, short-form, animation, poll, blog per section */
export const B2C_FORMAT_CONTENT_PLAYBOOK_PATH = 'docs/marketing/b2c-format-content-playbook.md'

/** Generic Andy Raskin stage guide (pedagogy; not publishable copy) */
export const STORY_FRAMEWORK_STAGE_GUIDE_PATH = 'docs/marketing/story-framework-stage-guide.md'
/** @deprecated Use STORY_FRAMEWORK_STAGE_GUIDE_PATH */
export const B2C_STORY_FRAMEWORK_STAGE_GUIDE_PATH = STORY_FRAMEWORK_STAGE_GUIDE_PATH
export const STORY_FRAMEWORK_STAGE_GUIDE_ANCHOR = '/b2c-strategic-narrative#story-framework-stages'
/** @deprecated Use STORY_FRAMEWORK_STAGE_GUIDE_ANCHOR */
export const B2C_STORY_FRAMEWORK_STAGE_GUIDE_ANCHOR = STORY_FRAMEWORK_STAGE_GUIDE_ANCHOR

/** Name the change: framework callout (synced with story-framework-stage-guide.md) */
export const STORY_FRAMEWORK_BEAT_1 = `Beat: Name a big, relevant change in the world.

You are not selling yet. You name a shift the audience already lives inside. The old playbook is over.

Audience: They feel friction but may blame themselves; they need "the world changed" before "I failed."

Effect: Recognition and urgency: validation before prescription.

Belongs: Macro shift, lived pain, metaphor, one proof point max. Save for later: villain depth, the fork, promised land, magic gifts, evidence.

Ideation: What changed that everyone feels but few name? When did the old way stop working for you?

Prefer real community stories (End of Privacy, May 2026) when you have them, not invented vignettes.`

/** Name the villain: framework callout */
export const STORY_FRAMEWORK_BEAT_2 = `Beat: Name the villain. Personify antagonist; show motive and scale.

If the change stage held lived pain, use the villain stage for systemic proof: business model, structure, incentives, with sources.

Audience: Skeptical but engaged; wants evidence, not slogans.

Effect: Clarity about the system, not "buy now."

Belongs: Personified antagonist, stats, motive. Save for later: winners and losers, promised land, magic gifts, evidence.

Ideation: Who profits from the status quo? What one stat makes the villain undeniable?`

/** Winners and losers: framework callout */
export const STORY_FRAMEWORK_BEAT_3 = `Beat: Show there'll be winners and losers: two futures; stakes without shame.

After problem and villain, show act vs wait. Loss aversion with empathy, not insults.

Audience: Tired but not hopeless; comparing adapters vs "staying on default."

Effect: Agency: "I could choose differently."

Belongs: Two-path stories, identity language, evidence + emotion. Save for later: full promised-land vision, product gifts, proof.

Ideation: What does default cost in a typical week? What small act of agency could you invite?`

/** Tease the Promised Land: framework callout */
export const STORY_FRAMEWORK_BEAT_4 = `Beat: Tease the Promised Land: imagine a better future before you prove it.

Hope they can picture: outcomes and principles, bounded promises, not a feature dump.

Audience: Burned out but willing to imagine relief; allergic to vaporware.

Effect: Desire and relief without premature hard sell.

Belongs: "Imagine…" posts, credible tease, contrast with pain. Save for later: magic gifts, launch evidence.

Ideation: "Imagine a world where ___" without naming your product. What must you qualify to stay honest?`

/** Magic gifts: framework callout */
export const STORY_FRAMEWORK_BEAT_5 = `Beat: Introduce features as "magic gifts": one obstacle removed per gift.

Concrete hope: one pain → one capability → old world → new world. Not a roadmap slide.

Audience: "What do I actually get?" comparing to incumbents.

Effect: Belief the future is reachable, one step at a time.

Belongs: One gift per post, honest limits, single CTA. Save for later: evidence, reopening the change beat.

Ideation: Write "You use [feature] to [outcome]." Start with business-model contrast (not ad-funded, free forever); end with assistant relationship. One gift per post; honest partial limits for ETP and anonymous modes.`

/** Present evidence: framework callout */
export const STORY_FRAMEWORK_BEAT_6 = `Beat: Present evidence the story is true: proof + emotional close.

Credibility after the arc: customers, data, demos, launch, not where you introduce the problem.

Audience: Ready for payoff; some need receipts, others belonging.

Effect: Trust: "this wasn't just marketing."

Belongs: Case studies, screenshots, third-party validation, launch assets. Save for later: new villain essays, unproven gift claims.

Ideation: What proof would convince you after the full arc? What single CTA matches the ending?`

export const PH_DELIVERABLES = {
  productHuntHeader: { width: 1270, height: 760, label: 'Product Hunt header' },
  socialSquare: { width: 1080, height: 1080, label: 'Social post (square)' },
  socialStory: { width: 1080, height: 1920, label: 'Social post (story/reel)' },
  video: { label: 'Short video (15–30 sec)', note: '1080×1920 Reel/TikTok or 1920×1080 YouTube/LinkedIn' },
  productHuntThumbnail: { width: 240, height: 240, label: 'Product Hunt thumbnail' },
}

export const CHROME_SOURCE_LINKS = {
  CHROME_BLOG: CHROME_PRIVACY_BLOG_URL,
  SURFSHARK_BROWSERS: SURFSHARK_MOBILE_BROWSERS_URL,
  SURFSHARK_GEMINI: SURFSHARK_GEMINI_CHROME_URL,
  SECURITY_ORG: SECURITY_ORG_BIG_TECH_URL,
  FORBES_VISITED: FORBES_VISITED_LINK_URL,
  FORBES_TARGET: FORBES_TARGET_PREGNANCY_URL,
  PRIVACY_SANDBOX: PRIVACY_SANDBOX_COOKIES_URL,
  DIDOMI_COOKIES: DIDOMI_COOKIES_URL,
  PRODUCT_HUNT: PRODUCT_HUNT_URL,
  PH_BRIEF: PH_STRATEGIC_NARRATIVE_ANCHOR,
  REFUGE_BRIEF: REFUGE_STRATEGIC_NARRATIVE_ANCHOR,
  REFUGE_DATA_BRIEF: REFUGE_DATA_PROMISE_ANCHOR,
  OASIS_LIFE_BRIEF: OASIS_LIFE_STRATEGIC_NARRATIVE_ANCHOR,
  WINNERS_LOSERS_BRIEF: WINNERS_LOSERS_STRATEGIC_NARRATIVE_ANCHOR,
  AD_NAUSEAM_BRIEF: AD_NAUSEAM_STRATEGIC_NARRATIVE_ANCHOR,
  B2C_NARRATIVE_SPINE: B2C_NARRATIVE_SPINE_ANCHOR,
  MAGIC_GIFTS_BRIEF: MAGIC_GIFTS_STRATEGIC_NARRATIVE_ANCHOR,
  PRODUCT_CAPABILITY_INDEX: MAGIC_GIFTS_STRATEGIC_NARRATIVE_ANCHOR,
  CHROME_VILLAIN_BRIEF: CHROME_VILLAIN_STRATEGIC_NARRATIVE_ANCHOR,
  STORY_FRAMEWORK_STAGE_GUIDE: STORY_FRAMEWORK_STAGE_GUIDE_ANCHOR,
}

export function linearIssueUrl(linearId, linearUrl) {
  if (linearUrl) return linearUrl
  if (!linearId) return null
  const id = String(linearId).trim().toUpperCase()
  if (!/^KAH-\d+$/i.test(id)) return null
  return `https://linear.app/${LINEAR_WORKSPACE}/issue/${id}`
}

const B2C_SECTIONS = [
  {
    id: 'change',
    number: 1,
    title: 'Name a big, relevant change in the world',
    frameworkCallout: STORY_FRAMEWORK_BEAT_1,
    intro: B2C_CHANGE_SECTION_INTRO,
    tasks: [],
  },
  {
    id: 'chrome-villain',
    number: 2,
    title: 'Name the villain (Chrome Colossus)',
    frameworkCallout: STORY_FRAMEWORK_BEAT_2,
    intro: B2C_CHROME_VILLAIN_SECTION_INTRO,
    tasks: [],
  },
  {
    id: 'winners-losers',
    number: 3,
    title: "Show there'll be winners and losers",
    frameworkCallout: STORY_FRAMEWORK_BEAT_3,
    intro: B2C_WINNERS_LOSERS_SECTION_INTRO,
    tasks: [],
  },
  {
    id: 'promised-land',
    number: 4,
    title: 'Tease the Promised Land',
    frameworkCallout: STORY_FRAMEWORK_BEAT_4,
    intro: B2C_REFUGE_SECTION_INTRO,
    tasks: [],
  },
  {
    id: 'magic-gifts',
    number: 5,
    title: 'Introduce features as “magic gifts”',
    frameworkCallout: STORY_FRAMEWORK_BEAT_5,
    intro: B2C_MAGIC_GIFTS_SECTION_INTRO,
    tasks: [],
  },
  {
    id: 'evidence',
    number: 6,
    title: 'Present evidence the story is true',
    frameworkCallout: STORY_FRAMEWORK_BEAT_6,
    intro: B2C_EVIDENCE_SECTION_INTRO,
    tasks: [],
  },
]

const B2B_SECTIONS = [
  {
    id: 'change',
    number: 1,
    title: 'Name a big, relevant change in the world',
    intro:
      'Name the shift, not “you have a problem.” IBM’s 2025 AI Oversight Gap: AI in the browser spread faster than governance, access discipline, and resilience. Security budgets after breaches are tightening: teams need measurable browser-layer controls, not another disconnected tool.',
    tasks: [],
  },
  {
    id: 'winners-losers',
    number: 2,
    title: "Show there'll be winners and losers",
    intro:
      'Frame data-leakage stakes as futures, not blame. Losers: shadow AI, DLP blind spots, governance lag, long breach recovery. Winners: browser-layer visibility, enforceable governance for prompts/uploads/extensions, measurable controls.',
    tasks: [],
  },
  {
    id: 'promised-land',
    number: 3,
    title: 'Tease the Promised Land',
    intro:
      'Before product details: security leaders close the oversight gap: AI usage in the browser is visible, governable, and safe via shared standards, browser-layer controls, and telemetry without stalling productivity.',
    tasks: [],
  },
  {
    id: 'magic-gifts',
    number: 4,
    title: 'Introduce features as “magic gifts”',
    intro:
      'Position enterprise capabilities as gifts that remove one obstacle on the path to governed browser AI, not a feature dump. Tie to consortium workstreams: shadow AI discovery, enforceable governance, complexity reduction.',
    tasks: [],
  },
  {
    id: 'evidence',
    number: 5,
    title: 'Present evidence the story is true',
    intro:
      'Proof the enterprise Promised Land is reachable: IBM 2025 attribution, consortium workstreams, and operator-led standards, not vanity metrics metrics.',
    tasks: [],
  },
]

export const NARRATIVE_CATEGORIES = [
  {
    id: 'b2c',
    title: 'B2C Narrative',
    tagline: 'Chrome privacy and switcher story: challenge Google Chrome as the default.',
    sourceDocs: [
      B2C_NARRATIVE_SPINE_PATH,
      STORY_FRAMEWORK_STAGE_GUIDE_PATH,
      B2C_FORMAT_CONTENT_PLAYBOOK_PATH,
      MAGIC_GIFTS_DOC_PATH,
      MAGIC_GIFTS_MAPPING_PATH,
      PRODUCT_CAPABILITY_INDEX_PATH,
      'can you focus on privacy and data collection conce.md',
      AD_NAUSEAM_DOC_PATH,
      CHROME_VILLAIN_DOC_PATH,
      PH_BRIEF_DOC_PATH,
      WINNERS_LOSERS_DOC_PATH,
      WINNERS_LOSERS_FRAMEWORK_SOURCE_PATH,
      REFUGE_TEASE_DOC_PATH,
      OASIS_DATA_TRAINING_DOC_PATH,
    ],
    strategicNarrativePath: '/b2c-strategic-narrative',
    strategicNarrativeLabel: 'B2C Strategic Narrative',
    productHuntBriefDoc: PH_BRIEF_DOC_PATH,
    productHuntHook: PH_PRIVACY_HOOK,
    productHuntLaunchDate: PH_LAUNCH_DATE,
    productHuntLaunchDateLabel: PH_LAUNCH_DATE_LABEL,
    refugeTeaseDoc: REFUGE_TEASE_DOC_PATH,
    refugeCodename: REFUGE_CODENAME,
    refugeImagineFrame: REFUGE_IMAGINE_FRAME,
    sections: B2C_SECTIONS,
  },
  {
    id: 'b2b',
    title: 'B2B Narrative',
    tagline: 'Data leakage and enterprise governance: AI in the browser without losing control.',
    sourceDocs: ['data-leakage-consortium-summary.md'],
    strategicNarrativePath: '/b2b-strategic-narrative',
    strategicNarrativeLabel: 'B2B Strategic Narrative',
    sections: B2B_SECTIONS,
  },
]

/** Flat list of all story beats (both categories); for back-compat */
export const SECTIONS = NARRATIVE_CATEGORIES.flatMap((c) => c.sections)

export const ALL_TASK_IDS = NARRATIVE_CATEGORIES.flatMap((c) =>
  c.sections.flatMap((s) => s.tasks.map((t) => t.id))
)

export function getCategoryTaskIds(categoryId) {
  const category = NARRATIVE_CATEGORIES.find((c) => c.id === categoryId)
  if (!category) return []
  return category.sections.flatMap((s) => s.tasks.map((t) => t.id))
}

/** Which narrative category owns a checklist task id (stable ids; do not rename). */
export function getCategoryIdForTask(taskId) {
  return taskId.includes('-chrome-') ? 'b2c' : 'b2b'
}
