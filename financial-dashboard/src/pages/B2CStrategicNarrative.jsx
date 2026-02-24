import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './StrategicNarrative.css'

const SECTIONS = [
  { id: 'buying-champion', title: '1. Buying Champion Profile' },
  { id: 'change-stakes', title: '2. Change & Stakes' },
  { id: 'villain', title: '3. Villain' },
  { id: 'promised-land', title: '4. Promised Land' },
  { id: 'alternatives', title: '5. Alternatives' },
  { id: 'category', title: '6. Category' },
  { id: 'customer-language', title: '7. Customer Language & Search' },
  { id: 'budget', title: '8. Budget & Neighboring Tools' },
  { id: 'differentiation', title: '9. Differentiation' },
  { id: 'value', title: '10. Value' },
  { id: 'nps-survey', title: 'Appendix: Internal NPS Survey Results' },
  { id: 'mark-story', title: "Appendix: Mark's Story (First Paying B2C Customer)" },
  { id: 'b2c-helps-b2b', title: 'Appendix: How B2C Helps B2B' },
]

function B2CStrategicNarrative() {
  const [openSection, setOpenSection] = useState(null)
  const toggleSection = (id) => setOpenSection(openSection === id ? null : id)

  return (
    <div className="page">
      <div className="page-header">
        <h1>B2C Strategic Narrative</h1>
        <p className="page-subtitle">
          Individual knowledge workers who live in the browser. Oasis Consumer Browser—ready out of the box, elegant UX, differentiated productivity features, and AI commands.
        </p>
      </div>

      <section className="page-section toc-section" aria-label="Table of contents">
        <div className="content-block">
          <h2 className="toc-title">Table of Contents</h2>
          <div className="toc-grid">
            {SECTIONS.map((s) => (
              <a key={s.id} className="toc-link" href={`#${s.id}`} onClick={(e) => { e.preventDefault(); setOpenSection(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="narrative-accordion">
        {SECTIONS.map((s) => (
          <div key={s.id} id={s.id} className={`narrative-item ${openSection === s.id ? 'narrative-item-open' : ''}`}>
            <button
              type="button"
              className="narrative-question"
              onClick={() => toggleSection(s.id)}
              aria-expanded={openSection === s.id}
              aria-controls={`narrative-answer-${s.id}`}
            >
              <span className="narrative-question-text">{s.title}</span>
              <span className="narrative-chevron" aria-hidden="true">{openSection === s.id ? '−' : '+'}</span>
            </button>
            <div id={`narrative-answer-${s.id}`} className="narrative-answer" role="region">
              <div className="narrative-answer-body">
                {s.id === 'buying-champion' && <Section1BuyingChampion />}
                {s.id === 'change-stakes' && <Section2ChangeStakes />}
                {s.id === 'villain' && <Section3Villain />}
                {s.id === 'promised-land' && <Section4PromisedLand />}
                {s.id === 'alternatives' && <Section5Alternatives />}
                {s.id === 'category' && <Section6Category />}
                {s.id === 'customer-language' && <Section7CustomerLanguage />}
                {s.id === 'budget' && <Section8Budget />}
                {s.id === 'differentiation' && <Section9Differentiation />}
                {s.id === 'value' && <Section10Value />}
                {s.id === 'nps-survey' && <AppendixNPSSurvey />}
                {s.id === 'mark-story' && <AppendixMarkStory />}
                {s.id === 'b2c-helps-b2b' && <AppendixB2CHelpsB2B />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Section1BuyingChampion() {
  return (
    <div className="narrative-content">
      <h3>Demographic Information</h3>
      <ul>
        <li><strong>Profile:</strong> Individual knowledge worker—professional who spends 60–80% of the workday in the browser (research, docs, SaaS apps, communication)</li>
        <li><strong>Company context:</strong> Often employed at a company (software, consulting, research, professional services) or self-employed; may work remotely or hybrid</li>
        <li><strong>Role types:</strong> Researchers, analysts, consultants, engineers, product managers, writers, marketers—anyone whose work lives in tabs and web apps</li>
        <li><strong>Location:</strong> US, Canada, UK, Australia, NZ (primary markets); global English-speaking knowledge workers</li>
      </ul>

      <h3>Background</h3>
      <p><strong>Work style:</strong> Heavy browser user—dozens of tabs, multiple windows, constant context switching between Gmail, Notion, Figma, docs, spreadsheets, and research. Comfortable with technology; willing to try new tools if they reduce friction.</p>
      <p><strong>Decision-making:</strong> Self-serve buyer. Evaluates tools by installing and using them; low tolerance for long onboarding or complex setup. Will pay ($20/mo) for something that clearly improves their daily experience.</p>

      <h3>Goals and Objectives</h3>
      <p><strong>Main objectives:</strong></p>
      <ol>
        <li>Get more done with less friction—reduce cognitive load and context switching.</li>
        <li>Have a browser that feels designed for serious work, not just casual browsing.</li>
        <li>Try something better without a long commitment—install, use, and see if it helps.</li>
      </ol>
      <p><strong>Success looks like:</strong> Fewer lost tabs, faster workflows, less mental overhead. A browser they actually enjoy using for work.</p>

      <h3>Problems and Barriers</h3>
      <p><strong>Problems:</strong></p>
      <ol>
        <li>Tab overload—dozens of tabs, hard to find what matters, constant re-opening of lost tabs.</li>
        <li>Distraction and context switching—information scattered across windows; default browser wasn't built for serious work.</li>
        <li>No AI-native workflow—copy-pasting between ChatGPT and the browser, or using clunky extensions.</li>
      </ol>
      <p><strong>Barriers:</strong> Skepticism that "another browser" will help; habit of sticking with Chrome/Arc; concern about switching cost or learning curve.</p>

      <h3>Objections</h3>
      <p><strong>Reasons they might hesitate:</strong> "I'm used to Chrome"; "Will this actually help or just add another tool?"; "Do I need to migrate everything?"</p>
      <p><strong>What overcomes them:</strong> Low-friction trial ($20, install and use); elegant UX that feels immediately better; AI commands and tab management that demonstrate value in the first session.</p>

      <h3>Ideal Customer Journey</h3>
      <p><strong>Awareness:</strong> Hears about Oasis from content (blog, YouTube), Product Hunt, waitlist, or referral. Problem: tab chaos and productivity drain.</p>
      <p><strong>Consideration:</strong> Installs consumer version; tries AI commands, tab groups, summarization. Evaluates: Does this feel better? Does it reduce friction?</p>
      <p><strong>Decision:</strong> Converts to paid ($20/mo) when the experience clearly beats their default browser. Key filter: elegant UX and feeling—it's called Oasis for a reason.</p>
    </div>
  )
}

function Section2ChangeStakes() {
  return (
    <div className="narrative-content">
      <h3>Major Change Disrupting the Market</h3>
      <p><strong>How has their work evolved?</strong> Knowledge work has shifted almost entirely into the browser—SaaS apps, docs, research, communication. The browser is the primary workspace, but most browsers were built for casual use, not for people who live in 50+ tabs.</p>
      <p><strong>Then vs. Now:</strong></p>
      <ul>
        <li><strong>Then:</strong> Fewer tabs, fewer apps; browser was one of many tools. Bookmark bar and basic tabs were "good enough."</li>
        <li><strong>Now:</strong> Dozens of tabs, constant context switching, AI tools bolted on as separate apps or extensions. The browser is the center of work but wasn't designed for it.</li>
      </ul>
      <p><strong>Which results are slipping?</strong> Focus, productivity, and sense of control. Workers feel scattered—tabs pile up, context is lost, and the default browser adds friction instead of reducing it.</p>
      <p><strong>How is AI disrupting the norm?</strong> AI is changing how people work—summarization, drafting, research—but most AI lives outside the browser (ChatGPT tab, copy-paste). Workers want AI woven into their daily browser workflow.</p>

      <h3>Stakes of Remaining with the Status Quo</h3>
      <p><strong>Worst-case scenario:</strong> Continued productivity drain, cognitive overload, and frustration with a browser that wasn't built for how they actually work. Missed opportunity to feel more in control and get more done.</p>
      <p><strong>Who wins and who loses:</strong> <strong>Winners:</strong> Knowledge workers who adopt a browser designed for work—elegant UX, AI commands, tab management. <strong>Losers:</strong> Those who stick with a default browser and accept the chaos.</p>
    </div>
  )
}

function Section3Villain() {
  return (
    <div className="narrative-content">
      <h3>Root Cause (The Villain)</h3>
      <p><strong>Browser chaos</strong>—the default browser was built for casual browsing, not for knowledge workers who live in dozens of tabs, constant context switching, and scattered information across windows. There's no unified way to manage tabs, reduce cognitive load, or bring AI into the workflow—so work feels harder than it needs to be.</p>
    </div>
  )
}

function Section4PromisedLand() {
  return (
    <div className="narrative-content">
      <h3>What can they now do thanks to your product?</h3>
      <ul>
        <li>Manage tabs and context with tab groups, AI commands, and summarization—all inside the browser.</li>
        <li>Use AI natively (voice, commands, summarization) without copy-pasting to a separate ChatGPT tab.</li>
        <li>Work in a browser that feels designed for serious work—elegant, ergonomic, and productivity-first.</li>
      </ul>
      <h3>How has their day-to-day job improved?</h3>
      <ul>
        <li>Less cognitive load—tabs are organized, context is easier to find, AI helps with summarization and drafting.</li>
        <li>Faster workflows—AI commands and native features reduce friction instead of adding it.</li>
        <li>A browser they actually enjoy using—the "Oasis" experience; it's called Oasis for a reason.</li>
      </ul>
      <h3>What results are they now able to achieve?</h3>
      <ul>
        <li>More focus and less context switching.</li>
        <li>Faster time-to-value on research and writing tasks (AI summarization, commands).</li>
        <li>Higher satisfaction with their primary work tool—the browser.</li>
      </ul>
      <h3>How has their work life benefited?</h3>
      <ul>
        <li>Feels more in control of their digital workspace.</li>
        <li>Willing to recommend to colleagues—path to referrals and B2B pipeline.</li>
      </ul>
    </div>
  )
}

function Section5Alternatives() {
  const alternatives = [
    { name: "Perplexity's Comet Browser", type: 'Competitor', strengths: 'AI search and research; Perplexity brand; strong for lookup and summarization', limits: 'Focused on search/research; less on tab management and general productivity workflow' },
    { name: "OpenAI's Atlas Browser", type: 'Competitor', strengths: 'OpenAI/ChatGPT integration; AI-native positioning', limits: 'New; limited track record; may be ChatGPT-centric rather than broad productivity' },
    { name: 'Strawberry Browser', type: 'Competitor', strengths: 'AI-powered; prospecting and sales use cases; raised $5M', limits: 'Narrower use case (prospecting); less general-purpose for knowledge work' },
    { name: 'Dia Browser', type: 'Competitor', strengths: 'AI browser; alternative to Arc', limits: 'Smaller footprint; less established; evolving feature set' },
    { name: 'Genspark Browser', type: 'Competitor', strengths: 'AI browser with autopilot mode; search and generation', limits: 'Less focus on tab management and elegant UX; different positioning' },
    { name: 'Dex Browser (tab extension)', type: 'Competitor', strengths: 'Tab management; extension-based, works with existing browser', limits: 'Extension, not full browser; limited control over core experience; AI may be bolted on' },
    { name: 'Zen Browser', type: 'Competitor', strengths: 'Customizable; privacy and productivity focus', limits: 'Less AI-native; different UX paradigm; smaller community' },
    { name: 'OpenClaw', type: 'Competitor', strengths: 'AI browser in the space', limits: 'Emerging; less visibility and track record' },
    { name: 'EchoTab Browser Extension', type: 'Competitor', strengths: 'Tab management, tagging, search; CmdK command menu; privacy-focused, local data; AI-powered tagging (upcoming)', limits: 'Extension only, not full browser; works within Chrome/Chromium; limited control over core experience' },
    { name: 'Moonshot AI (Kimi)', type: 'Competitor', strengths: 'Kimi extension: query pen, summarizer, sidebar; Kimi Claw: browser-based AI agent platform, 5,000+ automation skills, cloud storage', limits: 'Extension-centric; Kimi Claw more automation/agent-focused than general productivity UX; newer to market' },
    { name: 'Ulaa Browser', type: 'Competitor', strengths: 'Privacy-centric (Zoho); Work/Personal/Developer modes; cross-device sync; Zia AI tab organization; enterprise version', limits: 'Privacy-first positioning; less AI-native for workflow commands; different UX paradigm' },
    { name: 'SigmaOS', type: 'Competitor', strengths: 'Workspaces, vertical tabs, split view; Airis AI companion; Lazy Search (spacebar); keyboard-first; task-based tab management', limits: 'Similar to Arc in workspace/tab paradigm; AI may be companion rather than woven into core workflow' },
  ]
  return (
    <div className="narrative-content">
      <div className="narrative-table-wrapper">
        <table className="narrative-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>What do they do well?</th>
              <th>What is their limitation?</th>
            </tr>
          </thead>
          <tbody>
            {alternatives.map((row, i) => (
              <tr key={i}>
                <td><strong>{row.name}</strong></td>
                <td>{row.type}</td>
                <td>{row.strengths}</td>
                <td>{row.limits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Section6Category() {
  return (
    <div className="narrative-content">
      <p><strong>Category name:</strong> AI browser / productivity browser / browser for work</p>
      <p><strong>Category definition:</strong> A browser built for knowledge workers—with elegant UX, native AI commands, tab management, and productivity features that reduce cognitive load and context switching. Ready out of the box; no enterprise setup required.</p>
      <p><strong>Positioning line:</strong> Oasis is the browser for people who live in tabs—elegant, AI-native, and designed for serious work. It's called Oasis for a reason.</p>
    </div>
  )
}

function Section7CustomerLanguage() {
  return (
    <div className="narrative-content">
      <h3>Phrases you often hear</h3>
      <ul>
        <li>Browser built for work</li>
        <li>AI commands in the browser</li>
        <li>Get AI to control your browser</li>
        <li>Tab management that actually works</li>
        <li>Elegant, beautiful UX</li>
        <li>Reduce context switching</li>
        <li>Productivity browser</li>
        <li>Browser webpage summarizer</li>
        <li>Save tab groups as workspace</li>
      </ul>
      <h3>Tasks you help accomplish</h3>
      <ul>
        <li>Manage dozens of tabs without losing context</li>
        <li>Use AI (summarization, commands, voice) without leaving the browser</li>
        <li>Reduce cognitive load and distraction</li>
        <li>Work in a browser that feels designed for knowledge work</li>
        <li>Find tabs across tab groups / search inside tab groups</li>
        <li>Evaluate AI browsers (is it safe? is it good? what actually helps?)</li>
      </ul>
      <h3>Search Terms / Queries</h3>
      <p className="narrative-search-terms"><strong>Core category:</strong> ai browser, best ai browser, browser with ai, ai search, ai assistant, agentic ai, ai browser test</p>
      <p className="narrative-search-terms"><strong>Competitors (people compare):</strong> comet browser, chatgpt atlas, dia browser, genspark browser, zen browser, arc browser, sigma browser, perplexity ai, comet browser alternative, alternative arc browser, dia browser vs arc</p>
      <p className="narrative-search-terms"><strong>Tab management & workflow:</strong> chrome tab groups, how to save chrome tab groups, how to enable tab groups in chrome, saving tab groups in edge, tab groups collapse, browser tab groups workflow, save tab groups as workspace</p>
      <p className="narrative-search-terms"><strong>AI in browsers:</strong> gemini in chrome, chrome gemini, get ai to control your browser, browser webpage summarizer, best ai browser for summarization, how to use voice typing in arc browser</p>
      <p className="narrative-search-terms"><strong>How-to & evaluation:</strong> how to use comet browser, how to use genspark browser autopilot mode, chatgpt atlas review, is comet ai browser safe, is comet ai browser good</p>
    </div>
  )
}

function Section8Budget() {
  return (
    <div className="narrative-content">
      <p><strong>Who pays:</strong> The individual user (personal credit card) or occasionally expensed by their company. $20/month subscription; low-friction trial.</p>
      <p><strong>If you didn't exist, what would they use?</strong> Chrome, Arc, Firefox, or Safari—sticking with their default browser and accepting the tab chaos, or using ChatGPT + browser as separate tools.</p>
    </div>
  )
}

function Section9Differentiation() {
  const features = [
    { feature: 'Elegant, ergonomic UX', why: 'The lure is the promise of the most elegant user experience—that\'s how we separate ourselves. It\'s called Oasis for a reason.' },
    { feature: 'AI commands native to the browser', why: 'Voice, summarization, and commands woven into the workflow—no copy-paste to ChatGPT' },
    { feature: 'Tab management and groups', why: 'Reduce cognitive load; find and organize tabs without losing context' },
    { feature: 'Ready out of the box', why: 'Install and use—no enterprise setup, no waitlist for the core experience' },
    { feature: 'Low-friction trial ($20/mo)', why: 'Try it with minimal commitment; skip-the-waitlist for company employees' },
  ]
  const pillars = [
    { pillar: 'Elegant UX above all', why: 'The draw is based on user experience and feeling—competitors optimize for features; we optimize for the experience of using the browser' },
    { pillar: 'AI woven into the workflow', why: 'AI commands, summarization, and voice are native—not bolted on as a separate tab or extension' },
    { pillar: 'Ready now, no enterprise required', why: 'Consumer version is live; B2B prospects can try it immediately to get a sense of product quality before enterprise demos' },
  ]
  return (
    <div className="narrative-content">
      <h3>Top Features</h3>
      <div className="narrative-table-wrapper">
        <table className="narrative-table">
          <thead>
            <tr><th>Feature</th><th>Why it matters to the buyer</th></tr>
          </thead>
          <tbody>
            {features.map((row, i) => (
              <tr key={i}><td><strong>{row.feature}</strong></td><td>{row.why}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Differentiation Pillars</h3>
      <div className="narrative-table-wrapper">
        <table className="narrative-table">
          <thead>
            <tr><th>Pillar</th><th>Why it matters to the buyer</th></tr>
          </thead>
          <tbody>
            {pillars.map((row, i) => (
              <tr key={i}><td><strong>{row.pillar}</strong></td><td>{row.why}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Section10Value() {
  const valueRows = [
    { problem: 'Tab overload and context switching make it hard to focus and find what matters.', feature: 'Tab management and groups', capability: 'Organize tabs, reduce clutter, find context without re-opening lost tabs', value: 'Less cognitive load; more focus; faster workflows' },
    { problem: 'AI is useful but lives in a separate ChatGPT tab—copy-paste, context loss.', feature: 'AI commands native to the browser', capability: 'Summarization, voice, and commands woven into the workflow', value: 'Faster research and writing; AI where you work, not in a separate tab' },
    { problem: 'Default browser wasn\'t built for serious work—adds friction instead of reducing it.', feature: 'Elegant, productivity-first UX', capability: 'Browser designed for knowledge workers—ergonomic, beautiful, low friction', value: 'A browser they actually enjoy using; the "Oasis" experience' },
    { problem: 'Skeptical that "another browser" will help; don\'t want a long commitment.', feature: 'Low-friction trial ($20/mo)', capability: 'Install and use; skip-the-waitlist for company employees', value: 'Try it with minimal risk; convert when the experience clearly wins' },
  ]
  return (
    <div className="narrative-content">
      <div className="narrative-table-wrapper">
        <table className="narrative-table narrative-value-table">
          <thead>
            <tr>
              <th>Customer Problem</th>
              <th>Feature</th>
              <th>Capability</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {valueRows.map((row, i) => (
              <tr key={i}>
                <td>{row.problem}</td>
                <td><strong>{row.feature}</strong></td>
                <td>{row.capability}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function AppendixNPSSurvey() {
  return (
    <div className="narrative-content">
      <p>Recent internal NPS survey (Feb 2026) with 6 respondents. <strong>NPS scores:</strong> 10, 9, 9, 8, 7, 6 → 3 promoters (9–10), 2 passives (7–8), 1 detractor (6). Half said they would be <strong>"Very disappointed"</strong> if they could no longer use Oasis; the other half <strong>"Somewhat disappointed."</strong></p>

      <h3>Who benefits most (in their words)</h3>
      <ul>
        <li>Project managers and engineers</li>
        <li>Anyone whose work deals with lots of browser tabs and switching contexts—IT employees, analysts, program managers</li>
        <li>Software developers</li>
        <li>Software engineers, research assistants, product managers, active web users, students, young professionals</li>
        <li>People with limited time—reading pages quickly, getting summaries</li>
        <li>Power users who care about productivity, multi-tasking, and research</li>
      </ul>

      <h3>Main benefits they receive</h3>
      <ul>
        <li>Ease navigating through websites and calming user experience</li>
        <li>Chat feature for the overall browser</li>
        <li>Eases search and automates certain tasks</li>
        <li>Incorporated assistant within the browser</li>
        <li>Getting a summary of the page instead of going through it all</li>
        <li>AI chatbot—helpful, maneuverable (dragged, minimized, sidebar toggled)</li>
      </ul>

      <h3>Improvement themes</h3>
      <p>Sign-in and login (more intuitive, "remember me"), chat bar UX (double-click behavior), AI reliability and efficiency, chat history persistence when switching views.</p>

      <h3>What this validates for the B2C narrative</h3>
      <p>Internal users—who mirror the target buyer (engineers, PMs, analysts, students, power users)—strongly value the AI chatbot, page summarization, tab/context management, and calming UX. The "who benefits" list aligns with the Buying Champion profile. Improvement themes are execution priorities, not narrative shifts.</p>
    </div>
  )
}

function AppendixMarkStory() {
  return (
    <div className="narrative-content">
      <p>One of the first people to actually buy the Oasis Consumer Browser for $20/mo—rather than join the waitlist—was <strong>Mark H.</strong></p>
      <p><strong>Profile:</strong> Mark holds a JD and MBA from the University of Toledo. He works in Regulatory Applications at the Federal Reserve Bank of Richmond (Charlotte, NC), where he processes applications from state member banks, bank holding companies, and their shareholders. His role involves the Bank Holding Company Act, Change in Bank Control Act, Federal Reserve Act, and Federal Deposit Insurance Act. He has a long tenure in corporate compliance and regulatory work across the Federal Reserve System (Richmond, Cleveland) and Fifth Third Bank.</p>
      <p><strong>Why he bought:</strong> Mark is a knowledge worker whose work lives in the browser—research, regulatory documents, compliance workflows. He was looking for a better way to manage his tabs and reduce friction. The AI commands sold him. He paid $20 to try Oasis rather than wait on the waitlist.</p>
      <p><strong>What it signals:</strong> Individuals will pay for an elegant, productivity-focused browser when they can try it with low friction. Mark's conversion validates that the $20 trial and skip-the-waitlist for company employees creates a path from B2C to potential enterprise pipeline—employees at regulated institutions (banks, Fed) who adopt Oasis could become champions for team or org-wide adoption.</p>
    </div>
  )
}

function AppendixB2CHelpsB2B() {
  return (
    <div className="narrative-content">
      <p>The Oasis Consumer Browser isn't just for individuals—it <strong>smooths the B2B sales process</strong>. Enterprise prospects (like Culture Amp) can try the consumer version <em>right away</em> to get a sense of the product's quality, even before the enterprise version with Okta, Netskope, and managed sessions is ready.</p>
      <p><strong>How it works:</strong></p>
      <ul>
        <li>The consumer version is <strong>ready out of the box</strong>—install and use. No enterprise integrations required.</li>
        <li>B2B prospects can <strong>install the consumer browser today</strong> and experience the elegant UX, productivity features, and AI commands.</li>
        <li>That experience builds confidence: "If the consumer version feels this good, the enterprise version (with SSO, DLP, policy enforcement) will be worth the pilot."</li>
        <li>People at companies can <strong>skip the waitlist</strong> by filling out a form (how they found us, what they plan to use it for, contact info). We give priority to employees at companies.</li>
      </ul>
      <p><strong>Bridge to B2B:</strong> The features that make Oasis elegant for work in the consumer version are also in the enterprise version. The enterprise version expands the feature set (SSO, DLP, managed sessions, policy enforcement) for organizations. So when a prospect like Julian evaluates Oasis for contractor access, they—or their team—may have already tried the consumer version and know the core experience is strong.</p>
      <p>See the <Link to="/b2b-strategic-narrative">B2B Strategic Narrative</Link> for the enterprise buyer story.</p>
    </div>
  )
}

export default B2CStrategicNarrative
