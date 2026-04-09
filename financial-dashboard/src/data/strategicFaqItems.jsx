import React from 'react'
import { Link } from 'react-router-dom'
import { OASIS_LOI_LETTER_DOC_URL } from '../constants/oasisCommercialDocs'

export const FAQ_ITEMS = [
  { category: 'B2C ($20 paying customer)', question: 'How did Mark find us, and how can we replicate that path for more users like him?', answer: <>Stripe does not store acquisition source. Check Customer metadata if we passed source when creating the subscription. Set up UTM parameters on all links (blog, YouTube, Product Hunt). In Mixpanel, capture acquisition_source from UTM/referrer at first touch and store as a user property. Build funnel: first touch → signup → install → payment. See the <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0#heading=h.v2sf8fr2wh2j" target="_blank" rel="noopener noreferrer">GTM Mixpanel Boards &amp; Reports project charter</a> for creating attribution funnels. Outreach: Emailed Mark with support offer and calendar link for a complimentary demo. Ask: &quot;How did you first hear about Oasis?&quot; and &quot;What made you subscribe?&quot; to capture attribution and feedback.</> },
  { category: 'B2C', question: 'What made him convert to paid vs. staying on the waitlist?', answer: (
  <>
    <p>Survey: Send a short 3–5 question survey within 24–48 hours of subscription (Typeform, Tally, or in-app). In-app is ideal—use an in-AI-chat prompt (see mockup below). Reward: gift extra credits on their plan for completing the response. Interview: For early customers (e.g., Mark), offer a 15-min call or async Loom. Hybrid: Automate the in-chat survey for all subscribers; do interviews for the first 5–10 paying customers.</p>
    <div className="faq-chat-mockup" aria-label="Example in-app chat UI for subscription survey">
      <div className="chat-mockup-header">
        <span className="chat-mockup-logo">Oasis</span>
        <span className="chat-mockup-badge">AI</span>
      </div>
      <div className="chat-mockup-messages">
        <div className="chat-msg chat-msg-ai">
          <div className="chat-msg-avatar">◆</div>
          <div className="chat-msg-bubble">
            What made you decide to subscribe today?
          </div>
        </div>
        <div className="chat-msg chat-msg-user">
          <div className="chat-msg-bubble">
            I was trying to find a better way to manage my tabs—the AI commands sold me.
          </div>
          <div className="chat-msg-avatar">You</div>
        </div>
      </div>
      <div className="chat-mockup-input">
        <input type="text" placeholder="Type your response..." readOnly aria-hidden="true" />
        <button type="button" className="chat-mockup-skip" disabled aria-hidden="true">Skip</button>
        <button type="button" className="chat-mockup-credits" disabled aria-hidden="true">+7 credits</button>
      </div>
    </div>
  </>
) },
  { category: 'B2C', question: 'What would make him stick past month one and refer others?', answer: (
  <>
    <p>Retention: Compare engaged users (30+ days) vs. churned users. Ask in the in-chat survey (see mockup below). Track usage in Mixpanel and look for patterns. Referral: NPS follow-up: &quot;What would make you recommend Oasis to a colleague?&quot; Interview power users. Test referral incentives (e.g., invite a friend, get extra credits). Add share prompts at high-value moments.</p>
    <div className="faq-chat-mockup" aria-label="Example in-app chat UI for retention survey">
      <div className="chat-mockup-header">
        <span className="chat-mockup-logo">Oasis</span>
        <span className="chat-mockup-badge">AI</span>
      </div>
      <div className="chat-mockup-messages">
        <div className="chat-msg chat-msg-ai">
          <div className="chat-msg-avatar">◆</div>
          <div className="chat-msg-bubble">
            What would make you use Oasis more often?
          </div>
        </div>
        <div className="chat-msg chat-msg-user">
          <div className="chat-msg-bubble">
            I&apos;d use it more if I could get a quick summary of my tabs at the end of the day.
          </div>
          <div className="chat-msg-avatar">You</div>
        </div>
      </div>
      <div className="chat-mockup-input">
        <input type="text" placeholder="Type your response..." readOnly aria-hidden="true" />
        <button type="button" className="chat-mockup-skip" disabled aria-hidden="true">Skip</button>
        <button type="button" className="chat-mockup-credits" disabled aria-hidden="true">+7 credits</button>
      </div>
    </div>
  </>
) },
  { category: 'B2C', question: 'How do we turn this single conversion into a repeatable funnel (content, SEO, Product Hunt, etc.)?', answer: <>Map all acquisition channels (SEO, YouTube, Product Hunt, waitlist, referrals, outbound). For each, estimate effort, cost, reach, and conversion potential. Use Mark&apos;s path (FAQ 1) as a reference. Prioritize by effort vs. impact: Product Hunt (one-time, high reach; needs NPS + Sprint 15/10), Content Pipeline (blog + YouTube for ongoing organic), waitlist (150 users; email when ready), referrals (invite-a-friend credits after NPS is strong), outbound (coffee chats, demos). Add UTMs to all links for Mixpanel attribution. Build funnel: top (content, Product Hunt) → middle (waitlist, install) → bottom (paid, demos). See the <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">GTM Mixpanel Boards &amp; Reports project charter</a> for implementing this.</> },
  { category: 'B2B (Culture Amp)', question: 'What specifically resonated in the demo, and what gaps did they surface?', answer: (
  <>
    <p>The biggest issue: we didn&apos;t have a Chromium enterprise version of Oasis to demo or give Julian to test. Culture Amp is ready to invest, but we don&apos;t have the product ready. We&apos;ve assigned <strong>Kaushik, Revanth, Atharva, Ruturaj, and Mohammed</strong> to <Link to="/sprints">Sprint 17</Link> (Oasis Chromium Enterprise Browser with Okta integration).</p>
    <p>Debrief with sales to capture what resonated and what gaps. Below is the enterprise readiness checklist that broadly applies to prospects like Culture Amp:</p>
    <div className="faq-enterprise-checklist">
      <div className="faq-checklist-section"><strong>1. Identity &amp; Access Management (Critical):</strong> SAML 2.0/SSO, multiple IDPs (Okta, EntraID), RBAC, Admin vs User separation</div>
      <div className="faq-checklist-section"><strong>2. Browser Security Controls:</strong> Domain allowlist/denylist, configurable disable for downloads, uploads, clipboard, printing, file system, extensions, developer tools</div>
      <div className="faq-checklist-section"><strong>3. Session Security:</strong> Idle timeout, clear cache on logout, ephemeral sessions, block credential storage</div>
      <div className="faq-checklist-section"><strong>4. Network &amp; DLP:</strong> Proxy config, DNS enforcement, SSL inspection / enterprise CA injection, Netskope compatibility</div>
      <div className="faq-checklist-section"><strong>5. Deployment:</strong> No admin required, user-level install, clean uninstall, auto-update, macOS + Windows, version management</div>
      <div className="faq-checklist-section"><strong>6. Commercial Readiness:</strong> Per-user per-month licensing, usage metering, contract provisioning, onboarding playbook, offboarding automation</div>
      <div className="faq-checklist-section"><strong>7. Enterprise Documentation:</strong> Security whitepaper, architecture, DLP/IdP integration guides, deployment guide, compliance mapping</div>
    </div>
    <p>See the <a href="#marketing">Julian case study</a> and CULTURE_AMP_ESTIMATE.md for context.</p>
  </>
) },
  { category: 'B2B', question: 'Who else at Culture Amp needs to be involved, and what do they care about?', answer: 'The team responsible for Netskope DLP needs to be involved. Julian wasn\'t responsible for choosing Netskope DLP—whoever owns that will need to be satisfied with how we implement DLP integration. Map them: who owns Netskope, what are their criteria, what would block sign-off? According to Julian, the executive team was "fine" with Island and Surf pricing: $12K–$25K minimum annual commitment, $108–$150 per user per seat annually. Decision criteria: DLP compatibility, pricing fit, no-admin installation, Chromium-based.' },
  { category: 'B2B', question: 'How do we move from "pricing comparison" to a pilot or LOI?', answer: <><p>Adam emailed Julian a PDF proposal with this structure: (1) <strong>Deposit</strong> — $5K refundable, payable when ready to move forward; (2) <strong>Netskope validation</strong> — once deposit is paid, meet with the team managing Netskope DLP to confirm integration is achievable; (3) <strong>Refund</strong> — if requirements cannot be delivered, full refund, no questions asked; (4) <strong>Deployment</strong> — if achievable, $5K converts to minimum upfront commitment; pricing thereafter $8/user/month. Next step: if Julian agrees, schedule a session with their security team (as early as next week). Pilot success →{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a>. Use the{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">Enterprise LOI Template</a> when ready.</p><p>In the meantime, we are building the Oasis Chromium Enterprise browser. Once the team (Atharva, Revanth, Kaushik, Ruturaj, and Mohammed) feels we have a demo-able, testable product, we will reach back out to Culture Amp. Even if they have moved forward with another vendor, we can still let them know we are a real option.</p><p><strong>Commercial documentation quality:</strong> We are heavily investing in refining our{' '}
<strong><a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">Letter of Engagement</a></strong>, <strong>RFP</strong>, and <strong>RFQ</strong> templates so they are professional, clear, and pristine—materials that increase buyer confidence during evaluation and procurement. Over time, these assets will help us convert demand from prospects like Julian into signed{' '}
<strong><a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">Letters of Engagement</a></strong> and move discussions forward faster.</p></> },
  { category: 'B2B', question: 'What timeline are they working with, and what would block a pilot?', answer: 'Culture Amp said they would be ready to deploy when we are ready. They are losing money day by day from shipping computers to contractors—on average $1,500 per contractor. They expect to have 20 contractors, so the cost pressure is significant. Timeline urgency favors us. The biggest blocker for this client is our lack of a product ready to solve their problem. We are building a version that meets their expectations in a way we believe will also meet other future prospects\' expectations. Other potential blockers: Netskope DLP validation, lack of SOC 2, or internal procurement.' },
  { category: 'B2B', question: 'Who else in their space (HR tech, people analytics) could follow the same playbook?', answer: <>Target companies that are losing money on contractors who receive hardware and would prefer a cheaper BYOD policy with an enterprise browser. This includes companies that constantly hire contractors or are in a hiring phase—e.g., HR tech, people analytics, professional services, consulting firms. Build a target list from Culture Amp adjacencies and companies with similar contractor-heavy, hardware-cost pain. Use job sites to find prospects: on Wellfound, filter by &quot;job seekers&quot; and look for companies hiring for contractor roles; use other job boards to find contractor openings at various companies. Focus on companies with a large enough head count—e.g., over 500 employees. Learn more from this case study, then create blog content (see <Link to="/content-pipeline">Content Pipeline</Link>) that speaks to these problems—contractor hardware costs, BYOD vs. managed devices, enterprise browser for secure contractor access.</> },
  { category: 'Product & positioning', question: 'Are we selling the same product to B2C and B2B, or two different offerings?', answer: <><p>The consumer browser is helpful for many employees and can be installed and used right away for work and productivity. The features that make it elegant for work in the consumer version are also in the enterprise version; the enterprise version expands the feature set to include capabilities for organizations (SSO, DLP, managed sessions, etc.). The consumer version also provides a way for organizations to try out the product and get a sense of what it&apos;s like before scheduling a demo, doing a discovery call, asking about enterprise pricing, or moving to an enterprise plan. People can skip the waitlist by filling out a more robust form (how they found us, what they plan to use it for, contact information, whether they&apos;re at a company); we give priority to employees at companies. Frankly, we feel anyone at a company should be able to pay $20 to try it out.</p><p>Eventually we can offer a fully free plan, but for now we withhold it—doing so lets us validate markets and focus on paying users only; once a free plan is available, we have to support free users.</p><div className="faq-validation-criteria"><div className="faq-validation-criteria-title">Acceptance criteria to launch a limited free tier</div><ul className="faq-validation-criteria-list"><li><strong>Paying users:</strong> ~15+ paying users, with at least 5+ who have been paying for 30+ days—shows retention, not just trial signups.</li><li><strong>NPS:</strong> Positive or trending positive—we don&apos;t want to scale free before promoters outweigh detractors.</li><li><strong>Mixpanel usage:</strong> Active usage—weekly active users, feature adoption, session patterns—confirms people use the product, not just pay and churn.</li><li><strong>Support &amp; limits:</strong> Basic support in place; clear free-tier limits (credits, time, or features).</li><li><strong>Attribution:</strong> Know how users find us so we can assess whether free users fit our target.</li></ul></div></> },
  { category: 'Product & positioning', question: 'What is the clearest story for each: individual knowledge workers vs. enterprise secure access?', answer: <><p><strong>Individual knowledge workers (B2C)</strong></p><p><em>Problems:</em> Tab overload, distraction, context switching, information scattered across windows—productivity drains that make it hard to focus and find what matters. Many workers feel their default browser wasn&apos;t built for serious work.</p><p><em>Motivations:</em> Get more done with less friction, reduce cognitive load, have a browser that feels designed for work. They want to try something better without a long commitment—install, use, and see if it helps.</p><p><em>Key filter:</em> The lure is the promise of the most elegant user experience. The draw is based on user experience and feeling—that&apos;s how we separate ourselves from competitors. It&apos;s called Oasis for a reason.</p><p><strong>Enterprise secure access (B2B)</strong></p><p><em>Problems:</em> High cost of shipping and managing hardware for contractors (e.g., $1,500+ per contractor); need secure SaaS access without full device management; compliance and DLP requirements for contractor access; slow onboarding when every contractor needs a company device.</p><p><em>Motivations:</em> Cut hardware costs with a BYOD-friendly approach; give contractors secure, policy-enforced access without shipping laptops; onboard contractors faster; meet security and compliance requirements (Okta, Netskope DLP) while reducing operational overhead.</p><p><em>Key filter:</em> We position ourselves as a worthy competitor on security, and we truly shine on productivity and being the most elegant of all enterprise browsers.</p></> },
  { category: 'Product & positioning', question: 'Which features matter most for each segment?', answer: <><p><strong>B2C (individual knowledge workers):</strong> Tab management and AI commands that reduce cognitive load; elegant, friction-free UX (install and use); low-friction trial ($20, skip-the-waitlist for company employees); features that make work feel easier—the &quot;Oasis&quot; experience. Prioritize: core productivity, then referral and retention hooks.</p><p><strong>B2B (enterprise secure access):</strong> Chromium engine; Okta SSO; Netskope DLP integration; managed browser (session isolation, policy enforcement); no-admin, user-level install; per-user-per-month licensing. Prioritize: Okta + managed browser first (Sprint 17), then Netskope DLP validation. See <a href="#marketing">Julian case study</a> and CULTURE_AMP_ESTIMATE.md for full requirements.</p></> },
  { category: 'Product & positioning', question: 'What is the minimum we need to close a Culture Amp–style deal?', answer: <><p><strong>Minimum for demo:</strong> Chromium engine (✅ have); basic Okta SSO; basic Netskope DLP (policy evaluation, blocking); managed browser (session isolation); portable, no-admin install; basic licensing validation. CULTURE_AMP_ESTIMATE.md estimates ~80 story points, 6–8 weeks for Phase 1 MVP.</p><p><strong>Production-ready:</strong> Full Netskope DLP, advanced policy management, complete licensing system, security hardening, comprehensive testing. Add ~56 story points, 4–6 weeks. SOC 2 may be required—confirm with prospect.</p><p><strong>Phased path:</strong> Offer demo/POC with MVP, then iterate. See CULTURE_AMP_ESTIMATE.md for full breakdown, risks, and next steps.</p></> },
  { category: 'Go-to-market', question: 'Should we prioritize more B2C, more B2B, or both in parallel?', answer: <><div className="faq-decision-framework"><div className="faq-decision-framework-rate-limiter">Rate-limiting factor: Having the enterprise product ready in a form that elicits a greenlight for an{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a> or pilot. That puts us in position to seek Seed funding.</div><div className="faq-decision-framework-title">Decision framework</div><div className="faq-decision-framework-subtitle">Guides engineering, product, and product marketing</div><div className="faq-decision-framework-section"><div className="faq-decision-framework-section-title">Engineering &amp; product</div><p>Until the enterprise product is demo- and pilot-ready, allocate the majority of capacity to Chromium Enterprise (Sprint 17). Maintain a minimum viable consumer track—fixes, stability, conversion—but avoid major new consumer features that divert from the enterprise milestone.</p><p>Once pilot-ready, rebalance based on pipeline: more B2C if we need more paying users for free-tier validation; more B2B if we have{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a> momentum.</p></div><div className="faq-decision-framework-section"><div className="faq-decision-framework-section-title">Product marketing &amp; content</div><p>Until enterprise is ready, content should support both: consumer content (productivity, elegant UX) that attracts individuals and company employees; enterprise-oriented content (contractor costs, BYOD, secure access) that warms prospects and builds credibility.</p><p>When enterprise is pilot-ready, lean into case studies, demos, and enterprise-specific assets. Content choices signal where we expect growth.</p></div><div className="faq-decision-framework-section faq-decision-framework-triggers"><div className="faq-decision-framework-section-title">Trigger to rebalance</div><div className="faq-decision-framework-trigger-item"><span className="faq-decision-framework-trigger-condition">Signed{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a> or pilot greenlight</span> → shift more resources to B2B delivery and enterprise content.</div><div className="faq-decision-framework-trigger-item"><span className="faq-decision-framework-trigger-condition">Consumer validation complete</span> (15+ paying, positive NPS) → consider limited free tier and more B2C growth.</div></div></div></> },
  {
    category: 'Go-to-market',
    question: 'What channels (content, Product Hunt, outbound, referrals) are most likely to produce more Marks and more Culture Amps?',
    answer: (
      <>
        <p>
          Keep this simple: prioritize channels by <strong>speed to signal</strong> and <strong>repeatability</strong>, then scale
          what converts.
        </p>
        <ul className="faq-case-study-steps">
          <li>
            <strong>Content (always-on):</strong> Blog content is the compounding channel for both B2C and B2B. Keep publishing
            targeted pieces and track which topics drive qualified signups. See <Link to="/content-pipeline">Content Pipeline</Link>.
          </li>
          <li>
            <strong>Product Hunt (timed burst):</strong> Use as a launch moment once product readiness and NPS support conversion.
          </li>
          <li>
            <strong>Outbound + referrals (high intent):</strong> Outbound for targeted enterprise accounts; referrals for warm B2C
            and B2B introductions.
          </li>
          <li>
            <strong>Measurement:</strong> UTMs + Mixpanel funnel (first touch → signup → install → paid), segmented by B2C vs B2B.
          </li>
        </ul>
      </>
    ),
  },
  { category: 'Go-to-market', question: 'How do we turn Culture Amp into a case study and proof point?', answer: <><p>Industry-standard steps to create a case study that reflects Culture Amp&apos;s success without upsetting the client:</p><ol className="faq-case-study-steps"><li><strong>Set expectations early:</strong> Before or during the pilot, mention that we&apos;d love to share their story if the pilot succeeds. No pressure—plant the seed so it&apos;s not a surprise later.</li><li><strong>Document during the pilot:</strong> Track metrics (cost savings, contractor count, onboarding time, user feedback). Capture quotes and anecdotes in real time. Get specific numbers—&quot;we saved $X&quot; or &quot;onboarding dropped from Y days to Z&quot;—before memories fade.</li><li><strong>Request permission formally:</strong> After pilot success, send a clear request: &quot;We&apos;d like to create a case study. Here&apos;s what we propose.&quot; Offer options: named case study, anonymized, or quote-only. Let them choose the level of visibility.</li><li><strong>Draft and submit for review:</strong> Write the case study (problem → solution → results). Submit to their marketing/legal for approval. Use their preferred review process—some want a single contact, others want multiple sign-offs.</li><li><strong>Honor their edits:</strong> Accept their changes without pushback. If they want to soften a claim or remove a metric, comply. The relationship matters more than the perfect quote.</li><li><strong>Get written approval:</strong> Obtain sign-off in writing (email is fine) before publishing. Confirm where we can use it (website, sales deck, blog, LinkedIn, press).</li><li><strong>Publish and share:</strong> Publish on our website, blog, and sales materials. Share on LinkedIn (tag them only if they&apos;ve agreed). Use in outbound to similar prospects.</li><li><strong>Keep them in the loop:</strong> Send them the final version before it goes live. Thank them. Don&apos;t overuse—respect their brand and avoid making them feel like a marketing prop.</li></ol></> },
  { category: 'Go-to-market', question: 'What is our plan if they say yes vs. if they say no or stall?', answer: <><p><strong>If they say yes:</strong> Schedule Netskope DLP validation with their security team; collect deposit; execute pilot; deliver. Pilot success →{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a> → case study → Seed funding path. Use as proof point for similar prospects.</p><p><strong>If they say no or stall:</strong> Keep building Chromium Enterprise (Sprint 17); reach out to other targets (contractor-heavy companies, 500+ employees, job boards); re-engage when product is demo-ready, even if they&apos;ve chosen another vendor; treat as a learning signal for product and positioning.</p></> },
  { category: 'Operations & readiness', question: 'Do we have the right pricing, packaging, and contracts for enterprise?', answer: <><p><strong>Competitor comparison (Culture Amp context):</strong></p><div className="faq-pricing-table"><div className="faq-pricing-row faq-pricing-header"><span>Vendor</span><span>Minimum</span><span>Per user</span></div><div className="faq-pricing-row"><span>Island</span><span>$25K annual</span><span>$150/user/year</span></div><div className="faq-pricing-row"><span>Surf</span><span>$12K annual</span><span>$108/user/year</span></div><div className="faq-pricing-row"><span>Oasis</span><span>$12K annual</span><span>Flat organization-wide</span></div></div><p><strong>Packaging:</strong> $12K annual minimum, flat organization-wide pricing (not per user). This fits inside competitor annual minimum ranges (Island, Surf) and keeps procurement straightforward. Pilot structure (refundable deposit) can still apply for early prospects.</p><p><strong>Contracts:</strong>{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">Enterprise LOI template</a> in use. Gaps to define: SOC 2 terms, SLAs, support levels, renewal terms.</p><p><strong>Next steps:</strong> Validate pricing with more prospects; document packaging tiers; finalize contract terms for pilot/{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a>.</p></> },
  {
    category: 'Operations & readiness',
    question: 'What is our SOC 2 and security story for enterprise buyers?',
    answer: (
      <>
        <p>
          <strong>Status:</strong> SOC 2 is in progress. We should clearly communicate this on the website so enterprise buyers know
          we can engage while certification is underway.
        </p>
        <p>
          <strong>Website implementation (simple):</strong> add a short trust statement in the footer and on enterprise/security
          pages: &quot;SOC 2 Type II certification in progress.&quot; This helps reduce friction in pilot and{' '}
          <a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOI</a> conversations.
        </p>
        <p>
          <strong>Platform decision:</strong> we are comparing <strong>Vanta</strong> vs <strong>Delve</strong>. Delve may offer
          faster startup execution; Vanta may be stronger for broader audit-first enterprise expectations. Final selection should be
          based on demo outcomes, implementation effort, and total cost.
        </p>
      </>
    ),
  },
  { category: 'Operations & readiness', question: 'Who owns the Culture Amp relationship and next steps?', answer: 'Adam Kershner owns the Culture Amp relationship and next steps. Engineers on the enterprise browser Sprint 17 project: Revanth, Mohammed, Atharva, Ruturaj, Kaushik.' },
  { category: 'Operations & readiness', question: 'What do we need to deliver in a pilot, and can we do it?', answer: <><p><strong>Pilot scope (Phase 1 MVP):</strong> Basic Okta SSO; basic Netskope DLP (policy evaluation, blocking); managed browser (session isolation); portable, no-admin install; basic licensing validation. ~80 story points, 6–8 weeks per CULTURE_AMP_ESTIMATE.md.</p><p><strong>Can we do it?</strong> Yes, with Sprint 17 (Revanth, Mohammed, Atharva, Ruturaj, Kaushik) focused on Chromium Enterprise. Dependencies: Okta developer account, Netskope API access, Culture Amp test environment. Clarify with Julian: specific DLP policies, deployment model, support expectations. See CULTURE_AMP_ESTIMATE.md for full requirements and phased approach.</p></> },
  { category: 'Learning & iteration', question: 'What is the single most important thing we learned from Mark and from Culture Amp?', answer: <><p><strong>From Mark:</strong> Individuals will pay for an elegant, productivity-focused browser when they can try it with low friction. The $20 trial and skip-the-waitlist for company employees creates a path from B2C to enterprise pipeline.</p><p><strong>From Culture Amp:</strong> Enterprise buyers are ready when we are—but we must have a demo-ready product. The biggest blocker was not interest or pricing; it was product readiness. Contractor hardware cost pain ($1,500/contractor) creates urgency; a refundable deposit reduces buyer risk.</p><p><strong>Synthesis:</strong> Both segments want the same core—an elegant, productive browser. The rate limiter is having the right product at the right moment: for Mark, the consumer version; for Culture Amp, the enterprise wrapper (SSO, DLP, managed sessions). Build the enterprise product; the demand is there.</p></> },
  { category: 'Learning & iteration', question: 'What would we do differently if we could re-run the last 6 weeks?', answer: <><p>Run a team retrospective to identify what people feel we could have done differently.</p><div className="faq-retrospective"><div className="faq-retrospective-title">Prompts to guide the discussion</div><ul className="faq-retrospective-prompts"><li>What would we start doing?</li><li>What would we stop doing?</li><li>What would we do more of? Less of?</li><li>What surprised us? What would we do earlier next time?</li></ul></div></> },
  { category: 'Learning & iteration', question: 'What is the one metric we should focus on for the rest of Q2?', answer: <><p>The priority is simple: <strong>get 3{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">Letters of Intent (LOIs)</a> signed as quickly as possible.</strong></p></> },
  { category: 'Learning & iteration', question: 'What would make Q2 a clear success vs. "we tried a lot of things"?', answer: <><div className="faq-success"><div className="faq-success-criteria"><div className="faq-success-criteria-title">Clear success</div><div className="faq-success-criteria-subtitle">Hitting defined outcomes, not just activity</div><div className="faq-success-criteria-grid"><div className="faq-success-criteria-item"><strong>B2C</strong> — 15+ paying customers (ideally 40); NPS over 30; attribution in place; Sprint 15 (automatic software updates) complete.</div><div className="faq-success-criteria-item"><strong>B2B</strong> — Enterprise product demo-ready; 3 signed{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOIs</a>.</div><div className="faq-success-criteria-item"><strong>Investor</strong> — Multiple potential investors have told us they are interested and would be more ready to deploy capital once we have signed{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOIs</a>.</div><div className="faq-success-criteria-item"><strong>Operations</strong> — SOC 2 in progress; website updated; ownership assigned.</div></div></div><div className="faq-success-message"><p>We can accomplish what we set our minds to when we work together and believe in each other. We got a paying customer and attracted an enterprise in a short period of time. Sky is the limit for this team.</p></div><div className="faq-success-anti"><strong>&quot;We tried a lot of things&quot;</strong> — scattered activity without these outcomes: many demos, content, and experiments but no{' '}
<a href={OASIS_LOI_LETTER_DOC_URL} target="_blank" rel="noopener noreferrer">LOIs</a>, no clear path to 15+ paying users, no investor alignment.</div></div></> },
]
