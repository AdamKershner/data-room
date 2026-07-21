export const ONBOARDING_STEPS = [
  // Day 1
  { id: 'schedule-1on1', label: 'Biweekly 1-on-1 check in with Adam', category: 'Admin & Setup', day: 1, badge: 'minutes' },
  { id: 'company-rules', label: 'Read Company Rules, Values, & Guidelines', category: 'Company & Culture', day: 1, badge: 'minutes' },
  { id: 'social-media', label: 'Follow Kahana channels and Adam on socials', category: 'External Presence', day: 1, badge: 'minutes' },
  { id: 'internal-channels', label: 'Join Kahana Slack', category: 'Communication', day: 1, badge: 'minutes' },
  { id: 'linear-access', label: 'Get access to Linear (PM & Engineering)', category: 'Admin & Setup', day: 1, badge: 'minutes' },
  { id: 'slack-phone', label: 'Install Slack on your Phone and configure notifications', category: 'Communication', day: 1, badge: 'minutes' },
  { id: 'avenger-profile', label: 'Create your Avenger profile', category: 'Product', day: 1, badge: 'minutes' },
  { id: 'producthunt', label: 'Create ProductHunt account and follow all other accounts on here', category: 'External Presence', day: 1, badge: 'minutes' },
  // Day 3
  {
    id: 'knowledge-base-core-business',
    label: "Understand Kahana's core business (Knowledge base)",
    category: 'Company & Culture',
    day: 3,
    badge: '1 business day',
  },
  {
    id: 'learn-kahana',
    label: 'Learn about the Kahana platform',
    category: 'Company & Culture',
    day: 3,
    badge: '30–60 minutes',
  },
  {
    id: 'technical-roadmap',
    label: 'Review Kahana technical focus (Security, Trust, Algorithm)',
    category: 'Product',
    day: 3,
    badge: '20–30 minutes',
  },
  // Optional
  {
    id: 'duolingo-article',
    label: 'Learn the Growth Framework (optional)',
    category: 'Company & Culture',
    day: 'optional',
    badge: 'optional',
  },
  // Day 5
  {
    id: 'tools-access',
    label: 'Get access to tools for your role (DM Adam on Slack)',
    category: 'Admin & Setup',
    day: 5,
    badge: 'minutes',
  },
  { id: 'time-log', label: 'Establish weekly Time Log habit (every Friday + calendar reminder)', category: 'Admin & Setup', day: 5, badge: 'weekly' },
  { id: 'onboarding-survey', label: 'Complete the Onboarding Experience Survey', category: 'Wrap-up', day: 5, badge: null },
  // Coming soon
  { id: 'soc2-compliance', label: 'Review SOC 2 & Compliance Policies (Coming soon)', category: 'Company & Culture', comingSoon: true },
]
