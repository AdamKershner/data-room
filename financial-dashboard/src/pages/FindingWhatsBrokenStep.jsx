import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  getFindingWhatsBrokenStep,
  getAdjacentFindingWhatsBrokenSteps,
  FINDING_WHATS_BROKEN_META,
  FINDING_WHATS_BROKEN_STEPS,
} from '../data/findingWhatsBrokenSteps'
import { FINDING_WHATS_BROKEN_CONTENT } from '../data/findingWhatsBrokenContent'
import { OnboardingIcon } from './onboardingIcons'
import { SopProgressBar } from './SopProgressBar'
import { readLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'
import './KeepersCodex.css'

function QualityTable({ rows }) {
  if (!rows?.length) return null
  const [header, ...body] = rows
  return (
    <div className="project-charter-table-wrap">
      <table className="project-charter-table">
        <thead>
          <tr>
            {header.map((cell, i) => (
              <th key={i}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function QualityLink({ block }) {
  if (block.to) {
    return (
      <Link to={block.to} className="onboarding-cta-link onboarding-cta-link-block">
        {block.label}
      </Link>
    )
  }
  return (
    <a
      href={block.href}
      target="_blank"
      rel="noopener noreferrer"
      className="onboarding-cta-link onboarding-cta-link-block"
    >
      {block.label}
    </a>
  )
}

function QualityCallout({ block }) {
  const kindClass =
    block.kind === 'help' ? 'onboarding-note-help' : 'onboarding-note-important'
  return (
    <div className={`onboarding-note ${kindClass}`}>
      <p>
        {block.title ? <strong>{block.title} </strong> : null}
        {block.text}
      </p>
    </div>
  )
}

function QualityBlocks({ blocks }) {
  if (!blocks?.length) return null

  return (
    <div className="project-charter-body keepers-codex-body">
      {blocks.map((block, i) => {
        if (block.type === 'h2') {
          return (
            <h3 key={i} className="project-charter-h2">
              {block.text}
            </h3>
          )
        }
        if (block.type === 'p') {
          return (
            <p key={i} className="project-charter-p">
              {block.text}
            </p>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="project-charter-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'ol') {
          return (
            <ol key={i} className="sop-steps keepers-codex-ol">
              {block.items.map((item, ii) => (
                <li key={ii}>
                  <p>{typeof item === 'string' ? item : item.text}</p>
                  {item.note ? <p className="sop-step-note">{item.note}</p> : null}
                </li>
              ))}
            </ol>
          )
        }
        if (block.type === 'table') {
          return <QualityTable key={i} rows={block.rows} />
        }
        if (block.type === 'callout') {
          return <QualityCallout key={i} block={block} />
        }
        if (block.type === 'link') {
          return <QualityLink key={i} block={block} />
        }
        return null
      })}
    </div>
  )
}

function FindingWhatsBrokenStep() {
  const { stepId } = useParams()
  const step = getFindingWhatsBrokenStep(stepId)
  const { prev, next } = getAdjacentFindingWhatsBrokenSteps(stepId)
  const content = FINDING_WHATS_BROKEN_CONTENT[stepId]
  const requiredCount = FINDING_WHATS_BROKEN_STEPS.length
  const checkedMap = readLocalJson('sop-finding-whats-broken-checklist', {})
  const progressDone = FINDING_WHATS_BROKEN_STEPS.filter((s) => checkedMap[s.id]).length

  if (!step) {
    return (
      <div className="page onboarding-step-page">
        <div className="onboarding-back-banner">
          <Link to="/sops/finding-whats-broken">← Back to Product Quality</Link>
        </div>
        <div className="page-header onboarding-step-header">
          <h1>Section not found</h1>
          <p className="page-subtitle">This step does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page onboarding-step-page keepers-codex-step" id="finding-whats-broken-step">
      <div className="onboarding-back-banner">
        <Link to="/sops/finding-whats-broken">← Back to Product Quality</Link>
      </div>
      <SopProgressBar done={progressDone} total={requiredCount} completeLabel="All checks done" />
      <div className="page-header onboarding-step-header">
        <p className="project-charter-eyebrow">
          SOP {FINDING_WHATS_BROKEN_META.sopNumber} · {FINDING_WHATS_BROKEN_META.title}
          {` · ${requiredCount} steps`}
        </p>
        <h1 title={step.label} aria-label={step.label} className="onboarding-step-title">
          {step.icon && (
            <span className="onboarding-step-title-icon" aria-hidden="true">
              <OnboardingIcon name={step.icon} />
            </span>
          )}
          {step.label}
        </h1>
      </div>

      <section className="page-section">
        <div className="content-block">
          <p className="onboarding-step-done onboarding-step-done-top">
            <strong>✓ Done when:</strong> {step.doneWhen}
          </p>
          {content?.intro ? <p className="sop-section-intro">{content.intro}</p> : null}
          <QualityBlocks blocks={content?.blocks} />
        </div>
      </section>

      <nav className="project-charter-nav" aria-label="SOP navigation">
        {prev ? (
          <Link to={`/sops/finding-whats-broken/${prev.id}`} className="project-charter-nav-link">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/sops/finding-whats-broken/${next.id}`}
            className="project-charter-nav-link project-charter-nav-link--next"
          >
            {next.label} →
          </Link>
        ) : (
          <Link
            to="/sops/finding-whats-broken"
            className="project-charter-nav-link project-charter-nav-link--next"
          >
            Back to checklist →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default FindingWhatsBrokenStep
