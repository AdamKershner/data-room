import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './SOC2GapAnalysis.css'

function SOC2GapAnalysis() {
  return (
    <div className="page" id="soc2-gap-analysis">
      <div className="page-header">
        <h1>SOC2 Gap Analysis</h1>
        <p className="page-subtitle">
          Information gathered from the codebase, documentation, and internal input for SOC compliance document drafts. Use this to populate auditor questionnaires and policy drafts.
        </p>
        <p className="soc2-updated">Last updated: March 2026</p>
      </div>

      <section className="page-section soc2-auditor-section">
        <h2>Executive Summary</h2>
        <div className="content-block">
          <table className="soc2-summary-table">
            <tbody>
              <tr><td><strong>Purpose</strong></td><td>Pre-audit readiness factsheet for SOC 2 Type 2 preparation</td></tr>
              <tr><td><strong>Company</strong></td><td>Kahana (AI browser, B2B SaaS). Pre-revenue, small team</td></tr>
              <tr><td><strong>Scope</strong></td><td>Oasis product, Supabase backend, AWS infrastructure, internal tools</td></tr>
              <tr><td><strong>Status</strong></td><td>Early preparation; no formal audit engagement yet</td></tr>
              <tr><td><strong>What we need from you</strong></td><td>Prioritized recommendations, gap severity assessment, and guidance on documentation requirements</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-auditor-section">
        <h2>Legend</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr><th>Term</th><th>Definition</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Current state</strong></td><td>How we operate today; may or may not be formally documented</td></tr>
              <tr><td><strong>Gap</strong></td><td>Known deficiency vs. SOC2 expectations; needs remediation</td></tr>
              <tr><td><strong>Planned</strong></td><td>Intended improvement; not yet implemented</td></tr>
              <tr><td><strong>Documented</strong></td><td>Formal policy, procedure, or control document exists (Y/N)</td></tr>
              <tr><td><strong>Auditor Notes</strong></td><td>Space for auditor feedback, recommendations, or follow-up questions</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-auditor-section">
        <h2>Control Mapping (Trust Service Criteria)</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr><th>TSC / Control</th><th>Our Implementation</th><th>Status</th><th>Evidence</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>CC6.1</strong> Access Control</td><td>Supabase Auth, AWS IAM, Google Workspace (1 user), AWS Secrets Manager</td><td>Partial</td><td>User list (manual); no access review logs</td></tr>
              <tr><td><strong>CC6.1</strong> Access Reviews</td><td>Not conducted quarterly; no documented sign-off</td><td>Gap</td><td>None</td></tr>
              <tr><td><strong>CC6.1</strong> Internal IdP</td><td>Google Workspace for 1 person only; no org-wide IdP</td><td>Partial</td><td>Documented deferral needed</td></tr>
              <tr><td><strong>CC7.1</strong> Monitoring</td><td>Supabase logs, Mixpanel; no dedicated SIEM</td><td>Partial</td><td>Supabase dashboard; no formal retention policy</td></tr>
              <tr><td><strong>CC8.1</strong> Change Management</td><td>GitHub, CI/CD, Tally→Slack→Sheets→GitHub workflows</td><td>Current state</td><td>PR history, workflow runs; not formally documented</td></tr>
              <tr><td><strong>CC9.x</strong> Risk Assessment</td><td>Not yet conducted</td><td>Gap</td><td>None</td></tr>
              <tr><td><strong>Availability</strong></td><td>Supabase, AWS; no formal SLA or DR testing</td><td>Partial</td><td>Vendor SLAs</td></tr>
              <tr><td><strong>Confidentiality</strong></td><td>Encryption at rest (Supabase), TLS in transit</td><td>Current state</td><td>Supabase documentation</td></tr>
              <tr><td><strong>BC/DR</strong> Backups</td><td>Free Plan = no backups; Pro Plan = 7-day retention</td><td>Gap</td><td>None on Free Plan</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-auditor-section">
        <h2>Gap Summary (Prioritized for Auditor Review)</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr><th>Priority</th><th>Gap</th><th>Impact</th><th>Remediation Path</th><th>Est. Effort</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>P0</strong></td><td>Access reviews not conducted</td><td>CC6.1 failure</td><td>Implement quarterly review + sign-off</td><td>Medium</td></tr>
              <tr><td><strong>P0</strong></td><td>Supabase Free Plan = no backups</td><td>BC/DR failure</td><td>Upgrade to Pro ($25/mo) or custom `db dump`</td><td>Low ($)</td></tr>
              <tr><td><strong>P1</strong></td><td>No centralized IdP</td><td>CC6.1 partial</td><td>Document deferral; plan for growth</td><td>Low</td></tr>
              <tr><td><strong>P1</strong></td><td>No dedicated logging/SIEM</td><td>CC7.1 partial</td><td>Document current state or adopt Datadog</td><td>Medium</td></tr>
              <tr><td><strong>P2</strong></td><td>Change management not formally documented</td><td>CC8.1</td><td>Write policy; link to existing process</td><td>Low</td></tr>
              <tr><td><strong>P2</strong></td><td>No risk assessment</td><td>CC9.x</td><td>Conduct and document annual risk assessment</td><td>Medium</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-auditor-section">
        <h2>Where We Need Your Guidance</h2>
        <div className="content-block">
          <ol className="soc2-guidance-list">
            <li><strong>Access reviews (no quarterly cadence)</strong> – What&apos;s the minimum viable process for a small team? Template or tool recommendations?</li>
            <li><strong>Internal IdP (Google Workspace for 1 person)</strong> – When does a centralized IdP become required? Acceptable to document &quot;deferred&quot;?</li>
            <li><strong>Logging (Supabase tables only)</strong> – Is this sufficient for Type 2, or should we adopt Datadog/other before audit?</li>
            <li><strong>Backups (Free Plan = no backups)</strong> – Pro upgrade vs. custom `db dump` – which path is audit-friendly?</li>
            <li><strong>Change management (Tally + Slack + Sheets)</strong> – How formally does this need to be documented for auditor acceptance?</li>
          </ol>
        </div>
      </section>

      <section className="page-section soc2-auditor-section">
        <h2>Evidence Inventory</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr><th>Control Area</th><th>Evidence We Have</th><th>Evidence We Need</th></tr>
            </thead>
            <tbody>
              <tr><td>Access Control</td><td>User list (manual)</td><td>Access review logs, offboarding checklist</td></tr>
              <tr><td>Change Management</td><td>GitHub history, CI logs, workflow runs</td><td>Formal change policy, approval evidence</td></tr>
              <tr><td>Backups</td><td>Supabase dashboard (if Pro)</td><td>Backup verification logs, restore test</td></tr>
              <tr><td>Logging</td><td>Supabase logs, Mixpanel</td><td>Retention policy, SIEM (if required)</td></tr>
              <tr><td>Vendor Management</td><td>Vendor list</td><td>DPAs, SOC2 reports from critical vendors</td></tr>
              <tr><td>Risk Assessment</td><td>None</td><td>Risk register, assessment documentation</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-auditor-section">
        <h2>Proposed Action Plan (Seeking Auditor Input)</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr><th>Phase</th><th>Actions</th><th>Timeline</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Immediate</strong></td><td>Upgrade Supabase to Pro (backups); draft Access Review process</td><td>2–4 weeks</td></tr>
              <tr><td><strong>Short-term</strong></td><td>Document Change Management, Access Control policies</td><td>4–8 weeks</td></tr>
              <tr><td><strong>Medium-term</strong></td><td>Evaluate IdP adoption; logging tool decision</td><td>3–6 months</td></tr>
              <tr><td><strong>Pre-audit</strong></td><td>Evidence collection period (6–12 months for Type 2)</td><td>TBD</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>1. Production Hosting</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cloud provider</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>AWS (Lambda, Terraform, CI/CD, build/versioning); Supabase for backend</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>AWS region(s)</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td><strong>US East (N. Virginia)</strong> – us-east-1</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>2. Auth / SSO</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>End-user auth</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Provided by Supabase Auth, with options for Google, Microsoft (Azure), Apple sign-in, and more.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Enterprise auth</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Okta plugin for enterprise browser (pre-installed, non-removable)</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Backend auth</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Supabase for auth and API usage</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Internal IdP</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td><strong>No designated IdP for all employees yet.</strong> Google Workspace for 1 person only (Adam, adam@kahana.co). Okta and Azure have been trialed but not adopted due to cost.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Secrets / key management</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Secrets stored in AWS Secrets Manager. Keys are accessed securely via Lambda functions.</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>3. Primary Data Stores</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary database</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Supabase (Postgres) – analytics, UTM tracking, HITL feedback, Mixpanel integration</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Secondary database / redundancy</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td><strong>None.</strong> There is no secondary database or redundancy.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Encryption</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Supabase provides encryption at rest; TLS in transit per SOC2 checklist</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Backup storage</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Supabase stores daily backups in regionally replicated AWS S3 (same region as database, e.g., us-east-1). <strong>Note: Free Plan does not include project backups.</strong> Pro Plan ($25/mo) includes 7-day scheduled backups. Retention by plan: 7 days (Pro), 14 days (Team), 30 days (Enterprise). Storage objects (Supabase Storage/S3 buckets) are not included in database backups and must be managed separately. Custom backups possible via <code>supabase db dump</code>.</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>4. Logging / Monitoring</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Analytics</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Mixpanel</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Backend</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Supabase</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Logging tools</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td><strong>No dedicated logging tools.</strong> Events are logged directly in Supabase tables. <a href="https://www.datadoghq.com/pricing/" target="_blank" rel="noopener noreferrer">Datadog</a> is under consideration (Free tier: 1-day metric retention, up to 5 hosts).</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Log retention</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Supabase Pro Plan includes 7-day log retention. Add Log Drains available at additional cost ($60/drain/project).</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>5. Change Management</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Code control</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>GitHub – PRs, reviews, merge history, CI. See <Link to="/ota-guide">OTA &amp; Updates Guide</Link> and <a href="https://docs.google.com/document/d/122UjwnfNoHebaF4_aww3P87HSjk7Rb_fsLxn3gZJf64/edit?tab=t.0#heading=h.a1q9qvq0777v" target="_blank" rel="noopener noreferrer">Tester Distribution &amp; OTA Update Flow</a> (onboarding auth changes, automatic updates pipeline).</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Ticketing</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td><strong>Tally.so feedback forms</strong> → Slack and Google Sheets. Sprints are created from feedback using Cursor and GitHub. Releases are generated and managed via <strong>GitHub workflows</strong> in a CI pipeline. No Jira/Linear.</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>6. Access Reviews</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Policy</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>SOC2 checklist says &quot;Quarterly (or more frequent) review of who has access to what; documented sign-off&quot;</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Actual cadence</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td><strong>Access reviews are not conducted quarterly.</strong> Process is not documented.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Evidence</strong></td>
                <td className="soc2-gap">Gap</td>
                <td>N</td>
                <td>No access review logs with sign-off</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>7. Supabase Plan Reference (Pro)</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Pro Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Price</td><td>$25 / month base</td></tr>
              <tr><td>MAU</td><td>100,000 included, then $0.00325 per MAU</td></tr>
              <tr><td>Disk</td><td>8 GB included, then $0.125 per GB</td></tr>
              <tr><td>Egress</td><td>250 GB included, then $0.09 per GB</td></tr>
              <tr><td>File storage</td><td>100 GB included, then $0.021 per GB</td></tr>
              <tr><td>Backups</td><td>Daily backups stored for 7 days</td></tr>
              <tr><td>Log retention</td><td>7 days</td></tr>
              <tr><td>Log Drains</td><td>Additional $60 per drain, per project</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>8. Other Relevant Context</h2>
        <div className="content-block">
          <ul className="soc2-bullet-list">
            <li><strong>Vendors:</strong> Supabase, AWS, Mixpanel, Stripe, Google Analytics, Looker</li>
            <li><strong>AI vendors:</strong> Google Gemini, Deepgram (DPA considerations per SOC2 checklist)</li>
            <li><strong>Enterprise:</strong> Okta SSO for enterprise browser; DPAs for enterprise customers</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>9. Semantic Search &amp; SOC2 Considerations</h2>
        <div className="content-block">
          <h3>Current Implementation</h3>
          <ul className="soc2-bullet-list">
            <li><strong>No paid API for search.</strong> Semantic search is integrated as a tool (similar to opening/closing tabs), with Google Gemini acting as the supervisor for tool routing and final output.</li>
            <li><strong>Local embedding model:</strong> <code>all-mini-L6-v2</code> loaded directly in the browser.</li>
            <li><strong>Local vectorDB:</strong> Orama (in-browser).</li>
            <li><strong>Cost:</strong> Zero for the search step; no cloud LLM required for embeddings or vector search.</li>
          </ul>
          <h3>SOC2-Relevant Aspects</h3>
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Status</th>
                <th>Documented</th>
                <th>Details</th>
                <th>Auditor Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Data locality</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>Embeddings and vector search run locally in the browser; no user data sent to a third-party search API.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Third-party search vendors</strong></td>
                <td>Current state</td>
                <td>N</td>
                <td>None for semantic search. Reduces vendor risk and DPA scope.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Local LLM for summarization</strong></td>
                <td>Planned</td>
                <td>N</td>
                <td>Considering Ollama (open-source) for web page summarization to improve search quality. No cost; keeps processing on-device.</td>
                <td></td>
              </tr>
              <tr>
                <td><strong>History retention</strong></td>
                <td>Planned</td>
                <td>N</td>
                <td>Originally planned: flat 30-day window (or user choice: 10, 15, or 30 days). Tiered retention policy under consideration for the summarization layer; storage impact to be evaluated.</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section soc2-checklist-section">
        <h2>Checklist: What You Still Need to Address</h2>
        <p className="soc2-checklist-intro">Use this checklist before finalizing SOC compliance documents and for audit readiness.</p>

        <h3>Critical Gaps (SOC auditors will ask)</h3>
        <ul className="soc2-checklist">
          <li><strong>Supabase backups</strong> – Free Plan has no backups. Consider upgrading to Pro ($25/mo) for 7-day backups, or implement custom <code>db dump</code> to your own storage.</li>
          <li><strong>Access reviews</strong> – Implement and document a cadence (quarterly or alternative). Create access review logs with sign-off.</li>
          <li><strong>Access review policy alignment</strong> – Update policy to reflect actual cadence, or change practice to match &quot;quarterly&quot; if that&apos;s the target.</li>
        </ul>

        <h3>Recommended Improvements</h3>
        <ul className="soc2-checklist">
          <li><strong>Logging/monitoring</strong> – If adopting <a href="https://www.datadoghq.com/pricing/" target="_blank" rel="noopener noreferrer">Datadog</a>, document tool, retention, and scope. If staying with Supabase tables only, document that as the current approach and any retention limits.</li>
          <li><strong>Internal IdP</strong> – Document the decision to defer Okta/Azure. Consider timeline for adopting a centralized IdP as team grows.</li>
        </ul>

        <h3>Documentation to Create/Update</h3>
        <ul className="soc2-checklist">
          <li><strong>Change Management Policy</strong> – Document the flow: Tally.so → Slack/Sheets → Cursor/GitHub sprints → GitHub workflows/CI.</li>
          <li><strong>Access Control Policy</strong> – Document current state (Google Workspace for Adam only; no org-wide IdP) and access review requirements.</li>
          <li><strong>Backup &amp; DR Policy</strong> – Document Supabase backup status (Free vs Pro), retention, and any custom backup procedures.</li>
        </ul>
      </section>

      <p className="soc2-source">Source: Compiled from data-room codebase, SOC2_TYPE2_COMPLIANCE_CHECKLIST.md, WeeklyReports, time logs, Sprints, and internal input (March 2026).</p>
    </div>
  )
}

export default SOC2GapAnalysis
