import React, { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getAdjacentSopSteps, getSopStep } from '../data/sopContent'
import { readLocalJson } from '../utils/safeStorage'
import { OnboardingIcon } from './onboardingIcons'
import { SopProgressBar } from './SopProgressBar'
import { SopStepBody } from './sopStepRender'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'

function SopStep() {
  const { sopId, stepId } = useParams()
  const { sop, step, steps } = getSopStep(sopId, stepId)
  const { prev, next } = getAdjacentSopSteps(sopId, stepId)

  const progress = useMemo(() => {
    if (!sop) return { done: 0, total: 0 }
    const checked = readLocalJson(`sop-checklist-${sop.id}`, {})
    const keys = steps.map((s) => s.key)
    return {
      done: keys.filter((key) => checked[key]).length,
      total: keys.length,
    }
  }, [sop, steps])

  if (!sop) {
    return <Navigate to="/sops" replace />
  }

  if (sop.href) {
    return <Navigate to={sop.href} replace />
  }

  const indexHref = `/sops/${sop.id}`

  if (!step) {
    return <Navigate to={indexHref} replace />
  }

  return (
    <div className="page onboarding-step-page" id="sop-step">
      <div className="onboarding-back-banner">
        <Link to={indexHref}>← Back to SOP {sop.number}: {sop.title}</Link>
      </div>
      <SopProgressBar done={progress.done} total={progress.total} />
      <div className="page-header onboarding-step-header">
        <p className="project-charter-eyebrow">
          SOP {sop.number} · {sop.title}
          {step.sectionTitle ? ` · ${step.sectionTitle}` : ''}
        </p>
        <h1 className="onboarding-step-title">
          {step.icon && (
            <span className="onboarding-step-title-icon" aria-hidden="true">
              <OnboardingIcon name={step.icon} />
            </span>
          )}
          {step.label}
        </h1>
      </div>

      <section className="page-section">
        <div className="content-block">
          <p className="onboarding-step-done onboarding-step-done-top">
            <strong>✓ Done when:</strong> {step.doneWhen}
          </p>
          <SopStepBody step={step} />
        </div>
      </section>

      <nav className="project-charter-nav" aria-label="SOP step navigation">
        {prev ? (
          <Link to={`/sops/${sop.id}/${prev.key}`} className="project-charter-nav-link">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/sops/${sop.id}/${next.key}`}
            className="project-charter-nav-link project-charter-nav-link--next"
          >
            {next.label} →
          </Link>
        ) : (
          <Link to={indexHref} className="project-charter-nav-link project-charter-nav-link--next">
            Back to checklist →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default SopStep
