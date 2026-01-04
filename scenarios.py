"""
Scenario Definitions for Oasis Browser 2026 Sensitivity Analysis

This module defines pre-configured scenarios (Conservative, Base, Aggressive)
for easy comparison and analysis.
"""

import pandas as pd
from oasis_model import ModelAssumptions, B2CAssumptions, B2BAssumptions, OperatingAssumptions


def create_current_state_scenario() -> ModelAssumptions:
    """
    Current State (January 2, 2026):
    - Actual starting point: $1,174 cash, 1 paying customer (will be 3 soon)
    - Webapp generating $180 MRR (average over last 3 months)
    - Monthly costs: G-Suite $26, Google Cloud $25, GitHub $12, Heroku $25 = $88/month
    - Pre-funding baseline for runway analysis
    - Minimal overhead (founders only, no salaries)
    """
    return ModelAssumptions(
        b2c=B2CAssumptions(
            starting_subscribers=3,  # Will have 3 customers in next week
            new_subscribers_per_month=10,  # Conservative early growth
            monthly_churn_rate=0.10,  # Higher churn expected early on
            price_per_month=20.0,
            avg_usage_pct_of_allowance=0.8,  # Early users may use less
            cost_per_text_prompt=0.002,
            cost_per_voice_minute=0.016,
            aws_fixed_monthly=15.0,
        ),
        b2b=B2BAssumptions(
            num_pilots=0,  # No B2B pilots yet
            pilot_start_months=[],
            avg_annual_contract_value=50000.0,
            developer_hourly_cost=40.0,
            avg_actual_hours_per_pilot_per_year=250.0,
        ),
        operating=OperatingAssumptions(
            headcount={
                'founders': 2,
                'developers': 0,  # Founders doing development
                'support': 0,
                'sales': 0
            },
            monthly_salary_per_role={
                'founders': 0,  # No salaries yet
                'developers': 0,
                'support': 0,
                'sales': 0
            },
            fixed_overhead_monthly=88.0,  # Webapp costs: G-Suite $26 + Google Cloud $25 + GitHub $12 + Heroku $25
            starting_cash_balance=1174.0,  # Actual current cash
            other_revenue_monthly=180.0,  # Webapp MRR (average over last 3 months)
        )
    )


def create_conservative_scenario() -> ModelAssumptions:
    """
    Conservative 2026 Scenario:
    - Lower subscriber growth
    - Higher churn
    - Fewer pilots
    - Higher AI costs
    """
    return ModelAssumptions(
        b2c=B2CAssumptions(
            starting_subscribers=75,  # Lower starting point
            new_subscribers_per_month=30,  # Lower growth
            monthly_churn_rate=0.10,  # 10% churn (higher)
            price_per_month=20.0,
            avg_usage_pct_of_allowance=1.2,  # Higher usage = higher costs
            cost_per_text_prompt=0.0025,  # Higher API costs
            cost_per_voice_minute=0.020,  # Higher voice costs
            aws_fixed_monthly=18.0,  # Slightly higher AWS
        ),
        b2b=B2BAssumptions(
            num_pilots=2,  # Fewer pilots
            pilot_start_months=[3, 9],  # Later starts
            avg_annual_contract_value=45000.0,  # Slightly lower ACV
            developer_hourly_cost=45.0,  # Higher dev cost
            avg_actual_hours_per_pilot_per_year=280.0,  # More hours used
        ),
        operating=OperatingAssumptions(
            headcount={
                'founders': 2,
                'developers': 1,
                'support': 0.5,
                'sales': 0
            },
            monthly_salary_per_role={
                'founders': 0,
                'developers': 8500,  # Slightly higher
                'support': 4000,
                'sales': 0
            },
            fixed_overhead_monthly=2500.0,  # Higher overhead
            starting_cash_balance=400000.0,  # Lower starting cash
        )
    )


def create_base_scenario() -> ModelAssumptions:
    """
    Base 2026 Scenario:
    - Most realistic values for each driver
    - Balanced assumptions
    - Assumes successful pre-seed raise
    
    Marketing Foundation Context:
    - Not starting from scratch: 818K impressions in Google Search Console (87% increase last quarter)
    - Google tags and attribution mechanisms being implemented for conversion optimization
    - Phase 1: Product-led growth with YouTube videos (as NPS improves)
    - Phase 2: Paid digital ads (once revenue threshold reached, using ROAS targets)
    - Growth assumptions (50 new subscribers/month) are reasonable given existing organic traction
    """
    return ModelAssumptions(
        b2c=B2CAssumptions(
            starting_subscribers=100,
            new_subscribers_per_month=50,
            monthly_churn_rate=0.07,  # 7% churn
            price_per_month=20.0,
            avg_usage_pct_of_allowance=1.0,  # 100% of allowance
            cost_per_text_prompt=0.002,
            cost_per_voice_minute=0.016,
            aws_fixed_monthly=15.0,
        ),
        b2b=B2BAssumptions(
            num_pilots=5,
            pilot_start_months=[1, 3, 6, 9, 12],
            avg_annual_contract_value=50000.0,
            developer_hourly_cost=40.0,
            avg_actual_hours_per_pilot_per_year=250.0,
        ),
        operating=OperatingAssumptions(
            headcount={
                'founders': 2,
                'developers': 1,
                'support': 0.5,
                'sales': 0
            },
            monthly_salary_per_role={
                'founders': 0,
                'developers': 8000,
                'support': 4000,
                'sales': 6000
            },
            fixed_overhead_monthly=2000.0,
            starting_cash_balance=500000.0,
        )
    )


def create_aggressive_scenario() -> ModelAssumptions:
    """
    Aggressive 2026 Scenario:
    - Higher subscriber growth
    - More pilots
    - Moderate churn
    - Similar or slightly improved AI unit costs
    """
    return ModelAssumptions(
        b2c=B2CAssumptions(
            starting_subscribers=150,  # Higher starting point
            new_subscribers_per_month=75,  # Higher growth
            monthly_churn_rate=0.05,  # 5% churn (lower)
            price_per_month=20.0,
            avg_usage_pct_of_allowance=0.9,  # Slightly lower usage
            cost_per_text_prompt=0.0018,  # Slightly improved costs
            cost_per_voice_minute=0.014,  # Slightly improved
            aws_fixed_monthly=15.0,
        ),
        b2b=B2BAssumptions(
            num_pilots=10,  # More pilots
            pilot_start_months=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],  # Earlier starts
            avg_annual_contract_value=55000.0,  # Higher ACV
            developer_hourly_cost=40.0,
            avg_actual_hours_per_pilot_per_year=240.0,  # Fewer hours (more efficient)
        ),
        operating=OperatingAssumptions(
            headcount={
                'founders': 2,
                'developers': 1,
                'support': 0.5,
                'sales': 0.5  # Added sales
            },
            monthly_salary_per_role={
                'founders': 0,
                'developers': 8000,
                'support': 4000,
                'sales': 6000
            },
            fixed_overhead_monthly=2000.0,
            starting_cash_balance=600000.0,  # Higher starting cash
        )
    )


def compare_scenarios(scenario_names: list = None) -> dict:
    """
    Run all scenarios and return comparison results.
    
    Args:
        scenario_names: List of scenario names to compare. If None, compares all.
    
    Returns:
        Dict with scenario names as keys and model results as values
    """
    from oasis_model import OasisModel
    
    scenarios = {
        'Current State': create_current_state_scenario(),
        'Conservative': create_conservative_scenario(),
        'Base': create_base_scenario(),
        'Aggressive': create_aggressive_scenario()
    }
    
    if scenario_names:
        scenarios = {k: v for k, v in scenarios.items() if k in scenario_names}
    
    results = {}
    for name, assumptions in scenarios.items():
        model = OasisModel(assumptions)
        results[name] = {
            'assumptions': assumptions,
            'results': model.run_full_model()
        }
    
    return results


def create_scenario_summary_table(scenario_results: dict) -> pd.DataFrame:
    """
    Create a comprehensive summary comparison table across scenarios.
    
    Args:
        scenario_results: Output from compare_scenarios()
    
    Returns:
        DataFrame with scenarios as rows, key metrics as columns including:
        - Total 2026 revenue (B2C + B2B)
        - Average gross margin %
        - Year-end cash balance
        - Minimum monthly cash balance in 2026
        - Runway months at Jan 2026 start
    """
    summary_data = []
    for scenario_name, data in scenario_results.items():
        summary = data['results']['summary']
        cash_flow = data['results']['cash_flow']
        
        # Calculate minimum monthly cash balance
        min_monthly_cash = cash_flow['cumulative_cash'].min()
        min_cash_month = cash_flow.loc[cash_flow['cumulative_cash'].idxmin(), 'month_name']
        
        # Calculate runway at start (Jan 2026)
        starting_cash = data['assumptions'].operating.starting_cash_balance
        avg_monthly_burn = summary['avg_monthly_burn']
        runway_at_start = (starting_cash / avg_monthly_burn) if avg_monthly_burn > 0 else float('inf')
        
        summary_data.append({
            'Scenario': scenario_name,
            'Total 2026 Revenue (USD)': summary['total_revenue'],
            'B2C Revenue (USD)': summary['total_b2c_revenue'],
            'B2B Revenue (USD)': summary['total_b2b_revenue'],
            'Average Gross Margin %': summary['total_gross_margin_pct'],
            'B2C Gross Margin %': summary['total_b2c_gross_margin_pct'],
            'B2B Gross Margin %': summary['total_b2b_gross_margin_pct'],
            'Net Cash Flow 2026 (USD)': summary['net_cash_flow_annual'],
            'Year-End Cash Balance (USD)': summary['ending_cash_balance'],
            'Min Monthly Cash (USD)': min_monthly_cash,
            'Min Cash Month': min_cash_month,
            'Runway at Start (Months)': runway_at_start if runway_at_start != float('inf') else '∞',
            'Runway at Year-End (Months)': summary['runway_months'] if summary['runway_months'] != float('inf') else '∞',
            'Ending Subscribers': int(summary['ending_subscribers'])
        })
    
    return pd.DataFrame(summary_data)


def analyze_tripwires(
    scenario_results: dict,
    min_cash_threshold: float = 100000.0,
    min_gross_margin_pct: float = 60.0,
    max_monthly_burn: float = 50000.0
) -> pd.DataFrame:
    """
    Analyze tripwires and red-lines for each scenario.
    
    Checks if scenarios violate thresholds for:
    - Minimum cash balance (any month below threshold)
    - Minimum gross margin % (annual average)
    - Maximum monthly burn rate (any month exceeding threshold)
    
    Args:
        scenario_results: Output from compare_scenarios()
        min_cash_threshold: Minimum acceptable cash balance (USD)
        min_gross_margin_pct: Minimum acceptable gross margin %
        max_monthly_burn: Maximum acceptable monthly cash burn (USD, positive number)
    
    Returns:
        DataFrame with one row per scenario showing:
        - Which thresholds are violated
        - Month(s) where violations occur
        - Current values vs thresholds
    """
    tripwire_data = []
    
    for scenario_name, data in scenario_results.items():
        summary = data['results']['summary']
        cash_flow = data['results']['cash_flow']
        
        # Check minimum cash threshold
        min_cash = cash_flow['cumulative_cash'].min()
        min_cash_month = cash_flow.loc[cash_flow['cumulative_cash'].idxmin(), 'month_name']
        cash_violation = min_cash < min_cash_threshold
        cash_violation_month = min_cash_month if cash_violation else None
        
        # Check gross margin threshold
        gross_margin = summary['total_gross_margin_pct']
        margin_violation = gross_margin < min_gross_margin_pct
        margin_violation_month = None  # Annual metric, no specific month
        
        # Check maximum burn rate
        max_burn = cash_flow['net_cash_flow'].min()  # Most negative = highest burn
        max_burn_month = cash_flow.loc[cash_flow['net_cash_flow'].idxmin(), 'month_name']
        burn_violation = max_burn < -max_monthly_burn
        burn_violation_month = max_burn_month if burn_violation else None
        
        # Count violations
        num_violations = sum([cash_violation, margin_violation, burn_violation])
        
        tripwire_data.append({
            'Scenario': scenario_name,
            'Violations Count': num_violations,
            'Min Cash Violation': 'YES' if cash_violation else 'NO',
            'Min Cash Value (USD)': min_cash,
            'Min Cash Threshold (USD)': min_cash_threshold,
            'Min Cash Violation Month': cash_violation_month if cash_violation else 'N/A',
            'Gross Margin Violation': 'YES' if margin_violation else 'NO',
            'Gross Margin %': gross_margin,
            'Min Margin Threshold %': min_gross_margin_pct,
            'Max Burn Violation': 'YES' if burn_violation else 'NO',
            'Max Monthly Burn (USD)': abs(max_burn),
            'Max Burn Threshold (USD)': max_monthly_burn,
            'Max Burn Violation Month': burn_violation_month if burn_violation else 'N/A',
        })
    
    return pd.DataFrame(tripwire_data)
