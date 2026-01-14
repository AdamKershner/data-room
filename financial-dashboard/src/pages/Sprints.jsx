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
          description: "AI commands like 'add this tab to my Google Sheets tab group' or 'put my tabs with google sheets in a tab group' don't work. Users refer to tab groups as 'hubs' in their commands, but the underlying feature is tab group management.",
          impact: "Users can't organize their workspace (severity 9-10/10)",
          technicalNotes: "Tab detection, tab group matching, or tab-to-tab-group association logic may be broken in hubs.ts and commands.ts",
          feedback: [
            { id: "eqW0MdE", text: "Entered the following command in AI assistant: add this tab to my Google Sheets hub. My current tab had a google spreadsheet. The tab was not added.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-4.51.16-PM.png?id=X1Vjvz&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlgxVmp2eiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MTk4N30.mpqdBFowWh6yVTAHIy-ps7MAg_x92rfwLldv25fMjac&signature=cd20dd07c1f78e4cb73003845a1b67af50e985ad47fe30ab00cccf42976ae37d" },
            { id: "KYKWzVV", text: "I entered the following in AI assistant: put my tabs with google sheets in a hub called Google Sheets. It didnt put any of the tabs in the new hub it created. From the screenshot you can see I had 3 Google Sheet tabs open", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-4.39.03-PM.png?id=OdpRop&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9kcFJvcCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MTY1NX0.dlGcIS2hAH2sJIJHmHFXIvZ_y_SBDYVUBoqQecrOKWM&signature=b4d08e4ec98efd713c9f361fe2036d6b13a5d45f46f011a33121980c2a370156" },
            { id: "aQqA5Xy", text: "I entered the following in AI assistant: Add 2026 expenses tab to Google Sheets hub. The 2026 expenses tab was not added but the Oasis Feedback tab was added.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-5.03.17-PM.png?id=Zv40j0&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp2NDBqMCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MjcwN30.opoxJUs2r1R9NCtd159iHcL5by9FJWaisdJNfczpu_k&signature=e836ab5e56275716aa5b6c561db6046e3455449f5993699993668d7260515298" }
          ]
        }
      ],
      acceptanceCriteria: [
        "'open new tab' creates a tab, not a window",
        "Commands can find and focus existing tabs when appropriate",
        "Users can successfully add tabs to existing tab groups via AI commands (AI should understand both 'hub' and 'tab group' terminology)",
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
      title: "Features & Integrations",
      emoji: "🔧",
      priority: "MEDIUM",
      storyPoints: 18,
      effort: "Medium",
      impact: "Medium",
      severity: "6-10/10",
      overview: "Additional features and integrations that don't fit into core functionality sprints. Includes bookmark management, AI knowledge base, subscription tracking, and optional advanced features.",
      primaryFiles: "Various (bookmarks, commands, UI)",
      issues: [
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
        },
        {
          title: "AI Assistant Can't Provide Tab Group Instructions",
          count: 2,
          submissionIds: ["1AoNk71", "RGybMDP"],
          description: "When users ask 'how do I add a tab to an existing tab group' or 'how do I remove a tab from a group', AI provides unhelpful responses. Users may refer to tab groups as 'hubs' in their queries.",
          impact: "Users can't learn how to use core features (severity 10/10)",
          technicalNotes: "AI Assistant needs knowledge base or tool access for tab group management commands. Should understand both 'hub' and 'tab group' terminology from users.",
          feedback: [
            { id: "1AoNk71", text: "I entered the following in AI assistant: how do i add a tab to an existing hub.. No helpful response. See screenshot.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-4.53.45-PM.png?id=RvXOeK&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJ2WE9lSyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MjEwMn0.UsUmAo97hRKZrOKBGJFf3wR5n4MhhgFtNSDiMeonE7k&signature=cf4012ab2e5e3c8c0b275efb0578c155381398ab63966d9514354ab85dd64ddd" },
            { id: "RGybMDP", text: "I entered the following command in AI assistant: How do i remove a tab from a group. See screenshot for output that was not helpful. AI assistant needs to be able to provide instructions on usage of the Oasis browser that will be helpful to the users. For example, How to create a hub, How to add/remove a tab from a hub. How to view a hub. How to go to a tab in a hub. All these how to's should be available. This is minimum functionality. The AI assistant should be able to execute these how to's so the user does not have to do them manually.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-11-at-4.57.58-PM.png?id=z2pVkR&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InoycFZrUiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODE3MjQ5NH0._g33T0vUmKQSc8UkOBsMzjNZQJ_MixjmZdgLP14SVMA&signature=2423becf39b91dc652df82a7f944194705751b17ae4bff6f9129fbf557c95059" }
          ]
        },
        {
          title: "Subscription/Usage Display",
          count: 1,
          submissionIds: ["obLl495"],
          description: "'show subscription' command doesn't work, users want to see AI command count",
          impact: "Can't track usage tied to pricing (severity 10/10)",
          technicalNotes: "Implement subscription command, AI command count tracking and display",
          feedback: [
            { id: "obLl495", text: "I entered 'show subscription' in the AI assistant and it showed the following '[Tool Output for show_url]: Opened subscription://'. I should be able to see how many AI commands I have entered which I will call AI command count since this is tied to pricing." }
          ]
        },
        {
          title: "Inconsistent Tab Group Icons",
          count: 1,
          submissionIds: ["jaAJoPR"],
          description: "Icons for same type of content (e.g., Google Sheets) are different in tab group view vs tab view",
          impact: "Confusing UI, inconsistent experience (severity 6/10)",
          technicalNotes: "Fix icon consistency across tab group and tab views",
          requiresUI: true,
          feedback: [
            { id: "jaAJoPR", text: "The icons for my google spreadsheets in a hub are different. I expect the icons to be the same since they are all spreadsheets. The icon displayed when it is shown as a tab should be the same icon in the hub group. Need a consistent UI.. don't change icons." }
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
            { id: "A7ey1jB", text: "when I gave the command to open a new tab and split view, it showed 2 ai assistant windows, it felt confusing. It should show only one and that one should be displayed in the original window. This made me think, where can I access the previous chats I had with oasis ai?" }
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
        "Bookmark removal works for imported bookmarks via AI commands",
        "AI Assistant can provide helpful instructions for tab group and bookmark management",
        "Subscription/usage information is accessible",
        "Icons are consistent across tab group and tab views",
        "Only one AI Assistant window exists at a time",
        "Chat history is accessible from the single AI Assistant window",
        "(Optional) Tab summarization feature"
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
      id: 7,
      title: "Human-in-the-Loop (HITL) Framework - Phase 2: Enhancements",
      emoji: "📊",
      priority: "MEDIUM",
      storyPoints: 60,
      effort: "Very High",
      impact: "High",
      severity: "7-8/10",
      overview: "Enhance the HITL framework with reach goals and advanced features beyond the basic MVP. This phase includes the user analytics dashboard that tracks individual participation and gamifies the HITL experience, making participation feel more like a game/experiment than routine feedback. The more people train/tune on a regular basis, the more accurate and reliable the overall system will become. This phase focuses on increasing engagement, consistency, and making the system more scalable and adaptable. Recommended split: Sprint 7A (Analytics & Gamification - 26 points) and Sprint 7B (Scalability & Advanced - 34 points).",
      primaryFiles: "hitlAnalytics.ts (NEW), hitlGamification.ts (NEW), assistant.ui.js (EXTEND - dashboard UI), hitlPipeline.ts (EXTEND - advanced features), supabase_migration.sql (EXTEND - analytics tables)",
      issues: [
        {
          title: "Analytics Data Model and Aggregation",
          count: 0,
          submissionIds: [],
          description: "Create database schema and aggregation functions for HITL analytics. Create hitl_analytics table or view with user participation metrics (daily, weekly, monthly), feedback counts by type, correction accuracy metrics, training data contribution stats. Create Supabase functions: get_user_hitl_stats(), get_weekly_training_frequency(), get_feedback_trends(). Add indexes for performance.",
          impact: "Foundation for analytics dashboard",
          technicalNotes: "Medium complexity. Similar to existing transcription usage stats. Depends on Sprint 6 database schema.",
          feedback: []
        },
        {
          title: "Analytics Dashboard UI",
          count: 0,
          submissionIds: [],
          description: "Build user-facing analytics dashboard showing HITL participation metrics. Create dashboard component in assistant.ui.js with weekly training frequency chart, participation streak counter, total contributions counter, feedback breakdown (pie chart), progress indicators and goals. Reference prototype: https://oasis-roadmap.vercel.app/tuning-analytics. Use existing usage stats display as reference.",
          impact: "Users can see their contribution and stay motivated",
          technicalNotes: "Medium-High complexity. UI work, charting library integration (Chart.js, D3.js, or similar). Depends on analytics data model.",
          feedback: []
        },
        {
          title: "Gamification Engine",
          count: 0,
          submissionIds: [],
          description: "Implement gamification features to make HITL participation engaging. Create services/hitlGamification.ts with achievement system (badges for milestones), streak tracking (consecutive days), points/XP system, level system. Create hitl_achievements table. Add achievement notifications in UI, visual progress indicators (XP bars, level badges).",
          impact: "Increases user engagement and consistency",
          technicalNotes: "Medium-High complexity. Game mechanics design, state management. Depends on analytics data model.",
          feedback: []
        },
        {
          title: "Advanced Feedback Processing",
          count: 0,
          submissionIds: [],
          description: "Enhance feedback pipeline with advanced features for complex tasks and bias detection. Enhance hitlPipeline.ts with bias detection (flag potentially biased corrections), confidence scoring, conflict resolution (handle conflicting feedback from multiple users), contextual analysis. Create bias detection heuristics: check for demographic bias, flag corrections that contradict majority feedback, identify outlier corrections for review.",
          impact: "Makes HITL system more robust and capable",
          technicalNotes: "High complexity. Requires ML/bias detection knowledge, complex logic. Depends on Sprint 6 feedback pipeline.",
          feedback: []
        },
        {
          title: "Scalability Improvements",
          count: 0,
          submissionIds: [],
          description: "Optimize HITL system for handling more users, more data, and concurrent operations. Database optimizations: partition hitl_feedback table by date, add composite indexes, implement data archiving. Caching layer: cache user stats, cache aggregated analytics. Batch processing: process feedback in batches, queue system for high-volume periods. Rate limiting: prevent feedback spam, limit feedback per user per day. Performance monitoring.",
          impact: "System can scale to production levels",
          technicalNotes: "Very High complexity. Requires database expertise, infrastructure changes. Depends on all Sprint 6 components.",
          feedback: []
        },
        {
          title: "Advanced Model Training Integration",
          count: 0,
          submissionIds: [],
          description: "Enhance model training integration with advanced features like A/B testing, model versioning, and feedback prioritization. Model versioning: track which model version received which feedback, compare model performance across versions. Feedback prioritization: weight high-quality feedback more heavily, prioritize corrections from experienced users, boost feedback that addresses common errors. A/B testing framework: test model improvements before full rollout. Training data quality: filter low-quality feedback, validate training data before submission.",
          impact: "More sophisticated model improvement process",
          technicalNotes: "Very High complexity. Requires ML expertise, backend coordination. Depends on Sprint 6 model training integration. May require significant backend team involvement.",
          feedback: []
        },
        {
          title: "Dashboard and Gamification Testing",
          count: 0,
          submissionIds: [],
          description: "Test analytics dashboard, gamification features, and advanced functionality. Unit tests for analytics aggregation, integration tests for gamification engine, UI tests for dashboard components, performance tests for scalability improvements, user acceptance testing for gamification features.",
          impact: "Ensures Phase 2 features work correctly",
          technicalNotes: "Medium complexity. Standard testing approach. Depends on all above components.",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Analytics data model tracks weekly training frequency and participation metrics",
        "User analytics dashboard displays charts, progress indicators, and participation stats",
        "Gamification engine tracks achievements, streaks, points, and levels",
        "Advanced feedback processing includes bias detection and quality scoring",
        "System handles scalability requirements (more users, more data, concurrent operations)",
        "Advanced model training integration includes versioning, prioritization, and A/B testing",
        "All Phase 2 features are tested and validated"
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
          <div style={{ 
            backgroundColor: '#f0f9ff', 
            border: '2px solid #0ea5e9', 
            borderRadius: '8px', 
            padding: '15px', 
            marginBottom: '20px' 
          }}>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500', color: '#0369a1' }}>
              💡 <strong>Choose a sprint that excites you!</strong> We encourage developers to select sprints that they personally find most <strong>fun</strong> and where they think they'd be most <strong>effective</strong>. Once you've chosen which sprint you want to join (1, 2, 3, 4, or 5), please <strong>DM Adam Kershner on Slack</strong> to let him know. Feel free to DM Adam with any questions as well!
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
            <strong>Note:</strong> This reorganization groups issues by the files/modules they affect, making it easier for developers to work on related functionality together.
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
          <ol style={{ lineHeight: '2', fontSize: '1.05rem' }}>
            <li><strong>Start with Sprint 1</strong> - Critical bugs that make the product feel broken (command execution infrastructure)</li>
            <li><strong>Then Sprint 2</strong> - Complete window management (all window behavior in one sprint)</li>
            <li><strong>Then Sprint 3</strong> - Tab operations and detection (foundational for tab groups)</li>
            <li><strong>Then Sprint 4</strong> - UI polish (quick wins, improves user confidence)</li>
            <li><strong>Then Sprint 5</strong> - Features and integrations (nice-to-have enhancements)</li>
            <li><strong>Then Sprint 6</strong> - HITL Framework Phase 1: MVP/Prototype (basic implementation for product testers)</li>
            <li><strong>Finally Sprint 7</strong> - HITL Framework Phase 2: Enhancements (analytics dashboard and advanced features)</li>
          </ol>
        </div>
      </section>
    </div>
  )
}

export default Sprints
