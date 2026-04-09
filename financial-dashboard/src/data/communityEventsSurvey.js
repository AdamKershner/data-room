/**
 * Aggregated from "Kahana Community-Led Events" survey export (Sheet1).
 * 11 responses, Apr 7–9, 2026. All respondents opted into the events email list.
 */

export const SURVEY_META = {
  name: 'Kahana Community-Led Events',
  responseCount: 11,
  dateRangeLabel: 'April 7–9, 2026',
  optInPercent: 100,
}

/** Canonical theme keys → full survey labels */
export const THEME_LABELS = {
  securityProductivity: 'Security vs. Productivity — where real tension lives',
  enterpriseAiAdoption: 'How enterprise teams are actually adopting AI tools day-to-day',
  reducingComplexity: 'Reducing complexity: consolidating tools without losing control',
  identityAccess: 'Managing identity and access across a distributed workforce',
  zeroTrust: 'Making the case for zero trust internally — selling security to leadership',
}

/** Short labels for table chips (full wording in `title` tooltip). */
export const THEME_CHIP_LABELS = {
  securityProductivity: 'Security vs productivity',
  enterpriseAiAdoption: 'Enterprise AI adoption',
  reducingComplexity: 'Reduce complexity',
  identityAccess: 'Identity & access',
  zeroTrust: 'Zero trust / leadership',
}

export const THEME_STATS = [
  { key: 'securityProductivity', count: 7 },
  { key: 'enterpriseAiAdoption', count: 6 },
  { key: 'identityAccess', count: 6 },
  { key: 'reducingComplexity', count: 5 },
  { key: 'zeroTrust', count: 2 },
]

/** Selection counts (multi-select; totals exceed response count). */
export const FORMAT_STATS = [
  { key: 'webinar', label: 'Webinars (live, speaker + Q&A)', count: 5 },
  { key: 'workshop', label: 'Virtual workshops (hands-on / breakouts)', count: 5 },
  { key: 'ama', label: 'AMAs (live Q&A with an expert)', count: 5 },
  { key: 'networking', label: 'Virtual networking / happy hours', count: 4 },
  { key: 'keynote', label: 'Virtual keynotes', count: 3 },
  { key: 'roundtable', label: 'Roundtable discussions', count: 3 },
  { key: 'fireside', label: 'Fireside chats / interviews', count: 3 },
  { key: 'lunchLearn', label: 'Lunch & learns', count: 3 },
]

export const DURATION_STATS = [
  { minutes: 60, count: 7, label: '60 minutes' },
  { minutes: 45, count: 3, label: '45 minutes' },
  { minutes: 30, count: 2, label: '30 minutes' },
]

/**
 * Per-response rollup (challenge text shortened for UI; see original CSV for full prose).
 * Respondent names are anonymized in this data room view (survey includes internal and external voices).
 */
export const RESPONSES = [
  {
    id: 'M11BWlk',
    submittedAt: '2026-04-07',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'AI products are non-deterministic and harder to control than traditional software; security and governance around AI adoption.',
    themes: ['securityProductivity', 'enterpriseAiAdoption', 'reducingComplexity'],
    formats: ['webinar', 'fireside', 'networking', 'lunchLearn'],
    durationMinutes: 30,
    speakerNotes:
      'Practitioners using AI in novel productivity ways; cybersecurity voice on what can go wrong and best practices.',
  },
  {
    id: 'dbEqqLA',
    submittedAt: '2026-04-08',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary: 'Security becomes a bottleneck or gets bypassed entirely.',
    themes: ['securityProductivity'],
    formats: ['workshop', 'fireside', 'ama'],
    durationMinutes: 60,
    speakerNotes: null,
  },
  {
    id: 'PRpp5E5',
    submittedAt: '2026-04-08',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Sensitive company data uploaded to ChatGPT and other AI platforms — confidentiality and dispersion of data.',
    themes: ['securityProductivity'],
    formats: ['lunchLearn'],
    durationMinutes: 30,
    speakerNotes: 'Active LinkedIn / social voices on AI + security trends.',
  },
  {
    id: '5XbbLdZ',
    submittedAt: '2026-04-08',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Scaling enterprise AI with AI-powered attacks, shadow AI, governance gaps; supply chain risk; browser as primary attack surface and blind spot (enterprise browser as control layer).',
    themes: ['securityProductivity', 'enterpriseAiAdoption'],
    formats: ['webinar', 'workshop', 'lunchLearn'],
    durationMinutes: 45,
    speakerNotes:
      'Practitioners focused on browser as control plane, shadow AI, in-session exfiltration, AI tool governance.',
  },
  {
    id: 'xVrjdOG',
    submittedAt: '2026-04-08',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Keeping hybrid and multi-cloud environments simple, secure, and manageable as complexity and threats grow.',
    themes: ['securityProductivity'],
    formats: ['roundtable'],
    durationMinutes: 45,
    speakerNotes: 'IBM / Red Hat–style enterprise voices.',
  },
  {
    id: 'VpGjkaE',
    submittedAt: '2026-04-08',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Onboarding and access provisioning delays; 24h automation latency; manual RDP provisioning; lack of CI/CD for access.',
    themes: ['identityAccess', 'reducingComplexity', 'securityProductivity'],
    formats: ['workshop', 'keynote', 'ama', 'networking', 'roundtable'],
    durationMinutes: 45,
    speakerNotes: 'Leaders the team has worked with previously.',
  },
  {
    id: 'J1qpMQX',
    submittedAt: '2026-04-08',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary: 'Internal document safety with AI adoption and distributed access.',
    themes: ['enterpriseAiAdoption', 'identityAccess'],
    formats: ['webinar', 'keynote', 'ama'],
    durationMinutes: 60,
    speakerNotes: null,
  },
  {
    id: '0Vd8VDQ',
    submittedAt: '2026-04-09',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'RSAC 2026 themes: DNS rebinding in browser/AI context, agent governance gap, shadow agents, collapsed attack timelines, non-human identity explosion, AI across security domains.',
    themes: ['identityAccess', 'zeroTrust', 'reducingComplexity'],
    formats: ['networking', 'fireside'],
    durationMinutes: 60,
    speakerNotes: null,
  },
  {
    id: 'aO96ZAq',
    submittedAt: '2026-04-09',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Deepfakes, insecure APIs, and unapproved AI tools creating privacy and breach risk.',
    themes: ['reducingComplexity', 'enterpriseAiAdoption', 'identityAccess'],
    formats: ['webinar', 'ama', 'roundtable', 'workshop'],
    durationMinutes: 60,
    speakerNotes: null,
  },
  {
    id: 'laBNVaN',
    submittedAt: '2026-04-09',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Loss of control inside the browser: shadow AI, DNS rebinding, verification gap for AI-assisted work; need sandboxed browser environment vs. URL block lists.',
    themes: [
      'enterpriseAiAdoption',
      'reducingComplexity',
      'securityProductivity',
      'zeroTrust',
      'identityAccess',
    ],
    formats: ['workshop', 'ama'],
    durationMinutes: 60,
    speakerNotes:
      'Mix of established experts and rising practitioners; a live audit or technical demo often adds more value than a celebrity keynote alone.',
  },
  {
    id: 'OQaPa2k',
    submittedAt: '2026-04-09',
    name: 'Survey respondent',
    affiliation: '—',
    challengeSummary:
      'Governing browser activity on unmanaged / contractor devices — tools assume device ownership while work moved to the browser.',
    themes: ['identityAccess', 'enterpriseAiAdoption'],
    formats: ['webinar', 'keynote', 'networking'],
    durationMinutes: 60,
    speakerNotes: null,
  },
]
