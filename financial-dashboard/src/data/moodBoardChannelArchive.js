/**
 * Mood Board channel archive — drafts and examples by outlet.
 * LinkedIn is seeded. Instagram, TikTok, X, YouTube get empty slots until copy exists.
 * Official Kahana posts still ship through SOP 8. Adam’s personal posts follow founder brand.
 */

export const CHANNELS = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    blurb: 'Long-form narrative. Company page is sourced and institutional. Adam’s personal page is first-person noticing. Same beat, two voices.',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    blurb: 'No drafts yet. File a caption and visual note here when one exists.',
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    blurb: 'No drafts yet.',
  },
  {
    id: 'x',
    title: 'X',
    blurb: 'No drafts yet.',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    blurb: 'No drafts yet. Video cuts still follow SOP 11.',
  },
]

/** Five-beat LinkedIn sequence. One beat per week. Company + Adam pair. */
export const NARRATIVE_BEATS = [
  {
    id: 'world-changed',
    number: 1,
    title: 'The world changed',
    job: 'Name the new scarcity. Access is solved. Abundance (and AI authorship) is the problem. End on discernment, not a product pitch.',
    whyGood:
      'Company cites Pew. Adam tells the save-never-return / five-apps hour. Both land “when content becomes infinite, discernment becomes everything.” Do not skip the source on the company page. Do not make Adam’s post a press release.',
  },
  {
    id: 'villain',
    number: 2,
    title: 'Establish the villain',
    job: 'Name the Infinite Feed as a system, not a company, not AI, not creators, not the audience. Reaction ≠ value.',
    whyGood:
      'Company uses PNAS Nexus on engagement ranking. Adam refuses the cartoon villain (“let’s turn people into vegetables”) and names incentive metrics instead. Do not dunk on a named platform as the only enemy.',
  },
  {
    id: 'promised-land',
    number: 3,
    title: 'Tease the Promised Land',
    job: 'Make people feel a living library before you name every feature. Alexandria is the longing, not a history lecture.',
    whyGood:
      'Company asks what a digital library would feel like. Adam keeps the legend and the “its promise does” close. Do not dump Hubs / Clubs / Aura on this beat.',
  },
  {
    id: 'gifts',
    number: 4,
    title: 'Introduce the magical gifts',
    job: 'Now name Kahana — Hubs, Explore, Clubs, five Aura a day. Scarcity of recognition is the point.',
    whyGood:
      'Company is the how. Adam answers why only five Aura and why you cannot Aura yourself. Do not call Aura money, crypto, or a truth stamp.',
  },
  {
    id: 'evidence',
    number: 5,
    title: 'Present the evidence',
    job: 'Proof is what people built, not the manifesto. Named hubs, files, people, and return visits.',
    whyGood:
      'Company uses 4 Sep 2026 traction plus Vetter / Wang / Kadwani. The manifesto is not the proof. Adam does not have a pair in this batch yet — do not invent one.',
  },
]

export const POST_DRAFTS = [
  {
    id: 'li-1-company',
    channel: 'linkedin',
    voice: 'company',
    voiceLabel: 'Kahana company page',
    beat: 'world-changed',
    status: 'draft',
    hashtags: ['Kahana', 'FutureOfLearning', 'DigitalLibrary'],
    research: [
      {
        label: 'Pew Research Center',
        note: 'July 2026 analysis of ~490,000 English-language pages; 10% overall show significant signs of AI authorship, more than one-third of pages published after ChatGPT. Sample of 10,000 pages: one-in-ten written or substantially edited by AI. Detection is imperfect; AI-generated does not automatically mean low-quality.',
      },
    ],
    body: `The internet’s newest problem isn’t access.
It’s abundance.

For most of human history, knowledge was scarce. The internet changed that by making information available to almost anyone.

Now, AI is changing the economics of creation itself.

In a July 2026 analysis of roughly 490,000 English-language webpages, Pew Research Center found significant signs of AI authorship in 10% of pages overall—and in more than one-third of pages published after ChatGPT arrived.

AI-generated does not automatically mean low-quality, and detection is imperfect.

But the direction is clear:
Content is becoming infinite.
Human attention is not.

The defining question of the next era will no longer be:
“Can we access information?”
It will be:
“What deserves our time?”

Over the coming weeks, we’ll share why we believe the internet needs a different kind of place for knowledge.

A place built around intention, context, community, and human judgment.

When content becomes infinite, discernment becomes everything.

Do you feel more informed today—or simply more exposed to information?

Research: Pew Research Center`,
  },
  {
    id: 'li-1-adam',
    channel: 'linkedin',
    voice: 'adam',
    voiceLabel: 'Adam’s personal page',
    beat: 'world-changed',
    status: 'draft',
    hashtags: [],
    research: [],
    body: `I don’t think most people need more content.
I think we need a better way to decide what enters our minds.

I started noticing how often I would:
Save a post and never return to it.
Open five different apps while trying to understand one subject.
Spend an hour consuming information—and struggle to explain one thing I had actually learned.

The internet has given us access to more knowledge than any generation before us.
But access and understanding are not the same thing.

And now that AI can produce content faster than any person can evaluate it, the gap between the two is becoming impossible to ignore.

Our new scarcity isn’t information.
It’s judgment.
It’s context.
It’s sustained attention.
It’s knowing what deserves to stay with us.

That realization has shaped how I think about what we’re building at Kahana.

When content becomes infinite, discernment becomes everything.

What is something you read or watched recently that genuinely changed how you think?`,
  },
  {
    id: 'li-2-company',
    channel: 'linkedin',
    voice: 'company',
    voiceLabel: 'Kahana company page',
    beat: 'villain',
    status: 'draft',
    hashtags: ['Kahana', 'AttentionEconomy', 'IntentionalLearning'],
    research: [
      {
        label: 'PNAS Nexus',
        note: 'Preregistered study of Twitter’s political feed: engagement-based ranking amplified more divisive content than a chronological feed; users did not actually prefer the posts the algorithm selected.',
      },
    ],
    body: `We call it the Infinite Feed.

It isn’t one company, one algorithm, or one person sitting in a boardroom.

It is a system:
Zero-friction content creation combined with discovery optimized for immediate engagement.

Its symptoms are everywhere:
AI slop.
Rage bait.
Endless short-form loops.
Saved posts we never revisit.
Valuable knowledge scattered across feeds, folders, newsletters, videos, and PDFs.

A preregistered study of Twitter’s political feed found that engagement-based ranking amplified more divisive content than a chronological feed.

More importantly, users did not actually prefer the posts the algorithm selected for them.

What earns an immediate reaction is not necessarily what we value on reflection.

AI is not the villain.
Creators are not the villain.
The audience is certainly not the villain.

The villain is a system that confuses attention captured with value created.

The Infinite Feed gives us more to consume.
But does it help us understand more?

Research: PNAS Nexus`,
  },
  {
    id: 'li-2-adam',
    channel: 'linkedin',
    voice: 'adam',
    voiceLabel: 'Adam’s personal page',
    beat: 'villain',
    status: 'draft',
    hashtags: [],
    research: [],
    body: `No serious product team walks into a boardroom and writes:
“Let’s turn people into vegetables.”

And yet, passivity can still become the outcome.

It happens when thousands of reasonable product decisions optimize for the same things:
More clicks.
More sessions.
More switching.
More time on the platform.

None of those metrics is inherently bad.

But when they become the only definition of success, something important gets lost:
Whether the person on the other side actually found value.
Whether they understood something.
Whether they returned to it.
Whether it helped them think, create, or make a better decision.

That is why I don’t think the villain is technology—or even AI.

The villain is an incentive system that knows how to measure reaction, but rarely asks what was worth remembering.

We have spent years improving our ability to capture attention.

Perhaps the next generation of products should help people reclaim it.`,
  },
  {
    id: 'li-3-company',
    channel: 'linkedin',
    voice: 'company',
    voiceLabel: 'Kahana company page',
    beat: 'promised-land',
    status: 'draft',
    hashtags: ['Kahana', 'DigitalLibrary', 'FutureOfKnowledge'],
    research: [],
    body: `What if the internet felt like a library again?

Not a silent warehouse of digital files.
A living library.

A place where you arrive with intention instead of surrendering your next hour to a feed.
Where knowledge is gathered into thoughtful paths instead of scattered across tabs and apps.
Where you can see who contributed something—and why it belongs.
Where people can read, watch, highlight, discuss, and build understanding together.
Where human judgment helps worthwhile contributions become more visible.

The ancient world built libraries because knowledge was scarce.
Our generation needs them for the opposite reason:
Knowledge is abundant.
Signal is scarce.

The Promised Land isn’t an internet without AI, entertainment, or short-form content.
It is an internet where people have more agency over what they explore, trust, discuss, and allow to shape their thinking.

The Library of Alexandria does not need to rise again stone by stone.
Its promise does.

What would your ideal digital library feel like?`,
  },
  {
    id: 'li-3-adam',
    channel: 'linkedin',
    voice: 'adam',
    voiceLabel: 'Adam’s personal page',
    beat: 'promised-land',
    status: 'draft',
    hashtags: [],
    research: [],
    body: `Legends speak of the Library of Alexandria as a place built to gather the world’s knowledge.

Its real history is more complex than the legend.
But the legend survives because the longing behind it survives:
To bring knowledge together.
To preserve it.
To give it context.
To put great minds in conversation with one another.

The ancient library answered a world where knowledge was scarce.
The library we need today must answer a world where content is endless—but meaning is difficult to find.

Wouldn’t it be beautiful if there were a place online where:
You didn’t arrive to be entertained into passivity.
You could follow an idea deeply instead of losing it between platforms.
Learning felt communal instead of isolating.
And worthwhile knowledge could rise because real people found it valuable—not simply because an algorithm predicted a reaction.

Alexandria does not need to rise again stone by stone.
Its promise does.

Perhaps we need that promise now more than ever.`,
  },
  {
    id: 'li-4-company',
    channel: 'linkedin',
    voice: 'company',
    voiceLabel: 'Kahana company page',
    beat: 'gifts',
    status: 'draft',
    hashtags: ['Kahana', 'Aura', 'DigitalLibrary'],
    research: [],
    cta: 'Explore the Library. Create a Hub. Give your Aura. Discover Kahana.',
    body: `Meet Kahana—the digital library with Aura.

A place designed to help people discover, organize, discuss, and recognize knowledge worth their attention.

Here is how it works:

Hubs turn scattered ebooks, videos, documents, images, links, and notes into curated knowledge collections—with context around why each resource belongs.

Library and Explore help people discover public Hubs, contributors, and learning communities.

Clubs give groups a shared place to read, build lists, and discuss ideas together.

Aura helps worthwhile contributions become more visible.
Every member receives only five Aura each day.
You cannot give Aura to your own work.

It isn’t money, crypto, a star rating, or a guarantee that something is true.
It is a deliberately scarce community signal: a way to say, “This was worth my attention. It may be worth yours too.”

The feed predicts what you will react to.
Kahana helps you choose what is worth your time.

Explore the Library. Create a Hub. Give your Aura.
Discover Kahana`,
  },
  {
    id: 'li-4-adam',
    channel: 'linkedin',
    voice: 'adam',
    voiceLabel: 'Adam’s personal page',
    beat: 'gifts',
    status: 'draft',
    hashtags: [],
    research: [],
    body: `Why does everyone receive only five Aura a day?

Because unlimited recognition quickly becomes background noise.
If we could endorse everything, the endorsement would mean very little.

Scarcity creates a moment of discernment:
Did this teach me something?
Will I return to it?
Would I genuinely recommend that someone else spend their attention here?

Aura also cannot be given to your own work.
That matters.

The goal is not to help people manufacture popularity around themselves. It is to make appreciation travel between contributors, learners, and communities.

Aura does not prove that something is true.
It does not certify expertise.
It does not guarantee quality.

It is something simpler and more human:
A limited signal from another person who believed your contribution was worth recognizing.

We are surrounded by platforms that make content production effortless.
We wanted to make recognition deliberate.

That is one of the ideas at the heart of Kahana—the digital library with Aura.`,
  },
  {
    id: 'li-5-company',
    channel: 'linkedin',
    voice: 'company',
    voiceLabel: 'Kahana company page',
    beat: 'evidence',
    status: 'draft',
    hashtags: ['Kahana', 'CreatorEconomy', 'FutureOfLearning'],
    research: [],
    cta: 'Explore Kahana’s success stories',
    body: `The living library has already begun.

As of September 4, 2026, Kahana’s public success stories report:
More than 1,400 Hubs.
More than 17,000 files.
More than 6,500 people.

But the more meaningful proof is what those numbers represent.

Kelsey Vetter turned 11 resources into a structured workshop Hub priced at $97 and viewed more than 3,500 times.

Amy Wang packaged career knowledge into an 11-file Hub priced at $30 and viewed more than 28,000 times.

Rashmi Kadwani gathered 38 resources into a free guided-journal Hub—showing that valuable knowledge does not always need to sit behind a price.

Workshops.
Career playbooks.
Templates.
Guided journals.
Learning communities.

Knowledge that once lived across disconnected folders, posts, and platforms now has a home people can discover and return to.

Our manifesto is not the proof.
What people build, share, discuss, endorse, and return to is.

This is only the beginning.

Explore Kahana’s success stories`,
  },
]
