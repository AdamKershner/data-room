import React from 'react'
import { Link } from 'react-router-dom'
import {
  OPERATING_SYSTEM_PAGE,
  TOOL_OVERVIEW,
  FUNCTION_TOOLS,
  LINEAR_WORKFLOW_STEPS,
  SLACK_NORMS,
  TEAM_RHYTHMS,
  LIFECYCLE_LINKS,
  MIXPANEL_OVERVIEW,
  LINEAR_WORKSPACE_URL,
  SLACK_INVITE_URL,
  MIXPANEL_URL,
} from '../data/operatingSystemSections'
import './Page.css'
import './OperatingSystem.css'

function DataTable({ headers, rows }) {
  return (
    <div className="os-table-wrap">
      <table className="os-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, i) => (
                <td key={`${row.key}-${i}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function OperatingSystem() {
  return (
    <div className="page" id="how-we-work">
      <div className="page-header">
        <h1>{OPERATING_SYSTEM_PAGE.title}</h1>
        <p className="page-subtitle">{OPERATING_SYSTEM_PAGE.subtitle}</p>
      </div>

      <section className="os-hero page-section">
        <div className="os-hero-inner">
          <div>
            <h2>Linear + Slack + Mixpanel</h2>
            <p>
              <strong>Linear</strong> — {TOOL_OVERVIEW.linear}
            </p>
            <p>
              <strong>Slack</strong> — {TOOL_OVERVIEW.slack}
            </p>
            <p>
              <strong>Mixpanel</strong> — {TOOL_OVERVIEW.mixpanel}
            </p>
            <div className="os-hero-ctas">
              <a
                className="os-cta os-cta--primary"
                href={LINEAR_WORKSPACE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Linear →
              </a>
              <a
                className="os-cta os-cta--secondary"
                href={SLACK_INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Slack →
              </a>
              <a
                className="os-cta os-cta--secondary"
                href={MIXPANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Mixpanel →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="who-uses-what">
        <h2>Who uses what</h2>
        <div className="content-block">
          <DataTable
            headers={['Function', 'Linear', 'Slack', 'Mixpanel']}
            rows={FUNCTION_TOOLS.map((row) => ({
              key: row.function,
              cells: [row.function, row.linear, row.slack, row.mixpanel],
            }))}
          />
        </div>
      </section>

      <section className="page-section" id="mixpanel">
        <h2>Mixpanel — Kahana PROD</h2>
        <div className="content-block">
          <p>{MIXPANEL_OVERVIEW.intro}</p>
          <p>
            Project home:{' '}
            <a href={MIXPANEL_URL} target="_blank" rel="noopener noreferrer">
              mixpanel.com/project/4042294
            </a>
            . Request access via{' '}
            <Link to="/onboarding/tools-access">tools access</Link> if you cannot see boards.
          </p>

          <div className="os-mixpanel-clusters">
            {MIXPANEL_OVERVIEW.clusters.map((cluster) => (
              <article key={cluster.id} className="os-mixpanel-cluster" id={`mixpanel-${cluster.id}`}>
                <h3>{cluster.title}</h3>
                <p className="os-mixpanel-question">{cluster.question}</p>
                <ul className="os-mixpanel-boards">
                  {cluster.boards.map((board) => (
                    <li key={board.name}>
                      <strong>{board.name}</strong>
                      <span> — {board.learns}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="os-mixpanel-coverage">
            <div>
              <h3>Strong coverage</h3>
              <ul className="feature-list">
                {MIXPANEL_OVERVIEW.coverage.strong.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Gaps worth watching</h3>
              <ul className="feature-list">
                {MIXPANEL_OVERVIEW.coverage.gaps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="linear-workflow">
        <h2>Linear workflow</h2>
        <div className="content-block">
          <p>
            Feature requests, bug fixes, and sprint items live in the{' '}
            <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
              Kahana Linear workspace
            </a>
            . PM prioritizes the backlog; engineers implement assigned work.
          </p>
          <DataTable
            headers={['Step', 'What happens']}
            rows={LINEAR_WORKFLOW_STEPS.map((row) => ({
              key: row.step,
              cells: [row.step, row.detail],
            }))}
          />
        </div>
      </section>

      <section className="page-section" id="slack-norms">
        <h2>Slack norms</h2>
        <div className="content-block">
          <ul className="feature-list">
            {SLACK_NORMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            New hires: complete{' '}
            <Link to="/onboarding/schedule-1on1">Join Slack</Link>,{' '}
            <Link to="/onboarding/weekly-1on1">schedule a weekly 1-on-1</Link>, and{' '}
            <Link to="/onboarding/tools-access">request tools access</Link> during onboarding.
          </p>
        </div>
      </section>

      <section className="page-section" id="team-rhythms">
        <h2>Team rhythms</h2>
        <div className="content-block">
          <ul className="feature-list">
            {TEAM_RHYTHMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Details: <Link to="/onboarding/time-log">Time Log onboarding</Link> ·{' '}
            <Link to="/weekly-reports">Weekly Reports</Link> ·{' '}
            <Link to="/glossary">Glossary</Link>
          </p>
        </div>
      </section>

      <section className="page-section" id="product-lifecycle">
        <h2>Product lifecycle</h2>
        <div className="content-block">
          <p>
            NPS, PMF surveys, user feedback, and Mixpanel inform what gets logged in Linear. The data
            room holds reference material; active prioritization happens in Linear.
          </p>
          <ul className="os-link-list">
            {LIFECYCLE_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.title}</Link>
                <span> — {link.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default OperatingSystem
