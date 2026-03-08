import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import './Page.css'
import './HITL.css'

const HITL_CHART_DATA = [
  { name: 'Helpful', value: 55, color: '#2e7d32' },
  { name: "Didn't work", value: 17, color: '#d32f2f' },
  { name: 'Wrong result', value: 10, color: '#ed6c02' },
  { name: 'Confusing', value: 4, color: '#f9a825' },
  { name: 'Other', value: 8, color: '#9e9e9e' }
]

const HELPFUL_COUNT = 55
const BAD_COUNT = 17 + 10 + 4  // Didn't work + Wrong result + Confusing
const HELPFUL_RATIO = (HELPFUL_COUNT / BAD_COUNT).toFixed(2)
const HELPFUL_PCT = ((HELPFUL_COUNT / (HELPFUL_COUNT + BAD_COUNT)) * 100).toFixed(1)

function HITL() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>HITL Feedback Exports</h1>
        <p className="page-subtitle">
          Human-in-the-loop feedback from the AI assistant. Data from <code>feedback_events</code> export (Jan–Mar 2026).
        </p>
      </div>

      <section className="page-section">
        <h2>Helpful vs. Bad Ratio</h2>
        <div className="content-block">
          <div className="hitl-ratio-display">
            <div className="hitl-ratio-main">
              <span className="hitl-ratio-number">{HELPFUL_RATIO}</span>
              <span className="hitl-ratio-label">Helpful : Bad</span>
            </div>
            <p className="hitl-ratio-context">
              {HELPFUL_COUNT} helpful vs. {BAD_COUNT} bad responses ({HELPFUL_PCT}% helpful). 
              Goal: improve this ratio over time by reducing Didn&apos;t work, Wrong result, and Confusing feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Overview</h2>
        <div className="content-block">
          <p>
            The HITL export captures in-app feedback when users rate AI responses (Helpful, Didn&apos;t work, Wrong result, etc.). 
            This page summarizes findings from <strong>~95 feedback events</strong> spanning Jan 29–Mar 5, 2026.
          </p>
          <div className="hitl-stats">
            <div className="hitl-stat">
              <span className="hitl-stat-value">~95</span>
              <span className="hitl-stat-label">Total events</span>
            </div>
            <div className="hitl-stat">
              <span className="hitl-stat-value">Jan–Mar 2026</span>
              <span className="hitl-stat-label">Date range</span>
            </div>
            <div className="hitl-stat">
              <span className="hitl-stat-value">8+</span>
              <span className="hitl-stat-label">Unique users</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section hitl-summary-section">
        <h2>Top Issues (by Category)</h2>
        <div className="hitl-pie-chart-wrap">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={HITL_CHART_DATA}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {HITL_CHART_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, props) => {
                  const total = HITL_CHART_DATA.reduce((s, d) => s + d.value, 0)
                  const pct = ((value / total) * 100).toFixed(1)
                  return [`${value} responses (${pct}%)`, name]
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="content-block">
          <div className="hitl-issue-block hitl-issue-negative">
            <h4>Didn&apos;t work <span className="hitl-count">17 responses</span></h4>
            <p>Commands fail or report success but don&apos;t execute. Includes Lambda 502 errors on tab group operations.</p>
          </div>
          <div className="hitl-issue-block hitl-issue-negative">
            <h4>Wrong result <span className="hitl-count">10 responses</span></h4>
            <p>AI does the wrong thing: opens multiple tabs instead of closing, adds wrong tab to bookmark/group, opens wrong search result.</p>
          </div>
          <div className="hitl-issue-block hitl-issue-negative">
            <h4>Confusing <span className="hitl-count">4 responses</span></h4>
            <p>Opened dictionary instead of Google tab, splitview behavior unclear, AI doesn&apos;t respond as expected (e.g., &quot;Hi&quot;).</p>
          </div>
          <div className="hitl-issue-block hitl-issue-positive">
            <h4>Helpful <span className="hitl-count">55 responses</span></h4>
            <p>Most common positive category—users confirm when the AI does what they expect.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Recurring Themes</h2>
        <div className="content-block">
          <ul className="hitl-theme-list">
            <li><strong>Close vs. open confusion:</strong> &quot;Close tab&quot; opens multiple tabs instead of closing.</li>
            <li><strong>Tab group / bookmark mistakes:</strong> Wrong tab added (e.g., WhatsApp instead of YouTube); AI says it added a tab but didn&apos;t.</li>
            <li><strong>Lambda 502 errors:</strong> &quot;Add tab to group&quot; and &quot;Create tab group&quot; often fail with Lambda 502 Internal Server Error.</li>
            <li><strong>Usage limit bug:</strong> Paid user sees &quot;Usage limit reached (306/50 units)&quot; despite being on a paid plan.</li>
            <li><strong>Split view:</strong> Behavior doesn&apos;t match expectations; native splitview command not used consistently.</li>
            <li><strong>Search result selection:</strong> &quot;Open first result&quot; opens wrong result or duplicates the search page.</li>
            <li><strong>Summarization:</strong> Generic page summary instead of the specific section requested.</li>
            <li><strong>Feature requests:</strong> Email MCP, LinkedIn integration, better web search.</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Data Schema &amp; Gaps</h2>
        <div className="content-block">
          <p>
            Current export columns: <code>feedback_id</code>, <code>user_id</code>, <code>session_id</code>, <code>message_id</code>, 
            <code>reported_at</code>, <code>negative_rating</code>, <code>category</code>, <code>additional_info</code>.
          </p>
          <p><strong>Schema gaps for HITL triage:</strong></p>
          <ul className="hitl-gap-list">
            <li>No <code>user_prompt</code>, <code>ai_response</code>, or <code>tool_output</code>—hard to reproduce issues</li>
            <li>No <code>command_type</code> or <code>conversation_context</code></li>
            <li>No <code>user_plan</code>—can&apos;t segment by plan</li>
            <li><code>session_id</code> empty—can&apos;t group by session</li>
            <li>Testing rows mixed with real feedback—filter for analysis</li>
          </ul>
          <p>
            <strong>Recommendation:</strong> Enrich exports with <code>user_prompt</code>, <code>ai_response</code>, or <code>tool_output</code> 
            so engineers can reproduce and triage issues. See <Link to="/sprints">Sprint 19 (Feedback Modal &amp; HITL)</Link> for the HITL audit.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Feedback by Category</h2>
        <div className="content-block">
          <table className="hitl-category-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Helpful</td><td>Positive—AI did what user expected</td></tr>
              <tr><td>Didn&apos;t work</td><td>Command failed or didn&apos;t execute</td></tr>
              <tr><td>Wrong result</td><td>AI did something different than intended</td></tr>
              <tr><td>Confusing</td><td>Behavior or output was unclear</td></tr>
              <tr><td>Other</td><td>Miscellaneous</td></tr>
              <tr><td>Suggestion</td><td>Feature or UX improvement</td></tr>
              <tr><td>testing</td><td>Internal QA (filter for analysis)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-section">
        <h2>Data Source</h2>
        <div className="content-block">
          <p>
            Export file: <code>HITL Exports/feedback_events_rows(1).csv</code>
          </p>
        </div>
      </section>
    </div>
  )
}

export default HITL
