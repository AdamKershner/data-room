/**
 * Per-task channel, format, essence (Imagine…), and short label (refs/links).
 * Stable task ids: do not rename.
 */

/** @param {string} id @param {object} meta */
export function task(id, meta) {
  return { id, ...meta }
}

export const TASK_META = {
  // ,  B2C Name the change Change , 
  'mn-change-chrome-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine naming Ad Nauseam as the villain, the tab as trap, seep-in pre-rolls, portal turned trap, fourteen ads in fourteen minutes, and the moment you forgot deep focus.',
    label: '[[FORBES_TARGET|Target 2012]]; [[AD_NAUSEAM_BRIEF|Villain]], no PH hook in Name the change',
  },
  'mn-change-chrome-02': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine Ad Nauseam-tired readers learning the bites they do not feel, mosquito welts under the scroll, and sharing the retargeting moment that broke their focus.',
    label: '[[AD_NAUSEAM_BRIEF|Mosquitoes + Cost]]; one stat max',
  },
  'mn-change-chrome-03': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine the bug-zapper browser and booby-trapped corridor to deep work, then the trap that keeps running after ads end (Gemini, cookies) until you ask whose attention it serves.',
    label: '[[AD_NAUSEAM_BRIEF|Fallen Portal]]; Gemini/cookies sources',
  },
  'mn-change-chrome-04': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine half-open tabs and nervous-system tension, readers remembering what they shipped with a clear mind before Ad Nauseam made calm focus feel impossible.',
    label: '[[AD_NAUSEAM_BRIEF|Consequence]]; handoff to Name the villain colossus',
  },
  'mn-change-chrome-05': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a six-slide carousel, the tab became a trap, from portal to seep-in to mental RAM to bug-zapper corridor, ending with when did you forget deep work.',
    label: 'Format playbook · Name the change carousel; pairs [[mn-change-chrome-01]]',
  },
  'mn-change-chrome-06': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    format: 'videoMixed',
    essence:
      'Imagine a vertical short: fourteen minutes of highlights, fourteen ads on a counter, deadpan optional, ending on the villain is not one ad.',
    label: 'Format playbook · Name the change short-form; 15–30s',
  },
  'mn-change-chrome-07': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'],
    format: 'videoAnimation',
    essence:
      'Imagine a humble stick-figure loop: laptop for work, tab grows a engagement lever, attention coins fall, mosquito dots sip, hand-drawn, not studio polish.',
    label: 'Format playbook · Name the change animation; ~20s',
  },
  'mn-change-chrome-08': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a poll asking what broke your focus first, pre-roll pile-on, creepy retargeting, autoplay feed, or tab chaos, and use the winner for the next post hook.',
    label: 'Format playbook · Name the change poll',
  },
  'mn-change-chrome-09': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a long Kahana blog post, the Rise of Ad Nauseam, walking the copy bank beats with Target 2012 footnoted and a handoff to the villain stage.',
    label: 'Format playbook · Name the change blog; [[AD_NAUSEAM_BRIEF]]',
  },

  // ,  B2C Name the villain Chrome Colossus , 
  'mn-villain-chrome-01': {
    channel: 'LinkedIn',
    format: 'infographic',
    essence:
      'Imagine a shareable stat graphic: Chrome’s march from ~47% to ~68% global share while Firefox fades to ~2%, the browser monoculture in one frame.',
    label: 'StatCounter + Backlinko; [[CHROME_VILLAIN_BRIEF|Act I]]',
  },
  'mn-villain-chrome-02': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine readers seeing Chrome as the skin of Google’s ad machine, majority ad revenue, identity graph, every scroll mined, tied back to Name the change mosquitoes.',
    label: '[[CHROME_VILLAIN_BRIEF|Act II]]; no Oasis pitch in Name the villain',
  },
  'mn-villain-chrome-03': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a factual antitrust post: DOJ 2025 ad-tech win, stacked auction deck, without claiming breakup is final.',
    label: 'DOJ + NYT; legal on remedy claims',
  },
  'mn-villain-chrome-04': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine the June 2025 Google Ads breach (~2.5M records) as proof concentrated ad infrastructure is a concentrated target.',
    label: '[[CHROME_VILLAIN_BRIEF|Act IV]]; attribute breach sources',
  },
  'mn-villain-chrome-05': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a short bridge: Ad Nauseam is the feeling, Chrome Colossus is the environment, then who acts before the default finishes selling them out (Winners and losers).',
    label: 'Name the change → Winners and losers bridge; no PH hook',
  },
  'mn-villain-chrome-06': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a seven-slide carousel. Chrome monoculture in six numbers, one sourced stat per slide plus which number surprised you on the last.',
    label: 'Format playbook · Name the villain carousel; [[CHROME_VILLAIN_BRIEF]]',
  },
  'mn-villain-chrome-07': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    format: 'videoMixed',
    essence:
      'Imagine a vertical text short: Your browser works for ___, pause. Google’s ad business, one sourced stat, feeling vs environment.',
    label: 'Format playbook · Name the villain short-form',
  },
  'mn-villain-chrome-08': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'],
    format: 'videoAnimation',
    essence:
      'Imagine a crayon pipeline animation: big browser rectangle, tiny users, scroll to profile to auction, environment, not willpower.',
    label: 'Format playbook · Name the villain animation',
  },
  'mn-villain-chrome-09': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a poll on what makes the colossus feel real, market share, ad motive, antitrust news, or breach news, and follow up with that angle.',
    label: 'Format playbook · Name the villain poll',
  },
  'mn-villain-chrome-10': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a blog walking Chrome villain Acts I–IV, monoculture, ad machine, DOJ, breach, with StatCounter and DOJ links embedded.',
    label: 'Format playbook · Name the villain blog; [[CHROME_VILLAIN_BRIEF]]',
  },
  'mn-ph-chrome-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a bridge post after Name the change and Name the villain: Ad Nauseam is the feeling, the colossus is the environment, your browser works for Google, no Oasis pitch yet.',
    label: 'Checklist · Winners and losers; [[PH_BRIEF|Brief 01]] for launch assets only',
  },

  // ,  B2C Winners and losers Winners/losers , 
  'mn-winners-chrome-01': {
    channel: 'LinkedIn',
    format: 'infographic',
    essence:
      'Imagine a single shareable graphic with eight rows of Chrome data categories, all linked to you when signed in, so the loser future feels concrete, not abstract.',
    label: '[[CHROME_BLOG|Kahana Chrome 2025 post]]',
  },
  'mn-winners-chrome-02': {
    channel: 'LinkedIn',
    format: 'image',
    essence:
      'Imagine one stark image: Chrome as the only major browser pulling contacts and payment data off your phone while you thought you were just browsing.',
    label: '[[SURFSHARK_BROWSERS|Surfshark]]',
  },
  'mn-winners-chrome-03': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a factual post that walks through years of visited-link history leaking, and what Chrome 136 finally changes, without opening with “you have a problem.”',
    label: '[[FORBES_VISITED|Forbes]]; Chrome 136',
  },
  'mn-winners-chrome-04': {
    channel: 'Multi',
    channels: ['LinkedIn', 'Instagram'],
    format: 'image',
    essence:
      'Imagine four punchy stat lines on the “Working for Google” side of a split-screen, mosquito metaphor in mood, Surfshark and Forbes in the footnotes.',
    label: 'Pairs with [[mn-ph-chrome-02|split-screen]]',
  },
  'mn-winners-chrome-05': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a post that reframes Ad Nauseam as an attack surface and names the quiet rebels who refuse to treat the swarm as background radiation.',
    label: '[[WINNERS_LOSERS_BRIEF|copy bank]]',
  },
  'mn-winners-chrome-06': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine five slides that teach defending attention like budgeting money, blockers, fewer logins, and a net against the mosquitoes.',
    label: '[[WINNERS_LOSERS_BRIEF|copy bank]]',
  },
  'mn-winners-chrome-07': {
    channel: 'LinkedIn',
    format: 'thread',
    essence:
      'Imagine a thread that says losers are not stupid, they stay on default, and walks through cognition tax and paying twice without shaming the reader.',
    label: 'Futures, not blame',
  },
  'mn-winners-chrome-08': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a hopeful post on what winners get back, headspace, truer signals, agency, and ends with a question, not an Oasis hard sell.',
    label: '[[WINNERS_LOSERS_BRIEF|copy bank]]',
  },
  'mn-winners-chrome-09': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a post on the loser arc over time: numbness, deeper data trails, becoming raw material for someone else’s optimization, and pair it with one stat graphic.',
    label: 'Pair [[mn-winners-chrome-01|infographic]]',
  },
  'mn-winners-chrome-10': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a five-slide quiet rebel checklist, notice the pattern, budget attention, shrink surface area, switch tools, net metaphor, futures not blame.',
    label: 'Format playbook · Winners and losers carousel; alt to [[mn-winners-chrome-06]]',
  },
  'mn-winners-chrome-11': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    format: 'videoMixed',
    essence:
      'Imagine a split-screen short: default side noisy with retargeting shoes, rebel side calmer scroll, cognition tax caption; tease cut has no Oasis logo.',
    label: 'Format playbook · Winners and losers short-form; pairs [[mn-ph-chrome-02]]',
  },
  'mn-winners-chrome-12': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'],
    format: 'videoAnimation',
    essence:
      'Imagine stick figures at a fork: one swats mosquitoes with a net, one says that’s normal, roads labeled act and wait.',
    label: 'Format playbook · Winners and losers animation',
  },
  'mn-winners-chrome-13': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a poll on which stay-on-default cost hits hardest, time, attention, privacy, identity, or money.',
    label: 'Format playbook · Winners and losers poll',
  },
  'mn-winners-chrome-14': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a blog on futures not blame, winners, losers, and agency, with bridge line only; full PH hook saved for launch assets.',
    label: 'Format playbook · Winners and losers blog; [[WINNERS_LOSERS_BRIEF]]',
  },
  'mn-ph-chrome-02': {
    channel: 'Multi',
    channels: ['LinkedIn', 'Instagram'],
    format: 'image',
    essence:
      'Imagine a square split-screen: noisy Chrome world labeled Working for Google on the left, calm Oasis labeled Working for you on the right, the contrast does the work.',
    label: '[[PH_BRIEF|Brief 01]] hook on image',
  },
  'mn-ph-chrome-03': {
    channel: 'Multi',
    channels: ['Instagram', 'X', 'LinkedIn'],
    format: 'writing',
    essence:
      'Imagine the caption under that split-screen: you searched once, it followed you for a week, that is your browser working for Google, not coincidence.',
    label: 'Link in bio → [[PRODUCT_HUNT|PH]] when live',
  },

  // ,  B2C Promised Land Promised land , 
  'mn-promised-chrome-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a REFUGE tease post: a browser built like a refuge, not a billboard, calm tabs and AI that helps without hijacking attention, with no Oasis name yet.',
    label: '[[REFUGE_BRIEF|copy bank]]',
  },
  'mn-promised-chrome-02': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a first-person switcher story: after leaving Chrome, tabs feel quieter and data feels mine again. REFUGE voice, still no product name.',
    label: 'REFUGE voice only',
  },
  'mn-promised-chrome-03': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a long LinkedIn post for people exhausted by noisy tabs, a calmer browse, private by default, powered by AI that helps without getting in the way.',
    label: '[[REFUGE_BRIEF|variant 1]]',
  },
  'mn-promised-chrome-04': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a two-slide carousel: one browser protects your attention, another offers clarity not chaos. REFUGE codename only, calm vs noisy tab bar visuals.',
    label: '[[REFUGE_BRIEF|variants 2 + 3]]',
  },
  'mn-promised-chrome-06': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a REFUGE tease: browsing history and memory stay on your machine to help you work, not packaged as an ad profile, with honest partial tracker relief.',
    label: '[[REFUGE_DATA_BRIEF|Local refuge]]; no Oasis in tease',
  },
  'mn-promised-chrome-07': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a REFUGE tease: sidebar AI with personalization off by default, anonymous means no account linkage, not zero data, with handoff to Magic gifts Gift 2 proof.',
    label: '[[REFUGE_DATA_BRIEF|Assistant on your terms]]; legal on boundaries',
  },
  'mn-ph-chrome-04': {
    channel: 'Multi',
    channels: ['LinkedIn', 'ProductHunt'],
    format: 'writing',
    essence:
      'Imagine two separate drafts in two files: a pre-launch REFUGE tease thread and a ≤150-word Oasis Product Hunt description for May 27, never mixed in one publish.',
    label: '[[REFUGE_BRIEF|launch block]] + [[PRODUCT_HUNT|PH]]',
  },
  'mn-ph-chrome-05': {
    channel: 'Internal',
    format: 'internalDoc',
    essence:
      'Imagine an internal one-pager that maps the full emotion arc, from Ad Nauseam outrage through quiet rebels, REFUGE relief, to Oasis on launch day, for design and video leads.',
    label: '[[PH_BRIEF|Brief 01]] + [[WINNERS_LOSERS_BRIEF|Winners and losers]]',
  },
  'mn-promised-chrome-08': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a six-slide refuge-not-billboard carousel, noisy vs calm tab bar, on-device history, assistant off by default. REFUGE codename on the last slide only.',
    label: 'Format playbook · Promised Land carousel; no Oasis name',
  },
  'mn-promised-chrome-09': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    format: 'videoMixed',
    essence:
      'Imagine a whisper-calm vertical short: Imagine a browser where… three beats. REFUGE on the final frame, no Oasis name.',
    label: 'Format playbook · Promised Land short-form',
  },
  'mn-promised-chrome-10': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'],
    format: 'videoAnimation',
    essence:
      'Imagine a stick figure leaving a pop-up storm for a simple room, rain stops, breathe, refuge not billboard in handwritten text.',
    label: 'Format playbook · Promised Land animation',
  },
  'mn-promised-chrome-11': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a poll on what calm browsing means, fewer ads, data stays mine, AI does not hijack, or all three.',
    label: 'Format playbook · Promised Land poll',
  },
  'mn-promised-chrome-12': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a blog explaining what REFUGE means, product-backed local browse and assistant promises in tease voice without a hard launch CTA.',
    label: 'Format playbook · Promised Land blog; [[REFUGE_DATA_BRIEF]]',
  },

  // ,  B2C Magic gifts Magic gifts , 
  'mn-gifts-chrome-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a reframe post: Chrome contact/financial profile evidence plus assistant telemetry boundary, legal review before comparative claims (product gap).',
    label: '[[MAGIC_GIFTS_BRIEF|reframe row 1]]; pair [[mn-winners-chrome-02]]',
  },
  'mn-gifts-chrome-02': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a post that opens with You use the assistant to get workflow help with personalization off by default, not the Gemini-in-Chrome linked pipeline.',
    label: '[[MAGIC_GIFTS_BRIEF|AI gift]]; v1.0.0.12',
  },
  'mn-gifts-chrome-03': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a post that opens with You use Enhanced Tracking Protection to thin follow-you trackers, honest partial relief, not zero ads.',
    label: '[[MAGIC_GIFTS_BRIEF|ETP]]; partial only',
  },
  'mn-gifts-chrome-04': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a post that opens with You use clarification and tab commands to finish one focused pass at work, without claiming to cure Ad Nauseam.',
    label: '[[MAGIC_GIFTS_BRIEF|: workflow]]',
  },
  'mn-ph-chrome-06': {
    channel: 'ProductHunt',
    format: 'image',
    essence:
      'Imagine the Product Hunt header: dark noisy left half (Chrome’s world), bright calm right half with Oasis logo and the binary hook readable at thumbnail size.',
    label: '[[PH_BRIEF|Brief 01]]',
  },
  'mn-ph-chrome-07': {
    channel: 'Multi',
    channels: ['ProductHunt', 'LinkedIn', 'TikTok'],
    format: 'videoMixed',
    essence:
      'Imagine a 15–30 second video: private search, ads everywhere, “Your browser just watched that,” then the same person in a calm browser where nothing follows, text on screen, no VO required.',
    label: '[[PH_BRIEF|Brief 01]] beat sheet',
  },
  'mn-gifts-chrome-05': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine four gift carousels, one per magic gift, old world to new world to proof screenshot to honest boundary, starting with assistant on your terms.',
    label: 'Format playbook · Magic gifts carousel ×4; [[MAGIC_GIFTS_BRIEF]]',
  },
  'mn-gifts-chrome-06': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube'],
    format: 'videoMixed',
    essence:
      'Imagine a series of fifteen-second command demos, tab group, close duplicates, clarify, with a stick figure reacting in the corner.',
    label: 'Format playbook · Magic gifts short-form series',
  },
  'mn-gifts-chrome-07': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'],
    format: 'videoAnimation',
    essence:
      'Imagine the same humble animation four times, a boulder labeled distraction, one wrench gift removes one boulder on the path to promised land.',
    label: 'Format playbook · Magic gifts animation ×4',
  },
  'mn-gifts-chrome-08': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a poll on which obstacle readers would remove first. AI defaults, trackers, tab chaos, or contact creep, and ship the winning gift next.',
    label: 'Format playbook · Magic gifts poll',
  },
  'mn-gifts-chrome-09': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a blog on four magic gifts with honest partial framing, mapping obstacles to product truth including the contacts reframe row.',
    label: 'Format playbook · Magic gifts blog; [[MAGIC_GIFTS_BRIEF]] mapping',
  },

  // ,  B2C Present evidence Evidence , 
  'mn-promised-chrome-05': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a LinkedIn poll where six Oasis launch taglines compete, and the audience picks which line should anchor the Product Hunt hero subcopy.',
    label: '[[OASIS_LIFE_BRIEF|tagline bank]]',
  },
  'mn-evidence-chrome-03': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine the Oasis of Life poem as one stanza per slide, or a thread, with austere serene typography and optional mood keywords on slide one.',
    label: 'Verbatim poem; [[OASIS_LIFE_BRIEF|copy bank]]',
  },
  'mn-evidence-chrome-04': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine Lena’s story published long-form: tab groups replace tab chaos, search surfaces the right report, and she exhales for the first time in hours.',
    label: '“An Organized Way to Browse”; legal on product claims',
  },
  'mn-evidence-chrome-05': {
    channel: 'Internal',
    format: 'internalDoc',
    essence:
      'Imagine a one-page creative brief that maps Zen, Serene, Tranquil, and Austere to the PH header, launch video, and poem carousel before production locks.',
    label: '[[OASIS_LIFE_BRIEF|mood keywords]]',
  },
  'mn-evidence-chrome-01': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine the Kahana Chrome 2025 hub post updated as the owned evidence anchor, with every third-party stat footnoted and no “Oasis collects nothing” overclaim.',
    label: '[[CHROME_BLOG|Kahana blog]]',
  },
  'mn-evidence-chrome-02': {
    channel: 'Internal',
    format: 'pdf',
    essence:
      'Imagine a bibliography plus PH asset matrix page comms and legal can hand to anyone producing Chrome or launch content, one list, no broken links.',
    label: '[[PH_BRIEF|Brief 01]] formats',
  },
  'mn-ph-chrome-08': {
    channel: 'ProductHunt',
    format: 'image',
    essence:
      'Imagine the remaining launch pack pieces: vertical story frame, 240×240 thumbnail with logo only, and a checklist proving every PH deliverable exists.',
    label: 'Story + thumbnail; [[PH_BRIEF|Brief 01]]',
  },
  'mn-evidence-chrome-06': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a seven-slide product gallery, seven screenshots, seven calm moments, one caption each beside the poem carousel option.',
    label: 'Format playbook · Present evidence carousel alt; [[OASIS_LIFE_BRIEF]]',
  },
  'mn-evidence-chrome-07': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'ProductHunt'],
    format: 'videoMixed',
    essence:
      'Imagine a thirty-second launch montage, poem lines as text cards, product flashes, PH hook and date on the end card.',
    label: 'Format playbook · Present evidence short-form; extends [[mn-ph-chrome-07]]',
  },
  'mn-evidence-chrome-08': {
    channel: 'Multi',
    channels: ['Instagram', 'TikTok', 'YouTube', 'LinkedIn'],
    format: 'videoAnimation',
    essence:
      'Imagine a gentle poem flipbook, stick figure finds shade by a pond, handwritten lines, Oasis for you on the end card.',
    label: 'Format playbook · Present evidence animation',
  },
  'mn-evidence-chrome-09': {
    channel: 'LinkedIn',
    format: 'poll',
    essence:
      'Imagine a follow-up poll, what proof convinced you most, demo, user story, third-party stats, or poem, after the tagline poll runs.',
    label: 'Format playbook · Present evidence poll B; after [[mn-promised-chrome-05]]',
  },
  'mn-evidence-chrome-10': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a blog sprint publishing the refreshed Chrome privacy hub and Lena’s organized-browsing story as owned evidence anchors.',
    label: 'Format playbook · Present evidence blog; [[mn-evidence-chrome-01]] + [[mn-evidence-chrome-04]]',
  },

  // ,  B2B Name the change Change , 
  'mn-change-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine an opener, blog or deck slide one, that names the AI Oversight Gap: AI in the browser outran governance, with one IBM 2025 stat and a consortium invitation.',
    label: '[[CONSORTIUM|consortium page]]',
  },
  'mn-change-02': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a thought piece where the browser is the default AI workspace and security teams are still stuck at Level 2 policy maturity.',
    label: 'DLP/SASE blind spot to browser AI',
  },
  'mn-change-03': {
    channel: 'LinkedIn',
    format: 'carousel',
    essence:
      'Imagine a three-slide carousel: post-breach security budgets are shrinking, buyers want discipline not another tool, and CISOs get a question not a pitch.',
    label: 'IBM 49% vs 63% stat',
  },
  'mn-change-04': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a consortium launch narrative: operator-led, evidence-based browser-layer standards so AI usage is visible, governable, and safe.',
    label: '[[CONSORTIUM|consortium mission]]',
  },
  'mn-change-05': {
    channel: 'Multi',
    channels: ['LinkedIn', 'YouTube'],
    format: 'videoMixed',
    essence:
      'Imagine a 30–60 second video with three beats on screen, browser AI, oversight gap, discipline over budget, max eight words per beat, one stat total.',
    label: 'Vertical + horizontal cuts',
  },

  // ,  B2B Name the villain Winners/losers , 
  'mn-winners-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a stat-led post where shadow AI is everywhere, unauthorized tools, breach premium, data compromise, and the loser future is governance theater.',
    label: '80–98% unauthorized; +$670K premium',
  },
  'mn-winners-02': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine an executive brief that shows confidential data leaking through prompts, paste, uploads, and extensions where DLP never looks.',
    label: 'Browser-layer visibility gift',
  },
  'mn-winners-03': {
    channel: 'SalesDeck',
    format: 'pdf',
    essence:
      'Imagine a one-page pressure-test slide: $6.68M expected breach cost, 241-day detection, 100+ day recovery, status quo vs control quality.',
    label: 'IBM composite narrative',
  },
  'mn-winners-04': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a winners-vs-losers post: 97% of orgs with AI incidents lacked proper AI access controls, and the winner path is boundaries, not hope.',
    label: 'Verify cohort wording (41% vs 63%)',
  },
  'mn-winners-05': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine a blog on preventable costs, skills gaps, shadow AI, missing fundamentals, without a fixed ROI claim that legal has not approved.',
    label: 'IBM composite; no fixed ROI',
  },
  'mn-winners-06': {
    channel: 'LinkedIn',
    format: 'infographic',
    essence:
      'Imagine the first “Stats that matter” infographic, one headline number (97% access gap or 86% disruption) designed for CISO shareability.',
    label: 'Series kickoff',
  },

  // ,  B2B Winners and losers and Magic gifts , 
  'mn-promised-01': {
    channel: 'SalesDeck',
    format: 'writing',
    essence:
      'Imagine one Promised Land paragraph for security leaders: the oversight gap closes. AI in the browser is visible, governable, and safe.',
    label: '[[CONSORTIUM|consortium mission]]',
  },
  'mn-promised-02': {
    channel: 'Internal',
    format: 'writing',
    essence:
      'Imagine a champion talk track, one sentence after the meeting, on what we do for browser AI governance with no feature names.',
    label: 'Sales enablement',
  },
  'mn-gifts-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a magic-gift post: you cannot govern what you do not inventory, shadow AI discovery as the gift on the path to the Promised Land.',
    label: 'Consortium workstream',
  },
  'mn-gifts-02': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine a magic-gift post where enforceable governance for prompts, uploads, and extensions is the gift, not a feature dump.',
    label: 'Obstacle → gift → Promised Land',
  },
  'mn-evidence-01': {
    channel: 'LinkedIn',
    format: 'writing',
    essence:
      'Imagine an evidence post that cites IBM Cost of a Data Breach 2025 with proper Ponemon attribution, never reproducing the full report.',
    label: '[[IBM_BREACH|IBM 2025]]',
  },
  'mn-evidence-02': {
    channel: 'Blog',
    format: 'writing',
    essence:
      'Imagine the consortium page positioned as proof of operator-led standards, governance, shadow AI discovery, complexity reduction workstreams live.',
    label: '[[CONSORTIUM|consortium page]]',
  },
}

export function enrichTask({ id, label, linearId, linearUrl, ...rest }) {
  const meta = TASK_META[id]
  if (!meta) {
    return { id, label, linearId, linearUrl, ...rest }
  }
  return {
    id,
    channel: meta.channel,
    format: meta.format,
    channels: meta.channels,
    essence: meta.essence,
    label: meta.label ?? label,
    linearId,
    linearUrl,
    ...rest,
  }
}
