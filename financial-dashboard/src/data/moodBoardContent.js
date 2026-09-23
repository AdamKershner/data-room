import scanPositioning from '../assets/mood-board/ph-moodboard-positioning.png'
import scanCampaigns from '../assets/mood-board/ph-moodboard-campaigns.png'

export const MOOD_BOARD_PATH = '/mood-board'

export const MOOD_BOARD_PAGE = {
  title: 'Mood Board',
  subtitle:
    'Backlog of ideas, images, videos, writings, and channel drafts for Kahana social, ads, and website copy.',
}

export const ONE_LINER =
  'We don’t need more content. We need better paths through it.'

export const PRODUCT_DEFINITION =
  'Kahana is a living digital library where people turn books, videos, ideas, research, and creative work they care about into meaningful worlds others can explore.'

export const POSITIONING = {
  category: 'The Intentional Internet',
  internetOptimizes: [
    'More content',
    'More reaction',
    'More scrolling',
    'More personal performance',
    'More algorithmic repetition',
  ],
  kahanaOptimizes: [
    'Context',
    'Curiosity',
    'Understanding',
    'Contribution',
    'Human recognition',
  ],
  contrast:
    'The feed gives you what keeps you scrolling. The library helps you find what is worth carrying forward.',
  phHeadline: 'Turn scattered content into meaningful worlds',
  phShort:
    'Kahana is a living digital library where people turn books, videos, research, images, links, and creative work into meaningful hubs others can explore. AI helps organize and discover. People provide the context, conversation, and recognition that make it matter.',
  phSubheadline:
    'Kahana is a living digital library where people build and explore meaningful worlds of books, videos, ideas, research, and creative work.',
  phCta: 'Enter the Library',
}

export const AUDIENCES = [
  {
    id: 'cultural',
    title: 'A Way Out of the Feed',
    kicker: 'For cultural relevance and emotional resonance',
    promise: 'A living library for people who want to explore the internet with intention.',
    lines: [
      'The feed ends here.',
      'The internet gave us everything. Then buried it in a feed.',
      'You have scrolled through enough. Now arrive somewhere.',
      'Stop consuming fragments. Start exploring worlds.',
      'There is more to the internet than what comes next.',
      'Kahana is not another place to scroll. It is a place to arrive.',
    ],
    bestAudience:
      'Curious generalists, creators, digital minimalists, knowledge workers, Product Hunt’s technology-conscious audience.',
  },
  {
    id: 'creators',
    title: 'Build a World, Not an Audience',
    kicker: 'For creators',
    promise:
      'A place where creators, collectors, teachers, and curious people build meaningful worlds around what they know and care about.',
    lines: [
      'You don’t need an audience to have something worth sharing.',
      'Your work deserves more than a post.',
      'Turn what you know into somewhere others can enter.',
      'Don’t publish another fragment. Build the whole world around it.',
      'A folder stores things. A hub gives them meaning.',
      'Give your curiosity a place to live.',
    ],
    bestAudience: 'Writers, educators, researchers, artists, community builders, subject-matter enthusiasts.',
  },
]

export const LAUNCH_AUDIENCE = {
  title: 'The most important audience decision',
  body: 'Kahana may ultimately serve everyone, but it should not launch to “everyone interested in content.” Launch is people who already collect, organize, explain, teach, recommend, or obsess over something.',
  line: 'You have already collected a world. Now give it a place to live.',
  currentTools: [
    'Notes apps',
    'Bookmarks',
    'Spreadsheets',
    'Pinterest boards',
    'Notion pages',
    'Link-in-bio tools',
    'Google Drive folders',
    'Group chats',
    'Long social threads',
  ],
}

export const CAMPAIGNS = [
  {
    id: 'feed-ends-here',
    title: 'The Feed Ends Here',
    lines: [
      'The feed has no destination. Kahana does.',
      'The feed asks you to keep moving. The Library invites you to stay.',
      'The feed shows you what comes next. Kahana shows you where something can lead.',
      'You have scrolled across the whole internet and arrived nowhere.',
      'Somewhere between unlimited access and endless scrolling, we lost the path.',
      'Kahana is where the internet becomes a place again.',
    ],
  },
  {
    id: 'build-a-world',
    title: 'Build a World, Not an Audience',
    lines: [
      'A post disappears. A world invites people in.',
      'Your knowledge deserves more than a folder.',
      'Your recommendations deserve more than a thread.',
      'Your work is not content inventory.',
      'What if everything you cared about could live together?',
      'Build somewhere people can enter—not another thing they scroll past.',
    ],
  },
  {
    id: 'someone-left-a-path',
    title: 'Someone Left You a Path',
    lines: [
      'The best way into a subject is often another person.',
      'Every obsession deserves an entrance.',
      'Search gives you results. A person can give you a path.',
      'Someone has already found the first five things worth seeing.',
      'Behind every great collection is someone saying, “Start here.”',
      'Knowledge travels further when someone leaves the door open.',
    ],
  },
  {
    id: 'five-sparks',
    title: 'Five Sparks',
    note: 'To introduce Aura',
    lines: [
      'Every day, you get five chances to say: this should travel further.',
      'Not a like. Not a rating. A signal left for the next person.',
      'You found something here. Leave a light behind.',
      'Recognition is more meaningful when it is finite.',
      'Five sparks. Give them to what deserves to be found.',
      'The community does not issue a verdict. It leaves a map.',
    ],
  },
]

export const WRITINGS = [
  {
    id: 'one-liner',
    title: 'One-liner',
    body: ONE_LINER,
  },
  {
    id: 'product',
    title: 'Product sentence',
    body: PRODUCT_DEFINITION,
  },
  {
    id: 'ph-headline',
    title: 'Product Hunt headline',
    body: POSITIONING.phHeadline,
  },
  {
    id: 'ph-sub',
    title: 'Product Hunt subheadline',
    body: POSITIONING.phSubheadline,
  },
  {
    id: 'cta',
    title: 'CTA',
    body: POSITIONING.phCta,
  },
  {
    id: 'launch-line',
    title: 'Launch audience line',
    body: LAUNCH_AUDIENCE.line,
  },
]

export const IMAGES = [
  {
    id: 'scan-positioning',
    title: 'Source scan — positioning and Product Hunt pack',
    src: scanPositioning,
    alt: 'Handwritten Kahana Library Moodboard for Product Hunt: Intentional Internet, feed versus library, and Product Hunt headline pack.',
  },
  {
    id: 'scan-campaigns',
    title: 'Source scan — audience decision and four campaigns',
    src: scanCampaigns,
    alt: 'Handwritten moodboard: launch audience filter and campaigns The Feed Ends Here, Build a World, Someone Left You a Path, Five Sparks.',
  },
]

/** Empty until someone files a clip. */
export const VIDEOS = []

/** Empty until someone files an ad note. */
export const ADS = []

/** Drop Canva, Figma, and Google Doc URLs here later. */
export const WORKSPACE_LINKS = [
  { id: 'canva', label: 'Canva', href: '' },
  { id: 'figma', label: 'Figma', href: '' },
  { id: 'google-doc', label: 'Google Doc', href: '' },
]

export const RELATED_LINKS = [
  {
    path: '/sops/marketing-mood-board',
    title: 'SOP 31: Marketing Mood Board',
    description: 'How to use this board before you publish',
  },
  {
    path: '/user-personas',
    title: 'User Personas',
    description: 'Named people the campaigns are for, starting with Dhruthi',
  },
  {
    path: '/kahana-narrative',
    title: 'Kahana Story',
    description: 'Why the library exists',
  },
  {
    path: '/sops/brand-guidelines',
    title: 'SOP 6: Brand Guidelines',
    description: 'Gate before any public piece',
  },
  {
    path: '/sops/official-social-media',
    title: 'SOP 8: Official Social Media',
    description: 'Access and Linear review for Kahana accounts',
  },
  {
    path: '/sops/product-hunt-launch',
    title: 'SOP 1: Product Hunt Launch',
    description: 'Listing copy still runs the launch checklist',
  },
  {
    path: '/sops/marketing-website',
    title: 'SOP 13: Marketing Website',
    description: 'kahana.io campaign and landing lines',
  },
]
