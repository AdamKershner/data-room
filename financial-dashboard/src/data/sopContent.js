/**
 * Standard Operating Procedures — team-facing product ops guides.
 * /sops is a searchable gallery; long-form SOPs at /sops/:sopId;
 * checklist SOPs at /sops/:sopId with /sops/:sopId/:stepId subpages.
 *
 * Clubs: Kahana Club SOPs (as of August 12, 2026) plus The Keeper’s Codex
 * checklist (v1.0 draft).
 */

import { KEEPERS_CODEX_STEPS, keepersCodexSearchBlob } from './keepersCodexSteps'

export const SOP_PAGE = {
  title: 'Standard Operating Procedures',
  subtitle:
    'Searchable guides for hosting clubs and other recurring product work on Kahana. Open a card to read the full procedure, or a checklist with digestible subpages.',
  freshnessNote:
    'Club SOPs 1–5 reflect Kahana as of August 12, 2026 (wishlist, voting, email invite, multi-step create builder). SOP 6 The Keeper’s Codex is a v1.0 draft checklist — Section VI is proposed, not standing. Re-check steps if the product UI has moved on.',
}

/** Categories used for gallery filters (order matters). */
export const SOP_CATEGORIES = ['Clubs']

const IMPROVE_SURVEY_URL = 'https://kahana.io/survey/improve?source=support_panel'

/** @typedef {{ text: string, note?: string, href?: string, hrefLabel?: string }} SopStep */

/**
 * @typedef {object} SopDoc
 * @property {string} id
 * @property {number} number
 * @property {string} title
 * @property {string} category
 * @property {string} description
 * @property {string[]} [keywords]
 * @property {string} who
 * @property {string} when
 * @property {string} [format] - 'checklist' for onboarding-style SOP pages
 * @property {string} [href] - Override gallery link (checklist index)
 * @property {string[]} [notes] - Callouts shown under Who/When
 * @property {{ id: string, title: string, intro?: string, steps: SopStep[] }[]} sections
 * @property {string[]} doneWhen
 */

/** @type {SopDoc[]} */
export const SOPS = [
  {
    id: 'running-a-book-or-video-club',
    number: 1,
    title: 'Running a Book Club or Video Club',
    category: 'Clubs',
    description:
      'Create a club through the multi-step builder, set visibility and policies, then run wishlist cycles with focus, Feed, Events, and Aura.',
    keywords: [
      'book club',
      'video club',
      'create club',
      'my clubs',
      'wishlist',
      'join mode',
      'visibility',
      'policies',
      'feed',
      'events',
      'aura',
      'host',
      'set as focus',
    ],
    who: 'Any team member hosting a club',
    when: 'Once at setup, then ongoing for every new title.',
    notes: [
      'The Preview button in the create builder is currently unreliable — use Create and publish, then check the live club.',
    ],
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        steps: [
          {
            text:
              'Decide the club’s focus and frequency before you create it. A clear theme — for example short documentary films, true crime stories, or contemporary fiction by women — usually helps you recruit the right members and pick titles later.',
          },
          {
            text:
              'Frequency can be one title per week or per month. These are decisions you make, not fields the form asks for when creating a club, so hold them in mind and put them in the description so members can decide if this is something they can commit to.',
          },
          {
            text:
              'In the left sidebar, open My Clubs, then click Create club (top right). This opens a builder with a settings menu on the left: Name, Description, Photos, Visibility, Join mode, Policies, and Invite link. Go through each in order, then create and publish.',
          },
          {
            text:
              'Give the club a clear name. This is a required field, and it appears on the club page and in Clubs discovery.',
          },
          {
            text:
              'Write a description that states the theme, the frequency, and that members vote on what to read or watch. The form does not have separate fields for these — a clear description is what convinces someone to join.',
          },
          {
            text:
              'Add a photo. One upload sets both the cover banner and the circular main photo on the club page. Portrait, 3:4, works best; use the focal point sliders to fix the crop.',
          },
          {
            text:
              'Choose visibility. Restricted (default): invite link only, hidden from the public Clubs page. Anyone with the link: people with your link can preview it, still hidden from Clubs. Visible on Clubs page: anyone browsing Clubs can discover it. Keep Restricted or Anyone with the link for invite-only; choose Visible when you want outsiders to find it.',
          },
          {
            text:
              'Choose a join mode. Autojoin lets anyone join immediately (open recruiting). Request to join lets you approve members (curated or private). Pick based on how much control you want over who joins.',
          },
          {
            text:
              'Complete the Policies step. This is required before a club can be made discoverable. Confirm the age rating and whether the club contains adult content, accept the public listing terms, and confirm you have the rights to the cover photo and materials. Do not skip this — a public club will not publish without it.',
          },
          {
            text:
              'Click Create and publish. On creation the club shows an invite link you can copy straight away.',
          },
        ],
      },
      {
        id: 'managing',
        title: 'Managing a club over time',
        steps: [
          {
            text:
              'Build the Wishlist. Open the club’s Wishlist and use Add to Wishlist. You can add a link (Goodreads, YouTube, Coursera, or any URL), a hub from the library, one of your own hubs, or an uploaded file. A title that is not yet a Kahana hub can still go on the list as a link.',
          },
          {
            text:
              'Run one cycle at a time. Each cycle the group picks what to read or watch next from the Wishlist and you set the dates. Members upvote items; you can sort by Votes or Recent. Ask members to vote nudges anyone who has not voted, once every 24 hours.',
            note: 'See SOP 3: Choosing what the club reads.',
          },
          {
            text:
              'Set the winner with Set as focus. It becomes the Current focus banner at the top of the club so members know what to read now. Clear focus when the cycle ends.',
          },
          {
            text:
              'Use the Feed tab as the discussion archive. Members post after finishing a hub or chapter with Create post; replies stay there as the club’s history.',
          },
          {
            text:
              'Use the Events tab to schedule live discussions or breakouts. The event builder covers Details (title, start time, time zone, description), Meeting (create a Google Meet, schedule or start Zoom, or paste any Zoom / Meet / Teams link, plus an optional location), Prep (link a Wishlist item and add a prep note), and Reminders (in-app and email nudges 1 week, 1 day, and 1 hour before). Past events stay archived with what was read.',
          },
          {
            text:
              'Encourage members to give Aura to the hubs they enjoy — that is how good work rises on Kahana and it keeps the club tied to the wider library.',
          },
          {
            text: 'Log anything broken or missing as you go.',
            note: 'See SOP 5: Logging feedback and issues.',
          },
        ],
      },
    ],
    doneWhen: [
      'The club exists on Kahana with a clear name and a detailed description covering theme and frequency.',
      'A photo is uploaded, and a join mode is set.',
      'Visibility is set deliberately: Visible on Clubs page if you want outsiders to join, or Restricted if it is invite-only.',
      'Policies are confirmed if the club is discoverable.',
      'At least one cycle has been planned or is running.',
    ],
  },

  {
    id: 'inviting-members-to-a-club',
    number: 2,
    title: 'Inviting Members to a Club',
    category: 'Clubs',
    description:
      'Grow a small active core via email invite, Suggested people, or the join link — and keep counts honest for later outreach.',
    keywords: [
      'invite',
      'members',
      'email',
      'join link',
      'suggested people',
      'recruit',
      'member count',
    ],
    who: 'Club host',
    when: 'At launch, then whenever numbers dip.',
    notes: [
      'These steps are written for the host. If members can also invite (to be confirmed), the same three routes apply, subject to the club’s join mode.',
      'Member count matters beyond the club itself. When we later ask a creator to add their work (SOP 4), the number of real members who voted for their title is the heart of the pitch. Accurate numbers only.',
    ],
    sections: [
      {
        id: 'invite-routes',
        title: 'How to invite',
        steps: [
          {
            text:
              'To invite specific people, open the Members tab. Three routes are available: invite by email, Suggested people, and the join link. Use whichever fits the person.',
          },
          {
            text:
              'Invite by email. Enter an email address and send. Existing Kahana users also get an in-app invitation; new people can sign up with that email to join. Use this for someone off-platform you have an email for.',
          },
          {
            text:
              'Suggested people. Search anyone by name, or pick from people you follow, who follow you, or whose hubs you have saved. They get an in-app invitation to accept. Use this for creators and readers already on Kahana.',
          },
          {
            text:
              'Join link. Copy the invite link and share it anywhere. Anyone with it can join, subject to the club’s join mode. Good for group chats, social, or anywhere you cannot name people individually.',
          },
          {
            text:
              'Tell the person what they are joining in one line: the theme, the frequency, and that the group reads together and votes on what is next. People join a clear thing, not a vague one.',
          },
          {
            text:
              'Aim for a small, active core rather than a large, silent list. A handful of engaged members is enough to pick titles and, later, to make an honest outreach ask to a creator.',
          },
          {
            text:
              'Keep inviting when numbers dip. A club that quietly empties out cannot sustain a cycle or create demand — invite a few more people whenever activity drops.',
          },
        ],
      },
    ],
    doneWhen: [
      'The club has enough active members to run a poll.',
      'Members understand the theme and frequency.',
    ],
  },

  {
    id: 'choosing-what-the-club-reads',
    number: 3,
    title: 'Choosing What the Club Reads',
    category: 'Clubs',
    description:
      'Build the Wishlist, let members vote, set focus, read on or off Kahana, and pass non-library winners to outreach.',
    keywords: [
      'wishlist',
      'vote',
      'poll',
      'set as focus',
      'cycle',
      'title',
      'outreach pipeline',
    ],
    who: 'Club host, with member input',
    when: 'Each cycle.',
    notes: [
      'Keep a simple running list of titles the club wanted but did not find on Kahana. That list is your next outreach pipeline — every entry already has proven reader demand. It also doubles as failed-search signal for the wider team.',
    ],
    sections: [
      {
        id: 'choose-title',
        title: 'Pick the next title',
        steps: [
          {
            text:
              'Gather what the group wants to read or watch next. Take suggestions from members and note the titles, authors, and creators they are interested in — whether or not they are on Kahana.',
          },
          {
            text:
              'Add candidates to the Wishlist. Use Add to Wishlist and add each as a link, a Library hub, one of your own hubs, or a file. Anything already on Kahana goes on as a hub; anything not on Kahana goes on as a link so it can still be voted on.',
          },
          {
            text:
              'Let the group choose the next title. Members upvote items on the Wishlist; sort by Votes to see what is most wanted. Use Ask members to vote to prompt anyone who has not voted (once every 24 hours).',
          },
          {
            text:
              'Set the winner with Set as focus, which pins it as the club’s current focus so everyone knows what to read now.',
          },
          {
            text:
              'The club reads the winner wherever it lives. If it is on Kahana, members read it here. If it is not, members can still read it from wherever it is available — the Wishlist link points them there. Either way, the group discusses it in the Feed as normal. A club is never blocked by a title not being on Kahana.',
          },
          {
            text:
              'If the winning title — or any title with real votes — is not on Kahana, also pass it to outreach (SOP 4) with the title, the creator’s name, your member count, and the vote. The club still reads it this cycle; outreach is about getting the author onto Kahana for next time.',
          },
        ],
      },
    ],
    doneWhen: [
      'The next title is chosen by the group.',
      'The club knows where to read it (on Kahana or elsewhere) and will discuss it in the Feed.',
      'If it is not on Kahana, it is passed to outreach with the member count and vote.',
    ],
  },

  {
    id: 'outreach-to-creators-for-a-club',
    number: 4,
    title: 'Outreach to Creators for a Club',
    category: 'Clubs',
    description:
      'One coordinated, honest demand-led ask when a voted title is not yet on Kahana — then log the outcome.',
    keywords: [
      'outreach',
      'creator',
      'author',
      'demand',
      'upload',
      'white glove',
      'kdp',
      'rights',
    ],
    who: 'Any club member, coordinated through the club, or Pod B for larger asks',
    when: 'A voted title is not yet on Kahana.',
    notes: [
      'Coordinate first within the club so only one person reaches out. If three members email the same author about the same book, it looks disorganized and makes the demand look staged.',
      'Log the outcome of every outreach, including the reason for any no. Over time this tells us which asks land and which segments are reachable.',
    ],
    sections: [
      {
        id: 'coordinate',
        title: 'Coordinate first',
        intro:
          'Any member of the club can do this outreach, not just the host — but only one person should contact a given creator.',
        steps: [
          {
            text:
              'Before contacting anyone, flag it in the club (for example in the Feed) that you are going to reach out to this creator, so nobody else does the same.',
          },
          {
            text:
              'Check nobody has already reached out to this creator. If someone has, leave it with them rather than sending a second message.',
          },
          {
            text:
              'Agree on one sender. Usually the person who raised the title, or the host. One voice, one message.',
          },
        ],
      },
      {
        id: 'the-message',
        title: 'The message',
        steps: [
          {
            text:
              'Always open with genuine, specific appreciation for their work. Say you have heard good things about the title via family, friends, or social media — and mean it. No flattery you cannot back up.',
          },
          {
            text:
              'Explain why you are reaching out: you host a book or video club on Kahana, a digital library, with a stated number of members.',
          },
          {
            text:
              'Make it personal: the club ran a poll for what to read or watch this cycle, and their title came out on top — the one the most members wanted.',
          },
          {
            text:
              'Make the ask plainly: you would love for them to upload their work to Kahana so the club can read or watch it, either free or at a price they set.',
          },
          {
            text:
              'Offer the support that makes it easy: white-glove help getting set up, and mention featured placement and Growth plan benefits where appropriate.',
          },
          {
            text: 'Close warmly and leave the decision with them. Don’t follow up endlessly.',
          },
        ],
      },
      {
        id: 'rules',
        title: 'Rules',
        steps: [
          {
            text:
              'Be honest with numbers. Never inflate the member count or the vote. If the club has eight members, say eight. Overstating is both dishonest and easy to catch.',
          },
          {
            text:
              'Only approach creators who can say yes. Traditionally published authors often do not hold their own digital rights, and authors exclusive to Amazon (KDP Select — shown by a title being in Kindle Unlimited) are contractually barred from posting elsewhere. If in doubt, note it and check before sending.',
          },
          {
            text:
              'One kind message. If they decline or do not reply, do not chase repeatedly. Log the outcome and move on.',
          },
          {
            text:
              'Personalize every outreach message. A template that reads like a mass mail undoes the whole demand-led advantage.',
          },
        ],
      },
    ],
    doneWhen: [
      'A personalized, honest message has been sent to the creator.',
      'The ask and the free-or-paid option are clear.',
      'The outcome is logged, including any decline reason.',
    ],
  },

  {
    id: 'logging-feedback-and-issues',
    number: 5,
    title: 'Logging Feedback and Issues',
    category: 'Clubs',
    description:
      'Capture bugs, rough edges, and ideas the moment you notice them — via the improvement survey, and flag blockers to the PM.',
    keywords: [
      'feedback',
      'bug',
      'survey',
      'improve',
      'issue',
      'project manager',
      'support',
    ],
    who: 'Everyone',
    when: 'The moment you notice something.',
    notes: [
      'Hosts see club problems before anyone else. Silent frustration helps no one; a logged issue gets fixed.',
    ],
    sections: [
      {
        id: 'log',
        title: 'How to log',
        steps: [
          {
            text:
              'When you hit a bug, a rough edge, or an idea while running a club, capture it straight away rather than trusting memory.',
          },
          {
            text: 'Submit it through the improvement survey.',
            href: IMPROVE_SURVEY_URL,
            hrefLabel: 'kahana.io/survey/improve',
          },
          {
            text:
              'Describe what happened, what you expected, and where — in enough detail that someone who was not there can understand it. For a bug, the steps to reproduce it matter most.',
          },
          {
            text:
              'If it is blocking club work rather than a minor annoyance, also flag it to the Project Manager so it can be routed to the technical backlog quickly.',
          },
        ],
      },
    ],
    doneWhen: [
      'The issue or idea is submitted through the survey link.',
      'Anything blocking club work is also flagged to the Project Manager.',
    ],
  },

  {
    id: 'keepers-codex',
    number: 6,
    title: 'The Keeper’s Codex',
    category: 'Clubs',
    format: 'checklist',
    href: '/sops/keepers-codex',
    description:
      'Checklist SOP for founding, tending, inviting, stocking, and growing a book or video club — with digestible subpages and a Done tracker.',
    keywords: [
      'keeper',
      'codex',
      'checklist',
      'book club',
      'video club',
      'create club',
      'wish list',
      'wishlist',
      'invite',
      'feed',
      'events',
      'outreach',
      'ledger',
      'aura',
      'pod b',
    ],
    who: 'Club owner / intern keepers',
    when: 'From founding through the first cycle, then as the rhythm of the hall.',
    notes: [
      'v1.0 draft. Section VI (creator outreach / missing volume) is proposed, not standing. Product UI follows Kahana as of August 2026.',
    ],
    sections: KEEPERS_CODEX_STEPS.map((step) => ({
      id: step.id,
      title: step.label,
      steps: [{ text: step.doneWhen }],
    })),
    doneWhen: [
      'A club is published with name, description, visibility, and join mode set deliberately.',
      'The launch threshold is met before invites go out.',
      'Wish list, Feed, and a first event are in place.',
      'Feedback is filed in the proper form when something breaks.',
    ],
  },
]

export function getSopById(sopId) {
  return SOPS.find((s) => s.id === sopId) ?? null
}

export function getAdjacentSops(sopId) {
  const index = SOPS.findIndex((s) => s.id === sopId)
  if (index < 0) return { prev: null, next: null }
  return {
    prev: index > 0 ? SOPS[index - 1] : null,
    next: index < SOPS.length - 1 ? SOPS[index + 1] : null,
  }
}

export function sopMatchesQuery(sop, query) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const hay = [
    sop.title,
    `SOP ${sop.number}`,
    sop.category,
    sop.format ?? '',
    sop.description,
    sop.who,
    sop.when,
    ...(sop.keywords ?? []),
    ...(sop.notes ?? []),
    ...sop.sections.flatMap((section) => [
      section.title,
      section.intro ?? '',
      ...section.steps.map((step) => `${step.text} ${step.note ?? ''} ${step.href ?? ''}`),
    ]),
    ...sop.doneWhen,
    sop.id === 'keepers-codex' ? keepersCodexSearchBlob() : '',
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}
