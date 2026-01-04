import React from 'react'
import './Page.css'

function ProductTechnology() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Product & Technology</h1>
      </div>

      <section className="page-section">
        <h2>Product Overview</h2>
        <div className="content-block">
          <p>
            Oasis Browser is built on Firefox, providing a solid, privacy-focused foundation 
            while adding an integrated AI assistant interface. The product supports both text 
            and voice commands, enabling natural-language control over browser actions including 
            opening/closing tabs, creating tab groups, managing windows, and organizing browser 
            state.
          </p>
          <p>
            <strong>Architecture:</strong> Firefox-based browser with integrated AI assistant interface
          </p>
          <p>
            <strong>Modalities:</strong> Text commands and voice commands for comprehensive browser control
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Core Features</h2>
        <div className="content-block">
          <h3>Natural-Language Browser Control</h3>
          <p>Supported commands include:</p>
          <ul className="feature-list">
            <li>"Open new window"</li>
            <li>"Create tab group"</li>
            <li>"Add tab to tab group"</li>
            <li>"Close all tabs"</li>
            <li>"Open tabs 3 and 4 in split view"</li>
            <li>"Switch to project X"</li>
            <li>"Organize tabs by domain"</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Tab and Window Management</h3>
          <ul className="feature-list">
            <li>Intelligent tab grouping based on context and user intent</li>
            <li>Bulk actions for organizing multiple tabs simultaneously</li>
            <li>Split-view layouts for side-by-side comparison</li>
            <li>Window state preservation and restoration</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>AI Interaction Model</h3>
          <p>
            Oasis uses casual, natural language rather than rigid command syntax. The AI focuses 
            on reducing cognitive load rather than generic Q&A, understanding the context of 
            knowledge work and browser management tasks.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Technical Stack</h2>
        <div className="content-block">
          <h3>Frontend/Browser</h3>
          <ul className="feature-list">
            <li><strong>Base:</strong> Firefox with custom extensions and UI modifications</li>
            <li><strong>Interface:</strong> React-based AI assistant interface</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Backend and Infrastructure</h3>
          <ul className="feature-list">
            <li><strong>AWS Services:</strong> Lambda functions, EC2 instances, Secrets Manager</li>
            <li><strong>Infrastructure:</strong> Scalable serverless architecture</li>
            <li><strong>Baseline Cost:</strong> ~$15/month fixed + variable usage costs</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>AI Providers</h3>
          <ul className="feature-list">
            <li><strong>Gemini:</strong> Text-based command processing and understanding</li>
            <li><strong>Deepgram:</strong> Voice command transcription and processing</li>
            <li><strong>Cost Structure:</strong> Token-based for text, per-minute for voice</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Roadmap (2026)</h2>
        <div className="content-block">
          <h3>Key Improvements and Features</h3>
          <ul className="feature-list">
            <li>Expanded command coverage for more browser actions</li>
            <li>
              <strong>Training:</strong> Users can submit training reports for each prompt, specifying 
              if the AI executed too slowly or produced inaccurate output. Similar to Cursor's memory 
              features, this allows Oasis to learn user preferences and continuously evolve to be 
              faster, more accurate, and provide a higher quality experience than competitors. Training 
              enables personalized AI that improves with each interaction.
            </li>
            <li>Admin controls for B2B deployments</li>
            <li>Enterprise-grade security and observability</li>
            <li>Enhanced voice command accuracy and responsiveness</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Performance, Reliability, and UX Milestones</h3>
          <ul className="feature-list">
            <li>Sub-second command response times</li>
            <li>99.9% uptime for AI services</li>
            <li>Improved onboarding and user education</li>
            <li>Advanced error handling and user feedback</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ProductTechnology

