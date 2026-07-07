import React from 'react'
import { Link } from 'react-router-dom'
import {
  OPERATING_SYSTEM_PAGE,
  TOOL_OVERVIEW,
  FUNCTION_TOOLS,
  LINEAR_WORKFLOW_STEPS,
  SLACK_NORMS,
  LIFECYCLE_LINKS,
  LINEAR_WORKSPACE_URL,
  SLACK_INVITE_URL,
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
    <div className="page" id="operating-system">
      <div className="page-header">
        <h1>{OPERATING_SYSTEM_PAGE.title}</h1>
        <p className="page-subtitle">{OPERATING_SYSTEM_PAGE.subtitle}</p>
      </div>

      <section className="os-hero page-section">
        <div className="os-hero-inner">
          <div>
            <h2>Linear + Slack</h2>
            <p>
              <strong>Linear</strong> — {TOOL_OVERVIEW.linear}
            </p>
            <p>
              <strong>Slack</strong> — {TOOL_OVERVIEW.slack}
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
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="who-uses-what">
        <h2>Who uses what</h2>
        <div className="content-block">
          <DataTable
            headers={['Function', 'Linear', 'Slack']}
            rows={FUNCTION_TOOLS.map((row) => ({
              key: row.function,
              cells: [row.function, row.linear, row.slack],
            }))}
          />
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
            <Link to="/onboarding/internal-channels">Join Kahana Slack</Link> and{' '}
            <Link to="/onboarding/linear-access">Get access to Linear</Link> during onboarding.
          </p>
        </div>
      </section>

      <section className="page-section" id="product-lifecycle">
        <h2>Product lifecycle</h2>
        <div className="content-block">
          <p>
            NPS, PMF surveys, and user feedback inform what gets logged in Linear. The data room
            holds reference material; active prioritization happens in Linear.
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
