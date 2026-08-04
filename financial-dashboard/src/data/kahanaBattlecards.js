/**
 * Kahana battlecards — conversation guides for team, new users, and prospects.
 * Compare & contrast each platform with Kahana; emphasize good ways to use both.
 * Base stats pull from competitive pools + virtual-party lists.
 */

import { COMPETITIVE_CATEGORIES, PLATFORM_POOLS } from './kahanaCompetitivePools'
import {
  VIRTUAL_PARTY_SOCIAL,
  VIRTUAL_PARTY_STREAMING,
} from './libraryAuraNarrative'

const TBD = 'TBD — fill in'

/**
 * @typedef {object} BattlecardOverride
 * @property {string} [competitiveAngle] Compare & contrast
 * @property {string} [whenWeWin] When Kahana is the better fit
 * @property {string} [whenTheyWin] When the other platform is the better fit
 * @property {string} [landmines] Conversation tips
 * @property {string} [proofPoints] Talking points for the team
 * @property {string} [kahanaOneLiner] How they fit together
 * @property {string} [switchReason] When someone might prefer Kahana as primary
 * @property {string} [useWithReason] Using both
 */

/** Conversation guides — keyed by platform id. */
export const BATTLECARD_OVERRIDES = {
  wattpad: {
    kahanaOneLiner: 'Wattpad for finding and writing serial stories; Kahana when a title becomes a Book Club.',
    competitiveAngle:
      'Wattpad is built for serial fiction scroll and chapter culture. Kahana is built for intentional Clubs, a shared library shelf, and Aura. Same love of stories — different modes.',
    whenWeWin:
      'Someone wants a live Book Club with friends, a schedule, and discussion — not only chapter comments.',
    whenTheyWin:
      'Someone lives in Wattpad serial discovery and just wants to read/write the next chapter.',
    landmines:
      'Lead with “use both,” not “leave Wattpad.” Wattpad finds the story; Kahana hosts the group read.',
    useWithReason:
      'Discover or write on Wattpad; when a title is Club-worthy, run the group on Kahana and wishlist the ebook if it is not boarded yet.',
    switchReason:
      'Only if the whole ritual (shelf + Club) should live in the Kahana library as the primary home.',
    proofPoints:
      'Book Club playbook · wishlist → acquire · Aura 5/day · Phase 1 ebooks for Clubs.',
  },
  substack: {
    kahanaOneLiner: 'Build on both — Substack for inbox; Kahana for library, Clubs, and a profile link back to Substack.',
    competitiveAngle:
      'Substack is email-first publishing and subscriptions. Kahana is a multi-format library (writing + ebooks + courses + video), Clubs, and Aura. Writers often belong on both.',
    whenWeWin:
      'They want readers discussing together, longer library packs, or discovery beyond the inbox.',
    whenTheyWin:
      'The product is the newsletter and the relationship lives in email.',
    landmines:
      'Do not ask them to abandon Substack. Offer profile link, content repurposing, and Clubs as the tandem move.',
    useWithReason:
      'Publish and grow on Substack; list Substack on the Kahana profile; repurpose issues into hubs; run a Club around a series; grow both audiences.',
    switchReason:
      'Only if they want one library-first home for long-form and Clubs.',
    proofPoints:
      'Profile links · hub one-time or monthly (5% fee) · Clubs · Aura · dual audience.',
  },
  goodreads: {
    kahanaOneLiner: 'Goodreads for personal shelves and ratings; Kahana for the live Book Club.',
    competitiveAngle:
      'Goodreads tracks what you read. Kahana facilitates reading together — Clubs, discussion, ebooks when boarded, Aura on titles that deserve to rise.',
    whenWeWin:
      'Friends want a facilitated Club with empathy and conversation, not only shelf status.',
    whenTheyWin:
      'Someone only wants personal tracking, ratings, and Amazon-adjacent shelves.',
    landmines:
      'Never pitch replacing Goodreads overnight. Pitch: keep your shelves; add a Kahana Club.',
    useWithReason:
      'Log books on Goodreads; invite the same people into a Kahana Book Club; wishlist titles not on Kahana yet.',
    switchReason:
      'Rare — tandem is the usual story. Kahana-primary only if Club + library access is the whole need.',
    proofPoints:
      'Book Club playbook · wishlist → outreach · Aura on great Club titles.',
  },
  medium: {
    kahanaOneLiner: 'Write on Medium for essay reach; use Kahana for Clubs, hubs, and building a second audience.',
    competitiveAngle:
      'Medium is essay publishing and membership discovery. Kahana is Clubs + multi-format library + Aura. Same writer can serve both surfaces.',
    whenWeWin:
      'They want recurring reading groups or library depth beyond a single essay feed.',
    whenTheyWin:
      'They are optimizing for Medium distribution and membership alone.',
    landmines:
      'Respect Medium’s reach. Offer dual audience: publish there, Club and library-home here.',
    useWithReason:
      'Publish on Medium; add Medium on the Kahana profile; turn pieces into hubs or Club lists; discuss on Kahana.',
    switchReason:
      'Optional for writers who want Kahana as the primary library and monetized hubs.',
    proofPoints:
      'Same dual-audience pattern as Substack and Beehiiv.',
  },
  patreon: {
    kahanaOneLiner:
      'Similar monetization tools — list on both. Patreon for patronage fans; Kahana for library discovery and flexible hub pricing.',
    competitiveAngle:
      'Patreon is membership/patronage (often tiers). Kahana also lets creators charge — one-time or monthly hubs (5% fee) — and monetized work appears in the library. Overlap is real; dual listing is the practical move so fans can choose.',
    whenWeWin:
      'They want Explore/Aura discovery, Clubs, or one-time sales without forcing tiers — or fans who prefer Kahana.',
    whenTheyWin:
      'Fans already live on Patreon tiers and that membership is the whole product.',
    landmines:
      'Say: “You can use both.” Do not say Kahana has no monetization. Do not trash Patreon community — contrast library + Aura + pricing flexibility.',
    useWithReason:
      'Keep Patreon for patronage-native fans; put the same or related work on Kahana so it appears in the library, fuels Clubs, and gets Aura.',
    switchReason:
      'Only if they want one home with library discovery + hub pricing.',
    proofPoints:
      'Stripe hubs · 5% take · Explore · Clubs · Aura · dual-list for exposure.',
  },
  onlyfans: {
    kahanaOneLiner: 'Different jobs — OF for that creator↔fan channel; Kahana for knowledge Clubs and a library brand.',
    competitiveAngle:
      'OnlyFans is high-scale creator↔fan monetization. Kahana is a digital library with Clubs and Aura for learning and discussion. Often a cleaner second surface, not a substitute.',
    whenWeWin:
      'They want a discussion-first knowledge or brand community with library materials.',
    whenTheyWin:
      'The business is OF-native membership and that is the product.',
    landmines:
      'Be explicit about jobs-to-be-done. Avoid brand confusion. Kahana is library/Clubs.',
    useWithReason:
      'Run OF as one channel; host curated Clubs and libraries on Kahana when they want group learning or a separate brand experience.',
    switchReason:
      'Unlikely as a full switch — tandem or separate lines.',
    proofPoints:
      'Clubs + hubs positioning · clear adult-content policies if relevant.',
  },
  gumroad: {
    kahanaOneLiner: 'Sell on both — Gumroad for simple link checkout; Kahana so the product lives in a library others can find.',
    competitiveAngle:
      'Both sell digital access. Gumroad is fast link commerce. Kahana adds Explore, Clubs, Aura, and hubs (one-time or monthly, 5% fee) so work is browsable — not only reached by a direct link.',
    whenWeWin:
      'They want library presence and Clubs using the product as curriculum.',
    whenTheyWin:
      'They only need fast file delivery from a bio link.',
    landmines:
      'Acknowledge sales overlap. Lead with dual-list for exposure, not “we’re not a store.”',
    useWithReason:
      'Keep Gumroad checkout for link traffic; also list a Kahana hub so Clubs and Aura can surface the work.',
    switchReason:
      'Optional when library discovery is the main growth lever.',
    proofPoints:
      '5% hub fee · Explore · Clubs as curriculum for digital products.',
  },
  linktree: {
    kahanaOneLiner: 'Linktree is the front door from social; Kahana is the room — library and Clubs after the click.',
    competitiveAngle:
      'Linktree packs links. Kahana is not another link list — it is where serious learners land for hubs, Clubs, and Aura. Complementary layers.',
    whenWeWin:
      'They want depth after the bio click — shared learning, not only more outbound links.',
    whenTheyWin:
      'They only need a simple multi-link bio.',
    landmines:
      'Never pitch deleting Linktree. Pitch featuring Kahana Club/hub as a primary link.',
    useWithReason:
      'Keep Linktree; put Kahana Club or hub high on the list so followers who want depth know where to go.',
    switchReason:
      'N/A — tandem is the play.',
    proofPoints:
      'Same front-door story as Beacons and Stan · Clubs GTM.',
  },
  beacons: {
    kahanaOneLiner: 'Beacons for the social landing page; Kahana for library depth and Clubs after the click.',
    competitiveAngle:
      'Beacons handles bio, media kits, and quick commerce paths. Kahana hosts the library and Clubs. Front door vs room inside.',
    whenWeWin:
      'They want recurring Clubs and a durable place for longer materials.',
    whenTheyWin:
      'They need bio/commerce landing only.',
    landmines:
      'Don’t compete on link-in-bio features. Compete on what happens next.',
    useWithReason:
      'Use Beacons for reach from Instagram/TikTok; deep-link Kahana Clubs and hubs for learning together.',
    switchReason:
      'N/A — tandem.',
    proofPoints:
      'Synergy with Linktree/Stan · organic Club growth.',
  },
  'stan-store': {
    kahanaOneLiner: 'Stan for mobile social checkout; Kahana when someone wants Clubs and library discovery.',
    competitiveAngle:
      'Stan is IG/TikTok-native storefront and tips. Kahana is browseable hubs, Clubs, and Aura. Many creators will use both — impulse sales on Stan, depth on Kahana.',
    whenWeWin:
      'They want learners in Clubs and Explore, not only checkout from a reel.',
    whenTheyWin:
      'They optimize for mobile tips and simple product links from social.',
    landmines:
      'Respect Stan’s conversion UX. Add Kahana as the depth layer.',
    useWithReason:
      'Run Stan for bio + checkout; add a Kahana Club/hub link; dual-list flagship products when useful.',
    switchReason:
      'Optional for library-first creators.',
    proofPoints:
      'Front-door pattern shared with Beacons/Linktree.',
  },
  pensight: {
    kahanaOneLiner: 'Pensight for creator pages; Kahana for Clubs and an Aura-ranked library.',
    competitiveAngle:
      'Creator page/tooling vs shared library + Clubs. Different layers — link them.',
    whenWeWin:
      'They need group learning ritual and catalog discovery.',
    whenTheyWin:
      'They need a polished creator landing/tool stack only.',
    landmines:
      'Stay outcome-focused (Clubs, shelf, Aura) — not a feature checklist war.',
    useWithReason:
      'Keep Pensight pages; deep-link Kahana Clubs and hubs.',
    switchReason:
      'Optional if Kahana becomes the primary content home.',
    proofPoints:
      'Clubs GTM · Aura · hubs.',
  },
  podia: {
    kahanaOneLiner: 'Podia runs the course brand; Kahana helps the course get discovered and discussed in Clubs.',
    competitiveAngle:
      'Podia is course hosting and checkout. Kahana is library discovery, Clubs, and Aura. Teachers can keep Podia and list on Kahana — same tandem as Teachable/Kajabi.',
    whenWeWin:
      'They want Explore/Aura reach and Club discussion beyond the school site.',
    whenTheyWin:
      'One all-in-one course site is enough.',
    landmines:
      'Not a rip-and-replace LMS conversation.',
    useWithReason:
      'Host on Podia; list companion hubs or Clubs on Kahana; students discuss on Kahana.',
    switchReason:
      'Only if they want library-first distribution.',
    proofPoints:
      'Phase 1 courses + Clubs · teacher/student benefit framing.',
  },
  kajabi: {
    kahanaOneLiner: 'Kajabi for running the teaching business; Kahana for library exposure and Clubs.',
    competitiveAngle:
      'Kajabi is all-in-one courses, memberships, email, landings. Kahana is the public library layer with Aura and Clubs. Dual-list so more people find the teaching.',
    whenWeWin:
      'They want discovery and Clubs with people outside the Kajabi membership wall.',
    whenTheyWin:
      'Kajabi funnel + email + course is enough.',
    landmines:
      'Don’t claim we replace Kajabi email, landings, or drip.',
    useWithReason:
      'Run the course on Kajabi; list it on Kahana; Club discusses weekly lessons; Aura surfaces strong teaching.',
    switchReason:
      'Rare full switch — tandem is default.',
    proofPoints:
      'Same teacher story as Teachable · dual-list for exposure.',
  },
  teachable: {
    kahanaOneLiner:
      'Teachers keep Teachable and can also put courses on Kahana for a larger audience; students get Clubs to discuss.',
    competitiveAngle:
      'Teachable is the course engine (enroll, drip, host). Kahana is discovery (Explore, Aura) and Clubs for empathy and discussion. Benefit both teachers (reach) and students (learn together).',
    whenWeWin:
      'Need broader discovery or a Club room for cohort conversation.',
    whenTheyWin:
      'Enrollment and drip on Teachable are the whole product.',
    landmines:
      'Open with “use both,” never “Kahana replaces Teachable.”',
    useWithReason:
      'Students enroll on Teachable as usual; teacher lists the course on Kahana; Club discusses on Kahana; Aura helps great courses rise.',
    switchReason:
      'Optional for library-first teachers only.',
    proofPoints:
      'Teacher discovery + student Clubs · Phase 1 courses.',
  },
  udemy: {
    kahanaOneLiner: 'Udemy for marketplace shoppers; Kahana for library presence, Clubs, and Aura.',
    competitiveAngle:
      'Udemy is a large course marketplace (search, ratings, promotions). Kahana places courses in a broader library next to ebooks and video, with Clubs and Aura. Instructors can use both distribution channels.',
    whenWeWin:
      'They want Clubs, multi-format packs, or discovery outside Udemy search.',
    whenTheyWin:
      'They live on Udemy rankings and marketplace promotions.',
    landmines:
      'Don’t fight price races. Pitch dual exposure + Clubs.',
    useWithReason:
      'Keep the Udemy course; add a Kahana hub/Club so learners discuss and Aura can surface the work.',
    switchReason:
      'Uncommon — tandem preferred.',
    proofPoints:
      'Phase 1 course Clubs · Aura · dual-list.',
  },
  coursera: {
    kahanaOneLiner: 'Coursera for formal courses and credentials; Kahana Clubs for discussion and related library materials.',
    competitiveAngle:
      'Coursera is structured online learning and credentials. Kahana is community Clubs and a multi-format library. Different jobs — excellent together for study groups.',
    whenWeWin:
      'A group wants facilitated discussion and related ebooks/video around a subject.',
    whenTheyWin:
      'Someone needs an accredited path and Coursera certificates.',
    landmines:
      'Never imply Kahana replaces credentials or degrees.',
    useWithReason:
      'Take the course on Coursera; run a Kahana Club for cohort discussion and extras from the library.',
    switchReason:
      'N/A for degrees — tandem only.',
    proofPoints:
      'Club playbooks · multi-format library.',
  },
  discord: {
    kahanaOneLiner: 'Discord is the living-room conversation; Kahana is the shelf and reading list — use both.',
    competitiveAngle:
      'Discord is real-time chat, voice, and servers. Kahana is shared curriculum (ebooks, courses, video), Clubs, and Aura. Chat velocity vs library focus.',
    whenWeWin:
      'The community needs shared materials and structured Clubs, not only channels.',
    whenTheyWin:
      'The community only needs chat and voice.',
    landmines:
      'Do not pitch replacing Discord. Pitch pinning Club/hub links and assigning next reads/watches from Kahana.',
    useWithReason:
      'Talk live on Discord; watch/read on Kahana; grant Aura on Kahana; pin Club links in a channel.',
    switchReason:
      'N/A — tandem.',
    proofPoints:
      'First synergy card · Club playbooks · feedback survey for Club UX.',
  },
  circle: {
    kahanaOneLiner: 'Circle for branded member community; Kahana for the library shelf, Aura, and Clubs curriculum.',
    competitiveAngle:
      'Circle is a community OS (posts, events, courses inside a brand wall). Kahana is a public-leaning library with Aura and Clubs. Belonging vs shelf + discovery.',
    whenWeWin:
      'They want Explore/Aura exposure or Clubs with people outside the paid Circle wall.',
    whenTheyWin:
      'The branded Circle space is the whole member experience.',
    landmines:
      'Don’t claim “better Circle.” Claim better library shelf + Aura + open Club invites.',
    useWithReason:
      'Community life on Circle; hubs and Clubs on Kahana; link both ways so members always find the materials.',
    switchReason:
      'Optional if library-first is the product.',
    proofPoints:
      'Synergy card · Clubs + Aura.',
  },
  beehiiv: {
    kahanaOneLiner: 'Beehiiv for inbox growth; Kahana for Clubs and library — cross-link every week.',
    competitiveAngle:
      'Beehiiv is newsletter growth and email. Kahana is Clubs + multi-format library + Aura. Publishers can build both audiences.',
    whenWeWin:
      'They want discussion Clubs and materials beyond email.',
    whenTheyWin:
      'Growth and monetization inside Beehiiv are enough.',
    landmines:
      'Don’t compete on referral/email features. Compete on Club + library outcomes.',
    useWithReason:
      'Send on Beehiiv; Kahana Club/hub in the CTA; Beehiiv on Kahana profile; discuss on Kahana.',
    switchReason:
      'Optional for library-first publishers.',
    proofPoints:
      'Same tandem pattern as Substack.',
  },
  'etsy-ebooks': {
    kahanaOneLiner: 'Etsy for craft and impulse downloads; Kahana when a title becomes Club curriculum.',
    competitiveAngle:
      'Etsy is marketplace browsing for many product types. Kahana is club-driven library demand for flagship ebooks and discussion.',
    whenWeWin:
      'They want recurring group reads and Aura discovery for core titles.',
    whenTheyWin:
      'Their motion is Etsy search and one-off digital downloads.',
    landmines:
      'Don’t force full catalog migration. Start with titles Clubs actually need.',
    useWithReason:
      'Keep the Etsy shop; board Club titles on Kahana; dual-list bestsellers when it helps.',
    switchReason:
      'Flagship titles may shift toward Kahana over time as Clubs grow.',
    proofPoints:
      'Wishlist → acquire · Book Club playbook.',
  },
  curios: {
    kahanaOneLiner: 'Author tooling if needed elsewhere; Clubs and library engagement on Kahana.',
    competitiveAngle:
      'Niche author tools vs Clubs + Aura library. Focus the conversation on reader engagement outcomes.',
    whenWeWin:
      'An author wants live Book Clubs and demand-driven uploads.',
    whenTheyWin:
      'They only need niche author tooling.',
    landmines:
      'Stay outcome-focused — Clubs, shelf, Aura — not competitor trash talk.',
    useWithReason:
      'Keep author tools if useful; run clubs, discussion, and discovery on Kahana.',
    switchReason:
      'When Kahana is the reader engagement home.',
    proofPoints:
      'Book Clubs · Aura · hubs.',
  },
  skool: {
    kahanaOneLiner: 'Skool for the tight cohort classroom; Kahana for the library shelf and Aura discovery.',
    competitiveAngle:
      'Skool is group feed + classroom + gamification. Kahana is public-leaning library, Clubs, and Aura. Cohort energy vs shelf + wider discovery.',
    whenWeWin:
      'They need materials findable beyond the Skool wall, or multi-format library next to the cohort.',
    whenTheyWin:
      'The Skool group feed and classroom are enough.',
    landmines:
      'Don’t say we replace Skool community. Say shelf + Aura + Clubs with people outside the group.',
    useWithReason:
      'Host the cohort on Skool; put course/ebook/video on Kahana; link classroom ↔ Club.',
    switchReason:
      'Optional for library-first educators.',
    proofPoints:
      'Synergy card · Phase 1 courses + Clubs.',
  },
  fable: {
    kahanaOneLiner: 'If you like Fable, you might also love Kahana for book clubs — use both; they rhyme.',
    competitiveAngle:
      'Fable is social, bookish clubs. Kahana is Clubs plus a real library shelf (and courses/video when the group wants more). Same instinct to read together — Kahana adds depth.',
    whenWeWin:
      'The group wants library materials, Aura, or a multi-format Club.',
    whenTheyWin:
      'A lightweight social book club on Fable is the whole need.',
    landmines:
      'Friendly adjacency. Never “Fable is wrong.” Invite: if you like Fable, try Kahana Clubs too.',
    useWithReason:
      'Enjoy Fable; also run Kahana Book Clubs; cross-invite friends; wishlist titles for the library.',
    switchReason:
      'N/A — love both.',
    proofPoints:
      'Synergy stance line · Book Club playbook · Aura.',
  },
  thinkific: {
    kahanaOneLiner: 'Thinkific for course ops; Kahana for discovery and Clubs — teachers and students benefit from both.',
    competitiveAngle:
      'Thinkific hosts and sells the course. Kahana lists it in the library, runs Clubs, and uses Aura for discovery. Same tandem as Teachable.',
    whenWeWin:
      'They want Explore/Aura and Club discussion.',
    whenTheyWin:
      'The Thinkific school site is sufficient.',
    landmines:
      'Not an LMS replacement pitch — “use both.”',
    useWithReason:
      'Build on Thinkific; list the course on Kahana; Club discusses; students learn together.',
    switchReason:
      'Optional.',
    proofPoints:
      'Teacher reach + student Clubs.',
  },
  spotify: {
    kahanaOneLiner: 'Listen on Spotify; use Kahana when you want a Club to discuss and go deeper.',
    competitiveAngle:
      'Spotify is daily listening (music/podcasts). Kahana is intentional Clubs and library context. Entertainment/habit listening vs focused learning discussion — people use both at different times.',
    whenWeWin:
      'Someone wants structured discussion, companion materials, or Aura around what they hear.',
    whenTheyWin:
      'They just want playlists and passive listening.',
    landmines:
      'Don’t claim we replace Spotify’s catalog or player. Pitch Club + cross-links.',
    useWithReason:
      'Listen on Spotify; pin episodes in a Kahana Club; discuss; link Spotify ↔ Kahana profile; wishlist creators for the library.',
    switchReason:
      'N/A — tandem.',
    proofPoints:
      'Listen-along Clubs · show notes ↔ profile links.',
  },
  audible: {
    kahanaOneLiner: 'Listen on Audible; meet the Book Club on Kahana — same title, different formats welcome.',
    competitiveAngle:
      'Audible is audiobook storefront and narration. Kahana is the Club room (and ebook when boarded). Format preference vs group learning.',
    whenWeWin:
      'The group needs facilitated discussion and optional ebook access on Kahana.',
    whenTheyWin:
      'Someone only wants Audible credits and narration.',
    landmines:
      'Don’t force format conversion. Support listeners and readers in one Club.',
    useWithReason:
      'Some members use Audible, others a Kahana ebook when available; everyone discusses on Kahana; wishlist boarding for missing titles.',
    switchReason:
      'N/A — dual-format tandem.',
    proofPoints:
      'Book Club playbook · wishlist → acquire.',
  },
  instagram: {
    kahanaOneLiner:
      'Sometimes you want Instagram for entertainment scrolling; sometimes you prefer Kahana for longer-form, educational focus and Clubs.',
    competitiveAngle:
      'Instagram is the virtual party — short, social, dopamine-friendly. Kahana is the digital library — longer materials, Clubs, Aura, focus. Both are valid; different moods and jobs.',
    whenWeWin:
      'Someone wants to learn with friends, go deep on a book/course/video, or step out of the feed.',
    whenTheyWin:
      'Someone wants entertainment, reach, Stories/Reels, or light social connection.',
    landmines:
      'Never shame the party. Say: use IG when you want that; come to Kahana when you want the library feeling. Bio link → Club.',
    useWithReason:
      'Post and browse on Instagram; when ready for depth, follow a link to a Kahana Club or hub; discuss and grant Aura there.',
    switchReason:
      'N/A — people keep both in their week.',
    proofPoints:
      'Library vs virtual party narrative · link-in-bio synergy · Clubs GTM · Aura vs engagement feed.',
  },
  youtube: {
    kahanaOneLiner:
      'YouTube for watching at scale (and creator ads); Kahana Video Clubs for watching together and discussing — keep both.',
    competitiveAngle:
      'YouTube hosts video, search, subscriptions, and ads. Kahana organizes long-form (often educational) into Clubs, library context, and Aura. Creators keep YouTube; Clubs embed or assign videos on Kahana.',
    whenWeWin:
      'A group wants a Video Club ritual, discussion, and Aura — not only the public comment section.',
    whenTheyWin:
      'Someone is optimizing watch time, subscriptions, and YouTube-native discovery alone.',
    landmines:
      'Don’t ask creators to leave YouTube monetization. Lead with embed + Club + dual audience.',
    useWithReason:
      'Watch/host on YouTube; create a Kahana Video Club; embed when possible; discuss on Kahana; Aura the best educational long-form.',
    switchReason:
      'N/A for hosting — tandem.',
    proofPoints:
      'Add YouTube / embed path · Phase 1 long-form · synergy card.',
  },
  tiktok: {
    kahanaOneLiner:
      'TikTok when you want short-form entertainment; Kahana when you want longer-form learning and Clubs.',
    competitiveAngle:
      'TikTok is always-on short-form party. Kahana is intentional library time. Same person can use both in one day — hook on TikTok, deepen on Kahana.',
    whenWeWin:
      'Audience is ready for Book/Video Clubs and longer materials.',
    whenTheyWin:
      'Goal is only short-form reach and entertainment.',
    landmines:
      'Don’t moralize TikTok. Invite people to the library when they want focus.',
    useWithReason:
      'Discover or promote on TikTok; CTA to a Kahana Club or hub; do the long-form work and discussion there.',
    switchReason:
      'N/A — tandem.',
    proofPoints:
      'Library vs party · Aura vs opaque engagement algo.',
  },
  netflix: {
    kahanaOneLiner:
      'Netflix when you want lean-back entertainment; Kahana when you want to learn and discuss with focus.',
    competitiveAngle:
      'Netflix is premium binge entertainment. Kahana is a learning library with Clubs and Aura. Different evenings, different jobs — both fine.',
    whenWeWin:
      'Someone wants intentional learning or a Club, not a binge.',
    whenTheyWin:
      'Someone wants a polished entertainment catalog.',
    landmines:
      'Don’t pitch “cancel Netflix.” Pitch Kahana for the library feeling when they want it.',
    useWithReason:
      'Mostly separate. Occasionally a Club might discuss a documentary — still not a replacement story.',
    switchReason:
      'N/A.',
    proofPoints:
      'Library vs virtual party framing for team onboarding.',
  },
  'prime-video': {
    kahanaOneLiner: 'Prime Video for entertainment; Kahana for focused Clubs and learning.',
    competitiveAngle:
      'Streaming entertainment vs digital library. Different jobs in someone’s week.',
    whenWeWin:
      'Learning / Club intent.',
    whenTheyWin:
      'Lean-back watch intent (often with Prime bundle).',
    landmines:
      'Don’t fight the Prime bundle. Contrast moods: party/couch vs library.',
    useWithReason:
      'Keep both in life; use Kahana when they want educational focus and discussion.',
    switchReason:
      'N/A.',
    proofPoints:
      'Virtual party contrast · Clubs for learning.',
  },
  'disney-plus': {
    kahanaOneLiner: 'Disney+ for franchise entertainment; Kahana for learning Clubs and longer educational materials.',
    competitiveAngle:
      'Entertainment catalog vs library with Aura. Compare moods, not feature lists.',
    whenWeWin:
      'Learning and discussion intent.',
    whenTheyWin:
      'Franchise binge intent.',
    landmines:
      'Different jobs — say so clearly for new team members.',
    useWithReason:
      'Entertainment there; Kahana when they want the library and Clubs.',
    switchReason:
      'N/A.',
    proofPoints:
      'Virtual party contrast.',
  },
  max: {
    kahanaOneLiner: 'Max for premium TV; Kahana for focused learning Clubs.',
    competitiveAngle:
      'Premium lean-back series/films vs library Clubs. Contrast how someone spends attention.',
    whenWeWin:
      'Intentional learning groups.',
    whenTheyWin:
      'Premium entertainment.',
    landmines:
      'Different jobs.',
    useWithReason:
      'Separate surfaces; Kahana when they want education and discussion.',
    switchReason:
      'N/A.',
    proofPoints:
      'Virtual party contrast.',
  },
  hulu: {
    kahanaOneLiner: 'Hulu for streaming entertainment; Kahana for library Clubs and educational focus.',
    competitiveAngle:
      'US streaming habit vs learning library. People use both for different goals.',
    whenWeWin:
      'Club / learning intent.',
    whenTheyWin:
      'TV/film entertainment intent.',
    landmines:
      'Different jobs — useful teaching example for new hires.',
    useWithReason:
      'Entertainment on Hulu; longer-form learning and Clubs on Kahana.',
    switchReason:
      'N/A.',
    proofPoints:
      'Virtual party contrast · Instagram/TikTok/Netflix same teaching pattern.',
  },
}

function categoryName(categoryId) {
  return COMPETITIVE_CATEGORIES.find((c) => c.id === categoryId)?.name ?? categoryId
}

/**
 * Build battlecard list: creator/knowledge pools + virtual party platforms.
 */
export function getBattlecards() {
  const poolCards = PLATFORM_POOLS.map((p) => {
    const o = BATTLECARD_OVERRIDES[p.id] ?? {}
    return {
      id: p.id,
      name: p.name,
      group: 'creator-knowledge',
      groupLabel: 'Creator / knowledge platforms',
      category: categoryName(p.categoryId),
      usersLabel: p.usersLabel,
      revenueLabel: p.revenueLabel,
      demandLabel: p.demandLabel,
      supplyLabel: p.supplyLabel,
      switchReason: o.switchReason ?? p.switchReason,
      useWithReason: o.useWithReason ?? p.useWithReason,
      kahanaAngle: p.kahanaAngle,
      competitiveAngle: o.competitiveAngle ?? TBD,
      whenWeWin: o.whenWeWin ?? TBD,
      whenTheyWin: o.whenTheyWin ?? TBD,
      landmines: o.landmines ?? TBD,
      proofPoints: o.proofPoints ?? TBD,
      kahanaOneLiner: o.kahanaOneLiner ?? TBD,
    }
  })

  const partyCards = [...VIRTUAL_PARTY_SOCIAL, ...VIRTUAL_PARTY_STREAMING].map((p) => {
    const o = BATTLECARD_OVERRIDES[p.id] ?? {}
    return {
      id: p.id,
      name: p.name,
      group: 'virtual-party',
      groupLabel: 'Virtual party (social / streaming)',
      category: p.tier === 'social-short' ? 'Social / short-form' : 'TV / film streaming',
      usersLabel: p.demandLabel,
      revenueLabel: p.revenueLabel ?? 'See notes',
      demandLabel: p.demandLabel,
      supplyLabel: p.supplyLabel,
      switchReason: o.switchReason ?? TBD,
      useWithReason: o.useWithReason ?? TBD,
      kahanaAngle: p.note,
      competitiveAngle: o.competitiveAngle ?? TBD,
      whenWeWin: o.whenWeWin ?? TBD,
      whenTheyWin: o.whenTheyWin ?? TBD,
      landmines: o.landmines ?? TBD,
      proofPoints: o.proofPoints ?? TBD,
      kahanaOneLiner: o.kahanaOneLiner ?? TBD,
    }
  })

  return [...poolCards, ...partyCards].sort((a, b) => a.name.localeCompare(b.name))
}

export const BATTLECARD_GROUPS = [
  { id: 'all', label: 'All platforms' },
  { id: 'creator-knowledge', label: 'Creator / knowledge' },
  { id: 'virtual-party', label: 'Virtual party' },
]

export function filterBattlecards(cards, { groupId = 'all', query = '' } = {}) {
  const q = query.trim().toLowerCase()
  return cards.filter((c) => {
    if (groupId !== 'all' && c.group !== groupId) return false
    if (!q) return true
    return (
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.competitiveAngle.toLowerCase().includes(q) ||
      (c.kahanaOneLiner && c.kahanaOneLiner.toLowerCase().includes(q)) ||
      (c.useWithReason && c.useWithReason.toLowerCase().includes(q))
    )
  })
}
