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
            Our base-case scenario projects strong growth with healthy unit economics based on balanced 
            execution. The model assumes organic subscriber growth from our current base, moderate churn, 
            and strategic B2B pilot execution.
          </p>
          <p>
            <strong>Current State (Jan 2026):</strong> Starting with $698 cash and 3 paying subscribers. 
            We project growth through product-led adoption, content marketing, and strategic B2B outreach.
          </p>
          <p>
            <strong>2026 Goals:</strong>
          </p>
          <ul className="feature-list">
            <li>461 B2C subscribers by year-end 2026</li>
            <li>5 B2B pilot contracts at $50k/year average</li>
            <li>$323,188 total revenue</li>
            <li>81.0% average gross margin</li>
            <li>Positive cash flow trajectory</li>
          </ul>
        </div>
        <KeyHighlights />
        <FinancialSummary />
      </section>

      <section className="page-section">
        <h2>Operating Costs & Burn Rate</h2>
        <div className="content-block">
          <h3>Average Monthly Burn - Tools & Platform Subscriptions</h3>
          <p>
            The following monthly costs are included in our average monthly burn for subscriptions to tools and platforms:
          </p>
          <ul className="feature-list">
            <li><strong>G-Suite:</strong> $35.00/month</li>
            <li><strong>Google Cloud (Firebase storage & database reads):</strong> $10.00/month</li>
            <li><strong>GitHub:</strong> $8.00/month</li>
            <li><strong>Heroku:</strong> $20.00/month</li>
            <li><strong>Figma:</strong> $61.50/month</li>
            <li><strong>AWS:</strong> $0/month Jan-Apr 2026 (using free credits), $15.00/month starting May 2026 (EC2 and Lambda functions)</li>
            <li><strong>Gemini API:</strong> Usage-based pricing (Pay-as-you-go tier). Primarily billed per 1 million tokens for input/output. Models like Gemini 2.5 Pro and Flash have different rates, with tiered pricing for larger contexts. Free tiers available for testing through Google AI Studio with usage limits. Pricing varies between Google AI Studio and Vertex AI, with additional costs for advanced features like grounding and context caching. Reference: <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer">Gemini API Pricing</a></li>
            <li><strong>Deepgram API:</strong> Usage-based pricing varying by model. Speech-to-text models: Flux and Nova-3 (Monolingual) at $0.0077/min, Nova-3 (Multilingual) at $0.0092/min, Nova-1 & 2 at $0.0058/min, Enhanced at $0.0165/min, Base at $0.0145/min. Voice Agent API: Standard tier at $0.0800/min (pay-as-you-go). Billed per second for fairness. Free tier available with $200 credit. Custom enterprise pricing and volume discounts available. Reference: <a href="https://deepgram.com/pricing" target="_blank" rel="noopener noreferrer">Deepgram Pricing</a></li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Oasis AI Assistant API Costs</h3>
          <p>
            Gemini and Deepgram APIs power the Oasis AI assistant. Costs are incurred whenever the assistant processes a command. Based on current usage patterns and API pricing:
          </p>
          <ul className="feature-list">
            <li><strong>Text command:</strong> $0.002 per request (all-in cost including AWS, Gemini, and Deepgram)</li>
            <li><strong>Voice command:</strong> $0.02 per request (all-in cost including AWS, Gemini, and Deepgram)</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            <strong>Note:</strong> These are example ballpark numbers based on current usage patterns. Actual costs should be calculated from AWS, Gemini, and Deepgram invoices to determine the true average cost per request.
          </p>

          <h3 style={{ marginTop: '30px' }}>Capacity Planning with $3/month Budget</h3>
          <p>
            With the example unit costs above, a $3/month budget for AI assistant usage would support:
          </p>
          <ul className="feature-list">
            <li><strong>Text-only usage:</strong> ~1,500 text commands per month ($3 / $0.002 = 1,500 commands)</li>
            <li><strong>Voice-only usage:</strong> ~150 voice commands per month ($3 / $0.02 = 150 commands)</li>
            <li><strong>Mixed usage:</strong> A combination where each voice command uses approximately 10x the budget of a text command</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            This capacity structure provides reasonable limits for users while maintaining cost control for the platform.
          </p>
        </div>
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
            The following scenarios represent different execution outcomes for 2026 based on organic 
            growth from our current state. All scenarios start from our current position and project 
            various growth trajectories based on execution quality and market response.
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

