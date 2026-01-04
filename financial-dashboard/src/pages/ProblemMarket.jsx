import React from 'react'
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
          <h3>Primary B2C Users</h3>
          <ul className="feature-list">
            <li><strong>Software Engineers:</strong> Managing multiple codebases, documentation, and debugging sessions</li>
            <li><strong>Analysts & Researchers:</strong> Deep dives requiring multiple sources and cross-referencing</li>
            <li><strong>Consultants:</strong> Client work across multiple projects and information sources</li>
            <li><strong>Creators:</strong> Content research, reference materials, and multi-window workflows</li>
          </ul>
          
          <h3 style={{ marginTop: '30px' }}>B2B Buyers and Champions</h3>
          <ul className="feature-list">
            <li><strong>IT Leaders:</strong> Seeking productivity tools that reduce support burden</li>
            <li><strong>Productivity Leaders:</strong> Focused on team efficiency and workflow optimization</li>
            <li><strong>Team Leads:</strong> At knowledge-work companies looking to improve team output</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Market Size and Opportunity</h2>
        <div className="content-block">
          <p>
            The browser and productivity SaaS market represents a massive opportunity. With billions 
            of knowledge workers globally relying on browsers as their primary work interface, 
            there's significant potential for an AI-powered browser that specifically addresses 
            the productivity challenges of modern knowledge work.
          </p>
          <p>
            Oasis Browser targets a slice of this market by focusing on users who need to manage 
            complex, multi-threaded workflows. By solving the context-switching problem at the 
            browser level, we can capture value from both individual subscriptions and enterprise 
            deployments.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Key User Workflows</h2>
        <div className="content-block">
          <div className="workflow-example">
            <h3>Context-Switching Between Projects</h3>
            <p>
              <strong>Traditional:</strong> Manually close tabs, open new ones, reorganize windows, 
              lose context and mental state.
            </p>
            <p>
              <strong>With Oasis:</strong> "Switch to project X" - instantly reorganizes browser 
              state, restores relevant tabs and windows, maintains context.
            </p>
          </div>

          <div className="workflow-example">
            <h3>Research Deep Dives</h3>
            <p>
              <strong>Traditional:</strong> Open multiple tabs, manually organize by topic, struggle 
              to keep track of sources.
            </p>
            <p>
              <strong>With Oasis:</strong> "Create research group for topic Y" - automatically 
              groups related tabs, enables split-view comparison, maintains research thread.
            </p>
          </div>

          <div className="workflow-example">
            <h3>Multi-Window Comparison</h3>
            <p>
              <strong>Traditional:</strong> Manually arrange windows, resize, align, constantly 
              adjust layout.
            </p>
            <p>
              <strong>With Oasis:</strong> "Open tabs 3 and 4 in split view" - instant side-by-side 
              comparison with optimal layout.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProblemMarket



