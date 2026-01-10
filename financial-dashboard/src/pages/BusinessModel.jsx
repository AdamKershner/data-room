import React from 'react'
import commandAnalyticsImage from '../images/Command Analytics.png'
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
          <div style={{ margin: '0 0 30px 0', textAlign: 'center' }}>
            <img 
              src={commandAnalyticsImage} 
              alt="Oasis Browser command analytics dashboard showing usage metrics" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
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
          <h3>How Pilot Contracts Work</h3>
          <p>
            Our B2B pilot model is designed to deliver custom development on Oasis Browser while 
            maintaining healthy margins. Here's how it works:
          </p>

          <div className="economics-table" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div className="economics-row highlight">
              <span className="economics-label">Target Pilot Contract Value:</span>
              <span className="economics-value">$50,000/year</span>
            </div>
            <div className="economics-row highlight">
              <span className="economics-label">Target Gross Margin:</span>
              <span className="economics-value">80%</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Allocated for Development Costs (20%):</span>
              <span className="economics-value">$10,000</span>
            </div>
            <div className="economics-row">
              <span className="economics-label">Developer Hourly Rate:</span>
              <span className="economics-value">$40/hour</span>
            </div>
            <div className="economics-row highlight">
              <span className="economics-label">Included Development Hours:</span>
              <span className="economics-value">250 hours/year ($10,000 ÷ $40/hr)</span>
            </div>
          </div>

          <p>
            <strong>What this means:</strong> For a $50,000 pilot contract, we target 80% gross margins, 
            which means $40,000 is retained as profit and $10,000 is allocated for developer costs. 
            At $40/hour, this provides the client with 250 hours of custom development work on Oasis 
            Browser per year. This translates to approximately 250 story points, which is how we measure 
            time and complexity involved with new feature development and custom development work.
          </p>

          <h3 style={{ marginTop: '30px' }}>Scope and Expansion</h3>
          <p>
            <strong>Within Scope:</strong> The 250 included hours cover custom development, integration 
            work, and technical support as part of the base pilot contract.
          </p>
          <p>
            <strong>Additional Requirements:</strong> If a client needs more than 250 hours of development 
            work, we would negotiate a higher contract value to maintain our 80% margin target. For example, 
            a client requiring 500 hours would warrant a $100,000 contract ($40,000 in costs at $40/hr, 
            maintaining 80% margins on the total contract value).
          </p>
          <p>
            <strong>Flexible Infrastructure:</strong> Clients may pay their own Gemini/Deepgram/AWS bills, 
            or we can bundle usage into the contract. This flexibility allows us to structure deals that 
            work best for each client's needs while maintaining our margin targets.
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



