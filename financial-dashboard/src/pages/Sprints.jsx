import React, { useState } from 'react'
import './Page.css'
import './Sprints.css'

function Sprints() {
  const [expandedSprint, setExpandedSprint] = useState(null)
  const [expandedArchive, setExpandedArchive] = useState(false)

  // Archived sprints (completed)
  const archivedSprints = [
    {
      id: 1,
      title: "Critical AI Command Execution Fixes",
      emoji: "🚨",
      priority: "CRITICAL",
      storyPoints: 18,
      effort: "Medium",
      impact: "High",
      severity: "10/10",
      overview: "Fix critical recursion and command execution bugs that cause the AI Assistant to fail or behave unpredictably. The goal is to ensure recursion error messages do not appear to users. Anytime commands cause an error in the system (e.g., recursion errors) and a command is unable to complete, there should be a friendly and intuitive error message explaining that the prompt may need to be rephrased or that functionality is not yet supported, prompting the user to give feedback and to suggest the new feature or log the observation. All issues relate to the command execution infrastructure and LangGraph logic.",
      primaryFiles: "assistant.ts, commands.ts",
      issues: [
        {
          title: "Recursion Limit Errors",
          count: 3,
          submissionIds: ["BzYo494", "NpN4MYQ", "Ek7WeDB"],
          description: "AI Assistant hits recursion limit (16) when executing commands like 'open [url]' or 'create tab group'",
          impact: "Commands fail completely, product feels broken",
          technicalNotes: "Related to LangGraphJS recursion limit configuration in assistant.ts",
          feedback: [
            { id: "BzYo494", text: "Error: Recursion limit of 16 reached without hitting a stop condition. You can increase the limit by setting the 'recursionLimit' config key. [I was trying to use the 'open' command to open yahoo.com from the ai assistant]", screenshot: "https://storage.tally.so/private/Screenshot-2025-12-18-at-3.13.53-PM.png?id=VvPo8N&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZ2UG84TiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2NjA5NDA0Nn0.f7N0BwiZX4duJaoxaACW91A_ISm5oXcM5oVSXx0Ybf8&signature=9559e660ff071885dab64e4a870a50d51417d9a6a0bbec1c5d1fae6a413bcbb9" },
            { id: "NpN4MYQ", text: "I tried to use command open 'open youtube'. It recursively opened youtube multiple times and hit max limit error. Some one who is working on This implementation should fix this", screenshot: "https://storage.tally.so/private/Screenshot-2025-12-25-163711.jpg?id=8APjvO&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhBUGp2TyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2NjY5ODcyMH0.geBT_PksdebHoWpCNur05P1RXdbcNGOAAniWUIPowbU&signature=b56bb7f4d59ca012acfe4c7b82d22605f5766e5afc78182aa840dfcf96e0891a" },
            { id: "Ek7WeDB", text: "When I submitted this prompt 'create a tab group \"Webapp Application Creators\"' i received this error message 'Error: Recursion limit of 16 reached without hitting a stop condition.'", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-09-at-12.59.42-PM.png?id=j5N2DQ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imo1TjJEUSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2Nzk4NTIzMH0.8lv2pJrV-ygq6UsywT0qZSlQaOR_fYaAO0Xye09A_dE&signature=78c8e3ad471c553a90c464cfa99aa2d11b3fa5b80e8fafc5030049c04efacd45" }
          ]
        },
        {
          title: "Duplicate Tab/Window Opening",
          count: 4,
          submissionIds: ["EkVjrzX", "5Ba1GQo", "MepR5JX", "Y5leyZq"],
          description: "Commands like 'open new tab', 'open youtube in new window', 'search X on google' open multiple tabs/windows instead of one",
          impact: "Creates confusion, clutters workspace, wastes resources",
          technicalNotes: "Command execution logic in commands.ts may be triggering multiple times or not properly debounced",
          feedback: [
            { id: "EkVjrzX", text: "When I typed in the command 'search wall street journal on google', it opened two tabs instead of 1.", screenshot: "https://storage.tally.so/private/Screenshot-2025-12-31-at-10.04.29-AM.png?id=Yp9EzW&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IllwOUV6VyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2NzE5NzE2MH0.cMo5Iri4mlDThUaC73LgtA2trflaYP3Wms1xSWOHTYs&signature=260b53e878af38846f84f3a4265e925a2fa322d7883c973920644f3836511e7d" },
            { id: "5Ba1GQo", text: "I tried to search recipes on google and open the first one, and it opened a bunch of tabs", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-02-at-4.53.01-PM.png?id=gYpO7K&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdZcE83SyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2NzM5NDQzOX0.0JE2ZHbnnUcWdWcveCNJQddBYdJchJvGk_VKPTO7eRU&signature=1a0035bddb43fcc0334e4fce17a56e596a2fee27f1b738cabeacdf38eebfbdcb" },
            { id: "MepR5JX", text: "I prompted the ai assistant to 'open youtube in a new window,' however, while it did open youtube in a new window, it did it twice, which was strange and jarring.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-09-at-11.38.39-AM.png?id=VvgNXg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZ2Z05YZyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2Nzk4MDM3MH0.BkkGgtaw2kemyHkzohMyc3S0ARdkg9k-0ifuA-5uUFk&signature=6cf9a8ae52e00d4e50385ad676ed7e561efd1586aaff729ea1c67ff727bb48a1" },
            { id: "Y5leyZq", text: "When I entered 'open new tab' in the Oasis AI assistant, it wouldn't stop opening new tabs", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-12.14.38-PM.png?id=4946A5&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5NDZBNSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIzODE0NH0.HA9UYYk1PMsRsT87VliYy_ASKoNw8V16qVokYdjly64&signature=8284587647514a76962aeadb8953b6b9deb708a39f22fb5d17819105e6241983" }
          ]
        },
        {
          title: "Infinite Tab Opening Loop",
          count: 1,
          submissionIds: ["Y5leyZq"],
          description: "'open new tab' command doesn't stop opening tabs",
          impact: "Critical - makes browser unusable",
          technicalNotes: "Execution guards and state tracking needed in commands.ts",
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
          technicalNotes: "URL resolution service needed in commands.ts for common service names",
          feedback: [
            { id: "rjMGoNN", text: "I entered 'Open Google Sheets' in AI assistant and i received an Invalid URL error. The AI assistant was no help. I should have just entered google sheets on browser instead of AI assistant.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-12.49.51-PM.png?id=OdpqX8&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9kcHFYOCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE1NzUxNX0.zkM9pJd33GaeDDGa_ztIL9MPYunfLqOuoH4ZGBziu8A&signature=b74d9303bde20b21ddc97e0832a44310aee9b968458edb4fe1144a010a58c0d8" }
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
      title: "Complete Window Management",
      emoji: "🖼️",
      priority: "HIGH",
      storyPoints: 29,
      effort: "Medium-High",
      impact: "High",
      severity: "7-10/10",
      overview: "Complete window management for the AI Assistant. All issues relate to window behavior, positioning, dragging, and state management in assistant.ui.js. Grouping these together allows developers to work on window behavior holistically.",
      primaryFiles: "assistant.ui.js",
      issues: [
        {
          title: "AI Assistant Show/Hide Controls & Default Visibility",
          count: 1,
          submissionIds: ["jaAvjr9"],
          description: "Need keyboard shortcut and visible button to show/hide AI Assistant. In addition to a keyboard command, there should be a unique and easily visible button on the browser next to the 'profile' and 'settings dropdown' that users can click to show or hide the AI assistant. When it displays, it displays in the same position/sizing as it was last time. AI Assistant should show by default whenever the browser is first installed or when it's opened.",
          impact: "Faster access and better discoverability (severity 10/10)",
          technicalNotes: "Keyboard shortcut, toggle button in browser UI, state persistence, default visibility in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "jaAvjr9", text: "the ai chat window should be resizable from all the edges of the chat window. set a minimum width and height for the window. also, add a shortcut to show and hide the ai assistant window." }
          ]
        },
        {
          title: "Window Dragging Issues",
          count: 3,
          submissionIds: ["44lODNA", "5BPrdvv", "gD6kaoM"],
          description: "AI Assistant window oscillates/vibrates when dragging, feels jarring",
          impact: "Frustrating experience, makes product feel unpolished (severity 9-10/10)",
          technicalNotes: "Drag event handling, position calculation, or rendering issues in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "44lODNA", text: "I was dragging the AI assistant, and I saw a glitch where it seemed to oscillate a lot between two positions, like it was vibrating" },
            { id: "5BPrdvv", text: "When I drag the AI Assistant interface, at times there is a jarring 'vibration' effect that makes the Interface oscillate, causing me to feel shocked and frustrated. It should be updated so that the dragging motion is always smooth and the interface rarely if ever vibrates/oscillates. It might make sense to evaluate the root cause of this and ensure we can replicate the behavior consistently in development in order to identify the right solution." },
            { id: "gD6kaoM", text: "Mic button is not working, and while dragging the assistant it feel lot of resistance.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-11-at-22.33.49.png?id=2l8Aep&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJsOEFlcCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE4ODkxOX0.HshMp002TTPoKaPJyQJrNQtO3aM3Wzh0xA9X_3O1AJA&signature=a5e5e81beaade313b6571d72e8c56bcdb4d91524de3e6e14334e419f77fab3c6" }
          ]
        },
        {
          title: "Window Dragging Limited to Top Bar",
          count: 1,
          submissionIds: ["rjMvKZ2"],
          description: "Can only drag window from top bar, not from anywhere in the window",
          impact: "Counter-intuitive, slows down workflow (severity 10/10)",
          technicalNotes: "Extend drag area to entire window in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "rjMvKZ2", text: "The AI Assistant window should be draggable by clicking anywhere across all edges within the ai chat window, and not just the top bar. It is counter-intuitive to expect users to figure out where to click and enable the dragging." }
          ]
        },
        {
          title: "Z-Index and Layering Problems",
          count: 2,
          submissionIds: ["RGykzvP", "lbkg7x5"],
          description: "AI Assistant window interferes with address bar, dropdown menus appear behind other elements",
          impact: "Can't access browser controls, menus hidden (severity 10/10)",
          technicalNotes: "Z-index hierarchy needs to be fixed in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "RGykzvP", text: "while moving the ai assistant window, the placement of the address bar was getting interrupted with the ai window. fix the elevation hierarchy by increasing the z-index value of the ai assistant window.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-2.53.14-AM.png?id=lYDjjN&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxZRGpqTiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIwNTY2MX0.99V-nTZsfhBUaaf3sZ7zbrOie1phd4V9sJshaRkQPjE&signature=353665a8c0c3085f14023a044a87dbd19d21cea1fcf37f39ce616ec91a4ab34b" },
            { id: "lbkg7x5", text: "When I click the 3 dots button to see the menu with 'sign in,' 'sign up,' and 'account' on the AI asssistant, sometimes the menu appears behind the 'Oasis AI' bar. In general, the menu should never be hidden by any element or component. For instance it should have the highest Z index", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-10.15.33-AM.png?id=PbdQge&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBiZFFnZSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIzNTU3N30.JEq3PhT627_iVURaamo6UEC5pbBSRububsmR_EbUPAM&signature=01151ee77fb891fc322a4a816a5c5b22477c35fbbb1611e4691edf6f361c872a" }
          ]
        },
        {
          title: "Focus Management Issues",
          count: 1,
          submissionIds: ["Zjrv9OV"],
          description: "Clicking behind AI Assistant doesn't bring that window forward, AI stays on top",
          impact: "Can't access content behind AI window without minimizing (severity 9/10)",
          technicalNotes: "Window focus handling needed in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "Zjrv9OV", text: "When i click on a screen behind the AI assistant screen, the focus does not go to the screen. I expect the screen I click on to be brought forward and the AI assistant to be behind it. This is general practice. It's very annoying that I have to minimize the AI assistant first to see the screen that I want to see and I have to maximize the AI assistant to use it." }
          ]
        },
        {
          title: "Window State Management",
          count: 4,
          submissionIds: ["Np1MpWB", "A7eyejy", "BzW0r7Y", "44Vz6dd"],
          description: "AI Assistant should remember size and position, auto-minimize when clicking outside, snap to corner when minimized, stay in viewport when maximizing",
          impact: "Users have to reposition window every time (severity 10/10)",
          technicalNotes: "Position/size persistence, auto-minimize logic, viewport constraints in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "Np1MpWB", text: "The AI assistant should default to a smaller size so it doesn't take up all my screen space. It should also be off to the side. I wonder, if I resize it and place it in a certain spot on my screen, if it would remember that's where I want the AI assistant. Or do I have to resize it and place it every time I use the Oasis browser. It is important for Oasis to remember where I want the AI assistant to be placed on my screen and the size of the AI assistant so that I don't have to keep doing it." },
            { id: "A7eyejy", text: "when I click on the minimize icon within the ai assistant, it should minimize and automatically snap to the bottom right corner of the web page." },
            { id: "BzW0r7Y", text: "when the user clicks outside the ai assistant window, the window should automatically minimize and snap to the bottom right corner because the user is expecting the ai window to get out of their way while browsing." },
            { id: "44Vz6dd", text: "when I switch from minimized version to the maximized version, sometimes the ai assistant is displayed out of viewport window, this makes me take another step of dragging the ai window into the viewport which makes the browsing experience slow.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-4.54.10-AM.png?id=yoPPvB&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlvUFB2QiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIxMTgwMn0.55Jrs-V0vWX27WBaBXCI5iwXOYob9sZh_Tm3RsxtVLE&signature=a6ce32cac0282a98c01be191b6b1901802274f9c5ab0080c8422dc68bc19cb17" }
          ]
        },
        {
          title: "Minimized Window Interaction",
          count: 2,
          submissionIds: ["jaAvX8E", "q41vqMO"],
          description: "Should be able to click anywhere on minimized window to expand; dropdown menu should appear outside window bounds",
          impact: "Counter-intuitive interaction (severity 8-9/10)",
          technicalNotes: "Click-anywhere-to-expand, dropdown positioning in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "jaAvX8E", text: "In the minimized version of the ai chat window, I should be able to click anywhere to expand it to at least, display the input box. It's counter intuitive to ask the users to click on the icon to expand and only then be able to use the ai assistant.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-4.32.27-AM.png?id=d8q5JD&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4cTVKRCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIxMDQ5Mn0.1UMNejpn5KWz_Gvs18OvShqhIxqnq2DikmjtLHyFUpQ&signature=76edebcd5bac8ebdd8e7a5684f78147df0bbda0e9c1d97201a832b828e2488f7" },
            { id: "q41vqMO", text: "In the minimized version of the ai assistant, when I click on the 3 dot menu, I should be able to see all the dropdown options. Since the options are displayed inside the ai window, they are getting hidden. Instead place it outside the ai window", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-4.35.35-AM.png?id=aANbd9&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFBTmJkOSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIxMDY5NX0.lKvYZe5H7QsirtNO1cB7xscbYwW_SAhZpxY6tjYu0kA&signature=7e2c6757adbe4cd5caf948fa756901f08044347175f2905fd370dd3d1c712764" }
          ]
        },
        {
          title: "Window Resizing",
          count: 1,
          submissionIds: ["jaAvjr9"],
          description: "Should be resizable from all edges, with min width/height",
          impact: "Limited flexibility (severity 10/10)",
          technicalNotes: "Resizing from all edges with constraints in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "jaAvjr9", text: "the ai chat window should be resizable from all the edges of the chat window. set a minimum width and height for the window. also, add a shortcut to show and hide the ai assistant window." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Window dragging is smooth with no oscillation",
        "Window can be dragged from anywhere within the window",
        "Z-index hierarchy is correct (AI Assistant doesn't block browser controls)",
        "Clicking behind AI Assistant brings that content forward",
        "AI Assistant remembers size and position across sessions",
        "Auto-minimizes and snaps to corner when clicking outside",
        "Minimized window can be expanded by clicking anywhere",
        "Window is resizable from all edges with constraints",
        "Keyboard shortcut to show/hide AI Assistant is implemented",
        "Visible toggle button is added next to profile/settings dropdown in browser UI",
        "AI Assistant shows by default on first browser install",
        "AI Assistant shows by default when browser is opened"
      ]
    },
    {
      id: 3,
      title: "Tab Operations & Detection",
      emoji: "🪟",
      priority: "HIGH",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "9-10/10",
      overview: "Fix tab-related operations including tab detection, finding existing tabs, and tab group management. All issues work with the same browser tab APIs and are naturally related. This sprint focuses on making tab operations work correctly before enhancing tab groups.",
      primaryFiles: "commands.ts (tab commands), hubs.ts",
      issues: [
        {
          title: "Tab vs Window Confusion",
          count: 2,
          submissionIds: ["b5QvG2e", "A7ey1jB"],
          description: "'open new tab' opens a new window instead; commands create multiple AI Assistant windows",
          impact: "Unexpected behavior, confusing UX (severity 10/10)",
          technicalNotes: "Command interpretation in commands.ts needs to distinguish tabs from windows",
          feedback: [
            { id: "b5QvG2e", text: "When I gave the command 'open new tab,' instead of opening a new tab, it opened a new window." },
            { id: "A7ey1jB", text: "when I gave the command to open a new tab and split view, it showed 2 ai assistant windows, it felt confusing. It should show only one and that one should be displayed in the original window. This made me think, where can I access the previous chats I had with oasis ai?" }
          ]
        },
        {
          title: "Can't Find/Open Existing Tabs",
          count: 1,
          submissionIds: ["rjMgGBN"],
          description: "'Open Yahoo Mail' creates new tab instead of finding/opening existing tab",
          impact: "Creates duplicate tabs, can't navigate to existing content (severity 10/10)",
          technicalNotes: "Tab detection and matching logic needed in commands.ts (URL/hostname matching, fuzzy title matching)",
          feedback: [
            { id: "rjMgGBN", text: "I used the microphone and said 'Open Yahoo Mail' in the AI assistant. The AI assistant correctly typed in Open Yahoo Mail but it failed to open Yahoo Mail. As you can see in the screen in the screen shot, it opened a tab (marked invalid URL as tab name. AI assistant put Yahoo mail in the url. I had a Yahoo mail tab. What I wanted the AI assistant to do is to open up the existing Yahoo mail tab. Now I did have two tabs that are related to Yahoo mail. I wanted AI assistant to open or put focus on my Yahoo mail inbox tab. No value in AI assistant if it can't open/find existing tabs. It would be helpful if I say open or find a tab that the AI assistant finds it and opens it.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-12-at-10.40.56-AM.png?id=PbdJ85&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBiZEo4NSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIzNjMxMn0.lDooR6vNKV-iisyArJTPXyLYst-NACBq-SusaVaTuVo&signature=6eae02b9cc11264cf7b66bfe47b402a0f9375bff65e67772c147113107a19c16" }
          ]
        },
        {
          title: "Adding Tabs to Tab Groups Fails",
          count: 3,
          submissionIds: ["eqW0MdE", "KYKWzVV", "aQqA5Xy"],
          description: "AI commands like 'add this tab to my Google Sheets tab group' or 'put my tabs with google sheets in a tab group' don't work.",
          impact: "Users can't organize their workspace (severity 9-10/10)",
          technicalNotes: "Tab detection, tab group matching, or tab-to-tab-group association logic may be broken in hubs.ts and commands.ts",
          feedback: [
            { id: "eqW0MdE", text: "Entered the following command in AI assistant: add this tab to my Google Sheets tab group. My current tab had a google spreadsheet. The tab was not added.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-4.51.16-PM.png?id=X1Vjvz&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlgxVmp2eiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MTk4N30.mpqdBFowWh6yVTAHIy-ps7MAg_x92rfwLldv25fMjac&signature=cd20dd07c1f78e4cb73003845a1b67af50e985ad47fe30ab00cccf42976ae37d" },
            { id: "KYKWzVV", text: "I entered the following in AI assistant: put my tabs with google sheets in a tab group called Google Sheets. It didnt put any of the tabs in the new tab group it created. From the screenshot you can see I had 3 Google Sheet tabs open", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-4.39.03-PM.png?id=OdpRop&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9kcFJvcCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MTY1NX0.dlGcIS2hAH2sJIJHmHFXIvZ_y_SBDYVUBoqQecrOKWM&signature=b4d08e4ec98efd713c9f361fe2036d6b13a5d45f46f011a33121980c2a370156" },
            { id: "aQqA5Xy", text: "I entered the following in AI assistant: Add 2026 expenses tab to Google Sheets tab group. The 2026 expenses tab was not added but the Oasis Feedback tab was added.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-5.03.17-PM.png?id=Zv40j0&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp2NDBqMCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MjcwN30.opoxJUs2r1R9NCtd159iHcL5by9FJWaisdJNfczpu_k&signature=e836ab5e56275716aa5b6c561db6046e3455449f5993699993668d7260515298" }
          ]
        }
      ],
      acceptanceCriteria: [
        "'open new tab' creates a tab, not a window",
        "Commands can find and focus existing tabs when appropriate",
        "Users can successfully add tabs to existing tab groups via AI commands",
        "Tab detection and matching works correctly for tab group operations"
      ]
    },
    {
      id: 4,
      title: "UI Polish & Content Display",
      emoji: "🎨",
      priority: "MEDIUM",
      storyPoints: 11,
      effort: "Low-Medium",
      impact: "Medium",
      severity: "7-10/10",
      overview: "UI polish and content display improvements. These are pure UI/CSS fixes with no window behavior logic. Quick wins that improve readability and user experience.",
      primaryFiles: "assistant.ui.js (rendering, CSS)",
      issues: [
        {
          title: "Text Formatting Issues",
          count: 1,
          submissionIds: ["gD6v1rK"],
          description: "White background on AI responses, markdown headings show asterisks instead of bold",
          impact: "Poor readability, unprofessional appearance (severity 7/10)",
          technicalNotes: "Markdown rendering, CSS background fixes in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "gD6v1rK", text: "The AI outputs need formatting fixes. 1. Remove white bg color from all the ai responses. 2. Headings in the text output must be bolded (right now it's showing markdown text with astericks)", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-4.23.06-AM.png?id=Qz2PlX&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlF6MlBsWCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIwOTk5OX0.ZJQYj6HYXKZ-V8LjWxwEPr6QlGCtgIVn-r-um129H3Y&signature=e6b760f0559d5e81c1bee432db07e748eeaafe2aae68d75c1048aebe1e5844fa" }
          ]
        },
        {
          title: "Text Selection Color",
          count: 1,
          submissionIds: ["dWevyQy"],
          description: "Selected text in AI responses is not readable (black text on dark selection)",
          impact: "Can't read selected text (severity 10/10)",
          technicalNotes: "CSS fix for selected text color in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "dWevyQy", text: "when I select the text in the ai response, the selected text is not readable to the eye. Change the text color from black to white when selected.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-4.50.01-AM.png?id=861oBx&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MW9CeCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIxMTUzN30.PO_H95atGMKdsU3o4QhDTcbS9BMY_CEIIBrKWJZWcHo&signature=5df5c2af2d56d3c425d4a44f7cfe324ac8f4eeb25625eb904c161dd6ee7cca40" }
          ]
        },
        {
          title: "Visual Feedback Missing",
          count: 1,
          submissionIds: ["Y5lkXDW"],
          description: "No visual feedback when voice icon is clicked, words only appear after pause",
          impact: "Users don't know if voice is working (severity 8/10)",
          technicalNotes: "Visual indicators for voice recording state in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "Y5lkXDW", text: "When the user clicks on the voice icon, there is not visual feedback that the button is working or the words are getting dictated since, the words display only after you hit the pause button." }
          ]
        },
        {
          title: "Empty State Improvements",
          count: 1,
          submissionIds: ["7RrMGb0"],
          description: "Empty state feels incomplete, needs illustration and example prompts",
          impact: "First impression is poor, users don't know what to do (severity 7/10)",
          technicalNotes: "Add illustration, example prompts, improve first-impression UX in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "7RrMGb0", text: "fix the empty state for the ai chat window, right now it feels incomplete. (add the illustration and remove the oasis ai text placement). since this is the initial interaction with oasis ai assistant, the experience should be memorable. Add some example prompts for the empty state which will give users a head start with ai assistant and its capabilities.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-5.03.10-AM.png?id=GqxezO&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdxeGV6TyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODIxMjM4Nn0.RZCVhTBm_ol6rSr3e-ET9jA4Ss2L4kGRSeTmqzOyjlM&signature=45959b7561c8e774f90af9bfa219893690e567554ebea43f794dd83c661c7f51" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Text formatting renders correctly (no white bg, proper markdown)",
        "Selected text is readable",
        "Visual feedback shows when voice is active",
        "Empty state has illustration and example prompts"
      ]
    },
    {
      id: 5,
      title: "UI Fixes & Response Formatting (Completed)",
      emoji: "✅",
      priority: "MEDIUM",
      storyPoints: 3,
      effort: "Low-Medium",
      impact: "Medium",
      severity: "4-6/10",
      overview: "Completed UI fixes and AI response formatting improvements. These issues have been verified as working well.",
      primaryFiles: "browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/assistant.ui.js",
      issues: [
        {
          title: "Bug: Confusing AI Response Format",
          count: 1,
          submissionIds: ["2EWX81j"],
          description: "AI responses sometimes just say 'in a new tab.' which is confusing. Should provide more context.",
          impact: "Confusing user experience (severity 4/10)",
          technicalNotes: "Improve response formatting in assistant.ts (tool output to natural language conversion)",
          feedback: [
            { id: "2EWX81j", text: "My input: open articles about setting up an organization in salesforce. Oasis AI: in a new tab. This prompt actually opened a new tab with the article about the salesforce accounts but the AI replied - 'in a new tab.' which was confusing for me" }
          ]
        },
        {
          title: "UI: Input Text Wrapping Issue",
          count: 1,
          submissionIds: ["0Q9exbZ"],
          description: "When typing longer text, the content goes beyond the visible input area rather than wrapping or scrolling, causing readability and UX issue.",
          impact: "Poor UX for longer inputs (severity 5/10)",
          technicalNotes: "Fix text input wrapping/scrolling in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "0Q9exbZ", text: "When typing longer text, the content goes beyond the visible input area rather than wrapping or scrolling, causing readability and UX issue.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-8.30.21-PM.png?id=YJxkz5&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IllKeGt6NSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTA5NDI4NX0.obp_ayTrs1xZrc-I4xRfTsFDWJw-0iO633KABYxJFGg&signature=1182859eb9f047c1837039419e5e0352ebc7d90b75f4faa4f46979daf87ce925" }
          ]
        },
        {
          title: "UI: Double Scrollbars in Chat",
          count: 1,
          submissionIds: ["2EGZJvD"],
          description: "When the length of the conversation in AI chat increased, user saw 2 scrollbars.",
          impact: "UI glitch (severity 6/10)",
          technicalNotes: "Fix scrollbar styling in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "2EGZJvD", text: "when the length of the conversation in ai chat increased, i saw 2 scrollbars", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-2.31.52-PM.png?id=Nbq51N&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5icTUxTiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODI0NjM3M30.MhjJ1LV6-AZZdnPrpAnruE2O-o1Zx4VGdr8HNpBtUFI&signature=96d15b67208d0adbe98f0d604794f0777b45cc702b81d1bff532be8b66e070ae" }
          ]
        }
      ],
      acceptanceCriteria: [
        "AI responses are clear and contextual",
        "Input text wraps/scrolls correctly",
        "Only one scrollbar appears in chat"
      ]
    },
    {
      id: 7,
      title: "Assistant Engine Reliability (LangGraph, tool-output formatting)",
      emoji: "🚨",
      priority: "CRITICAL",
      storyPoints: 13,
      effort: "Medium",
      impact: "High",
      severity: "9-10/10",
      overview: "Fix tool output formatting and network error handling in the AI Assistant. These issues relate to command execution infrastructure and response formatting.",
      primaryFiles: "browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/proxyClient.ts, browser/base/content/assistant/build/src/awsSignedFetch.ts",
      issues: [
        {
          title: "Tool Output Text in Responses",
          count: 1,
          submissionIds: ["J94KydJ"],
          description: "AI responses show raw tool output text like '[Tool Output for add_tab_to_tab_group]' instead of natural language responses.",
          impact: "Poor user experience, unprofessional appearance (severity 10/10)",
          technicalNotes: "Response formatting in assistant.ts - need to convert tool outputs to natural language",
          feedback: [
            { id: "J94KydJ", text: "After I run ai commands like 'add this tab to the tab group', the output displays text [Tool Output for add_tab_to_tab_group], which is unnecessary to the user to see. The user experience would be more elegant if the response came only with natural language that directly addresses the original prompt in a conversational style, for example saying 'Added the selected tab to tab group \"ai browsers\".'" }
          ]
        },
        {
          title: "Network Errors on Tab Group Commands",
          count: 1,
          submissionIds: ["68BeBDA"],
          description: "Commands like 'list my tab groups' result in NetworkError when attempting to fetch resource",
          impact: "Core functionality broken (severity 9/10)",
          technicalNotes: "Network request handling, error handling, retry logic needed in proxyClient.ts or awsSignedFetch.ts (signed request plumbing; likely surfaced as NetworkError)",
          feedback: [
            { id: "68BeBDA", text: "AI command: 'list my tab groups'. Output: 'Error: NetworkError when attempting to fetch resource.'" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Tool output text is converted to natural language in responses",
        "Network errors are handled gracefully with retry logic"
      ]
    },
    {
      id: 6,
      title: "Human-in-the-Loop (HITL) Framework - Phase 1: MVP/Prototype",
      emoji: "🔄",
      priority: "MEDIUM",
      storyPoints: 42,
      effort: "High",
      impact: "High",
      severity: "8/10",
      overview: "Implement the MVP/prototype of the Human-in-the-Loop (HITL) framework to enable product testers to begin providing inputs and participating in the loop. This is the most basic implementation that establishes the core HITL workflow: data input → machine processing → human review → intervention → feedback loop. The goal is to get the fundamental system working so testers can start contributing to AI improvement through their corrections and validations. Uses existing patterns: UsageTracker/UsageLogger for service structure, transcription_usage table pattern for database schema.",
      rewardSystem: "Reward System: Users who submit feedback through the HITL system will receive 1-3 credits/tokens back as compensation. Since tokens are a constraint, this provides a nice incentive for users who give feedback. If someone experienced a bad command output, they would be compensated by getting 1-2 tokens back. This reward system encourages participation and helps users feel valued for their contributions to improving the AI.",
      primaryFiles: "hitlFeedback.ts (NEW), hitlPipeline.ts (NEW), assistant.ui.js (EXTEND), assistant.ts (EXTEND), proxyClient.ts (EXTEND), supabase_migration.sql (EXTEND)",
      issues: [
        {
          title: "Database Schema for HITL Feedback",
          count: 0,
          submissionIds: [],
          description: "Create Supabase database schema to store HITL feedback, corrections, and training data. Create hitl_feedback table with user_id, session_id, conversation_id, user_input, ai_output, corrected_output, feedback_type, feedback_score, timestamps. Create hitl_training_data table for processed corrections ready for model training. Add RLS policies and indexes.",
          impact: "Foundation for storing all HITL data",
          technicalNotes: "Similar pattern to existing transcription_usage table. Low-Medium complexity. Can replicate existing Supabase RLS policy patterns.",
          feedback: []
        },
        {
          title: "Feedback Collection UI Components",
          count: 0,
          submissionIds: [],
          description: "Add UI components to assistant.ui.js that allow users to provide feedback on AI responses. Add thumbs up/down buttons, 'Correct' button with inline text editor, 'Flag' button for reporting issues. Create feedback modal/panel for detailed corrections. Store feedback state locally until submission.",
          impact: "Enables users to interact with HITL system",
          technicalNotes: "Medium complexity. Can extend existing message bubble components in assistant.ui.js. Can be built in parallel with database schema.",
          requiresUI: true,
          feedback: []
        },
        {
          title: "HITL Feedback Service",
          count: 0,
          submissionIds: [],
          description: "Create service to collect, validate, and store feedback from UI components. Create services/hitlFeedback.ts similar to usageLogger.ts pattern. Methods: submitFeedback(), getUserFeedbackStats(), validateFeedback(). Integrate with SupabaseAuth for user context. Handle offline scenarios.",
          impact: "Handles all feedback collection logic",
          technicalNotes: "Medium complexity. Follows existing service patterns (UsageTracker/UsageLogger). Depends on database schema.",
          feedback: []
        },
        {
          title: "Intercept AI Outputs for Review",
          count: 0,
          submissionIds: [],
          description: "Modify assistant.ts to capture AI outputs and make them available for feedback. Modify runAssistantStream() to store conversation context: user input, AI output, command executions, session ID. Create conversation context object that can be passed to feedback UI. Store conversation context temporarily.",
          impact: "Enables the review step in HITL workflow",
          technicalNotes: "Low-Medium complexity. Mostly adding data capture to existing flow. Can be done independently.",
          feedback: []
        },
        {
          title: "Feedback Processing Pipeline",
          count: 0,
          submissionIds: [],
          description: "Create pipeline to process feedback and prepare it for model training. Create services/hitlPipeline.ts with processFeedback(), prepareTrainingData(), batchFeedback(). Create Supabase function/trigger to process feedback automatically. Format training data according to model requirements. Queue processed data for model training.",
          impact: "Connects feedback to model improvement",
          technicalNotes: "High complexity. Requires understanding of model training data format, batch processing logic. Depends on database schema and feedback service.",
          feedback: []
        },
        {
          title: "Model Training Integration",
          count: 0,
          submissionIds: [],
          description: "Integrate feedback pipeline with AI model training/update system. Extend proxyClient.ts or create new endpoint: submitTrainingData(), checkModelUpdateStatus(). Backend integration (Lambda function) to receive training data batches, trigger model fine-tuning/update process. Handle model versioning.",
          impact: "Completes the feedback loop - corrections improve the model",
          technicalNotes: "Very High complexity. Requires backend changes, model training infrastructure, versioning. May require coordination with backend team. May be split into multiple stories.",
          feedback: []
        },
        {
          title: "Basic Feedback Loop Testing",
          count: 0,
          submissionIds: [],
          description: "Create tests and validation for the complete HITL workflow. Unit tests for feedback service, integration tests for feedback collection → storage → processing, manual testing checklist for product testers, test data fixtures for development.",
          impact: "Ensures HITL system works end-to-end",
          technicalNotes: "Medium complexity. Standard testing approach. Depends on all above components.",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Database schema created with hitl_feedback and hitl_training_data tables",
        "UI components allow users to provide thumbs up/down, corrections, and flags on AI responses",
        "Feedback service collects and stores all user feedback to Supabase",
        "AI outputs are captured and associated with user inputs for feedback context",
        "Feedback pipeline processes corrections into training data format",
        "Model training integration sends processed feedback to backend for model updates",
        "Basic HITL workflow is tested and validated end-to-end",
        "Product testers can begin participating in the loop and providing inputs"
      ]
    },
    {
      id: 16,
      title: "Gemini Model Migration (Critical)",
      emoji: "⚠️",
      priority: "CRITICAL",
      storyPoints: 3,
      effort: "Medium",
      impact: "Critical",
      severity: "10/10",
      overview: "Migrate from Gemini 2.0 models (discontinued March 31, 2026) to supported models. Completed by Rushyanth: Changed model to 'gemini-3-flash-preview' which is working. As noted by Rushyanth, Google will most probably discard 2.5 Flash as well in the near future, so migrating directly to gemini-3-flash-preview was the right approach.",
      primaryFiles: "browser/base/content/assistant/build/src/proxyClient.ts / awsSignedFetch.ts, browser/base/content/assistant/build/src/services/subscription.ts",
      issues: [
        {
          title: "Critical: Gemini Model Migration Required",
          count: 1,
          submissionIds: ["jaRPLRY"],
          description: "Google is discontinuing Gemini 2.0 models (Gemini 2.0 Flash and Gemini 2.0 Flash Lite) on March 31, 2026. Need to migrate to supported models (e.g., 2.5 Flash, 2.5 Flash Lite) before this date.",
          impact: "AI Assistant will stop working if not addressed (severity 10/10)",
          technicalNotes: "Update model configuration in proxyClient.ts / awsSignedFetch.ts (depending where model selection lives). Also update services/subscription.ts (usage model tagging currently defaults to `gemini-1.5-flash`). Test with new models. Coordinate with backend team if needed.",
          feedback: [
            { id: "jaRPLRY", text: "Google recently announced: 'We're discontinuing Gemini 2.0 models on AIS. On March 31, 2026, we're discontinuing the following Gemini 2.0 models: Gemini 2.0 Flash (gemini-2.0-flash, gemini-2.0-flash-001) and Gemini 2.0 Flash Lite (gemini-2.0-flash-lite, gemini-2.0-flash-lite-001). Required action: Migrate to a supported Gemini model (e.g., 2.5 Flash, 2.5 Flash Lite). Impacted projects: oasis-browser-469518. If we don't properly address the Gemini change from Google, it could cause the AI assistant to stop working universally'" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Gemini model migration completed before March 31, 2026",
        "All model references updated to supported versions",
        "System tested with new models",
        "No functionality regressions"
      ],
      completionNote: "Completed by Rushyanth: Saw sprint 16, its an easy fix, they will most probably discard 2.5 flash as well in near future, so i changed our model to 'gemini-3-flash-preview' its working, so Sprint16 is done."
    },
    {
      id: 14,
      title: "Webpage Summarization",
      emoji: "📄",
      priority: "MEDIUM",
      storyPoints: 10,
      effort: "Medium-High",
      impact: "Medium",
      severity: "6-8/10",
      overview: "Implement webpage content extraction and automatic summarization functionality. Includes both single webpage summarization and multi-tab summarization for research workflows.",
      primaryFiles: "browser/base/content/assistant/build/src/summarize.ts (NEW), browser/base/content/assistant/build/src/assistant.ts",
      issues: [
        {
          title: "Feature Request: Webpage Summarization",
          count: 1,
          submissionIds: ["xXqrxDJ"],
          description: "Users want AI Assistant to automatically summarize webpages they visit, not just mention the title. Currently AI says it needs a moment to review but doesn't provide summary.",
          impact: "Would enhance research productivity (severity 6/10)",
          technicalNotes: "Implement webpage content extraction and summarization. May create new summarize.ts module or extend assistant.ts",
          feedback: [
            { id: "xXqrxDJ", text: "I wanted to see the summary of the webpage that I visited, which wasn't happening and the assistant just mentioned the webpage title and was asking me about further details. My request: open articles about setting up an organization in salesforce. review this and let me know the insights. Oasis AI: I have opened a tab with a Salesforce article titled 'How to Set Up Salesforce: A Step-by-Step Guide'. To give you insights, I need you to give me a moment to review the contents of the webpage. Once I've done that, I'll provide a summary of the key steps and insights from the article." }
          ]
        },
        {
          title: "Performance: Can't Summarize Wiki Pages",
          count: 1,
          submissionIds: ["44Vqkb5"],
          description: "Could not summarize wiki page. Given prompt was to open apple Inc. wiki and summarize their history, but summarization failed.",
          impact: "Feature doesn't work for some content (severity 8/10)",
          technicalNotes: "Webpage content extraction and summarization logic - may need better handling for Wikipedia and similar sites. May extend summarize.ts module",
          feedback: [
            { id: "44Vqkb5", text: "Could not summarize wiki page. Given prompt was to open apple Inc. wiki and summarize their history", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-11.14.54-AM.png?id=EZqzzN&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVacXp6TiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODI0NTQxM30.iVDd1BgRn3aRQuEqdPfzgiLVviFxt-uDfDSi_CsvBN8&signature=9ae58bb5cd89f66728af482eeb94a75437f83902c56bae75e03b0e982d9f5dfc" }
          ]
        },
        {
          title: "Feature Request: Tab Summarization",
          count: 1,
          submissionIds: ["7R72950"],
          description: "Ability to 'summarize and give insights across these 15 tabs'",
          impact: "Would make research easier (severity 6/10)",
          technicalNotes: "Implement tab content extraction and summarization across multiple tabs",
          feedback: [
            { id: "7R72950", text: "As a user opening 15 tabs on a topic that I'm researching, I want to be able to prompt the AI assistant to 'summarize and give me insights across these 15 tabs.' It would make a lot of my research easier because i wouldn't have to manually read everything or copy content into ChatGPT. It would reduce the number of steps in my process." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Webpage summarization works for all content types",
        "Summarization works for Wikipedia and similar sites",
        "Content extraction handles various webpage structures",
        "Summaries are accurate and useful",
        "Tab summarization feature allows summarizing multiple tabs at once"
      ],
      completionNote: "Completed by Rushyanth"
    },
    {
      id: 12,
      title: "AI Command for Native Splitview",
      emoji: "🪟",
      priority: "MEDIUM",
      storyPoints: 5,
      effort: "Medium",
      impact: "High",
      severity: "10/10",
      overview: "Integrate with Firefox's native splitview API to allow AI commands to trigger splitview functionality (two tabs side by side within the same window).",
      primaryFiles: "browser/base/content/assistant/build/src/commands.ts, Firefox native splitview API integration",
      issues: [
        {
          title: "Feature Request: AI Command for Native Splitview",
          count: 1,
          submissionIds: ["XxaWDBj"],
          description: "Users want to use AI commands to trigger Firefox's native splitview feature (where two tabs are arranged side by side within the same window). Currently 'splitview' command opens tabs in two new windows.",
          impact: "Would enhance productivity (severity 10/10)",
          technicalNotes: "Integrate with Firefox's native splitview API, create new command for native splitview (rename existing splitview command to something else)",
          feedback: [
            { id: "XxaWDBj", text: "As a user, I want to be able to use an ai command that triggers the new existing 'splitview' (Add splitview) feature in Oasis. Firefox introduced a 'splitview' feature to see two tabs side by side. I want to be able to control that feature and use it through the AI assistant. In the past, we created a 'splitview' command that opens the tabs in two new windows which are in a splitview, so that functionality should be called something else. 'Splitview' commands should pertain to the existing splitview functionality that is native to firefox, where two tabs are arranged in a splitview within the same window", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-3.27.25-PM.png?id=1NpZ8W&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFOcFo4VyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTExNzQ0NX0.BonC49LjrWP1wPg1dVy9BW6doK7AQEeV-ihZICciuj4&signature=42fea6b90fee1dc3c64efbc1afc2d17761d28a1c319cd8996f7e5cc6f2a0d7bb" }
          ]
        }
      ],
      acceptanceCriteria: [
        "AI command for native Firefox splitview implemented",
        "Existing splitview command renamed appropriately",
        "Native splitview works correctly within the same window"
      ],
      completionNote: "Completed"
    }
  ]

  // Active sprints (in progress)
  const activeSprints = [
    {
      id: 5,
      title: "UI/Bug Fixes",
      emoji: "🐛",
      priority: "MEDIUM",
      storyPoints: 2,
      effort: "Low-Medium",
      impact: "Medium",
      severity: "6-9/10",
      overview: "Fix various UI issues and bugs in the AI Assistant interface. Includes bookmark management fixes.",
      primaryFiles: "browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/commands.ts, browser/base/content/assistant/assistant.ui.js, Firefox bookmark API",
      issues: [
        {
          title: "Bug: Invalid URL Opened",
          count: 1,
          submissionIds: ["OD2aDK8"],
          description: "AI opened a URL that was not actually a webpage (https://www.youtube.com/howyoutubeworks/creators/upload-videos/) when user asked to open article about uploading video in YouTube.",
          impact: "Opens invalid pages (severity 9/10)",
          technicalNotes: "URL validation and content checking before opening in tab command module",
          feedback: [
            { id: "OD2aDK8", text: "I wanted to open an article about uploading an video in youtube, but the AI replied and opened and URL which was not actually a webpage. Oasis AI: in a new tab. [The opened URL link - https://www.youtube.com/howyoutubeworks/creators/upload-videos/]", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-21-at-4.40.24-PM.png?id=qJJZQg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFKSlpRZyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTAzNTI3MH0.oZB18p6NLlQ7vXLJ3nVASTbX-DZ1GPpLNCxMOAtW7eY&signature=0c4aca5180c70dbb9253ccd94c56de11a2eff2d5e00926f790ddc58f0ffc0786" }
          ]
        },
        {
          title: "UI: Make Minimize/Maximize More Intuitive and Add Resizing",
          count: 1,
          submissionIds: ["Xxa0l5V"],
          description: "Make the minimize and maximize feature of the Assistant interface more intuitive. When minimized, the maximize button should be visible and the minimize button should be greyed out. When maximized, the maximize button should be greyed out. Additionally, the assistant interface (AI assistant window) should be resizable by clicking and dragging any of its 4 sides.",
          impact: "Improves usability and user control over AI assistant window (severity 6/10)",
          technicalNotes: "Minimize/maximize toggle logic and button state management in assistant.ui.js. Add resize handles on all 4 sides of the assistant window. Implement drag-to-resize functionality with minimum/maximum size constraints.",
          requiresUI: true,
          feedback: [
            { id: "Xxa0l5V", text: "After minimizing the chat by clicking the minimize button, clicking it again has no effect. It would be great if clicking it again restored the chat to its original size. The minimize and maximize feature should be more intuitive - if it's minimized, the maximize button should be there but the minimize button should be greyed out. If it's maximized, the maximize button should be greyed out. Also, the assistant interface should be resizable by clicking and dragging any of its 4 sides." }
          ]
        },
        {
          title: "Removing Bookmarks Doesn't Work",
          count: 1,
          submissionIds: ["lbkVQEp"],
          description: "'remove [bookmark]' command can't find imported Chrome bookmarks",
          impact: "Can't clean up imported bookmarks (severity 7/10)",
          technicalNotes: "Integrate Firefox bookmark API, implement bookmark search/removal commands",
          feedback: [
            { id: "lbkVQEp", text: "I asked AI assistant to remove 'Wyzant' bookmark I imported from Google Chrome and it couldn't find it. I consider this basic functionality that should work. It's not a feature.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-11.57.16-AM.png?id=6AbGpe&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZBYkdwZSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE1NDQyNn0.EkbFQCmWDUmFM6L-sRD-iGb8KhxKAfeTNoVOXkJDIaM&signature=8396795c26d2ee3720592bc4d5a8ddb151858f3e0a1ecbde62f71ead00b63694" }
          ]
        }
      ],
      acceptanceCriteria: [
        "URL validation prevents opening invalid pages",
        "Minimize/maximize buttons show correct states (minimize greyed when minimized, maximize greyed when maximized)",
        "Assistant interface is resizable by dragging any of its 4 sides",
        "Bookmark removal works for imported bookmarks via AI commands"
      ]
    },
    {
      id: 8,
      title: "Tab Group & Tab/Window Operations",
      emoji: "📁",
      priority: "HIGH",
      storyPoints: 36,
      effort: "Medium-High",
      impact: "High",
      severity: "7-10/10",
      overview: "Fix tab group operations including renaming, finding tabs within groups, adding/removing tabs, and tab group state accuracy. Also fix core tab/window commands that users perceive as 'it said it worked but nothing happened.' This sprint covers both tab group management and tab/window command correctness. Includes context-based tab organization using AI to automatically group related tabs. ✅ RESOLVED ISSUES (archived): Tab Group Renaming Fails, Tab Group Renaming and Listing Tabs Fails, Can't Find Tabs in Tab Groups, Adding Tabs to Groups Adds Wrong Tabs, Tab Group Creation with Zero Items, Compound Command: Create Group + Add Tab Fails, Feature Request: Add All Tabs to Tab Group. ⚠️ PARTIALLY RESOLVED: \"Close Tab Group\" Command Deletes Hub Instead (Delete command works, but Close command doesn't exist - Close should hide tab group, Open should restore it).",
      primaryFiles: "browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/commands.ts, browser/base/content/assistant/build/src/services/localMemory.ts, Browser first-run / startup UI (for browser import, privacy policy, vertical tabs popup), browser/branding/**",
      issues: [
        {
          title: "Can't Find Tabs in Tab Groups",
          count: 2,
          submissionIds: ["68BP0AJ", "QKQ4N2G"],
          description: "AI assistant reports tab groups are empty when they contain tabs, or can't find specific tabs within groups (e.g., '2026 expenses tab').",
          impact: "Can't navigate to saved content (severity 10/10)",
          technicalNotes: "Tab group content querying logic broken in hubs.ts - needs to properly enumerate tabs within groups",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "68BP0AJ", text: "I asked AI assistant what is in my GoogleSheets tab group and it said I had nothing in it. As you can see from the screenshot, there are tabs in it.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-18-at-12.18.41-PM.png?id=1NMl6l&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFOTWw2bCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODc2MDQxMX0.p4G4AtlNoH7OaMGS6N2oL4pICVgBQbnDEp7Zjfcmtfk&signature=7f767a62e0bbf707925efaceafc3a0c3db165ddbf5c3f76223210227d437034a" },
            { id: "QKQ4N2G", text: "I asked AI assistant to open 2026 expenses tab. It said it opened it. As you can see in the screenshot, it opened a new tab (Page Not Found) with GoogleSheets. It did not open my existing 2026 expenses tab.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-18-at-12.21.27-PM.png?id=bYL7Dg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJZTDdEZyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODc2MDYwN30.krGmO1q8eqhuXEed_Hi2aOv_p3W0LWNUNCE5QFYgMPY&signature=c78c4911000225c0f2ae4cca5097736bd3fefddf364254971b58d1593267a024" }
          ]
        },
        {
          title: "Adding Tabs to Groups Adds Wrong Tabs",
          count: 1,
          submissionIds: ["Ek77J5r"],
          description: "Commands to add specific tabs to groups (e.g., 'add all the youtube tabs') add all open tabs instead of just the specified ones.",
          impact: "Can't selectively organize tabs (severity 8/10)",
          technicalNotes: "Tab filtering/matching logic broken in hub command module - needs to properly match tabs by URL, title, or domain",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "Ek77J5r", text: "command: create a group called youtube learning and add all the youtube tabs under it. result: added all the opened tabs instead of just the youtube ones. command: do not add all the tabs, add just the youtube tabs. result: added all the opened tabs instead of just the youtube ones. command: remove all the tabs under youtube learning except youtube tabs. result: added all the opened tabs instead of just the youtube ones." }
          ]
        },
        {
          title: "Tab Group Creation with Zero Items",
          count: 1,
          submissionIds: ["kdPNA4R"],
          description: "Creating tab groups via AI command sometimes creates groups with 0 items when tabs should be added.",
          impact: "Tab groups created but empty (severity 7/10)",
          technicalNotes: "Tab group creation and tab addition logic may have timing or state issues in hub command module",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "kdPNA4R", text: "I used the ai command 'create tab group called \"GTM\"'. [Tool Output for create_tab_group]: Created tab group \"GTM\" with 0 items. open product hunt", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-15-at-6.40.10-PM.png?id=d8xVDq&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4eFZEcSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODUyNDEwOH0.eZ0fCDEw34xvnggFzJ_42z9KXYIZa4YuVBsyXGWBlaI&signature=cc7b0d68d31fa07462369a6ca69fe4818130deb6386fb8f1f05a5072f8cdcd5f" }
          ]
        },
        {
          title: "Compound Command: Create Group + Add Tab Fails",
          count: 1,
          submissionIds: ["b5pKjkZ"],
          description: "Creating tab group and adding specific tab in one compound command doesn't work correctly. Wrong tab gets added instead of the specified one (e.g., 'Create a new tab group called \"Email\" and add my Gmail tab to it' adds wrong tab).",
          impact: "Can't efficiently create and populate tab groups (severity 10/10)",
          technicalNotes: "Compound command parsing and tab matching logic in hub command module - needs to properly identify and add the correct tab when specified",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "b5pKjkZ", text: "As a user, I want to be able to create a new tab group and add an open tab to it with a single compound command. User: 'Create a new tab group called \"Email\" and add my Gmail tab to it', AI: 'Created hub \"Email\" with 0 items.' '[Tool Output for add_tab_to_hub]: Added 1 tab(s) to hub \"Email\".' The outcome was 1/2 correct. A new tab group called 'Email' was created, however, the wrong tab was added to it. My open Gmail tab was not added to it.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-24-at-3.23.17-PM.png?id=JeBaXr&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkplQmFYciIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTI4OTkzN30.ABGGBUtl3Vo4ADF2rDpS5reAlnWM7QVZ1puzHb5d36g&signature=8f922ec462cadd09545180cb12f4b36b1263eb184e1cbf780fdbd9d7b341edfa" }
          ]
        },
        {
          title: "\"Close Tab Group\" Command Deletes Hub Instead",
          count: 1,
          submissionIds: ["VLevPEv"],
          description: "Command to close tab group deletes the hub instead of closing it. Hub deletion doesn't actually work either - hub remains after deletion attempt.",
          impact: "Can't close tab groups without losing them (severity 10/10)",
          technicalNotes: "Command intent parsing and hub operation logic in hub command module - 'close' should close tabs, not delete hub. Need to distinguish between 'close' and 'delete' operations.",
          resolutionNote: "⚠️ PARTIALLY RESOLVED: The 'Delete' tab group command now works correctly and successfully deletes tab groups. However, the 'Close' command still doesn't exist. Closing is different from deleting - closing should hide the tab group (without deleting it), and users should be able to say 'Open tab group' to make it display again. Need to implement separate 'Close' command that hides tab groups without deleting them.",
          feedback: [
            { id: "VLevPEv", text: "As a user, I want to be able to use the AI Assistant to 'close' a tab group or close open tabs. User: 'Close my Email tab group', AI: 'Deleted hub \"Email\" (1 items removed).' First of all, I didn't want it to delete the tab group. It ultimately did not delete the tab group or close the tab group.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-24-at-3.29.51-PM.png?id=bYABDL&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJZQUJETCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTI5MDI0Mn0.-BpxhVTnZHHZ491BX9rUZv6flqqYOVM6P2T6keDqrwM&signature=8a0306805fa11d2dba1b43c7cbbb081ef3cd4d9daf210788e7694b1af07d223d" }
          ]
        },
        {
          title: "Duplicate Tab Closing Issues",
          count: 2,
          submissionIds: ["5B7jrkM", "GxGl65Q"],
          description: "Commands to close duplicate tabs don't work correctly. Fails to close tabs by domain (e.g., all Zoom tabs).",
          impact: "Can't manage tab clutter effectively (severity 7-9/10)",
          technicalNotes: "Tab matching logic needs improvement - URL comparison, domain extraction, duplicate detection algorithm in tab command module",
          feedback: [
            { id: "5B7jrkM", text: "I asked to close duplicate tabs it closed only one tab and when I asked to close all the duplicate tabs it closed all the tabs." },
            { id: "GxGl65Q", text: "As a worker starting my day with 37+ tabs open, I tried 'close all duplicate tabs' but similar tabs still open. Then used 'close all tabs for Zoom' but not all tabs beginning with 'https://us05web.zoom.us' were closed. There seems to already be an existing 'Close all duplicate tabs' command in Firefox itself. It may be possible to leverage this", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-11.27.28-AM.png?id=NbRN5l&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5iUk41bCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwMzAwMX0._sNSNX8xPTTZNqiSBfxlkI-gnhW9uukPp6sFFxygsfw&signature=d323dd8c375c520ae8f8c8c42b21ff12fee079de1d9f61b6481c7b38ac1bf90d" }
          ]
        },
        {
          title: "Tab Closing Commands Don't Work",
          count: 1,
          submissionIds: ["5BPQY2Z"],
          description: "Commands to close bookmarks/tab groups report success but tabs remain open. Tool output shows tabs were closed but they're still visible.",
          impact: "Commands appear to work but don't actually execute (severity 8/10)",
          technicalNotes: "Tab closing logic may have async timing issues or state synchronization problems in tab command module",
          feedback: [
            { id: "5BPQY2Z", text: "When tried to close the whole bookmark(multiple tabs inside that), it says it closed, but i can still see them open. Steps: open multiple tabs, bundle them as a bookmark, insert prompt 'close that bookmark test', then 'can you close all open tabs?' - it says it closed, but i still see them open.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-15.38.37.png?id=VbpGRJ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZicEdSSiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODI1MDg3Mn0.l9Yy-pVu_YHNZ5l63w581XAE7AhcsJ0FZQqZBf2WSgw&signature=444974b4326362535ebb5753661a84c8702325bc8c72f119591899f781a6f2cd" }
          ]
        },
        {
          title: "Feature Request: Add All Tabs to Tab Group",
          count: 1,
          submissionIds: ["7RA2oJA"],
          description: "Users want to be able to say 'Add all tabs to Research tab group' and have every open tab saved into that tab group. This would help manage tab clutter.",
          impact: "Would make managing many tabs easier (severity 10/10)",
          technicalNotes: "Implement 'add all tabs to tab group' command in hub command module - should add all currently open tabs to specified tab group",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "7RA2oJA", text: "I'd like to request a new Oasis feature to make managing too many tabs much easier using tab groups. A common scenario: there are a dozen tabs open for a single project—news articles, references, emails—and everything quickly becomes unwieldy. With this feature, Oasis would let users say something like, 'Add all tabs to Research tab group,' and every open tab would be saved into a tab group called 'Research' for later. All those pages would be neatly organized in one place, so the user can close the on-screen clutter with confidence. Later, they could reopen that tab group and have everything restored just as they left it.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-3.49.08-PM.png?id=vJKjV4&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZKS2pWNCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTExODY4NH0.QZyZKM8fy6EBRr5sXdhAK2ft93hXHejB5EAy06F8Ecs&signature=437ca53e87e55feb2cdf531fbe8bfe7ac445c0c1b5774a02d1994374ebe349e3" }
          ]
        },
        {
          title: "Feature Request: Context-Based Tab Organization",
          count: 1,
          submissionIds: ["b5pdjNZ"],
          description: "Users want to organize tabs into groups based on context using AI. For example, 'I have multiple tabs open relating to AWS, Deepgram, Lambda functions, and Supabase. Create a group for these.' Currently creates group with wrong tabs.",
          impact: "Would make tab organization much easier (severity 7/10)",
          technicalNotes: "Implement context-aware tab grouping using AI to analyze tab content/URLs and group related tabs. Reference: Firefox has 'suggest more of my tabs' feature that analyzes tabs and suggests groups.",
          feedback: [
            { id: "b5pdjNZ", text: "As a worker starting his day with 37+ tabs open, I wish I could easily use the ai assistant and command it to 'organize my tabs into groups based on context.' For example, I want to be able to say something like 'I have multiple tabs open relating to AWS, Deepgram, Lambda functions, and Supabase. Create a group for these.' Currently, the behavior is the following: a new tab group named 'AWS, Deepgram, Lambda, Supabase' is created with one tab (the Oasis Feedback tab) saved in it. There is already a feature in firefox called 'suggest more of my tabs'. It is available when you manually create a tab group by clicking and dragging tabs on top of each other. If you click 'suggest more of my tabs', the browser analyzes the tabs you have open and suggests more to be added to the group, and it also suggests a contextual name for the tab group.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-11.31.35-AM.png?id=EZNV8l&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVaTlY4bCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwMzQ5Nn0.bRo8VyGQOkR0G9_K4kJmDN2hmcPVRAJHVm6A4qGARmk&signature=112352375738d4577df0e11f9f4104986110b2d5659a67eb82afc50f1ee83c18" }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ Tab groups can be renamed via AI commands - RESOLVED (tested: 'Rename tab group Sports to Work' worked correctly)",
        "AI assistant state matches actual tab group state",
        "AI assistant can find and list tabs within tab groups",
        "AI assistant can open specific tabs from within tab groups",
        "⚠️ Adding tabs to groups only adds specified tabs (not all tabs) - PARTIALLY RESOLVED (basic adding works, complex matching needs testing)",
        "Tab groups are created with tabs when specified",
        "✅ Tab group renaming commands return proper responses (not empty) - RESOLVED",
        "✅ Listing tab groups works correctly - RESOLVED (tested: 'List tab groups' returned correct list)",
        "⚠️ Compound commands (create group + add tab) work correctly and add the right tab - PARTIALLY RESOLVED (correctly adds specified tab but also incorrectly adds current tab)",
        "⚠️ 'Close tab group' command closes tabs without deleting the hub - PARTIALLY RESOLVED (Delete command works, but Close command doesn't exist yet - Close should hide tab group, Open should restore it)",
        "✅ Hub deletion works correctly when explicitly requested - RESOLVED",
        "Duplicate tab closing works correctly",
        "Tab closing by domain/URL pattern works correctly",
        "Tab closing commands actually close tabs (no false success messages)",
        "'Add all tabs to tab group' command works correctly",
        "All currently open tabs are added to the specified tab group",
        "Command handles edge cases (no tabs open, tab group doesn't exist)",
        "Context-based tab organization using AI implemented",
        "AI correctly identifies related tabs based on context",
        "Tab groups are created with correct tabs and appropriate names"
      ]
    },
    {
      id: 9,
      title: "Authentication + Subscription UX (login, signup, session restore, limits)",
      emoji: "🔐",
      priority: "HIGH",
      storyPoints: 16,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      overview: "Fix authentication, login, signup, password management, and the 'paid but still limited' experience. This sprint is UI-heavy and should be owned by one engineer (or split by 'UI vs backend service' if needed) due to the size of `assistant.ui.js`.",
      primaryFiles: "browser/base/content/assistant/assistant.ui.js, browser/base/content/assistant/build/src/services/supabase.ts, browser/base/content/assistant/build/src/services/subscription.ts, browser/base/content/assistant/build/src/proxyClient.ts",
      issues: [
        {
          title: "No Error Message on Invalid Login",
          count: 1,
          submissionIds: ["GxAgbQo"],
          description: "When entering incorrect credentials, no user-facing error message is displayed. Error only appears in console logs.",
          impact: "Users don't know why login failed (severity 8/10)",
          technicalNotes: "Error handling in assistant.ui.js or supabase.ts - need to surface console errors to user",
          requiresUI: true,
          feedback: [
            { id: "GxAgbQo", text: "When I tried to log in using my credentials, I intentionally entered incorrect credentials. However, there was no user-facing error message or popup indicating that the credentials were invalid. When I checked the logs, I could see: console.error: 'Email sign in error:' 'Invalid login credentials'. Based on this, it would be better to display a clear error message to the user when they attempt to log in with incorrect credentials, instead of only logging the error in the console.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-15.06.59.png?id=RbWW8P&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJiV1c4UCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODI0ODYwNX0.sTGpJJFmYznqAux8OPytrxRfGwISikp26nkRaTvtmyo&signature=d3470744823cb78bd43b2d8eaa5de26093636521d50ab64a06c3bab0136de44c" }
          ]
        },
        {
          title: "Sign-in Menu Hidden Behind Navigation Bar",
          count: 2,
          submissionIds: ["q41xByO", "OD2QMrp"],
          description: "Sign-in menu appears behind the Oasis AI navigation bar, making it difficult or impossible to see and access.",
          impact: "Can't access sign-in functionality (severity 6-10/10)",
          technicalNotes: "Z-index and menu positioning in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "q41xByO", text: "The Sign-in menu was hidden behind the Oasis Ai's Navigation bar! It should be visible below the bar! The sign-in should be made easier, it was kinda hard to find this option" },
            { id: "OD2QMrp", text: "Sign-in option not visible, unable to sign in", screenshot: "https://storage.tally.so/private/bug1.png?id=Qzv6xY&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlF6djZ4WSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTAzMTc1N30.PB8CzPjxWxc03HCOgye79sXauK-ukiBCoAGt7qiMroc&signature=5afb369661ef1c427ff09b75f2796ee96167bfda9f722a112cc2db5d8fd3ffad" }
          ]
        },
        {
          title: "Login Menu Doesn't Appear After Logout",
          count: 1,
          submissionIds: ["RGyXvL4"],
          description: "After logging out, clicking the 3 dots menu doesn't show login options. User has to click on white space behind the menu to access login.",
          impact: "Can't log back in after logout (severity 10/10)",
          technicalNotes: "Menu click handling and visibility logic in assistant.ui.js",
          requiresUI: true,
          feedback: [
            { id: "RGyXvL4", text: "I logged out of the AI assistant. I could not enter any commands which is appropriate. I tried to log back in so I clicked on the 3 dots and nothing seemed to happen. Eventually, I accidentally clicked on white space behind the 3 dots and the login screen came up. When I click on the 3 dots, menu items or the login screen should pop up where I can see it if I'm not logged in.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-14-at-4.39.38-PM.png?id=pJDOgJ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBKRE9nSiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODQzMDU1MH0.DPv5dIeuXuKWk8c_YXeUGLOssJhLF2n8wWc7KnEc0E0&signature=88ccc506db27522ddeeeffa39fe4672eb3b887c1d59778789902061d7ab09afd" }
          ]
        },
        {
          title: "Signup Doesn't Work",
          count: 1,
          submissionIds: ["xXW77z5"],
          description: "When trying to sign up, account is not created. No error message displayed, and user cannot sign in after attempted signup.",
          impact: "New users can't create accounts (severity 10/10)",
          technicalNotes: "Signup flow in assistant.ui.js or services/supabase.ts - error handling and user feedback needed",
          requiresUI: true,
          feedback: [
            { id: "xXW77z5", text: "When I am trying to sign up for using the AI assistant, the account is not getting created. It does not reflect any message, nor does it allow me to sign in." }
          ]
        },
        {
          title: "Can't Change Password",
          count: 1,
          submissionIds: ["kdobDeZ"],
          description: "Users cannot change their password from the Oasis Assistant for their Kahana account.",
          impact: "Password management broken (severity 7/10)",
          technicalNotes: "Password change functionality in assistant.ui.js or account settings UI",
          requiresUI: true,
          feedback: [
            { id: "kdobDeZ", text: "I was not able to change my password from the Oasis Assistant for my Kahana account" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Clear error messages displayed for invalid login credentials",
        "Sign-in menu is visible and accessible (not hidden behind navigation bar)",
        "Login menu appears correctly after logout",
        "Signup flow works and creates accounts successfully",
        "Password change functionality works",
        "All authentication errors are user-friendly and actionable"
      ]
    },
    {
      id: 10,
      title: "Onboarding + Branding polish (first run, visibility, Firefox remnants)",
      emoji: "🎯",
      priority: "MEDIUM-HIGH",
      storyPoints: 8,
      effort: "Medium",
      impact: "High",
      severity: "6-10/10",
      overview: "Improve the first-time user experience including onboarding flow, default preferences, browser import, AI Assistant visibility, and removing Firefox branding. Includes browser import in onboarding, Firefox privacy policy replacement on first launch, and Firefox branding removal in vertical tabs popup.",
      primaryFiles: "browser/base/content/assistant/assistant.ui.js (assistant visibility / entry points), Browser first-run / startup UI (exact files TBD when implementing), browser/branding/**",
      issues: [
        {
          title: "AI Assistant Not Visible by Default",
          count: 1,
          submissionIds: ["rj4PdO2"],
          description: "When initially installing Oasis, the AI assistant isn't immediately open by default. Users have to search for it and don't know where to open it.",
          impact: "Poor discoverability of core feature (severity 10/10)",
          technicalNotes: "Browser initialization logic - AI Assistant should be open by default on first install and whenever browser loads",
          requiresUI: true,
          feedback: [
            { id: "rj4PdO2", text: "When I initially install Oasis, the AI assistant isn't immediately open by default. I have to search for it and don't know where to open it. By default, the AI assistant should always be open and displayed when the browser is initially installed and whenever it is loaded." }
          ]
        },
        {
          title: "Tabs from Other Devices Shows Firefox",
          count: 1,
          submissionIds: ["2EWPvvA"],
          description: "When clicking 'tabs from other devices' button, user sees Firefox branded interface and link to log into Mozilla account. This is confusing.",
          impact: "Confusing for users (severity 8/10)",
          technicalNotes: "Hide or replace 'tabs from other devices' functionality - should be hidden to avoid confusion",
          requiresUI: true,
          feedback: [
            { id: "2EWPvvA", text: "As a new user, when I click the 'tabs from other devices' button, I see a Firefox branded interface and link to log into my Mozilla account. This is confusing. There should be no option to click the 'tabs from other devices' button. It should be hidden to avoid confusion", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.21.34-PM.png?id=xRl555&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InhSbDU1NSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwNjE4NX0.G8XN6JYVyVMeTbnB2b9XMMpgUYGF4RVL9KlNtdu3Xgg&signature=f9d7983e7015b11e5584b4ad173940052bc84f87ec10933d857bf3865995fc6b" }
          ]
        },
        {
          title: "Default Preferences Not Set",
          count: 1,
          submissionIds: ["Bzy7bq4"],
          description: "As a new Oasis user, good default preferences are not automatically enabled. Users have to manually turn on settings like 'Open links in tabs instead of new windows', 'Ctrl+Tab cycles through tabs in recently used order', etc.",
          impact: "Users have to configure settings manually (severity 6/10)",
          technicalNotes: "Set optimal default preferences on first install in settings.ts",
          feedback: [
            { id: "Bzy7bq4", text: "As a new Oasis user, I would appreciate it if I could setup good default preferences when I initially install Oasis. For example, when i click the 'settings' option, I see multiple good defaults that I have to manually turn on, but I wish they were automatically on when i install. These are: Ctrl+Tab cycles through tabs in recently used order, Open links in tabs instead of new windows, Open links from apps next to your active tab, Warn you when opening multiple tabs might slow down Oasis, When you open a link, image or media in a new tab, switch to it immediately, Ask before closing multiple tabs, Browser Layout - Horizontal tabs, Display at top of browser, Vertical tabs, Display on the side, in the sidebar, Show sidebar", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.33.29-PM.png?id=NbRZYj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5iUlpZaiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwNjg1OX0.aAR5p5BoqJmXDJf_V2u_LGAbmyRxtFtL0LBBcw6dXVs&signature=60bc609e3c8c542ef567b65039e5a6931f5848650e31b853d5fc175a799e7176" }
          ]
        },
        {
          title: "Login Not Obvious for First-Time Users",
          count: 1,
          submissionIds: ["kdobD0M"],
          description: "As a first time user, it is not obvious to log in to AI assistant, it is difficult to find and how to access it. Once opened, it's difficult to figure out how to sign up.",
          impact: "Users can't get started (severity 6/10)",
          technicalNotes: "Onboarding flow should guide users to sign up/login, make it more discoverable",
          requiresUI: true,
          feedback: [
            { id: "kdobD0M", text: "As a first time user, it is not obvious to log in to AI assistant, it is difficult to find and how to access it. Once I open it, its difficult to figure out how to sign up in it." }
          ]
        },
        {
          title: "Firefox Branded Image Popup on New Profile",
          count: 1,
          submissionIds: ["rj42xGN"],
          description: "As a new Oasis user setting up a New Profile, it was confusing to see a Firefox Branded image popup upon entering the new profile created.",
          impact: "Confusing branding for new users (severity 6/10)",
          technicalNotes: "Replace Firefox branding in new profile creation flow with Oasis branding",
          requiresUI: true,
          feedback: [
            { id: "rj42xGN", text: "As a new Oasis user setting up a New Profile, it was confusing to see a Firefox Branded image popup upon entering the new profile i created", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-24-at-2.39.44-PM.png?id=EZa4Z4&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVaYTRaNCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTI4NzI0Nn0.aCfmdfDYUQ3xHHY3j9Y-dO7Qpp0ZYUXVsd1ehDZlFYQ&signature=43dd7b8de08820b0b574908e152d8735c2ca013ea9b78364004e8c301e431f07" }
          ]
        },
        {
          title: "No Browser Import in Onboarding",
          count: 1,
          submissionIds: ["Me4RJ4M"],
          description: "When installing Oasis for the first time, there's no option to import data from Chrome/Safari and other browsers immediately in the onboarding flow.",
          impact: "Users can't easily migrate from other browsers (severity 10/10)",
          technicalNotes: "Onboarding flow needs browser import option - can leverage Firefox's existing import functionality",
          requiresUI: true,
          feedback: [
            { id: "Me4RJ4M", text: "When a user installs Oasis for the first time, there should be an option to import data from chrome/safari and other browsers immediately in the onboarding flow. The user should know that it is possible to import immediately and be able to easily take action.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.29.46-PM.png?id=Bj2R71&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJqMlI3MSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwNjYxNX0.__rJRjYu7WImp-45-L-ZrXfXlL6erlULqlTdpepwdoA&signature=feaa1fa4a1ba1fbcd4ba89dd43c1b1f8d099d2f513f172e484d0271ed1c1c0f9" }
          ]
        },
        {
          title: "Firefox Privacy Policy on First Launch",
          count: 1,
          submissionIds: ["Bzy7Bj5"],
          description: "As a first-time Oasis user, when installing and opening the browser for the first time, a Firefox privacy policy tab opens instead of Oasis new tab page or Kahana privacy policy.",
          impact: "Confusing branding, poor first impression (severity 10/10)",
          technicalNotes: "Browser initialization - replace Firefox default page with Oasis/Kahana page",
          feedback: [
            { id: "Bzy7Bj5", text: "As a first-time Oasis user, when I install and open the browser for the first time, I see a Firefox privacy policy tab open https://www.mozilla.org/en-US/privacy/firefox/. This is confusing because I would expect to see the 'new tab' page for Oasis or the Kahana privacy policy instead https://kahana.co/privacy-policy", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.13.15-PM.png?id=GqQAoj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdxUUFvaiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwNTY4Mn0.5OzFjPRZVDMaKYkJGtwKEcTz4K9we1U2ZSlWDKWHSXk&signature=cfc9ccdfca6548993adc659512d9557b285cb2b23d91ea3268f8f27a351ce009" }
          ]
        },
        {
          title: "Firefox Branding in Vertical Tabs Popup",
          count: 1,
          submissionIds: ["PdxOEY5"],
          description: "When turning on vertical tabs as a new user, a purple popup with Firefox logo and cartoon fox appears. This is not on-brand for Oasis.",
          impact: "Confusing branding (severity 8/10)",
          technicalNotes: "Replace Firefox branding in vertical tabs popup with Oasis branding",
          requiresUI: true,
          feedback: [
            { id: "PdxOEY5", text: "When I 'turn on vertical tabs' as a new user, I see a purple popup with the firefox logo and a cartoon fox. This is not on-brand for Oasis and seems confusing and buggy. It would make sense to swap the firefox portions of the popup and modify the pop up so it is on-brand with Oasis", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.07.48-PM.png?id=pJkpy1&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBKa3B5MSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwNTM2NH0.hGh4YjifQ96MGhKw8dEfLBBNP7VizfxUZnWcOaJkgQc&signature=1a50fb17952fec483e7c72b09629954ed0a8b93c3ce45072cd9be04b76dddb54" }
          ]
        }
      ],
      acceptanceCriteria: [
        "AI Assistant is open and visible by default on first install and browser launch",
        "All Firefox branding is replaced with Oasis branding",
        "'Tabs from other devices' button is hidden or replaced",
        "Optimal default preferences are set automatically on first install",
        "Login/signup is discoverable and guided in onboarding",
        "New profile creation shows Oasis branding instead of Firefox branded image popup",
        "Onboarding flow includes browser import option (Chrome, Safari, etc.)",
        "First launch shows Oasis/Kahana page instead of Firefox privacy policy",
        "Firefox branding in vertical tabs popup is replaced with Oasis branding"
      ]
    },
    {
      id: 11,
      title: "Making it Easy to Find Saved Websites",
      emoji: "🔍",
      priority: "MEDIUM",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      overview: "Help users find previously viewed webpages by implementing comprehensive search across tab groups, bookmarks, and browser history. The AI assistant can search using natural language descriptions to help users locate and open saved websites, regardless of where they're stored (tab groups, bookmarks, or history).",
      primaryFiles: "browser/base/content/assistant/build/src/search.ts (NEW), browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/tags.ts (NEW), browser/base/content/assistant/assistant.ui.js",
      issues: [
        {
          title: "Feature Request: Semantic History Search",
          count: 1,
          submissionIds: ["QKZVWp1"],
          description: "Users want to search browsing history using natural, fuzzy descriptions (e.g., 'that article about beginner investing') instead of exact titles or URLs. Should feel like asking a personal memory assistant.",
          impact: "Would significantly improve productivity (severity 10/10)",
          technicalNotes: "Implement semantic search over browsing history. Reference: Firefox already has semantic search capability (https://connect.mozilla.org/t5/discussions/try-out-the-new-semantic-history-search-feature-and-share/m-p/99835). May be able to leverage existing Firefox functionality. Create new search.ts module.",
          requiresUI: true,
          feedback: [
            { id: "QKZVWp1", text: "I'd like to request a new Oasis feature called Semantic History Search. Users often struggle to find pages they know they visited before, especially when they can't remember exact titles, URLs, or specific keywords. People tend to remember the idea or context of what they saw ('that article about beginner investing' or 'the recipe with lemon and garlic') rather than precise page names. Users can type natural, fuzzy descriptions of what they remember (topics, purposes, or rough phrases) and quickly see the most relevant past pages surface from their history. There is already a semantic search capability in firefox which can be a reference: https://connect.mozilla.org/t5/discussions/try-out-the-new-semantic-history-search-feature-and-share/m-p/99835" }
          ]
        },
        {
          title: "Feature Request: Find Content in Tab Groups",
          count: 1,
          submissionIds: ["xXqY1vJ"],
          description: "Users want to search through all saved tab groups to find specific content (e.g., 'Find my Apple article'). AI Assistant should search through all tab groups and pull up the exact page.",
          impact: "Would make finding saved content much easier (severity 8/10)",
          technicalNotes: "Implement search functionality across tab groups, including content indexing and semantic matching. May extend search.ts module.",
          requiresUI: true,
          feedback: [
            { id: "xXqY1vJ", text: "if I saved an article about Apple's latest tech in one of my tab groups, I can simply ask Oasis: 'Find my Apple article.' In seconds, the AI Assistant searches through all my saved tab groups and pulls up the exact page I need. It's like having a super-smart librarian for all your web content.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-1.26.14-PM.png?id=KWa9EM&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktXYTlFTSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTExMDI0OH0.h0NLlFZCog53Gp384zaoAlC3GcdHFX8K2z_8y_nWoSg&signature=2d8526b6b1f5110951c8971f25b030170f31e8da71b7db6b4746153867c75406" }
          ]
        },
        {
          title: "Feature Request: Tags for Websites",
          count: 1,
          submissionIds: ["NpZvGdG"],
          description: "Users want to add tags to websites to allow easier searching.",
          impact: "Would improve content organization (severity 9/10)",
          technicalNotes: "Implement tagging system for saved sites/tab groups. May extend hubs.ts or create new tags.ts module",
          requiresUI: true,
          feedback: [
            { id: "NpZvGdG", text: "It would be nice if I could add tags to a website which would allow me to search more easily." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Semantic history search implemented",
        "Users can search history using natural language descriptions",
        "Search functionality across tab groups implemented",
        "Users can find content in tab groups using natural language",
        "Search results accurately identify and open the correct page from tab groups",
        "Tagging system for websites implemented",
        "Users can add tags to websites and tab groups",
        "Tags can be used for searching and filtering",
        "Tagging UI is intuitive and accessible",
        "Unified search interface allows searching across history, tab groups, and bookmarks",
        "AI assistant can open found pages directly from search results"
      ]
    },
    {
      id: 13,
      title: "Chat History Access",
      emoji: "💬",
      priority: "MEDIUM",
      storyPoints: 13,
      effort: "Medium-High",
      impact: "Medium",
      severity: "7/10",
      overview: "Implement chat history storage and retrieval, allowing users to access previous AI Assistant chat threads from other days.",
      primaryFiles: "browser/base/content/assistant/build/src/chatHistory.ts (NEW), browser/base/content/assistant/assistant.ui.js, services/supabase.ts",
      issues: [
        {
          title: "Feature Request: Chat History Access",
          count: 1,
          submissionIds: ["xXqY2aJ"],
          description: "Users expect to be able to access previous AI Assistant chat threads (conversation history) from other days. Currently AI says it can only access current session.",
          impact: "Users want persistent chat history (severity 7/10)",
          technicalNotes: "Implement chat history storage and retrieval - store conversations in Supabase, create UI to access past conversations. Create new chatHistory.ts module.",
          requiresUI: true,
          feedback: [
            { id: "xXqY2aJ", text: "As an early Oasis user, I expect to be able to access previous AI Assistant chat threads (conversation history) and/or get a clear answer about AI Assistant history works and what I should expect. 'how is our ai assistant chat history handled? Can I access previous chats from other days?' Current AI response: 'I can access the complete conversation history within our current interaction. However, I don't have the ability to access previous chats from other days. My memory is limited to the current session.'", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.16.37-PM.png?id=zG15bZ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InpHMTViWiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTExMDI0OH0.jCeih9O-1CfQfCzVYxkYOYKWKkB3g1md-QWx8pMzyZo&signature=ae16daaae6b282cff1d9399c6855a155d447334b6e2a49b0a3743ad741962eb0" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Chat history storage and access implemented",
        "Conversations are stored in Supabase",
        "UI allows users to access past conversations",
        "Chat history persists across sessions"
      ]
    },
    {
      id: 15,
      title: "Automatic Software Updates",
      emoji: "🔄",
      priority: "MEDIUM",
      storyPoints: 13,
      effort: "Medium-High",
      impact: "High",
      severity: "9/10",
      overview: "Implement update checking, notification system, and update UI within Oasis for software updates.",
      primaryFiles: "Update checking and notification system (NEW), Settings or dedicated update component UI, browser/base/content/assistant/assistant.ui.js",
      issues: [
        {
          title: "Feature Request: Automatic Software Updates",
          count: 1,
          submissionIds: ["5B7xd7d"],
          description: "Users want to receive software update notifications within Oasis itself, with an Update button and option to turn on Automatic software updates, similar to Apple System settings UI.",
          impact: "Would improve update experience (severity 9/10)",
          technicalNotes: "Implement update checking, notification system, and update UI in settings or dedicated update component",
          requiresUI: true,
          feedback: [
            { id: "5B7xd7d", text: "As an Oasis user, rather than receive new software updates by manually installing a new version through a file on the kahana.co/installations page, I would prefer to receive notifications within Oasis itself where I can follow the notification to a 'software update' page similar to the UI of Apple System settings, where I can check if new software updates are available and actually click an Update button to update my software, and/or turn on Automatic software updates.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-12.05.22-PM.png?id=rJkMyp&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJKa015cCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwNTIxOH0.NTmCc8VtMpUIj7E6umxXQMqtydAJAD5BTXecUOoo2-k&signature=34299a9179a06127cc230c092e18d21875a00a9e325e67c33f6d3eb17db2f6d8" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Automatic software updates system implemented",
        "Update notifications appear within Oasis",
        "Update UI is accessible and intuitive",
        "Users can enable/disable automatic updates"
      ]
    },
    {
      id: 17,
      title: "Oasis Enterprise Browser Chromium Version",
      emoji: "🏢",
      priority: "HIGH",
      storyPoints: 55,
      effort: "High",
      impact: "High",
      severity: "9/10",
      overview: "Develop a Chromium-based version of Oasis Enterprise Browser to address enterprise customer requirements for secure SaaS access. This sprint is motivated by enterprise demand for managed browsers that can provide secure access to cloud applications for short-term consultants and third-party partners without requiring full device management or shipping hardware. By 2026, analysts project that roughly 25% of enterprises will be using managed browsers or extensions for security and access control. The enterprise browser market is growing rapidly, with most enterprise browsers being Chromium-based due to Chromium's dominant share of global browser usage and compatibility with modern SaaS applications. Organizations now use an average of 100+ SaaS apps, with large enterprises often using well over 150-400, which increases the need for centralized, browser-level security controls. This creates a significant market opportunity for Chromium-based enterprise browsers that can provide secure SaaS access for external users via managed browser sessions, with per-user, per-month licensing aligned to flexible contractor headcount. The goal is to reduce hardware and IT overhead, improve security posture for third-party access, and maintain a familiar user experience while enabling centralized controls for data protection and policy enforcement at the browser/session level.",
      primaryFiles: "Chromium browser fork (NEW), SSO integration module (NEW), Enterprise policy management (NEW), Browser installation without admin privileges (NEW)",
      issues: [
        {
          title: "SSO (Single Sign-On) Integration",
          count: 0,
          submissionIds: [],
          description: "Implement SSO integration to enable enterprise identity providers (e.g., Okta, Azure AD, Google Workspace) to authenticate users accessing SaaS applications through the managed browser. SSO is a critical requirement for enterprise customers who need to provide secure access to their SaaS apps for short-term consultants and third-party partners without granting broad device trust or network access.",
          impact: "Enables enterprise authentication and access control (severity 10/10)",
          technicalNotes: "Implement OAuth 2.0 / SAML 2.0 SSO flows, integrate with common identity providers (Okta, Azure AD, Google Workspace, etc.), handle token management and refresh, implement session management for SSO-authenticated sessions",
          feedback: []
        },
        {
          title: "Chromium Engine Integration",
          count: 0,
          submissionIds: [],
          description: "Build Oasis Enterprise Browser on Chromium engine for compatibility with modern SaaS applications and to match user expectations from mainstream browsers like Chrome. Chromium-based browsers are preferred by enterprises due to Chromium's dominant market share and web compatibility.",
          impact: "Ensures compatibility with enterprise SaaS applications (severity 9/10)",
          technicalNotes: "Fork Chromium or use Chromium Embedded Framework (CEF), integrate Oasis AI Assistant and enterprise features into Chromium, maintain compatibility with existing Chromium extensions and web standards",
          feedback: []
        },
        {
          title: "Installation Without Admin Privileges",
          count: 0,
          submissionIds: [],
          description: "Enable browser installation and operation without requiring local administrator privileges. This is essential for enterprise deployments where contractors and third-party partners may not have admin access on their devices.",
          impact: "Enables deployment on contractor devices without admin rights (severity 10/10)",
          technicalNotes: "Design portable installation that doesn't require system-level changes, use user-level installation paths, implement portable browser architecture, handle permissions and security contexts appropriately",
          feedback: []
        },
        {
          title: "Enterprise Policy Management",
          count: 0,
          submissionIds: [],
          description: "Implement centralized policy management for data protection and access control. Enable administrators to enforce policies at the browser/session level, such as blocking downloads, uploads, or risky actions, without requiring full device management.",
          impact: "Provides centralized security controls for enterprise deployments (severity 9/10)",
          technicalNotes: "Design policy management API and UI, implement policy enforcement engine, support common enterprise policies (download blocking, upload restrictions, URL filtering, etc.), integrate with enterprise management platforms",
          feedback: []
        },
        {
          title: "Per-User Per-Month Licensing Model",
          count: 0,
          submissionIds: [],
          description: "Implement licensing system that supports per-user, per-month pricing aligned to flexible and fluctuating contractor headcount. This aligns with enterprise requirements for scalable, usage-based licensing.",
          impact: "Enables flexible enterprise pricing model (severity 8/10)",
          technicalNotes: "Design licensing system with per-user tracking, implement monthly billing cycles, support user provisioning and deprovisioning, integrate with billing and subscription management",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "SSO integration supports major identity providers (Okta, Azure AD, Google Workspace)",
        "Browser runs on Chromium engine with full SaaS application compatibility",
        "Browser installs and operates without requiring local admin privileges",
        "Enterprise policy management enables centralized security controls",
        "Per-user, per-month licensing model is implemented and functional",
        "Browser can be easily deployed and removed for contractor engagements",
        "All enterprise features work seamlessly with existing Oasis AI Assistant functionality"
      ]
    }
  ]

  const toggleSprint = (sprintId) => {
    setExpandedSprint(expandedSprint === sprintId ? null : sprintId)
  }

  const toggleArchive = () => {
    setExpandedArchive(!expandedArchive)
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
          December 2025 - January 2026 Feedback | 130 Total Feedback Items (52 New)
        </p>
      </div>

      <section className="page-section">
        <div className="content-block">
          <h3>Sprint Selection Guide</h3>
          <div style={{ 
            backgroundColor: '#f0f9ff', 
            border: '2px solid #0ea5e9', 
            borderRadius: '8px', 
            padding: '15px', 
            marginBottom: '20px' 
          }}>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500', color: '#0369a1' }}>
              💡 <strong>Choose a sprint that excites you!</strong> We encourage developers to select sprints that they personally find most <strong>fun</strong> and where they think they'd be most <strong>effective</strong>. Once you've chosen which sprint you want to join (5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, or 16), please <strong>DM Adam Kershner on Slack</strong> to let him know. Feel free to DM Adam with any questions as well!
            </p>
          </div>
          <p>
            Each sprint below is self-contained and can be worked on independently. 
            Sprints are organized by <strong>codebase structure</strong> to maximize developer efficiency, while maintaining <strong>priority ordering</strong> for critical bugs. Engineers should select sprints based on:
          </p>
          <ul className="feature-list">
            <li><strong>Priority:</strong> Critical bugs affecting core functionality</li>
            <li><strong>Codebase Cohesion:</strong> Related code grouped together for efficiency</li>
            <li><strong>User Impact:</strong> Number of affected users and severity ratings</li>
          </ul>
          <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#666' }}>
            <strong>Note:</strong> Sprints 7-10 have been reorganized for <strong>parallel execution</strong> to minimize file conflicts. The issues were regrouped into parallel engineering tracks based on actual code ownership in the repo (most Oasis AI work is under `browser/base/content/assistant/`). The goal is to reduce merge conflicts by avoiding multiple engineers editing the same large files (notably `commands.ts` and `assistant.ui.js`) in the same sprint.
          </p>
          <div style={{ 
            backgroundColor: '#fef3c7', 
            border: '1px solid #f59e0b', 
            borderRadius: '6px', 
            padding: '12px', 
            marginTop: '15px',
            fontSize: '0.9rem'
          }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '500', color: '#92400e' }}>
              📋 <strong>How Sprints Are Organized:</strong>
            </p>
            <p style={{ margin: '0 0 8px 0', color: '#78350f' }}>
              These sprints are designed based on raw feedback from the <a href="https://tally.so/r/3jkNN6" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>Feedback Form</a> and accompanying <a href="https://docs.google.com/spreadsheets/d/1MvxrTrfmNV8j0zze2lsjVt-5R8YgkeTAWvV6dXH8B-w/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>Feedback Google Sheet</a>. Adam checks the <strong><a href="https://github.com/Kahana-LLC/firefox-oasis" target="_blank" rel="noopener noreferrer" style={{ color: '#0369a1', textDecoration: 'underline' }}>firefox-oasis codebase</a></strong> to organize sprints by codebase structure, focusing on specific parts of the codebase to:
            </p>
            <ul style={{ margin: '0 0 0 20px', padding: 0, color: '#78350f' }}>
              <li>Avoid overlap between sprints</li>
              <li>Promote working in parallel</li>
              <li>Reduce potential merge conflicts</li>
            </ul>
          </div>
          <p style={{ marginTop: '10px', fontSize: '0.95rem', color: '#6366f1', fontWeight: '500' }}>
            🎨 <strong>UI Icon:</strong> Issues marked with 🎨 UI require UI design work. Engineers should consult with <strong>Pournami</strong> (main UI designer) before starting implementation.
          </p>
        </div>
      </section>

      {/* Active Sprints Section */}
      <section className="page-section">
        <div className="sprints-container">
          {activeSprints.map((sprint) => (
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
                      <span className="story-points-badge">
                        {sprint.storyPoints} Story Points
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
                    {sprint.id === 7 && (
                      <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>
                        <strong>Prototype:</strong> <a href="https://oasis-roadmap.vercel.app/tuning-analytics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--oasis-green-medium)', textDecoration: 'underline' }}>User Analytics Dashboard</a>
                      </p>
                    )}
                    {sprint.rewardSystem && (
                      <div style={{ 
                        marginTop: '15px', 
                        padding: '15px', 
                        backgroundColor: '#fef3c7', 
                        border: '1px solid #f59e0b', 
                        borderRadius: '8px' 
                      }}>
                        <p style={{ margin: 0, color: '#92400e', fontWeight: '500' }}>
                          🎁 <strong>Reward System:</strong> {sprint.rewardSystem}
                        </p>
                      </div>
                    )}
                    {sprint.primaryFiles && (
                      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                        <strong>Primary Files:</strong> <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>{sprint.primaryFiles}</code>
                      </p>
                    )}
                  </div>

                  <div className="sprint-issues">
                    <h3>Issues Included ({sprint.issues.length})</h3>
                    {sprint.issues.map((issue, idx) => (
                      <div key={idx} className="issue-card">
                        <div className="issue-header">
                          <h4>
                            {idx + 1}. {issue.title} ({issue.count} {issue.count === 1 ? 'report' : 'reports'})
                            {issue.requiresUI && (
                              <span 
                                title="Requires UI design - consult with Pournami (main UI designer)"
                                style={{ 
                                  marginLeft: '10px', 
                                  fontSize: '0.9rem',
                                  color: '#6366f1',
                                  fontWeight: 'normal',
                                  cursor: 'help'
                                }}
                              >
                                🎨 UI
                              </span>
                            )}
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
                          {issue.resolutionNote && (
                            <div style={{ 
                              marginTop: '10px', 
                              padding: '12px', 
                              backgroundColor: '#fef3c7', 
                              border: '1px solid #f59e0b', 
                              borderRadius: '6px' 
                            }}>
                              <p style={{ margin: 0, color: '#92400e', fontWeight: '500' }}>
                                <strong>Resolution Status:</strong> {issue.resolutionNote}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="issue-feedback">
                          <strong>Original Feedback:</strong>
                          <ul>
                            {issue.feedback.map((fb, i) => (
                              <li key={i}>
                                <code>{fb.id}</code>: {fb.text}
                                {fb.screenshot && (
                                  <> | <a href={fb.screenshot} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--oasis-green-medium)', textDecoration: 'none' }}>📷 Screenshot</a></>
                                )}
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
          <div style={{ 
            backgroundColor: '#d1fae5', 
            border: '1px solid #10b981', 
            borderRadius: '8px', 
            padding: '15px', 
            marginBottom: '20px' 
          }}>
            <p style={{ margin: 0, color: '#065f46', fontWeight: '500' }}>
              ✅ <strong>Sprints 1-4 are completed!</strong> See the Archive section below for details. Updates will be incorporated into a new release for Product team testing (Mac & Windows) by end of week January 23rd.
            </p>
          </div>
          <ol style={{ lineHeight: '2', fontSize: '1.05rem' }}>
            <li><strong>Sprint 5</strong> - UI/Bug Fixes - <em>Not yet addressed</em></li>
            <li><strong>Sprint 6</strong> - HITL Framework Phase 1: MVP/Prototype (basic implementation for product testers) - <em>Not yet addressed</em></li>
            <li><strong>Sprint 7</strong> - Assistant Engine Reliability (LangGraph, tool-output formatting) - <em>Not yet addressed</em></li>
            <li><strong>Sprint 8</strong> - Tab Group & Tab/Window Operations - <em>Not yet addressed</em></li>
            <li><strong>Sprint 9</strong> - Authentication + Subscription UX (login, signup, session restore, limits) - <em>Not yet addressed</em></li>
            <li><strong>Sprint 10</strong> - Onboarding + Branding polish (first run, visibility, Firefox remnants) - <em>Not yet addressed</em></li>
            <li><strong>Sprint 11</strong> - Making it Easy to Find Saved Websites - <em>Not yet addressed</em></li>
            <li><strong>Sprint 12</strong> - AI Command for Native Splitview - <em>✅ Completed</em></li>
            <li><strong>Sprint 13</strong> - Chat History Access - <em>Not yet addressed</em></li>
            <li><strong>Sprint 14</strong> - Webpage Summarization - <em>✅ Completed by Rushyanth</em></li>
            <li><strong>Sprint 15</strong> - Automatic Software Updates - <em>Not yet addressed</em></li>
            <li><strong>Sprint 16</strong> - Gemini Model Migration (Critical) - <em>Not yet addressed</em></li>
          </ol>
        </div>
      </section>

      {/* Archive Section */}
      <section className="page-section">
        <div className="content-block">
          <div 
            className="sprint-header"
            onClick={toggleArchive}
            style={{ 
              cursor: 'pointer', 
              marginBottom: expandedArchive ? '20px' : '0',
              backgroundColor: '#f0f9ff',
              border: '2px solid #0ea5e9',
              borderRadius: '12px',
              padding: '20px 30px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div>
                <h2 style={{ margin: 0, color: '#0369a1', fontSize: '1.5rem' }}>
                  📦 Archive - Completed Sprints (1-4)
                </h2>
                <p style={{ margin: '10px 0 0 0', color: '#0369a1', fontSize: '0.95rem' }}>
                  All sprints fully completed and fixed locally. Updates incorporated into new release for Product team testing (Mac & Windows) by end of week January 23rd.
                </p>
              </div>
              <div className="sprint-toggle" style={{ backgroundColor: 'rgba(14, 165, 233, 0.1)' }}>
                {expandedArchive ? '−' : '+'}
              </div>
            </div>
          </div>

          {expandedArchive && (
            <div className="sprints-container" style={{ marginTop: '20px' }}>
              {archivedSprints.map((sprint) => (
                <div key={sprint.id} className="sprint-card" style={{ opacity: 0.9, borderColor: '#0ea5e9' }}>
                  <div 
                    className="sprint-header"
                    onClick={() => toggleSprint(`archive-${sprint.id}`)}
                    style={{ cursor: 'pointer', backgroundColor: '#f0f9ff' }}
                  >
                    <div className="sprint-title-section">
                      <span className="sprint-emoji">{sprint.emoji}</span>
                      <div>
                        <h2 className="sprint-title">
                          SPRINT {sprint.id}: {sprint.title} ✅ COMPLETED
                        </h2>
                        <div className="sprint-meta">
                          <span 
                            className="priority-badge"
                            style={{ backgroundColor: '#10b981' }}
                          >
                            COMPLETED
                          </span>
                          <span className="story-points-badge">
                            {sprint.storyPoints} Story Points
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
                        </div>
                      </div>
                    </div>
                    <div className="sprint-toggle">
                      {expandedSprint === `archive-${sprint.id}` ? '−' : '+'}
                    </div>
                  </div>

                  {expandedSprint === `archive-${sprint.id}` && (
                    <div className="sprint-content">
                      <div className="sprint-overview">
                        <h3>Overview</h3>
                        <p>{sprint.overview}</p>
                        {sprint.primaryFiles && (
                          <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                            <strong>Primary Files:</strong> <code style={{ background: '#f0f0f0', padding: '2px 6px', borderRadius: '3px' }}>{sprint.primaryFiles}</code>
                          </p>
                        )}
                        <div style={{ 
                          marginTop: '15px', 
                          padding: '15px', 
                          backgroundColor: '#d1fae5', 
                          border: '1px solid #10b981', 
                          borderRadius: '8px' 
                        }}>
                          <p style={{ margin: 0, color: '#065f46', fontWeight: '500' }}>
                            ✅ <strong>Status:</strong> Fully completed and fixed locally. Updates incorporated into new release for Product team testing (Mac & Windows) by end of week January 23rd.
                          </p>
                        </div>
                      </div>

                      <div className="sprint-issues">
                        <h3>Issues Included ({sprint.issues.length})</h3>
                        {sprint.issues.map((issue, idx) => (
                          <div key={idx} className="issue-card">
                            <div className="issue-header">
                              <h4>
                                {idx + 1}. {issue.title} ({issue.count} {issue.count === 1 ? 'report' : 'reports'})
                                {issue.requiresUI && (
                                  <span 
                                    title="Requires UI design - consult with Pournami (main UI designer)"
                                    style={{ 
                                      marginLeft: '10px', 
                                      fontSize: '0.9rem',
                                      color: '#6366f1',
                                      fontWeight: 'normal',
                                      cursor: 'help'
                                    }}
                                  >
                                    🎨 UI
                                  </span>
                                )}
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
                              {issue.resolutionNote && (
                                <div style={{ 
                                  marginTop: '10px', 
                                  padding: '12px', 
                                  backgroundColor: '#fef3c7', 
                                  border: '1px solid #f59e0b', 
                                  borderRadius: '6px' 
                                }}>
                                  <p style={{ margin: 0, color: '#92400e', fontWeight: '500' }}>
                                    <strong>Resolution Status:</strong> {issue.resolutionNote}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="issue-feedback">
                              <strong>Original Feedback:</strong>
                              <ul>
                                {issue.feedback.map((fb, i) => (
                                  <li key={i}>
                                    <code>{fb.id}</code>: {fb.text}
                                    {fb.screenshot && (
                                      <> | <a href={fb.screenshot} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--oasis-green-medium)', textDecoration: 'none' }}>📷 Screenshot</a></>
                                    )}
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
                              <input type="checkbox" checked disabled /> {criteria}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Sprints
