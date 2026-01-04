import React from 'react'
import KeyHighlights from '../components/KeyHighlights'
import FinancialSummary from '../components/FinancialSummary'
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
          <p>
            <strong>Problem we solve:</strong> Knowledge workers are drowning in browser tabs, 
            constant context switches, and manual window management. This fragmentation reduces 
            productivity, increases cognitive load, and makes it difficult to maintain focus 
            on complex tasks.
          </p>
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

      <KeyHighlights />
      <FinancialSummary />
    </div>
  )
}

export default ExecutiveSummary



