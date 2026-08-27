import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  getKeepersCodexStep,
  getAdjacentKeepersCodexSteps,
  KEEPERS_CODEX_META,
  KEEPERS_CODEX_STEPS,
} from '../data/keepersCodexSteps'
import { KEEPERS_CODEX_CONTENT } from '../data/keepersCodexContent'
import { OnboardingIcon } from './onboardingIcons'
import { SopProgressBar } from './SopProgressBar'
import { readLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'
import './KeepersCodex.css'

function CodexTable({ rows }) {
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

function CodexLink({ block }) {
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

function CodexCallout({ block }) {
  const kindClass =
    block.kind === 'proposed'
      ? 'keepers-codex-callout--proposed'
      : block.kind === 'exception'
        ? 'keepers-codex-callout--exception'
        : block.kind === 'help'
          ? 'onboarding-note-help'
          : 'onboarding-note-important'
  return (
    <div className={`onboarding-note ${kindClass}`}>
      <p>
        {block.title ? <strong>{block.title} </strong> : null}
        {block.text}
      </p>
    </div>
  )
}

function CodexBlocks({ blocks }) {
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
                  <p>{item.text}</p>
                  {item.note ? <p className="sop-step-note">{item.note}</p> : null}
                </li>
              ))}
            </ol>
          )
        }
        if (block.type === 'table') {
          return <CodexTable key={i} rows={block.rows} />
        }
        if (block.type === 'callout') {
          return <CodexCallout key={i} block={block} />
        }
        if (block.type === 'copy') {
          return (
            <blockquote key={i} className="keepers-codex-copy">
              <span className="keepers-codex-copy-label">Copy</span>
              <p>{block.text}</p>
            </blockquote>
          )
        }
        if (block.type === 'link') {
          return <CodexLink key={i} block={block} />
        }
        if (block.type === 'image') {
          return (
            <figure key={i} className="keepers-codex-plate">
              <img src={block.src} alt={block.alt} />
              {block.caption ? <figcaption>{block.caption}</figcaption> : null}
            </figure>
          )
        }
        return null
      })}
    </div>
  )
}

function KeepersCodexStep() {
  const { stepId } = useParams()
  const step = getKeepersCodexStep(stepId)
  const { prev, next } = getAdjacentKeepersCodexSteps(stepId)
  const content = KEEPERS_CODEX_CONTENT[stepId]
  const requiredSteps = KEEPERS_CODEX_STEPS.filter((s) => !s.optional)
  const requiredCount = requiredSteps.length
  const checkedMap = readLocalJson('sop-keepers-codex-checklist', {})
  const progressDone = requiredSteps.filter((s) => checkedMap[s.id]).length

  if (!step) {
    return (
      <div className="page onboarding-step-page">
        <div className="onboarding-back-banner">
          <Link to="/sops/keepers-codex">← Back to The Keeper’s Codex</Link>
        </div>
        <div className="page-header onboarding-step-header">
          <h1>Section not found</h1>
          <p className="page-subtitle">This Codex labour does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page onboarding-step-page keepers-codex-step" id="keepers-codex-step">
      <div className="onboarding-back-banner">
        <Link to="/sops/keepers-codex">← Back to The Keeper’s Codex</Link>
      </div>
      <SopProgressBar
        done={progressDone}
        total={requiredCount}
        completeLabel="All required labours done"
      />
      <div className="page-header onboarding-step-header">
        <p className="project-charter-eyebrow">
          SOP {KEEPERS_CODEX_META.sopNumber} · {KEEPERS_CODEX_META.title}
          {step.optional ? ' · Appendix' : ` · ${requiredCount} required labours`}
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
          <CodexBlocks blocks={content?.blocks} />
        </div>
      </section>

      <nav className="project-charter-nav" aria-label="Codex navigation">
        {prev ? (
          <Link to={`/sops/keepers-codex/${prev.id}`} className="project-charter-nav-link">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/sops/keepers-codex/${next.id}`}
            className="project-charter-nav-link project-charter-nav-link--next"
          >
            {next.label} →
          </Link>
        ) : (
          <Link to="/sops/keepers-codex" className="project-charter-nav-link project-charter-nav-link--next">
            Back to checklist →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default KeepersCodexStep
