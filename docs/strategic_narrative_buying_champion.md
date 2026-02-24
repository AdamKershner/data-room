# Strategic Narrative: Buying Champion Profile

**Exercise completed:** February 2026  
**Buying champion:** Enterprise Solutions Architect / Security Architect (Julian-type persona at Culture Amp–like companies)

---

## SECTION 1: BUYING CHAMPION PROFILE

### Demographic Information

- **Company size:** 1,000–3,000 employees (global, hybrid workforce; heavy contractor/third-party usage)
- **Industry:** B2B software, tech-enabled services, HR tech, management consulting, professional services, internet/online services
- **Location:** US- or ANZ-based HQ with offices in North America, EMEA, and/or APAC
- **Job titles:** Enterprise Solutions Architect, Security Architect, Solutions Architect, Zero Trust Architect, Cloud Security Architect, IT Security Architect, Director of Security Architecture, Director of IT/Infrastructure, Head of Security Engineering, Manager of Identity & Access Management (IAM)

### Background

**Career path / experience:**  
10–15 years in IT, security, or infrastructure—early roles in systems/network engineering or IT operations, then architecture or security-focused positions. Has designed and run zero-trust/SASE initiatives, integrated IdP/MFA and DLP tools, and led vendor evaluations (browsers, endpoint, identity). Often owns or heavily influences secure access for contractors and third parties. Used to working with security, HR, and procurement; understands both technical requirements and how to get budget and sign-off.

**Educational credentials:**  
Bachelor's in Computer Science, Information Systems, Cybersecurity, or related technical/STEM field. Many have a master's (e.g., MS in Cybersecurity, Information Assurance, or MBA with technology focus). Certifications often include CISSP, CISM, CCSP, or vendor-specific (Okta, cloud/SASE).

**Comfort with technology:**  
Very high. Evaluates enterprise software and security platforms regularly, reads technical docs and APIs, runs or oversees PoCs. Comfortable with Chromium/browser concepts, IdP/SSO, DLP policies, and deployment models (managed vs. unmanaged devices).

### Goals and Objectives

**Main business objectives:**

1. Reduce contractor time-to-first-access to under 48 hours and cost per contractor to under $200 (vs. $1,500+ device and manual setup).
2. Achieve 95%+ coverage of contractor/third-party access via managed browser and reduce browser-related policy incidents by 40%+ within 12 months.
3. Integrate enterprise browser with IdP and DLP so policy deployment happens in under 24 hours and provisioning/deprovisioning is automatic from HR.

**Additional goals (important but not primary):**

- Keep contract within approved budget band ($12K–$30K annual minimum) and close within 90 days.
- Achieve 70%+ pilot adoption within 30 days; keep support tickets under 5% of pilot users.

**Additional main objectives (optional):**

- Avoid or retire VDI for contractor access—target zero new VDI seats for this use case within 12 months.
- Consolidate security stack—retire or reduce VPN/RBI/SWG/DLP agents where the enterprise browser covers the use case within 12–18 months.
- Meet audit and compliance requirements—produce user- or app-level activity report within 24 hours for audits and incident response.

### Problems and Barriers

**Problems:**

1. Shipping full laptops to contractors costs $1,500+ per device and ~$200/hour in setup time, so contractor onboarding doesn't scale and projects wait weeks for access.
2. Chrome Enterprise can't enforce security and DLP policies on third-party devices, so they can't use it for contractor access and are forced to look at dedicated enterprise browsers.
3. The security team has already standardized on tools like Netskope; any new browser must integrate with that stack, which narrows vendor options and adds integration risk.

**Business impact:**

- Higher cost per contractor and delayed time-to-productivity; inability to scale contractor-heavy engagements without more laptops or VDI.
- Missed security and compliance goals; ungoverned or inconsistent access on third-party devices increases data-loss and audit risk.
- Slower vendor selection and pilot timelines; integration unknowns block internal sign-off and delay the project.

**Barriers:**

- Technical limits of consumer/enterprise Chrome (no strong policy enforcement on unmanaged devices; profile precedence issues).
- Integration and scope uncertainty with IdP and DLP (e.g., Netskope)—need clear requirements and validation before commitment.
- Procurement and budget process: need pricing and contract structure that fit approved bands and close within a reasonable cycle (e.g., 90 days).
- Risk of low adoption or workarounds if the browser adds friction for contractors and internal users.

### Objections

**Reasons they might hesitate:**

- Integration risk—Oasis is less proven than Island/Surf with Okta and especially Netskope.
- Vendor maturity—concern that a smaller vendor may not have the support, roadmap, or stability of established enterprise-browser vendors.
- Lock-in—worry about standardizing on a single browser vendor for a critical control layer.
- User experience—fear that a managed browser will feel slower or more restricted than Chrome.
- Pricing and contract—need to see that minimum commit and per-user-per-month pricing fit the band leadership already approved.

**Issues to address to close the sale:**

- Netskope integration—confirm technical feasibility, scope, and timeline.
- Okta integration—validate SSO, provisioning/deprovisioning, and session behavior.
- No-admin install—demonstrate install and run on contractor-style devices without local admin.
- Chromium compatibility—show that critical SaaS apps and workflows work as expected.
- Licensing model—propose clear per-user-per-month structure and minimum commit that fits their budget.
- Pilot path—define a low-risk way to "see, touch, feel" (e.g., refundable deposit) so they can validate before full commitment.

### Ideal Customer Journey

**Awareness stage:**  
Trigger: Chrome Enterprise fails on policy enforcement for third-party devices; shipping laptops to contractors is too costly and doesn't scale—so they must find a managed browser that works with their IdP and DLP stack.

**Consideration stage:**  
Ease of integration with Okta and Netskope; ability to enforce policy on third-party devices without admin rights; Chromium-based compatibility; onboarding time for contractors; pricing flexibility (per-user-per-month, minimum commit in approved band); low-risk pilot path (e.g., refundable deposit).

**Decision stage:**  
When everything else (security, integrations, pricing) is comparable, Oasis clearly delivers a more elegant, ergonomic browsing experience that users actually like using. The tipping point is that Oasis combines modern enterprise security with a beautiful, productivity-oriented UX—driving higher adoption and less friction than Island or Surf.

### Quotes and Anecdotes

**Quotes (≤30 words, with source):**

- "We were close to rolling out Chrome Enterprise, but pushing policy to devices we don't own just won't work." — Julian, Enterprise Solutions Architect, Jan 2026
- "I need to see, touch, feel the browser with real consultants before I can commit." — Julian, Enterprise Solutions Architect, Jan 2026
- "Shipping $1,500 laptops plus $200 an hour in setup for short-term consultants just doesn't scale." — Julian, Enterprise Solutions Architect, Jan 2026
- "Right now my main focus is pricing feedback for vendor selection—per-user, per-month with a reasonable minimum." — Julian, Enterprise Solutions Architect, Jan 2026

**Stories:**

- **Chrome Enterprise dead end:** Julian's team nearly rolled out Chrome Enterprise Premium, but hit two blockers: they couldn't enforce policies on third-party devices, and Chrome profile precedence made security behavior too unpredictable. That forced them back to the market.
- **Contractor access cost spiral:** To give short-term consultants access, they ship $1,500 laptops and spend ~$200/hour on setup. By the time everything is ready, a week of billable time is gone—clearly unsustainable.
- **De-risked pilot structure:** After discussing Island and Surf's minimums, Julian agreed to a $5,000 refundable deposit with Oasis: use it to validate Netskope integration and policy enforcement; if it's not feasible, they get it back.

---

## SECTION 2: CHANGE & STAKES

### Major Change Disrupting the Market

**How has their industry evolved?**  
Shift from network- and device-centric security (VPN, laptops, VDI) to zero-trust, browser- and identity-centric security where access is governed at the app and session level.

**Then vs. Now:**

- **Then:** Contractors were given corporate laptops, VPN clients, and full endpoint agents; unmanaged devices were rare and Chrome was just a consumer browser.
- **Now:** Contractors expect to use their own devices from anywhere, and the browser has effectively become the primary security control plane.

Additional Then/Now pairs:

- **Then:** Security focused on corporate networks and VPN tunnels. **Now:** Security is shifting to zero-trust with identity and the browser as the main control points.
- **Then:** Data-loss risk was mostly tracked on managed endpoints with heavy agents. **Now:** Sensitive work happens in SaaS apps and AI tools in the browser, often on unmanaged devices.
- **Then:** VDI and shipping laptops were the "standard" answer for contractors. **Now:** Those approaches are too slow and expensive; teams expect secure access from their own devices.
- **Then:** Enterprise browsers were niche; Chrome/Edge were assumed "good enough." **Now:** Dedicated enterprise browsers are a defined category; buyers actively compare Island, Surf, and Oasis.

**Which results are slipping, and why?**  
Contractor onboarding times and costs are getting worse—weeks and thousands of dollars per seat—while browser-based data risk is rising because unmanaged devices, shadow SaaS, and AI tools have outpaced what VPNs and legacy controls can reliably govern.

**Which processes are on the verge of becoming irrelevant?**  
Shipping laptops to every contractor, expanding VDI farms, and relying on network perimeter controls alone—all becoming untenable for cost, speed, and user-experience reasons in a SaaS-first, hybrid world.

**How is technology disrupting the norm?**  
Cloud/SaaS, zero-trust architectures, and AI inside the browser are making the browser itself the new security perimeter—enabling fine-grained, in-browser policy enforcement, but also exposing gaps that traditional VPN, SWG, and endpoint tools can't fully cover.

**How have cultural or societal shifts impacted them?**  
Hybrid and remote work have normalized contractors and third-party contributors using their own devices from anywhere—so "only trust our laptops on our network" no longer matches how the business actually operates.

### Stakes of Remaining with the Status Quo

**Worst-case scenario if they don't adapt:**  
If they stick with laptops/VDI and unmanaged Chrome, contractor costs keep spiraling, onboarding stays slow, and eventually a data-loss or compliance incident tied to browser activity on a third-party device lands on their desk. They're seen as the architect who blocked a safer, more scalable model and let risk and cost compound instead of fixing it.

**Who wins and who loses:**  
**Winners:** SaaS and services companies that treat the browser as a first-class security and productivity platform—using managed enterprise browsers to give contractors secure, low-friction access on their own devices while enforcing modern policies. **Losers:** Those who cling to shipping laptops, VDI, and unmanaged consumer browsers; they'll move slower, spend more per contractor, suffer more browser-based incidents, and struggle to attract teams who expect modern, elegant tools.

---

## SECTION 3: VILLAIN

**Root cause (the villain):**  
SaaS sprawl in the browser—the uncontrolled explosion of web apps, extensions, and shadow AI tools that all live inside the browser with no unified control or context.

**Refined version:**  
SaaS sprawl in the browser—the uncontrolled explosion of web apps, extensions, and shadow AI tools running inside unmanaged browsers, with no unified policy, visibility, or context.

---

## SECTION 4: PROMISED LAND

**What can they now do thanks to your product?**

- Give contractors and third-party users secure SaaS access from their own devices in under 24–48 hours, with no laptops or VDI.
- Enforce unified browser policies (apps, data, and AI usage) across corporate and third-party devices, all from one control plane.
- Plug managed browser access cleanly into their Okta + Netskope stack, so identity and DLP policies flow through.

**How has their day-to-day job improved?**

- They spend time designing policies and workflows, not firefighting laptop logistics, VDI exceptions, and broken Chrome profiles.
- Reviews with security and execs are about progress and metrics, not excuses for why contractors are still on unmanaged Chrome.
- They feel confident championing the solution because users actually like the browser—fewer complaints, more adoption.

**What results are they now able to achieve?**

- 80–90%+ reduction in cost per contractor (no $1,500 device + $200/hr setup).
- 95%+ of contractor/third-party access running through the managed browser, with 40–60% fewer browser-related policy incidents.
- Contractor onboarding measured in hours instead of weeks.

**How has their company benefited?**

- Lower security and compliance risk from SaaS sprawl and shadow AI, with audit-ready browser logs.
- Faster, cheaper scaling of contractor programs and external collaborations.
- Reputation internally as a company that combines modern security with a beautiful, productive user experience.

---

## SECTION 5: ALTERNATIVES

| Name | Type | What do they do well? | What is their limitation? |
|------|------|----------------------|---------------------------|
| Shipping laptops + VPN/VDI | Status quo | Familiar, full device control; security and procurement understand it; no new vendor to evaluate | High cost ($1,500+ per consultant, ~$200/hr setup), slow onboarding (weeks), doesn't scale; contractors still use unmanaged Chrome for some work |
| Chrome Enterprise Premium | Competitor | Known brand, Chromium, low per-user cost (~$6/user/month), fits existing Google stack | Can't enforce policy on third-party devices; profile precedence makes consistent security behavior unreliable |
| Island Enterprise Browser | Competitor | Strong enterprise browser with policy enforcement, visibility, security controls; established vendor; leadership has approved pricing ($25K min, ~$150/user/year) | Heavier, security-first positioning; UX is less of a differentiator; higher minimum commit |
| Surf Browser | Competitor | Enterprise browser with policy control and security; lower minimum than Island ($12K, ~$108/user/year); fits approved budget band | Same category as Island—strong on security, less known for best-in-class UX and productivity |
| Netskope + policies only (no managed browser) | Status quo / internal stack | Already mandated by security; provides DLP and cloud security; no new browser to deploy | Doesn't replace the browser as the control plane—SaaS sprawl, extensions, and shadow AI in the browser remain only partly visible and controllable |

---

## SECTION 6: CATEGORY

**Category name:** Enterprise browser (or secure enterprise browser)

**Category definition:**  
A Chromium-based browser built for organizations to enforce security and data policies, control SaaS and AI usage, and give contractors and employees secure access from any device—without shipping laptops or VDI.

**Positioning line:**  
Oasis is the enterprise browser that brings unified control over SaaS sprawl and shadow AI in the browser, with an elegant, productivity-first experience that users actually want to use.

---

## SECTION 7: CUSTOMER LANGUAGE & SEARCH

### How Customers Describe You

**Phrases you often hear:**

- Secure access for contractors without shipping laptops
- Managed browser that works with Okta and Netskope
- Policy enforcement on third-party devices
- Chromium-based so our SaaS apps just work
- A browser our users actually want to use

**Tasks you help accomplish:**

- Give contractors secure SaaS access from their own devices
- Stop shipping laptops and avoid VDI for contractor access
- Enforce one set of browser policies on corporate and third-party devices
- Govern SaaS sprawl and AI usage in the browser from a single control plane
- Scale external collaboration without adding more hardware or agents

### Search Terms / Queries

enterprise browser, what is an enterprise browser, managed browser, secure enterprise browser, best enterprise browser, best enterprise browsers 2025, best enterprise browser solutions, top enterprise browser solutions, enterprise browser vs consumer browser, enterprise browser vs regular browser, Island enterprise browser comparison, Island vs Talon enterprise browser, best enterprise browser platforms, enterprise browser vendors comparison, enterprise browser vs VDI, enterprise browser vs Secure Web Gateway, enterprise browser vs Remote Browser Isolation, secure browser for contractors, secure access for contractors without laptops, enterprise browser for zero trust, best secure browser for enterprises that want zero trust access without killing performance, enterprise browser for 1,000 employees, enterprise browser features, enterprise browser security features, enterprise browser features checklist SSO DLP clipboard audit logs, managed browser policy enforcement, browser security, why use an enterprise browser, enterprise browser adoption trends

---

## SECTION 8: BUDGET & NEIGHBORING TOOLS

**Department that pays:** IT or Security (often CISO or Infrastructure/Endpoint). Sometimes CIO, Digital Workplace, or shared IT & Security budget.

**If you didn't exist, what would they buy?**  
Island, Surf, or another enterprise browser; or Chrome Enterprise (and accept limited policy enforcement on third-party devices); or more VDI or laptops for contractor access.

---

## SECTION 9: DIFFERENTIATION

### Top Features (up to 10)

| Feature | Why it matters to the buyer |
|---------|-----------------------------|
| Chromium-based engine | Full SaaS and app compatibility; familiar experience, minimal training |
| Policy enforcement on third-party devices | Core requirement Chrome Enterprise can't meet; enables contractor access without laptops |
| Okta integration (SSO, provisioning/deprovisioning) | Fits their identity stack; automatic access lifecycle |
| Netskope/DLP integration | Meets security mandate; single policy plane |
| No local admin required | Contractors install on their own devices; no IT touch per machine |
| Elegant, productivity-first UX | Users actually adopt it; fewer workarounds, better security outcomes |
| Refundable pilot / deposit model | De-risks evaluation; easy internal sell |
| Per-user-per-month pricing | Fits approved band; predictable, scalable |
| Pre-defined contractor policies / HR→Okta→browser flow | Fast rollout; Julian's ideal workflow |
| Centralized audit logs and visibility | Compliance, incident response; single pane for browser activity |

### Differentiation Pillars (2–3)

| Pillar | Why it matters to the buyer |
|--------|-----------------------------|
| **Elegant UX without sacrificing security** | Competitors are security-first; Oasis is the one users want to use, so adoption and control both win |
| **De-risked pilot path (refundable deposit)** | Competitors don't offer it; buyer can validate integration before full commitment |
| **Policy on third-party devices, no admin** | Chrome can't do it; Island/Surf can but often heavier; Oasis delivers both control and simplicity |

---

## SECTION 10: VALUE

### Value Table (Feature → Business Outcome)

| Customer Problem | Feature | Capability | Value |
|------------------|---------|------------|-------|
| "We can't keep shipping $1,500 laptops and spending $200/hour to onboard every contractor—it doesn't scale." | Policy enforcement on third-party devices | Enforce security and DLP policies in a managed browser on contractor-owned devices without laptops or VDI | 80%+ reduction in cost per contractor; onboarding in hours instead of weeks; contractor programs scale without more hardware |
| "Chrome Enterprise almost worked, but we can't enforce policy on devices we don't own—so we're stuck." | Managed browser with no local admin | Contractors install and run the browser on their own devices without admin rights; policies apply regardless of device ownership | Secure contractor access without laptops or VDI; Chrome Enterprise gap closed; one solution for corporate and third-party devices |
| "Our security team mandated Netskope—any browser we pick has to integrate, or we can't move forward." | Okta + Netskope integration | SSO, provisioning/deprovisioning, and DLP policies flow from identity and security stack into the browser | Meets security mandate; single policy layer; no new silos; faster security sign-off |
| "If the browser feels clunky, users will work around it—and then our security controls are useless." | Elegant, productivity-first UX | Chromium-based browser designed for usability and productivity, not only security | Higher adoption; fewer workarounds; security controls actually get used; better compliance outcomes |
| "We need to see, touch, feel before we commit—but we're worried integration won't work." | Refundable pilot / deposit | Deposit funds requirements gathering and integration validation; refund if integration is not feasible | Lower risk; faster internal approval; easier to start a pilot and validate before full commitment |
| "We need per-user pricing that fits the band leadership already approved—Island and Surf set the range." | Per-user-per-month with reasonable minimum | Flexible per-user pricing and minimum commit that fits approved budget bands | Easier procurement; predictable spend; deal fits finance expectations |

---

## Appendix: Julian's Story (Sales Team Narrative)

After demoing Island and Surf, Julian requested a demo with Oasis and requested pricing, mentioning that executives at his company are fine with pricing in the range of Island and Surf.

Julian leads a project at a global B2B software company to find the right enterprise browser for their consultants and third-party users. His goal: give short-term consultants secure access to the company's SaaS apps without shipping them full laptops.

Today, they ship $1,500 laptops to each consultant and spend roughly $200/hour of internal time to provision, secure, and support them. Julian wants a managed, Chromium-based browser that runs on the consultant's own device, requires no local admin rights, and can be turned on and off automatically as contracts start and end.

Julian's team got very close to rolling out Chrome Enterprise. But Chrome Enterprise couldn't reliably enforce security and DLP policies on third-party devices, and profile precedence made consistent security behavior unreliable. Meanwhile, the security team had already prescribed Netskope—any browser they pick must integrate cleanly with it.

Oasis proposed a $5,000 refundable deposit to validate Netskope integration and policy enforcement; if it's not feasible, they get it back. Ongoing pricing is $8 per user per month, which fits comfortably inside the Island and Surf ranges leadership has already accepted.

**When talking to similar prospects, sales can:** Lead with the problem (secure SaaS access for contractors without laptops or VDI); emphasize policy enforcement on third-party devices as the core differentiator versus Chrome Enterprise; normalize minimum commitments by referencing Island and Surf; offer a de-risked pilot path (refundable deposit); and position Oasis as the enterprise browser that wins on elegant UX when security and integration are equal.
