import React, { useState } from 'react'
import './Page.css'
import './ProjectCharter.css'

const PHASES = [
  {
    id: 'day-0',
    label: 'Day 0',
    title: 'Onboarding & First Experience',
    expected: [
      'Downloads and installs Oasis.',
      'Completes onboarding flow (or skips it).',
      'Tries 1–2 commands out of curiosity.',
      "Makes a quick mental judgment: 'Does this work? Is this for me?'",
    ],
    identification: [
      'App is launched for the first time.',
      'Onboarding sequence initiated.',
      'First AI command attempted (success or failure).',
    ],
    challenges: [
      'High cognitive friction — the user must rebuild their browser muscle memory.',
      'Value is abstract until the first command works smoothly.',
      'Installation issues or a single failed command can end the relationship immediately.',
    ],
    risks: [
      'User exits during onboarding — too long, too confusing, or skipped with no follow-up.',
      'First command fails or produces unexpected output — erodes trust instantly.',
      "User doesn't understand what makes Oasis fundamentally different from their current browser.",
    ],
    actions: [
      'Design a short, opinionated onboarding (under 3 minutes) that guarantees one successful AI command before the user can close it.',
      'Surface the most impressive, immediately useful command for their inferred use case (e.g., knowledge worker vs. casual user).',
      'Log every onboarding exit point — treat drop-off during onboarding as a product bug, not a user failure.',
      'Send a Day 0 completion confirmation (email or in-app) that recaps what they just accomplished.',
    ],
  },
  {
    id: 'day-1-7',
    label: 'Day 1–7',
    title: 'Early Exploration',
    expected: [
      'Returns to Oasis occasionally, alongside their existing browser.',
      'Tries additional commands — mostly repeating known ones or small variations.',
      'Begins to notice where Oasis is faster or easier than their old habits.',
      'May encounter edge cases where commands fail or produce unexpected results.',
    ],
    identification: [
      'Session count: 2+ sessions in Week 1.',
      'Command diversity: attempts at least 3 distinct command types.',
      'No session = early disengagement signal.',
    ],
    challenges: [
      'The user has not yet felt the compounding effect of Oasis — each command still feels like an experiment.',
      'Friction from unlearning old browser habits is at its highest.',
      'AI reliability issues (misunderstood commands, slow responses) are disproportionately damaging at this stage.',
    ],
    risks: [
      "User defaults to their old browser out of habit, not dissatisfaction — Oasis becomes the 'other' browser.",
      "No 'second win' moment — user's experience plateaus after the onboarding command.",
      'Lack of discovery means the user never learns the commands most relevant to their workflow.',
    ],
    actions: [
      'Trigger a Day 2 in-app tip introducing one non-obvious command relevant to their usage pattern.',
      "Send a Week 1 'what others are doing' email showing common high-value use cases.",
      'Monitor AI reliability daily during this phase — a >10% command failure rate should trigger an immediate eng review.',
      "Surface a 'Discover Commands' module in the UI, personalized to recent browsing context.",
    ],
  },
  {
    id: 'day-7-14',
    label: 'Day 7–14',
    title: 'Value Confirmation',
    expected: [
      'Begins using Oasis as their primary browser for specific task types (e.g., research, project management).',
      "Has 2–3 'aha' moments where Oasis is meaningfully faster than alternatives.",
      'Starts to build a small personal command vocabulary they use repeatedly.',
    ],
    identification: [
      'Daily active use on at least 5 of 14 days.',
      'Repeat usage of the same 2–3 commands — indicates habit seeds forming.',
      'Positive qualitative signal (in-app rating, NPS, or support contact with positive framing).',
    ],
    challenges: [
      "User needs to connect Oasis to their actual job or life workflow — not just see it as a cool demo.",
      'Without a visible productivity gain, the user will rationalize returning to their old browser.',
    ],
    risks: [
      'User is active but shallow — using only one or two commands, not integrated into real work.',
      "User has unresolved friction points (e.g., a command that never works) that haven't been surfaced.",
    ],
    actions: [
      "Trigger a 'Your Oasis Week in Review' — show the user how many actions they automated, framed as time saved.",
      "Prompt users who haven't tried voice commands to do so with a low-friction in-app nudge.",
      'Flag users with zero repeat commands for proactive customer success outreach.',
      "Run a lightweight in-app survey: 'What kind of work do you mainly use Oasis for?' — use to personalize future nudges.",
    ],
  },
  {
    id: 'day-14-30',
    label: 'Day 14–30',
    title: 'Habit Formation',
    expected: [
      'Oasis is now the default browser — user would feel the absence of it.',
      'Commands are used without deliberate thought; they have become reflex.',
      'User begins to notice and report edge cases — a sign of genuine engagement and ownership.',
      'May organically share Oasis with a colleague or friend.',
    ],
    identification: [
      'Daily or near-daily active use.',
      'Command usage is consistent across sessions — not just spike usage.',
      'User-initiated contact (support, feedback, feature request) — strong engagement signal.',
    ],
    challenges: [
      "Habit formation requires consistency — any multi-day gap in this window can break the streak and reset the user's mental model.",
      'The product must continue delivering new value; users who have mastered their small command set may plateau.',
    ],
    risks: [
      'A significant product bug or regression during this window can break a forming habit permanently.',
      "User's workflow changes (new job, new project) and they don't discover the relevant Oasis commands for the new context.",
    ],
    actions: [
      "Introduce 'Power User' features — tab groups, window state management, advanced voice commands — to expand the user's command surface.",
      'Implement a subtle re-engagement nudge if a user misses 3 consecutive days.',
      'Start collecting NPS at Day 21 — users in habit formation are most likely to give honest, actionable scores.',
      "Create a referral hook tied to a workflow win: 'Share this tab setup with a teammate.'",
    ],
  },
  {
    id: 'day-30-60',
    label: 'Day 30–60',
    title: 'Engagement Deepening',
    expected: [
      'Oasis is the default browser without exception.',
      'User explores advanced features unprompted (split view, cross-window organization, project switching).',
      "User has a clear mental model of Oasis's strengths and works around its current limitations rather than abandoning it.",
      "Feedback becomes specific and constructive — 'I wish X worked like Y' rather than 'this doesn't work.'",
    ],
    identification: [
      '7-day rolling active use consistently above 5 days.',
      'Advanced feature adoption: split view, multi-window management, tab groups used.',
      'Feature requests submitted — a strong leading indicator of long-term retention.',
    ],
    challenges: [
      'Keeping the product fresh for power users without introducing instability for newer users.',
      'Users in this phase often have high expectations — unmet requests can turn advocates into detractors.',
    ],
    risks: [
      "Power users who don't see their requested features ship may become vocal detractors.",
      "Users who have mastered current features but haven't been introduced to advanced ones may plateau and churn.",
    ],
    actions: [
      "Conduct 30-minute user interviews with engaged users — these are the product team's most valuable signal.",
      "Introduce a 'What's New' in-app digest every two weeks to keep power users discovering new capabilities.",
      'Create a closed beta / early access channel for Day 30+ users to test new features.',
      'Begin tracking feature request patterns to inform the roadmap — retention and product development should be tightly linked at this stage.',
    ],
  },
  {
    id: 'day-60-90',
    label: 'Day 60–90',
    title: 'Retention & Expansion',
    expected: [
      "Oasis is deeply embedded in the user's daily workflow — switching costs feel real.",
      'User actively evangelizes: recommends to peers, shares workflows, creates informal case studies.',
      "Has strong opinions about what Oasis should be — invested in the product's direction.",
      'May be interested in team or organizational use cases.',
    ],
    identification: [
      '30-day active use rate above 80%.',
      'Referral activity: shared Oasis with at least one other person.',
      "Qualitative signal: described Oasis as 'my browser' or 'I couldn't go back.'",
    ],
    challenges: [
      'Sustaining momentum when the novelty of the product has worn off.',
      'Translating individual power users into team or organizational adoption.',
    ],
    risks: [
      "A competitor launches a similar feature and the user hasn't been reinforced on Oasis's unique strengths.",
      'Organizational friction (IT restrictions, team adoption barriers) prevents expansion.',
    ],
    actions: [
      'Launch a formal advocacy program: case study interviews, referral incentives, beta access perks.',
      'Introduce team-level features and pricing for users who are in professional contexts.',
      'Conduct a Day 90 retention audit: for every user who churned between Day 60–90, identify the last command they ran and last session context.',
      'Begin preparing cohort-level retention reports for the founding team — this data becomes the foundation for scaling beyond 2,000 users.',
    ],
  },
]

const CS_SCENARIOS = [
  {
    id: 's1',
    title: 'Scenario 1: Day 0 Failure — User Did Not Complete Onboarding',
    actions: [
      "Within 2 hours: trigger an automated in-app prompt — 'Looks like you didn't finish setup. Your first command is waiting.'",
      "Within 24 hours: send a personal-feeling email from a team member, not a no-reply address, with a direct link back to the first command.",
      "Offer a live setup session (Calendly link) for users who still haven't returned after 48 hours.",
      'Log all Day 0 failures by exit point and review weekly — if >20% exit at the same step, treat it as a product bug.',
    ],
  },
  {
    id: 's2',
    title: 'Scenario 2: Week 1 No Return — Installed But Went Dark',
    actions: [
      "Day 3: send an educational email — 'One command that takes 30 seconds and saves you 5 minutes every day.'",
      'Day 5: send a short video showing a real workflow (screen recording, under 60 seconds).',
      "Day 7: final reach-out with a direct question: 'What got in the way? One sentence reply welcomed.'",
      'After Day 7 with no response: move to a low-frequency nurture sequence (monthly) and flag for qualitative churn analysis.',
    ],
  },
  {
    id: 's3',
    title: 'Scenario 3: Early Drop-off — Active Then Stopped (Days 7–30)',
    actions: [
      'Identify the last command the user ran and the session context before drop-off.',
      'Send a personalized re-engagement message referencing their specific usage pattern.',
      "Offer a 15-minute call with a team member — frame it as a feedback session, not a sales call.",
      "Analyze drop-off patterns across the cohort: if >30% drop after the same command type, investigate that command's reliability.",
    ],
  },
  {
    id: 's4',
    title: 'Scenario 4: Active Users — Reinforcing and Expanding Value',
    actions: [
      "Send bi-weekly 'power tips' tailored to their command history — not generic feature announcements.",
      "Surface adjacent use cases in-product: 'Users like you also use Oasis for...'",
      'Invite to user research sessions and beta programs — recognition drives loyalty.',
      'Celebrate milestones: Day 30 active streak, 100th command, first voice command used.',
    ],
  },
  {
    id: 's5',
    title: 'Scenario 5: Win-Back — Churned After Day 30',
    actions: [
      "Wait 2 weeks before attempting win-back — don't be desperate.",
      "Lead with what has changed: new features, fixed issues, performance improvements.",
      "Offer a 'fresh start' — optionally reset their workspace state so they can begin cleanly.",
      'If no re-engagement after two win-back attempts: close the loop with a short exit survey and add to long-term re-engagement list.',
    ],
  },
]

const RETENTION_METRICS = [
  { metric: 'Day 1 Retention', target: '>50%', notes: 'Returned within 24 hours of install' },
  { metric: 'Day 7 Retention', target: '>35%', notes: 'Active at least once in Days 2–7' },
  { metric: 'Day 30 Retention', target: '>20%', notes: 'Active on 5+ of Days 8–30' },
  { metric: 'Day 90 Retention', target: '>12%', notes: 'Active on 15+ of Days 31–90' },
  { metric: 'Onboarding Completion', target: '>70%', notes: 'Completed first command during onboarding' },
  { metric: 'AI Command Reliability', target: '>90%', notes: 'Commands interpreted and executed correctly' },
  { metric: 'NPS (Day 21)', target: '>40', notes: 'Leading indicator of long-term retention' },
]

const MIXPANEL_EVENTS = [
  'oasis_install_complete',
  'onboarding_step_viewed',
  'onboarding_step_completed',
  'onboarding_exited',
  'first_ai_command_attempted',
  'first_ai_command_success',
  'first_ai_command_failure',
  'ai_command_attempted',
  'ai_command_success',
  'ai_command_failure',
  'ai_command_type',
  'voice_command_first_use',
  'session_started',
  'session_ended',
  'session_duration_seconds',
  'tab_group_created',
  'split_view_opened',
  'feature_request_submitted',
  'nps_response_received',
  'referral_link_shared',
]

const RISKS = [
  {
    risk: 'AI command reliability below 90%',
    severity: 'Critical',
    mitigation: 'Daily reliability monitoring; automatic alert if failure rate exceeds threshold; dedicated eng sprint to fix top failing command types',
  },
  {
    risk: 'Onboarding completion below 50%',
    severity: 'High',
    mitigation: 'A/B test onboarding flow length; add skip-with-consequence UX; exit interview pop-up on abandon',
  },
  {
    risk: 'Lifecycle actions not executed due to bandwidth',
    severity: 'High',
    mitigation: 'Automate all Day 0–7 actions; human CS intervention reserved for Days 14+',
  },
  {
    risk: 'Tracking gaps — events not firing correctly',
    severity: 'High',
    mitigation: 'QA all Mixpanel events in staging before first user cohort; weekly data quality checks',
  },
  {
    risk: 'User feedback not actioned in time',
    severity: 'Medium',
    mitigation: 'Weekly retention review with CS + Product; feature request triage SLA of 5 business days',
  },
  {
    risk: 'Competitor introduces similar product',
    severity: 'Medium',
    mitigation: 'Accelerate power user features; double down on differentiated UX (voice, context-awareness)',
  },
]

const NEXT_STEPS = [
  { week: 'Week 1', action: 'Instrument all Mixpanel events listed in Section 5.2 and QA in staging.' },
  { week: 'Week 1', action: 'Finalize onboarding flow — ensure first-command guarantee is built in.' },
  { week: 'Week 2', action: 'Configure automated lifecycle triggers for Day 0, Day 3, Day 7 scenarios.' },
  { week: 'Week 2', action: 'Establish weekly retention review cadence: CS + Product + Data.' },
  { week: 'Week 3', action: 'Recruit first 50 users for live onboarding observation sessions.' },
  { week: 'Week 4', action: 'Publish cohort-level retention dashboard to Mixpanel.' },
  { week: 'Ongoing', action: 'Review and update this charter at each 30-day cohort milestone.' },
]

const AI_CAPABILITIES = [
  {
    capability: 'Text Commands',
    provider: 'Gemini',
    examples: '"Open new window", "Organize tabs by domain", "Switch to project X"',
  },
  {
    capability: 'Voice Commands',
    provider: 'Deepgram',
    examples: '"Close all tabs", "Create tab group", "Open tabs 3 and 4 in split view"',
  },
  {
    capability: 'Tab & Window Mgmt',
    provider: 'Native + AI',
    examples: 'Intelligent grouping, bulk actions, split-view layouts, state restoration',
  },
]

const SEVERITY_COLORS = {
  Critical: 'charter-severity-critical',
  High: 'charter-severity-high',
  Medium: 'charter-severity-medium',
}

function PhaseCard({ phase }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`charter-phase-card ${expanded ? 'expanded' : ''}`}>
      <button
        className="charter-phase-header"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span className="charter-phase-label">{phase.label}</span>
        <span className="charter-phase-title">{phase.title}</span>
        <span className="charter-phase-toggle">{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div className="charter-phase-body">
          <div className="charter-phase-grid">
            <div className="charter-phase-section charter-phase-section--expected">
              <h4 className="charter-phase-section-title">Expected Behavior</h4>
              <ul className="charter-phase-list">
                {phase.expected.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="charter-phase-section charter-phase-section--identification">
              <h4 className="charter-phase-section-title">Identification</h4>
              <ul className="charter-phase-list">
                {phase.identification.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="charter-phase-section charter-phase-section--challenges">
              <h4 className="charter-phase-section-title">Key Challenges</h4>
              <ul className="charter-phase-list">
                {phase.challenges.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            <div className="charter-phase-section charter-phase-section--risks">
              <h4 className="charter-phase-section-title">Risks</h4>
              <ul className="charter-phase-list">
                {phase.risks.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="charter-phase-section charter-phase-section--actions">
            <h4 className="charter-phase-section-title">Proposed Actions</h4>
            <ul className="charter-phase-list charter-phase-list--actions">
              {phase.actions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectCharter() {
  return (
    <div className="page" id="project-charter">
      <div className="page-header">
        <h1>Project Charter</h1>
        <p className="page-subtitle">
          Oasis AI Browser — Early User Lifecycle Strategy
        </p>
        <div className="charter-meta-pills">
          <span className="charter-meta-pill">Phase: First 2,000 Users</span>
          <span className="charter-meta-pill">v1.0 · Q2 2025</span>
          <span className="charter-meta-pill charter-meta-pill--active">Active</span>
          <span className="charter-meta-pill charter-meta-pill--conf">Kahana · Confidential</span>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="page-section">
        <h2>1. Introduction</h2>

        <div className="charter-subsection">
          <h3 className="charter-h3">1.1 About Oasis</h3>
          <p className="content-block">
            Oasis is an AI-native browser built on Firefox by Kahana. It integrates an AI assistant
            directly into the browsing experience, enabling users to control and organize their browser
            state entirely through natural language — both typed and spoken. Rather than layering AI on
            top of a traditional browser, Oasis reimagines the browser as an intelligent workspace where
            the AI understands context, reduces cognitive load, and acts as a proactive productivity partner.
          </p>
        </div>

        <div className="charter-subsection">
          <h3 className="charter-h3">1.2 The Core Problem</h3>
          <p className="content-block">
            As Oasis prepares to onboard its first 2,000 users, the team faces a critical and common
            early-stage challenge: user loss that happens quietly, without signals. Without a structured
            view of how user behavior is expected to evolve after onboarding, it is impossible to
            distinguish between users who are genuinely exploring the product, those who are struggling
            silently, and those who have already decided to disengage.
          </p>
          <p className="content-block">
            This ambiguity leads to reactive, uncoordinated responses — or worse, no response at all —
            resulting in avoidable churn and missed opportunities to reinforce the product's value at the
            moments that matter most.
          </p>
        </div>

        <div className="charter-subsection">
          <h3 className="charter-h3">1.3 Strategic Objective</h3>
          <p className="content-block">
            This charter defines a structured, proactive user lifecycle framework that maps expected user
            behavior from the moment of installation through the first 90 days. For each phase, it
            identifies: what success looks like, what failure signals to watch for, what the key risks
            are, and what specific actions the team should take. The goal is to shift retention from a
            lagging metric into a managed progression — treating each phase as a milestone in value
            realization.
          </p>
          <div className="charter-definition-box">
            <h4 className="charter-definition-title">Success Definition</h4>
            <ul className="charter-definition-list">
              <li>A retained user at Day 90 is one who has made Oasis their default browser and uses AI commands as a natural part of their daily workflow.</li>
              <li>Retention is not a single event — it is the cumulative result of value delivered at each phase.</li>
              <li>Early drop-off is expected; the framework's job is to ensure every drop-off is understood and actioned.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Product & Technical Context */}
      <section className="page-section">
        <h2>2. Product & Technical Context</h2>

        <div className="charter-subsection">
          <h3 className="charter-h3">2.1 Architecture</h3>
          <p className="content-block">
            Oasis is built on Firefox, which provides a stable, privacy-respecting foundation. A
            React-based AI assistant interface is layered on top, supported by a scalable AWS
            infrastructure (Lambda, EC2, Secrets Manager) with a baseline cost of approximately
            $15/month plus variable usage.
          </p>
        </div>

        <div className="charter-subsection">
          <h3 className="charter-h3">2.2 AI Capabilities</h3>
          <div className="charter-table-wrap">
            <table className="charter-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Provider</th>
                  <th>Example Commands</th>
                </tr>
              </thead>
              <tbody>
                {AI_CAPABILITIES.map((row) => (
                  <tr key={row.capability}>
                    <td className="charter-td-bold">{row.capability}</td>
                    <td>
                      <span className="charter-provider-badge">{row.provider}</span>
                    </td>
                    <td className="charter-td-examples">{row.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="charter-subsection">
          <h3 className="charter-h3">2.3 Interaction Design Philosophy</h3>
          <p className="content-block">
            Oasis uses casual, natural language rather than rigid command syntax. The AI is designed to
            reduce cognitive load — it understands the context of knowledge work, not just surface-level
            browser operations. This distinction is critical for lifecycle strategy: users need to
            internalize that Oasis is a <strong>thinking tool</strong>, not a shortcut launcher.
          </p>
        </div>
      </section>

      {/* Section 3: User Journey Framework */}
      <section className="page-section">
        <h2>3. User Journey Framework: Day 0 to Day 90</h2>
        <p className="charter-section-intro">
          The lifecycle is divided into six time-based phases. Each phase defines expected behaviors,
          identification criteria, key challenges, risks, and prescribed actions. The framework treats
          retention as a progression of value realization rather than a binary active/inactive state.
          Click any phase to expand.
        </p>

        <div className="charter-phases">
          {PHASES.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </section>

      {/* Section 4: Customer Success & Response Framework */}
      <section className="page-section">
        <h2>4. Customer Success & Response Framework</h2>
        <p className="charter-section-intro">
          The following scenarios define how the team should respond to users based on their lifecycle
          status. Each response is designed to be targeted, timely, and proportionate — not a generic
          drip campaign.
        </p>

        <div className="charter-scenarios">
          {CS_SCENARIOS.map((scenario) => (
            <div key={scenario.id} className="charter-scenario-card">
              <h3 className="charter-scenario-title">{scenario.title}</h3>
              <ul className="charter-scenario-list">
                {scenario.actions.map((action, i) => (
                  <li key={i}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Measurement & Tracking */}
      <section className="page-section">
        <h2>5. Measurement & Tracking</h2>

        <div className="charter-subsection">
          <h3 className="charter-h3">5.1 Core Retention Metrics</h3>
          <div className="charter-table-wrap">
            <table className="charter-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Target</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {RETENTION_METRICS.map((row) => (
                  <tr key={row.metric}>
                    <td className="charter-td-bold">{row.metric}</td>
                    <td>
                      <span className="charter-target-badge">{row.target}</span>
                    </td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="charter-subsection">
          <h3 className="charter-h3">5.2 Mixpanel Event Tracking Backlog</h3>
          <p className="content-block">
            The following events are required to support lifecycle monitoring. These should be
            implemented before the first 2,000-user cohort is onboarded.
          </p>
          <div className="charter-events-grid">
            {MIXPANEL_EVENTS.map((event) => (
              <code key={event} className="charter-event-tag">{event}</code>
            ))}
          </div>
          <div className="charter-note">
            <p><strong>Implementation Note</strong></p>
            <ul>
              <li>All events should include: <code>user_id</code>, <code>session_id</code>, <code>timestamp</code>, <code>oasis_version</code>, <code>os_platform</code>.</li>
              <li>AI command events should additionally log: <code>command_text</code> (anonymized), <code>command_type</code>, <code>latency_ms</code>, <code>success</code> (bool), <code>ai_provider</code>.</li>
              <li>Link the Mixpanel event spec to this charter as Appendix A for engineering handoff.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Risks & Mitigations */}
      <section className="page-section">
        <h2>6. Risks & Mitigations</h2>
        <div className="charter-table-wrap">
          <table className="charter-table charter-table--risks">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Severity</th>
                <th>Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {RISKS.map((row) => (
                <tr key={row.risk}>
                  <td className="charter-td-bold">{row.risk}</td>
                  <td>
                    <span className={`charter-severity-badge ${SEVERITY_COLORS[row.severity]}`}>
                      {row.severity}
                    </span>
                  </td>
                  <td>{row.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 7: Immediate Next Steps */}
      <section className="page-section">
        <h2>7. Immediate Next Steps</h2>
        <p className="charter-section-intro">
          The following actions should be completed before the first 2,000-user cohort begins onboarding:
        </p>
        <div className="charter-table-wrap">
          <table className="charter-table">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>Timeline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {NEXT_STEPS.map((row, i) => (
                <tr key={i}>
                  <td>
                    <span className={`charter-week-badge ${row.week === 'Ongoing' ? 'charter-week-badge--ongoing' : ''}`}>
                      {row.week}
                    </span>
                  </td>
                  <td>{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="charter-footer-note">
          End of Document — Oasis Early User Lifecycle Strategy v1.0
        </div>
      </section>
    </div>
  )
}

export default ProjectCharter
