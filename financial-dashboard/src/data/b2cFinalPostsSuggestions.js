/**
 * Verbatim LinkedIn launch posts from Oasis_Final_Posts.docx, mapped to B2C narrative beats.
 * @see /marketing-narrative-checklist (B2C filter)
 */

/** @typedef {'change'|'chrome-villain'|'winners-losers'|'promised-land'|'magic-gifts'|'evidence'} B2cNarrativeBeatId */

/**
 * @typedef {object} B2cFinalPostSuggestion
 * @property {string} id
 * @property {number} number
 * @property {string} title
 * @property {B2cNarrativeBeatId} sectionId
 * @property {string} [schedule]
 * @property {boolean} [optional]
 * @property {string} body
 */

/** @type {B2cFinalPostSuggestion[]} */
export const B2C_FINAL_POSTS_SUGGESTIONS = [
  {
    id: 'final-post-seq-publishing',
    number: 0,
    title: 'Publishing sequence',
    sectionId: 'evidence',
    schedule: 'Oasis_Final_Posts.docx header',
    body: `Oasis Browser
LinkedIn Launch Posts — Final 3 (+1 Optional)
Product Hunt Launch: Wednesday May 21, 2026

Publishing sequence
When
Post
Goal
Tonight or Tue morning
Post 1: The Ad Goblin
Warm up the feed, drive comments
Tuesday evening 4-6pm
Post 2: Browser That Judges You
Build emotional weight before launch
Tuesday evening 7-9pm (optional)
Post 3: Anticipation Post
Prime supporters for launch day
Wed 12:01am PST
Post 4: Launch Day
Drive Product Hunt upvotes`,
  },
  {
    id: 'final-post-01-ad-goblin',
    number: 1,
    title: 'The Ad Goblin',
    sectionId: 'change',
    schedule: 'POST 1 OF 4 — TONIGHT OR TUESDAY MORNING',
    optional: false,
    body: `POST 1 OF 4 — TONIGHT OR TUESDAY MORNING

The Ad Goblin

THE POST

I searched for one pair of shoes.

Just once.

Three weeks later I was still seeing those shoes.
On news sites. On social media. On apps that had nothing to do with shopping.

I whispered to my screen: I just looked once.

The internet said: I know.

This is the thing that broke me into building Oasis.

Your browser is supposed to work for you. Not follow you.

We're launching on Product Hunt this Wednesday.
If you've ever been haunted by an ad, this one's for you.

[Product Hunt Link]`,
  },
  {
    id: 'final-post-02-browser-judges',
    number: 2,
    title: 'The Browser That Judges You',
    sectionId: 'change',
    schedule: 'POST 2 OF 4 — TUESDAY EVENING 4-6PM',
    optional: false,
    body: `POST 2 OF 4 — TUESDAY EVENING 4-6PM

The Browser That Judges You

THE POST

The searches nobody talks about:

"how to quit my job without burning everything down"
"why am I so tired all the time"
"do I need a lawyer"
"is this normal or should I see someone"
"gift for partner after a really bad fight"

These are the searches that make us human.

And right now, your browser is building a profile around every single one of them.

Not because it has to. Because that's how it was designed.

Some searches deserve silence.

That's why we built Oasis. Launching on Product Hunt this Wednesday.

[Product Hunt Link]

VISUAL DIRECTION

No animation needed - the text does the work. If using a visual: dark background, single search bar with one of the searches fading in and out. Minimal. No characters. Just the query and silence.

NOTES FOR ADAM: This is the most emotionally resonant post of the three. Works even better if Adam adds one personal search he's made that felt too private to be tracked. let it breathe.`,
  },
  {
    id: 'final-post-03-anticipation',
    number: 3,
    title: 'Anticipation Post (Optional)',
    sectionId: 'winners-losers',
    schedule: 'POST 3 OF 4 — TUESDAY EVENING 7-9pm (OPTIONAL)',
    optional: true,
    body: `POST 3 OF 4 — TUESDAY EVENING 7-9pm (OPTIONAL)

Anticipation Post (Optional)

Use this only if Adam wants a third post on Tuesday or wants to give supporters a heads-up before the launch post goes live at midnight. Skip it if the feed feels saturated or if Tuesday already has two posts.

THE POST

Tomorrow we launch Oasis on Product Hunt.

Oasis is a browser built for the way people actually use the internet today.
Private by default. AI that helps instead of interrupts. Beautiful to use.

If you've ever:
- Felt followed by an ad
- Lost a tab you needed
- Wished your browser actually understood you

Tomorrow is for you.

See you at the launch.

[Product Hunt Link]

VISUAL DIRECTION

Oasis logo on clean background. Simple. No clutter. This post is about tone, not visuals.

OPTIONAL — only use if there is time and appetite for a third Tuesday post. The sequence works fine without it. If skipping, go straight from Post 2 to the Launch Day post at midnight.`,
  },
  {
    id: 'final-post-04-launch-day',
    number: 4,
    title: 'Launch Day Post',
    sectionId: 'evidence',
    schedule: 'POST 4 OF 4 — WEDNESDAY 12:01AM PST — LAUNCH DAY',
    optional: false,
    body: `POST 4 OF 4 — WEDNESDAY 12:01AM PST — LAUNCH DAY

Launch Day Post

THE POST

Today is the day.

Oasis is live on Product Hunt.

We built a browser that:
- Doesn't track you
- Doesn't sell your data
- Has AI that helps without being invasive
- Makes the internet feel calm again

If that sounds like something the internet has been missing, we'd love your support today.

An upvote on Product Hunt takes 10 seconds and means everything to a small team.
A comment means even more.

[Product Hunt Link]

Thank you for building this with us.`,
  },
]

/**
 * @param {B2cNarrativeBeatId | string} sectionId
 * @returns {B2cFinalPostSuggestion[]}
 */
export function getFinalPostsForBeat(sectionId) {
  return B2C_FINAL_POSTS_SUGGESTIONS.filter((item) => item.sectionId === sectionId).sort(
    (a, b) => a.number - b.number
  )
}
