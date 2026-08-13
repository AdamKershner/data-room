import React from 'react'
import './Page.css'
import './LinkedInGuide.css'

const ICP_ROLES = [
  'Enterprise Architect',
  'Enterprise Solutions Architect',
  'Director of Enterprise Architecture',
  'VP of Enterprise Architecture',
  'Chief Architect',
  'Head of Architecture',
  'Principal Solutions Architect',
  'IT Architect',
  'Systems Architect',
  'Solutions Director',
  'Director of Solutions Architecture'
]

function LinkedInConnectionsGuide() {
  return (
    <div className="page" id="linkedin-connections-guide">
      <div className="page-header">
        <h1>LinkedIn Connections Guide</h1>
        <p className="page-subtitle">
          Look into our networks to find people we have mutual connections with who hold one of our ICP roles. This is about discovery—finding prospects already in our extended network.
        </p>
      </div>

      <section className="page-section linkedin-connections-goals-section">
        <h2>Goals &amp; Purpose</h2>
        <div className="content-block">
          <p><strong>Why we&apos;re doing this:</strong></p>
          <ul className="linkedin-connections-goals-list">
            <li><strong>Discover ICP prospects in our networks:</strong> Look into our extended networks (2nd connections) to find people who hold one of our ICP roles—Enterprise Solutions Architect and equivalent titles. They&apos;re already one degree away; we just need to find them.</li>
            <li><strong>Build a prospect database:</strong> Log who we find so we can strategize, coordinate, and avoid multiple team members reaching out to the same person.</li>
            <li><strong>Warm pipeline:</strong> When we find and connect with these prospects, they&apos;re in our network for launches and campaigns.</li>
          </ul>
          <p>Our current ICP is <strong>Enterprise Solutions Architect</strong> and functionally equivalent roles—people who evaluate and adopt enterprise technology. We&apos;re looking into our networks to <strong>find</strong> people we have mutual connections with who hold one of these titles: {ICP_ROLES.join(', ')}. Discovery first; outreach comes after we&apos;ve identified and logged them.</p>
        </div>
      </section>

      <section className="page-section linkedin-connections-video-section">
        <h2>Walkthrough Video</h2>
        <p className="linkedin-connections-video-intro">Watch the full process from start to finish:</p>
        <div className="linkedin-connections-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/0vFR2qrYVcM"
            title="LinkedIn Connections Guide walkthrough"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="linkedin-connections-video"
          />
        </div>
      </section>

      <section className="page-section linkedin-connections-success-section">
        <h2>Success Criteria</h2>
        <div className="linkedin-connections-success-grid">
          <div className="linkedin-connections-success-instructions">
            <p><strong>This task is done when</strong> you have updated the <a href="https://docs.google.com/spreadsheets/d/17YPQ9mUpl5uUdI3q1E25qv4g-GKkJxnXWC_T07GV4Pg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">ICP Prospect Tracker</a> (Google Sheet) with LinkedIn profiles and other demographic information.</p>
            <p><strong>Instructions:</strong></p>
            <ol className="linkedin-connections-instructions">
              <li>Log in to <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">LinkedIn</a>.</li>
              <li>Search for each of the titles listed below one by one using the <strong>People</strong> search.</li>
              <li>Include the location filters for: United States, United Kingdom, Canada, Australia, New Zealand, France, Spain, Germany, Netherlands, Hong Kong, Singapore.</li>
              <li>Based on the results, go page by page. Whenever you see someone with the title (or similar title) who is also a <strong>2nd</strong> or <strong>1st</strong> connection, add them to the Google Sheet.</li>
            </ol>
            <div className="linkedin-connections-example-note">
              <p><strong>Example note to include with a connection request (tweak and tailor as needed):</strong></p>
              <p>
                “I’m working on building an enterprise browser that helps teams stay secure and productive online.
                I noticed your background in enterprise architecture and thought it would be great to connect and exchange ideas.”
              </p>
            </div>
          </div>
          <div className="linkedin-connections-success-screenshot">
            <img
              src="/images/linkedin-search-enterprise-solutions-architect.png"
              alt="LinkedIn search results for enterprise solutions architect showing People filter and 2nd/3rd+ connection levels"
              className="linkedin-connections-screenshot-large"
            />
            <p className="linkedin-connections-screenshot-caption">Example: Search for ICP roles, use the People filter, and look for 2nd-degree connections.</p>
          </div>
        </div>
      </section>

      <div className="linkedin-connections-tracker-callout">
        <h3>ICP Prospect Tracker</h3>
        <p>When you find prospects in your network (people with mutual connections who have one of our ICP roles), log them in our shared tracker. Add their name, company, LinkedIn profile, your name, and connection degree (1st, 2nd, 3rd+). This creates a database so we can strategize who should reach out and avoid multiple Kahana team members contacting the same person.</p>
        <a
          href="https://docs.google.com/spreadsheets/d/17YPQ9mUpl5uUdI3q1E25qv4g-GKkJxnXWC_T07GV4Pg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-connections-tracker-button"
        >
          Open ICP Prospect Tracker (Google Sheet)
        </a>
      </div>

      <div className="linkedin-algorithm-callout" style={{ marginTop: '24px' }}>
        <p><strong>Why 2nd connections?</strong> These are people already in our extended network—we share a mutual connection. They&apos;re discoverable, warm, and when we do reach out, more likely to accept.</p>
      </div>

      <section className="page-section">
        <h2>1. ICP Roles to Look For</h2>
        <div className="content-block">
          <p>
            Look for people in our networks who hold one of these roles. They are functionally identical to <strong>Enterprise Solutions Architect</strong>—our ideal enterprise buyers:
          </p>
          <ul className="linkedin-category-checklist" style={{ marginTop: '16px' }}>
            {ICP_ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="linkedin-questions-note">
        <p><strong>Questions?</strong> Reach out to Dhruv Patel or Adam Kershner.</p>
      </div>
    </div>
  )
}

export default LinkedInConnectionsGuide
