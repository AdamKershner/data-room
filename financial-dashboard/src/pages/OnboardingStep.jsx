import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ONBOARDING_STEPS } from './onboardingSteps'
import { OnboardingIcon } from './onboardingIcons'
import { KAHANA_CONTACT_EMAIL, LINEAR_WORKSPACE_URL, MIXPANEL_URL, SLACK_INVITE_URL, TIME_LOG_TALLY_URL, TOOLS_ACCESS_TALLY_URL, TOOLS_ACCESS_TALLY_EMBED_URL, ADAM_SOCIALS_URL, ADAM_ONCEHUB_URL, KAHANA_ABOUT_URL, KAHANA_SITE_URL, KAHANA_SUPPORT_URL, KAHANA_FEEDBACK_URL, KAHANA_PROFILE_EXAMPLE_URL } from '../constants/kahanaSite'
import { TIME_LOG_RITUAL } from '../data/charterKpis'
import linearKahanaBoard from '../images/linear-kahana-board.png'
import mixpanelCheckoutJourneys from '../images/mixpanel-checkout-journeys.png'
import './Page.css'
import './Onboarding.css'

function StepSchedule1on1() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve joined Kahana Slack, installed Slack on your phone with
        notifications on, and DM&apos;d Adam Kershner to introduce yourself.
      </p>

      <h3>1. Join Slack</h3>
      <p>
        Slack is our primary workspace for day-to-day communication — DMs, channels, and team coordination.
        Join first so you can reach Adam and the rest of the team.
      </p>
      <a
        href={SLACK_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Join Kahana Slack →
      </a>

      <h3>2. Install Slack on your phone</h3>
      <p>
        Install the Slack app on your phone and configure notifications so you don&apos;t miss DMs or key
        channel messages.
      </p>
      <div className="onboarding-note onboarding-note-important">
        <p>
          <strong>Expectation:</strong> Check Slack and be available for online discussion at least once per
          day during 9–5 in your time zone.
        </p>
      </div>
      <ul className="onboarding-rules-list">
        <li>Enable mobile notifications for DMs and mentions</li>
        <li>Set key channels to notify you about new messages (or at least mentions)</li>
        <li>Use a notification schedule so evenings/weekends stay quiet</li>
      </ul>
      <a
        href="https://slack.com/help/articles/201355156-Configure-your-Slack-notifications"
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Slack: Configure your notifications →
      </a>

      <h3>3. DM Adam Kershner once you&apos;re in</h3>
      <div className="onboarding-note onboarding-note-important">
        <p>
          As soon as you join Slack, <strong>DM Adam Kershner</strong>. Introduce yourself (name, role /
          functions you&apos;re joining for). That opens the channel for onboarding questions and tool access.
        </p>
      </div>

      <div className="onboarding-note onboarding-note-help">
        <p>
          Next: <Link to="/onboarding/weekly-1on1" className="onboarding-inline-link">Schedule your weekly 1-on-1</Link>
          {' '}and{' '}
          <Link to="/onboarding/tools-access" className="onboarding-inline-link">request tools access</Link>.
        </p>
      </div>
    </div>
  )
}

function StepWeekly1on1() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve booked a recurring weekly 1-on-1 with Adam via OnceHub.
      </p>

      <p>
        Everyone schedules a <strong>weekly 1-on-1</strong> with Adam. Use the OnceHub link below — it puts a
        meeting on both calendars so you check in every week (join the call or sync over Slack at that time).
      </p>

      <a
        href={ADAM_ONCEHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Schedule weekly 1-on-1 with Adam → OnceHub
      </a>

      <h3>FAQs</h3>
      <dl className="onboarding-faq">
        <dt>Frequency</dt>
        <dd>Weekly — not biweekly. Book the slot; Adam will make it a recurring weekly meeting.</dd>
        <dt>Agenda</dt>
        <dd>Share what you&apos;re focusing on, blockers, and what you&apos;re learning.</dd>
        <dt>Can&apos;t make it?</dt>
        <dd>Tell Adam in advance on Slack.</dd>
      </dl>

      <div className="onboarding-note onboarding-note-help">
        <p>
          Prefer to message at the scheduled time instead of joining video? That&apos;s fine — the calendar block
          is the commitment to connect weekly.
        </p>
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

function StepExploreAuraLibrary() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve explored the library and authors, given Aura to work you love,
        started a free hub, bookmarked/pinned Kahana, and committed to an Aura streak (give Aura at least once
        every 24 hours). Create your Kahana profile in{' '}
        <Link to="/onboarding/create-profiles" className="onboarding-inline-link">
          Create profiles
        </Link>{' '}
        if you haven&apos;t already.
      </p>

      <p>
        <strong>Kahana&apos;s Aura Library</strong> is the product we are scaling. Live in it from day one —
        create your profile, browse hubs and authors, give Aura, and start contributing. This is how you build
        product intuition for every role.
      </p>

      <a
        href={KAHANA_SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Open Kahana → kahana.io
      </a>

      <h3>1. Set up and explore</h3>
      <ol className="onboarding-steps-list">
        <li>
          Optimize your{' '}
          <Link to="/onboarding/create-profiles" className="onboarding-inline-link">
            Kahana profile
          </Link>{' '}
          (photo, bio, links) if you haven&apos;t already.
        </li>
        <li>Peruse the Library and authors — open hubs, files, and creator profiles.</li>
        <li>Give Aura to hubs or files you love (your daily Aura budget replenishes at midnight UTC).</li>
        <li>Explore the whole platform: Explore, profiles, hub creation, collections.</li>
      </ol>

      <h3>2. Contribute</h3>
      <ol className="onboarding-steps-list">
        <li>Start creating a free hub and add digital artifacts (guides, links, files, etc.).</li>
        <li>When ready, list it on Explore so you are contributing to the public library.</li>
      </ol>

      <h3>3. Make Kahana a daily habit (Aura streak)</h3>
      <ul className="onboarding-rules-list">
        <li>
          <strong>Pin</strong> the library as one of your browser tabs and <strong>bookmark</strong>{' '}
          <a href={KAHANA_SITE_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
            kahana.io
          </a>
          .
        </li>
        <li>
          Go on Kahana <strong>every day</strong> and maintain an <strong>Aura streak</strong> — give Aura at
          least once every 24 hours.
        </li>
      </ul>

      <h3>4. Issues and suggestions</h3>
      <p>If you notice bugs or have ideas, use these links — do not stay silent:</p>
      <div className="onboarding-cta-row">
        <a
          href={KAHANA_SUPPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="onboarding-cta-link"
        >
          Support →
        </a>
        <a
          href={KAHANA_FEEDBACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="onboarding-cta-link"
        >
          Feedback survey →
        </a>
      </div>

      <div className="onboarding-note">
        <p>
          Context: read the public story on{' '}
          <Link to="/onboarding/review-landing-page" className="onboarding-inline-link">
            about.kahana.io
          </Link>{' '}
          (Day 3) when you get there — Aura, Learn / Create / Grow, and benefits for learners and creators.
        </p>
      </div>
    </div>
  )
}

function StepTimeLog() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve submitted a Time Log this Friday <em>and</em> added a
        recurring Friday calendar reminder so you fill it out <strong>every Friday</strong> going forward.
        This is a weekly habit — not a one-time onboarding task.
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

      <h3>Template examples</h3>
      <p>Use these as a starting point — adapt to your role and week:</p>
      <div className="onboarding-avenger-tasks">
        {TIME_LOG_RITUAL.examples.map((ex) => (
          <div key={ex.title} className="onboarding-nps-step">
            <strong>{ex.title}</strong>
            <p>{ex.body}</p>
          </div>
        ))}
      </div>

      <div className="onboarding-cta-row">
        <a href={TIME_LOG_TALLY_URL} target="_blank" rel="noopener noreferrer" className="onboarding-cta-link">
          Fill out the Time Log →
        </a>
        <button type="button" onClick={downloadTimeLogICS} className="onboarding-cta-button">
          Add recurring Friday reminder
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

function StepCreateProfiles() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You have a Kahana profile, an Avenger (team) profile, and a Product Hunt
        profile on the team sheet — and you&apos;ve followed everyone on that sheet.
      </p>

      <p>
        Set up your presence on the product, the internal team roster, and Product Hunt. These profiles help
        teammates know you and prepare us for Kahana&apos;s upcoming Product Hunt launch.
      </p>

      <div className="onboarding-avenger-tasks">
        <div className="onboarding-nps-step">
          <strong>1. Kahana profile</strong>
          <p>
            Create your profile on{' '}
            <a href={KAHANA_SITE_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
              kahana.io
            </a>{' '}
            — photo, bio, and links. Example of what a finished profile looks like:
          </p>
          <a
            href={KAHANA_PROFILE_EXAMPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-cta-link onboarding-cta-link-block"
          >
            View example Kahana profile →
          </a>
          <a
            href={KAHANA_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-cta-button onboarding-cta-button-outline"
          >
            Open Kahana → create yours
          </a>
        </div>

        <div className="onboarding-nps-step">
          <strong>2. Avenger profile (internal team)</strong>
          <p>
            Add your photo, role, working style, and communication preferences so teammates know how you like
            to work. Then browse others&apos; profiles.
          </p>
          <a
            href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8?p=111798d5ce824a398e2102fe2328560d&pm=c"
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-cta-link onboarding-cta-link-block"
          >
            Build your Avenger profile →
          </a>
          <a
            href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8"
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-cta-button onboarding-cta-button-outline"
          >
            View team profiles on Kahana HQ →
          </a>
        </div>

        <div className="onboarding-nps-step">
          <strong>3. Product Hunt profile</strong>
          <p>
            Create a Product Hunt account for our upcoming{' '}
            <a href={KAHANA_ABOUT_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
              Kahana
            </a>{' '}
            launch. Add your profile to the team sheet and follow everyone on it. Example profile:
          </p>
          <a
            href="https://www.producthunt.com/@adamthecreator"
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-cta-link onboarding-cta-link-block"
          >
            View Adam&apos;s Product Hunt profile →
          </a>
          <a
            href="https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="onboarding-cta-button onboarding-cta-button-outline"
          >
            Open team Product Hunt sheet →
          </a>
        </div>
      </div>

      <div className="onboarding-note">
        <p>
          After you create profiles, get tools via the{' '}
          <Link to="/onboarding/tools-access" className="onboarding-inline-link">
            Request tools access
          </Link>{' '}
          form (preferred email + whether you contribute to the code).
        </p>
      </div>

      <div className="onboarding-install-default-section">
        <h3>Where your Avenger profile appears</h3>
        <p>After you create it, it shows up on the Avengers page alongside teammates:</p>
        <div className="onboarding-screenshot">
          <a
            href="https://kahanagroup.notion.site/Kahana-HQ-c03d4242e7464e71ad8d4ec856f274e8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/avengers-page.png" alt="Avengers page showing team member profiles in a grid" />
          </a>
        </div>
      </div>
    </div>
  )
}

function StepReviewLandingPage() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve read the full landing page and can explain what Kahana is,
        what Aura is, and how learners and creators benefit.
      </p>

      <p>
        <a href={KAHANA_ABOUT_URL} target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">
          about.kahana.io
        </a>{' '}
        is the <strong>central place</strong> where everyone — new hires, creators, and customers — learns what
        Kahana is and how people benefit. Read it carefully; this is the public story of the product.
      </p>

      <a
        href={KAHANA_ABOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Open about.kahana.io →
      </a>

      <h3>What to absorb while you read</h3>
      <ul className="onboarding-rules-list">
        <li>
          <strong>Positioning:</strong> &ldquo;The Digital Library With Aura&rdquo; — learn, create, and give
          Aura to recognize quality contributions.
        </li>
        <li>
          <strong>Aura:</strong> Daily budget of positive energy (not money, not crypto, not star ratings) to
          promote quality across hubs and files.
        </li>
        <li>
          <strong>How to use Kahana:</strong> Learn (Explore) → Create (hubs + digital artifacts) → Grow
          (exposure, followers, Aura, optional monetization).
        </li>
        <li>
          <strong>Benefits:</strong> For learners (access, credibility, flexible hubs) and for creators
          (exposure, teaching, earning).
        </li>
        <li>
          <strong>Optimize loop:</strong> Create hub → add context → list on Explore → check analytics →
          optionally monetize.
        </li>
      </ul>

      <div className="onboarding-note">
        <p>
          Go deeper anytime in the{' '}
          <Link to="/kahana" className="onboarding-inline-link">
            Kahana Platform Overview
          </Link>{' '}
          and{' '}
          <Link to="/knowledge-base" className="onboarding-inline-link">
            Knowledge base
          </Link>
          .
        </p>
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
          <Link to="/onboarding/time-log">Time Log</Link>.
        </p>
      </div>
    </div>
  )
}

function StepToolsAccess() {
  return (
    <div className="onboarding-step-content">
      <p className="onboarding-step-done onboarding-step-done-top">
        <strong>✓ Done when:</strong> You&apos;ve DM&apos;d Adam on Slack about codebase contribution plans,
        confirmed Linear + Mixpanel access, and (if you need code) requested GitHub + Firebase with your
        preferred emails.
      </p>

      <div className="onboarding-note onboarding-note-important">
        <h3>DM Adam on Slack (required)</h3>
        <p>
          Do not wait for automatic invites. <strong>DM Adam Kershner</strong> and include:
        </p>
        <ol className="onboarding-steps-list">
          <li>Your name and role / functions from your{' '}
            <Link to="/onboarding/create-profiles" className="onboarding-inline-link">
              Avenger profile
            </Link>
          </li>
          <li>
            Whether you <strong>plan to contribute to the codebase</strong> or not (yes / no)
          </li>
          <li>
            If yes (developers and anyone who needs code access): your preferred emails for{' '}
            <strong>GitHub</strong> and <strong>Firebase</strong>
          </li>
        </ol>
        <p>Adam provisions access (usually within 24 hours). Watch your email — check spam.</p>
      </div>

      <h3>Everyone gets: Linear + Mixpanel</h3>
      <p>
        All teammates get <strong>Linear</strong> (project management / task assignment) and{' '}
        <strong>Mixpanel</strong> (userbase analytics dashboards). Ask for both in your DM if you don&apos;t
        have invites yet.
      </p>

      <h4>Linear — backlog &amp; sprint work</h4>
      <p>
        System of record for features, bugs, and sprint work. Board columns: Backlog → Todo → In Progress →
        In Review (IDs like <strong>KAH-55</strong>).
      </p>
      <figure className="onboarding-screenshot">
        <img
          src={linearKahanaBoard}
          alt="Linear Kahana board showing Backlog, Todo, and In Progress columns with KAH issues"
        />
        <figcaption>
          What you&apos;ll see in Linear: Kahana workspace, issue board, and KAH-* tickets by status.
        </figcaption>
      </figure>
      <a
        href={LINEAR_WORKSPACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Open linear.app/kahana →
      </a>

      <h4>Mixpanel — userbase analytics</h4>
      <p>
        Product usage and conversion funnels (e.g. billing / checkout). Filter reports to{' '}
        <strong>environment = production</strong> unless you&apos;re debugging.
      </p>
      <figure className="onboarding-screenshot">
        <img
          src={mixpanelCheckoutJourneys}
          alt="Mixpanel Kahana Checkout Journeys dashboard with Growth upgrade and downgrade funnels"
        />
        <figcaption>
          What you&apos;ll see in Mixpanel: boards like Checkout Journeys with funnel steps and conversion rates.
        </figcaption>
      </figure>
      <a
        href={MIXPANEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="onboarding-cta-link onboarding-cta-link-block"
      >
        Open Mixpanel →
      </a>
      <div className="onboarding-note">
        <p>
          If you can&apos;t see the content, you haven&apos;t accepted the Mixpanel invitation or gotten proper
          access yet — DM Adam on Slack.
        </p>
      </div>

      <h3>Code access (only if you contribute to the codebase)</h3>
      <p>
        Developers and anyone who needs the code must <strong>request GitHub and Firebase access directly
        from Adam</strong> in Slack and provide the preferred email for each. Do not assume you are on the
        repos until Adam confirms.
      </p>
      <ul className="onboarding-rules-list">
        <li>
          <strong>GitHub</strong> — source code, PRs, reviews
        </li>
        <li>
          <strong>Firebase</strong> — project / app access tied to your preferred email
        </li>
      </ul>

      <div className="onboarding-note onboarding-note-help">
        <p>
          <strong>Questions?</strong> DM Adam on Slack or email{' '}
          <a href={`mailto:${KAHANA_CONTACT_EMAIL}`} className="onboarding-inline-link">
            {KAHANA_CONTACT_EMAIL}
          </a>
          . Role-specific tools beyond Linear/Mixpanel/GitHub/Firebase (HubSpot, Figma, Stripe, etc.) can be
          requested in the same DM once your profiles are done.
        </p>
      </div>
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
  'weekly-1on1': StepWeekly1on1,
  'company-rules': StepCompanyRules,
  'explore-aura-library': StepExploreAuraLibrary,
  'time-log': StepTimeLog,
  'install-oasis': StepInstallOasis,
  'use-oasis-5-days': StepUseOasis5Days,
  'create-profiles': StepCreateProfiles,
  'review-landing-page': StepReviewLandingPage,
  'duolingo-article': StepDuolingoArticle,
  'soc2-compliance': StepSoc2Compliance,
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
        <h1 title={step.label} aria-label={step.label} className="onboarding-step-title">
          {step.icon && (
            <span className="onboarding-step-title-icon" aria-hidden="true">
              <OnboardingIcon name={step.icon} />
            </span>
          )}
          {step.label}
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
