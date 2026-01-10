import React from 'react'
import KeyHighlights from '../components/KeyHighlights'
import FinancialSummary from '../components/FinancialSummary'
import welcomeImage from '../images/Welcome to Oasis(1).png'
import commandAnalyticsImage from '../images/Command Analytics.png'
import './Page.css'

function ExecutiveSummary() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Executive Summary</h1>
      </div>

      <section className="page-section">
        <h2>Business Overview</h2>
        <div className="content-block">
          <p>
            Oasis Browser is an AI-assisted desktop browser built on Firefox that dramatically 
            reduces context switching and cognitive load for knowledge workers. Through natural 
            language commands—both text and voice—users can control their browser environment 
            with simple instructions like "open new window," "create tab group," "add tab to 
            tab group," "close all tabs," or "open tabs 3 and 4 in split view."
          </p>
          <div style={{ margin: '30px 0', textAlign: 'center' }}>
            <img 
              src={welcomeImage} 
              alt="Oasis Browser welcome screen" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
          <p>
            <strong>Problem we solve:</strong> Knowledge workers are drowning in browser tabs, 
            constant context switches, and manual window management. This fragmentation reduces 
            productivity, increases cognitive load, and makes it difficult to maintain focus 
            on complex tasks.
          </p>
          <div style={{ margin: '30px 0', textAlign: 'center' }}>
            <img 
              src={commandAnalyticsImage} 
              alt="Oasis Browser command analytics dashboard" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Value Proposition</h2>
        <div className="content-block">
          <p>
            Natural-language commands and voice control translate directly into measurable time 
            savings, improved focus, and higher productivity for both individuals and teams. 
            By eliminating the friction of manual browser management, Oasis enables knowledge 
            workers to maintain flow state and reduce the mental overhead of juggling multiple 
            projects, research threads, and information sources.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Business Model Snapshot</h2>
        <div className="content-block">
          <ul className="feature-list">
            <li><strong>B2C2B Model:</strong> Individual subscriptions feed team and enterprise adoption</li>
            <li><strong>B2C Pricing:</strong> $20/month subscription with ~80% target gross margins</li>
            <li><strong>B2B Pilots:</strong> Starting at $50,000/year with scalable pricing</li>
            <li><strong>Unit Economics:</strong> High-margin subscription model with efficient B2B delivery</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>2026 High-Level Goals</h2>
        <div className="content-block">
          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-value">461</div>
              <div className="goal-label">B2C Subscribers</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">5</div>
              <div className="goal-label">B2B Pilot Contracts</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">$323K</div>
              <div className="goal-label">Total Revenue</div>
            </div>
            <div className="goal-card">
              <div className="goal-value">81%</div>
              <div className="goal-label">Gross Margin</div>
            </div>
          </div>
          <p className="goal-description">
            Our plan focuses on grassroots B2C adoption through developer and knowledge worker 
            communities, complemented by strategic B2B pilot programs that demonstrate ROI for 
            teams and organizations.
          </p>
        </div>
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

      <KeyHighlights />
      <FinancialSummary />
    </div>
  )
}

export default ExecutiveSummary



