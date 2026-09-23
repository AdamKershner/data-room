import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ONBOARDING_STEPS } from './onboardingSteps'
import { OnboardingIcon } from './onboardingIcons'
import { ConfettiBurst, OnboardingChecklistItem } from './onboardingChecklist'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'

function Onboarding() {
  const [checked, setChecked] = useState(() => readLocalJson('onboarding-checklist', {}))
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const toggleChecked = useCallback((id, clickPos) => {
    const wasChecked = checked[id]
    const next = { ...checked, [id]: !wasChecked }
    setChecked(next)
    writeLocalJson('onboarding-checklist', next)
    if (!wasChecked && clickPos) {
      setConfetti({ x: clickPos.x, y: clickPos.y })
    }
  }, [checked])

  const clearConfetti = useCallback(() => setConfetti(null), [])

  const activeSteps = ONBOARDING_STEPS.filter((s) => !s.comingSoon && s.day !== 'optional')
  const day1Steps = activeSteps.filter((s) => s.day === 1)
  const phase2Steps = activeSteps.filter((s) => s.day === 'phase2')
  const optionalSteps = ONBOARDING_STEPS.filter((s) => s.day === 'optional')
  const comingSoonSteps = ONBOARDING_STEPS.filter((s) => s.comingSoon)
  const completedCount = activeSteps.filter((s) => checked[s.id]).length
  const totalCount = activeSteps.length

  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="page" id="onboarding">
      {confetti && (
        <ConfettiBurst
          x={confetti.x}
          y={confetti.y}
          onComplete={clearConfetti}
        />
      )}
      <div className="page-header">
        <h1>Onboarding</h1>
        <p className="page-subtitle">
          New team member checklist. <strong>Day 1</strong> gets you set up (Slack, tools, profiles).{' '}
          <strong>Phase 2</strong> is two weeks of role SOPs with your manager — by the end you know
          your process calendar, have the tools to run it, and can find the docs without asking.
        </p>
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
          <div className="onboarding-day-section">
            <h3 className="onboarding-day-title">Day 1 — Get set up</h3>
            <p className="onboarding-day-intro">
              Accounts, Slack, tools, and product basics so you can work with the team.
            </p>
            <ul className="onboarding-list">
              {day1Steps.map((step) => (
                <OnboardingChecklistItem
                  key={step.id}
                  step={step}
                  checked={checked}
                  onToggle={toggleChecked}
                  lastClickRef={lastClickRef}
                />
              ))}
            </ul>
          </div>

          {phase2Steps.length > 0 && (
            <div className="onboarding-day-section">
              <h3 className="onboarding-day-title">Phase 2 — Own your processes (2 weeks)</h3>
              <p className="onboarding-day-intro">
                Read the SOPs for your role and responsibilities. Your manager is available to answer
                questions and guide you. This phase lasts two weeks. Managers follow{' '}
                <Link to="/sops/onboarding-as-a-manager">SOP 28: Onboarding as a Manager</Link>
                {' '}(The Welcoming — you are not done until the seven confirmations).
              </p>
              <ul className="onboarding-list">
                {phase2Steps.map((step) => (
                  <OnboardingChecklistItem
                    key={step.id}
                    step={step}
                    checked={checked}
                    onToggle={toggleChecked}
                    lastClickRef={lastClickRef}
                  />
                ))}
              </ul>
            </div>
          )}

          {optionalSteps.length > 0 && (
            <div className="onboarding-day-section">
              <h3 className="onboarding-day-title">Supplementary learning</h3>
              <p className="onboarding-optional-intro">
                Market Map, Company Landscape, How We Work, the Project Charter, and the growth
                framework. Useful orientation — not required to finish Phase 2.
              </p>
              <ul className="onboarding-list">
                {optionalSteps.map((step) => (
                  <OnboardingChecklistItem
                    key={step.id}
                    step={step}
                    checked={checked}
                    onToggle={toggleChecked}
                    lastClickRef={lastClickRef}
                    optional
                  />
                ))}
              </ul>
            </div>
          )}

          {comingSoonSteps.length > 0 && (
            <>
              <h3 className="onboarding-coming-soon-title">Coming soon</h3>
              <ul className="onboarding-list onboarding-list-coming-soon">
                {comingSoonSteps.map((step) => (
                  <li key={step.id} className="onboarding-item onboarding-item-coming-soon">
                    <Link
                      to={`/onboarding/${step.id}`}
                      className="onboarding-item-link"
                      title={step.label}
                      aria-label={step.label}
                    >
                      {step.icon && (
                        <span className="onboarding-item-icon" aria-hidden="true">
                          <OnboardingIcon name={step.icon} />
                        </span>
                      )}
                      <span className="onboarding-item-text">{step.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Onboarding
