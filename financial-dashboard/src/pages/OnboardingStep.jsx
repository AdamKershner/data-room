import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ONBOARDING_STEPS } from './onboardingSteps'
import './Page.css'
import './Onboarding.css'

function StepSchedule1on1() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You schedule the meeting on the calendar link below.</p>

      <p>
        <a href="https://go.oncehub.com/AdamKershner" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link">
          📅 Schedule your 1-on-1 with Adam →
        </a>
      </p>

      <h3>FAQs</h3>
      <dl className="onboarding-faq">
        <dt>Frequency</dt>
        <dd>Meet once a week for 15 minutes.</dd>

        <dt>Agenda</dt>
        <dd>Share updates about what you're focusing on and learning about.</dd>

        <dt>Ask questions</dt>
        <dd>Ask questions and get reports from Adam. If there's anything you want to know, you can ask.</dd>
      </dl>

      <div className="onboarding-note">
        <p><strong>Recurring meeting:</strong> When you schedule via the calendar link, Adam will update it to make it a recurring meeting.</p>
      </div>

      <div className="onboarding-note onboarding-note-important">
        <p><strong>If you cannot attend:</strong> Please let Adam know in advance on Slack or via email.</p>
      </div>
    </div>
  )
}

function downloadTimeLogICS() {
  const now = new Date()
  const day = now.getDay()
  const daysUntilFriday = (5 - day + 7) % 7
  const nextFriday = new Date(now)
  nextFriday.setDate(now.getDate() + (daysUntilFriday === 0 && now.getHours() >= 16 ? 7 : daysUntilFriday))
  nextFriday.setHours(16, 0, 0, 0)

  const end = new Date(nextFriday)
  end.setMinutes(10)

  const formatICSDate = (d) => {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const h = String(d.getHours()).padStart(2, '0')
    const min = String(d.getMinutes()).padStart(2, '0')
    const s = String(d.getSeconds()).padStart(2, '0')
    return `${y}${m}${day}T${h}${min}${s}`
  }

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Kahana//Time Log Reminder//EN',
    'BEGIN:VEVENT',
    `DTSTART:${formatICSDate(nextFriday)}`,
    `DTEND:${formatICSDate(end)}`,
    'RRULE:FREQ=WEEKLY;BYDAY=FR',
    'SUMMARY:Time Log - Weekly',
    'DESCRIPTION:Block 10 min to fill out the weekly time log. https://tally.so/r/w2YdzL',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'time-log-reminder.ics'
  a.click()
  URL.revokeObjectURL(url)
}

function StepCompanyRules() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've read and understood these rules and values.</p>

      <h3>Our Values</h3>
      <p className="onboarding-values-intro">At our core, we aim to improve all the time and we value:</p>
      <div className="onboarding-values-grid">
        <div className="onboarding-value-card">
          <h4>Eagerness to Learn</h4>
          <p>Embracing continuous learning and growth, staying curious, and always seeking to expand our knowledge and capabilities.</p>
        </div>
        <div className="onboarding-value-card">
          <h4>Accountability</h4>
          <p>Taking ownership of our actions and commitments, ensuring reliability and trust in everything we do.</p>
        </div>
        <div className="onboarding-value-card">
          <h4>Problem-solving Skills</h4>
          <p>Approaching challenges with creativity and determination, finding innovative solutions to complex problems.</p>
        </div>
        <div className="onboarding-value-card">
          <h4>Strong Work Ethic</h4>
          <p>Demonstrating dedication, perseverance, and commitment to excellence in everything we do.</p>
        </div>
      </div>
      <p className="onboarding-values-footer">These four principles are foundational to Kahana's philosophy.</p>

      <h3>Company Rules</h3>
      <ul className="onboarding-rules-list">
        <li>Check Slack each day Monday–Friday at least once.</li>
        <li>If a teammate DMs you on Slack, check the message and react to it (give a thumbs up) or acknowledge that you've seen it.</li>
        <li>Respond to teammates within 24 hours.</li>
        <li>If you cannot meet the minimum availability (check Slack at least once per day during 9–5 PM in your time zone), DM Adam on Slack or email him with a reason (e.g., sick, emergency). If you need personal leave, contact him the same way.</li>
        <li>Fill out the time log each Friday. <Link to="/onboarding/time-log">See the Time Log onboarding step for more details →</Link></li>
      </ul>
    </div>
  )
}

function StepTimeLog() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've filled out the Time Log and added the recurring Friday reminder to your calendar.</p>

      <p>Fill out the weekly Time Log at the end of each week on Friday by EOD. Write a detailed description of what you focused on. We don't track this because we micromanage—filling out the time log helps us with operational efficiency. Block off 5–10 minutes each Friday to do this.</p>

      <div className="onboarding-cta-row">
        <a href="https://tally.so/r/w2YdzL" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link">
          📋 Fill out the Time Log →
        </a>
        <button type="button" onClick={downloadTimeLogICS} className="onboarding-cta-button">
          📅 Add to Calendar
        </button>
      </div>
    </div>
  )
}

function StepInstallOasis() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> Oasis is installed and set as your default browser.</p>

      <p className="onboarding-install-intro">Choose your platform:</p>
      <div className="onboarding-install-columns">
        <div className="onboarding-install-column">
          <div className="onboarding-install-column-header">
            <span className="onboarding-install-icon" aria-hidden>🍎</span>
            <h3>Mac</h3>
          </div>
          <ol className="onboarding-steps-list onboarding-install-steps">
            <li>Go to <a href="https://kahana.co/installations" target="_blank" rel="noopener noreferrer">kahana.co/installations</a></li>
            <li>Create an account</li>
            <li>Verify your email to successfully finish creating an account</li>
            <li>After creating an account, go to <a href="https://kahana.co/installations" target="_blank" rel="noopener noreferrer">kahana.co/installations</a> and login</li>
            <li>Choose your Mac version (Apple Silicon or Intel), download, and install it</li>
            <li>Once the browser installs and you open it, click the yellow "chat" button in the top right corner to open the AI Assistant</li>
            <li>Click the 3 dots in the AI assistant interface to navigate to the sign in area</li>
            <li>Sign in using the same email as the account you created</li>
          </ol>
          <a href="https://kahana.co/installations" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Go to kahana.co/installations →
          </a>
        </div>
        <div className="onboarding-install-column">
          <div className="onboarding-install-column-header">
            <span className="onboarding-install-icon" aria-hidden>🪟</span>
            <h3>Windows</h3>
          </div>
          <p className="onboarding-install-windows-intro">Join the <strong>#oasis-windows</strong> Slack group for installation support.</p>
          <div className="onboarding-install-links">
            <a href="https://app.box.com/s/mt8jqjkfvo2a9k103d119c9mpu2bsbam" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
              Download Oasis for Windows →
            </a>
            <a href="https://youtu.be/bsklVy8-QxU" target="_blank" rel="noopener noreferrer" className="onboarding-cta-button onboarding-cta-button-outline">
              Watch installation video →
            </a>
          </div>
        </div>
      </div>

      <div className="onboarding-install-default-section">
        <h3>How to check if Oasis is your default browser</h3>
        <p>Go to <strong>Settings → General</strong>. Under "Startup," look for "Always check if Oasis is your default browser." Below that, you'll see either "Oasis is currently your default browser" or a prompt to set it as default.</p>
        <div className="onboarding-screenshot">
          <img src="/images/oasis-default-browser-settings.png" alt="Oasis General settings showing default browser status" />
        </div>
      </div>

      <div className="onboarding-note onboarding-note-help">
        <p><strong>Having trouble?</strong> DM Adam Kershner on Slack or email <a href="mailto:adam@kahana.co">adam@kahana.co</a>.</p>
      </div>
    </div>
  )
}

function StepUseOasis5Days() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've used Oasis for 7 days and completed the NPS survey.</p>

      <h3>Oasis Usage, Feedback & NPS Program</h3>

      <h4>Purpose</h4>
      <p>To systematically evaluate the Oasis AI Assistant through real internal usage, establish a meaningful baseline NPS score, and identify clear improvement areas using a statistically relevant internal sample.</p>

      <h4>1. Who This Is For</h4>
      <ul className="onboarding-rules-list">
        <li>All current team members</li>
      </ul>

      <h4>2. Required Actions (All Team Members)</h4>

      <div className="onboarding-nps-step">
        <strong>Step 1: Create Your Oasis Account</strong>
        <ul>
          <li>Create an Oasis account if you don't already have one</li>
          <li>Install and begin using Oasis as part of your regular browsing workflow</li>
        </ul>
        <p className="onboarding-nps-meta"><strong>Timeline:</strong> Immediate. <strong>Expectation:</strong> Use Oasis naturally for at least one full week.</p>
      </div>

      <div className="onboarding-nps-step">
        <strong>Step 2: Use the AI Assistant for 7 Days</strong>
        <p>Please actively test:</p>
        <ul>
          <li>AI Assistant commands</li>
          <li>Research, summarization, extraction, or workflow support</li>
          <li>Any friction, confusion, or standout value moments</li>
        </ul>
        <p>There is no "right" way to use it — real-world usage is the goal.</p>
      </div>

      <div className="onboarding-nps-step">
        <strong>Step 3: Log Feedback in the Feedback Tracker</strong>
        <p>After one week of usage, log structured feedback. Include: What worked well, what felt confusing or slow, where Oasis clearly saved time or improved outcomes.</p>
        <a href="https://tally.so/r/3jkNN6" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
          Log feedback in the Oasis Feedback form →
        </a>
      </div>

      <div className="onboarding-nps-step">
        <strong>Step 4: Complete the NPS Survey</strong>
        <p>Complete the internal NPS survey after your 7-day usage period.</p>
        <p>
          <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Complete the NPS Survey →
          </a>
        </p>
        <p>This will help establish: Overall product value, key drivers of satisfaction, and areas for improvement.</p>
        <p className="onboarding-nps-meta"><strong>Target sample size:</strong> 42 responses — ensures meaningful insight across roles and use cases.</p>
      </div>

      <h4>3. New Team Member Onboarding Requirement</h4>
      <p>For all new joiners: <Link to="/onboarding/install-oasis" className="onboarding-inline-link">Installing and testing Oasis</Link> is a mandatory onboarding task. Feedback + NPS completion is part of your first-week checklist.</p>

      <h4>4. Supporting Asset</h4>
      <p>Watch how the CEO uses Oasis for his own work:</p>
      <div className="onboarding-video-embed">
        <iframe
          src="https://www.youtube.com/embed/e4D1-cmBqCo"
          title="How the CEO uses Oasis for his work"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h4>5. Why This Matters</h4>
      <p>This initiative helps us:</p>
      <ul className="onboarding-rules-list">
        <li>Establish a credible internal product baseline</li>
        <li>Improve Oasis using real workflows</li>
        <li>Build a shared product intuition across the team</li>
      </ul>
    </div>
  )
}

function StepAvengerProfile() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> Your profile appears on the Avengers page after you create it, and you've browsed your teammates' profiles.</p>

      <p className="onboarding-avenger-intro">Creating a profile helps your new teammates know who you are, how you like to work and communicate. Likewise, you can learn about who others are and how they prefer to work and communicate.</p>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>1. Build your profile</strong>
          <p>Add your photo, role, working style, and communication preferences so the team can get to know you.</p>
          <a href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8?p=111798d5ce824a398e2102fe2328560d&pm=c" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Build your Avenger profile →
          </a>
        </div>

        <div className="onboarding-nps-step">
          <strong>2. Familiarize with the team</strong>
          <p>Click through your teammates' profiles to learn who they are and how they prefer to work and communicate.</p>
          <a href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            View team profiles on Kahana HQ →
          </a>
        </div>
      </div>

      <div className="onboarding-note">
        <p>Depending on the functions you select (which functions/roles you're interested in), you will receive invitations to get access to the tools listed in the <Link to="/onboarding/tools-access" className="onboarding-inline-link">Get Access to Tools</Link> section.</p>
      </div>

      <div className="onboarding-install-default-section">
        <h3>Where your profile appears</h3>
        <p>After you create your profile, it will show up on the Avengers page alongside your teammates. This is the page to reference:</p>
        <div className="onboarding-screenshot">
          <a href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8" target="_blank" rel="noopener noreferrer">
            <img src="/images/avengers-page.png" alt="Avengers page showing team member profiles in a grid" />
          </a>
        </div>
        <a href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8" target="_blank" rel="noopener noreferrer" className="onboarding-cta-button onboarding-cta-button-outline">
          Open Avengers page →
        </a>
      </div>

      <div className="onboarding-install-default-section">
        <h3>What a profile looks like</h3>
        <p>Here's Adam's Avenger profile with functions, contact info, communication preferences, feedback style, and work environment.</p>
        <div className="onboarding-screenshot">
          <a href="https://www.notion.so/kahanagroup/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8?p=26bda10abdc640fb8f34eabde298dc78&pm=c" target="_blank" rel="noopener noreferrer">
            <img src="/images/avenger-profile-example.png" alt="Adam Kershner's Avenger profile in Notion showing functions, contact info, and preferences" />
          </a>
        </div>
        <a href="https://www.notion.so/kahanagroup/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8?p=26bda10abdc640fb8f34eabde298dc78&pm=c" target="_blank" rel="noopener noreferrer" className="onboarding-cta-button onboarding-cta-button-outline">
          View Adam's profile →
        </a>
      </div>
    </div>
  )
}

const BUSINESS_PLAN_SECTIONS = [
  { path: '/', label: 'Executive Summary' },
  { path: '/q1-midpoint', label: 'Q1 Midpoint Update' },
  { path: '/problem-market', label: 'Problem, Market & Users' },
  { path: '/competitors', label: 'Competitors' },
  { path: '/b2b-strategic-narrative', label: 'B2B Strategic Narrative' },
  { path: '/b2c-strategic-narrative', label: 'B2C Strategic Narrative' },
  { path: '/product-technology', label: 'Product & Technology' },
  { path: '/business-model', label: 'Business Model & Unit Economics' },
  { path: '/go-to-market', label: 'Go-to-Market & Growth' },
  { path: '/financial-plan', label: 'Financial Plan & Sensitivity' },
  { path: '/team-execution', label: 'Team, Execution & Milestones' },
  { path: '/sprints', label: 'Sprints' },
  { path: '/weekly-reports', label: 'Weekly Reports' },
  { path: '/content-pipeline', label: 'Content Pipeline' },
]

function StepBusinessPlan() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've read all sections from Executive Summary through Content Pipeline.</p>

      <p>Reading the full Business Plan means reading all sections of this entire site. In case you didn't notice, there's a menu in the top left corner that lets you navigate between the various sections — it's more than one page. Start with Executive Summary and work through each section in order down to Weekly Reports and Content Pipeline.</p>

      <h3>Sections to read</h3>
      <ol className="onboarding-steps-list">
        {BUSINESS_PLAN_SECTIONS.map((section) => (
          <li key={section.path}>
            <Link to={section.path}>{section.label}</Link>
          </li>
        ))}
      </ol>

      <div className="onboarding-note">
        <p>After you've gone through the material, share any questions you have — I'm happy to walk through nuances and make sure we're aligned on our strategies and priorities. You can reach Adam by DM on Slack or at <a href="mailto:adam@kahana.co" className="onboarding-inline-link">adam@kahana.co</a>.</p>
      </div>
    </div>
  )
}

function StepDuolingoArticle() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You can explain what CURR (Current User Retention Rate) is.</p>

      <p>Read this Lenny's Newsletter article by Jorge Mazal (former CPO of Duolingo) on how Duolingo reignited user growth. The article covers leaderboards, push notifications, streaks, and the growth model that helped Duolingo achieve 4.5x DAU growth.</p>

      <a href="https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
        Read: How Duolingo reignited user growth →
      </a>

      <div className="onboarding-note">
        <p><strong>Focus on CURR.</strong> The article introduces several retention metrics. Pay special attention to CURR (Current User Retention Rate) — Duolingo identified it as their North Star metric because it had the biggest impact on DAU growth.</p>
      </div>

      <div className="onboarding-install-default-section">
        <h3>CURR explained with an Oasis example</h3>
        <p><strong>CURR (Current User Retention Rate):</strong> The chance a user comes back this week if they came to the product each of the past two weeks.</p>
        <p>You can think of it as: <em>If you've done X for the last two weeks, what's the chance you'll do anything in Oasis again this week?</em> We just change what "X" is:</p>
        <ul className="onboarding-rules-list">
          <li>X = "used Oasis at all" → CURR-BASIC</li>
          <li>X = "logged in" → CURR-LOGIN (20%)</li>
          <li>X = "used any AI command" → CURR-AI-COMMAND (40%)</li>
          <li>X = "used AI summarize" → CURR-AI-COMMAND-SUMMARIZE (60%)</li>
        </ul>

        <div className="onboarding-curr-clubs">
          <div className="onboarding-nps-step">
            <strong>The login club: CURR-LOGIN (20%)</strong>
            <p>If someone logged in each of the last two weeks, how likely are they to come back this week? <strong>20%.</strong></p>
          </div>

          <div className="onboarding-nps-step">
            <strong>The AI command club: CURR-AI-COMMAND (40%)</strong>
            <p>Next, look at users who used at least one AI command in each of the last two weeks. Same question — how likely are they to come back? <strong>40%.</strong> Using AI commands regularly is twice as sticky as just logging in.</p>
          </div>

          <div className="onboarding-nps-step">
            <strong>The "summarize" super-fan club: CURR-AI-COMMAND-SUMMARIZE (60%)</strong>
            <p>Finally, zoom in on users who used the summarize feature in each of the last two weeks. <strong>60%.</strong> That's 3× the login-only users and 1.5× the generic AI users. People who rely on summarization week after week are our most likely to return.</p>
          </div>
        </div>

        <p><strong>The takeaway:</strong> As X gets more specific and more value-creating, the chance of coming back goes up. That's how we identify which behaviors are real retention drivers — and where to focus onboarding, nudges, and product polish.</p>
      </div>
    </div>
  )
}

function StepInternalChannels() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've joined both Slack and Discord.</p>

      <p>We use Slack for day-to-day team communication and Discord for community, support, and product updates. Join both to stay connected.</p>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>Slack</strong>
          <p>Our primary workspace for internal communication — DMs, channels, and team coordination.</p>
          <a href="https://join.slack.com/t/kahanaworkspace/shared_invite/zt-1pdah6gwn-W6HaRPH2iy~juLOlafO2HA" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Join Kahana Slack →
          </a>
        </div>

        <div className="onboarding-nps-step">
          <strong>Discord</strong>
          <p>Community hub for support, feedback, feature updates, and connecting with the team and other Oasis users.</p>
          <a href="https://kahana.co/community" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Join Kahana Discord →
          </a>
        </div>
      </div>
    </div>
  )
}

function StepSlackPhone() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> Slack is installed on your phone and notifications are configured so you don't miss DMs or key channel messages.</p>

      <p>Install the Slack app on your phone and configure notifications to ensure you stay responsive to teammates. You should never miss a DM from a teammate or important messages in key Slack channels.</p>

      <div className="onboarding-note onboarding-note-important">
        <p><strong>Expectation:</strong> Minimum availability: check Slack and be available for online discussion (messaging on Slack, not in-person meetings) at least once per day during 9–5 PM in your time zone.</p>
      </div>

      <h3>Configure your notifications</h3>
      <ul className="onboarding-rules-list">
        <li>Enable mobile notifications for DMs and mentions</li>
        <li>Set key channels to notify you about all new messages (or at least mentions)</li>
        <li>Choose notification timing that works for you</li>
      </ul>

      <div className="onboarding-note onboarding-note-help">
        <p><strong>Pro tip:</strong> Use a notification schedule to turn off notifications during certain times (e.g., evenings, weekends). This helps you stay responsive during work hours without being interrupted when you're off.</p>
      </div>

      <a href="https://slack.com/help/articles/201355156-Configure-your-Slack-notifications" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
        Slack: Configure your notifications →
      </a>
    </div>
  )
}

const SOC2_POLICIES = [
  { name: 'Information Security Policy', description: 'Overall security framework and how we protect systems and data.' },
  { name: 'Access Control Policy', description: 'Who can access what, least privilege, onboarding/offboarding access.' },
  { name: 'Data Classification & Handling Policy', description: 'How we classify and protect user data, browse history, and AI interactions.' },
  { name: 'Incident Response Policy', description: 'What to do when a security incident or data breach occurs.' },
  { name: 'Acceptable Use Policy', description: 'Permitted use of company systems, networks, and tools.' },
  { name: 'Change Management Policy', description: 'How we implement and approve system changes and deployments.' },
  { name: 'Business Continuity & Disaster Recovery Policy', description: 'Backup, recovery, and maintaining operations during disruptions.' },
  { name: 'Vendor & Third-Party Risk Management Policy', description: 'How we evaluate and manage risks from cloud providers, AI vendors, and other third parties.' },
  { name: 'Privacy Policy', description: 'How we collect, use, and protect customer and user data.' },
  { name: 'Risk Assessment Policy', description: 'Periodic risk assessment and how we identify and mitigate risks.' },
]

function StepSoc2Compliance() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've read and acknowledged the SOC 2 policies relevant to your role.</p>

      <p>As a company handling user data and building an AI browser, we maintain SOC 2–aligned policies to protect customer data and meet enterprise security requirements. Everyone should be familiar with these policies.</p>

      <h3>Policies to review</h3>
      <ol className="onboarding-steps-list">
        {SOC2_POLICIES.map((policy, i) => (
          <li key={policy.name}>
            <strong>{policy.name}</strong> — {policy.description}
          </li>
        ))}
      </ol>

      <div className="onboarding-note">
        <p><strong>Where to find them:</strong> Policy documents are maintained in our compliance repository. Ask Adam or your manager for the current links if you don't have access yet.</p>
      </div>
    </div>
  )
}

function StepProductHunt() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've created a Product Hunt profile, added it to the team sheet, and followed everyone on the sheet.</p>

      <p>Product Hunt is a platform where people discover and share new products. It's a key channel for tech and startup audiences. Similar to Reddit, Product Hunt launches are driven by upvotes and comments from users on the platform. When we do well on Product Hunt, we gain more users, customers, and investors.</p>

      <p>We're preparing to launch Oasis on Product Hunt, targeting a launch in March 2026, followed by subsequent launches as we continue to add more features and enhancements. When our team has Product Hunt accounts, follows each other, and maintains a streak on Product Hunt, it boosts our ability to perform well and increases the likelihood our launches end up #1 each day. See our <a href="https://docs.google.com/document/d/1fbnq13Uj8n3qaCCg1BOdiQD-awjl5c2sswxWaX6oyU8/edit?pli=1&tab=t.0#heading=h.ctmy5c17lr0g" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">Product Hunt Launch campaign charter</a> for full context.</p>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>1. Create a Product Hunt profile</strong>
          <p>Create a profile on Product Hunt. Here's an example of what a profile looks like:</p>
          <a href="https://www.producthunt.com/@adamthecreator" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            View Adam's Product Hunt profile →
          </a>
        </div>

        <div className="onboarding-nps-step">
          <strong>2. Add your profile to the sheet and follow everyone</strong>
          <p>Add your Product Hunt profile to the team sheet, then follow everyone already on the sheet. Maintaining an active streak on Product Hunt (visiting and engaging regularly) helps our launches perform better.</p>
          <a href="https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Open team Product Hunt sheet →
          </a>
        </div>
      </div>
    </div>
  )
}

function StepLinkedin() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> Your LinkedIn profile lists Kahana as your current experience, you've joined #linkedin-focus-group on Slack, followed the Kahana company page, connected with Adam and turned on notifications for his posts, and you're prepared to post regularly as part of your role.</p>

      <p>Update your LinkedIn profile to reflect your role at Kahana. We also recommend preparing to post on LinkedIn frequently as part of your responsibilities — it's a key channel for reach, credibility, and growth.</p>

      <div className="onboarding-note onboarding-note-help">
        <p><strong>Full guide:</strong> See the <Link to="/linkedin-guide" className="onboarding-inline-link">LinkedIn Guide & Best Practices</Link> for complete instructions and expectations for all team members.</p>
      </div>

      <h3>Follow and connect</h3>
      <ul className="onboarding-rules-list">
        <li>Follow the <a href="https://www.linkedin.com/company/kahana-co" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">Kahana company page</a> on LinkedIn</li>
        <li>Connect with Adam, follow him, and turn on notifications for when he posts — <a href="https://www.linkedin.com/in/adam-kershner/" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">Adam Kershner</a></li>
        <li>Connect with all other team members — find their LinkedIn profile links on their <a href="https://www.notion.so/kahanagroup/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">Avenger profiles on Kahana HQ</a></li>
      </ul>
      <p>LinkedIn prioritizes reach from founders, and engaging on Adam's posts helps improve visibility for the company. Also, every now and then he may actually post something on LinkedIn that is valuable ;)</p>
      <div className="onboarding-note onboarding-note-help">
        <p><strong>How to turn on notifications:</strong> Navigate to their profile, click the bell icon (🔔) near their profile picture, and select which updates to receive. This works for both connections and companies — you'll get alerted to new posts so you never miss updates from key people in your network.</p>
      </div>

      <h3>Profile updates</h3>
      <ul className="onboarding-rules-list">
        <li>Add Kahana to your experience section</li>
        <li>Update your bio to list Kahana as your current role</li>
        <li>If you create a blog post and publish it on Kahana, add it to your Featured posts or Featured articles section</li>
      </ul>

      <h3>Posting as part of your role</h3>
      <p>We encourage you to post regularly about your work at Kahana. We also encourage you to block off 15 minutes per day to go on LinkedIn and engage on your network's posts by liking and commenting — this helps keep your network warm. Examples of what to post:</p>
      <ul className="onboarding-rules-list">
        <li>Post about what you're working on and share insights with your network</li>
        <li>Reshare blog posts and YouTube videos we create — <a href="https://kahana.co/blog" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">Kahana Blog</a>, <a href="https://www.youtube.com/@kahanaHQ" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">YouTube @kahanaHQ</a></li>
        <li>Share polls and surveys geared toward generating insights that help our product</li>
      </ul>

      <div className="onboarding-note">
        <p><strong>Recommendations:</strong> As you continue to progress at Kahana, you'll gain opportunities to receive LinkedIn recommendations from your fellow teammates.</p>
      </div>

      <div className="onboarding-note onboarding-note-help">
        <p><strong>Join the LinkedIn Focus Group:</strong> Join <strong>#linkedin-focus-group</strong> on Slack — a subgroup at Kahana dedicated to helping you improve your LinkedIn presence. If you're unsure about LinkedIn responsibilities or how to complete this onboarding step, join the channel and you'll get support and guidance to make sure you're using LinkedIn correctly.</p>
      </div>
    </div>
  )
}

const SOCIAL_MEDIA_CHANNELS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/kahana-co' },
  { name: 'X (Twitter)', url: 'https://x.com/KahanaHQ' },
  { name: 'Instagram', url: 'https://www.instagram.com/kahanahq' },
  { name: 'YouTube', url: 'https://www.youtube.com/@kahanaHQ' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@kahanahq' },
]

function StepSocialMedia() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've followed all Kahana social media channels and turned on notifications for each.</p>

      <p>Follow all Kahana social media accounts and turn on notifications so you stay up to date on company updates, product news, and content. More content coming soon — stay tuned!</p>

      <p>When we post new content, like and comment on it — engagement helps us improve in the algorithms and increases our reach.</p>

      <h3>Channels to follow</h3>
      <ul className="onboarding-steps-list">
        {SOCIAL_MEDIA_CHANNELS.map((channel) => (
          <li key={channel.name}>
            <a href={channel.url} target="_blank" rel="noopener noreferrer">{channel.name}</a>
          </li>
        ))}
      </ul>

      <div className="onboarding-note onboarding-note-help">
        <p><strong>Turn on notifications:</strong> For each platform, enable notifications so you're alerted when we post new content. On LinkedIn, use the bell icon (🔔) on our company page. On other platforms, check your account or app settings for notification preferences.</p>
      </div>
    </div>
  )
}

function StepToolsAccess() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You have access to all tools relevant to your function.</p>

      <p>Request access to the tools you need for your role. You should receive access to all relevant tools within 24 hours of completing your <Link to="/onboarding/avenger-profile" className="onboarding-inline-link">Avenger profile</Link>, where you select the functions you're interested in. If you don't see your function listed or need additional tools, ask Adam or your manager.</p>

      <div className="onboarding-note">
        <p><strong>Stay on the lookout:</strong> Based on the functions you select in the Avenger profile step, watch for email invitations to join the platforms listed below. Check your inbox (including spam) for invites within 24 hours.</p>
      </div>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>Marketing</strong>
          <ul>
            <li>Looker Reports</li>
            <li>Google Trends</li>
            <li>Google Tag Manager</li>
            <li>Figma (design system and brand guidelines)</li>
            <li>Screen Studio (for video creation)</li>
            <li>Mixpanel</li>
            <li>Marketing Specific Google Docs & Sheets</li>
            <li>Social media accounts — request access for email and password from Adam if you will be posting on social media on behalf of Kahana</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Sales</strong>
          <ul>
            <li>HubSpot</li>
            <li>Clay</li>
            <li>Warmly</li>
            <li>Apollo</li>
            <li>Wellfound</li>
            <li>Mixpanel</li>
            <li>Sales Specific Google Docs & Sheets</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Technical</strong>
          <ul>
            <li>Supabase</li>
            <li>AWS</li>
            <li>GitHub</li>
            <li>Mixpanel</li>
            <li>Technical Specific Google Docs & Sheets</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Product</strong>
          <ul>
            <li>Figma</li>
            <li>Mixpanel</li>
            <li>Product Specific Google Docs & Sheets</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Finance</strong>
          <ul>
            <li>Stripe</li>
            <li>Finance Specific Google Docs & Sheets</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function StepOnboardingSurvey() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've completed the Onboarding Experience Survey.</p>

      <p>Share your feedback so we can improve onboarding for future team members.</p>

      <div className="onboarding-survey-embed">
        <iframe
          data-tally-embed
          src="https://tally.so/embed/PdAARd"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Onboarding Experience Survey"
        />
      </div>
    </div>
  )
}

const STEP_CONTENT = {
  'schedule-1on1': StepSchedule1on1,
  'company-rules': StepCompanyRules,
  'time-log': StepTimeLog,
  'install-oasis': StepInstallOasis,
  'use-oasis-5-days': StepUseOasis5Days,
  'avenger-profile': StepAvengerProfile,
  'business-plan': StepBusinessPlan,
  'duolingo-article': StepDuolingoArticle,
  'soc2-compliance': StepSoc2Compliance,
  'internal-channels': StepInternalChannels,
  'slack-phone': StepSlackPhone,
  'producthunt': StepProductHunt,
  'linkedin': StepLinkedin,
  'social-media': StepSocialMedia,
  'tools-access': StepToolsAccess,
  'onboarding-survey': StepOnboardingSurvey,
}

function OnboardingStep() {
  const { stepId } = useParams()
  const step = ONBOARDING_STEPS.find(s => s.id === stepId)

  if (!step) {
    return (
      <div className="page onboarding-step-page">
        <div className="onboarding-back-banner">
          <Link to="/onboarding">← Back to Onboarding</Link>
        </div>
        <div className="page-header onboarding-step-header">
          <h1>Step Not Found</h1>
          <p className="page-subtitle">This onboarding step doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page onboarding-step-page" id="onboarding-step">
      <div className="onboarding-back-banner">
        <Link to="/onboarding">← Back to Onboarding</Link>
      </div>
      <div className="page-header onboarding-step-header">
        <h1>{step.label}</h1>
        <p className="page-subtitle" style={{ marginTop: '8px' }}>{step.category}</p>
      </div>

      <section className="page-section">
        <div className="content-block">
          {STEP_CONTENT[step.id] ? (
            React.createElement(STEP_CONTENT[step.id])
          ) : (
            <div className="onboarding-step-placeholder">
              <p><strong>Subpage coming soon.</strong></p>
              <p>Detailed instructions and resources for this step will be added here.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default OnboardingStep
