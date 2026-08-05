/**
 * Standard Operating Procedures — team-facing product ops guides.
 * /sops is a searchable gallery; /sops/:sopId shows the full procedure.
 */

export const SOP_PAGE = {
  title: 'Standard Operating Procedures',
  subtitle:
    'Searchable guides for hosting clubs and other recurring product work on Kahana. Open a card to read the full procedure.',
}

/** Categories used for gallery filters (order matters). */
export const SOP_CATEGORIES = ['Clubs']

/** @typedef {{ text: string, note?: string }} SopStep */

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
      'Create a club, set theme and frequency in the description, choose join mode and visibility, then run reading-list cycles with feed, events, and Aura.',
    keywords: [
      'book club',
      'video club',
      'create club',
      'my clubs',
      'reading list',
      'join mode',
      'visibility',
      'feed',
      'events',
      'aura',
      'host',
    ],
    who: 'Any team member hosting a club',
    when: 'Once at setup, then ongoing for every new title.',
    sections: [
      {
        id: 'setup',
        title: 'Setup',
        steps: [
          {
            text:
              'Decide the club’s focus and frequency before you create it. A clear theme — for example, short documentary films, true crime stories, or contemporary fiction by women — usually helps you recruit the right members and pick titles later.',
          },
          {
            text:
              'Frequency can be one title per week or per month. These are decisions you make, not fields the form asks for when creating a club, so hold them in mind and put them in the description so members can decide if this is something they can commit to.',
          },
          {
            text:
              'In the left sidebar, open My Clubs, then click Create club (top right).',
          },
          {
            text: 'Give the club a clear name. This is a required field.',
          },
          {
            text:
              'Write a description that states the theme, the frequency, and that members vote on what to read or watch. The form does not have separate fields for these, so include everything necessary — a clear description is what convinces someone to join.',
          },
          {
            text:
              'Choose a join mode. Auto join lets anyone join immediately, which suits an open club you’re actively recruiting into. Request to join lets you approve members, which suits a curated or private group. Pick a mode based on how much control you want over who joins.',
          },
          {
            text: 'Click Create. The club starts private by default.',
          },
          {
            text:
              'If you want the club discoverable so others can find and join it, open the club settings, then Visibility, and list it publicly. Leave it private if it’s invitation-only.',
          },
        ],
      },
      {
        id: 'managing',
        title: 'Managing a club over time',
        steps: [
          {
            text:
              'Building the reading list. Open the club’s Reading list, use Get started from the library to search public hubs, and save the ones the club will read to the club’s list. Hubs related to your club’s title are suggested there as a starting point.',
          },
          {
            text:
              'Run one cycle at a time. Each cycle the group picks what to read or watch next from the reading list and you set the dates.',
            note: 'Refer to SOP 3: Choosing what the club reads (coming soon).',
          },
          {
            text:
              'Use the Feed tab as the discussion archive. Members post after finishing a hub or chapter with Create post; replies stay there as the club’s history.',
          },
          {
            text:
              'Use the Events tab to schedule live discussions or breakouts, adding a Zoom or Google Meet link. Past events stay archived with what was read.',
          },
          {
            text:
              'Encourage members to give Aura to the hubs they enjoy — that is how good work rises on Kahana and it keeps the club tied to the wider library.',
          },
          {
            text: 'Log anything broken or missing as you go.',
            note: 'See SOP 5: Logging feedback and issues (coming soon).',
          },
        ],
      },
    ],
    doneWhen: [
      'The club exists on Kahana with a clear name and a detailed description covering theme and frequency.',
      'A join mode is set.',
      'Visibility is set to public if you want outsiders to join, or private if it’s invite-only.',
      'At least one cycle has been planned or is running.',
    ],
  },
]

export function getSopById(sopId) {
  return SOPS.find((s) => s.id === sopId) ?? null
}

export function sopMatchesQuery(sop, query) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const hay = [
    sop.title,
    `SOP ${sop.number}`,
    sop.category,
    sop.description,
    sop.who,
    sop.when,
    ...(sop.keywords ?? []),
    ...sop.sections.flatMap((section) => [
      section.title,
      section.intro ?? '',
      ...section.steps.map((step) => `${step.text} ${step.note ?? ''}`),
    ]),
    ...sop.doneWhen,
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}
