import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  flattenSopActionSteps,
  isDoneWhenRedundant,
  isSopStepRule,
  sopStepKey,
  sopStepTimeBadge,
} from '../data/sopStepUtils'
import { OnboardingIcon } from './onboardingIcons'
import { SopStepBody } from './sopStepRender'

export function useSopHashScroll() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.replace(/^#/, ''))
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
    return () => window.clearTimeout(t)
  }, [hash])
}

export function sectionActionKeys(section) {
  return (section?.steps || [])
    .map((step, i) => ({ step, key: sopStepKey(section.id, step, i) }))
    .filter(({ step }) => !isSopStepRule(step))
    .map(({ key }) => key)
}

export function sopActionKeys(sop) {
  return flattenSopActionSteps(sop).map((step) => step.key)
}

export function SopRulesBlock({ section }) {
  const rules = (section?.steps || []).filter(isSopStepRule)
  if (!rules.length) return null
  return (
    <div className="sop-rules-block" role="note">
      <h3 className="sop-rules-title">Standing rules</h3>
      <p className="sop-rules-intro">Read these. They are not tasks to check off.</p>
      <ul className="sop-rules-list">
        {rules.map((step, i) => {
          const key = sopStepKey(section.id, step, i)
          return (
            <li key={key} id={key} className="sop-rules-item">
              <p className="sop-rules-label">{step.label}</p>
              <SopStepBody step={step} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function SopSectionStepList({ section, checked, onToggle }) {
  const actions = (section.steps || [])
    .map((step, i) => ({ step, key: sopStepKey(section.id, step, i) }))
    .filter(({ step }) => !isSopStepRule(step))

  return (
    <>
      <SopRulesBlock section={section} />
      {actions.length > 0 ? (
        <ul className="sop-checklist">
          {actions.map(({ step, key }) => {
            const isDone = !!checked[key]
            const timeBadge = sopStepTimeBadge(step)
            return (
              <li
                key={key}
                id={key}
                className={isDone ? 'sop-checklist-item is-done' : 'sop-checklist-item'}
              >
                <div className="sop-checklist-row">
                  <label className="onboarding-checkbox-wrapper sop-checklist-label" title="Mark complete">
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => onToggle(key)}
                      className="onboarding-checkbox"
                    />
                    <span className="onboarding-checkbox-custom" />
                    <span className="onboarding-checkbox-label">Done</span>
                  </label>
                  <div className="sop-checklist-body">
                    <p className="sop-checklist-step-title">
                      {step.icon ? (
                        <span className="onboarding-item-icon" aria-hidden="true">
                          <OnboardingIcon name={step.icon} />
                        </span>
                      ) : null}
                      <span>{step.label}</span>
                      {timeBadge ? <span className="onboarding-badge">{timeBadge}</span> : null}
                    </p>
                    {!isDoneWhenRedundant(step) && step.doneWhen ? (
                      <p className="onboarding-step-done onboarding-step-done-inline">
                        <strong>Done when:</strong> {step.doneWhen}
                      </p>
                    ) : null}
                    <SopStepBody step={step} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      ) : null}
    </>
  )
}

