import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FINDING_WHATS_BROKEN_META,
  FINDING_WHATS_BROKEN_GROUPS,
  FINDING_WHATS_BROKEN_STEPS,
} from '../data/findingWhatsBrokenSteps'
import { ConfettiBurst, OnboardingChecklistItem } from './onboardingChecklist'
import { sopStepTimeBadge } from '../data/sopStepUtils'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'
import './Sops.css'

const STORAGE_KEY = 'sop-finding-whats-broken-checklist'

function FindingWhatsBrokenChecklist() {
  const [checked, setChecked] = useState(() => readLocalJson(STORAGE_KEY, {}))
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const toggleChecked = useCallback((id, clickPos) => {
    setChecked((prev) => {
      const wasChecked = prev[id]
      const next = { ...prev, [id]: !wasChecked }
      writeLocalJson(STORAGE_KEY, next)
      if (!wasChecked && clickPos) {
        setConfetti({ x: clickPos.x, y: clickPos.y })
      }
      return next
    })
  }, [])

  const completedCount = FINDING_WHATS_BROKEN_STEPS.filter((s) => checked[s.id]).length
  const totalCount = FINDING_WHATS_BROKEN_STEPS.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="page" id="finding-whats-broken">
      {confetti && (
        <ConfettiBurst x={confetti.x} y={confetti.y} onComplete={() => setConfetti(null)} />
      )}
      <div className="sop-back-banner">
        <Link to="/sops">← Back to SOPs</Link>
      </div>
      <div className="page-header">
        <h1>{FINDING_WHATS_BROKEN_META.title}</h1>
        <p className="page-subtitle">{FINDING_WHATS_BROKEN_META.excerpt}</p>
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
          <div className="onboarding-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="onboarding-progress-label">
          {progressPercent === 100 ? 'All done — great job!' : `${progressPercent}% complete`}
        </div>
      </section>

      <section className="page-section">
        <div className="onboarding-checklist">
          {FINDING_WHATS_BROKEN_GROUPS.map((group) => {
            const steps = FINDING_WHATS_BROKEN_STEPS.filter((s) => s.group === group.id)
            return (
              <div key={group.id} className="onboarding-day-section" id={group.id}>
                <h3 className="onboarding-day-title">{group.title}</h3>
                {group.intro ? <p className="onboarding-day-intro">{group.intro}</p> : null}
                <ul className="onboarding-list">
                  {steps.map((step) => (
                    <OnboardingChecklistItem
                      key={step.id}
                      step={{ ...step, badge: sopStepTimeBadge(step) }}
                      checked={checked}
                      onToggle={toggleChecked}
                      lastClickRef={lastClickRef}
                      to={`/sops/finding-whats-broken/${step.id}`}
                    />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default FindingWhatsBrokenChecklist
