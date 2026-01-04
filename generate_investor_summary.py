"""
Generate Base-Case 2026 Financials Summary for Investor Business Plan

This script generates a concise financial summary table and investor explanation
suitable for pasting into a business plan document.

Usage:
    python generate_investor_summary.py
"""

from run_analysis import generate_base_case_investor_summary, print_base_case_investor_summary

if __name__ == "__main__":
    print_base_case_investor_summary()
    
    # Also export to Excel
    import pandas as pd
    from run_analysis import generate_base_case_investor_summary
    
    df, explanation = generate_base_case_investor_summary()
    
    output_file = "Base_Case_2026_Summary.xlsx"
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        df.to_excel(writer, sheet_name='Financial Summary', index=False)
        
        # Add explanation as a text cell in a separate sheet
        explanation_df = pd.DataFrame({
            'Investor Explanation': [explanation]
        })
        explanation_df.to_excel(writer, sheet_name='Explanation', index=False)
    
    print(f"\n✓ Exported to {output_file}")



