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
            on the <a href="https://kahana.co" target="_blank" rel="noopener noreferrer">website</a> to measure and optimize conversion rates, enabling data-driven growth decisions.
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

          <h3 style={{ marginTop: '30px' }}>B2B Champions</h3>
          <p>
            We are building relationships with key champions who can help drive B2B pilot adoption 
            within their organizations. These champions understand the value of Oasis Browser and 
            can advocate for pilot programs and broader deployment.
          </p>
          <ul className="feature-list">
            <li>
              <strong>Jonathan Gans (Former CEO of Kahana):</strong> Will become a champion at 
              Angellist, leveraging his network and understanding of the product to drive adoption 
              within the organization.
            </li>
            <li>
              <strong>Private Equity and VC Firm Prospects:</strong> We have prospects at private 
              equity and VC firms who are interested in trying the browser. These early adopters 
              could become champions for B2B pilots, as they understand the productivity challenges 
              faced by knowledge workers and can see the value proposition for their portfolio 
              companies and internal teams.
            </li>
            <li>
              <strong>Consulting Firms:</strong> We have contacts at Deloitte and McKinsey who are 
              interested in exploring Oasis Browser for their teams. These consulting firms represent 
              ideal B2B pilot opportunities, as their knowledge workers heavily rely on browser-based 
              research, client work, and information management. Champions at these firms can help 
              drive pilot adoption and demonstrate ROI for knowledge-intensive workflows.
            </li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Champion Discovery Strategy</h3>
          <p>
            We are actively pursuing multiple channels to discover and connect with potential B2B 
            champions:
          </p>
          <ul className="feature-list">
            <li>
              <strong>Alumni Networks:</strong> We have discovered that connecting with alumni networks 
              can lead to meeting prospects and champions. These networks provide access to professionals 
              who may be in decision-making roles at target companies and can facilitate introductions 
              and pilot opportunities.
            </li>
            <li>
              <strong>In-Person Networking Events and Conferences:</strong> We will identify and attend 
              relevant in-person networking events and conferences where we can meet prospects face-to-face. 
              These events provide opportunities to demonstrate the product, build relationships, and 
              identify potential champions who could drive B2B pilot adoption within their organizations.
            </li>
          </ul>
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
            By integrating with the tools knowledge workers already use, we create an elegant, 
            AI-powered environment that reduces friction and cognitive load across the entire 
            workday.
          </p>
        </div>
      </section>
    </div>
    )
}

export default GoToMarket

