"""
Sensitivity Analysis Module for Oasis Browser Model

This module provides functions for one-way and two-way sensitivity analysis
over key model drivers.
"""

from typing import List, Dict, Callable, Any, Tuple
import pandas as pd
import numpy as np
from oasis_model import OasisModel, ModelAssumptions, B2CAssumptions, B2BAssumptions, OperatingAssumptions


def one_way_sensitivity(
    base_assumptions: ModelAssumptions,
    driver_name: str,
    driver_values: List[Any],
    output_metric: Callable[[OasisModel], float],
    output_name: str = "Output"
) -> pd.DataFrame:
    """
    Perform one-way sensitivity analysis on a single driver.
    
    Args:
        base_assumptions: Base model assumptions
        driver_name: Name of the driver to vary (e.g., 'b2c.starting_subscribers')
        driver_values: List of values to test for the driver
        output_metric: Function that takes an OasisModel and returns a float metric
        output_name: Name of the output metric for display
    
    Returns:
        DataFrame with driver values and corresponding output metrics
    
    Example:
        >>> base = ModelAssumptions()
        >>> values = [50, 100, 150, 200]
        >>> metric = lambda m: m.run_full_model()['summary']['total_revenue']
        >>> results = one_way_sensitivity(base, 'b2c.starting_subscribers', values, metric)
    """
    results = []
    
    for value in driver_values:
        # Create a copy of assumptions
        assumptions = _copy_assumptions(base_assumptions)
        
        # Set the driver value using attribute path
        _set_nested_attribute(assumptions, driver_name, value)
        
        # Run model and get output
        model = OasisModel(assumptions)
        output_value = output_metric(model)
        
        results.append({
            driver_name: value,
            output_name: output_value
        })
    
    return pd.DataFrame(results)


def two_way_sensitivity(
    base_assumptions: ModelAssumptions,
    row_driver: Tuple[str, List[Any]],
    col_driver: Tuple[str, List[Any]],
    output_metric: Callable[[OasisModel], float],
    output_name: str = "Output"
) -> pd.DataFrame:
    """
    Perform two-way sensitivity analysis (pivot table style).
    
    Args:
        base_assumptions: Base model assumptions
        row_driver: Tuple of (driver_name, driver_values) for rows
        col_driver: Tuple of (driver_name, driver_values) for columns
        output_metric: Function that takes an OasisModel and returns a float metric
        output_name: Name of the output metric for display
    
    Returns:
        DataFrame with row driver as index, col driver as columns, output as values
    
    Example:
        >>> base = ModelAssumptions()
        >>> rows = ('b2c.starting_subscribers', [50, 100, 150])
        >>> cols = ('b2c.avg_usage_pct_of_allowance', [0.5, 1.0, 1.5])
        >>> metric = lambda m: m.run_full_model()['summary']['total_gross_margin_pct']
        >>> results = two_way_sensitivity(base, rows, cols, metric)
    """
    row_name, row_values = row_driver
    col_name, col_values = col_driver
    
    # Build results matrix
    results_matrix = []
    
    for row_val in row_values:
        row_results = []
        for col_val in col_values:
            # Create a copy of assumptions
            assumptions = _copy_assumptions(base_assumptions)
            
            # Set both driver values
            _set_nested_attribute(assumptions, row_name, row_val)
            _set_nested_attribute(assumptions, col_name, col_val)
            
            # Run model and get output
            model = OasisModel(assumptions)
            output_value = output_metric(model)
            
            row_results.append(output_value)
        
        results_matrix.append(row_results)
    
    # Create DataFrame with row values as index, col values as columns
    df = pd.DataFrame(
        results_matrix,
        index=[f"{row_name}={v}" for v in row_values],
        columns=[f"{col_name}={v}" for v in col_values]
    )
    
    # Add row driver values as a column for easier reading
    df.insert(0, row_name, row_values)
    
    return df


def _copy_assumptions(assumptions: ModelAssumptions) -> ModelAssumptions:
    """Create a deep copy of ModelAssumptions."""
    import copy
    return copy.deepcopy(assumptions)


def _set_nested_attribute(obj: Any, attr_path: str, value: Any) -> None:
    """
    Set a nested attribute using dot notation (e.g., 'b2c.starting_subscribers').
    
    Args:
        obj: Object to set attribute on
        attr_path: Dot-separated path to attribute
        value: Value to set
    """
    parts = attr_path.split('.')
    current = obj
    
    # Navigate to the parent object
    for part in parts[:-1]:
        current = getattr(current, part)
    
    # Set the final attribute
    setattr(current, parts[-1], value)


# Predefined sensitivity analysis functions for common use cases

def sensitivity_subscribers_vs_plan(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Vary total paying subscribers by ±25% and ±50%."""
    base_subs = base_assumptions.b2c.starting_subscribers
    values = [
        int(base_subs * 0.5),   # -50%
        int(base_subs * 0.75),  # -25%
        base_subs,              # Base
        int(base_subs * 1.25),  # +25%
        int(base_subs * 1.5)    # +50%
    ]
    
    metric = lambda m: m.run_full_model()['summary']['total_revenue']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.starting_subscribers',
        values,
        metric,
        'Total Annual Revenue (USD)'
    )


def sensitivity_churn_rates(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Test low (3%), base (7%), and high (15%) churn rates."""
    values = [0.03, 0.07, 0.15]
    
    metric = lambda m: m.run_full_model()['summary']['ending_subscribers']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.monthly_churn_rate',
        values,
        metric,
        'Ending Subscribers (Dec 2026)'
    )


def sensitivity_usage_intensity(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Test low (50%), base (100%), and high (150%) usage vs allowance."""
    values = [0.5, 1.0, 1.5]
    
    metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_margin_pct']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.avg_usage_pct_of_allowance',
        values,
        metric,
        'B2C Gross Margin %'
    )


def sensitivity_price_per_month(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Test price scenarios: 15, 20, 25 USD."""
    values = [15.0, 20.0, 25.0]
    
    metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_profit']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.price_per_month',
        values,
        metric,
        'B2C Gross Profit (USD)'
    )


def sensitivity_b2b_pilots(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Test number of B2B pilots: 0, 2, 5, 10."""
    values = [0, 2, 5, 10]
    
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_profit']
    return one_way_sensitivity(
        base_assumptions,
        'b2b.num_pilots',
        values,
        metric,
        'B2B Gross Profit (USD)'
    )


def sensitivity_developer_hourly_cost(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Test developer hourly costs: 40, 60, 80 USD/hour."""
    values = [40.0, 60.0, 80.0]
    
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_margin_pct']
    return one_way_sensitivity(
        base_assumptions,
        'b2b.developer_hourly_cost',
        values,
        metric,
        'B2B Gross Margin %'
    )


def sensitivity_subscribers_vs_usage(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Two-way: Subscribers (rows) vs Usage Intensity (columns) -> Gross Margin %."""
    row_driver = ('b2c.starting_subscribers', [50, 100, 150, 200])
    col_driver = ('b2c.avg_usage_pct_of_allowance', [0.5, 1.0, 1.5])
    
    metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_margin_pct']
    return two_way_sensitivity(
        base_assumptions,
        row_driver,
        col_driver,
        metric,
        'B2C Gross Margin %'
    )


def sensitivity_b2b_pilots_vs_dev_cost(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """Two-way: B2B Pilots (rows) vs Developer Cost (columns) -> B2B Gross Margin %."""
    row_driver = ('b2b.num_pilots', [0, 2, 5, 10])
    col_driver = ('b2b.developer_hourly_cost', [40.0, 60.0, 80.0])
    
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_margin_pct']
    return two_way_sensitivity(
        base_assumptions,
        row_driver,
        col_driver,
        metric,
        'B2B Gross Margin %'
    )


# ============================================================================
# Additional B2C One-Way Sensitivity Functions
# ============================================================================

def sensitivity_starting_subscribers(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on starting subscribers (Jan 2026).
    
    Tests: 50, 75, 100, 150, 200 subscribers
    Output: Total Annual Revenue (USD)
    """
    values = [50, 75, 100, 150, 200]
    metric = lambda m: m.run_full_model()['summary']['total_revenue']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.starting_subscribers',
        values,
        metric,
        'Total Annual Revenue (USD)'
    )


def sensitivity_monthly_new_subscribers(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on new subscribers per month.
    
    Tests: 20, 30, 50, 75, 100 new subscribers/month
    Output: Ending Subscribers (Dec 2026)
    """
    values = [20, 30, 50, 75, 100]
    metric = lambda m: m.run_full_model()['summary']['ending_subscribers']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.new_subscribers_per_month',
        values,
        metric,
        'Ending Subscribers (Dec 2026)'
    )


def sensitivity_monthly_churn_rate(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on monthly churn rate.
    
    Tests: 3%, 5%, 7%, 10%, 15% monthly churn
    Output: Ending Subscribers (Dec 2026)
    """
    values = [0.03, 0.05, 0.07, 0.10, 0.15]
    metric = lambda m: m.run_full_model()['summary']['ending_subscribers']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.monthly_churn_rate',
        values,
        metric,
        'Ending Subscribers (Dec 2026)'
    )


def sensitivity_average_usage_intensity(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on average usage intensity (% of allowance).
    
    Tests: 50%, 75%, 100%, 125%, 150% of allowance
    Output: B2C Gross Margin %
    """
    values = [0.5, 0.75, 1.0, 1.25, 1.5]
    metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_margin_pct']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.avg_usage_pct_of_allowance',
        values,
        metric,
        'B2C Gross Margin %'
    )


def sensitivity_subscription_price(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on subscription price per month.
    
    Tests: $15, $18, $20, $22, $25 per month
    Output: B2C Gross Profit (USD)
    """
    values = [15.0, 18.0, 20.0, 22.0, 25.0]
    metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_profit']
    return one_way_sensitivity(
        base_assumptions,
        'b2c.price_per_month',
        values,
        metric,
        'B2C Gross Profit (USD)'
    )


# ============================================================================
# Additional B2B One-Way Sensitivity Functions
# ============================================================================

def sensitivity_number_of_pilots(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on number of B2B pilot contracts.
    
    Tests: 0, 2, 5, 8, 10 pilots
    Output: B2B Gross Profit (USD)
    """
    values = [0, 2, 5, 8, 10]
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_profit']
    return one_way_sensitivity(
        base_assumptions,
        'b2b.num_pilots',
        values,
        metric,
        'B2B Gross Profit (USD)'
    )


def sensitivity_developer_hourly_cost_detailed(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on developer hourly cost.
    
    Tests: $40, $50, $60, $70, $80 per hour
    Output: B2B Gross Margin %
    """
    values = [40.0, 50.0, 60.0, 70.0, 80.0]
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_margin_pct']
    return one_way_sensitivity(
        base_assumptions,
        'b2b.developer_hourly_cost',
        values,
        metric,
        'B2B Gross Margin %'
    )


def sensitivity_included_hours_per_pilot(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    One-way sensitivity on included hours per pilot per year.
    
    Tests: 200, 225, 250, 275, 300 hours
    Output: B2B Gross Margin %
    """
    values = [200, 225, 250, 275, 300]
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_margin_pct']
    return one_way_sensitivity(
        base_assumptions,
        'b2b.included_hours_per_pilot_per_year',
        values,
        metric,
        'B2B Gross Margin %'
    )


# ============================================================================
# Additional Two-Way Sensitivity Functions
# ============================================================================

def sensitivity_subscribers_vs_usage_gross_margin(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    Two-way sensitivity: Subscribers (rows) × Usage Intensity (columns) → Gross Margin %.
    
    Tests:
    - Rows: 50, 100, 150, 200 starting subscribers
    - Columns: 50%, 100%, 150% usage of allowance
    - Output: B2C Gross Margin %
    """
    row_driver = ('b2c.starting_subscribers', [50, 100, 150, 200])
    col_driver = ('b2c.avg_usage_pct_of_allowance', [0.5, 1.0, 1.5])
    
    metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_margin_pct']
    return two_way_sensitivity(
        base_assumptions,
        row_driver,
        col_driver,
        metric,
        'B2C Gross Margin %'
    )


def sensitivity_pilots_vs_dev_cost_b2b_margin(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    Two-way sensitivity: Number of Pilots (rows) × Developer Cost (columns) → B2B Margin %.
    
    Tests:
    - Rows: 0, 2, 5, 10 pilots
    - Columns: $40, $60, $80 per hour
    - Output: B2B Gross Margin %
    """
    row_driver = ('b2b.num_pilots', [0, 2, 5, 10])
    col_driver = ('b2b.developer_hourly_cost', [40.0, 60.0, 80.0])
    
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_margin_pct']
    return two_way_sensitivity(
        base_assumptions,
        row_driver,
        col_driver,
        metric,
        'B2B Gross Margin %'
    )


def sensitivity_pilots_vs_dev_cost_total_profit(base_assumptions: ModelAssumptions) -> pd.DataFrame:
    """
    Two-way sensitivity: Number of Pilots (rows) × Developer Cost (columns) → Total B2B Profit.
    
    Tests:
    - Rows: 0, 2, 5, 10 pilots
    - Columns: $40, $60, $80 per hour
    - Output: B2B Gross Profit (USD)
    """
    row_driver = ('b2b.num_pilots', [0, 2, 5, 10])
    col_driver = ('b2b.developer_hourly_cost', [40.0, 60.0, 80.0])
    
    metric = lambda m: m.run_full_model()['summary']['total_b2b_gross_profit']
    return two_way_sensitivity(
        base_assumptions,
        row_driver,
        col_driver,
        metric,
        'B2B Gross Profit (USD)'
    )

