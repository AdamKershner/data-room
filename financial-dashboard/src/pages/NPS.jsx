import React, { useState, useEffect } from 'react'
import './Page.css'
import './NPS.css'

// Parse CSV handling quoted fields with newlines
function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (c === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += c
    }
  }
  result.push(current.trim())
  return result
}

function parseNPScsv(text) {
  const rows = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (c === '\n' && !inQuotes) {
      if (current.trim()) rows.push(current)
      current = ''
    } else {
      current += c
      if (c === '"') inQuotes = !inQuotes
    }
  }
  if (current.trim()) rows.push(current)

  if (rows.length < 2) return []
  const headers = parseCSVLine(rows[0])
  return rows.slice(1).map(line => {
    const values = parseCSVLine(line)
    return headers.reduce((obj, h, i) => ({ ...obj, [h]: values[i] || '' }), {})
  }).filter(row => row['Submission ID'])
}

const PMF_NPS_OUTPUT_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1v8cJu1f9UXC1JY6XBTtSBlu8rGqVqpEVl6zlB8-pfoA/edit?usp=sharing'

const COHORT_OPTIONS = ['Very disappointed', 'Somewhat disappointed', 'Not disappointed']

function RefLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="nps-guidance-ref">
      {children}
    </a>
  )
}

function SurveyTimingGuidance() {
  return (
    <>
      <section className="page-section nps-guidance-section">
        <h2>NPS survey timing</h2>
        <div className="content-block nps-guidance-block">
          <h3>Initial NPS: 14–21 days after signup</h3>
          <p>
            Wait until users have finished onboarding and used core AI features several times—enough context to recommend
            (or not) the browser, not just first impressions.{' '}
            <RefLink href="https://refiner.io/blog/best-time-to-send-nps-survey/">Refiner</RefLink>
          </p>
          <ul>
            <li>Capture experience with the product, not launch-day excitement alone.</li>
            <li>Users should have used meaningful workflows before the relationship question.</li>
          </ul>

          <h3>Transactional NPS: after key milestones</h3>
          <ul>
            <li>
              <strong>24–72 hours after hitting a token / usage limit</strong> — measures satisfaction at a friction point.{' '}
              <RefLink href="https://www.bland.ai/blogs/nps-survey-best-practices">Bland.ai</RefLink>
            </li>
            <li>
              <strong>Shortly after premium upgrade</strong> — validates the conversion and first paid experience.
            </li>
            <li>
              <strong>After resolving a support ticket (0–24 hours)</strong> — while context is fresh.{' '}
              <RefLink href="https://customergauge.com/blog/when-to-send-your-net-promoter-surveys/">CustomerGauge</RefLink>
            </li>
          </ul>

          <h3>Relationship NPS: quarterly cadence</h3>
          <p>
            About every 90 days for active users to track loyalty trends. Avoid surveying the same person more than once
            per 60–90 days to limit fatigue.{' '}
            <RefLink href="https://www.gainsight.com/blog/best-time-to-send-nps-survey-how-to-maximize-responses/">Gainsight</RefLink>{' '}
            · <RefLink href="https://www.bland.ai/blogs/nps-survey-best-practices">Bland.ai</RefLink>
          </p>
        </div>
      </section>

      <section className="page-section nps-guidance-section">
        <h2>PMF survey timing</h2>
        <div className="content-block nps-guidance-block">
          <h3>Initial PMF: 2–4 weeks after signup</h3>
          <p>
            Survey <strong>active</strong> users only—for example those who have used an AI command at least twice, signed
            in multiple times in the last 30 days, or completed a core workflow (navigation, content interaction) at least
            twice. Surveying too early measures &quot;hopes&quot; rather than dependency.{' '}
            <RefLink href="https://formbricks.com/blog/product-market-fit-survey-questions">Formbricks</RefLink> ·{' '}
            <RefLink href="https://www.fitsignal.com/blog/pmf-for-saas">Fitsignal</RefLink> ·{' '}
            <RefLink href="https://delighted.com/blog/when-to-send-your-nps-survey">Delighted</RefLink>
          </p>

          <h3>Ongoing PMF: monthly or quarterly</h3>
          <p>
            Track PMF score as you iterate; segment by user type (free vs. premium, power vs. casual). Aim for at least{' '}
            <strong>~40 responses</strong> per wave for directional reads.{' '}
            <RefLink href="https://monolit.sh/blog/how-to-measure-product-market-fit-saas-startup-2026">Monolit</RefLink> ·{' '}
            <RefLink href="https://postulate.us/@samsonzhang/p/2021-04-15-How-Superhuman-Used-a-Four-Question-oGqEg8zUriGRekTfnBUHwD">Postulate</RefLink>
          </p>

          <h3>Cadence guardrail</h3>
          <p>
            Avoid hitting the same users more often than about every 3–4 months with PMF-style surveys.{' '}
            <RefLink href="https://learningloop.io/plays/product-market-fit-survey">Learning Loop</RefLink>
          </p>
        </div>
      </section>

      <section className="page-section nps-guidance-section">
        <h2>Recommended survey flow for Oasis</h2>
        <div className="content-block nps-guidance-block">
          <p>Aligned with a Product Hunt launch and behavioral triggers (not time-only blasts):</p>
          <ol className="nps-guidance-flow-list">
            <li>
              <strong>Days 0–13:</strong> no surveys—let people explore and form a real opinion.
            </li>
            <li>
              <strong>Day ~14:</strong> send NPS to users who have submitted <strong>3+ AI commands</strong>.
            </li>
            <li>
              <strong>Days 21–28:</strong> send the PMF (Sean Ellis) question to users with <strong>3+ logins</strong> and{' '}
              <strong>2+ AI command sessions</strong>.{' '}
              <RefLink href="https://postulate.us/@samsonzhang/p/2021-04-15-How-Superhuman-Used-a-Four-Question-oGqEg8zUriGRekTfnBUHwD">Postulate / Superhuman framing</RefLink>
            </li>
            <li>
              <strong>After token limit:</strong> transactional NPS within ~48 hours for users who hit their cap.
            </li>
            <li>
              <strong>After upgrade:</strong> transactional NPS within ~24 hours for new premium subscribers.
            </li>
            <li>
              <strong>Ongoing:</strong> quarterly relationship NPS and PMF waves to active cohorts.
            </li>
          </ol>
          <p className="nps-guidance-note">
            Resist surveying day-1 users immediately—the signal reflects launch buzz more than durable PMF.{' '}
            <RefLink href="https://formbricks.com/blog/product-market-fit-survey-questions">Formbricks</RefLink>
          </p>
        </div>
      </section>

      <section className="page-section nps-guidance-section">
        <h2>Key PMF question (Superhuman-style)</h2>
        <div className="content-block nps-guidance-block">
          <blockquote className="nps-guidance-quote">
            &quot;How would you feel if you could no longer use Oasis?&quot;
            <ul className="nps-guidance-quote-options">
              <li>Very disappointed</li>
              <li>Somewhat disappointed</li>
              <li>Not disappointed</li>
            </ul>
          </blockquote>
          <p>
            <strong>Directional target:</strong> about <strong>40%+ &quot;very disappointed&quot;</strong> among qualified
            active users is often treated as a PMF signal—interpret alongside sample size and segments.{' '}
            <RefLink href="https://postulate.us/@samsonzhang/p/2021-04-15-How-Superhuman-Used-a-Four-Question-oGqEg8zUriGRekTfnBUHwD">Postulate</RefLink> ·{' '}
            <RefLink href="https://www.fitsignal.com/blog/pmf-for-saas">Fitsignal</RefLink>
          </p>
        </div>
      </section>

      <section className="page-section nps-guidance-section">
        <h2>Implementation tips</h2>
        <div className="content-block nps-guidance-block">
          <ul>
            <li>
              <strong>Segment</strong> by acquisition source (e.g. Product Hunt vs. organic), usage depth, and premium
              status when reading PMF + NPS together.{' '}
              <RefLink href="https://formbricks.com/blog/product-market-fit-survey-questions">Formbricks</RefLink>
            </li>
            <li>
              <strong>In-app triggers</strong> tied to milestones often outperform email-only time triggers for a browser
              product.{' '}
              <RefLink href="https://www.specific.app/blog/best-time-to-send-nps-survey-and-best-questions-for-onboarding-nps-how-to-capture-powerful-net-promoter-score-feedback-from-new-customers/">Specific</RefLink>
            </li>
            <li>
              <strong>Skip churned or inactive users</strong> for PMF reads—focus on people who have experienced core
              value. <RefLink href="https://monolit.sh/blog/how-to-measure-product-market-fit-saas-startup-2026">Monolit</RefLink>
            </li>
            <li>
              <strong>Dashboard mindset:</strong> track PMF alongside retention and NRR; PMF softness can lead churn by
              weeks. <RefLink href="https://www.fitsignal.com/blog/pmf-for-saas">Fitsignal</RefLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

function NPS() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCohort, setSelectedCohort] = useState('Very disappointed')

  useEffect(() => {
    fetch('/NPS/NPS-Sheet1.csv')
      .then(res => res.ok ? res.text() : Promise.reject(new Error('Failed to load PMF+NPS export')))
      .then(text => {
        setData(parseNPScsv(text))
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setData([])
      })
      .finally(() => setLoading(false))
  }, [])

  const npsKey = 'How likely are you to recommend to a friend or colleague?'
  const disappointedKey = '1. How would you feel if you could no longer use Oasis?'
  const targetUsersKey = 'What type of of people do you think would most benefit from Oasis?'
  const mainBenefitKey = 'What is the main benefit you receive from Oasis?'
  const improveKey = 'How can we improve Oasis for you?'

  const validScores = data.filter(r => {
    const s = parseInt(r[npsKey], 10)
    return !isNaN(s) && s >= 0 && s <= 10
  })
  const promoters = validScores.filter(r => parseInt(r[npsKey], 10) >= 9).length
  const detractors = validScores.filter(r => parseInt(r[npsKey], 10) <= 6).length
  const passives = validScores.filter(r => {
    const s = parseInt(r[npsKey], 10)
    return s >= 7 && s <= 8
  }).length
  const total = validScores.length
  const npsScore = total > 0 ? Math.round(((promoters - detractors) / total) * 100) : null

  const cohorts = {
    'Very disappointed': data.filter(r => (r[disappointedKey] || '').trim() === 'Very disappointed'),
    'Somewhat disappointed': data.filter(r => (r[disappointedKey] || '').trim() === 'Somewhat disappointed'),
    'Not disappointed': data.filter(r => (r[disappointedKey] || '').trim() === 'Not disappointed')
  }

  if (loading) {
    return (
      <div className="page" id="nps">
        <div className="page-header">
          <h1>PMF+NPS data</h1>
        </div>
        <div className="content-block">
          <p>Loading PMF+NPS data…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="page" id="nps">
        <div className="page-header">
          <h1>PMF+NPS data</h1>
        </div>
        <div className="content-block">
          <p>Could not load PMF+NPS export: {error}</p>
          <p>Ensure <code>NPS-Sheet1.csv</code> exists in <code>public/NPS/</code>.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page" id="nps">
      <div className="page-header">
        <h1>PMF+NPS data</h1>
        <p className="page-subtitle">
          Product-market fit (Sean Ellis question) and Net Promoter Score. Cohorts use &quot;How would you feel if you could
          no longer use Oasis?&quot; alongside the 0–10 recommend score. Open the live sheet for full responses; the
          dashboard below uses a CSV snapshot from this repo for fast load.
        </p>
      </div>

      <section className="page-section nps-sheet-section">
        <div className="content-block nps-sheet-callout">
          <h2 className="nps-sheet-heading">Live PMF+NPS output</h2>
          <p className="nps-sheet-intro">
            Authoritative responses and exports live in this Google Sheet. Send PMF+NPS surveys to users using the timing
            and segmentation guidance further down this page.
          </p>
          <p className="nps-sheet-cta">
            <a
              href={PMF_NPS_OUTPUT_SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nps-sheet-link"
            >
              Open PMF+NPS Google Sheet →
            </a>
          </p>
          <p className="nps-sheet-meta">
            Sheet:{' '}
            <a href={PMF_NPS_OUTPUT_SHEET_URL} target="_blank" rel="noopener noreferrer" className="nps-sheet-link-muted">
              {PMF_NPS_OUTPUT_SHEET_URL}
            </a>
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Current NPS Score</h2>
        <div className="content-block">
          <div className="nps-score-display">
            <span className="nps-number">{npsScore !== null ? npsScore : '-'}</span>
            <span className="nps-label">NPS</span>
          </div>
          <div className="nps-scale">
            <div className="nps-scale-track">
              <div
                className="nps-scale-marker"
                style={{ left: 'clamp(5%, ' + ((npsScore !== null ? npsScore : 0) + 100) / 2 + '%, 95%)' }}
                title={'Current: ' + npsScore}
              />
            </div>
            <div className="nps-scale-labels">
              <span>-100</span>
              <span>0</span>
              <span>+100</span>
            </div>
          </div>
          <p className="nps-scale-context">
            NPS ranges from -100 (all detractors) to +100 (all promoters). Room to improve: {npsScore !== null ? (100 - npsScore) + ' points' : '-'} to reach a perfect score.
          </p>
          <div className="nps-breakdown">
            <div className="nps-callout nps-callout-promoters">
              <span className="nps-promoters">Promoters (9-10): {promoters}</span>
            </div>
            <div className="nps-callout nps-callout-passives">
              <span className="nps-passives">Passives (7-8): {passives}</span>
            </div>
            <div className="nps-callout nps-callout-detractors">
              <span className="nps-detractors">Detractors (0-6): {detractors}</span>
            </div>
            <div className="nps-callout nps-callout-sample">
              <span className="nps-sample-size">
                <svg className="nps-warning-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
                </svg>
                Sample size: {total} / 200 (ideal), 100 (minimum)
              </span>
            </div>
          </div>
          <div className="nps-callout nps-callout-form">
            <p>
              <strong>NPS + PMF Form:</strong>{' '}
              <a href="https://kahana.io/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">
                https://kahana.io/oasis-feedback-survey
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="page-section nps-summary-section">
        <h2>Summary for Product Managers</h2>
        <div className="content-block">
          <h3>Overall Trends</h3>
          <p>
            Respondents consistently value <strong>organization and structure</strong>—tab groups and staying in one place. The AI assistant integration, summarization, and minimal interface are cited as main benefits. Target users are power users: researchers, students, project managers, and anyone with many tabs who wants AI help inside the browser.
            {' '}
            Recent feedback also highlights <strong>faster tab switching</strong> (e.g. keywords instead of full titles), <strong>semantic search across tabs</strong>, AI that follows <strong>user intent</strong> rather than overly literal commands, and <strong>split-view polish</strong> (extra tabs, tab titles with certain themes).
          </p>
          <h3>What's Working Well</h3>
          <ul className="nps-summary-list">
            <li><strong>Organization:</strong> Tab groups and reducing tab clutter resonate across cohorts.</li>
            <li><strong>AI in the browser:</strong> Integrated assistant and summarization are valued.</li>
            <li><strong>UI:</strong> Minimal, focused interface and maneuverability (drag, minimize, sidebar) are praised.</li>
          </ul>
          <h3>How to Improve (by Cohort)</h3>
          <div className="nps-cohort-summary">
            <div className="nps-cohort-summary-block cohort-very-disappointed">
              <h4>Very Disappointed (Promoters)</h4>
              <p>Would be very disappointed if they could no longer use Oasis—these are our strongest advocates. Their feedback tells us what they love and what polish could make it even better: split screen accuracy, autocorrect in inputs, incremental UX refinements. Use this cohort to validate what's working and prioritize retention.</p>
            </div>
            <div className="nps-cohort-summary-block cohort-somewhat-disappointed">
              <h4>Somewhat Disappointed (Passives)</h4>
              <p>Would be somewhat disappointed if Oasis went away. They like the concept but execution is inconsistent. Priorities: AI reliability (correct tab, correct action), better prompt understanding, and summarization accuracy. Fix chat history disappearing and sign-in flow. Reduce lag and improve context understanding for imperfect prompts.</p>
            </div>
            <div className="nps-cohort-summary-block cohort-not-disappointed">
              <h4>Not Disappointed (Detractors)</h4>
              <p>Would not be disappointed if they could no longer use Oasis—they wouldn't miss it. Their feedback is critical. Priorities: fix chat bar behavior, login/session persistence, and tab/split accuracy. Improve onboarding (browser import, Google auth), make minimized chat accessible, and refine voice dictation. Focus on reliable tab and bookmark management to convert them.</p>
            </div>
          </div>
          <p className="nps-summary-takeaway">
            <strong>Takeaway:</strong> Address Not Disappointed and Somewhat Disappointed feedback first—reliability, onboarding, and AI accuracy. As these improve, users can move from detractors and passives to promoters, raising NPS.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Feedback by Cohort</h2>
        <div className="content-block">
          <p>
            Click a cohort to view feedback. Focus on <strong>Not Disappointed</strong> and <strong>Somewhat Disappointed</strong> to understand what's blocking users from becoming promoters.
          </p>
        </div>
        <div className="nps-cohort-tabs">
          {COHORT_OPTIONS.map(cohortName => {
            const count = cohorts[cohortName].length
            const isActive = selectedCohort === cohortName
            const cohortClass = 'cohort-' + cohortName.toLowerCase().replace(/\s/g, '-')
            return (
              <button
                key={cohortName}
                type="button"
                className={'nps-cohort-tab ' + cohortClass + (isActive ? ' active' : '')}
                onClick={() => setSelectedCohort(cohortName)}
              >
                {cohortName} ({count})
              </button>
            )
          })}
        </div>
        <div className="nps-feedback-table-wrap">
          {cohorts[selectedCohort].length === 0 ? (
            <p className="nps-empty">No responses in this cohort.</p>
          ) : (
            <table className="nps-feedback-table">
              <thead>
                <tr>
                  <th>Who benefits</th>
                  <th>Main benefit</th>
                  <th>How to improve</th>
                </tr>
              </thead>
              <tbody>
                {cohorts[selectedCohort].map((row, idx) => (
                  <tr key={row['Submission ID'] || idx}>
                    <td>{(row[targetUsersKey] || '-').trim() || '-'}</td>
                    <td>{(row[mainBenefitKey] || '-').trim() || '-'}</td>
                    <td>{(row[improveKey] || '-').trim() || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <SurveyTimingGuidance />
    </div>
  )
}

export default NPS
