import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { EmbeddedCompetitorsTable } from './Competitors'
import { FAQ_ITEMS } from '../data/strategicFaqItems.jsx'
import { OASIS_LOI_LETTER_DOC_URL } from '../constants/oasisCommercialDocs'
import './Page.css'
import './Q1MidpointUpdate.css'
import './Q1ExecutiveReport.css'

/** Latest waitlist total from WeeklyReports (first / most recent week in the array). */
const WAITLIST_COUNT_LATEST = 169
const WAITLIST_PRIOR_WEEK = 162
const WAITLIST_WEEK_LABEL = 'Week of March 30–April 3, 2026'
const WAITLIST_PUBLIC_URL = 'https://kahana.co/oasis-waitlist'

/**
 * Last quarter monthly operating figures (approximate, rounded).
 * Revenue: SaaS subscriptions on the web application we built; costs: Google Workspace, GitHub, Figma, Heroku, AWS.
 */
const LAST_QUARTER_MONTHLY_OPERATING = [
  { month: 'Jan 2026', revenue: 180, costs: 110, net: 70 },
  { month: 'Feb 2026', revenue: 180, costs: 110, net: 70 },
  { month: 'Mar 2026', revenue: 180, costs: 110, net: 70 },
]

/** Example work-email domains (Q1 Midpoint list); logos where `public/logos` assets exist. */
const WAITLIST_WORK_EMAIL_DOMAINS = [
  'qixent.com',
  'franshares.com',
  'mhub.org',
  'fedresources.com',
  'oxfordwebservices.com',
  'duck.com (DuckDuckGo)',
  'kapya.io',
  'centerstone.org',
  'sagemount.com',
  'datadoghq.com',
]

/** Same logo paths as Q1MidpointUpdate `publicLogos` (served from `public/logos/`). Domains without an entry show text only. */
const WAITLIST_PUBLIC_LOGOS = {
  'centerstone.org': { url: '/logos/Centerstone_Logo_2020_color.png', name: 'Centerstone' },
  'fedresources.com': { url: '/logos/Fedresources.com logo.png', name: 'Fedresources' },
  'franshares.com': { url: '/logos/Franshares logo.png', name: 'Franshares' },
  'mhub.org': { url: '/logos/Mhub logo.png', name: 'Mhub' },
  'oxfordwebservices.com': { url: '/logos/Oxford Web Services Logo.webp', name: 'Oxford Web Services' },
  'sagemount.com': { url: '/logos/bregal_sagemount_logo_color.jpg', name: 'Sagemount' },
  'datadoghq.com': { url: '/logos/datadoghq logo.png', name: 'Datadog' },
  'duck.com (DuckDuckGo)': { url: '/logos/duckduckgo logo.png', name: 'DuckDuckGo' },
}

const PITCH_VIDEO_ID = 'q2SiEkNfwEc'
const PITCH_VIDEO_EMBED = `https://www.youtube.com/embed/${PITCH_VIDEO_ID}`
const PITCH_VIDEO_URL = `https://youtu.be/${PITCH_VIDEO_ID}`
const MARKET_OPPORTUNITY_IMAGE_URL =
  '/images/market-opportunity-tam-sam-som.png'
const GTM_STRATEGY_IMAGE_URL = '/images/gtm-strategy-b2c2b-workshops.png'
/** Solution overview slide: Oasis Admin console + Oasis AI monitoring story. */
const OASIS_ADMIN_SOLUTION_OVERVIEW_URL = '/images/oasis-admin-solution-overview.png'
/** Public survey to shape community-led virtual events (Tally). */
const COMMUNITY_EVENTS_SURVEY_URL = 'https://tally.so/r/NpYZqB'
/** Q1 Executive Update — retrospective feedback (Tally); submissions go to the CEO. */
const RETROSPECTIVE_TALLY_EMBED_URL =
  'https://tally.so/embed/BzX7JK?alignLeft=1&transparentBackground=1&dynamicHeight=1'
const RETROSPECTIVE_TALLY_FORM_URL = 'https://tally.so/r/BzX7JK'
/** Oasis Early User Lifecycle Strategy (0–90 day CS framework). */
const OASIS_EARLY_USER_LIFECYCLE_DOC_URL =
  'https://docs.google.com/document/d/1qpgZyb4knfjATM1rjnawHvSYXfEQEyURJ7HOA90cXS0/edit?usp=sharing'
const BUSINESS_MODEL_IMAGE_URL =
  '/images/business-model-pricing-strategy.png'
/** Sloth-in-hammock line art for Unique differentiation (Oasis = calm, ease). */
const OASIS_DIFFERENTIATION_ILLUSTRATION_URL = '/images/oasis-sloth-hammock-differentiation.png'
const CULTURE_AMP_LOGO_URL = '/images/culture-amp-logo.png'
const CULTURE_AMP_CASE_STUDY_IMAGE_URL = '/images/culture-amp-case-study.png'
const JULIAN_BRENNAN_PHOTO_URL = '/images/julian-brennan-culture-amp.jpg'
const ADAM_KERSHNER_HEADSHOT_URL = '/images/adam-kershner-headshot.png'
/** Oasis product roadmap graphic (includes SOC 2 Type 1 / Type 2 milestones). */
const OASIS_ROADMAP_SOC2_IMAGE_URL = '/images/oasis-roadmap-soc2-timeline.png'
/** Shadow AI / unmanaged tools scenario (Acme-style diagram). */
const SHADOW_AI_PROBLEM_DIAGRAM_URL = '/images/shadow-ai-unmanaged-tools-diagram.png'

/** Pre-launch Product Hunt supporters with accounts lined up for launch day. */
const PRODUCT_HUNT_SUPPORTERS_COUNT = 180
const PRODUCT_HUNT_LOGO_URL = '/images/product-hunt-logo.png'

/** LinkedIn outbound sales funnel (weekly cadence). */
const LINKEDIN_PROSPECTS_IDENTIFIED_PER_WEEK = 1000
const LINKEDIN_CONNECTION_REQUEST_CAP_PER_WEEK = 150

/** Q2 enterprise pipeline target (signed engagement letters or LOIs for pilots). */
const Q2_LOI_TARGET = 3

/**
 * Consumer NPS from `public/NPS/NPS-Sheet1.csv` (same source as /nps).
 * Recompute when the export changes: promoters 9–10, passives 7–8, detractors 0–6.
 */
const NPS_SCORE_CURRENT = 25
const NPS_SAMPLE_CURRENT = 40
const NPS_PROMOTERS_CURRENT = 16
const NPS_PASSIVES_CURRENT = 18
const NPS_DETRACTORS_CURRENT = 6
const NPS_TARGET_SCORE_MIN = 30
/** Ideal sample called out on the NPS dashboard for launch-confidence readouts. */
const NPS_SAMPLE_GOAL = 200

const INTERNSHIP_ALUMNI_COMPANIES = [
  'Amazon',
  'Citi',
  'Afficiency',
  'Phenom',
  'Qualcomm',
  'Elas',
  'Sidley Austin LLP',
  'Zion Cloud Solutions',
  'Red Hat',
  'eBay',
  'Spot-On',
  'IBM',
  'MUFG',
  'Tesla',
  'ReferU.ai',
  'Hyperbound',
  'AT&T',
  'Verveware',
  'Hedgehog',
  'Redis',
  'PriceEasy AI',
  'Ipsen',
  'Microsoft',
  'Southwest Airlines',
  'Dell Technologies',
  'NVIDIA',
  'Precisely',
]

const INTERNSHIP_TALENT_PIPELINES = [
  'Duke',
  'Cornell',
  'Johns Hopkins',
  'Cal Tech',
  'Illinois',
]

/** High-level AI/browser security test themes for the roadmap (severity = modeled risk). */
const ROADMAP_SECURITY_ITEMS = [
  {
    title: 'Indirect prompt injection via web pages',
    description:
      'Attacker embeds hidden instructions in a webpage the user visits. When the AI processes the page, it may execute attacker commands.',
    severity: 'critical',
  },
  {
    title: 'Guardrail bypass via confidence manipulation',
    description:
      'Malicious prompts include fake judge responses to trick the security evaluator into reporting lower-than-actual risk.',
    severity: 'critical',
  },
  {
    title: 'Tab hijacking / navigation injection',
    description:
      'Injected instructions direct the assistant to open tabs, navigate to phishing pages, or close security-relevant tabs.',
    severity: 'high',
  },
  {
    title: 'Data exfiltration via image / URL rendering',
    description:
      'AI renders an attacker-crafted URL embedding stolen data in query parameters; image load can act as an exfil channel.',
    severity: 'high',
  },
  {
    title: 'ASCII / Unicode smuggling',
    description:
      'Hidden Unicode tag characters (e.g. U+E0000 range) carry invisible instructions that bypass text filters but are interpreted by the model.',
    severity: 'high',
  },
  {
    title: 'SpAIware — persistent memory poisoning',
    description:
      'Injected instructions alter persistent memory or custom instructions so malicious behavior survives across sessions.',
    severity: 'high',
  },
  {
    title: 'ZombAI / remote control via injected C2',
    description:
      'The AI becomes a command-and-control agent: attacker content drives instructions the model executes autonomously.',
    severity: 'critical',
  },
  {
    title: 'Cross-tab data leakage',
    description:
      'With access to multiple tabs, the model can be steered to read sensitive data in one tab and relay it via another.',
    severity: 'high',
  },
  {
    title: 'Tool / API abuse via prompt injection',
    description:
      'Injected prompts invoke browser extension APIs, OS features (downloads, clipboard), or developer tooling through the AI.',
    severity: 'high',
  },
  {
    title: 'Multimodal injection via images',
    description:
      'Rebus-style image sequences (e.g. icons encoding text) can carry instructions for multimodal models, bypassing text-only filters.',
    severity: 'mediumHigh',
  },
  {
    title: 'Policy enforcement partnership exploration (Cinder)',
    description:
      'Explore a partnership with **Cinder** (cinder.ai) to strengthen enterprise policy enforcement workflows, human review operations, and auditable enforcement actions in the enterprise browser stack.',
    severity: 'mediumHigh',
  },
]

/** Productivity roadmap pillars (paired column). */
const ROADMAP_PRODUCTIVITY_ITEMS = [
  {
    title: 'Amplifier',
    tag: 'New',
    featured: true,
    description:
      'A new layer focused on **speed** and **accuracy** of AI-driven browser commands. Many consumer AI browsers (for example Perplexity Comet and similar products) still struggle here—enough that people often return to **Google Chrome** because the assistant does not feel fast or reliable enough to earn a permanent slot in the toolbar. Amplifier uses **opt-in telemetry** from real command history to learn which executions land as **good** outcomes (intent met) versus **bad** ones (missed intent or weak results), judged against patterns from past activity. When the model predicts **bad**, it can **re-evaluate and refine** the plan to push toward **good** before the user sees a failure. The same signals power **execution-time estimates** so we can **set honest expectations**: simple commands should be faster and steadier; long, multi-step requests take longer—even though users increasingly expect assistants to handle complexity. Amplifier is how we narrow that gap over time.',
  },
  {
    title: 'Onboarding & session quality',
    description:
      'Faster time-to-value with clearer first-run flows, reliable sign-in and session persistence, and smoother browser import / Google auth.',
  },
  {
    title: 'Tab & workspace intelligence',
    description:
      'Stronger tab groups, faster switching, semantic discovery across tabs, and polished split view aligned with how power users work.',
  },
  {
    title: 'Research & summarization',
    description:
      'Accurate webpage and multi-tab summarization, scroll-aware extraction on long pages, and dependable “read across my tabs” workflows.',
  },
  {
    title: 'Assistant reliability & intent',
    description:
      'Correct tab targeting and actions, less literal interpretation of messy prompts, stable chat history, and lower perceived lag.',
  },
  {
    title: 'Voice & multimodal UX',
    description:
      'Streamlined dictation, clearer mic states, and safe handling of mixed text + image inputs without trading off usability.',
  },
  {
    title: 'Enterprise-ready foundations',
    description:
      'Continued hardening of updates, identity hooks, and governance-friendly behaviors that support both freemium growth and B2B pilots.',
  },
]

function roadmapSeverityClass(severity) {
  if (severity === 'critical') return 'q1-er-severity q1-er-severity--critical'
  if (severity === 'high') return 'q1-er-severity q1-er-severity--high'
  return 'q1-er-severity q1-er-severity--medium-high'
}

function roadmapSeverityLabel(severity) {
  if (severity === 'critical') return 'Critical'
  if (severity === 'high') return 'High'
  return 'Medium–High'
}

function RoadmapCollapsibleChevron({ expanded }) {
  return (
    <span
      className={`q1-er-roadmap-chevron${expanded ? ' q1-er-roadmap-chevron--open' : ''}`}
      aria-hidden
    >
      <svg
        className="q1-er-roadmap-chevron-svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  )
}

function RoadmapCollapsibleItem({ itemKey, title, description, severity, isOpen, onToggle, featured, tagLabel }) {
  const btnId = `roadmap-btn-${itemKey}`
  const panelId = `roadmap-panel-${itemKey}`
  const severityBadge =
    severity != null ? (
      <span className={`${roadmapSeverityClass(severity)} q1-er-roadmap-severity-badge`}>
        {roadmapSeverityLabel(severity)}
      </span>
    ) : null

  const toggleClass =
    severity != null ? 'q1-er-roadmap-toggle' : 'q1-er-roadmap-toggle q1-er-roadmap-toggle--no-severity'

  const liClass = [
    'q1-er-roadmap-item',
    isOpen ? 'q1-er-roadmap-item--expanded' : '',
    featured ? 'q1-er-roadmap-item--featured' : '',
  ]
    .filter(Boolean)
    .join(' ')

  function renderRichDescription(text) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>
      }
      return <React.Fragment key={i}>{part}</React.Fragment>
    })
  }

  return (
    <li className={liClass}>
      <button
        type="button"
        className={toggleClass}
        id={btnId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(itemKey)}
      >
        <RoadmapCollapsibleChevron expanded={isOpen} />
        <span className="q1-er-roadmap-item-title-col">
          <span className="q1-er-roadmap-item-title">{title}</span>
          {tagLabel ? <span className="q1-er-roadmap-item-tag">{tagLabel}</span> : null}
        </span>
        {severityBadge}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="q1-er-roadmap-panel"
        hidden={!isOpen}
      >
        <p className="q1-er-roadmap-item-desc">{renderRichDescription(description)}</p>
      </div>
    </li>
  )
}

/** Organizations represented among accepted LinkedIn connections (deduplicated from CRM export). */
const LINKEDIN_ACCEPTED_BRANDS = [
  'IBM',
  'Red Hat',
  'Walgreens',
  'Amazon Web Services',
  'Select Health',
  'Adobe',
  'Tricentis',
  'The AES Corporation',
  'SiriusPoint',
  'Certa.ai',
  'AssetWatch',
  'Fannie Mae',
  'Salesforce',
  'Microsoft',
  'Dutchie',
  'CBRE',
  'AvePoint',
  'Acoustic',
  'Aveture Systems LLC',
  'CoreWeave',
  'WRITER',
  'Softheon',
  'XBOW',
  'Profisee',
  'Workday',
  'March McLennan',
  'Hewlett Packard Enterprise',
  'New York Life Insurance Company',
  'Nvidia',
  'US Dept of Energy',
  'Sigma Information Group, Inc.',
  'Nymbus',
]

const PRODUCT_DEMOS = [
  {
    id: 'YUKRcYzdAm4',
    title:
      'How to group tabs in Chrome (then do it faster with Oasis AI commands)',
  },
  {
    id: 'e4D1-cmBqCo',
    title: 'Oasis: The AI Browser That Finally Fixes Tab Overload (4-Minute Demo)',
  },
]

function Q1ExecutiveReport() {
  const [brokenUrls, setBrokenUrls] = useState({})
  const [marketAccordion, setMarketAccordion] = useState({
    tam: false,
    sam: false,
    som: false,
  })
  const [roadmapOpenKeys, setRoadmapOpenKeys] = useState({})
  const [faqOpen, setFaqOpen] = useState(null)
  const toggleFaq = (idx) => setFaqOpen(faqOpen === idx ? null : idx)
  const ROADMAP_SECURITY_ITEMS_DISPLAY = ROADMAP_SECURITY_ITEMS.slice(0, ROADMAP_PRODUCTIVITY_ITEMS.length)

  function toggleRoadmapKey(key) {
    setRoadmapOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="page" id="q1-executive-report">
      <div className="page-header">
        <h1>Q1 Executive Update</h1>
        <p className="page-subtitle">
          Kahana / Oasis — traction, pipeline, and priorities (Q1 2026)
        </p>
      </div>

      <section className="page-section q1-er-toc-section" aria-label="On-page table of contents">
        <div className="content-block">
          <h2 className="toc-title" style={{ marginTop: 0 }}>On this page</h2>
          <ol className="q1-er-toc-list">
            <li><a className="q1-er-toc-link" href="#identification-of-problem">Identification of Problem</a></li>
            <li><a className="q1-er-toc-link" href="#solution-technology">Solution/Technology</a></li>
            <li><a className="q1-er-toc-link" href="#competition">Competition</a></li>
            <li><a className="q1-er-toc-link" href="#market-opportunity">Market Opportunity</a></li>
            <li><a className="q1-er-toc-link" href="#go-to-market-strategy">Go-To-Market Strategy</a></li>
            <li><a className="q1-er-toc-link" href="#business-model">Business Model</a></li>
            <li><a className="q1-er-toc-link" href="#current-traction">Current Traction</a></li>
            <li><a className="q1-er-toc-link" href="#product-development-timeline">Product Development Timeline</a></li>
            <li><a className="q1-er-toc-link" href="#product-soc2-compliance">SOC 2 compliance</a></li>
            <li><a className="q1-er-toc-link" href="#management-team">Management Team</a></li>
            <li><a className="q1-er-toc-link" href="#financial-projections">Financial Projections</a></li>
            <li><a className="q1-er-toc-link" href="#strategic-faq">Strategic FAQ</a></li>
            <li><a className="q1-er-toc-link" href="#q1-er-retrospective">Retrospective feedback</a></li>
          </ol>
        </div>
      </section>

      <section className="page-section q1-er-page" id="at-a-glance">
        <h2>At a glance</h2>
        <div className="q1-er-hero">
          <h2>Summary</h2>
          <p>
            In Q1 we improved the product materially, grew organic reach, and validated that inbound marketing can surface real enterprise conversations. We are scaling a repeatable prospecting motion toward signed pilot{' '}
            <a
              className="q1-er-inline-link"
              href={OASIS_LOI_LETTER_DOC_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              engagement letters or LOIs
            </a>{' '}
            in Q2, while lining up investor relationships so those commitments become clear proof points for a seed round.
          </p>
        </div>

        <div className="q1-er-pitch-block" id="pitch-video">
          <h3 className="q1-er-subsection-title">Enterprise pitch (~3 minutes)</h3>
          <p className="q1-er-video-caption">
            The fastest way to see how we pitch companies and the problem the Oasis enterprise browser solves for IT and security buyers.
          </p>
          <div className="q1-er-video-wrap">
            <iframe
              className="q1-er-video-iframe"
              src={`${PITCH_VIDEO_EMBED}?rel=0`}
              title="Kahana Oasis — enterprise pitch (~3 minutes)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="q1-er-meta" style={{ marginBottom: 0 }}>
            <a
              className="q1-er-video-link"
              href={PITCH_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on YouTube →
            </a>
          </p>
        </div>

        <div className="q1-er-stats" aria-label="Key Q1 metrics">
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">1.2M</div>
            <div className="q1-er-stat-label">Impressions (Q1)</div>
          </div>
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">+48.1%</div>
            <div className="q1-er-stat-label">vs. prior quarter</div>
          </div>
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">25</div>
            <div className="q1-er-stat-label">NPS (internal testing)</div>
          </div>
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">30+</div>
            <div className="q1-er-stat-label">NPS target (near term)</div>
          </div>
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">~1K</div>
            <div className="q1-er-stat-label">Prospects / week (goal)</div>
          </div>
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">3</div>
            <div className="q1-er-stat-label">
              <a
                className="q1-er-inline-link"
                href={OASIS_LOI_LETTER_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Engagement letters / LOIs
              </a>{' '}
              target (Q2)
            </div>
          </div>
          <div className="q1-er-stat">
            <div className="q1-er-stat-value">{WAITLIST_COUNT_LATEST}</div>
            <div className="q1-er-stat-label">
              Waitlist signups
              <span style={{ display: 'block', fontWeight: 400, fontSize: '0.75rem', marginTop: '4px', color: '#888' }}>
                {WAITLIST_WEEK_LABEL} ({WAITLIST_PRIOR_WEEK} prior week)
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section q1-er-page" id="identification-of-problem">
        <h2>Identification of Problem</h2>
        <div className="content-block">
          <p className="q1-er-meta q1-er-narrative-lead" style={{ fontSize: '1.02rem', color: '#444', lineHeight: 1.7 }}>
            <strong>The browser has become the new operating system — but it is largely unmanaged.</strong>
          </p>
          <div
            className="q1-er-narrative-steps q1-er-problem-narrative"
            role="list"
            aria-label="Why the browser is a security gap"
          >
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">1</span>
                <h4 className="q1-er-narrative-step-title">Work lives in the browser</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Most enterprise work now lives inside the browser: SaaS apps, internal dashboards, collaboration tools, and increasingly even AI workflows. Yet security teams still lack consistent control over what happens inside that environment.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">2</span>
                <h4 className="q1-er-narrative-step-title">Sprawl without governance</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                The root cause is the uncontrolled growth of applications, extensions, and AI tools running in the browser without centralized governance. This SaaS sprawl makes it difficult to enforce policies, monitor activity, or protect sensitive data, especially when users access systems from third-party devices.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">3</span>
                <h4 className="q1-er-narrative-step-title">Costly, fragmented workarounds</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Security teams are left juggling workarounds: restrictive access rules, costly device provisioning, or fragmented tools that fail to provide a coherent control layer.
              </p>
            </div>
          </div>

          <div className="q1-er-problem-grid" aria-label="Enterprise AI risk indicators">
            <article className="q1-er-problem-tile">
              <div className="q1-er-problem-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="8" width="12" height="10" rx="2" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                  <circle cx="10" cy="13" r="1" />
                  <circle cx="14" cy="13" r="1" />
                  <path d="M10 16h4" />
                </svg>
              </div>
              <div className="q1-er-problem-stat">75%</div>
              <p className="q1-er-problem-title">Knowledge workers use AI regularly</p>
              <p className="q1-er-problem-copy">
                AI adoption is now mainstream, expanding the unmanaged AI surface area inside organizations.
              </p>
              <a
                className="q1-er-problem-source"
                href="https://www.worklytics.co/resources/2025-ai-adoption-benchmarks-employee-usage-statistics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </article>

            <article className="q1-er-problem-tile">
              <div className="q1-er-problem-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 2.8 19a1 1 0 0 0 .87 1.5h16.66A1 1 0 0 0 21.2 19L12 3Z" />
                  <path d="M12 9v5" />
                  <circle cx="12" cy="17" r="1" />
                </svg>
              </div>
              <div className="q1-er-problem-stat">57%</div>
              <p className="q1-er-problem-title">Shadow AI users input sensitive data</p>
              <p className="q1-er-problem-copy">
                In Jan 2025 alone, AI sites saw 10.53B visits and 80% happened via browsers, making browser-level controls critical.
              </p>
              <a
                className="q1-er-problem-source"
                href="https://www.menlosecurity.com/press-releases/menlo-securitys-2025-report-uncovers-68-surge-in-shadow-generative-ai-usage-in-the-modern-enterprise"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </article>

            <article className="q1-er-problem-tile">
              <div className="q1-er-problem-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                  <circle cx="12" cy="16" r="1.1" />
                </svg>
              </div>
              <div className="q1-er-problem-stat">17%</div>
              <p className="q1-er-problem-title">Companies can block confidential uploads</p>
              <p className="q1-er-problem-copy">
                Most enterprises still lack technical controls to prevent data uploads to public AI tools.
              </p>
              <a
                className="q1-er-problem-source"
                href="https://www.kiteworks.com/cybersecurity-risk-management/ibm-2025-data-breach-report-ai-risks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </article>
          </div>

          <h3 className="q1-er-subsection-title">Why Existing Approaches Fall Short</h3>
          <p className="q1-er-meta q1-er-narrative-lead" style={{ lineHeight: 1.7 }}>
            Today&apos;s options force a trade-off between security and usability.
          </p>
          <div className="q1-er-narrative-steps" role="list" aria-label="Why existing approaches fall short">
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">1</span>
                <h4 className="q1-er-narrative-step-title">Device-centric approaches</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Many organizations attempt to solve this problem using traditional device-centric approaches. Corporate laptops and VDI environments can provide strong control, but they are expensive to provision and slow to scale, especially for short-term contractors or external partners.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">2</span>
                <h4 className="q1-er-narrative-step-title">Enterprise browser &amp; secure access tools</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Enterprise browser tools and secure access platforms attempt to address parts of the challenge. Some integrate with identity providers or offer policy enforcement features, but many struggle to balance usability with consistent governance across managed and unmanaged devices.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">3</span>
                <h4 className="q1-er-narrative-step-title">The uncomfortable compromise</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Consequently, teams often face an uncomfortable compromise: either accept operational friction and rising infrastructure costs, or allow inconsistent browser access that introduces security and compliance risks.
              </p>
            </div>
          </div>

          <figure className="q1-er-problem-diagram-figure">
            <img
              className="q1-er-problem-diagram-img"
              src={SHADOW_AI_PROBLEM_DIAGRAM_URL}
              alt="Diagram: at Acme Corp, sensitive documents from Slack fundraising threads and client emails—with runway, cap table, and pricing or margin details—are copied into unmanaged AI browser tools and unsanctioned AI chat interfaces"
              loading="lazy"
            />
            <figcaption className="q1-er-problem-diagram-caption">
              Illustrative scenario: internal collaboration and deal-related content can flow into <strong>unmanaged AI browsers</strong>{' '}
              and <strong>unsanctioned AI tools</strong> when people paste or upload material to move faster—exposing regulated or
              confidential data outside IT&apos;s control (the class of risk SOC 2 and managed-browser programs are meant to
              govern).
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section q1-er-page" id="solution-technology">
        <h2>Solution/Technology</h2>
        <div className="content-block">
          <h3 className="q1-er-subsection-title" style={{ marginTop: 0 }}>Our approach</h3>
          <p className="q1-er-meta q1-er-narrative-lead" style={{ fontSize: '1.02rem', color: '#444', lineHeight: 1.7 }}>
            <strong>A managed enterprise browser designed for modern SaaS access.</strong>
          </p>
          <div className="q1-er-narrative-steps" role="list" aria-label="Our approach">
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">1</span>
                <h4 className="q1-er-narrative-step-title">Governance in the browser</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Oasis is a managed enterprise browser built specifically for the way modern organizations access software. Instead of relying on device ownership as the control layer, Oasis places governance directly inside the browser environment where work actually happens.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">2</span>
                <h4 className="q1-er-narrative-step-title">Policy &amp; stack integration</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Security teams can enforce unified browser policies across corporate and third-party devices, ensuring consistent protection for applications, data, and AI usage. The platform integrates cleanly with identity and security stacks, including systems such as Okta and enterprise DLP solutions, so existing policies flow naturally into the browsing environment.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">3</span>
                <h4 className="q1-er-narrative-step-title">Outcome</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                The outcome is a modern security model that combines strong governance with a user experience people actually want to use, enabling faster onboarding and smoother access for contractors and distributed teams.
              </p>
            </div>
          </div>

          <h3 className="q1-er-subsection-title">Why Status Quo Is No Longer Optional</h3>
          <p className="q1-er-meta q1-er-narrative-lead" style={{ fontSize: '1.02rem', color: '#444', lineHeight: 1.7 }}>
            <strong>The organizations that master browser security will move faster.</strong>
          </p>
          <div className="q1-er-narrative-steps" role="list" aria-label="Why status quo is no longer optional">
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">1</span>
                <h4 className="q1-er-narrative-step-title">The browser as workspace</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                As SaaS adoption accelerates and contractor workforces grow, the browser has effectively become the new enterprise workspace. Companies that continue to rely on device-centric security models will struggle with rising costs, slow onboarding, and increasing policy gaps across unmanaged devices.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">2</span>
                <h4 className="q1-er-narrative-step-title">First-class browser security</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                Meanwhile, organizations that treat the browser as a first-class security platform gain a significant operational advantage. They can onboard contractors in hours rather than weeks, enforce consistent policies across environments, and reduce the operational burden associated with device provisioning and virtual desktops.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">3</span>
                <h4 className="q1-er-narrative-step-title">Adapt early</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                The shift is already underway, and companies that adapt early will operate with greater speed, security, and control.
              </p>
            </div>
          </div>

          <h3 className="q1-er-subsection-title">Our Point of View</h3>
          <p className="q1-er-meta q1-er-narrative-lead" style={{ fontSize: '1.02rem', color: '#444', lineHeight: 1.7 }}>
            <strong>Security should live where work actually happens.</strong>
          </p>
          <div className="q1-er-narrative-steps" role="list" aria-label="Our point of view">
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">1</span>
                <h4 className="q1-er-narrative-step-title">Governing where work happens</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                The future of enterprise security is not about locking down devices. It is about governing the environments where work takes place. Today, that environment is the browser.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">2</span>
                <h4 className="q1-er-narrative-step-title">A SaaS-centric control layer</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body">
                We believe organizations need a control layer designed specifically for SaaS-centric work: one that integrates with the existing security stack, enforces consistent policies across all users, and eliminates the operational overhead of device-centric access models.
              </p>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">3</span>
                <h4 className="q1-er-narrative-step-title">Flexible work, consistent controls</h4>
              </div>
              <p className="q1-er-meta q1-er-narrative-step-body" style={{ marginBottom: 0 }}>
                By bringing governance directly into the browser, security teams can protect data, enable flexible work, and support modern operating models without forcing organizations to choose between usability and control.
              </p>
            </div>
          </div>

          <figure className="q1-er-solution-overview-figure">
            <img
              className="q1-er-solution-overview-image"
              src={OASIS_ADMIN_SOLUTION_OVERVIEW_URL}
              alt="Solution overview: Oasis Admin—role-based access, audit logs of browser and AI usage, monitor and revoke access, remote configuration; Oasis AI client linked to Admin Console session monitoring"
              loading="lazy"
            />
            <figcaption className="q1-er-solution-overview-caption">
              <strong>Oasis Admin</strong> is the management console for the enterprise browser: role-based access controls, a full
              audit log of browser and AI usage, the ability to monitor and revoke sessions, and remote configuration—illustrated
              here with the connection from end-user Oasis AI activity to active sessions in the admin console.
            </figcaption>
          </figure>

          <h3 className="q1-er-subsection-title">Features of Secure Enterprise Browsers</h3>
          <p className="q1-er-meta" style={{ marginBottom: '6px' }}>Updated March 2026</p>
          <p className="q1-er-meta" style={{ marginBottom: '8px' }}>
            <strong>Mandatory Features:</strong>
          </p>
          <ul className="q1-er-checklist">
            <li>Browser extension compatible with common browsers</li>
            <li>Browser extension audit, risk profiling, and control</li>
            <li>Integration with authentication infrastructure providers for identity context and authentication</li>
            <li>Centralized management of browser-based security policies</li>
            <li>Secure access to private and SaaS-based web applications</li>
            <li>Centralized web session logging, including user, device, destination, and activity</li>
            <li>Web content security, including malware protection and URL filtering</li>
          </ul>
        </div>
      </section>

      <section className="page-section q1-er-page" id="competition">
        <h2>Competition</h2>
        <div className="content-block">
          <div className="q1-er-competition-cols">
            <div className="q1-er-competition-col">
              <h3 className="q1-er-subsection-title" style={{ marginTop: 0 }}>Direct competitors</h3>
              <p className="q1-er-meta">
                Direct competitors include enterprise browsers focused on securing SaaS and web access, such as Island, Surf, Talon, Comet, and Microsoft Edge for Business. Chrome Enterprise also appears in evaluations but cannot reliably enforce security and DLP on third-party or BYOD devices, making it unsuitable for many contractor scenarios.
              </p>
            </div>
            <div className="q1-er-competition-col">
              <h3 className="q1-er-subsection-title" style={{ marginTop: 0 }}>Indirect competitors</h3>
              <p className="q1-er-meta">
                Indirect competitors include VDI and remote desktops, dedicated or locked-down contractor devices, and traditional endpoint and device-management tools.
              </p>
            </div>
          </div>
          <div className="q1-er-unique-differentiation" id="unique-differentiation">
            <h3 className="q1-er-unique-differentiation-title">Unique differentiation</h3>
            <div className="q1-er-unique-differentiation-row">
              <p className="q1-er-meta q1-er-unique-differentiation-body">
                It is called &quot;Oasis&quot; for a reason: most enterprise browsers feel clunky and restrictive, while Oasis
                combines enterprise-grade security with an elegant, user-friendly interface and an AI assistant that understands
                natural language and accelerates everyday work—so work doesn&apos;t feel like work anymore.
              </p>
              <div className="q1-er-unique-differentiation-visual">
                <img
                  className="q1-er-unique-differentiation-img"
                  src={OASIS_DIFFERENTIATION_ILLUSTRATION_URL}
                  alt="Minimal illustration: a relaxed sloth in a hammock between palm trees, suggesting calm and ease"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <p className="q1-er-meta" style={{ marginBottom: 0 }}>
            <strong>Note:</strong> We are underway with a <strong>Benchmarking Assessment</strong> to calculate{' '}
            <strong>productivity</strong> and <strong>security</strong> scores for all competitors; those scores will appear here
            once the assessment is complete.
          </p>
        </div>
        <EmbeddedCompetitorsTable />
      </section>

      <section className="page-section q1-er-page" id="market-opportunity">
        <h2>Market Opportunity</h2>
        <div className="content-block">
          <p className="q1-er-meta" style={{ lineHeight: 1.7 }}>
            We serve security- and governance-conscious enterprises whose employees do most of their work in the browser, inside SaaS apps, internal dashboards, collaboration tools, and AI workflows.
          </p>
          <p className="q1-er-meta" style={{ lineHeight: 1.7 }}>
            Our target customers are architecture and platform leaders responsible for selecting core workplace technology and enforcing security and data-governance controls in this environment.
          </p>
          <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: '18px' }}>
            Typical buyers include Enterprise Solutions Architects, Enterprise Architects, Directors/VPs of Enterprise Architecture, Chief Architects, Heads of Architecture, Principal Solutions Architects, IT/Systems Architects, and Directors of Solutions Architecture.
          </p>
          <figure className="q1-er-market-image-wrap">
            <img
              className="q1-er-market-image"
              src={MARKET_OPPORTUNITY_IMAGE_URL}
              alt="Market opportunity diagram showing TAM, SAM, and SOM for AI plus enterprise browsers"
              loading="lazy"
            />
            <figcaption className="q1-er-market-image-caption">
              Market sizing overview: TAM, SAM, and SOM.
            </figcaption>
          </figure>

          <div className="q1-er-market-sizings-grid">
            <div className="q1-er-market-accordion">
              <div className="q1-er-market-accordion-body">
                <h3 className="q1-er-subsection-title" style={{ marginTop: 0 }}>SOM - Serviceable Obtainable Market</h3>
                <p className="q1-er-meta"><strong>Value (3-5 year ARR run-rate):</strong> ~30-50M USD</p>
                <p className="q1-er-meta q1-er-market-equation">
                  <strong>Definition:</strong> 2,500-4,200 customers x 12,000 USD ACV, based on GTM capacity scaling.
                </p>
                <p className="q1-er-meta q1-er-market-plain">
                  For Oasis, SOM is what we can actually close in 3–5 years given our go-to-market engine: we model reaching and connecting with roughly <strong>1,000 ideal buyers per week</strong> on LinkedIn (solutions architects and similar personas), a conservative <strong>1–2%</strong> lead-to-customer conversion, <strong>$12,000</strong> ACV, and scaling outbound capacity by roughly <strong>3–5×</strong>—so SOM is capacity-bound, not a statement of total demand.
                </p>
              </div>
              <div className="q1-er-market-accordion-footer">
                <button
                  className="q1-er-accordion-btn"
                  type="button"
                  onClick={() => setMarketAccordion((prev) => ({ ...prev, som: !prev.som }))}
                >
                  {marketAccordion.som ? 'Hide SOM details' : 'Show SOM details'}
                </button>
              </div>
              {marketAccordion.som && (
                <div className="q1-er-accordion-panel">
                  <p className="q1-er-meta" style={{ marginBottom: '8px' }}>
                    <strong>Key assumptions:</strong>
                  </p>
                  <ul className="q1-er-bullet-block">
                    <li>Current team can identify ~<strong>1,000 solutions architects per week</strong> (core buyer persona) with no marketing spend, about <strong>52,000 new prospects/year</strong>.</li>
                    <li>Conservative outbound lead-to-customer conversion of <strong>1-2%</strong> yields ~<strong>520-1,040 new customers/year</strong> at current capacity.</li>
                    <li>At <strong>12k ACV</strong>, that implies roughly <strong>6-12M ARR/year</strong> from the current motion if fully utilized.</li>
                    <li>Over 3-5 years, GTM capacity scales by roughly <strong>3-5x</strong> (more outbound, marketing, and partners) while maintaining similar conversion and ACV.</li>
                    <li>This yields a realistic <strong>30-50M ARR</strong> SOM band that is explicitly capacity-constrained (sales/marketing engine), not demand-constrained.</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="q1-er-market-accordion">
              <div className="q1-er-market-accordion-body">
                <h3 className="q1-er-subsection-title" style={{ marginTop: 0 }}>SAM - Serviceable Available Market</h3>
                <p className="q1-er-meta"><strong>Value (annual):</strong> ~100-300B USD</p>
                <p className="q1-er-meta q1-er-market-equation">
                  <strong>Definition:</strong> 10-25M serviceable companies x 12,000 USD average annual contract.
                </p>
                <p className="q1-er-meta q1-er-market-plain">
                  For Oasis, SAM is the revenue we could pursue if we focused only on the <strong>browser-heavy</strong> segments and geographies we will sell into—roughly <strong>10–25 million</strong> companies at <strong>$12k/year</strong> on average—meaning firms with centralized IT/security, meaningful browser use, and enough scale (e.g. ~<strong>100+</strong> employees) that an enterprise browser deal is realistic in a <strong>5–10 year</strong> window.
                </p>
              </div>
              <div className="q1-er-market-accordion-footer">
                <button
                  className="q1-er-accordion-btn"
                  type="button"
                  onClick={() => setMarketAccordion((prev) => ({ ...prev, sam: !prev.sam }))}
                >
                  {marketAccordion.sam ? 'Hide SAM details' : 'Show SAM details'}
                </button>
              </div>
              {marketAccordion.sam && (
                <div className="q1-er-accordion-panel">
                  <p className="q1-er-meta" style={{ marginBottom: '8px' }}>
                    <strong>Key assumptions:</strong>
                  </p>
                  <ul className="q1-er-bullet-block">
                    <li>Focus is on high- and upper-middle-income regions where browser-based work and security concerns are highest (e.g., North America, Western Europe, parts of APAC/LatAm).</li>
                    <li>Target verticals are browser-heavy: tech/SaaS, finance, healthcare, professional services, modern manufacturing, and adjacent categories.</li>
                    <li>Initial profile is companies with at least ~100 employees and centralized IT/security.</li>
                    <li>This narrows the 40-80M global could-adopt logos to roughly <strong>10-25 million companies</strong> realistically reachable over 5-10 years.</li>
                    <li>Each is modeled at <strong>12k/year average</strong> (mix of minimum and larger deployments).</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="q1-er-market-accordion">
              <div className="q1-er-market-accordion-body">
                <h3 className="q1-er-subsection-title" style={{ marginTop: 0 }}>TAM - Total Addressable Market</h3>
                <p className="q1-er-meta"><strong>Value (annual):</strong> ~0.5-1.0T USD</p>
                <p className="q1-er-meta q1-er-market-equation">
                  <strong>Definition:</strong> 40-80M companies x 12,000 USD average annual contract.
                </p>
                <p className="q1-er-meta q1-er-market-plain">
                  For Oasis, TAM is the <strong>global ceiling</strong> if every organization that could plausibly adopt an enterprise browser paid our modeled <strong>$12,000/year</strong> average contract—about <strong>40–80 million</strong> companies worldwide—before we narrow by region, vertical, or how many accounts our team can actually touch.
                </p>
              </div>
              <div className="q1-er-market-accordion-footer">
                <button
                  className="q1-er-accordion-btn"
                  type="button"
                  onClick={() => setMarketAccordion((prev) => ({ ...prev, tam: !prev.tam }))}
                >
                  {marketAccordion.tam ? 'Hide TAM details' : 'Show TAM details'}
                </button>
              </div>
              {marketAccordion.tam && (
                <div className="q1-er-accordion-panel">
                  <p className="q1-er-meta" style={{ marginBottom: '8px' }}>
                    <strong>Key assumptions:</strong>
                  </p>
                  <ul className="q1-er-bullet-block">
                    <li>There are roughly <strong>40-80 million companies globally</strong> that could plausibly adopt an enterprise browser (browser-reliant work and enough IT/security maturity to care).</li>
                    <li>Each company could, in principle, standardize on an enterprise browser and pay around <strong>12k/year on average</strong> (some far above, many at or near the floor).</li>
                    <li>TAM is global and does not restrict by geography, industry, or company size beyond browser-reliant and commercially viable.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <p className="q1-er-meta" style={{ marginBottom: 0 }}>
            The market opportunity is large, but near-term execution is intentionally modeled around realistic GTM throughput and conversion assumptions.
          </p>
        </div>
      </section>

      <section className="page-section q1-er-page" id="go-to-market-strategy">
        <h2>Go-To-Market Strategy</h2>
        <div className="content-block">
          <figure className="q1-er-gtm-strategy-figure">
            <img
              className="q1-er-gtm-strategy-image"
              src={GTM_STRATEGY_IMAGE_URL}
              alt="GTM strategy slide: B2C2B virtual workshops—LinkedIn post promoting a secure AI adoption webinar, connected to a live Zoom session demoing the Oasis Admin Console"
              loading="lazy"
            />
            <figcaption className="q1-er-gtm-strategy-caption">
              B2C2B community motion: promote virtual sessions on LinkedIn, gather input through surveys and conversations, then host workshops that earn trust—here, a webinar flows into a live Oasis demo.
            </figcaption>
          </figure>
          <div className="q1-er-gtm-steps" role="list" aria-label="Go-to-market motion in three steps">
            <div className="q1-er-gtm-step" role="listitem">
              <div className="q1-er-gtm-step-head">
                <span className="q1-er-gtm-step-num" aria-hidden="true">1</span>
                <h3 className="q1-er-gtm-step-title">Community</h3>
              </div>
              <p className="q1-er-meta q1-er-gtm-step-body">
                We are building a <strong>community</strong> of <strong>business owners</strong>, <strong>IT and security leaders</strong>, and other <strong>knowledge workers</strong>—people who live at the intersection of technology strategy, security, and enterprise adoption. Our go-to-market is not only pipeline mechanics; it is a steady rhythm of <strong>virtual events</strong> that people genuinely want to attend, grounded in what we learn from them.
              </p>
            </div>
            <div className="q1-er-gtm-step" role="listitem">
              <div className="q1-er-gtm-step-head">
                <span className="q1-er-gtm-step-num" aria-hidden="true">2</span>
                <h3 className="q1-er-gtm-step-title">Input &amp; cadence</h3>
              </div>
              <p className="q1-er-meta q1-er-gtm-step-body">
                We <strong>reach out to prospects</strong> and gather <strong>surveys and structured input</strong> so we can <strong>narrow topics, formats, and length</strong> for programming that matches real priorities—not our assumptions. Our public-facing intake is the Kahana community-led events survey on Tally:{' '}
                <a href={COMMUNITY_EVENTS_SURVEY_URL} target="_blank" rel="noopener noreferrer">
                  https://tally.so/r/NpYZqB
                </a>
                . We <strong>invite</strong> the same audiences <strong>regularly</strong> and <strong>host events on a recurring cadence</strong>, using LinkedIn and direct outreach to fill seats and keep the conversation alive.
              </p>
            </div>
            <div className="q1-er-gtm-step" role="listitem">
              <div className="q1-er-gtm-step-head">
                <span className="q1-er-gtm-step-num" aria-hidden="true">3</span>
                <h3 className="q1-er-gtm-step-title">Trust &amp; learning loops</h3>
              </div>
              <p className="q1-er-meta q1-er-gtm-step-body" style={{ marginBottom: 0 }}>
                Through those sessions we <strong>foster discussion</strong>, surface <strong>honest conversation</strong>, and <strong>build trust</strong>—long before we ask for a pilot. Workshops and webinars double as learning loops for product and positioning; the scene above (promotion → live workshop with product depth) is how we scale that motion in practice.
              </p>
            </div>
          </div>
          <aside className="q1-er-gtm-example" aria-label="Example event">
            <p className="q1-er-gtm-example-kicker">Example</p>
            <p className="q1-er-meta q1-er-gtm-example-body" style={{ marginBottom: 0 }}>
              We are co-hosting a joint <strong>Masterclass</strong> with Gregory Gray and his community, <strong>Every Day Business Leaders</strong>, in <strong>May 2026</strong>. We are <strong>surveying potential attendees</strong> and gathering input to <strong>shape topics</strong>, and we are weighing whether to offer a <strong>low-ticket price</strong> or a <strong>giveaway incentive</strong>—for example, <strong>one month free</strong>—to drive interest and registrations.
            </p>
          </aside>

          <section className="q1-er-gtm-lifecycle" aria-labelledby="q1-er-gtm-lifecycle-heading">
            <h3 className="q1-er-subsection-title" id="q1-er-gtm-lifecycle-heading">
              First 2,000 users: 0–90 day customer success framework
            </h3>
            <p className="q1-er-meta" style={{ lineHeight: 1.7 }}>
              Our traction goal includes reaching <strong>2,000 daily active users by the end of Q2</strong>. To support that scale, we
              have developed a <strong>0–90 day customer success framework</strong>—documented as the{' '}
              <a
                className="q1-er-inline-link"
                href={OASIS_EARLY_USER_LIFECYCLE_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Oasis Early User Lifecycle Strategy
              </a>{' '}
              (Google Doc).
            </p>
            <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: 0 }}>
              The goal of the Oasis Early User Lifecycle Strategy is to define a precise, time-based user lifecycle from{' '}
              <strong>Day 0</strong> to <strong>Day 90</strong> and convert it into an executable 90-day operating plan that drives
              onboarding, engagement, and retention for the <strong>first 2,000 users</strong> (all signing up on Day 0). This plan
              operationalizes the charter&apos;s framework into daily and weekly actions across <strong>product</strong>,{' '}
              <strong>growth / CS</strong>, and <strong>data</strong> teams so that every user is proactively guided from first
              successful command to habit formation and long-term retention. By Day 90 we will have clear, repeatable playbooks that
              minimize silent churn, surface high-value users early, and generate product insights that inform the broader roadmap.
            </p>
          </section>
        </div>
      </section>

      <section className="page-section q1-er-page" id="business-model">
        <h2>Business Model</h2>
        <div className="content-block">
          <figure className="q1-er-market-image-wrap">
            <img
              className="q1-er-market-image"
              src={BUSINESS_MODEL_IMAGE_URL}
              alt="Pricing strategy slide showing B2C plans and enterprise B2B annual contract model"
              loading="lazy"
            />
          </figure>

          <p className="q1-er-meta" style={{ lineHeight: 1.7 }}>
            We are not yet generating revenue but have a straightforward flat-rate SaaS model.
          </p>
          <p className="q1-er-meta" style={{ lineHeight: 1.7 }}>
            Oasis will generate revenue through annual organization-wide subscriptions to our enterprise browser. Pricing starts at <strong>$12,000 USD per year per company</strong>, regardless of the number of employees using it: a simple, flat-rate model that makes budgeting easy and encourages broad adoption.
          </p>
          <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: 0 }}>
            Contracts can grow above $12,000 when customers need higher-touch support or custom development and integrations. We are already seeing strong inbound enterprise signal via SEO-led discovery, including evaluation interest from Culture Amp (a late-stage HR tech platform), where the contractor access and browser-governance use case is immediately commercial. As we execute our GTM motion and formalize pilots on this pricing model, we expect to convert this type of demand into initial enterprise contracts and then expand.
          </p>
        </div>
      </section>

      <section className="page-section q1-er-page" id="current-traction">
        <h2>Current Traction</h2>
        <div className="content-block">
          <div className="q1-er-case-study-brand" id="marketing">
            <h3 className="q1-er-subsection-title q1-er-case-study-title" style={{ marginTop: 0 }}>
              Case study: Culture Amp (first organic enterprise prospect)
            </h3>
            <div className="q1-er-case-study-logo-shell">
              <img
                className="q1-er-case-study-logo"
                src={CULTURE_AMP_LOGO_URL}
                alt="Culture Amp"
                loading="lazy"
              />
            </div>
          </div>

          <blockquote className="q1-er-case-study-verbatim">
            <p className="q1-er-case-study-verbatim-label">Prospect language (verbatim)</p>
            <div className="q1-er-case-study-verbatim-quote">
              <p>
                Looking to provide secure access to our SaaS apps for short-term consultants. Would like to accomplish this through providing access to a managed browser, vs shipping a laptop to them. Would need to integrate with Okta for their identity, and Netskope for DLP.
              </p>
              <p>
                Solution needs to require no local admin privileges to install/run, and ideally run off the Chromium engine for compatibility.
              </p>
              <p>
                Licensing is ideally per user per month.
              </p>
            </div>
            <footer className="q1-er-case-study-verbatim-footer">
              <div className="q1-er-case-study-verbatim-attribution">
                <img
                  className="q1-er-case-study-verbatim-avatar"
                  src={JULIAN_BRENNAN_PHOTO_URL}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <cite className="q1-er-case-study-verbatim-cite">
                  Julian Brennan, Enterprise Solutions Architect @ Culture Amp
                </cite>
              </div>
            </footer>
          </blockquote>

          <div className="q1-er-case-study-overview">
            <div className="q1-er-case-study-overview-text">
              <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: 0 }}>
                Culture Amp is our first fully organic enterprise prospect: they discovered Oasis through search, entered the funnel via our site, and are in an active vendor evaluation against category leaders (e.g. Island, Surf). The details below are summarized for strategic clarity.
              </p>
              <aside className="q1-er-callout" aria-label="Budget">
                <div className="q1-er-callout-title">Budget</div>
                <p className="q1-er-callout-body">
                  Their organization has aligned on a ceiling of up to <strong>$25,000 per year</strong> for this category of solution (consistent with Island/Surf-style enterprise browser pricing bands), alongside seat-based economics where applicable (on the order of <strong>$150 per user per year</strong>).
                </p>
              </aside>
              <aside className="q1-er-callout" aria-label="How they found us">
                <div className="q1-er-callout-title">How they found us</div>
                <p className="q1-er-callout-body">
                  Inbound via <strong>Google search and AI-assisted discovery</strong> (not a warm intro)—then they used our website and booked through the <strong>schedule a demo</strong> flow.
                </p>
              </aside>
              <aside className="q1-er-callout" aria-label="Evaluation status">
                <div className="q1-er-callout-title">Evaluation status</div>
                <ul className="q1-er-callout-checklist">
                  <li><span className="q1-er-callout-check" aria-hidden="true">✓</span> Demo scheduled and completed</li>
                  <li><span className="q1-er-callout-check" aria-hidden="true">✓</span> Budget confirmed for vendor selection</li>
                </ul>
              </aside>
            </div>
            <figure className="q1-er-case-study-photo-wrap">
              <img
                className="q1-er-case-study-photo"
                src={CULTURE_AMP_CASE_STUDY_IMAGE_URL}
                alt="Culture Amp team collaborating outdoors"
                loading="lazy"
              />
            </figure>
          </div>

          <section
            className="q1-er-case-study-roi"
            id="case-study-culture-amp-roi"
            aria-labelledby="case-study-culture-amp-roi-heading"
          >
            <h4 className="q1-er-case-study-roi-title" id="case-study-culture-amp-roi-heading">
              ROI
            </h4>
            <p className="q1-er-meta q1-er-case-study-roi-body">
              In evaluation, Culture Amp has described the cost of shipping a managed laptop to each contractor as averaging about{' '}
              <strong>$1,500</strong> when fully loaded—device, shipping, and wasted wages on hourly billing while contractors wait for hardware in transit and onboarding drags. They have cited on the order of{' '}
              <strong>20 contractors</strong> in scope for this use case, so the laptop path compounds cost and delay.
            </p>
            <p className="q1-er-meta q1-er-case-study-roi-body">
              A <strong>managed enterprise browser</strong> lets contractors access the SaaS they need securely <strong>without shipping laptops</strong>, so avoided hardware and logistics spend can translate into <strong>immediate ROI</strong> relative to the status quo.
            </p>
            <p className="q1-er-meta q1-er-case-study-roi-body">
              Against Oasis’s <strong>$12,000/year</strong> flat organization price (same regardless of seats), illustrative{' '}
              <strong>annual net savings</strong> scale with how many contractors they support this way—holding their{' '}
              <strong>~$1,500</strong> per-contractor laptop-path cost constant:
            </p>
            <div className="q1-er-case-study-roi-table-wrap">
              <table className="q1-er-case-study-roi-table">
                <caption className="q1-er-case-study-roi-caption">
                  Avoided laptop-path spend minus Oasis subscription (illustrative). % saved = net ÷ avoided laptop-path total; ROI = net ÷ $12k subscription.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Contractors (N)</th>
                    <th scope="col">Avoided (N × ~$1.5k)</th>
                    <th scope="col">Oasis (flat)</th>
                    <th scope="col">Net savings / year</th>
                    <th scope="col">% saved vs. laptop path</th>
                    <th scope="col">ROI vs. subscription</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10</td>
                    <td>~$15,000</td>
                    <td>$12,000</td>
                    <td>~$3,000</td>
                    <td>~20%</td>
                    <td>~25%</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>~$22,500</td>
                    <td>$12,000</td>
                    <td>~$10,500</td>
                    <td>~47%</td>
                    <td>~88%</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>~$30,000</td>
                    <td>$12,000</td>
                    <td>~$18,000</td>
                    <td>~60%</td>
                    <td>~150%</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>~$37,500</td>
                    <td>$12,000</td>
                    <td>~$25,500</td>
                    <td>~68%</td>
                    <td>~213%</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>~$45,000</td>
                    <td>$12,000</td>
                    <td>~$33,000</td>
                    <td>~73%</td>
                    <td>~275%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="q1-er-case-study-roi-note">
              At <strong>~8</strong> contractors, avoided laptop-path cost roughly matches the <strong>$12k</strong> subscription; above that, net savings widen because Oasis does not increase with seat count.{' '}
              <strong>% saved</strong> is net savings as a share of the laptop-path total; <strong>ROI vs. subscription</strong> is net savings divided by the flat annual Oasis fee. Figures are illustrative and depend on how many contractors are active in a given year and how costs are allocated internally.
            </p>
          </section>

          <aside className="q1-er-callout" aria-label="Technical and commercial requirements">
            <div className="q1-er-callout-title">Requirements (from their evaluation)</div>
            <ol className="q1-er-callout-numbered">
              <li>Integration with <strong>Okta</strong> (identity)</li>
              <li>Integration with <strong>Netskope</strong> for DLP</li>
              <li><strong>Chromium</strong>-based browser for compatibility</li>
              <li>No <strong>local administrator</strong> privileges required to install or run</li>
              <li>Deployable under a <strong>BYOD</strong> policy (user-level install)</li>
            </ol>
            <p className="q1-er-callout-note">
              Licensing preference: <strong>per user per month</strong>.
            </p>
          </aside>

          <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: 0 }}>
            This case validates <strong>inbound enterprise pull</strong>, a <strong>real vendor selection</strong>, and <strong>budget that matches the category</strong>. It sets the product bar for similar deals: identity, DLP, Chromium enterprise build, no-admin deployment, and BYOD-friendly rollout.
          </p>
          <aside className="q1-er-callout" aria-label="Organic B2C conversion validation" style={{ marginTop: '14px' }}>
            <div className="q1-er-callout-title">Additional B2C conversion signal</div>
            <p className="q1-er-callout-body">
              We also had an individual user (<strong>Mark</strong>) discover Oasis organically on our website, review pricing, skip
              the waitlist, and pay <strong> $20</strong> for the consumer product. He later downgraded after one month.
            </p>
            <p className="q1-er-callout-body" style={{ marginBottom: 0 }}>
              We are addressing this with ongoing onboarding and activation enhancements: improved onboarding flow plus expanded
              OAuth sign-in options (<strong>Google</strong>, <strong>Microsoft</strong>, and <strong>Apple</strong>). Even with the
              downgrade, this remains strong validation that organic traffic can convert into paid usage.
            </p>
          </aside>

          <section className="q1-er-marketing-funnel" id="waitlist" aria-labelledby="q1-er-marketing-funnel-heading">
            <h3 className="q1-er-subsection-title" id="q1-er-marketing-funnel-heading">
              Marketing funnel &amp; waitlist
            </h3>
            <p className="q1-er-mf-intro">
              We already run an <strong>organic funnel</strong>: top-of-funnel reach compounds into <strong>waitlist signups</strong>, and a subset of those signups use <strong>work emails</strong> at recognizable companies—often <strong>knowledge workers and end users</strong> who can profile as <strong>future enterprise buyers</strong> when we engage. That sets up the next section: <strong>outbound</strong> prospecting to IT and security leaders (not dependent on this inbound stream).
            </p>
            <div className="q1-er-marketing-funnel-grid">
              <div className="q1-er-marketing-funnel-lane" aria-label="Marketing funnel steps">
                <div className="q1-er-mf-step q1-er-mf-step--reach">
                  <div className="q1-er-mf-step-kicker">Top of funnel — reach</div>
                  <div className="q1-er-mf-step-stat">~1.2M</div>
                  <div className="q1-er-mf-step-stat-caption">Q1 impressions</div>
                  <p className="q1-er-mf-step-body">
                    Up <strong>48.1%</strong> vs. the prior quarter — content and SEO continue to compound.
                  </p>
                </div>
                <div className="q1-er-mf-connector" aria-hidden="true" />
                <div className="q1-er-mf-step">
                  <div className="q1-er-mf-step-kicker">Launch momentum</div>
                  <div className="q1-er-mf-step-stat">{PRODUCT_HUNT_SUPPORTERS_COUNT}</div>
                  <div className="q1-er-mf-step-stat-caption">Product Hunt supporters</div>
                  <p className="q1-er-mf-step-body">
                    Lined up for the consumer (freemium) browser launch <strong>this quarter</strong>, and on track to become <strong>#1 on Product Hunt</strong>—building on internal validation and launch readiness across the team.
                  </p>
                </div>
                <div className="q1-er-mf-connector" aria-hidden="true" />
                <div className="q1-er-mf-step q1-er-mf-step--waitlist">
                  <div className="q1-er-mf-step-kicker">Conversion — waitlist</div>
                  <div className="q1-er-mf-step-stat">{WAITLIST_COUNT_LATEST}</div>
                  <div className="q1-er-mf-step-stat-caption">on Oasis waitlist</div>
                  <p className="q1-er-mf-step-body">
                    Per <Link to="/weekly-reports">Weekly Reports</Link> ({WAITLIST_WEEK_LABEL}), up from <strong>{WAITLIST_PRIOR_WEEK}</strong> the prior week. Join at{' '}
                    <a href={WAITLIST_PUBLIC_URL} target="_blank" rel="noopener noreferrer">
                      kahana.co/oasis-waitlist
                    </a>
                    . Signups include <strong>work email domains</strong> from recognizable brands—not only personal Gmail.
                  </p>
                </div>
              </div>
              <div className="q1-er-marketing-funnel-logos">
                <p className="q1-er-mf-logos-caption">
                  Employees at these companies have joined the waitlist for the Oasis consumer version.
                </p>
                <div className="q1-er-brand-cloud q1-er-brand-cloud--funnel" aria-label="Example companies whose employees joined the consumer waitlist (work-email domains)">
                  {WAITLIST_WORK_EMAIL_DOMAINS.map((label) => {
                    const logo = WAITLIST_PUBLIC_LOGOS[label]
                    const showImg = logo?.url && !brokenUrls[logo.url]
                    return (
                      <span key={label} className="q1-er-brand-bubble">
                        {showImg ? (
                          <img
                            className="q1-er-brand-logo"
                            src={logo.url}
                            alt=""
                            loading="lazy"
                            onError={(e) => {
                              const src = e.currentTarget?.getAttribute('src') || ''
                              if (!src) return
                              setBrokenUrls((prev) => (prev[src] ? prev : { ...prev, [src]: true }))
                            }}
                          />
                        ) : null}
                        <span className="q1-er-brand-label">{label}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <div className="q1-er-traction-goal" role="note" aria-label="Traction goal">
            <div className="q1-er-traction-goal-main">
              <div className="q1-er-traction-goal-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="q1-er-traction-goal-copy">
                <div className="q1-er-traction-goal-label">Goal</div>
                <p className="q1-er-traction-goal-text">
                  <strong>2,000</strong> daily active users by end of Q2
                </p>
                <p className="q1-er-traction-goal-sub">
                  After a successful Product Hunt launch and a launch campaign on LinkedIn.
                </p>
              </div>
            </div>
            <div className="q1-er-traction-goal-ph-shell">
              <img
                className="q1-er-traction-goal-ph-logo"
                src={PRODUCT_HUNT_LOGO_URL}
                alt="Product Hunt"
                loading="lazy"
              />
            </div>
          </div>

          <section className="q1-er-sales-funnel" aria-labelledby="q1-er-sales-funnel-heading">
            <h3 className="q1-er-subsection-title" id="q1-er-sales-funnel-heading">
              Sales &amp; enterprise pipeline
            </h3>
            <p className="q1-er-sf-intro">
              Outbound runs as a repeatable <strong>LinkedIn</strong> motion: expand the prospect pool, send connection requests at the platform limit, and convert acceptances into conversations with enterprise buyers.
            </p>
            <div className="q1-er-sales-funnel-grid">
              <div className="q1-er-sales-funnel-lane" aria-label="LinkedIn outbound funnel and Q2 engagement letter or LOI target">
                <div className="q1-er-mf-step q1-er-mf-step--reach">
                  <div className="q1-er-mf-step-kicker">Top of funnel — prospect pool</div>
                  <div className="q1-er-mf-step-stat">~{LINKEDIN_PROSPECTS_IDENTIFIED_PER_WEEK.toLocaleString('en-US')}</div>
                  <div className="q1-er-mf-step-stat-caption">prospects identified per week (LinkedIn)</div>
                  <p className="q1-er-mf-step-body">
                    Repeatable identification of heads of <strong>IT</strong>, <strong>security</strong>, <strong>enterprise solutions architects</strong>, and <strong>CISOs</strong> for outreach.
                  </p>
                </div>
                <div className="q1-er-mf-connector" aria-hidden="true" />
                <div className="q1-er-mf-step">
                  <div className="q1-er-mf-step-kicker">Outbound — connection requests</div>
                  <div className="q1-er-mf-step-stat">{LINKEDIN_CONNECTION_REQUEST_CAP_PER_WEEK}</div>
                  <div className="q1-er-mf-step-stat-caption">connection requests sent per week (max)</div>
                  <p className="q1-er-mf-step-body">
                    <strong>LinkedIn Premium</strong> caps outbound connection requests at <strong>150 per week</strong>; we send at that weekly limit.
                  </p>
                </div>
                <div className="q1-er-mf-connector" aria-hidden="true" />
                <div className="q1-er-mf-step q1-er-mf-step--waitlist">
                  <div className="q1-er-mf-step-kicker">Engagement — acceptance</div>
                  <div className="q1-er-mf-step-stat q1-er-mf-step-stat--range">10–15%</div>
                  <div className="q1-er-mf-step-stat-caption">of requests accepted within 48 hours (avg.)</div>
                  <p className="q1-er-mf-step-body">
                    Acceptance rates on connection requests to this <strong>ICP</strong>—the reachable buyer audience <strong>grows week over week</strong>.
                  </p>
                </div>
                <div className="q1-er-mf-connector" aria-hidden="true" />
                <div className="q1-er-mf-step q1-er-mf-step--loi-goal">
                  <div className="q1-er-mf-step-kicker">Goal — Q2 pipeline</div>
                  <div className="q1-er-mf-step-stat">{Q2_LOI_TARGET}</div>
                  <div className="q1-er-mf-step-stat-caption">
                    <a
                      className="q1-er-inline-link"
                      href={OASIS_LOI_LETTER_DOC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Engagement letters or LOIs
                    </a>{' '}
                    signed by end of Q2
                  </div>
                  <p className="q1-er-mf-step-body">
                    Signed{' '}
                    <a
                      className="q1-er-inline-link"
                      href={OASIS_LOI_LETTER_DOC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>engagement letters</strong>
                    </a>
                    {' '}
                    or{' '}
                    <a
                      className="q1-er-inline-link"
                      href={OASIS_LOI_LETTER_DOC_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>letters of intent (LOIs)</strong>
                    </a>
                    {' '}
                    for enterprise browser pilots—north star for turning this outbound motion into <strong>live evaluations</strong>.
                  </p>
                </div>
              </div>
              <div className="q1-er-sales-funnel-brands">
                <p className="q1-er-sf-brands-caption">
                  <strong>Enterprise solutions architects</strong> and other leading <strong>IT &amp; security</strong> professionals at these organizations have accepted our connection requests and are now in our <strong>LinkedIn audience</strong>.
                </p>
                <div className="q1-er-sf-brand-cloud" aria-label="Example organizations among accepted LinkedIn connections">
                  {LINKEDIN_ACCEPTED_BRANDS.map((name) => (
                    <span key={name} className="q1-er-sf-brand-chip">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <h3 className="q1-er-subsection-title">Product</h3>
          <p className="q1-er-meta q1-er-product-lead">
            <strong>Consumer (freemium) browser</strong> — NPS trajectory and what we are improving before Product Hunt.
          </p>
          <div className="q1-er-product-nps-lane" aria-label="NPS current state and target">
            <div className="q1-er-product-nps-card q1-er-product-nps-current">
              <p className="q1-er-product-nps-kicker">Current</p>
              <div className="q1-er-product-nps-metric" aria-label={`NPS ${NPS_SCORE_CURRENT}, sample ${NPS_SAMPLE_CURRENT}`}>
                <span className="q1-er-product-nps-big">{NPS_SCORE_CURRENT}</span>
                <span className="q1-er-product-nps-unit">NPS</span>
              </div>
              <p className="q1-er-meta q1-er-product-nps-line">
                <strong>Sample size:</strong> {NPS_SAMPLE_CURRENT} valid 0–10 scores
              </p>
              <p className="q1-er-meta q1-er-product-nps-line q1-er-product-nps-breakdown">
                <strong>Mix:</strong> Promoters (9–10) {NPS_PROMOTERS_CURRENT} · Passives (7–8) {NPS_PASSIVES_CURRENT} ·
                Detractors (0–6) {NPS_DETRACTORS_CURRENT}
              </p>
              <p className="q1-er-meta q1-er-product-nps-footnote">
                Directional until we clear <strong>100</strong> minimum and approach <strong>{NPS_SAMPLE_GOAL}</strong> ideal
                (per our <Link className="q1-er-inline-link" to="/nps">NPS dashboard</Link>). Figures match the latest export feeding that page.
              </p>
            </div>
            <div className="q1-er-product-nps-arrow" aria-hidden="true">
              <svg className="q1-er-product-nps-arrow-icon" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 12h36m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="q1-er-product-nps-card q1-er-product-nps-goal">
              <p className="q1-er-product-nps-kicker">Near-term target</p>
              <div
                className="q1-er-product-nps-metric"
                aria-label={`Target NPS at least ${NPS_TARGET_SCORE_MIN}, sample goal ${NPS_SAMPLE_GOAL}`}
              >
                <span className="q1-er-product-nps-big">{NPS_TARGET_SCORE_MIN}+</span>
                <span className="q1-er-product-nps-unit">NPS</span>
              </div>
              <p className="q1-er-meta q1-er-product-nps-line">
                <strong>Sample goal:</strong> {NPS_SAMPLE_GOAL}+ responses for a stable launch readout
              </p>
              <p className="q1-er-meta q1-er-product-nps-footnote" style={{ marginBottom: 0 }}>
                Onboarding, reliability, and polish from NPS themes—ahead of <strong>Product Hunt</strong>.
              </p>
            </div>
          </div>

          <div
            className="q1-er-narrative-steps q1-er-narrative-steps--2 q1-er-product-narrative"
            role="list"
            aria-label="NPS priorities and recent delivery"
          >
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">1</span>
                <h4 className="q1-er-narrative-step-title">Themes to improve (NPS)</h4>
              </div>
              <p className="q1-er-meta q1-er-product-shipped-intro">
                Priorities echoed in open feedback and cohort summaries on the{' '}
                <Link className="q1-er-inline-link" to="/nps">
                  NPS page
                </Link>
                —especially <strong>Somewhat</strong> and <strong>Not disappointed</strong> respondents:
              </p>
              <ul className="q1-er-checklist q1-er-product-sprint-checklist">
                <li>
                  <strong>AI reliability:</strong> correct tab and action, prompt understanding, and summarization accuracy
                </li>
                <li>
                  <strong>Onboarding &amp; sessions:</strong> sign-in flow, login persistence, browser import, and Google auth
                </li>
                <li>
                  <strong>Tab &amp; workspace:</strong> faster switching, semantic search across tabs, split-view polish
                </li>
                <li>
                  <strong>Assistant UX:</strong> chat history stability, minimized chat access, less lag
                </li>
                <li>
                  <strong>Voice &amp; inputs:</strong> dictation refinements, input polish, intent vs overly literal commands
                </li>
              </ul>
            </div>
            <div className="q1-er-narrative-step" role="listitem">
              <div className="q1-er-narrative-step-head">
                <span className="q1-er-narrative-step-num" aria-hidden="true">2</span>
                <h4 className="q1-er-narrative-step-title">Recently shipped</h4>
              </div>
              <p className="q1-er-meta q1-er-product-shipped-intro">
                High-level themes from <strong>completed (archived) sprints</strong> on our{' '}
                <Link className="q1-er-inline-link" to="/sprints">
                  sprint board
                </Link>
                :
              </p>
              <ul className="q1-er-checklist q1-er-product-sprint-checklist">
                <li>More reliable AI commands and tab behavior (recursion limits, duplicate opens, tab detection)</li>
                <li>Tab groups: query tabs in groups, selective adds, compound commands, rename/close fixes, &quot;add all to group&quot;</li>
                <li>Webpage and multi-tab summarization, including scroll-aware extraction for long pages</li>
                <li>Native split view from the assistant and tighter window / assistant chrome behavior</li>
                <li>Sign-in visibility, logout/login flow, and simplified voice dictation UI</li>
                <li>In-app feedback modal plus early human-in-the-loop scaffolding; Gemini migration and assistant engine hardening</li>
              </ul>
            </div>
          </div>

          <h3 className="q1-er-subsection-title" id="product-development-timeline">
            Product Development Timeline
          </h3>
          <p className="q1-er-meta q1-er-roadmap-intro">
            Roadmap focus across <strong>Q2 and beyond</strong>: pair <strong>security assurance</strong> (adversarial AI/browser
            scenarios we test against) with <strong>productivity</strong> outcomes we are driving from NPS and shipped sprint
            themes. <strong>SOC 2 Type I</strong> approval is <strong>underway</strong>.
          </p>
          <aside className="q1-er-callout" aria-label="Browser engine demand from enterprise buyers">
            <div className="q1-er-callout-title">Browser engine demand shaping the roadmap</div>
            <p className="q1-er-callout-body">
              We continue to see demand for both <strong>Firefox</strong> and <strong>Chromium</strong> versions. At the enterprise
              level, however, multiple companies have specifically requested a <strong>Chromium</strong> build or have formal
              policy constraints that require Chromium-based browsers.
            </p>
            <ul className="q1-er-callout-checklist">
              <li>
                <span className="q1-er-callout-check" aria-hidden="true">✓</span> Critical Chromium extensions/plugins used in
                production are not always available in Firefox Marketplace
              </li>
              <li>
                <span className="q1-er-callout-check" aria-hidden="true">✓</span> Google Passkeys are already configured and
                embedded in existing enterprise security policies
              </li>
            </ul>
          </aside>
          <div className="q1-er-roadmap-strategy-cols" aria-label="Chromium vs Firefox and plugin strategy">
            <section className="q1-er-team-subsection" aria-label="Firefox to Chromium migration plan">
              <h4 className="q1-er-team-subsection-title">Chromium vs. Firefox</h4>
              <p className="q1-er-meta q1-er-team-subsection-copy">
                We are actively migrating our core <strong>security</strong> and <strong>productivity</strong> capabilities from Firefox
                into Chromium so enterprise deployments can run on the engine many buyers require today. This includes policy controls,
                session governance, AI workflow safeguards, and the productivity layer users depend on day to day.
              </p>
              <p className="q1-er-meta q1-er-team-subsection-copy">
                Multiple engineers we surveyed also said they prefer <strong>Chromium</strong> and advised us to prioritize Chromium
                over Firefox for near-term execution and compatibility.
              </p>
              <p className="q1-er-meta q1-er-team-subsection-copy" style={{ marginBottom: 0 }}>
                Long term, we plan to support both <strong>Firefox</strong> and <strong>Chromium</strong> versions. Shared systems
                (including <strong>Amplifier</strong> and other cross-platform capabilities) are being designed to aggregate learning
                signals and user data across both engines so improvements in reliability, speed, and outcomes can compound across all
                versions of the Oasis browser in ecosystem we are building.
              </p>
            </section>
            <section className="q1-er-team-subsection" aria-label="Plugin strategy exploration">
              <h4 className="q1-er-team-subsection-title">Plugin strategy exploration (security + productivity)</h4>
              <p className="q1-er-meta q1-er-team-subsection-copy">
                We are also evaluating a plugin path for users who prefer staying in their existing browser while still getting Oasis
                value. The goal is to analyze what we can deliver through a plugin, where browser-extension constraints limit security
                or workflow depth, and whether a plugin-first motion could be favorable for specific adoption segments.
              </p>
              <p className="q1-er-meta q1-er-team-subsection-copy" style={{ marginBottom: 0 }}>
                Exploration scope includes: (1) which unique Oasis <strong>security</strong> and <strong>productivity</strong> features
                can ship in plugin form, (2) what remains better served in a full managed browser, and (3) launching a
                <strong> plugin waitlist</strong> to capture and prioritize demand while we validate the approach.
              </p>
            </section>
          </div>
          <div className="q1-er-roadmap-cols" aria-label="Roadmap: security tests and productivity pillars">
            <div className="q1-er-roadmap-col">
              <h4 className="q1-er-roadmap-col-title">Security</h4>
              <p className="q1-er-meta q1-er-roadmap-col-lead">
                High-level <strong>adversarial and abuse scenarios</strong> we incorporate into testing and hardening—not an
                exhaustive list, but selected classes of risk we design guardrails around.
              </p>
              <ul className="q1-er-roadmap-list">
                {ROADMAP_SECURITY_ITEMS_DISPLAY.map(({ title, description, severity }, index) => {
                  const itemKey = `sec-${index}`
                  return (
                    <RoadmapCollapsibleItem
                      key={title}
                      itemKey={itemKey}
                      title={title}
                      description={description}
                      severity={severity}
                      isOpen={!!roadmapOpenKeys[itemKey]}
                      onToggle={toggleRoadmapKey}
                    />
                  )
                })}
              </ul>
            </div>
            <div className="q1-er-roadmap-col">
              <h4 className="q1-er-roadmap-col-title">Productivity</h4>
              <p className="q1-er-meta q1-er-roadmap-col-lead">
                <strong>User-visible outcomes</strong> we are prioritizing alongside security work—velocity on these tracks
                supports NPS, Product Hunt readiness, and enterprise pilots.
              </p>
              <ul className="q1-er-roadmap-list">
                {ROADMAP_PRODUCTIVITY_ITEMS.map(({ title, description, featured, tag }, index) => {
                  const itemKey = `prod-${index}`
                  return (
                    <RoadmapCollapsibleItem
                      key={title}
                      itemKey={itemKey}
                      title={title}
                      description={description}
                      featured={featured}
                      tagLabel={tag}
                      isOpen={!!roadmapOpenKeys[itemKey]}
                      onToggle={toggleRoadmapKey}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
          <p className="q1-er-meta q1-er-roadmap-backlog-note">
            <strong>Backlog note:</strong> these Security and Productivity lists are a focused snapshot for this report, not the
            full product backlog.
          </p>

          <h3 className="q1-er-subsection-title" id="product-demos">
            Oasis in action
          </h3>
          <p className="q1-er-video-caption" style={{ marginBottom: 0 }}>
            Short demos of the consumer browser: tab control with AI commands and a fuller product walkthrough.
          </p>
          <div className="q1-er-product-video-stack">
            {PRODUCT_DEMOS.map(({ id, title }) => {
              const embed = `https://www.youtube.com/embed/${id}`
              const watch = `https://youtu.be/${id}`
              return (
                <div key={id} className="q1-er-product-video-block">
                  <p className="q1-er-video-caption" style={{ marginBottom: '8px' }}>
                    <strong>{title}</strong>
                  </p>
                  <div className="q1-er-video-wrap">
                    <iframe
                      className="q1-er-video-iframe"
                      src={`${embed}?rel=0`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <p className="q1-er-meta" style={{ marginBottom: 0 }}>
                    <a className="q1-er-video-link" href={watch} target="_blank" rel="noopener noreferrer">
                      Open on YouTube →
                    </a>
                  </p>
                </div>
              )
            })}
          </div>

          <section className="q1-er-soc2-section" id="product-soc2-compliance" aria-labelledby="product-soc2-compliance-heading">
            <h3 className="q1-er-subsection-title" id="product-soc2-compliance-heading">
              SOC 2 compliance: timeline and efforts
            </h3>
            <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
              We are executing toward <strong>SOC 2 Type 1</strong> and <strong>Type 2</strong> as part of enterprise readiness:
              policies and evidence live in a shared Google Drive workspace, and day-to-day work is tracked on the interactive{' '}
              <Link className="q1-er-inline-link" to="/soc2-type1-checklist">
                SOC 2 Type 1 Internal Checklist
              </Link>{' '}
              in this dashboard—task owners, step-by-step instructions, policy drafts, vendor configuration checks, and progress
              saved in-browser. That program supports the dates on the roadmap below (Type 1 targeted for Q2 2026, Type 2 for Q4
              2026), alongside Product Hunt scale-up and enterprise pilot rollout.
            </p>
            <figure className="q1-er-soc2-roadmap-figure">
              <img
                className="q1-er-soc2-roadmap-img"
                src={OASIS_ROADMAP_SOC2_IMAGE_URL}
                alt="Oasis Roadmap timeline for 2026: Q1 release on Product Hunt and 2k+ active users; Q2 SOC2 Type 1 compliance achieved; Q3 roll out to 5 enterprise pilots; Q4 SOC2 Type 2 compliance achieved"
                loading="lazy"
              />
              <figcaption className="q1-er-soc2-roadmap-caption">
                Note: Full feature roadmap and sprint log is available upon request.
              </figcaption>
            </figure>
          </section>

        </div>
      </section>

      <section className="page-section q1-er-page" id="management-team">
        <h2>Management Team</h2>
        <div className="content-block">
          <article className="q1-er-team-profile">
            <img
              className="q1-er-team-headshot"
              src={ADAM_KERSHNER_HEADSHOT_URL}
              alt="Adam Kershner"
              loading="lazy"
            />
            <div className="q1-er-team-body">
              <h3 className="q1-er-team-name">Adam Kershner (CEO &amp; Founder)</h3>
              <p className="q1-er-meta q1-er-team-copy">
                Adam has direct IT security experience as a management consultant at Clarkston Consulting, where he saw a client in consumer products suffer a <strong>$50M USD breach</strong> that likely could have been avoided with a secure enterprise browser. That incident motivates him to build an enterprise browser that gives IT teams real visibility, policy, and control.
              </p>
              <p className="q1-er-meta q1-er-team-copy">
                Adam has also become a manager and team leader, attracting and organizing <strong>115+ engineering and product interns</strong> to work together on engineering and marketing projects.
              </p>
              <p className="q1-er-meta q1-er-team-copy" style={{ marginBottom: 0 }}>
                Adam&apos;s B2B SEO and inbound marketing skills generated <strong>1.2M impressions</strong> for Oasis in the last quarter, and he applies a consultative, project-based approach to selling into complex enterprise environments.
              </p>
            </div>
          </article>
          <section className="q1-er-team-subsection" aria-label="Scalable Learning Internship Program">
            <h3 className="q1-er-team-subsection-title">Scalable Learning Internship Program</h3>
            <div className="q1-er-team-subsection-grid">
              <div>
                <p className="q1-er-meta q1-er-team-subsection-copy">
                  The team has been built in an unusually <strong>organic</strong> way. Kahana and Oasis continue to attract high-caliber <strong>engineering</strong> and <strong>product management</strong> talent through the learning internship.
                </p>
                <p className="q1-er-meta q1-er-team-subsection-copy">
                  Our onboarding process is now refined enough that new interns typically complete onboarding in about <strong>one week</strong> and are immediately staffed onto teams across <strong>product</strong>, <strong>sales</strong>, <strong>engineering</strong>, <strong>marketing</strong>, and <strong>project management</strong>.
                </p>
                <p className="q1-er-meta q1-er-team-subsection-copy">
                  The strongest contributors, especially engineers and product managers, already learn our operating model through this program and become a ready pipeline for <strong>full-time hiring</strong> to support enterprise pilots.
                </p>
                <p className="q1-er-meta q1-er-team-subsection-copy" style={{ marginBottom: 0 }}>
                  Learn more or apply here:{' '}
                  <a href="https://kahana.co/learning-internship" target="_blank" rel="noopener noreferrer">
                    https://kahana.co/learning-internship
                  </a>
                </p>
              </div>
              <div>
                <p className="q1-er-team-progression" aria-label="Talent progression">
                  <strong>University</strong>
                  <span aria-hidden="true">→</span>
                  <strong>Kahana Learning Internship Program</strong>
                  <span aria-hidden="true">→</span>
                  <strong>Full-time jobs</strong>
                </p>
                <p className="q1-er-sf-brands-caption q1-er-team-chip-caption" style={{ marginTop: 12 }}>
                  <strong>Key Academic / University Pipelines</strong>
                </p>
                <div className="q1-er-sf-brand-cloud q1-er-team-chip-cloud" aria-label="Key talent pipelines">
                  {INTERNSHIP_TALENT_PIPELINES.map((school) => (
                    <span key={school} className="q1-er-sf-brand-chip">
                      {school}
                    </span>
                  ))}
                </div>
                <p className="q1-er-sf-brands-caption q1-er-team-chip-caption">
                  <strong>Where Kahana learning internship alumni work now:</strong>
                </p>
                <div className="q1-er-sf-brand-cloud q1-er-team-chip-cloud" aria-label="Learning internship alumni companies">
                  {INTERNSHIP_ALUMNI_COMPANIES.map((company) => (
                    <span key={company} className="q1-er-sf-brand-chip">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="q1-er-team-subsection" aria-label="Organizational Structure Concept">
            <h3 className="q1-er-team-subsection-title">Internship Program Organizational Structure (Current Stage)</h3>
            <p className="q1-er-meta q1-er-team-subsection-copy">
              We run a <strong>flat, pod-based structure</strong> designed to scale the internship without losing accountability:
              one <strong>CEO</strong> layer, then manager-led teams where each pod has <strong>1 manager to 3 contributors</strong>.
              Interns can start as either a manager or contributor; high-performing contributors have a pathway to transition
              into manager roles over time.
            </p>
            <div className="q1-er-org-diagram" role="img" aria-label="CEO at top, then manager-led 1 to 3 pods">
              <div className="q1-er-org-ceo">CEO</div>
              <div className="q1-er-org-connector" aria-hidden="true" />
              <div className="q1-er-org-pods">
                <article className="q1-er-org-pod">
                  <h4 className="q1-er-org-pod-title">Marketing Pod</h4>
                  <div className="q1-er-org-manager">1 Marketing Lead Intern (Manager)</div>
                  <div className="q1-er-org-contribs">
                    <span className="q1-er-org-contrib">3 Marketing Contributor Interns</span>
                  </div>
                </article>
                <article className="q1-er-org-pod">
                  <h4 className="q1-er-org-pod-title">Sales Pod</h4>
                  <div className="q1-er-org-manager">1 Sales Lead Intern (Manager)</div>
                  <div className="q1-er-org-contribs">
                    <span className="q1-er-org-contrib">3 Sales Development Rep Interns</span>
                  </div>
                </article>
                <article className="q1-er-org-pod">
                  <h4 className="q1-er-org-pod-title">Engineering Pod</h4>
                  <div className="q1-er-org-manager">1 Senior Engineer Intern (Manager)</div>
                  <div className="q1-er-org-contribs">
                    <span className="q1-er-org-contrib">3 Junior Engineer Interns</span>
                  </div>
                </article>
              </div>
            </div>
            <p className="q1-er-meta q1-er-team-subsection-copy" style={{ marginBottom: 0 }}>
              <strong>Scaling concept:</strong> if we had <strong>1,000 strong applicants</strong>, a manager cohort of roughly{' '}
              <strong>100</strong> could anchor execution, with the remaining talent distributed into pods over time as teams are
              staffed and contributors are promoted into manager-track roles.
            </p>
          </section>
          <section className="q1-er-team-subsection" aria-label="Internship Expansion Goals">
            <h3 className="q1-er-team-subsection-title">Internship Expansion Goals</h3>
            <p className="q1-er-meta q1-er-team-subsection-copy">
              Our next step is not only to expand the learning internship, but to save money through a <strong>paid internship
              track</strong>. This is especially important for many non-US interns: paid hourly internship work can help support
              <strong> STEM OPT</strong> eligibility and extend their ability to work in the US.
            </p>
            <p className="q1-er-meta q1-er-team-subsection-copy">
              Former and current interns have repeatedly expressed strong interest in staying with Kahana in this capacity. That
              creates a practical talent-retention lever and, in the near term, can become a meaningful execution advantage while
              we scale enterprise pilots.
            </p>
            <p className="q1-er-meta q1-er-team-subsection-copy" style={{ marginBottom: 0 }}>
              Example economics: a strong lead software engineer from this pipeline may be willing to stay on an hourly paid
              internship basis at roughly <strong>30-40% below</strong> typical full-time market compensation. Used thoughtfully,
              this can help maximize capital efficiency in the short term while we continue converting pilots and planning
              full-time hiring.
            </p>
          </section>
        </div>
      </section>

      <section className="page-section q1-er-page" id="financial-projections">
        <h2>Financial Projections</h2>
        <div className="content-block">
          <p className="q1-er-meta q1-er-narrative-lead" style={{ lineHeight: 1.7 }}>
            We have reached a stable operating position: as long as we maintain our current customers and fixed tooling
            costs, day-to-day business operations and subscriptions are covered by revenue from the SaaS platform (web
            application) we built in the past. That gives us effectively <strong>infinite runway</strong> at the current
            pace—room to focus on the product, recruiting, business development and GTM, partnerships, and signed{' '}
            <a
              className="q1-er-inline-link"
              href={OASIS_LOI_LETTER_DOC_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              engagement letters or LOIs
            </a>{' '}
            for enterprise pilots—without needing to fund baseline operations out of pocket each month.
          </p>
          <section className="q1-er-proforma" aria-labelledby="q1-er-proforma-heading">
            <h3 className="q1-er-team-subsection-title" id="q1-er-proforma-heading">
              Revenue and net position by month (last quarter, current state)
            </h3>
            <p className="q1-er-meta" style={{ lineHeight: 1.65, marginTop: 0 }}>
              Figures are approximate and rounded to the nearest $10; month-to-month variation is small at this scale.
              Net is SaaS subscription revenue minus tooling and infrastructure (before variable AI usage and salaries).
            </p>
            <p className="q1-er-meta" style={{ lineHeight: 1.65, marginTop: 0 }}>
              We currently have <strong>$1,000 in AWS credits</strong> available, which provides additional near-term cloud cost
              coverage.
            </p>
            <div className="q1-er-proforma-table-wrap">
              <table className="q1-er-proforma-table">
                <thead>
                  <tr>
                    <th scope="col">Month</th>
                    <th scope="col">SaaS revenue</th>
                    <th scope="col">Tooling &amp; infra</th>
                    <th scope="col">Net (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {LAST_QUARTER_MONTHLY_OPERATING.map((row) => (
                    <tr key={row.month}>
                      <td>{row.month}</td>
                      <td>~${row.revenue}</td>
                      <td>~${row.costs}</td>
                      <td>~+${row.net}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <strong>Quarter average</strong>
                    </td>
                    <td>
                      <strong>~$180/mo</strong>
                    </td>
                    <td>
                      <strong>~$110/mo</strong>
                    </td>
                    <td>
                      <strong>~+$70/mo</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="q1-er-team-subsection" aria-labelledby="q1-er-financial-next-heading">
            <h3 className="q1-er-team-subsection-title" id="q1-er-financial-next-heading">
              Next goal: enterprise pilots (no new investment required)
            </h3>
            <p className="q1-er-meta q1-er-team-subsection-copy" style={{ marginBottom: '0.75rem' }}>
              The next milestone does not depend on raising additional capital for baseline operations:{' '}
              <strong>
                three{' '}
                <a
                  className="q1-er-inline-link"
                  href={OASIS_LOI_LETTER_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  engagement letters or LOIs signed
                </a>
              </strong>
              , then <strong>three enterprise pilots launched</strong>,
              starting in{' '}
              <strong>Q2</strong>. At current burn and revenue, we can pursue that path while continuing product work,
              recruiting, and GTM.
            </p>
            <ul className="q1-er-checklist q1-er-product-sprint-checklist" style={{ marginBottom: 0 }}>
              <li>
                <strong>Target:</strong> 3 signed{' '}
                <a
                  className="q1-er-inline-link"
                  href={OASIS_LOI_LETTER_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  engagement letters or LOIs
                </a>{' '}
                for enterprise pilots
              </li>
              <li>
                <strong>Execution:</strong> 3 pilots live with enterprises, beginning in Q2
              </li>
              <li>
                <strong>Capital:</strong> no further investment required to reach these milestones at present cost and
                revenue assumptions
              </li>
            </ul>
          </section>
          <p className="q1-er-meta" style={{ lineHeight: 1.65, marginBottom: 0 }}>
            Longer-range 2026 scenarios and sensitivities are in the{' '}
            <Link className="q1-er-inline-link" to="/financial-plan">
              Financial Plan
            </Link>{' '}
            and{' '}
            <Link className="q1-er-inline-link" to="/executive-summary">
              Executive Summary
            </Link>{' '}
            views in this dashboard.
          </p>
        </div>
      </section>

      <section className="page-section q1-er-page" id="strategic-faq">
        <h2>Strategic FAQ</h2>
        <div className="content-block">
          <p className="faq-intro">
            Questions that translate our Q1 midpoint position into execution: first paying customer, Culture Amp–style enterprise
            interest, and how we allocate product and GTM. Answers match the{' '}
            <Link className="q1-er-inline-link" to="/q1-midpoint">
              Q1 Midpoint Update
            </Link>{' '}
            strategic FAQ; we will refine each item here as we mark topics complete or still in progress.
          </p>
          <div className="faq-accordion">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className={`faq-item ${faqOpen === idx ? 'faq-item-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={faqOpen === idx}
                  aria-controls={`q1-er-faq-answer-${idx}`}
                  id={`q1-er-faq-question-${idx}`}
                >
                  <span className="faq-question-text">
                    {idx + 1}. {item.question}
                  </span>
                  <span className="faq-chevron" aria-hidden="true">
                    {faqOpen === idx ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`q1-er-faq-answer-${idx}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`q1-er-faq-question-${idx}`}
                >
                  <div className="faq-answer-body">
                    <span className="faq-category">{item.category}</span>
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      <div className="faq-answer-content">{item.answer}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section q1-er-page" id="q1-er-retrospective" aria-labelledby="q1-er-retrospective-heading">
        <h2 id="q1-er-retrospective-heading">Retrospective feedback</h2>
        <div className="content-block">
          <p className="q1-er-meta" style={{ lineHeight: 1.7, marginBottom: '1rem' }}>
            Share comments, questions, and suggestions tied to this update—structured around what we would do differently if we
            could re-run the last six weeks. Submissions go directly to the <strong>CEO</strong> via our secure Tally form. If the
            embed does not load,{' '}
            <a
              className="q1-er-inline-link"
              href={RETROSPECTIVE_TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              open the Retrospective Survey
            </a>{' '}
            in a new tab.
          </p>
          <div className="q1-er-retrospective-embed">
            <iframe
              data-tally-embed
              src={RETROSPECTIVE_TALLY_EMBED_URL}
              width="100%"
              height={1100}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Retrospective Survey — feedback for the CEO"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Q1ExecutiveReport
