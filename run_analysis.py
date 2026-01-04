"""
Main Runner for Oasis Browser 2026 Sensitivity Analysis

This script demonstrates how to use the model for various analyses:
- Base case projections
- One-way sensitivity analysis
- Two-way sensitivity tables
- Scenario comparisons
- Tripwire/red-line analysis

Usage:
    python run_analysis.py                    # Run all analyses
    python run_analysis.py --scenario base     # Run only base scenario
    python run_analysis.py --scenario conservative  # Run only conservative
    python run_analysis.py --no-export        # Skip Excel export
    python run_analysis.py --scenario aggressive --no-export  # Combined options
"""

import argparse
import pandas as pd
from typing import Tuple
from oasis_model import OasisModel, ModelAssumptions
from sensitivity import (
    sensitivity_subscribers_vs_plan,
    sensitivity_churn_rates,
    sensitivity_usage_intensity,
    sensitivity_price_per_month,
    sensitivity_b2b_pilots,
    sensitivity_developer_hourly_cost,
    sensitivity_subscribers_vs_usage,
    sensitivity_b2b_pilots_vs_dev_cost,
    sensitivity_starting_subscribers,
    sensitivity_monthly_new_subscribers,
    sensitivity_monthly_churn_rate,
    sensitivity_average_usage_intensity,
    sensitivity_subscription_price,
    sensitivity_number_of_pilots,
    sensitivity_developer_hourly_cost_detailed,
    sensitivity_included_hours_per_pilot,
    sensitivity_subscribers_vs_usage_gross_margin,
    sensitivity_pilots_vs_dev_cost_b2b_margin,
    sensitivity_pilots_vs_dev_cost_total_profit
)
from scenarios import (
    create_base_scenario,
    create_conservative_scenario,
    create_aggressive_scenario,
    compare_scenarios,
    create_scenario_summary_table,
    analyze_tripwires
)


def print_section(title: str):
    """Print a formatted section header."""
    print("\n" + "=" * 80)
    print(f"  {title}")
    print("=" * 80 + "\n")


def format_currency(value: float) -> str:
    """Format a number as currency."""
    return f"${value:,.2f}"


def format_percent(value: float) -> str:
    """Format a number as percentage."""
    return f"{value:.1f}%"


def run_base_case_analysis():
    """Run and display base case model results."""
    print_section("BASE CASE 2026 PROJECTIONS")
    
    assumptions = create_base_scenario()
    model = OasisModel(assumptions)
    results = model.run_full_model()
    
    summary = results['summary']
    
    print("ANNUAL SUMMARY:")
    print(f"  Total Revenue:        {format_currency(summary['total_revenue'])}")
    print(f"    - B2C Revenue:      {format_currency(summary['total_b2c_revenue'])}")
    print(f"    - B2B Revenue:      {format_currency(summary['total_b2b_revenue'])}")
    print()
    print(f"  Total Gross Profit:   {format_currency(summary['total_gross_profit'])}")
    print(f"    - B2C Gross Profit: {format_currency(summary['total_b2c_gross_profit'])}")
    print(f"    - B2B Gross Profit: {format_currency(summary['total_b2b_gross_profit'])}")
    print()
    print(f"  Gross Margins:")
    print(f"    - Total:            {format_percent(summary['total_gross_margin_pct'])}")
    print(f"    - B2C:              {format_percent(summary['total_b2c_gross_margin_pct'])}")
    print(f"    - B2B:              {format_percent(summary['total_b2b_gross_margin_pct'])}")
    print()
    print(f"  Operating Expenses:   {format_currency(summary['total_opex'])}")
    print(f"  Net Cash Flow:        {format_currency(summary['net_cash_flow_annual'])}")
    print(f"  Ending Cash Balance:  {format_currency(summary['ending_cash_balance'])}")
    print(f"  Runway (Months):      {summary['runway_months']:.1f}" if summary['runway_months'] != float('inf') else "  Runway (Months):      ∞")
    print(f"  Ending Subscribers:   {int(summary['ending_subscribers'])}")
    
    print("\n\nMONTHLY B2C REVENUE & MARGINS:")
    b2c_monthly = results['b2c_monthly'][['month_name', 'subscribers', 'revenue_net', 
                                          'gross_profit', 'gross_margin_pct']]
    print(b2c_monthly.to_string(index=False))
    
    print("\n\nMONTHLY CASH FLOW:")
    cash_flow = results['cash_flow'][['month_name', 'total_revenue', 'total_costs', 
                                     'net_cash_flow', 'cumulative_cash']]
    print(cash_flow.to_string(index=False))


def run_one_way_sensitivity_analyses():
    """Run all one-way sensitivity analyses."""
    print_section("ONE-WAY SENSITIVITY ANALYSES")
    
    base_assumptions = create_base_scenario()
    
    print("\n1. SUBSCRIBERS vs PLAN (±25%, ±50%):")
    print("   Impact on Total Annual Revenue")
    df = sensitivity_subscribers_vs_plan(base_assumptions)
    print(df.to_string(index=False))
    
    print("\n\n2. MONTHLY CHURN RATES (3%, 7%, 15%):")
    print("   Impact on Ending Subscribers (Dec 2026)")
    df = sensitivity_churn_rates(base_assumptions)
    print(df.to_string(index=False))
    
    print("\n\n3. USAGE INTENSITY (50%, 100%, 150% of allowance):")
    print("   Impact on B2C Gross Margin %")
    df = sensitivity_usage_intensity(base_assumptions)
    print(df.to_string(index=False))
    
    print("\n\n4. PRICE PER MONTH ($15, $20, $25):")
    print("   Impact on B2C Gross Profit")
    df = sensitivity_price_per_month(base_assumptions)
    print(df.to_string(index=False))
    
    print("\n\n5. NUMBER OF B2B PILOTS (0, 2, 5, 10):")
    print("   Impact on B2B Gross Profit")
    df = sensitivity_b2b_pilots(base_assumptions)
    print(df.to_string(index=False))
    
    print("\n\n6. DEVELOPER HOURLY COST ($40, $60, $80):")
    print("   Impact on B2B Gross Margin %")
    df = sensitivity_developer_hourly_cost(base_assumptions)
    print(df.to_string(index=False))


def run_two_way_sensitivity_analyses():
    """Run two-way sensitivity analyses."""
    print_section("TWO-WAY SENSITIVITY ANALYSES")
    
    base_assumptions = create_base_scenario()
    
    print("\n1. SUBSCRIBERS (rows) vs USAGE INTENSITY (columns):")
    print("   Output: B2C Gross Margin %")
    df = sensitivity_subscribers_vs_usage(base_assumptions)
    print(df.to_string())
    
    print("\n\n2. B2B PILOTS (rows) vs DEVELOPER COST (columns):")
    print("   Output: B2B Gross Margin %")
    df = sensitivity_b2b_pilots_vs_dev_cost(base_assumptions)
    print(df.to_string())


def run_scenario_comparison(scenario_name: str = None):
    """
    Compare Conservative, Base, and Aggressive scenarios.
    
    Args:
        scenario_name: If provided, run only this scenario ('conservative', 'base', 'aggressive')
    """
    if scenario_name:
        scenario_name = scenario_name.lower()
        scenario_map = {
            'conservative': ['Conservative'],
            'base': ['Base'],
            'aggressive': ['Aggressive']
        }
        if scenario_name not in scenario_map:
            print(f"Unknown scenario: {scenario_name}. Using all scenarios.")
            scenario_names = None
        else:
            scenario_names = scenario_map[scenario_name]
            print_section(f"{scenario_name.upper()} SCENARIO ANALYSIS")
    else:
        scenario_names = None
        print_section("SCENARIO COMPARISON (Conservative vs Base vs Aggressive)")
    
    scenario_results = compare_scenarios(scenario_names)
    summary_table = create_scenario_summary_table(scenario_results)
    
    print("\nSCENARIO SUMMARY TABLE:")
    print(summary_table.to_string(index=False))
    
    # Tripwire analysis
    print_section("TRIPWIRE & RED-LINE ANALYSIS")
    tripwire_table = analyze_tripwires(scenario_results)
    print(tripwire_table.to_string(index=False))
    
    # Also show detailed breakdown for each scenario
    print("\n\nDETAILED SCENARIO BREAKDOWNS:")
    for name, data in scenario_results.items():
        print(f"\n--- {name.upper()} SCENARIO ---")
        summary = data['results']['summary']
        print(f"  Total Revenue:        {format_currency(summary['total_revenue'])}")
        print(f"  Total Gross Margin:   {format_percent(summary['total_gross_margin_pct'])}")
        print(f"  Net Cash Flow:        {format_currency(summary['net_cash_flow_annual'])}")
        print(f"  Ending Cash:          {format_currency(summary['ending_cash_balance'])}")
        runway = summary['runway_months'] if summary['runway_months'] != float('inf') else '∞'
        print(f"  Runway:               {runway} months")
    
    return scenario_results, summary_table, tripwire_table


def generate_base_case_investor_summary() -> Tuple[pd.DataFrame, str]:
    """
    Generate base-case 2026 financials summary for investor business plan.
    
    Returns:
        Tuple of (DataFrame with metrics, investor explanation text)
    """
    from scenarios import create_base_scenario
    
    assumptions = create_base_scenario()
    model = OasisModel(assumptions)
    results = model.run_full_model()
    
    summary = results['summary']
    cash_flow = results['cash_flow']
    
    # Calculate additional metrics
    min_monthly_cash = cash_flow['cumulative_cash'].min()
    min_cash_month = cash_flow.loc[cash_flow['cumulative_cash'].idxmin(), 'month_name']
    starting_cash = assumptions.operating.starting_cash_balance
    avg_monthly_burn = summary['avg_monthly_burn']
    runway_at_start = (starting_cash / avg_monthly_burn) if avg_monthly_burn > 0 else float('inf')
    
    # Calculate ARR (Annual Recurring Revenue) - approximate as Dec MRR * 12
    dec_mrr = cash_flow[cash_flow['month'] == 12]['b2c_revenue'].iloc[0]
    arr = dec_mrr * 12
    
    # Build summary table
    metrics_data = [
        {
            'Metric': 'Total 2026 Revenue',
            '2026 Value': f"${summary['total_revenue']:,.0f}",
            'Notes / Key Assumption': f"B2C: ${summary['total_b2c_revenue']:,.0f} | B2B: ${summary['total_b2b_revenue']:,.0f}"
        },
        {
            'Metric': 'B2C Revenue',
            '2026 Value': f"${summary['total_b2c_revenue']:,.0f}",
            'Notes / Key Assumption': f"Ending {int(summary['ending_subscribers'])} subscribers | $20/month subscription"
        },
        {
            'Metric': 'B2B Revenue',
            '2026 Value': f"${summary['total_b2b_revenue']:,.0f}",
            'Notes / Key Assumption': f"{assumptions.b2b.num_pilots} pilot contracts @ ${assumptions.b2b.avg_annual_contract_value:,.0f}/year avg"
        },
        {
            'Metric': 'Average Gross Margin %',
            '2026 Value': f"{summary['total_gross_margin_pct']:.1f}%",
            'Notes / Key Assumption': f"B2C: {summary['total_b2c_gross_margin_pct']:.1f}% | B2B: {summary['total_b2b_gross_margin_pct']:.1f}%"
        },
        {
            'Metric': 'Total Operating Expenses',
            '2026 Value': f"${summary['total_opex']:,.0f}",
            'Notes / Key Assumption': f"Headcount + fixed overhead | {assumptions.operating.headcount.get('developers', 0)} dev, {assumptions.operating.headcount.get('support', 0)} support"
        },
        {
            'Metric': 'Average Monthly Burn',
            '2026 Value': f"${abs(avg_monthly_burn):,.0f}" if avg_monthly_burn < 0 else f"${avg_monthly_burn:,.0f} (positive)",
            'Notes / Key Assumption': f"Net cash flow: ${summary['net_cash_flow_annual']:,.0f} for 2026"
        },
        {
            'Metric': 'Year-End Cash Balance',
            '2026 Value': f"${summary['ending_cash_balance']:,.0f}",
            'Notes / Key Assumption': f"Starting: ${starting_cash:,.0f} | Net change: ${summary['net_cash_flow_annual']:,.0f}"
        },
        {
            'Metric': 'Minimum Monthly Cash Balance',
            '2026 Value': f"${min_monthly_cash:,.0f}",
            'Notes / Key Assumption': f"Occurred in {min_cash_month} 2026"
        },
        {
            'Metric': 'Runway Months (at Jan 2026 start)',
            '2026 Value': f"{runway_at_start:.1f}" if runway_at_start != float('inf') else "∞",
            'Notes / Key Assumption': f"Based on starting cash ${starting_cash:,.0f} and avg monthly burn ${abs(avg_monthly_burn):,.0f}"
        },
    ]
    
    df = pd.DataFrame(metrics_data)
    
    # Generate investor explanation (concise, <150 words)
    arr_formatted = f"${arr:,.0f}"
    runway_formatted = f"{runway_at_start:.1f} months" if runway_at_start != float('inf') else "infinite"
    
    explanation = f"""In the base case scenario, Oasis Browser reaches approximately {arr_formatted} in Annual Recurring Revenue (ARR) by year-end 2026, driven by {int(summary['ending_subscribers'])} B2C subscribers and {assumptions.b2b.num_pilots} B2B pilot contracts. The business maintains strong unit economics with an average gross margin of {summary['total_gross_margin_pct']:.1f}%, reflecting the high-margin subscription model and efficient B2B delivery.

With a starting cash balance of ${starting_cash:,.0f} and average monthly burn of ${abs(avg_monthly_burn):,.0f}, the company has approximately {runway_formatted} of runway at the beginning of 2026. The model projects a year-end cash balance of ${summary['ending_cash_balance']:,.0f}, with the minimum cash balance of ${min_monthly_cash:,.0f} occurring in {min_cash_month} 2026. This provides a solid foundation for continued growth while maintaining sufficient cash reserves for operational flexibility."""
    
    return df, explanation


def print_base_case_investor_summary():
    """Print base-case financials summary for investors."""
    print_section("BASE-CASE 2026 FINANCIALS (FOR INVESTOR BUSINESS PLAN)")
    
    df, explanation = generate_base_case_investor_summary()
    
    print("\nFINANCIAL SUMMARY TABLE:")
    print("=" * 100)
    print(df.to_string(index=False))
    print("=" * 100)
    
    print("\n\nINVESTOR EXPLANATION:")
    print("-" * 100)
    print(explanation)
    print("-" * 100)
    
    return df, explanation


def export_to_excel(
    output_file: str = "oasis_2026_analysis.xlsx",
    scenario_results: dict = None,
    summary_table: pd.DataFrame = None,
    tripwire_table: pd.DataFrame = None
):
    """
    Export all analyses to an Excel file.
    
    Args:
        output_file: Output Excel filename
        scenario_results: Optional pre-computed scenario results
        summary_table: Optional pre-computed summary table
        tripwire_table: Optional pre-computed tripwire table
    """
    print_section(f"EXPORTING TO EXCEL: {output_file}")
    
    base_assumptions = create_base_scenario()
    model = OasisModel(base_assumptions)
    base_results = model.run_full_model()
    
    if scenario_results is None:
        scenario_results = compare_scenarios()
    if summary_table is None:
        summary_table = create_scenario_summary_table(scenario_results)
    if tripwire_table is None:
        tripwire_table = analyze_tripwires(scenario_results)
    
    # Generate base case investor summary
    investor_summary_df, investor_explanation = generate_base_case_investor_summary()
    
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        # Base case investor summary (for business plan)
        investor_summary_df.to_excel(writer, sheet_name='Base_Case_2026_Summary', index=False)
        
        # Base case monthly data
        base_results['b2c_monthly'].to_excel(writer, sheet_name='B2C Monthly', index=False)
        base_results['cash_flow'].to_excel(writer, sheet_name='Cash Flow Monthly', index=False)
        
        # Scenario comparison (dedicated sheet)
        summary_table.to_excel(writer, sheet_name='Scenario_Summary', index=False)
        
        # Tripwire analysis
        tripwire_table.to_excel(writer, sheet_name='Tripwires', index=False)
        
        # One-way sensitivities
        sensitivity_starting_subscribers(base_assumptions).to_excel(
            writer, sheet_name='Sens_StartSubs', index=False)
        sensitivity_monthly_new_subscribers(base_assumptions).to_excel(
            writer, sheet_name='Sens_NewSubs', index=False)
        sensitivity_monthly_churn_rate(base_assumptions).to_excel(
            writer, sheet_name='Sens_Churn', index=False)
        sensitivity_average_usage_intensity(base_assumptions).to_excel(
            writer, sheet_name='Sens_Usage', index=False)
        sensitivity_subscription_price(base_assumptions).to_excel(
            writer, sheet_name='Sens_Price', index=False)
        sensitivity_number_of_pilots(base_assumptions).to_excel(
            writer, sheet_name='Sens_B2B_Pilots', index=False)
        sensitivity_developer_hourly_cost_detailed(base_assumptions).to_excel(
            writer, sheet_name='Sens_DevCost', index=False)
        sensitivity_included_hours_per_pilot(base_assumptions).to_excel(
            writer, sheet_name='Sens_B2B_Hours', index=False)
        
        # Two-way sensitivities
        sensitivity_subscribers_vs_usage_gross_margin(base_assumptions).to_excel(
            writer, sheet_name='Sens_Subs_vs_Usage')
        sensitivity_pilots_vs_dev_cost_b2b_margin(base_assumptions).to_excel(
            writer, sheet_name='Sens_Pilots_vs_DevCost_Margin')
        sensitivity_pilots_vs_dev_cost_total_profit(base_assumptions).to_excel(
            writer, sheet_name='Sens_Pilots_vs_DevCost_Profit')
    
    print(f"✓ Exported to {output_file}")


def main():
    """Run analyses based on command-line arguments."""
    parser = argparse.ArgumentParser(
        description='Oasis Browser 2026 Sensitivity Analysis',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python run_analysis.py                    # Run all analyses
  python run_analysis.py --scenario base    # Run only base scenario
  python run_analysis.py --scenario conservative  # Run only conservative
  python run_analysis.py --no-export        # Skip Excel export
  python run_analysis.py --scenario aggressive --no-export  # Combined options
        """
    )
    parser.add_argument(
        '--scenario',
        choices=['conservative', 'base', 'aggressive'],
        help='Run analysis for a specific scenario only (default: all scenarios)'
    )
    parser.add_argument(
        '--no-export',
        action='store_true',
        help='Skip Excel export'
    )
    parser.add_argument(
        '--output',
        default='oasis_2026_analysis.xlsx',
        help='Output Excel filename (default: oasis_2026_analysis.xlsx)'
    )
    
    args = parser.parse_args()
    
    print("\n" + "=" * 80)
    print("  OASIS BROWSER 2026 SENSITIVITY ANALYSIS")
    print("=" * 80)
    
    # Run base case (always run)
    run_base_case_analysis()
    
    # Print base case investor summary
    print_base_case_investor_summary()
    
    # Run one-way sensitivities (always run)
    run_one_way_sensitivity_analyses()
    
    # Run two-way sensitivities (always run)
    run_two_way_sensitivity_analyses()
    
    # Compare scenarios (may be filtered by --scenario)
    scenario_results, summary_table, tripwire_table = run_scenario_comparison(args.scenario)
    
    # Export to Excel (unless --no-export)
    if not args.no_export:
        try:
            export_to_excel(
                args.output,
                scenario_results=scenario_results,
                summary_table=summary_table,
                tripwire_table=tripwire_table
            )
        except ImportError:
            print("\n\nNote: Excel export requires 'openpyxl'. Install with: pip install openpyxl")
        except Exception as e:
            print(f"\n\nError exporting to Excel: {e}")
    else:
        print("\n\nExcel export skipped (--no-export flag)")
    
    print("\n" + "=" * 80)
    print("  ANALYSIS COMPLETE")
    print("=" * 80 + "\n")


if __name__ == "__main__":
    main()

