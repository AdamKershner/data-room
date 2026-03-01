"""
Generate Base-Case 2026 Financials Summary for Investor Business Plan

This script generates a concise financial summary table and investor explanation
suitable for pasting into a business plan document.

Usage (from project root):
    python scripts/generate_investor_summary.py
"""

import sys
from pathlib import Path

# Ensure scripts dir is on path when run from project root
_script_dir = Path(__file__).resolve().parent
if str(_script_dir) not in sys.path:
    sys.path.insert(0, str(_script_dir))

_OUTPUT_DIR = _script_dir.parent / "spreadsheets"

from run_analysis import generate_base_case_investor_summary, print_base_case_investor_summary

if __name__ == "__main__":
    print_base_case_investor_summary()
    
    # Also export to Excel
    import pandas as pd
    from run_analysis import generate_base_case_investor_summary
    
    df, explanation = generate_base_case_investor_summary()
    
    _OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_file = str(_OUTPUT_DIR / "Base_Case_2026_Summary.xlsx")
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        df.to_excel(writer, sheet_name='Financial Summary', index=False)
        
        # Add explanation as a text cell in a separate sheet
        explanation_df = pd.DataFrame({
            'Investor Explanation': [explanation]
        })
        explanation_df.to_excel(writer, sheet_name='Explanation', index=False)
    
    print(f"\n✓ Exported to {output_file}")



