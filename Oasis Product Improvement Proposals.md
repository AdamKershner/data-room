# Oasis Product Improvement Proposals

*Consolidated from feedback analysis (HITL Exports, Oasis Feedback Phase 2, NPS Survey)*

---

## Table of Contents

1. [Data Summary](#data-summary)
2. [Converting Detractors to Promoters](#converting-detractors-to-promoters)
3. [Updates to Increase NPS](#updates-to-increase-nps)
4. [Updates to Increase Retention](#updates-to-increase-retention)
5. [Priority Matrix](#priority-matrix)

---

## Data Summary

### HITL Exports (feedback_events_rows)
- **100 in-app feedback events** (Jan 29 – Mar 5, 2026)
- **55% positive** (Helpful), **39% negative**, **6% other/testing**
- Top negative categories: Didn't work (17), Wrong result (10), Confusing (4)

### Oasis Feedback Phase 2
- **~200+ structured feedback submissions** (Mar 2025 – Mar 2026)
- **48% Bug Reports**, 21% Usability/UX, 19% Feature Requests, 10% Performance

### NPS Survey
- **14 responses** (Feb 16 – Mar 5, 2026)
- **NPS ≈ 21** (5 promoters, 7 passives, 2 detractors)
- 5 "Very disappointed" if they couldn't use Oasis; 8 "Somewhat disappointed"

### Cross-Dataset Themes
| Theme | Finding |
|-------|---------|
| Top pain point | AI not performing requested actions correctly |
| Second pain point | Tab management (groups, split view, add/remove tabs) |
| Third pain point | Sign-in friction and re-authentication |
| Strengths | Organization, summaries, AI chat, staying in one place |

---

## Converting Detractors to Promoters

### 1. Fix AI Reliability (Highest Impact)
- Prioritize AI accuracy over new features
- Fix tab selection logic (correct tab identification)
- Add intent clarification when prompts are ambiguous
- **Concrete fixes:** Lambda 502 errors, "open first result" vs. sponsored results, summarization consistency

### 2. Improve Tab Management
- Fix split view reliability
- Ensure "add tab to group" selects the correct tab
- Clarify tab vs. window behavior

### 3. Reduce Friction in Core Flows
- Add "Remember me" and persistent sessions
- Simplify Chrome import and Google auth integration
- Persist auth across tabs (e.g., Google Drive)

### 4. Polish AI Assistant UX
- Make minimized chat usable (quick input, expand on click)
- Add voice dictation shortcut (e.g., long-press "O" to record, release to send)
- Show AI actions transparently; clarify token usage

### 5. Address Trust and Expectations
- Make AI actions visible and explainable
- Avoid proactive actions that surprise users
- Emphasize lower-token actions for lower tiers

### 6. Quick Wins
| Issue | Fix | Effort |
|-------|-----|--------|
| Dark mode | Add dark mode toggle | Low |
| Autocorrect | Enable in inputs | Low |
| Chat history | Persist across sidebar/minimized | Medium |
| Summarization | Improve section-level consistency | Medium |

### 7. Proactive Outreach
- Reach out to detractors who left contact info
- Close the loop: communicate what's being fixed
- Re-survey after fixes to measure improvement

---

## Updates to Increase NPS

### High Impact
| Update | Rationale |
|--------|------------|
| Fix AI action accuracy | Primary complaint from detractors and passives |
| Fix tab group / split view reliability | Top pain point across all feedback |
| Add "Remember me" and reduce re-auth | Repeated sign-in is a recurring complaint |
| Improve summarization consistency | Detractors specifically called this out |

### Medium Impact
| Update | Rationale |
|--------|------------|
| Make minimized chat usable | Users must maximize to use it; feels broken |
| Add voice dictation shortcut (e.g., long-press "O") | Detractors want faster interaction |
| Add dark mode toggle | Explicitly requested; low effort |
| Enable autocorrect in inputs | Mentioned as polish issue |
| Show AI actions transparently | Builds trust |

### Lower Impact (Still Valuable)
| Update | Rationale |
|--------|------------|
| Improve onboarding (Chrome import, Google auth) | Reduces early frustration |
| Clarify token usage | Addresses trust concerns |
| Persist chat history across sidebar/minimized | Reduces frustration |

---

## Updates to Increase Retention

*Goal: Increase the chance a user comes back this week if they came each of the past two weeks*

### Habit-Forming Value
| Update | Rationale |
|--------|------------|
| Reliable tab organization | Users who organize in Oasis have a reason to return |
| Reliable summarization | Becomes a go-to tool for research |
| Persist chat history | Preserves context; easier to pick up where they left off |
| Hubs that "just work" | Users build workflows and return to access them |

### Reduce Churn Triggers
| Update | Rationale |
|--------|------------|
| Fix Lambda 502s | Errors during tab group creation cause users to abandon Oasis |
| Reduce sign-in friction | Re-auth on each visit = "not worth it" moments |
| Fix "wrong tab" behavior | Repeated failures push users back to Chrome |
| Ensure new tabs open in Oasis | Links opening in plain windows breaks the experience |

### Sticky Features
| Update | Rationale |
|--------|------------|
| Remember AI assistant position/size | Reduces setup friction on return |
| Browser history integration | "Find tab I opened a while back" brings users back |
| Cross-session sync | Tabs, groups, hubs available across devices |
| Scheduled/recurring workflows | E.g., "Summarize my tabs every Monday" creates habit |

### Reduce "I'll Just Use Chrome" Moments
| Update | Rationale |
|--------|------------|
| Faster AI responses | Slow = perceived low value |
| Graceful degradation | Clear errors and fallbacks instead of opaque failures |
| Quick actions | One-click access to summarize, organize, etc. |

---

## Priority Matrix

### For NPS
1. AI reliability
2. Tab management
3. Sign-in friction
4. Summarization consistency

### For Retention
1. AI reliability
2. Sign-in friction
3. Chat history persistence
4. Tab organization reliability

### Highest Leverage (Both NPS + Retention)
| Update | NPS | Retention |
|--------|-----|-----------|
| AI reliability | ✓ | ✓ |
| Tab management | ✓ | ✓ |
| Sign-in / Remember me | ✓ | ✓ |
| Chat history persistence | ✓ | ✓ |
| Summarization consistency | ✓ | ✓ |

**Recommended focus:** AI reliability and sign-in friction first—they move both metrics.
