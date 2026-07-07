import React from 'react'
import { Link } from 'react-router-dom'
import { LINEAR_WORKSPACE_URL } from '../constants/kahanaSite'
import { PM_LIFECYCLE_RESOURCES, PM_LIFECYCLE_STEPS } from '../data/operatingSystemSections'
import './Page.css'
import './OperatingSystem.css'

function Sprints() {
  return (
    <div className="page" id="product-lifecycle">
      <div className="sprints-linear-banner" role="status">
        <p>
          <strong>Active engineering backlog lives in{' '}
          <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
            Linear
          </a>.</strong>{' '}
          Feature requests, bugs, and sprint work are logged, prioritized, and assigned there —
          daily/weekly. See{' '}
          <Link to="/operating-system">Operating System</Link> and{' '}
          <Link to="/onboarding/linear-access">Linear onboarding</Link> for the full workflow.
        </p>
      </div>

      <div className="page-header">
        <h1>Product Lifecycle</h1>
        <p className="page-subtitle">
          How customer signals become prioritized work — managed in Linear against charter KPIs.
        </p>
      </div>

      <section className="page-section">
        <h2>PM methodology</h2>
        <div className="content-block">
          <ol className="feature-list">
            {PM_LIFECYCLE_STEPS.map((item) => (
              <li key={item.step}>
                <strong>{item.step}</strong> — {item.detail}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <h2>Feedback → backlog</h2>
        <div className="content-block">
          <p>
            Kahana product development is driven by creator and buyer needs, survey data, and
            in-product feedback. Insights from these sources inform what gets logged as issues in
            Linear — not ad-hoc Slack threads alone.
          </p>
          <ol className="feature-list">
            <li>
              <strong>Listen</strong> — NPS/PMF surveys, user feedback trends, support themes,
              and team observations.
            </li>
            <li>
              <strong>Log</strong> — PM or reporter creates a Linear issue (bug, feature, improvement)
              with context and links.
            </li>
            <li>
              <strong>Prioritize</strong> — Backlog ordered against{' '}
              <Link to="/project-charter">charter KPIs</Link> and roadmap impact; top items
              assigned to engineers.
            </li>
            <li>
              <strong>Ship</strong> — Work completed; status tracked in Linear through release.
            </li>
          </ol>
        </div>
      </section>

      <section className="page-section">
        <h2>Strategy &amp; scoreboard</h2>
        <div className="content-block">
          <ul className="feature-list">
            {PM_LIFECYCLE_RESOURCES.methodology.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.title}</Link> — {link.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Customer &amp; product data</h2>
        <div className="content-block">
          <ul className="feature-list">
            {PM_LIFECYCLE_RESOURCES.customerData.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.title}</Link> — {link.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Tools</h2>
        <div className="content-block">
          <p>
            <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
              linear.app/kahana
            </a>{' '}
            — backlog, bugs, feature requests, sprint prioritization
          </p>
          <p>
            <Link to="/operating-system">Operating System</Link> — Linear + Slack norms by function
          </p>
        </div>
      </section>
    </div>
  )
}

export default Sprints
