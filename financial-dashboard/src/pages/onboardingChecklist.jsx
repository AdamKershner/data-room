import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { OnboardingIcon } from './onboardingIcons'

const CONFETTI_COLORS = ['#0d9488', '#10b981', '#34d399', '#f59e0b', '#f97316', '#ec4899', '#8b5cf6', '#3b82f6']
const CONFETTI_COUNT = 16

export function ConfettiBurst({ x, y, onComplete }) {
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

export function OnboardingChecklistItem({
  step,
  checked,
  onToggle,
  lastClickRef,
  optional = false,
  to,
  checkKey,
}) {
  const key = checkKey || step.id
  const href = to || `/onboarding/${step.id}`
  const badge = step.badge

  return (
    <li className={`onboarding-item${optional ? ' onboarding-item-optional' : ''}`}>
      <div className="onboarding-item-row">
        <label
          className="onboarding-checkbox-wrapper"
          onClick={(e) => { lastClickRef.current = { x: e.clientX, y: e.clientY } }}
          title="Mark complete"
        >
          <input
            type="checkbox"
            checked={!!checked[key]}
            onChange={() => onToggle(key, lastClickRef.current)}
            className="onboarding-checkbox"
          />
          <span className="onboarding-checkbox-custom" />
          <span className="onboarding-checkbox-label">Done</span>
        </label>
        <Link
          to={href}
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
        {badge ? (
          <span className="onboarding-badge">{badge}</span>
        ) : null}
      </div>
    </li>
  )
}
