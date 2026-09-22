/**
 * SOP 32 — User Personas.
 * How Product and Marketing add a named persona to /user-personas. The first
 * locked card is Dhruthi Prakash (creator). Do not invent a second template.
 */

export const USER_PERSONAS_ALIASES = {
  personas: 'user-personas',
  'buyer-personas': 'user-personas',
  'creator-personas': 'user-personas',
  'add-persona': 'user-personas',
}

export const USER_PERSONAS_SOP = {
  id: 'user-personas',
  title: 'User Personas',
  category: 'Product',
  owner: 'Product Manager / Marketing Lead',
  format: 'checklist',
  description:
    'Add a named creator or buyer persona to /user-personas using the Dhruthi card as the template: facts, content and style, background, challenges, goals, and needs from Kahana. Do not drop a sketch in Slack and call it a persona.',
  excerpt:
    'This is how we add a user persona to the data room. We do it so product and marketing share one named person — motivations, challenges, goals — instead of “everyone interested in content.”',
  keywords: [
    'persona',
    'user persona',
    'creator persona',
    'buyer persona',
    'dhruthi',
    'audience',
    'motivations',
    'challenges',
    'goals',
  ],
  who: 'Product Managers and Marketing who need a named person before they write a feature, campaign, or collab ask.',
  when: 'When a new segment is real enough to name, or when an existing card is wrong. Open the page before you draft.',
  notes: [
    'The page is /user-personas. Source of truth is userPersonasContent.js. Source scans live in financial-dashboard/src/assets/personas/.',
    'Creator and buyer are different types. Dhruthi is a creator. Do not mash a buyer into her card.',
    'This is not the Mood Board (SOP 31) and not SOP 15 prospecting. Personas are who we design for. The board is campaign language. The sheet is who we email.',
  ],
  sections: [
    {
      id: 'open',
      title: '1. Open the personas page first',
      intro: 'Do not start a new card in a private slide. Read who is already named.',
      steps: [
        {
          id: 'up-open',
          label: 'Open User Personas and read the existing cards',
          minutes: 10,
          doneWhen: 'Open /user-personas and read the existing cards before you add one.',
          text: 'Open User Personas and read the existing cards. If the person is already there, update that object. Do not duplicate Dhruthi under a new first name.',
          href: '/user-personas',
          hrefLabel: 'User Personas',
        },
      ],
    },
    {
      id: 'type',
      title: '2. Pick creator or buyer',
      intro: 'One card, one type.',
      steps: [
        {
          id: 'up-type',
          label: 'Set type to creator or buyer — not both',
          minutes: 5,
          doneWhen: 'Set type to creator or buyer. Do not mash both onto one card.',
          text: 'Set type to creator (they make and share work, like Dhruthi) or buyer (they discover and enter hubs). Do not mash both onto one card. A creator who also buys can have two cards later if the jobs are different.',
        },
      ],
    },
    {
      id: 'template',
      title: '3. Fill the same sections as Dhruthi',
      intro: 'The template is locked. Empty sections mean the card is not ready.',
      steps: [
        {
          id: 'up-fields',
          label: 'Fill name, role, quote, facts, style, background, challenges, goals, and Kahana needs',
          minutes: 45,
          doneWhen: 'Fill name, role, quote, quick facts, content and style, background, challenges, goals, and needs from Kahana — the same sections as Dhruthi.',
          text: 'Fill the same sections as Dhruthi Prakash: name, role line, photo, quote, quick facts, content and style, background and lifestyle, challenges and pain points, goals and motivations, needs from a platform like Kahana, and the footer line. Do not invent a new layout.',
          href: '/user-personas',
          hrefLabel: 'User Personas — Dhruthi',
        },
        {
          id: 'up-evidence',
          label: 'Ground the card in a real conversation, interview, or named example',
          minutes: 20,
          doneWhen: 'Ground the card in a real conversation, interview, or named example. Do not invent demographics to fill boxes.',
          text: 'Ground the card in a real conversation, interview, or named example. Dhruthi is a creator example we are designing for, not a prospecting row. Do not invent demographics to fill boxes.',
        },
      ],
    },
    {
      id: 'file',
      title: '4. File it in the data room',
      intro: 'The live page only updates when the object ships.',
      steps: [
        {
          id: 'up-file',
          label: 'Add the object to PERSONAS in userPersonasContent.js and save the source scan',
          minutes: 20,
          doneWhen: 'Add the object to PERSONAS in userPersonasContent.js, give it a stable id, and save the source scan under src/assets/personas/.',
          text: 'Add the object to PERSONAS in userPersonasContent.js. Give it a stable kebab-case id. Copy the source scan into financial-dashboard/src/assets/personas/ and import it on the card. Follow SOP 29 to run locally and ship.',
          href: '/sops/updating-the-data-room',
          hrefLabel: 'SOP 29: Adding and Updating SOPs',
        },
      ],
    },
    {
      id: 'align',
      title: '5. Align with story and campaign, then use it',
      intro: 'A persona that fights Kahana Story or the Mood Board is not ready.',
      steps: [
        {
          id: 'up-story',
          label: 'Check the card against Kahana Story and the Mood Board launch audience',
          minutes: 10,
          doneWhen: 'Check the card against Kahana Story and the Mood Board launch audience.',
          text: 'Check the card against Kahana Story and the Mood Board launch audience (people who already collect, organize, explain, teach, recommend, or obsess). If it only says “grow my following,” it is not a Kahana persona yet.',
          href: '/mood-board',
          hrefLabel: 'Mood Board',
        },
        {
          id: 'up-use',
          label: 'Use the named persona in the charter, campaign, or collab — not a generic “user”',
          minutes: 5,
          doneWhen: 'Use the named persona in the charter, campaign, or collab instead of a generic “user.”',
          text: 'Use the named persona in the charter, campaign, or collab instead of a generic “user.” SOP 15 still owns outreach lists. SOP 31 still owns slogans.',
          href: '/sops/writing-a-project-charter',
          hrefLabel: 'SOP 10: Writing a Project Charter',
        },
      ],
    },
  ],
  doneWhen: [
    'The page was open before the new card.',
    'Type is creator or buyer.',
    'Sections match Dhruthi’s template and are grounded in a real example.',
    'The object and source scan shipped in the data room.',
    'Story and Mood Board still agree with the card.',
  ],
}
