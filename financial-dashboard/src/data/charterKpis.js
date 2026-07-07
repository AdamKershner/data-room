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
]

export const TIME_LOG_RITUAL = {
  when: 'Every Friday by end of day',
  duration: 'Block 5–10 minutes on your calendar',
  whatToWrite:
    'A detailed description of what you focused on this week. Where your work touched charter KPIs (CURR, DAUs, retention, experts onboarded, hubs created, customer delight), say so explicitly.',
  why: [
    'Compliance — audit trail of who worked on what, supporting SOC 2 and operational policies.',
    'Weekly Reports — Adam synthesizes time log entries into accurate cross-team progress updates.',
    'Project Charter — logs show how daily work maps to scaling Kahana and org KPIs.',
  ],
}
