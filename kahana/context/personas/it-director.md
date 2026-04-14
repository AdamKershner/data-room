# Persona: IT Director / IT Manager / Head of IT

*Technical gatekeeper and enterprise deployment owner. Doesn't initiate the Oasis conversation but can block or accelerate it. Needs to be equipped, not sold.*

---

## Overview

**Title(s):** IT Director, Director of IT, IT Manager, Head of IT, VP of IT, Head of Corporate IT, IT Operations Manager
**Typical seniority:** Manager to Director
**Decision role:** Technical evaluator and gatekeeper — evaluates deployment feasibility, security posture, and policy compliance. Can veto a purchase even after the business team approves it.
**Found at companies:** 100+ employee companies with a dedicated IT function. Below 100 employees, engineering or ops usually handles IT.

---

## What They Care About

**Their primary metric:** Security compliance, uptime, support ticket volume, and successful tool deployments. They're measured on "nothing broke and we didn't get breached."

**Their biggest problem right now:**
They're being asked to evaluate and deploy an increasing number of SaaS tools and productivity software their teams are requesting. Each new browser or extension is a potential attack surface, a support burden, and a deployment project. They're skeptical of anything new that touches the browser — the browser is where most security incidents start.

What they specifically need to know about Oasis:
- **What data does it collect?** (Firefox base = no Google telemetry by default — this is a positive)
- **How does it deploy?** (Firefox enterprise: MDM, Group Policy, centralized configuration — familiar path)
- **What's the support burden?** (SaaS product with direct vendor support)
- **Is it an extension or a full browser?** (Full browser, built on Firefox — they know how to manage Firefox)
- **Any compliance certifications?** (SOC 2, privacy policy — need to verify what's available)

**What a good week looks like:** A tool request came in, IT evaluated it, tested it, deployed it cleanly. No shadow IT. No support tickets.

**What a bad week looks like:** Engineering team adopted something without IT review, it became shadow IT, and now there's a data governance question. OR they spent 2 weeks evaluating a tool that IT leadership then rejected anyway.

---

## How They Buy

**Involvement in purchase:** Evaluates and approves the technical deployment, not the business case. They're brought in by the champion (ESA) or economic buyer (VP Eng) after the business case is made. Their job is to confirm it can be deployed safely.
**Discovery behavior:** They hear about tools from their internal stakeholders. They don't evaluate productivity software proactively — it comes to them as a request.
**Evaluation style:** Checklist-driven. Security policy compliance, deployment method, data handling, vendor security posture. They'll ask for a security questionnaire, privacy policy, and deployment documentation.

**Common objections:**
- "We already have Chrome Enterprise — why would we add another browser?" → "Chrome Enterprise is your governed access layer. Oasis is an additional browser choice for teams where productivity is the priority — it doesn't replace Chrome Enterprise, it complements it. Two browsers for two use cases."
- "I need to see a SOC 2 or security review before we can deploy anything" → "Understood — here's our security documentation. Built on Firefox, which your team already knows how to manage via MDM/Group Policy. We can do a joint security review call to walk through any specific questions." [Note: confirm what certifications/docs exist]
- "This is shadow IT — people shouldn't be installing their own browsers" → "You're right — that's actually why we're having this conversation. [N] people from your team are already using Oasis on their own. Bringing it into a managed deployment gives you back control: central policy, visibility into what's installed, and vendor support instead of random installs."

---

## How to Reach Them

**Best channel:** Email. When possible, get introduced by the internal champion rather than reaching out cold — cold outreach to IT Directors about browser software is a low-response category.
**Best time:** Same as VP Eng — early morning or late afternoon.
**What gets their attention:**
- The security/compliance angle first — don't lead with productivity
- Firefox enterprise familiarity — they know Firefox, they know how to manage it
- Specific answers to the questions they'll ask (data handling, deployment method, compliance)

**What gets ignored:**
- Productivity ROI framing — wrong message for this persona
- Anything that sounds like you're trying to bypass IT process

---

## Message Framework

**Value prop for this persona:**
Oasis is a Firefox-based browser your team can deploy and manage through your existing MDM and Group Policy setup. Built on Firefox means familiar tooling, known security model, and no new deployment infrastructure needed.

**Proof points that resonate:**
- Firefox enterprise deployment: Group Policy, MDM (Jamf, Intune, etc.), centralized configuration
- Firefox privacy model vs. Chrome: no Google telemetry by default
- "Your team is probably already using it informally — a managed deployment gives you control back"

---

## Sample Outreach Hooks

*Only reach IT Director directly when: the internal champion has already flagged IT as a blocker, or the company is Tier 1 and you want to proactively address the IT objection.*

**Hook — IT introduced by champion:**
> "[First name] — [Champion name] mentioned you'd want to review Oasis before any team rollout. I want to make this easy: Oasis is built on Firefox, deploys via MDM/Group Policy, and I can get you the security documentation today. What's your preferred format for vendor security reviews?"

**Hook — Shadow IT situation (3+ users from domain using Oasis without IT approval):**
> "[First name] — I know [N] people at [Company] have been using Oasis without IT review, which probably isn't how you'd prefer to find out about new browser software. I'd rather get this through your process properly. Can we schedule 30 minutes to walk through the deployment and security docs? That way you're in control of how and whether it rolls out."
