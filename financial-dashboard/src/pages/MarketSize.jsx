import React from 'react'
import './Page.css'
import './MarketSize.css'

function MarketSize() {
  return (
    <div className="page" id="market-size">
      <div className="page-header">
        <h1>Market Size</h1>
        <p className="page-subtitle">
          The foundational universe for Oasis: 800M browser-centric workers, AI browsers on the rise, and a new enterprise category at the intersection of productivity and security.
        </p>
      </div>

      {/* Market Summary Dashboard */}
      <section className="market-summary-dashboard">
        <div className="market-summary-grid">
          <div className="market-summary-card">
            <div className="market-summary-value">800M</div>
            <div className="market-summary-label">Browser-Centric Workers</div>
            <div className="market-summary-sublabel">Globally, use desktop/laptop browser for core tasks</div>
          </div>
          <div className="market-summary-card">
            <div className="market-summary-value">3.5B</div>
            <div className="market-summary-label">Employed People</div>
            <div className="market-summary-sublabel">Total global workforce</div>
          </div>
          <div className="market-summary-card market-summary-highlight">
            <div className="market-summary-value">Nascent</div>
            <div className="market-summary-label">Category Stage</div>
            <div className="market-summary-sublabel">Most of the market is up for grabs</div>
          </div>
          <div className="market-summary-card">
            <div className="market-summary-value">2-sided</div>
            <div className="market-summary-label">Oasis Model</div>
            <div className="market-summary-sublabel">Consumer + Enterprise</div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>The Opening Scenario</h2>
        <div className="content-block">
          <p>
            On a Tuesday morning in 2026, a product manager at a Fortune 500 company quietly downloads a new AI browser onto her work laptop.
          </p>
          <p>
            She doesn't ask IT. She's not trying to break the rules. She's just drowning in tabs, tickets, dashboards, and documents—and this new browser promises to summarize long pages, remember context across apps, and even execute multi-step workflows for her. Within a week, half her team is using it. Within a month, it has quietly spread across the org.
          </p>
          <p>
            <strong>And then the CISO finds out.</strong>
          </p>
          <p>
            The browser's AI agent has broad permissions. It can read corporate email, swipe API keys from dev tools, and pull customer records from SaaS apps. It talks to external LLMs. It runs arbitrary actions on behalf of the user. In security terms, it's a new kind of "super-app" sitting on top of the most sensitive workflows in the company—without any of the controls that usually accompany a privileged system.
          </p>
          <p>
            So the CISO has a choice:
          </p>
          <ul className="feature-list">
            <li>Block AI browsers and slow down the business.</li>
            <li>Or embrace AI acceleration—but with a secure, enterprise-grade browser that gives them visibility, policy, and control.</li>
          </ul>
          <p>
            <strong>Oasis exists because we believe that second path is inevitable.</strong>
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>The World Has Quietly Shifted Into the Browser</h2>
        <div className="content-block">
          <p>
            There are roughly 3.5 billion employed people in the world. A very large subset of them now live most of their workday inside a browser: email, CRM, support tools, BI, HRIS, internal portals, and more. Even legacy "desktop apps" have been re-skinned as web front ends.
          </p>
          <p>
            When you narrow that population down to people who work primarily on a computer and use a desktop or laptop browser for core tasks (not just occasionally checking Gmail), you land at about <strong>800 million workers</strong> globally who are truly "browser-centric" in their day-to-day jobs.
          </p>
          <p>These are:</p>
          <ul className="feature-list">
            <li>Sales reps living in Salesforce and Gong</li>
            <li>Support agents living in Zendesk and internal consoles</li>
            <li>Marketers operating in HubSpot, ad platforms, and analytics</li>
            <li>Engineers in web-based IDEs, CI tools, and dashboards</li>
            <li>Operations and finance teams working in web ERP, procurement, and banking portals</li>
          </ul>
          <p>
            In other words: <strong>the modern knowledge and operations workforce.</strong> This is the foundational universe for Oasis. If your work happens in the browser, your browser is your operating system—and increasingly, your AI co-pilot.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>The Rise of AI Browsers: Users Pull, Security Pushes</h2>
        <div className="content-block">
          <p>
            Over the last two years, browsers have begun to change. Instead of being "dumb windows" onto the web, they're becoming AI-augmented environments. An AI browser can:
          </p>
          <ul className="feature-list">
            <li>Summarize, translate, and compare content across multiple tabs</li>
            <li>Understand your context: who you are, what you're working on, which tools you use</li>
            <li>Automate workflows: "file this invoice, update the CRM, notify the account owner"</li>
            <li>Act as a programmable agent that clicks, types, and navigates on your behalf</li>
          </ul>
          <p>
            This is catnip for the 800M browser-centric workers who are under relentless pressure to do more with less. They don't need an enterprise RFP to try it; they just install a new browser, sign in with their personal account, and feel the productivity jolt immediately. That's the <strong>consumer AI browser wave</strong>: bottoms-up, user-led, and fast.
          </p>
          <p>
            But embedded in that wave is the seed of the next security crisis. An AI browser, by definition, is allowed to see and do more than any single SaaS app:
          </p>
          <ul className="feature-list">
            <li>It can read everything you see across apps and tabs.</li>
            <li>It can combine data from systems that were never meant to be joined.</li>
            <li>It can send that data to external models and services.</li>
            <li>It can take actions—sometimes autonomous ones—on your behalf.</li>
          </ul>
          <p>
            If a traditional browser was a "window," an AI browser is a <strong>robot sitting at your desk</strong>. That robot is incredibly helpful. But if it's compromised, misconfigured, or just poorly designed, it can also be incredibly dangerous.
          </p>
          <p>
            Security leaders are already flagging this. They worry about sensitive data being sent to third-party AI services with no governance, malicious prompts causing the browser agent to exfiltrate data or change records, and employees bypassing corporate identity, DLP, and logging by using personal AI browsers.
          </p>
          <p>
            <strong>The pattern is clear:</strong> (1) Employees adopt AI browsers for productivity. (2) Those browsers gain deep access to corporate systems and data. (3) CISOs and IT teams are forced to react. They can't stop the desire for AI-enhanced workflows. They can only decide whether they want them to be safe and governable—or shadow IT.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Where Oasis Sits: At the Intersection of AI and Enterprise Security</h2>
        <div className="content-block">
          <p>
            Oasis is an <strong>AI-native enterprise browser</strong> with two sides:
          </p>
          <ol className="feature-list" style={{ listStyleType: 'decimal' }}>
            <li>A consumer-grade AI browser that any individual can adopt to get real productivity benefits today.</li>
            <li>An enterprise-grade version that plugs into identity, security, and compliance, so IT can safely standardize on it across the org.</li>
          </ol>
          <p>
            Think of it as meeting users where they are—and giving enterprises a secure way to catch up.
          </p>
          <h3>For employees</h3>
          <p>
            Oasis looks and feels like the kind of AI browser they want: built-in assistance that understands their work context, automation tools that work across the SaaS stack they actually use, and an interface that helps them manage tabs, tasks, and information overload. To an individual, it's simply the fastest, smartest way to do work on the web.
          </p>
          <h3>For enterprises</h3>
          <p>
            Under the hood, Oasis adds the capabilities that consumer browsers don't—and never will—prioritize:
          </p>
          <ul className="feature-list">
            <li>Strong identity and SSO integration</li>
            <li>Fine-grained policy about which data can be sent to which AI models</li>
            <li>Logging and audit for AI-driven actions</li>
            <li>Data loss prevention and content inspection at the browser layer</li>
            <li>Controls over extensions, agents, and workflows</li>
          </ul>
          <p>
            This is the <strong>bridge</strong>: employees get the AI browser they want; IT gets the security and control they need.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>A Bottoms-Up Market: From One Worker to Hundreds of Millions</h2>
        <div className="content-block">
          <p>
            The market for Oasis is not theoretical. It's a series of concentric circles, built from first principles.
          </p>
          <ol className="feature-list" style={{ listStyleType: 'decimal' }}>
            <li><strong>Start with users, not licenses</strong> — There are about 800 million people worldwide who use a desktop or laptop browser as a central part of their job. These workers are already the primary adopters of AI tools and the primary targets of productivity improvements.</li>
            <li><strong>Many will experiment with AI browsers</strong> — As AI browser features mature—summarization, tab management, workflow agents—more of these 800M workers will try at least one AI-augmented browser over the next few years. Even a modest adoption curve translates into tens or hundreds of millions of potential Oasis users on the consumer side.</li>
            <li><strong>A subset of organizations will formalize and secure this behavior</strong> — Not every company buys advanced security tools, but there are millions of organizations globally with enough scale, regulatory exposure, and SaaS complexity to care deeply about browser-level security. As AI browsers spread informally, these organizations will be pressured to choose: ban them outright, or endorse a secure enterprise AI browser.</li>
            <li><strong>From individuals to standardized platform</strong> — Once a critical mass of employees in an org uses an AI browser like Oasis Consumer, it becomes a natural candidate for standardization. IT can then roll out Oasis Enterprise: same core UX, same AI capabilities, but with identity, policy, and control layered on.</li>
          </ol>
          <p>
            The growth motion is inherently <strong>bottoms-up and top-down at the same time</strong>: employees adopt Oasis for personal productivity; IT formalizes that choice with an enterprise deployment once the value and the risk are both undeniable.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Why This Matters to an Investor</h2>
        <div className="content-block">
          <p>
            If you're an investor, you care about three questions: (1) Is this a real problem? (2) Is the market large and durable? (3) Is this team positioned at the right point in the wave?
          </p>
          <h3>1. The problem is real and getting sharper</h3>
          <p>
            The browser is now the primary work surface for hundreds of millions of people. AI is moving into that surface, not sitting on the side. Security, compliance, and governance at the browser + AI layer are currently fragile, fragmented, or nonexistent in many organizations. This combination—high-value workflows, rapidly evolving AI capabilities, and weak controls—is exactly where new enterprise categories are born.
          </p>
          <h3>2. The market is large, layered, and still early</h3>
          <p>
            800M browser-centric workers define the outer boundary of long-term demand. A significant subset of them will adopt AI-augmented browsers for productivity, whether their company plans for it or not. A meaningful fraction of organizations employing those users will eventually need a secure, enterprise-grade AI browser, because the alternative—letting unmanaged AI agents operate inside the browser—is untenable.
          </p>
          <p>
            Pricing is straightforward: a browser that increases productivity and reduces risk can be sold per user, per year. The outcome is a <strong>multi-billion-dollar annual spend category</strong> that sits at the intersection of endpoint, SaaS security, and AI tooling.
          </p>
          <p>
            Crucially, this category is <strong>nascent</strong>. The number of workers today on any true enterprise browser is still tiny compared to the 800M total. That means most of the market is up for grabs.
          </p>
          <h3>3. Oasis is built for this exact moment</h3>
          <p>
            Oasis is not trying to bolt AI onto a legacy browser, nor bolt security onto a consumer AI toy. It is being built from the ground up as an AI-first work environment for the people who live in their browser, and a policy-aware, enterprise-ready platform for the teams who need to control that environment.
          </p>
          <p>
            That duality—beloved by users, trusted by IT—is rare and hard to execute. But if you believe that AI will increasingly live inside the browser, employees will adopt those tools with or without permission, and enterprises will be forced to respond with secure, manageable solutions—then a product like Oasis sits exactly where the demand will concentrate.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>The Story in One Sentence</h2>
        <div className="content-block market-size-one-liner">
          <p>
            Employees are pulling AI deeper into the browser to get their jobs done faster; Oasis turns that inevitable shift into a safe, standardized, enterprise-grade platform—starting from the individual user in 2026, scaling to hundreds of millions, and creating a new, durable category at the heart of modern work.
          </p>
        </div>
      </section>
    </div>
  )
}

export default MarketSize
