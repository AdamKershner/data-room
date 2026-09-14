import React from 'react'
import { Link } from 'react-router-dom'

function isInternalHref(href) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function SopStepLink({ href, label, variant = 'sop' }) {
  const text = label || href
  if (variant === 'onboarding') {
    const className = 'onboarding-cta-link onboarding-cta-link-block'
    if (isInternalHref(href)) {
      return (
        <Link to={href} className={className}>
          {text} →
        </Link>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {text} →
      </a>
    )
  }
  if (isInternalHref(href)) {
    return (
      <p className="sop-step-link">
        <Link to={href}>{text} →</Link>
      </p>
    )
  }
  return (
    <p className="sop-step-link">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text} →
      </a>
    </p>
  )
}

export function SopStepBody({ step }) {
  return (
    <>
      {step.text ? <p>{step.text}</p> : null}
      {step.template && (
        <pre className={step.code ? 'sop-template-block sop-template-block--code' : 'sop-template-block'}>
          {step.template}
        </pre>
      )}
      {step.href && <SopStepLink href={step.href} label={step.hrefLabel} />}
      {step.note && <p className="sop-step-note">{step.note}</p>}
    </>
  )
}

export function SopOnboardingStepContent({ step }) {
  return (
    <div className="onboarding-step-content">
      {step.doneWhen ? (
        <p className="onboarding-step-done onboarding-step-done-top">
          <strong>✓ Done when:</strong> {step.doneWhen}
        </p>
      ) : null}
      {step.text ? <p>{step.text}</p> : null}
      {step.href ? <SopStepLink href={step.href} label={step.hrefLabel} variant="onboarding" /> : null}
      {step.template ? (
        <pre className={step.code ? 'sop-template-block sop-template-block--code' : 'sop-template-block'}>
          {step.template}
        </pre>
      ) : null}
      {step.note ? (
        <div className="onboarding-note">
          <p>{step.note}</p>
        </div>
      ) : null}
    </div>
  )
}
