import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ONBOARDING_STEPS } from './onboardingSteps'
import './Page.css'
import './Onboarding.css'

const CONFETTI_COLORS = ['#0d9488', '#10b981', '#34d399', '#f59e0b', '#f97316', '#ec4899', '#8b5cf6', '#3b82f6']
const CONFETTI_COUNT = 16

const DAY_LABELS = {
  1: 'Day 1',
  across: 'Across 5 business days',
  2: 'Day 2',
  3: 'Day 3',
  4: 'Day 4',
  5: 'Day 5: Complete',
}

function ConfettiBurst({ x, y, onComplete }) {
  const [particles] = useState(() =>
    Array.from({ length: CONFETTI_COUNT }, (_, i) => {
      const angle = (Math.PI * 2 * i) / CONFETTI_COUNT + Math.random() * 0.5
      const distance = 60 + Math.random() * 80
      return {
        id: i,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        tx: Math.cos(angle) * distance,
        ty: -Math.sin(angle) * distance,
        size: 6 + Math.random() * 6,
        delay: Math.random() * 80,
        duration: 800 + Math.random() * 400,
      }
    })
  )

  React.useEffect(() => {
    const t = setTimeout(() => onComplete?.(), 1400)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <div className="confetti-burst" style={{ left: x, top: y }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--duration': `${p.duration}ms`,
            '--delay': `${p.delay}ms`,
            '--color': p.color,
            '--size': `${p.size}px`,
          }}
        />
      ))}
    </div>
  )
}

function Onboarding() {
  const [checked, setChecked] = useState(() => {
    const stored = localStorage.getItem('onboarding-checklist')
    return stored ? JSON.parse(stored) : {}
  })
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const toggleChecked = useCallback((id, clickPos) => {
    const wasChecked = checked[id]
    const next = { ...checked, [id]: !wasChecked }
    setChecked(next)
    localStorage.setItem('onboarding-checklist', JSON.stringify(next))
    if (!wasChecked && clickPos) {
      setConfetti({ x: clickPos.x, y: clickPos.y })
    }
  }, [checked])

  const clearConfetti = useCallback(() => setConfetti(null), [])

  const activeSteps = ONBOARDING_STEPS.filter((s) => !s.comingSoon)
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
          New team member checklist. Complete each step and click through for detailed instructions.
        </p>
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">☐ Click the box to mark complete</span>
          <span className="onboarding-hint-item">→ Click the task name to open instructions</span>
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
          {progressPercent === 100 ? "🎉 All done! Great job!" : `${progressPercent}% complete`}
        </div>
      </section>

      <section className="page-section">
        <div className="onboarding-checklist">
          {[1, 'across', 2, 3, 4, 5].map((day) => {
            const daySteps = activeSteps.filter((s) => s.day === day)
            if (daySteps.length === 0) return null
            return (
              <div key={day} className="onboarding-day-section">
                <h3 className="onboarding-day-title">{DAY_LABELS[day]}</h3>
                <ul className="onboarding-list">
                  {daySteps.map((step) => (
                    <li key={step.id} className="onboarding-item">
                      <div className="onboarding-item-row">
                        <label
                          className="onboarding-checkbox-wrapper"
                          onClick={(e) => { lastClickRef.current = { x: e.clientX, y: e.clientY } }}
                          title="Mark complete"
                        >
                          <input
                            type="checkbox"
                            checked={!!checked[step.id]}
                            onChange={() => toggleChecked(step.id, lastClickRef.current)}
                            className="onboarding-checkbox"
                          />
                          <span className="onboarding-checkbox-custom" />
                          <span className="onboarding-checkbox-label">Mark complete</span>
                        </label>
                        <Link
                          to={`/onboarding/${step.id}`}
                          className="onboarding-item-link"
                          title="Open instructions"
                        >
                          <span className="onboarding-item-text">{step.label}</span>
                          <span className="onboarding-item-arrow">View instructions →</span>
                        </Link>
                        {step.badge && (
                          <span className="onboarding-badge">{step.badge}</span>
                        )}
                      </div>
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
