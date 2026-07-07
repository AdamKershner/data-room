import React from 'react'
import { Link } from 'react-router-dom'
import {
  CREATOR_OUTREACH_SHEET_URL,
  LINEAR_WORKSPACE_URL,
} from '../constants/kahanaSite'
import { KAHANA_PLATFORM_URL } from '../data/kahanaPlatformSections'
import './Page.css'
import './ProjectCharter.css'

const OFFER_TERMS = [
  {
    term: 'Featured placement',
    detail:
      'Time-limited featured spot on Explore or category surfaces — visibility in exchange for publishing quality hubs early.',
  },
  {
    term: 'Growth subscription (complimentary)',
    detail:
      'Free Growth tier so creators can upload live files, publish hubs, and monetize without upfront SaaS cost during the partnership window.',
  },
  {
    term: 'White-glove onboarding',
    detail:
      'Team helps structure their first hub(s), cover art, pricing, and launch messaging so the library feels curated from day one.',
  },
]

const TARGET_PROFILES = [
  'Beauty, makeup, hair, and skincare creators with established audiences',
  'Lifestyle, travel, food, and wellness experts who teach through guides and playbooks',
  'Founders and educators who already sell digital products elsewhere (Gumroad, Kajabi, etc.)',
  'Influencers whose content is outcome-oriented — tutorials, routines, templates — not engagement bait',
]

const PIPELINE_STAGES = [
  {
    stage: 'Research',
    owner: 'Marketing',
    actions: [
      'Add prospects to the Influencer & Creator Profiles sheet with social links, email, and niche notes.',
      'Score fit: audience quality, content format (guides vs. vibes), willingness to publish structured knowledge.',
    ],
  },
  {
    stage: 'Outreach',
    owner: 'Marketing + Adam',
    actions: [
      'Personalized invite explaining the library vision and the featured-spot + free Growth offer.',
      'Track status in Linear (creator outreach project) — contacted, replied, call scheduled, onboarded.',
    ],
  },
  {
    stage: 'Onboard',
    owner: 'Marketing + Product',
    actions: [
      'Create Avenger profile and first hub(s) on app.kahana.io.',
      'Confirm Stripe Connect if they plan to sell; otherwise launch free flagship hubs for discovery.',
      'Schedule featured placement window and internal announcement (Slack, social).',
    ],
  },
  {
    stage: 'Amplify',
    owner: 'Marketing',
    actions: [
      'Cross-promote on Kahana social, founder LinkedIn, and co-marketing with the creator where appropriate.',
      'Capture testimonials, hub links, and GMV signal for case studies and investor narrative.',
    ],
  },
]

const SUCCESS_METRICS = [
  { metric: 'Creators onboarded (featured)', target: '10 → 25 → 50', note: 'Quarterly milestones' },
  { metric: 'Public hubs from outreach pipeline', target: '+3/mo net new', note: 'Quality over volume' },
  { metric: 'Explore category depth', target: '16 categories with ≥5 quality hubs each', note: 'Women-first verticals first' },
  { metric: 'GMV from onboarded creators', target: 'Track per cohort', note: '5% take rate; spiky early' },
  { metric: 'Registered users', target: '6,500+ → 10k+', note: 'Driven by creator audiences' },
]

const WORKSTREAMS = [
  {
    name: 'Creator pipeline',
    detail: 'Sheet hygiene, outreach templates, Linear tracking, weekly pipeline review.',
  },
  {
    name: 'Explore merchandising',
    detail: 'Featured slots, category filters, and launch moments when new experts go live.',
  },
  {
    name: 'Hub quality bar',
    detail: 'Playbooks and review checklist so invited creators ship guides people actually use.',
  },
  {
    name: 'Story & proof',
    detail: 'Tie outreach wins to /kahana-narrative — real experts, real libraries, not AI slop.',
  },
]

function ProjectCharter() {
  return (
    <div className="page" id="project-charter">
      <div className="page-header">
        <h1>Project Charter — Scaling Kahana</h1>
        <p className="page-subtitle">
          Marketing-led growth through creator, expert, and influencer partnerships — featured placement and
          complimentary Growth access in exchange for quality hubs on the library.
        </p>
        <div className="charter-meta-pills">
          <span className="charter-meta-pill">Focus: Creator acquisition</span>
          <span className="charter-meta-pill">v2.0 · July 2026</span>
          <span className="charter-meta-pill charter-meta-pill--active">Active</span>
          <span className="charter-meta-pill charter-meta-pill--conf">Kahana · Confidential</span>
        </div>
      </div>

      <section className="page-section">
        <h2>1. Mission</h2>
        <div className="content-block">
          <p>
            Kahana scales by inviting the right creators, experts, and influencers onto{' '}
            <a href={KAHANA_PLATFORM_URL} target="_blank" rel="noopener noreferrer">
              app.kahana.io
            </a>{' '}
            — not through paid ads alone, but by building a curated library people trust. Marketing&apos;s
            primary job is pipeline: identify high-fit experts, invite them with a clear value exchange, and
            help them publish hubs their audiences will love.
          </p>
          <div className="charter-definition-box">
            <h4 className="charter-definition-title">North star for this charter</h4>
            <ul className="charter-definition-list">
              <li>More quality public hubs from real experts — especially women-first verticals (beauty, wellness, lifestyle).</li>
              <li>Explore feels alive: featured creators, dense categories, reasons to return.</li>
              <li>Each cohort of invited creators brings their audience and proof that Kahana is the Amazon of digital knowledge.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>2. The offer</h2>
        <div className="content-block">
          <p>
            We invite creators in exchange for a structured partnership — not vague &ldquo;collab&rdquo; language.
            Standard terms below; adjust per tier (micro vs. macro) in outreach.
          </p>
          <div className="charter-table-wrap">
            <table className="charter-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>What they get</th>
                </tr>
              </thead>
              <tbody>
                {OFFER_TERMS.map((row) => (
                  <tr key={row.term}>
                    <td className="charter-td-bold">{row.term}</td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>3. Creator pipeline</h2>
        <div className="content-block">
          <p>
            All prospect research and outreach tracking lives in the{' '}
            <a href={CREATOR_OUTREACH_SHEET_URL} target="_blank" rel="noopener noreferrer">
              Influencer &amp; Creator Profiles
            </a>{' '}
            Google Sheet (linked from Linear). Columns include Instagram, YouTube, TikTok, email, and niche
            notes — beauty, hair, makeup, lifestyle, travel, food, and adjacent expert categories.
          </p>
          <p>
            Execution status, blockers, and shipped hubs are tracked in{' '}
            <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
              Linear
            </a>{' '}
            under the creator-outreach / scaling workstream.
          </p>
          <h3 className="charter-h3">Who we prioritize</h3>
          <ul className="charter-definition-list">
            {TARGET_PROFILES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>4. Pipeline stages</h2>
        <p className="charter-section-intro">
          Every creator moves through four stages. Marketing owns the sheet and outreach; Product supports hub
          setup and quality bar.
        </p>
        <div className="charter-table-wrap">
          <table className="charter-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Owner</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {PIPELINE_STAGES.map((row) => (
                <tr key={row.stage}>
                  <td className="charter-td-bold">{row.stage}</td>
                  <td>{row.owner}</td>
                  <td>
                    <ul className="charter-phase-list">
                      {row.actions.map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>5. Success metrics</h2>
        <div className="charter-table-wrap">
          <table className="charter-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {SUCCESS_METRICS.map((row) => (
                <tr key={row.metric}>
                  <td className="charter-td-bold">{row.metric}</td>
                  <td>
                    <span className="charter-target-badge">{row.target}</span>
                  </td>
                  <td className="charter-td-examples">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>6. Workstreams</h2>
        <div className="charter-scenarios">
          {WORKSTREAMS.map((ws) => (
            <div key={ws.name} className="charter-scenario-card">
              <h3 className="charter-scenario-title">{ws.name}</h3>
              <p>{ws.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>7. Related pages</h2>
        <div className="content-block">
          <ul className="charter-definition-list">
            <li>
              <Link to="/kahana">Kahana Platform Overview</Link> — product surfaces, monetization, GTM context
            </li>
            <li>
              <Link to="/kahana-narrative">Kahana Story</Link> — why the library exists (strategic narrative)
            </li>
            <li>
              <Link to="/kahana-competitors">Competitive landscape</Link> — positioning vs. creator platforms
            </li>
            <li>
              <Link to="/founder-personal-brand">Founder-led personal brand</Link> — Adam&apos;s channel for
              amplifying creator launches
            </li>
            <li>
              <Link to="/operating-system">Operating system</Link> — Linear + Slack for day-to-day execution
            </li>
          </ul>
          <div className="charter-footer-note">
            <p>
              <strong>Oasis Browser</strong> is optional for internal work (privacy + AI browser). It is not
              part of this charter or new-hire onboarding — see{' '}
              <Link to="/oasis-browser">Oasis overview</Link> in the knowledge base archive if you want to use
              it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectCharter
