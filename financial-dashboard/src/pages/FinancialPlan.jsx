import React from 'react'
import KeyHighlights from '../components/KeyHighlights'
import FinancialSummary from '../components/FinancialSummary'
import ScenarioComparison from '../components/ScenarioComparison'
import SensitivityAnalysis from '../components/SensitivityAnalysis'
import TwoWaySensitivity from '../components/TwoWaySensitivity'
import Tripwires from '../components/Tripwires'
import './Page.css'

function FinancialPlan() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Financial Plan & Sensitivity Analysis</h1>
      </div>

      <section className="page-section">
        <h2>Base-Case 2026 Financials</h2>
        <div className="content-block">
          <p>
            Our base-case scenario projects strong growth with healthy unit economics, assuming a 
            successful pre-seed raise ($500K starting cash) and balanced execution. The model assumes 
            balanced subscriber growth (starting from 100 subscribers post-funding), moderate churn, 
            and strategic B2B pilot execution.
          </p>
          <p>
            <strong>Marketing Foundation:</strong> We are not starting from scratch on marketing. 
            Last quarter, we achieved 818K impressions in Google Search Console (87% increase), 
            demonstrating existing organic traction. We are implementing Google tags and attribution 
            mechanisms to measure and optimize conversion. As product quality improves (measured by NPS), 
            we will create YouTube videos highlighting use cases to boost traffic and signups. Once we 
            achieve a revenue threshold (either through bootstrapping or funding), we will invest in 
            paid digital ads using ROAS (Return on Ad Spend) targets, assuming LTV is stable and validated.
          </p>
          <p>
            <strong>Note:</strong> These projections assume post-pre-seed funding conditions. Current 
            state (Jan 2, 2026) is $1,174 cash and 3 paying subscribers. See "Funding Needs" section 
            for pre-seed requirements.
          </p>
          <p>
            <strong>Key Projections (Post-Pre-Seed):</strong>
          </p>
          <ul className="feature-list">
            <li>461 B2C subscribers by year-end 2026</li>
            <li>5 B2B pilot contracts at $50k/year average</li>
            <li>$323,188 total revenue</li>
            <li>81.0% average gross margin</li>
            <li>Positive cash flow with $509,587 year-end balance</li>
          </ul>
        </div>
        <KeyHighlights />
        <FinancialSummary />
      </section>

      <section className="page-section">
        <h2>Key Sensitivities</h2>
        <div className="content-block">
          <h3>Sensitivity Analysis Summary</h3>
          <p>
            Our financial model reveals that Oasis Browser is most sensitive to B2B pilot execution 
            and developer cost management, with pricing and usage intensity playing important but 
            secondary roles. The following insights guide our strategic priorities:
          </p>
          <ul className="feature-list">
            <li>
              <strong>B2B Pilots Drive Revenue Scale:</strong> The number of B2B pilot contracts 
              has the largest impact on total revenue, with a range from $73K (0 pilots) to $573K 
              (10 pilots)—a 7.8x variance. This makes B2B sales execution the primary growth lever, 
              requiring focused resources on pilot development, conversion, and expansion.
            </li>
            <li>
              <strong>Developer Cost Management is Critical for B2B Margins:</strong> Developer 
              hourly costs directly compress B2B margins, dropping from 81% at $40/hour to 65.6% 
              at $80/hour—a 15 percentage point impact. Maintaining cost discipline through efficient 
              delivery, scope management, and potentially lower-cost resources is essential for 
              preserving B2B profitability.
            </li>
            <li>
              <strong>Pricing Has Moderate Revenue Impact:</strong> Subscription price changes from 
              $15 to $25 drive a 12% revenue variance ($305K to $341K), with higher prices also 
              improving margins. This suggests pricing optimization can meaningfully improve unit 
              economics without significantly impacting demand, particularly for knowledge workers 
              who value productivity gains.
            </li>
            <li>
              <strong>Usage Intensity Affects Margins More Than Revenue:</strong> While usage 
              intensity doesn't change revenue (users pay the same subscription), it directly 
              impacts costs and margins. Heavy usage (150% of allowance) compresses margins by 
              3.5 percentage points compared to light usage (50%), highlighting the importance 
              of usage monitoring and potentially tiered pricing for power users.
            </li>
            <li>
              <strong>Churn Has Moderate but Manageable Impact:</strong> Churn rates from 3% to 
              15% create a 9% revenue variance, with lower churn improving both revenue and runway. 
              This reinforces the importance of onboarding, user education, and retention programs, 
              though churn is less sensitive than B2B execution.
            </li>
            <li>
              <strong>Two-Way Interactions Reveal Optimization Opportunities:</strong> The 
              interaction between subscribers and usage intensity shows that scale with moderate 
              usage maximizes margins. Similarly, B2B margins remain stable across pilot counts 
              when developer costs are controlled, suggesting we can scale B2B efficiently with 
              proper cost management.
            </li>
          </ul>
          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
            <strong>Strategic Implications:</strong> Focus resources on B2B pilot execution and 
            developer cost efficiency as primary growth and margin drivers. Optimize pricing 
            within the $20-$25 range to improve unit economics. Monitor usage patterns and 
            implement usage management strategies to protect margins. Maintain strong retention 
            programs, but prioritize B2B growth as the highest-impact lever.
          </p>
        </div>

        <SensitivityAnalysis />
        <TwoWaySensitivity />
      </section>

      <section className="page-section">
        <h2>Scenarios and Risk Profile</h2>
        <div className="content-block">
          <p>
            The following scenarios assume successful pre-seed funding ($400K-$600K starting cash) 
            and represent different execution outcomes for 2026. All scenarios start from a post-funding 
            position with initial traction (75-150 starting subscribers).
          </p>
        </div>
        
        <ScenarioComparison />

        <div className="content-block" style={{ marginTop: '40px' }}>
          <h3>Key Differences Between Scenarios</h3>
          <ul className="feature-list">
            <li>
              <strong>Conservative Case:</strong> Limited B2B traction (2 pilots) keeps annual revenue 
              at $131K, but runway remains above 49 months due to lower hiring and controlled costs. 
              Higher churn (10%) and slower growth result in 240 ending subscribers.
            </li>
            <li>
              <strong>Base Case:</strong> Balanced execution with 5 B2B pilots drives $323K revenue 
              and 81% gross margin. Positive cash flow ($9.6K) extends runway indefinitely, with 
              minimum cash balance of $470K occurring in May 2026.
            </li>
            <li>
              <strong>Aggressive Case:</strong> Strong B2B execution (10 pilots) and faster subscriber 
              growth (75/month) generate $669K revenue with 82.8% margins. Year-end cash reaches 
              $768K, providing substantial buffer for accelerated growth initiatives.
            </li>
            <li>
              <strong>Revenue Range:</strong> Scenarios span a 5x revenue range ($131K to $669K), 
              demonstrating sensitivity to B2B pilot execution and subscriber growth rates.
            </li>
            <li>
              <strong>Margin Stability:</strong> Gross margins remain strong across all scenarios 
              (73.7% to 82.8%), reflecting the high-margin subscription model and efficient cost structure.
            </li>
            <li>
              <strong>Cash Position:</strong> All scenarios maintain healthy cash balances above 
              $300K, with conservative case showing 49.7 months of runway and base/aggressive cases 
              achieving positive cash flow.
            </li>
            <li>
              <strong>B2B Impact:</strong> B2B revenue ranges from $90K (conservative) to $550K 
              (aggressive), representing 68% to 82% of total revenue, highlighting the importance 
              of pilot program execution.
            </li>
            <li>
              <strong>Subscriber Growth:</strong> Ending subscribers range from 240 (conservative) 
              to 775 (aggressive), with churn rate and monthly growth being the primary drivers of 
              this variance.
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Tripwires and Financial Guardrails</h2>
        <div className="content-block">
          <p>
            We have established three financial guardrails to ensure operational flexibility and 
            sustainable growth. These thresholds trigger pre-defined actions to protect the business 
            and maintain financial health across all scenarios.
          </p>
        </div>
        
        <Tripwires />

        <div className="content-block" style={{ marginTop: '40px' }}>
          <h3>Threshold Definitions and Scenario Performance</h3>
          <ul className="feature-list">
            <li>
              <strong>Minimum Cash Threshold ($100,000):</strong> Ensures sufficient runway buffer 
              for operational flexibility. All scenarios maintain cash above this threshold, with 
              Conservative case showing $303K minimum (Dec 2026) and Base/Aggressive cases maintaining 
              higher balances throughout the year.
            </li>
            <li>
              <strong>Minimum Gross Margin (60%):</strong> Protects unit economics and ensures 
              sustainable business model. All scenarios exceed this threshold, with margins ranging 
              from 73.7% (Conservative) to 82.8% (Aggressive), demonstrating strong unit economics 
              across all cases.
            </li>
            <li>
              <strong>Maximum Monthly Burn ($50,000):</strong> Aligns with fundraising and runway 
              planning. Conservative scenario shows no violations, while Base and Aggressive scenarios 
              achieve positive cash flow, eliminating burn concerns entirely.
            </li>
            <li>
              <strong>Conservative Scenario:</strong> Maintains all thresholds with $303K minimum 
              cash, 73.7% gross margin, and controlled burn. No violations occur, though margins are 
              lower due to limited B2B traction.
            </li>
            <li>
              <strong>Base Scenario:</strong> Exceeds all thresholds with $470K minimum cash, 81.0% 
              gross margin, and positive cash flow. Demonstrates balanced execution with strong 
              financial health.
            </li>
            <li>
              <strong>Aggressive Scenario:</strong> Strongest performance across all metrics with 
              $572K minimum cash, 82.8% gross margin, and significant positive cash flow. No threshold 
              violations, indicating room for accelerated growth.
            </li>
            <li>
              <strong>Actions if Thresholds Hit:</strong> If minimum cash is breached, slow hiring 
              and reduce marketing spend while prioritizing B2B revenue. If gross margin falls below 
              60%, optimize AI costs, adjust pricing, or improve usage efficiency. If monthly burn 
              exceeds $50K, implement hiring freeze and shift focus to revenue-generating activities.
            </li>
            <li>
              <strong>Risk Mitigation:</strong> The model shows strong resilience across scenarios, 
              with all cases maintaining healthy financial metrics. The primary focus should be on 
              B2B execution to maximize revenue while maintaining cost discipline to protect margins.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default FinancialPlan

