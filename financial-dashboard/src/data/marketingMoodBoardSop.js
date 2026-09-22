/**
 * SOP 31 — Marketing Mood Board.
 * How Marketing uses /mood-board as the source of campaign language before
 * official posts, Product Hunt copy, ads, or kahana.io lines. Merch mood
 * boards stay SOP 7.
 */

export const MARKETING_MOOD_BOARD_ALIASES = {
  'mood-board': 'marketing-mood-board',
  'marketing-moodboard': 'marketing-mood-board',
  'intentional-internet': 'marketing-mood-board',
}

export const MARKETING_MOOD_BOARD_SOP = {
  id: 'marketing-mood-board',
  title: 'Marketing Mood Board',
  category: 'Marketing',
  owner: 'Marketing Lead',
  format: 'checklist',
  description:
    'Open the Mood Board before you draft a campaign, official post, Product Hunt line, or ad. Stay on the launch audience, use the locked Intentional Internet contrast, pick one campaign lane, file new sparks on the board, then brand-check and ship through the right SOP.',
  excerpt:
    'This is how we turn the Mood Board into public copy. We do it so Kahana speaks as a living library, not another feed, and so slogans stay on the four locked campaigns.',
  keywords: [
    'mood board',
    'marketing',
    'intentional internet',
    'product hunt',
    'campaign',
    'feed ends here',
    'build a world',
    'social',
    'ads',
    'kahana website',
  ],
  who: 'Anyone writing official social, ads, Product Hunt, or kahana.io campaign copy.',
  when: 'Before you draft an official post, campaign, Product Hunt line, or ad. Again when you add a spark to the board.',
  notes: [
    'The board is /mood-board. Canva, Figma, and Google Doc links go in the Workspace slots on that page when they exist. Do not invent a second board in Slack.',
    'This is not merch. Printify, mockups, and catalog colorways stay SOP 7. The old mood-board-collaboration alias still opens merch.',
    'Launch is not “everyone interested in content.” It is people who already collect, organize, explain, teach, recommend, or obsess.',
  ],
  sections: [
    {
      id: 'open',
      title: '1. Open the board first',
      intro:
        'Do not start a campaign from a blank Notion page. The locked lines live on the Mood Board.',
      steps: [
        {
          id: 'mmb-open',
          label: 'Open the Mood Board before you write',
          minutes: 5,
          doneWhen: 'Open /mood-board before you draft a campaign, official post, Product Hunt line, or ad.',
          text: 'Open the Mood Board before you write. Read the one-liner, positioning, audience, and the four campaign cards. Quote from the board. Do not invent a competing slogan in Slack.',
          href: '/mood-board',
          hrefLabel: 'Mood Board',
        },
        {
          id: 'mmb-story',
          label: 'Read Kahana Story if the board and the product story feel out of sync',
          minutes: 10,
          doneWhen: 'Read Kahana Story if the board and the product story feel out of sync.',
          text: 'Read Kahana Story if the board and the product story feel out of sync. The Mood Board is campaign language. The Story is why the library exists. They should not fight each other.',
          href: '/kahana-narrative',
          hrefLabel: 'Kahana Story',
        },
      ],
    },
    {
      id: 'audience',
      title: '2. Stay on the launch audience',
      intro:
        'Kahana may serve everyone later. Launch copy is for people who already do the behavior.',
      steps: [
        {
          id: 'mmb-audience-filter',
          label: 'Write for people who already collect, organize, explain, teach, recommend, or obsess',
          minutes: 5,
          doneWhen: 'Write for people who already collect, organize, explain, teach, recommend, or obsess — not “everyone interested in content.”',
          text: 'Write for people who already collect, organize, explain, teach, recommend, or obsess. They already use notes apps, bookmarks, spreadsheets, Pinterest boards, Notion, LinkedIn tools, Drive folders, group chats, and long threads. Kahana gives that behavior a better home.',
          href: '/mood-board',
          hrefLabel: 'Mood Board — audience',
        },
        {
          id: 'mmb-personas',
          label: 'Check the named persona on User Personas before you invent a new audience',
          minutes: 5,
          doneWhen: 'Check the named persona on User Personas before you invent a new audience.',
          text: 'Check the named persona on User Personas before you invent a new audience. Dhruthi is the first creator card. SOP 32 is how you add the next one.',
          href: '/user-personas',
          hrefLabel: 'User Personas',
        },
        {
          id: 'mmb-audience-line',
          label: 'Keep the line: you have already collected a world; now give it a place to live',
          minutes: 2,
          doneWhen: 'Keep the launch line: you have already collected a world. Now give it a place to live.',
          text: 'Keep the launch line: you have already collected a world. Now give it a place to live. Do not pitch “more content” or a bigger audience as the product.',
        },
      ],
    },
    {
      id: 'positioning',
      title: '3. Lock Intentional Internet',
      intro:
        'The category and the contrast are decided. Your job is to use them, not rename them.',
      steps: [
        {
          id: 'mmb-category',
          label: 'Own the category: the Intentional Internet',
          minutes: 2,
          doneWhen: 'Own the category: the Intentional Internet.',
          text: 'Own the category: the Intentional Internet. Kahana is a living digital library where people turn books, videos, ideas, research, and creative work into meaningful worlds others can explore.',
        },
        {
          id: 'mmb-contrast',
          label: 'Use feed versus library, not more-content versus less-content',
          minutes: 5,
          doneWhen: 'Use feed versus library. The feed gives what keeps you scrolling. The library helps you find what is worth carrying forward.',
          text: 'Use feed versus library. The modern internet optimizes for more content, more reaction, more scrolling, more personal performance, more algorithmic repetition. Kahana optimizes for context, curiosity, understanding, contribution, and human recognition. The feed gives you what keeps you scrolling. The library helps you find what is worth carrying forward.',
        },
        {
          id: 'mmb-ph-lock',
          label: 'For Product Hunt, use the locked headline, subheadline, and CTA',
          minutes: 5,
          doneWhen: 'For Product Hunt, use Turn scattered content into meaningful worlds, the living-digital-library subheadline, and CTA Enter the Library.',
          text: 'For Product Hunt, use the locked pack: headline Turn scattered content into meaningful worlds; subheadline Kahana is a living digital library where people build and explore meaningful worlds of books, videos, ideas, research, and creative work; CTA Enter the Library. Do not swap in a feed metaphor.',
          href: '/sops/product-hunt-launch',
          hrefLabel: 'SOP 1: Product Hunt Launch',
        },
      ],
    },
    {
      id: 'campaign',
      title: '4. Pick one campaign lane',
      intro:
        'Four lanes. One post, one lane. Do not mash slogans.',
      steps: [
        {
          id: 'mmb-lane',
          label: 'Pick one of the four locked campaigns and quote from that card',
          minutes: 10,
          doneWhen: 'Pick one of the four locked campaigns and quote from that card. Do not invent a fifth slogan.',
          text: 'Pick one of the four locked campaigns and quote from that card: The Feed Ends Here; Build a World, Not an Audience; Someone Left You a Path; Five Sparks. Do not invent a competing slogan. If the spark is new, file it on the board first.',
          href: '/mood-board',
          hrefLabel: 'Mood Board — campaigns',
        },
      ],
    },
    {
      id: 'file',
      title: '5. File new sparks on the board',
      intro:
        'Writings, image refs, video refs, and ad notes belong on the board so the next person can find them.',
      steps: [
        {
          id: 'mmb-file',
          label: 'Add writings, image refs, video refs, or ad notes to the Mood Board data',
          minutes: 15,
          doneWhen: 'Add the spark to the Mood Board backlog (writings, images, videos, or ads) or to a Workspace slot once Canva, Figma, or a Google Doc exists.',
          text: 'Add the spark to the Mood Board backlog: writings, images, videos, or ads. When a Canva, Figma, or Google Doc exists, put the URL in the Workspace slots on the page. Do not leave the only copy in a private chat.',
          href: '/mood-board',
          hrefLabel: 'Mood Board',
        },
      ],
    },
    {
      id: 'ship',
      title: '6. Brand-check, then ship through the right SOP',
      intro:
        'The board is not publish. Brand, then the channel SOP.',
      steps: [
        {
          id: 'mmb-brand',
          label: 'Run SOP 6 Brand Guidelines on the caption, visual, and naming',
          minutes: 10,
          doneWhen: 'Run SOP 6 Brand Guidelines on the caption, visual, and naming.',
          text: 'Run SOP 6 Brand Guidelines on the caption, visual, and naming. Kahana (AKA “The Aura Library”). Aura is the discovery signal, not the product name.',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
        {
          id: 'mmb-social',
          label: 'Official Kahana-account posts go through SOP 8',
          minutes: 15,
          doneWhen: 'Official Kahana-account posts go through SOP 8 (access, brand, Linear review).',
          text: 'Official Kahana-account posts go through SOP 8 (access, brand, Linear review). Personal teammate shares can quote the board without that gate.',
          href: '/sops/official-social-media',
          hrefLabel: 'SOP 8: Official Social Media',
        },
        {
          id: 'mmb-ph-ship',
          label: 'Product Hunt listing copy still runs SOP 1',
          minutes: 10,
          doneWhen: 'Product Hunt listing copy still runs SOP 1.',
          text: 'Product Hunt listing copy still runs SOP 1. Pull headline, subheadline, and CTA from the Mood Board. Do not rewrite the launch pack on the day.',
          href: '/sops/product-hunt-launch',
          hrefLabel: 'SOP 1: Product Hunt Launch',
        },
        {
          id: 'mmb-web',
          label: 'kahana.io campaign or landing lines ship through SOP 13',
          minutes: 15,
          doneWhen: 'kahana.io campaign or landing lines ship through SOP 13.',
          text: 'kahana.io campaign or landing lines ship through SOP 13. Quote the board. Do not invent a second homepage promise.',
          href: '/sops/marketing-website',
          hrefLabel: 'SOP 13: Updating the Marketing Website',
        },
        {
          id: 'mmb-merch',
          label: 'Merch, Printify, and catalog mockups stay SOP 7',
          minutes: 2,
          doneWhen: 'Merch, Printify, and catalog mockups stay SOP 7.',
          text: 'Merch, Printify, and catalog mockups stay SOP 7. This SOP is social, ads, Product Hunt, and website language. Do not list a shirt from the marketing board.',
          href: '/sops/merch',
          hrefLabel: 'SOP 7: Merch',
        },
      ],
    },
  ],
  doneWhen: [
    'The Mood Board was open before the draft.',
    'The audience is people who already collect or obsess, not everyone interested in content.',
    'Copy uses Intentional Internet and one locked campaign lane.',
    'New sparks are on the board or in a Workspace slot.',
    'SOP 6 passed, then SOP 8, SOP 1, or SOP 13 as the channel requires. Merch stayed SOP 7.',
  ],
}
