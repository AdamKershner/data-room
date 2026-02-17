import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Q1MidpointUpdate.css'
import hubspotLeadViewerImage from '../assets/hubspot-lead-viewer-fit-score.png'

function Q1MidpointUpdate() {
  const [brokenUrls, setBrokenUrls] = useState({})
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)

  const publicLogos = useMemo(() => ({
    // These are served from `financial-dashboard/public/logos/`.
    'centerstone.org': { url: '/logos/Centerstone_Logo_2020_color.png', name: 'Centerstone_Logo_2020_color.png' },
    'fedresources.com': { url: '/logos/Fedresources.com logo.png', name: 'Fedresources.com logo.png' },
    'franshares.com': { url: '/logos/Franshares logo.png', name: 'Franshares logo.png' },
    'mhub.org': { url: '/logos/Mhub logo.png', name: 'Mhub logo.png' },
    'oxfordwebservices.com': { url: '/logos/Oxford Web Services Logo.webp', name: 'Oxford Web Services Logo.webp' },
    'sagemount.com': { url: '/logos/bregal_sagemount_logo_color.jpg', name: 'bregal_sagemount_logo_color.jpg' },
    'datadoghq.com': { url: '/logos/datadoghq logo.png', name: 'datadoghq logo.png' },
    'duck.com (DuckDuckGo)': { url: '/logos/duckduckgo logo.png', name: 'duckduckgo logo.png' },

    // Not directly in the waitlist bubbles, but useful elsewhere on the page.
    '__culture_amp__': { url: '/logos/Culture Amp Logo.jpg', name: 'Culture Amp Logo.jpg' },
  }), [])

  const snapshot = useMemo(() => {
    // Source: JANUARY_2026_SUMMARY.md + user-provided Q1 milestones (as of Feb 16, 2026).
    const b2cSubscribersGoal = 461
    const b2cSubscribersCurrent = 1
    const b2bPilotContractsGoal = 5
    const b2bPilotContractsCurrent = 0
    const revenueGoal = 323000
    const b2cMrrCurrent = 20

    return {
      asOf: 'Feb 16, 2026',
      impressionsLastQuarterLabel: 'Oct 1 – Dec 31, 2025',
      impressionsLastQuarter: 823000,
      impressionsQ1ToDateLabel: 'Jan 1 – Feb 16, 2026',
      impressionsQ1ToDate: 623000,
      b2cSubscribersGoal,
      b2cSubscribersCurrent,
      b2bPilotContractsGoal,
      b2bPilotContractsCurrent,
      revenueGoal,
      b2cMrrCurrent,
      waitlist: 150,
      mqlsJan: 27,
      mqlsEarlyFebWeek: 8,
      sqlsJan: 1,
      impressionsMonth: 450000,
      impressionsEarlyFebWeek: 77200,
      impressionsGrowthEarlyFeb: '26.5%',
      activeSprints: 15,
      completedSprints: 4,
      feedbackItems: 167,
    }
  }, [])

  const inbound = useMemo(() => {
    // Oct 1 – Dec 31 is 92 days (31 + 30 + 31). Jan 1 – Feb 16 is 47 days (31 + 16).
    const lastQuarterDays = 92
    const q1ToDateDays = 47
    const quarterDays = 90 // Jan 1 – Mar 31

    const lastQuarterDaily = snapshot.impressionsLastQuarter / lastQuarterDays
    const q1ToDateDaily = snapshot.impressionsQ1ToDate / q1ToDateDays
    const runRateDeltaPct = lastQuarterDaily
      ? Math.round(((q1ToDateDaily - lastQuarterDaily) / lastQuarterDaily) * 1000) / 10
      : 0

    const vsLastQuarterTotalPct = snapshot.impressionsLastQuarter
      ? Math.round((snapshot.impressionsQ1ToDate / snapshot.impressionsLastQuarter) * 1000) / 10
      : 0

    const projectedThisQuarter = Math.round(q1ToDateDaily * quarterDays)
    const projectedDelta = projectedThisQuarter - snapshot.impressionsLastQuarter
    const projectedDeltaPct = snapshot.impressionsLastQuarter
      ? Math.round((projectedDelta / snapshot.impressionsLastQuarter) * 1000) / 10
      : 0

    return {
      lastQuarterDays,
      q1ToDateDays,
      quarterDays,
      lastQuarterDaily,
      q1ToDateDaily,
      runRateDeltaPct,
      vsLastQuarterTotalPct,
      projectedThisQuarter,
      projectedDelta,
      projectedDeltaPct,
    }
  }, [snapshot.impressionsLastQuarter, snapshot.impressionsQ1ToDate])

  const tracking = useMemo(() => {
    const pct = (a, b) => (b ? Math.round((a / b) * 1000) / 10 : 0)
    return {
      b2cSubscribersPct: pct(snapshot.b2cSubscribersCurrent, snapshot.b2cSubscribersGoal),
      b2bPilotsPct: pct(snapshot.b2bPilotContractsCurrent, snapshot.b2bPilotContractsGoal),
      revenuePct: pct(snapshot.b2cMrrCurrent * 12, snapshot.revenueGoal), // simple annualized from current B2C MRR
    }
  }, [snapshot])

  const waitlistBrands = useMemo(() => ([
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
  ]), [])

  const matchedCount = useMemo(() => {
    return waitlistBrands.reduce((acc, label) => {
      const candidateUrl = publicLogos[label]?.url
      if (!candidateUrl) return acc
      if (brokenUrls[candidateUrl]) return acc
      return acc + 1
    }, 0)
  }, [publicLogos, brokenUrls, waitlistBrands])

  const logoGallery = useMemo(() => {
    const src = Object.values(publicLogos).map(x => ({ url: x.url, name: x.name }))
    // Deduplicate by URL (in case public + picked overlap).
    const seen = new Set()
    return src.filter(x => {
      if (!x?.url || seen.has(x.url)) return false
      if (brokenUrls[x.url]) return false
      seen.add(x.url)
      return true
    })
  }, [publicLogos, brokenUrls])

  return (
    <div className="page">
      <div className="page-header">
        <h1>Q1 Midpoint Update</h1>
        <p className="page-subtitle">
          Retrospective + tracking vs 2026 goals + what we focus on next (as of {snapshot.asOf})
        </p>
      </div>

      <section className="page-section toc-section" aria-label="Table of contents">
        <div className="content-block">
          <h2 className="toc-title">Table of Contents</h2>
          <div className="toc-grid">
            <a className="toc-link" href="#overview">Overview</a>
            <a className="toc-link" href="#finance">Finance</a>
            <a className="toc-link" href="#marketing">Marketing</a>
            <a className="toc-link" href="#sales">Sales</a>
            <a className="toc-link" href="#product">Product</a>
            <a className="toc-link" href="#design">Design</a>
            <a className="toc-link" href="#engineering">Engineering</a>
            <a className="toc-link" href="#hr">HR</a>
            <a className="toc-link" href="#goals-mar-31">Goals for March 31st</a>
          </div>
        </div>
      </section>

      <section className="page-section" id="overview">
        <h2>Overview</h2>
        <div className="content-block overview-subsections">
          <div className="overview-subsection overview-priority-callout">
            <h3>Priority focus</h3>
            <p>
              Our near-term goal is to launch on Product Hunt and reach an expanded userbase of happy daily active users. Two things unlock that: <strong>finish key product sprints</strong> (automatic software updates, improved onboarding), and <strong>establish a strong Net Promoter Score</strong> through surveying.
            </p>
            <p>
              Why does NPS matter? A strong score signals that Oasis is a good-quality product—ready to be shared beyond our internal team. When people use it for their work every day, that repeated daily usage becomes the engine of growth. Duolingo&apos;s research backs this: daily usage is a predecessor of growth.
            </p>
            <p>
              <strong>What we need from you:</strong> Install the latest version and fill out the <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS survey</a>. Your feedback directly shapes whether we&apos;re ready to launch.
            </p>
            <p style={{ marginBottom: 0 }}>
              To go deeper on this growth framework, read <a href="https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth" target="_blank" rel="noopener noreferrer">How Duolingo reignited user growth</a> (Lenny&apos;s Newsletter).
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Finance</h3>
            <p>
              We earned our first revenue ($20/mo from an organic customer, Feb 12) and attracted our first enterprise prospect (Culture Amp, Jan 27)—representing ~$50K/year potential per qualified prospect. The sections below describe the team activities that drove these results and how we can allocate time toward advancing what&apos;s working.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Product Marketing</h3>
            <p>
              Create blogs and YouTube videos from the <Link to="/content-pipeline">Content Pipeline</Link> and work with Srishti and Archana to grow contributions to <a href="https://kahana.co/blog" target="_blank" rel="noopener noreferrer">kahana.co/blog</a>. We landed our first paying customer ($20, Feb 12) and first enterprise demo (Culture Amp, Jan 27). The next step: quadruple down on blogs and YouTube.
            </p>
            <p>
              Releasing a free version, sharing it with our waitlist of 150 users, and publishing YouTube videos will drive reach and can yield more users, paid users, and prospects scheduling demos.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Sales</h3>
            <p>
              We built a lead-scoring framework to decide when an MQL becomes an SQL. Sales should send blogs to Konika Dhull, work with Srishti to identify networking events, and run coffee chats with contacts at companies with 100+ employees to prospect and seed free Oasis.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Product</h3>
            <p>
              140 unique feedback items drove 24 sprints. The product team&apos;s testing and logging have made Oasis more useful and elegant, and that work has lifted every other area of the company. Work with Archana to make sure you&apos;re testing the right version and you&apos;re filling out the NPS survey.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Engineering</h3>
            <p>
              Shipped 9 main features—tab groups, auth UI, voice dictation, in-app feedback, split view, summarization, UI fixes, Gemini migration, and AI command for native splitview. Shoutout to Pournami and the engineering team. Full archive: <Link to="/sprints">Sprints</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" id="finance">
        <h2>Finance</h2>
        <div className="content-block">
          <p className="finance-highlight">
            We earned our first revenue ($20/mo from an organic customer, Feb 12) and attracted our first enterprise prospect (Culture Amp, Jan 27)—representing ~$50K/year potential per qualified prospect.
          </p>
          <p>
            Per Stripe data, the $20/mo user has already downgraded. We don&apos;t yet know how they originally found our website. We are able to identify the name and LinkedIn profile: <a href="https://www.linkedin.com/in/mark-heringhaus-jd-mba-0a5a8a5" target="_blank" rel="noopener noreferrer">Mark Heringhaus</a>.
          </p>
          <p>
            We need better data across our user journey—from marketing to using the product—to understand where people are falling off. We need data and insights on how to fix the issues causing people to drop off. A <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0#heading=h.v2sf8fr2wh2j" target="_blank" rel="noopener noreferrer">Mixpanel project</a> is aimed at building boards and reports to illustrate insights that improve the product and retention.
          </p>
          <p style={{ marginBottom: '18px' }}>
            The sections below describe the team activities that drove these results. Our goal: allocate time and team members toward advancing what&apos;s working.
          </p>
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-value">{snapshot.b2cSubscribersCurrent}/{snapshot.b2cSubscribersGoal}</div>
              <div className="goal-label">B2C subscribers ({tracking.b2cSubscribersPct}%)</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.b2bPilotContractsCurrent}/{snapshot.b2bPilotContractsGoal}</div>
              <div className="goal-label">B2B pilot contracts ({tracking.b2bPilotsPct}%)</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">${snapshot.b2cMrrCurrent}</div>
              <div className="goal-label">B2C MRR today</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.completedSprints}</div>
              <div className="goal-label">Completed sprints</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.activeSprints}</div>
              <div className="goal-label">Active sprints</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.feedbackItems}</div>
              <div className="goal-label">Total feedback items</div>
            </div>
          </div>

          <p style={{ marginTop: '18px' }}>
            Our near-term goal isn&apos;t &quot;big numbers&quot; yet—it&apos;s <strong>tight loops</strong>: ship faster, measure, convert early signals into repeatable growth and enterprise motion.
          </p>

          <div className="section-detail-block" style={{ marginTop: '28px' }}>
            <h3>Fundraising path</h3>
            <p>
              <strong>Open question:</strong> How do we create a client-friendly and investor-friendly LOI such that we get signed LOIs and fundraise with less friction?
            </p>
            <p>
              We can secure <strong>Letters of Intent (LOIs)</strong> for the enterprise solution assuming SOC 2 compliance—SOC 2 can be in progress in parallel. When we have LOIs representing <strong>$100K in future ARR</strong>, we can approach Venture Capital. <a href="https://drive.google.com/file/d/11CUNNG3Y7ckHeJXY1IJYSwP-3n9sr_zB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Enterprise LOI Template</a> (for reference and discussion). Target: <strong>$5M seed funding</strong> to fund a full-time hiring plan. <a href="https://drive.google.com/file/d/11CUNNG3Y7ckHeJXY1IJYSwP-3n9sr_zB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Enterprise LOI template</a> (for reference and discussion).
            </p>
            <p>
              <strong>Investor database:</strong>{' '}
              <a href="https://docs.google.com/spreadsheets/d/1rtTb8Wk7gygEUie9b9fMEzIyXrM2ff3PB47VGC6gEi4/edit?gid=409772258#gid=409772258" target="_blank" rel="noopener noreferrer">Target Seed Investors List</a>
            </p>
          </div>

          <div className="section-detail-block" style={{ marginTop: '24px' }}>
            <h3>Seed Investor Data Room — Kahana (B2B + B2C, Pre-Revenue, US)</h3>
            <p style={{ marginBottom: '12px' }}>Refining the Data Room for fundraising. Status by item:</p>
            <ul className="feature-list" style={{ marginBottom: 0 }}>
              <li><Link to="/#executive-summary"><strong>One-Page Overview / Executive Summary</strong></Link> — already in data room</li>
              <li><Link to="/problem-market#problem-why-now"><strong>Problem &amp; &quot;Why Now&quot; Narrative</strong></Link> — already in data room</li>
              <li><Link to="/q1-midpoint#product"><strong>Product Demo</strong></Link> (video or live link) — we have a demo</li>
              <li><Link to="/problem-market#user-journey"><strong>End-to-End User Journey</strong></Link> (B2C + B2B) — already in data room; <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">GTM Mixpanel Boards &amp; Reports</a> (project charter for customer journey analytics)</li>
              <li><Link to="/sprints#product-roadmap"><strong>Product Roadmap</strong></Link> (next 6–12 months) — mention what we&apos;re planning to build next</li>
              <li><Link to="/problem-market#market-opportunity"><strong>Market Opportunity</strong></Link> (TAM / SAM / SOM) — already in data room (aggressive/base/conservative)</li>
              <li><Link to="/go-to-market#icp"><strong>Ideal Customer Profiles</strong></Link> (B2C + B2B) — already in data room</li>
              <li><Link to="/competitors"><strong>Competitive Landscape &amp; Differentiation</strong></Link> — competitor database (e.g., <a href="https://strawberrybrowser.com/" target="_blank" rel="noopener noreferrer">Strawberry</a>—recently raised $5M, #1 on Product Hunt), how we stand out</li>
              <li><Link to="/go-to-market#gtm-strategy"><strong>Go-To-Market Strategy</strong></Link> — already in data room</li>
              <li><Link to="/team-execution#team-overview"><strong>Team Overview</strong></Link> (founders, advisors) — already in data room</li>
              <li><Link to="/financial-plan#financial-snapshot"><strong>Financial Snapshot</strong></Link> (burn, runway) — already in data room</li>
              <li><Link to="/financial-plan#financial-projections"><strong>18–24 Month Financial Projections</strong></Link> — already in data room</li>
              <li><strong>Pitch Deck</strong> — ON HOLD (not typically aiming to share)</li>
              <li><strong>Traction &amp; Validation</strong> (pilots, LOIs, waitlist, testimonials) — ON HOLD (testimonials post successful conversion)</li>
              <li><strong>Hiring Plan</strong> (next 3–6 roles) — ON HOLD (priority is current team)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" id="marketing">
        <h2>Marketing</h2>
        <div className="content-block">
          <div className="section-detail-block">
            <h3>Product Marketing</h3>
            <p>
              Create new blog posts and YouTube videos based on the <Link to="/content-pipeline">Content Pipeline</Link>. Work with Project Managers (Srishti, Archana) to recruit and encourage more team members to contribute to the blog <a href="https://kahana.co/blog" target="_blank" rel="noopener noreferrer">kahana.co/blog</a>. This will drive more organic traffic and help us attract customers.
            </p>
            <p>
              We&apos;ve already attracted our first paying customer who paid $20 for Oasis on February 12th, 2026. We also attracted our first enterprise demo request from Culture Amp on January 27th, 2026. These are excellent initial results, and now the clear next steps would be to quadruple down on the strategies that yielded these results in the first place—that being creating blogs and YouTube videos.
            </p>
          </div>

          <div className="goals-grid marketing-metrics">
            <div className="goal-card metric-card metric-baseline">
              <div className="goal-value">{Math.round(snapshot.impressionsLastQuarter / 1000)}K</div>
              <div className="goal-label">Impressions ({snapshot.impressionsLastQuarterLabel})</div>
            </div>
            <div className="goal-card metric-card metric-current">
              <div className="goal-value">{Math.round(snapshot.impressionsQ1ToDate / 1000)}K</div>
              <div className="goal-label">Impressions ({snapshot.impressionsQ1ToDateLabel})</div>
            </div>
            <div className="goal-card metric-card metric-projection">
              <div className="goal-value">{Math.round(inbound.projectedThisQuarter / 100000) / 10}M</div>
              <div className="goal-label">Projected this quarter (at current pace)</div>
            </div>
            <div className="goal-card metric-card metric-delta" aria-label="Projected increase versus last quarter">
              <div className="metric-callout" aria-hidden="true">
                <span className="metric-arrow">▲</span>
                <span className="metric-callout-text">Up vs last quarter</span>
              </div>
              <div className="goal-value">
                +{Math.round(inbound.projectedDelta / 1000)}K
              </div>
              <div className="goal-label">Δ vs last quarter (+{inbound.projectedDeltaPct}%)</div>
            </div>
          </div>
          <p className="goal-description" style={{ marginTop: '18px' }}>
            If we keep the pace we’ve maintained so far this quarter, we’ll finish around <strong>{Math.round(inbound.projectedThisQuarter / 100000) / 10}M impressions</strong>,
            up from <strong>{Math.round(snapshot.impressionsLastQuarter / 1000)}K</strong> last quarter (a delta of <strong>+{Math.round(inbound.projectedDelta / 1000)}K</strong>).
          </p>
          <p style={{ marginTop: '6px', fontSize: '0.9rem', opacity: 0.85 }}>
            Source: <a href="https://lookerstudio.google.com/u/0/reporting/c4152057-dad9-4725-9158-94c2b6e545a9/page/p_r1o0q334kd" target="_blank" rel="noopener noreferrer">Kahana Reports</a>
          </p>
          <p style={{ marginTop: '10px' }}>
            We’ve also generated <strong>44</strong> new YouTube video + blog ideas based on <strong>Worldwide</strong> search trends over the past <strong>5 years</strong> on YouTube.
            This should help us boost impressions even more through the second half of the quarter. See <Link to="/content-pipeline">Content Pipeline</Link>.
          </p>

          <div style={{ marginTop: '22px' }}>
            <p style={{ marginBottom: '14px' }}>
              We now have <strong>{snapshot.waitlist} people</strong> on the{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1wwcPh854iSBBcbH9tebTlsjrwCrHkLKVOUsr6KwXWvI/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                waitlist
              </a>
              , including signups with work email domains from business brands.
              If these users love Oasis, we may be able to explore pilots at their companies if they meet our enterprise criteria.
            </p>

            <div className="brand-cloud" aria-label="Example waitlist work email domains">
              {waitlistBrands.map((label) => (
                <span key={label} className="brand-bubble">
                  {publicLogos[label]?.url && !brokenUrls[publicLogos[label]?.url] && (
                    <img
                      className="brand-logo"
                      src={publicLogos[label]?.url}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        const src = e.currentTarget?.getAttribute('src') || ''
                        if (!src) return
                        setBrokenUrls(prev => (prev[src] ? prev : { ...prev, [src]: true }))
                      }}
                    />
                  )}
                  <span className="brand-label">{label}</span>
                </span>
              ))}
            </div>

            {logoGallery.length > 0 && (
              <div className="logo-gallery" aria-label="Loaded logos gallery">
                {logoGallery.map((x) => (
                  <div key={x.url} className="logo-tile" title={x.name}>
                    <img
                      className="logo-tile-img"
                      src={x.url}
                      alt={x.name}
                      loading="lazy"
                      onError={(e) => {
                        const src = e.currentTarget?.getAttribute('src') || ''
                        if (!src) return
                        setBrokenUrls(prev => (prev[src] ? prev : { ...prev, [src]: true }))
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="enterprise-demos" style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <h3 className="enterprise-demos-title">Enterprise Demos</h3>
              <div className="enterprise-demos-brand">
                {publicLogos['__culture_amp__']?.url && !brokenUrls[publicLogos['__culture_amp__']?.url] && (
                  <img
                    className="enterprise-demos-logo"
                    src={publicLogos['__culture_amp__'].url}
                    alt="Culture Amp"
                    loading="lazy"
                    onError={(e) => {
                      const src = e.currentTarget?.getAttribute('src') || ''
                      if (!src) return
                      setBrokenUrls(prev => (prev[src] ? prev : { ...prev, [src]: true }))
                    }}
                  />
                )}
                <span className="enterprise-demos-name">Culture Amp</span>
              </div>
              <button
                type="button"
                className="case-study-trigger"
                onClick={() => setCaseStudyOpen(true)}
              >
                View case study: Julian at a Global SaaS Company
              </button>
            </div>
          </div>
        </div>
      </section>

      {caseStudyOpen && (
        <div
          className="case-study-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={(e) => { if (e.target === e.currentTarget) setCaseStudyOpen(false) }}
        >
          <div className="case-study-modal">
            <div className="case-study-header">
              <h2 id="case-study-title">Case study: Julian at a Global SaaS Company</h2>
              <button
                type="button"
                className="case-study-close"
                aria-label="Close case study"
                onClick={() => setCaseStudyOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="case-study-body">
              <p>
                Julian leads a project at a global SaaS company to find the right enterprise browser for their
                consultants and third‑party users. His goal is simple but painful: give short‑term consultants
                secure access to the companyʼs SaaS apps without shipping them full laptops.
              </p>
              <p>
                Right now, they ship laptops that cost around $1,500 per consultant, plus about $200/hour in
                internal time to set everything up. Itʼs expensive, slow, and doesnʼt scale. Julian wants a
                managed, Chromium-based browser that runs on the consultantʼs own device, requires no
                local admin rights, and can be turned on and off as contracts start and end.
              </p>

              <h3>Why they didnʼt just use Chrome Enterprise</h3>
              <p>
                Julianʼs team actually got very close to rolling out Chrome Enterprise Premium. Technically, it
                ticked some boxes—but they hit two big blockers:
              </p>
              <ul className="feature-list">
                <li><strong>Policy enforcement on third‑party devices:</strong> Chrome Enterprise couldnʼt enforce the right security policies on devices they donʼt fully manage.</li>
                <li><strong>Profile precedence issues:</strong> The way Chrome profiles and policies interact made it too messy to guarantee consistent security behavior.</li>
              </ul>
              <p>
                They realized: pushing strong security policies to devices owned by other companies through
                Chrome wasnʼt going to work. That sent them back to the market to look at dedicated enterprise browsers.
              </p>

              <h3>Security backdrop and “must have” requirements</h3>
              <p>
                Their security team had already chosen a modern cloud security stack (including a DLP
                platform), and this decision was not Julianʼs. But heʼs been told very clearly: any browser they
                pick must integrate cleanly with the existing security tools and policy model.
              </p>
              <p>From Julianʼs perspective, the non‑negotiable technical requirements are:</p>
              <ul className="feature-list">
                <li>Strong policy enforcement on third‑party devices (especially around data exfiltration).</li>
                <li>Ability to manage security policies centrally, including pre‑defined contractor policies.</li>
                <li>Browser must run without local admin permissions.</li>
                <li>No VDI – they do not want a virtual desktop solution.</li>
                <li>Chromium-based for maximum SaaS compatibility.</li>
              </ul>
              <p>
                He also wants the ability to pre‑define contractor policies and have them tied into their existing
                HR workflows. In his ideal world, the flow looks like:
              </p>
              <ul className="feature-list">
                <li>Contractor gets created in the HR platform.</li>
                <li>That flows into their identity system.</li>
                <li>Access is automatically granted to the Oasis browser with the right policies and an automatic end date based on contract duration.</li>
              </ul>

              <h3>What Julian wants to see in a pilot</h3>
              <p>Julian is very clear: he wants to “see, touch, feel” the solution before committing fully. For a pilot to feel real and meaningful, heʼs looking for:</p>
              <ul className="feature-list">
                <li>A working managed browser that his team and some consultants can use in real workflows.</li>
                <li>Policy management thatʼs easy enough to understand and tweak.</li>
                <li>Minimal friction to install and run on third‑party devices (no admin rights, no heavy agent).</li>
                <li>A sense that the team behind the product can support them with pre‑baked patterns and sensible defaults, not just hand them a blank slate.</li>
              </ul>
              <p>He wants to start as soon as possible, but needs clarity on the integration details with their existing security stack before he green‑lights it internally.</p>

              <h3>Budget and pricing expectations</h3>
              <p>Julianʼs leadership team has already socialized and approved ballpark pricing based on other vendors:</p>
              <ul className="feature-list">
                <li><strong>Island Enterprise Browser:</strong> $25K annual minimum commit, $150 per user per year</li>
                <li><strong>Surf Browser:</strong> $12K annual minimum commit, $108 per user per year</li>
                <li><strong>Chrome Enterprise:</strong> $6 per user per month — but not acceptable due to the policy enforcement limitations.</li>
              </ul>
              <p>
                Internally, they understand that enterprise browsers charge minimum commitments because these are enterprise deals, not swipe‑a‑card SaaS: the vendor needs deal sizes that justify sales, onboarding, and support; the buyer expects predictable annual spend that fits procurement and budgeting processes.
              </p>
              <p>
                Julianʼs leadership is comfortable with minimum commitments, as long as theyʼre in a reasonable range and aligned with competitors. He mentioned theyʼd be fine with a model where at least 20 people go through the solution per year, with a matching financial floor.
              </p>
              <p>
                Right now, he is particularly focused on pricing feedback for his vendor selection. If a vendor comes in with a model thatʼs familiar (per‑user, per‑month, with a reasonable minimum) and technically viable, that vendor will have a strong advantage.
              </p>

              <h3>Where Oasis fits in the story</h3>
              <p>After talking with Julian, Oasis proposed a structure designed to de‑risk the unknowns around integration and still move quickly:</p>
              <ul className="feature-list">
                <li><strong>$5,000 deposit</strong> (minimum commit) to start serious work and requirements gathering.</li>
                <li>Use that period to validate integration with their existing security stack, including policy enforcement behavior on third‑party devices.</li>
                <li>If it turns out the integration isnʼt realistically achievable, that $5,000 is <strong>refunded</strong>.</li>
                <li>If integration is confirmed as feasible, the $5,000 becomes their minimum upfront commit once the solution is deployed and in use.</li>
                <li>Ongoing pricing is <strong>$8 per user per month</strong>, which fits comfortably inside the competitor ranges Julianʼs leadership has already accepted.</li>
              </ul>
              <p>This structure does three things for a buyer like Julian: shows that Oasis is confident but honest about integration complexity; reduces risk for the customer (if itʼs technically a dead end, they get their deposit back); and makes pricing straightforward to compare against Island, Surf, and Chrome.</p>
              <p><strong>When talking to similar prospects, sales can:</strong></p>
              <ul className="feature-list">
                <li>Lead with the problem: secure SaaS access for contractors without shipping laptops or rolling out VDI.</li>
                <li>Emphasize policy enforcement on third‑party devices as the core differentiator versus Chrome Enterprise.</li>
                <li>Normalize minimum commitments by referencing the market (Island, Surf) and then show how Oasis is simpler and more flexible.</li>
                <li>Offer a de‑risked pilot path (like the refundable deposit model) where the customer feels safe testing Oasis while you validate integration details.</li>
              </ul>
              <p>
                This story is not just about Julian—itʼs the pattern for any modern SaaS company trying to secure external users with a Chromium‑based enterprise browser instead of throwing more hardware, VDI, or point solutions at the problem.
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="page-section" id="sales">
        <h2>Sales</h2>
        <div className="content-block">
          <div className="section-detail-block">
            <h3>Lead scoring and outreach</h3>
            <p>
              Created a framework for scoring leads and determining whether a marketing qualified lead should be a sales qualified lead. This will help us make quick decisions regarding whom we should reach out to regarding sales.
            </p>
            <p>
              Sales team members should contribute by: sending blogs to Konika Dhull to upload to the website; working with Srishti to identify networking events in their area; encouraging other team members to attend networking events in their areas; and arranging coffee chats with people in their existing networks (who work at small to medium sized or large companies with at least 100 people at the company) to begin prospecting and getting free versions of Oasis to employees at specific companies.
            </p>
          </div>

          <div style={{ margin: '18px 0', textAlign: 'center' }}>
            <img
              src={hubspotLeadViewerImage}
              alt="HubSpot lead viewer dashboard showing Fit Score"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 26px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
              }}
            />
            <div style={{ marginTop: '10px', fontSize: '0.95rem', opacity: 0.9 }}>
              Lead viewer dashboard with <strong>Fit Score</strong> + signal status.
            </div>
          </div>

          <ul className="feature-list">
            <li><strong>Enterprise motion:</strong> 1 enterprise demo scheduled (Culture Amp).</li>
            <li><strong>Pilot wedge:</strong> convert individual business-user interest into qualified pilots when accounts meet our enterprise criteria.</li>
            <li><strong>Next step:</strong> follow up fast, define success metrics, and turn the Culture Amp motion into a repeatable pilot playbook.</li>
          </ul>

          <div className="workflow-example" style={{ marginTop: '22px' }}>
            <h3>Shoutout: Abhinav — Fit Score framework</h3>
            <p>
              <strong>Fit Score</strong> is our quick way of answering: “does this lead look like a good customer for us?”
              We score each lead from <strong>0–100</strong> (and it can go below 0 for obvious bad fits) using basic profile signals:
            </p>
            <ul className="feature-list">
              <li><strong>Role fit:</strong> Ops / Safety / Engineering / IT-type roles.</li>
              <li><strong>Seniority:</strong> manager and above.</li>
              <li><strong>Data completeness:</strong> industry + company size on file (for now, being filled earns points while ICP ranges finalize).</li>
              <li><strong>Supported country:</strong> US / CA / UK / AU / NZ.</li>
              <li><strong>Disqualifiers:</strong> subtract for clear bad fits like student emails (<code>.edu</code>) and leads that look like vendors/consultants.</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              Once we have Fit Score (and product usage), we use it to decide who is sales-ready:
            </p>
            <ul className="feature-list">
              <li>
                <strong>MQL rule:</strong> Fit Score ≥ <strong>60</strong> and Product Usage Score ≥ <strong>50</strong> (they fit and they’re actually using the product).
              </li>
              <li>
                <strong>SQL rule:</strong> already an MQL <em>and</em> a strong buying signal is “Yes” for any of:
                Pricing Page Visit, Demo Request, Paywall Hit, or Contact Sales.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" id="product">
        <h2>Product</h2>
        <div className="content-block">
          <div className="section-detail-block">
            <p>
              Logged 140 unique pieces of feedback while testing Oasis. This feedback was used to generate 24 unique sprints. The product team deserves praise and credit because their efforts have translated directly to a more useful, elegant Oasis. The hard work testing and logging feedback has positively affected all other areas of the company. Keep up the stellar work. Work with Archana to make sure you&apos;re testing the right version and you&apos;re filling out the NPS survey.
            </p>
          </div>

          <p style={{ marginBottom: '16px' }}>
            <strong>Scaled testing phase:</strong> team-wide <a href="https://kahana.co/oasis-auth?mode=login&plan=free&redirect=/installations" target="_blank" rel="noopener noreferrer">install</a> + 1 week usage + <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS survey</a> to establish baseline.
            The newest version includes the completed features below (archived in <Link to="/sprints">Sprints</Link>).
          </p>

          <div className="product-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/BF2ZZ7x3i8g"
              title="Oasis product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="product-video-iframe"
            />
          </div>

          <h3 className="product-features-title">Main features completed (archived)</h3>
          <div className="product-features-grid">
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">📁</span>
              <span className="product-feature-label">Tab groups & operations</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🔐</span>
              <span className="product-feature-label">Authentication UI</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🎤</span>
              <span className="product-feature-label">Voice dictation UI</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">💬</span>
              <span className="product-feature-label">In-app feedback</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🪟</span>
              <span className="product-feature-label">Split view (native + improvements)</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">📄</span>
              <span className="product-feature-label">Webpage summarization</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">✅</span>
              <span className="product-feature-label">UI fixes & response formatting</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">⚠️</span>
              <span className="product-feature-label">Gemini model migration</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🪟</span>
              <span className="product-feature-label">AI command for native splitview</span>
            </div>
          </div>

          <div className="workflow-example product-shoutout" style={{ marginTop: '24px' }}>
            <h3>Shoutout: Engineering & Pournami</h3>
            <p>
              Big shoutout to <strong>Pournami</strong> and the engineering team—<strong>Ashwin John</strong>, <strong>Afshaan Khan</strong>, <strong>Rushyanth Nerellakunta</strong>, <strong>Agrima Gupta</strong>, <strong>Likhitha Guggilla</strong>, <strong>Mohammed Muneebuddin</strong>, <strong>Atharva Joshi</strong>, <strong>Naveen Prashanna Gurumurthy</strong>, <strong>Durgesh Tiwari</strong>, <strong>Kaushik Shridhar</strong>, <strong>Revanth Ganga</strong>, <strong>Saideep Pajjuri</strong>, and <strong>Ruturaj</strong>—for driving these updates, from tab groups and split view to summarization, voice dictation, and the Gemini migration. This is the foundation the team is testing in the scaled NPS phase.
            </p>
            <p style={{ marginBottom: 0 }}>
              Full archive and acceptance criteria: <Link to="/sprints">Sprints</Link>.
            </p>
          </div>

          <ul className="feature-list" style={{ marginTop: '20px' }}>
            <li><strong>AI summarization:</strong> newest version includes summarization features for broader usage signal.</li>
          </ul>
        </div>
      </section>

      <section className="page-section" id="design">
        <h2>Design</h2>
        <div className="content-block">
          <p>
            Focus: keep the product feeling <strong>elegant</strong> while we stabilize releases—polish, clarity, and consistency across flows.
          </p>
        </div>
      </section>

      <section className="page-section" id="engineering">
        <h2>Engineering</h2>
        <div className="content-block">
          <h3 className="product-features-title">Main features completed (archived)</h3>
          <ul className="overview-feature-list">
            <li><span aria-hidden="true">📁</span> Tab groups & operations</li>
            <li><span aria-hidden="true">🔐</span> Authentication UI</li>
            <li><span aria-hidden="true">🎤</span> Voice dictation UI</li>
            <li><span aria-hidden="true">💬</span> In-app feedback</li>
            <li><span aria-hidden="true">🪟</span> Split view (native + improvements)</li>
            <li><span aria-hidden="true">📄</span> Webpage summarization</li>
            <li><span aria-hidden="true">✅</span> UI fixes & response formatting</li>
            <li><span aria-hidden="true">⚠️</span> Gemini model migration</li>
            <li><span aria-hidden="true">🪟</span> AI command for native splitview</li>
          </ul>
          <p><strong>Shoutout: Engineering & Pournami</strong></p>
          <p>
            Big shoutout to <strong>Pournami</strong> and the engineering team—<strong>Ashwin John</strong>, <strong>Afshaan Khan</strong>, <strong>Rushyanth Nerellakunta</strong>, <strong>Agrima Gupta</strong>, <strong>Likhitha Guggilla</strong>, <strong>Mohammed Muneebuddin</strong>, <strong>Atharva Joshi</strong>, <strong>Naveen Prashanna Gurumurthy</strong>, <strong>Durgesh Tiwari</strong>, <strong>Kaushik Shridhar</strong>, <strong>Revanth Ganga</strong>, <strong>Saideep Pajjuri</strong>, and <strong>Ruturaj</strong>—for driving these updates, from tab groups and split view to summarization, voice dictation, and the Gemini migration. This is the foundation the team is testing in the scaled NPS phase.
          </p>
          <p>
            Full archive and acceptance criteria: <Link to="/sprints">Sprints</Link>.
          </p>
          <ul className="feature-list">
            <li><strong>AI summarization:</strong> newest version includes summarization features for broader usage signal.</li>
          </ul>
          <div className="section-detail-block" style={{ marginTop: '24px' }}>
            <h3>🏢 Sprint 17: Oasis Enterprise Browser Chromium version</h3>
            <p>
              <Link to="/sprints">Sprint 17</Link> will create an Oasis Enterprise Browser Chromium version, enabling us to serve enterprise clients like Culture Amp and other companies interested in an enterprise browser. Timeline for a prototype is TBD, but work is underway to set up Okta integration and SSO. Another blocker to enterprise revenue is becoming <strong>SOC 2 compliant</strong>—solutions like <a href="https://www.delve.co/" target="_blank" rel="noopener noreferrer">Delve</a> or <a href="https://www.vanta.com/" target="_blank" rel="noopener noreferrer">Vanta</a> can help us hit compliance standards. The annual contract value for this type of deal would be <strong>$12K–$25K</strong> minimum annual commitment and <strong>$108–$150 per user per seat</strong>, in line with competitors (Island, Surf).
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" id="hr">
        <h2>HR</h2>
        <div className="content-block">
          <p>
            Goal: make it easy for every team member to contribute signal—clear onboarding, clear ownership, and consistent participation in testing + feedback loops.
          </p>
        </div>
      </section>

      <section className="page-section" id="goals-mar-31">
        <h2>Goals for March 31st</h2>
        <div className="content-block">
          <ul className="feature-list">
            <li><strong>Scaled testing + NPS baseline:</strong> complete the week-long usage period and collect NPS data (<a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">survey</a>).</li>
            <li><strong>Ship a stable “newest build”:</strong> incorporate the highest-impact findings from internal testing.</li>
            <li><strong>Enterprise motion:</strong> advance the Culture Amp thread and define the repeatable pilot playbook.</li>
            <li><strong>Inbound growth:</strong> meaningful YouTube + blog output (see <Link to="/content-pipeline">Content Pipeline</Link>).</li>
          </ul>
          <p style={{ marginTop: '18px' }}>
            <strong>Product Hunt launch:</strong> We plan to roll out a Product Hunt campaign to attract more users and paid subscribers like Mark. The team has created Product Hunt accounts in preparation (<a href="https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">Product Hunt Accounts</a>), and we ask new team members to create an account during onboarding so we&apos;re ready to engage on launch day. Per the <a href="https://docs.google.com/document/d/1fbnq13Uj8n3qaCCg1BOdiQD-awjl5c2sswxWaX6oyU8/edit?tab=t.0#heading=h.ctmy5c17lr0g" target="_blank" rel="noopener noreferrer">Product Hunt Launch Charter</a>, we would meet the conditions to launch once we: (1) improve NPS to an industry-standard good level (e.g., 30+), and (2) address critical technical roadblocks—<Link to="/sprints">Sprint 15</Link> (Automatic Software Updates) and <Link to="/sprints">Sprint 10</Link> (Onboarding + Branding polish).
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Feb 16–23: scaled testing phase (team-wide)</h2>
        <div className="content-block">
          <p style={{ marginBottom: '14px' }}>
            During the week of <strong>Feb 16–23</strong>, we’re prioritizing a scaled internal testing phase to establish our first meaningful <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS baseline</a>.
            <strong> Archana Ramalingam</strong> is leading this project and has already communicated the plan to everyone via Slack.
          </p>
          <ul className="feature-list">
            <li><strong><a href="https://kahana.co/oasis-auth?mode=login&plan=free&redirect=/installations" target="_blank" rel="noopener noreferrer">Download + install</a> the newest Oasis build</strong> (including the AI summarization features).</li>
            <li><strong>Use Oasis for one full week</strong> in real workflows (aim for real signal, not “toy testing”).</li>
            <li><strong>Complete the <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS survey</a> after 1 week of usage</strong> so we can measure baseline satisfaction and identify the biggest gaps.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Q1MidpointUpdate

