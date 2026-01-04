# Oasis Browser 2026 Sensitivity Analysis Model

A comprehensive financial model and sensitivity analysis tool for Oasis Browser's 2026 projections, built in Python.

## Purpose & Scope

**Purpose**: This model enables rapid sensitivity analysis for Oasis Browser's 2026 financial planning, allowing quick assessment of how changes in key business drivers affect revenue, margins, cash flow, and runway.

**Scope**: The model covers:
- **B2C Subscriptions**: Monthly recurring revenue from individual users ($20/month, ~1500 text or 150 voice prompts included)
- **B2B Pilots**: Annual contracts with enterprise clients ($50k/year average, 250 included developer hours)
- **Operating Expenses**: Headcount, fixed overhead, and infrastructure costs
- **Cash Flow & Runway**: Monthly cash flow projections and months of runway calculations

**Time Period**: Full year 2026 (12 months, January through December)

**Outputs**: All monetary values are in USD. Time periods are monthly for B2C/operating, annual for B2B (distributed monthly).

## Overview

This model projects financial performance for Oasis Browser across two revenue streams:
- **B2C Subscriptions**: Monthly recurring revenue from individual users
- **B2B Pilots**: Annual contracts with enterprise clients

The model calculates revenue, costs, gross margins, cash flow, and runway under various scenarios and sensitivity assumptions.

## Quick Start

### Installation

```bash
pip install -r requirements.txt
```

### Run the Analysis

**Run all analyses:**
```bash
python run_analysis.py
```

**Run specific scenario only:**
```bash
python run_analysis.py --scenario base
python run_analysis.py --scenario conservative
python run_analysis.py --scenario aggressive
```

**Skip Excel export:**
```bash
python run_analysis.py --no-export
```

**Custom output filename:**
```bash
python run_analysis.py --output my_analysis.xlsx
```

**Combined options:**
```bash
python run_analysis.py --scenario aggressive --no-export
```

This will:
1. Display base case 2026 projections
2. Run one-way sensitivity analyses on key drivers
3. Run two-way sensitivity tables
4. Compare scenarios (all or selected)
5. Run tripwire/red-line analysis
6. Export results to Excel (unless `--no-export` is used)

## Model Structure

### Core Modules

- **`oasis_model.py`**: Core financial model with B2C, B2B, and cash flow calculations
- **`sensitivity.py`**: One-way and two-way sensitivity analysis functions
- **`scenarios.py`**: Pre-defined scenario configurations (Conservative, Base, Aggressive)
- **`run_analysis.py`**: Main runner script with example usage

## Key Drivers

The following drivers have the most significant impact on financial outcomes and are the primary focus of sensitivity analysis:

### B2C Key Drivers

1. **`starting_subscribers`** (Location: `oasis_model.py` → `B2CAssumptions`)
   - **What**: Initial paying subscriber count in January 2026
   - **Recommended Range**: 50-200 (low: 50-75, base: 100, high: 150-200)
   - **Impact**: Directly affects starting revenue; compounds with growth
   - **Sensitivity Function**: `sensitivity_starting_subscribers()`

2. **`new_subscribers_per_month`** (Location: `oasis_model.py` → `B2CAssumptions`)
   - **What**: New paying subscribers added each month (linear growth)
   - **Recommended Range**: 20-100/month (low: 20-30, base: 50, high: 75-100)
   - **Impact**: Determines subscriber growth trajectory
   - **Sensitivity Function**: `sensitivity_monthly_new_subscribers()`

3. **`monthly_churn_rate`** (Location: `oasis_model.py` → `B2CAssumptions`)
   - **What**: Percentage of subscribers cancelling each month (applied before new subs)
   - **Recommended Range**: 3%-15% (low: 3-5%, base: 7%, high: 10-15%)
   - **Impact**: Critical for subscriber retention and revenue sustainability
   - **Sensitivity Function**: `sensitivity_monthly_churn_rate()`

4. **`avg_usage_pct_of_allowance`** (Location: `oasis_model.py` → `B2CAssumptions`)
   - **What**: Average usage as % of included allowance (1500 text or 150 voice)
   - **Recommended Range**: 50%-150% (low: 50%, base: 100%, high: 150%)
   - **Impact**: Directly affects API costs and gross margin
   - **Sensitivity Function**: `sensitivity_average_usage_intensity()`

5. **`price_per_month`** (Location: `oasis_model.py` → `B2CAssumptions`)
   - **What**: Subscription price per month (USD)
   - **Recommended Range**: $15-$25 (low: $15, base: $20, high: $25)
   - **Impact**: Direct revenue driver; affects gross margin significantly
   - **Sensitivity Function**: `sensitivity_subscription_price()`

### B2B Key Drivers

1. **`num_pilots`** (Location: `oasis_model.py` → `B2BAssumptions`)
   - **What**: Number of B2B pilot contracts in 2026
   - **Recommended Range**: 0-10 (low: 0-2, base: 5, high: 8-10)
   - **Impact**: Total B2B revenue and costs
   - **Sensitivity Function**: `sensitivity_number_of_pilots()`

2. **`developer_hourly_cost`** (Location: `oasis_model.py` → `B2BAssumptions`)
   - **What**: Cost per developer hour (USD/hour)
   - **Recommended Range**: $40-$80 (low: $40, base: $40-50, high: $60-80)
   - **Impact**: Major cost driver affecting B2B gross margin
   - **Sensitivity Function**: `sensitivity_developer_hourly_cost_detailed()`

3. **`included_hours_per_pilot_per_year`** (Location: `oasis_model.py` → `B2BAssumptions`)
   - **What**: Developer hours included in base contract per pilot
   - **Recommended Range**: 200-300 hours (target: 250 for 80% margin)
   - **Impact**: Determines cost structure and overage calculations
   - **Sensitivity Function**: `sensitivity_included_hours_per_pilot()`

### Operating Key Drivers

1. **`starting_cash_balance`** (Location: `oasis_model.py` → `OperatingAssumptions`)
   - **What**: Initial cash balance at start of 2026 (USD)
   - **Recommended Range**: $300k-$800k (varies by funding stage)
   - **Impact**: Determines runway and cash buffer

2. **Headcount and Salaries** (Location: `oasis_model.py` → `OperatingAssumptions`)
   - **What**: Number of FTE by role and monthly salaries
   - **Impact**: Major operating expense driver

### How to Change Drivers

**Method 1: Direct Code Edit**
- Edit default values in `oasis_model.py` at the top (see `B2C_DEFAULTS`, `B2B_DEFAULTS`, `OPERATING_DEFAULTS`)
- Or modify dataclass defaults directly

**Method 2: Config Dictionary (Recommended)**
```python
from oasis_model import create_assumptions_from_config

config = {
    'b2c': {'starting_subscribers': 150, 'monthly_churn_rate': 0.05},
    'b2b': {'num_pilots': 8}
}
assumptions = create_assumptions_from_config(config)
```

**Method 3: Programmatic Override**
```python
from scenarios import create_base_scenario

assumptions = create_base_scenario()
assumptions.b2c.starting_subscribers = 150
assumptions.b2c.monthly_churn_rate = 0.05
```

## Usage Examples

### Custom Analysis

```python
from oasis_model import OasisModel, ModelAssumptions, B2CAssumptions, B2BAssumptions
from scenarios import create_base_scenario

# Start with base scenario
assumptions = create_base_scenario()

# Modify specific assumptions
assumptions.b2c.starting_subscribers = 150
assumptions.b2c.monthly_churn_rate = 0.05
assumptions.b2b.num_pilots = 8

# Run model
model = OasisModel(assumptions)
results = model.run_full_model()

# Access results
print(f"Total Revenue: ${results['summary']['total_revenue']:,.2f}")
print(f"Gross Margin: {results['summary']['total_gross_margin_pct']:.1f}%")
```

### One-Way Sensitivity Analysis

```python
from sensitivity import one_way_sensitivity
from scenarios import create_base_scenario

base = create_base_scenario()

# Vary churn rate
values = [0.03, 0.05, 0.07, 0.10, 0.15]
metric = lambda m: m.run_full_model()['summary']['ending_subscribers']

results = one_way_sensitivity(
    base,
    'b2c.monthly_churn_rate',
    values,
    metric,
    'Ending Subscribers'
)
print(results)
```

### Two-Way Sensitivity Table

```python
from sensitivity import two_way_sensitivity
from scenarios import create_base_scenario

base = create_base_scenario()

row_driver = ('b2c.starting_subscribers', [50, 100, 150, 200])
col_driver = ('b2c.avg_usage_pct_of_allowance', [0.5, 1.0, 1.5])

metric = lambda m: m.run_full_model()['summary']['total_b2c_gross_margin_pct']

results = two_way_sensitivity(base, row_driver, col_driver, metric)
print(results)
```

### Scenario Comparison

```python
from scenarios import compare_scenarios, create_scenario_summary_table

# Compare all scenarios
scenario_results = compare_scenarios()
summary = create_scenario_summary_table(scenario_results)
print(summary)
```

## Key Outputs

The model provides:

1. **Monthly B2C Metrics**:
   - Subscriber count (with churn and growth)
   - Revenue (gross and net after Stripe fees)
   - API costs (Gemini, Deepgram)
   - AWS costs
   - Gross profit and margin %

2. **Annual B2B Metrics**:
   - Total revenue from pilots
   - Developer/support costs (included + overage hours)
   - Gross profit and margin %

3. **Cash Flow & Runway**:
   - Monthly cash flow
   - Cumulative cash balance
   - Months of runway (based on burn rate)

4. **Sensitivity Analyses**:
   - One-way: Impact of varying single drivers
   - Two-way: Pivot tables showing interactions between drivers

5. **Scenario Comparisons**:
   - Side-by-side comparison of Conservative, Base, and Aggressive cases
   - Extended metrics: minimum monthly cash, runway at start vs year-end

6. **Tripwire & Red-Line Analysis**:
   - Checks violations of minimum cash, minimum gross margin, maximum burn thresholds
   - Identifies which scenarios violate thresholds and in which months

## Customization Guide

### Adding New Drivers

1. Add the assumption to the appropriate `@dataclass` in `oasis_model.py`
2. Use it in the calculation methods
3. Create a sensitivity function in `sensitivity.py` if desired

### Adding New Scenarios

1. Create a new function in `scenarios.py` following the pattern of `create_base_scenario()`
2. Add it to the `compare_scenarios()` function
3. Update `run_analysis.py` to include it in exports

### Modifying Calculations

All calculation logic is in `OasisModel` class methods:
- `calculate_b2c_monthly()`: B2C revenue and costs
- `calculate_b2b_annual()`: B2B revenue and costs
- `calculate_operating_expenses_monthly()`: Operating expenses
- `calculate_cash_flow()`: Cash flow and runway

## Default Assumptions

### B2C (Base Scenario)
- Starting subscribers: 100
- New subscribers/month: 50
- Monthly churn: 7%
- Price: $20/month
- Usage: 100% of allowance (1500 text or 150 voice prompts)
- API costs: $0.002/text prompt, $0.016/voice minute
- AWS: $15/month fixed

### B2B (Base Scenario)
- Number of pilots: 5
- Average contract value: $50,000/year
- Developer cost: $40/hour
- Included hours: 250 hours/pilot/year

### Operating (Base Scenario)
- Headcount: 2 founders, 1 developer, 0.5 support
- Fixed overhead: $2,000/month
- Starting cash: $500,000

## Notes

- All costs and revenues are in USD
- B2B revenue is distributed across months based on pilot start dates
- Runway calculation assumes current burn rate continues
- The model assumes linear growth and churn (can be extended for more complex patterns)

## License

Internal use for Oasis Browser financial planning.
