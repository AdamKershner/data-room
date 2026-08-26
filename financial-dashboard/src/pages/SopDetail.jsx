import React, { useCallback, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAdjacentSops, getSopById } from '../data/sopContent'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import { SopReviewStatusBadge } from '../components/SopReviewStatusBadge'
import './Page.css'
import './Sops.css'

function isInternalHref(href) {
  return href.startsWith('/') && !href.startsWith('//')
}

function SopStepLink({ href, label }) {
  const text = label || href
  if (isInternalHref(href)) {
    return (
      <p className="sop-step-link">
        <Link to={href}>{text} →</Link>
      </p>
    )
  }
  return (
    <p className="sop-step-link">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text} →
      </a>
    </p>
  )
}

function stepKey(sectionId, step, index) {
  return step.id || `${sectionId}-${index}`
}

function SopStepBody({ step }) {
  return (
    <>
      <p>{step.text}</p>
      {step.template && <pre className="sop-template-block">{step.template}</pre>}
      {step.href && <SopStepLink href={step.href} label={step.hrefLabel} />}
      {step.note && <p className="sop-step-note">{step.note}</p>}
    </>
  )
}

function SopDoc({ sop }) {
  const isChecklist = sop.format === 'checklist'
  const storageKey = `sop-checklist-${sop.id}`
  const [checked, setChecked] = useState(() =>
    isChecklist ? readLocalJson(storageKey, {}) : {}
  )

  const allKeys = useMemo(() => {
    if (!isChecklist) return []
    return sop.sections.flatMap((section) =>
      section.steps.map((step, i) => stepKey(section.id, step, i))
    )
  }, [isChecklist, sop.sections])

  const doneCount = allKeys.filter((key) => checked[key]).length
  const totalCount = allKeys.length

  const toggle = useCallback(
    (key) => {
      setChecked((prev) => {
        const next = { ...prev, [key]: !prev[key] }
        writeLocalJson(storageKey, next)
        return next
      })
    },
    [storageKey]
  )

  return (
    <article className="sop-doc" id={sop.id}>
      <header className="sop-doc-header">
        <p className="sop-doc-eyebrow">
          SOP {sop.number} · {sop.category}
          {isChecklist ? ' · Checklist' : ''}
        </p>
        <SopReviewStatusBadge number={sop.number} className="sop-status-badge--detail" />
        <h1 className="sop-detail-title">{sop.title}</h1>
        <dl className="sop-meta">
          <div>
            <dt>Function</dt>
            <dd>{sop.category}</dd>
          </div>
          {sop.owner ? (
            <div>
              <dt>Owner</dt>
              <dd>{sop.owner}</dd>
            </div>
          ) : null}
          <div>
            <dt>Who</dt>
            <dd>{sop.who}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>{sop.when}</dd>
          </div>
        </dl>
        {sop.notes?.length > 0 && (
          <div className="sop-callouts" role="note">
            {sop.notes.map((note) => (
              <p key={note} className="sop-callout">
                {note}
              </p>
            ))}
          </div>
        )}
        {isChecklist && totalCount > 0 && (
          <p className="sop-checklist-progress" aria-live="polite">
            {doneCount} / {totalCount} items complete
            {sop.sections.map((section) => {
              const keys = section.steps.map((step, i) => stepKey(section.id, step, i))
              const done = keys.filter((key) => checked[key]).length
              return (
                <span key={section.id} className="sop-checklist-progress-phase">
                  {section.title}: {done}/{keys.length}
                </span>
              )
            })}
          </p>
        )}
      </header>

      {sop.sections.map((section) => (
        <section key={section.id} className="sop-section" id={`${sop.id}-${section.id}`}>
          <h2>{section.title}</h2>
          {section.intro && <p className="sop-section-intro">{section.intro}</p>}
          {isChecklist ? (
            <ul className="sop-checklist">
              {section.steps.map((step, i) => {
                const key = stepKey(section.id, step, i)
                const isDone = !!checked[key]
                return (
                  <li
                    key={key}
                    className={isDone ? 'sop-checklist-item is-done' : 'sop-checklist-item'}
                  >
                    <div className="sop-checklist-row">
                      <label className="sop-checklist-label">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggle(key)}
                        />
                        <span className="sop-checklist-box" aria-hidden="true" />
                        <span className="sop-checklist-mark">Mark done</span>
                      </label>
                      <div className="sop-checklist-body">
                        <SopStepBody step={step} />
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <ol className="sop-steps">
              {section.steps.map((step, i) => (
                <li key={`${section.id}-${i}`}>
                  <SopStepBody step={step} />
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}

      <section className="sop-done-when" id={`${sop.id}-done-when`}>
        <h2>Done when</h2>
        <ul className="sop-done-list">
          {sop.doneWhen.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}

function SopDetail() {
  const { sopId } = useParams()
  const sop = getSopById(sopId)
  const { prev, next } = getAdjacentSops(sopId)

  if (!sop) {
    return (
      <div className="page sops-page" id="sop-detail">
        <div className="sop-back-banner">
          <Link to="/sops">← Back to SOPs</Link>
        </div>
        <div className="page-header">
          <h1>SOP not found</h1>
          <p className="page-subtitle">This procedure doesn&apos;t exist yet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page sops-page" id="sop-detail">
      <div className="sop-back-banner">
        <Link to="/sops">← Back to SOPs</Link>
      </div>
      <SopDoc key={sop.id} sop={sop} />
      <nav className="sop-adjacent" aria-label="Adjacent SOPs">
        {prev ? (
          <Link to={prev.href || `/sops/${prev.id}`} className="sop-adjacent-link">
            ← SOP {prev.number}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={next.href || `/sops/${next.id}`} className="sop-adjacent-link sop-adjacent-link--next">
            SOP {next.number}: {next.title} →
          </Link>
        ) : (
          <Link to="/sops" className="sop-adjacent-link sop-adjacent-link--next">
            Back to gallery →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default SopDetail
