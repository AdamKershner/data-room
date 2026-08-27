import React, { useCallback, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getAdjacentSops, getSopById } from '../data/sopContent'
import { sopStepKey, sopStepTimeBadge, sopTotalDuration } from '../data/sopStepUtils'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import { SopReviewStatusBadge } from '../components/SopReviewStatusBadge'
import { OnboardingIcon } from './onboardingIcons'
import { SopIntroCallout, SopProgressBar } from './SopProgressBar'
import { SopMeta } from './SopMeta'
import './Page.css'
import './Onboarding.css'
import './Sops.css'

function SopDoc({ sop }) {
  const storageKey = `sop-checklist-${sop.id}`
  const [checked, setChecked] = useState(() => readLocalJson(storageKey, {}))

  const allKeys = useMemo(
    () =>
      sop.sections.flatMap((section) =>
        section.steps.map((step, i) => sopStepKey(section.id, step, i))
      ),
    [sop.sections]
  )

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

  const duration = useMemo(() => sopTotalDuration(sop), [sop])

  return (
    <article className="sop-doc" id={sop.id}>
      <SopProgressBar done={doneCount} total={totalCount} duration={duration} />
      <header className="sop-doc-header">
        <p className="sop-doc-eyebrow">
          SOP {sop.number} · {sop.category} · Checklist
        </p>
        <SopReviewStatusBadge number={sop.number} className="sop-status-badge--detail" />
        <h1 className="sop-detail-title">{sop.title}</h1>
        <SopMeta
          category={sop.category}
          who={sop.who}
          cadence={sop.cadence}
          trigger={sop.trigger}
          duration={duration}
          updatedAt={sop.updatedAt}
        />
        <SopIntroCallout excerpt={sop.excerpt} />
        {sop.notes?.length > 0 && (
          <div className="sop-callouts" role="note">
            {sop.notes.map((note) => (
              <p key={note} className="sop-callout">
                {note}
              </p>
            ))}
          </div>
        )}
        {totalCount > 0 && (
          <p className="sop-checklist-progress" aria-live="polite">
            {doneCount} / {totalCount} items complete
            {sop.sections.map((section) => {
              const keys = section.steps.map((step, i) => sopStepKey(section.id, step, i))
              const done = keys.filter((key) => checked[key]).length
              return (
                <span key={section.id} className="sop-checklist-progress-phase">
                  {section.title}: {done}/{keys.length}
                </span>
              )
            })}
          </p>
        )}
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">☐ Mark done</span>
          <span className="onboarding-hint-item">→ Open a step for how-to and Done when</span>
        </p>
      </header>

      <div className="onboarding-checklist">
        {sop.sections.map((section) => (
          <div key={section.id} className="onboarding-day-section" id={`${sop.id}-${section.id}`}>
            <h2 className="onboarding-day-title">{section.title}</h2>
            {section.intro && <p className="onboarding-day-intro">{section.intro}</p>}
            <ul className="onboarding-list">
              {section.steps.map((step, i) => {
                const key = sopStepKey(section.id, step, i)
                const isDone = !!checked[key]
                return (
                  <li
                    key={key}
                    className={isDone ? 'onboarding-item is-done' : 'onboarding-item'}
                  >
                    <div className="onboarding-item-row">
                      <label className="onboarding-checkbox-wrapper" title="Mark complete">
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => toggle(key)}
                          className="onboarding-checkbox"
                        />
                        <span className="onboarding-checkbox-custom" />
                        <span className="onboarding-checkbox-label">Done</span>
                      </label>
                      <Link
                        to={`/sops/${sop.id}/${key}`}
                        className="onboarding-item-link"
                        title={step.label}
                        aria-label={`${step.label}. Open instructions`}
                      >
                        {step.icon && (
                          <span className="onboarding-item-icon" aria-hidden="true">
                            <OnboardingIcon name={step.icon} />
                          </span>
                        )}
                        <span className="onboarding-item-text">{step.label}</span>
                        <span className="onboarding-item-arrow">→</span>
                      </Link>
                      {sopStepTimeBadge(step) ? (
                        <span className="onboarding-badge">{sopStepTimeBadge(step)}</span>
                      ) : null}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

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
    return <Navigate to="/sops" replace />
  }

  if (sop.href) {
    return <Navigate to={sop.href} replace />
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
