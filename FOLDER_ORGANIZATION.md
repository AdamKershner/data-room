# Data Room Folder Organization

Feedback sheets, markdown files, Python scripts, and Excel files have been organized into the following folders:

## Folders

| Folder | Contents |
|--------|----------|
| **feedback/** | Oasis Feedback Phase 2 - Sheet1(1-5).csv |
| **time-logs/** | Time Log - Sheet1(2-8).csv, time-log-reminder-message.md |
| **onboarding/** | Onboarding - Sheet1.csv, Onboarding - Sheet1(1).csv |
| **product-hunt/** | Product Hunt Accounts - Sep'25.csv |
| **product-testers/** | Product Tester Email List - Tester Emails.csv |
| **user-data/** | user_plans_rows(4).csv, users_rows.csv |
| **data/** | browserComparisonData.csv |
| **spreadsheets/** | Base_Case_2026_Summary.xlsx, Funding_Analysis.xlsx, Sensitivity_Analysis.xlsx, Tripwires_Analysis.xlsx, oasis_2026_analysis.xlsx (output) |
| **scripts/** | Python analysis scripts (oasis_model.py, run_analysis.py, sensitivity.py, scenarios.py, generate_investor_summary.py, check_dependencies.py) |
| **docs/** | CULTURE_AMP_ESTIMATE.md, FUNDING_SUMMARY.md, MEETING_PREP_ANSWERS.md, SAMPLE_OUTPUT.md, SENSITIVITY_SUMMARY.md, TRIPWIRES_SUMMARY.md, Just a little paperwork - Sheet1.csv |
| **sprints/** | Sprint summaries, proposals, HITL sprints (JANUARY_2026_SUMMARY, NEW_SPRINTS_SUMMARY*, SPRINT_*, HITL_SPRINTS*) |
| **team/** | Team_Member_Contributions.md |
| **testing/** | Test Results and Observations.md |
| **drafts/** | In-progress tasks and draft content (email edits, case study rewrites, etc.) |

## Running Python scripts

From the project root:
```bash
python scripts/check_dependencies.py      # Verify dependencies
python scripts/generate_investor_summary.py  # Generate Base_Case_2026_Summary.xlsx
python scripts/run_analysis.py              # Full analysis (outputs to spreadsheets/)
```
