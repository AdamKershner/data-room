import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  getCharterSection,
  getAdjacentCharterSections,
  PROJECT_CHARTER_META,
} from '../data/projectCharterSections'
import { PROJECT_CHARTER_CONTENT } from '../data/projectCharterContent'
import { OnboardingIcon } from './onboardingIcons'
import './Page.css'
import './Onboarding.css'
import './ProjectCharter.css'

function CharterTable({ rows }) {
  if (!rows?.length) return null
  const [header, ...body] = rows
  return (
    <div className="project-charter-table-wrap">
      <table className="project-charter-table">
        <thead>
          <tr>
            {header.map((cell, i) => (
              <th key={i}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CharterBlocks({ blocks }) {
  if (!blocks?.length) return null

  const out = []
  let listItems = []
  let key = 0

  const flushList = () => {
    if (!listItems.length) return
    out.push(
      <ul key={`list-${key++}`} className="project-charter-list">
        {listItems.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    )
    listItems = []
  }

  blocks.forEach((block) => {
    if (block.type === 'li') {
      listItems.push(block.text)
      return
    }
    flushList()
    if (block.type === 'h2') {
      out.push(
        <h3 key={`h2-${key++}`} className="project-charter-h2">
          {block.text}
        </h3>
      )
    } else if (block.type === 'table') {
      out.push(<CharterTable key={`t-${key++}`} rows={block.rows} />)
    } else {
      out.push(
        <p key={`p-${key++}`} className="project-charter-p">
          {block.text}
        </p>
      )
    }
  })
  flushList()

  return <div className="project-charter-body">{out}</div>
}

function ProjectCharterSection() {
  const { sectionId } = useParams()
  const section = getCharterSection(sectionId)
  const { prev, next } = getAdjacentCharterSections(sectionId)
  const blocks = PROJECT_CHARTER_CONTENT[sectionId]

  if (!section) {
    return (
      <div className="page onboarding-step-page">
        <div className="onboarding-back-banner">
          <Link to="/project-charter">← Back to Project Charter</Link>
        </div>
        <div className="page-header onboarding-step-header">
          <h1>Section Not Found</h1>
          <p className="page-subtitle">This charter section does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page onboarding-step-page" id="project-charter-section">
      <div className="onboarding-back-banner">
        <Link to="/project-charter">← Back to Project Charter</Link>
      </div>
      <div className="page-header onboarding-step-header">
        <p className="project-charter-eyebrow">
          {PROJECT_CHARTER_META.projectTitle} · Section {section.number} of 19
        </p>
        <h1 title={section.label} aria-label={section.label} className="onboarding-step-title">
          {section.icon && (
            <span className="onboarding-step-title-icon" aria-hidden="true">
              <OnboardingIcon name={section.icon} />
            </span>
          )}
          {section.label}
        </h1>
      </div>

      <section className="page-section">
        <div className="content-block">
          <p className="onboarding-step-done onboarding-step-done-top">
            <strong>✓ Read when:</strong> {section.readWhen}
          </p>
          <CharterBlocks blocks={blocks} />
        </div>
      </section>

      <nav className="project-charter-nav" aria-label="Section navigation">
        {prev ? (
          <Link to={`/project-charter/${prev.id}`} className="project-charter-nav-link">
            ← {prev.number}. {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/project-charter/${next.id}`} className="project-charter-nav-link project-charter-nav-link--next">
            {next.number}. {next.label} →
          </Link>
        ) : (
          <Link to="/project-charter" className="project-charter-nav-link project-charter-nav-link--next">
            Back to checklist →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default ProjectCharterSection
