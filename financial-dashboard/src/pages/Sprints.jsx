import React, { useState } from 'react'
import './Page.css'
import './Sprints.css'

function Sprints() {
  const [expandedSprint, setExpandedSprint] = useState(null)

  const sprints = [
    {
      id: 1,
      title: "Critical AI Command Execution Fixes",
      emoji: "🚨",
      priority: "CRITICAL",
      effort: "High",
      impact: "High",
      severity: "10/10",
      overview: "Fix critical recursion and command execution bugs that cause the AI Assistant to fail or behave unpredictably. These issues make the product feel buggy and unreliable.",
      issues: [
        {
          title: "Recursion Limit Errors",
          count: 3,
          submissionIds: ["BzYo494", "NpN4MYQ", "Ek7WeDB"],
          description: "AI Assistant hits recursion limit (16) when executing commands like 'open [url]' or 'create tab group'",
          impact: "Commands fail completely, product feels broken",
          technicalNotes: "Related to LangGraphJS recursion limit configuration",
          feedback: [
            { id: "BzYo494", text: "Error: Recursion limit of 16 reached without hitting a stop condition. You can increase the limit by setting the 'recursionLimit' config key. [I was trying to use the 'open' command to open yahoo.com from the ai assistant]" },
            { id: "NpN4MYQ", text: "I tried to use command open 'open youtube'. It recursively opened youtube multiple times and hit max limit error. Some one who is working on This implementation should fix this" },
            { id: "Ek7WeDB", text: "When I submitted this prompt 'create a tab group \"Webapp Application Creators\"' i received this error message 'Error: Recursion limit of 16 reached without hitting a stop condition.'" }
          ]
        },
        {
          title: "Duplicate Tab/Window Opening",
          count: 4,
          submissionIds: ["EkVjrzX", "5Ba1GQo", "MepR5JX", "Y5leyZq"],
          description: "Commands like 'open new tab', 'open youtube in new window', 'search X on google' open multiple tabs/windows instead of one",
          impact: "Creates confusion, clutters workspace, wastes resources",
          technicalNotes: "Command execution logic may be triggering multiple times or not properly debounced",
          feedback: [
            { id: "EkVjrzX", text: "When I typed in the command 'search wall street journal on google', it opened two tabs instead of 1." },
            { id: "5Ba1GQo", text: "I tried to search recipes on google and open the first one, and it opened a bunch of tabs" },
            { id: "MepR5JX", text: "I prompted the ai assistant to 'open youtube in a new window,' however, while it did open youtube in a new window, it did it twice, which was strange and jarring." },
            { id: "Y5leyZq", text: "When I entered 'open new tab' in the Oasis AI assistant, it wouldn't stop opening new tabs" }
          ]
        },
        {
          title: "Infinite Tab Opening Loop",
          count: 1,
          submissionIds: ["Y5leyZq"],
          description: "'open new tab' command doesn't stop opening tabs",
          impact: "Critical - makes browser unusable",
          feedback: [
            { id: "Y5leyZq", text: "When I entered 'open new tab' in the Oasis AI assistant, it wouldn't stop opening new tabs" }
          ]
        },
        {
          title: "Invalid URL Errors for Common Commands",
          count: 1,
          submissionIds: ["rjMGoNN"],
          description: "Commands like 'Open Google Sheets' result in Invalid URL errors",
          impact: "AI Assistant fails on basic commands, users lose trust (severity 10/10)",
          feedback: [
            { id: "rjMGoNN", text: "I entered 'Open Google Sheets' in AI assistant and i received an Invalid URL error. The AI assistant was no help. I should have just entered google sheets on browser instead of AI assistant." }
          ]
        }
      ],
      acceptanceCriteria: [
        "All commands execute exactly once (no duplicates)",
        "Recursion limit errors are resolved or properly handled",
        "Commands that should open one tab/window do so consistently",
        "No infinite loops in command execution",
        "Common service names (Google Sheets, etc.) are properly resolved to URLs"
      ]
    },
    {
      id: 2,
      title: "Tab Group & Bookmark Management Core Functionality",
      emoji: "🎯",
      priority: "HIGH",
      effort: "Medium-High",
      impact: "High",
      severity: "9-10/10",
      overview: "Fix core tab group and bookmark management operations that users rely on daily. These bugs prevent users from effectively organizing their workspace. Focus on enhancing tab group management features and AI commands for organizing tabs and bookmarks.",
      issues: [
        {
          title: "Adding Tabs to Tab Groups Fails",
          count: 3,
          submissionIds: ["eqW0MdE", "KYKWzVV", "aQqA5Xy"],
          description: "AI commands like 'add this tab to my Google Sheets tab group' or 'put my tabs with google sheets in a tab group' don't work. Users refer to tab groups as 'hubs' in their commands, but the underlying feature is tab group management.",
          impact: "Users can't organize their workspace (severity 9-10/10)",
          technicalNotes: "Tab detection, tab group matching, or tab-to-tab-group association logic may be broken. Need to ensure AI commands properly handle tab group operations.",
          feedback: [
            { id: "eqW0MdE", text: "Entered the following command in AI assistant: add this tab to my Google Sheets hub. My current tab had a google spreadsheet. The tab was not added." },
            { id: "KYKWzVV", text: "I entered the following in AI assistant: put my tabs with google sheets in a hub called Google Sheets. It didnt put any of the tabs in the new hub it created. From the screenshot you can see I had 3 Google Sheet tabs open" },
            { id: "aQqA5Xy", text: "I entered the following in AI assistant: Add 2026 expenses tab to Google Sheets hub. The 2026 expenses tab was not added but the Oasis Feedback tab was added." }
          ]
        },
        {
          title: "AI Assistant Can't Provide Tab Group Instructions",
          count: 2,
          submissionIds: ["1AoNk71", "RGybMDP"],
          description: "When users ask 'how do I add a tab to an existing tab group' or 'how do I remove a tab from a group', AI provides unhelpful responses. Users may refer to tab groups as 'hubs' in their queries.",
          impact: "Users can't learn how to use core features (severity 10/10)",
          technicalNotes: "AI Assistant needs knowledge base or tool access for tab group management commands. Should understand both 'hub' and 'tab group' terminology from users.",
          feedback: [
            { id: "1AoNk71", text: "I entered the following in AI assistant: how do i add a tab to an existing hub.. No helpful response. See screenshot." },
            { id: "RGybMDP", text: "I entered the following command in AI assistant: How do i remove a tab from a group. See screenshot for output that was not helpful. AI assistant needs to be able to provide instructions on usage of the Oasis browser that will be helpful to the users." }
          ]
        },
        {
          title: "Removing Bookmarks Doesn't Work",
          count: 1,
          submissionIds: ["lbkVQEp"],
          description: "'remove [bookmark]' command can't find imported Chrome bookmarks",
          impact: "Can't clean up imported bookmarks (severity 7/10)",
          feedback: [
            { id: "lbkVQEp", text: "I asked AI assistant to remove 'Wyzant' bookmark I imported from Google Chrome and it couldn't find it. I consider this basic functionality that should work. It's not a feature." }
          ]
        },
        {
          title: "Inconsistent Tab Group Icons",
          count: 1,
          submissionIds: ["jaAJoPR"],
          description: "Icons for same type of content (e.g., Google Sheets) are different in tab group view vs tab view",
          impact: "Confusing UI, inconsistent experience (severity 6/10)",
          feedback: [
            { id: "jaAJoPR", text: "The icons for my google spreadsheets in a hub are different. I expect the icons to be the same since they are all spreadsheets. Need a consistent UI.. don't change icons." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Users can successfully add tabs to existing tab groups via AI commands (AI should understand both 'hub' and 'tab group' terminology)",
        "Users can successfully remove tabs from tab groups via AI commands",
        "AI Assistant can provide helpful instructions for tab group and bookmark management",
        "Bookmark removal works for imported bookmarks via AI commands",
        "Icons are consistent across tab group and tab views",
        "Tab group management features are fully functional and accessible via AI commands"
      ]
    },
    {
      id: 3,
      title: "AI Assistant UI/UX Polish",
      emoji: "🖼️",
      priority: "HIGH",
      effort: "Medium",
      impact: "Medium-High",
      severity: "7-10/10",
      overview: "Improve the visual and interaction quality of the AI Assistant window. These issues affect user confidence and ease of use.",
      issues: [
        {
          title: "Window Dragging Issues",
          count: 3,
          submissionIds: ["44lODNA", "5BPrdvv", "gD6kaoM"],
          description: "AI Assistant window oscillates/vibrates when dragging, feels jarring",
          impact: "Frustrating experience, makes product feel unpolished (severity 9-10/10)",
          technicalNotes: "May be related to drag event handling, position calculation, or rendering",
          feedback: [
            { id: "44lODNA", text: "I was dragging the AI assistant, and I saw a glitch where it seemed to oscillate a lot between two positions, like it was vibrating" },
            { id: "5BPrdvv", text: "When I drag the AI Assistant interface, at times there is a jarring 'vibration' effect that makes the Interface oscillate, causing me to feel shocked and frustrated." },
            { id: "gD6kaoM", text: "Mic button is not working, and while dragging the assistant it feel lot of resistance." }
          ]
        },
        {
          title: "Z-Index and Layering Problems",
          count: 2,
          submissionIds: ["RGykzvP", "lbkg7x5"],
          description: "AI Assistant window interferes with address bar, dropdown menus appear behind other elements",
          impact: "Can't access browser controls, menus hidden (severity 10/10)",
          technicalNotes: "Z-index hierarchy needs to be fixed",
          feedback: [
            { id: "RGykzvP", text: "while moving the ai assistant window, the placement of the address bar was getting interrupted with the ai window. fix the elevation hierarchy by increasing the z-index value of the ai assistant window." },
            { id: "lbkg7x5", text: "When I click the 3 dots button to see the menu with 'sign in,' 'sign up,' and 'account' on the AI asssistant, sometimes the menu appears behind the 'Oasis AI' bar. In general, the menu should never be hidden by any element or component." }
          ]
        },
        {
          title: "Window Dragging Limited to Top Bar",
          count: 1,
          submissionIds: ["rjMvKZ2"],
          description: "Can only drag window from top bar, not from anywhere in the window",
          impact: "Counter-intuitive, slows down workflow (severity 10/10)",
          feedback: [
            { id: "rjMvKZ2", text: "The AI Assistant window should be draggable by clicking anywhere across all edges within the ai chat window, and not just the top bar. It is counter-intuitive to expect users to figure out where to click and enable the dragging." }
          ]
        },
        {
          title: "Focus Management Issues",
          count: 1,
          submissionIds: ["Zjrv9OV"],
          description: "Clicking behind AI Assistant doesn't bring that window forward, AI stays on top",
          impact: "Can't access content behind AI window without minimizing (severity 9/10)",
          feedback: [
            { id: "Zjrv9OV", text: "When i click on a screen behind the AI assistant screen, the focus does not go to the screen. I expect the screen I click on to be brought forward and the AI assistant to be behind it. This is general practice." }
          ]
        },
        {
          title: "Visual Feedback Missing",
          count: 1,
          submissionIds: ["Y5lkXDW"],
          description: "No visual feedback when voice icon is clicked, words only appear after pause",
          impact: "Users don't know if voice is working (severity 8/10)",
          feedback: [
            { id: "Y5lkXDW", text: "When the user clicks on the voice icon, there is not visual feedback that the button is working or the words are getting dictated since, the words display only after you hit the pause button." }
          ]
        },
        {
          title: "Text Formatting Issues",
          count: 1,
          submissionIds: ["gD6v1rK"],
          description: "White background on AI responses, markdown headings show asterisks instead of bold",
          impact: "Poor readability, unprofessional appearance (severity 7/10)",
          feedback: [
            { id: "gD6v1rK", text: "The AI outputs need formatting fixes. 1. Remove white bg color from all the ai responses. 2. Headings in the text output must be bolded (right now it's showing markdown text with astericks)" }
          ]
        },
        {
          title: "Text Selection Color",
          count: 1,
          submissionIds: ["dWevyQy"],
          description: "Selected text in AI responses is not readable (black text on dark selection)",
          impact: "Can't read selected text (severity 10/10)",
          feedback: [
            { id: "dWevyQy", text: "when I select the text in the ai response, the selected text is not readable to the eye. Change the text color from black to white when selected." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Window dragging is smooth with no oscillation",
        "Z-index hierarchy is correct (AI Assistant doesn't block browser controls)",
        "Window can be dragged from anywhere within the window",
        "Clicking behind AI Assistant brings that content forward",
        "Visual feedback shows when voice is active",
        "Text formatting renders correctly (no white bg, proper markdown)",
        "Selected text is readable"
      ]
    },
    {
      id: 4,
      title: "Tab and Window Management",
      emoji: "🪟",
      priority: "MEDIUM-HIGH",
      effort: "Medium",
      impact: "High",
      severity: "9-10/10",
      overview: "Fix tab vs window behavior and improve tab detection/management. Users expect standard browser behavior.",
      issues: [
        {
          title: "Tab vs Window Confusion",
          count: 2,
          submissionIds: ["b5QvG2e", "A7ey1jB"],
          description: "'open new tab' opens a new window instead; commands create multiple AI Assistant windows",
          impact: "Unexpected behavior, confusing UX (severity 10/10)",
          technicalNotes: "Command interpretation or execution logic needs to distinguish tabs from windows",
          feedback: [
            { id: "b5QvG2e", text: "When I gave the command 'open new tab,' instead of opening a new tab, it opened a new window." },
            { id: "A7ey1jB", text: "when I gave the command to open a new tab and split view, it showed 2 ai assistant windows, it felt confusing. It should show only one and that one should be displayed in the original window." }
          ]
        },
        {
          title: "Can't Find/Open Existing Tabs",
          count: 1,
          submissionIds: ["rjMgGBN"],
          description: "'Open Yahoo Mail' creates new tab instead of finding/opening existing tab",
          impact: "Creates duplicate tabs, can't navigate to existing content (severity 10/10)",
          technicalNotes: "Need tab detection and matching logic",
          feedback: [
            { id: "rjMgGBN", text: "I used the microphone and said 'Open Yahoo Mail' in the AI assistant. The AI assistant correctly typed in Open Yahoo Mail but it failed to open Yahoo Mail. I had a Yahoo mail tab. What I wanted the AI assistant to do is to open up the existing Yahoo mail tab." }
          ]
        },
        {
          title: "Multiple AI Assistant Windows",
          count: 1,
          submissionIds: ["A7ey1jB"],
          description: "Commands create multiple AI Assistant windows instead of reusing one",
          impact: "Confusing, raises question about chat history access",
          technicalNotes: "Need singleton pattern or window reuse logic",
          feedback: [
            { id: "A7ey1jB", text: "when I gave the command to open a new tab and split view, it showed 2 ai assistant windows, it felt confusing. This made me think, where can I access the previous chats I had with oasis ai?" }
          ]
        }
      ],
      acceptanceCriteria: [
        "'open new tab' creates a tab, not a window",
        "Commands can find and focus existing tabs when appropriate",
        "Only one AI Assistant window exists at a time",
        "Chat history is accessible from the single AI Assistant window"
      ]
    },
    {
      id: 5,
      title: "AI Assistant User Experience Enhancements",
      emoji: "✨",
      priority: "MEDIUM",
      effort: "Low-Medium",
      impact: "Medium",
      severity: "6-10/10",
      overview: "Improve the overall user experience of the AI Assistant with polish features and better defaults.",
      issues: [
        {
          title: "Window State Management",
          count: 4,
          submissionIds: ["Np1MpWB", "A7eyejy", "BzW0r7Y", "44Vz6dd"],
          description: "AI Assistant should remember size and position, auto-minimize when clicking outside, snap to corner when minimized, stay in viewport when maximizing",
          impact: "Users have to reposition window every time (severity 10/10)",
          feedback: [
            { id: "Np1MpWB", text: "The AI assistant should default to a smaller size so it doesn't take up all my screen space. It should also be off to the side. I wonder, if I resize it and place it in a certain spot on my screen, if it would remember that's where I want the AI assistant." },
            { id: "A7eyejy", text: "when I click on the minimize icon within the ai assistant, it should minimize and automatically snap to the bottom right corner of the web page." },
            { id: "BzW0r7Y", text: "when the user clicks outside the ai assistant window, the window should automatically minimize and snap to the bottom right corner because the user is expecting the ai window to get out of their way while browsing." },
            { id: "44Vz6dd", text: "when I switch from minimized version to the maximized version, sometimes the ai assistant is displayed out of viewport window, this makes me take another step of dragging the ai window into the viewport which makes the browsing experience slow." }
          ]
        },
        {
          title: "Minimized Window Interaction",
          count: 2,
          submissionIds: ["jaAvX8E", "q41vqMO"],
          description: "Should be able to click anywhere on minimized window to expand; dropdown menu should appear outside window bounds",
          impact: "Counter-intuitive interaction (severity 8-9/10)",
          feedback: [
            { id: "jaAvX8E", text: "In the minimized version of the ai chat window, I should be able to click anywhere to expand it to at least, display the input box. It's counter intuitive to ask the users to click on the icon to expand and only then be able to use the ai assistant." },
            { id: "q41vqMO", text: "In the minimized version of the ai assistant, when I click on the 3 dot menu, I should be able to see all the dropdown options. Since the options are displayed inside the ai window, they are getting hidden. Instead place it outside the ai window" }
          ]
        },
        {
          title: "Window Resizing",
          count: 1,
          submissionIds: ["jaAvjr9"],
          description: "Should be resizable from all edges, with min width/height",
          impact: "Limited flexibility (severity 10/10)",
          feedback: [
            { id: "jaAvjr9", text: "the ai chat window should be resizable from all the edges of the chat window. set a minimum width and height for the window. also, add a shortcut to show and hide the ai assistant window." }
          ]
        },
        {
          title: "Empty State Improvements",
          count: 1,
          submissionIds: ["7RrMGb0"],
          description: "Empty state feels incomplete, needs illustration and example prompts",
          impact: "First impression is poor, users don't know what to do (severity 7/10)",
          feedback: [
            { id: "7RrMGb0", text: "fix the empty state for the ai chat window, right now it feels incomplete. (add the illustration and remove the oasis ai text placement). since this is the initial interaction with oasis ai assistant, the experience should be memorable. Add some example prompts for the empty state which will give users a head start with ai assistant and its capabilities." }
          ]
        },
        {
          title: "Keyboard Shortcut",
          count: 1,
          submissionIds: ["jaAvjr9"],
          description: "Need shortcut to show/hide AI Assistant",
          impact: "Faster access (severity 10/10)",
          feedback: [
            { id: "jaAvjr9", text: "the ai chat window should be resizable from all the edges of the chat window. set a minimum width and height for the window. also, add a shortcut to show and hide the ai assistant window." }
          ]
        },
        {
          title: "Subscription/Usage Display",
          count: 1,
          submissionIds: ["obLl495"],
          description: "'show subscription' command doesn't work, users want to see AI command count",
          impact: "Can't track usage tied to pricing (severity 10/10)",
          feedback: [
            { id: "obLl495", text: "I entered 'show subscription' in the AI assistant and it showed the following '[Tool Output for show_url]: Opened subscription://'. I should be able to see how many AI commands I have entered which I will call AI command count since this is tied to pricing." }
          ]
        },
        {
          title: "Feature Request: Tab Summarization",
          count: 1,
          submissionIds: ["7R72950"],
          description: "Ability to 'summarize and give insights across these 15 tabs'",
          impact: "Would make research easier (severity 6/10)",
          feedback: [
            { id: "7R72950", text: "As a user opening 15 tabs on a topic that I'm researching, I want to be able to prompt the AI assistant to 'summarize and give me insights across these 15 tabs.' It would make a lot of my research easier because i wouldn't have to manually read everything or copy content into ChatGPT." }
          ]
        }
      ],
      acceptanceCriteria: [
        "AI Assistant remembers size and position across sessions",
        "Auto-minimizes and snaps to corner when clicking outside",
        "Minimized window can be expanded by clicking anywhere",
        "Window is resizable from all edges with constraints",
        "Empty state has illustration and example prompts",
        "Keyboard shortcut to show/hide AI Assistant",
        "Subscription/usage information is accessible"
      ]
    }
  ]

  const toggleSprint = (sprintId) => {
    setExpandedSprint(expandedSprint === sprintId ? null : sprintId)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "CRITICAL": return "#dc3545"
      case "HIGH": return "#fd7e14"
      case "MEDIUM-HIGH": return "#ffc107"
      case "MEDIUM": return "#0dcaf0"
      default: return "#6c757d"
    }
  }

  const getEffortColor = (effort) => {
    switch (effort) {
      case "High": return "#dc3545"
      case "Medium-High": return "#fd7e14"
      case "Medium": return "#ffc107"
      case "Low-Medium": return "#0dcaf0"
      default: return "#6c757d"
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Engineering Sprints</h1>
        <p style={{ marginTop: '10px', color: '#666', fontSize: '1rem' }}>
          December 2025 - January 2026 Feedback | 43 Total Feedback Items
        </p>
      </div>

      <section className="page-section">
        <div className="content-block">
          <h3>Sprint Selection Guide</h3>
          <p>
            Each sprint below is self-contained and can be worked on independently. 
            Sprints are ordered by <strong>criticality and user impact</strong>. Engineers should select sprints based on:
          </p>
          <ul className="feature-list">
            <li><strong>Priority:</strong> Critical bugs affecting core functionality</li>
            <li><strong>Complexity:</strong> Estimated effort and technical dependencies</li>
            <li><strong>User Impact:</strong> Number of affected users and severity ratings</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="sprints-container">
          {sprints.map((sprint) => (
            <div key={sprint.id} className="sprint-card">
              <div 
                className="sprint-header"
                onClick={() => toggleSprint(sprint.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="sprint-title-section">
                  <span className="sprint-emoji">{sprint.emoji}</span>
                  <div>
                    <h2 className="sprint-title">
                      SPRINT {sprint.id}: {sprint.title}
                    </h2>
                    <div className="sprint-meta">
                      <span 
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(sprint.priority) }}
                      >
                        {sprint.priority}
                      </span>
                      <span 
                        className="effort-badge"
                        style={{ backgroundColor: getEffortColor(sprint.effort) }}
                      >
                        {sprint.effort} Effort
                      </span>
                      <span className="impact-badge">
                        {sprint.impact} Impact
                      </span>
                      <span className="severity-badge">
                        {sprint.severity} Severity
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sprint-toggle">
                  {expandedSprint === sprint.id ? '−' : '+'}
                </div>
              </div>

              {expandedSprint === sprint.id && (
                <div className="sprint-content">
                  <div className="sprint-overview">
                    <h3>Overview</h3>
                    <p>{sprint.overview}</p>
                  </div>

                  <div className="sprint-issues">
                    <h3>Issues Included ({sprint.issues.length})</h3>
                    {sprint.issues.map((issue, idx) => (
                      <div key={idx} className="issue-card">
                        <div className="issue-header">
                          <h4>
                            {idx + 1}. {issue.title} ({issue.count} {issue.count === 1 ? 'report' : 'reports'})
                          </h4>
                          <div className="submission-ids">
                            {issue.submissionIds.map((id, i) => (
                              <span key={i} className="submission-id">{id}</span>
                            ))}
                          </div>
                        </div>
                        <div className="issue-details">
                          <p><strong>Description:</strong> {issue.description}</p>
                          <p><strong>User Impact:</strong> {issue.impact}</p>
                          {issue.technicalNotes && (
                            <p><strong>Technical Notes:</strong> {issue.technicalNotes}</p>
                          )}
                        </div>
                        <div className="issue-feedback">
                          <strong>Original Feedback:</strong>
                          <ul>
                            {issue.feedback.map((fb, i) => (
                              <li key={i}>
                                <code>{fb.id}</code>: {fb.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sprint-acceptance">
                    <h3>Acceptance Criteria</h3>
                    <ul className="acceptance-list">
                      {sprint.acceptanceCriteria.map((criteria, idx) => (
                        <li key={idx}>
                          <input type="checkbox" disabled /> {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="content-block">
          <h3>Recommended Sprint Selection Order</h3>
          <ol style={{ lineHeight: '2', fontSize: '1.05rem' }}>
            <li><strong>Start with Sprint 1</strong> - Critical bugs that make the product feel broken</li>
            <li><strong>Then Sprint 2</strong> - Core functionality users depend on daily</li>
            <li><strong>Then Sprint 4</strong> - Standard browser behavior expectations</li>
            <li><strong>Then Sprint 3</strong> - Polish and user confidence</li>
            <li><strong>Finally Sprint 5</strong> - Nice-to-have enhancements</li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default Sprints

