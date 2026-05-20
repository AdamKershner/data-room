/**
 * Verbatim creative concepts from Ideas.docx, mapped to B2C narrative beats.
 * @see /marketing-narrative-checklist (B2C filter)
 */

/** @typedef {'change'|'chrome-villain'|'winners-losers'|'promised-land'|'magic-gifts'|'evidence'} B2cNarrativeBeatId */

/**
 * @typedef {object} B2cCreativeConceptSuggestion
 * @property {string} id
 * @property {number} number
 * @property {string} title
 * @property {B2cNarrativeBeatId} sectionId
 * @property {string} body – Verbatim from Ideas.docx (paragraphs separated by blank lines)
 */

/** @type {B2cCreativeConceptSuggestion[]} */
export const B2C_CREATIVE_CONCEPT_SUGGESTIONS = [
  {
    id: 'idea-01-data-has-legs',
    number: 1,
    title: '"Your Data Has Legs"',
    sectionId: 'change',
    body: `A cute little character named Data is born every time someone searches, clicks, opens a tab, or watches something.
At first, the Data character looks adorable: tiny eyes, tiny shoes, carrying little notes like "late night search," "bank login," "shopping cart," "private question."
Then the twist: every website quietly grabs one of the little Data creatures. Soon, hundreds of them are being pulled into trucks, pipes, auctions, and shadowy factories.
The user has no idea. They are just browsing normally.
Then Oasis appears as a calm, soft space. The little Data characters run into it like a sanctuary. Door closes. Silence. Peace.
Line:
"Your data shouldn't have to escape the internet. Your browser should protect it."
Vibe of the content: cute + creepy + emotionally clear. Data privacy becomes visible.`,
  },
  {
    id: 'idea-02-browser-is-leaking',
    number: 2,
    title: '"The Browser Is Leaking"',
    sectionId: 'promised-land',
    body: `A person is working on their laptop. Everything looks normal.
Then the camera zooms out and shows their browser as a cute little house. But the house is leaking everywhere: search history dripping through pipes, tabs spilling from windows, cookies falling out of the chimney, personal info leaking under the door.
The person keeps mopping, taping, plugging holes, accepting cookie banners, closing pop-ups, but the leaks keep coming.
Then Oasis arrives like a beautiful renovated home: soft light, clean windows, strong walls, calm AI assistant inside.
Line:
"Maybe the problem isn't you. Maybe your browser was built to leak."
Vibe of the content: super simple metaphor. Easy to understand in 5 seconds.`,
  },
  {
    id: 'idea-03-dumb-ways-to-leak-data',
    number: 3,
    title: '"Dumb Ways to Leak Data"',
    sectionId: 'change',
    body: `Not a direct copy, but spiritually: cute chaotic mini-scenes showing absurd ways your data escapes.
A character clicks "accept all" and gets vacuumed into a cookie jar. Another searches "why is my throat weird" and giant ad billboards start following them. Another opens 48 tabs and gets buried alive in them. Another types a private thought and a tiny spy with binoculars appears behind the search bar.
Then:
"There's a smarter way to browse."
Oasis appears.
Line:
"Private by default. AI when you need it. Beautiful always."
Vibe of the content: memeable, fast-paced, repeatable series format.`,
  },
  {
    id: 'idea-04-ad-goblin',
    number: 4,
    title: '"The Ad Goblin"',
    sectionId: 'change',
    body: `A person searches for one pair of shoes.
A tiny goblin appears.
At first it's cute. It holds up one shoe ad.
Then it follows them everywhere: at work, in bed, in the shower, on a date, at grandma's house. It grows bigger with every click.
The person whispers, "I just looked once."
The goblin smiles and says, "I know."
Then Oasis opens. The goblin hits an invisible wall. Inside Oasis, silence.
Line:
"Browse without being followed."
Vibe of the content: relatable and funny. Everyone has experienced one search haunting them for weeks.`,
  },
  {
    id: 'idea-05-tab-zoo',
    number: 5,
    title: '"The Tab Zoo"',
    sectionId: 'magic-gifts',
    body: `Every open tab becomes an animal.
Email is a screaming parrot. Google Docs is a tired horse. YouTube is a dancing monkey. Shopping tabs are raccoons stealing attention. Research tabs are anxious owls. One forgotten tab is a dusty dinosaur.
The user is trying to work but the tab animals are destroying the room.
Then Oasis appears. The AI gently organizes the animals into calm habitats: work, research, shopping, personal, later.
Line:
"Your tabs aren't the problem. Your browser is."
Vibe of the content: adorable, highly visual, very shareable. Also naturally shows AI without saying "AI agent."`,
  },
  {
    id: 'idea-06-browser-funeral',
    number: 6,
    title: '"The Browser Funeral"',
    sectionId: 'chrome-villain',
    body: `A dramatic, cinematic funeral for old browsers.
People gather around a gray browser icon coffin. Someone gives a speech:
"He opened our tabs. He remembered our passwords. But he never really understood us."
The mourners cry. One person says, "He also tracked everything I did." Everyone nods awkwardly.
Then a fresh, beautiful Oasis window opens in the sky like sunrise.
Line:
"RIP boring browsers."
Or:
"The internet changed. Your browser didn't."
Vibe of the content: funny, bold, slightly savage, made for comments.`,
  },
  {
    id: 'idea-07-internet-aquarium',
    number: 7,
    title: '"The Internet Aquarium"',
    sectionId: 'change',
    body: `The user is a fish swimming through the internet.
They think they're free, but then the camera zooms out: they're inside a glass aquarium. Outside the glass are giant eyes watching, taking notes, dropping ads, tracking movements.
The fish gets anxious.
Then it swims into Oasis. The glass turns into a one-way mirror. The fish can see out, but the watchers can't see in.
Line:
"Explore the web without feeling watched."
Vibe of the content: beautiful, eerie, and aesthetic. Great for soft cinematic animation.`,
  },
  {
    id: 'idea-08-ai-with-manners',
    number: 8,
    title: '"AI With Manners"',
    sectionId: 'promised-land',
    body: `Most AI is shown as loud and intrusive: a robot bursts into the room, reads everything, opens drawers, interrupts, gives random advice, and yells "I CAN HELP."
The user looks horrified.
Then Oasis AI appears differently: calm, elegant, quiet. It knocks before entering. It asks before taking action. It helps only when needed. It organizes tabs gently, summarizes a page, finds a saved thought, and leaves.
Line:
"AI should feel helpful, not invasive."
Vibe of the content: this is a very strong Oasis lane, AI + privacy + elegance.`,
  },
  {
    id: 'idea-09-search-bar-exhausted',
    number: 9,
    title: '"The Search Bar Is Exhausted"',
    sectionId: 'magic-gifts',
    body: `The search bar is a character.
Every day people dump impossible tasks into it:
"Find that article I saw last week." "Summarize this." "Compare these 12 tabs." "Remember where I saw that thing." "Plan this project." "Why is my laptop screaming."
The search bar gets tired, sweaty, overwhelmed, and collapses.
Then Oasis enters and says:
"I got this."
The browser becomes an assistant, not just a box.
Line:
"The search bar was never meant to do all this."
Vibe of the content: funny, smart, and product-relevant.`,
  },
  {
    id: 'idea-10-gray-vs-soft-internet',
    number: 10,
    title: '"The Gray Internet vs. The Soft Internet"',
    sectionId: 'promised-land',
    body: `Split-screen animation.
Left side: old browser world. Gray, sharp, crowded, corporate, pop-ups, tabs, cookie banners, trackers, ugly UI, loud notifications.
Right side: Oasis world. Soft, calm, clean, pastel, beautiful, AI assistant, organized thoughts, protected data.
No dialogue. Just contrast.
Line:
"The web doesn't have to feel this way."
Vibe of the content: aesthetic-first. Very good for TikTok/Reels because the visual transformation itself is satisfying.`,
  },
  {
    id: 'idea-11-cookie-crumb-trail',
    number: 11,
    title: '"The Cookie Crumb Trail"',
    sectionId: 'change',
    body: `A person walks through the internet leaving cookie crumbs behind.
At first it feels cute, like a fairy tale.
Then hundreds of strange creatures follow the trail: advertisers, trackers, recommendation monsters, spam bots, suspicious salesmen.
The person turns around and realizes the trail led everyone straight to them.
Oasis appears and gently sweeps the crumbs away.
Line:
"You shouldn't have to leave a trail everywhere you go."
Vibe of the content: simple, timeless, visually playful.`,
  },
  {
    id: 'idea-12-data-auction',
    number: 12,
    title: '"The Data Auction"',
    sectionId: 'chrome-villain',
    body: `Every click becomes a tiny object.
A search becomes a glowing marble. A shopping cart becomes a little bag. A location becomes a compass. A medical question becomes a fragile glass heart.
These objects roll into a giant auction house where faceless bidders raise paddles.
Then Oasis drops a curtain. The auctioneer looks confused. No more items arrive.
Line:
"Your curiosity isn't inventory."
This line is strong.
Vibe of the content: darker, premium, more serious. Great for a high-impact brand film.`,
  },
  {
    id: 'idea-13-browser-that-judges-you',
    number: 13,
    title: '"The Browser That Judges You"',
    sectionId: 'change',
    body: `A user searches normal but private things:
"how to quit job politely" "why am I tired all the time" "gift for girlfriend after argument" "do I need a lawyer" "is this rash bad"
The old browser slowly grows eyes, eyebrows, and a judgmental face. Ads and suggestions become more uncomfortable.
Then Oasis appears as a nonjudgmental space.
Line:
"Some searches deserve silence."
Vibe of the content: very human. Privacy is not only about data; it is about dignity.`,
  },
  {
    id: 'idea-14-lost-thought',
    number: 14,
    title: '"The Lost Thought"',
    sectionId: 'magic-gifts',
    body: `A tiny glowing idea appears above someone's head.
They open a browser to research it.
Immediately, the idea gets lost in tabs, ads, pop-ups, links, videos, notifications, and distractions. The tiny idea is running through a chaotic city screaming for help.
Oasis AI finds it, protects it, organizes the research, and brings it back to the user as a clear project.
Line:
"Don't let the internet eat your ideas."
Vibe of the content: creator/student/founder audience would love this.`,
  },
  {
    id: 'idea-15-old-browser-new-internet',
    number: 15,
    title: '"Old Browser, New Internet"',
    sectionId: 'chrome-villain',
    body: `A browser from 2008 wakes up in 2026.
It sees AI agents, 80 open tabs, trackers, SaaS tools, remote work, personal data, shopping, creator workflows, and 20 cookie banners.
It panics.
User says, "You okay?"
Browser says, "I was built for checking email."
Then Oasis appears.
Line:
"The internet evolved. Your browser should too."
Vibe of the content: funny and strategically sharp. Explains why old browsers feel outdated.`,
  },
  {
    id: 'idea-16-private-island',
    number: 16,
    title: '"The Private Island"',
    sectionId: 'promised-land',
    body: `The internet is shown as a giant noisy ocean.
Websites are boats yelling at the user. Trackers are fishing hooks. Ads are seagulls. Tabs are waves. AI tools are floating robots yelling suggestions.
The user is drowning in digital noise.
Then they find Oasis: a calm island with soft light, organized workspaces, a quiet AI helper, and protected boundaries.
Line:
"Find your calm on the internet."
Vibe of the content: matches the name "Oasis" perfectly without being too literal.`,
  },
  {
    id: 'idea-17-browser-personality-test',
    number: 17,
    title: '"Browser Personality Test"',
    sectionId: 'winners-losers',
    body: `A fun animated quiz-style video:
"Your browser type says a lot about you."
Old browser users:
• 74 tabs open
• accepts all cookies because tired
• searches the same thing five times
• loses articles forever
• gets followed by shoe ads
• says "I'll organize this later"
Then Oasis user:
• calm tabs
• private browsing
• AI assistant
• aesthetic workspace
• main character energy
Line:
"Maybe your browser is your toxic relationship."
Vibe of the content: comment-bait, relatable, TikTok-native.`,
  },
  {
    id: 'idea-18-ai-pet',
    number: 18,
    title: '"The AI Pet"',
    sectionId: 'magic-gifts',
    body: `Oasis AI is represented as a cute little creature living inside the browser.
But unlike creepy AI, it has rules: It doesn't open doors without asking. It doesn't read your diary. It doesn't shout. It learns when you correct it. It gets better with you.
When a command fails, the user gently trains it. The creature evolves, gets smarter, and helps faster.
Line:
"An AI browser that learns your way."
Vibe of the content: turns AI training/correction into something emotionally cute.`,
  },
  {
    id: 'idea-19-messy-bedroom',
    number: 19,
    title: '"The Internet Is a Messy Bedroom"',
    sectionId: 'magic-gifts',
    body: `The whole browser is visualized as a teenager's messy room.
Tabs are clothes on the floor. Bookmarks are old pizza boxes. History is under the bed. Downloads are random socks. Ads are bugs crawling around. Cookie banners are sticky notes everywhere.
Oasis enters like a magical room makeover: everything becomes clean, calm, pretty, and functional.
Line:
"Clean up your internet life."
Vibe of the content: satisfying transformation content always performs well.`,
  },
  {
    id: 'idea-20-cutesy-browser-revolution',
    number: 20,
    title: '"The Cutesy Browser Revolution"',
    sectionId: 'evidence',
    body: `Start with a dramatic war-movie voiceover:
"For decades, browsers were built by serious people… for serious productivity…"
Visuals show ugly gray windows, corporate dashboards, endless tabs.
Then cute animated users rise up with stickers, soft colors, AI companions, privacy shields, and beautiful workspaces.
Line:
"Productivity doesn't have to be ugly."
Vibe of the content: this owns the aesthetic angle directly. Very Gen Z / design-conscious.`,
  },
]

/**
 * @param {B2cNarrativeBeatId | string} sectionId
 * @returns {B2cCreativeConceptSuggestion[]}
 */
export function getCreativeConceptsForBeat(sectionId) {
  return B2C_CREATIVE_CONCEPT_SUGGESTIONS.filter((item) => item.sectionId === sectionId).sort(
    (a, b) => a.number - b.number
  )
}
