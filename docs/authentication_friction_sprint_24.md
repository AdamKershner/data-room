# Authentication Friction — The Full Story & Sprint 24

**Source:** Internal Reflection — Duke Student (Feb 2026)  
**Sprint:** Sprint 24 — Passkeys, Biometrics & SSO  
**Status:** Active

---

## Part 1: The Story (Internal Reflection)

### Internal Reflection: Switching to Oasis as a Duke Student — Why I Came Back to Chrome

Over the past few weeks, I attempted to switch from Google Chrome to Oasis as my primary browser. I approached the transition intentionally, with the goal of using Oasis for my full academic workflow as a student at Duke University.

In practice, the biggest barrier was not performance, layout, or features. **It was authentication friction.**

As a Duke student, I rely heavily on multiple institutional platforms, including DukeHub, Canvas, SharePoint, and other university portals. These systems require single sign-on credentials followed by two-step authentication through Duo Mobile. While my usernames and passwords migrated successfully into Oasis, the login experience was not seamless. Each time I accessed a protected Duke platform, I had to enter credentials (which was migrated from Chrome to Oasis) and complete Duo verification.

In Chrome, the experience is materially different. Chrome stores my passkeys and integrates directly with my device's biometric authentication. Instead of typing passwords and manually completing a two-step flow, I simply scan my face. Authentication happens almost invisibly. This isn't just more convenient—it fundamentally changes the pace of workflow.

Chrome's passkey ecosystem is deeply embedded into my daily digital life. When Oasis cannot seamlessly access or migrate those passkeys, it introduces a measurable slowdown at every login point.

As a student, I move quickly between online meetings, presentations, coursework submissions, and collaborative tools. I frequently switch contexts under time pressure. In those moments, authentication speed becomes part of accessibility. Even a 20–30 second delay feels significant when joining a Zoom presentation or sharing a screen in class. Over time, that friction compounds.

**If Oasis supported full passkey migration from Chrome, integrated device-native biometric authentication, and streamlined Duo Mobile flows within institutional SSO systems, the switching barrier would drop dramatically.** For students, that single improvement could meaningfully change retention.

---

## Part 2: The Sprint

### Sprint 24 — Authentication Friction: Passkeys, Biometrics & SSO

| Field | Value |
|-------|-------|
| **Emoji** | 🔑 |
| **Priority** | HIGH |
| **Story Points** | 13 |
| **Effort** | Medium-High |
| **Impact** | High |
| **Severity** | 8-10/10 |

### Overview

Reduce authentication friction that causes Chrome switchers to revert. Internal reflection (Duke student): biggest barrier to Oasis adoption is not performance or features—it's auth. Chrome stores passkeys and integrates with device biometrics (face scan); Oasis requires manual password + Duo 2FA at every institutional login. For students and knowledge workers who switch contexts quickly (Zoom, Canvas, DukeHub, SharePoint), 20–30 second delays compound.

### Issues

#### 1. Passkey Migration from Chrome

- **Impact:** Retention blocker for Chrome switchers (severity 10/10)
- **Description:** Oasis cannot seamlessly access or migrate passkeys from Chrome. Chrome's passkey ecosystem is deeply embedded; when Oasis can't migrate those passkeys, it introduces measurable slowdown at every login point.
- **Technical Notes:** Implement passkey import/migration from Chrome. WebAuthn credential storage compatibility. May require platform-specific handling for Chrome credential export.

#### 2. Device-Native Biometric Authentication

- **Impact:** Auth speed is part of accessibility for fast context-switchers (severity 9/10)
- **Description:** Chrome integrates with device biometrics (face scan, fingerprint); Oasis requires typing passwords and manually completing Duo 2FA. Biometric auth isn't just more convenient—it fundamentally changes the pace of workflow.
- **Technical Notes:** Integrate WebAuthn with platform biometric APIs. Ensure passkey auth flows use device-native biometric prompts where available.

#### 3. Streamlined Duo/SSO Flows for Institutional Portals

- **Impact:** 20–30 second delay per login compounds for students switching between Zoom, Canvas, coursework (severity 8/10)
- **Description:** University and enterprise portals (DukeHub, Canvas, SharePoint) require SSO + Duo Mobile 2FA. Each protected platform triggers full credential + Duo flow. Need streamlined Duo verification within institutional SSO systems.
- **Technical Notes:** Improve Duo Mobile flow handling. Consider session persistence for institutional SSO. Reduce friction in 2FA completion.

### Primary Files

- Browser password/passkey storage
- WebAuthn integration
- Duo/2FA flow handling
- Credential migration from Chrome

### Acceptance Criteria

- [ ] Passkey migration from Chrome works (import/migrate passkeys)
- [ ] Device-native biometric authentication integrated for passkey auth
- [ ] Duo/2FA flows streamlined for institutional SSO (DukeHub, Canvas, etc.)
- [ ] Auth experience comparable to Chrome for institutional portals
- [ ] Documented: If Oasis supported full passkey migration, biometric auth, and streamlined Duo flows, switching barrier would drop dramatically

---

## Takeaways

1. **Passkey support is a retention lever** — especially for users migrating from Chrome.
2. **Biometric integration** — Chrome's face/fingerprint flow is a differentiator; Oasis needs parity.
3. **Student / academic segment** — high context-switching, time-sensitive workflows; auth friction is especially painful.
4. **Feature parity vs. auth** — even strong features (AI, tabs, summarization) can lose to auth friction if not addressed.
