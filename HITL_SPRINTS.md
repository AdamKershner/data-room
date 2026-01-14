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

### Primary Files (TBD)
- `assistant.ts`
- Feedback collection system
- Training pipeline

### Issues Included

#### 1. HITL Framework MVP Implementation

**Description:** Design and implement the core HITL framework MVP that allows human review and intervention in AI decision-making processes. This is the minimal viable implementation needed for product testers to begin participating in the loop.

**Impact:** Enables product testers to start providing feedback and corrections, beginning the continuous improvement cycle

**Technical Notes:**
- Need to design basic workflow for the 5-step process above
- Focus on getting the core loop working, not on advanced features
- Must be simple enough for testers to use without extensive training
- Should handle basic AI tasks and corrections

**Key Questions for Estimation:**
- What is the current state of feedback collection in the system?
- How will we store and process human corrections?
- What interface will testers use to review and correct AI outputs?
- How will corrected data be fed back into the model?
- What is the integration point with the existing AI assistant?
- Do we need a new UI component or can we extend existing interfaces?
- What data format will we use for storing corrections?
- How will we handle versioning of corrections?

### Acceptance Criteria

- [ ] Basic HITL workflow is implemented (data input → machine processing → human review → intervention → feedback loop)
- [ ] Human review interface allows product testers to validate and correct AI outputs
- [ ] Basic feedback loop feeds corrected data back into the AI model
- [ ] System can track and learn from human interventions
- [ ] Product testers can begin participating in the loop and providing inputs
- [ ] HITL framework handles basic AI tasks and corrections

### Story Point Estimation Considerations

**Complexity Factors:**
- **Low Complexity:** If we already have feedback collection infrastructure
- **Medium Complexity:** If we need to build new interfaces and data pipelines
- **High Complexity:** If we need to design the entire feedback loop from scratch and integrate with model training

**Key Areas to Assess:**
1. **Interface Development:** How much UI work is needed for the review/correction interface?
2. **Data Pipeline:** Complexity of collecting, storing, and processing corrections
3. **Model Integration:** How difficult is it to feed corrections back into the AI model?
4. **Testing Infrastructure:** What's needed to test the HITL workflow?

---

## Sprint 7: HITL Framework - Phase 2: Enhancements

### Objective

Enhance the HITL framework with **reach goals and advanced features** beyond the basic MVP. This phase focuses on increasing engagement, consistency, and making the system more scalable and adaptable.

### Priority
**MEDIUM**

### Goal

Make HITL participation engaging and trackable, with advanced features that support scalability and complex use cases.

### Primary Files (TBD)
- Analytics dashboard
- Advanced training pipeline
- Gamification features

### Issues Included

#### 1. User Analytics Dashboard for HITL Training

**Description:** Build user analytics dashboard that tracks individual participation in HITL training/tuning activities. The dashboard helps users track the number of times they've trained within the HITL system over a week, promoting consistency and motivation.

**Impact:** Increases user engagement and consistency in HITL participation, leading to better system accuracy

**Prototype Reference:** [User Analytics Dashboard](https://oasis-roadmap.vercel.app/tuning-analytics)

**Key Features:**
- Track weekly training frequency per user
- Visual feedback on participation (charts, progress indicators)
- Gamification elements to motivate consistent participation
- Make participation feel like a game/experiment rather than routine feedback

**Technical Notes:**
- See prototype for UI/UX reference
- Dashboard should track weekly training frequency
- Provide visual feedback on participation
- Gamify the HITL experience

**Key Questions for Estimation:**
- Do we have user analytics infrastructure already?
- What metrics do we need to track?
- How will we visualize the data?
- What gamification elements are most effective?
- How do we calculate and store weekly metrics?
- Do we need real-time updates or batch processing?
- What's the data retention policy for analytics?

#### 2. Advanced HITL Features and Scalability

**Description:** Enhance the HITL framework with advanced features beyond the MVP, including improved scalability, handling of complex tasks, bias mitigation, and adaptability to changing conditions.

**Impact:** Makes HITL framework production-ready and capable of handling diverse AI tasks at scale

**Technical Notes:**
Focus on:
1. **Scalability improvements** - Handle more users, more corrections, more data
2. **Handling complex/subjective tasks** - Support tasks requiring judgment
3. **Bias identification and correction** - Tools to detect and mitigate bias
4. **Adaptability to new data and conditions** - System learns from new patterns
5. **Advanced feedback loop optimizations** - More sophisticated learning algorithms

**Key Questions for Estimation:**
- What scalability bottlenecks exist in Phase 1?
- How do we handle concurrent corrections from multiple users?
- What infrastructure is needed for bias detection?
- How complex is the advanced feedback loop optimization?
- Do we need new ML infrastructure for advanced features?
- What's the performance impact of these enhancements?

### Acceptance Criteria

- [ ] User analytics dashboard tracks individual HITL training frequency (weekly metrics)
- [ ] Analytics dashboard provides gamification elements to motivate consistent participation
- [ ] Dashboard makes HITL participation feel engaging and experimental rather than routine
- [ ] HITL framework is scalable and can handle various types of AI tasks
- [ ] Advanced features support handling complex tasks requiring subjective judgment
- [ ] System can identify and help correct biases in the data or model
- [ ] Framework adapts to changing conditions and new data more effectively

### Story Point Estimation Considerations

**Complexity Factors:**
- **Analytics Dashboard:** Medium-High complexity (new UI, data aggregation, visualization)
- **Gamification:** Medium complexity (depends on how sophisticated the gamification needs to be)
- **Scalability:** High complexity (may require infrastructure changes)
- **Advanced Features:** High complexity (bias detection, advanced ML optimizations)

**Key Areas to Assess:**
1. **Dashboard Development:** Full dashboard with charts, metrics, gamification UI
2. **Data Aggregation:** Real-time or batch processing of user participation data
3. **Scalability Infrastructure:** Database optimization, caching, load balancing
4. **Advanced ML Features:** Bias detection algorithms, advanced feedback loop optimizations

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

- **AI Assistant (`assistant.ts`)**: Where AI decisions are made
- **Command Execution (`commands.ts`)**: Where user commands are processed
- **UI Components (`assistant.ui.js`)**: Where users interact with the system
- **Feedback Collection**: New or existing system for gathering user input

---

## Questions for Engineering Team

### Sprint 6 (Phase 1) Assessment

1. **Current State:**
   - Do we have any existing feedback collection mechanisms?
   - Is there infrastructure for storing user corrections?
   - How does the current AI model handle updates/retraining?

2. **Interface Design:**
   - Can we extend existing UI components or do we need new ones?
   - What's the simplest interface that would work for testers?
   - How do we surface AI outputs for review?

3. **Data Pipeline:**
   - What's the best way to store corrections?
   - How do we format corrections for model training?
   - What's the update frequency for the model?

4. **Integration:**
   - Where in the codebase should HITL hooks be placed?
   - How do we intercept AI outputs for review?
   - What's the impact on existing AI assistant functionality?

### Sprint 7 (Phase 2) Assessment

1. **Analytics Dashboard:**
   - Do we have existing analytics infrastructure?
   - What's the data model for tracking participation?
   - What visualization libraries should we use?

2. **Gamification:**
   - What gamification elements are most effective?
   - How do we calculate and store user achievements?
   - What's the balance between fun and useful?

3. **Scalability:**
   - What are the current bottlenecks in Phase 1?
   - What infrastructure changes are needed?
   - How do we handle concurrent users?

4. **Advanced Features:**
   - What bias detection methods are feasible?
   - How complex is advanced feedback loop optimization?
   - What ML infrastructure is needed?

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

## Notes

- Sprint 6 should be completed before Sprint 7 (Phase 2 depends on Phase 1)
- Focus on MVP in Phase 1 - avoid scope creep
- Phase 2 is about engagement and scalability - can be iterative
- Consider user experience in both phases - make it easy and engaging
- Track metrics from Phase 1 to inform Phase 2 design decisions

