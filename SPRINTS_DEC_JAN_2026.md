# Engineering Sprints: December 2025 - January 2026 Feedback

**Generated from user feedback submissions**  
**Date Range:** December 18, 2025 - January 12, 2026  
**Total Feedback Items:** 43

---

## Sprint Selection Guide

Each sprint below is self-contained and can be worked on independently. Sprints are organized by **codebase structure** to maximize developer efficiency, while maintaining **priority ordering** for critical bugs. Engineers should select sprints based on:
- **Priority**: Critical bugs affecting core functionality
- **Codebase Cohesion**: Related code grouped together for efficiency
- **User Impact**: Number of affected users and severity ratings

**Note:** This reorganization groups issues by the files/modules they affect, making it easier for developers to work on related functionality together.

---

## 🚨 SPRINT 1: Critical AI Command Execution Fixes
**Priority:** CRITICAL | **Story Points:** 18 | **Estimated Effort:** High | **User Impact:** High (10/10 severity)  
**Primary Files:** `assistant.ts`, `commands.ts`

### Overview
Fix critical recursion and command execution bugs that cause the AI Assistant to fail or behave unpredictably. These issues make the product feel buggy and unreliable. All issues relate to the command execution infrastructure and LangGraph logic.

### Issues Included
1. **Recursion Limit Errors** (3 reports) - **Story Points: 5**
   - **Submission IDs:** `BzYo494`, `NpN4MYQ`, `Ek7WeDB`
   - **Description:** AI Assistant hits recursion limit (16) when executing commands like "open [url]" or "create tab group"
   - **User Impact:** Commands fail completely, product feels broken
   - **Technical Notes:** Related to LangGraphJS recursion limit configuration in `assistant.ts`
   - **Troubleshooting URL:** https://langchain-ai.github.io/langgraphjs/troubleshooting/errors/GRAPH_RECURSION_LIMIT/
   - **Original Feedback:**
     - `BzYo494`: "Error: Recursion limit of 16 reached without hitting a stop condition. You can increase the limit by setting the 'recursionLimit' config key. Troubleshooting URL: https://langchain-ai.github.io/langgraphjs/troubleshooting/errors/GRAPH_RECURSION_LIMIT/ [I was trying to use the 'open' command to open yahoo.com from the ai assistant]"
     - `NpN4MYQ`: "I tried to use command open 'open youtube'. It recursively opened youtube multiple times and hit max limit error. Some one who is working on This implementation should fix this"
     - `Ek7WeDB`: "When I submitted this prompt 'create a tab group \"Webapp Application Creators\"' i received this error message 'Error: Recursion limit of 16 reached without hitting a stop condition. You can increase the limit by setting the 'recursionLimit' config key.'"

2. **Duplicate Tab/Window Opening** (4 reports) - **Story Points: 5**
   - **Submission IDs:** `EkVjrzX`, `5Ba1GQo`, `MepR5JX`, `Y5leyZq`
   - **Description:** Commands like "open new tab", "open youtube in new window", "search X on google" open multiple tabs/windows instead of one
   - **User Impact:** Creates confusion, clutters workspace, wastes resources
   - **Technical Notes:** Command execution logic in `commands.ts` may be triggering multiple times or not properly debounced
   - **Original Feedback:**
     - `EkVjrzX`: "When I typed in the command 'search wall street journal on google', it opened two tabs instead of 1."
     - `5Ba1GQo`: "I tried to search recipes on google and open the first one, and it opened a bunch of tabs"
     - `MepR5JX`: "I prompted the ai assistant to 'open youtube in a new window,' however, while it did open youtube in a new window, it did it twice, which was strange and jarring."
     - `Y5leyZq`: "When I entered 'open new tab' in the Oasis AI assistant, it wouldn't stop opening new tabs"

3. **Infinite Tab Opening Loop** - **Story Points: 5**
   - **Submission ID:** `Y5leyZq`
   - **Description:** "open new tab" command doesn't stop opening tabs
   - **User Impact:** Critical - makes browser unusable
   - **Technical Notes:** Execution guards and state tracking needed in `commands.ts`
   - **Original Feedback:**
     - `Y5leyZq`: "When I entered 'open new tab' in the Oasis AI assistant, it wouldn't stop opening new tabs"

4. **Invalid URL Errors for Common Commands** - **Story Points: 3**
   - **Submission ID:** `rjMGoNN`
   - **Description:** Commands like "Open Google Sheets" result in Invalid URL errors
   - **User Impact:** AI Assistant fails on basic commands, users lose trust (severity 10/10)
   - **Technical Notes:** URL resolution service needed in `commands.ts` for common service names
   - **Original Feedback:**
     - `rjMGoNN`: "I entered 'Open Google Sheets' in AI assistant and i received an Invalid URL error. The AI assistant was no help. I should have just entered google sheets on browser instead of AI assistant."

### Story Point Calculation
- Issue 1: Recursion Limit Errors = **5 points**
- Issue 2: Duplicate Tab/Window Opening = **5 points**
- Issue 3: Infinite Tab Opening Loop = **5 points**
- Issue 4: Invalid URL Errors = **3 points**
- **Total Sprint 1: 18 story points**

### Acceptance Criteria
- [ ] All commands execute exactly once (no duplicates)
- [ ] Recursion limit errors are resolved or properly handled
- [ ] Commands that should open one tab/window do so consistently
- [ ] No infinite loops in command execution
- [ ] Common service names (Google Sheets, etc.) are properly resolved to URLs

### Related Feedback
- Users report feeling like "the product is buggy" (severity 10/10)
- Multiple users affected across different use cases

---

## 🪟 SPRINT 2: Tab Operations & Detection
**Priority:** HIGH | **Story Points:** 21 | **Estimated Effort:** Medium-High | **User Impact:** High (9-10/10 severity)  
**Primary Files:** `commands.ts` (tab commands), `hubs.ts`

### Overview
Fix tab-related operations including tab detection, finding existing tabs, and tab group management. All issues work with the same browser tab APIs and are naturally related. This sprint focuses on making tab operations work correctly before enhancing tab groups.

**Note for Developers:** Users refer to "tab groups" as "hubs" in their feedback, but the underlying feature is tab group management. AI commands should handle both terminologies.

### Issues Included
1. **Tab vs Window Confusion** (2 reports) - **Story Points: 5**
   - **Submission IDs:** `b5QvG2e`, `A7ey1jB`
   - **Description:** "open new tab" opens a new window instead; commands create multiple AI Assistant windows
   - **User Impact:** Unexpected behavior, confusing UX (severity 10/10)
   - **Technical Notes:** Command interpretation in `commands.ts` needs to distinguish tabs from windows
   - **Original Feedback:**
     - `b5QvG2e`: "When I gave the command 'open new tab,' instead of opening a new tab, it opened a new window."
     - `A7ey1jB`: "when I gave the command to open a new tab and split view, it showed 2 ai assistant windows, it felt confusing. It should show only one and that one should be displayed in the original window. This made me think, where can I access the previous chats I had with oasis ai?"

2. **Can't Find/Open Existing Tabs** - **Story Points: 8**
   - **Submission ID:** `rjMgGBN`
   - **Description:** "Open Yahoo Mail" creates new tab instead of finding/opening existing tab
   - **User Impact:** Creates duplicate tabs, can't navigate to existing content (severity 10/10)
   - **Technical Notes:** Tab detection and matching logic needed in `commands.ts` (URL/hostname matching, fuzzy title matching)
   - **Original Feedback:**
     - `rjMgGBN`: "I used the microphone and said 'Open Yahoo Mail' in the AI assistant. The AI assistant correctly typed in Open Yahoo Mail but it failed to open Yahoo Mail. As you can see in the screen in the screen shot, it opened a tab (marked invalid URL as tab name. AI assistant put Yahoo mail in the url. I had a Yahoo mail tab. What I wanted the AI assistant to do is to open up the existing Yahoo mail tab. Now I did have two tabs that are related to Yahoo mail. I wanted AI assistant to open or put focus on my Yahoo mail inbox tab. No value in AI assistant if it can't open/find existing tabs. It would be helpful if I say open or find a tab that the AI assistant finds it and opens it."

3. **Adding Tabs to Tab Groups Fails** (3 reports) - **Story Points: 8**
   - **Submission IDs:** `eqW0MdE`, `KYKWzVV`, `aQqA5Xy`
   - **Description:** AI commands like "add this tab to my Google Sheets tab group" or "put my tabs with google sheets in a tab group" don't work. Users refer to tab groups as "hubs" in their commands, but the underlying feature is tab group management.
   - **User Impact:** Users can't organize their workspace (severity 9-10/10)
   - **Technical Notes:** Tab detection, tab group matching, or tab-to-tab-group association logic may be broken in `hubs.ts` and `commands.ts`
   - **Original Feedback:**
     - `eqW0MdE`: "Entered the following command in AI assistant: add this tab to my Google Sheets hub. My current tab had a google spreadsheet. The tab was not added."
     - `KYKWzVV`: "I entered the following in AI assistant: put my tabs with google sheets in a hub called Google Sheets. It didnt put any of the tabs in the new hub it created. From the screenshot you can see I had 3 Google Sheet tabs open"
     - `aQqA5Xy`: "I entered the following in AI assistant: Add 2026 expenses tab to Google Sheets hub. The 2026 expenses tab was not added but the Oasis Feedback tab was added."

### Story Point Calculation
- Issue 1: Tab vs Window Confusion = **5 points**
- Issue 2: Can't Find/Open Existing Tabs = **8 points**
- Issue 3: Adding Tabs to Tab Groups Fails = **8 points**
- **Total Sprint 2: 21 story points**

### Acceptance Criteria
- [ ] "open new tab" creates a tab, not a window
- [ ] Commands can find and focus existing tabs when appropriate
- [ ] Users can successfully add tabs to existing tab groups via AI commands (AI should understand both "hub" and "tab group" terminology)
- [ ] Tab detection and matching works correctly for tab group operations

---

## 🖼️ SPRINT 3: Complete Window Management
**Priority:** HIGH | **Story Points:** 29 | **Estimated Effort:** Medium | **User Impact:** Medium-High (7-10/10 severity)  
**Primary Files:** `assistant.ui.js`

### Overview
Complete window management for the AI Assistant. All issues relate to window behavior, positioning, dragging, and state management in `assistant.ui.js`. Grouping these together allows developers to work on window behavior holistically.

### Issues Included
1. **AI Assistant Show/Hide Controls & Default Visibility** - **Story Points: 5**
   - **Submission ID:** `jaAvjr9`
   - **Description:** Need keyboard shortcut and visible button to show/hide AI Assistant. In addition to a keyboard command, there should be a unique and easily visible button on the browser next to the "profile" and "settings dropdown" that users can click to show or hide the AI assistant. When it displays, it displays in the same position/sizing as it was last time. AI Assistant should show by default whenever the browser is first installed or when it's opened.
   - **User Impact:** Faster access and better discoverability (severity 10/10)
   - **Technical Notes:** Keyboard shortcut, toggle button in browser UI, state persistence, default visibility in `assistant.ui.js`
   - **Original Feedback:**
     - `jaAvjr9`: "the ai chat window should be resizable from all the edges of the chat window. set a minimum width and height for the window. also, add a shortcut to show and hide the ai assistant window."

2. **Window Dragging Issues** (3 reports) - **Story Points: 5**
   - **Submission IDs:** `44lODNA`, `5BPrdvv`, `gD6kaoM`
   - **Description:** AI Assistant window oscillates/vibrates when dragging, feels jarring
   - **User Impact:** Frustrating experience, makes product feel unpolished (severity 9-10/10)
   - **Technical Notes:** Drag event handling, position calculation, or rendering issues in `assistant.ui.js`
   - **Original Feedback:**
     - `44lODNA`: "I was dragging the AI assistant, and I saw a glitch where it seemed to oscillate a lot between two positions, like it was vibrating"
     - `5BPrdvv`: "When I drag the AI Assistant interface, at times there is a jarring 'vibration' effect that makes the Interface oscillate, causing me to feel shocked and frustrated. It should be updated so that the dragging motion is always smooth and the interface rarely if ever vibrates/oscillates. It might make sense to evaluate the root cause of this and ensure we can replicate the behavior consistently in development in order to identify the right solution."
     - `gD6kaoM`: "Mic button is not working, and while dragging the assistant it feel lot of resistance."

3. **Window Dragging Limited to Top Bar** - **Story Points: 3**
   - **Submission ID:** `rjMvKZ2`
   - **Description:** Can only drag window from top bar, not from anywhere in the window
   - **User Impact:** Counter-intuitive, slows down workflow (severity 10/10)
   - **Technical Notes:** Extend drag area to entire window in `assistant.ui.js`
   - **Original Feedback:**
     - `rjMvKZ2`: "The AI Assistant window should be draggable by clicking anywhere across all edges within the ai chat window, and not just the top bar. It is counter-intuitive to expect users to figure out where to click and enable the dragging."

4. **Z-Index and Layering Problems** (2 reports) - **Story Points: 3**
   - **Submission IDs:** `RGykzvP`, `lbkg7x5`
   - **Description:** AI Assistant window interferes with address bar, dropdown menus appear behind other elements
   - **User Impact:** Can't access browser controls, menus hidden (severity 10/10)
   - **Technical Notes:** Z-index hierarchy needs to be fixed in `assistant.ui.js`
   - **Original Feedback:**
     - `RGykzvP`: "while moving the ai assistant window, the placement of the address bar was getting interrupted with the ai window. fix the elevation hierarchy by increasing the z-index value of the ai assistant window."
     - `lbkg7x5`: "When I click the 3 dots button to see the menu with 'sign in,' 'sign up,' and 'account' on the AI asssistant, sometimes the menu appears behind the 'Oasis AI' bar. In general, the menu should never be hidden by any element or component. For instance it should have the highest Z index"

5. **Focus Management Issues** - **Story Points: 5**
   - **Submission ID:** `Zjrv9OV`
   - **Description:** Clicking behind AI Assistant doesn't bring that window forward, AI stays on top
   - **User Impact:** Can't access content behind AI window without minimizing (severity 9/10)
   - **Technical Notes:** Window focus handling needed in `assistant.ui.js`
   - **Original Feedback:**
     - `Zjrv9OV`: "When i click on a screen behind the AI assistant screen, the focus does not go to the screen. I expect the screen I click on to be brought forward and the AI assistant to be behind it. This is general practice. It's very annoying that I have to minimize the AI assistant first to see the screen that I want to see and I have to maximize the AI assistant to use it."

6. **Window State Management** - **Story Points: 8**
   - **Submission IDs:** `Np1MpWB`, `A7eyejy`, `BzW0r7Y`, `44Vz6dd`
   - **Description:** 
     - AI Assistant should remember size and position
     - Should auto-minimize and snap to corner when clicking outside
     - Should snap to corner when minimized
     - Should stay in viewport when maximizing
   - **User Impact:** Users have to reposition window every time (severity 10/10)
   - **Technical Notes:** Position/size persistence, auto-minimize logic, viewport constraints in `assistant.ui.js`
   - **Original Feedback:**
     - `Np1MpWB`: "The AI assistant should default to a smaller size so it doesn't take up all my screen space. It should also be off to the side. I wonder, if I resize it and place it in a certain spot on my screen, if it would remember that's where I want the AI assistant. Or do I have to resize it and place it every time I use the Oasis browser. It is important for Oasis to remember where I want the AI assistant to be placed on my screen and the size of the AI assistant so that I don't have to keep doing it."
     - `A7eyejy`: "when I click on the minimize icon within the ai assistant, it should minimize and automatically snap to the bottom right corner of the web page."
     - `BzW0r7Y`: "when the user clicks outside the ai assistant window, the window should automatically minimize and snap to the bottom right corner because the user is expecting the ai window to get out of their way while browsing."
     - `44Vz6dd`: "when I switch from minimized version to the maximized version, sometimes the ai assistant is displayed out of viewport window, this makes me take another step of dragging the ai window into the viewport which makes the browsing experience slow."

7. **Minimized Window Interaction** - **Story Points: 5**
   - **Submission IDs:** `jaAvX8E`, `q41vqMO`
   - **Description:** 
     - Should be able to click anywhere on minimized window to expand
     - Dropdown menu should appear outside window bounds
   - **User Impact:** Counter-intuitive interaction (severity 8-9/10)
   - **Technical Notes:** Click-anywhere-to-expand, dropdown positioning in `assistant.ui.js`
   - **Original Feedback:**
     - `jaAvX8E`: "In the minimized version of the ai chat window, I should be able to click anywhere to expand it to at least, display the input box. It's counter intuitive to ask the users to click on the icon to expand and only then be able to use the ai assistant."
     - `q41vqMO`: "In the minimized version of the ai assistant, when I click on the 3 dot menu, I should be able to see all the dropdown options. Since the options are displayed inside the ai window, they are getting hidden. Instead place it outside the ai window"

8. **Window Resizing** - **Story Points: 5**
   - **Submission ID:** `jaAvjr9`
   - **Description:** Should be resizable from all edges, with min width/height
   - **User Impact:** Limited flexibility (severity 10/10)
   - **Technical Notes:** Resizing from all edges with constraints in `assistant.ui.js`
   - **Original Feedback:**
     - `jaAvjr9`: "the ai chat window should be resizable from all the edges of the chat window. set a minimum width and height for the window. also, add a shortcut to show and hide the ai assistant window."

### Story Point Calculation
- Issue 1: AI Assistant Show/Hide Controls = **5 points**
- Issue 2: Window Dragging Issues = **5 points**
- Issue 3: Window Dragging Limited to Top Bar = **3 points**
- Issue 4: Z-Index and Layering Problems = **3 points**
- Issue 5: Focus Management Issues = **5 points**
- Issue 6: Window State Management = **8 points**
- Issue 7: Minimized Window Interaction = **5 points**
- Issue 8: Window Resizing = **5 points**
- **Total Sprint 3: 29 story points**

### Acceptance Criteria
- [ ] Window dragging is smooth with no oscillation
- [ ] Window can be dragged from anywhere within the window
- [ ] Z-index hierarchy is correct (AI Assistant doesn't block browser controls)
- [ ] Clicking behind AI Assistant brings that content forward
- [ ] AI Assistant remembers size and position across sessions
- [ ] Auto-minimizes and snaps to corner when clicking outside
- [ ] Minimized window can be expanded by clicking anywhere
- [ ] Window is resizable from all edges with constraints
- [ ] Keyboard shortcut to show/hide AI Assistant is implemented
- [ ] Visible toggle button is added next to profile/settings dropdown in browser UI
- [ ] AI Assistant shows by default on first browser install
- [ ] AI Assistant shows by default when browser is opened

---

## 🎨 SPRINT 4: UI Polish & Content Display
**Priority:** MEDIUM | **Story Points:** 11 | **Estimated Effort:** Low-Medium | **User Impact:** Medium (7-10/10 severity)  
**Primary Files:** `assistant.ui.js` (rendering, CSS)

### Overview
UI polish and content display improvements. These are pure UI/CSS fixes with no window behavior logic. Quick wins that improve readability and user experience.

### Issues Included
1. **Text Formatting Issues** - **Story Points: 3**
   - **Submission ID:** `gD6v1rK`
   - **Description:** White background on AI responses, markdown headings show asterisks instead of bold
   - **User Impact:** Poor readability, unprofessional appearance (severity 7/10)
   - **Technical Notes:** Markdown rendering, CSS background fixes in `assistant.ui.js`
   - **Original Feedback:**
     - `gD6v1rK`: "The AI outputs need formatting fixes. 1. Remove white bg color from all the ai responses. 2. Headings in the text output must be bolded (right now it's showing markdown text with astericks)"

2. **Text Selection Color** - **Story Points: 1**
   - **Submission ID:** `dWevyQy`
   - **Description:** Selected text in AI responses is not readable (black text on dark selection)
   - **User Impact:** Can't read selected text (severity 10/10)
   - **Technical Notes:** CSS fix for selected text color in `assistant.ui.js`
   - **Original Feedback:**
     - `dWevyQy`: "when I select the text in the ai response, the selected text is not readable to the eye. Change the text color from black to white when selected."

3. **Visual Feedback Missing** - **Story Points: 2**
   - **Submission ID:** `Y5lkXDW`
   - **Description:** No visual feedback when voice icon is clicked, words only appear after pause
   - **User Impact:** Users don't know if voice is working (severity 8/10)
   - **Technical Notes:** Visual indicators for voice recording state in `assistant.ui.js`
   - **Original Feedback:**
     - `Y5lkXDW`: "When the user clicks on the voice icon, there is not visual feedback that the button is working or the words are getting dictated since, the words display only after you hit the pause button."

4. **Empty State Improvements** - **Story Points: 5**
   - **Submission ID:** `7RrMGb0`
   - **Description:** Empty state feels incomplete, needs illustration and example prompts
   - **User Impact:** First impression is poor, users don't know what to do (severity 7/10)
   - **Technical Notes:** Add illustration, example prompts, improve first-impression UX in `assistant.ui.js`
   - **Original Feedback:**
     - `7RrMGb0`: "fix the empty state for the ai chat window, right now it feels incomplete. (add the illustration and remove the oasis ai text placement). since this is the initial interaction with oasis ai assistant, the experience should be memorable. Add some example prompts for the empty state which will give users a head start with ai assistant and its capabilities."

### Story Point Calculation
- Issue 1: Text Formatting Issues = **3 points**
- Issue 2: Text Selection Color = **1 point**
- Issue 3: Visual Feedback Missing = **2 points**
- Issue 4: Empty State Improvements = **5 points**
- **Total Sprint 4: 11 story points**

### Acceptance Criteria
- [ ] Text formatting renders correctly (no white bg, proper markdown)
- [ ] Selected text is readable
- [ ] Visual feedback shows when voice is active
- [ ] Empty state has illustration and example prompts

---

## 🔧 SPRINT 5: Features & Integrations
**Priority:** MEDIUM | **Story Points:** 18-26 | **Estimated Effort:** Medium | **User Impact:** Medium (6-10/10 severity)  
**Primary Files:** Various (bookmarks, commands, UI)

### Overview
Additional features and integrations that don't fit into core functionality sprints. Includes bookmark management, AI knowledge base, subscription tracking, and optional advanced features.

### Issues Included
1. **Removing Bookmarks Doesn't Work** - **Story Points: 5**
   - **Submission ID:** `lbkVQEp`
   - **Description:** "remove [bookmark]" command can't find imported Chrome bookmarks
   - **User Impact:** Can't clean up imported bookmarks (severity 7/10)
   - **Technical Notes:** Integrate Firefox bookmark API, implement bookmark search/removal commands
   - **Original Feedback:**
     - `lbkVQEp`: "I asked AI assistant to remove 'Wyzant' bookmark I imported from Google Chrome and it couldn't find it. I consider this basic functionality that should work. It's not a feature."

2. **AI Assistant Can't Provide Tab Group Instructions** (2 reports) - **Story Points: 5**
   - **Submission IDs:** `1AoNk71`, `RGybMDP`
   - **Description:** When users ask "how do I add a tab to an existing tab group" or "how do I remove a tab from a group", AI provides unhelpful responses. Users may refer to tab groups as "hubs" in their queries.
   - **User Impact:** Users can't learn how to use core features (severity 10/10)
   - **Technical Notes:** AI Assistant needs knowledge base or tool access for tab group management commands. Should understand both "hub" and "tab group" terminology from users.
   - **Original Feedback:**
     - `1AoNk71`: "I entered the following in AI assistant: how do i add a tab to an existing hub.. No helpful response. See screenshot."
     - `RGybMDP`: "I entered the following command in AI assistant: How do i remove a tab from a group. See screenshot for output that was not helpful. AI assistant needs to be able to provide instructions on usage of the Oasis browser that will be helpful to the users. For example, How to create a hub, How to add/remove a tab from a hub. How to view a hub. How to go to a tab in a hub. All these how to's should be available. This is minimum functionality. The AI assistant should be able to execute these how to's so the user does not have to do them manually."

3. **Subscription/Usage Display** - **Story Points: 5**
   - **Submission ID:** `obLl495`
   - **Description:** "show subscription" command doesn't work, users want to see AI command count
   - **User Impact:** Can't track usage tied to pricing (severity 10/10)
   - **Technical Notes:** Implement subscription command, AI command count tracking and display
   - **Original Feedback:**
     - `obLl495`: "I entered 'show subscription' in the AI assistant and it showed the following '[Tool Output for show_url]: Opened subscription://'. I should be able to see how many AI commands I have entered which I will call AI command count since this is tied to pricing."

4. **Inconsistent Tab Group Icons** - **Story Points: 3**
   - **Submission ID:** `jaAJoPR`
   - **Description:** Icons for same type of content (e.g., Google Sheets) are different in tab group view vs tab view
   - **User Impact:** Confusing UI, inconsistent experience (severity 6/10)
   - **Technical Notes:** Fix icon consistency across tab group and tab views
   - **Original Feedback:**
     - `jaAJoPR`: "The icons for my google spreadsheets in a hub are different. I expect the icons to be the same since they are all spreadsheets. The icon displayed when it is shown as a tab should be the same icon in the hub group. Need a consistent UI.. don't change icons."

5. **Multiple AI Assistant Windows** - **Story Points: 3**
   - **Submission ID:** `A7ey1jB`
   - **Description:** Commands create multiple AI Assistant windows instead of reusing one
   - **User Impact:** Confusing, raises question about chat history access
   - **Technical Notes:** Need singleton pattern or window reuse logic
   - **Original Feedback:**
     - `A7ey1jB`: "when I gave the command to open a new tab and split view, it showed 2 ai assistant windows, it felt confusing. It should show only one and that one should be displayed in the original window. This made me think, where can I access the previous chats I had with oasis ai?"

6. **Feature Request: Tab Summarization** - **Story Points: 8** (Optional)
   - **Submission ID:** `7R72950`
   - **Description:** Ability to "summarize and give insights across these 15 tabs"
   - **User Impact:** Would make research easier (severity 6/10)
   - **Technical Notes:** Implement tab content extraction and summarization across multiple tabs
   - **Original Feedback:**
     - `7R72950`: "As a user opening 15 tabs on a topic that I'm researching, I want to be able to prompt the AI assistant to 'summarize and give me insights across these 15 tabs.' It would make a lot of my research easier because i wouldn't have to manually read everything or copy content into ChatGPT. It would reduce the number of steps in my process."

### Story Point Calculation
- Issue 1: Removing Bookmarks Doesn't Work = **5 points**
- Issue 2: AI Assistant Can't Provide Tab Group Instructions = **5 points**
- Issue 3: Subscription/Usage Display = **5 points**
- Issue 4: Inconsistent Tab Group Icons = **3 points**
- Issue 5: Multiple AI Assistant Windows = **3 points**
- Issue 6: Tab Summarization Feature (Optional) = **8 points**
- **Total Sprint 5: 18 story points** (26 points with optional feature)

### Acceptance Criteria
- [ ] Bookmark removal works for imported bookmarks via AI commands
- [ ] AI Assistant can provide helpful instructions for tab group and bookmark management
- [ ] Subscription/usage information is accessible
- [ ] Icons are consistent across tab group and tab views
- [ ] Only one AI Assistant window exists at a time
- [ ] Chat history is accessible from the single AI Assistant window
- [ ] (Optional) Tab summarization feature

---

## 📊 Sprint Summary

| Sprint | Priority | Story Points | Effort | User Impact | Issues Count | Primary Files |
|--------|----------|--------------|--------|------------|--------------|---------------|
| Sprint 1: Critical Command Execution | CRITICAL | 18 | High | High | 4 | `assistant.ts`, `commands.ts` |
| Sprint 2: Tab Operations & Detection | HIGH | 21 | Medium-High | High | 3 | `commands.ts`, `hubs.ts` |
| Sprint 3: Complete Window Management | HIGH | 29 | Medium | Medium-High | 8 | `assistant.ui.js` |
| Sprint 4: UI Polish & Content | MEDIUM | 11 | Low-Medium | Medium | 4 | `assistant.ui.js` |
| Sprint 5: Features & Integrations | MEDIUM | 18-26 | Medium | Medium | 6 | Various |

**Total Story Points:** 97-105 (depending on optional features)  
**Total Issues:** 25 (some issues span multiple sprints)

### Reorganization Benefits

This reorganization groups issues by **codebase structure** rather than just priority:

✅ **Developer Efficiency**: Related code grouped together reduces context switching  
✅ **Better Testing**: Related functionality can be tested together  
✅ **Clearer Boundaries**: Each sprint focuses on specific files/modules  
✅ **Parallel Development**: Different sprints touch different files, reducing merge conflicts  
✅ **Priority Preserved**: Critical bugs still prioritized (Sprint 1)

### Effort Level Mapping
- **High (18-21 points):** Complex bugs requiring deep debugging, architectural changes, or integration with multiple systems
- **Medium (11-29 points):** Moderate complexity with clear implementation path, may involve multiple files but straightforward logic
- **Low-Medium (11 points):** Simple to moderate tasks, mostly UI/CSS fixes or straightforward feature additions

### Notes on Story Point Estimates
- Story points are based on Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, etc.)
- Estimates include: code changes, testing, debugging, and edge case handling
- Higher story points indicate more complexity, uncertainty, or integration work required
- Sprint 3 has many window management tasks (29 points) but they're all in the same file
- Sprint 5 includes optional tab summarization feature (8 points) which can be deferred

---

## 🎯 Recommended Sprint Selection Order

1. **Start with Sprint 1** - Critical bugs that make the product feel broken (command execution infrastructure)
2. **Then Sprint 2** - Tab operations and detection (foundational for tab groups)
3. **Then Sprint 3** - Complete window management (all window behavior in one sprint)
4. **Then Sprint 4** - UI polish (quick wins, improves user confidence)
5. **Finally Sprint 5** - Features and integrations (nice-to-have enhancements)

---

## 📝 Notes for Engineers

- **Submission IDs** are included for each issue - you can reference the original CSV for full context
- **Screenshots** are available in the original feedback (links in CSV)
- **User emails** are available for follow-up questions (check CSV for contact info)
- **Severity ratings** are from users (1-10 scale, 10 being most important)
- **Primary Files** are listed for each sprint to help with planning
- Some issues may have **technical dependencies** - review before starting

---

## 🔗 Reference

- **Source CSV:** `Oasis Feedback Phase 2 - Sheet1(1).csv`
- **Date Range:** December 18, 2025 - January 12, 2026
- **Total Feedback Items Analyzed:** 43
- **Reorganization Analysis:** See `SPRINT_REORGANIZATION_ANALYSIS.md` for detailed comparison
