import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Q1MidpointUpdate.css'
import hubspotLeadViewerImage from '../assets/hubspot-lead-viewer-fit-score.png'

const FAQ_ITEMS = [
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
  { category: 'B2B', question: 'How do we move from "pricing comparison" to a pilot or LOI?', answer: <><p>Adam emailed Julian a PDF proposal with this structure: (1) <strong>Deposit</strong> — $5K refundable, payable when ready to move forward; (2) <strong>Netskope validation</strong> — once deposit is paid, meet with the team managing Netskope DLP to confirm integration is achievable; (3) <strong>Refund</strong> — if requirements cannot be delivered, full refund, no questions asked; (4) <strong>Deployment</strong> — if achievable, $5K converts to minimum upfront commitment; pricing thereafter $8/user/month. Next step: if Julian agrees, schedule a session with their security team (as early as next week). Pilot success → LOI. Use the <a href="https://drive.google.com/file/d/11CUNNG3Y7ckHeJXY1IJYSwP-3n9sr_zB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Enterprise LOI Template</a> when ready.</p><p>In the meantime, we are building the Oasis Chromium Enterprise browser. Once the team (Atharva, Revanth, Kaushik, Ruturaj, and Mohammed) feels we have a demo-able, testable product, we will reach back out to Culture Amp. Even if they have moved forward with another vendor, we can still let them know we are a real option.</p><p><strong>SOC 2:</strong> We need to understand whether companies require SOC 2 compliance. If that is non-negotiable, we would incorporate it into the LOI and plan to fundraise from venture capital firms who want to support enterprise growth—part of what they fund would be SOC 2, plus a hiring plan for engineers who will support enterprise clients representing at least $75K–$100K ARR.</p><p><strong>Content &amp; credibility:</strong> More blog and YouTube content (see <Link to="/content-pipeline">Content Pipeline</Link>) focused on enterprise buyers—e.g., Julian, enterprise solutions architects—will attract more prospects and signal commitment to enterprises. We can also list logos of people at companies using the consumer version to add credibility.</p></> },
  { category: 'B2B', question: 'What timeline are they working with, and what would block a pilot?', answer: 'Culture Amp said they would be ready to deploy when we are ready. They are losing money day by day from shipping computers to contractors—on average $1,500 per contractor. They expect to have 20 contractors, so the cost pressure is significant. Timeline urgency favors us. The biggest blocker for this client is our lack of a product ready to solve their problem. We are building a version that meets their expectations in a way we believe will also meet other future prospects\' expectations. Other potential blockers: Netskope DLP validation, lack of SOC 2, or internal procurement.' },
  { category: 'B2B', question: 'Who else in their space (HR tech, people analytics) could follow the same playbook?', answer: <>Target companies that are losing money on contractors who receive hardware and would prefer a cheaper BYOD policy with an enterprise browser. This includes companies that constantly hire contractors or are in a hiring phase—e.g., HR tech, people analytics, professional services, consulting firms. Build a target list from Culture Amp adjacencies and companies with similar contractor-heavy, hardware-cost pain. Use job sites to find prospects: on Wellfound, filter by &quot;job seekers&quot; and look for companies hiring for contractor roles; use other job boards to find contractor openings at various companies. Focus on companies with a large enough head count—e.g., over 500 employees. Learn more from this case study, then create blog and YouTube content (see <Link to="/content-pipeline">Content Pipeline</Link>) that speaks to these problems—contractor hardware costs, BYOD vs. managed devices, enterprise browser for secure contractor access.</> },
  { category: 'Product & positioning', question: 'Are we selling the same product to B2C and B2B, or two different offerings?', answer: <><p>The consumer browser is helpful for many employees and can be installed and used right away for work and productivity. The features that make it elegant for work in the consumer version are also in the enterprise version; the enterprise version expands the feature set to include capabilities for organizations (SSO, DLP, managed sessions, etc.). The consumer version also provides a way for organizations to try out the product and get a sense of what it&apos;s like before scheduling a demo, doing a discovery call, asking about enterprise pricing, or moving to an enterprise plan. People can skip the waitlist by filling out a more robust form (how they found us, what they plan to use it for, contact information, whether they&apos;re at a company); we give priority to employees at companies. Frankly, we feel anyone at a company should be able to pay $20 to try it out.</p><p>Eventually we can offer a fully free plan, but for now we withhold it—doing so lets us validate markets and focus on paying users only; once a free plan is available, we have to support free users.</p><div className="faq-validation-criteria"><div className="faq-validation-criteria-title">Acceptance criteria to launch a limited free tier</div><ul className="faq-validation-criteria-list"><li><strong>Paying users:</strong> ~15+ paying users, with at least 5+ who have been paying for 30+ days—shows retention, not just trial signups.</li><li><strong>NPS:</strong> Positive or trending positive—we don&apos;t want to scale free before promoters outweigh detractors.</li><li><strong>Mixpanel usage:</strong> Active usage—weekly active users, feature adoption, session patterns—confirms people use the product, not just pay and churn.</li><li><strong>Support &amp; limits:</strong> Basic support in place; clear free-tier limits (credits, time, or features).</li><li><strong>Attribution:</strong> Know how users find us so we can assess whether free users fit our target.</li></ul></div></> },
  { category: 'Product & positioning', question: 'What is the clearest story for each: individual knowledge workers vs. enterprise secure access?', answer: <><p><strong>Individual knowledge workers (B2C)</strong></p><p><em>Problems:</em> Tab overload, distraction, context switching, information scattered across windows—productivity drains that make it hard to focus and find what matters. Many workers feel their default browser wasn&apos;t built for serious work.</p><p><em>Motivations:</em> Get more done with less friction, reduce cognitive load, have a browser that feels designed for work. They want to try something better without a long commitment—install, use, and see if it helps.</p><p><em>Key filter:</em> The lure is the promise of the most elegant user experience. The draw is based on user experience and feeling—that&apos;s how we separate ourselves from competitors. It&apos;s called Oasis for a reason.</p><p><strong>Enterprise secure access (B2B)</strong></p><p><em>Problems:</em> High cost of shipping and managing hardware for contractors (e.g., $1,500+ per contractor); need secure SaaS access without full device management; compliance and DLP requirements for contractor access; slow onboarding when every contractor needs a company device.</p><p><em>Motivations:</em> Cut hardware costs with a BYOD-friendly approach; give contractors secure, policy-enforced access without shipping laptops; onboard contractors faster; meet security and compliance requirements (Okta, Netskope DLP) while reducing operational overhead.</p><p><em>Key filter:</em> We position ourselves as a worthy competitor on security, and we truly shine on productivity and being the most elegant of all enterprise browsers.</p></> },
  { category: 'Product & positioning', question: 'Which features matter most for each segment?', answer: <><p><strong>B2C (individual knowledge workers):</strong> Tab management and AI commands that reduce cognitive load; elegant, friction-free UX (install and use); low-friction trial ($20, skip-the-waitlist for company employees); features that make work feel easier—the &quot;Oasis&quot; experience. Prioritize: core productivity, then referral and retention hooks.</p><p><strong>B2B (enterprise secure access):</strong> Chromium engine; Okta SSO; Netskope DLP integration; managed browser (session isolation, policy enforcement); no-admin, user-level install; per-user-per-month licensing. Prioritize: Okta + managed browser first (Sprint 17), then Netskope DLP validation. See <a href="#marketing">Julian case study</a> and CULTURE_AMP_ESTIMATE.md for full requirements.</p></> },
  { category: 'Product & positioning', question: 'What is the minimum we need to close a Culture Amp–style deal?', answer: <><p><strong>Minimum for demo:</strong> Chromium engine (✅ have); basic Okta SSO; basic Netskope DLP (policy evaluation, blocking); managed browser (session isolation); portable, no-admin install; basic licensing validation. CULTURE_AMP_ESTIMATE.md estimates ~80 story points, 6–8 weeks for Phase 1 MVP.</p><p><strong>Production-ready:</strong> Full Netskope DLP, advanced policy management, complete licensing system, security hardening, comprehensive testing. Add ~56 story points, 4–6 weeks. SOC 2 may be required—confirm with prospect.</p><p><strong>Phased path:</strong> Offer demo/POC with MVP, then iterate. See CULTURE_AMP_ESTIMATE.md for full breakdown, risks, and next steps.</p></> },
  { category: 'Go-to-market', question: 'Should we prioritize more B2C, more B2B, or both in parallel?', answer: <><div className="faq-decision-framework"><div className="faq-decision-framework-rate-limiter">Rate-limiting factor: Having the enterprise product ready in a form that elicits a greenlight for an LOI or pilot. That puts us in position to seek Seed funding.</div><div className="faq-decision-framework-title">Decision framework</div><div className="faq-decision-framework-subtitle">Guides engineering, product, and product marketing</div><div className="faq-decision-framework-section"><div className="faq-decision-framework-section-title">Engineering &amp; product</div><p>Until the enterprise product is demo- and pilot-ready, allocate the majority of capacity to Chromium Enterprise (Sprint 17). Maintain a minimum viable consumer track—fixes, stability, conversion—but avoid major new consumer features that divert from the enterprise milestone.</p><p>Once pilot-ready, rebalance based on pipeline: more B2C if we need more paying users for free-tier validation; more B2B if we have LOI momentum.</p></div><div className="faq-decision-framework-section"><div className="faq-decision-framework-section-title">Product marketing &amp; content</div><p>Until enterprise is ready, content should support both: consumer content (productivity, elegant UX) that attracts individuals and company employees; enterprise-oriented content (contractor costs, BYOD, secure access) that warms prospects and builds credibility.</p><p>When enterprise is pilot-ready, lean into case studies, demos, and enterprise-specific assets. Content choices signal where we expect growth.</p></div><div className="faq-decision-framework-section faq-decision-framework-triggers"><div className="faq-decision-framework-section-title">Trigger to rebalance</div><div className="faq-decision-framework-trigger-item"><span className="faq-decision-framework-trigger-condition">Signed LOI or pilot greenlight</span> → shift more resources to B2B delivery and enterprise content.</div><div className="faq-decision-framework-trigger-item"><span className="faq-decision-framework-trigger-condition">Consumer validation complete</span> (15+ paying, positive NPS) → consider limited free tier and more B2C growth.</div></div></div></> },
  { category: 'Go-to-market', question: 'What channels (content, Product Hunt, outbound, referrals) are most likely to produce more Marks and more Culture Amps?', answer: <><div className="faq-channels"><div className="faq-channels-priority"><div className="faq-channels-priority-title">Prioritization (effort vs. impact)</div><div className="faq-channels-priority-grid"><div className="faq-channels-priority-item"><strong>Content</strong> (blog, YouTube) — Medium effort, high impact long-term. Organic, compounds over time. See <Link to="/content-pipeline">Content Pipeline</Link>.</div><div className="faq-channels-priority-item"><strong>Product Hunt</strong> — One-time burst, high reach. Low ongoing effort; needs NPS + strong product moment.</div><div className="faq-channels-priority-item"><strong>Outbound</strong> — High effort, variable impact. B2C: support offers, demos. B2B: target companies hiring contractors (Wellfound, job boards).</div><div className="faq-channels-priority-item"><strong>Referrals</strong> — Low effort once built. B2C: invite-a-friend credits. B2B: warm intros (e.g., Julian to peers).</div><div className="faq-channels-priority-item"><strong>LinkedIn</strong> — Low effort per person, high collective reach. All 40+ team members can post about their experience working on Oasis—videos, blogs, screenshots—to attract individuals and B2B prospects.</div></div></div><div className="faq-channels-breakdown"><div className="faq-channels-breakdown-title">Channel-by-channel hypotheses</div><div className="faq-channels-hypothesis"><strong>Content:</strong> Consumer content (productivity, elegant UX) attracts Marks; enterprise content (contractor costs, BYOD) warms Culture Amp–style prospects. Hypothesis: consistent output drives organic signups and enterprise inbound.</div><div className="faq-channels-hypothesis"><strong>Product Hunt:</strong> Launch or feature drop drives one-time spike. Hypothesis: strong NPS + clear value prop converts visitors to waitlist/paid.</div><div className="faq-channels-hypothesis"><strong>Outbound:</strong> B2C: personalized outreach to waitlist converts to paid. B2B: targeted outreach to companies with contractor pain (500+ employees) yields demos. Hypothesis: quality over quantity.</div><div className="faq-channels-hypothesis"><strong>Referrals:</strong> B2C: credits for invites drive word-of-mouth. B2B: one Culture Amp intro leads to more (HR tech network). Hypothesis: early advocates multiply reach.</div><div className="faq-channels-hypothesis"><strong>LinkedIn:</strong> All 40+ team members post about their experience at Oasis—videos, blogs, screenshots. Hypothesis: organic employee advocacy reaches a blend of individuals and potential B2B prospects.</div></div><div className="faq-channels-test"><div className="faq-channels-test-title">Test and measure framework</div><div className="faq-channels-test-row"><div className="faq-channels-test-what"><strong>What to test:</strong></div><div className="faq-channels-test-detail">UTMs on all links; Mixpanel acquisition_source; conversion funnel (first touch → signup → install → paid); NPS at key moments.</div></div><div className="faq-channels-test-row"><div className="faq-channels-test-what"><strong>Metrics:</strong></div><div className="faq-channels-test-detail">Signups per channel, install rate, paid conversion, NPS, enterprise demo requests. Track by segment (B2C vs B2B).</div></div><div className="faq-channels-test-row"><div className="faq-channels-test-what"><strong>Next steps:</strong></div><div className="faq-channels-test-detail">Implement attribution (see <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">GTM Mixpanel charter</a>); run 2–3 content experiments; one Product Hunt moment when ready; encourage team LinkedIn posts (40+ members sharing videos, blogs, screenshots); document which channels produce Marks vs. Culture Amps.</div></div></div></div></> },
  { category: 'Go-to-market', question: 'How do we turn Culture Amp into a case study and proof point?', answer: <><p>Industry-standard steps to create a case study that reflects Culture Amp&apos;s success without upsetting the client:</p><ol className="faq-case-study-steps"><li><strong>Set expectations early:</strong> Before or during the pilot, mention that we&apos;d love to share their story if the pilot succeeds. No pressure—plant the seed so it&apos;s not a surprise later.</li><li><strong>Document during the pilot:</strong> Track metrics (cost savings, contractor count, onboarding time, user feedback). Capture quotes and anecdotes in real time. Get specific numbers—&quot;we saved $X&quot; or &quot;onboarding dropped from Y days to Z&quot;—before memories fade.</li><li><strong>Request permission formally:</strong> After pilot success, send a clear request: &quot;We&apos;d like to create a case study. Here&apos;s what we propose.&quot; Offer options: named case study, anonymized, or quote-only. Let them choose the level of visibility.</li><li><strong>Draft and submit for review:</strong> Write the case study (problem → solution → results). Submit to their marketing/legal for approval. Use their preferred review process—some want a single contact, others want multiple sign-offs.</li><li><strong>Honor their edits:</strong> Accept their changes without pushback. If they want to soften a claim or remove a metric, comply. The relationship matters more than the perfect quote.</li><li><strong>Get written approval:</strong> Obtain sign-off in writing (email is fine) before publishing. Confirm where we can use it (website, sales deck, blog, LinkedIn, press).</li><li><strong>Publish and share:</strong> Publish on our website, blog, and sales materials. Share on LinkedIn (tag them only if they&apos;ve agreed). Use in outbound to similar prospects.</li><li><strong>Keep them in the loop:</strong> Send them the final version before it goes live. Thank them. Don&apos;t overuse—respect their brand and avoid making them feel like a marketing prop.</li></ol></> },
  { category: 'Go-to-market', question: 'What is our plan if they say yes vs. if they say no or stall?', answer: <><p><strong>If they say yes:</strong> Schedule Netskope DLP validation with their security team; collect deposit; execute pilot; deliver. Pilot success → LOI → case study → Seed funding path. Use as proof point for similar prospects.</p><p><strong>If they say no or stall:</strong> Keep building Chromium Enterprise (Sprint 17); reach out to other targets (contractor-heavy companies, 500+ employees, job boards); re-engage when product is demo-ready, even if they&apos;ve chosen another vendor; treat as a learning signal for product and positioning.</p></> },
  { category: 'Operations & readiness', question: 'Do we have the right pricing, packaging, and contracts for enterprise?', answer: <><p><strong>Competitor comparison (Culture Amp context):</strong></p><div className="faq-pricing-table"><div className="faq-pricing-row faq-pricing-header"><span>Vendor</span><span>Minimum</span><span>Per user</span></div><div className="faq-pricing-row"><span>Island</span><span>$25K annual</span><span>$150/user/year</span></div><div className="faq-pricing-row"><span>Surf</span><span>$12K annual</span><span>$108/user/year</span></div><div className="faq-pricing-row"><span>Oasis</span><span>$10K annual</span><span>$100/user/year</span></div></div><p><strong>Packaging:</strong> $10K annual minimum, $100 per user per year. Per-user model; fits inside competitor ranges (Island, Surf) Culture Amp has already accepted. Pilot structure (refundable deposit) can still apply for early prospects.</p><p><strong>Contracts:</strong> Enterprise LOI template in use. Gaps to define: SOC 2 terms, SLAs, support levels, renewal terms.</p><p><strong>Next steps:</strong> Validate pricing with more prospects; document packaging tiers; finalize contract terms for pilot/LOI.</p></> },
  { category: 'Operations & readiness', question: 'What is our SOC 2 and security story for enterprise buyers?', answer: <><div className="faq-soc2"><div className="faq-soc2-status">SOC 2 is currently in progress.</div><div className="faq-soc2-action"><strong>Immediate action:</strong> Update the Oasis website to state that SOC 2 is in progress.</div><div className="faq-soc2-implementation"><div className="faq-soc2-implementation-title">Implementation notes for website</div><p><strong>Placement:</strong> Footer (trust badges), Enterprise/Security page, or near enterprise pricing.</p><p><strong>Copy:</strong> &quot;SOC 2 Type II certification in progress&quot; or &quot;We are pursuing SOC 2 Type II certification. Enterprise buyers can engage with us while certification is in progress.&quot;</p><p><strong>Visual:</strong> Badge or pill with lock/shield icon; link to security page or FAQ.</p><p><strong>Security page section:</strong> &quot;Oasis is pursuing SOC 2 Type II certification. We work with [Vanta/Delve] and an independent auditor. Enterprise prospects can engage while certification is in progress—LOIs and pilots can proceed in parallel.&quot;</p></div><div className="faq-soc2-callout"><strong>Why it matters:</strong> Lack of SOC 2 can block enterprise pilots (see Culture Amp timeline FAQ). Enterprise buyers expect SOC 2 Type II or &quot;in progress&quot; for serious consideration. LOIs can be secured with SOC 2 in progress in parallel.</div><div className="faq-soc2-platforms"><div className="faq-soc2-platforms-title">Platform options</div><div className="faq-soc2-platform-card"><div className="faq-soc2-platform-name">Vanta</div><div className="faq-soc2-platform-desc">Audit-first, 375+ integrations, broad framework support (NIST, ISO, etc.). Suits process-mature orgs. Slower onboarding (~40+ hours).</div><div className="faq-soc2-platform-price">~$7K–$14K/year</div></div><div className="faq-soc2-platform-card"><div className="faq-soc2-platform-name">Delve</div><div className="faq-soc2-platform-desc">Velocity-first, AI-assisted evidence capture, faster onboarding (~10–15 hours). Better for startups pursuing first SOC 2. 24/7 support.</div><div className="faq-soc2-platform-price">~$10K–$20K/year</div></div></div><div className="faq-soc2-section"><strong>Recommendation:</strong> For a lean team pursuing first SOC 2, Delve may offer faster time-to-audit. For enterprise credibility with complex tech stacks, Vanta&apos;s audit-first design and integrations may resonate. Compare demos and pricing before committing.</div><div className="faq-soc2-section"><strong>Security story:</strong> Document architecture, DLP/IdP integration approach, and data handling. Security whitepaper and compliance mapping support the sales conversation even before SOC 2 is complete.</div></div></> },
  { category: 'Operations & readiness', question: 'Who owns the Culture Amp relationship and next steps?', answer: 'Adam Kershner owns the Culture Amp relationship and next steps. Engineers on the enterprise browser Sprint 17 project: Revanth, Mohammed, Atharva, Ruturaj, Kaushik.' },
  { category: 'Operations & readiness', question: 'What do we need to deliver in a pilot, and can we do it?', answer: <><p><strong>Pilot scope (Phase 1 MVP):</strong> Basic Okta SSO; basic Netskope DLP (policy evaluation, blocking); managed browser (session isolation); portable, no-admin install; basic licensing validation. ~80 story points, 6–8 weeks per CULTURE_AMP_ESTIMATE.md.</p><p><strong>Can we do it?</strong> Yes, with Sprint 17 (Revanth, Mohammed, Atharva, Ruturaj, Kaushik) focused on Chromium Enterprise. Dependencies: Okta developer account, Netskope API access, Culture Amp test environment. Clarify with Julian: specific DLP policies, deployment model, support expectations. See CULTURE_AMP_ESTIMATE.md for full requirements and phased approach.</p></> },
  { category: 'Learning & iteration', question: 'What is the single most important thing we learned from Mark and from Culture Amp?', answer: <><p><strong>From Mark:</strong> Individuals will pay for an elegant, productivity-focused browser when they can try it with low friction. The $20 trial and skip-the-waitlist for company employees creates a path from B2C to enterprise pipeline.</p><p><strong>From Culture Amp:</strong> Enterprise buyers are ready when we are—but we must have a demo-ready product. The biggest blocker was not interest or pricing; it was product readiness. Contractor hardware cost pain ($1,500/contractor) creates urgency; a refundable deposit reduces buyer risk.</p><p><strong>Synthesis:</strong> Both segments want the same core—an elegant, productive browser. The rate limiter is having the right product at the right moment: for Mark, the consumer version; for Culture Amp, the enterprise wrapper (SSO, DLP, managed sessions). Build the enterprise product; the demand is there.</p></> },
  { category: 'Learning & iteration', question: 'What would we do differently if we could re-run the last 6 weeks?', answer: <><p>Run a team retrospective to identify what people feel we could have done differently.</p><div className="faq-retrospective"><div className="faq-retrospective-title">Prompts to guide the discussion</div><ul className="faq-retrospective-prompts"><li>What would we start doing?</li><li>What would we stop doing?</li><li>What would we do more of? Less of?</li><li>What surprised us? What would we do earlier next time?</li></ul></div></> },
  { category: 'Learning & iteration', question: 'What is the one metric we should focus on for the rest of Q1?', answer: <><p><strong>B2C:</strong> Paying users (e.g., 15+ for free-tier validation), NPS, conversion rate (signup → paid). Completion of Sprint 15 (Automatic software updates)—crucial for maintaining paying customers over time.</p><p><strong>B2B:</strong> Enterprise product demo-ready, signed pilot or LOI.</p><p><strong>Combined:</strong> Given the rate limiter (enterprise product → LOI → Seed), the primary North Star is <strong>enterprise product demo-ready</strong> or <strong>signed LOI</strong>; B2C metrics (paying users, NPS) are secondary but important for free-tier validation. <strong>Investor alignment:</strong> Verbal commitments from investors in the investor database regarding the Seed round and our LOI traction. Meet with them early to ensure the LOIs we have companies sign are acceptable to them.</p></> },
  { category: 'Learning & iteration', question: 'What would make Q1 a clear success vs. "we tried a lot of things"?', answer: <><div className="faq-success"><div className="faq-success-criteria"><div className="faq-success-criteria-title">Clear success</div><div className="faq-success-criteria-subtitle">Hitting defined outcomes, not just activity</div><div className="faq-success-criteria-grid"><div className="faq-success-criteria-item"><strong>B2C</strong> — 15+ paying customers (ideally 40); NPS over 30; attribution in place; Sprint 15 (automatic software updates) complete.</div><div className="faq-success-criteria-item"><strong>B2B</strong> — Enterprise product demo-ready; 3 signed LOIs.</div><div className="faq-success-criteria-item"><strong>Investor</strong> — Verbal commitments that our LOI format and traction are acceptable for Seed.</div><div className="faq-success-criteria-item"><strong>Operations</strong> — SOC 2 in progress; website updated; ownership assigned.</div></div></div><div className="faq-success-message"><p>We can accomplish what we set our minds to when we work together and believe in each other. We got a paying customer and attracted an enterprise in a short period of time. Sky is the limit for this team.</p></div><div className="faq-success-anti"><strong>&quot;We tried a lot of things&quot;</strong> — scattered activity without these outcomes: many demos, content, and experiments but no LOIs, no clear path to 15+ paying users, no investor alignment.</div></div></> },
]

function Q1MidpointUpdate() {
  const [brokenUrls, setBrokenUrls] = useState({})
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const toggleFaq = (idx) => setFaqOpen(faqOpen === idx ? null : idx)

  const publicLogos = useMemo(() => ({
    // These are served from `financial-dashboard/public/logos/`.
    'centerstone.org': { url: '/logos/Centerstone_Logo_2020_color.png', name: 'Centerstone_Logo_2020_color.png' },
    'fedresources.com': { url: '/logos/Fedresources.com logo.png', name: 'Fedresources.com logo.png' },
    'franshares.com': { url: '/logos/Franshares logo.png', name: 'Franshares logo.png' },
    'mhub.org': { url: '/logos/Mhub logo.png', name: 'Mhub logo.png' },
    'oxfordwebservices.com': { url: '/logos/Oxford Web Services Logo.webp', name: 'Oxford Web Services Logo.webp' },
    'sagemount.com': { url: '/logos/bregal_sagemount_logo_color.jpg', name: 'bregal_sagemount_logo_color.jpg' },
    'datadoghq.com': { url: '/logos/datadoghq logo.png', name: 'datadoghq logo.png' },
    'duck.com (DuckDuckGo)': { url: '/logos/duckduckgo logo.png', name: 'duckduckgo logo.png' },

    // Not directly in the waitlist bubbles, but useful elsewhere on the page.
    '__culture_amp__': { url: '/logos/Culture Amp Logo.jpg', name: 'Culture Amp Logo.jpg' },
  }), [])

  const snapshot = useMemo(() => {
    // Source: JANUARY_2026_SUMMARY.md + user-provided Q1 milestones (as of Feb 16, 2026).
    const b2cSubscribersGoal = 461
    const b2cSubscribersCurrent = 1
    const b2bPilotContractsGoal = 5
    const b2bPilotContractsCurrent = 0
    const revenueGoal = 323000
    const b2cMrrCurrent = 20

    return {
      asOf: 'Feb 16, 2026',
      impressionsLastQuarterLabel: 'Oct 1 – Dec 31, 2025',
      impressionsLastQuarter: 823000,
      impressionsQ1ToDateLabel: 'Jan 1 – Feb 16, 2026',
      impressionsQ1ToDate: 623000,
      b2cSubscribersGoal,
      b2cSubscribersCurrent,
      b2bPilotContractsGoal,
      b2bPilotContractsCurrent,
      revenueGoal,
      b2cMrrCurrent,
      waitlist: 150,
      mqlsJan: 27,
      mqlsEarlyFebWeek: 8,
      sqlsJan: 1,
      impressionsMonth: 450000,
      impressionsEarlyFebWeek: 77200,
      impressionsGrowthEarlyFeb: '26.5%',
      activeSprints: 15,
      completedSprints: 4,
      feedbackItems: 167,
    }
  }, [])

  const inbound = useMemo(() => {
    // Oct 1 – Dec 31 is 92 days (31 + 30 + 31). Jan 1 – Feb 16 is 47 days (31 + 16).
    const lastQuarterDays = 92
    const q1ToDateDays = 47
    const quarterDays = 90 // Jan 1 – Mar 31

    const lastQuarterDaily = snapshot.impressionsLastQuarter / lastQuarterDays
    const q1ToDateDaily = snapshot.impressionsQ1ToDate / q1ToDateDays
    const runRateDeltaPct = lastQuarterDaily
      ? Math.round(((q1ToDateDaily - lastQuarterDaily) / lastQuarterDaily) * 1000) / 10
      : 0

    const vsLastQuarterTotalPct = snapshot.impressionsLastQuarter
      ? Math.round((snapshot.impressionsQ1ToDate / snapshot.impressionsLastQuarter) * 1000) / 10
      : 0

    const projectedThisQuarter = Math.round(q1ToDateDaily * quarterDays)
    const projectedDelta = projectedThisQuarter - snapshot.impressionsLastQuarter
    const projectedDeltaPct = snapshot.impressionsLastQuarter
      ? Math.round((projectedDelta / snapshot.impressionsLastQuarter) * 1000) / 10
      : 0

    return {
      lastQuarterDays,
      q1ToDateDays,
      quarterDays,
      lastQuarterDaily,
      q1ToDateDaily,
      runRateDeltaPct,
      vsLastQuarterTotalPct,
      projectedThisQuarter,
      projectedDelta,
      projectedDeltaPct,
    }
  }, [snapshot.impressionsLastQuarter, snapshot.impressionsQ1ToDate])

  const tracking = useMemo(() => {
    const pct = (a, b) => (b ? Math.round((a / b) * 1000) / 10 : 0)
    return {
      b2cSubscribersPct: pct(snapshot.b2cSubscribersCurrent, snapshot.b2cSubscribersGoal),
      b2bPilotsPct: pct(snapshot.b2bPilotContractsCurrent, snapshot.b2bPilotContractsGoal),
      revenuePct: pct(snapshot.b2cMrrCurrent * 12, snapshot.revenueGoal), // simple annualized from current B2C MRR
    }
  }, [snapshot])

  const waitlistBrands = useMemo(() => ([
    'qixent.com',
    'franshares.com',
    'mhub.org',
    'fedresources.com',
    'oxfordwebservices.com',
    'duck.com (DuckDuckGo)',
    'kapya.io',
    'centerstone.org',
    'sagemount.com',
    'datadoghq.com',
  ]), [])

  const matchedCount = useMemo(() => {
    return waitlistBrands.reduce((acc, label) => {
      const candidateUrl = publicLogos[label]?.url
      if (!candidateUrl) return acc
      if (brokenUrls[candidateUrl]) return acc
      return acc + 1
    }, 0)
  }, [publicLogos, brokenUrls, waitlistBrands])

  const logoGallery = useMemo(() => {
    const src = Object.values(publicLogos).map(x => ({ url: x.url, name: x.name }))
    // Deduplicate by URL (in case public + picked overlap).
    const seen = new Set()
    return src.filter(x => {
      if (!x?.url || seen.has(x.url)) return false
      if (brokenUrls[x.url]) return false
      seen.add(x.url)
      return true
    })
  }, [publicLogos, brokenUrls])

  return (
    <div className="page">
      <div className="page-header">
        <h1>Q1 Midpoint Update</h1>
        <p className="page-subtitle">
          Retrospective + tracking vs 2026 goals + what we focus on next (as of {snapshot.asOf})
        </p>
      </div>

      <section className="page-section toc-section" aria-label="Table of contents">
        <div className="content-block">
          <h2 className="toc-title">Table of Contents</h2>
          <div className="toc-grid">
            <a className="toc-link" href="#overview">Overview</a>
            <a className="toc-link" href="#finance">Finance</a>
            <a className="toc-link" href="#marketing">Marketing</a>
            <a className="toc-link" href="#sales">Sales</a>
            <a className="toc-link" href="#product">Product</a>
            <a className="toc-link" href="#design">Design</a>
            <a className="toc-link" href="#engineering">Engineering</a>
            <a className="toc-link" href="#hr">HR</a>
            <a className="toc-link" href="#goals-mar-31">Goals for March 31st</a>
            <a className="toc-link" href="#faq">Strategic FAQ</a>
          </div>
        </div>
      </section>

      <section className="page-section" id="overview">
        <h2>Overview</h2>
        <div className="content-block overview-subsections">
          <div className="overview-subsection overview-priority-callout">
            <h3>Priority focus</h3>
            <p>
              Our near-term goal is to launch on Product Hunt and reach an expanded userbase of happy daily active users. Two things unlock that: <strong>finish key product sprints</strong> (automatic software updates, improved onboarding), and <strong>establish a strong Net Promoter Score</strong> through surveying.
            </p>
            <p>
              Why does NPS matter? A strong score signals that Oasis is a good-quality product—ready to be shared beyond our internal team. When people use it for their work every day, that repeated daily usage becomes the engine of growth. Duolingo&apos;s research backs this: daily usage is a predecessor of growth.
            </p>
            <p>
              <strong>What we need from you:</strong> Install the latest version and fill out the <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS survey</a>. Your feedback directly shapes whether we&apos;re ready to launch.
            </p>
            <p style={{ marginBottom: 0 }}>
              To go deeper on this growth framework, read <a href="https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth" target="_blank" rel="noopener noreferrer">How Duolingo reignited user growth</a> (Lenny&apos;s Newsletter).
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Finance</h3>
            <p>
              We earned our first revenue ($20/mo from an organic customer, Feb 12) and attracted our first enterprise prospect (Culture Amp, Jan 27)—representing ~$50K/year potential per qualified prospect. The sections below describe the team activities that drove these results and how we can allocate time toward advancing what&apos;s working.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Product Marketing</h3>
            <p>
              Create blogs and YouTube videos from the <Link to="/content-pipeline">Content Pipeline</Link> and work with Srishti and Archana to grow contributions to <a href="https://kahana.co/blog" target="_blank" rel="noopener noreferrer">kahana.co/blog</a>. We landed our first paying customer ($20, Feb 12) and first enterprise demo (Culture Amp, Jan 27). The next step: quadruple down on blogs and YouTube.
            </p>
            <p>
              Releasing a free version, sharing it with our waitlist of 150 users, and publishing YouTube videos will drive reach and can yield more users, paid users, and prospects scheduling demos.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Sales</h3>
            <p>
              We built a lead-scoring framework to decide when an MQL becomes an SQL. Sales should send blogs to Konika Dhull, work with Srishti to identify networking events, and run coffee chats with contacts at companies with 100+ employees to prospect and seed free Oasis.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Product</h3>
            <p>
              140 unique feedback items drove 24 sprints. The product team&apos;s testing and logging have made Oasis more useful and elegant, and that work has lifted every other area of the company. Work with Archana to make sure you&apos;re testing the right version and you&apos;re filling out the NPS survey.
            </p>
          </div>

          <div className="overview-subsection">
            <h3>Engineering</h3>
            <p>
              Shipped 9 main features—tab groups, auth UI, voice dictation, in-app feedback, split view, summarization, UI fixes, Gemini migration, and AI command for native splitview. Shoutout to Pournami and the engineering team. Full archive: <Link to="/sprints">Sprints</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" id="finance">
        <h2>Finance</h2>
        <div className="content-block">
          <p className="finance-highlight">
            We earned our first revenue ($20/mo from an organic customer, Feb 12) and attracted our first enterprise prospect (Culture Amp, Jan 27)—representing ~$50K/year potential per qualified prospect.
          </p>
          <p>
            Per Stripe data, the $20/mo user has already downgraded. We don&apos;t yet know how they originally found our website. We are able to identify the name and LinkedIn profile: <a href="https://www.linkedin.com/in/mark-heringhaus-jd-mba-0a5a8a5" target="_blank" rel="noopener noreferrer">Mark Heringhaus</a>.
          </p>
          <p>
            We need better data across our user journey—from marketing to using the product—to understand where people are falling off. We need data and insights on how to fix the issues causing people to drop off. A <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0#heading=h.v2sf8fr2wh2j" target="_blank" rel="noopener noreferrer">Mixpanel project</a> is aimed at building boards and reports to illustrate insights that improve the product and retention.
          </p>
          <p style={{ marginBottom: '18px' }}>
            The sections below describe the team activities that drove these results. Our goal: allocate time and team members toward advancing what&apos;s working.
          </p>
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-value">{snapshot.b2cSubscribersCurrent}/{snapshot.b2cSubscribersGoal}</div>
              <div className="goal-label">B2C subscribers ({tracking.b2cSubscribersPct}%)</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.b2bPilotContractsCurrent}/{snapshot.b2bPilotContractsGoal}</div>
              <div className="goal-label">B2B pilot contracts ({tracking.b2bPilotsPct}%)</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">${snapshot.b2cMrrCurrent}</div>
              <div className="goal-label">B2C MRR today</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.completedSprints}</div>
              <div className="goal-label">Completed sprints</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.activeSprints}</div>
              <div className="goal-label">Active sprints</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">{snapshot.feedbackItems}</div>
              <div className="goal-label">Total feedback items</div>
            </div>
          </div>

          <p style={{ marginTop: '18px' }}>
            Our near-term goal isn&apos;t &quot;big numbers&quot; yet—it&apos;s <strong>tight loops</strong>: ship faster, measure, convert early signals into repeatable growth and enterprise motion.
          </p>

          <div className="section-detail-block" style={{ marginTop: '28px' }}>
            <h3>Fundraising path</h3>
            <p>
              <strong>Open question:</strong> How do we create a client-friendly and investor-friendly LOI such that we get signed LOIs and fundraise with less friction?
            </p>
            <p>
              We can secure <strong>Letters of Intent (LOIs)</strong> for the enterprise solution assuming SOC 2 compliance—SOC 2 can be in progress in parallel. When we have LOIs representing <strong>$100K in future ARR</strong>, we can approach Venture Capital. <a href="https://drive.google.com/file/d/11CUNNG3Y7ckHeJXY1IJYSwP-3n9sr_zB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Enterprise LOI Template</a> (for reference and discussion). Target: <strong>$5M seed funding</strong> to fund a full-time hiring plan. <a href="https://drive.google.com/file/d/11CUNNG3Y7ckHeJXY1IJYSwP-3n9sr_zB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Enterprise LOI template</a> (for reference and discussion).
            </p>
            <p>
              <strong>Investor database:</strong>{' '}
              <a href="https://docs.google.com/spreadsheets/d/1rtTb8Wk7gygEUie9b9fMEzIyXrM2ff3PB47VGC6gEi4/edit?gid=409772258#gid=409772258" target="_blank" rel="noopener noreferrer">Target Seed Investors List</a>
            </p>
          </div>

          <div className="section-detail-block" style={{ marginTop: '24px' }}>
            <h3>Seed Investor Data Room — Kahana (B2B + B2C, Pre-Revenue, US)</h3>
            <p style={{ marginBottom: '12px' }}>Refining the Data Room for fundraising. Status by item:</p>
            <ul className="feature-list" style={{ marginBottom: 0 }}>
              <li><Link to="/#executive-summary"><strong>One-Page Overview / Executive Summary</strong></Link> — already in data room</li>
              <li><Link to="/problem-market#problem-why-now"><strong>Problem &amp; &quot;Why Now&quot; Narrative</strong></Link> — already in data room</li>
              <li><Link to="/q1-midpoint#product"><strong>Product Demo</strong></Link> (video or live link) — we have a demo</li>
              <li><Link to="/problem-market#user-journey"><strong>End-to-End User Journey</strong></Link> (B2C + B2B) — already in data room; <a href="https://docs.google.com/document/d/1xTYWL9chXtI7ep8BBTz1Z_z50kdRcFVfFr8uPGWnblM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">GTM Mixpanel Boards &amp; Reports</a> (project charter for customer journey analytics)</li>
              <li><Link to="/sprints#product-roadmap"><strong>Product Roadmap</strong></Link> (next 6–12 months) — mention what we&apos;re planning to build next</li>
              <li><Link to="/problem-market#market-opportunity"><strong>Market Opportunity</strong></Link> (TAM / SAM / SOM) — already in data room (aggressive/base/conservative)</li>
              <li><Link to="/go-to-market#icp"><strong>Ideal Customer Profiles</strong></Link> (B2C + B2B) — already in data room</li>
              <li><Link to="/competitors"><strong>Competitive Landscape &amp; Differentiation</strong></Link> — competitor database (e.g., <a href="https://strawberrybrowser.com/" target="_blank" rel="noopener noreferrer">Strawberry</a>—recently raised $5M, #1 on Product Hunt), how we stand out</li>
              <li><Link to="/go-to-market#gtm-strategy"><strong>Go-To-Market Strategy</strong></Link> — already in data room</li>
              <li><Link to="/team-execution#team-overview"><strong>Team Overview</strong></Link> (founders, advisors) — already in data room</li>
              <li><Link to="/financial-plan#financial-snapshot"><strong>Financial Snapshot</strong></Link> (burn, runway) — already in data room</li>
              <li><Link to="/financial-plan#financial-projections"><strong>18–24 Month Financial Projections</strong></Link> — already in data room</li>
              <li><strong>Pitch Deck</strong> — ON HOLD (not typically aiming to share)</li>
              <li><strong>Traction &amp; Validation</strong> (pilots, LOIs, waitlist, testimonials) — ON HOLD (testimonials post successful conversion)</li>
              <li><strong>Hiring Plan</strong> (next 3–6 roles) — ON HOLD (priority is current team)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" id="marketing">
        <h2>Marketing</h2>
        <div className="content-block">
          <div className="section-detail-block">
            <h3>Product Marketing</h3>
            <p>
              Create new blog posts and YouTube videos based on the <Link to="/content-pipeline">Content Pipeline</Link>. Work with Project Managers (Srishti, Archana) to recruit and encourage more team members to contribute to the blog <a href="https://kahana.co/blog" target="_blank" rel="noopener noreferrer">kahana.co/blog</a>. This will drive more organic traffic and help us attract customers.
            </p>
            <p>
              We&apos;ve already attracted our first paying customer who paid $20 for Oasis on February 12th, 2026. We also attracted our first enterprise demo request from Culture Amp on January 27th, 2026. These are excellent initial results, and now the clear next steps would be to quadruple down on the strategies that yielded these results in the first place—that being creating blogs and YouTube videos.
            </p>
          </div>

          <div className="goals-grid marketing-metrics">
            <div className="goal-card metric-card metric-baseline">
              <div className="goal-value">{Math.round(snapshot.impressionsLastQuarter / 1000)}K</div>
              <div className="goal-label">Impressions ({snapshot.impressionsLastQuarterLabel})</div>
            </div>
            <div className="goal-card metric-card metric-current">
              <div className="goal-value">{Math.round(snapshot.impressionsQ1ToDate / 1000)}K</div>
              <div className="goal-label">Impressions ({snapshot.impressionsQ1ToDateLabel})</div>
            </div>
            <div className="goal-card metric-card metric-projection">
              <div className="goal-value">{Math.round(inbound.projectedThisQuarter / 100000) / 10}M</div>
              <div className="goal-label">Projected this quarter (at current pace)</div>
            </div>
            <div className="goal-card metric-card metric-delta" aria-label="Projected increase versus last quarter">
              <div className="metric-callout" aria-hidden="true">
                <span className="metric-arrow">▲</span>
                <span className="metric-callout-text">Up vs last quarter</span>
              </div>
              <div className="goal-value">
                +{Math.round(inbound.projectedDelta / 1000)}K
              </div>
              <div className="goal-label">Δ vs last quarter (+{inbound.projectedDeltaPct}%)</div>
            </div>
          </div>
          <p className="goal-description" style={{ marginTop: '18px' }}>
            If we keep the pace we’ve maintained so far this quarter, we’ll finish around <strong>{Math.round(inbound.projectedThisQuarter / 100000) / 10}M impressions</strong>,
            up from <strong>{Math.round(snapshot.impressionsLastQuarter / 1000)}K</strong> last quarter (a delta of <strong>+{Math.round(inbound.projectedDelta / 1000)}K</strong>).
          </p>
          <p style={{ marginTop: '6px', fontSize: '0.9rem', opacity: 0.85 }}>
            Source: <a href="https://lookerstudio.google.com/u/0/reporting/c4152057-dad9-4725-9158-94c2b6e545a9/page/p_r1o0q334kd" target="_blank" rel="noopener noreferrer">Kahana Reports</a>
          </p>
          <p style={{ marginTop: '10px' }}>
            We’ve also generated <strong>44</strong> new YouTube video + blog ideas based on <strong>Worldwide</strong> search trends over the past <strong>5 years</strong> on YouTube.
            This should help us boost impressions even more through the second half of the quarter. See <Link to="/content-pipeline">Content Pipeline</Link>.
          </p>

          <div style={{ marginTop: '22px' }}>
            <p style={{ marginBottom: '14px' }}>
              We now have <strong>{snapshot.waitlist} people</strong> on the{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1wwcPh854iSBBcbH9tebTlsjrwCrHkLKVOUsr6KwXWvI/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                waitlist
              </a>
              , including signups with work email domains from business brands.
              If these users love Oasis, we may be able to explore pilots at their companies if they meet our enterprise criteria.
            </p>

            <div className="brand-cloud" aria-label="Example waitlist work email domains">
              {waitlistBrands.map((label) => (
                <span key={label} className="brand-bubble">
                  {publicLogos[label]?.url && !brokenUrls[publicLogos[label]?.url] && (
                    <img
                      className="brand-logo"
                      src={publicLogos[label]?.url}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        const src = e.currentTarget?.getAttribute('src') || ''
                        if (!src) return
                        setBrokenUrls(prev => (prev[src] ? prev : { ...prev, [src]: true }))
                      }}
                    />
                  )}
                  <span className="brand-label">{label}</span>
                </span>
              ))}
            </div>

            {logoGallery.length > 0 && (
              <div className="logo-gallery" aria-label="Loaded logos gallery">
                {logoGallery.map((x) => (
                  <div key={x.url} className="logo-tile" title={x.name}>
                    <img
                      className="logo-tile-img"
                      src={x.url}
                      alt={x.name}
                      loading="lazy"
                      onError={(e) => {
                        const src = e.currentTarget?.getAttribute('src') || ''
                        if (!src) return
                        setBrokenUrls(prev => (prev[src] ? prev : { ...prev, [src]: true }))
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="enterprise-demos" style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <h3 className="enterprise-demos-title">Enterprise Demos</h3>
              <div className="enterprise-demos-brand">
                {publicLogos['__culture_amp__']?.url && !brokenUrls[publicLogos['__culture_amp__']?.url] && (
                  <img
                    className="enterprise-demos-logo"
                    src={publicLogos['__culture_amp__'].url}
                    alt="Culture Amp"
                    loading="lazy"
                    onError={(e) => {
                      const src = e.currentTarget?.getAttribute('src') || ''
                      if (!src) return
                      setBrokenUrls(prev => (prev[src] ? prev : { ...prev, [src]: true }))
                    }}
                  />
                )}
                <span className="enterprise-demos-name">Culture Amp</span>
              </div>
              <button
                type="button"
                className="case-study-trigger"
                onClick={() => setCaseStudyOpen(true)}
              >
                View case study: Julian at a Global SaaS Company
              </button>
            </div>
          </div>
        </div>
      </section>

      {caseStudyOpen && (
        <div
          className="case-study-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={(e) => { if (e.target === e.currentTarget) setCaseStudyOpen(false) }}
        >
          <div className="case-study-modal">
            <div className="case-study-header">
              <h2 id="case-study-title">Case study: Julian at a Global SaaS Company</h2>
              <button
                type="button"
                className="case-study-close"
                aria-label="Close case study"
                onClick={() => setCaseStudyOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="case-study-body">
              <p>
                Julian leads a project at a global SaaS company to find the right enterprise browser for their
                consultants and third‑party users. His goal is simple but painful: give short‑term consultants
                secure access to the companyʼs SaaS apps without shipping them full laptops.
              </p>
              <p>
                Right now, they ship laptops that cost around $1,500 per consultant, plus about $200/hour in
                internal time to set everything up. Itʼs expensive, slow, and doesnʼt scale. Julian wants a
                managed, Chromium-based browser that runs on the consultantʼs own device, requires no
                local admin rights, and can be turned on and off as contracts start and end.
              </p>

              <h3>Why they didnʼt just use Chrome Enterprise</h3>
              <p>
                Julianʼs team actually got very close to rolling out Chrome Enterprise Premium. Technically, it
                ticked some boxes—but they hit two big blockers:
              </p>
              <ul className="feature-list">
                <li><strong>Policy enforcement on third‑party devices:</strong> Chrome Enterprise couldnʼt enforce the right security policies on devices they donʼt fully manage.</li>
                <li><strong>Profile precedence issues:</strong> The way Chrome profiles and policies interact made it too messy to guarantee consistent security behavior.</li>
              </ul>
              <p>
                They realized: pushing strong security policies to devices owned by other companies through
                Chrome wasnʼt going to work. That sent them back to the market to look at dedicated enterprise browsers.
              </p>

              <h3>Security backdrop and “must have” requirements</h3>
              <p>
                Their security team had already chosen a modern cloud security stack (including a DLP
                platform), and this decision was not Julianʼs. But heʼs been told very clearly: any browser they
                pick must integrate cleanly with the existing security tools and policy model.
              </p>
              <p>From Julianʼs perspective, the non‑negotiable technical requirements are:</p>
              <ul className="feature-list">
                <li>Strong policy enforcement on third‑party devices (especially around data exfiltration).</li>
                <li>Ability to manage security policies centrally, including pre‑defined contractor policies.</li>
                <li>Browser must run without local admin permissions.</li>
                <li>No VDI – they do not want a virtual desktop solution.</li>
                <li>Chromium-based for maximum SaaS compatibility.</li>
              </ul>
              <p>
                He also wants the ability to pre‑define contractor policies and have them tied into their existing
                HR workflows. In his ideal world, the flow looks like:
              </p>
              <ul className="feature-list">
                <li>Contractor gets created in the HR platform.</li>
                <li>That flows into their identity system.</li>
                <li>Access is automatically granted to the Oasis browser with the right policies and an automatic end date based on contract duration.</li>
              </ul>

              <h3>What Julian wants to see in a pilot</h3>
              <p>Julian is very clear: he wants to “see, touch, feel” the solution before committing fully. For a pilot to feel real and meaningful, heʼs looking for:</p>
              <ul className="feature-list">
                <li>A working managed browser that his team and some consultants can use in real workflows.</li>
                <li>Policy management thatʼs easy enough to understand and tweak.</li>
                <li>Minimal friction to install and run on third‑party devices (no admin rights, no heavy agent).</li>
                <li>A sense that the team behind the product can support them with pre‑baked patterns and sensible defaults, not just hand them a blank slate.</li>
              </ul>
              <p>He wants to start as soon as possible, but needs clarity on the integration details with their existing security stack before he green‑lights it internally.</p>

              <h3>Budget and pricing expectations</h3>
              <p>Julianʼs leadership team has already socialized and approved ballpark pricing based on other vendors:</p>
              <ul className="feature-list">
                <li><strong>Island Enterprise Browser:</strong> $25K annual minimum commit, $150 per user per year</li>
                <li><strong>Surf Browser:</strong> $12K annual minimum commit, $108 per user per year</li>
                <li><strong>Chrome Enterprise:</strong> $6 per user per month — but not acceptable due to the policy enforcement limitations.</li>
              </ul>
              <p>
                Internally, they understand that enterprise browsers charge minimum commitments because these are enterprise deals, not swipe‑a‑card SaaS: the vendor needs deal sizes that justify sales, onboarding, and support; the buyer expects predictable annual spend that fits procurement and budgeting processes.
              </p>
              <p>
                Julianʼs leadership is comfortable with minimum commitments, as long as theyʼre in a reasonable range and aligned with competitors. He mentioned theyʼd be fine with a model where at least 20 people go through the solution per year, with a matching financial floor.
              </p>
              <p>
                Right now, he is particularly focused on pricing feedback for his vendor selection. If a vendor comes in with a model thatʼs familiar (per‑user, per‑month, with a reasonable minimum) and technically viable, that vendor will have a strong advantage.
              </p>

              <h3>Where Oasis fits in the story</h3>
              <p>After talking with Julian, Oasis proposed a structure designed to de‑risk the unknowns around integration and still move quickly:</p>
              <ul className="feature-list">
                <li><strong>$5,000 deposit</strong> (minimum commit) to start serious work and requirements gathering.</li>
                <li>Use that period to validate integration with their existing security stack, including policy enforcement behavior on third‑party devices.</li>
                <li>If it turns out the integration isnʼt realistically achievable, that $5,000 is <strong>refunded</strong>.</li>
                <li>If integration is confirmed as feasible, the $5,000 becomes their minimum upfront commit once the solution is deployed and in use.</li>
                <li>Ongoing pricing is <strong>$8 per user per month</strong>, which fits comfortably inside the competitor ranges Julianʼs leadership has already accepted.</li>
              </ul>
              <p>This structure does three things for a buyer like Julian: shows that Oasis is confident but honest about integration complexity; reduces risk for the customer (if itʼs technically a dead end, they get their deposit back); and makes pricing straightforward to compare against Island, Surf, and Chrome.</p>
              <p><strong>When talking to similar prospects, sales can:</strong></p>
              <ul className="feature-list">
                <li>Lead with the problem: secure SaaS access for contractors without shipping laptops or rolling out VDI.</li>
                <li>Emphasize policy enforcement on third‑party devices as the core differentiator versus Chrome Enterprise.</li>
                <li>Normalize minimum commitments by referencing the market (Island, Surf) and then show how Oasis is simpler and more flexible.</li>
                <li>Offer a de‑risked pilot path (like the refundable deposit model) where the customer feels safe testing Oasis while you validate integration details.</li>
              </ul>
              <p>
                This story is not just about Julian—itʼs the pattern for any modern SaaS company trying to secure external users with a Chromium‑based enterprise browser instead of throwing more hardware, VDI, or point solutions at the problem.
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="page-section" id="sales">
        <h2>Sales</h2>
        <div className="content-block">
          <div className="section-detail-block">
            <h3>Lead scoring and outreach</h3>
            <p>
              Created a framework for scoring leads and determining whether a marketing qualified lead should be a sales qualified lead. This will help us make quick decisions regarding whom we should reach out to regarding sales.
            </p>
            <p>
              Sales team members should contribute by: sending blogs to Konika Dhull to upload to the website; working with Srishti to identify networking events in their area; encouraging other team members to attend networking events in their areas; and arranging coffee chats with people in their existing networks (who work at small to medium sized or large companies with at least 100 people at the company) to begin prospecting and getting free versions of Oasis to employees at specific companies.
            </p>
          </div>

          <div style={{ margin: '18px 0', textAlign: 'center' }}>
            <img
              src={hubspotLeadViewerImage}
              alt="HubSpot lead viewer dashboard showing Fit Score"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 26px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
              }}
            />
            <div style={{ marginTop: '10px', fontSize: '0.95rem', opacity: 0.9 }}>
              Lead viewer dashboard with <strong>Fit Score</strong> + signal status.
            </div>
          </div>

          <ul className="feature-list">
            <li><strong>Enterprise motion:</strong> 1 enterprise demo scheduled (Culture Amp).</li>
            <li><strong>Pilot wedge:</strong> convert individual business-user interest into qualified pilots when accounts meet our enterprise criteria.</li>
            <li><strong>Next step:</strong> follow up fast, define success metrics, and turn the Culture Amp motion into a repeatable pilot playbook.</li>
          </ul>

          <div className="workflow-example" style={{ marginTop: '22px' }}>
            <h3>Shoutout: Abhinav — Fit Score framework</h3>
            <p>
              <strong>Fit Score</strong> is our quick way of answering: “does this lead look like a good customer for us?”
              We score each lead from <strong>0–100</strong> (and it can go below 0 for obvious bad fits) using basic profile signals:
            </p>
            <ul className="feature-list">
              <li><strong>Role fit:</strong> Ops / Safety / Engineering / IT-type roles.</li>
              <li><strong>Seniority:</strong> manager and above.</li>
              <li><strong>Data completeness:</strong> industry + company size on file (for now, being filled earns points while ICP ranges finalize).</li>
              <li><strong>Supported country:</strong> US / CA / UK / AU / NZ.</li>
              <li><strong>Disqualifiers:</strong> subtract for clear bad fits like student emails (<code>.edu</code>) and leads that look like vendors/consultants.</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              Once we have Fit Score (and product usage), we use it to decide who is sales-ready:
            </p>
            <ul className="feature-list">
              <li>
                <strong>MQL rule:</strong> Fit Score ≥ <strong>60</strong> and Product Usage Score ≥ <strong>50</strong> (they fit and they’re actually using the product).
              </li>
              <li>
                <strong>SQL rule:</strong> already an MQL <em>and</em> a strong buying signal is “Yes” for any of:
                Pricing Page Visit, Demo Request, Paywall Hit, or Contact Sales.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" id="product">
        <h2>Product</h2>
        <div className="content-block">
          <div className="section-detail-block">
            <p>
              Logged 140 unique pieces of feedback while testing Oasis. This feedback was used to generate 24 unique sprints. The product team deserves praise and credit because their efforts have translated directly to a more useful, elegant Oasis. The hard work testing and logging feedback has positively affected all other areas of the company. Keep up the stellar work. Work with Archana to make sure you&apos;re testing the right version and you&apos;re filling out the NPS survey.
            </p>
          </div>

          <p style={{ marginBottom: '16px' }}>
            <strong>Scaled testing phase:</strong> team-wide <a href="https://kahana.co/oasis-auth?mode=login&plan=free&redirect=/installations" target="_blank" rel="noopener noreferrer">install</a> + 1 week usage + <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS survey</a> to establish baseline.
            The newest version includes the completed features below (archived in <Link to="/sprints">Sprints</Link>).
          </p>

          <div className="product-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/BF2ZZ7x3i8g"
              title="Oasis product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="product-video-iframe"
            />
          </div>

          <h3 className="product-features-title">Main features completed (archived)</h3>
          <div className="product-features-grid">
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">📁</span>
              <span className="product-feature-label">Tab groups & operations</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🔐</span>
              <span className="product-feature-label">Authentication UI</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🎤</span>
              <span className="product-feature-label">Voice dictation UI</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">💬</span>
              <span className="product-feature-label">In-app feedback</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🪟</span>
              <span className="product-feature-label">Split view (native + improvements)</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">📄</span>
              <span className="product-feature-label">Webpage summarization</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">✅</span>
              <span className="product-feature-label">UI fixes & response formatting</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">⚠️</span>
              <span className="product-feature-label">Gemini model migration</span>
            </div>
            <div className="product-feature-card">
              <span className="product-feature-emoji" aria-hidden="true">🪟</span>
              <span className="product-feature-label">AI command for native splitview</span>
            </div>
          </div>

          <div className="workflow-example product-shoutout" style={{ marginTop: '24px' }}>
            <h3>Shoutout: Engineering & Pournami</h3>
            <p>
              Big shoutout to <strong>Pournami</strong> and the engineering team—<strong>Ashwin John</strong>, <strong>Afshaan Khan</strong>, <strong>Rushyanth Nerellakunta</strong>, <strong>Agrima Gupta</strong>, <strong>Likhitha Guggilla</strong>, <strong>Mohammed Muneebuddin</strong>, <strong>Atharva Joshi</strong>, <strong>Naveen Prashanna Gurumurthy</strong>, <strong>Durgesh Tiwari</strong>, <strong>Kaushik Shridhar</strong>, <strong>Revanth Ganga</strong>, <strong>Saideep Pajjuri</strong>, and <strong>Ruturaj</strong>—for driving these updates, from tab groups and split view to summarization, voice dictation, and the Gemini migration. This is the foundation the team is testing in the scaled NPS phase.
            </p>
            <p style={{ marginBottom: 0 }}>
              Full archive and acceptance criteria: <Link to="/sprints">Sprints</Link>.
            </p>
          </div>

          <ul className="feature-list" style={{ marginTop: '20px' }}>
            <li><strong>AI summarization:</strong> newest version includes summarization features for broader usage signal.</li>
          </ul>
        </div>
      </section>

      <section className="page-section" id="design">
        <h2>Design</h2>
        <div className="content-block">
          <p>
            Focus: keep the product feeling <strong>elegant</strong> while we stabilize releases—polish, clarity, and consistency across flows.
          </p>
        </div>
      </section>

      <section className="page-section" id="engineering">
        <h2>Engineering</h2>
        <div className="content-block">
          <h3 className="product-features-title">Main features completed (archived)</h3>
          <ul className="overview-feature-list">
            <li><span aria-hidden="true">📁</span> Tab groups & operations</li>
            <li><span aria-hidden="true">🔐</span> Authentication UI</li>
            <li><span aria-hidden="true">🎤</span> Voice dictation UI</li>
            <li><span aria-hidden="true">💬</span> In-app feedback</li>
            <li><span aria-hidden="true">🪟</span> Split view (native + improvements)</li>
            <li><span aria-hidden="true">📄</span> Webpage summarization</li>
            <li><span aria-hidden="true">✅</span> UI fixes & response formatting</li>
            <li><span aria-hidden="true">⚠️</span> Gemini model migration</li>
            <li><span aria-hidden="true">🪟</span> AI command for native splitview</li>
          </ul>
          <p><strong>Shoutout: Engineering & Pournami</strong></p>
          <p>
            Big shoutout to <strong>Pournami</strong> and the engineering team—<strong>Ashwin John</strong>, <strong>Afshaan Khan</strong>, <strong>Rushyanth Nerellakunta</strong>, <strong>Agrima Gupta</strong>, <strong>Likhitha Guggilla</strong>, <strong>Mohammed Muneebuddin</strong>, <strong>Atharva Joshi</strong>, <strong>Naveen Prashanna Gurumurthy</strong>, <strong>Durgesh Tiwari</strong>, <strong>Kaushik Shridhar</strong>, <strong>Revanth Ganga</strong>, <strong>Saideep Pajjuri</strong>, and <strong>Ruturaj</strong>—for driving these updates, from tab groups and split view to summarization, voice dictation, and the Gemini migration. This is the foundation the team is testing in the scaled NPS phase.
          </p>
          <p>
            Full archive and acceptance criteria: <Link to="/sprints">Sprints</Link>.
          </p>
          <ul className="feature-list">
            <li><strong>AI summarization:</strong> newest version includes summarization features for broader usage signal.</li>
          </ul>
          <div className="section-detail-block" style={{ marginTop: '24px' }}>
            <h3>🏢 Sprint 17: Oasis Enterprise Browser Chromium version</h3>
            <p>
              <Link to="/sprints">Sprint 17</Link> will create an Oasis Enterprise Browser Chromium version, enabling us to serve enterprise clients like Culture Amp and other companies interested in an enterprise browser. Timeline for a prototype is TBD, but work is underway to set up Okta integration and SSO. Another blocker to enterprise revenue is becoming <strong>SOC 2 compliant</strong>—solutions like <a href="https://www.delve.co/" target="_blank" rel="noopener noreferrer">Delve</a> or <a href="https://www.vanta.com/" target="_blank" rel="noopener noreferrer">Vanta</a> can help us hit compliance standards. The annual contract value for this type of deal would be <strong>$12K–$25K</strong> minimum annual commitment and <strong>$108–$150 per user per seat</strong>, in line with competitors (Island, Surf).
            </p>
          </div>
        </div>
      </section>

      <section className="page-section" id="hr">
        <h2>HR</h2>
        <div className="content-block">
          <p>
            Goal: make it easy for every team member to contribute signal—clear onboarding, clear ownership, and consistent participation in testing + feedback loops.
          </p>
        </div>
      </section>

      <section className="page-section" id="goals-mar-31">
        <h2>Goals for March 31st</h2>
        <div className="content-block">
          <ul className="feature-list">
            <li><strong>Scaled testing + NPS baseline:</strong> complete the week-long usage period and collect NPS data (<a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">survey</a>).</li>
            <li><strong>Ship a stable “newest build”:</strong> incorporate the highest-impact findings from internal testing.</li>
            <li><strong>Enterprise motion:</strong> advance the Culture Amp thread and define the repeatable pilot playbook.</li>
            <li><strong>Inbound growth:</strong> meaningful YouTube + blog output (see <Link to="/content-pipeline">Content Pipeline</Link>).</li>
          </ul>
          <p style={{ marginTop: '18px' }}>
            <strong>Product Hunt launch:</strong> We plan to roll out a Product Hunt campaign to attract more users and paid subscribers like Mark. The team has created Product Hunt accounts in preparation (<a href="https://docs.google.com/spreadsheets/d/1gSMDizFLvRliMZgYNyQND4lipZ3Dde6FPn2EWDRZolM/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">Product Hunt Accounts</a>), and we ask new team members to create an account during onboarding so we&apos;re ready to engage on launch day. Per the <a href="https://docs.google.com/document/d/1fbnq13Uj8n3qaCCg1BOdiQD-awjl5c2sswxWaX6oyU8/edit?tab=t.0#heading=h.ctmy5c17lr0g" target="_blank" rel="noopener noreferrer">Product Hunt Launch Charter</a>, we would meet the conditions to launch once we: (1) improve NPS to an industry-standard good level (e.g., 30+), and (2) address critical technical roadblocks—<Link to="/sprints">Sprint 15</Link> (Automatic Software Updates) and <Link to="/sprints">Sprint 10</Link> (Onboarding + Branding polish).
          </p>
        </div>
      </section>

      <section className="page-section" id="faq">
        <h2>Strategic FAQ</h2>
        <p className="faq-intro">
          Questions to help us take advantage of our Q1 midpoint position: we started with no paying customers and no demos; now we have a $20 B2C conversion and Culture Amp requesting pricing. Fill in answers or investigate ways to get them.
        </p>
        <div className="faq-accordion">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className={`faq-item ${faqOpen === idx ? 'faq-item-open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(idx)}
                aria-expanded={faqOpen === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="faq-question-text">{idx + 1}. {item.question}</span>
                <span className="faq-chevron" aria-hidden="true">{faqOpen === idx ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${idx}`}
              >
                <div className="faq-answer-body">
                  <span className="faq-category">{item.category}</span>
                  {typeof item.answer === 'string' ? <p>{item.answer}</p> : <div className="faq-answer-content">{item.answer}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Feb 16–23: scaled testing phase (team-wide)</h2>
        <div className="content-block">
          <p style={{ marginBottom: '14px' }}>
            During the week of <strong>Feb 16–23</strong>, we’re prioritizing a scaled internal testing phase to establish our first meaningful <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS baseline</a>.
            <strong> Archana Ramalingam</strong> is leading this project and has already communicated the plan to everyone via Slack.
          </p>
          <ul className="feature-list">
            <li><strong><a href="https://kahana.co/oasis-auth?mode=login&plan=free&redirect=/installations" target="_blank" rel="noopener noreferrer">Download + install</a> the newest Oasis build</strong> (including the AI summarization features).</li>
            <li><strong>Use Oasis for one full week</strong> in real workflows (aim for real signal, not “toy testing”).</li>
            <li><strong>Complete the <a href="https://kahana.co/oasis-feedback-survey" target="_blank" rel="noopener noreferrer">NPS survey</a> after 1 week of usage</strong> so we can measure baseline satisfaction and identify the biggest gaps.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Q1MidpointUpdate

