import React, { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  PROJECT_CHARTER_META,
  PROJECT_CHARTER_GROUPS,
  PROJECT_CHARTER_SECTIONS,
} from '../data/projectCharterSections'
import { OnboardingIcon } from './onboardingIcons'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'

const STORAGE_KEY = 'project-charter-checklist'
const CHARTER_PDF_URL =
  '/documents/project-charter-library-supply-search-satisfaction.pdf'
const CHARTER_PDF_FILENAME =
  'Kahana-Project-Charter-Library-Supply-Search-Satisfaction.pdf'
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

function CharterChecklistItem({ section, checked, onToggle, lastClickRef }) {
  return (
    <li className="onboarding-item">
      <div className="onboarding-item-row">
        <label
          className="onboarding-checkbox-wrapper"
          onClick={(e) => {
            lastClickRef.current = { x: e.clientX, y: e.clientY }
          }}
          title="Mark read"
        >
          <input
            type="checkbox"
            checked={!!checked[section.id]}
            onChange={() => onToggle(section.id, lastClickRef.current)}
            className="onboarding-checkbox"
          />
          <span className="onboarding-checkbox-custom" />
          <span className="onboarding-checkbox-label">Done</span>
        </label>
        <Link
          to={`/project-charter/${section.id}`}
          className="onboarding-item-link"
          title={section.label}
          aria-label={`${section.number}. ${section.label}. Open section`}
        >
          {section.icon && (
            <span className="onboarding-item-icon" aria-hidden="true">
              <OnboardingIcon name={section.icon} />
            </span>
          )}
          <span className="onboarding-item-text">
            <span className="project-charter-section-num">{section.number}.</span> {section.label}
          </span>
          <span className="onboarding-item-arrow">→</span>
        </Link>
        {section.badge && <span className="onboarding-badge">{section.badge}</span>}
      </div>
    </li>
  )
}

function ProjectCharterChecklist() {
  const [checked, setChecked] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  })
  const [confetti, setConfetti] = useState(null)
  const lastClickRef = useRef(null)

  const toggleChecked = useCallback(
    (id, clickPos) => {
      const wasChecked = checked[id]
      const next = { ...checked, [id]: !wasChecked }
      setChecked(next)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      if (!wasChecked && clickPos) {
        setConfetti({ x: clickPos.x, y: clickPos.y })
      }
    },
    [checked]
  )

  const clearConfetti = useCallback(() => setConfetti(null), [])

  const completedCount = PROJECT_CHARTER_SECTIONS.filter((s) => checked[s.id]).length
  const totalCount = PROJECT_CHARTER_SECTIONS.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="page" id="project-charter">
      {confetti && (
        <ConfettiBurst x={confetti.x} y={confetti.y} onComplete={clearConfetti} />
      )}
      <div className="page-header">
        <h1>{PROJECT_CHARTER_META.title}</h1>
        <p className="page-subtitle">
          <strong>{PROJECT_CHARTER_META.projectTitle}</strong>
          {' — '}
          {PROJECT_CHARTER_META.subtitle}
        </p>
        <p className="onboarding-hint">
          Writing a new charter? Follow{' '}
          <Link to="/sops/writing-a-project-charter">SOP 10: Writing a Project Charter</Link>
          . This page is the live Library Supply example.
        </p>
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">☐ Mark read</span>
          <span className="onboarding-hint-item">→ Open a section</span>
        </p>
        <div className="project-charter-download-row">
          <a
            className="onboarding-cta-button"
            href={CHARTER_PDF_URL}
            download={CHARTER_PDF_FILENAME}
          >
            Download PDF
          </a>
        </div>
      </div>

      <section className="content-block project-charter-meta" aria-label="Charter metadata">
        <dl className="project-charter-meta-list">
          {PROJECT_CHARTER_META.metaRows.map(([label, value]) => (
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
          <div className="onboarding-summary-label">Sections Read</div>
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
            ? 'All sections read — thank you.'
            : `${progressPercent}% complete`}
        </div>
      </section>

      <section className="page-section">
        <div className="onboarding-checklist">
          {PROJECT_CHARTER_GROUPS.map((group) => {
            const sections = PROJECT_CHARTER_SECTIONS.filter((s) => s.group === group.id)
            return (
              <div key={group.id} className="onboarding-day-section">
                <h3 className="onboarding-day-title">{group.title}</h3>
                <p className="onboarding-day-intro">{group.intro}</p>
                <ul className="onboarding-list">
                  {sections.map((section) => (
                    <CharterChecklistItem
                      key={section.id}
                      section={section}
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

export default ProjectCharterChecklist
