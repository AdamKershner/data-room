import React, { useCallback, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getSopById } from '../data/sopContent'
import {
  groupSopSections,
  sopTotalDuration,
} from '../data/sopStepUtils'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import { SopReviewStatusBadge } from '../components/SopReviewStatusBadge'
import { SopIntroCallout, SopProgressBar } from './SopProgressBar'
import { SopMeta } from './SopMeta'
import { SopAdjacentNav } from './SopAdjacentNav'
import { SopSectionStepList, sectionActionKeys, sopActionKeys, useSopHashScroll } from './sopChecklistRender'
import './Page.css'
import './Onboarding.css'
import './Sops.css'

function sectionProgress(section, checked) {
  const keys = sectionActionKeys(section)
  const done = keys.filter((key) => checked[key]).length
  return { done, total: keys.length }
}

function SopSectionCard({ sop, section, checked }) {
  const { done, total } = sectionProgress(section, checked)
  return (
    <li className="sop-toc-item">
      <Link to={`/sops/${sop.id}/${section.id}`} className="sop-toc-link">
        <span className="sop-toc-title">{section.title}</span>
        {total > 0 ? (
          <span className="sop-toc-count">
            {done}/{total}
          </span>
        ) : null}
        <span className="sop-toc-arrow">→</span>
      </Link>
      {section.intro ? <p className="sop-toc-intro">{section.intro}</p> : null}
    </li>
  )
}

function SopToc({ sop, checked }) {
  const groups = groupSopSections(sop.sections)
  return (
    <div className="sop-toc">
      {groups.map((group) => {
        const defaultSections = group.sections.filter((section) => !section.path)
        const pathSections = group.sections.filter((section) => section.path)
        const pathOrder = []
        const pathMap = new Map()
        for (const section of pathSections) {
          if (!pathMap.has(section.path)) {
            pathMap.set(section.path, { title: section.pathTitle || section.title, sections: [] })
            pathOrder.push(section.path)
          }
          pathMap.get(section.path).sections.push(section)
        }
        return (
          <div key={group.part || group.sections[0].id} className="sop-toc-group">
            {group.title ? <h2 className="sop-toc-part">{group.title}</h2> : null}
            {defaultSections.length > 0 ? (
              <ul className="sop-toc-list">
                {defaultSections.map((section) => (
                  <SopSectionCard key={section.id} sop={sop} section={section} checked={checked} />
                ))}
              </ul>
            ) : null}
            {pathOrder.length > 0 ? (
              <div className="sop-path-grid">
                {pathOrder.map((pathId) => {
                  const path = pathMap.get(pathId)
                  return (
                    <div key={pathId} className="sop-path-card">
                      <h3 className="sop-path-title">{path.title}</h3>
                      <ul className="sop-toc-list">
                        {path.sections.map((section) => (
                          <SopSectionCard key={section.id} sop={sop} section={section} checked={checked} />
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

function SopInlineDoc({ sop, checked, toggle }) {
  return (
    <div className="onboarding-checklist sop-inline-doc">
      {sop.sections.map((section) => (
        <div key={section.id} className="onboarding-day-section" id={`${sop.id}-${section.id}`}>
          <h2 className="onboarding-day-title">{section.title}</h2>
          {section.intro && <p className="onboarding-day-intro">{section.intro}</p>}
          <SopSectionStepList section={section} checked={checked} onToggle={toggle} />
        </div>
      ))}
    </div>
  )
}

function SopDoc({ sop }) {
  const storageKey = `sop-checklist-${sop.id}`
  const [checked, setChecked] = useState(() => readLocalJson(storageKey, {}))
  useSopHashScroll()

  const allKeys = useMemo(() => sopActionKeys(sop), [sop])
  const doneCount = allKeys.filter((key) => checked[key]).length
  const totalCount = allKeys.length
  const inline = sop.layout === 'inline'

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
              const keys = sectionActionKeys(section)
              if (!keys.length) return null
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
          {inline ? (
            <span className="onboarding-hint-item">☐ Mark done on this page</span>
          ) : (
            <>
              <span className="onboarding-hint-item">Open a heading for the full checklist</span>
              <span className="onboarding-hint-item">☐ Mark done on the section page</span>
            </>
          )}
        </p>
      </header>

      {inline ? <SopInlineDoc sop={sop} checked={checked} toggle={toggle} /> : <SopToc sop={sop} checked={checked} />}

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
      <SopAdjacentNav sopId={sopId} />
    </div>
  )
}

export default SopDetail
