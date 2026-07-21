/** Organization KPIs for Scaling Kahana charter, time log onboarding, and weekly reports. */

export const CHARTER_KPIS = [
  {
    id: 'curr',
    metric: 'CURR',
    definition:
      'Current User Retention Rate — the chance a user returns this week if they were active on app.kahana.io each of the past two weeks (Explore sessions, hub views, or purchases).',
    whyItMatters:
      'North-star retention signal (Duolingo-style). Rising CURR means the library is becoming a habit, not a one-time visit.',
  },
  {
    id: 'daus',
    metric: 'DAUs',
    definition: 'Daily active users on app.kahana.io — unique users with meaningful activity per day.',
    whyItMatters:
      'Volume indicator for Explore and hub engagement; complements CURR by showing reach vs. stickiness.',
  },
  {
    id: 'retention',
    metric: 'Retention',
    definition:
      'Week-over-week and cohort retention on Explore browsing and hub access — users who return after first discovery.',
    whyItMatters:
      'Tracks whether new users and creator-driven traffic convert into repeat library visitors.',
  },
  {
    id: 'experts',
    metric: 'Quality experts onboarded',
    definition:
      'Featured or invited creators, experts, and influencers live on the platform with quality hubs (charter outreach pipeline).',
    whyItMatters:
      'Supply-side growth — curated expertise is what makes Explore worth exploring.',
  },
  {
    id: 'hubs',
    metric: 'Hubs created',
    definition: 'Net new public hubs from outreach pipeline plus organic creator signups.',
    whyItMatters:
      'Catalog density drives discovery, SEO, and GMV; each hub is a unit of library value.',
  },
  {
    id: 'delight',
    metric: 'Customer delight',
    definition:
      'Users exploring Explore and accessing hubs — session depth, return visits, qualitative feedback, and satisfaction signals.',
    whyItMatters:
      'Demand-side proof that the library delivers — the Professor Zei bar for “spend an eternity exploring.”',
  },
  {
    id: 'mrr',
    metric: 'MRR',
    definition:
      'Monthly recurring revenue — Growth tier subscriptions (~$9.99/mo) plus recurring hub revenue where applicable.',
    whyItMatters:
      'Near-term revenue pulse; tracks whether creator monetization and SaaS tiers are compounding.',
  },
  {
    id: 'arr',
    metric: 'ARR',
    definition: 'Annual recurring revenue — MRR × 12 plus any annual contracts or committed creator revenue.',
    whyItMatters:
      'Investor and planning metric; the north-star financial scale alongside user and retention KPIs.',
  },
]

export const TIME_LOG_RITUAL = {
  when: 'Every Friday by end of day',
  duration: 'Block 5–10 minutes on your calendar',
  whatToWrite:
    'Write a short description of what you did that week — enough detail that someone else can understand your focus and progress (about 1–2 paragraphs).',
  why: [
    'Compliance — an audit trail of who worked on what.',
    'Weekly Reports — entries feed accurate cross-team progress updates.',
    'Transparency — so our remote team can see what others are focused on and understand what’s going on across Kahana.',
  ],
  examples: [
    {
      title: 'Product / engineering',
      body: 'This week I focused on search performance on the Explore page. I profiled slow hub loads, shipped a caching fix for author metadata, and opened a Linear ticket for a follow-up on image lazy-loading. I also reviewed two teammate PRs and tested the mobile usability checklist on Android.',
    },
    {
      title: 'Growth / marketing',
      body: 'I drafted and scheduled three LinkedIn posts for the Kahana launch narrative, updated the creator outreach sheet with 12 new influencer profiles, and sent first-touch emails to five creators. I also reviewed Mixpanel checkout funnels for the last 30 days and noted drop-off between billing page view and plan click for Adam.',
    },
    {
      title: 'General / ops',
      body: 'Most of my week was onboarding and tooling: finished Day 1 checklist items, set up Linear and Mixpanel, and wrote my Avenger profile. I joined Slack channels, scheduled my weekly 1-on-1 with Adam, and spent Friday afternoon documenting how I spent time so next week’s report is easier to write.',
    },
  ],
}
