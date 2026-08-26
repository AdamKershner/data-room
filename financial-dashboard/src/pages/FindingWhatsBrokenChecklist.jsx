import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FINDING_WHATS_BROKEN_META,
  FINDING_WHATS_BROKEN_GROUPS,
  FINDING_WHATS_BROKEN_STEPS,
} from '../data/findingWhatsBrokenSteps'
import { OnboardingIcon } from './onboardingIcons'
import { SopReviewStatusBadge } from '../components/SopReviewStatusBadge'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'
import './KeepersCodex.css'

const STORAGE_KEY = 'sop-finding-whats-broken-checklist'
const CONFETTI_COLORS = ['#0d9488', '#10b981', '#34d399', '#f59e0b', '#f97316', '#ec4899', '#8b5cf6', '#3b82f6']
const CONFETTI_COUNT = 16

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

function QualityChecklistItem({ step, checked, onToggle, lastClickRef }) {
  return (
    <li className="onboarding-item">
      <div className="onboarding-item-row">
        <label
          className="onboarding-checkbox-wrapper"
          onClick={(e) => {
            lastClickRef.current = { x: e.clientX, y: e.clientY }
          }}
          title="Mark complete"
        >
          <input
            type="checkbox"
            checked={!!checked[step.id]}
            onChange={() => onToggle(step.id, lastClickRef.current)}
            className="onboarding-checkbox"
          />
          <span className="onboarding-checkbox-custom" />
          <span className="onboarding-checkbox-label">Done</span>
        </label>
        <Link
          to={`/sops/finding-whats-broken/${step.id}`}
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
        {step.badge && <span className="onboarding-badge">{step.badge}</span>}
      </div>
    </li>
  )
}

function FindingWhatsBrokenChecklist() {
  const [checked, setChecked] = useState(() => readLocalJson(STORAGE_KEY, {}))
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const toggleChecked = useCallback(
    (id, clickPos) => {
      const wasChecked = checked[id]
      const next = { ...checked, [id]: !wasChecked }
      setChecked(next)
      writeLocalJson(STORAGE_KEY, next)
      if (!wasChecked && clickPos) {
        setConfetti({ x: clickPos.x, y: clickPos.y })
      }
    },
    [checked]
  )

  const clearConfetti = useCallback(() => setConfetti(null), [])

  const completedCount = FINDING_WHATS_BROKEN_STEPS.filter((s) => checked[s.id]).length
  const totalCount = FINDING_WHATS_BROKEN_STEPS.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="page keepers-codex-page" id="finding-whats-broken">
      {confetti && (
        <ConfettiBurst x={confetti.x} y={confetti.y} onComplete={clearConfetti} />
      )}
      <div className="sop-back-banner">
        <Link to="/sops">← Back to SOPs</Link>
      </div>
      <div className="page-header">
        <p className="project-charter-eyebrow">
          SOP {FINDING_WHATS_BROKEN_META.sopNumber} · {FINDING_WHATS_BROKEN_META.category}
        </p>
        <SopReviewStatusBadge number={FINDING_WHATS_BROKEN_META.sopNumber} className="sop-status-badge--detail" />
        <h1>{FINDING_WHATS_BROKEN_META.title}</h1>
        <p className="page-subtitle">{FINDING_WHATS_BROKEN_META.subtitle}</p>
        <p className="sop-freshness-note">{FINDING_WHATS_BROKEN_META.standing}</p>
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">☐ Check Done</span>
          <span className="onboarding-hint-item">→ Open a step for instructions</span>
        </p>
      </div>

      <section className="content-block project-charter-meta" aria-label="SOP metadata">
        <dl className="project-charter-meta-list">
          {FINDING_WHATS_BROKEN_META.metaRows.map(([label, value]) => (
            <div key={label} className="project-charter-meta-row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="onboarding-summary">
        <div className="onboarding-summary-card">
          <div className="onboarding-summary-value">
            {completedCount} / {totalCount}
          </div>
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
          {progressPercent === 100
            ? 'All checks done — nothing broken stays invisible.'
            : `${progressPercent}% complete`}
        </div>
      </section>

      <section className="page-section">
        <div className="onboarding-checklist">
          {FINDING_WHATS_BROKEN_GROUPS.map((group) => {
            const steps = FINDING_WHATS_BROKEN_STEPS.filter((s) => s.group === group.id)
            return (
              <div key={group.id} className="onboarding-day-section">
                <h3 className="onboarding-day-title">{group.title}</h3>
                <p className="onboarding-day-intro">{group.intro}</p>
                <ul className="onboarding-list">
                  {steps.map((step) => (
                    <QualityChecklistItem
                      key={step.id}
                      step={step}
                      checked={checked}
                      onToggle={toggleChecked}
                      lastClickRef={lastClickRef}
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
