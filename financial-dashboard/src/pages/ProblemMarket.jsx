import React from 'react'
import supabaseImage from '../images/Supabase Schema Visualizer.png'
import './Page.css'

function ProblemMarket() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Problem, Market & Users</h1>
      </div>

      <section className="page-section">
        <h2>Problem Definition</h2>
        <div className="content-block">
          <p>
            Knowledge workers face a fundamental challenge: browser-driven context switching. 
            The modern workday involves juggling dozens of tabs, manually organizing windows, 
            and constantly switching between projects, research threads, and information sources. 
            This fragmentation creates high cognitive load, reduces productivity, and makes it 
            difficult to maintain focus on complex tasks.
          </p>
          <p>
            <strong>Why existing solutions fall short:</strong> Current browsers, extensions, 
            and generic AI assistants treat browser management as an afterthought. They require 
            manual clicks, keyboard shortcuts, and mental overhead to organize and navigate 
            information. None provide an integrated, natural-language interface that understands 
            the context of knowledge work and reduces the cognitive burden of browser management.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Target Users and Segments</h2>
        <div className="content-block">
          <p>
            The following represent our <strong>initial target user personas</strong> based on our understanding 
            of knowledge workers who would benefit most from Oasis Browser. However, we recognize that these 
            segments are hypotheses that need validation. Through our go-to-market and segmentation strategy 
            (outlined in the Segmentation Strategy section below), we will use data from UTM tracking, Warmly, 
            Mixpanel, and our Supabase user database to refine these personas and identify which segments 
            drive the most profitable growth.
          </p>

          <h3 style={{ marginTop: '30px' }}>Primary B2C Users (Initial Personas)</h3>
          <ul className="feature-list">
            <li><strong>Software Engineers:</strong> Managing multiple codebases, documentation, and debugging sessions</li>
            <li><strong>Analysts & Researchers:</strong> Deep dives requiring multiple sources and cross-referencing</li>
            <li><strong>Consultants:</strong> Client work across multiple projects and information sources</li>
            <li><strong>Creators:</strong> Content research, reference materials, and multi-window workflows</li>
          </ul>
          
          <h3 style={{ marginTop: '30px' }}>B2B Buyers and Champions (Initial Personas)</h3>
          <ul className="feature-list">
            <li><strong>IT Leaders:</strong> Seeking productivity tools that reduce support burden</li>
            <li><strong>Productivity Leaders:</strong> Focused on team efficiency and workflow optimization</li>
            <li><strong>Team Leads:</strong> At knowledge-work companies looking to improve team output</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Segmentation Strategy</h2>
        <div className="content-block">
          <p>
            We are implementing a data-driven segmentation strategy to identify which user personas 
            and marketing channels drive the most profitable growth. While we don't yet know which 
            segment will be most profitable, we have the infrastructure and tools in place to determine 
            this through systematic testing and analysis.
          </p>

          <h3 style={{ marginTop: '30px' }}>Marketing Foundation</h3>
          <p>
            We are not starting from scratch on marketing. Last quarter, we achieved <strong>818K impressions 
            in Google Search Console</strong> (87% increase), demonstrating existing organic traction. 
            We are implementing Google tags and attribution mechanisms to measure and optimize conversion.
          </p>
          <p>
            <strong>YouTube Channel:</strong> We currently have a <a href="https://www.youtube.com/@kahanaHQ" target="_blank" rel="noopener noreferrer">YouTube channel</a> with <strong>1.1k subscribers</strong> 
            and have previously created videos that successfully yielded web app users and paid subscribers. 
            We will look to build on what we did right there and take it to the next level. As product quality 
            improves (measured by NPS), we will create YouTube videos highlighting use cases to boost traffic 
            and signups, leveraging our existing subscriber base and proven content strategy.
          </p>
          <p>
            Once we achieve a revenue threshold (either through bootstrapping or funding), we will invest in 
            paid digital ads using ROAS (Return on Ad Spend) targets, assuming LTV is stable and validated.
          </p>

          <h3 style={{ marginTop: '30px' }}>Content Marketing & User Personas</h3>
          <p>
            We will create YouTube videos showcasing Oasis Browser use cases, catering to various 
            work and productivity-related user personas. Similar to how Notion's YouTube channel 
            translates to enterprise sales, our content strategy will target different knowledge worker 
            segments—software engineers, researchers, consultants, and creators—demonstrating how 
            Oasis solves their specific productivity challenges.
          </p>
          <p>
            Through our segmentation analysis, we will seek to discover which roles and workflows end 
            up being most attracted to and loving Oasis features. This data-driven approach will help 
            us refine our messaging and product positioning to resonate with the segments that derive 
            the most value from the product.
          </p>

          <h3 style={{ marginTop: '30px' }}>Brand Positioning & Messaging Strategy</h3>
          <p>
            We will start by taking an approach similar to <strong>Arc Browser</strong>, focusing more on 
            spatial ease, layout, and a soothing value proposition. Rather than emphasizing raw productivity 
            metrics or feature lists, we will focus on beauty and elegance in our branding and messaging 
            to attract users who value that aesthetic and experience.
          </p>
          <p>
            Similar to how <strong>Bear note-taking app</strong> effectively marketed itself with alternatives 
            like OneNote and Evernote available, we will differentiate Oasis through design excellence and 
            user experience quality. This approach appeals to users who appreciate thoughtful design and 
            are willing to choose a product that feels more refined and elegant, even when functional 
            alternatives exist. By positioning Oasis as the beautiful, elegant browser for knowledge work, 
            we can attract users who value both productivity and aesthetic experience.
          </p>

          <h3 style={{ marginTop: '30px' }}>Data Infrastructure for Segmentation</h3>
          <ul className="feature-list">
            <li>
              <strong>UTM Tracking Links:</strong> We will implement UTM parameters across all marketing 
              channels to track which sources drive traffic, signups, and conversions. This enables 
              us to measure channel effectiveness and ROI.
            </li>
            <li>
              <strong>Warmly Integration:</strong> We are installing Warmly, a platform that 
              deanonymizes website traffic to identify which companies are visiting our <a href="https://kahana.co" target="_blank" rel="noopener noreferrer">website</a>. 
              This provides visibility into enterprise interest and helps prioritize B2B outreach 
              efforts.
            </li>
            <li>
              <strong>Mixpanel Analytics:</strong> We have Mixpanel installed to track key user events 
              and behaviors. This allows us to understand how different user segments engage with 
              the product, identify feature usage patterns, and measure conversion funnels.
            </li>
            <li>
              <strong>Supabase User Database:</strong> We maintain a comprehensive database of users 
              in Supabase, enabling us to segment users by behavior, usage patterns, company 
              information, and other attributes for targeted analysis.
            </li>
          </ul>
          <div style={{ margin: '30px 0', textAlign: 'center' }}>
            <img 
              src={supabaseImage} 
              alt="Supabase schema visualizer showing user database structure" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>

          <h3 style={{ marginTop: '30px' }}>Go-to-Market & Product Marketing Strategy</h3>
          <p>
            With these data infrastructure pieces in place, we will implement and execute a 
            go-to-market and product marketing strategy to determine which user segments and marketing 
            channels are most profitable. This data-driven approach will guide our resource allocation, 
            content creation priorities, and sales outreach efforts, ensuring we focus on the highest-value 
            segments as we scale.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Market Size and Opportunity</h2>
        <div className="content-block">
          <h3>The Shift Toward AI-Powered Interfaces</h3>
          <p>
            The market is experiencing a fundamental shift in how people interact with software. 
            Users increasingly prefer chat and text-based AI interfaces that help execute workflows 
            through natural conversation. The emergence of AI-powered browsers like OpenAI's Atlas 
            and Perplexity's Comet demonstrates the strong demand for conversational AI interfaces 
            that feel intuitive and accessible, integrated directly into the browser experience.
          </p>
          <p>
            <strong>Oasis Browser aligns with this trend:</strong> We're putting what people love 
            about conversational AI tools directly into the browser, similar to how Atlas and Comet 
            are reimagining browser interactions. Instead of switching between tabs, windows, and 
            applications, users can simply text or chat with Oasis to control their browser environment 
            and execute complex workflows. As demand for easy-to-use, chat-centered AI interfaces in 
            browsers increases, so does the demand and appeal for Oasis.
          </p>

          <h3 style={{ marginTop: '30px' }}>Enterprise AI Investment Trends</h3>
          <p>
            Companies are increasingly investing in AI tools to enhance workforce productivity. 
            According to recent market research:
          </p>
          <ul className="feature-list">
            <li>
              <strong>Enterprise AI Adoption:</strong> Over 50% of enterprises are actively 
              implementing or planning AI initiatives for productivity and automation
            </li>
            <li>
              <strong>AI Productivity Tools Market:</strong> The enterprise AI software market is 
              projected to grow at 30%+ CAGR, driven by productivity and workflow automation use cases
            </li>
            <li>
              <strong>Browser as Work Interface:</strong> Knowledge workers spend 60-80% of their 
              workday in browsers, making browser-level AI integration a natural fit for productivity 
              investments
            </li>
            <li>
              <strong>ROI Focus:</strong> Companies are prioritizing AI tools that demonstrate 
              measurable productivity gains and time savings, which Oasis delivers through reduced 
              context switching and streamlined workflows
            </li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Enterprise Browser Market Opportunity</h3>
          <p>
            The enterprise browser market represents a significant opportunity as companies seek 
            secure, productivity-focused browser solutions for their workforce. Companies interested 
            in enterprise browsers will consider Oasis because:
          </p>
          <ul className="feature-list">
            <li>
              <strong>AI-First Approach:</strong> Unlike traditional enterprise browsers focused 
              primarily on security, Oasis combines security with AI-powered productivity features 
              that directly impact worker output
            </li>
            <li>
              <strong>Natural Language Interface:</strong> The conversational AI interface reduces 
              training requirements and makes the browser accessible to all knowledge workers, not 
              just technical users
            </li>
            <li>
              <strong>Measurable Productivity Gains:</strong> Oasis provides quantifiable benefits 
              through reduced context switching, faster task completion, and improved focus—metrics 
              that resonate with productivity-focused IT and operations leaders
            </li>
            <li>
              <strong>B2C2B Motion:</strong> Individual adoption within organizations creates natural 
              champions and bottom-up demand, making enterprise sales cycles more efficient
            </li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Market Size</h3>
          <p>
            The browser and productivity SaaS market represents a massive opportunity. With billions 
            of knowledge workers globally relying on browsers as their primary work interface, 
            there's significant potential for an AI-powered browser that specifically addresses 
            the productivity challenges of modern knowledge work. Oasis Browser targets this market 
            by focusing on users who need to manage complex, multi-threaded workflows, capturing 
            value from both individual subscriptions and enterprise deployments.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Key User Workflows</h2>
        <div className="content-block">
          <p style={{ marginBottom: '25px' }}>
            Users interact with Oasis Browser by typing natural language commands into the AI assistant. 
            The examples below show how simple text commands replace complex manual browser management.
          </p>

          <div className="workflow-example">
            <h3>Context-Switching Between Projects</h3>
            <p>
              <strong>Traditional:</strong> Manually close tabs, open new ones, reorganize windows, 
              lose context and mental state.
            </p>
            <p>
              <strong>With Oasis:</strong> Type this command into the AI assistant:
            </p>
            <div className="command-bubble">
              "Switch to project X"
            </div>
            <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
              Instantly reorganizes browser state, restores relevant tabs and windows, maintains context.
            </p>
          </div>

          <div className="workflow-example">
            <h3>Research Deep Dives</h3>
            <p>
              <strong>Traditional:</strong> Open multiple tabs, manually organize by topic, struggle 
              to keep track of sources.
            </p>
            <p>
              <strong>With Oasis:</strong> Type this command into the AI assistant:
            </p>
            <div className="command-bubble">
              "Create research group for topic Y"
            </div>
            <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
              Automatically groups related tabs, enables split-view comparison, maintains research thread.
            </p>
          </div>

          <div className="workflow-example">
            <h3>Multi-Window Comparison</h3>
            <p>
              <strong>Traditional:</strong> Manually arrange windows, resize, align, constantly 
              adjust layout.
            </p>
            <p>
              <strong>With Oasis:</strong> Type this command into the AI assistant:
            </p>
            <div className="command-bubble">
              "Open tabs 3 and 4 in split view"
            </div>
            <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#666' }}>
              Instant side-by-side comparison with optimal layout.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProblemMarket



