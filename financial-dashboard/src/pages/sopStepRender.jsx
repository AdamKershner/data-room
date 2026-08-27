import React from 'react'
import { Link } from 'react-router-dom'

function isInternalHref(href) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function SopStepLink({ href, label }) {
  const text = label || href
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
