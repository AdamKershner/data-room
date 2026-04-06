import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './Sprints.css'

function Sprints() {
  const [expandedSprint, setExpandedSprint] = useState(null)
  const [expandedArchive, setExpandedArchive] = useState(false)

  // Archived sprints (completed)
  const archivedSprints = [
    {
      id: 8,
      title: "Sprint 8 - Resolved Tab Group Issues",
      emoji: "📁",
      priority: "HIGH",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "7-10/10",
      overview: "Resolved issues from Sprint 8: Tab Group Operations. These issues have been completed and fixed, including tab group content querying, tab filtering/matching, tab group creation, compound commands, tab group renaming, tab closing fixes, and the 'add all tabs to tab group' feature. Includes tab closing command fixes for bookmarks and tab groups.",
      primaryFiles: "browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/commands.ts",
      issues: [
        {
          title: "Can't Find Tabs in Tab Groups",
          count: 2,
          submissionIds: ["68BP0AJ", "QKQ4N2G"],
          description: "AI assistant reports tab groups are empty when they contain tabs, or can't find specific tabs within groups (e.g., '2026 expenses tab').",
          impact: "Can't navigate to saved content (severity 10/10)",
          technicalNotes: "Tab group content querying logic broken in hubs.ts - needs to properly enumerate tabs within groups",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed by Durgesh Tiwari (Feb 2026).",
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
          title: "Tab Group Renaming Fails",
          count: 1,
          submissionIds: ["dWMypgz"],
          description: "Tab group renaming commands encounter errors. User requested to rename 'Videos' to 'Images' but AI assistant encountered an error and was unable to complete the request.",
          impact: "Can't rename tab groups (severity 7/10)",
          technicalNotes: "Tab group renaming logic in hub command module - check error handling and hub state synchronization",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "dWMypgz", text: "User: \"can we rename \"Videos\" to \"Images\"\" (referring to a tab group). AI assistant: I encountered an error when trying to rename the \"Videos\" tab group to \"Images\". I was unable to complete your request.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-27-at-10.09.37-AM.png?id=JeZkjr&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkplWmtqciIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTUzMDIxMn0.iRN9dWgFxjIHNn4wiKKn_4LdEJajVk8nNAd6wcTJF3w&signature=5aa846dbfd442d840e0723ca90ceaf051c38cc85a977f28aa847958f5c3241bd" }
          ]
        },
        {
          title: "Tab Close and Reopen Bug",
          count: 1,
          submissionIds: ["ODRXaqY"],
          description: "When asked to close a tab, it closes and then immediately reopens the same tab. UI shows 'Opening tab' then 'Closing tab' in sequence.",
          impact: "Tabs don't stay closed (severity 8/10)",
          technicalNotes: "Tab closing command execution logic - check for conflicting commands or state synchronization issues",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "ODRXaqY", text: "When I asked to close the tab, it closed and then reopened the same tab. Prompt: \"Close ESPN tab\". UI on screen: Thinking… Opening tab Closing tab. Chat message shown: \"I've opened ESPN and then closed the ESPN tab for you.\"", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-05-at-12.15.00.png?id=z1jypE&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InoxanlwRSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMxMTg2Mn0.aY9_jH5Zupv5WN2bja3NDqHmts5h3mcekh2GXQI63Nw&signature=de66241b0014d2a762c14f41fc1f49ce288f8c024d17fe7df68ad4572d146017" }
          ]
        },
        {
          title: "Tab Closing Commands Don't Work",
          count: 1,
          submissionIds: ["5BPQY2Z"],
          description: "Commands to close bookmarks/tab groups report success but tabs remain open. Tool output shows tabs were closed but they're still visible.",
          impact: "Commands appear to work but don't actually execute (severity 8/10)",
          technicalNotes: "Tab closing logic may have async timing issues or state synchronization problems in tab command module",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "5BPQY2Z", text: "When tried to close the whole bookmark(multiple tabs inside that), it says it closed, but i can still see them open. Steps: open multiple tabs, bundle them as a bookmark, insert prompt 'close that bookmark test', then 'can you close all open tabs?' - it says it closed, but i still see them open.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-15.38.37.png?id=VbpGRJ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZicEdSSiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODI1MDg3Mn0.l9Yy-pVu_YHNZ5l63w581XAE7AhcsJ0FZQqZBf2WSgw&signature=444974b4326362535ebb5753661a84c8702325bc8c72f119591899f781a6f2cd" }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ Tab groups can be queried and tabs found within them - RESOLVED",
        "✅ Adding tabs to groups only adds specified tabs - RESOLVED",
        "✅ Tab groups are created with tabs when specified - RESOLVED",
        "✅ Compound commands (create group + add tab) work correctly - RESOLVED",
        "✅ 'Add all tabs to tab group' command works correctly - RESOLVED",
        "✅ Tab group renaming works correctly without errors - RESOLVED",
        "✅ Tab closing commands don't reopen tabs - RESOLVED",
        "✅ Tab closing commands actually close tabs (no false success messages) - RESOLVED"
      ]
    },
    {
      id: 9,
      title: "Sprint 9 - Resolved Authentication UI Issues",
      emoji: "🔐",
      priority: "HIGH",
      storyPoints: 3,
      effort: "Medium",
      impact: "High",
      severity: "6-10/10",
      overview: "Resolved authentication UI issues from Sprint 9: Sign-in menu visibility and login menu functionality after logout. These issues have been completed and fixed.",
      primaryFiles: "browser/base/content/assistant/assistant.ui.js",
      issues: [
        {
          title: "Sign-in Menu Hidden Behind Navigation Bar",
          count: 2,
          submissionIds: ["q41xByO", "OD2QMrp"],
          description: "Sign-in menu appears behind the Oasis AI navigation bar, making it difficult or impossible to see and access.",
          impact: "Can't access sign-in functionality (severity 6-10/10)",
          technicalNotes: "Z-index and menu positioning in assistant.ui.js",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
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
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          requiresUI: true,
          feedback: [
            { id: "RGyXvL4", text: "I logged out of the AI assistant. I could not enter any commands which is appropriate. I tried to log back in so I clicked on the 3 dots and nothing seemed to happen. Eventually, I accidentally clicked on white space behind the 3 dots and the login screen came up. When I click on the 3 dots, menu items or the login screen should pop up where I can see it if I'm not logged in.", screenshot: "https://storage.tally.so/private/Screen-Shot-2026-01-14-at-4.39.38-PM.png?id=pJDOgJ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBKRE9nSiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODQzMDU1MH0.DPv5dIeuXuKWk8c_YXeUGLOssJhLF2n8wWc7KnEc0E0&signature=88ccc506db27522ddeeeffa39fe4672eb3b887c1d59778789902061d7ab09afd" }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ Sign-in menu is visible and accessible (not hidden behind navigation bar) - RESOLVED",
        "✅ Login menu appears correctly after logout - RESOLVED"
      ]
    },
    {
      id: 18,
      title: "Sprint 18 - Resolved Voice Dictation UI Issue",
      emoji: "🎤",
      priority: "HIGH",
      storyPoints: 1,
      effort: "Medium",
      impact: "High",
      severity: "10/10",
      overview: "Resolved voice dictation UI simplification issue from Sprint 18. This issue has been completed and fixed.",
      primaryFiles: "browser/base/content/assistant/build/src/services/voiceInput.ts, browser/base/content/assistant/ui-preact/src/App.tsx, browser/base/content/assistant/ui-preact/src/App.css",
      issues: [
        {
          title: "Voice Dictation UI Simplification",
          count: 1,
          submissionIds: ["zx9RN0M"],
          description: "Too many buttons causing confusion. Remove correct/wrong icon buttons. Close button doesn't work - remove it and change mic icon to pause button. Waveform should display instantly when mic is clicked.",
          impact: "Confusing UX (severity 10/10)",
          technicalNotes: "Simplify voice dictation UI, remove unnecessary buttons, improve button state management",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          requiresUI: true,
          feedback: [
            { id: "zx9RN0M", text: "in the voice dictation mode, following are some ux improvements I suggest: there are too many buttons causing confusion. the correct and wrong icon buttons can be removed. the close button does not work, instead it could be removed and simply the mic icon can be changed to pause button and instead of the correct icon, simply hitting the stop button should display the text. when I click on the mic icon to start dictating, it takes a while to display the sound bars which makes me think it's taking longer for it to load, instead it should load instantly so i can start dictating immediately.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-26-at-12.36.58-PM.png?id=WKdZPa&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldLZFpQYSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ1MDAzMX0.MmJ655PtdUjtZLKkPS6JmB9NNhGods6tK_1BUhpHkM4&signature=f6be6ccd290fc6d7addcde317fd67e27cde4b512f98bf90b769249dba64b98c8" }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ Voice dictation UI simplified (removed unnecessary buttons) - RESOLVED",
        "✅ Mic icon changes to pause button during recording - RESOLVED",
        "✅ Waveform displays instantly when mic is clicked - RESOLVED"
      ]
    },
    {
      id: 19,
      title: "Sprint 19 - Resolved Feedback Modal Issue",
      emoji: "💬",
      priority: "MEDIUM-HIGH",
      storyPoints: 1,
      effort: "Medium",
      impact: "High",
      severity: "9-10/10",
      overview: "Resolved in-app feedback functionality issue from Sprint 19. This issue has been completed and fixed.",
      primaryFiles: "browser/base/content/assistant/ui-preact/src/components/Feedback.tsx, browser/base/content/assistant/ui-preact/src/App.tsx, browser/components/aiwindow/ui/components/ai-chat-content/chat-assistant-footer/assistant-message-footer.mjs",
      issues: [
        {
          title: "In-App Feedback Functionality",
          count: 1,
          submissionIds: ["KYEZEqK"],
          description: "Users should be able to add feedback within the assistant. Navigating to a separate tab to log feedback is time consuming, especially if logging feedback multiple times.",
          impact: "Poor feedback collection UX (severity 10/10)",
          technicalNotes: "Implement in-app feedback modal/component within assistant UI",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          requiresUI: true,
          feedback: [
            { id: "KYEZEqK", text: "as a user i should be able to add feedback within the assistant. navigating me to a separate tab to log in feedback is time consuming, especially if I'm logging feedback multiple times.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-26-at-12.16.49-PM.png?id=49dOxO&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5ZE94TyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ0Nzg2MH0.GAtQ4LKl0aaRjdYdWY3-e3vdmwwCSPPF1lz-zCMFtB0&signature=2be3c4cd72469112ae5a2b2bd5609234c346ded7c89847fbfb478880e7515c07" }
          ]
        },
      ],
      acceptanceCriteria: [
        "✅ In-app feedback functionality implemented - RESOLVED"
      ]
    },
    {
      id: 20,
      title: "Sprint 20 - Split View Improvements (Completed)",
      emoji: "🪟",
      priority: "HIGH",
      storyPoints: 5,
      effort: "Medium",
      impact: "High",
      severity: "10/10",
      overview: "Completed split view improvements. All issues have been resolved: split view command execution now properly uses Firefox native splitview feature and correctly identifies existing tabs.",
      primaryFiles: "browser/base/content/assistant/build/src/commands.ts (AddSplitViewCommand, SplitTabsCommand), Firefox native splitview API integration",
      issues: [
        {
          title: "Split View Command Execution Errors",
          count: 1,
          submissionIds: ["EkRrl5B"],
          description: "Split view commands give errors or open tabs in separate windows instead of using Firefox's native splitview feature. AI assistant chat also disappears after split view action.",
          impact: "Split view doesn't work correctly (severity 10/10)",
          technicalNotes: "Fix split view command to use Firefox native splitview API, ensure assistant window remains accessible",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "EkRrl5B", text: "when i gave the command to open tabs in split view, it gave me this error. another instance where I gave the same command, it opened the 3 new tabs, each in separate window, and then arranged the windows instead of tabs in splitview. also the ai assistant chat went away. as a user, i'm curious in which window will it display, if I'll lose my chat history in it. it's counter intuitive to expect users to again find where the assistant window went after the split view action. lastly, the split view should make use of firefox split tabs feature.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-26-at-12.55.30-PM.png?id=lYZgLv&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxZWmdMdiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ1MDM2NX0.DRxq4agnRPOeX39Q3C95fCfkYXl5TV4g1Rj4V4lyuf4&signature=a12f07c0d22c34ea9d3f4a822c47abdc2a7ce1433916a14c6af861acaa2ac2a7" }
          ]
        },
        {
          title: "Tab Identification in Split View",
          count: 1,
          submissionIds: ["PdoPooB"],
          description: "When prompting to open existing tabs in split view, system opens new tabs instead of detecting and using already open relevant tabs.",
          impact: "Creates duplicate tabs instead of using existing ones (severity 10/10)",
          technicalNotes: "Improve tab detection logic in split view command - find existing tabs before creating new ones",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "PdoPooB", text: "\"When I prompted 'open both the feedback tabs in split view,' the system executed the split action but missed the actual intent. Instead of splitting the two existing feedback tabs, it opened a new tab and included that in the split. The expectation is to detect and use the already open relevant tabs rather than creating a new one.\"", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.51.11-AM.png?id=jkP8pa&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImprUDhwYSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MjM5M30.W7CQH7WwvJex5Hoq-U_tGsPDLxB1A7_z9GT-En0Ki1c&signature=4e41952c0ae4963afaade319b14d16f0a27cd6547480f767391ea1356934c955" }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ Split view commands use Firefox native splitview feature - RESOLVED",
        "✅ Assistant window remains accessible after split view action - RESOLVED",
        "✅ Split view correctly identifies and uses existing tabs - RESOLVED",
        "✅ No duplicate tabs created when existing tabs are available - RESOLVED",
        "✅ Split view works within the same window (not separate windows) - RESOLVED"
      ]
    },
    {
      id: 14,
      title: "Sprint 14 - Webpage Summarization (Completed)",
      emoji: "📄",
      priority: "MEDIUM",
      storyPoints: 13,
      effort: "Medium-High",
      impact: "Medium",
      severity: "6-8/10",
      teamMembers: ["Ashwin", "Saideep", "Pournami", "Naveen"],
      overview: "Completed webpage summarization functionality including content extraction, automatic summarization, scroll detection, and multi-tab summarization for research workflows. Includes issues from Sprint 14 and Sprint 21.",
      primaryFiles: "browser/base/content/assistant/build/src/summarize.ts (NEW), browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/commands.ts (SummarizePageCommand), browser/components/aiwindow/models/Tools.sys.mjs (GetPageContent)",
      issues: [
        {
          title: "Feature Request: Webpage Summarization",
          count: 1,
          submissionIds: ["xXqrxDJ"],
          description: "Users want AI Assistant to automatically summarize webpages they visit, not just mention the title. Currently AI says it needs a moment to review but doesn't provide summary.",
          impact: "Would enhance research productivity (severity 6/10)",
          technicalNotes: "Implement webpage content extraction and summarization. May create new summarize.ts module or extend assistant.ts",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "xXqrxDJ", text: "I wanted to see the summary of the webpage that I visited, which wasn't happening and the assistant just mentioned the webpage title and was asking me about further details. My request: open articles about setting up an organization in salesforce. review this and let me know the insights. Oasis AI: I have opened a tab with a Salesforce article titled 'How to Set Up Salesforce: A Step-by-Step Guide'. To give you insights, I need you to give me a moment to review the contents of the webpage. Once I've done that, I'll provide a summary of the key steps and insights from the article." }
          ]
        },
        {
          title: "Page Scroll Detection for Summarization",
          count: 1,
          submissionIds: ["44Vqkb5"],
          description: "Summarization doesn't work correctly for pages that require scrolling. Agent doesn't recognize scrolled pages and fails to extract full content. Includes Wikipedia and similar long-form content.",
          impact: "Summarization fails for long pages (severity 8/10)",
          technicalNotes: "Implement scroll detection and content extraction for scrolled pages in summarization logic. Webpage content extraction and summarization logic - may need better handling for Wikipedia and similar sites.",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
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
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "7R72950", text: "As a user opening 15 tabs on a topic that I'm researching, I want to be able to prompt the AI assistant to 'summarize and give me insights across these 15 tabs.' It would make a lot of my research easier because i wouldn't have to manually read everything or copy content into ChatGPT. It would reduce the number of steps in my process." }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ Webpage summarization works for all content types - RESOLVED",
        "✅ Summarization works for Wikipedia and similar sites - RESOLVED",
        "✅ Content extraction handles various webpage structures - RESOLVED",
        "✅ Summaries are accurate and useful - RESOLVED",
        "✅ Tab summarization feature allows summarizing multiple tabs at once - RESOLVED",
        "✅ Summarization works for scrolled pages - RESOLVED",
        "✅ Page scroll detection implemented - RESOLVED",
        "✅ Full page content extracted for summarization - RESOLVED"
      ]
    },
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
      storyPoints: 6,
      effort: "Low-Medium",
      impact: "Medium",
      severity: "4-10/10",
      overview: "Completed UI fixes and AI response formatting improvements. These issues have been verified as working well. Includes archived issues from Sprint 5 (active).",
      primaryFiles: "browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/assistant.ui.js, browser/base/content/assistant/build/src/commands.ts",
      issues: [
        {
          title: "Bug: Confusing AI Response Format",
          count: 1,
          submissionIds: ["2EWX81j"],
          description: "AI responses sometimes just say 'in a new tab.' which is confusing. Should provide more context.",
          impact: "Confusing user experience (severity 4/10)",
          technicalNotes: "Improve response formatting in assistant.ts (tool output to natural language conversion)",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
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
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
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
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "2EGZJvD", text: "when the length of the conversation in ai chat increased, i saw 2 scrollbars", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-12-at-2.31.52-PM.png?id=Nbq51N&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5icTUxTiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2ODI0NjM3M30.MhjJ1LV6-AZZdnPrpAnruE2O-o1Zx4VGdr8HNpBtUFI&signature=96d15b67208d0adbe98f0d604794f0777b45cc702b81d1bff532be8b66e070ae" }
          ]
        },
        {
          title: "Bug: Invalid URL Opened",
          count: 1,
          submissionIds: ["OD2aDK8"],
          description: "AI opened a URL that was not actually a webpage (https://www.youtube.com/howyoutubeworks/creators/upload-videos/) when user asked to open article about uploading video in YouTube.",
          impact: "Opens invalid pages (severity 9/10)",
          technicalNotes: "URL validation and content checking before opening in tab command module",
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "OD2aDK8", text: "I wanted to open an article about uploading an video in youtube, but the AI replied and opened and URL which was not actually a webpage. Oasis AI: in a new tab. [The opened URL link - https://www.youtube.com/howyoutubeworks/creators/upload-videos/]", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-21-at-4.40.24-PM.png?id=qJJZQg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFKSlpRZyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTAzNTI3MH0.oZB18p6NLlQ7vXLJ3nVASTbX-DZ1GPpLNCxMOAtW7eY&signature=0c4aca5180c70dbb9253ccd94c56de11a2eff2d5e00926f790ddc58f0ffc0786" }
          ]
        },
        {
          title: "Text Selection Contrast Improvement",
          count: 1,
          submissionIds: ["aQWlJBv"],
          description: "Text selection contrast is too low, which hurts readability. Increase contrast so selected text remains clearly readable and accessible.",
          impact: "Poor readability (severity 9/10)",
          technicalNotes: "CSS fix for selected text color in assistant.ui.js",
          requiresUI: true,
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "aQWlJBv", text: "Text selection contrast is too low right now, which hurts readability. Let's increase contrast so selected text remains clearly readable and accessible.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.21.50-AM.png?id=L6pjJj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikw2cGpKaiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDczM30.gAzZtPqLxFRA69bCApnMD98_UZdeBAgknEC_62M-Tw0&signature=5ef36d2325d23f80b7309916b6de55cb95d8b973ca7d6f5d41c943aa3c122b8b" }
          ]
        },
        {
          title: "AI Response Markdown Formatting",
          count: 1,
          submissionIds: ["J9P4bBJ"],
          description: "The formatting of the AI response includes unnecessary asterisks and looks weird. Markdown formatting should render properly.",
          impact: "Poor readability and unprofessional appearance (severity 10/10)",
          technicalNotes: "Markdown rendering fixes in assistant.ui.js - ensure proper markdown to HTML conversion",
          requiresUI: true,
          resolutionNote: "✅ RESOLVED: Issue has been completed and fixed.",
          feedback: [
            { id: "J9P4bBJ", text: "The formatting of the AI response includes unnecessary asterisks and looks weird.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-27-at-10.22.27-AM.png?id=pJ606Z&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBKNjA2WiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTUzMDk3OH0.3TfpN5mSBtPo7baHHqaKeLDxE8cj4XOJEXkIUXJVUTo&signature=8bd38329b4acd0f86ed2df96af309a8139811d15b44241500ff05f8f8f4a5e0b" }
          ]
        }
      ],
      acceptanceCriteria: [
        "✅ AI responses are clear and contextual - RESOLVED",
        "✅ Input text wraps/scrolls correctly - RESOLVED",
        "✅ Only one scrollbar appears in chat - RESOLVED",
        "✅ URL validation prevents opening invalid pages - RESOLVED",
        "✅ Text selection contrast is improved for better readability - RESOLVED",
        "✅ AI response markdown formatting renders properly without visible asterisks - RESOLVED"
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
      id: 12,
      title: "AI Command for Native Splitview",
      emoji: "🪟",
      priority: "MEDIUM",
      storyPoints: 5,
      effort: "Medium",
      impact: "High",
      severity: "10/10",
      teamMembers: ["Ashwin"],
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
    },
    {
      id: 13,
      title: "Archived UI Issues",
      emoji: "📦",
      priority: "LOW",
      storyPoints: 0,
      effort: "Low",
      impact: "Low",
      severity: "5/10",
      overview: "UI issues archived (no longer tracked in active sprints).",
      issues: [
        {
          title: "Logo Asset Replacement",
          count: 1,
          submissionIds: ["VLrxB1J"],
          description: "Replace placeholder logo with finalized brand logo in the AI Assistant interface.",
          impact: "Visual consistency (severity 5/10)",
          technicalNotes: "UI asset swap",
          resolutionNote: "📦 ARCHIVED",
          feedback: []
        },
        {
          title: "Can't Change Password",
          count: 1,
          submissionIds: ["kdobDeZ"],
          description: "Users cannot change their password from the Oasis Assistant for their Kahana account.",
          impact: "Password management broken (severity 7/10)",
          technicalNotes: "Password change functionality in assistant.ui.js or account settings UI",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "kdobDeZ", text: "I was not able to change my password from the Oasis Assistant for my Kahana account" }
          ]
        },
        {
          title: "Feedback Modal Design System Alignment",
          count: 1,
          submissionIds: ["Me0G0N0"],
          description: "Feedback modal isn't aligned with design specs. Issues: input field background (dark vs light modal), checkbox states (no visible border), CTA button (not using primary brand color), chip close icon (too small), modal shadow (should be removed).",
          impact: "Design inconsistency (severity 9/10)",
          technicalNotes: "Align feedback modal with design system - input background, checkbox styling, button colors, chip icons, remove shadow",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "Me0G0N0", text: "Feedback modal isn't aligned with the design specs. Here are the fixes needed: Input field background: The input area is dark while the modal is light. This feels visually inconsistent. Align the input background with the modal design. Checkbox states: Current checkbox styling doesn't follow the design system. The unchecked state lacks a visible border, so it's easy to miss. Needs clearer borders and stronger state differentiation. CTA button: Button color isn't using the primary brand color. Update the color and change the label to just \"Submit.\" Chip close icon: The close icon inside selected chips is too small and thin. Make it more prominent for visibility and usability. Modal shadow: Remove the shadow behind the feedback modal since it isn't part of the design spec and adds visual noise.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.43.19-AM.png?id=2DP98j&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJEUDk4aiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MjE5OX0.Rj9YZnuASKmAbETndDnEaMU-nvSEfwZawsXp5FcvLZo&signature=3eb0c6fbc1e1974fc6ada27d186cbd38e10521c6f1fc2df0d6e47d0ab155a75f" }
          ]
        }
      ],
      acceptanceCriteria: [],
      completionNote: "Archived Feb 2026"
    },
    {
      id: 23,
      title: "Sprint 23 - Window Management Improvements (Archived)",
      emoji: "🖼️",
      priority: "HIGH",
      storyPoints: 13,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      overview: "Fix AI Assistant window management issues including minimize/maximize functionality, window resizing, viewport positioning, and input area visibility in minimized state. **ARCHIVED** Feb 2026.",
      primaryFiles: "browser/base/content/assistant/ui-preact/src/components/Header.tsx, browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/ui-preact/src/App.tsx",
      issues: [
        {
          title: "Restore Original Window Size",
          count: 1,
          submissionIds: ["XxakaYd"],
          description: "No way to minimize the assistant window back to the original size (the size it opens for the first time). Either minimizes to tiny rectangle or maximizes to full width. No option to resize horizontally or vertically.",
          impact: "Can't restore default window size (severity 10/10)",
          technicalNotes: "Implement window size restoration logic, add resize controls",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "XxakaYd", text: "there's no way to minimize the assistant window back to the original size, the size in which it opens for the first time. either it minimizes to the tiny rectangle window or maximizes to the full width size. there's no option to resize the window horizontally or vertically too. In the minimized version, the input area should always be visible, as a user I shouldn't need to maximize and then enter text" }
          ]
        },
        {
          title: "Minimized Version Input Area Visibility",
          count: 2,
          submissionIds: ["xXq1KPk", "XxjNy8P"],
          description: "Minimized version doesn't help much - input area is hidden behind top bar, menu options not visible. Input area should always be visible in minimized state.",
          impact: "Can't use assistant when minimized (severity 10/10)",
          technicalNotes: "Redesign minimized state to show input area, improve elevation hierarchy",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "xXq1KPk", text: "this minimized version of the assistant doesn't help much, need to improve this design since there's no way to add input, the input area is hidden behind the top bar, the menu options are not visible either. improve the elevation hierarchy of all the elements.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-26-at-12.24.39-PM.png?id=49dOdY&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5ZE9kWSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ0ODQxM30.S-GQoF_g646tFHrYxwCRe2msJbXCXCjllMrKmbyS6iU&signature=c58883757656892ecbf4e8b437129bb0dcad607ad10f9c2c4cb061b9df5f772a" },
            { id: "XxjNy8P", text: "The minimized version should have the input area visible at all times. Currently, I only see the header.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.05.19-AM.png?id=9oQPGE&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlvUVBHRSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY0OTU5MH0.QwoZsnglSuDFfQowKVj0xzwk2HcEVs4rZ7MM46AMM6o&signature=13f98f9dc98bf4ffca0a95d104fe52c8896a72818248690a0dbb7d10149b256b" }
          ]
        },
        {
          title: "Viewport Boundary Detection",
          count: 1,
          submissionIds: ["D48PgkR"],
          description: "When maximizing AI assistant and it's snapped to right corner, the assistant window extends outside the viewport. User has to take extra step to move it back.",
          impact: "Window goes off-screen (severity 10/10)",
          technicalNotes: "Implement viewport boundary detection and constraint window position",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "D48PgkR", text: "when you maximize the ai assistant and if it is snapped to right corner, the assistant window extends outside the viewport, as a user I have to take an extra step to move it back in the view port.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-26-at-12.28.57-PM.png?id=7a5EQ9&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhNUVROSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTQ0ODU2N30.YUq1NYfRbj36JIqNqH6Idab0uDV16x2VSbuijS7QUf8&signature=a418b5af626b3800a5e7b050521883445d124a44117bf3d83d52fcc29fe52910" }
          ]
        },
        {
          title: "Size Persistence Across Minimize/Maximize",
          count: 1,
          submissionIds: ["MeWeyJE"],
          description: "When minimizing window and then maximizing it, it's not the same size that it started off in. Makes it harder to use since it takes up a lot of space and can't adjust it.",
          impact: "Window size doesn't persist (severity 8/10)",
          technicalNotes: "Implement window size persistence across minimize/maximize cycles",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "MeWeyJE", text: "whenever i minimize the window and then try to maximize it to use the agent, it is not the same size that it starts off in and that makes it much harder to use since it ends up taking up a lot of the space on the screen and i cant adjust it either." }
          ]
        },
        {
          title: "Undo Minimization Bug",
          count: 1,
          submissionIds: ["NpzlZz0"],
          description: "Minimizing chat works correctly, but undoing the minimization doesn't work. Clicking menu button again to undo minimization has no effect.",
          impact: "Can't restore minimized window (severity 8/10)",
          technicalNotes: "Fix minimize/restore toggle logic",
          resolutionNote: "📦 ARCHIVED",
          feedback: [
            { id: "NpzlZz0", text: "When I try to minimize the chat agent, it works correctly. However, when I try to undo the minimization, it does not work. Steps to reproduce: 1. Click on the chat agent (before signing in). 2. Click the menu button and select Minimize chat -> this works as expected. 3. Click the menu button again to undo the minimization.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-05-at-11.23.27.png?id=kkll6d&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtrbGw2ZCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMwOTE2NX0.tIZPMh7eqKjqjzVvGNVF4reslpMYCbc7FXPmIq2hDiM&signature=2498f28f1ef36255d073603b737f65140f857aed4e4794d7281c25d69ef59fb7" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Window can be restored to original/default size",
        "Horizontal and vertical resizing controls implemented",
        "Input area always visible in minimized state",
        "Viewport boundary detection prevents window going off-screen",
        "Window size persists across minimize/maximize cycles",
        "Undo minimization works correctly",
        "Elevation hierarchy improved in minimized state"
      ],
      completionNote: "Archived Feb 2026"
    }
  ]

  // Active sprints (in progress)
  const activeSprints = [
    {
      id: 5,
      title: "UI/Bug Fixes",
      emoji: "🐛",
      priority: "MEDIUM",
      storyPoints: 8,
      effort: "Low-Medium",
      impact: "Medium",
      severity: "6-9/10",
      teamMembers: ["Durgesh"],
      overview: "Fix various UI issues and bugs in the AI Assistant interface. Includes bookmark management fixes and profile button functionality. **UPDATED:** Added issues from Mar 2026 feedback (bookmark management limitations). Logo Asset Replacement archived.",
      primaryFiles: "browser/base/content/assistant/build/src/assistant.ts, browser/base/content/assistant/build/src/commands.ts, browser/base/content/assistant/assistant.ui.js, Firefox bookmark API",
      issues: [
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
        },
        {
          title: "Profile Button Not Working",
          count: 1,
          submissionIds: ["PdojLRQ"],
          description: "The profile button next to the extensions button does not work when clicked. Should open a new tab allowing user to enter details.",
          impact: "Can't access profile settings (severity 9/10)",
          technicalNotes: "Fix profile button click handler in browser UI",
          requiresUI: true,
          feedback: [
            { id: "PdojLRQ", text: "The profile button next to the extensions button does not work when i try to click on it. I expect it to open a new tab which allows me to enter my details." }
          ]
        },
        {
          title: "Bookmark Management Limitations",
          count: 1,
          submissionIds: ["A7Zg0Py"],
          description: "AI assistant has limited bookmark management: can't retrieve specific bookmark details, can't find/delete certain bookmarks, can't add bookmarks to bookmarks bar. User must use Firefox bookmark manager for many operations.",
          impact: "Incomplete bookmark management via AI (severity 6/10)",
          technicalNotes: "Expand bookmark commands - retrieve details, improve search/delete, support bookmarks bar placement",
          feedback: [
            { id: "A7Zg0Py", text: "The user tried to use an AI assistant to manage bookmarks. When asked what bookmarks they had, assistant reported no folders then created 'default' on bookmark current tab. Could not retrieve specific bookmark details. When asked to remove 'Martha Stewart' bookmark, assistant could not find or delete it. When asked to make bookmark appear on bookmarks bar, assistant hit error - operation not yet supported." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Minimize/maximize buttons show correct states (minimize greyed when minimized, maximize greyed when maximized)",
        "Assistant interface is resizable by dragging any of its 4 sides",
        "Bookmark removal works for imported bookmarks via AI commands",
        "Profile button opens profile settings tab correctly",
        "Bookmark management via AI supports retrieve, delete, and bookmarks bar placement"
      ]
    },
    {
      id: 8,
      title: "Tab Group & Tab/Window Operations",
      emoji: "📁",
      priority: "HIGH",
      storyPoints: 62,
      effort: "Medium-High",
      impact: "High",
      severity: "7-10/10",
      teamMembers: ["Rushyanth"],
      overview: "Fix tab group operations including renaming, finding tabs within groups, adding/removing tabs, and tab group state accuracy. Also fix core tab/window commands that users perceive as 'it said it worked but nothing happened.' This sprint covers both tab group management and tab/window command correctness. Includes context-based tab organization using AI to automatically group related tabs. ⚠️ PARTIALLY RESOLVED: \"Close Tab Group\" Command Deletes Hub Instead (Delete command works, but Close command doesn't exist - Close should hide tab group, Open should restore it). **UPDATED:** Added 18 story points from Mar 2026 feedback (tab group show/hide, close tab opens multiple, organize/close window confusion, group all tabs, tab group creation, GraphRecursionError on remove tab).",
      primaryFiles: "browser/base/content/assistant/build/src/hubs.ts, browser/base/content/assistant/build/src/commands.ts, browser/base/content/assistant/build/src/services/localMemory.ts, Browser first-run / startup UI (for browser import, privacy policy, vertical tabs popup), browser/branding/**",
      issues: [
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
          title: "Feature Request: Context-Based Tab Organization",
          count: 1,
          submissionIds: ["b5pdjNZ"],
          description: "Users want to organize tabs into groups based on context using AI. For example, 'I have multiple tabs open relating to AWS, Deepgram, Lambda functions, and Supabase. Create a group for these.' Currently creates group with wrong tabs.",
          impact: "Would make tab organization much easier (severity 7/10)",
          technicalNotes: "Implement context-aware tab grouping using AI to analyze tab content/URLs and group related tabs. Reference: Firefox has 'suggest more of my tabs' feature that analyzes tabs and suggests groups.",
          feedback: [
            { id: "b5pdjNZ", text: "As a worker starting his day with 37+ tabs open, I wish I could easily use the ai assistant and command it to 'organize my tabs into groups based on context.' For example, I want to be able to say something like 'I have multiple tabs open relating to AWS, Deepgram, Lambda functions, and Supabase. Create a group for these.' Currently, the behavior is the following: a new tab group named 'AWS, Deepgram, Lambda, Supabase' is created with one tab (the Oasis Feedback tab) saved in it. There is already a feature in firefox called 'suggest more of my tabs'. It is available when you manually create a tab group by clicking and dragging tabs on top of each other. If you click 'suggest more of my tabs', the browser analyzes the tabs you have open and suggests more to be added to the group, and it also suggests a contextual name for the tab group.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-22-at-11.31.35-AM.png?id=EZNV8l&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVaTlY4bCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTEwMzQ5Nn0.bRo8VyGQOkR0G9_K4kJmDN2hmcPVRAJHVm6A4qGARmk&signature=112352375738d4577df0e11f9f4104986110b2d5659a67eb82afc50f1ee83c18" }
          ]
        },
        {
          title: "Context-Based Tab Grouping Fails",
          count: 1,
          submissionIds: ["68gJ6Ge"],
          description: "When creating a shopping hub, agent failed to group all sites related to shopping. Zara and H&M are commercial shopping websites but weren't grouped together.",
          impact: "Context-based grouping doesn't work correctly (severity 7/10)",
          technicalNotes: "Improve AI logic for context-based tab grouping - better URL/content analysis and domain categorization",
          feedback: [
            { id: "68gJ6Ge", text: "while creating a shopping \"hub\" , agent failed to group all sites that were related to shopping . Zara is a commercial shopping website and so is hnm but the hub did not group all shopping websites.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-28-133011.png?id=bYM606&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJZTTYwNiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTYyNTEwM30.xiZU1Jso48MCLQyHxirqR82jXdVNWwbm2NUyRjriOIA&signature=71f715b1e7851d98158c410124d15ff6b64472e6c0f6ef1cb81581a05386a599" }
          ]
        },
        {
          title: "Multiple Tab Closing Doesn't Work",
          count: 1,
          submissionIds: ["ODRXd5Y"],
          description: "When trying to close multiple tabs, the command does not execute correctly. System responds that it will continue closing tabs but doesn't actually close them.",
          impact: "Can't close multiple tabs at once (severity 8/10)",
          technicalNotes: "Multiple tab closing logic - check command parsing and execution loop for closing multiple tabs",
          feedback: [
            { id: "ODRXd5Y", text: "When I try to close multiple tabs, the command does not execute correctly. Steps: 1. Prompt: \"List all the open tabs.\" 2. Prompt: \"Can you close 3 tabs of Oasis Feedback and 1 tab of any other tab?\" Actual result: The system responds: \"Okay, I have closed one 'Oasis Feedback' tab. I will continue closing the other tabs you requested.\" However, the remaining tabs are not closed.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-05-at-13.26.20.png?id=L69bWp&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikw2OWJXcCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDMxNjU1Mn0.v8PynULkcEUfH_PgIr_GgSu8LxXDq40bsSNXCmgvXXM&signature=e9456979c324a1ee666390cc12748d5acb112b122b4b8484e183fe886d74ee9b" }
          ]
        },
        {
          title: "Feature Request: Tab Group Show/Hide Control",
          count: 1,
          submissionIds: ["Npk52pO"],
          description: "Users want to use AI assistant to control whether tab groups are open or closed (shown/hidden) so they can see the tabs inside.",
          impact: "Can't manage tab group visibility via AI (severity 7/10)",
          technicalNotes: "Implement show/hide tab group commands in hub command module",
          feedback: [
            { id: "Npk52pO", text: "as a user, I want to be able to use the ai assistant to control whether tab groups are open or closed (shown/hidden) so I can see the tabs inside" }
          ]
        },
        {
          title: "Close Tab Opens Multiple Tabs Instead",
          count: 1,
          submissionIds: ["Y58VVDN"],
          description: "When asked to close a tab, the AI opens multiple tabs instead of closing.",
          impact: "Opposite of intended behavior (severity 7/10)",
          technicalNotes: "Tab close command execution - check for inverted or duplicate command triggers",
          feedback: [
            { id: "Y58VVDN", text: "opened multiple tabs when asked to close the tab", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-16-at-7.36.48-PM.png?id=rk29Wv&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJrMjlXdiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MTI1MDg5Mn0.Rul5ZfSY5J8nvBqur5BNA3CUqNPLNdrwln2HCxn4x7M&signature=6236f2da44ec8768f43af84c20391d4efe7ad2081f138c0f5d27fb0494776f32" }
          ]
        },
        {
          title: "Organize Tabs Opens New Window Instead",
          count: 1,
          submissionIds: ["RGEWdE4"],
          description: "When asking AI to organize tabs, it prompts to open another window and splits screens instead of organizing tabs in the current window.",
          impact: "Wrong action executed (severity 10/10)",
          technicalNotes: "Command intent parsing - distinguish organize from split view",
          feedback: [
            { id: "RGEWdE4", text: "When I asked the AI to organize my tabs, it prompted me to open another window and then proceeded to not organizing the tabs but splitting the screens. My goal here was to organize the tabs on the ongoing window." }
          ]
        },
        {
          title: "Close Window Closes Tabs Instead",
          count: 1,
          submissionIds: ["KYdp5e7"],
          description: "When given command to close the other window, AI closes tabs instead of the window.",
          impact: "Wrong action executed (severity 10/10)",
          technicalNotes: "Command intent parsing - distinguish window close from tab close",
          feedback: [
            { id: "KYdp5e7", text: "When given the command to Oasis AI of closing the other window it redirects and closes the tabs instead of the window." }
          ]
        },
        {
          title: "Group All Tabs Only Groups One Tab",
          count: 1,
          submissionIds: ["0QNjlKB"],
          description: "Command to create group and include all open tabs only groups the last-opened tab instead of all tabs.",
          impact: "Tab organization doesn't work as expected (severity 6/10)",
          technicalNotes: "Tab group creation - ensure all tabs are added, not just active tab",
          feedback: [
            { id: "0QNjlKB", text: "I wanted to add all the existing into a single group to organize them. I gave the command initially \"Group all the open tabs as Jobs to Apply to\" however the AI replied saying it was not able to add the open tabs because it could not find a group so i clarified the prompt and asked it to \"Create a new group and include all the open tabs in it\" It did create a new tab group and named it as i requested, however it only grouped one tab which was the open i opened at last.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-23-at-5.27.39-PM.png?id=9oPJLV&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlvUEpMViIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MTg4OTMwNn0.u62vrzysJZ9tFSA6J4yrDNejmHSSxYAaWpM3ntds3Y0&signature=f3f9e8924252026b2009538815bf649d998154335f3027c8f79c11876bc34322" }
          ]
        },
        {
          title: "Tab Group Creation Misinterprets Request",
          count: 1,
          submissionIds: ["xXKqBYv"],
          description: "Creating tab group of existing tabs (e.g., Wikipedia tabs) creates group with wrong name and only adds new tab. Backend 502 error on first attempt.",
          impact: "Tab grouping fails or produces wrong result (severity 10/10)",
          technicalNotes: "Tab group creation - match existing tabs by URL/title, handle backend errors gracefully",
          feedback: [
            { id: "xXKqBYv", text: "The user asked: 'Can you make a tab group of all the Wikipedia tabs?' The system first hit a backend error (Lambda 502 Internal Server Error). User repeated the request, and the assistant created a new tab group but named it literally 'of all the wikipedia tabs?' and only included a new tab in the group instead of the existing Wikipedia tabs." }
          ]
        },
        {
          title: "GraphRecursionError on Remove Tab from Group",
          count: 1,
          submissionIds: ["7RGjOB2"],
          description: "Removing a tab from a group triggers GraphRecursionError (recursion limit of 32). Confirm action loops repeatedly.",
          impact: "Command fails with technical error exposed to user (severity 8/10)",
          technicalNotes: "LangGraph recursion limit, confirm action loop - prevent infinite recursion in tab removal flow",
          feedback: [
            { id: "7RGjOB2", text: "remove 'What Is about:blank, and How Do You Remove It?' tab from the group. The tool removed the wrong tab. User said yes to remove the correct one. Then: Confirm action / Remove tab from group repeated many times. Error: GraphRecursionError: Recursion limit of 32 reached without hitting a stop condition.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-17-at-2.53.02-PM.png?id=rkJQMX&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJrSlFNWCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MTM2MTYyNX0.NYALgWLyeLqd4vwNYbijpwTpEFf8LfBcgkmLlPrNeAo&signature=c2b38f6234788cdc85b4407786e159940cceaa32ceb650e5856c3a33fe2fdffc" }
          ]
        }
      ],
      acceptanceCriteria: [
        "⚠️ 'Close tab group' command closes tabs without deleting the hub - PARTIALLY RESOLVED (Delete command works, but Close command doesn't exist yet - Close should hide tab group, Open should restore it)",
        "Duplicate tab closing works correctly",
        "Tab closing by domain/URL pattern works correctly",
        "Multiple tab closing commands execute correctly",
        "Context-based tab organization using AI implemented",
        "AI correctly identifies related tabs based on context",
        "Tab groups are created with correct tabs and appropriate names",
        "Context-based grouping correctly identifies related websites",
        "Close tab does not open multiple tabs",
        "Organize tabs works in current window (does not open new window)",
        "Close window closes window not tabs",
        "Group all tabs adds all tabs not just one",
        "Tab group creation correctly identifies and adds existing tabs",
        "Remove tab from group does not trigger GraphRecursionError"
      ]
    },
    {
      id: 9,
      title: "Authentication + Subscription UX (login, signup, session restore, limits)",
      emoji: "🔐",
      priority: "HIGH",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      teamMembers: ["Pournami", "Saideep", "Durgesh"],
      overview: "Fix authentication, login, signup, password management, and the 'paid but still limited' experience. This sprint is UI-heavy and should be owned by one engineer (or split by 'UI vs backend service' if needed) due to the size of `assistant.ui.js`. **UPDATED:** Added issues from Mar 2026 feedback (forgot password, signup with existing email, cannot login/signup, NetworkError/Supabase downtime).",
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
          title: "Cannot Login or Signup (Latest Version)",
          count: 1,
          submissionIds: ["EkpV9GB"],
          description: "Cannot login or signup with the latest version. No forgot password option. Signup window returns to original state after clicking signup.",
          impact: "Users blocked from accessing Oasis (severity 9/10)",
          technicalNotes: "Signup flow and forgot password in assistant.ui.js or supabase.ts",
          requiresUI: true,
          feedback: [
            { id: "EkpV9GB", text: "Cannot Login or Signup with the latest version. No forgot password option. The signup window after clicking on signup returns into original state (prior to signup)." }
          ]
        },
        {
          title: "No Forgot Password Recovery Path",
          count: 1,
          submissionIds: ["obW66G1"],
          description: "Invalid password error shown but no Forgot Password recovery path. User is forced to create a new account when password cannot be recovered.",
          impact: "Causes churn and duplicate accounts (severity 7/10)",
          technicalNotes: "Implement forgot password flow in assistant.ui.js, integrate with Supabase auth",
          requiresUI: true,
          feedback: [
            { id: "obW66G1", text: "Invalid password error shown, but no Forgot Password recovery path. Because password cannot be recovered : user is forced to create a new account. This will cause churn and duplicate accounts." }
          ]
        },
        {
          title: "Signup with Existing Email Provides No Guidance",
          count: 1,
          submissionIds: ["2E08Aob"],
          description: "When signing up with an email that already has an account, nothing happens. No sign-in redirect, no password reset route, no message that account exists.",
          impact: "Users don't know what to do next (severity 9/10)",
          technicalNotes: "Signup flow error handling - detect existing account and surface clear guidance (sign in, reset password)",
          requiresUI: true,
          feedback: [
            { id: "2E08Aob", text: "Signing up with an existing email does not proceed and does not provide any guidance. When I enter an email that already has an account and attempt to sign up, nothing happens. It does not sign me in, does not route me to Sign In, and does not route me to password reset. There is no clear message telling me the account already exists or what to do next." }
          ]
        },
        {
          title: "NetworkError / Supabase Downtime Blocks Sign-In",
          count: 1,
          submissionIds: ["Eky7MZ4"],
          description: "Users receive NetworkError when signing in during Supabase downtime (e.g., India region). No guidance to check status page or report the issue.",
          impact: "Users blocked from signing in during outages (severity 10/10)",
          technicalNotes: "Improve error messaging for network/auth failures, suggest Supabase status page, add user reporting flow",
          requiresUI: true,
          feedback: [
            { id: "Eky7MZ4", text: "As a user in India, I was not able to sign in within the 24 hour span on February 26th. Received a message \"NetworkError\" upon attempting to sign in with my user email and password. It likely has to do with this reported Supabase downtime in India: https://status.supabase.com/. As this is the 2nd time in the last 1 month that a Supabase downtime error has affected users' ability to log in, we should consider addressing this with improved error messaging that suggests for users to check the Supabase status page in the event they receive a \"Network Error\" upon signing in. We can also give them the ability to report this at that moment, which can notify us more quickly so we can potentially send a mass communication to users affected.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-26-at-8.34.30-PM.png?id=okjBab&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im9rakJhYiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MjExODQyMn0.oATBNppRgMzfRGLxj3XYxrM7nhijOS1vN6Ki2tyMcNA&signature=6168ca0f3d81136a59b3f6d15d9ea3eb255184deb0ea5b25fe5dc0867ffe3a58" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Clear error messages displayed for invalid login credentials",
        "Signup flow works and creates accounts successfully",
        "All authentication errors are user-friendly and actionable",
        "Forgot password recovery path implemented",
        "Signup with existing email shows clear guidance (sign in or reset password)",
        "NetworkError / Supabase downtime shows helpful messaging and reporting option"
      ]
    },
    {
      id: 10,
      title: "Onboarding + Branding polish (first run, visibility, Firefox remnants)",
      emoji: "🎯",
      priority: "MEDIUM-HIGH",
      storyPoints: 14,
      effort: "Medium",
      impact: "High",
      severity: "10/10",
      teamMembers: ["Pournami", "Saideep"],
      overview: "Improve the first-time user experience including onboarding flow, default preferences, browser import, AI Assistant visibility, and removing Firefox branding. Includes browser import in onboarding, Firefox privacy policy replacement on first launch, and Firefox branding removal in vertical tabs popup. **UPDATED:** Added issues from Mar 2026 feedback (Firefox branding in recent browsing modal, profile popup; Chrome import duplicates).",
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
        },
        {
          title: "Firefox Branding in Recent Browsing Modal",
          count: 1,
          submissionIds: ["kdqdlkd"],
          description: "Recent browsing view includes Firefox branding and CTA to sync Oasis across all devices (not a feature). Modal should be hidden or use Oasis branding.",
          impact: "Confusing branding (severity 10/10)",
          technicalNotes: "Hide or replace recent browsing modal, ensure Oasis branding consistency",
          requiresUI: true,
          feedback: [
            { id: "kdqdlkd", text: "This view for recent browsing includes Firefox branding and a CTA to sync Oasis across all devices, which is not a feature, so that modal should be hidden. The branding should be consistent with Oasis branding, not Firefox.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-12-at-11.28.33-AM.png?id=vd4pdQ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZkNHBkUSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDkxNzQxMn0.OnMqRfO5V3OHlzhZu5LDukE7M0CZPac7HT3u49JC1l4&signature=13111370e6781deb54f90824debe2d639640b782e81f69f49af9f8cdf68a6940" }
          ]
        },
        {
          title: "Firefox Branded Profile Popup",
          count: 1,
          submissionIds: ["aQVL069"],
          description: "Profile popup shows Firefox branding instead of Oasis branding.",
          impact: "Confusing branding (severity 10/10)",
          technicalNotes: "Replace Firefox branding in profile popup with Oasis branding",
          requiresUI: true,
          feedback: [
            { id: "aQVL069", text: "Firefox branded profile popup", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-19-at-8.47.18-AM.png?id=yd18oX&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlkMThvWCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MTUxMzc4N30.wLGQdWlcWHtjz9jMVrKyVe84TPzI4-jP_e8qNrzP5Zs&signature=0f7cb5252f2947423cd5a4e3c75ecb8d7a018068fccb8a88e5f7805864e0befc" }
          ]
        },
        {
          title: "Chrome Import Duplicates Bookmarks",
          count: 1,
          submissionIds: ["9qbWNO5"],
          description: "Importing data from Chrome twice results in bookmarks being saved twice (duplicates).",
          impact: "Duplicate bookmarks after import (severity 6/10)",
          technicalNotes: "Browser import logic - deduplicate or prevent duplicate imports",
          requiresUI: true,
          feedback: [
            { id: "9qbWNO5", text: "I imported my data from Chrome, I did it twice however the bookmarks were saved twice.", screenshot: "https://storage.tally.so/private/SCR-20260222-oxyg.png?id=8RyjWP&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhSeWpXUCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MTc5NzYyOX0.i1JGs5ACPDIKHWhZQDGJxPBeogirOR1cKlflb36-LY0&signature=65e973e415b5534051c9ab54efaee090a158da244f88afb9732e5b3ba45f3fae" }
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
        "Firefox branding in vertical tabs popup is replaced with Oasis branding",
        "Firefox branding in recent browsing modal and profile popup replaced with Oasis branding",
        "Chrome import does not create duplicate bookmarks"
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
      teamMembers: ["Ashwin", "Likhitha"],
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
      storyPoints: 14,
      effort: "Medium-High",
      impact: "Medium",
      severity: "7/10",
      teamMembers: ["Ashwin", "Saideep", "Pournami"],
      overview: "Implement chat history storage and retrieval, allowing users to access previous AI Assistant chat threads from other days. Includes New Chat feature and proper icon labeling for chat management.",
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
        },
        {
          title: "Refresh Icon Labeling and New Chat Feature",
          count: 1,
          submissionIds: ["J9yB5MX"],
          description: "The refresh icon next to voice dictation is currently labeled as 'clear chat history,' which is unexpected. It should only appear when voice dictation is active and clearly reflect that function. Separately, provide a 'New Chat' option for starting fresh conversations.",
          impact: "Confusing labeling and missing feature (severity 10/10)",
          technicalNotes: "Fix icon labeling, add 'New Chat' feature, move chat history clearing to Settings",
          requiresUI: true,
          feedback: [
            { id: "J9yB5MX", text: "The refresh icon next to voice dictation is currently labeled as 'clear chat history,' which is unexpected. That icon originally signaled restarting voice dictation, not wiping conversation history. It should only appear when voice dictation is active and clearly reflect that function. Separately, instead of clearing chat history from there, we should provide a 'New Chat' option for starting fresh conversations and let users access past chats through chat history. Clearing chat history is a higher-impact action and would be better placed in Settings for now.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.54.14-AM.png?id=Yxa760&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ill4YTc2MCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MjgyNX0.g6O5Sub6W3OW2B_IGkbfOXovqh4FkulWO-Of3AatWXQ&signature=c008eecf286f2fa522e7cf9e4ab4f04eacd604301f0bfc0a1b930e2e1841fc66" }
          ]
        }
      ],
      acceptanceCriteria: [
        "Chat history storage and access implemented",
        "Conversations are stored in Supabase",
        "UI allows users to access past conversations",
        "Chat history persists across sessions",
        "Refresh icon labeling is correct and contextual (only appears when voice dictation is active)",
        "New Chat feature implemented for starting fresh conversations",
        "Chat history clearing moved to Settings"
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
      severity: "10/10",
      teamMembers: ["Afshaan", "Lalith", "Revanth", "Ashwin", "Kaushik"],
      overview: "Implement update checking, notification system, and update UI within Oasis for software updates. Users who have installed Oasis on Windows or Mac should be able to go to a clear place in the app (e.g., Settings → Software Update) and see a macOS-style Software Update screen with status, installed version, check/download/install buttons, and optional Automatic Updates / Beta toggles.",
      primaryFiles: "toolkit/mozapps/update/, browser/components/preferences/main.inc.xhtml, browser/base/content/aboutDialog-appUpdater.js, resource://gre/modules/AppUpdater.sys.mjs, browser/base/content/assistant/ (Settings entry point)",
      keyConsiderations: {
        context: "Oasis is built on Firefox (Gecko). The Firefox update pipeline (MAR + updater binary) already exists and works on macOS and Windows. However, the built-in update UI is hidden for packaged builds, and the app currently points to Mozilla's update server—not an Oasis-specific one.",
        sections: [
          {
            title: "Current State (What Exists)",
            items: [
              "Firefox update pipeline in toolkit/mozapps/update/ — MAR-based flow, updater binary, signature verification",
              "Update protocol works on macOS and Windows (same flow; platform-specific elevation)",
              "Preferences update UI exists (check, download, restart, auto/manual) but is hidden for packaged apps via display: none in main.js (lines 4731–4735)",
              "Update URL baked in at build time; default host is aus5.mozilla.org",
              "AppUpdateURL enterprise policy can override URL without rebuild (policies.json)",
              "Assistant Settings shows \"Settings coming soon\" — no Software Update section yet",
              "AWS infrastructure available for hosting update server"
            ]
          },
          {
            title: "Gaps (What's Missing)",
            items: [
              "No Oasis update server — no service serving update.xml and Oasis MARs",
              "No Oasis MAR build/signing process — need Oasis-specific MARs and signing",
              "Update URL points to Mozilla — must override (build or policy) to point to Oasis server",
              "Packaged app hides update UI — installed Mac/Windows users have no in-app update button today",
              "No dedicated Software Update screen — no macOS-style status, version, toggles, legal/help"
            ]
          },
          {
            title: "Desired End State",
            items: [
              "Dedicated Software Update screen (e.g., Settings → Software Update) with: status (checking/up to date/update available), installed version, Check for updates button, Download and install when available, Restart to update",
              "Optional toggles: Automatic Updates on/off, Beta Updates on/off",
              "Legal/help links",
              "Updates delivered via existing Firefox pipeline but with Oasis server + Oasis MARs"
            ]
          },
          {
            title: "Implementation Phases",
            items: [
              "Phase 1: Oasis update server (host update.xml + MARs on AWS), MAR build/signing pipeline, override update URL",
              "Phase 2: Un-hide or replace Preferences update UI with dedicated Software Update screen in Assistant Settings",
              "Phase 3: Add Automatic Updates and Beta toggles, legal/help copy"
            ]
          }
        ]
      },
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
      teamMembers: ["Mohammad", "Revanth", "Kaushik", "Atharva", "Ruturaj", "Naveen"],
      overview: "Develop a Chromium-based version of Oasis Enterprise Browser to address enterprise customer requirements for secure SaaS access. Culture Amp (Julian) is ready to invest but we didn't have a Chromium enterprise version to demo—this sprint delivers the product. Requirements broadly apply to enterprise prospects like Culture Amp (see readiness checklist below). This sprint is motivated by enterprise demand for managed browsers that can provide secure access to cloud applications for short-term consultants and third-party partners without requiring full device management or shipping hardware. By 2026, analysts project that roughly 25% of enterprises will be using managed browsers or extensions for security and access control. The enterprise browser market is growing rapidly, with most enterprise browsers being Chromium-based due to Chromium's dominant share of global browser usage and compatibility with modern SaaS applications. Organizations now use an average of 100+ SaaS apps, with large enterprises often using well over 150-400, which increases the need for centralized, browser-level security controls. This creates a significant market opportunity for Chromium-based enterprise browsers that can provide secure SaaS access for external users via managed browser sessions, with per-user, per-month licensing aligned to flexible contractor headcount. The goal is to reduce hardware and IT overhead, improve security posture for third-party access, and maintain a familiar user experience while enabling centralized controls for data protection and policy enforcement at the browser/session level.",
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
      ],
      readinessChecklist: {
        intro: "Below is a checklist that will help us transform Oasis into its secure, deployable, enterprise grade browser platform.",
        sections: [
          {
            title: "1. Identity & Access Management (Critical)",
            items: ["Support SAML 2.0/SSO", "Support multiple IDPs (Okta, EntraID)", "Support RBAC", "Admin vs User separation"]
          },
          {
            title: "2. Browser Security Controls",
            items: ["Domain allowlist / denylist", "Disable downloads (configurable)", "Disable uploads (configurable)", "Disable clipboard copy/paste", "Disable printing", "Disable file system access", "Disable extensions", "Disable developer tools (optional policy)"]
          },
          {
            title: "3. Session Security",
            items: ["Idle timeout enforcement", "Clear cache on logout", "Optional ephemeral sessions", "Block credential storage"]
          },
          {
            title: "4. Network and DLP compatibility",
            subsections: [
              { title: "Traffic Enforcement", items: ["Explicit proxy configuration support", "Lock proxy settings (no user override)", "No direct connection bypass", "DNS resolution enforcement"] },
              { title: "SSL Inspection", items: ["Support enterprise CA injection", "Compatible with SSL inspection", "No breakage under HTTPS inspection"] }
            ]
          },
          {
            title: "5. Deployment and Endpoint Requirements",
            subsections: [
              { title: "Installation", items: ["No local admin required", "User level installation", "Clean uninstall", "Auto-update without admin"] },
              { title: "Platform Support", items: ["macOS enterprise support", "Windows enterprise support", "Version management capability"] }
            ]
          },
          {
            title: "6. Commercial Readiness",
            items: ["Per-user per-month licensing model", "Usage metering", "Contract-based provisioning", "Customer onboarding playbook", "Offboarding automation"]
          },
          {
            title: "7. Enterprise Documentation",
            items: ["Security whitepaper", "Architecture overview", "DLP integration guide (Netskope/others)", "IdP integration guide (Okta/Entra)", "Deployment guide", "Compliance mapping document"]
          }
        ]
      },
      sprintLog: {
        intro: "Review feedback from Sprint 17 review (Feb 2026)",
        sections: [
          {
            title: "Review Summary",
            content: "Overall this is a strong enterprise foundation. The Chromium base, SSO integration, policy management, admin-free installation, and licensing model cover the core requirements for enterprise readiness. From a review perspective, the sprint captures the essential technical pillars."
          },
          {
            title: "Potential Enhancements to Consider",
            items: [
              "Audit logging and admin visibility (enterprises often require detailed activity logs for compliance reviews)",
              "Real-time policy updates and session revocation capability",
              "Basic admin dashboard visibility (active sessions, license usage)"
            ]
          },
          {
            title: "Policy Management — Cinder & Alternatives Evaluation",
            content: "For policies, include a link to Cinder for review by the engineers. We should evaluate Cinder, other alternatives, and in-house alternatives. Cinder provides businesses everything they need to orchestrate and automate safety at scale with industry leading tools for content moderation, AI safety, and data compliance.",
            link: { url: "https://www.cinder.co/", text: "Cinder | Responsible AI, Trust & Safety, and Data Labeling At Scale" }
          },
          {
            title: "Pallavi — Governance for Agentic/Autonomous Systems",
            content: "Key questions for Cinder evaluation: Does their enforcement model support non-human actors acting on behalf of users, with continuous authorization and scoped permissions? As automation increases across enterprise workflows, can their architecture scale safely with high-frequency, machine-driven actions — not just human moderation flows? Cinder's architecture features a centralized policy engine with real-time enforcement and auditability. The strategic question: Can that enforcement layer move upstream closer to runtime execution in agentic environments where actions are triggered autonomously? Governance at the API or browser execution layer requires policy validation before state mutation, not just post-event moderation. If Cinder can operate as a pre-execution decision engine rather than only a workflow orchestrator, that becomes strategically powerful."
          }
        ]
      }
    },
    {
      id: 18,
      title: "Voice Dictation Improvements",
      emoji: "🎤",
      priority: "HIGH",
      storyPoints: 5,
      effort: "Medium",
      impact: "High",
      severity: "8-10/10",
      teamMembers: ["Rushyanth"],
      overview: "Improve voice dictation UX including waveform animation feedback, stop button responsiveness, UI simplification, and real-time visual feedback during recording. **NEW SPRINT** from Feb 2026 feedback.",
      primaryFiles: "browser/base/content/assistant/build/src/services/voiceInput.ts, browser/base/content/assistant/ui-preact/src/App.tsx, browser/base/content/assistant/ui-preact/src/App.css",
      issues: [
        {
          title: "Input-Reactive Waveform Animation",
          count: 1,
          submissionIds: ["0Q4Ayqy"],
          description: "Waveform should be input-reactive, not a looped animation. Animate on detected speech + amplitude; idle on silence. Currently waveform animation is always on, making it decorative rather than functional.",
          impact: "Confusing feedback (severity 8/10)",
          technicalNotes: "Implement real-time waveform animation based on audio input amplitude and speech detection",
          requiresUI: true,
          feedback: [
            { id: "0Q4Ayqy", text: "Waveform should be input-reactive, not a looped animation. Animate on detected speech + amplitude; idle on silence. Right now the waveform animation is basically \"always on,\" so it reads as decorative and doesn't communicate state. The intent is: only animate when we're actually detecting speech, so users get real-time feedback that recording is working.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.06.50-AM.png?id=rkPRaR&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJrUFJhUiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY0OTg5N30.kkKDIXz9mMn-uBNJoe-D5hR5XDj5TFKseZLYwcea8IA&signature=ec12a193895ad566644f6bda67ea618791bd752a03628f0f16712359f5d9f32d" }
          ]
        },
        {
          title: "Stop Button Immediate Response",
          count: 1,
          submissionIds: ["KYXR45A"],
          description: "When the stop button is clicked, recording doesn't stop immediately. There's a noticeable lag, which makes it unclear whether dictation has actually ended. Recording should stop instantly or at least reflect an immediate state change.",
          impact: "Confusing user experience (severity 10/10)",
          technicalNotes: "Improve stop button responsiveness - immediate state change and audio recording stop",
          requiresUI: true,
          feedback: [
            { id: "KYXR45A", text: "For voice dictation, when the stop button is clicked, recording doesn't stop immediately. There's a noticeable lag, which makes it unclear whether dictation has actually ended. Recording should stop instantly, or at least reflect an immediate state change, so users can quickly switch between dictating, reviewing, and playback without confusion.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.15.54-AM.png?id=8RxV9A&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhSeFY5QSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDQ1N30.9EU3xaeiM-NSPlgYDU4ebdnJMcPM2fIH0tFam2gxUHQ&signature=a8f78d59b119e8fc19ddc6379ff9dac9ca5382927c78abd041902bac63f093c7" }
          ]
        },
      ],
      acceptanceCriteria: [
        "Waveform animation is input-reactive (animates on speech, idle on silence)",
        "Stop button provides immediate state change feedback"
      ]
    },
    {
      id: 19,
      title: "Sprint 19 - Feedback Modal & HITL",
      emoji: "💬",
      priority: "MEDIUM-HIGH",
      storyPoints: 12,
      effort: "Medium",
      impact: "High",
      severity: "7-10/10",
      teamMembers: ["Rushyanth"],
      overview: "Feedback modal implementation and HITL audit. **Feedback modal:** Implement in-app feedback functionality; modal auto-scroll when triggered. **HITL objective:** Make the AI error-free and bring it to max efficiency—NPS surveys cite this as what could make the product better. Identify errors that negatively impact user experience (commands that feel wrong, too slow, or don't work) and make it easy for users to log these thoroughly with enough context to resolve each issue. Audit current HITL setup and output to improve the experience for users and the data for engineers.",
      primaryFiles: "browser/base/content/assistant/ui-preact/src/components/Feedback.tsx, browser/base/content/assistant/ui-preact/src/App.tsx, browser/components/aiwindow/ui/components/ai-chat-content/chat-assistant-footer/assistant-message-footer.mjs, hitlFeedback.ts, feedback_events table, assistant.ts, feedback_events_rows.csv (current export)",
      issues: [
        {
          title: "Feedback Modal Auto-Scroll",
          count: 1,
          submissionIds: ["D4LWR7l"],
          description: "When users click the upvote or downvote icons, the feedback modal isn't immediately visible and requires manual scrolling. The modal should automatically come into view.",
          impact: "Friction in feedback flow (severity 10/10)",
          technicalNotes: "Implement auto-scroll or repositioning of feedback modal when triggered",
          requiresUI: true,
          feedback: [
            { id: "D4LWR7l", text: "When users click the upvote or downvote icons, the feedback modal isn't immediately visible and requires manual scrolling. This adds friction. The modal should automatically come into view, either by auto-scrolling or repositioning it in the viewport so users can continue the feedback flow without extra effort.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.26.38-AM.png?id=YxabXN&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ill4YWJYTiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MDk2NX0.nY7XVTjj0lUQQlt5kh-tU_z-Tjnh5wz2DRQyPJn-TMI&signature=0becef6ab3931381bcdcd32f6b3e98c1e13de1ec34bc4dfd30853999539a972e" }
          ]
        },
        {
          title: "Audit Current HITL User Experience",
          count: 0,
          submissionIds: [],
          description: "Review the in-product feedback flow from the user's perspective: Where does the feedback prompt appear? How easy is it to submit? What friction exists (e.g., too many steps, unclear categories, no prompt to add context)? Document pain points and opportunities to make logging errors easier and more thorough.",
          impact: "Informs UX improvements to increase feedback quality and volume",
          technicalNotes: "Walk through feedback flow in assistant UI. Review Feedback.tsx, assistant-message-footer. Consider user testing or internal dogfooding.",
          feedback: []
        },
        {
          title: "Audit Current Output Data & Gaps",
          count: 0,
          submissionIds: [],
          description: "Analyze feedback_events export (schema, CSV output) against what engineers need to reproduce issues, triage to sprints, and improve the AI. Document gaps: missing user_prompt, ai_response, tool_output, conversation context, command_type, user_plan, etc. Reference feedback_events_IMPROVED_SAMPLE.csv for target state.",
          impact: "Identifies data improvements needed for actionable engineering",
          technicalNotes: "Compare current export to improved sample. Trace data flow from UI → hitlFeedback → Supabase → export.",
          feedback: []
        },
        {
          title: "Document Recommendations & Prioritized Roadmap",
          count: 0,
          submissionIds: [],
          description: "Synthesize audit findings into a prioritized list of recommendations: (1) User experience improvements—what would make it easier for users to log errors with sufficient context; (2) Output data improvements—what columns/capture changes would make the export actionable for engineers. Include effort estimates and impact.",
          impact: "Creates clear roadmap for future HITL enhancement sprints",
          technicalNotes: "Deliverable: markdown or doc with recommendations, prioritized by impact/effort.",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Feedback modal auto-scrolls/repositions when triggered",
        "Current HITL user flow audited and documented with pain points",
        "Current output data gaps documented vs. engineering needs",
        "Prioritized recommendations delivered (UX + data improvements)",
        "Roadmap for implementation sprints defined"
      ]
    },
    {
      id: 22,
      title: "Search & Command Interpretation",
      emoji: "🔍",
      priority: "MEDIUM-HIGH",
      storyPoints: 18,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      overview: "Fix web search functionality and improve command interpretation to reduce confusion and incorrect prompt results. Includes contextual CTAs. **UPDATED:** Added issues from Mar 2026 feedback (splitview command not recognized, split screen opens multiple tabs, AI summarizes wrong page).",
      primaryFiles: "browser/base/content/assistant/build/src/commands.ts, browser/components/aiwindow/models/Tools.sys.mjs, browser/base/content/assistant/build/src/assistant.ts",
      issues: [
        {
          title: "Recurring Search Issues (Windows)",
          count: 1,
          submissionIds: ["5BJZkrb"],
          description: "Search issues recurring on Windows version even when starting new research topics.",
          impact: "Search functionality broken on Windows (severity 9/10)",
          technicalNotes: "Investigate Windows-specific search issues, check platform compatibility",
          feedback: [
            { id: "5BJZkrb", text: "(windows version) this issue is recurring even when i try to start a new topic to research.", screenshot: "https://storage.tally.so/private/Screenshot-2026-01-29-132313.png?id=49lxyb&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5bHh5YiIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc2OTcxMTEwNH0.MIZM2MZUIg7Cjw9uNc0bwgriXDNMP6qRri4ghgg0bC4&signature=b9d0d2c03f299130e1af2dba013f2fbf2dbef96242fb441b688f31e83e7fd709" }
          ]
        },
        {
          title: "Command Interpretation Confusion",
          count: 1,
          submissionIds: ["jaKMqd6"],
          description: "Confusion in AI with prompts causing it to bring up unrelated prompt results (Windows version).",
          impact: "Incorrect command interpretation (severity 8/10)",
          technicalNotes: "Improve command interpretation logic, better context matching",
          feedback: [
            { id: "jaKMqd6", text: "confusion in the ai with prompts - causing it to bring up unrelated prompt results  ( windows version)", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-06-144606.png?id=PGDale&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBHRGFsZSIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDQwNzIzMH0.olHlrL5jdmJajNHt48-6SQdbIwhzAidlE7WPSzxPv-w&signature=86bef991733ca24ccf20a24b3d057642a49c5339f0c7457f9414326de52a61d3" }
          ]
        },
        {
          title: "Contextual CTA Badges Feature",
          count: 1,
          submissionIds: ["RGOr9Kj"],
          description: "After output, users often need to decide next step. Surface contextual CTA badges (e.g., 'Search the web') to reduce friction. Also proactively surface relevant links based on prompt context.",
          impact: "Would improve UX significantly (severity 10/10)",
          technicalNotes: "Implement contextual CTA badges and proactive link surfacing based on prompt context",
          requiresUI: true,
          feedback: [
            { id: "RGOr9Kj", text: "After the output, users often need to decide their next step. In this case, 'search the web' was the obvious next action. Instead of expecting users to type it again, we could surface a contextual CTA badge like 'Search the web' to reduce friction and speed up browsing. Also, based on the prompt context, it likely could have inferred intent and proactively surfaced relevant links which it didn't.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.35.15-AM.png?id=1pV02l&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFwVjAybCIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MTQxN30.xSunGkPnT0ccahYDUBXKfjn9d6lzjuMBw_QDhth9-xI&signature=b30885241aa86f14d064eca11caf554beb4217880a24028bab8da5c791da19bd" }
          ]
        },
        {
          title: "Web Search Reliability",
          count: 1,
          submissionIds: ["eqboX4J"],
          description: "AI assistant runs into issues when initiating web search. It states it will perform a search but doesn't return results or follow-up output. Should execute reliably or show clear fallback messaging.",
          impact: "Broken search experience (severity 10/10)",
          technicalNotes: "Fix web search execution, add error handling and fallback messaging",
          feedback: [
            { id: "eqboX4J", text: "The AI assistant seems to run into issues when initiating web search. It states that it will perform a search but doesn't actually return any results or follow-up output. This creates a broken experience. Either the search should execute reliably, or we should show clear fallback messaging or status feedback instead of leaving users hanging.", screenshot: "https://storage.tally.so/private/Screenshot-2026-02-09-at-10.40.15-AM.png?id=AjvRRo&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFqdlJSbyIsImZvcm1JZCI6IjNqa05ONiIsImlhdCI6MTc3MDY1MTY1MX0.6jS7YxZn3_-dqVf1zWAnZlWEnuMCMje51wWffoThuQg&signature=98948e5c5dd4b5882f33ea7369e4c55dad1575909f8b27dc4b4d6d5d49321213" }
          ]
        },
        {
          title: "AI Doesn't Understand Splitview Command",
          count: 1,
          submissionIds: ["aQ7RRBE"],
          description: "AI responds that it cannot perform splitview, suggests OS-level split screen instead. Oasis has split view feature but AI doesn't recognize the command.",
          impact: "Core Oasis feature inaccessible via AI (severity 10/10)",
          technicalNotes: "Command interpretation - map 'splitview' to Oasis split view command",
          feedback: [
            { id: "aQ7RRBE", text: "User said 'splitview this'. AI responded it can't perform splitview and suggested Windows/macOS split screen. User repeated 'splitview'. AI again said it can't control browser layout. Oasis has split view - AI should recognize and execute it." }
          ]
        },
        {
          title: "Split Screen Command Opens Multiple Tabs",
          count: 1,
          submissionIds: ["ZjpANJB"],
          description: "When asked to open site in left split screen, browser opens it multiple times instead of placing correctly in split view. Also: no autocorrect feature while typing.",
          impact: "Split view doesn't work correctly (severity 3/10 for split, separate for autocorrect)",
          technicalNotes: "Split view command execution, tab placement logic",
          feedback: [
            { id: "ZjpANJB", text: "1. Split Screen Command Accuracy: When I asked it to open Instagram on the left split screen, the browser repeatedly opened Instagram multiple times instead of placing it correctly in split view. 2. Autocorrect Feature: I noticed there doesn't appear to be an autocorrect feature while typing, which would be helpful for improving the browsing and search experience." }
          ]
        },
        {
          title: "AI Summarizes Wrong Page",
          count: 1,
          submissionIds: ["Me0okAl"],
          description: "When asked to summarize content not on current page (e.g., interview process while viewing mission/values), AI summarizes current page instead. Should flag that requested content isn't on active page or prompt user to navigate.",
          impact: "Reduces trust in contextual accuracy (severity 8/10)",
          technicalNotes: "Summarization context - ensure AI checks if requested content is on active page before summarizing",
          feedback: [
            { id: "Me0okAl", text: "I had two tabs open from the same company's website — one for purpose/mission/values and another for interview process. While viewing purpose/mission/values, I asked the chatbot to summarize the interview process. Instead of indicating that the interview process content was not on the current page, it summarized the purpose/mission/values page. I would expect the chatbot to either flag that the requested content isn't on the active page or prompt me to navigate to the correct page." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Search functionality works reliably on Windows",
        "Command interpretation correctly matches user intent",
        "Contextual CTA badges implemented",
        "Proactive link surfacing based on prompt context",
        "Web search executes reliably with proper error handling",
        "Clear fallback messaging when search fails",
        "Splitview command recognized and executed by AI",
        "Split screen command places tabs correctly (no duplicate opens)",
        "Summarization checks if requested content is on active page before summarizing"
      ]
    },
    {
      id: 24,
      title: "Authentication Friction — Passkeys, Biometrics & SSO",
      emoji: "🔑",
      priority: "HIGH",
      storyPoints: 13,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      overview: "Reduce authentication friction that causes Chrome switchers to revert. Internal reflection (Duke student): biggest barrier to Oasis adoption is not performance or features—it's auth. Chrome stores passkeys and integrates with device biometrics (face scan); Oasis requires manual password + Duo 2FA at every institutional login. For students and knowledge workers who switch contexts quickly (Zoom, Canvas, DukeHub, SharePoint), 20–30 second delays compound. **Source:** Internal Reflection: Switching to Oasis as a Duke Student — Why I Came Back to Chrome (Feb 2026).",
      primaryFiles: "Browser password/passkey storage, WebAuthn integration, Duo/2FA flow handling, credential migration from Chrome",
      issues: [
        {
          title: "Passkey Migration from Chrome",
          count: 1,
          submissionIds: ["DUKE-REFLECTION"],
          description: "Oasis cannot seamlessly access or migrate passkeys from Chrome. Chrome's passkey ecosystem is deeply embedded; when Oasis can't migrate those passkeys, it introduces measurable slowdown at every login point.",
          impact: "Retention blocker for Chrome switchers (severity 10/10)",
          technicalNotes: "Implement passkey import/migration from Chrome. WebAuthn credential storage compatibility. May require platform-specific handling for Chrome credential export.",
          feedback: [
            { id: "DUKE-REFLECTION", text: "Chrome stores my passkeys and integrates directly with my device's biometric authentication. Instead of typing passwords and manually completing a two-step flow, I simply scan my face. Authentication happens almost invisibly. Chrome's passkey ecosystem is deeply embedded into my daily digital life. When Oasis cannot seamlessly access or migrate those passkeys, it introduces a measurable slowdown at every login point." }
          ]
        },
        {
          title: "Device-Native Biometric Authentication",
          count: 1,
          submissionIds: ["DUKE-REFLECTION"],
          description: "Chrome integrates with device biometrics (face scan, fingerprint); Oasis requires typing passwords and manually completing Duo 2FA. Biometric auth isn't just more convenient—it fundamentally changes the pace of workflow.",
          impact: "Auth speed is part of accessibility for fast context-switchers (severity 9/10)",
          technicalNotes: "Integrate WebAuthn with platform biometric APIs. Ensure passkey auth flows use device-native biometric prompts where available.",
          feedback: [
            { id: "DUKE-REFLECTION", text: "In Chrome, the experience is materially different. Chrome stores my passkeys and integrates directly with my device's biometric authentication. Instead of typing passwords and manually completing a two-step flow, I simply scan my face. Authentication happens almost invisibly. This isn't just more convenient - it fundamentally changes the pace of workflow." }
          ]
        },
        {
          title: "Streamlined Duo/SSO Flows for Institutional Portals",
          count: 1,
          submissionIds: ["DUKE-REFLECTION"],
          description: "University and enterprise portals (DukeHub, Canvas, SharePoint) require SSO + Duo Mobile 2FA. Each protected platform triggers full credential + Duo flow. Need streamlined Duo verification within institutional SSO systems.",
          impact: "20–30 second delay per login compounds for students switching between Zoom, Canvas, coursework (severity 8/10)",
          technicalNotes: "Improve Duo Mobile flow handling. Consider session persistence for institutional SSO. Reduce friction in 2FA completion.",
          feedback: [
            { id: "DUKE-REFLECTION", text: "As a Duke student, I rely heavily on multiple institutional platforms, including DukeHub, Canvas, SharePoint, and other university portals. These systems require single sign-on credentials followed by two-step authentication through Duo Mobile. While my usernames and passwords migrated successfully into Oasis, the login experience was not seamless. Each time I accessed a protected Duke platform, I had to enter credentials and complete Duo verification. As a student, I move quickly between online meetings, presentations, coursework submissions, and collaborative tools. In those moments, authentication speed becomes part of accessibility. Even a 20–30 second delay feels significant when joining a Zoom presentation or sharing a screen in class." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Passkey migration from Chrome works (import/migrate passkeys)",
        "Device-native biometric authentication integrated for passkey auth",
        "Duo/2FA flows streamlined for institutional SSO (DukeHub, Canvas, etc.)",
        "Auth experience comparable to Chrome for institutional portals",
        "Documented: If Oasis supported full passkey migration, biometric auth, and streamlined Duo flows, switching barrier would drop dramatically"
      ]
    },
    {
      id: 25,
      title: "Daily AI Command Limits",
      emoji: "📊",
      priority: "HIGH",
      storyPoints: 13,
      teamMembers: ["Archit Gupta"],
      effort: "Medium-High",
      impact: "High",
      severity: "7-8/10",
      overview: "Migrate Oasis pricing from monthly AI command limits to daily limits for all plans. Current pricing: Beta (free) = 50 AI commands/month, Zen ($20/month) = 1,500 AI commands/month. Goal: enforce AI command limits per day instead of per month across all plans. Requires backend usage tracking changes, limit enforcement logic, UI updates for daily usage display, and pricing/marketing copy updates.",
      primaryFiles: "Usage/limit tracking service, plan configuration, AI assistant pre-request check, pricing page, in-app usage display",
      issues: [
        {
          title: "Backend: Daily Usage Tracking & Limit Enforcement",
          count: 1,
          submissionIds: ["PRICING-MIGRATION"],
          description: "Implement daily (vs monthly) usage tracking for AI commands. Store usage per user per day; reset counters at midnight (user timezone or UTC). Enforce limits before executing AI commands. Plan config must support daily limits (e.g., Beta: ~2/day, Zen: ~50/day as rough equivalents, or new target values).",
          impact: "Core requirement for pricing model change (severity 8/10)",
          technicalNotes: "Modify usage tracking schema/logic to aggregate by day. Add pre-request check in AI assistant flow. Plan table/config needs daily_limit field. Consider timezone handling for reset.",
          feedback: [
            { id: "PRICING-MIGRATION", text: "Current: Beta = 50 AI commands/month, Zen = 1,500 AI commands/month. Migrate to daily limits for all plans." }
          ]
        },
        {
          title: "UI: Daily Usage Display & Limit Messaging",
          count: 1,
          submissionIds: ["PRICING-MIGRATION"],
          description: "Update in-app UI to show daily usage (e.g., '12 / 50 AI commands today') instead of monthly. When limit reached, show clear message: 'Daily limit reached. Resets at midnight.' Replace 'Usage limit reached (50/50 units). Please upgrade your plan via the menu.' style messaging with daily context.",
          impact: "Users need visibility into daily limits (severity 7/10)",
          technicalNotes: "AI assistant UI, settings/profile area. Update limit-reached modal or inline message. Ensure messaging is accurate for daily reset.",
          requiresUI: true,
          feedback: [
            { id: "PRICING-MIGRATION", text: "Users should see daily usage and understand when their limit resets." }
          ]
        },
        {
          title: "Pricing Page & Plan Configuration",
          count: 1,
          submissionIds: ["PRICING-MIGRATION"],
          description: "Update kahana.co/oasis-pricing and any in-app pricing surfaces to reflect daily limits. Define and document new daily limits per plan (e.g., Beta: X/day, Zen: Y/day). Update Stripe/product metadata if needed.",
          impact: "Accurate marketing and sales (severity 7/10)",
          technicalNotes: "Pricing page copy, plan config in DB or env. Ensure consistency between marketing and enforcement.",
          feedback: [
            { id: "PRICING-MIGRATION", text: "Pricing page currently shows '50 AI commands per month' (Beta) and '1,500 AI commands per month' (Zen). Change to daily limits." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Usage tracked and enforced per day (not per month) for all plans",
        "Daily limits defined per plan and configurable",
        "In-app UI shows daily usage (e.g., X / Y AI commands today)",
        "Limit-reached message explains daily reset (midnight)",
        "Pricing page and marketing copy updated to daily limits",
        "Existing users migrated gracefully (no unexpected lockouts)"
      ]
    },
    {
      id: 26,
      title: "Discoverability: What Can Oasis Do?",
      emoji: "💡",
      priority: "MEDIUM",
      storyPoints: 8,
      effort: "Medium",
      impact: "High",
      severity: "6-7/10",
      overview: "Improve how new users discover what Oasis can do. Users often ask 'Can you tell me what you can do?' and expect a response listing commands or workflows. As we add more commands, listing all will be overwhelming. Solution: organize commands into categories (Planning, learning, fun, development, writing, reasoning, research, shopping, marketing). The AI assistant responds with high-level categories first; users can then deep dive on 1 or a few categories to get explicit commands and example workflows in those areas.",
      primaryFiles: "assistant.ts (system prompt / capabilities response), commands.ts (command registry), any capability-discovery or help flow",
      issues: [
        {
          title: "What Can You Do? Response",
          count: 1,
          submissionIds: ["DISCOVERABILITY"],
          description: "New users ask 'Can you tell me what you can do?' or similar. The AI assistant should respond with a structured overview of capabilities—not a raw dump of every command, but a categorized summary that invites exploration.",
          impact: "Onboarding and activation—users need to understand value quickly (severity 7/10)",
          technicalNotes: "Add or improve handling for capability-discovery prompts. System prompt or dedicated response logic. Consider structured output (categories + brief descriptions).",
          feedback: [
            { id: "DISCOVERABILITY", text: "New users often use prompts like 'Can you tell me what you can do?' and expect a response that tells them commands or workflows the AI can execute." }
          ]
        },
        {
          title: "Command Categories",
          count: 1,
          submissionIds: ["DISCOVERABILITY"],
          description: "Organize commands into categories: Planning, learning, fun, development, writing, reasoning, research, shopping, marketing. Map each command to one or more categories. This taxonomy enables scalable discovery as command count grows.",
          impact: "Scalable discoverability—avoids overwhelming users with long lists (severity 6/10)",
          technicalNotes: "Define category taxonomy. Command registry or metadata needs category field(s). Ensure categories are user-facing and intuitive.",
          feedback: [
            { id: "DISCOVERABILITY", text: "As we add more commands, there will be too many to list. Break them into categories: Planning, learning, fun, development, writing, reasoning, research, shopping, marketing." }
          ]
        },
        {
          title: "Deep Dive on Categories",
          count: 1,
          submissionIds: ["DISCOVERABILITY"],
          description: "When a user asks to explore a category (e.g., 'Tell me more about research commands' or 'What can you do for writing?'), the AI assistant should return explicit commands and example workflows for that category only.",
          impact: "Progressive disclosure—users get detail when they want it (severity 6/10)",
          technicalNotes: "Follow-up flow for category-specific queries. Filter commands by category. Provide example prompts or workflows per category.",
          feedback: [
            { id: "DISCOVERABILITY", text: "User can choose to deep dive on 1 or a few categories and the AI assistant can give explicit commands in those categories." }
          ]
        }
      ],
      acceptanceCriteria: [
        "'What can you do?' (and similar prompts) returns a categorized overview of capabilities",
        "Commands mapped to categories: Planning, learning, fun, development, writing, reasoning, research, shopping, marketing",
        "User can ask for more detail on a specific category and receive explicit commands + example workflows",
        "Response avoids overwhelming users—high-level first, detail on request",
        "Category taxonomy documented and extensible for new commands"
      ]
    },
    {
      id: 27,
      title: "Mar W3: Voice-to-Text & AI Command Reliability",
      emoji: "🎤",
      priority: "HIGH",
      storyPoints: 11,
      effort: "Low-Medium",
      impact: "High",
      severity: "10/10",
      overview: "Directly addresses passives and detractors who cite 'AI doesn't understand my request' and 'prompt needs to be very clear.' Multiple users report this as a 10/10 importance issue. **Source:** proposed sprints for march week 3.md (NPS-driven).",
      primaryFiles: "voiceInput.ts, proxyClient.ts, useAssistantRuntime.ts, Composer.tsx, intentParser.ts",
      issues: [
        {
          title: "Strip trailing period from voice transcription",
          count: 2,
          submissionIds: ["WOPpRjL"],
          description: "Voice-to-text adds a period at the end; this causes the AI to misinterpret commands (e.g., opens new window instead of organizing). Reported multiple times.",
          impact: "Command misinterpretation (severity 10/10)",
          technicalNotes: "One-line fix in useAssistantRuntime.ts or voiceInput.ts before setInput(text). Strip trailing period from transcription.",
          feedback: [
            { id: "WOPpRjL", text: "All transcriptions of voice to text end in a period, which I have to manually delete each time so that the command can be interpreted accurately - including the period before hitting enter often causes the AI Assistant to misinterpret the command." }
          ]
        },
        {
          title: "Improve AI understanding of imperfect/shorter prompts",
          count: 2,
          submissionIds: [],
          description: "Users in a hurry don't explain everything perfectly. Better handling of conversational tone vs. definitive format.",
          impact: "Reduces friction for non-power users (severity 10/10)",
          technicalNotes: "intentParser.ts, hiddenInstructions.ts, decisionEngine.ts - prompt tuning, regex expansion",
          feedback: []
        },
        {
          title: "Fix voice dictation pause latency",
          count: 1,
          submissionIds: [],
          description: "When pausing, it takes a while to stop; users feel it's not working.",
          impact: "Confusing UX (severity 8/10)",
          technicalNotes: "voiceInput.ts - MediaRecorder stop timing, chunk flush",
          feedback: []
        },
        {
          title: "Add visual feedback for voice recording",
          count: 1,
          submissionIds: [],
          description: "Microphone icon should indicate when recording is active; words should display in real-time, not only after pause.",
          impact: "Improves voice UX clarity (severity 7/10)",
          technicalNotes: "Composer.tsx - enhance wave + real-time words display",
          requiresUI: true,
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Trailing period stripped from voice transcription before AI processes",
        "AI handles conversational and imperfect prompts more reliably",
        "Voice pause responds quickly when user stops",
        "Microphone shows active state; words display in real-time during recording"
      ]
    },
    {
      id: 28,
      title: "Mar W3: Sign-In, Login & Session Persistence",
      emoji: "🔐",
      priority: "HIGH",
      storyPoints: 20,
      effort: "Medium-High",
      impact: "High",
      severity: "8-10/10",
      overview: "Repeatedly cited by detractors and passives. 'Remember me' and smoother sign-in are blockers for daily use. **Source:** proposed sprints for march week 3.md (NPS-driven).",
      primaryFiles: "supabase.ts, Auth.tsx, useAuthSync.ts, oasis-auth.html, LoginManagerAuthPrompter.sys.mjs",
      issues: [
        {
          title: "Implement 'Remember me' for browser login",
          count: 1,
          submissionIds: [],
          description: "Users keep getting logged out; typing credentials every time is friction.",
          impact: "Daily use blocker (severity 10/10)",
          technicalNotes: "LoginManagerAuthPrompter.sys.mjs, prefs - Firefox password manager integration",
          feedback: []
        },
        {
          title: "Improve AI assistant sign-in flow",
          count: 3,
          submissionIds: [],
          description: "Make it more intuitive and easier.",
          impact: "Onboarding friction (severity 9/10)",
          technicalNotes: "Auth.tsx, oasis-auth.html - UX simplification",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Reduce browser startup time",
          count: 1,
          submissionIds: [],
          description: "Takes a really long time to open up.",
          impact: "First-use friction (severity 8/10)",
          technicalNotes: "Build/startup pipeline - defer to Sprint 8 or separate initiative",
          feedback: []
        },
        {
          title: "Fix Google Drive re-sign-in on new tabs",
          count: 1,
          submissionIds: [],
          description: "Detect first sign-in and persist across new tabs.",
          impact: "Session friction (severity 10/10)",
          technicalNotes: "supabase.ts, session handling - persist OAuth across tabs",
          feedback: []
        },
        {
          title: "Display clear error message for invalid login credentials",
          count: 1,
          submissionIds: ["GxAgbQo"],
          description: "Currently only logs to console.",
          impact: "Users don't know why login failed (severity 8/10)",
          technicalNotes: "Auth.tsx, supabase.ts - surface error to UI",
          requiresUI: true,
          feedback: [
            { id: "GxAgbQo", text: "When I tried to log in using my credentials, I intentionally entered incorrect credentials. However, there was no user-facing error message or popup indicating that the credentials were invalid." }
          ]
        }
      ],
      acceptanceCriteria: [
        "Remember me persists browser login",
        "AI assistant sign-in flow is intuitive",
        "Invalid login shows clear error message",
        "Google Drive session persists across new tabs"
      ]
    },
    {
      id: 29,
      title: "Mar W3: AI Action Accuracy — Tabs, Hubs & Split View",
      emoji: "📁",
      priority: "HIGH",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "7-10/10",
      overview: "Wrong tab, wrong action, wrong site is the #1 HITL complaint. Directly blocks trust and daily use. **CONFLICT:** Do not run Sprint 31 or 32 in parallel (shared commands.ts, bookmarkFolders.ts). **Source:** proposed sprints for march week 3.md.",
      primaryFiles: "commands.ts, bookmarkFolders.ts, firefoxFacade.ts, proxyClient.ts, tab-stacking.js, browser-sidebar.js",
      issues: [
        {
          title: "Fix 'open intended tab' reliability",
          count: 3,
          submissionIds: ["f668c113", "c64d22a7"],
          description: "AI occasionally opens wrong tab (e.g., dictionary instead of Google, YouTube + Mozilla instead of YouTube + Google).",
          impact: "Wrong action erodes trust (severity 10/10)",
          technicalNotes: "commands.ts, mutationExplicitResolver.ts, firefoxFacade.ts - tab matching logic",
          feedback: []
        },
        {
          title: "Fix 'add tab to hub' / Lambda 502 errors",
          count: 4,
          submissionIds: ["3025a2f7", "17d2e05c", "eqW0MdE", "aQqA5Xy"],
          description: "Add tab to hub frequently fails with Lambda 502.",
          impact: "Core hub feature broken (severity 10/10)",
          technicalNotes: "proxyClient.ts, awsSignedFetch.ts, commands.ts - retry, backoff, error handling",
          feedback: []
        },
        {
          title: "Fix split view / multi-view bugs",
          count: 3,
          submissionIds: ["q4ddlrd", "aQ6BayX"],
          description: "Wrong tabs in split, resets to 2 or 1 view, dropdown bugged.",
          impact: "Split view unreliable (severity 10/10)",
          technicalNotes: "tab-stacking.js, browser-sidebar.js, commands.ts - pane correctness, dropdown",
          feedback: []
        },
        {
          title: "Fix 'close tab' vs 'open multiple tabs'",
          count: 2,
          submissionIds: ["303a4ed8", "f1e5b7d7"],
          description: "AI opens multiple tabs when asked to close.",
          impact: "Opposite of intended behavior (severity 8/10)",
          technicalNotes: "intentParser.ts, commands.ts - intent disambiguation",
          feedback: []
        },
        {
          title: "Fix 'open first result' behavior",
          count: 2,
          submissionIds: ["615d5d1b", "ec56c2d1"],
          description: "Duplicates search page instead of opening first result; doesn't open first sponsored result correctly.",
          impact: "Search workflow broken (severity 9/10)",
          technicalNotes: "Search result handling, commands.ts - first-result vs sponsored",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "AI opens intended tab correctly",
        "Add tab to hub works without Lambda 502",
        "Split view places correct tabs, doesn't reset",
        "Close tab closes (doesn't open multiple)",
        "Open first result opens first result correctly"
      ]
    },
    {
      id: 30,
      title: "Mar W3: Chat Bar, Minimized Chat & AI Assistant UX",
      emoji: "💬",
      priority: "MEDIUM-HIGH",
      storyPoints: 15,
      effort: "Medium",
      impact: "High",
      severity: "7-10/10",
      overview: "Chat bar behavior and minimized chat accessibility are cited by detractors. Promoters want polish. **CONFLICT:** Shares Composer with Sprint 27 (voice). Run after Sprint 27. **Source:** proposed sprints for march week 3.md.",
      primaryFiles: "browser-sidebar.js, Composer.tsx, App.tsx, browser-box.inc.xhtml, Header.tsx",
      issues: [
        {
          title: "Fix chat bar double-click behavior",
          count: 1,
          submissionIds: [],
          description: "Closes when double-clicking text while typing; should close when clicking the bar on top.",
          impact: "Frustrating UX (severity 7/10)",
          technicalNotes: "browser-sidebar.js, _oasisOverlayDblclickHandler - target bar top, not text",
          feedback: []
        },
        {
          title: "Make minimized chat accessible",
          count: 2,
          submissionIds: ["jaAvX8E"],
          description: "Users must maximize to use it; allow click-anywhere to expand or show input.",
          impact: "Minimized chat unusable (severity 8/10)",
          technicalNotes: "browser-sidebar.js - click to expand or show input",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Fix chat history disappearing",
          count: 1,
          submissionIds: [],
          description: "When switching views (sidebar → minimized), history is lost.",
          impact: "Lose conversation context (severity 8/10)",
          technicalNotes: "localMemory.ts, AssistantSession.sys.mjs, browser-sidebar.js - persist across sidebar/minimized",
          feedback: []
        },
        {
          title: "Fix AI assistant z-index / elevation",
          count: 1,
          submissionIds: ["RGykzvP"],
          description: "Address bar gets interrupted when dragging AI window.",
          impact: "UI overlap (severity 7/10)",
          technicalNotes: "browser-box.inc.xhtml, Header.tsx, browser-shared.css - address bar overlap",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Default: new tab instead of new window for links",
          count: 2,
          submissionIds: ["LZXMKLv", "oboa6aP"],
          description: "Links opened from current window create standalone windows without Oasis functionality.",
          impact: "New windows lack Oasis features (severity 10/10)",
          technicalNotes: "Link handling in assistant context - Oasis window vs plain window",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Chat bar double-click targets bar, not text",
        "Minimized chat click-anywhere expands or shows input",
        "Chat history persists across sidebar/minimized switch",
        "AI assistant doesn't overlap address bar when dragging",
        "Links open in new tab with Oasis functionality"
      ]
    },
    {
      id: 31,
      title: "Mar W3: Autocorrect, Control+F & In-Product Guidance",
      emoji: "✨",
      priority: "MEDIUM",
      storyPoints: 16,
      effort: "Medium",
      impact: "High",
      severity: "6-10/10",
      overview: "Promoters and passives explicitly request these. 'Basic features like autocorrect would improve usability and polish.' **CONFLICT:** Autocorrect shares Composer with Sprints 27 and 30. **Source:** proposed sprints for march week 3.md.",
      primaryFiles: "Composer.tsx, oasiswelcome.html, findbar.js, tabbrowser.js",
      issues: [
        {
          title: "Add autocorrect to AI assistant and search inputs",
          count: 2,
          submissionIds: ["ZjpANJB"],
          description: "Cited by NPS and Feedback. Quick win for polish.",
          impact: "Improves typing experience (severity 7/10)",
          technicalNotes: "Composer.tsx, oasiswelcome search - autocorrect/autocapitalize attrs or spellcheck",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Implement Control+F (find in page)",
          count: 1,
          submissionIds: ["VRdMO6"],
          description: "Feature request, importance 10.",
          impact: "Missing core browser feature (severity 10/10)",
          technicalNotes: "findbar.js, tabbrowser.js - ensure findbar works in Oasis context",
          feedback: []
        },
        {
          title: "Add clearer in-product guidance",
          count: 1,
          submissionIds: [],
          description: "Adding clearer guidance for features could make the experience even smoother.",
          impact: "Onboarding improvement (severity 6/10)",
          technicalNotes: "Tooltips, onboarding strings - low code impact",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Onboarding tour for hubs",
          count: 1,
          submissionIds: ["OpYMPg"],
          description: "Info button or tour for creating hubs and pasting links.",
          impact: "Hub discovery (severity 7/10)",
          technicalNotes: "oasiswelcome/, assistant UI - info button or tour",
          requiresUI: true,
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Autocorrect enabled on AI assistant and search inputs",
        "Control+F (find in page) works in Oasis",
        "Clearer in-product guidance for features",
        "Onboarding tour for hub creation"
      ]
    },
    {
      id: 32,
      title: "Mar W3: Hub & Layout UX",
      emoji: "📐",
      priority: "MEDIUM",
      storyPoints: 12,
      effort: "Medium",
      impact: "High",
      severity: "6-10/10",
      overview: "Hub management is core to Oasis value. Confusion here blocks organization benefits. **CONFLICT:** Run after Sprint 29 (shared bookmarkFolders.ts). **Source:** proposed sprints for march week 3.md.",
      primaryFiles: "bookmarkFolders.ts, oasiswelcome/",
      issues: [
        {
          title: "Allow editing link titles in Select View Layout",
          count: 1,
          submissionIds: ["NpLB7AO"],
          description: "Meta-title doesn't show; users see 'Google Sheets: Sign-in' or 'Page Not Found' permanently.",
          impact: "Can't identify saved links (severity 10/10)",
          technicalNotes: "bookmarkFolders.ts, hub UI - updateBookmark + editable title",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Duplicate hub name warning",
          count: 1,
          submissionIds: ["68JgaV5"],
          description: "Check and warn when creating hub with existing name; offer replace or rename.",
          impact: "Prevents accidental overwrites (severity 9/10)",
          technicalNotes: "bookmarkFolders.ts - check before create, offer replace/rename",
          feedback: []
        },
        {
          title: "Fix layout approval without link",
          count: 1,
          submissionIds: ["KYQ9q0g"],
          description: "First-time users get stuck in error loop; can't approve layout without link.",
          impact: "Onboarding blocker (severity 10/10)",
          technicalNotes: "oasiswelcome/ - first-time flow, allow approve without link",
          feedback: []
        },
        {
          title: "Fix HTTP auto-added in search",
          count: 1,
          submissionIds: ["RGKAEXd"],
          description: "Users must remove http from search textbox; search not seamless.",
          impact: "Search friction (severity 7/10)",
          technicalNotes: "oasiswelcome.html, search input - strip or prevent http prefix",
          feedback: []
        },
        {
          title: "Copy URL from address bar",
          count: 1,
          submissionIds: ["WO9jbbR"],
          description: "Users cannot copy URL.",
          impact: "Missing basic browser feature (severity 10/10)",
          technicalNotes: "Urlbar / navigator toolbox - expose copy action",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Link titles editable in Select View Layout",
        "Duplicate hub name shows warning with replace/rename options",
        "Layout can be approved without link (first-time flow)",
        "Search doesn't auto-add http",
        "URL copyable from address bar"
      ]
    },
    {
      id: 33,
      title: "Mar W3: Page Context for Chatbot & Summarization",
      emoji: "📄",
      priority: "MEDIUM",
      storyPoints: 13,
      effort: "Medium-High",
      impact: "High",
      severity: "7-8/10",
      overview: "Requested by passives and promoters. Enables 'ask questions about this page' workflow. **CONFLICT:** Run after Sprint 29 (shared commands.ts). **Source:** proposed sprints for march week 3.md.",
      primaryFiles: "commands.ts, runtime.ts, hiddenInstructions.ts, summarizeExplicitResolver.ts, interactionState.ts",
      issues: [
        {
          title: "Add current page as context to chatbot",
          count: 2,
          submissionIds: ["Y5EMLy5"],
          description: "Webpage added as context so I can ask questions about it.",
          impact: "Enables page Q&A workflow (severity 9/10)",
          technicalNotes: "interactionState.ts, runtime.ts, prompt assembly - inject page content into context",
          feedback: []
        },
        {
          title: "Improve summarization accuracy",
          count: 1,
          submissionIds: [],
          description: "Section summarization inconsistent; sometimes lacks reading capabilities within current tab.",
          impact: "Summarization unreliable (severity 8/10)",
          technicalNotes: "summarizeExplicitResolver.ts, hiddenInstructions.ts - section handling, retry",
          feedback: []
        },
        {
          title: "Summarize specific part of page",
          count: 1,
          submissionIds: ["e076b373"],
          description: "AI gives generic whole-page summary when user asks for specific section.",
          impact: "Wrong summary scope (severity 8/10)",
          technicalNotes: "SummarizePageCommand, selection/content extraction - section targeting",
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Current page content available as chatbot context",
        "Summarization accurate for current tab",
        "Summarize specific section returns section content, not whole page"
      ]
    },
    {
      id: 34,
      title: "Mar W3: Polish, Performance & Trust",
      emoji: "🎨",
      priority: "MEDIUM",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "6-10/10",
      overview: "Retains promoters; addresses 'unfinished' feel. Low conflict; can run in parallel with most sprints. **Source:** proposed sprints for march week 3.md.",
      primaryFiles: "Scattered - branding, CSS, decisionEngine.ts",
      issues: [
        {
          title: "Branding polish",
          count: 1,
          submissionIds: [],
          description: "Remove Firefox aspects; make product feel finished.",
          impact: "Unfinished feel (severity 10/10)",
          technicalNotes: "Branding assets, strings - remove Firefox references",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Visibility into background processes",
          count: 1,
          submissionIds: [],
          description: "Updates, AI tasks, sync status.",
          impact: "Transparency (severity 7/10)",
          technicalNotes: "New UI component - status indicators",
          requiresUI: true,
          feedback: []
        },
        {
          title: "AI action transparency",
          count: 1,
          submissionIds: [],
          description: "Preview/confirm how AI interpreted intent before executing.",
          impact: "Trust (severity 8/10)",
          technicalNotes: "Confirmation flow, interactionState.ts - preview before execute",
          requiresUI: true,
          feedback: []
        },
        {
          title: "Chain of commands / recursion limit",
          count: 2,
          submissionIds: [],
          description: "Fix recursion/limit issues; support multi-step commands.",
          impact: "Command execution fails (severity 8/10)",
          technicalNotes: "decisionEngine.ts, command execution - multi-step, limit handling",
          feedback: []
        },
        {
          title: "Dark mode toggle",
          count: 1,
          submissionIds: [],
          description: "Match user's browser theme.",
          impact: "Theme consistency (severity 6/10)",
          technicalNotes: "CSS vars, prefs - match browser theme",
          requiresUI: true,
          feedback: []
        }
      ],
      acceptanceCriteria: [
        "Firefox branding removed",
        "Background process status visible",
        "AI action preview/confirm before execute",
        "Recursion limit errors resolved",
        "Dark mode toggle available"
      ]
    },
    {
      id: 35,
      title: "Apr W1: Multi-Model Router (Local + Commercial)",
      emoji: "🧠",
      priority: "HIGH",
      storyPoints: 21,
      effort: "Medium-High",
      impact: "High",
      severity: "9/10",
      overview: "Build a model-orchestration layer that selects the right model for each task to maximize speed, output quality, and cost efficiency. Principle: 'We don't need a chainsaw to slice a piece of bread.' Use LLM Council-style multi-model workflows as a reference point (parallel first opinions, lightweight review/ranking, final synthesis when needed), adapted for Oasis assistant needs.",
      primaryFiles: "decisionEngine.ts, proxyClient.ts, runtime.ts, hiddenInstructions.ts, interactionState.ts, model routing/config module (new)",
      issues: [
        {
          title: "Define model catalog and routing policy",
          count: 1,
          submissionIds: ["STRATEGIC_INITIATIVE"],
          description: "Create a central model registry with capability metadata (latency, context length, tool reliability, quality band, cost per token, local vs hosted).",
          impact: "Foundation for predictable performance/cost (severity 9/10)",
          technicalNotes: "Add config-driven model metadata and per-task routing rules. Include Gemini + Deepgram + additional local/commercial models."
        },
        {
          title: "Intent-based model selection",
          count: 1,
          submissionIds: ["STRATEGIC_INITIATIVE"],
          description: "Route simple tasks to fast/cheap models and complex reasoning/planning to stronger models. Add confidence thresholds and fallback policies.",
          impact: "Reduces cost and latency without quality loss (severity 10/10)",
          technicalNotes: "decisionEngine.ts + intentParser.ts: map intents to model classes (cheap, balanced, premium). Add fallback if confidence/quality is low."
        },
        {
          title: "Parallel multi-model mode for high-stakes prompts",
          count: 1,
          submissionIds: ["STRATEGIC_INITIATIVE"],
          description: "For selected tasks, run 2-3 models in parallel, rank outputs, and synthesize a final answer.",
          impact: "Improves answer accuracy/robustness (severity 8/10)",
          technicalNotes: "Implement optional council mode inspired by llm-council pattern: first opinions -> review/rank -> final synthesis. Keep disabled by default except configured use cases."
        },
        {
          title: "Cost/latency guardrails and budgets",
          count: 1,
          submissionIds: ["STRATEGIC_INITIATIVE"],
          description: "Add per-session and per-user budget controls plus hard caps for premium-model usage.",
          impact: "Prevents cost blowups (severity 9/10)",
          technicalNotes: "Integrate with token usage accounting (align with Sprint 25). Enforce max spend/request, max premium calls/session, and graceful downgrade."
        },
        {
          title: "Evaluation harness: speed, quality, cost",
          count: 1,
          submissionIds: ["STRATEGIC_INITIATIVE"],
          description: "Create repeatable benchmarks over real Oasis tasks (tab commands, summarization, split view, workflow automation).",
          impact: "Enables data-driven model selection (severity 9/10)",
          technicalNotes: "Build offline eval dataset + scoring rubric (task success rate, latency p50/p95, token cost, retry rate). Compare single-model baseline vs routed vs council mode."
        }
      ],
      acceptanceCriteria: [
        "Model registry exists with latency/quality/cost metadata and routing classes",
        "Intent-based router selects model class (cheap/balanced/premium) with fallback behavior",
        "Optional council mode works for configured high-stakes tasks with ranked/synthesized output",
        "Budget guardrails enforce usage limits and degrade gracefully to lower-cost models",
        "Benchmark report shows measurable improvement on at least one axis (cost, latency, or quality) without regressions on the others"
      ]
    }
  ]

  // Top severity sprints (ranked most critical): 10, 15, 25, 17
  const topSeveritySprintIds = [10, 15, 25, 17]
  const topSeveritySprints = activeSprints.filter(s => topSeveritySprintIds.includes(s.id))
  const otherSprints = activeSprints.filter(s => !topSeveritySprintIds.includes(s.id))
  const sortedActiveSprints = [
    ...topSeveritySprintIds.map(id => activeSprints.find(s => s.id === id)).filter(Boolean),
    ...otherSprints
  ]

  const openSprintsCount = activeSprints.length
  const topSeverityCount = topSeveritySprints.length
  const unresolvedIssuesCount = activeSprints.reduce((sum, s) =>
    sum + (s.issues || []).reduce((iss, i) => iss + (i.count || 1), 0), 0)
  const archivedSprintsCount = archivedSprints.length
  const archivedIssuesCount = archivedSprints.reduce((sum, s) =>
    sum + (s.issues || []).reduce((iss, i) => iss + (i.count || 1), 0), 0)

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
    <div className="page" id="product-roadmap">
      <div className="sprint-update-banner">
        Sprint board refreshed through early April 2026. Any resolved issues and sprints have been archived. Open sprints are prioritized from current product feedback and NPS.
        <span className="sprint-banner-branch">Build off of <code>OTA/determine-ota-update-feasibility</code> (not <code>uiupdates/dynamic</code>). This branch has the newest updates from Sprint 15 (Automatic Software Updates).</span>
        <span className="sprint-banner-branch"><strong>NPS alignment:</strong> Sprints 27–34 remain the active NPS-focused track and map to latest themes from <code>NPS-Sheet1.csv</code> (intent understanding, split-view/tab accuracy, onboarding/session flow, voice responsiveness, semantic search/context, and trust/polish). See conflict notes for parallelization.</span>
      </div>
      <div className="page-header">
        <h1>Engineering Sprints</h1>
        <p style={{ marginTop: '10px', color: '#666', fontSize: '1rem' }}>
          Feedback-driven sprint backlog (HITL + NPS), updated through April 2026
        </p>
      </div>

      {/* Sprint Summary Dashboard */}
      <section className="sprint-summary-dashboard">
        <div className="sprint-summary-grid">
          <div className="sprint-summary-card">
            <div className="sprint-summary-value">{openSprintsCount}</div>
            <div className="sprint-summary-label">Sprints Open</div>
          </div>
          <div className="sprint-summary-card sprint-summary-critical">
            <div className="sprint-summary-value">{topSeverityCount}</div>
            <div className="sprint-summary-label">Top Severity Sprints</div>
            <div className="sprint-summary-sublabel">Sprints 10, 15, 17 (Most Critical)</div>
          </div>
          <div className="sprint-summary-card">
            <div className="sprint-summary-value">{unresolvedIssuesCount}</div>
            <div className="sprint-summary-label">Issues Unresolved</div>
          </div>
          <div className="sprint-summary-card sprint-summary-archived">
            <div className="sprint-summary-value">{archivedSprintsCount}</div>
            <div className="sprint-summary-label">Sprints Archived</div>
            <div className="sprint-summary-sublabel">{archivedIssuesCount} issues completed</div>
          </div>
        </div>
      </section>

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
              💡 <strong>Pick a sprint that excites you.</strong> DM Adam Kershner on Slack to claim it or ask questions.
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
          {sortedActiveSprints.map((sprint) => (
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
                    <div className="sprint-branch-indicator">
                      <span className="sprint-branch-icon" aria-hidden>🔀</span>
                      Branch: <code>SPRINT_{sprint.id}</code>
                    </div>
                    {sprint.teamMembers && sprint.teamMembers.length > 0 && (
                      <div style={{ marginTop: '8px', marginBottom: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {sprint.teamMembers.map((member, idx) => (
                          <span 
                            key={idx}
                            className="team-member-badge"
                            style={{ 
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    )}
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
                    {sprint.id === 15 && (
                      <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>
                        <strong>Developer Guide:</strong> <Link to="/ota-guide" style={{ color: 'var(--oasis-green-medium)', textDecoration: 'underline' }}>OTA & Automatic Software Updates Guide</Link> – Read this to get up to speed on the update system and release workflows.
                      </p>
                    )}
                    {sprint.id === 19 && (
                      <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>
                        <strong>Current HITL outputs:</strong> <Link to="/hitl" style={{ color: 'var(--oasis-green-medium)', textDecoration: 'underline' }}>HITL Feedback page</Link> – Shows our current feedback_events export, categories, ratio, and schema gaps. Use this for context when auditing and improving the HITL setup.
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
                    {sprint.keyConsiderations && (
                      <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px' }}>
                        <h4 style={{ marginTop: 0, marginBottom: '12px', color: '#166534' }}>Key Considerations & Context</h4>
                        <p style={{ marginBottom: '16px', fontSize: '0.95rem', color: '#15803d' }}>{sprint.keyConsiderations.context}</p>
                        {sprint.keyConsiderations.sections.map((section, sIdx) => (
                          <div key={sIdx} style={{ marginBottom: '16px' }}>
                            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#166534' }}>{section.title}</div>
                            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#15803d' }}>
                              {section.items.map((item, iIdx) => (
                                <li key={iIdx} style={{ marginBottom: '4px' }}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                    {sprint.readinessChecklist && (
                      <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                        <h4 style={{ marginTop: 0, marginBottom: '12px', color: '#334155' }}>Oasis Enterprise Edition — Readiness Checklist</h4>
                        <p style={{ marginBottom: '16px', fontSize: '0.95rem', color: '#475569' }}>{sprint.readinessChecklist.intro}</p>
                        {sprint.readinessChecklist.sections.map((section, sIdx) => (
                          <div key={sIdx} style={{ marginBottom: '16px' }}>
                            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#1e293b' }}>{section.title}</div>
                            {section.items ? (
                              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#475569' }}>
                                {section.items.map((item, iIdx) => (
                                  <li key={iIdx} style={{ marginBottom: '4px' }}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                            {section.subsections && section.subsections.map((sub, subIdx) => (
                              <div key={subIdx} style={{ marginTop: '8px', marginLeft: '12px' }}>
                                <div style={{ fontWeight: 500, marginBottom: '4px', color: '#475569' }}>{sub.title}</div>
                                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#64748b' }}>
                                  {sub.items.map((item, iIdx) => (
                                    <li key={iIdx} style={{ marginBottom: '2px' }}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    {sprint.sprintLog && (
                      <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#fefce8', border: '1px solid #eab308', borderRadius: '8px' }}>
                        <h4 style={{ marginTop: 0, marginBottom: '12px', color: '#713f12' }}>📋 Sprint Log</h4>
                        <p style={{ marginBottom: '16px', fontSize: '0.95rem', color: '#854d0e' }}>{sprint.sprintLog.intro}</p>
                        {sprint.sprintLog.sections.map((section, sIdx) => (
                          <div key={sIdx} style={{ marginBottom: '16px' }}>
                            <div style={{ fontWeight: 600, marginBottom: '8px', color: '#713f12' }}>{section.title}</div>
                            {section.content && (
                              <p style={{ margin: 0, marginBottom: section.items ? '8px' : 0, fontSize: '0.9rem', color: '#854d0e', lineHeight: 1.5 }}>{section.content}</p>
                            )}
                            {section.link && (
                              <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
                                <a href={section.link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--oasis-green-medium)', textDecoration: 'underline', fontWeight: 500 }}>
                                  {section.link.text} →
                                </a>
                              </p>
                            )}
                            {section.items && (
                              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#854d0e' }}>
                                {section.items.map((item, iIdx) => (
                                  <li key={iIdx} style={{ marginBottom: '4px' }}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
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
                  📦 Archive - Completed Sprints (1-4, Sprint 8 Resolved Issues)
                </h2>
                <p style={{ margin: '10px 0 0 0', color: '#0369a1', fontSize: '0.95rem' }}>
                  All sprints fully completed and fixed locally. Sprint 8 resolved issues have been archived. Updates incorporated into new release for Product team testing (Mac & Windows) by end of week January 23rd.
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
                        <div className="sprint-branch-indicator">
                          <span className="sprint-branch-icon" aria-hidden>🔀</span>
                          Branch: <code>SPRINT_{sprint.id}</code>
                        </div>
                        {sprint.teamMembers && sprint.teamMembers.length > 0 && (
                          <div style={{ marginTop: '8px', marginBottom: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {sprint.teamMembers.map((member, idx) => (
                              <span 
                                key={idx}
                                className="team-member-badge"
                                style={{ 
                                  backgroundColor: '#3b82f6',
                                  color: 'white',
                                  padding: '4px 8px',
                                  borderRadius: '4px',
                                  fontSize: '0.75rem',
                                  fontWeight: '500'
                                }}
                              >
                                {member}
                              </span>
                            ))}
                          </div>
                        )}
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
