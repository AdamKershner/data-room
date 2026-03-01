# Human-in-the-Loop (HITL) Framework Sprints

## Overview

Human-in-the-Loop (HITL) is a framework that combines human and machine intelligence to solve complex problems. It leverages the strengths of both humans and machines to achieve better results than either could achieve alone.

### Core Concept

The HITL framework involves a human operator or team who actively participates in the machine learning process. They provide input, validation, correction, and guidance to the AI system, creating a feedback loop that improves performance over time.

**Key Principle:** The more people train/tune on a regular basis, the more accurate and reliable the overall system will become.

### How HITL Works

1. **Data Input:** The system receives data (images, text, audio, etc.)
2. **Machine Processing:** The AI model processes the data and makes a prediction or decision
3. **Human Review:** A human reviews the machine's output
4. **Human Intervention:** If the machine's output is incorrect or uncertain, the human corrects it or provides additional information
5. **Feedback Loop:** The corrected data or human input is fed back into the AI model to improve its accuracy and performance over time

### Benefits

- **Improved Accuracy:** Human intervention corrects errors and improves overall system accuracy
- **Faster Training:** HITL can accelerate the training process, especially with limited or noisy data
- **Handling Complex Tasks:** Useful for tasks requiring subjective judgment, creativity, or common sense
- **Adaptability:** System can adapt to changing conditions and new data more easily
- **Bias Mitigation:** Humans can help identify and correct biases in the data or model

---

## Sprint 6: HITL Framework - Phase 1: MVP/Prototype

### Objective

Implement the **most basic HITL implementation** that enables product testers to begin providing inputs and participating in the loop. This is the minimal viable product needed to get the fundamental system working.

### Priority
**MEDIUM**

### Goal

Get the core HITL workflow functional so product testers can start contributing to AI improvement through their corrections and validations.

### Core Workflow

The MVP must implement this basic flow:
1. **Data Input Processing** - System receives data/commands
2. **Machine Prediction/Decision** - AI model processes and makes a decision
3. **Human Review Interface** - Interface for testers to see AI outputs
4. **Human Intervention/Correction** - Mechanism for testers to correct or validate outputs
5. **Basic Feedback Loop** - Corrected data feeds back into the AI model

### Primary Files
- `browser/base/content/assistant/build/src/services/hitlFeedback.ts` (NEW)
- `browser/base/content/assistant/build/src/services/hitlPipeline.ts` (NEW)
- `browser/base/content/assistant/assistant.ui.js` (EXTEND)
- `browser/base/content/assistant/build/src/assistant.ts` (EXTEND)
- `browser/base/content/assistant/build/src/proxyClient.ts` (EXTEND)
- `browser/base/content/assistant/build/supabase_migration.sql` (EXTEND)

### Current Infrastructure Assessment

**✅ Existing Assets:**
- Supabase infrastructure (users, sessions tables) - can extend for HITL data
- Usage tracking pattern (UsageTracker/UsageLogger) - can replicate for feedback tracking
- UI components in `assistant.ui.js` - can extend with feedback buttons
- Authentication system - already integrated
- LangGraph assistant with supervisor pattern - can intercept outputs for review

**❌ Missing Components:**
- Database schema for storing corrections/feedback
- UI components for feedback collection (thumbs up/down, correction input)
- Feedback collection service
- Feedback processing pipeline
- Integration with AI model training/update system

### Issues Included

#### 1. Database Schema for HITL Feedback (Story Points: 3)

**Description:** Create Supabase database schema to store HITL feedback, corrections, and training data.

**Impact:** Foundation for storing all HITL data

**Technical Implementation:**
- Create `hitl_feedback` table with fields:
  - `id`, `user_id`, `session_id`, `conversation_id`
  - `user_input`, `ai_output`, `corrected_output` (nullable)
  - `feedback_type` (validation/correction/rejection)
  - `feedback_score` (1-5 or thumbs up/down)
  - `timestamp`, `created_at`
- Create `hitl_training_data` table for processed corrections ready for model training
- Add RLS policies (users can only see their own feedback)
- Create indexes for performance (user_id, timestamp, feedback_type)

**Complexity:** Low-Medium (similar pattern to existing `transcription_usage` table)

**Dependencies:** None

#### 2. Feedback Collection UI Components (Story Points: 5)

**Description:** Add UI components to `assistant.ui.js` that allow users to provide feedback on AI responses.

**Impact:** Enables users to interact with HITL system

**Technical Implementation:**
- Add feedback buttons to each AI message bubble:
  - Thumbs up/down buttons
  - "Correct" button that opens inline text editor
  - "Flag" button for reporting issues
- Create feedback modal/panel for detailed corrections
- Store feedback state locally until submission
- Visual feedback when feedback is submitted (success indicator)

**Complexity:** Medium (UI work, but can extend existing message bubble components)

**Dependencies:** None (can be built in parallel with database schema)

#### 3. HITL Feedback Service (Story Points: 5)

**Description:** Create service to collect, validate, and store feedback from UI components.

**Impact:** Handles all feedback collection logic

**Technical Implementation:**
- Create `services/hitlFeedback.ts` similar to `usageLogger.ts` pattern
- Methods:
  - `submitFeedback(feedbackData)` - store feedback to Supabase
  - `getUserFeedbackStats()` - get user's feedback history
  - `validateFeedback(feedbackData)` - validate feedback before submission
- Integrate with SupabaseAuth for user context
- Handle offline scenarios (queue feedback for later submission)

**Complexity:** Medium (follows existing service patterns)

**Dependencies:** Database schema (#1)

#### 4. Intercept AI Outputs for Review (Story Points: 3)

**Description:** Modify `assistant.ts` to capture AI outputs and make them available for feedback.

**Impact:** Enables the review step in HITL workflow

**Technical Implementation:**
- Modify `runAssistantStream()` to store conversation context:
  - User input
  - AI output (final response)
  - Command executions (if any)
  - Session ID
- Create conversation context object that can be passed to feedback UI
- Store conversation context temporarily (in-memory or localStorage)

**Complexity:** Low-Medium (mostly adding data capture to existing flow)

**Dependencies:** None (can be done independently)

#### 5. Feedback Processing Pipeline (Story Points: 8)

**Description:** Create pipeline to process feedback and prepare it for model training.

**Impact:** Connects feedback to model improvement

**Technical Implementation:**
- Create `services/hitlPipeline.ts`:
  - `processFeedback()` - validate and format feedback
  - `prepareTrainingData()` - convert corrections to training format
  - `batchFeedback()` - group similar feedback for batch processing
- Create Supabase function/trigger to process feedback automatically
- Format training data according to model requirements (JSON format for fine-tuning)
- Queue processed data for model training (store in `hitl_training_data` table)

**Complexity:** High (requires understanding of model training data format, batch processing logic)

**Dependencies:** Database schema (#1), Feedback service (#3)

#### 6. Model Training Integration (Story Points: 13)

**Description:** Integrate feedback pipeline with AI model training/update system.

**Impact:** Completes the feedback loop - corrections improve the model

**Technical Implementation:**
- Extend `proxyClient.ts` or create new endpoint:
  - `submitTrainingData()` - send processed feedback to backend
  - `checkModelUpdateStatus()` - check if model has been updated
- Backend integration (Lambda function):
  - Receive training data batches
  - Trigger model fine-tuning/update process
  - Return update status
- Handle model versioning (track which feedback was used in which model version)
- Add model version tracking to feedback records

**Complexity:** Very High (requires backend changes, model training infrastructure, versioning)

**Dependencies:** Feedback pipeline (#5), Backend infrastructure

**Note:** This may require coordination with backend team and may be split into multiple stories.

#### 7. Basic Feedback Loop Testing (Story Points: 5)

**Description:** Create tests and validation for the complete HITL workflow.

**Impact:** Ensures HITL system works end-to-end

**Technical Implementation:**
- Unit tests for feedback service
- Integration tests for feedback collection → storage → processing
- Manual testing checklist for product testers
- Test data fixtures for development

**Complexity:** Medium

**Dependencies:** All above components

### Story Point Summary - Sprint 6

| Issue | Story Points | Complexity | Notes |
|-------|-------------|------------|-------|
| 1. Database Schema | 3 | Low-Medium | Similar to existing transcription_usage pattern |
| 2. Feedback UI Components | 5 | Medium | Extend existing message bubbles |
| 3. Feedback Service | 5 | Medium | Follow existing service patterns |
| 4. Intercept AI Outputs | 3 | Low-Medium | Add data capture to existing flow |
| 5. Feedback Pipeline | 8 | High | Requires training data format knowledge |
| 6. Model Training Integration | 13 | Very High | Backend coordination needed |
| 7. Testing | 5 | Medium | Standard testing approach |
| **TOTAL** | **42** | | |

**Risk Factors:**
- Model training integration (#6) is highest risk - may require backend team coordination
- Feedback pipeline (#5) complexity depends on model training data format requirements
- Consider splitting #6 into multiple smaller stories if backend work is complex

**Recommended Approach:**
1. **Start with #1, #2, #3, #4 in parallel** - These can be done independently and set up the foundation
2. **Then tackle #5** - Depends on #1 and #3 being complete
3. **Finally #6** - Highest risk item, may require backend team involvement - coordinate early
4. **#7 throughout development** - Testing should be continuous

**Implementation Strategy:**
- Use existing patterns as templates: `UsageTracker`/`UsageLogger` for feedback service pattern
- Reference `transcription_usage` table structure for database schema
- Extend existing message bubble components in `assistant.ui.js` for feedback UI
- Follow Supabase RLS policy patterns from existing tables

### Acceptance Criteria

- [ ] Database schema created with `hitl_feedback` and `hitl_training_data` tables
- [ ] UI components allow users to provide thumbs up/down, corrections, and flags on AI responses
- [ ] Feedback service collects and stores all user feedback to Supabase
- [ ] AI outputs are captured and associated with user inputs for feedback context
- [ ] Feedback pipeline processes corrections into training data format
- [ ] Model training integration sends processed feedback to backend for model updates
- [ ] Basic HITL workflow is tested and validated end-to-end
- [ ] Product testers can begin participating in the loop and providing inputs

---

## Sprint 7: HITL Framework - Phase 2: Enhancements

### Objective

Enhance the HITL framework with **reach goals and advanced features** beyond the basic MVP. This phase focuses on increasing engagement, consistency, and making the system more scalable and adaptable.

### Priority
**MEDIUM**

### Goal

Make HITL participation engaging and trackable, with advanced features that support scalability and complex use cases.

### Primary Files
- `browser/base/content/assistant/build/src/services/hitlAnalytics.ts` (NEW)
- `browser/base/content/assistant/build/src/services/hitlGamification.ts` (NEW)
- `browser/base/content/assistant/assistant.ui.js` (EXTEND - dashboard UI)
- `browser/base/content/assistant/build/src/services/hitlPipeline.ts` (EXTEND - advanced features)
- `browser/base/content/assistant/build/supabase_migration.sql` (EXTEND - analytics tables)

### Current Infrastructure Assessment

**✅ Existing Assets:**
- Usage tracking pattern (UsageTracker/UsageLogger) - can replicate for analytics
- Supabase infrastructure - can extend with analytics tables
- UI components - can build dashboard similar to usage stats display

**❌ Missing Components:**
- Analytics aggregation system
- Dashboard UI components
- Gamification engine
- Advanced feedback processing features
- Bias detection tools

### Issues Included

#### 1. Analytics Data Model and Aggregation (Story Points: 5)

**Description:** Create database schema and aggregation functions for HITL analytics.

**Impact:** Foundation for analytics dashboard

**Technical Implementation:**
- Create `hitl_analytics` table or view:
  - User participation metrics (daily, weekly, monthly)
  - Feedback counts by type (validation, correction, rejection)
  - Correction accuracy metrics
  - Training data contribution stats
- Create Supabase functions:
  - `get_user_hitl_stats(user_id, period)` - aggregate user stats
  - `get_weekly_training_frequency(user_id)` - weekly participation
  - `get_feedback_trends(user_id, days)` - feedback trends over time
- Add indexes for performance on time-based queries

**Complexity:** Medium (similar to existing transcription usage stats)

**Dependencies:** Sprint 6 database schema

#### 2. Analytics Dashboard UI (Story Points: 8)

**Description:** Build user-facing analytics dashboard showing HITL participation metrics.

**Impact:** Users can see their contribution and stay motivated

**Technical Implementation:**
- Create dashboard component in `assistant.ui.js`:
  - Weekly training frequency chart (bar/line chart)
  - Participation streak counter
  - Total contributions counter
  - Feedback breakdown (pie chart: corrections vs validations)
  - Progress indicators and goals
- Use existing usage stats display as reference
- Add dashboard access from menu/dropdown
- Make dashboard responsive and visually appealing
- Reference prototype design: https://oasis-roadmap.vercel.app/tuning-analytics

**Complexity:** Medium-High (UI work, charting library integration)

**Dependencies:** Analytics data model (#1)

**Note:** May need to choose a charting library (Chart.js, D3.js, or similar)

#### 3. Gamification Engine (Story Points: 8)

**Description:** Implement gamification features to make HITL participation engaging.

**Impact:** Increases user engagement and consistency

**Technical Implementation:**
- Create `services/hitlGamification.ts`:
  - Achievement system (badges for milestones)
  - Streak tracking (consecutive days of participation)
  - Points/XP system (points for each feedback submission)
  - Leaderboard (optional - may be Phase 3)
  - Level system (unlock levels based on participation)
- Create `hitl_achievements` table:
  - `user_id`, `achievement_type`, `unlocked_at`, `metadata`
- Add achievement notifications in UI
- Visual progress indicators (XP bars, level badges)

**Complexity:** Medium-High (game mechanics design, state management)

**Dependencies:** Analytics data model (#1)

#### 4. Advanced Feedback Processing (Story Points: 8)

**Description:** Enhance feedback pipeline with advanced features for complex tasks and bias detection.

**Impact:** Makes HITL system more robust and capable

**Technical Implementation:**
- Enhance `hitlPipeline.ts`:
  - **Bias detection**: Flag potentially biased corrections
  - **Confidence scoring**: Score feedback quality/confidence
  - **Conflict resolution**: Handle conflicting feedback from multiple users
  - **Contextual analysis**: Analyze feedback in context of conversation
- Create bias detection heuristics:
  - Check for demographic bias in corrections
  - Flag corrections that contradict majority feedback
  - Identify outlier corrections for review
- Add feedback quality metrics to training data

**Complexity:** High (requires ML/bias detection knowledge, complex logic)

**Dependencies:** Sprint 6 feedback pipeline

#### 5. Scalability Improvements (Story Points: 13)

**Description:** Optimize HITL system for handling more users, more data, and concurrent operations.

**Impact:** System can scale to production levels

**Technical Implementation:**
- Database optimizations:
  - Partition `hitl_feedback` table by date
  - Add composite indexes for common queries
  - Implement data archiving for old feedback
- Caching layer:
  - Cache user stats (Redis or Supabase caching)
  - Cache aggregated analytics
- Batch processing:
  - Process feedback in batches (not real-time)
  - Queue system for high-volume periods
- Rate limiting:
  - Prevent feedback spam
  - Limit feedback per user per day
- Performance monitoring:
  - Track query performance
  - Monitor feedback processing times

**Complexity:** Very High (requires database expertise, infrastructure changes)

**Dependencies:** All Sprint 6 components

#### 6. Advanced Model Training Integration (Story Points: 13)

**Description:** Enhance model training integration with advanced features like A/B testing, model versioning, and feedback prioritization.

**Impact:** More sophisticated model improvement process

**Technical Implementation:**
- Model versioning:
  - Track which model version received which feedback
  - Compare model performance across versions
- Feedback prioritization:
  - Weight high-quality feedback more heavily
  - Prioritize corrections from experienced users
  - Boost feedback that addresses common errors
- A/B testing framework:
  - Test model improvements before full rollout
  - Compare old vs new model performance
- Training data quality:
  - Filter low-quality feedback
  - Validate training data before submission
  - Handle edge cases and outliers

**Complexity:** Very High (requires ML expertise, backend coordination)

**Dependencies:** Sprint 6 model training integration (#6)

**Note:** This may require significant backend team involvement

#### 7. Dashboard and Gamification Testing (Story Points: 5)

**Description:** Test analytics dashboard, gamification features, and advanced functionality.

**Impact:** Ensures Phase 2 features work correctly

**Technical Implementation:**
- Unit tests for analytics aggregation
- Integration tests for gamification engine
- UI tests for dashboard components
- Performance tests for scalability improvements
- User acceptance testing for gamification features

**Complexity:** Medium

**Dependencies:** All above components

### Story Point Summary - Sprint 7

| Issue | Story Points | Complexity | Notes |
|-------|-------------|------------|-------|
| 1. Analytics Data Model | 5 | Medium | Similar to existing usage stats |
| 2. Analytics Dashboard UI | 8 | Medium-High | UI work + charting library |
| 3. Gamification Engine | 8 | Medium-High | Game mechanics design |
| 4. Advanced Feedback Processing | 8 | High | Bias detection, quality scoring |
| 5. Scalability Improvements | 13 | Very High | Database, caching, infrastructure |
| 6. Advanced Model Training | 13 | Very High | ML expertise, backend coordination |
| 7. Testing | 5 | Medium | Standard testing approach |
| **TOTAL** | **60** | | |

**Risk Factors:**
- Scalability (#5) and Advanced Model Training (#6) are highest risk
- May require backend team coordination and infrastructure changes
- Consider splitting into multiple sprints or deferring some features

**Recommended Approach:**
1. **Start with #1, #2, #3 (Analytics & Gamification)** - Can be done in parallel with each other
2. **Then tackle #4 (Advanced Processing)** - Depends on Sprint 6 feedback pipeline
3. **Finally #5 and #6 (Scalability & Advanced Training)** - Depends on Sprint 6 completion, may require team coordination
4. **#7 throughout development** - Testing should be continuous

**Sprint 7 Split Recommendation:**
Given Sprint 7 is significantly larger (60 points vs 42), consider splitting:
- **Sprint 7A: Analytics & Gamification** (Issues #1, #2, #3, #7) = 26 points
- **Sprint 7B: Scalability & Advanced Features** (Issues #4, #5, #6) = 34 points

**Prioritization Strategy:**
- Defer some advanced features to future sprints based on user feedback from Sprint 6
- Focus on engagement first (analytics/gamification), then scale
- Coordinate with backend team early for #5 and #6

### Acceptance Criteria

- [ ] Analytics data model tracks weekly training frequency and participation metrics
- [ ] User analytics dashboard displays charts, progress indicators, and participation stats
- [ ] Gamification engine tracks achievements, streaks, points, and levels
- [ ] Advanced feedback processing includes bias detection and quality scoring
- [ ] System handles scalability requirements (more users, more data, concurrent operations)
- [ ] Advanced model training integration includes versioning, prioritization, and A/B testing
- [ ] All Phase 2 features are tested and validated

---

## Technical Architecture Considerations

### Data Flow

```
User Input → AI Processing → AI Output
                ↓
         Human Review Interface
                ↓
    [Correct/Validate/Reject] → Correction Data
                ↓
         Feedback Pipeline
                ↓
         Model Training/Update
                ↓
         Improved AI Model
```

### Key Components Needed

1. **Review Interface**
   - Display AI outputs to testers
   - Allow corrections/validations
   - Capture user feedback

2. **Data Storage**
   - Store corrections
   - Track user participation
   - Maintain training data history

3. **Feedback Pipeline**
   - Process corrections
   - Format for model training
   - Schedule model updates

4. **Analytics System** (Phase 2)
   - Aggregate participation metrics
   - Calculate weekly statistics
   - Generate visualizations

5. **Gamification Engine** (Phase 2)
   - Track achievements
   - Calculate scores/streaks
   - Display progress indicators

### Integration Points

- **AI Assistant (`assistant.ts`)**: Where AI decisions are made - **EXTEND** to capture outputs
- **Command Execution (`commands.ts`)**: Where user commands are processed - **NO CHANGES** needed
- **UI Components (`assistant.ui.js`)**: Where users interact with the system - **EXTEND** with feedback UI
- **Proxy Client (`proxyClient.ts`)**: Where AI calls are made - **EXTEND** for training data submission
- **Supabase Services**: Existing auth and usage tracking - **EXTEND** with HITL services
- **Feedback Collection**: **NEW** service (`hitlFeedback.ts`) for gathering user input
- **Feedback Pipeline**: **NEW** service (`hitlPipeline.ts`) for processing corrections

---

## Codebase Analysis Summary

### Existing Infrastructure ✅

1. **Supabase Database:**
   - `users` table - user profiles
   - `sessions` table - user sessions
   - `transcription_usage` table - usage tracking pattern we can replicate
   - RLS policies already implemented
   - Supabase functions for aggregation (can replicate pattern)

2. **Services Pattern:**
   - `UsageTracker` - local usage tracking
   - `UsageLogger` - server-side usage logging
   - Pattern can be replicated for HITL feedback tracking

3. **UI Components:**
   - Message bubbles in `assistant.ui.js`
   - Usage stats display (can reference for dashboard)
   - Feedback button exists (currently links to external Tally form)

4. **Authentication:**
   - Fully integrated Supabase auth
   - User context available throughout app

5. **AI Assistant:**
   - LangGraph-based with supervisor pattern
   - Streaming responses
   - Command execution system

### Gaps Identified ❌

1. **Database Schema:**
   - No tables for storing feedback/corrections
   - No training data storage
   - No analytics aggregation tables

2. **Feedback Collection:**
   - No inline feedback UI (only external link)
   - No feedback service
   - No feedback processing pipeline

3. **Model Integration:**
   - No mechanism to send training data to backend
   - No model versioning system
   - No feedback-to-model pipeline

4. **Analytics:**
   - No HITL-specific analytics
   - No gamification system
   - No participation tracking

### Key Decisions Needed

1. **Model Training Format:**
   - What format does the backend expect for training data?
   - How frequently should model updates occur?
   - What's the process for model versioning?

2. **Feedback UI Design:**
   - Inline buttons vs separate panel?
   - How detailed should correction interface be?
   - Should we show feedback history to users?

3. **Backend Integration:**
   - New Lambda endpoint for training data?
   - Extend existing proxy client?
   - Real-time or batch processing?

4. **Prioritization:**
   - Which Sprint 7 features are most important?
   - Should we split Sprint 7 into multiple sprints?
   - What can be deferred to future phases?

---

## Resources

- **HITL Prototype Dashboard:** [https://oasis-roadmap.vercel.app/tuning-analytics](https://oasis-roadmap.vercel.app/tuning-analytics)
- **Codebase:** [firefox-oasis repository](https://github.com/Kahana-LLC/firefox-oasis)
- **Feedback Form:** [Tally Feedback Form](https://tally.so/r/3jkNN6)
- **Feedback Sheet:** [Google Sheets](https://docs.google.com/spreadsheets/d/1MvxrTrfmNV8j0zze2lsjVt-5R8YgkeTAWvV6dXH8B-w/edit?gid=0#gid=0)

---

## Next Steps

1. **Review this document** with the engineering team
2. **Assess current infrastructure** and identify gaps
3. **Estimate story points** for each sprint based on complexity
4. **Identify dependencies** between Phase 1 and Phase 2
5. **Plan implementation approach** and technical design
6. **Set up testing strategy** for HITL workflow validation

---

## Summary

### Sprint 6 (Phase 1: MVP) - **42 Story Points**
**Priority:** MEDIUM  
**Goal:** Get basic HITL workflow functional

**Key Deliverables:**
- Database schema for feedback storage
- UI components for feedback collection
- Feedback service and processing pipeline
- Integration with AI model training
- End-to-end testing

**Risk Areas:**
- Model training integration (#6) - may require backend team coordination
- Feedback pipeline complexity depends on model training data format

### Sprint 7 (Phase 2: Enhancements) - **60 Story Points**
**Priority:** MEDIUM  
**Goal:** Make HITL engaging, scalable, and production-ready

**Recommended Split:**
- **Sprint 7A: Analytics & Gamification** - 26 points (Issues #1, #2, #3, #7)
- **Sprint 7B: Scalability & Advanced** - 34 points (Issues #4, #5, #6)

**Key Deliverables:**
- Analytics dashboard with charts and metrics
- Gamification engine (achievements, streaks, points)
- Advanced feedback processing (bias detection, quality scoring)
- Scalability improvements (database optimization, caching)
- Advanced model training features (versioning, A/B testing)

**Risk Areas:**
- Scalability improvements (#5) - requires infrastructure expertise
- Advanced model training (#6) - requires ML expertise and backend coordination
- Consider splitting Sprint 7 into multiple sprints

### Total Effort Estimate

**Combined:** ~102 Story Points

**Recommended Approach:**
1. **Sprint 6:** Focus on MVP - get basic loop working (42 points)
2. **Sprint 7A:** Analytics and Gamification (26 points) - can be done in parallel with some Sprint 6 work
3. **Sprint 7B:** Scalability and Advanced Features (34 points) - depends on Sprint 6 completion

**Parallel Work Opportunities:**
- **Sprint 6:** Issues #1, #2, #3, #4 can be worked on in parallel (no dependencies between them)
- **Sprint 7A:** Can start once Sprint 6 issues #1-4 are complete (doesn't need full Sprint 6)
- **Sprint 7B:** Should wait for Sprint 6 completion (depends on feedback pipeline)

**Implementation Strategy:**
- **Leverage existing patterns:**
  - Use `UsageTracker`/`UsageLogger` as template for `hitlFeedback.ts` service structure
  - Replicate `transcription_usage` table pattern for `hitl_feedback` schema
  - Reference existing usage stats display in UI for dashboard design
  - Follow Supabase RLS policy patterns from existing tables
- **Early coordination:**
  - Engage backend team early for model training integration (#6)
  - Discuss training data format requirements before building pipeline (#5)
  - Align on model versioning strategy before implementation

### Notes

- Sprint 6 should be completed before Sprint 7 (Phase 2 depends on Phase 1)
- Focus on MVP in Phase 1 - avoid scope creep
- Phase 2 is about engagement and scalability - can be iterative
- Consider user experience in both phases - make it easy and engaging
- Track metrics from Phase 1 to inform Phase 2 design decisions
- **Model training integration (#6) is the highest risk item** - coordinate with backend team early
- **Use existing patterns as templates:**
  - `UsageTracker`/`UsageLogger` pattern for `hitlFeedback.ts` service
  - `transcription_usage` table structure for `hitl_feedback` table
  - Existing usage stats display for dashboard UI patterns
  - Supabase RLS policies from existing tables
- **Start Sprint 6 with parallel work:** Issues #1, #2, #3, #4 can be done simultaneously
- **Consider splitting Sprint 7:** 7A (Analytics/Gamification) and 7B (Scalability/Advanced) for better manageability
- **Coordinate early:** Backend team involvement needed for model training integration (#6) and scalability (#5)

