import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getAdjacentSopSteps, getSopById, getSopStep } from '../data/sopContent'
import { OnboardingIcon } from './onboardingIcons'
import { SopOnboardingStepContent } from './sopStepRender'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'

function SopOnboardingStepPage({ sop, step, stepId }) {
  const { prev, next } = getAdjacentSopSteps(sop.id, stepId)
  const indexHref = `/sops/${sop.id}`
  const stepHref = (item) => `/sops/${sop.id}/${item.id || item.key}`

  return (
    <div className="page onboarding-step-page" id="sop-step">
      <div className="onboarding-back-banner">
        <Link to={indexHref}>← Back to {sop.title}</Link>
      </div>
      <div className="page-header onboarding-step-header">
        <h1 title={step.label} aria-label={step.label} className="onboarding-step-title">
          {step.icon ? (
            <span className="onboarding-step-title-icon" aria-hidden="true">
              <OnboardingIcon name={step.icon} />
            </span>
          ) : null}
          {step.label}
        </h1>
        {step.sectionTitle ? (
          <p className="page-subtitle" style={{ marginTop: '8px' }}>{step.sectionTitle}</p>
        ) : null}
      </div>

      <section className="page-section">
        <div className="content-block">
          <SopOnboardingStepContent step={step} />
        </div>
      </section>

      <nav className="project-charter-nav" aria-label="SOP step navigation">
        {prev ? (
          <Link to={stepHref(prev)} className="project-charter-nav-link">
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={stepHref(next)} className="project-charter-nav-link project-charter-nav-link--next">
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

function SopStep() {
  const { sopId, stepId } = useParams()
  const sop = getSopById(sopId)

  if (!sop) {
    return <Navigate to="/sops" replace />
  }

  if (sop.href) {
    if (sop.foldInto && stepId) {
      const mapped = stepId === 'access' ? 'gsc-property' : stepId
      return <Navigate to={`/sops/${sop.foldInto}/${mapped}`} replace />
    }
    return <Navigate to={sop.href} replace />
  }

  const matchingStep = getSopStep(sopId, stepId).step
  if (matchingStep) {
    return <SopOnboardingStepPage sop={sop} step={matchingStep} stepId={stepId} />
  }

  const section = sop.sections?.find((item) => item.id === stepId)
  if (section) {
    return <Navigate to={`/sops/${sop.id}#${section.id}`} replace />
  }

  return <Navigate to={`/sops/${sop.id}`} replace />
}

export default SopStep
