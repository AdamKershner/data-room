"""
Oasis Browser 2026 Sensitivity Analysis Model

Purpose & Scope:
This model projects financial performance for Oasis Browser's 2026 operations across
two revenue streams: B2C subscriptions (monthly recurring) and B2B pilot contracts (annual).
It calculates revenue, costs, gross margins, cash flow, and runway under various scenarios.

Key Outputs:
- Monthly B2C metrics (subscribers, revenue, costs, margins) - all in USD
- Annual B2B metrics (revenue, developer costs, margins) - all in USD  
- Monthly cash flow and cumulative cash balance - all in USD
- Runway calculation (months until cash runs out) - based on burn rate

Key Invariants:
- Churn is applied monthly: churned = subscribers * monthly_churn_rate (before new subs added)
- B2B hours: included hours are covered in contract; actual hours > included = overage at overage_hour_rate
- B2B revenue is distributed monthly based on pilot start dates
- All costs are calculated monthly for B2C, annually for B2B (then distributed monthly)
"""

from dataclasses import dataclass, field
from typing import List, Optional, Dict, Any
from datetime import datetime
import pandas as pd
import numpy as np


# ============================================================================
# DEFAULT ASSUMPTIONS WITH RECOMMENDED RANGES
# ============================================================================
# To override defaults, use create_assumptions_from_config() function below
# or modify the dataclass defaults directly.

# B2C Defaults (Recommended ranges in comments)
B2C_DEFAULTS = {
    'starting_subscribers': 100,  # Range: 50-200 (low: 50-75, base: 100, high: 150-200)
    'new_subscribers_per_month': 50,  # Range: 20-100 (low: 20-30, base: 50, high: 75-100)
    'monthly_churn_rate': 0.07,  # Range: 0.03-0.15 (low: 0.03-0.05, base: 0.07, high: 0.10-0.15)
    'price_per_month': 20.0,  # Range: 15-25 (low: 15, base: 20, high: 25)
    'stripe_processing_fee_pct': 0.0495,  # Fixed: ~4.95% (20 -> 19.01 net)
    'avg_usage_pct_of_allowance': 1.0,  # Range: 0.5-1.5 (low: 0.5, base: 1.0, high: 1.5)
    'cost_per_text_prompt': 0.002,  # Range: 0.0015-0.0025 (varies with Gemini pricing)
    'cost_per_voice_minute': 0.016,  # Range: 0.014-0.020 (varies with Deepgram pricing)
    'text_prompt_allowance': 1500,  # Fixed: included in subscription
    'voice_prompt_allowance': 150,  # Fixed: included in subscription
    'aws_fixed_monthly': 15.0,  # Range: 12-20 (low: 12, base: 15, high: 18-20)
    'aws_variable_per_user': 0.0,  # Range: 0-0.50 (typically minimal)
    'text_usage_pct': 0.8,  # Range: 0.7-0.9 (80% text, 20% voice typical)
}

# B2B Defaults (Recommended ranges in comments)
B2B_DEFAULTS = {
    'num_pilots': 5,  # Range: 0-10 (low: 0-2, base: 5, high: 8-10)
    'pilot_start_months': [1, 3, 6, 9, 12],  # Customize per scenario
    'avg_annual_contract_value': 50000.0,  # Range: 40000-60000 (low: 40-45k, base: 50k, high: 55-60k)
    'pct_clients_pay_own_ai_infra': 0.0,  # Range: 0-0.5 (0-50% of clients)
    'developer_hourly_cost': 40.0,  # Range: 40-80 (low: 40, base: 40-50, high: 60-80)
    'included_hours_per_pilot_per_year': 250,  # Range: 200-300 (target: 250 for 80% margin)
    'avg_actual_hours_per_pilot_per_year': 250.0,  # Range: 200-300 (can exceed included = overage)
    'overage_hour_rate': 40.0,  # Typically same as developer_hourly_cost
}

# Operating Defaults (Recommended ranges in comments)
OPERATING_DEFAULTS = {
    'headcount': {
        'founders': 2,  # Typically 2
        'developers': 1,  # Range: 0-2
        'support': 0.5,  # Range: 0-1
        'sales': 0  # Range: 0-1
    },
    'monthly_salary_per_role': {
        'founders': 0,  # Typically 0 (equity only)
        'developers': 8000,  # Range: 7000-10000 ($84k-$120k/year)
        'support': 4000,  # Range: 3500-5000 ($42k-$60k/year)
        'sales': 6000  # Range: 5000-8000 ($60k-$96k/year)
    },
    'fixed_overhead_monthly': 2000.0,  # Range: 1500-3000 (tools, marketing, legal)
    'starting_cash_balance': 500000.0,  # Range: 300k-800k (varies by funding stage)
    'other_revenue_monthly': 0.0,  # Other revenue streams (e.g., webapp MRR)
}


@dataclass
class B2CAssumptions:
    """
    Assumptions for B2C subscription business.
    
    Units: All monetary values in USD. Time periods are monthly unless specified.
    
    Key Drivers for Sensitivity Analysis:
    - starting_subscribers: Initial subscriber base (Jan 2026)
    - new_subscribers_per_month: Growth rate (linear assumption)
    - monthly_churn_rate: % of subscribers cancelling each month (applied before new subs)
    - price_per_month: Subscription price
    - avg_usage_pct_of_allowance: Usage intensity (0.5 = 50% of allowance, 1.5 = 150%)
    
    Invariants:
    - Churn is calculated as: churned = current_subscribers * monthly_churn_rate
    - Churn is applied BEFORE new subscribers are added each month
    - Usage costs are calculated for ALL usage (simplified model)
    - Net revenue = gross revenue * (1 - stripe_processing_fee_pct)
    """
    starting_subscribers: int = B2C_DEFAULTS['starting_subscribers']
    new_subscribers_per_month: int = B2C_DEFAULTS['new_subscribers_per_month']
    monthly_churn_rate: float = B2C_DEFAULTS['monthly_churn_rate']
    price_per_month: float = B2C_DEFAULTS['price_per_month']
    stripe_processing_fee_pct: float = B2C_DEFAULTS['stripe_processing_fee_pct']
    
    # Usage assumptions (as % of included allowance)
    # Included: 1500 text prompts or 150 voice-only prompts per month
    avg_usage_pct_of_allowance: float = B2C_DEFAULTS['avg_usage_pct_of_allowance']
    
    # API unit costs
    cost_per_text_prompt: float = B2C_DEFAULTS['cost_per_text_prompt']
    cost_per_voice_minute: float = B2C_DEFAULTS['cost_per_voice_minute']
    text_prompt_allowance: int = B2C_DEFAULTS['text_prompt_allowance']
    voice_prompt_allowance: int = B2C_DEFAULTS['voice_prompt_allowance']
    
    # AWS costs
    aws_fixed_monthly: float = B2C_DEFAULTS['aws_fixed_monthly']
    aws_variable_per_user: float = B2C_DEFAULTS['aws_variable_per_user']
    
    # Usage mix (what % of users use text vs voice)
    text_usage_pct: float = B2C_DEFAULTS['text_usage_pct']


@dataclass
class B2BAssumptions:
    """
    Assumptions for B2B pilot business.
    
    Units: All monetary values in USD. Contract values are annual, costs are per hour.
    
    Key Drivers for Sensitivity Analysis:
    - num_pilots: Number of pilot contracts in 2026
    - developer_hourly_cost: Cost per developer hour (affects margin significantly)
    - included_hours_per_pilot_per_year: Hours covered in base contract
    - avg_actual_hours_per_pilot_per_year: Actual hours used (if > included = overage)
    
    Invariants:
    - Total revenue = num_pilots * avg_annual_contract_value
    - Included hours cost = num_pilots * included_hours * developer_hourly_cost
    - Overage hours = max(0, avg_actual_hours - included_hours) per pilot
    - Overage cost = num_pilots * overage_hours * overage_hour_rate
    - Revenue is distributed monthly based on pilot_start_months
    """
    num_pilots: int = B2B_DEFAULTS['num_pilots']
    pilot_start_months: List[int] = field(default_factory=lambda: B2B_DEFAULTS['pilot_start_months'].copy())
    avg_annual_contract_value: float = B2B_DEFAULTS['avg_annual_contract_value']
    pct_clients_pay_own_ai_infra: float = B2B_DEFAULTS['pct_clients_pay_own_ai_infra']
    
    developer_hourly_cost: float = B2B_DEFAULTS['developer_hourly_cost']
    included_hours_per_pilot_per_year: int = B2B_DEFAULTS['included_hours_per_pilot_per_year']
    avg_actual_hours_per_pilot_per_year: float = B2B_DEFAULTS['avg_actual_hours_per_pilot_per_year']
    overage_hour_rate: float = B2B_DEFAULTS['overage_hour_rate']


@dataclass
class OperatingAssumptions:
    """
    Operating expenses and overhead.
    
    Units: All monetary values in USD. All expenses are monthly.
    
    Key Drivers for Sensitivity Analysis:
    - headcount: Number of FTE by role (can be fractional, e.g., 0.5)
    - monthly_salary_per_role: Monthly salary per role
    - fixed_overhead_monthly: Fixed costs (tools, marketing, legal)
    - starting_cash_balance: Initial cash for runway calculation
    - other_revenue_monthly: Other revenue streams (e.g., webapp) - added to total revenue
    
    Invariants:
    - Total monthly opex = sum(headcount[role] * monthly_salary_per_role[role]) + fixed_overhead
    - Runway is calculated based on ending cash balance and average monthly burn rate
    - Other revenue is added to total revenue in cash flow calculation
    """
    # Headcount (monthly salaries) - can be fractional FTE
    headcount: dict = field(default_factory=lambda: OPERATING_DEFAULTS['headcount'].copy())
    
    monthly_salary_per_role: dict = field(default_factory=lambda: OPERATING_DEFAULTS['monthly_salary_per_role'].copy())
    
    # Fixed overhead
    fixed_overhead_monthly: float = OPERATING_DEFAULTS['fixed_overhead_monthly']
    
    # Starting cash
    starting_cash_balance: float = OPERATING_DEFAULTS['starting_cash_balance']
    
    # Other revenue streams (e.g., webapp, other products)
    other_revenue_monthly: float = 0.0


@dataclass
class ModelAssumptions:
    """
    Container for all model assumptions.
    
    This is the main configuration object for the financial model.
    Contains B2C, B2B, and Operating assumptions.
    """
    b2c: B2CAssumptions = field(default_factory=B2CAssumptions)
    b2b: B2BAssumptions = field(default_factory=B2BAssumptions)
    operating: OperatingAssumptions = field(default_factory=OperatingAssumptions)
    year: int = 2026


def create_assumptions_from_config(config: Dict[str, Any]) -> ModelAssumptions:
    """
    Create ModelAssumptions from a configuration dictionary.
    
    Allows overriding defaults without editing code. Useful for scenario testing.
    
    Args:
        config: Dictionary with keys 'b2c', 'b2b', 'operating' containing
                nested dictionaries of parameter overrides.
                Example: {'b2c': {'starting_subscribers': 150, 'monthly_churn_rate': 0.05}}
    
    Returns:
        ModelAssumptions with overridden values
    
    Example:
        >>> config = {'b2c': {'starting_subscribers': 150}, 'b2b': {'num_pilots': 8}}
        >>> assumptions = create_assumptions_from_config(config)
    """
    b2c_config = config.get('b2c', {})
    b2b_config = config.get('b2b', {})
    operating_config = config.get('operating', {})
    
    # Create base assumptions
    b2c = B2CAssumptions()
    b2b = B2BAssumptions()
    operating = OperatingAssumptions()
    
    # Override B2C
    for key, value in b2c_config.items():
        if hasattr(b2c, key):
            setattr(b2c, key, value)
    
    # Override B2B
    for key, value in b2b_config.items():
        if hasattr(b2b, key):
            setattr(b2b, key, value)
    
    # Override Operating (handle nested dicts)
    if 'headcount' in operating_config:
        operating.headcount.update(operating_config['headcount'])
    if 'monthly_salary_per_role' in operating_config:
        operating.monthly_salary_per_role.update(operating_config['monthly_salary_per_role'])
    if 'fixed_overhead_monthly' in operating_config:
        operating.fixed_overhead_monthly = operating_config['fixed_overhead_monthly']
    if 'starting_cash_balance' in operating_config:
        operating.starting_cash_balance = operating_config['starting_cash_balance']
    
    return ModelAssumptions(b2c=b2c, b2b=b2b, operating=operating)


class OasisModel:
    """Main model class for Oasis Browser financial projections"""
    
    def __init__(self, assumptions: ModelAssumptions):
        self.assumptions = assumptions
        self.months = 12
        self.month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    def calculate_b2c_monthly(self) -> pd.DataFrame:
        """
        Calculate B2C subscription revenue and costs by month.
        
        Inputs: Uses self.assumptions.b2c for all B2C parameters.
        
        Outputs: DataFrame with monthly metrics (all in USD unless %):
        - month: Month number (1-12)
        - month_name: Month abbreviation (Jan-Dec)
        - subscribers: Ending subscriber count for the month
        - new_subs: New subscribers added this month
        - churned_subs: Subscribers who churned this month
        - revenue_gross: Gross revenue (subscribers * price_per_month)
        - revenue_net: Net revenue after Stripe fees
        - api_costs: Total API costs (Gemini + Deepgram)
        - aws_costs: AWS infrastructure costs
        - total_costs: Total costs (API + AWS)
        - gross_profit: Net revenue - total costs
        - gross_margin_pct: Gross profit / net revenue * 100
        
        Invariants:
        - Churn is applied BEFORE new subscribers are added
        - Subscribers cannot go below 0
        - All monetary values are in USD
        """
        b2c = self.assumptions.b2c
        results = []
        
        subscribers = b2c.starting_subscribers
        
        for month in range(1, self.months + 1):
            # Churn calculation
            churned = int(subscribers * b2c.monthly_churn_rate)
            subscribers = max(0, subscribers - churned)
            
            # New subscribers
            new_subs = b2c.new_subscribers_per_month
            subscribers += new_subs
            
            # Revenue calculation
            revenue_gross = subscribers * b2c.price_per_month
            revenue_net = revenue_gross * (1 - b2c.stripe_processing_fee_pct)
            
            # Usage-based API costs
            # Calculate average usage per subscriber
            text_prompts_per_sub = (b2c.text_prompt_allowance * 
                                   b2c.avg_usage_pct_of_allowance * 
                                   b2c.text_usage_pct)
            voice_minutes_per_sub = (b2c.voice_prompt_allowance * 
                                    b2c.avg_usage_pct_of_allowance * 
                                    (1 - b2c.text_usage_pct))
            
            # API costs (only for usage above allowance, or all if usage > 100%)
            # For simplicity, we'll charge for all usage, but you can adjust this
            api_costs = (subscribers * text_prompts_per_sub * b2c.cost_per_text_prompt +
                        subscribers * voice_minutes_per_sub * b2c.cost_per_voice_minute)
            
            # AWS costs
            aws_costs = b2c.aws_fixed_monthly + (subscribers * b2c.aws_variable_per_user)
            
            # Gross profit and margin
            total_costs = api_costs + aws_costs
            gross_profit = revenue_net - total_costs
            gross_margin_pct = (gross_profit / revenue_net * 100) if revenue_net > 0 else 0
            
            results.append({
                'month': month,
                'month_name': self.month_names[month - 1],
                'subscribers': subscribers,
                'new_subs': new_subs,
                'churned_subs': churned,
                'revenue_gross': revenue_gross,
                'revenue_net': revenue_net,
                'api_costs': api_costs,
                'aws_costs': aws_costs,
                'total_costs': total_costs,
                'gross_profit': gross_profit,
                'gross_margin_pct': gross_margin_pct
            })
        
        return pd.DataFrame(results)
    
    def calculate_b2b_annual(self) -> dict:
        """
        Calculate B2B pilot revenue and costs for the year.
        
        Inputs: Uses self.assumptions.b2b for all B2B parameters.
        
        Outputs: Dictionary with annual B2B metrics (all in USD unless %):
        - total_revenue: Annual revenue from all pilots
        - total_costs: Total costs (included hours + overage hours)
        - gross_profit: Revenue - costs
        - gross_margin_pct: Gross profit / revenue * 100
        - num_pilots: Number of pilot contracts
        - avg_pilot_margin: Average gross profit per pilot
        - included_hours_cost: Cost of included hours
        - overage_cost: Cost of overage hours (if actual > included)
        
        Invariants:
        - Overage hours = max(0, avg_actual_hours - included_hours) per pilot
        - If actual hours <= included hours, overage_cost = 0
        - All monetary values are in USD
        """
        b2b = self.assumptions.b2b
        
        # Total revenue
        total_revenue = b2b.num_pilots * b2b.avg_annual_contract_value
        
        # Calculate costs
        # Developer hours cost
        included_hours_cost = (b2b.num_pilots * 
                              b2b.included_hours_per_pilot_per_year * 
                              b2b.developer_hourly_cost)
        
        # Overage hours (if actual > included)
        overage_hours = max(0, (b2b.avg_actual_hours_per_pilot_per_year - 
                               b2b.included_hours_per_pilot_per_year))
        overage_cost = b2b.num_pilots * overage_hours * b2b.overage_hour_rate
        
        # If clients pay their own AI/infra, we don't have those costs
        # For now, we assume no AI/infra costs for B2B (client pays or it's minimal)
        # You can add this if needed
        
        total_costs = included_hours_cost + overage_cost
        gross_profit = total_revenue - total_costs
        gross_margin_pct = (gross_profit / total_revenue * 100) if total_revenue > 0 else 0
        
        avg_pilot_margin = gross_profit / b2b.num_pilots if b2b.num_pilots > 0 else 0
        
        return {
            'total_revenue': total_revenue,
            'total_costs': total_costs,
            'gross_profit': gross_profit,
            'gross_margin_pct': gross_margin_pct,
            'num_pilots': b2b.num_pilots,
            'avg_pilot_margin': avg_pilot_margin,
            'included_hours_cost': included_hours_cost,
            'overage_cost': overage_cost
        }
    
    def calculate_operating_expenses_monthly(self) -> pd.DataFrame:
        """
        Calculate monthly operating expenses.
        
        Inputs: Uses self.assumptions.operating for headcount and overhead.
        
        Outputs: DataFrame with monthly operating expenses (all in USD):
        - month: Month number (1-12)
        - month_name: Month abbreviation
        - headcount_cost: Total monthly headcount cost (sum of all roles)
        - fixed_overhead: Fixed overhead costs
        - total_opex: Total operating expenses per month
        
        Invariants:
        - Headcount cost = sum(headcount[role] * monthly_salary_per_role[role])
        - Total opex is constant across all months (no seasonality)
        """
        op = self.assumptions.operating
        
        # Calculate total monthly headcount cost
        total_headcount_cost = 0
        for role, count in op.headcount.items():
            total_headcount_cost += count * op.monthly_salary_per_role.get(role, 0)
        
        # Fixed overhead
        fixed_overhead = op.fixed_overhead_monthly
        
        total_monthly_opex = total_headcount_cost + fixed_overhead
        
        results = []
        for month in range(1, self.months + 1):
            results.append({
                'month': month,
                'month_name': self.month_names[month - 1],
                'headcount_cost': total_headcount_cost,
                'fixed_overhead': fixed_overhead,
                'total_opex': total_monthly_opex
            })
        
        return pd.DataFrame(results)
    
    def calculate_cash_flow(self) -> pd.DataFrame:
        """
        Calculate monthly cash flow and runway.
        
        Inputs: Uses all assumptions (B2C, B2B, Operating) to calculate cash flow.
        
        Outputs: DataFrame with monthly cash flow metrics (all in USD unless months):
        - month: Month number (1-12)
        - month_name: Month abbreviation
        - b2c_revenue: B2C net revenue for the month
        - b2b_revenue: B2B revenue allocated to this month (based on pilot starts)
        - total_revenue: Total revenue (B2C + B2B)
        - b2c_costs: B2C costs for the month
        - b2b_costs: B2B costs allocated to this month (evenly distributed)
        - opex: Operating expenses for the month
        - total_costs: Total costs (B2C + B2B + opex)
        - net_cash_flow: Revenue - costs (positive = inflow, negative = burn)
        - cumulative_cash: Running cash balance (starting + cumulative net flow)
        - runway_months: Estimated months until cash runs out (based on current burn)
        
        Invariants:
        - B2B revenue is distributed based on pilot_start_months
        - B2B costs are distributed evenly across 12 months
        - Runway = cumulative_cash / monthly_burn (if burning cash)
        - Runway = infinity if not burning cash
        """
        b2c_monthly = self.calculate_b2c_monthly()
        b2b_annual = self.calculate_b2b_annual()
        opex_monthly = self.calculate_operating_expenses_monthly()
        
        # Distribute B2B revenue across months based on pilot start dates
        b2b_monthly_revenue = self._distribute_b2b_revenue()
        
        results = []
        cash_balance = self.assumptions.operating.starting_cash_balance
        
        for month in range(1, self.months + 1):
            b2c_row = b2c_monthly[b2c_monthly['month'] == month].iloc[0]
            opex_row = opex_monthly[opex_monthly['month'] == month].iloc[0]
            
            # Monthly cash flow components
            b2c_cash_in = b2c_row['revenue_net']
            b2b_cash_in = b2b_monthly_revenue.get(month, 0)
            other_revenue = self.assumptions.operating.other_revenue_monthly
            total_revenue = b2c_cash_in + b2b_cash_in + other_revenue
            
            b2c_costs = b2c_row['total_costs']
            opex = opex_row['total_opex']
            total_costs = b2c_costs + opex
            
            # B2B costs are annual, distribute evenly or by pilot timing
            # For simplicity, distribute evenly across months
            b2b_monthly_costs = b2b_annual['total_costs'] / 12
            
            net_cash_flow = total_revenue - total_costs - b2b_monthly_costs
            cash_balance += net_cash_flow
            
            # Calculate runway (months until cash runs out)
            # Estimate based on current burn rate
            monthly_burn = -net_cash_flow if net_cash_flow < 0 else 0
            runway_months = (cash_balance / monthly_burn) if monthly_burn > 0 else float('inf')
            
            results.append({
                'month': month,
                'month_name': self.month_names[month - 1],
                'b2c_revenue': b2c_cash_in,
                'b2b_revenue': b2b_cash_in,
                'other_revenue': other_revenue,
                'total_revenue': total_revenue,
                'b2c_costs': b2c_costs,
                'b2b_costs': b2b_monthly_costs,
                'opex': opex,
                'total_costs': total_costs + b2b_monthly_costs,
                'net_cash_flow': net_cash_flow,
                'cumulative_cash': cash_balance,
                'runway_months': runway_months
            })
        
        return pd.DataFrame(results)
    
    def _distribute_b2b_revenue(self) -> dict:
        """
        Distribute B2B annual revenue across months based on pilot start dates.
        
        Returns: Dictionary mapping month (1-12) to revenue amount (USD).
        Revenue is distributed evenly across remaining months of the year
        for each pilot starting in that month.
        """
        b2b = self.assumptions.b2b
        monthly_revenue = {}
        
        # Distribute each pilot's revenue across remaining months of the year
        for start_month in b2b.pilot_start_months[:b2b.num_pilots]:
            months_remaining = 13 - start_month  # Months from start to end of year
            monthly_amount = b2b.avg_annual_contract_value / 12  # Assume even distribution
            
            for month in range(start_month, 13):
                if month not in monthly_revenue:
                    monthly_revenue[month] = 0
                monthly_revenue[month] += monthly_amount
        
        return monthly_revenue
    
    def run_full_model(self) -> dict:
        """
        Run the complete model and return all results.
        
        Inputs: Uses self.assumptions for all calculations.
        
        Outputs: Dictionary containing:
        - b2c_monthly: DataFrame with monthly B2C metrics (see calculate_b2c_monthly)
        - b2b_annual: Dictionary with annual B2B metrics (see calculate_b2b_annual)
        - opex_monthly: DataFrame with monthly operating expenses
        - cash_flow: DataFrame with monthly cash flow and runway
        - summary: Dictionary with key annual summary metrics:
            * total_b2c_revenue: Annual B2C net revenue (USD)
            * total_b2b_revenue: Annual B2B revenue (USD)
            * total_revenue: Total annual revenue (USD)
            * total_b2c_gross_profit: Annual B2C gross profit (USD)
            * total_b2b_gross_profit: Annual B2B gross profit (USD)
            * total_gross_profit: Total gross profit (USD)
            * total_b2c_gross_margin_pct: B2C gross margin %
            * total_b2b_gross_margin_pct: B2B gross margin %
            * total_gross_margin_pct: Combined gross margin %
            * total_opex: Annual operating expenses (USD)
            * net_cash_flow_annual: Annual net cash flow (USD)
            * ending_cash_balance: Cash balance at end of year (USD)
            * avg_monthly_burn: Average monthly cash burn (USD, negative if burning)
            * runway_months: Months of runway at year end
            * ending_subscribers: Subscriber count at end of year
        """
        b2c_monthly = self.calculate_b2c_monthly()
        b2b_annual = self.calculate_b2b_annual()
        opex_monthly = self.calculate_operating_expenses_monthly()
        cash_flow = self.calculate_cash_flow()
        
        # Calculate summary metrics
        total_b2c_revenue = b2c_monthly['revenue_net'].sum()
        total_b2c_costs = b2c_monthly['total_costs'].sum()
        total_b2c_gross_profit = total_b2c_revenue - total_b2c_costs
        total_b2c_gross_margin = (total_b2c_gross_profit / total_b2c_revenue * 100) if total_b2c_revenue > 0 else 0
        
        # Include other revenue (e.g., webapp) in total revenue
        total_other_revenue = self.assumptions.operating.other_revenue_monthly * 12
        total_revenue = total_b2c_revenue + b2b_annual['total_revenue'] + total_other_revenue
        total_costs = total_b2c_costs + b2b_annual['total_costs'] + opex_monthly['total_opex'].sum()
        total_gross_profit = total_b2c_gross_profit + b2b_annual['gross_profit'] + total_other_revenue  # Other revenue is pure profit
        total_gross_margin = (total_gross_profit / total_revenue * 100) if total_revenue > 0 else 0
        
        net_cash_flow_annual = cash_flow['net_cash_flow'].sum()
        ending_cash = cash_flow['cumulative_cash'].iloc[-1]
        avg_monthly_burn = -net_cash_flow_annual / 12 if net_cash_flow_annual < 0 else 0
        runway_at_year_end = (ending_cash / avg_monthly_burn) if avg_monthly_burn > 0 else float('inf')
        
        summary = {
            'total_b2c_revenue': total_b2c_revenue,
            'total_b2b_revenue': b2b_annual['total_revenue'],
            'total_other_revenue': total_other_revenue,
            'total_revenue': total_revenue,
            'total_b2c_gross_profit': total_b2c_gross_profit,
            'total_b2b_gross_profit': b2b_annual['gross_profit'],
            'total_gross_profit': total_gross_profit,
            'total_b2c_gross_margin_pct': total_b2c_gross_margin,
            'total_b2b_gross_margin_pct': b2b_annual['gross_margin_pct'],
            'total_gross_margin_pct': total_gross_margin,
            'total_opex': opex_monthly['total_opex'].sum(),
            'net_cash_flow_annual': net_cash_flow_annual,
            'ending_cash_balance': ending_cash,
            'avg_monthly_burn': avg_monthly_burn,
            'runway_months': runway_at_year_end,
            'ending_subscribers': b2c_monthly['subscribers'].iloc[-1]
        }
        
        return {
            'b2c_monthly': b2c_monthly,
            'b2b_annual': b2b_annual,
            'opex_monthly': opex_monthly,
            'cash_flow': cash_flow,
            'summary': summary
        }

