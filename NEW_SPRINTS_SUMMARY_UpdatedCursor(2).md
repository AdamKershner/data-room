# New Sprints Summary - January 2026 Feedback Round

**⚠️ Story Points Recalculated:** Story points have been recalculated based on codebase analysis (see `SPRINT_COMPLEXITY_ANALYSIS.md`). Total changed from 133 to 142 SP (+9 SP net increase).

## Overview

Based on the comparison between `Oasis Feedback Phase 2 - Sheet1(1).csv` and `Oasis Feedback Phase 2 - Sheet1(2).csv`, **52 new feedback items** were identified and organized into a set of sprints. After reviewing the actual code layout in this repository, the work was **reorganized for parallel execution** into **15 sprints** (Sprints 8-22) to minimize file conflicts. Sprints 10 and 11 were merged into a single sprint covering both tab group and tab/window operations. Sprint 12 was split into individual feature sprints (12-22).

**Total Feedback Items:** 130 (up from 78)
**New Feedback Items:** 52
**New Sprints Created (post re-org):** 15

---

## Re-org for parallel execution (minimize file conflicts)

The issues below were regrouped into **parallel engineering tracks** based on actual code ownership in this repo (most Oasis AI work is under `browser/base/content/assistant/`). The goal is to reduce merge conflicts by avoiding multiple engineers editing the same large files (notably `commands.ts` and `assistant.ui.js`) in the same sprint.

Key high-conflict files:
- `browser/base/content/assistant/build/src/commands.ts` (tab + hub commands are co-located)
- `browser/base/content/assistant/build/src/assistant.ts` (LangGraph supervisor, streaming, recursion handling)
- `browser/base/content/assistant/assistant.ui.js` (large UI + auth/session UX surface)

---

## Sprint 8: Assistant Engine Reliability (LangGraph, recursion, tool-output formatting)
**Priority:** CRITICAL | **Story Points:** 18 | **Effort:** Medium-High | **Severity:** 9-10/10

### Overview
Additional critical recursion and command execution bugs discovered in the latest feedback round. These issues continue to cause the AI Assistant to fail or behave unpredictably, with recursion errors persisting in version 1.0.1.

### Key Issues:
1. **Recursion Errors Persist in v1.0.1** (4 reports)
   - Recursion limit errors continue with commands like 'rename tab group', 'open new window'
   - Error persists even after version 1.0.1 release
   - Submission IDs: 1Aoxolp, J9vEroY, 2EG9Y6D, EkOx1yq

2. **Duplicate Tab Closing Issues** (2 reports)
   - Commands to close duplicate tabs don't work correctly
   - Fails to close tabs by domain (e.g., all Zoom tabs)
   - Submission IDs: 5B7jrkM, GxGl65Q

3. **Tab Closing Commands Don't Work** (1 report)
   - Commands report success but tabs remain open
   - Submission ID: 5BPQY2Z

4. **Network Errors on Hub Commands** (1 report)
   - Commands like 'list my hubs' result in NetworkError
   - Submission ID: 68BeBDA

### Primary Files:
- `browser/base/content/assistant/build/src/assistant.ts`
- `browser/base/content/assistant/build/src/proxyClient.ts` (remote routing/chat calls)
- `browser/base/content/assistant/build/src/awsSignedFetch.ts` (signed request plumbing; likely surfaced as NetworkError)

---


## Sprint 9: Tab Group & Tab/Window Operations
**Priority:** HIGH | **Story Points:** 29 | **Effort:** Medium-High | **Severity:** 8-10/10

### Overview
Fix tab group (hub) operations including renaming, finding tabs within groups, adding/removing tabs, and hub state accuracy. Also fix core tab/window commands that users perceive as "it said it worked but nothing happened." This sprint covers both tab group management and tab/window command correctness. Also includes browser import, Firefox branding removal, and first launch fixes. This sprint works directly with `commands.ts` without requiring a module split.

### Key Issues:
1. **Tab Group Renaming Fails** (1 report)
   - AI assistant cannot rename tab groups
   - State synchronization issue between AI and actual tab groups
   - Submission ID: EkO6rLL

2. **Can't Find Tabs in Tab Groups** (2 reports)
   - AI reports groups are empty when they contain tabs
   - Can't find specific tabs within groups
   - Submission IDs: 68BP0AJ, QKQ4N2G

3. **Adding Tabs to Groups Adds Wrong Tabs** (1 report)
   - Commands add all open tabs instead of specified ones
   - Submission ID: Ek77J5r

4. **Tab Group Creation with Zero Items** (1 report)
   - Groups created but empty when tabs should be added
   - Submission ID: kdPNA4R

5. **Tab Group Renaming and Listing Tabs Fails** (1 report)
   - AI assistant cannot rename tab groups (returns empty response)
   - Cannot list tabs within tab groups (returns empty response)
   - Submission ID: RGNvdo9

6. **Compound Command: Create Group + Add Tab Fails** (1 report)
   - Creating tab group and adding specific tab in one command doesn't work correctly
   - Wrong tab gets added instead of the specified one
   - Submission ID: b5pKjkZ

7. **"Close Tab Group" Command Deletes Hub Instead** (1 report)
   - Command to close tab group deletes the hub instead of closing it
   - Hub deletion doesn't actually work either
   - Submission ID: VLevPEv

8. **Duplicate Tab Closing Issues** (2 reports)
   - Commands to close duplicate tabs don't work correctly
   - Fails to close tabs by domain (e.g., all Zoom tabs)
   - Submission IDs: 5B7jrkM, GxGl65Q

9. **Tab Closing Commands Don't Work** (1 report)
   - Commands report success but tabs remain open
   - Submission ID: 5BPQY2Z

10. **No Browser Import in Onboarding** (1 report)
   - No option to import from Chrome/Safari in onboarding
   - Submission ID: Me4RJ4M

11. **Firefox Privacy Policy on First Launch** (1 report)
   - Shows Firefox privacy policy instead of Oasis page
   - Submission ID: Bzy7Bj5

12. **Firefox Branding in Vertical Tabs Popup** (1 report)
   - Purple popup with Firefox logo when enabling vertical tabs
   - Submission ID: PdxOEY5

### Primary Files:
- `browser/base/content/assistant/build/src/hubs.ts`
- `browser/base/content/assistant/build/src/commands.ts`
- `browser/base/content/assistant/build/src/services/localMemory.ts` (if hub state is cached)
- Browser first-run / startup UI (for browser import, privacy policy, vertical tabs popup)
- `browser/branding/**` (for Firefox branding removal)

---


## Sprint 10: Authentication + Subscription UX (login, signup, session restore, limits)
**Priority:** HIGH | **Story Points:** 21 | **Effort:** Medium-High | **Severity:** 8-10/10

### Overview
Fix authentication, login, signup, password management, and the “paid but still limited” experience. This sprint is UI-heavy and should be owned by one engineer (or split by “UI vs backend service” if needed) due to the size of `assistant.ui.js`.

### Key Issues:
1. **No Error Message on Invalid Login** (1 report)
   - No user-facing error when credentials are incorrect
   - Errors only in console logs
   - Submission ID: GxAgbQo

2. **Sign-in Menu Hidden Behind Navigation Bar** (2 reports)
   - Menu appears behind Oasis AI navigation bar
   - Submission IDs: q41xByO, OD2QMrp

3. **Login Menu Doesn't Appear After Logout** (1 report)
   - Clicking 3 dots doesn't show login options after logout
   - Submission ID: RGyXvL4

4. **Signup Doesn't Work** (1 report)
   - Account not created, no error message
   - Submission ID: xXW77z5

5. **Can't Change Password** (1 report)
   - Password change functionality broken
   - Submission ID: kdobDeZ

### Primary Files:
- `browser/base/content/assistant/assistant.ui.js`
- `browser/base/content/assistant/build/src/services/supabase.ts`
- `browser/base/content/assistant/build/src/services/subscription.ts`
- `browser/base/content/assistant/build/src/proxyClient.ts` (auth gating on remote calls)

---

## Sprint 11: Onboarding + Branding polish (first run, visibility, Firefox remnants)
**Priority:** MEDIUM-HIGH | **Story Points:** 10 | **Effort:** Medium | **Severity:** 6-10/10

### Overview
Improve the first-time user experience including onboarding flow, default preferences, browser import, AI Assistant visibility, and removing Firefox branding.

### Key Issues:
1. **AI Assistant Not Visible by Default** (1 report)
   - Not open on first install
   - Users don't know where to find it
   - Submission ID: rj4PdO2

2. **Tabs from Other Devices Shows Firefox** (1 report)
   - Shows Firefox interface for syncing tabs
   - Should be hidden
   - Submission ID: 2EWPvvA

3. **Default Preferences Not Set** (1 report)
   - Good defaults not enabled automatically
   - Users have to configure manually
   - Submission ID: Bzy7bq4

4. **Login Not Obvious for First-Time Users** (1 report)
   - Difficult to find and access login
   - Submission ID: kdobD0M

5. **Firefox Branded Image Popup on New Profile** (1 report)
   - Firefox branded image popup appears when creating new profile
   - Confusing for new Oasis users
   - Submission ID: rj42xGN

### Primary Files:
- `browser/base/content/assistant/assistant.ui.js` (assistant visibility / entry points)
- Browser first-run / startup UI (exact files TBD when implementing)
- `browser/branding/**` (for remaining Firefox branding in Oasis UI surfaces)

---

## Sprint 12: Semantic History Search
**Priority:** MEDIUM | **Story Points:** 5 | **Effort:** Medium | **Severity:** 10/10

### Overview
Implement semantic search over browsing history, allowing users to search using natural, fuzzy descriptions (e.g., 'that article about beginner investing') instead of exact titles or URLs.

### Key Issues:
1. **Semantic History Search** (1 report)
   - Search history using natural descriptions
   - Submission ID: QKZVWp1

### Primary Files:
- (new) `browser/base/content/assistant/build/src/search.ts`
- `browser/base/content/assistant/build/src/assistant.ts` (integration)

---

## Sprint 13: Find Content in Tab Groups
**Priority:** MEDIUM | **Story Points:** 5 | **Effort:** Medium | **Severity:** 8/10

### Overview
Implement search functionality across all saved tab groups to find specific content (e.g., 'Find my Apple article').

### Key Issues:
1. **Find Content in Tab Groups** (1 report)
   - Search through all tab groups to find content
   - Submission ID: xXqY1vJ

### Primary Files:
- (new) `browser/base/content/assistant/build/src/search.ts` (may extend)
- `browser/base/content/assistant/build/src/hubs.ts` (tab group access)

---

## Sprint 14: Context-Based Tab Organization
**Priority:** MEDIUM | **Story Points:** 8 | **Effort:** Medium-High | **Severity:** 7/10

### Overview
Implement context-aware tab grouping using AI to analyze tab content/URLs and organize related tabs into groups.

### Key Issues:
1. **Context-Based Tab Organization** (1 report)
   - Organize tabs into groups based on context using AI
   - Submission ID: b5pdjNZ

### Primary Files:
- `browser/base/content/assistant/build/src/assistant.ts` (AI analysis)
- `browser/base/content/assistant/build/src/hubs.ts` (tab group creation)
- `browser/base/content/assistant/build/src/commands.ts` (command integration)

---

## Sprint 15: Add All Tabs to Tab Group
**Priority:** MEDIUM | **Story Points:** 3 | **Effort:** Low | **Severity:** 10/10

### Overview
Implement command to add all currently open tabs to a specified tab group.

### Key Issues:
1. **Add All Tabs to Tab Group** (1 report)
   - Command to add all open tabs to a group
   - Submission ID: 7RA2oJA

### Primary Files:
- `browser/base/content/assistant/build/src/hubs.ts` (hub command module)
- `browser/base/content/assistant/build/src/commands.ts` (command integration)

---

## Sprint 16: AI Command for Native Splitview
**Priority:** MEDIUM | **Story Points:** 5 | **Effort:** Medium | **Severity:** 10/10

### Overview
Integrate with Firefox's native splitview API to allow AI commands to trigger splitview functionality (two tabs side by side within the same window).

### Key Issues:
1. **AI Command for Native Splitview** (1 report)
   - Use AI to trigger Firefox's native splitview
   - Submission ID: XxaWDBj

### Primary Files:
- `browser/base/content/assistant/build/src/commands.ts` (new native splitview command)
- Firefox native splitview API integration

---

## Sprint 17: Chat History Access
**Priority:** MEDIUM | **Story Points:** 8 | **Effort:** Medium-High | **Severity:** 7/10

### Overview
Implement chat history storage and retrieval, allowing users to access previous AI Assistant chat threads from other days.

### Key Issues:
1. **Chat History Access** (1 report)
   - Access previous chat threads from other days
   - Submission ID: xXqY2aJ

### Primary Files:
- (new) `browser/base/content/assistant/build/src/chatHistory.ts`
- `browser/base/content/assistant/assistant.ui.js` (UI for accessing history)
- `services/supabase.ts` (storage)

---

## Sprint 18: Webpage Summarization
**Priority:** MEDIUM | **Story Points:** 8 | **Effort:** Medium-High | **Severity:** 6/10

### Overview
Implement webpage content extraction and automatic summarization functionality.

### Key Issues:
1. **Webpage Summarization** (1 report)
   - Automatically summarize webpages
   - Submission ID: xXqrxDJ

2. **Can't Summarize Wiki Pages** (1 report)
   - Summarization fails for Wikipedia
   - Submission ID: 44Vqkb5

### Primary Files:
- (new) `browser/base/content/assistant/build/src/summarize.ts`
- `browser/base/content/assistant/build/src/assistant.ts` (integration)

---

## Sprint 19: Tags for Websites
**Priority:** MEDIUM | **Story Points:** 5 | **Effort:** Medium | **Severity:** 9/10

### Overview
Implement tagging system for saved sites/tab groups to allow easier searching and organization.

### Key Issues:
1. **Tags for Websites** (1 report)
   - Add tags to websites for easier searching
   - Submission ID: NpZvGdG

### Primary Files:
- (new) `browser/base/content/assistant/build/src/tags.ts`
- `browser/base/content/assistant/build/src/hubs.ts` (integration with tab groups)
- `browser/base/content/assistant/assistant.ui.js` (tagging UI)

---

## Sprint 20: Automatic Software Updates
**Priority:** MEDIUM | **Story Points:** 8 | **Effort:** Medium-High | **Severity:** 9/10

### Overview
Implement update checking, notification system, and update UI within Oasis for software updates.

### Key Issues:
1. **Automatic Software Updates** (1 report)
    - In-app update notifications and updates
    - Submission ID: 5B7xd7d

### Primary Files:
- (new) Update checking and notification system
- Settings or dedicated update component UI
- `browser/base/content/assistant/assistant.ui.js` (update UI)

---

## Sprint 21: Gemini Model Migration (Critical)
**Priority:** CRITICAL | **Story Points:** 5 | **Effort:** Medium | **Severity:** 10/10

### Overview
Migrate from Gemini 2.0 models (discontinued March 31, 2026) to supported models (e.g., 2.5 Flash, 2.5 Flash Lite).

### Key Issues:
1. **Gemini Model Migration Required** (1 report)
    - Google discontinuing Gemini 2.0 models on March 31, 2026
    - Must migrate to 2.5 Flash/Lite before deadline
    - Submission ID: jaRPLRY

### Primary Files:
- `browser/base/content/assistant/build/src/proxyClient.ts` / `awsSignedFetch.ts` (model selection)
- `browser/base/content/assistant/build/src/services/subscription.ts` (usage model tagging)

---

## Sprint 22: UI/Bug Fixes
**Priority:** MEDIUM | **Story Points:** 6 | **Effort:** Low-Medium | **Severity:** 4-6/10

### Overview
Fix various UI issues and bugs in the AI Assistant interface.

### Key Issues:
1. **Confusing AI Response Format** (1 report)
    - Responses just say "in a new tab." without context
    - Submission ID: 2EWX81j

2. **Invalid URL Opened** (1 report)
    - Opens URLs that aren't actual webpages
    - Submission ID: OD2aDK8

3. **Input Text Wrapping Issue** (1 report)
    - Text doesn't wrap in input area
    - Submission ID: 0Q9exbZ

4. **Make Minimize/Maximize More Intuitive and Add Resizing** (1 report)
   - Make minimize/maximize feature more intuitive with proper button states
   - When minimized: maximize button visible, minimize button greyed out
   - When maximized: maximize button greyed out
   - Assistant interface should be resizable by dragging any of its 4 sides
   - Submission ID: Xxa0l5V

5. **Double Scrollbars in Chat** (1 report)
    - Two scrollbars appear in long conversations
    - Submission ID: 2EGZJvD

### Primary Files:
- `browser/base/content/assistant/build/src/assistant.ts` (response formatting)
- `browser/base/content/assistant/build/src/commands.ts` (URL validation)
- `browser/base/content/assistant/assistant.ui.js` (UI fixes)

---

## Summary Statistics

| Sprint | Priority | Story Points (Original) | Story Points (Recalculated) | Change | Parallel Track | Primary Files (conflict surface) |
|--------|----------|------------------------|----------------------------|--------|----------------|----------------------------------|
| Sprint 8 | CRITICAL | 18 | **13** | -5 | Engine | `assistant.ts`, `proxyClient.ts`, `awsSignedFetch.ts` |
| Sprint 9 | HIGH | 29 | **21** | -8 | Hubs + Tabs/Windows + Onboarding | `hubs.ts`, `commands.ts`, browser first-run UI, `browser/branding/**` |
| Sprint 10 | HIGH | 21 | **16** | -5 | Auth/Subscription | `assistant.ui.js`, `services/supabase.ts`, `services/subscription.ts` |
| Sprint 11 | MEDIUM-HIGH | 10 | **8** | -2 | Onboarding/Branding | `assistant.ui.js`, `browser/branding/**`, first-run UI |
| Sprint 12 | MEDIUM | 5 | **8** | +3 | Search | `search.ts`, `assistant.ts` |
| Sprint 13 | MEDIUM | 5 | **5** | 0 | Search | `search.ts`, `hubs.ts` |
| Sprint 14 | MEDIUM | 8 | **13** | +5 | Tab Organization | `assistant.ts`, `hubs.ts`, `commands.ts` |
| Sprint 15 | MEDIUM | 3 | **2** | -1 | Tab Groups | `hubs.ts`, `commands.ts` |
| Sprint 16 | MEDIUM | 5 | **5** | 0 | Firefox Integration | `commands.ts`, Firefox splitview API |
| Sprint 17 | MEDIUM | 8 | **13** | +5 | Chat History | `chatHistory.ts`, `assistant.ui.js`, `services/supabase.ts` |
| Sprint 18 | MEDIUM | 8 | **10** | +2 | Summarization | `summarize.ts`, `assistant.ts` |
| Sprint 19 | MEDIUM | 5 | **8** | +3 | Tagging | `tags.ts`, `hubs.ts`, `assistant.ui.js` |
| Sprint 20 | MEDIUM | 8 | **13** | +5 | Updates | Update system, `assistant.ui.js` |
| Sprint 21 | CRITICAL | 5 | **3** | -2 | Model Migration | `proxyClient.ts`, `awsSignedFetch.ts`, `services/subscription.ts` |
| Sprint 22 | MEDIUM | 6 | **5** | -1 | UI/Bug Fixes | `assistant.ts`, `commands.ts`, `assistant.ui.js` |
| **Total** | - | **133** | **142** | **+9** | - | - |

**Note:** Story points recalculated based on codebase analysis. See `SPRINT_COMPLEXITY_ANALYSIS.md` for detailed breakdown.

---

## Priority Recommendations

### Immediate Action Required:
1. **Sprint 8** - Critical recursion errors are blocking core functionality
2. **Sprint 21 (Gemini Migration)** - Must be completed before March 31, 2026 or AI Assistant will stop working

### High Priority:
3. **Sprint 10** - Authentication issues prevent users from accessing the product
4. **Sprint 9** - Command correctness and hub/tab workflows are core to the product value proposition

### Medium Priority:
5. **Sprint 11** - Onboarding improvements affect new user adoption
6. **Sprints 12-20, 22** - Feature enhancements and UI improvements that improve user experience

---

## Notes

- All new sprints should be reflected wherever sprint metadata lives in this repo (the referenced `financial-dashboard/src/pages/Sprints.jsx` was not found in this checkout; update the correct dashboard location when known).
- Sprint structure follows the same pattern as existing sprints (1-7), but has been regrouped to minimize file conflicts.
- UI-related issues are marked with 🎨 UI icon requiring consultation with Pournami
- Total feedback count updated from 43 to 130 items
