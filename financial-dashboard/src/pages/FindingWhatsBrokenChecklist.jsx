import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FINDING_WHATS_BROKEN_META,
  FINDING_WHATS_BROKEN_GROUPS,
  FINDING_WHATS_BROKEN_STEPS,
} from '../data/findingWhatsBrokenSteps'
import { SopReviewStatusBadge } from '../components/SopReviewStatusBadge'
import { SopIntroCallout, SopProgressBar } from './SopProgressBar'
import { SopMeta } from './SopMeta'
import { SopAdjacentNav } from './SopAdjacentNav'
import { formatSopDuration, sumSopMinutes } from '../data/sopStepUtils'
import { readLocalJson } from '../utils/safeStorage'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'
import './KeepersCodex.css'

const STORAGE_KEY = 'sop-finding-whats-broken-checklist'

function FindingWhatsBrokenChecklist() {
  const [checked] = useState(() => readLocalJson(STORAGE_KEY, {}))
  const completedCount = FINDING_WHATS_BROKEN_STEPS.filter((s) => checked[s.id]).length
  const totalCount = FINDING_WHATS_BROKEN_STEPS.length
  const progressPercent = totalCount ? Math.round((completedCount / totalCount) * 100) : 0
  const duration = formatSopDuration(sumSopMinutes(FINDING_WHATS_BROKEN_STEPS, { skipOptional: false }))

  return (
    <div className="page keepers-codex-page" id="finding-whats-broken">
      <div className="sop-back-banner">
        <Link to="/sops">← Back to SOPs</Link>
      </div>
      <SopProgressBar
        done={completedCount}
        total={totalCount}
        duration={duration}
        completeLabel="All checks done"
      />
      <div className="page-header">
        <p className="project-charter-eyebrow">
          SOP {FINDING_WHATS_BROKEN_META.sopNumber} · {FINDING_WHATS_BROKEN_META.category}
        </p>
        <SopReviewStatusBadge number={FINDING_WHATS_BROKEN_META.sopNumber} className="sop-status-badge--detail" />
        <h1>{FINDING_WHATS_BROKEN_META.title}</h1>
        <p className="page-subtitle">{FINDING_WHATS_BROKEN_META.subtitle}</p>
        <SopMeta
          category={FINDING_WHATS_BROKEN_META.category}
          who="Product Managers"
          cadence="Daily, Weekly, Monthly"
          trigger="Before every major launch."
          duration={duration}
          updatedAt={FINDING_WHATS_BROKEN_META.updatedAt}
        />
        <SopIntroCallout excerpt={FINDING_WHATS_BROKEN_META.excerpt} />
        <p className="sop-freshness-note">{FINDING_WHATS_BROKEN_META.standing}</p>
        <p className="onboarding-hint">
          <span className="onboarding-hint-item">Open a heading for the full checklist</span>
          <span className="onboarding-hint-item">☐ Mark done on the section page</span>
        </p>
      </div>

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

      <section className="page-section">
        <div className="sop-toc">
          <ul className="sop-toc-list">
            {FINDING_WHATS_BROKEN_GROUPS.map((group) => {
              const steps = FINDING_WHATS_BROKEN_STEPS.filter((s) => s.group === group.id)
              const done = steps.filter((s) => checked[s.id]).length
              return (
                <li key={group.id} className="sop-toc-item">
                  <Link to={`/sops/finding-whats-broken/${group.id}`} className="sop-toc-link">
                    <span className="sop-toc-title">{group.title}</span>
                    <span className="sop-toc-count">
                      {done}/{steps.length}
                    </span>
                    <span className="sop-toc-arrow">→</span>
                  </Link>
                  <p className="sop-toc-intro">{group.intro}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <SopAdjacentNav sopId="finding-whats-broken" />
    </div>
  )
}

export default FindingWhatsBrokenChecklist
