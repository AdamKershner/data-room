import React from 'react'
import './Page.css'

function GoToMarket() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Go-to-Market & Growth</h1>
      </div>

      <section className="page-section">
        <h2>B2C Acquisition</h2>
        <div className="content-block">
          <h3>Marketing Foundation</h3>
          <p>
            We are not starting from scratch on marketing. Last quarter, we achieved <strong>818K impressions 
            in Google Search Console</strong>, representing an <strong>87% increase</strong> and demonstrating 
            strong organic traction. Our marketing team is implementing Google tags and attribution mechanisms 
            on the website to measure and optimize conversion rates, enabling data-driven growth decisions.
          </p>

          <h3 style={{ marginTop: '30px' }}>Marketing Strategy Evolution</h3>
          <p>
            Our marketing approach evolves in two phases:
          </p>
          <ul className="feature-list">
            <li>
              <strong>Phase 1: Product-Led Growth (Current → Q1-Q2 2026):</strong> As product quality 
              improves (measured by NPS increases), we will create YouTube videos highlighting use cases 
              to boost organic traffic and signups. This builds on our existing 818K impressions and 
              leverages conversion optimization through Google tags and attribution tracking.
            </li>
            <li>
              <strong>Phase 2: Paid Acquisition (Post-Revenue Threshold):</strong> Once we achieve a 
              revenue threshold (either through bootstrapping or funding), we will invest in paid digital 
              ads using ROAS (Return on Ad Spend) targets, assuming LTV is stable and validated. This allows 
              us to scale acquisition with proven unit economics.
            </li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Target Channels</h3>
          <ul className="feature-list">
            <li><strong>Product Hunt:</strong> Launch and community engagement</li>
            <li><strong>Developer Communities:</strong> Hacker News, Reddit (r/productivity, r/webdev), Dev.to</li>
            <li><strong>Content Marketing:</strong> Blog posts, tutorials, productivity tips</li>
            <li><strong>YouTube:</strong> Use case videos highlighting productivity workflows (as NPS improves)</li>
            <li><strong>Browser-Related Forums:</strong> Firefox community, browser extension forums</li>
            <li><strong>Influencers:</strong> Productivity YouTubers, tech Twitter, developer advocates</li>
            <li><strong>Paid Digital Ads:</strong> Google Ads, social media (once revenue threshold and LTV validated)</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Top-of-Funnel Strategy</h3>
          <ul className="feature-list">
            <li>Free trials with full feature access</li>
            <li>Time-boxed full-feature trials (14-30 days)</li>
            <li>Freemium option with limited usage for evaluation</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Conversion and Retention</h3>
          <ul className="feature-list">
            <li>Onboarding sequences that demonstrate key workflows</li>
            <li>Usage nudges highlighting productivity gains</li>
            <li>Targeted "power workflows" education and tutorials</li>
            <li>Community engagement and user success stories</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>B2B Pilots and Sales</h2>
        <div className="content-block">
          <h3>Ideal Customer Profile (ICP)</h3>
          <ul className="feature-list">
            <li><strong>Company Size:</strong> 50-500 employees (knowledge-heavy organizations)</li>
            <li><strong>Verticals:</strong> Software, consulting, research, professional services</li>
            <li><strong>Key Roles:</strong> Teams with multi-tab workflows, remote/distributed teams</li>
            <li><strong>Pain Points:</strong> Context switching, productivity loss, browser management overhead</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Pilot Design</h3>
          <ul className="feature-list">
            <li><strong>Scope:</strong> 3-6 month pilot with defined success metrics</li>
            <li><strong>Success Metrics:</strong> Time saved per user, reduction in context switches, user satisfaction scores</li>
            <li><strong>Support:</strong> Included developer/support hours (250 hrs/year) for customization and integration</li>
            <li><strong>Timeline:</strong> Phased rollout with regular check-ins and optimization</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Expansion Motion</h3>
          <p>
            Successful pilots convert to multi-team or org-wide deals with scaled pricing. 
            Expansion is driven by demonstrated ROI, user adoption metrics, and organic 
            word-of-mouth within the organization.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Partnerships and Ecosystem</h2>
        <div className="content-block">
          <h3>Potential Integrations</h3>
          <ul className="feature-list">
            <li>Knowledge management tools (Notion, Obsidian, Roam)</li>
            <li>Project management platforms (Linear, Asana, Jira)</li>
            <li>Communication apps (Slack, Discord, Teams)</li>
            <li>Developer tools (GitHub, GitLab, VS Code)</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Long-Term Vision</h3>
          <p>
            Oasis Browser aims to become the "work operating system" in the browser—the central 
            interface where knowledge workers manage all their information, projects, and workflows. 
            By integrating with the tools knowledge workers already use, we create a seamless, 
            AI-powered environment that reduces friction and cognitive load across the entire 
            workday.
          </p>
        </div>
      </section>
    </div>
    )
}

export default GoToMarket

