export const ONBOARDING_STEPS = [
  // Day 1
  { id: 'schedule-1on1', label: 'Biweekly 1-on-1 check in with Adam', category: 'Admin & Setup', day: 1, badge: 'minutes' },
  { id: 'company-rules', label: 'Read Company Rules, Values, & Guidelines', category: 'Company & Culture', day: 1, badge: 'minutes' },
  { id: 'social-media', label: 'Follow all Kahana social media channels', category: 'External Presence', day: 1, badge: 'minutes' },
  { id: 'internal-channels', label: 'Join Kahana Slack', category: 'Communication', day: 1, badge: 'minutes' },
  { id: 'linear-access', label: 'Get access to Linear (PM & Engineering)', category: 'Admin & Setup', day: 1, badge: 'minutes' },
  { id: 'slack-phone', label: 'Install Slack on your Phone and configure notifications', category: 'Communication', day: 1, badge: 'minutes' },
  { id: 'avenger-profile', label: 'Create your Avenger profile', category: 'Product', day: 1, badge: 'minutes' },
  { id: 'tools-access', label: 'Get access to tools for your function (incl. Linear for PM & eng)', category: 'Admin & Setup', day: 1, badge: 'minutes' },
  { id: 'producthunt', label: 'Create ProductHunt account and follow all other accounts on here', category: 'External Presence', day: 1, badge: 'minutes' },
  // Day 2
  { id: 'linkedin', label: 'LinkedIn guide, form & profile', category: 'External Presence', day: 2, badge: '1-2 hours' },
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
  // Day 4
  { id: 'duolingo-article', label: 'Learn the Growth Framework', category: 'Company & Culture', day: 4, badge: '1 business day' },
  // Day 5
  { id: 'time-log', label: 'Fill out the weekly Time Log and add a calendar reminder', category: 'Admin & Setup', day: 5, badge: 'minutes' },
  { id: 'onboarding-survey', label: 'Complete the Onboarding Experience Survey', category: 'Wrap-up', day: 5, badge: null },
  // Optional — Oasis Browser (archived product)
  {
    id: 'install-oasis',
    label: 'Install Oasis Browser (optional — archived product)',
    category: 'Product',
    day: 'optional',
    badge: 'optional',
    archived: true,
  },
  {
    id: 'use-oasis-5-days',
    label: 'Use Oasis for 5 business days and complete NPS survey (optional)',
    category: 'Product',
    day: 'optional',
    badge: 'optional',
    archived: true,
  },
  // Coming soon
  { id: 'soc2-compliance', label: 'Review SOC 2 & Compliance Policies (Coming soon)', category: 'Company & Culture', comingSoon: true },
]
