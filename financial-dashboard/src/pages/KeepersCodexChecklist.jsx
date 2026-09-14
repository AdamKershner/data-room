import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  KEEPERS_CODEX_META,
  KEEPERS_CODEX_GROUPS,
  KEEPERS_CODEX_STEPS,
} from '../data/keepersCodexSteps'
import { ConfettiBurst, OnboardingChecklistItem } from './onboardingChecklist'
import { sopStepTimeBadge } from '../data/sopStepUtils'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'
import './Sops.css'

const STORAGE_KEY = 'sop-keepers-codex-checklist'

function KeepersCodexChecklist() {
  const [checked, setChecked] = useState(() => readLocalJson(STORAGE_KEY, {}))
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const toggleChecked = useCallback(
    (id, clickPos) => {
      setChecked((prev) => {
        const wasChecked = prev[id]
        const next = { ...prev, [id]: !wasChecked }
        writeLocalJson(STORAGE_KEY, next)
        if (!wasChecked && clickPos) {
          setConfetti({ x: clickPos.x, y: clickPos.y })
        }
        return next
      })
    },
    []
  )

  const requiredSteps = KEEPERS_CODEX_STEPS.filter((s) => !s.optional)
  const completedCount = requiredSteps.filter((s) => checked[s.id]).length
  const totalCount = requiredSteps.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="page" id="keepers-codex">
      {confetti && (
        <ConfettiBurst x={confetti.x} y={confetti.y} onComplete={() => setConfetti(null)} />
      )}
      <div className="sop-back-banner">
        <Link to="/sops/community-building">← SOP 2: Community Building</Link>
      </div>
      <div className="page-header">
        <h1>{KEEPERS_CODEX_META.title}</h1>
        <p className="page-subtitle">{KEEPERS_CODEX_META.excerpt}</p>
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
          {KEEPERS_CODEX_GROUPS.map((group) => {
            const steps = KEEPERS_CODEX_STEPS.filter((s) => s.group === group.id)
            const optionalGroup = group.id === 'appendix'
            return (
              <div key={group.id} className="onboarding-day-section" id={group.id}>
                <h3 className="onboarding-day-title">{group.title}</h3>
                <p className={optionalGroup ? 'onboarding-optional-intro' : 'onboarding-day-intro'}>
                  {group.intro}
                </p>
                <ul className="onboarding-list">
                  {steps.map((step) => (
                    <OnboardingChecklistItem
                      key={step.id}
                      step={{ ...step, badge: sopStepTimeBadge(step) }}
                      checked={checked}
                      onToggle={toggleChecked}
                      lastClickRef={lastClickRef}
                      to={`/sops/keepers-codex/${step.id}`}
                      optional={!!step.optional}
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

export default KeepersCodexChecklist
