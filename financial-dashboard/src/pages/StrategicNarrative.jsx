import React, { useState } from 'react'
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
  { id: 'julian-story', title: "Appendix: Julian's Story" },
]

function StrategicNarrative() {
  const [openSection, setOpenSection] = useState(null)
  const toggleSection = (id) => setOpenSection(openSection === id ? null : id)

  return (
    <div className="page">
      <div className="page-header">
        <h1>Strategic Narrative: Buying Champion</h1>
        <p className="page-subtitle">
          Enterprise Solutions Architect / Security Architect (Julian-type persona at Culture Amp–like companies). Exercise completed February 2026.
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
                {s.id === 'julian-story' && <AppendixJulianStory />}
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
        <li><strong>Company size:</strong> 1,000–3,000 employees (global, hybrid workforce; heavy contractor/third-party usage)</li>
        <li><strong>Industry:</strong> B2B software, tech-enabled services, HR tech, management consulting, professional services, internet/online services</li>
        <li><strong>Location:</strong> US- or ANZ-based HQ with offices in North America, EMEA, and/or APAC</li>
        <li><strong>Job titles:</strong> Enterprise Solutions Architect, Security Architect, Solutions Architect, Zero Trust Architect, Cloud Security Architect, IT Security Architect, Director of Security Architecture, Director of IT/Infrastructure, Head of Security Engineering, Manager of Identity & Access Management (IAM)</li>
      </ul>

      <h3>Background</h3>
      <p><strong>Career path / experience:</strong> 10–15 years in IT, security, or infrastructure—early roles in systems/network engineering or IT operations, then architecture or security-focused positions. Has designed and run zero-trust/SASE initiatives, integrated IdP/MFA and DLP tools, and led vendor evaluations (browsers, endpoint, identity). Often owns or heavily influences secure access for contractors and third parties.</p>
      <p><strong>Educational credentials:</strong> Bachelor's in Computer Science, Information Systems, Cybersecurity, or related technical/STEM field. Many have a master's (e.g., MS in Cybersecurity, Information Assurance, or MBA with technology focus). Certifications often include CISSP, CISM, CCSP, or vendor-specific (Okta, cloud/SASE).</p>
      <p><strong>Comfort with technology:</strong> Very high. Evaluates enterprise software and security platforms regularly, reads technical docs and APIs, runs or oversees PoCs.</p>

      <h3>Goals and Objectives</h3>
      <p><strong>Main business objectives:</strong></p>
      <ol>
        <li>Reduce contractor time-to-first-access to under 48 hours and cost per contractor to under $200 (vs. $1,500+ device and manual setup).</li>
        <li>Achieve 95%+ coverage of contractor/third-party access via managed browser and reduce browser-related policy incidents by 40%+ within 12 months.</li>
        <li>Integrate enterprise browser with IdP and DLP so policy deployment happens in under 24 hours and provisioning/deprovisioning is automatic from HR.</li>
      </ol>
      <p><strong>Additional goals:</strong> Keep contract within approved budget band ($12K–$30K annual minimum) and close within 90 days; achieve 70%+ pilot adoption within 30 days; keep support tickets under 5% of pilot users.</p>

      <h3>Problems and Barriers</h3>
      <p><strong>Problems:</strong></p>
      <ol>
        <li>Shipping full laptops to contractors costs $1,500+ per device and ~$200/hour in setup time.</li>
        <li>Chrome Enterprise can't enforce security and DLP policies on third-party devices.</li>
        <li>The security team has already standardized on tools like Netskope; any new browser must integrate with that stack.</li>
      </ol>
      <p><strong>Business impact:</strong> Higher cost per contractor and delayed time-to-productivity; missed security and compliance goals; slower vendor selection and pilot timelines.</p>
      <p><strong>Barriers:</strong> Technical limits of Chrome; integration uncertainty with IdP and DLP; procurement and budget process; risk of low adoption.</p>

      <h3>Objections</h3>
      <p><strong>Reasons they might hesitate:</strong> Integration risk; vendor maturity; lock-in; user experience; pricing and contract.</p>
      <p><strong>Issues to address:</strong> Netskope integration; Okta integration; no-admin install; Chromium compatibility; licensing model; pilot path.</p>

      <h3>Ideal Customer Journey</h3>
      <p><strong>Awareness:</strong> Chrome Enterprise fails on policy enforcement; shipping laptops is too costly—so they must find a managed browser.</p>
      <p><strong>Consideration:</strong> Ease of integration with Okta and Netskope; policy enforcement on third-party devices; Chromium compatibility; pricing flexibility; low-risk pilot path.</p>
      <p><strong>Decision:</strong> When everything else is comparable, Oasis delivers a more elegant, ergonomic browsing experience that users actually like using.</p>

      <h3>Quotes and Anecdotes</h3>
      <ul>
        <li>"We were close to rolling out Chrome Enterprise, but pushing policy to devices we don't own just won't work." — Julian, Jan 2026</li>
        <li>"I need to see, touch, feel the browser with real consultants before I can commit." — Julian, Jan 2026</li>
        <li>"Shipping $1,500 laptops plus $200 an hour in setup for short-term consultants just doesn't scale." — Julian, Jan 2026</li>
      </ul>
    </div>
  )
}

function Section2ChangeStakes() {
  return (
    <div className="narrative-content">
      <h3>Major Change Disrupting the Market</h3>
      <p><strong>How has their industry evolved?</strong> Shift from network- and device-centric security (VPN, laptops, VDI) to zero-trust, browser- and identity-centric security.</p>
      <p><strong>Then vs. Now:</strong></p>
      <ul>
        <li><strong>Then:</strong> Contractors were given corporate laptops, VPN clients, and full endpoint agents; unmanaged devices were rare.</li>
        <li><strong>Now:</strong> Contractors expect to use their own devices from anywhere, and the browser has become the primary security control plane.</li>
      </ul>
      <p><strong>Which results are slipping?</strong> Contractor onboarding times and costs are getting worse—weeks and thousands of dollars per seat—while browser-based data risk is rising.</p>
      <p><strong>Which processes are on the verge of becoming irrelevant?</strong> Shipping laptops to every contractor, expanding VDI farms, and relying on network perimeter controls alone.</p>
      <p><strong>How is technology disrupting the norm?</strong> Cloud/SaaS, zero-trust architectures, and AI inside the browser are making the browser itself the new security perimeter.</p>
      <p><strong>How have cultural shifts impacted them?</strong> Hybrid and remote work have normalized contractors using their own devices from anywhere.</p>

      <h3>Stakes of Remaining with the Status Quo</h3>
      <p><strong>Worst-case scenario:</strong> If they stick with laptops/VDI and unmanaged Chrome, contractor costs keep spiraling, and eventually a data-loss or compliance incident lands on their desk.</p>
      <p><strong>Who wins and who loses:</strong> <strong>Winners:</strong> Companies that treat the browser as a first-class security and productivity platform. <strong>Losers:</strong> Those who cling to shipping laptops, VDI, and unmanaged consumer browsers.</p>
    </div>
  )
}

function Section3Villain() {
  return (
    <div className="narrative-content">
      <h3>Root Cause (The Villain)</h3>
      <p><strong>SaaS sprawl in the browser</strong>—the uncontrolled explosion of web apps, extensions, and shadow AI tools that all live inside the browser with no unified control or context.</p>
      <p>Refined: SaaS sprawl in the browser—the uncontrolled explosion of web apps, extensions, and shadow AI tools running inside unmanaged browsers, with no unified policy, visibility, or context.</p>
    </div>
  )
}

function Section4PromisedLand() {
  return (
    <div className="narrative-content">
      <h3>What can they now do thanks to your product?</h3>
      <ul>
        <li>Give contractors and third-party users secure SaaS access from their own devices in under 24–48 hours, with no laptops or VDI.</li>
        <li>Enforce unified browser policies (apps, data, and AI usage) across corporate and third-party devices, all from one control plane.</li>
        <li>Plug managed browser access cleanly into their Okta + Netskope stack.</li>
      </ul>
      <h3>How has their day-to-day job improved?</h3>
      <ul>
        <li>They spend time designing policies and workflows, not firefighting laptop logistics, VDI exceptions, and broken Chrome profiles.</li>
        <li>Reviews with security and execs are about progress and metrics, not excuses.</li>
        <li>They feel confident championing the solution because users actually like the browser.</li>
      </ul>
      <h3>What results are they now able to achieve?</h3>
      <ul>
        <li>80–90%+ reduction in cost per contractor.</li>
        <li>95%+ of contractor/third-party access running through the managed browser, with 40–60% fewer browser-related policy incidents.</li>
        <li>Contractor onboarding measured in hours instead of weeks.</li>
      </ul>
      <h3>How has their company benefited?</h3>
      <ul>
        <li>Lower security and compliance risk from SaaS sprawl and shadow AI, with audit-ready browser logs.</li>
        <li>Faster, cheaper scaling of contractor programs and external collaborations.</li>
        <li>Reputation internally as a company that combines modern security with a beautiful, productive user experience.</li>
      </ul>
    </div>
  )
}

function Section5Alternatives() {
  const alternatives = [
    { name: 'Shipping laptops + VPN/VDI', type: 'Status quo', strengths: 'Familiar, full device control; security and procurement understand it', limits: 'High cost ($1,500+ per consultant, ~$200/hr setup), slow onboarding (weeks), doesn\'t scale' },
    { name: 'Chrome Enterprise Premium', type: 'Competitor', strengths: 'Known brand, Chromium, low per-user cost (~$6/user/month)', limits: 'Can\'t enforce policy on third-party devices; profile precedence makes consistent security behavior unreliable' },
    { name: 'Island Enterprise Browser', type: 'Competitor', strengths: 'Strong enterprise browser with policy enforcement; established vendor; leadership has approved pricing ($25K min, ~$150/user/year)', limits: 'Heavier, security-first positioning; UX is less of a differentiator; higher minimum commit' },
    { name: 'Surf Browser', type: 'Competitor', strengths: 'Enterprise browser with policy control; lower minimum than Island ($12K, ~$108/user/year)', limits: 'Same category as Island—strong on security, less known for best-in-class UX and productivity' },
    { name: 'Netskope + policies only', type: 'Status quo / internal stack', strengths: 'Already mandated by security; provides DLP and cloud security', limits: 'Doesn\'t replace the browser as the control plane—SaaS sprawl, extensions, and shadow AI remain only partly visible and controllable' },
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
      <p><strong>Category name:</strong> Enterprise browser (or secure enterprise browser)</p>
      <p><strong>Category definition:</strong> A Chromium-based browser built for organizations to enforce security and data policies, control SaaS and AI usage, and give contractors and employees secure access from any device—without shipping laptops or VDI.</p>
      <p><strong>Positioning line:</strong> Oasis is the enterprise browser that brings unified control over SaaS sprawl and shadow AI in the browser, with an elegant, productivity-first experience that users actually want to use.</p>
    </div>
  )
}

function Section7CustomerLanguage() {
  return (
    <div className="narrative-content">
      <h3>Phrases you often hear</h3>
      <ul>
        <li>Secure access for contractors without shipping laptops</li>
        <li>Managed browser that works with Okta and Netskope</li>
        <li>Policy enforcement on third-party devices</li>
        <li>Chromium-based so our SaaS apps just work</li>
        <li>A browser our users actually want to use</li>
      </ul>
      <h3>Tasks you help accomplish</h3>
      <ul>
        <li>Give contractors secure SaaS access from their own devices</li>
        <li>Stop shipping laptops and avoid VDI for contractor access</li>
        <li>Enforce one set of browser policies on corporate and third-party devices</li>
        <li>Govern SaaS sprawl and AI usage in the browser from a single control plane</li>
        <li>Scale external collaboration without adding more hardware or agents</li>
      </ul>
      <h3>Search Terms / Queries</h3>
      <p className="narrative-search-terms">enterprise browser, what is an enterprise browser, managed browser, secure enterprise browser, best enterprise browser, best enterprise browsers 2025, Island enterprise browser comparison, Island vs Talon enterprise browser, secure browser for contractors, enterprise browser for zero trust, enterprise browser features, managed browser policy enforcement, browser security, why use an enterprise browser, enterprise browser adoption trends</p>
    </div>
  )
}

function Section8Budget() {
  return (
    <div className="narrative-content">
      <p><strong>Department that pays:</strong> IT or Security (often CISO or Infrastructure/Endpoint). Sometimes CIO, Digital Workplace, or shared IT & Security budget.</p>
      <p><strong>If you didn't exist, what would they buy?</strong> Island, Surf, or another enterprise browser; or Chrome Enterprise (and accept limited policy enforcement on third-party devices); or more VDI or laptops for contractor access.</p>
    </div>
  )
}

function Section9Differentiation() {
  const features = [
    { feature: 'Chromium-based engine', why: 'Full SaaS and app compatibility; familiar experience, minimal training' },
    { feature: 'Policy enforcement on third-party devices', why: "Core requirement Chrome Enterprise can't meet; enables contractor access without laptops" },
    { feature: 'Okta integration (SSO, provisioning/deprovisioning)', why: 'Fits their identity stack; automatic access lifecycle' },
    { feature: 'Netskope/DLP integration', why: 'Meets security mandate; single policy plane' },
    { feature: 'No local admin required', why: 'Contractors install on their own devices; no IT touch per machine' },
    { feature: 'Elegant, productivity-first UX', why: 'Users actually adopt it; fewer workarounds, better security outcomes' },
    { feature: 'Refundable pilot / deposit model', why: 'De-risks evaluation; easy internal sell' },
    { feature: 'Per-user-per-month pricing', why: 'Fits approved band; predictable, scalable' },
    { feature: 'Pre-defined contractor policies / HR→Okta→browser flow', why: "Fast rollout; Julian's ideal workflow" },
    { feature: 'Centralized audit logs and visibility', why: 'Compliance, incident response; single pane for browser activity' },
  ]
  const pillars = [
    { pillar: 'Elegant UX without sacrificing security', why: 'Competitors are security-first; Oasis is the one users want to use, so adoption and control both win' },
    { pillar: 'De-risked pilot path (refundable deposit)', why: "Competitors don't offer it; buyer can validate integration before full commitment" },
    { pillar: 'Policy on third-party devices, no admin', why: "Chrome can't do it; Island/Surf can but often heavier; Oasis delivers both control and simplicity" },
  ]
  return (
    <div className="narrative-content">
      <h3>Top Features (up to 10)</h3>
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
      <h3>Differentiation Pillars (2–3)</h3>
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
    { problem: "We can't keep shipping $1,500 laptops and spending $200/hour to onboard every contractor—it doesn't scale.", feature: 'Policy enforcement on third-party devices', capability: 'Enforce security and DLP policies in a managed browser on contractor-owned devices without laptops or VDI', value: '80%+ reduction in cost per contractor; onboarding in hours instead of weeks; contractor programs scale without more hardware' },
    { problem: "Chrome Enterprise almost worked, but we can't enforce policy on devices we don't own—so we're stuck.", feature: 'Managed browser with no local admin', capability: 'Contractors install and run the browser on their own devices without admin rights; policies apply regardless of device ownership', value: 'Secure contractor access without laptops or VDI; Chrome Enterprise gap closed; one solution for corporate and third-party devices' },
    { problem: "Our security team mandated Netskope—any browser we pick has to integrate, or we can't move forward.", feature: 'Okta + Netskope integration', capability: 'SSO, provisioning/deprovisioning, and DLP policies flow from identity and security stack into the browser', value: 'Meets security mandate; single policy layer; no new silos; faster security sign-off' },
    { problem: "If the browser feels clunky, users will work around it—and then our security controls are useless.", feature: 'Elegant, productivity-first UX', capability: 'Chromium-based browser designed for usability and productivity, not only security', value: 'Higher adoption; fewer workarounds; security controls actually get used; better compliance outcomes' },
    { problem: "We need to see, touch, feel before we commit—but we're worried integration won't work.", feature: 'Refundable pilot / deposit', capability: 'Deposit funds requirements gathering and integration validation; refund if integration is not feasible', value: 'Lower risk; faster internal approval; easier to start a pilot and validate before full commitment' },
    { problem: "We need per-user pricing that fits the band leadership already approved—Island and Surf set the range.", feature: 'Per-user-per-month with reasonable minimum', capability: 'Flexible per-user pricing and minimum commit that fits approved budget bands', value: 'Easier procurement; predictable spend; deal fits finance expectations' },
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

function AppendixJulianStory() {
  return (
    <div className="narrative-content">
      <p>After demoing Island and Surf, Julian requested a demo with Oasis and requested pricing, mentioning that executives at his company are fine with pricing in the range of Island and Surf.</p>
      <p>Julian leads a project at a global B2B software company to find the right enterprise browser for their consultants and third-party users. His goal: give short-term consultants secure access to the company's SaaS apps without shipping them full laptops.</p>
      <p>Today, they ship $1,500 laptops to each consultant and spend roughly $200/hour of internal time to provision, secure, and support them. Julian wants a managed, Chromium-based browser that runs on the consultant's own device, requires no local admin rights, and can be turned on and off automatically as contracts start and end.</p>
      <p>Julian's team got very close to rolling out Chrome Enterprise. But Chrome Enterprise couldn't reliably enforce security and DLP policies on third-party devices, and profile precedence made consistent security behavior unreliable. Meanwhile, the security team had already prescribed Netskope—any browser they pick must integrate cleanly with it.</p>
      <p>Oasis proposed a $5,000 refundable deposit to validate Netskope integration and policy enforcement; if it's not feasible, they get it back. Ongoing pricing is $8 per user per month, which fits comfortably inside the Island and Surf ranges leadership has already accepted.</p>
      <p><strong>When talking to similar prospects, sales can:</strong> Lead with the problem (secure SaaS access for contractors without laptops or VDI); emphasize policy enforcement on third-party devices as the core differentiator versus Chrome Enterprise; normalize minimum commitments by referencing Island and Surf; offer a de-risked pilot path (refundable deposit); and position Oasis as the enterprise browser that wins on elegant UX when security and integration are equal.</p>
    </div>
  )
}

export default StrategicNarrative
