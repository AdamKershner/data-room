# Current Sprints Summary

## Overview

This document summarizes all **active** and **archived** sprints from the Engineering Sprints dashboard.

**Total Active Sprints:** 8
**Total Archived Sprints:** 11
**Total Sprints:** 19

---

## Active Sprints

### Summary Table

| Sprint ID | Title | Priority | Story Points | Effort | Impact | Severity | Issues |
|-----------|-------|----------|--------------|--------|--------|----------|--------|
| Sprint 5 | 🐛 UI/Bug Fixes | MEDIUM | 2 | Low-Medium | Medium | 6-9/10 | 3 |
| Sprint 8 | 📁 Tab Group & Tab/Window Operations | HIGH | 36 | Medium-High | High | 7-10/10 | 4 |
| Sprint 9 | 🔐 Authentication + Subscription UX (login, signup, session restore, limits) | HIGH | 16 | Medium-High | High | 8-10/10 | 5 |
| Sprint 10 | 🎯 Onboarding + Branding polish (first run, visibility, Firefox remnants) | MEDIUM-HIGH | 8 | Medium | High | 6-10/10 | 8 |
| Sprint 11 | 🔍 Making it Easy to Find Saved Websites | MEDIUM | 21 | Medium-High | High | 8-10/10 | 3 |
| Sprint 13 | 💬 Chat History Access | MEDIUM | 13 | Medium-High | Medium | 7/10 | 1 |
| Sprint 15 | 🔄 Automatic Software Updates | MEDIUM | 13 | Medium-High | High | 9/10 | 1 |
| Sprint 17 | 🏢 Oasis Enterprise Browser Chromium Version | HIGH | 55 | High | High | 9/10 | 5 |

### Detailed Sprint Information

#### Sprint 5: 🐛 UI/Bug Fixes
**Priority:** MEDIUM | **Story Points:** 2 | **Effort:** Low-Medium | **Severity:** 6-9/10

**Overview:** Fix various UI issues and bugs in the AI Assistant interface. Includes bookmark management fixes.

**Primary Files:** browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/commands.ts, browser/base/content/assistant/assistant.ui.js, Firefox bookmark API

**Issues Count:** 3

---

#### Sprint 8: 📁 Tab Group & Tab/Window Operations
**Priority:** HIGH | **Story Points:** 36 | **Effort:** Medium-High | **Severity:** 7-10/10

**Overview:** Fix tab group operations including renaming, finding tabs within groups, adding/removing tabs, and tab group state accuracy. Also fix core tab/window commands that users perceive as 'it said it worked but nothing happened.' This sprint covers both tab group management and tab/window command correctness. Includes context-based tab organization using AI to automatically group related tabs. ⚠️ PARTIALLY RESOLVED: \

**Primary Files:** browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/commands.ts, browser/base/content/assistant/build/src/services/localMemory.ts, Browser first-run / startup UI (for browser import, privacy policy, vertical tabs popup), browser/branding/**

**Issues Count:** 4

---

#### Sprint 9: 🔐 Authentication + Subscription UX (login, signup, session restore, limits)
**Priority:** HIGH | **Story Points:** 16 | **Effort:** Medium-High | **Severity:** 8-10/10

**Overview:** Fix authentication, login, signup, password management, and the 'paid but still limited' experience. This sprint is UI-heavy and should be owned by one engineer (or split by 'UI vs backend service' if needed) due to the size of `assistant.ui.js`.

**Primary Files:** browser/base/content/assistant/assistant.ui.js, browser/base/content/assistant/build/src/services/supabase.ts, browser/base/content/assistant/build/src/services/subscription.ts, browser/base/content/assistant/build/src/proxyClient.ts

**Issues Count:** 5

---

#### Sprint 10: 🎯 Onboarding + Branding polish (first run, visibility, Firefox remnants)
**Priority:** MEDIUM-HIGH | **Story Points:** 8 | **Effort:** Medium | **Severity:** 6-10/10

**Overview:** Improve the first-time user experience including onboarding flow, default preferences, browser import, AI Assistant visibility, and removing Firefox branding. Includes browser import in onboarding, Firefox privacy policy replacement on first launch, and Firefox branding removal in vertical tabs popup.

**Primary Files:** browser/base/content/assistant/assistant.ui.js (assistant visibility / entry points), Browser first-run / startup UI (exact files TBD when implementing), browser/branding/**

**Issues Count:** 8

---

#### Sprint 11: 🔍 Making it Easy to Find Saved Websites
**Priority:** MEDIUM | **Story Points:** 21 | **Effort:** Medium-High | **Severity:** 8-10/10

**Overview:** Help users find previously viewed webpages by implementing comprehensive search across tab groups, bookmarks, and browser history. The AI assistant can search using natural language descriptions to help users locate and open saved websites, regardless of where they're stored (tab groups, bookmarks, or history).

**Primary Files:** browser/base/content/assistant/build/src/search.ts (NEW), browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/tags.ts (NEW), browser/base/content/assistant/assistant.ui.js

**Issues Count:** 3

---

#### Sprint 13: 💬 Chat History Access
**Priority:** MEDIUM | **Story Points:** 13 | **Effort:** Medium-High | **Severity:** 7/10

**Overview:** Implement chat history storage and retrieval, allowing users to access previous AI Assistant chat threads from other days.

**Primary Files:** browser/base/content/assistant/build/src/chatHistory.ts (NEW), browser/base/content/assistant/assistant.ui.js, services/supabase.ts

**Issues Count:** 1

---

#### Sprint 15: 🔄 Automatic Software Updates
**Priority:** MEDIUM | **Story Points:** 13 | **Effort:** Medium-High | **Severity:** 9/10

**Overview:** Implement update checking, notification system, and update UI within Oasis for software updates.

**Primary Files:** Update checking and notification system (NEW), Settings or dedicated update component UI, browser/base/content/assistant/assistant.ui.js

**Issues Count:** 1

---

#### Sprint 17: 🏢 Oasis Enterprise Browser Chromium Version
**Priority:** HIGH | **Story Points:** 55 | **Effort:** High | **Severity:** 9/10

**Overview:** Develop a Chromium-based version of Oasis Enterprise Browser to address enterprise customer requirements for secure SaaS access. This sprint is motivated by enterprise demand for managed browsers that can provide secure access to cloud applications for short-term consultants and third-party partners without requiring full device management or shipping hardware. By 2026, analysts project that roughly 25% of enterprises will be using managed browsers or extensions for security and access control. The enterprise browser market is growing rapidly, with most enterprise browsers being Chromium-based due to Chromium's dominant share of global browser usage and compatibility with modern SaaS applications. Organizations now use an average of 100+ SaaS apps, with large enterprises often using well over 150-400, which increases the need for centralized, browser-level security controls. This creates a significant market opportunity for Chromium-based enterprise browsers that can provide secure SaaS access for external users via managed browser sessions, with per-user, per-month licensing aligned to flexible contractor headcount. The goal is to reduce hardware and IT overhead, improve security posture for third-party access, and maintain a familiar user experience while enabling centralized controls for data protection and policy enforcement at the browser/session level.

**Primary Files:** Chromium browser fork (NEW), SSO integration module (NEW), Enterprise policy management (NEW), Browser installation without admin privileges (NEW)

**Issues Count:** 5

---

## Archived Sprints

### Summary Table

| Sprint ID | Title | Priority | Story Points | Effort | Impact | Severity | Issues |
|-----------|-------|----------|--------------|--------|--------|----------|--------|
| Sprint 1 | 🚨 Critical AI Command Execution Fixes | CRITICAL | 18 | Medium | High | 10/10 | 4 |
| Sprint 2 | 🖼️ Complete Window Management | HIGH | 29 | Medium-High | High | 7-10/10 | 8 |
| Sprint 3 | 🪟 Tab Operations & Detection | HIGH | 21 | Medium-High | High | 9-10/10 | 3 |
| Sprint 4 | 🎨 UI Polish & Content Display | MEDIUM | 11 | Low-Medium | Medium | 7-10/10 | 4 |
| Sprint 5 | ✅ UI Fixes & Response Formatting (Completed) | MEDIUM | 3 | Low-Medium | Medium | 4-6/10 | 3 |
| Sprint 6 | 🔄 Human-in-the-Loop (HITL) Framework - Phase 1: MVP/Prototype | MEDIUM | 42 | High | High | 8/10 | 7 |
| Sprint 7 | 🚨 Assistant Engine Reliability (LangGraph, tool-output formatting) | CRITICAL | 13 | Medium | High | 9-10/10 | 2 |
| Sprint 8 | 📁 Sprint 8 - Resolved Tab Group Issues | HIGH | 18 | Medium-High | High | 7-10/10 | 5 |
| Sprint 12 | 🪟 AI Command for Native Splitview | MEDIUM | 5 | Medium | High | 10/10 | 1 |
| Sprint 14 | 📄 Webpage Summarization | MEDIUM | 10 | Medium-High | Medium | 6-8/10 | 3 |
| Sprint 16 | ⚠️ Gemini Model Migration (Critical) | CRITICAL | 3 | Medium | Critical | 10/10 | 1 |

### Detailed Sprint Information

#### Sprint 1: 🚨 Critical AI Command Execution Fixes
**Priority:** CRITICAL | **Story Points:** 18 | **Effort:** Medium | **Severity:** 10/10

**Overview:** Fix critical recursion and command execution bugs that cause the AI Assistant to fail or behave unpredictably. The goal is to ensure recursion error messages do not appear to users. Anytime commands cause an error in the system (e.g., recursion errors) and a command is unable to complete, there should be a friendly and intuitive error message explaining that the prompt may need to be rephrased or that functionality is not yet supported, prompting the user to give feedback and to suggest the new feature or log the observation. All issues relate to the command execution infrastructure and LangGraph logic.

**Primary Files:** assistant.ts, commands.ts

**Issues Count:** 4

---

#### Sprint 2: 🖼️ Complete Window Management
**Priority:** HIGH | **Story Points:** 29 | **Effort:** Medium-High | **Severity:** 7-10/10

**Overview:** Complete window management for the AI Assistant. All issues relate to window behavior, positioning, dragging, and state management in assistant.ui.js. Grouping these together allows developers to work on window behavior holistically.

**Primary Files:** assistant.ui.js

**Issues Count:** 8

---

#### Sprint 3: 🪟 Tab Operations & Detection
**Priority:** HIGH | **Story Points:** 21 | **Effort:** Medium-High | **Severity:** 9-10/10

**Overview:** Fix tab-related operations including tab detection, finding existing tabs, and tab group management. All issues work with the same browser tab APIs and are naturally related. This sprint focuses on making tab operations work correctly before enhancing tab groups.

**Primary Files:** commands.ts (tab commands), hubs.ts

**Issues Count:** 3

---

#### Sprint 4: 🎨 UI Polish & Content Display
**Priority:** MEDIUM | **Story Points:** 11 | **Effort:** Low-Medium | **Severity:** 7-10/10

**Overview:** UI polish and content display improvements. These are pure UI/CSS fixes with no window behavior logic. Quick wins that improve readability and user experience.

**Primary Files:** assistant.ui.js (rendering, CSS)

**Issues Count:** 4

---

#### Sprint 5: ✅ UI Fixes & Response Formatting (Completed)
**Priority:** MEDIUM | **Story Points:** 3 | **Effort:** Low-Medium | **Severity:** 4-6/10

**Overview:** Completed UI fixes and AI response formatting improvements. These issues have been verified as working well.

**Primary Files:** browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/assistant.ui.js

**Issues Count:** 3

---

#### Sprint 6: 🔄 Human-in-the-Loop (HITL) Framework - Phase 1: MVP/Prototype
**Priority:** MEDIUM | **Story Points:** 42 | **Effort:** High | **Severity:** 8/10

**Overview:** Implement the MVP/prototype of the Human-in-the-Loop (HITL) framework to enable product testers to begin providing inputs and participating in the loop. This is the most basic implementation that establishes the core HITL workflow: data input → machine processing → human review → intervention → feedback loop. The goal is to get the fundamental system working so testers can start contributing to AI improvement through their corrections and validations. Uses existing patterns: UsageTracker/UsageLogger for service structure, transcription_usage table pattern for database schema.

**Primary Files:** hitlFeedback.ts (NEW), hitlPipeline.ts (NEW), assistant.ui.js (EXTEND), assistant.ts (EXTEND), proxyClient.ts (EXTEND), supabase_migration.sql (EXTEND)

**Issues Count:** 7

---

#### Sprint 7: 🚨 Assistant Engine Reliability (LangGraph, tool-output formatting)
**Priority:** CRITICAL | **Story Points:** 13 | **Effort:** Medium | **Severity:** 9-10/10

**Overview:** Fix tool output formatting and network error handling in the AI Assistant. These issues relate to command execution infrastructure and response formatting.

**Primary Files:** browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/proxyClient.ts, browser/base/content/assistant/build/src/awsSignedFetch.ts

**Issues Count:** 2

---

#### Sprint 8: 📁 Sprint 8 - Resolved Tab Group Issues
**Priority:** HIGH | **Story Points:** 18 | **Effort:** Medium-High | **Severity:** 7-10/10

**Overview:** Resolved issues from Sprint 8: Tab Group Operations. These issues have been completed and fixed, including tab group content querying, tab filtering/matching, tab group creation, compound commands, and the 'add all tabs to tab group' feature.

**Primary Files:** browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/commands.ts

**Issues Count:** 5

---

#### Sprint 12: 🪟 AI Command for Native Splitview
**Priority:** MEDIUM | **Story Points:** 5 | **Effort:** Medium | **Severity:** 10/10

**Overview:** Integrate with Firefox's native splitview API to allow AI commands to trigger splitview functionality (two tabs side by side within the same window).

**Primary Files:** browser/base/content/assistant/build/src/commands.ts, Firefox native splitview API integration

**Issues Count:** 1

---

#### Sprint 14: 📄 Webpage Summarization
**Priority:** MEDIUM | **Story Points:** 10 | **Effort:** Medium-High | **Severity:** 6-8/10

**Overview:** Implement webpage content extraction and automatic summarization functionality. Includes both single webpage summarization and multi-tab summarization for research workflows.

**Primary Files:** browser/base/content/assistant/build/src/summarize.ts (NEW), browser/base/content/assistant/build/src/assistant.ts

**Issues Count:** 3

---

#### Sprint 16: ⚠️ Gemini Model Migration (Critical)
**Priority:** CRITICAL | **Story Points:** 3 | **Effort:** Medium | **Severity:** 10/10

**Overview:** Migrate from Gemini 2.0 models (discontinued March 31, 2026) to supported models. Completed by Rushyanth: Changed model to 'gemini-3-flash-preview' which is working. As noted by Rushyanth, Google will most probably discard 2.5 Flash as well in the near future, so migrating directly to gemini-3-flash-preview was the right approach.

**Primary Files:** browser/base/content/assistant/build/src/proxyClient.ts / awsSignedFetch.ts, browser/base/content/assistant/build/src/services/subscription.ts

**Issues Count:** 1

---

## Statistics

- **Total Story Points (Active):** 164
- **Total Story Points (Archived):** 173
- **Total Story Points (All):** 337

- **Total Issues (Active):** 30
- **Total Issues (Archived):** 41
- **Total Issues (All):** 71