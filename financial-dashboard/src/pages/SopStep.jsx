import React, { useCallback, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getAdjacentSopSections, getSopSectionByParam } from '../data/sopContent'
import { sopTotalDuration } from '../data/sopStepUtils'
import { readLocalJson, writeLocalJson } from '../utils/safeStorage'
import { SopProgressBar } from './SopProgressBar'
import { SopSectionStepList, sopActionKeys, useSopHashScroll } from './sopChecklistRender'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'
import './Sops.css'

function SopStep() {
  const { sopId, stepId } = useParams()
  const { sop, section, stepKey } = getSopSectionByParam(sopId, stepId)
  const { prev, next } = getAdjacentSopSections(sopId, section?.id)
  useSopHashScroll()

  const storageKey = sop ? `sop-checklist-${sop.id}` : ''
  const [checked, setChecked] = useState(() => (storageKey ? readLocalJson(storageKey, {}) : {}))

  const progress = useMemo(() => {
    if (!sop) return { done: 0, total: 0 }
    const keys = sopActionKeys(sop)
    return {
      done: keys.filter((key) => checked[key]).length,
      total: keys.length,
    }
  }, [sop, checked])

  const toggle = useCallback(
    (key) => {
      setChecked((prevChecked) => {
        const nextChecked = { ...prevChecked, [key]: !prevChecked[key] }
        writeLocalJson(storageKey, nextChecked)
        return nextChecked
      })
    },
    [storageKey]
  )

  if (!sop) {
    return <Navigate to="/sops" replace />
  }

  if (sop.href) {
    if (sop.foldInto && stepId) {
      const sectionId = (sop.foldSections || []).includes(stepId)
        ? stepId
        : stepId === 'access'
          ? 'gsc-property'
          : null
      if (sectionId) {
        return <Navigate to={`/sops/${sop.foldInto}/${sectionId}`} replace />
      }
      const fallbackSection = (sop.foldSections && sop.foldSections[0]) || ''
      return (
        <Navigate
          to={fallbackSection ? `/sops/${sop.foldInto}/${fallbackSection}#${stepId}` : sop.href}
          replace
        />
      )
    }
    return <Navigate to={sop.href} replace />
  }

  const indexHref = `/sops/${sop.id}`

  if (sop.layout === 'inline') {
    return <Navigate to={`${indexHref}${stepId ? `#${stepId}` : ''}`} replace />
  }

  if (!section) {
    return <Navigate to={indexHref} replace />
  }

  if (stepKey && stepId !== section.id) {
    return <Navigate to={`/sops/${sop.id}/${section.id}#${stepKey}`} replace />
  }

  return (
    <div className="page onboarding-step-page" id="sop-section">
      <div className="onboarding-back-banner">
        <Link to={indexHref}>← Back to SOP {sop.number}: {sop.title}</Link>
      </div>
      <SopProgressBar done={progress.done} total={progress.total} duration={sopTotalDuration(sop)} />
      <div className="page-header onboarding-step-header">
        <p className="project-charter-eyebrow">
          SOP {sop.number} · {sop.title}
        </p>
        <h1 className="onboarding-step-title">{section.title}</h1>
        {section.intro ? <p className="page-subtitle">{section.intro}</p> : null}
      </div>

      <section className="page-section">
        <SopSectionStepList section={section} checked={checked} onToggle={toggle} />
      </section>

      <nav className="project-charter-nav" aria-label="SOP section navigation">
        {prev ? (
          <Link to={`/sops/${sop.id}/${prev.id}`} className="project-charter-nav-link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/sops/${sop.id}/${next.id}`}
            className="project-charter-nav-link project-charter-nav-link--next"
          >
            {next.title} →
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
