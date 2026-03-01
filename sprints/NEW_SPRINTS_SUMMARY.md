# New Sprints Summary - January 2026 Feedback Round

## Overview

Based on the comparison between `Oasis Feedback Phase 2 - Sheet1(1).csv` and `Oasis Feedback Phase 2 - Sheet1(2).csv`, **52 new feedback items** were identified and organized into **5 new sprints** (Sprints 8-12).

**Total Feedback Items:** 130 (up from 78)
**New Feedback Items:** 52
**New Sprints Created:** 5

---

## Sprint 8: Critical Recursion & Command Execution - Round 2
**Priority:** CRITICAL | **Story Points:** 21 | **Effort:** Medium-High | **Severity:** 9-10/10

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
- `assistant.ts`
- `commands.ts`

---

## Sprint 9: Tab Group Operations & Management
**Priority:** HIGH | **Story Points:** 26 | **Effort:** Medium-High | **Severity:** 8-10/10

### Overview
Fix tab group (hub) operations including renaming, finding tabs within groups, adding tabs to groups, and tab group state management. These issues prevent users from effectively organizing their workspace.

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

4. **Tool Output Text in Responses** (1 report)
   - Shows raw tool output instead of natural language
   - Submission ID: J94KydJ

5. **Tab Group Creation with Zero Items** (1 report)
   - Groups created but empty when tabs should be added
   - Submission ID: kdPNA4R

6. **Tab Positioning in Groups** (1 report)
   - Tabs not positioned correctly when added to groups
   - Submission ID: ODNEKMR

### Primary Files:
- `commands.ts` (tab group commands)
- `hubs.ts`

---

## Sprint 10: Authentication & Login Experience
**Priority:** HIGH | **Story Points:** 18 | **Effort:** Medium | **Severity:** 8-10/10

### Overview
Fix authentication, login, and signup issues that prevent users from accessing the AI Assistant. Includes login error handling, signup failures, password management, and UI visibility issues.

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

5. **Login Loop After Account Creation** (1 report)
   - Can't log in after creating account
   - Keeps showing "Please sign in first..."
   - Submission ID: 5BAlPpE

6. **Can't Change Password** (1 report)
   - Password change functionality broken
   - Submission ID: kdobDeZ

7. **Usage Limit Error After Upgrade** (1 report)
   - Paid users still see usage limit message
   - Submission ID: ODN872M

### Primary Files:
- `auth.ts`
- `assistant.ui.js` (login UI)
- `supabaseAuth.ts`

---

## Sprint 11: Onboarding & First-Time User Experience
**Priority:** MEDIUM-HIGH | **Story Points:** 24 | **Effort:** Medium | **Severity:** 6-10/10

### Overview
Improve the first-time user experience including onboarding flow, default preferences, browser import, AI Assistant visibility, and removing Firefox branding.

### Key Issues:
1. **AI Assistant Not Visible by Default** (1 report)
   - Not open on first install
   - Users don't know where to find it
   - Submission ID: rj4PdO2

2. **No Browser Import in Onboarding** (1 report)
   - No option to import from Chrome/Safari in onboarding
   - Submission ID: Me4RJ4M

3. **Firefox Privacy Policy on First Launch** (1 report)
   - Shows Firefox privacy policy instead of Oasis page
   - Submission ID: Bzy7Bj5

4. **Firefox Branding in Vertical Tabs Popup** (1 report)
   - Purple popup with Firefox logo when enabling vertical tabs
   - Submission ID: PdxOEY5

5. **Tabs from Other Devices Shows Firefox** (1 report)
   - Shows Firefox interface for syncing tabs
   - Should be hidden
   - Submission ID: 2EWPvvA

6. **Default Preferences Not Set** (1 report)
   - Good defaults not enabled automatically
   - Users have to configure manually
   - Submission ID: Bzy7bq4

7. **Login Not Obvious for First-Time Users** (1 report)
   - Difficult to find and access login
   - Submission ID: kdobD0M

8. **Empty State Image Not Loading** (1 report)
   - Sloth default image doesn't load
   - Submission ID: 1Aaj6WW

### Primary Files:
- `onboarding.js` (NEW)
- `settings.ts`
- `assistant.ui.js`
- Browser initialization code

---

## Sprint 12: Advanced Features & Enhancements
**Priority:** MEDIUM | **Story Points:** 34 | **Effort:** High | **Severity:** 6-10/10

### Overview
Advanced features and enhancements including semantic search, tab organization, chat history, webpage summarization, and integration with native Firefox features.

### Key Issues:

#### Feature Requests:
1. **Semantic History Search** (1 report)
   - Search history using natural descriptions
   - Submission ID: QKZVWp1

2. **Find Content in Tab Groups** (1 report)
   - Search through all tab groups to find content
   - Submission ID: xXqY1vJ

3. **Context-Based Tab Organization** (1 report)
   - Organize tabs into groups based on context using AI
   - Submission ID: b5pdjNZ

4. **Add All Tabs to Tab Group** (1 report)
   - Command to add all open tabs to a group
   - Submission ID: 7RA2oJA

5. **AI Command for Native Splitview** (1 report)
   - Use AI to trigger Firefox's native splitview
   - Submission ID: XxaWDBj

6. **Chat History Access** (1 report)
   - Access previous chat threads from other days
   - Submission ID: xXqY2aJ

7. **Webpage Summarization** (1 report)
   - Automatically summarize webpages
   - Submission ID: xXqrxDJ

8. **Tags for Websites** (1 report)
   - Add tags to websites for easier searching
   - Submission ID: NpZvGdG

9. **Token Refund for Bad Executions** (1 report)
   - Return tokens when Oasis executes incorrectly
   - Submission ID: KYjV0ak

10. **Automatic Software Updates** (1 report)
    - In-app update notifications and updates
    - Submission ID: 5B7xd7d

#### Bugs & UI Issues:
11. **Confusing AI Response Format** (1 report)
    - Responses just say "in a new tab." without context
    - Submission ID: 2EWX81j

12. **Invalid URL Opened** (1 report)
    - Opens URLs that aren't actual webpages
    - Submission ID: OD2aDK8

13. **Input Text Wrapping Issue** (1 report)
    - Text doesn't wrap in input area
    - Submission ID: 0Q9exbZ

14. **Minimize Button Doesn't Restore** (1 report)
    - Can't restore minimized chat
    - Submission ID: Xxa0l5V

15. **Double Scrollbars in Chat** (1 report)
    - Two scrollbars appear in long conversations
    - Submission ID: 2EGZJvD

16. **Can't Summarize Wiki Pages** (1 report)
    - Summarization fails for Wikipedia
    - Submission ID: 44Vqkb5

17. **No Visual Feedback During Voice Recording** (1 report)
    - Text doesn't appear until stop is pressed
    - Submission ID: VLOdzYy

#### Critical:
18. **Gemini Model Migration Required** (1 report)
    - Google discontinuing Gemini 2.0 models on March 31, 2026
    - Must migrate to 2.5 Flash/Lite before deadline
    - Submission ID: jaRPLRY

### Primary Files:
- `commands.ts`
- `assistant.ts`
- `search.ts` (NEW)
- `chatHistory.ts` (NEW)

---

## Summary Statistics

| Sprint | Priority | Story Points | Issues Count | Critical Issues |
|--------|----------|--------------|--------------|-----------------|
| Sprint 8 | CRITICAL | 21 | 4 | 4 |
| Sprint 9 | HIGH | 26 | 6 | 0 |
| Sprint 10 | HIGH | 18 | 7 | 0 |
| Sprint 11 | MEDIUM-HIGH | 24 | 8 | 0 |
| Sprint 12 | MEDIUM | 34 | 18 | 1 (Gemini migration) |
| **Total** | - | **123** | **43** | **5** |

---

## Priority Recommendations

### Immediate Action Required:
1. **Sprint 8** - Critical recursion errors are blocking core functionality
2. **Sprint 12 (Gemini Migration)** - Must be completed before March 31, 2026 or AI Assistant will stop working

### High Priority:
3. **Sprint 10** - Authentication issues prevent users from accessing the product
4. **Sprint 9** - Tab group operations are core to the product value proposition

### Medium Priority:
5. **Sprint 11** - Onboarding improvements affect new user adoption
6. **Sprint 12 (Other Features)** - Enhancements that improve user experience

---

## Notes

- All new sprints have been added to `financial-dashboard/src/pages/Sprints.jsx`
- Sprint structure follows the same pattern as existing sprints (1-7)
- Issues are organized by codebase structure to minimize overlap
- UI-related issues are marked with 🎨 UI icon requiring consultation with Pournami
- Total feedback count updated from 43 to 130 items
