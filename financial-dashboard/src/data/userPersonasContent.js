import dhruthiScan from '../assets/personas/dhruthi-prakash.jpg'

export const USER_PERSONAS_PATH = '/user-personas'

export const USER_PERSONAS_PAGE = {
  title: 'User Personas',
  subtitle:
    'Named people we design Kahana for — creators and buyers, with motivations, challenges, and what they need from the library.',
}

export const PERSONA_TYPES = [
  {
    id: 'creator',
    title: 'Creator',
    blurb: 'They make and share work. They need a place that is more than a feed and a folder.',
  },
  {
    id: 'buyer',
    title: 'Buyer',
    blurb: 'They discover, enter, and return to hubs. No buyer card is filed yet.',
  },
]

export const PERSONAS = [
  {
    id: 'dhruthi-prakash',
    type: 'creator',
    name: 'Dhruthi Prakash',
    role: 'Dancer. Music Lover. Entertainer.',
    summary: 'Creating dance, music and fun content to spread joy and make people smile.',
    mantra: 'Dance. Create. Make people smile. Repeat.',
    quote:
      'I create because it makes me happy, and I love the idea that my content can brighten someone’s day.',
    quoteBy: 'Dhruthi',
    photo: dhruthiScan,
    photoAlt: 'Creator persona card for Dhruthi Prakash — dancer and entertainer in Bengaluru.',
    footer: 'More than content. A more meaningful connection with my audience.',
    kahanaLine:
      'Kahana can help me turn my creativity into a lasting platform — where I can share, teach, earn, and build a community that goes beyond short-form content.',
    facts: [
      { label: 'Age', value: '29' },
      { label: 'Location', value: 'Bengaluru, India' },
      { label: 'Occupation', value: 'Content Creator (Freelance)' },
      { label: 'Education', value: "Master's Degree" },
      { label: 'Interests', value: 'Dance, Music, Comedy, Travel, Food' },
      { label: 'Platforms', value: 'Instagram (primary), YouTube (exploring), WhatsApp, Discord (community)' },
    ],
    contentStyle: [
      { label: 'Content type', value: 'Dance reels, music covers, funny/relatable reels, lifestyle snippets' },
      { label: 'Style', value: 'Energetic, fun, authentic, relatable, positive' },
      { label: 'Audience', value: 'Young audience (mostly 18–30), people who love dance, music and light-hearted entertainment' },
      { label: 'Community vibe', value: 'Supportive, interactive, engaged, loves humor and dance challenges' },
    ],
    background: [
      'Juggles content creation, work, family, and a social life.',
      'Creates, edits, and manages content on the go — heavy phone and laptop use.',
      'Likes to set a trend with fresh ideas on reels and posts.',
      'Puts her own spin on ideas so dance, music, or comedy stays original.',
      'Loves exploring: travel, new experiences, food, meeting people.',
      'Values creativity and freedom — expressing herself and doing what she loves.',
    ],
    challenges: [
      'Time management: balancing content creation with other commitments.',
      'Hard to grow consistently: the algorithm clicks for a reel, then the viewer count spikes, then it goes dull.',
      'People copy content ideas and present them as their own.',
      'Unpredictable social-media income.',
      'Constantly adapting to algorithm and platform changes.',
      'Burnout from having to keep coming up with fresh work.',
    ],
    goals: [
      'Grow an audience of people who love dance, music, and positive, fun content.',
      'Turn passion into sustainable income: paid hubs, exclusive content, workshops.',
      'Build a genuine community of like-minded people.',
      'Share more in-depth content: tutorials, routines, music tips, creative process — not only short reels.',
      'Create a positive impact: inspire, entertain, make people feel happier.',
    ],
    needs: [
      'Easy way to organize and share longer-form content (tutorials, music resources, behind-the-scenes) in one place.',
      'Monetization: paid access, subscriptions, or exclusive content.',
      'Tools to grow and engage a community: interaction, feedback, collaboration.',
      'Creator analytics: what the audience loves and how to grow.',
      'A supportive creator ecosystem: connect with other creators, learn, find opportunities.',
    ],
  },
]

export const RELATED_LINKS = [
  {
    path: '/sops/user-personas',
    title: 'SOP 32: User Personas',
    description: 'How to add the next card',
  },
  {
    path: '/mood-board',
    title: 'Mood Board',
    description: 'Campaign language for the people on these cards',
  },
  {
    path: '/sops/marketing-mood-board',
    title: 'SOP 31: Marketing Mood Board',
    description: 'How to pull a line into a post',
  },
  {
    path: '/kahana-narrative',
    title: 'Kahana Story',
    description: 'Why the library exists',
  },
  {
    path: '/sops/creator-prospecting',
    title: 'SOP 15: Creator Prospecting',
    description: 'Outreach list — not a persona library',
  },
]
