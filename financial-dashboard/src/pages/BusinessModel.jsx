import React from 'react'
import './Page.css'

function BusinessModel() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Business Model & Unit Economics</h1>
      </div>

      <section className="page-section">
        <h2>B2C Subscription Model</h2>
        <div className="content-block">
          <h3>Pricing Structure</h3>
          <ul className="feature-list">
            <li><strong>Price:</strong> $20/month per subscriber</li>
            <li><strong>Included Usage:</strong> 1,500 text prompts or 150 voice-only prompts per month</li>
            <li><strong>Net Revenue:</strong> ~$19.01 after Stripe/processing fees (4.95%)</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Economics Per User</h3>
          <div className="economics-table">
            <div className="economics-row">
              <span className="economics-label">Gross Cash Inflow (after Stripe):</span>
              <span className="economics-value">$19.01</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Estimated AI + Infra Cost (avg user):</span>
              <span className="economics-value">~$3.00</span>
            </div>
            <div className="economics-row highlight">
              <span className="economics-label">Target Gross Margin:</span>
              <span className="economics-value">~80% (~$16 retained/month)</span>
            </div>
          </div>

          <h3 style={{ marginTop: '30px' }}>Usage Assumptions and Margin Impact</h3>
          <p>
            <strong>Average User (100% of allowance):</strong> Maintains target 80% gross margin
          </p>
          <p>
            <strong>Heavy User (150% of allowance):</strong> Higher API costs reduce margin to ~70-75%
          </p>
          <p>
            <strong>Light User (50% of allowance):</strong> Lower costs improve margin to ~85-90%
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>B2B Pilot Model</h2>
        <div className="content-block">
          <h3>Contract Structure</h3>
          <ul className="feature-list">
            <li><strong>Starting Price:</strong> $50,000/year per pilot contract</li>
            <li><strong>Flexible Infrastructure:</strong> Clients may pay their own Gemini/Deepgram/AWS bills, or we bundle usage</li>
            <li><strong>Scalable Pricing:</strong> Based on team size and usage requirements</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Labor-Based Cost Structure</h3>
          <div className="economics-table">
            <div className="economics-row">
              <span className="economics-label">Developer Hourly Rate:</span>
              <span className="economics-value">$40/hour</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Included Hours (per pilot/year):</span>
              <span className="economics-value">~250 hours</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Target Margin:</span>
              <span className="economics-value">80%</span>
            </div>
            <div className="economics-row highlight">
              <span className="economics-label">Included Cost:</span>
              <span className="economics-value">$10,000 (250 hrs × $40/hr)</span>
            </div>
          </div>

          <h3 style={{ marginTop: '30px' }}>Overage Handling</h3>
          <p>
            Additional scope beyond included hours is either narrowed to fit within the contract 
            or billed separately at the same hourly rate. This ensures we maintain margins while 
            providing flexibility for client needs.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Revenue Mix and Strategy</h2>
        <div className="content-block">
          <p>
            <strong>2026 Projection:</strong> B2C subscriptions provide the foundation with 
            recurring revenue and high margins, while B2B pilots offer larger contract values 
            and enterprise relationships.
          </p>
          <p>
            <strong>B2C2B Rationale:</strong> The grassroots individual adoption feeds team and 
            enterprise deals. As users experience productivity gains, they become champions within 
            their organizations, creating natural pipeline for B2B pilots and expansion.
          </p>
          <p>
            <strong>Long-term Vision:</strong> B2C provides scale and product-market fit validation, 
            while B2B offers higher contract values and deeper enterprise relationships. The two 
            models reinforce each other through the B2C2B motion.
          </p>
        </div>
      </section>
    </div>
  )
}

export default BusinessModel



