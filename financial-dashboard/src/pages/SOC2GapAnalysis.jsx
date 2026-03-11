import React from 'react'
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

      <section className="page-section">
        <h2>1. Production Hosting</h2>
        <div className="content-block">
          <table className="soc2-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cloud provider</strong></td>
                <td>Documented</td>
                <td>AWS (Lambda, Terraform, CI/CD, build/versioning); Supabase for backend</td>
              </tr>
              <tr>
                <td><strong>AWS region(s)</strong></td>
                <td>Documented</td>
                <td><strong>US East (N. Virginia)</strong> – us-east-1</td>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>End-user auth</strong></td>
                <td>Documented</td>
                <td>Google, Microsoft, and Apple sign-in</td>
              </tr>
              <tr>
                <td><strong>Enterprise auth</strong></td>
                <td>Documented</td>
                <td>Okta plugin for enterprise browser (pre-installed, non-removable)</td>
              </tr>
              <tr>
                <td><strong>Backend auth</strong></td>
                <td>Documented</td>
                <td>Supabase for auth and API usage</td>
              </tr>
              <tr>
                <td><strong>Internal IdP</strong></td>
                <td>Documented</td>
                <td><strong>No designated IdP for all employees yet.</strong> Google Workspace for 1 person only (Adam, adam@kahana.co). Okta and Azure have been trialed but not adopted due to cost.</td>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Primary database</strong></td>
                <td>Documented</td>
                <td>Supabase (Postgres) – analytics, UTM tracking, HITL feedback, Mixpanel integration</td>
              </tr>
              <tr>
                <td><strong>Secondary store</strong></td>
                <td>Documented</td>
                <td>DynamoDB – auth/API count (mentioned in time logs with Terraform)</td>
              </tr>
              <tr>
                <td><strong>Encryption</strong></td>
                <td>Documented</td>
                <td>Supabase provides encryption at rest; TLS in transit per SOC2 checklist</td>
              </tr>
              <tr>
                <td><strong>Backup storage</strong></td>
                <td>Documented</td>
                <td>Supabase stores daily backups in regionally replicated AWS S3 (same region as database, e.g., us-east-1). <strong>Note: Free Plan does not include project backups.</strong> Pro Plan ($25/mo) includes 7-day scheduled backups. Retention by plan: 7 days (Pro), 14 days (Team), 30 days (Enterprise). Storage objects (Supabase Storage/S3 buckets) are not included in database backups and must be managed separately. Custom backups possible via <code>supabase db dump</code>.</td>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Analytics</strong></td>
                <td>Documented</td>
                <td>Mixpanel</td>
              </tr>
              <tr>
                <td><strong>Backend</strong></td>
                <td>Documented</td>
                <td>Supabase</td>
              </tr>
              <tr>
                <td><strong>Logging tools</strong></td>
                <td>Documented</td>
                <td><strong>No dedicated logging tools.</strong> Events are logged directly in Supabase tables. Datadog is under consideration (Free tier: 1-day metric retention, up to 5 hosts).</td>
              </tr>
              <tr>
                <td><strong>Log retention</strong></td>
                <td>Documented</td>
                <td>Supabase Pro Plan includes 7-day log retention. Add Log Drains available at additional cost ($60/drain/project).</td>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Code control</strong></td>
                <td>Documented</td>
                <td>GitHub – PRs, reviews, merge history, CI</td>
              </tr>
              <tr>
                <td><strong>Ticketing</strong></td>
                <td>Documented</td>
                <td><strong>Tally.so feedback forms</strong> → Slack and Google Sheets. Sprints are created from feedback using Cursor and GitHub. Releases are generated and managed via <strong>GitHub workflows</strong> in a CI pipeline. No Jira/Linear.</td>
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
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Policy</strong></td>
                <td>Documented</td>
                <td>SOC2 checklist says &quot;Quarterly (or more frequent) review of who has access to what; documented sign-off&quot;</td>
              </tr>
              <tr>
                <td><strong>Actual cadence</strong></td>
                <td>Documented</td>
                <td><strong>Access reviews are not conducted quarterly.</strong> Process is not documented.</td>
              </tr>
              <tr>
                <td><strong>Evidence</strong></td>
                <td className="soc2-gap">Gap</td>
                <td>No access review logs with sign-off</td>
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
          <ul>
            <li><strong>Vendors:</strong> Supabase, AWS, Mixpanel, Stripe, Google Analytics, Looker</li>
            <li><strong>AI vendors:</strong> OpenAI, Anthropic (mentioned in SOC2 checklist for DPA considerations)</li>
            <li><strong>Enterprise:</strong> Okta SSO for enterprise browser; DPAs for enterprise customers</li>
          </ul>
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
          <li><strong>Logging/monitoring</strong> – If adopting Datadog, document tool, retention, and scope. If staying with Supabase tables only, document that as the current approach and any retention limits.</li>
          <li><strong>Internal IdP</strong> – Document the decision to defer Okta/Azure. Consider timeline for adopting a centralized IdP as team grows.</li>
          <li><strong>DynamoDB backups</strong> – Confirm backup strategy for DynamoDB (AWS backup, point-in-time recovery, etc.) and document.</li>
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
