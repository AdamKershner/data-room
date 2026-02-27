import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ONBOARDING_STEPS } from './onboardingSteps'
import './Page.css'
import './Onboarding.css'

const DAY_LABELS = {
  1: 'Day 1',
  2: 'Day 2',
  3: 'Day 3',
  4: 'Day 4',
  ongoing: 'Across 5 business days',
  complete: 'Complete',
}

function Onboarding() {
  const [checked, setChecked] = useState(() => {
    const stored = localStorage.getItem('onboarding-checklist')
    return stored ? JSON.parse(stored) : {}
  })

  const toggleChecked = (id) => {
    const next = { ...checked, [id]: !checked[id] }
    setChecked(next)
    localStorage.setItem('onboarding-checklist', JSON.stringify(next))
  }

  const activeSteps = ONBOARDING_STEPS.filter((s) => !s.comingSoon)
  const comingSoonSteps = ONBOARDING_STEPS.filter((s) => s.comingSoon)
  const completedCount = activeSteps.filter((s) => checked[s.id]).length
  const totalCount = activeSteps.length

  return (
    <div className="page" id="onboarding">
      <div className="page-header">
        <h1>Onboarding</h1>
        <p className="page-subtitle">
          New team member checklist. Complete each step and click through for detailed instructions. Subpages for each step coming soon.
        </p>
      </div>

      <section className="onboarding-summary">
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">{completedCount} / {totalCount}</div>
          <div className="onboarding-summary-label">Steps Completed</div>
        </div>
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">{totalCount ? Math.round((completedCount / totalCount) * 100) : 0}%</div>
          <div className="onboarding-summary-label">Progress</div>
        </div>
      </section>

      <section className="page-section">
        <div className="onboarding-checklist">
          {[1, 2, 3, 4, 'ongoing', 'complete'].map((day) => {
            const daySteps = activeSteps.filter((s) => s.day === day)
            if (daySteps.length === 0) return null
            return (
              <div key={day} className="onboarding-day-section">
                <h3 className="onboarding-day-title">{DAY_LABELS[day]}</h3>
                <ul className="onboarding-list">
                  {daySteps.map((step) => (
                    <li key={step.id} className="onboarding-item">
                      <label className="onboarding-item-label">
                        <input
                          type="checkbox"
                          checked={!!checked[step.id]}
                          onChange={() => toggleChecked(step.id)}
                          className="onboarding-checkbox"
                        />
                        <span className="onboarding-checkbox-custom" />
                        <Link
                          to={`/onboarding/${step.id}`}
                          className="onboarding-item-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {step.label}
                        </Link>
                        {step.badge && (
                          <span className="onboarding-badge">{step.badge}</span>
                        )}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          {comingSoonSteps.length > 0 && (
            <>
              <h3 className="onboarding-coming-soon-title">Coming soon</h3>
              <ul className="onboarding-list onboarding-list-coming-soon">
                {comingSoonSteps.map((step) => (
                  <li key={step.id} className="onboarding-item onboarding-item-coming-soon">
                    <Link
                      to={`/onboarding/${step.id}`}
                      className="onboarding-item-link"
                    >
                      {step.label}
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
