import React from 'react'
import FundingAnalysis from '../components/FundingAnalysis'
import './Page.css'

function Funding() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Funding Needs & Use of Funds</h1>
      </div>

      <section className="page-section">
        <h2>Capital Ask</h2>
        <div className="content-block">
          <p>
            We are raising $750,000 in a pre-seed/seed round to accelerate product development, 
            expand go-to-market efforts, and extend runway through key milestones. This round size 
            provides optimal balance between runway extension and milestone achievement across all 
            execution scenarios.
          </p>
          <p>
            <strong>Current State (January 2, 2026):</strong> We have $1,174 in the bank, 1 paying 
            Oasis customer ($20/month) with 3 expected by next week, and a webapp generating $180 MRR 
            (average over last 3 months) with $88/month in operating costs. Our current revenue mix 
            provides a small positive cash flow buffer, but without funding, we remain constrained 
            in our ability to invest in growth, product development, and team expansion. While we 
            project positive cash flow throughout 2026, operating with minimal capital creates 
            significant operational risk and limits our ability to accelerate toward product-market 
            fit. This raise is critical for scaling operations, building the team, and executing on 
            our B2C and B2B growth strategy.
          </p>
          <p>
            <strong>Structure:</strong> SAFE or Equity with standard terms
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Strategic Investor: Mozilla Ventures</h2>
        <div className="content-block">
          <p>
            Our first pre-seed investor target is <strong>Mozilla Ventures</strong>, representing a 
            strategic alignment that goes beyond traditional venture capital. We have an established 
            connection through a board member relationship and have previously met with Mozilla's 
            product team to discuss browser innovation and AI integration.
          </p>
          <p>
            <strong>Strategic Rationale for Mozilla:</strong> Mozilla is developing their own 
            enterprise browser with AI capabilities, scheduled for release in September 2026. By 
            investing in Oasis Browser, Mozilla Ventures would be diversifying their strategic bets 
            in the enterprise browser market. Rather than placing all resources behind a single 
            product launch, an investment in Oasis provides:
          </p>
          <ul className="feature-list">
            <li>
              <strong>Market Diversification:</strong> Multiple approaches to the enterprise browser 
              opportunity, increasing the probability of success in this emerging category
            </li>
            <li>
              <strong>Technology Insights:</strong> Early access to Oasis's AI-first browser architecture 
              and user experience innovations, which can inform Mozilla's own product development
            </li>
            <li>
              <strong>Market Validation:</strong> Independent validation of the enterprise browser + AI 
              thesis through Oasis's customer traction and product-market fit signals
            </li>
            <li>
              <strong>Strategic Optionality:</strong> If Oasis succeeds, Mozilla benefits from the 
              investment. If Mozilla's own product succeeds, they still own a valuable position in a 
              complementary solution. This dual-track approach reduces risk while maximizing opportunity
            </li>
            <li>
              <strong>Firefox Foundation:</strong> Oasis is built on Firefox, creating natural 
              alignment with Mozilla's mission and technical ecosystem
            </li>
          </ul>
          <p>
            This investment represents a strategic partnership that aligns Mozilla's enterprise browser 
            ambitions with Oasis's rapid execution and customer-focused approach, creating mutual value 
            beyond traditional financial returns.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Funding Analysis & Runway</h2>
        <div className="content-block">
          <p>
            The following analysis shows how different round sizes ($500K, $750K, $1M) impact 
            runway across Conservative, Base, and Aggressive scenarios. This helps determine 
            the appropriate raise size relative to our execution assumptions and milestone targets.
          </p>
        </div>
        
        <FundingAnalysis />

        <div className="content-block" style={{ marginTop: '40px' }}>
          <h3>Why $750K is the Optimal Round Size</h3>
          <p>
            A $750,000 raise provides the optimal balance between runway extension and milestone 
            achievement. In the base scenario, this funding extends runway beyond 2027 while 
            maintaining positive cash flow, eliminating the need for an immediate follow-on round. 
            Even in the conservative scenario with limited B2B traction, $750K provides 142.8 
            months of runway, ensuring we can reach key milestones before the next raise. The 
            aggressive scenario achieves positive cash flow with any round size, but $750K provides 
            sufficient buffer for accelerated growth initiatives.
          </p>

          <h3 style={{ marginTop: '30px' }}>Key Milestones Reachable Before Next Raise</h3>
          <ul className="feature-list">
            <li>
              <strong>Revenue Milestones:</strong> With $750K, we can reach $323K-$669K in annual 
              revenue (Base to Aggressive scenarios), demonstrating strong product-market fit and 
              scalable unit economics. This revenue level provides multiple options for the next 
              round, including profitability or significant growth trajectory.
            </li>
            <li>
              <strong>B2C Subscriber Growth:</strong> Achieve 461-775 paying subscribers (Base to 
              Aggressive), validating the B2C2B model and creating a foundation of individual users 
              who can become champions for enterprise adoption.
            </li>
            <li>
              <strong>B2B Pilot Execution:</strong> Execute 5-10 B2B pilot contracts, demonstrating 
              enterprise value proposition and creating a pipeline for multi-team and org-wide 
              expansion. Successful pilots at this scale validate the B2B model and provide case 
              studies for future sales.
            </li>
            <li>
              <strong>Product Development:</strong> Launch key features including expanded command 
              coverage, Training feature for personalized AI improvement, enterprise-grade security, 
              and integrations with knowledge management and project management platforms. These features 
              support both B2C retention and B2B expansion.
            </li>
            <li>
              <strong>Team Building:</strong> Hire key roles in engineering, sales/BD, and customer 
              success to support growth trajectory. With $750K, we can build the team needed to 
              execute on both B2C and B2B fronts while maintaining runway flexibility.
            </li>
            <li>
              <strong>Market Validation:</strong> Demonstrate strong unit economics (73.7%-82.8% 
              gross margins across scenarios) and positive cash flow in Base/Aggressive cases, 
              positioning the company for a strong Series A or growth round with favorable terms.
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Use of Funds</h2>
        <div className="content-block">
          <h3>Breakdown ($750K Round)</h3>
          <div className="economics-table">
            <div className="economics-row">
              <span className="economics-label">Engineering & Product Development:</span>
              <span className="economics-value">40% ($300K)</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Go-to-Market (Marketing/Sales):</span>
              <span className="economics-value">25% ($187.5K)</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">AI/Infrastructure Costs:</span>
              <span className="economics-value">15% ($112.5K)</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Team & Operations:</span>
              <span className="economics-value">15% ($112.5K)</span>
            </div>
            <div className="economics-row highlight">
              <span className="economics-label">Runway Buffer:</span>
              <span className="economics-value">5% ($37.5K)</span>
            </div>
          </div>

          <h3 style={{ marginTop: '30px' }}>Runway Support</h3>
          <p>
            The $750K raise extends runway beyond 2027 in Base and Aggressive scenarios (with 
            positive cash flow), and provides 142.8 months of runway in the Conservative scenario. 
            This provides sufficient capital to reach key milestones including 461-775 B2C subscribers, 
            5-10 B2B pilot contracts, $323K-$669K in annual revenue, and key product feature launches, 
            positioning the company for a strong follow-on round or path to profitability.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Expected Milestones Unlocked</h2>
        <div className="content-block">
          <p>
            By the end of this funding period (extending through 2027 and beyond in Base/Aggressive 
            scenarios), we expect to have achieved:
          </p>
          <ul className="feature-list">
            <li>
              <strong>Subscribers:</strong> 461-775 B2C subscribers (Base to Aggressive) with strong 
              retention, validating the B2C2B model and creating a foundation for enterprise adoption
            </li>
            <li>
              <strong>Pilots:</strong> 5-10 B2B pilot contracts with conversion pipeline, demonstrating 
              enterprise value proposition and creating case studies for expansion
            </li>
            <li>
              <strong>Product Depth:</strong> Expanded command coverage, Training feature for 
              personalized AI improvement, enterprise-grade security, and key integrations launched 
              and validated
            </li>
            <li>
              <strong>Revenue:</strong> $323K-$669K annual revenue (Base to Aggressive) with 73.7%-82.8% 
              gross margins, demonstrating strong unit economics and path to profitability
            </li>
            <li>
              <strong>Team:</strong> Key hires in engineering, sales/BD, and customer success in place 
              to support next phase of growth
            </li>
            <li>
              <strong>Financial Health:</strong> Positive cash flow in Base/Aggressive scenarios, 
              positioning for strong Series A or growth round with favorable terms
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Funding

