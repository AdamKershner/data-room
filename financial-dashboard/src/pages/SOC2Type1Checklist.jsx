import React, { useState, useCallback } from 'react'
import { INSTRUCTIONS } from './soc2Type1Instructions'
import './Page.css'
import './SOC2Type1Checklist.css'

const STORAGE_KEY = 'soc2-type1-checklist'

function CheckRowWithInstructions({ id, checked, onToggle, label, sublabel, openId, onToggleOpen }) {
  const instruction = INSTRUCTIONS[id]
  const isOpen = openId === id

  return (
    <>
      <tr>
        <td className="soc2-check-cell">
          <label className="soc2-checkbox-wrapper">
            <input
              type="checkbox"
              checked={!!checked}
              onChange={() => onToggle(id)}
              className="soc2-checkbox"
            />
            <span className="soc2-checkbox-custom" />
          </label>
        </td>
        <td className="soc2-label-cell">
          {label}
          {sublabel && <span className="soc2-sublabel">{sublabel}</span>}
          {instruction && (
            <button
              type="button"
              className="soc2-view-instructions-link"
              onClick={() => onToggleOpen(isOpen ? null : id)}
              aria-expanded={isOpen}
            >
              {isOpen ? 'Hide instructions' : 'View instructions'}
            </button>
          )}
        </td>
      </tr>
      {instruction && isOpen && (
        <tr>
          <td colSpan={2} className="soc2-instruction-cell">
            <div className="soc2-instruction-panel">
              <div className="soc2-instruction-block">
                <strong>How to do this:</strong>
                <p>{instruction.howTo}</p>
              </div>
              <div className="soc2-instruction-block">
                <strong>What has already been done:</strong>
                <p>{instruction.alreadyDone}</p>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

function SOC2Type1Checklist() {
  const [checked, setChecked] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  })
  const [openId, setOpenId] = useState(null)

  const toggle = useCallback((id) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const isChecked = (id) => !!checked[id]

  const decisionIds = ['dec-1', 'dec-2', 'dec-3', 'dec-4', 'dec-5']
  const p0AccessIds = ['p0a-1', 'p0a-2', 'p0a-3', 'p0a-4', 'p0a-5']
  const p0BackupIds = ['p0b-1', 'p0b-2', 'p0b-3', 'p0b-4']
  const p1IdpIds = ['p1idp-1', 'p1idp-2']
  const p1LogIds = ['p1log-1', 'p1log-2', 'p1log-3']
  const p2ChangeIds = ['p2ch-1', 'p2ch-2']
  const p2RiskIds = ['p2r-1', 'p2r-2', 'p2r-3', 'p2r-4']
  const assertionIds = ['assert-1', 'assert-2', 'assert-3']
  const onetimeIds = ['one-1', 'one-2', 'one-3', 'one-4', 'one-5', 'one-6']
  const recurringQ = ['rec-q1', 'rec-q2', 'rec-q3', 'rec-q4']
  const recurringRisk = ['rec-risk']
  const evidenceIds = ['ev-1', 'ev-2', 'ev-3', 'ev-4', 'ev-5', 'ev-6', 'ev-7', 'ev-8', 'ev-9']
  const signoffIds = ['so-1', 'so-2', 'so-3', 'so-4']

  const allIds = [
    ...decisionIds, ...p0AccessIds, ...p0BackupIds, ...p1IdpIds, ...p1LogIds,
    ...p2ChangeIds, ...p2RiskIds, ...assertionIds, ...onetimeIds,
    ...recurringQ, ...recurringRisk, ...evidenceIds, ...signoffIds
  ]
  const completed = allIds.filter((id) => checked[id]).length
  const total = allIds.length
  const progress = total ? Math.round((completed / total) * 100) : 0

  return (
    <div className="page" id="soc2-type1-checklist">
      <div className="page-header">
        <h1>SOC 2 Type 1 Internal Checklist</h1>
        <p className="page-subtitle">
          Internal tracking for SOC 2 Type 1 audit readiness. Policies live in the SOC Documents folder (Google Docs when ready). Checkboxes save in your browser.
        </p>
        <div className="soc2-checklist-summary">
          <span className="soc2-checklist-count">{completed} / {total}</span>
          <span className="soc2-checklist-progress">{progress}% complete</span>
        </div>
        <div className="soc2-progress-bar">
          <div className="soc2-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <section className="page-section soc2-section soc2-auditor-section">
        <h2>Auditor view: SOC 2 Type 1 compliance</h2>
        <div className="content-block">
          <p className="soc2-auditor-verdict">
            <strong>Are all docs complete?</strong> Not yet. For a Type 1 (point-in-time) audit, the following is true:
          </p>
          <ul className="soc2-auditor-list">
            <li><strong>Complete:</strong> Core policies are in place and Kahana-specific (System Description, Access Control, Change Management, Backup, Logging, Encryption, Subservice Org, Compliance Program, SDLC, Code Review, Vendor Management, Remote Access, Configuration Management, Controls Matrix). Onboarding and Offboarding checklists exist. Change management is documented (GitHub, Tally→Slack→Sheets→CI). IdP deferral and current logging state are documented.</li>
            <li><strong>Incomplete / open:</strong> (1) <strong>Access reviews</strong> – Policy requires quarterly reviews; no review has been conducted or signed off; no access list template or logs. (2) <strong>Backups</strong> – Supabase plan (Free vs Pro) not confirmed; if Free, no backups = control gap; no restore test documented. (3) <strong>Risk assessment</strong> – Risk Report/Register/Treatment Plan exist as drafts; formal assessment not conducted or approved by management. (4) <strong>Management Assertion</strong> – Second signatory not named; letter not signed. (5) <strong>RTO/RPO</strong> – Not set or added to policies. (6) <strong>Evidence</strong> – Access review logs, backup test record, risk approval, and signed assertion are missing until the above are done.</li>
            <li><strong>Templates / still to review:</strong> Data Classification, Vulnerability Management, Workstation Security, Physical Security, Acceptable Use, Vendor Risk Assessment template, and some stubs (Phishing Simulation, Network Security, Risk Assessment Methods) need Kahana-specific content or expansion.</li>
          </ul>
          <p className="soc2-auditor-verdict">
            <strong>Verdict:</strong> Documentation foundation is strong; to pass a SOC 2 Type 1 audit, complete the P0 items (access reviews process + first review with sign-off; confirm Supabase plan and backups; one restore test), complete and approve the risk assessment, set RTO/RPO and second signatory, and obtain the signed Management Assertion. Use &quot;View instructions&quot; on each step for how to do it and what is already done.
          </p>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>Manager notes</h2>
        <div className="content-block soc2-note">
          <p><strong>Policies:</strong> Move to Google Docs when possible. For now, the <strong>SOC Documents</strong> folder is the source of truth.</p>
          <p><strong>SOC 2 Type 1</strong> = point-in-time audit (controls in place). Type II would require evidence over 6–12 months.</p>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>1. Manager decisions</h2>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead>
              <tr><th className="soc2-th-check">Done</th><th>Decision</th></tr>
            </thead>
            <tbody>
              <CheckRowWithInstructions id="dec-1" checked={isChecked('dec-1')} onToggle={toggle} label="Second signatory – Who signs Management Assertion with CEO? (CFO, COO, or CTO if no CFO)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="dec-2" checked={isChecked('dec-2')} onToggle={toggle} label="CTO / Security Lead – Who is the technical contact for the auditor?" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="dec-3" checked={isChecked('dec-3')} onToggle={toggle} label="Supabase plan – Free or Pro? (Upgrade to Pro if Free for backups)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="dec-4" checked={isChecked('dec-4')} onToggle={toggle} label="RTO target – Max acceptable downtime (e.g. 8 hours)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="dec-5" checked={isChecked('dec-5')} onToggle={toggle} label="RPO target – Max acceptable data loss (e.g. 24 hours)" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>2. Gaps and how to achieve them</h2>

        <h3>P0 – Access reviews (quarterly)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p0a-1" checked={isChecked('p0a-1')} onToggle={toggle} label="Create access list template: Person, System, Access Level, Last Reviewed" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0a-2" checked={isChecked('p0a-2')} onToggle={toggle} label="Complete first access list for all production/financial systems" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0a-3" checked={isChecked('p0a-3')} onToggle={toggle} label="Manager reviews and signs off access list" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0a-4" checked={isChecked('p0a-4')} onToggle={toggle} label="Save signed list in Evidence/Access-Review-Logs" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0a-5" checked={isChecked('p0a-5')} onToggle={toggle} label="Schedule and complete quarterly access reviews (Q1–Q4) with sign-off" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
          <p className="soc2-why"><strong>Why:</strong> CC6.1 – auditor expects proof you verify who has access and remove access when people leave.</p>
        </div>

        <h3>P0 – Backups (Supabase)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p0b-1" checked={isChecked('p0b-1')} onToggle={toggle} label="Confirm current Supabase plan (Free or Pro)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0b-2" checked={isChecked('p0b-2')} onToggle={toggle} label="If Free: upgrade to Pro or implement documented manual backup process" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0b-3" checked={isChecked('p0b-3')} onToggle={toggle} label="Document backup location and retention in Backup-and-Restoration-Policy" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p0b-4" checked={isChecked('p0b-4')} onToggle={toggle} label="Run one restore test; document in Evidence/Backup-Test-Results" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
          <p className="soc2-why"><strong>Why:</strong> BC/DR – auditor needs proof financial/billing data can be recovered. Free tier has no automatic backups.</p>
        </div>

        <h3>P1 – Org-wide IdP</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p1idp-1" checked={isChecked('p1idp-1')} onToggle={toggle} label="Access-Control-Policy documents: Google Workspace for Adam only; IdP deferred" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p1idp-2" checked={isChecked('p1idp-2')} onToggle={toggle} label="Add rationale and plan (e.g. implement when team reaches X people)" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>

        <h3>P1 – Logging / SIEM</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p1log-1" checked={isChecked('p1log-1')} onToggle={toggle} label="Logging Policy documents: Supabase logs, Mixpanel; 7-day retention on Pro" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p1log-2" checked={isChecked('p1log-2')} onToggle={toggle} label="Document retention and where logs live in policy" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p1log-3" checked={isChecked('p1log-3')} onToggle={toggle} label="(Optional) Evaluate Datadog; document decision and timeline" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>

        <h3>P2 – Change management</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p2ch-1" checked={isChecked('p2ch-1')} onToggle={toggle} label="Change-Management-Policy documents: GitHub PRs, Tally→Slack→Sheets→GitHub, CI/CD" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p2ch-2" checked={isChecked('p2ch-2')} onToggle={toggle} label="Know where to get evidence: GitHub PR history, workflow runs, deployment logs" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>

        <h3>P2 – Risk assessment</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="p2r-1" checked={isChecked('p2r-1')} onToggle={toggle} label="Conduct risk assessment: list risks, likelihood, impact, mitigations" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p2r-2" checked={isChecked('p2r-2')} onToggle={toggle} label="Populate Risk-Assessment-Report and Risk-Register" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p2r-3" checked={isChecked('p2r-3')} onToggle={toggle} label="Update Risk-Treatment-Plan with owners and actions" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="p2r-4" checked={isChecked('p2r-4')} onToggle={toggle} label="Manager approves and dates the risk assessment" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>3. Management assertion and signatories</h2>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="assert-1" checked={isChecked('assert-1')} onToggle={toggle} label="Confirm CEO and second signatory" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="assert-2" checked={isChecked('assert-2')} onToggle={toggle} label="Update Management-Assertion-Letter with both names and audit period" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="assert-3" checked={isChecked('assert-3')} onToggle={toggle} label="Both sign and date the Management Assertion when auditor provides final version" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>4. One-time setup tasks</h2>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Task</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="one-1" checked={isChecked('one-1')} onToggle={toggle} label="Add RTO/RPO to Backup and BC/DR policies" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="one-2" checked={isChecked('one-2')} onToggle={toggle} label="Add CTO / Security Lead to System Description and Org Chart" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="one-3" checked={isChecked('one-3')} onToggle={toggle} label="Confirm Supabase plan; upgrade to Pro if Free" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="one-4" checked={isChecked('one-4')} onToggle={toggle} label="Run one backup restore test; document in Evidence/Backup-Test-Results" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="one-5" checked={isChecked('one-5')} onToggle={toggle} label="Complete risk assessment; update Risk Report, Register, Treatment Plan" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="one-6" checked={isChecked('one-6')} onToggle={toggle} label="Collect DPAs and SOC 2 reports from critical vendors" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>5. Recurring tasks</h2>
        <h3>Access review (quarterly)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Quarter</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="rec-q1" checked={isChecked('rec-q1')} onToggle={toggle} label="Q1 access review completed with sign-off" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="rec-q2" checked={isChecked('rec-q2')} onToggle={toggle} label="Q2 access review completed with sign-off" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="rec-q3" checked={isChecked('rec-q3')} onToggle={toggle} label="Q3 access review completed with sign-off" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="rec-q4" checked={isChecked('rec-q4')} onToggle={toggle} label="Q4 access review completed with sign-off" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
        <h3>Risk assessment (annual)</h3>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Step</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="rec-risk" checked={isChecked('rec-risk')} onToggle={toggle} label="Annual risk assessment conducted and approved" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>6. Evidence to collect (for auditor)</h2>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Evidence</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="ev-1" checked={isChecked('ev-1')} onToggle={toggle} label="Access list + quarterly sign-offs" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-2" checked={isChecked('ev-2')} onToggle={toggle} label="Change management flow (documented)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-3" checked={isChecked('ev-3')} onToggle={toggle} label="GitHub PR / deployment logs" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-4" checked={isChecked('ev-4')} onToggle={toggle} label="Risk Assessment + approval" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-5" checked={isChecked('ev-5')} onToggle={toggle} label="Backup/restore test record" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-6" checked={isChecked('ev-6')} onToggle={toggle} label="Management Assertion (signed)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-7" checked={isChecked('ev-7')} onToggle={toggle} label="RTO/RPO in policy" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-8" checked={isChecked('ev-8')} onToggle={toggle} label="Onboarding checklist (completed for hires)" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="ev-9" checked={isChecked('ev-9')} onToggle={toggle} label="Offboarding checklist (when applicable)" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-section">
        <h2>7. Manager sign-off</h2>
        <div className="content-block">
          <table className="soc2-checklist-table">
            <thead><tr><th className="soc2-th-check">Done</th><th>Commitment</th></tr></thead>
            <tbody>
              <CheckRowWithInstructions id="so-1" checked={isChecked('so-1')} onToggle={toggle} label="I have reviewed this checklist" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="so-2" checked={isChecked('so-2')} onToggle={toggle} label="I have completed the decisions in Section 1" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="so-3" checked={isChecked('so-3')} onToggle={toggle} label="I will provide sign-off for quarterly access reviews" openId={openId} onToggleOpen={setOpenId} />
              <CheckRowWithInstructions id="so-4" checked={isChecked('so-4')} onToggle={toggle} label="I will sign the Management Assertion when ready" openId={openId} onToggleOpen={setOpenId} />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default SOC2Type1Checklist
