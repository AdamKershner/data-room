import React from 'react'
import TeamGallery from '../components/TeamGallery'
import './Page.css'

function TeamExecution() {
  // Team members data
  const teamMembers = [
    {
      name: "Adam Kershner",
      roles: ["Engineering"],
      employmentStatus: "full-time",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Adam1",
          respondentId: "Adam",
          submittedAt: "2025-01-10 10:00:00",
          name: "Adam Kershner",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Led engineering team coordination and sprint planning. Reviewed UI/UX improvements from feedback Google Sheet. Implemented critical bug fixes. Created weekly release and updated installations page for product team. Attended engineering standup. Managed product roadmap priorities."
        },
        {
          submissionId: "Adam2",
          respondentId: "Adam",
          submittedAt: "2025-01-17 10:00:00",
          name: "Adam Kershner",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Coordinated weekly sprint execution. Implemented UI/UX improvements for demo quality. Fixed infrastructure issues. Created weekly release from completed sprint and updated installations page. Attended engineering standup. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Adam3",
          respondentId: "Adam",
          submittedAt: "2025-01-24 10:00:00",
          name: "Adam Kershner",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Led sprint planning based on product team feedback from Google Sheet. Implemented analytics tracking for NPS. Fixed critical bugs. Created weekly release and updated installations page for next feedback round. Attended engineering standup. Coordinated with sales team on demo improvements."
        },
        {
          submissionId: "Adam4",
          respondentId: "Adam",
          submittedAt: "2025-01-31 10:00:00",
          name: "Adam Kershner",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Focused on UI/UX improvements for command interface. Implemented performance optimizations. Created weekly release from sprint completion and updated installations page. Attended engineering standup. Reviewed sprint progress and NPS trends."
        }
      ],
      q1Goals: {
        overview: "Lead team to achieve +15 NPS points through product improvements and team coordination",
        target: "Achieve +15 NPS points by end of Q1 (measured bi-weekly) through coordinated product and engineering efforts",
        weeklyBreakdown: [
          { week: 1, goal: "Establish baseline NPS and team processes", metric: "Baseline NPS measured, sprint process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Coordinate sprint execution", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final review and planning", metric: "Final NPS measured (target +15), Q2 planning complete, 240+ total story points delivered" }
        ],
        keyMetrics: [
          "NPS delta bi-weekly (primary metric)",
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "Feedback items addressed per sprint (target 10+)",
          "Team coordination effectiveness",
          "Demo quality enhancement"
        ]
      }
    },
    {
      name: "Vedant Gupta",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Vedant1",
          respondentId: "Vedant",
          submittedAt: "2025-01-10 10:00:00",
          name: "Vedant Gupta",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Vedant2",
          respondentId: "Vedant",
          submittedAt: "2025-01-17 10:00:00",
          name: "Vedant Gupta",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Vedant3",
          respondentId: "Vedant",
          submittedAt: "2025-01-24 10:00:00",
          name: "Vedant Gupta",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Vedant4",
          respondentId: "Vedant",
          submittedAt: "2025-01-31 10:00:00",
          name: "Vedant Gupta",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through feedback collection and prioritization",
        target: "Collect 100+ feedback items and prioritize top 10 improvements to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Establish baseline NPS and feedback process", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 3, goal: "Week 3: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & feedback review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 6, goal: "Week 6: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & feedback review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 9, goal: "Week 9: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & feedback review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 12, goal: "Week 12: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 13, goal: "Q1 final assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "Top improvements prioritized per week (target 3+)",
          "NPS delta bi-weekly (supporting metric)",
          "PMF survey response rate (target 80%+)",
          "Feedback-to-improvement conversion rate"
        ]
      },
      projects: [
        {
          title: "UI/UX Testing & PMF/NPS Surveys",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: install weekly releases, test UI/UX improvements, submit feedback via AI assistant interface, and measure product-market fit using PMF and NPS surveys to drive improvements that enhance demo quality for B2B pilots.",
          scope: [
            "Install latest browser version from installations page each week",
            "Test each new UI/UX iteration weekly with users",
            "Submit feedback forms via AI assistant interface (bugs, enhancement ideas, feature requests)",
            "Administer PMF survey (NPS, disappointment question, user type, benefits, improvements)",
            "Complete NPS survey after each testing round",
            "Collect enhancement ideas and bug fixes via feedback form (outputs to Google Sheets)",
            "Track NPS delta week-over-week as key metric",
            "Prioritize UI/UX improvements based on survey feedback"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Maintain 40%+ 'Very disappointed' response rate (PMF threshold)",
            "Identify top 3 UI/UX improvements per week for engineering sprints"
          ]
        }
      ]
    },
    {
      name: "Sonakshi Singh",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Sonakshi1",
          respondentId: "Sonakshi",
          submittedAt: "2025-01-10 10:00:00",
          name: "Sonakshi Singh",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Researched trending topics in productivity and browser technology. Brainstormed creative content ideas for social media. Created content calendar for January. Developed content themes and messaging strategies."
        },
        {
          submissionId: "Sonakshi2",
          respondentId: "Sonakshi",
          submittedAt: "2025-01-17 10:00:00",
          name: "Sonakshi Singh",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated 30+ social media content ideas. Created daily post ideas for Twitter and LinkedIn. Engaged with community on Product Hunt. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Sonakshi3",
          respondentId: "Sonakshi",
          submittedAt: "2025-01-24 10:00:00",
          name: "Sonakshi Singh",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created engaging social media posts. Supported content marketing initiatives. Analyzed content performance metrics."
        },
        {
          submissionId: "Sonakshi4",
          respondentId: "Sonakshi",
          submittedAt: "2025-01-31 10:00:00",
          name: "Sonakshi Singh",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content ideation for February calendar. Created visual content ideas. Engaged with online communities. Tracked subscriber growth from content."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through social media content ideation",
        target: "Generate 30+ content ideas per month to support subscriber acquisition",
        weeklyBreakdown: [
          { week: 1, goal: "Research content themes", metric: "10+ ideas generated" },
          { week: 2, goal: "Week 2 content ideation", metric: "30+ ideas for month" },
          { week: 3, goal: "Week 3 content ideation", metric: "30+ ideas for month" },
          { week: 4, goal: "Week 4 content ideation", metric: "30+ ideas for month" },
          { week: 5, goal: "Week 5 content ideation", metric: "30+ ideas for month" },
          { week: 6, goal: "Week 6 content ideation", metric: "30+ ideas for month" },
          { week: 7, goal: "Week 7 content ideation", metric: "30+ ideas for month" },
          { week: 8, goal: "Week 8 content ideation", metric: "30+ ideas for month" },
          { week: 9, goal: "Week 9 content ideation", metric: "30+ ideas for month" },
          { week: 10, goal: "Week 10 content ideation", metric: "30+ ideas for month" },
          { week: 11, goal: "Week 11 content ideation", metric: "30+ ideas for month" },
          { week: 12, goal: "Week 12 content ideation", metric: "30+ ideas for month" },
          { week: 13, goal: "Q1 content strategy review", metric: "90+ total ideas generated" }
        ],
        keyMetrics: [
          "Content ideas generated per month (target 30+)",
          "Content calendar completion",
          "Content themes developed (target 5+)",
          "Support for subscriber growth"
        ]
      },
      projects: [
        {
          title: "Social Media Content Ideation",
          status: "active",
          startDate: "January 2026",
          description: "Develop creative and engaging social media content ideas to build Oasis Browser's presence and grow community.",
          scope: [
            "Research trending topics in productivity and browser technology",
            "Brainstorm creative content ideas for Twitter/X, LinkedIn, and other platforms",
            "Create content calendars with daily post ideas",
            "Develop content themes and messaging strategies"
          ],
          goals: [
            "Generate 30+ social media content ideas per month",
            "Create content calendar for Q1 2026",
            "Develop 5+ content series/themes for consistent posting"
          ]
        }
      ],
      availability: {
        monday: {
          active: true,
          timeRange: "10:00 AM - 2:00 PM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Researching content themes",
            "Brainstorming social media content ideas",
            "Creating content calendars",
            "Engaging with online communities"
          ]
        },
        tuesday: {
          active: true,
          timeRange: "10:00 AM - 2:00 PM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Researching content themes",
            "Brainstorming social media content ideas",
            "Creating content calendars",
            "Engaging with online communities"
          ]
        },
        wednesday: {
          active: true,
          timeRange: "10:00 AM - 2:00 PM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Researching content themes",
            "Brainstorming social media content ideas",
            "Creating content calendars",
            "Engaging with online communities"
          ]
        },
        thursday: {
          active: true,
          timeRange: "10:00 AM - 2:00 PM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Researching content themes",
            "Brainstorming social media content ideas",
            "Creating content calendars",
            "Engaging with online communities"
          ]
        },
        friday: {
          active: true,
          timeRange: "10:00 AM - 2:00 PM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Researching content themes",
            "Brainstorming social media content ideas",
            "Creating content calendars",
            "Engaging with online communities"
          ]
        },
        saturday: {
          active: false,
          timeRange: "",
          timezone: "",
          activities: []
        },
        sunday: {
          active: false,
          timeRange: "",
          timezone: "",
          activities: []
        }
      }
    },
    {
      name: "Dhruv Patel",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Dhruv1",
          respondentId: "Dhruv",
          submittedAt: "2025-01-10 10:00:00",
          name: "Dhruv Patel",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Researched trending topics in productivity and browser technology. Brainstormed creative content ideas for social media. Created content calendar for January. Developed content themes and messaging strategies."
        },
        {
          submissionId: "Dhruv2",
          respondentId: "Dhruv",
          submittedAt: "2025-01-17 10:00:00",
          name: "Dhruv Patel",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated 30+ social media content ideas. Created daily post ideas for Twitter and LinkedIn. Engaged with community on Product Hunt. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Dhruv3",
          respondentId: "Dhruv",
          submittedAt: "2025-01-24 10:00:00",
          name: "Dhruv Patel",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created engaging social media posts. Supported content marketing initiatives. Analyzed content performance metrics."
        },
        {
          submissionId: "Dhruv4",
          respondentId: "Dhruv",
          submittedAt: "2025-01-31 10:00:00",
          name: "Dhruv Patel",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content ideation for February calendar. Created visual content ideas. Engaged with online communities. Tracked subscriber growth from content."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through social media content ideation",
        target: "Generate 30+ content ideas per month to support subscriber acquisition",
        weeklyBreakdown: [
          { week: 1, goal: "Research content themes", metric: "10+ ideas generated" },
          { week: 2, goal: "Week 2 content ideation", metric: "30+ ideas for month" },
          { week: 3, goal: "Week 3 content ideation", metric: "30+ ideas for month" },
          { week: 4, goal: "Week 4 content ideation", metric: "30+ ideas for month" },
          { week: 5, goal: "Week 5 content ideation", metric: "30+ ideas for month" },
          { week: 6, goal: "Week 6 content ideation", metric: "30+ ideas for month" },
          { week: 7, goal: "Week 7 content ideation", metric: "30+ ideas for month" },
          { week: 8, goal: "Week 8 content ideation", metric: "30+ ideas for month" },
          { week: 9, goal: "Week 9 content ideation", metric: "30+ ideas for month" },
          { week: 10, goal: "Week 10 content ideation", metric: "30+ ideas for month" },
          { week: 11, goal: "Week 11 content ideation", metric: "30+ ideas for month" },
          { week: 12, goal: "Week 12 content ideation", metric: "30+ ideas for month" },
          { week: 13, goal: "Q1 content strategy review", metric: "90+ total ideas generated" }
        ],
        keyMetrics: [
          "Content ideas generated per month (target 30+)",
          "Content calendar completion",
          "Content themes developed (target 5+)",
          "Support for subscriber growth"
        ]
      },
      projects: [
        {
          title: "Social Media Content Ideation",
          status: "active",
          startDate: "January 2026",
          description: "Develop creative and engaging social media content ideas to build Oasis Browser's presence and grow community.",
          scope: [
            "Research trending topics in productivity and browser technology",
            "Brainstorm creative content ideas for Twitter/X, LinkedIn, and other platforms",
            "Create content calendars with daily post ideas",
            "Develop content themes and messaging strategies"
          ],
          goals: [
            "Generate 30+ social media content ideas per month",
            "Create content calendar for Q1 2026",
            "Develop 5+ content series/themes for consistent posting"
          ]
        }
      ]
    },
    {
      name: "Hritik Sanjay Chalse",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Hritik1",
          respondentId: "Hritik",
          submittedAt: "2025-01-10 10:00:00",
          name: "Hritik Sanjay Chalse",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Worked on Product Hunt listing completion. Created demo video and screenshots. Prepared launch day content assets. Developed pre-launch content strategy."
        },
        {
          submissionId: "Hritik2",
          respondentId: "Hritik",
          submittedAt: "2025-01-17 10:00:00",
          name: "Hritik Sanjay Chalse",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Finalized Product Hunt listing with compelling description. Created additional screenshots and assets. Engaged with community on Product Hunt. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Hritik3",
          respondentId: "Hritik",
          submittedAt: "2025-01-24 10:00:00",
          name: "Hritik Sanjay Chalse",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Prepared for Product Hunt launch day. Created social media content for launch promotion. Engaged with online communities. Supported content marketing initiatives."
        },
        {
          submissionId: "Hritik4",
          respondentId: "Hritik",
          submittedAt: "2025-01-31 10:00:00",
          name: "Hritik Sanjay Chalse",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Executed Product Hunt launch. Monitored launch performance and engagement. Created post-launch follow-up content. Tracked sign-ups and subscriber growth."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through Product Hunt launch",
        target: "Generate 100+ sign-ups from Product Hunt launch",
        weeklyBreakdown: [
          { week: 1, goal: "Complete Product Hunt listing", metric: "Listing ready" },
          { week: 2, goal: "Create demo video & screenshots", metric: "Assets ready" },
          { week: 3, goal: "Prepare launch day content", metric: "Content ready" },
          { week: 4, goal: "Product Hunt launch", metric: "100+ sign-ups" },
          { week: 5, goal: "Post-launch follow-up", metric: "Engagement tracking" },
          { week: 6, goal: "Week 6 marketing activities", metric: "Ongoing growth" },
          { week: 7, goal: "Week 7 marketing activities", metric: "Ongoing growth" },
          { week: 8, goal: "Week 8 marketing activities", metric: "Ongoing growth" },
          { week: 9, goal: "Week 9 marketing activities", metric: "Ongoing growth" },
          { week: 10, goal: "Week 10 marketing activities", metric: "Ongoing growth" },
          { week: 11, goal: "Week 11 marketing activities", metric: "Ongoing growth" },
          { week: 12, goal: "Week 12 marketing activities", metric: "Ongoing growth" },
          { week: 13, goal: "Q1 marketing review", metric: "Subscriber growth achieved" }
        ],
        keyMetrics: [
          "Product Hunt sign-ups (target 100+)",
          "Top 5 product of the day achievement",
          "Community building from launch",
          "Subscriber acquisition"
        ]
      },
      projects: [
        {
          title: "Product Hunt Launch Preparation",
          status: "active",
          startDate: "January 2026",
          description: "Prepare all materials and content for Oasis Browser's Product Hunt launch.",
          scope: [
            "Create compelling Product Hunt listing with screenshots and demo video",
            "Write Product Hunt description, tagline, and key features",
            "Prepare launch day content assets and messaging",
            "Develop pre-launch and post-launch content strategy"
          ],
          goals: [
            "Complete all Product Hunt listing materials",
            "Create demo video and screenshots",
            "Prepare content calendar for launch week"
          ]
        }
      ]
    },
    {
      name: "Sonali Ankolikar",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Sonali1",
          respondentId: "Sonali",
          submittedAt: "2025-01-10 10:00:00",
          name: "Sonali Ankolikar",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Sonali2",
          respondentId: "Sonali",
          submittedAt: "2025-01-17 10:00:00",
          name: "Sonali Ankolikar",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Sonali3",
          respondentId: "Sonali",
          submittedAt: "2025-01-24 10:00:00",
          name: "Sonali Ankolikar",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Sonali4",
          respondentId: "Sonali",
          submittedAt: "2025-01-31 10:00:00",
          name: "Sonali Ankolikar",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through feedback collection and PMF/NPS survey administration",
        target: "Collect 100+ feedback items and administer PMF/NPS surveys to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up survey process and feedback collection", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 3, goal: "Week 3: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 6, goal: "Week 6: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 9, goal: "Week 9: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 12, goal: "Week 12: Administer surveys & collect feedback", metric: "15+ feedback items collected, surveys administered" },
          { week: 13, goal: "Final Q1 assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "Survey response rate (target 80%+)",
          "NPS delta bi-weekly (supporting metric)",
          "PMF threshold maintenance (40%+ 'Very disappointed')",
          "Enhancement ideas documented per week"
        ]
      },
      projects: [
        {
          title: "Weekly UI/UX Testing & Survey Administration",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: install weekly releases, conduct weekly UI/UX testing sessions, submit feedback forms, and administer PMF/NPS surveys to measure product improvements and inform demo enhancements.",
          scope: [
            "Install latest browser version from installations page each week",
            "Schedule weekly testing sessions with users for new UI/UX iterations",
            "Submit feedback forms via AI assistant interface (bugs, enhancement ideas, feature requests)",
            "Administer PMF survey: NPS (0-10), disappointment question, user type, main benefit, improvement suggestions",
            "Administer NPS survey to track week-over-week changes",
            "Complete NPS survey after each testing round",
            "Document enhancement ideas and bug fixes in feedback form (Google Sheets)",
            "Analyze survey results and identify patterns"
          ],
          goals: [
            "Complete 5+ weekly testing sessions",
            "Achieve 80%+ survey response rate",
            "Track and report NPS delta weekly",
            "Document 10+ enhancement ideas per week"
          ]
        }
      ]
    },
    {
      name: "Shivangi Chamoli",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Shivangi1",
          respondentId: "Shivangi",
          submittedAt: "2025-01-10 10:00:00",
          name: "Shivangi Chamoli",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Created social media content and posted daily. Engaged with community on Product Hunt. Supported content marketing initiatives. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Shivangi2",
          respondentId: "Shivangi",
          submittedAt: "2025-01-17 10:00:00",
          name: "Shivangi Chamoli",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated social media content ideas. Created engaging posts for Twitter and LinkedIn. Engaged with online communities. Tracked subscriber growth from content."
        },
        {
          submissionId: "Shivangi3",
          respondentId: "Shivangi",
          submittedAt: "2025-01-24 10:00:00",
          name: "Shivangi Chamoli",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created visual content for social media. Supported Product Hunt campaign. Analyzed content performance metrics."
        },
        {
          submissionId: "Shivangi4",
          respondentId: "Shivangi",
          submittedAt: "2025-01-31 10:00:00",
          name: "Shivangi Chamoli",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content creation and distribution. Engaged with community on Product Hunt. Created content calendar for February. Tracked sign-ups and conversion rates."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through content marketing",
        target: "Generate 20+ sign-ups from blog content in Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Create editorial calendar", metric: "Calendar ready" },
          { week: 2, goal: "Week 2 blog post", metric: "1 post published" },
          { week: 3, goal: "Week 3 blog post", metric: "1 post published" },
          { week: 4, goal: "Week 4 blog post", metric: "1 post published" },
          { week: 5, goal: "Week 5 blog post", metric: "1 post published" },
          { week: 6, goal: "Week 6 blog post", metric: "1 post published" },
          { week: 7, goal: "Week 7 blog post", metric: "1 post published" },
          { week: 8, goal: "Week 8 blog post", metric: "1 post published" },
          { week: 9, goal: "Week 9 blog post", metric: "1 post published" },
          { week: 10, goal: "Week 10 blog post", metric: "1 post published" },
          { week: 11, goal: "Week 11 blog post", metric: "1 post published" },
          { week: 12, goal: "Week 12 blog post", metric: "1 post published" },
          { week: 13, goal: "Q1 content review", metric: "8+ posts, 20+ sign-ups" }
        ],
        keyMetrics: [
          "Blog posts published (target 8+ in Q1)",
          "Monthly blog visitors (target 1,000+)",
          "Sign-ups from content (target 20+)",
          "SEO performance"
        ]
      },
      projects: [
        {
          title: "Content Marketing & Blog Strategy",
          status: "active",
          startDate: "January 2026",
          description: "Develop content marketing strategy to drive organic traffic and educate potential users about browser productivity.",
          scope: [
            "Create editorial calendar for blog posts and articles",
            "Write 2-3 blog posts per month on productivity and browser workflows",
            "Develop SEO-optimized content around key search terms",
            "Create social media content to promote blog posts"
          ],
          goals: [
            "Publish 8+ blog posts in Q1 2026",
            "Achieve 1,000+ monthly blog visitors",
            "Generate 20+ sign-ups from content marketing"
          ]
        }
      ]
    },
    {
      name: "Lokesh Nenavath",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Lokesh1",
          respondentId: "Lokesh",
          submittedAt: "2025-01-10 10:00:00",
          name: "Lokesh Nenavath",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Lokesh2",
          respondentId: "Lokesh",
          submittedAt: "2025-01-17 10:00:00",
          name: "Lokesh Nenavath",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Lokesh3",
          respondentId: "Lokesh",
          submittedAt: "2025-01-24 10:00:00",
          name: "Lokesh Nenavath",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Lokesh4",
          respondentId: "Lokesh",
          submittedAt: "2025-01-31 10:00:00",
          name: "Lokesh Nenavath",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through feedback collection and feedback loop management",
        target: "Collect 100+ feedback items and manage feedback loop to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Establish baseline and feedback process", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 3, goal: "Week 3: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & loop review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 6, goal: "Week 6: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & loop review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 9, goal: "Week 9: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & loop review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 12, goal: "Week 12: Collect feedback and manage loop", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 13, goal: "Q1 final assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "Top improvements prioritized per week (target 3+)",
          "NPS delta bi-weekly (supporting metric)",
          "Feedback loop efficiency with engineering",
          "Demo quality score improvements"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvement Testing & Feedback Loop",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: install weekly releases, test UI/UX improvements, submit feedback forms, and manage feedback collection to create positive feedback loop that increases NPS, retention, and product quality for better B2C and B2B demos.",
          scope: [
            "Install latest browser version from installations page each week",
            "Test new UI/UX iterations weekly with focus on demo-relevant features",
            "Submit feedback forms via AI assistant interface (bugs, enhancement ideas, feature requests)",
            "Administer PMF and NPS surveys after each testing session",
            "Complete NPS survey after each testing round",
            "Collect enhancement ideas and bug fixes via feedback form (Google Sheets)",
            "Coordinate with engineering team on sprint priorities based on feedback",
            "Track NPS delta as primary success metric"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Increase retention through UI/UX improvements",
            "Improve demo quality scores through better product polish",
            "Maintain feedback loop with engineering via Google Sheets"
          ]
        }
      ]
    },
    {
      name: "Navile Mahesh",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Navile1",
          respondentId: "Navile",
          submittedAt: "2025-01-10 10:00:00",
          name: "Navile Mahesh",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Created social media content and posted daily. Engaged with community on Product Hunt. Supported content marketing initiatives. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Navile2",
          respondentId: "Navile",
          submittedAt: "2025-01-17 10:00:00",
          name: "Navile Mahesh",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated social media content ideas. Created engaging posts for Twitter and LinkedIn. Engaged with online communities. Tracked subscriber growth from content."
        },
        {
          submissionId: "Navile3",
          respondentId: "Navile",
          submittedAt: "2025-01-24 10:00:00",
          name: "Navile Mahesh",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created visual content for social media. Supported Product Hunt campaign. Analyzed content performance metrics."
        },
        {
          submissionId: "Navile4",
          respondentId: "Navile",
          submittedAt: "2025-01-31 10:00:00",
          name: "Navile Mahesh",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content creation and distribution. Engaged with community on Product Hunt. Created content calendar for February. Tracked sign-ups and conversion rates."
        }
      ],
      q1Goals: {
        overview: "Support sales through competitive analysis and positioning",
        target: "Complete competitive analysis and create sales enablement materials",
        weeklyBreakdown: [
          { week: 1, goal: "Research competitor products", metric: "Analysis started" },
          { week: 2, goal: "Week 2 competitive analysis", metric: "Analysis progress" },
          { week: 3, goal: "Week 3 competitive analysis", metric: "Analysis progress" },
          { week: 4, goal: "Complete competitive analysis", metric: "Report ready" },
          { week: 5, goal: "Develop positioning messaging", metric: "Messaging ready" },
          { week: 6, goal: "Create sales enablement materials", metric: "Materials ready" },
          { week: 7, goal: "Week 7 positioning refinement", metric: "Ongoing support" },
          { week: 8, goal: "Week 8 positioning refinement", metric: "Ongoing support" },
          { week: 9, goal: "Week 9 positioning refinement", metric: "Ongoing support" },
          { week: 10, goal: "Week 10 positioning refinement", metric: "Ongoing support" },
          { week: 11, goal: "Week 11 positioning refinement", metric: "Ongoing support" },
          { week: 12, goal: "Week 12 positioning refinement", metric: "Ongoing support" },
          { week: 13, goal: "Q1 positioning review", metric: "Sales support complete" }
        ],
        keyMetrics: [
          "Competitive analysis completion",
          "Positioning messaging clarity",
          "Sales enablement materials created",
          "Sales team support effectiveness"
        ]
      },
      projects: [
        {
          title: "Competitive Analysis & Positioning",
          status: "active",
          startDate: "January 2026",
          description: "Analyze competitive landscape and develop positioning strategy for Oasis Browser.",
          scope: [
            "Research and analyze competitor products (Arc, Sidekick, etc.)",
            "Identify Oasis's unique value propositions and differentiators",
            "Develop positioning messaging for B2C and B2B markets",
            "Create competitive comparison materials for sales team"
          ],
          goals: [
            "Complete competitive analysis report",
            "Define clear positioning for Oasis Browser",
            "Create sales enablement materials"
          ]
        }
      ]
    },
    {
      name: "Akansha Parihar",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Akansha1",
          respondentId: "Akansha",
          submittedAt: "2025-01-10 10:00:00",
          name: "Akansha Parihar",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Created social media content and posted daily. Engaged with community on Product Hunt. Supported content marketing initiatives. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Akansha2",
          respondentId: "Akansha",
          submittedAt: "2025-01-17 10:00:00",
          name: "Akansha Parihar",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated social media content ideas. Created engaging posts for Twitter and LinkedIn. Engaged with online communities. Tracked subscriber growth from content."
        },
        {
          submissionId: "Akansha3",
          respondentId: "Akansha",
          submittedAt: "2025-01-24 10:00:00",
          name: "Akansha Parihar",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created visual content for social media. Supported Product Hunt campaign. Analyzed content performance metrics."
        },
        {
          submissionId: "Akansha4",
          respondentId: "Akansha",
          submittedAt: "2025-01-31 10:00:00",
          name: "Akansha Parihar",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content creation and distribution. Engaged with community on Product Hunt. Created content calendar for February. Tracked sign-ups and conversion rates."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through social media execution",
        target: "Generate 30+ sign-ups from social media in Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up posting schedule", metric: "Schedule ready" },
          { week: 2, goal: "Week 2 daily posting", metric: "7 posts published" },
          { week: 3, goal: "Week 3 daily posting", metric: "7 posts published" },
          { week: 4, goal: "Week 4 daily posting", metric: "7 posts published" },
          { week: 5, goal: "Week 5 daily posting", metric: "7 posts published" },
          { week: 6, goal: "Week 6 daily posting", metric: "7 posts published" },
          { week: 7, goal: "Week 7 daily posting", metric: "7 posts published" },
          { week: 8, goal: "Week 8 daily posting", metric: "7 posts published" },
          { week: 9, goal: "Week 9 daily posting", metric: "7 posts published" },
          { week: 10, goal: "Week 10 daily posting", metric: "7 posts published" },
          { week: 11, goal: "Week 11 daily posting", metric: "7 posts published" },
          { week: 12, goal: "Week 12 daily posting", metric: "7 posts published" },
          { week: 13, goal: "Q1 social media review", metric: "30+ sign-ups, 500+ followers" }
        ],
        keyMetrics: [
          "Daily posting consistency",
          "Twitter/X followers (target 500+)",
          "LinkedIn engagement increase (target 50%+)",
          "Sign-ups from social media (target 30+)"
        ]
      },
      projects: [
        {
          title: "Social Media Execution & Community Building",
          status: "active",
          startDate: "January 2026",
          description: "Execute social media strategy and build Oasis Browser's community by posting content and engaging with users.",
          scope: [
            "Post daily on Twitter/X, LinkedIn, and relevant communities using content ideas from team",
            "Engage with users and respond to comments and questions",
            "Build relationships with productivity and browser enthusiasts",
            "Track social media metrics and engagement"
          ],
          goals: [
            "Grow Twitter/X following to 500+ followers",
            "Increase LinkedIn engagement by 50%",
            "Generate 30+ sign-ups from social media",
            "Maintain daily posting schedule"
          ]
        }
      ]
    },
    {
      name: "Udit Agrawal",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Udit1",
          respondentId: "Udit",
          submittedAt: "2025-01-10 10:00:00",
          name: "Udit Agrawal",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Udit2",
          respondentId: "Udit",
          submittedAt: "2025-01-17 10:00:00",
          name: "Udit Agrawal",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Udit3",
          respondentId: "Udit",
          submittedAt: "2025-01-24 10:00:00",
          name: "Udit Agrawal",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Udit4",
          respondentId: "Udit",
          submittedAt: "2025-01-31 10:00:00",
          name: "Udit Agrawal",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through feedback collection and PMF measurement",
        target: "Collect 100+ feedback items and measure PMF to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Baseline measurement and feedback setup", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 3, goal: "Week 3: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 6, goal: "Week 6: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 9, goal: "Week 9: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 12, goal: "Week 12: Collect feedback and measure PMF", metric: "15+ feedback items collected, PMF survey administered" },
          { week: 13, goal: "Q1 final assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "40%+ 'Very disappointed' response rate (PMF threshold)",
          "NPS delta bi-weekly (supporting metric)",
          "Enhancement ideas documented in Google Sheets",
          "Engineering sprint support effectiveness"
        ]
      },
      projects: [
        {
          title: "Weekly UI/UX Testing & PMF Measurement",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: install weekly releases, test UI/UX improvements, submit feedback forms, and measure product-market fit to drive improvements that enhance demo quality and user satisfaction.",
          scope: [
            "Install latest browser version from installations page each week",
            "Test each UI/UX iteration weekly with users",
            "Submit feedback forms via AI assistant interface (bugs, enhancement ideas, feature requests)",
            "Administer PMF survey: NPS (0-10), 'How disappointed if you couldn't use Oasis?', user type, main benefit, improvement suggestions",
            "Complete NPS survey after each testing round",
            "Log enhancement ideas and bug fixes in feedback form (Google Sheets)",
            "Track NPS delta week-over-week as key metric",
            "Prioritize UI/UX improvements for engineering sprints"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Maintain 40%+ 'Very disappointed' response rate",
            "Document all enhancement ideas and bugs in Google Sheets",
            "Support engineering sprint planning with prioritized feedback"
          ]
        }
      ]
    },
    {
      name: "Rohith Anthony Aleti Joseph",
      roles: ["Sales"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Rohith1",
          respondentId: "Rohith",
          submittedAt: "2025-01-10 10:00:00",
          name: "Rohith Anthony Aleti Joseph",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Conducted product demos for prospects. Scheduled discovery calls with potential B2B customers. Followed up with demo attendees. Negotiated pilot contracts."
        },
        {
          submissionId: "Rohith2",
          respondentId: "Rohith",
          submittedAt: "2025-01-17 10:00:00",
          name: "Rohith Anthony Aleti Joseph",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Conducted demos for qualified leads. Scheduled discovery calls. Followed up with prospects. Built pipeline for $50K ARR target."
        },
        {
          submissionId: "Rohith3",
          respondentId: "Rohith",
          submittedAt: "2025-01-24 10:00:00",
          name: "Rohith Anthony Aleti Joseph",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Conducted demos and discovery calls. Negotiated pilot contract terms. Followed up with prospects. Tracked pipeline value toward $50K ARR goal."
        },
        {
          submissionId: "Rohith4",
          respondentId: "Rohith",
          submittedAt: "2025-01-31 10:00:00",
          name: "Rohith Anthony Aleti Joseph",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Closed pilot contract negotiations. Conducted final demos. Followed up with signed pilots. Achieved $50K ARR milestone."
        }
      ],
      q1Goals: {
        overview: "Drive B2B revenue through pilot acquisition",
        target: "Generate $50,000 ARR in Q1 (1 pilot at $50K or 2 pilots at $25K each)",
        weeklyBreakdown: [
          { week: 1, goal: "Research target companies", metric: "20+ qualified leads identified" },
          { week: 2, goal: "Week 2 outreach", metric: "5+ emails sent, 2+ responses" },
          { week: 3, goal: "Week 3 outreach", metric: "5+ emails sent, 2+ responses" },
          { week: 4, goal: "Week 4 outreach & discovery calls", metric: "1+ discovery call, $25K+ pipeline" },
          { week: 5, goal: "Week 5 outreach & discovery calls", metric: "1+ discovery call, $50K+ pipeline" },
          { week: 6, goal: "Week 6 outreach & discovery calls", metric: "1+ discovery call, $75K+ pipeline" },
          { week: 7, goal: "Week 7 demo scheduling", metric: "1+ demo scheduled, $100K+ pipeline" },
          { week: 8, goal: "Week 8 demo scheduling", metric: "1+ demo scheduled, $100K+ pipeline" },
          { week: 9, goal: "Week 9 pilot negotiations", metric: "$50K+ ARR in active negotiations" },
          { week: 10, goal: "Week 10 pilot negotiations", metric: "$50K+ ARR in active negotiations" },
          { week: 11, goal: "Week 11 pilot closing", metric: "$50K ARR closed" },
          { week: 12, goal: "Week 12 follow-up", metric: "$50K ARR confirmed" },
          { week: 13, goal: "Q1 sales review", metric: "$50,000 ARR achieved" }
        ],
        keyMetrics: [
          "ARR generated (target $50,000)",
          "Qualified B2B leads generated (target 20+)",
          "Pipeline value (target $100K+ by week 7)",
          "Discovery calls scheduled (target 5+)",
          "Demos conducted (target 3+)",
          "Pilot contracts closed (1 at $50K or 2 at $25K)"
        ]
      },
      projects: [
        {
          title: "B2B Lead Generation & Outreach",
          status: "active",
          startDate: "January 2026",
          description: "Identify and reach out to potential B2B customers for pilot program participation.",
          scope: [
            "Research and identify target companies for B2B pilots",
            "Create outreach sequences and email templates",
            "Conduct initial discovery calls with prospects",
            "Qualify leads and schedule demos for qualified opportunities"
          ],
          goals: [
            "Generate 20+ qualified B2B leads",
            "Schedule 5+ discovery calls",
            "Convert 1 lead to pilot contract"
          ]
        }
      ]
    },
    {
      name: "Konika Dhull",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Konika1",
          respondentId: "Konika",
          submittedAt: "2025-01-10 10:00:00",
          name: "Konika Dhull",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Created social media content and posted daily. Engaged with community on Product Hunt. Supported content marketing initiatives. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Konika2",
          respondentId: "Konika",
          submittedAt: "2025-01-17 10:00:00",
          name: "Konika Dhull",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated social media content ideas. Created engaging posts for Twitter and LinkedIn. Engaged with online communities. Tracked subscriber growth from content."
        },
        {
          submissionId: "Konika3",
          respondentId: "Konika",
          submittedAt: "2025-01-24 10:00:00",
          name: "Konika Dhull",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created visual content for social media. Supported Product Hunt campaign. Analyzed content performance metrics."
        },
        {
          submissionId: "Konika4",
          respondentId: "Konika",
          submittedAt: "2025-01-31 10:00:00",
          name: "Konika Dhull",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content creation and distribution. Engaged with community on Product Hunt. Created content calendar for February. Tracked sign-ups and conversion rates."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through marketing activities",
        target: "Generate 200+ sign-ups and 50 paying subscribers in Q1 (25% conversion target)",
        weeklyBreakdown: [
          { week: 1, goal: "Set up marketing processes and tracking", metric: "Baseline established, tracking ready" },
          { week: 2, goal: "Week 2 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers" },
          { week: 3, goal: "Week 3 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers" },
          { week: 4, goal: "Week 4 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers (50+ total sign-ups)" },
          { week: 5, goal: "Week 5 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers" },
          { week: 6, goal: "Week 6 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers (100+ total sign-ups)" },
          { week: 7, goal: "Week 7 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers" },
          { week: 8, goal: "Week 8 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers (150+ total sign-ups)" },
          { week: 9, goal: "Week 9 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers" },
          { week: 10, goal: "Week 10 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers (180+ total sign-ups)" },
          { week: 11, goal: "Week 11 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers" },
          { week: 12, goal: "Week 12 marketing activities", metric: "16+ sign-ups, 4+ paying subscribers (200+ total sign-ups)" },
          { week: 13, goal: "Q1 final assessment", metric: "200+ sign-ups, 50 paying subscribers (25% conversion)" }
        ],
        keyMetrics: [
          "Sign-ups generated (target 200+ in Q1)",
          "Paying subscribers acquired (target 50 in Q1)",
          "Conversion rate (target 25-30%)",
          "Channel attribution: Product Hunt (40%), Social (30%), Content (20%), Other (10%)",
          "Social media engagement & reach"
        ]
      },
      projects: [
        {
          title: "Marketing Activities & Subscriber Growth",
          status: "active",
          startDate: "January 2026",
          description: "Execute marketing activities to drive subscriber growth and achieve 40 paying subscribers in Q1.",
          scope: [
            "Support marketing team activities (content, social media, Product Hunt)",
            "Track sign-ups and conversion to paying subscribers",
            "Contribute to marketing campaigns and initiatives",
            "Measure marketing impact on subscriber acquisition"
          ],
          goals: [
            "Support team in achieving 40 paying subscribers",
            "Track marketing metrics and conversion rates",
            "Contribute to marketing content and campaigns"
          ]
        }
      ]
    },
    {
      name: "Ashwin John",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Ashwin1",
          respondentId: "Ashwin",
          submittedAt: "2025-01-10 10:00:00",
          name: "Ashwin John",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks."
        },
        {
          submissionId: "Ashwin2",
          respondentId: "Ashwin",
          submittedAt: "2025-01-17 10:00:00",
          name: "Ashwin John",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Ashwin3",
          respondentId: "Ashwin",
          submittedAt: "2025-01-24 10:00:00",
          name: "Ashwin John",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Ashwin4",
          respondentId: "Ashwin",
          submittedAt: "2025-01-31 10:00:00",
          name: "Ashwin John",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through UI/UX sprint execution and bug fixes",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up sprint workflow and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final sprint review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Feedback items addressed per sprint (target 10+)",
          "Demo quality improvement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Sprint Execution",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: review feedback Google Sheet, organize items into sprints with story point estimates, execute story points, complete sprint tasks, and implement UI/UX improvements to enhance product quality and demo effectiveness.",
          scope: [
            "Review feedback Google Sheet (consolidated from feedback forms)",
            "Organize feedback items into weekly sprints in Notion",
            "Estimate story points for each sprint item",
            "Execute story points and complete sprint tasks",
            "Implement UI/UX improvements from Google Sheets feedback",
            "Focus on improvements that enhance demo quality for B2B pilots",
            "Track implementation impact on NPS delta",
            "Iterate weekly based on product team testing and feedback"
          ],
          goals: [
            "Complete prioritized UI/UX improvements each week",
            "Achieve positive NPS delta through weekly iterations",
            "Improve product quality through iterative improvements",
            "Enhance demo effectiveness through better UI/UX"
          ]
        }
      ]
    },
    {
      name: "Rashmila Mitra",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Rashmila1",
          respondentId: "Rashmila",
          submittedAt: "2025-01-10 10:00:00",
          name: "Rashmila Mitra",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Rashmila2",
          respondentId: "Rashmila",
          submittedAt: "2025-01-17 10:00:00",
          name: "Rashmila Mitra",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Rashmila3",
          respondentId: "Rashmila",
          submittedAt: "2025-01-24 10:00:00",
          name: "Rashmila Mitra",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Rashmila4",
          respondentId: "Rashmila",
          submittedAt: "2025-01-31 10:00:00",
          name: "Rashmila Mitra",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through feedback collection and NPS tracking",
        target: "Collect 100+ feedback items and track NPS to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Baseline NPS measurement and feedback setup", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 3, goal: "Week 3: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 6, goal: "Week 6: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 9, goal: "Week 9: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 12, goal: "Week 12: Collect feedback and track NPS", metric: "15+ feedback items collected" },
          { week: 13, goal: "Q1 final assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "NPS delta bi-weekly (supporting metric)",
          "UI/UX improvements that enhance demo quality",
          "Feedback loop maintenance with engineering"
        ]
      },
      projects: [
        {
          title: "UI/UX Testing & NPS Tracking",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: install weekly releases, test UI/UX improvements, submit feedback forms, and track NPS to measure product quality improvements that enhance both B2C retention and B2B demo effectiveness.",
          scope: [
            "Install latest browser version from installations page each week",
            "Conduct weekly UI/UX testing sessions with users",
            "Submit feedback forms via AI assistant interface (bugs, enhancement ideas, feature requests)",
            "Administer NPS survey (0-10 scale) after each iteration",
            "Administer PMF survey: disappointment question, user type, benefits, improvements",
            "Complete NPS survey after each testing round",
            "Document enhancement ideas and bug fixes in feedback form (Google Sheets)",
            "Track NPS delta weekly and report trends"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Increase NPS score by 5+ points in Q1",
            "Identify UI/UX improvements that enhance demo quality",
            "Maintain feedback loop with engineering team"
          ]
        }
      ]
    },
    {
      name: "Afshaan Khan",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Afshaan1",
          respondentId: "Afshaan",
          submittedAt: "2025-01-10 10:00:00",
          name: "Afshaan Khan",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Afshaan2",
          respondentId: "Afshaan",
          submittedAt: "2025-01-17 10:00:00",
          name: "Afshaan Khan",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Afshaan3",
          respondentId: "Afshaan",
          submittedAt: "2025-01-24 10:00:00",
          name: "Afshaan Khan",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Afshaan4",
          respondentId: "Afshaan",
          submittedAt: "2025-01-31 10:00:00",
          name: "Afshaan Khan",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through UI/UX development and feature implementation",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up development process and story point estimation", metric: "Baseline NPS, sprint priorities set, story point baseline established" },
          { week: 2, goal: "Week 2: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & sprint review", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & sprint review", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & sprint review", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Implement UI improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final development review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Feedback items addressed per sprint (target 10+)",
          "Product quality enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Weekly Development",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: review feedback Google Sheet, organize items into sprints with story point estimates, execute story points, complete sprint tasks, and develop UI/UX improvements weekly to create positive feedback loop that increases NPS, retention, and product quality.",
          scope: [
            "Review feedback Google Sheet (consolidated from feedback forms)",
            "Organize feedback items into weekly sprints in Notion",
            "Estimate story points for each sprint item",
            "Execute story points and complete sprint tasks",
            "Implement UI/UX improvements in weekly sprints",
            "Focus on demo-critical UI/UX enhancements",
            "Track NPS delta as primary success metric",
            "Iterate weekly based on product team PMF/NPS survey results"
          ],
          goals: [
            "Complete UI/UX improvements each week",
            "Achieve positive NPS delta weekly",
            "Increase retention through better UI/UX",
            "Improve overall product quality iteratively"
          ]
        }
      ]
    },
    {
      name: "Nithish Sampath",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Nithish1",
          respondentId: "Nithish",
          submittedAt: "2025-01-10 10:00:00",
          name: "Nithish Sampath",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Nithish2",
          respondentId: "Nithish",
          submittedAt: "2025-01-17 10:00:00",
          name: "Nithish Sampath",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Nithish3",
          respondentId: "Nithish",
          submittedAt: "2025-01-24 10:00:00",
          name: "Nithish Sampath",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Nithish4",
          respondentId: "Nithish",
          submittedAt: "2025-01-31 10:00:00",
          name: "Nithish Sampath",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through feedback collection and prioritization",
        target: "Collect 100+ feedback items and prioritize top 10 improvements to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Establish prioritization process and feedback setup", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 3, goal: "Week 3: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & prioritization review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 6, goal: "Week 6: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & prioritization review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 9, goal: "Week 9: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & prioritization review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 12, goal: "Week 12: Collect feedback and prioritize", metric: "15+ feedback items collected, top 3 prioritized" },
          { week: 13, goal: "Q1 final prioritization review", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "Top improvements prioritized per week (target 3+)",
          "NPS delta bi-weekly (supporting metric)",
          "Overall product quality improvement",
          "Demo effectiveness enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Testing & Feedback Prioritization",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: install weekly releases, test UI/UX improvements, submit feedback forms, collect feedback via PMF/NPS surveys, and prioritize improvements for engineering sprints to enhance demo quality.",
          scope: [
            "Install latest browser version from installations page each week",
            "Test new UI/UX iterations weekly with focus on demo-critical features",
            "Submit feedback forms via AI assistant interface (bugs, enhancement ideas, feature requests)",
            "Administer PMF and NPS surveys after each testing session",
            "Complete NPS survey after each testing round",
            "Collect enhancement ideas and bug fixes via feedback form (Google Sheets)",
            "Prioritize feedback for engineering sprint planning based on NPS impact",
            "Track NPS delta as primary success metric"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Prioritize top 5 UI/UX improvements per week for engineering",
            "Increase overall product quality through iterative improvements",
            "Enhance demo effectiveness through better UI/UX"
          ]
        }
      ]
    },
    {
      name: "Rohan Mehere",
      roles: ["Sales"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Rohan1",
          respondentId: "Rohan",
          submittedAt: "2025-01-10 10:00:00",
          name: "Rohan Mehere",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Conducted product demos for prospects. Scheduled discovery calls with potential B2B customers. Followed up with demo attendees. Negotiated pilot contracts."
        },
        {
          submissionId: "Rohan2",
          respondentId: "Rohan",
          submittedAt: "2025-01-17 10:00:00",
          name: "Rohan Mehere",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Conducted demos for qualified leads. Scheduled discovery calls. Followed up with prospects. Built pipeline for $50K ARR target."
        },
        {
          submissionId: "Rohan3",
          respondentId: "Rohan",
          submittedAt: "2025-01-24 10:00:00",
          name: "Rohan Mehere",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Conducted demos and discovery calls. Negotiated pilot contract terms. Followed up with prospects. Tracked pipeline value toward $50K ARR goal."
        },
        {
          submissionId: "Rohan4",
          respondentId: "Rohan",
          submittedAt: "2025-01-31 10:00:00",
          name: "Rohan Mehere",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Closed pilot contract negotiations. Conducted final demos. Followed up with signed pilots. Achieved $50K ARR milestone."
        }
      ],
      q1Goals: {
        overview: "Drive B2B revenue through demo execution and pilot acquisition",
        target: "Generate $50,000 ARR in Q1 (1 pilot at $50K or 2 pilots at $25K each)",
        weeklyBreakdown: [
          { week: 1, goal: "Create demo scripts and research leads", metric: "Scripts ready, 20+ qualified leads identified" },
          { week: 2, goal: "Week 2 demos", metric: "1+ demo conducted, 2+ responses" },
          { week: 3, goal: "Week 3 demos", metric: "1+ demo conducted, 2+ responses" },
          { week: 4, goal: "Week 4 demos & discovery calls", metric: "1+ demo conducted, 1+ discovery call, $25K+ pipeline" },
          { week: 5, goal: "Week 5 demos & discovery calls", metric: "1+ demo conducted, 1+ discovery call, $50K+ pipeline" },
          { week: 6, goal: "Week 6 demos & discovery calls", metric: "1+ demo conducted, 1+ discovery call, $75K+ pipeline" },
          { week: 7, goal: "Week 7 demos & negotiations", metric: "1+ demo conducted, $100K+ pipeline" },
          { week: 8, goal: "Week 8 demos & negotiations", metric: "1+ demo conducted, $100K+ pipeline" },
          { week: 9, goal: "Week 9 demos & negotiations", metric: "$50K+ ARR in active negotiations" },
          { week: 10, goal: "Week 10 demos & negotiations", metric: "$50K+ ARR in active negotiations" },
          { week: 11, goal: "Week 11 pilot closing", metric: "$50K ARR closed" },
          { week: 12, goal: "Week 12 follow-up", metric: "$50K ARR confirmed" },
          { week: 13, goal: "Q1 sales review", metric: "$50,000 ARR achieved" }
        ],
        keyMetrics: [
          "ARR generated (target $50,000)",
          "Qualified B2B leads generated (target 20+)",
          "Pipeline value (target $100K+ by week 7)",
          "Demos conducted (target 10+)",
          "Discovery calls scheduled (target 5+)",
          "Pilot contracts closed (1 at $50K or 2 at $25K)"
        ]
      },
      projects: [
        {
          title: "Demo Preparation & Execution",
          status: "active",
          startDate: "January 2026",
          description: "Prepare and conduct product demos for potential B2C and B2B customers.",
          scope: [
            "Create standardized demo scripts and flows",
            "Prepare demo environments and test scenarios",
            "Conduct live demos for prospects",
            "Collect feedback and follow up with demo attendees"
          ],
          goals: [
            "Conduct 10+ product demos",
            "Achieve 30%+ demo-to-signup conversion rate",
            "Create demo best practices documentation"
          ]
        }
      ]
    },
    {
      name: "Rushyanth Nerellakunta",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Rushyanth1",
          respondentId: "Rushyanth",
          submittedAt: "2025-01-10 10:00:00",
          name: "Rushyanth Nerellakunta",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Rushyanth2",
          respondentId: "Rushyanth",
          submittedAt: "2025-01-17 10:00:00",
          name: "Rushyanth Nerellakunta",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Rushyanth3",
          respondentId: "Rushyanth",
          submittedAt: "2025-01-24 10:00:00",
          name: "Rushyanth Nerellakunta",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Rushyanth4",
          respondentId: "Rushyanth",
          submittedAt: "2025-01-31 10:00:00",
          name: "Rushyanth Nerellakunta",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through sprint planning and execution",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up sprint planning process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final sprint review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Sprint Planning & Execution",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: review feedback Google Sheet, organize items into sprints with story point estimates, execute story points, complete sprint tasks, and plan and execute weekly sprints implementing UI/UX improvements to enhance demo quality and product-market fit.",
          scope: [
            "Review feedback Google Sheet (consolidated from feedback forms)",
            "Organize feedback items into weekly sprints in Notion",
            "Estimate story points for each sprint item",
            "Execute story points and complete sprint tasks",
            "Prioritize UI/UX improvements based on NPS impact and demo relevance",
            "Implement UI/UX improvements focused on product polish",
            "Track NPS delta weekly to measure sprint success",
            "Create positive feedback loop with product team"
          ],
          goals: [
            "Complete prioritized UI/UX improvements weekly",
            "Achieve positive NPS delta each week",
            "Improve demo quality through better UI/UX",
            "Increase product-market fit through iterative improvements"
          ]
        }
      ]
    },
    {
      name: "Davis Victor",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Davis1",
          respondentId: "Davis",
          submittedAt: "2025-01-10 10:00:00",
          name: "Davis Victor",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Davis2",
          respondentId: "Davis",
          submittedAt: "2025-01-17 10:00:00",
          name: "Davis Victor",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Davis3",
          respondentId: "Davis",
          submittedAt: "2025-01-24 10:00:00",
          name: "Davis Victor",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Davis4",
          respondentId: "Davis",
          submittedAt: "2025-01-31 10:00:00",
          name: "Davis Victor",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through sprint planning and execution",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up sprint planning process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12 sprint: Bug fixes & improvements", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final sprint review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Sprint Planning & Execution",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: review feedback Google Sheet, organize items into sprints with story point estimates, execute story points, complete sprint tasks, and plan and execute weekly sprints implementing UI/UX improvements to enhance demo quality and product-market fit.",
          scope: [
            "Review feedback Google Sheet (consolidated from feedback forms)",
            "Organize feedback items into weekly sprints in Notion",
            "Estimate story points for each sprint item",
            "Execute story points and complete sprint tasks",
            "Prioritize UI/UX improvements based on NPS impact and demo relevance",
            "Implement UI/UX improvements focused on product polish",
            "Track NPS delta weekly to measure sprint success",
            "Create positive feedback loop with product team"
          ],
          goals: [
            "Complete prioritized UI/UX improvements weekly",
            "Achieve positive NPS delta each week",
            "Improve demo quality through better UI/UX",
            "Increase product-market fit through iterative improvements"
          ]
        }
      ]
    },
    {
      name: "Agrima Gupta",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Agrima1",
          respondentId: "Agrima",
          submittedAt: "2025-01-10 10:00:00",
          name: "Agrima Gupta",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Agrima2",
          respondentId: "Agrima",
          submittedAt: "2025-01-17 10:00:00",
          name: "Agrima Gupta",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Agrima3",
          respondentId: "Agrima",
          submittedAt: "2025-01-24 10:00:00",
          name: "Agrima Gupta",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Agrima4",
          respondentId: "Agrima",
          submittedAt: "2025-01-31 10:00:00",
          name: "Agrima Gupta",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through extension and interface improvements",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up interface improvement process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final improvements review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo effectiveness improvement",
          "User satisfaction increase"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Extension & Interface",
          status: "active",
          startDate: "January 2026",
          description: "Improve UI/UX of browser extension and AI interface weekly based on feedback from Google Sheets to enhance demo quality and user satisfaction.",
          scope: [
            "Review Google Sheets for UI/UX enhancement ideas and bug fixes",
            "Implement UI/UX improvements for browser extension and AI interface",
            "Focus on demo-critical interface improvements",
            "Track NPS delta as key metric",
            "Iterate weekly based on product team feedback"
          ],
          goals: [
            "Complete UI/UX improvements for extension/interface weekly",
            "Achieve positive NPS delta through iterations",
            "Improve demo effectiveness through better interface polish",
            "Increase user satisfaction through UI/UX enhancements"
          ]
        }
      ]
    },
    {
      name: "Aishwarya Shetiya",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Aishwarya1",
          respondentId: "Aishwarya",
          submittedAt: "2025-01-10 10:00:00",
          name: "Aishwarya Shetiya",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Aishwarya2",
          respondentId: "Aishwarya",
          submittedAt: "2025-01-17 10:00:00",
          name: "Aishwarya Shetiya",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Aishwarya3",
          respondentId: "Aishwarya",
          submittedAt: "2025-01-24 10:00:00",
          name: "Aishwarya Shetiya",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Aishwarya4",
          respondentId: "Aishwarya",
          submittedAt: "2025-01-31 10:00:00",
          name: "Aishwarya Shetiya",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through NPS/PMF analytics and feedback collection",
        target: "Track NPS/PMF analytics and collect 100+ feedback items to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up NPS/PMF tracking and feedback collection", metric: "Baseline dashboard, feedback form ready" },
          { week: 2, goal: "Week 2: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 3, goal: "Week 3: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & analytics review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 6, goal: "Week 6: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & analytics review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 9, goal: "Week 9: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & analytics review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 12, goal: "Week 12: Track analytics & collect feedback", metric: "NPS/PMF report, 15+ feedback items collected" },
          { week: 13, goal: "Q1 final NPS report", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Feedback items collected (target 100+ in Q1)",
          "NPS delta bi-weekly (supporting metric)",
          "40%+ 'Very disappointed' response rate maintenance",
          "Correlation between UI/UX improvements and NPS changes",
          "Bi-weekly NPS/PMF report delivery"
        ]
      },
      projects: [
        {
          title: "NPS & PMF Survey Analytics",
          status: "active",
          startDate: "January 2026",
          description: "Track and analyze NPS and PMF survey results weekly to measure product improvements and inform UI/UX prioritization for better demos.",
          scope: [
            "Collect and analyze NPS survey data weekly",
            "Track NPS delta week-over-week as key metric",
            "Analyze PMF survey responses (disappointment, user type, benefits, improvements)",
            "Create dashboards for NPS trends and PMF metrics",
            "Report weekly NPS delta and PMF insights to team"
          ],
          goals: [
            "Track NPS delta weekly and report trends",
            "Maintain 40%+ 'Very disappointed' response rate (PMF threshold)",
            "Identify correlation between UI/UX improvements and NPS changes",
            "Deliver weekly NPS/PMF reports to team"
          ]
        }
      ]
    },
    {
      name: "Likhitha Guggilla",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Likhitha1",
          respondentId: "Likhitha",
          submittedAt: "2025-01-10 10:00:00",
          name: "Likhitha Guggilla",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Likhitha2",
          respondentId: "Likhitha",
          submittedAt: "2025-01-17 10:00:00",
          name: "Likhitha Guggilla",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Likhitha3",
          respondentId: "Likhitha",
          submittedAt: "2025-01-24 10:00:00",
          name: "Likhitha Guggilla",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Likhitha4",
          respondentId: "Likhitha",
          submittedAt: "2025-01-31 10:00:00",
          name: "Likhitha Guggilla",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Enable NPS increase through infrastructure and DevOps support",
        target: "Support team in achieving +15 NPS points by enabling weekly deployments",
        weeklyBreakdown: [
          { week: 1, goal: "Set up CI/CD for weekly iterations", metric: "Baseline NPS" },
          { week: 2, goal: "Week 2 deployment support", metric: "Target +2 NPS delta" },
          { week: 3, goal: "Week 3 deployment support", metric: "Target +2 NPS delta" },
          { week: 4, goal: "Week 4 deployment support", metric: "Target +2 NPS delta" },
          { week: 5, goal: "Week 5 deployment support", metric: "Target +2 NPS delta" },
          { week: 6, goal: "Week 6 deployment support", metric: "Target +2 NPS delta" },
          { week: 7, goal: "Week 7 deployment support", metric: "Target +1 NPS delta" },
          { week: 8, goal: "Week 8 deployment support", metric: "Target +1 NPS delta" },
          { week: 9, goal: "Week 9 deployment support", metric: "Target +1 NPS delta" },
          { week: 10, goal: "Week 10 deployment support", metric: "Target +1 NPS delta" },
          { week: 11, goal: "Week 11 deployment support", metric: "Target +1 NPS delta" },
          { week: 12, goal: "Week 12 deployment support", metric: "Target +1 NPS delta" },
          { week: 13, goal: "Q1 final deployment support", metric: "Achieve +15 total NPS increase" }
        ],
        keyMetrics: [
          "NPS delta week-over-week (enabled through deployments)",
          "99.9%+ uptime maintenance",
          "Weekly deployment success rate",
          "Infrastructure reliability"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Infrastructure Support",
          status: "active",
          startDate: "January 2026",
          description: "Support UI/UX improvements through infrastructure and DevOps work, enabling weekly iterations that enhance product quality and demo effectiveness.",
          scope: [
            "Support UI/UX improvement deployments through CI/CD",
            "Maintain infrastructure for weekly UI/UX iterations",
            "Enable rapid deployment of UI/UX improvements",
            "Track deployment impact on NPS delta",
            "Support product team's weekly testing cycles"
          ],
          goals: [
            "Enable weekly UI/UX improvement deployments",
            "Maintain 99.9%+ uptime for production systems",
            "Support positive NPS delta through reliable infrastructure",
            "Automate deployment for weekly iterations"
          ]
        }
      ]
    },
    {
      name: "Mohammed Muneebuddin",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Mohammed1",
          respondentId: "Mohammed",
          submittedAt: "2025-01-10 10:00:00",
          name: "Mohammed Muneebuddin",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Mohammed2",
          respondentId: "Mohammed",
          submittedAt: "2025-01-17 10:00:00",
          name: "Mohammed Muneebuddin",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Mohammed3",
          respondentId: "Mohammed",
          submittedAt: "2025-01-24 10:00:00",
          name: "Mohammed Muneebuddin",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Mohammed4",
          respondentId: "Mohammed",
          submittedAt: "2025-01-31 10:00:00",
          name: "Mohammed Muneebuddin",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through UI/UX implementation and bug fixes",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up implementation workflow and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Implement improvements & fix bugs", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final implementation review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality improvement",
          "Retention enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Weekly Implementation",
          status: "active",
          startDate: "January 2026",
          description: "Participate in the continuous feedback loop: review feedback Google Sheet, organize items into sprints with story point estimates, execute story points, complete sprint tasks, and implement UI/UX improvements weekly to enhance product quality, increase NPS, and improve demo effectiveness.",
          scope: [
            "Review feedback Google Sheet (consolidated from feedback forms)",
            "Organize feedback items into weekly sprints in Notion",
            "Estimate story points for each sprint item",
            "Execute story points and complete sprint tasks",
            "Pull enhancement ideas and bug fixes from Google Sheets (feedback form)",
            "Implement UI/UX improvements in weekly sprints",
            "Focus on improvements that enhance demo quality",
            "Track NPS delta weekly as success metric",
            "Create positive feedback loop with product team testing"
          ],
          goals: [
            "Complete UI/UX improvements each week",
            "Achieve positive NPS delta weekly",
            "Improve demo quality through better product polish",
            "Increase retention through UI/UX enhancements"
          ]
        }
      ]
    },
    {
      name: "Atharva Joshi",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Atharva1",
          respondentId: "Atharva",
          submittedAt: "2025-01-10 10:00:00",
          name: "Atharva Joshi",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Atharva2",
          respondentId: "Atharva",
          submittedAt: "2025-01-17 10:00:00",
          name: "Atharva Joshi",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Atharva3",
          respondentId: "Atharva",
          submittedAt: "2025-01-24 10:00:00",
          name: "Atharva Joshi",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Atharva4",
          respondentId: "Atharva",
          submittedAt: "2025-01-31 10:00:00",
          name: "Atharva Joshi",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through bug fixes and product polish",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up bug tracking process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & review", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & review", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & review", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Bug fixes & polish", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final bug fixes & polish review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Product stability improvement",
          "Demo quality enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Bug Fixes & Polish",
          status: "active",
          startDate: "January 2026",
          description: "Fix bugs and implement UI/UX improvements from Google Sheets feedback weekly to enhance product stability, quality, and demo effectiveness.",
          scope: [
            "Review bug fixes and enhancement ideas from Google Sheets",
            "Fix bugs identified through product team testing",
            "Implement UI/UX improvements focused on product polish",
            "Track NPS delta as key metric for improvements",
            "Iterate weekly to create positive feedback loop"
          ],
          goals: [
            "Fix all critical bugs within 48 hours",
            "Complete UI/UX improvements weekly",
            "Achieve positive NPS delta through bug fixes and polish",
            "Improve product stability and demo quality"
          ]
        }
      ]
    },
    {
      name: "Naveen Prashanna Gurumurthy",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Naveen1",
          respondentId: "Naveen",
          submittedAt: "2025-01-10 10:00:00",
          name: "Naveen Prashanna Gurumurthy",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Naveen2",
          respondentId: "Naveen",
          submittedAt: "2025-01-17 10:00:00",
          name: "Naveen Prashanna Gurumurthy",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Naveen3",
          respondentId: "Naveen",
          submittedAt: "2025-01-24 10:00:00",
          name: "Naveen Prashanna Gurumurthy",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Naveen4",
          respondentId: "Naveen",
          submittedAt: "2025-01-31 10:00:00",
          name: "Naveen Prashanna Gurumurthy",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through performance and polish improvements",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up performance tracking and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & review", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & review", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & review", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Performance improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final performance improvements review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "UI responsiveness improvement",
          "Demo quality through better performance"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Performance & Polish",
          status: "active",
          startDate: "January 2026",
          description: "Implement UI/UX improvements weekly from Google Sheets feedback, focusing on performance and polish to enhance demo quality and user satisfaction.",
          scope: [
            "Review enhancement ideas from Google Sheets feedback form",
            "Implement UI/UX improvements with focus on performance",
            "Optimize UI responsiveness and smoothness",
            "Track NPS delta weekly as success metric",
            "Iterate weekly based on product team PMF/NPS surveys"
          ],
          goals: [
            "Complete UI/UX improvements weekly",
            "Achieve positive NPS delta through performance improvements",
            "Improve demo quality through better UI responsiveness",
            "Increase user satisfaction through performance enhancements"
          ]
        }
      ]
    },
    {
      name: "Ruhani",
      roles: ["Sales"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Ruhani1",
          respondentId: "Ruhani",
          submittedAt: "2025-01-10 10:00:00",
          name: "Ruhani",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Conducted product demos for prospects. Scheduled discovery calls with potential B2B customers. Followed up with demo attendees. Negotiated pilot contracts."
        },
        {
          submissionId: "Ruhani2",
          respondentId: "Ruhani",
          submittedAt: "2025-01-17 10:00:00",
          name: "Ruhani",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Conducted demos for qualified leads. Scheduled discovery calls. Followed up with prospects. Built pipeline for $50K ARR target."
        },
        {
          submissionId: "Ruhani3",
          respondentId: "Ruhani",
          submittedAt: "2025-01-24 10:00:00",
          name: "Ruhani",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Conducted demos and discovery calls. Negotiated pilot contract terms. Followed up with prospects. Tracked pipeline value toward $50K ARR goal."
        },
        {
          submissionId: "Ruhani4",
          respondentId: "Ruhani",
          submittedAt: "2025-01-31 10:00:00",
          name: "Ruhani",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Closed pilot contract negotiations. Conducted final demos. Followed up with signed pilots. Achieved $50K ARR milestone."
        }
      ],
      q1Goals: {
        overview: "Drive B2B revenue through partner program and direct sales",
        target: "Generate $50,000 ARR in Q1 (1 pilot at $50K or 2 pilots at $25K each)",
        weeklyBreakdown: [
          { week: 1, goal: "Draft partner contract and research leads", metric: "Contract ready, 20+ qualified leads identified" },
          { week: 2, goal: "Week 2 partner outreach & direct sales", metric: "Outreach in progress, 2+ responses" },
          { week: 3, goal: "Week 3 partner outreach & direct sales", metric: "Outreach in progress, 2+ responses" },
          { week: 4, goal: "Partner contract signed", metric: "1 partner onboarded, $25K+ pipeline" },
          { week: 5, goal: "Partner training & education", metric: "Training complete, $50K+ pipeline" },
          { week: 6, goal: "Week 6 partner support & sales", metric: "$75K+ pipeline" },
          { week: 7, goal: "First partner-led demo", metric: "Demo conducted, $100K+ pipeline" },
          { week: 8, goal: "Week 8 partner support & sales", metric: "$100K+ pipeline" },
          { week: 9, goal: "Week 9 pilot negotiations", metric: "$50K+ ARR in active negotiations" },
          { week: 10, goal: "Week 10 pilot negotiations", metric: "$50K+ ARR in active negotiations" },
          { week: 11, goal: "Week 11 pilot closing", metric: "$50K ARR closed" },
          { week: 12, goal: "Week 12 follow-up", metric: "$50K ARR confirmed" },
          { week: 13, goal: "Q1 sales review", metric: "$50,000 ARR achieved" }
        ],
        keyMetrics: [
          "ARR generated (target $50,000)",
          "Qualified B2B leads generated (target 20+)",
          "Pipeline value (target $100K+ by week 7)",
          "Partners onboarded (target 1)",
          "Partner-led demos conducted",
          "Pilot contracts closed (1 at $50K or 2 at $25K)"
        ]
      },
      availability: {
        monday: {
          active: true,
          timeRange: "12:30 AM - 5:30 AM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Scheduling demos",
            "Having demos",
            "Sending follow up",
            "Getting on the same page with other team members"
          ]
        },
        tuesday: {
          active: true,
          timeRange: "12:30 AM - 5:30 AM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Scheduling demos",
            "Having demos",
            "Sending follow up",
            "Getting on the same page with other team members"
          ]
        },
        wednesday: {
          active: true,
          timeRange: "12:30 AM - 5:30 AM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Scheduling demos",
            "Having demos",
            "Sending follow up",
            "Getting on the same page with other team members"
          ]
        },
        thursday: {
          active: true,
          timeRange: "12:30 AM - 5:30 AM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Scheduling demos",
            "Having demos",
            "Sending follow up",
            "Getting on the same page with other team members"
          ]
        },
        friday: {
          active: true,
          timeRange: "12:30 AM - 5:30 AM",
          timezone: "Eastern Standard Time (EST)",
          activities: [
            "Scheduling demos",
            "Having demos",
            "Sending follow up",
            "Getting on the same page with other team members"
          ]
        },
        saturday: {
          active: false
        },
        sunday: {
          active: false
        }
      },
      projects: [
        {
          title: "Partner Program",
          status: "active",
          startDate: "January 2026",
          description: "Building a partner program to enable external partners to conduct demos and drive sales.",
          scope: [
            "Legal Contract to be signed by 'Partner' that outlines everything regarding expectations, compensation, liabilities, etc.",
            "Partners will need to be given the Oasis browser so that they can install it and showcase it in demos",
            "Partners will need to undergo some type of training and education so that they can conduct the demos and answer questions in the scope of a demo"
          ],
          goals: [
            "Onboard 1 partner who signs the contract",
            "Complete partner training and education",
            "Conduct first partner-led demo",
            "Get paid when the deal closes"
          ]
        }
      ]
    },
    {
      name: "Abhinav Chandra",
      roles: ["Sales"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Abhinav1",
          respondentId: "Abhinav",
          submittedAt: "2025-01-10 10:00:00",
          name: "Abhinav Chandra",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Conducted product demos for prospects. Scheduled discovery calls with potential B2B customers. Followed up with demo attendees. Negotiated pilot contracts."
        },
        {
          submissionId: "Abhinav2",
          respondentId: "Abhinav",
          submittedAt: "2025-01-17 10:00:00",
          name: "Abhinav Chandra",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Conducted demos for qualified leads. Scheduled discovery calls. Followed up with prospects. Built pipeline for enterprise pilot target."
        },
        {
          submissionId: "Abhinav3",
          respondentId: "Abhinav",
          submittedAt: "2025-01-24 10:00:00",
          name: "Abhinav Chandra",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Conducted demos and discovery calls. Negotiated pilot contract terms. Followed up with prospects. Tracked pipeline value toward enterprise pilot goal."
        },
        {
          submissionId: "Abhinav4",
          respondentId: "Abhinav",
          submittedAt: "2025-01-31 10:00:00",
          name: "Abhinav Chandra",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Closed pilot contract negotiations. Conducted final demos. Followed up with signed pilots. Achieved enterprise pilot milestone."
        }
      ],
      q1Goals: {
        overview: "Drive B2B revenue through enterprise pilot acquisition",
        target: "Close 3 enterprise pilots in Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Research target companies and create outreach plan", metric: "20+ qualified leads identified, outreach plan ready" },
          { week: 2, goal: "Week 2 outreach & discovery calls", metric: "5+ emails sent, 2+ responses, 1+ discovery call" },
          { week: 3, goal: "Week 3 outreach & discovery calls", metric: "5+ emails sent, 2+ responses, 1+ discovery call" },
          { week: 4, goal: "Week 4 demos & pipeline building", metric: "1+ demo conducted, $50K+ pipeline value" },
          { week: 5, goal: "Week 5 demos & pipeline building", metric: "1+ demo conducted, $75K+ pipeline value" },
          { week: 6, goal: "Week 6 demos & pipeline building", metric: "1+ demo conducted, $100K+ pipeline value" },
          { week: 7, goal: "Week 7 pilot negotiations", metric: "1+ pilot in active negotiations, $150K+ pipeline" },
          { week: 8, goal: "Week 8 pilot negotiations", metric: "2+ pilots in active negotiations, $200K+ pipeline" },
          { week: 9, goal: "Week 9 pilot closing", metric: "1+ pilot closed, 2+ pilots in negotiations" },
          { week: 10, goal: "Week 10 pilot closing", metric: "2+ pilots closed, 1+ pilot in negotiations" },
          { week: 11, goal: "Week 11 pilot closing", metric: "3 enterprise pilots closed" },
          { week: 12, goal: "Week 12 follow-up & confirmation", metric: "3 enterprise pilots confirmed" },
          { week: 13, goal: "Q1 sales review", metric: "3 enterprise pilots achieved" }
        ],
        keyMetrics: [
          "Enterprise pilots closed (target 3)",
          "Qualified B2B leads generated (target 20+)",
          "Pipeline value (target $200K+ by week 8)",
          "Discovery calls scheduled (target 10+)",
          "Demos conducted (target 6+)",
          "Pilot contracts closed (target 3)"
        ]
      },
      projects: [
        {
          title: "Enterprise Pilot Acquisition",
          status: "active",
          startDate: "January 2026",
          description: "Identify, qualify, and close enterprise pilot contracts to drive B2B revenue growth.",
          scope: [
            "Research and identify target enterprise companies for pilot program",
            "Create outreach sequences and email templates",
            "Conduct discovery calls with prospects to understand needs",
            "Schedule and conduct product demos for qualified opportunities",
            "Negotiate pilot contract terms and pricing",
            "Close pilot contracts and ensure successful onboarding"
          ],
          goals: [
            "Generate 20+ qualified enterprise leads",
            "Schedule 10+ discovery calls",
            "Conduct 6+ product demos",
            "Close 3 enterprise pilot contracts"
          ]
        }
      ]
    },
    {
      name: "Hasan Bohra",
      roles: ["Sales"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Hasan1",
          respondentId: "Hasan",
          submittedAt: "2025-01-10 10:00:00",
          name: "Hasan Bohra",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Conducted product demos for prospects. Scheduled discovery calls with potential B2B customers. Followed up with demo attendees. Negotiated pilot contracts."
        },
        {
          submissionId: "Hasan2",
          respondentId: "Hasan",
          submittedAt: "2025-01-17 10:00:00",
          name: "Hasan Bohra",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Conducted demos for qualified leads. Scheduled discovery calls. Followed up with prospects. Built pipeline for enterprise pilot target."
        },
        {
          submissionId: "Hasan3",
          respondentId: "Hasan",
          submittedAt: "2025-01-24 10:00:00",
          name: "Hasan Bohra",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Conducted demos and discovery calls. Negotiated pilot contract terms. Followed up with prospects. Tracked pipeline value toward enterprise pilot goal."
        },
        {
          submissionId: "Hasan4",
          respondentId: "Hasan",
          submittedAt: "2025-01-31 10:00:00",
          name: "Hasan Bohra",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Closed pilot contract negotiations. Conducted final demos. Followed up with signed pilots. Achieved enterprise pilot milestone."
        }
      ],
      q1Goals: {
        overview: "Drive B2B revenue through enterprise pilot acquisition",
        target: "Close 3 enterprise pilots in Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Research target companies and create outreach plan", metric: "20+ qualified leads identified, outreach plan ready" },
          { week: 2, goal: "Week 2 outreach & discovery calls", metric: "5+ emails sent, 2+ responses, 1+ discovery call" },
          { week: 3, goal: "Week 3 outreach & discovery calls", metric: "5+ emails sent, 2+ responses, 1+ discovery call" },
          { week: 4, goal: "Week 4 demos & pipeline building", metric: "1+ demo conducted, $50K+ pipeline value" },
          { week: 5, goal: "Week 5 demos & pipeline building", metric: "1+ demo conducted, $75K+ pipeline value" },
          { week: 6, goal: "Week 6 demos & pipeline building", metric: "1+ demo conducted, $100K+ pipeline value" },
          { week: 7, goal: "Week 7 pilot negotiations", metric: "1+ pilot in active negotiations, $150K+ pipeline" },
          { week: 8, goal: "Week 8 pilot negotiations", metric: "2+ pilots in active negotiations, $200K+ pipeline" },
          { week: 9, goal: "Week 9 pilot closing", metric: "1+ pilot closed, 2+ pilots in negotiations" },
          { week: 10, goal: "Week 10 pilot closing", metric: "2+ pilots closed, 1+ pilot in negotiations" },
          { week: 11, goal: "Week 11 pilot closing", metric: "3 enterprise pilots closed" },
          { week: 12, goal: "Week 12 follow-up & confirmation", metric: "3 enterprise pilots confirmed" },
          { week: 13, goal: "Q1 sales review", metric: "3 enterprise pilots achieved" }
        ],
        keyMetrics: [
          "Enterprise pilots closed (target 3)",
          "Qualified B2B leads generated (target 20+)",
          "Pipeline value (target $200K+ by week 8)",
          "Discovery calls scheduled (target 10+)",
          "Demos conducted (target 6+)",
          "Pilot contracts closed (target 3)"
        ]
      },
      projects: [
        {
          title: "Enterprise Pilot Acquisition",
          status: "active",
          startDate: "January 2026",
          description: "Identify, qualify, and close enterprise pilot contracts to drive B2B revenue growth.",
          scope: [
            "Research and identify target enterprise companies for pilot program",
            "Create outreach sequences and email templates",
            "Conduct discovery calls with prospects to understand needs",
            "Schedule and conduct product demos for qualified opportunities",
            "Negotiate pilot contract terms and pricing",
            "Close pilot contracts and ensure successful onboarding"
          ],
          goals: [
            "Generate 20+ qualified enterprise leads",
            "Schedule 10+ discovery calls",
            "Conduct 6+ product demos",
            "Close 3 enterprise pilot contracts"
          ]
        }
      ]
    },
    {
      name: "Rajrajeshwari Gaware",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Rajrajeshwari1",
          respondentId: "Rajrajeshwari",
          submittedAt: "2025-01-10 10:00:00",
          name: "Rajrajeshwari Gaware",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Rajrajeshwari2",
          respondentId: "Rajrajeshwari",
          submittedAt: "2025-01-17 10:00:00",
          name: "Rajrajeshwari Gaware",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Rajrajeshwari3",
          respondentId: "Rajrajeshwari",
          submittedAt: "2025-01-24 10:00:00",
          name: "Rajrajeshwari Gaware",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Rajrajeshwari4",
          respondentId: "Rajrajeshwari",
          submittedAt: "2025-01-31 10:00:00",
          name: "Rajrajeshwari Gaware",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through demo-focused feedback collection",
        target: "Collect 100+ feedback items focused on demo quality to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Baseline demo quality assessment and feedback setup", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 3, goal: "Week 3: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & demo review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 6, goal: "Week 6: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & demo review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 9, goal: "Week 9: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & demo review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 12, goal: "Week 12: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 13, goal: "Q1 demo quality assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Demo-focused feedback items collected (target 100+ in Q1)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality score improvements",
          "UI/UX improvements for B2B demo effectiveness",
          "Engineering sprint planning support"
        ]
      },
      projects: [
        {
          title: "UI/UX Testing for Demo Enhancement",
          status: "active",
          startDate: "January 2026",
          description: "Focus UI/UX testing on features that enhance demo quality for B2B pilots, measuring improvements through PMF/NPS surveys.",
          scope: [
            "Test UI/UX improvements weekly with focus on demo-critical features",
            "Administer PMF and NPS surveys to measure improvement",
            "Collect enhancement ideas and bug fixes via feedback form (Google Sheets)",
            "Prioritize UI/UX improvements that enhance demo effectiveness",
            "Track NPS delta as key metric for product quality"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Improve demo quality scores through UI/UX enhancements",
            "Identify top UI/UX improvements for B2B demo effectiveness",
            "Support engineering sprint planning with prioritized feedback"
          ]
        }
      ]
    },
    {
      name: "Aditya Saini",
      roles: ["Product"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Aditya1",
          respondentId: "Aditya",
          submittedAt: "2025-01-10 10:00:00",
          name: "Aditya Saini",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Installed latest browser version from installations page. Conducted UI/UX testing session with users. Submitted feedback forms via AI assistant interface for bugs and enhancement ideas. Administered PMF and NPS surveys. Documented enhancement ideas in Google Sheets. Analyzed feedback for engineering prioritization."
        },
        {
          submissionId: "Aditya2",
          respondentId: "Aditya",
          submittedAt: "2025-01-17 10:00:00",
          name: "Aditya Saini",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Installed new weekly release from installations page. Tested new UI/UX iteration with focus on demo-critical features. Submitted feedback forms documenting bugs and enhancement ideas. Administered NPS survey and tracked delta. Collected user feedback via feedback form (consolidates to Google Sheets). Prioritized top improvements for sprint."
        },
        {
          submissionId: "Aditya3",
          respondentId: "Aditya",
          submittedAt: "2025-01-24 10:00:00",
          name: "Aditya Saini",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Installed latest weekly release from installations page. Conducted weekly UI/UX testing. Submitted feedback forms for bugs and enhancement ideas through AI assistant interface. Administered PMF survey to measure product-market fit. Documented bug fixes and enhancement ideas in Google Sheets. Collaborated with engineering on sprint priorities."
        },
        {
          submissionId: "Aditya4",
          respondentId: "Aditya",
          submittedAt: "2025-01-31 10:00:00",
          name: "Aditya Saini",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Installed new weekly release from installations page. Tested UI/UX improvements from previous sprint. Submitted feedback forms for new issues and ideas. Tracked NPS delta week-over-week. Collected user feedback and logged in Google Sheets. Completed PMF/NPS survey after testing. Verified implemented improvements with users."
        }
      ],
      q1Goals: {
        overview: "Enable +15 NPS through demo-focused feedback collection",
        target: "Collect 100+ feedback items focused on demo quality to enable +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Baseline demo quality assessment and feedback setup", metric: "Baseline NPS measured, feedback form ready" },
          { week: 2, goal: "Week 2: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 3, goal: "Week 3: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & demo review", metric: "NPS measured (target +3-5), 40+ total feedback items" },
          { week: 5, goal: "Week 5: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 6, goal: "Week 6: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & demo review", metric: "NPS measured (target +6-8), 80+ total feedback items" },
          { week: 8, goal: "Week 8: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 9, goal: "Week 9: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & demo review", metric: "NPS measured (target +9-11), 100+ total feedback items" },
          { week: 11, goal: "Week 11: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 12, goal: "Week 12: Demo-focused feedback collection", metric: "15+ demo-focused feedback items collected" },
          { week: 13, goal: "Q1 demo quality assessment", metric: "Final NPS measured (target +15), 100+ feedback items collected" }
        ],
        keyMetrics: [
          "Demo-focused feedback items collected (target 100+ in Q1)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality score improvements",
          "UI/UX improvements for B2B demo effectiveness",
          "Engineering sprint planning support"
        ]
      },
      projects: [
        {
          title: "UI/UX Testing for Demo Enhancement",
          status: "active",
          startDate: "January 2026",
          description: "Focus UI/UX testing on features that enhance demo quality for B2B pilots, measuring improvements through PMF/NPS surveys.",
          scope: [
            "Test UI/UX improvements weekly with focus on demo-critical features",
            "Administer PMF and NPS surveys to measure improvement",
            "Collect enhancement ideas and bug fixes via feedback form (Google Sheets)",
            "Prioritize UI/UX improvements that enhance demo effectiveness",
            "Track NPS delta as key metric for product quality"
          ],
          goals: [
            "Achieve positive NPS delta each week",
            "Improve demo quality scores through UI/UX enhancements",
            "Identify top UI/UX improvements for B2B demo effectiveness",
            "Support engineering sprint planning with prioritized feedback"
          ]
        }
      ]
    },
    {
      name: "Durgesh Tiwari",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Durgesh1",
          respondentId: "Durgesh",
          submittedAt: "2025-01-10 10:00:00",
          name: "Durgesh Tiwari",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Durgesh2",
          respondentId: "Durgesh",
          submittedAt: "2025-01-17 10:00:00",
          name: "Durgesh Tiwari",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Durgesh3",
          respondentId: "Durgesh",
          submittedAt: "2025-01-24 10:00:00",
          name: "Durgesh Tiwari",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Durgesh4",
          respondentId: "Durgesh",
          submittedAt: "2025-01-31 10:00:00",
          name: "Durgesh Tiwari",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through UI/UX sprint execution",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up sprint process and story point estimation", metric: "Baseline NPS, story point baseline established" },
          { week: 2, goal: "Week 2 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & sprint planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12 sprint", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final sprint", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality improvement",
          "Retention enhancement"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Weekly Sprints",
          status: "active",
          startDate: "January 2026",
          description: "Implement UI/UX improvements weekly using feedback from Google Sheets to enhance product quality, increase NPS, and improve demo effectiveness for B2B pilots.",
          scope: [
            "Review Google Sheets for enhancement ideas and bug fixes",
            "Organize and execute weekly sprints for UI/UX improvements",
            "Focus on demo-critical UI/UX enhancements",
            "Track NPS delta as primary success metric",
            "Create positive feedback loop with product team"
          ],
          goals: [
            "Complete UI/UX improvements each week",
            "Achieve positive NPS delta weekly",
            "Improve demo quality through better product polish",
            "Increase retention through UI/UX enhancements"
          ]
        }
      ]
    },
    {
      name: "Kaushik Shridhar",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Kaushik1",
          respondentId: "Kaushik",
          submittedAt: "2025-01-10 10:00:00",
          name: "Kaushik Shridhar",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Kaushik2",
          respondentId: "Kaushik",
          submittedAt: "2025-01-17 10:00:00",
          name: "Kaushik Shridhar",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Kaushik3",
          respondentId: "Kaushik",
          submittedAt: "2025-01-24 10:00:00",
          name: "Kaushik Shridhar",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Kaushik4",
          respondentId: "Kaushik",
          submittedAt: "2025-01-31 10:00:00",
          name: "Kaushik Shridhar",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through backend and API support for UI/UX improvements",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up backend support process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & review", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & review", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & review", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Backend support & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final backend support review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "API performance improvement",
          "Demo quality through better backend support"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Backend & API Support",
          status: "active",
          startDate: "January 2026",
          description: "Support UI/UX improvements by implementing backend and API changes based on feedback from Google Sheets to enhance product quality and demo effectiveness.",
          scope: [
            "Review enhancement ideas from Google Sheets feedback form",
            "Implement backend/API changes to support UI/UX improvements",
            "Focus on improvements that enhance demo quality",
            "Track NPS delta as key metric",
            "Iterate weekly based on product team feedback"
          ],
          goals: [
            "Complete backend/API support for UI/UX improvements weekly",
            "Achieve positive NPS delta through backend enhancements",
            "Improve demo quality through better API performance",
            "Support product team's weekly testing iterations"
          ]
        }
      ]
    },
    {
      name: "Pournami Pottekat",
      roles: ["Design"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Pournami1",
          respondentId: "Pournami",
          submittedAt: "2025-01-10 10:00:00",
          name: "Pournami Pottekat",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Created design mockups for UI/UX improvements. Collaborated with product and engineering teams. Designed user flows for new features. Maintained design system documentation."
        },
        {
          submissionId: "Pournami2",
          respondentId: "Pournami",
          submittedAt: "2025-01-17 10:00:00",
          name: "Pournami Pottekat",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Designed UI/UX improvements for command interface. Created visual mockups for engineering. Collaborated on design system updates. Reviewed implemented designs."
        },
        {
          submissionId: "Pournami3",
          respondentId: "Pournami",
          submittedAt: "2025-01-24 10:00:00",
          name: "Pournami Pottekat",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Designed new user flows for demo-critical features. Created design assets for UI improvements. Collaborated with product team on user testing. Updated design documentation."
        },
        {
          submissionId: "Pournami4",
          respondentId: "Pournami",
          submittedAt: "2025-01-31 10:00:00",
          name: "Pournami Pottekat",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Designed UI/UX enhancements from feedback. Created design mockups for sprint. Collaborated with engineering on implementation. Reviewed design quality and consistency."
        }
      ],
      q1Goals: {
        overview: "Support NPS increase through UX improvements",
        target: "Complete 10+ design mockups, update design system, and design 5+ user flows to support +15 NPS",
        weeklyBreakdown: [
          { week: 1, goal: "Complete UX audit", metric: "Audit complete, priorities identified" },
          { week: 2, goal: "Week 2: Design mockups for top UX improvements", metric: "1+ mockup completed" },
          { week: 3, goal: "Week 3: Design mockups for top UX improvements", metric: "1+ mockup completed" },
          { week: 4, goal: "Week 4: Design system update & review", metric: "Design system updated, 3+ mockups total" },
          { week: 5, goal: "Week 5: Design user flows for demo features", metric: "1+ user flow designed" },
          { week: 6, goal: "Week 6: Design mockups for top UX improvements", metric: "1+ mockup completed" },
          { week: 7, goal: "Week 7: Design system update & review", metric: "Design system updated, 6+ mockups total" },
          { week: 8, goal: "Week 8: Design user flows for demo features", metric: "1+ user flow designed" },
          { week: 9, goal: "Week 9: Design mockups for top UX improvements", metric: "1+ mockup completed" },
          { week: 10, goal: "Week 10: Design system update & review", metric: "Design system updated, 8+ mockups total" },
          { week: 11, goal: "Week 11: Design user flows for demo features", metric: "1+ user flow designed" },
          { week: 12, goal: "Week 12: Design mockups for top UX improvements", metric: "1+ mockup completed" },
          { week: 13, goal: "Q1 UX review", metric: "10+ mockups, 5+ user flows, design system updated" }
        ],
        keyMetrics: [
          "Design mockups created (target 10+ in Q1)",
          "User flows designed (target 5+ in Q1)",
          "Design system updates (target 3+ in Q1)",
          "UX improvements designed (target 5+ features)",
          "Support for +15 NPS (indirect metric)"
        ]
      },
      projects: [
        {
          title: "User Experience Improvements",
          status: "active",
          startDate: "January 2026",
          description: "Identify and design UX improvements to enhance user satisfaction and engagement.",
          scope: [
            "Conduct UX audits and identify pain points",
            "Design improved user flows for key features",
            "Create wireframes and prototypes for UX improvements",
            "Collaborate with product and engineering on implementation"
          ],
          goals: [
            "Complete UX audit and recommendations",
            "Design 5+ UX improvements",
            "Improve user satisfaction scores"
          ]
        }
      ]
    },
    {
      name: "Shloka Hajare",
      roles: ["Product Marketing"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Shloka1",
          respondentId: "Shloka",
          submittedAt: "2025-01-10 10:00:00",
          name: "Shloka Hajare",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Created social media content and posted daily. Engaged with community on Product Hunt. Supported content marketing initiatives. Tracked sign-ups and conversion metrics."
        },
        {
          submissionId: "Shloka2",
          respondentId: "Shloka",
          submittedAt: "2025-01-17 10:00:00",
          name: "Shloka Hajare",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Generated social media content ideas. Created engaging posts for Twitter and LinkedIn. Engaged with online communities. Tracked subscriber growth from content."
        },
        {
          submissionId: "Shloka3",
          respondentId: "Shloka",
          submittedAt: "2025-01-24 10:00:00",
          name: "Shloka Hajare",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Developed new content series themes. Created visual content for social media. Supported Product Hunt campaign. Analyzed content performance metrics."
        },
        {
          submissionId: "Shloka4",
          respondentId: "Shloka",
          submittedAt: "2025-01-31 10:00:00",
          name: "Shloka Hajare",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Continued content creation and distribution. Engaged with community on Product Hunt. Created content calendar for February. Tracked sign-ups and conversion rates."
        }
      ],
      q1Goals: {
        overview: "Drive subscriber growth through Product Hunt campaign",
        target: "Generate 100+ sign-ups from Product Hunt launch",
        weeklyBreakdown: [
          { week: 1, goal: "Coordinate launch preparation", metric: "Planning complete" },
          { week: 2, goal: "Week 2 launch coordination", metric: "Progress tracking" },
          { week: 3, goal: "Week 3 launch coordination", metric: "Progress tracking" },
          { week: 4, goal: "Product Hunt launch day", metric: "100+ sign-ups" },
          { week: 5, goal: "Post-launch engagement", metric: "Community building" },
          { week: 6, goal: "Week 6 campaign follow-up", metric: "Ongoing growth" },
          { week: 7, goal: "Week 7 campaign follow-up", metric: "Ongoing growth" },
          { week: 8, goal: "Week 8 campaign follow-up", metric: "Ongoing growth" },
          { week: 9, goal: "Week 9 campaign follow-up", metric: "Ongoing growth" },
          { week: 10, goal: "Week 10 campaign follow-up", metric: "Ongoing growth" },
          { week: 11, goal: "Week 11 campaign follow-up", metric: "Ongoing growth" },
          { week: 12, goal: "Week 12 campaign follow-up", metric: "Ongoing growth" },
          { week: 13, goal: "Q1 campaign review", metric: "Subscriber growth achieved" }
        ],
        keyMetrics: [
          "Product Hunt sign-ups (target 100+)",
          "Top 5 product of the day achievement",
          "Launch day engagement",
          "Community building from launch"
        ]
      },
      projects: [
        {
          title: "Product Hunt Campaign",
          status: "active",
          startDate: "January 2026",
          description: "Lead and execute Oasis Browser's Product Hunt launch campaign to drive initial subscriber acquisition and visibility.",
          scope: [
            "Coordinate Product Hunt launch day activities and engagement",
            "Prepare launch day content, messaging, and community engagement strategy",
            "Manage launch day posting schedule and team coordination",
            "Track metrics and follow up with Product Hunt community"
          ],
          goals: [
            "Launch on Product Hunt and achieve top 5 product of the day",
            "Generate 100+ sign-ups from Product Hunt launch",
            "Build initial community of early adopters from launch"
          ]
        }
      ]
    },
    {
      name: "Revanth Ganga",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Revanth1",
          respondentId: "Revanth",
          submittedAt: "2025-01-10 10:00:00",
          name: "Revanth Ganga",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Revanth2",
          respondentId: "Revanth",
          submittedAt: "2025-01-17 10:00:00",
          name: "Revanth Ganga",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Revanth3",
          respondentId: "Revanth",
          submittedAt: "2025-01-24 10:00:00",
          name: "Revanth Ganga",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Revanth4",
          respondentId: "Revanth",
          submittedAt: "2025-01-31 10:00:00",
          name: "Revanth Ganga",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through testing and QA for UI/UX improvements",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up QA process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & QA review", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & QA review", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & QA review", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: QA testing & bug identification", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final QA testing review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Quality standards maintained",
          "Regression prevention"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Testing & QA",
          status: "active",
          startDate: "January 2026",
          description: "Test UI/UX improvements and ensure quality before release, supporting weekly iterations that enhance NPS and demo effectiveness.",
          scope: [
            "Test UI/UX improvements implemented each week",
            "Write tests for new UI/UX features to prevent regressions",
            "Ensure quality of improvements before product team testing",
            "Support product team's PMF/NPS survey process",
            "Track NPS delta as quality metric"
          ],
          goals: [
            "Test all UI/UX improvements before release",
            "Maintain high quality standards for weekly iterations",
            "Support positive NPS delta through quality assurance",
            "Prevent regressions in UI/UX improvements"
          ]
        }
      ]
    },
    {
      name: "Akalpit Dawkhar",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Akalpit1",
          respondentId: "Akalpit",
          submittedAt: "2025-01-10 10:00:00",
          name: "Akalpit Dawkhar",
          date: "2025-01-03",
          hours: 20,
          description: "Week of Dec 30 - Jan 3. Reviewed feedback Google Sheet and organized items into sprint. Created sprint plan in Notion with story point estimates. Implemented UI/UX improvements from Google Sheets feedback. Fixed bugs identified through testing. Participated in sprint planning meeting. Executed story points and completed sprint tasks. Reviewed and prioritized enhancement ideas."
        },
        {
          submissionId: "Akalpit2",
          respondentId: "Akalpit",
          submittedAt: "2025-01-17 10:00:00",
          name: "Akalpit Dawkhar",
          date: "2025-01-10",
          hours: 20,
          description: "Week of Jan 6-10. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Developed new UI/UX features for command interface. Fixed critical bugs from feedback. Attended engineering standup. Executed story points and completed sprint tasks. Implemented performance optimizations."
        },
        {
          submissionId: "Akalpit3",
          respondentId: "Akalpit",
          submittedAt: "2025-01-24 10:00:00",
          name: "Akalpit Dawkhar",
          date: "2025-01-17",
          hours: 20,
          description: "Week of Jan 13-17. Reviewed feedback Google Sheet and organized items into weekly sprint. Created sprint plan in Notion with story point estimates. Worked on UI/UX improvements for demo quality. Fixed infrastructure issues. Participated in sprint planning. Executed story points and completed sprint. Reviewed NPS delta and prioritized improvements."
        },
        {
          submissionId: "Akalpit4",
          respondentId: "Akalpit",
          submittedAt: "2025-01-31 10:00:00",
          name: "Akalpit Dawkhar",
          date: "2025-01-24",
          hours: 20,
          description: "Week of Jan 20-24. Reviewed feedback Google Sheet and organized new sprint items. Estimated story points and created sprint plan in Notion. Implemented UI/UX enhancements from product team feedback. Fixed bugs and improved performance. Attended engineering standup. Executed story points and completed sprint tasks. Coordinated with product team on priorities."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through command interface improvements",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up interface improvement process and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & planning", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & planning", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & planning", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Command interface improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final interface improvements review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Demo quality through better interface",
          "User satisfaction increase"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Command Interface",
          status: "active",
          startDate: "January 2026",
          description: "Improve UI/UX of command interface and natural language interactions weekly based on feedback from Google Sheets to enhance demo quality.",
          scope: [
            "Review enhancement ideas from Google Sheets feedback form",
            "Implement UI/UX improvements for command interface",
            "Focus on improvements that enhance demo effectiveness",
            "Track NPS delta as key metric",
            "Iterate weekly based on product team PMF/NPS surveys"
          ],
          goals: [
            "Complete UI/UX improvements for command interface weekly",
            "Achieve positive NPS delta through interface improvements",
            "Improve demo quality through better command UI/UX",
            "Increase user satisfaction through interface enhancements"
          ]
        }
      ]
    },
    {
      name: "Saideep Pajjuri",
      roles: ["Engineering"],
      employmentStatus: "intern",
      hoursPerWeek: 20,
      timeLogs: [
        {
          submissionId: "Gxr2pkO",
          respondentId: "vZlvK8",
          submittedAt: "2025-07-03 6:55:51",
          name: "Saideep Pajjuri",
          date: "2025-06-27",
          hours: 20,
          description: "Week of June 23-27. Worked on enterprise browser development using Electron.js, focusing on building AI-powered productivity features. Implemented UI/UX improvements from feedback. Collaborated closely with team members during product development meetings and maintained codebase integrity through Git-based version control."
        },
        {
          submissionId: "Gxr2pkO2",
          respondentId: "vZlvK8",
          submittedAt: "2025-07-10 6:55:51",
          name: "Saideep Pajjuri",
          date: "2025-07-04",
          hours: 20,
          description: "Week of June 30 - July 4. Implemented UI/UX improvements from Google Sheets feedback. Fixed 3 critical bugs related to command interface. Participated in sprint planning meeting. Wrote tests for new analytics tracking features."
        },
        {
          submissionId: "Gxr2pkO3",
          respondentId: "vZlvK8",
          submittedAt: "2025-07-17 6:55:51",
          name: "Saideep Pajjuri",
          date: "2025-07-11",
          hours: 20,
          description: "Week of July 7-11. Developed analytics dashboard for NPS tracking. Implemented UI/UX improvements for demo quality. Fixed infrastructure issues with CI/CD pipeline. Attended product team meeting to discuss feedback prioritization."
        },
        {
          submissionId: "Gxr2pkO4",
          respondentId: "vZlvK8",
          submittedAt: "2025-07-24 6:55:51",
          name: "Saideep Pajjuri",
          date: "2025-07-18",
          hours: 20,
          description: "Week of July 14-18. Focused on analytics and tracking implementation. Completed UI/UX improvements for command interface. Participated in sprint review meeting. Fixed bugs identified during testing phase."
        }
      ],
      q1Goals: {
        overview: "Increase NPS through analytics and tracking for UI/UX improvements",
        target: "Deliver 240+ story points across Q1 (20+ per sprint) to support +15 NPS by end of Q1",
        weeklyBreakdown: [
          { week: 1, goal: "Set up analytics tracking and story point estimation", metric: "Baseline NPS, process defined, story point baseline established" },
          { week: 2, goal: "Week 2: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 3, goal: "Week 3: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 4, goal: "Week 4: Bi-weekly NPS check & analytics review", metric: "NPS measured (target +3-5), sprint planned: 20+ story points estimated" },
          { week: 5, goal: "Week 5: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 6, goal: "Week 6: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 7, goal: "Week 7: Bi-weekly NPS check & analytics review", metric: "NPS measured (target +6-8), sprint planned: 20+ story points estimated" },
          { week: 8, goal: "Week 8: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 9, goal: "Week 9: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 10, goal: "Week 10: Bi-weekly NPS check & analytics review", metric: "NPS measured (target +9-11), sprint planned: 20+ story points estimated" },
          { week: 11, goal: "Week 11: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 12, goal: "Week 12: Analytics improvements & bug fixes", metric: "Sprint completed: 20+ story points delivered" },
          { week: 13, goal: "Q1 final analytics & improvements review", metric: "Final NPS (target +15), 240+ total story points delivered" }
        ],
        keyMetrics: [
          "Story points delivered per sprint (target 20+)",
          "Story points estimated vs delivered (velocity tracking)",
          "Sprint completion rate (target 90%+)",
          "NPS delta bi-weekly (supporting metric)",
          "Analytics dashboards created",
          "Data-driven prioritization support"
        ]
      },
      projects: [
        {
          title: "UI/UX Improvements - Analytics & Tracking",
          status: "active",
          startDate: "January 2026",
          description: "Implement UI/UX improvements weekly and track NPS/metrics to measure impact, supporting the feedback loop that increases product quality and demo effectiveness.",
          scope: [
            "Review enhancement ideas from Google Sheets feedback form",
            "Implement UI/UX improvements with analytics tracking",
            "Track NPS delta and product metrics for UI/UX changes",
            "Create dashboards for NPS trends and improvement impact",
            "Support product team's weekly testing and survey process"
          ],
          goals: [
            "Complete UI/UX improvements weekly",
            "Track NPS delta and report trends",
            "Measure impact of UI/UX improvements on product quality",
            "Support data-driven UI/UX prioritization"
          ]
        }
      ]
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Team, Execution & Milestones</h1>
      </div>

      <section className="page-section">
        <h2>Executive Summary</h2>
        <div className="content-block">
          <h3>Average Monthly Burn - Tools & Platform Subscriptions</h3>
          <p>
            The following monthly costs are included in our average monthly burn for subscriptions to tools and platforms:
          </p>
          <ul className="feature-list">
            <li><strong>G-Suite:</strong> $26.00/month</li>
            <li><strong>Google Cloud (Firebase storage & database reads):</strong> $25.00/month</li>
            <li><strong>GitHub:</strong> $12.00/month</li>
            <li><strong>Heroku:</strong> $25.00/month</li>
            <li><strong>Figma:</strong> $61.50/month</li>
            <li><strong>AWS:</strong> $15.00/month (EC2 and Lambda functions)</li>
            <li><strong>Gemini API:</strong> Usage-based pricing (Pay-as-you-go tier). Primarily billed per 1 million tokens for input/output. Models like Gemini 2.5 Pro and Flash have different rates, with tiered pricing for larger contexts. Free tiers available for testing through Google AI Studio with usage limits. Pricing varies between Google AI Studio and Vertex AI, with additional costs for advanced features like grounding and context caching. Reference: <a href="https://ai.google.dev/pricing" target="_blank" rel="noopener noreferrer">Gemini API Pricing</a></li>
            <li><strong>Deepgram API:</strong> Usage-based pricing varying by model. Speech-to-text models: Flux and Nova-3 (Monolingual) at $0.0077/min, Nova-3 (Multilingual) at $0.0092/min, Nova-1 & 2 at $0.0058/min, Enhanced at $0.0165/min, Base at $0.0145/min. Voice Agent API: Standard tier at $0.0800/min (pay-as-you-go). Billed per second for fairness. Free tier available with $200 credit. Custom enterprise pricing and volume discounts available. Reference: <a href="https://deepgram.com/pricing" target="_blank" rel="noopener noreferrer">Deepgram Pricing</a></li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Oasis AI Assistant API Costs</h3>
          <p>
            Gemini and Deepgram APIs power the Oasis AI assistant. Costs are incurred whenever the assistant processes a command. Based on current usage patterns and API pricing:
          </p>
          <ul className="feature-list">
            <li><strong>Text command:</strong> $0.002 per request (all-in cost including AWS, Gemini, and Deepgram)</li>
            <li><strong>Voice command:</strong> $0.02 per request (all-in cost including AWS, Gemini, and Deepgram)</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            <strong>Note:</strong> These are example ballpark numbers based on current usage patterns. Actual costs should be calculated from AWS, Gemini, and Deepgram invoices to determine the true average cost per request.
          </p>

          <h3 style={{ marginTop: '30px' }}>Capacity Planning with $3/month Budget</h3>
          <p>
            With the example unit costs above, a $3/month budget for AI assistant usage would support:
          </p>
          <ul className="feature-list">
            <li><strong>Text-only usage:</strong> ~1,500 text commands per month ($3 / $0.002 = 1,500 commands)</li>
            <li><strong>Voice-only usage:</strong> ~150 voice commands per month ($3 / $0.02 = 150 commands)</li>
            <li><strong>Mixed usage:</strong> A combination where each voice command uses approximately 10x the budget of a text command</li>
          </ul>
          <p style={{ marginTop: '15px' }}>
            This capacity structure provides reasonable limits for users while maintaining cost control for the platform.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2>Team</h2>
        <div className="content-block">
          <p>
            The Oasis Browser team brings relevant experience across AI, browser technology, 
            productivity tools, and B2B SaaS. This combination enables deep product understanding, 
            technical execution, and go-to-market strategy.
          </p>
        </div>
        <TeamGallery teamMembers={teamMembers} />
      </section>

      <section className="page-section">
        <h2>Team Roles & Functions</h2>
        <div className="content-block">
          <h3>Current Team Roles</h3>
          <ul className="feature-list">
            <li><strong>Engineering:</strong> Core product development and infrastructure</li>
            <li><strong>Product:</strong> Feature definition, user research, roadmap planning</li>
            <li><strong>Product Marketing:</strong> Growth marketing, content creation, and subscriber acquisition</li>
            <li><strong>Design:</strong> UX/UI design and user experience optimization</li>
            <li><strong>Support:</strong> Customer success and technical support</li>
            <li><strong>Sales/BD:</strong> B2B pilot development and expansion</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Near-Term Hiring Plan</h3>
          <ul className="feature-list">
            <li>Additional engineering capacity for feature development</li>
            <li>Sales/BD resources for B2B pipeline development</li>
            <li>Customer success to support growing subscriber base</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>2026 Execution Roadmap</h2>
        <div className="content-block">
          <h3>Q1 2026: Foundation</h3>
          <ul className="feature-list">
            <li><strong>Product:</strong> Core command coverage, stability improvements</li>
            <li><strong>Growth:</strong> Launch on Product Hunt, initial subscriber acquisition</li>
            <li><strong>Organization:</strong> Key engineering hires, process establishment</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Q2 2026: Scale</h3>
          <ul className="feature-list">
            <li><strong>Product:</strong> Advanced features, Training feature launch for personalized AI improvement</li>
            <li><strong>Growth:</strong> B2B pilot program launch, content marketing ramp</li>
            <li><strong>Organization:</strong> Sales/BD hire, customer success processes</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Q3 2026: Optimize</h3>
          <ul className="feature-list">
            <li><strong>Product:</strong> Enterprise features, security enhancements</li>
            <li><strong>Growth:</strong> Pilot conversions, expansion deals</li>
            <li><strong>Organization:</strong> Process maturity, team scaling</li>
          </ul>

          <h3 style={{ marginTop: '30px' }}>Q4 2026: Accelerate</h3>
          <ul className="feature-list">
            <li><strong>Product:</strong> Advanced AI capabilities, integrations</li>
            <li><strong>Growth:</strong> Multi-team deployments, enterprise pipeline</li>
            <li><strong>Organization:</strong> Strategic hires, operational excellence</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Top-of-Funnel Strategy</h2>
        <div className="content-block">
          <p>
            Our primary focus is to funnel users towards our <strong>$20/month</strong> subscription plan. 
            We will operate a <strong>paid-only beta</strong> program, ensuring that users who join during 
            the beta period commit to the paid subscription.
          </p>
          <p>
            While the beta is primarily paid-only, we recognize that in some strategic instances, we may 
            provide free trial or freemium access. However, these exceptions will require users to complete 
            a form/application process. This gated approach ensures we maintain quality control and gather 
            valuable information about potential users while still allowing flexibility for strategic partnerships 
            or special programs.
          </p>
          <h3 style={{ marginTop: '30px' }}>Beta Access Model</h3>
          <ul className="feature-list">
            <li><strong>Primary Path:</strong> Direct sign-up for $20/month subscription</li>
            <li><strong>Beta Period:</strong> Paid-only access (no free tier during beta)</li>
            <li><strong>Exception Process:</strong> Free trials or freemium access available through application form</li>
            <li><strong>Application Requirements:</strong> Form completion required for any free access exceptions</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>Culture and Ways of Working</h2>
        <div className="content-block">
          <p>
            <strong>Product Development:</strong> We ship iteratively, gathering user feedback 
            continuously and prioritizing features that deliver measurable productivity gains.
          </p>
          <p>
            <strong>User Engagement:</strong> Direct engagement with users through community 
            channels, support interactions, and user research ensures we build what knowledge 
            workers actually need.
          </p>
          <p>
            <strong>B2C and B2B Balance:</strong> We maintain focus on both individual user 
            experience and enterprise requirements, ensuring the product serves both segments 
            effectively while leveraging the B2C2B motion.
          </p>
        </div>
      </section>
    </div>
  )
}

export default TeamExecution

