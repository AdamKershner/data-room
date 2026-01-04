import React from 'react'
import './Page.css'

function Appendices() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Appendices</h1>
      </div>

      <section className="page-section">
        <h2>Detailed Sensitivity Outputs</h2>
        <div className="content-block">
          <p>
            Comprehensive sensitivity analysis tables and charts are available in the full 
            financial model. Key outputs include:
          </p>
          <ul className="feature-list">
            <li>One-way sensitivity analyses for all major drivers</li>
            <li>Two-way sensitivity tables showing driver interactions</li>
            <li>Scenario comparison tables (Conservative, Base, Aggressive)</li>
            <li>Tripwire analysis showing threshold violations</li>
            <li>Monthly cash flow projections</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Product Screenshots and Flows</h2>
        <div className="content-block">
          <p>
            Detailed product screenshots, user flows, and feature demonstrations are available 
            upon request. These materials showcase:
          </p>
          <ul className="feature-list">
            <li>Natural language command interface</li>
            <li>Tab and window management features</li>
            <li>Voice command functionality</li>
            <li>Training feature for personalized AI improvement</li>
            <li>Admin and enterprise controls</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Additional Technical Details</h2>
        <div className="content-block">
          <h3>Security</h3>
          <ul className="feature-list">
            <li>End-to-end encryption for sensitive data</li>
            <li>Secure API key management</li>
            <li>Regular security audits and penetration testing</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Privacy</h3>
          <ul className="feature-list">
            <li>User data minimization principles</li>
            <li>Transparent privacy policy</li>
            <li>GDPR and CCPA compliance</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Compliance Roadmap</h3>
          <ul className="feature-list">
            <li>SOC 2 Type II certification (planned)</li>
            <li>Enterprise security standards (ISO 27001 roadmap)</li>
            <li>Industry-specific compliance as needed</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Appendices

