import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './LinkedInGuide.css'

function LinkedInGuide() {
  return (
    <div className="page" id="linkedin-guide">
      <div className="page-header">
        <h1>LinkedIn Guide & Best Practices</h1>
        <p className="page-subtitle">
          LinkedIn is a significant part of Kahana's growth and go-to-market strategy. Your weekly participation is mandatory. This page explains in detail what is expected.
        </p>
      </div>

      <p className="linkedin-intro">
        As a team member at Kahana, you will now be expected to participate in our LinkedIn initiatives. To do that, you should read this page and then fill out the form at the bottom to select your category.
      </p>

      <div className="linkedin-mandatory-callout">
        <p><strong>Mandatory participation.</strong> You will choose Category 1 or Category 2, and based on that category, you will be expected to handle the responsibilities for it. Everyone at Kahana participates. New team members should complete the <Link to="/onboarding/linkedin" className="onboarding-inline-link">LinkedIn onboarding step</Link> as part of their first week.</p>
      </div>

      <div className="linkedin-guide-warning">
        <p><strong>How we track progress:</strong> Managers monitor participation to ensure we reach our goals for reactions and comments. If you do not meet the expectations for your category, you will receive a warning via Slack or email.</p>
        <p>Hitting our goals is paramount—or else, what are we even doing?</p>
      </div>

      <section className="page-section">
        <h2>1. Choose Your Category</h2>
        <div className="content-block">
          <p>
            Join <strong>#linkedin-focus-group</strong> on Slack. This is the place to access the most recent LinkedIn posts from team members so you can engage on them. It's also where you share your own posts to get more engagement from the team.
          </p>
          <div className="linkedin-strategy-cards">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">👥</div>
              <h4>Category 1 – Core Support Team</h4>
              <div className="linkedin-time-badge">
                ~15 min/day · ~1–1.5 hrs/week
              </div>
              <div className="linkedin-category-callout">
                <p>When you engage quickly on teammates' posts, everyone's content gets better reach. You're part of the engine that makes Kahana's LinkedIn strategy work.</p>
              </div>
              <p><strong>Weekly checklist:</strong></p>
              <ul className="linkedin-category-checklist">
                <li>Comment and react to every post link shared in #linkedin-focus-group</li>
                <li>Engage as soon as possible (early engagement matters)</li>
                <li>Create a 15-minute calendar event for each business day to check #linkedin-focus-group and react/comment on posts</li>
              </ul>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">🚀</div>
              <h4>Category 2 – Growth Commitment Group</h4>
              <div className="linkedin-time-badge">
                ~30–45 min/day · ~3–4 hrs/week
              </div>
              <div className="linkedin-category-callout">
                <p>You build your personal brand while driving Kahana's growth. Structured posting + early engagement = stronger algorithm push for both you and the team.</p>
              </div>
              <p><strong>Weekly checklist:</strong></p>
              <ul className="linkedin-category-checklist">
                <li>Comment and react to every post link shared in #linkedin-focus-group</li>
                <li>Engage as soon as possible (early engagement matters)</li>
                <li>Create a 15-minute calendar event for each business day to check #linkedin-focus-group and react/comment on posts</li>
                <li>3+ posts per week: share your post link in the group for each (3 posts = 3 links)</li>
                <li>Send connection requests regularly</li>
              </ul>
              <p className="linkedin-strategy-tip">We highly encourage opting into Category 2: a strong LinkedIn profile in today's job market genuinely separates you from the crowd. Think of it as committing to a productive habit.</p>
            </div>
          </div>
          <div className="linkedin-category-callout" style={{ marginTop: '20px' }}>
            <p>📅 <strong>Daily engagement tip:</strong> Block off 15 minutes per day to engage on LinkedIn—like and comment on your network's posts. This keeps your network warm and improves algorithmic reach for your own content.</p>
          </div>
          <div className="linkedin-form-embed">
            <iframe
              data-tally-embed
              src="https://tally.so/embed/yPlol0"
              width="100%"
              height="550"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="LinkedIn Category"
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>2. Rationale and Best Practices (how we came up with this strategy)</h2>
        <div className="content-block linkedin-rationale-columns">
          <div className="linkedin-rationale-text">
            <p>
              Dhruv Patel started managing the LinkedIn profile of one of his close friends, <a href="https://www.linkedin.com/in/devarshi-prajapati/" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">Devarshi Prajapati</a>, from zero connections. From sending the first connection request to building it to where it is today, everything was done from scratch—and it has been less than 6 months since the first post. She began to get 100+ reactions on posts consistently.
            </p>
            <p>
              Go through that account and use it as a reference to get more context regarding this group's focus. We derive our overall LinkedIn framework and strategy from these learnings. This strategy was created and executed successfully by Dhruv Patel—so we know it's proven. We take the fundamentals that worked and adapt them to Kahana as an organization, improving both our individual presences and the overall brand.
            </p>
          </div>
          <div className="linkedin-rationale-example">
            <a href="https://www.linkedin.com/in/devarshi-prajapati/" target="_blank" rel="noopener noreferrer">
              <img src="/images/devarshi-linkedin-post.png" alt="Devarshi Prajapati LinkedIn post example with 115 reactions" className="linkedin-example-image" />
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>3. LinkedIn Growth Playbook</h2>
        <div className="content-block">
          <p>
            The Growth Playbook is the core strategy—especially for Category 2, but useful for everyone to understand how we grow together. We are <strong>not</strong> relying on viral posts for growth. Instead we focus on making posts perform well through early engagement—and we do it as a team.
          </p>
          <h3>Core Strategy</h3>
          <p>LinkedIn growth has two parts:</p>
          <div className="linkedin-strategy-cards">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">✍️</div>
              <h4>Writing Good Posts (Not Perfect Posts)</h4>
              <p>We are not trying to write viral posts every time. Focus on writing <em>interesting</em> posts—interesting enough that someone won't scroll immediately. Perfection is NOT the strategy.</p>
              <p className="linkedin-strategy-tip"><strong>Tip:</strong> Use your weekly <Link to="/onboarding/time-log" className="onboarding-inline-link">time log</Link> entry as the foundation—run it through AI to turn it into a post, then add screenshots or a Carousel (PDF) of your work.</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">💬</div>
              <h4>Engagement</h4>
              <p>This is the main part. The rule is simple: the more active you are on LinkedIn, the better your results. That means commenting daily, sending connection requests, building relationships, and creating interaction circles.</p>
            </div>
          </div>
          <div className="linkedin-algorithm-callout">
            <p>If your post gets strong engagement in the first 1–2 hours and consistent comments in the first 24 hours, the algorithm pushes it further. <strong>That is exactly what we leverage as a team.</strong></p>
            <div className="linkedin-algorithm-benefits">
              <p><strong>For Kahana:</strong> More reach means more visibility for our product, our brand, and our team. Every post that goes further builds credibility and awareness—helping with hiring, partnerships, and growth.</p>
              <p><strong>For you:</strong> A strong LinkedIn profile separates you in today's job market. When your posts perform well, you build your personal brand, expand your network, and create opportunities.</p>
            </div>
          </div>
          <h3>The Power of Our Group</h3>
          <div className="linkedin-strategy-cards">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">📈</div>
              <h4>Comments + Likes From Each Other</h4>
              <p>Within our group, we already have a foundation for comments and likes (from each other!)—let's take advantage of it. Currently we have 40+ active team members at Kahana.</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">🤝</div>
              <h4>Write, Share, Support</h4>
              <p>Write interesting posts, share the link in #linkedin-focus-group, and let the team support. Do the same for others.</p>
            </div>
          </div>
          <h3>Weekly Action Checklist (Category 2 – Mandatory)</h3>
          <div className="linkedin-checklist-grid">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">📝</div>
              <h4>3+ Posts per Week</h4>
              <p>Ideally 3 posts per week (or more).</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">💬</div>
              <h4>50 Comments per Week</h4>
              <p>Comment on 50 relevant posts per week. Make it a rule, otherwise you'll forget. Go on your feed or check out posts from your own connections and network (friends, family, colleagues) and comment naturally on them to support them or add value. Comment meaningfully, not "Great post." (ChatGPT can help with prompts, but use a good one.)</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">🔗</div>
              <h4>Connection Requests</h4>
              <p>No fixed number required, but be consistent. Best case: hit the LinkedIn connection request limit every week.</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">📤</div>
              <h4>Share Your Post Link</h4>
              <p>Whenever you post, immediately copy the link and share it in #linkedin-focus-group. If you don't share the link, it won't count, we can't track consistency, and the whole purpose of the group fails. <strong>3 posts per week = 3 links shared per week.</strong></p>
            </div>
          </div>
          <h3>Time Allocation Recommendation</h3>
          <div className="linkedin-strategy-cards">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">✍️</div>
              <h4>50% Writing</h4>
              <p>50% of your LinkedIn time → Writing posts</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">💬</div>
              <h4>50% Engaging</h4>
              <p>50% of your LinkedIn time → Commenting + engaging</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>4. Posting Expectations</h2>
        <div className="content-block">
          <p>
            We encourage you to post regularly about your work at Kahana. Content should be authentic, valuable, and aligned with our brand.
          </p>
          <div className="linkedin-strategy-cards">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">📝</div>
              <h4>What to Post</h4>
              <ul className="linkedin-category-checklist">
                <li>Insights and learnings from your work</li>
                <li>Reshares of Kahana <a href="https://kahana.co/blog" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">blog</a> and <a href="https://www.youtube.com/@kahanaHQ" target="_blank" rel="noopener noreferrer" className="onboarding-inline-link">YouTube</a> videos</li>
                <li>Polls and surveys that generate insights for our product</li>
              </ul>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">📋</div>
              <h4>Use Your Time Log as Post Foundation</h4>
              <p>Use the description you submit for each week's <Link to="/onboarding/time-log" className="onboarding-inline-link">time log</Link> as the foundation. You're already documenting your work—turn it into content.</p>
              <ul className="linkedin-category-checklist">
                <li>Take your time log entry</li>
                <li>Use AI to turn it into a LinkedIn post (add a hook, refine the narrative)</li>
                <li>Share screenshots of your work</li>
                <li>Even better: create a <strong>Carousel</strong> (PDF)—LinkedIn's carousel format tends to perform well</li>
              </ul>
            </div>
          </div>
          <div className="linkedin-category-callout" style={{ marginTop: '20px' }}>
            <p>Remember: interesting over perfect. When in doubt, quality over quantity.</p>
            <p><strong>Proofread before posting:</strong> Remove em dashes (—) from your content. If you use them, people will immediately think a robot or AI wrote your post.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>5. Best Practices</h2>
        <div className="content-block">
          <div className="linkedin-checklist-grid">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">✨</div>
              <h4>Be Authentic</h4>
              <p>Share real experiences and perspectives.</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">💡</div>
              <h4>Add Value</h4>
              <p>Don't post for the sake of posting.</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">💬</div>
              <h4>Engage Thoughtfully</h4>
              <p>Meaningful comments outperform generic ones.</p>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">👔</div>
              <h4>Stay Professional</h4>
              <p>You represent Kahana when you post.</p>
            </div>
          </div>
          <div className="linkedin-category-callout" style={{ marginTop: '20px' }}>
            <p>As you progress at Kahana, you'll have opportunities to receive LinkedIn recommendations from teammates. These strengthen both your profile and our collective credibility.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>Goals & Benefits</h2>
        <div className="content-block">
          <p>When we execute this strategy together, here's what we can expect:</p>
          <div className="linkedin-strategy-cards">
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">👤</div>
              <h4>Individual</h4>
              <ul className="linkedin-category-checklist">
                <li>More connection requests and followers</li>
                <li>More reach on your LinkedIn profile</li>
                <li>Leads, opportunities, and interested parties will DM you</li>
              </ul>
            </div>
            <div className="linkedin-strategy-card">
              <div className="linkedin-strategy-icon">🏢</div>
              <h4>Collective</h4>
              <ul className="linkedin-category-checklist">
                <li>Our company page gets more followers and reach per week</li>
                <li>Our website gets more traffic from LinkedIn</li>
                <li>More waitlist signups, paid subscribers, and demo requests for our enterprise browser</li>
                <li>Revenue growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LinkedInGuide
