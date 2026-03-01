# Sprint Integration Proposal
## Incorporating New Feedback (Feb 2026) into Existing Sprint Structure

**Date:** February 9, 2026  
**New Feedback Items:** 37 issues across 11 sprint categories  
**Existing Active Sprints:** 8  
**Existing Archived Sprints:** 11

---

## Executive Summary

This document proposes how to integrate **37 new feedback items** (from `NEW_SPRINTS_SUMMARY_FEB_2026.md`) into the existing sprint structure. The analysis identifies:
- **Overlaps** with existing active/archived sprints
- **New sprints** that should be created
- **Expansions** to existing sprints
- **Already addressed** items in archived sprints

---

## Mapping Strategy

### 1. Overlap with Existing Sprints

#### ✅ **Sprint 2 (Archived): Complete Window Management**
**Status:** Archived (29 story points, 8 issues)  
**New Feedback:** Sprint 17 (Window Management) - 6 issues, 13 story points

**Analysis:**
- Sprint 2 was archived but new feedback shows **window management issues persist**
- New issues are **more specific** (minimize/maximize states, viewport positioning, input visibility)
- **Recommendation:** 
  - **Option A:** Create **Sprint 18 (NEW): Window Management Improvements** (13 points)
  - **Option B:** Reopen/expand Sprint 2 if issues weren't fully resolved
  - **Preference:** Option A (new sprint) - issues are distinct enough

**New Issues to Address:**
1. Restore original window size (not just minimize/maximize)
2. Horizontal/vertical resizing controls
3. Input area visibility in minimized state
4. Viewport boundary detection when maximized
5. Size persistence across minimize/maximize cycles
6. Undo minimization bug

---

#### ✅ **Sprint 8 (Active): Tab Group & Tab/Window Operations**
**Status:** Active (36 story points, 4 issues)  
**New Feedback:** 
- Sprint 21 (Tab Group Operations) - 3 issues, 8 story points
- Sprint 22 (Tab Closing) - 2 issues, 3 story points

**Analysis:**
- Sprint 8 is **PARTIALLY RESOLVED** according to notes
- New feedback includes **tab group renaming bugs** and **tab closing issues**
- **Recommendation:** 
  - **Add to Sprint 8:** Sprint 21 issues (tab group renaming, context-based grouping)
  - **Add to Sprint 8:** Sprint 22 issues (tab closing bugs)
  - **Updated Sprint 8:** +11 story points (now 47 total)

**Issues to Add:**
- Tab group renaming bug fix
- Context-based tab grouping improvements (AI logic)
- Close/reopen tab bug
- Multiple tab closing logic

---

#### ✅ **Sprint 12 (Archived): AI Command for Native Splitview**
**Status:** Archived (5 story points, 1 issue)  
**New Feedback:** Sprint 20 (Split View) - 2 issues, 5 story points

**Analysis:**
- Sprint 12 was archived but **new feedback shows split view issues persist**
- New issues: **tab identification** and **using Firefox native splitview** (which Sprint 12 should have addressed)
- **Recommendation:**
  - **Option A:** Reopen Sprint 12 and add new issues (+5 points)
  - **Option B:** Create **Sprint 19 (NEW): Split View Improvements** (5 points)
  - **Preference:** Option B - Sprint 12 was marked complete, new issues suggest different problems

**New Issues:**
1. Split view command execution errors
2. Tab identification (find existing tabs vs creating new)

---

#### ✅ **Sprint 14 (Archived): Webpage Summarization**
**Status:** Archived (10 story points, 3 issues)  
**New Feedback:** Sprint 26 (Summarization) - 1 issue, 3 story points

**Analysis:**
- Sprint 14 was archived but **new feedback shows summarization issues persist**
- New issue: **page scroll detection** - agent doesn't recognize scrolled pages
- **Recommendation:**
  - **Add to existing Sprint 14** (reopen or create follow-up)
  - **OR** Create **Sprint 20 (NEW): Summarization Improvements** (3 points)
  - **Preference:** Create new sprint - issue is specific (scroll detection)

**New Issue:**
- Page scroll detection and content extraction improvements

---

#### ✅ **Sprint 5 (Active): UI/Bug Fixes**
**Status:** Active (2 story points, 3 issues)  
**New Feedback:** 
- Sprint 24 (UI Polish) - 2 issues, 3 story points
- Sprint 25 (UI Bugs) - 1 issue, 1 story point

**Analysis:**
- Sprint 5 is active and focused on UI/bug fixes
- New feedback includes **logo replacement** and **text selection contrast**
- **Recommendation:**
  - **Add to Sprint 5:** Sprint 24 issues (logo, contrast) + Sprint 25 (profile button)
  - **Updated Sprint 5:** +4 story points (now 6 total)

**Issues to Add:**
- Logo asset replacement
- Text selection contrast improvement
- Profile button click handler fix

---

#### ✅ **Sprint 4 (Archived): UI Polish & Content Display**
**Status:** Archived (11 story points, 4 issues)  
**New Feedback:** Sprint 24 (UI Polish) - 2 issues

**Analysis:**
- Sprint 4 was archived, but new UI polish issues exist
- **Recommendation:** Add to Sprint 5 (active) instead of reopening Sprint 4

---

### 2. New Sprints Required

#### 🆕 **Sprint 18 (NEW): Voice Dictation Improvements**
**Priority:** HIGH  
**Story Points:** 6-8  
**Issues:** 5  
**Severity:** 8-10/10

**Rationale:**
- No existing sprint addresses voice dictation
- Critical UX improvements needed
- High user impact

**Issues:**
1. UI simplification (remove buttons, mic→pause conversion)
2. Instant waveform display on mic click
3. Input-reactive waveform (not looped animation)
4. Stop button immediate state change
5. Icon labeling fix + "New Chat" feature

**Note:** Issue #2 (markdown formatting) should be moved to Sprint 5 (UI Polish)

**Primary Files:**
- `browser/base/content/assistant/build/src/services/voiceInput.ts`
- `browser/base/content/assistant/ui-preact/src/App.tsx`
- `browser/base/content/assistant/ui-preact/src/App.css`

---

#### 🆕 **Sprint 19 (NEW): Feedback Modal Implementation**
**Priority:** MEDIUM-HIGH  
**Story Points:** 5  
**Issues:** 3  
**Severity:** 7-10/10

**Rationale:**
- No existing sprint addresses in-app feedback
- New feature request
- Design system alignment needed

**Issues:**
1. In-app feedback functionality (new feature)
2. Modal auto-scroll/positioning
3. Design system alignment (input, checkbox, CTA, chips, shadow)

**Primary Files:**
- `browser/base/content/assistant/ui-preact/src/components/Feedback.tsx` (new/update)
- `browser/base/content/assistant/ui-preact/src/App.tsx`
- `browser/components/aiwindow/ui/components/ai-chat-content/chat-assistant-footer/assistant-message-footer.mjs`

---

#### 🆕 **Sprint 20 (NEW): Split View Improvements**
**Priority:** HIGH  
**Story Points:** 5  
**Issues:** 2  
**Severity:** 10/10

**Rationale:**
- Sprint 12 (archived) addressed split view but new issues persist
- Different problems: tab identification and command execution
- High severity

**Issues:**
1. Split view command execution errors
2. Tab identification (find existing tabs vs creating new)

**Primary Files:**
- `browser/base/content/assistant/build/src/commands.ts` (`AddSplitViewCommand`, `SplitTabsCommand`)
- Firefox native splitview API integration

---

#### 🆕 **Sprint 21 (NEW): Summarization Improvements**
**Priority:** MEDIUM  
**Story Points:** 3  
**Issues:** 1  
**Severity:** 8/10

**Rationale:**
- Sprint 14 (archived) addressed summarization but new issue persists
- Specific problem: page scroll detection

**Issues:**
1. Page scroll detection and content extraction improvements

**Primary Files:**
- `browser/base/content/assistant/build/src/commands.ts` (`SummarizePageCommand`)
- `browser/components/aiwindow/models/Tools.sys.mjs` (`GetPageContent`)

---

#### 🆕 **Sprint 22 (NEW): Search & Command Interpretation**
**Priority:** MEDIUM-HIGH  
**Story Points:** 8-10  
**Issues:** 4  
**Severity:** 8-10/10

**Rationale:**
- No existing sprint addresses search functionality improvements
- Command interpretation is critical for user experience
- New feature: contextual CTAs

**Issues:**
1. Recurring search issues (Windows-specific)
2. Command interpretation improvements
3. Contextual CTA badges + proactive link surfacing (new feature)
4. Web search reliability + error handling

**Primary Files:**
- `browser/base/content/assistant/build/src/commands.ts` (command interpretation)
- `browser/components/aiwindow/models/Tools.sys.mjs` (search tool)
- `browser/base/content/assistant/build/src/assistant.ts` (command execution flow)

---

#### 🆕 **Sprint 23 (NEW): Window Management Improvements**
**Priority:** HIGH  
**Story Points:** 13  
**Issues:** 6  
**Severity:** 8-10/10

**Rationale:**
- Sprint 2 (archived) addressed window management but new specific issues exist
- Different focus: state management, viewport positioning, input visibility

**Issues:**
1. Restore original window size
2. Horizontal/vertical resizing controls
3. Input area visibility in minimized state
4. Viewport boundary detection
5. Size persistence across minimize/maximize
6. Undo minimization bug

**Primary Files:**
- `browser/base/content/assistant/ui-preact/src/components/Header.tsx`
- `browser/base/content/assistant/build/src/assistant.ts`
- `browser/base/content/assistant/ui-preact/src/App.tsx`

---

#### 🆕 **Sprint 24 (NEW): Miscellaneous Fixes**
**Priority:** MEDIUM  
**Story Points:** 8-11  
**Issues:** 8  
**Severity:** 7-10/10

**Rationale:**
- Diverse issues that don't fit into other sprints
- Some may be quick fixes, others need investigation

**Issues:**
1. Text box boundaries CSS fix
2. Hub auto-grouping logic improvements
3. Command interpretation context matching
4. "Don't show again" popup fix
5. Windows-specific issue (needs investigation)
6. Command interpretation (multiple commands)
7. Internal server error handling
8. Chat history visibility bug

**Primary Files:**
- Various (text box: `App.tsx`, hub logic: `hubs.ts`, command: `commands.ts`, chat history: `ChatStore.sys.mjs`)

**Recommendation:** Consider splitting into:
- **Sprint 24A:** UI fixes (issues 1, 4, 7) = 3 points
- **Sprint 24B:** Logic fixes (issues 2, 3, 5, 6, 8) = 8 points

---

## Updated Sprint Structure

### Active Sprints (Updated)

| Sprint ID | Title | Priority | Story Points | Changes |
|-----------|-------|----------|--------------|---------|
| Sprint 5 | 🐛 UI/Bug Fixes | MEDIUM | **6** (+4) | Added logo, contrast, profile button |
| Sprint 8 | 📁 Tab Group & Tab/Window Operations | HIGH | **47** (+11) | Added tab group renaming, tab closing bugs |
| Sprint 9 | 🔐 Authentication + Subscription UX | HIGH | 16 | No changes |
| Sprint 10 | 🎯 Onboarding + Branding polish | MEDIUM-HIGH | 8 | No changes |
| Sprint 11 | 🔍 Making it Easy to Find Saved Websites | MEDIUM | 21 | No changes |
| Sprint 13 | 💬 Chat History Access | MEDIUM | 13 | No changes |
| Sprint 15 | 🔄 Automatic Software Updates | MEDIUM | 13 | No changes |
| Sprint 17 | 🏢 Oasis Enterprise Browser Chromium Version | HIGH | 55 | No changes |

**Total Active Story Points:** 179 (+15 from new feedback)

---

### New Sprints to Create

| Sprint ID | Title | Priority | Story Points | Issues | Status |
|-----------|-------|----------|--------------|--------|--------|
| Sprint 18 | 🎤 Voice Dictation Improvements | HIGH | 6-8 | 5 | **NEW** |
| Sprint 19 | 💬 Feedback Modal Implementation | MEDIUM-HIGH | 5 | 3 | **NEW** |
| Sprint 20 | 🪟 Split View Improvements | HIGH | 5 | 2 | **NEW** |
| Sprint 21 | 📄 Summarization Improvements | MEDIUM | 3 | 1 | **NEW** |
| Sprint 22 | 🔍 Search & Command Interpretation | MEDIUM-HIGH | 8-10 | 4 | **NEW** |
| Sprint 23 | 🖼️ Window Management Improvements | HIGH | 13 | 6 | **NEW** |
| Sprint 24 | 🔧 Miscellaneous Fixes | MEDIUM | 8-11 | 8 | **NEW** |

**Total New Story Points:** 48-60

---

## Integration Summary

### Feedback Already Addressed (Archived Sprints)
- **Sprint 2 (Archived):** Window Management - Some overlap, but new issues are more specific
- **Sprint 12 (Archived):** Split View - Addressed basic functionality, but new issues persist
- **Sprint 14 (Archived):** Summarization - Addressed basic functionality, but scroll detection issue remains

**Action:** Create new sprints for these areas rather than reopening archived sprints, as issues are distinct.

---

### Feedback Added to Existing Active Sprints

#### Sprint 5: UI/Bug Fixes
**Added:**
- Logo asset replacement (Sprint 24, Issue 1)
- Text selection contrast (Sprint 24, Issue 2)
- Profile button fix (Sprint 25, Issue 1)

**Story Points:** 2 → 6 (+4)

#### Sprint 8: Tab Group & Tab/Window Operations
**Added:**
- Tab group renaming bug (Sprint 21, Issue 2)
- Context-based tab grouping improvements (Sprint 21, Issue 3)
- Close/reopen tab bug (Sprint 22, Issue 1)
- Multiple tab closing logic (Sprint 22, Issue 2)

**Story Points:** 36 → 47 (+11)

---

### New Sprints Created

1. **Sprint 18:** Voice Dictation Improvements (6-8 points)
2. **Sprint 19:** Feedback Modal Implementation (5 points)
3. **Sprint 20:** Split View Improvements (5 points)
4. **Sprint 21:** Summarization Improvements (3 points)
5. **Sprint 22:** Search & Command Interpretation (8-10 points)
6. **Sprint 23:** Window Management Improvements (13 points)
7. **Sprint 24:** Miscellaneous Fixes (8-11 points)

---

## Priority Recommendations

### High Priority (Address First)
1. **Sprint 23:** Window Management Improvements (13 points) - High user impact
2. **Sprint 18:** Voice Dictation Improvements (6-8 points) - Critical UX
3. **Sprint 20:** Split View Improvements (5 points) - High severity
4. **Sprint 8 (Updated):** Tab Group Operations (+11 points) - Already active

### Medium-High Priority
5. **Sprint 19:** Feedback Modal Implementation (5 points) - New feature
6. **Sprint 22:** Search & Command Interpretation (8-10 points) - User experience
7. **Sprint 5 (Updated):** UI/Bug Fixes (+4 points) - Already active

### Medium Priority
8. **Sprint 21:** Summarization Improvements (3 points)
9. **Sprint 24:** Miscellaneous Fixes (8-11 points)

---

## Implementation Timeline

### Phase 1: Immediate (Week 1-2)
- **Sprint 23:** Window Management Improvements
- **Sprint 18:** Voice Dictation Improvements
- **Sprint 8 (Updated):** Complete tab group/closing fixes

### Phase 2: Short-term (Week 3-4)
- **Sprint 20:** Split View Improvements
- **Sprint 19:** Feedback Modal Implementation
- **Sprint 5 (Updated):** UI polish fixes

### Phase 3: Medium-term (Week 5-6)
- **Sprint 22:** Search & Command Interpretation
- **Sprint 21:** Summarization Improvements
- **Sprint 24:** Miscellaneous Fixes

---

## Notes & Considerations

### Issue Reassignment
- **Sprint 18, Issue #2 (Markdown Formatting):** Should be moved to Sprint 5 (UI Polish)
  - This issue is about AI response formatting, not voice dictation
  - **Action:** Reassign to Sprint 5, adjust story points accordingly

### Sprint 24 Splitting
- Consider splitting Sprint 24 (Miscellaneous) into:
  - **Sprint 24A:** Quick UI fixes (3 points)
  - **Sprint 24B:** Logic improvements (8 points)
- This allows parallel work and clearer ownership

### Dependencies
- **Sprint 23** (Window Management) should be completed before **Sprint 5** UI polish on window components
- **Sprint 22** (Search & Commands) may depend on **Sprint 8** command execution fixes
- **Sprint 24** issues may depend on fixes from other sprints

### Risk Factors
- **Sprint 23:** Window state management can have unexpected edge cases
- **Sprint 18:** Audio processing may have platform-specific issues
- **Sprint 22:** Command interpretation improvements may uncover more issues
- **Sprint 24:** Diverse issues, some may require deeper investigation

---

## Summary Statistics

### Before Integration
- **Active Sprints:** 8
- **Active Story Points:** 164
- **Active Issues:** 30

### After Integration
- **Active Sprints:** 8 (updated) + 7 (new) = **15 total**
- **Active Story Points:** 179 (updated) + 48-60 (new) = **227-239 total**
- **Active Issues:** 30 (existing) + 37 (new) = **67 total**

### Story Point Breakdown
- **Updated Existing Sprints:** +15 points
- **New Sprints:** 48-60 points
- **Total New Work:** 63-75 story points

---

## Next Steps

1. ✅ **Review this proposal** with engineering team
2. ✅ **Confirm sprint assignments** and story point estimates
3. ✅ **Prioritize new sprints** based on user impact
4. ✅ **Update sprint tracking** with new sprints and expanded existing sprints
5. ✅ **Assign owners** to new sprints
6. ✅ **Create feature branches** for parallel work (see `SPRINT_REORGANIZATION_ANALYSIS.md`)
7. ✅ **Begin Phase 1 implementation** (Sprints 23, 18, 8)

---

## Appendix: Issue Mapping Reference

### Sprint 17 (New Feedback) → Sprint 23 (New Sprint)
- All 6 window management issues → Sprint 23

### Sprint 18 (New Feedback) → Sprint 18 (New Sprint)
- Issues 1, 3, 4, 5 → Sprint 18
- Issue 2 (markdown) → Sprint 5 (reassigned)

### Sprint 19 (New Feedback) → Sprint 19 (New Sprint)
- All 3 feedback modal issues → Sprint 19

### Sprint 20 (New Feedback) → Sprint 20 (New Sprint)
- All 2 split view issues → Sprint 20

### Sprint 21 (New Feedback) → Sprint 8 (Updated)
- All 3 tab group issues → Sprint 8

### Sprint 22 (New Feedback) → Sprint 8 (Updated)
- All 2 tab closing issues → Sprint 8

### Sprint 23 (New Feedback) → Sprint 22 (New Sprint)
- All 4 search/command issues → Sprint 22

### Sprint 24 (New Feedback) → Sprint 5 (Updated)
- Issue 1 (logo) → Sprint 5
- Issue 2 (contrast) → Sprint 5

### Sprint 25 (New Feedback) → Sprint 5 (Updated)
- Issue 1 (profile button) → Sprint 5

### Sprint 26 (New Feedback) → Sprint 21 (New Sprint)
- Issue 1 (summarization) → Sprint 21

### Sprint 27 (New Feedback) → Sprint 24 (New Sprint)
- All 8 miscellaneous issues → Sprint 24

---

**Document Version:** 1.0  
**Last Updated:** February 9, 2026  
**Author:** Sprint Integration Analysis
