# Base-Case 2026 Financials Summary - Sample Output

## Financial Summary Table

When you run `python generate_investor_summary.py` or `python run_analysis.py`, you'll see:

```
====================================================================================================
  BASE-CASE 2026 FINANCIALS (FOR INVESTOR BUSINESS PLAN)
====================================================================================================

FINANCIAL SUMMARY TABLE:
====================================================================================================
Metric                              | 2026 Value                    | Notes / Key Assumption
----------------------------------------------------------------------------------------------------
Total 2026 Revenue                  | $XXX,XXX                      | B2C: $XXX,XXX | B2B: $XXX,XXX
B2C Revenue                         | $XXX,XXX                      | Ending XXX subscribers | $20/month subscription
B2B Revenue                         | $XXX,XXX                      | 5 pilot contracts @ $50,000/year avg
Average Gross Margin %              | XX.X%                         | B2C: XX.X% | B2B: XX.X%
Total Operating Expenses            | $XXX,XXX                      | Headcount + fixed overhead | 1 dev, 0.5 support
Average Monthly Burn                | $XX,XXX                       | Net cash flow: $XXX,XXX for 2026
Year-End Cash Balance               | $XXX,XXX                      | Starting: $500,000 | Net change: $XXX,XXX
Minimum Monthly Cash Balance        | $XXX,XXX                      | Occurred in XXX 2026
Runway Months (at Jan 2026 start)   | XX.X                          | Based on starting cash $500,000 and avg monthly burn $XX,XXX
====================================================================================================


INVESTOR EXPLANATION:
----------------------------------------------------------------------------------------------------
In the base case scenario, Oasis Browser reaches approximately $XXX,XXX in Annual Recurring Revenue (ARR) 
by year-end 2026, driven by XXX B2C subscribers and 5 B2B pilot contracts. The business maintains strong 
unit economics with an average gross margin of XX.X%, reflecting the high-margin subscription model and 
efficient B2B delivery.

With a starting cash balance of $500,000 and average monthly burn of $XX,XXX, the company has approximately 
XX.X months of runway at the beginning of 2026. The model projects a year-end cash balance of $XXX,XXX, 
with the minimum cash balance of $XXX,XXX occurring in XXX 2026. This provides a solid foundation for 
continued growth while maintaining sufficient cash reserves for operational flexibility.
----------------------------------------------------------------------------------------------------
```

## To Run:

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Generate investor summary:**
   ```bash
   python generate_investor_summary.py
   ```
   
   OR run the full analysis (which includes the investor summary):
   ```bash
   python run_analysis.py
   ```

3. **Output files:**
   - Console output with formatted table and explanation
   - `Base_Case_2026_Summary.xlsx` (if using standalone script)
   - OR `oasis_2026_analysis.xlsx` with "Base_Case_2026_Summary" sheet (if using full analysis)

## Excel Export

The Excel file will contain a sheet named "Base_Case_2026_Summary" with:
- Column 1: Metric
- Column 2: 2026 Value  
- Column 3: Notes / Key Assumption

Plus a separate "Explanation" sheet with the investor explanation text.



