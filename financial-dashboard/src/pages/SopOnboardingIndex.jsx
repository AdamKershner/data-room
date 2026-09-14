import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { groupSopSections, isSopStepRule, sopStepTimeBadge } from '../data/sopStepUtils'
import { SopRulesBlock, sopActionKeys, useSopHashScroll } from './sopChecklistRender'
import { ConfettiBurst, OnboardingChecklistItem } from './onboardingChecklist'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'

function SopOnboardingSection({ sop, section, checked, onToggle, lastClickRef }) {
  const actions = (section.steps || []).filter((step) => !isSopStepRule(step))
  if (!actions.length && !section.intro && !(section.steps || []).some(isSopStepRule)) return null

  return (
    <div className="onboarding-day-section" id={section.id}>
      <h3 className="onboarding-day-title">{section.title}</h3>
      {section.intro ? <p className="onboarding-day-intro">{section.intro}</p> : null}
      <SopRulesBlock section={section} />
      {actions.length > 0 ? (
        <ul className="onboarding-list">
          {actions.map((step) => {
            const key = step.id
            return (
              <OnboardingChecklistItem
                key={key}
                step={{ ...step, badge: sopStepTimeBadge(step) }}
                checked={checked}
                onToggle={onToggle}
                lastClickRef={lastClickRef}
                to={`/sops/${sop.id}/${key}`}
                checkKey={key}
                optional={!!step.optional}
              />
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export function SopOnboardingIndex({ sop }) {
  const storageKey = `sop-checklist-${sop.id}`
  const [checked, setChecked] = useState(() => readLocalJson(storageKey, {}))
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)
  useSopHashScroll()

  const allKeys = useMemo(() => sopActionKeys(sop), [sop])
  const completedCount = allKeys.filter((key) => checked[key]).length
  const totalCount = allKeys.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0
  const groups = useMemo(() => groupSopSections(sop.sections), [sop])

  const toggleChecked = useCallback(
    (key, clickPos) => {
      setChecked((prev) => {
        const wasChecked = prev[key]
        const next = { ...prev, [key]: !wasChecked }
        writeLocalJson(storageKey, next)
        if (!wasChecked && clickPos) {
          setConfetti({ x: clickPos.x, y: clickPos.y })
        }
        return next
      })
    },
    [storageKey]
  )

  const subtitle = sop.excerpt || sop.description

  return (
    <div className="page" id={sop.id}>
      {confetti && (
        <ConfettiBurst
          x={confetti.x}
          y={confetti.y}
          onComplete={() => setConfetti(null)}
        />
      )}
      <div className="sop-back-banner">
        <Link to="/sops">← Back to SOPs</Link>
      </div>
      <div className="page-header">
        <h1>{sop.title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">☐ Check Done</span>
          <span className="onboarding-hint-item">→ Open a task for instructions</span>
        </p>
      </div>

      <section className="onboarding-summary">
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">{completedCount} / {totalCount}</div>
          <div className="onboarding-summary-label">Steps Completed</div>
        </div>
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">{progressPercent}%</div>
          <div className="onboarding-summary-label">Progress</div>
        </div>
      </section>

      <section className="onboarding-progress-section">
        <div className="onboarding-progress-bar">
          <div
            className="onboarding-progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="onboarding-progress-label">
          {progressPercent === 100 ? 'All done — great job!' : `${progressPercent}% complete`}
        </div>
      </section>

      <section className="page-section">
        <div className="onboarding-checklist">
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
              <div key={group.part || group.sections[0]?.id} className="onboarding-day-section">
                {group.title ? <h2 className="onboarding-day-title">{group.title}</h2> : null}
                {defaultSections.map((section) => (
                  <SopOnboardingSection
                    key={section.id}
                    sop={sop}
                    section={section}
                    checked={checked}
                    onToggle={toggleChecked}
                    lastClickRef={lastClickRef}
                  />
                ))}
                {pathOrder.length > 0 ? (
                  <div className="sop-path-grid">
                    {pathOrder.map((pathId) => {
                      const path = pathMap.get(pathId)
                      return (
                        <div key={pathId} className="sop-path-card">
                          <h3 className="sop-path-title">{path.title}</h3>
                          {path.sections.map((section) => (
                            <SopOnboardingSection
                              key={section.id}
                              sop={sop}
                              section={section}
                              checked={checked}
                              onToggle={toggleChecked}
                              lastClickRef={lastClickRef}
                            />
                          ))}
                        </div>
                      )
                    })}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
