import React from 'react'
import { Link } from 'react-router-dom'
import {
  TECHNICAL_ROADMAP_PAGE,
  PILLARS,
  SECURITY_AUDIT,
  SECURITY_PRIORITIES,
  TRUST_GROUPS,
  ALGORITHM_GROUPS,
  PILLAR_DEPENDENCIES,
  EXECUTION_LINKS,
  LINEAR_WORKSPACE_URL,
} from '../data/kahanaTechnicalRoadmapSections'
import './Page.css'
import './OperatingSystem.css'
import './KahanaTechnicalRoadmap.css'

function DataTable({ headers, rows }) {
  return (
    <div className="os-table-wrap">
      <table className="os-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, i) => (
                <td key={`${row.key}-${i}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function statusClass(status) {
  if (status === 'Shipped') return 'tr-status tr-status--shipped'
  if (status === 'Partial' || status.startsWith('Partial')) return 'tr-status tr-status--partial'
  if (status === 'Ongoing') return 'tr-status tr-status--ongoing'
  return 'tr-status tr-status--planned'
}

function InitiativeTable({ initiatives }) {
  return (
    <DataTable
      headers={['Initiative', 'Status', 'Surface', 'Notes']}
      rows={initiatives.map((item) => ({
        key: item.name,
        cells: [
          item.name,
          <span key={`s-${item.name}`} className={statusClass(item.status)}>
            {item.status}
          </span>,
          item.surface,
          item.notes,
        ],
      }))}
    />
  )
}

function KahanaTechnicalRoadmap() {
  return (
    <div className="page" id="technical-roadmap">
      <div className="page-header">
        <span className="tr-internal-kicker">{TECHNICAL_ROADMAP_PAGE.kicker}</span>
        <h1>{TECHNICAL_ROADMAP_PAGE.title}</h1>
        <p className="page-subtitle">{TECHNICAL_ROADMAP_PAGE.subtitle}</p>
      </div>

      <section className="page-section" id="pillar-overview">
        <h2>Three pillars</h2>
        <div className="content-block">
          <p>
            Kahana aspires to be Wan Shi Tong&apos;s Library — a trusted place to discover curated human
            knowledge. The next wave of technical work clusters around Security, Trust, and Algorithm.
          </p>
          <div className="tr-pillar-hero">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="tr-pillar-card" id={pillar.id}>
                <h3>{pillar.name}</h3>
                <p className="tr-pillar-question">{pillar.question}</p>
                <p>{pillar.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="security">
        <h2>Security</h2>
        <div className="content-block">
          <div className="tr-audit-note" role="note">
            <strong>Source:</strong> {SECURITY_AUDIT.title} ({SECURITY_AUDIT.date}). Scope:{' '}
            {SECURITY_AUDIT.scope}. Full finding detail for engineers:{' '}
            <code>{SECURITY_AUDIT.repoPath}</code> in the data room repo. This page lists remediation
            themes only — not exploit reproduction steps.
          </div>

          {SECURITY_PRIORITIES.map((band) => (
            <div key={band.band} className="tr-priority-band">
              <h3>{band.band}</h3>
              <DataTable
                headers={['Findings', 'Theme', 'Action']}
                rows={band.items.map((item) => ({
                  key: item.id,
                  cells: [item.findings, item.theme, item.action],
                }))}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" id="trust">
        <h2>Trust</h2>
        <div className="content-block">
          <p>
            Building trust in creators and experts, the marketplace, products, and information quality.
          </p>
          {TRUST_GROUPS.map((group) => (
            <div key={group.id} className="tr-priority-band">
              <h3>{group.title}</h3>
              <InitiativeTable initiatives={group.initiatives} />
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" id="algorithm">
        <h2>Algorithm</h2>
        <div className="content-block">
          <p>
            Making it easy to find the knowledge you have in mind — search, intent, in-hub findability,
            and recommendations.
          </p>
          {ALGORITHM_GROUPS.map((group) => (
            <div key={group.id} className="tr-priority-band">
              <h3>{group.title}</h3>
              <InitiativeTable initiatives={group.initiatives} />
            </div>
          ))}
        </div>
      </section>

      <section className="page-section" id="dependencies">
        <h2>Cross-pillar dependencies</h2>
        <div className="content-block">
          <ul className="tr-deps-list">
            {PILLAR_DEPENDENCIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section" id="execution">
        <h2>Execution</h2>
        <div className="content-block">
          <p>
            Themes on this page; active issues tracked in{' '}
            <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer">
              Linear
            </a>
            .
          </p>
          <ul className="tr-exec-links">
            {EXECUTION_LINKS.map((link) => (
              <li key={link.path}>
                {link.external ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                ) : (
                  <Link to={link.path}>{link.title}</Link>
                )}
                <span> — {link.description}</span>
              </li>
            ))}
          </ul>
          <p>
            Full markdown: <code>Kahana/10-technical-roadmap.md</code> in the data room repo.
          </p>
        </div>
      </section>
    </div>
  )
}

export default KahanaTechnicalRoadmap
