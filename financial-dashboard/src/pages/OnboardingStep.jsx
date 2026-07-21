import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ONBOARDING_STEPS } from './onboardingSteps'
import { KAHANA_PLATFORM_URL, KAHANA_EXPLORE_URL } from '../data/kahanaPlatformSections'
import { KAHANA_CONTACT_EMAIL, LINEAR_WORKSPACE_URL, SLACK_INVITE_URL, TIME_LOG_TALLY_URL, ADAM_SOCIALS_URL } from '../constants/kahanaSite'
import { CHARTER_KPIS, TIME_LOG_RITUAL } from '../data/charterKpis'
import { PM_LIFECYCLE_RESOURCES, PM_LIFECYCLE_STEPS } from '../data/operatingSystemSections'
import { formatCardTitle } from '../utils/formatCardTitle'
import './Page.css'
import './Onboarding.css'

function StepSchedule1on1() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've scheduled the biweekly 1-on-1 meeting with Adam.</p>

      <p>It's mandatory to schedule the meeting. This creates a 15-minute block on your and Adam's calendars, serving as a reminder to check in every 2 weeks. At that time, you can either join the meeting or message over Slack — it's just about connecting at least once every 2 weeks.</p>

      <p>
        <a href="https://go.oncehub.com/AdamKershner" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link">
          📅 Schedule your biweekly 1-on-1 with Adam →
        </a>
      </p>

      <h3>FAQs</h3>
      <dl className="onboarding-faq">
        <dt>Frequency</dt>
        <dd>Every 2 weeks. The scheduled 15-minute block is a reminder — you can join the meeting or check in over Slack at that time.</dd>

        <dt>Agenda</dt>
        <dd>Share updates about what you're focusing on and learning about.</dd>

        <dt>Ask questions</dt>
        <dd>Ask questions and get reports from Adam. If there's anything you want to know, you can ask.</dd>
      </dl>

      <div className="onboarding-note">
        <p><strong>Recurring meeting:</strong> When you schedule via the calendar link, Adam will update it to make it a recurring biweekly meeting.</p>
      </div>

      <div className="onboarding-note onboarding-note-important">
        <p><strong>If you cannot attend a scheduled meeting:</strong> Please let Adam know in advance on Slack.</p>
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
    `DESCRIPTION:Block 10 min to fill out the weekly time log. ${TIME_LOG_TALLY_URL}`,
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
        <li>
          Fill out the <strong>weekly Time Log every Friday by EOD</strong> — supports compliance, accurate{' '}
          <Link to="/weekly-reports">Weekly Reports</Link>, and progress against the{' '}
          <Link to="/project-charter">Scaling Kahana charter</Link>.{' '}
          <Link to="/onboarding/time-log">See the Time Log onboarding step →</Link>
        </li>
      </ul>
    </div>
  )
}

function StepTimeLog() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve submitted your <strong>first</strong> Time Log entry{' '}
        <em>and</em> added a recurring Friday calendar reminder. This repeats <strong>every week</strong> — not
        a one-time onboarding task.
      </p>

      <h3>Why we do this</h3>
      <ul className="onboarding-rules-list">
        {TIME_LOG_RITUAL.why.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>When &amp; how long</h3>
      <p>
        <strong>{TIME_LOG_RITUAL.when}.</strong> {TIME_LOG_RITUAL.duration}.
      </p>

      <h3>What to write</h3>
      <p>{TIME_LOG_RITUAL.whatToWrite}</p>
      <p>Charter KPIs to reference when relevant:</p>
      <ul className="onboarding-rules-list">
        {CHARTER_KPIS.map((kpi) => (
          <li key={kpi.id}>
            <strong>{kpi.metric}</strong> — {kpi.definition}
          </li>
        ))}
      </ul>

      <div className="onboarding-cta-row">
        <a href={TIME_LOG_TALLY_URL} target="_blank" rel="noopener noreferrer" className="onboarding-cta-link">
          📋 Fill out the Time Log →
        </a>
        <button type="button" onClick={downloadTimeLogICS} className="onboarding-cta-button">
          📅 Add recurring Friday reminder
        </button>
      </div>

      <h3>See also</h3>
      <ul className="onboarding-rules-list">
        <li>
          <Link to="/weekly-reports">Weekly Reports</Link> — synthesized from time log submissions each week
        </li>
        <li>
          <Link to="/project-charter">Project Charter — Scaling Kahana</Link> — org KPIs and creator pipeline
        </li>
        <li>
          <Link to="/operating-system">Operating System</Link> — Linear + Slack rhythms
        </li>
      </ul>
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
            <li>Go to <a href="https://kahana.io/installations" target="_blank" rel="noopener noreferrer">kahana.io/installations</a></li>
            <li>Create an account</li>
            <li>Verify your email to successfully finish creating an account</li>
            <li>After creating an account, go to <a href="https://kahana.io/installations" target="_blank" rel="noopener noreferrer">kahana.io/installations</a> and login</li>
            <li>Choose your Mac version (Apple Silicon or Intel), download, and install it</li>
            <li>Once the browser installs and you open it, click the yellow "chat" button in the top right corner to open the AI Assistant</li>
            <li>Click the 3 dots in the AI assistant interface to navigate to the sign in area</li>
            <li>Sign in using the same email as the account you created</li>
          </ol>
          <a href="https://kahana.io/installations" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Go to kahana.io/installations →
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
        <p><strong>Having trouble?</strong> DM Adam Kershner on Slack or email <a href={`mailto:${KAHANA_CONTACT_EMAIL}`}>{KAHANA_CONTACT_EMAIL}</a>.</p>
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
          <a href="https://kahana.io/oasis-feedback-survey" target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
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
        <p>
          After you complete onboarding (Day 5), you&apos;ll request tool access by DMing Adam on Slack — see{' '}
          <Link to="/onboarding/tools-access" className="onboarding-inline-link">
            Get access to tools for your role
          </Link>
          . Select your functions here so Adam knows which platforms to provision.
        </p>
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

function StepKnowledgeBaseCoreBusiness() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve gone into depth in the Knowledge base—reading, skimming, and connecting
        material across functions—so you can explain Kahana&apos;s core business at a credible level for your role.
      </p>

      <p>
        This step is not a quick tour. The goal is to <strong>understand the core business</strong> by working through the
        information in the{' '}
        <Link to="/knowledge-base" className="onboarding-inline-link">
          Knowledge base
        </Link>
        : documents, narratives, and process-oriented pages covering <strong>sales, marketing, finance, product</strong>,
        and more—all of the key business functions we reference when making decisions. Use category filters and search to
        find what matters most to you, then branch into linked pages until the story clicks.
      </p>

      <p>
        After you&apos;ve done that work, you should have a <strong>strong foundation</strong> in how Kahana operates as
        a business—not only what we build, but how we go to market, model revenue, and prioritize on the product side.
      </p>

      <p>
        The table of contents still holds top-level entry points (Executive Summary, PMF+NPS data, Sprints, Project
        Charter, etc.). The Knowledge base is where most deep-dive reference pages live.
      </p>

      <div className="onboarding-cta-row">
        <Link to="/knowledge-base" className="onboarding-cta-link">
          Open Knowledge base →
        </Link>
      </div>

      <p>
        The Kahana platform has its own onboarding step — see{' '}
        <Link to="/onboarding/learn-kahana" className="onboarding-inline-link">
          Learn about the Kahana platform
        </Link>{' '}
        on Day 3.
      </p>

      <div className="onboarding-note">
        <p>
          When you&apos;re ready, share questions or gaps — I&apos;m happy to walk through nuances and align on strategy.
          Reach Adam by DM on Slack or at{' '}
          <a href={`mailto:${KAHANA_CONTACT_EMAIL}`} className="onboarding-inline-link">{KAHANA_CONTACT_EMAIL}</a>.
        </p>
      </div>
    </div>
  )
}

function StepLearnKahana() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You can explain Kahana&apos;s library vision, who it serves, how we earn
        (Growth SaaS + 5% GMV), and our women-first GTM motion.
      </p>

      <p>
        <strong>Kahana</strong> aspires to be like Wan Shi Tong&apos;s Library — a mesmerizing place to discover
        curated digital knowledge from experts worldwide. The platform lives at{' '}
        <a href={KAHANA_PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
          app.kahana.io
        </a>
        . Formerly Curio. Oasis Browser is optional for work — see{' '}
        <Link to="/knowledge-base">Knowledge base → Oasis (Archive)</Link>.
      </p>

      <p>
        <strong>North star:</strong> Make Kahana a beloved place to discover curated human knowledge — where
        anyone could spend an eternity exploring.
      </p>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>Traction</strong>
          <ul>
            <li>6,500+ registered users</li>
            <li>~$300/mo Growth MRR ($9.99/mo tier)</li>
            <li>5% take rate on hub sales (spiky when creators monetize)</li>
          </ul>
        </div>
        <div className="onboarding-nps-step">
          <strong>GTM priority</strong>
          <ul>
            <li>Discover, filter, invite women experts and creators first</li>
            <li>Showcase their hubs on Explore and profiles</li>
          </ul>
        </div>
        <div className="onboarding-nps-step">
          <strong>Core surfaces</strong>
          <ul>
            <li>
              <strong>Explore</strong> — public marketplace at app.kahana.io/explore
            </li>
            <li>
              <strong>Hub</strong> — curated digital product container
            </li>
            <li>
              <strong>Profile</strong> — creator storefront
            </li>
          </ul>
        </div>
      </div>

      <p>
        Read the platform overview in this data room:{' '}
        <Link to="/kahana" className="onboarding-inline-link">
          Kahana Platform Overview
        </Link>
        . For the high-level strategic story (why Kahana, why now), see{' '}
        <Link to="/kahana-narrative" className="onboarding-inline-link">
          Kahana Story
        </Link>
        . For what engineering is focused on technically, see{' '}
        <Link to="/technical-roadmap" className="onboarding-inline-link">
          Technical Roadmap
        </Link>{' '}
        (Security, Trust, Algorithm). For who Kahana competes with in the creator economy, see{' '}
        <Link to="/kahana-competitors" className="onboarding-inline-link">
          Competitive Landscape
        </Link>
        .
      </p>

      <div className="onboarding-cta-row">
        <Link to="/kahana" className="onboarding-cta-link">
          Read Kahana platform overview →
        </Link>
      </div>

      <p>
        Then browse the live product:{' '}
        <a href={KAHANA_EXPLORE_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
          app.kahana.io/explore
        </a>
        .
      </p>

      <a href={KAHANA_PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
        Open app.kahana.io →
      </a>

      <div className="onboarding-note">
        <p>Questions about Kahana? DM Adam on Slack.</p>
      </div>
    </div>
  )
}

function StepDuolingoArticle() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when (optional):</strong> You can explain what CURR (Current User Retention Rate) is.
      </p>

      <div className="onboarding-note">
        <p>
          <strong>Optional step.</strong> Not required to complete onboarding. Strongly recommended for product,
          growth, and marketing — CURR, DAUs, and retention are the same KPI family we track in the{' '}
          <Link to="/project-charter" className="onboarding-inline-link">
            Scaling Kahana charter
          </Link>
          .
        </p>
      </div>

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

        <p><strong>The takeaway:</strong> As X gets more specific and more value-creating, the chance of coming back goes up. That&apos;s how we identify which behaviors are real retention drivers — and where to focus onboarding, nudges, and product polish.</p>
        <p>
          On Kahana, CURR, DAUs, and retention are the same KPI family we track org-wide via the{' '}
          <Link to="/project-charter">Scaling Kahana charter</Link> and your weekly{' '}
          <Link to="/onboarding/time-log">Time Log</Link> (Day 5).
        </p>
      </div>
    </div>
  )
}

function StepInternalChannels() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top"><strong>✓ Done when:</strong> You've joined Kahana Slack.</p>

      <p>We use Slack for day-to-day team communication — DMs, channels, and team coordination.</p>

      <div className="onboarding-note onboarding-note-help">
        <p>
          <strong>Slack vs Linear:</strong> Use Slack for conversation and quick questions. When work needs an owner,
          priority, or deadline, create a{' '}
          <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
            Linear issue
          </a>{' '}
          — see <Link to="/operating-system" className="onboarding-inline-link">Operating System</Link> for norms.
        </p>
      </div>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>Slack</strong>
          <p>Our primary workspace for internal communication.</p>
          <a href={SLACK_INVITE_URL} target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Join Kahana Slack →
          </a>
        </div>
      </div>
    </div>
  )
}

function StepLinearAccess() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You can sign in to Linear, and you know where customer data, product
        lifecycle docs, and charter KPIs live — so you can execute PM methodology in one place.
      </p>

      <p>
        <strong>Linear</strong> is our system of record for feature requests, bugs, and sprint work. PMs
        prioritize the backlog against{' '}
        <Link to="/project-charter" className="onboarding-inline-link">
          charter KPIs
        </Link>{' '}
        (CURR, DAUs, retention, MRR, ARR, experts onboarded, hubs created, customer delight); engineers pull
        assigned issues and update status in Linear.
      </p>

      <div className="onboarding-note onboarding-note-important">
        <p>
          <strong>Need access?</strong> DM <strong>Adam Kershner</strong> on Slack after you&apos;ve scheduled
          your biweekly 1-on-1. Product and engineering must have Linear before first sprint planning.
        </p>
      </div>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>Linear workspace</strong>
          <a href={LINEAR_WORKSPACE_URL} target="_blank" rel="noopener noreferrer" className="onboarding-cta-link onboarding-cta-link-block">
            Open linear.app/kahana →
          </a>
        </div>
      </div>

      <h3>Product management methodology (5 steps)</h3>
      <p>Use this loop every week — all reference pages linked below:</p>
      <ol className="onboarding-steps-list">
        {PM_LIFECYCLE_STEPS.map((item) => (
          <li key={item.step}>
            <strong>{item.step}</strong> — {item.detail}
          </li>
        ))}
      </ol>

      <h3>Strategy &amp; scoreboard</h3>
      <ul className="onboarding-rules-list">
        {PM_LIFECYCLE_RESOURCES.methodology.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link> — {link.description}
          </li>
        ))}
      </ul>

      <h3>Customer &amp; product data</h3>
      <ul className="onboarding-rules-list">
        {PM_LIFECYCLE_RESOURCES.customerData.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.title}</Link> — {link.description}
          </li>
        ))}
      </ul>

      <p>
        Deep dive: <Link to="/onboarding/learn-kahana" className="onboarding-inline-link">Learn about Kahana</Link>{' '}
        (Day 3) · <Link to="/technical-roadmap" className="onboarding-inline-link">Technical roadmap</Link>{' '}
        · <Link to="/onboarding/time-log" className="onboarding-inline-link">Weekly Time Log</Link> (Day 5)
      </p>
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
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve followed all Kahana channels, followed Adam on his socials
        (via his about page), and turned on notifications for each.
      </p>

      <p>
        Follow Kahana social accounts and Adam&apos;s personal channels so you stay up to date on company
        updates, product news, and founder-led content. More content coming soon — stay tuned!
      </p>

      <p>
        When we post new content, like and comment on it — engagement helps us improve in the algorithms and
        increases our reach.
      </p>

      <h3>1. Follow Adam on socials</h3>
      <p>
        Open Adam&apos;s page and follow him on the platforms listed there (LinkedIn, X, Instagram, etc.).
        Founder-led content is a core GTM channel — see also the{' '}
        <Link to="/founder-personal-brand" className="onboarding-inline-link">
          Founder-led Personal Brand
        </Link>{' '}
        guide.
      </p>
      <a
        href={ADAM_SOCIALS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Follow Adam Kershner → about.kahana.io/adam-kershner
      </a>

      <h3>2. Follow Kahana company channels</h3>
      <ul className="onboarding-steps-list">
        {SOCIAL_MEDIA_CHANNELS.map((channel) => (
          <li key={channel.name}>
            <a href={channel.url} target="_blank" rel="noopener noreferrer">
              {channel.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="onboarding-note onboarding-note-help">
        <p>
          <strong>Turn on notifications:</strong> For each platform, enable notifications so you&apos;re
          alerted when we post new content. On LinkedIn, use the bell icon on our company page and on
          Adam&apos;s profile. On other platforms, check your account or app settings for notification
          preferences.
        </p>
      </div>
    </div>
  )
}

function StepToolsAccess() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve DM&apos;d Adam Kershner on Slack to request access, and you
        have invites or credentials for every tool your role needs.
      </p>

      <div className="onboarding-note onboarding-note-important">
        <h3>How to get access (read this first)</h3>
        <ol className="onboarding-steps-list">
          <li>
            <strong>Schedule your biweekly 1-on-1</strong> with Adam —{' '}
            <Link to="/onboarding/schedule-1on1" className="onboarding-inline-link">
              Day 1 step
            </Link>
          </li>
          <li>
            <strong>Complete the rest of onboarding</strong> (Days 1–4): Slack, Avenger profile, knowledge base,
            Kahana platform, growth framework, etc.
          </li>
          <li>
            <strong>DM Adam Kershner on Slack</strong> with: your name, role/functions from your{' '}
            <Link to="/onboarding/avenger-profile" className="onboarding-inline-link">
              Avenger profile
            </Link>
            , and the tools you need from the list below.
          </li>
          <li>
            Adam will provision access (usually within 24 hours). Watch your email for invites — check spam.
          </li>
        </ol>
      </div>

      <p>
        Do not wait for automatic invites — <strong>you must DM Adam on Slack</strong> to get set up. This is
        the step people miss; following the sequence above is how every teammate gets their tools.
      </p>

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
            <li>Marketing Specific Google Docs &amp; Sheets</li>
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
            <li>Sales Specific Google Docs &amp; Sheets</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Technical</strong>
          <ul>
            <li>
              <Link to="/onboarding/linear-access" className="onboarding-inline-link">
                Linear
              </Link>{' '}
              — bugs, tech debt, assigned sprint work (see Linear onboarding step for PM methodology)
            </li>
            <li>Supabase</li>
            <li>AWS</li>
            <li>GitHub</li>
            <li>Mixpanel</li>
            <li>Technical Specific Google Docs &amp; Sheets</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Product</strong>
          <ul>
            <li>
              <Link to="/onboarding/linear-access" className="onboarding-inline-link">
                Linear
              </Link>{' '}
              — feature requests, backlog prioritization (see Linear step for customer data + lifecycle links)
            </li>
            <li>Figma</li>
            <li>Mixpanel</li>
            <li>Product Specific Google Docs &amp; Sheets</li>
          </ul>
        </div>

        <div className="onboarding-nps-step">
          <strong>Finance</strong>
          <ul>
            <li>Stripe</li>
            <li>Finance Specific Google Docs &amp; Sheets</li>
          </ul>
        </div>
      </div>

      <div className="onboarding-note onboarding-note-help">
        <p>
          <strong>Questions?</strong> DM Adam on Slack or email{' '}
          <a href={`mailto:${KAHANA_CONTACT_EMAIL}`} className="onboarding-inline-link">
            {KAHANA_CONTACT_EMAIL}
          </a>
          .
        </p>
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
  'knowledge-base-core-business': StepKnowledgeBaseCoreBusiness,
  'learn-kahana': StepLearnKahana,
  'duolingo-article': StepDuolingoArticle,
  'soc2-compliance': StepSoc2Compliance,
  'internal-channels': StepInternalChannels,
  'linear-access': StepLinearAccess,
  'slack-phone': StepSlackPhone,
  'producthunt': StepProductHunt,
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
        <h1 title={step.label} aria-label={step.label}>
          {formatCardTitle(step.label)}
        </h1>
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
