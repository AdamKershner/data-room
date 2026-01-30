import React, { useState, useMemo, useEffect } from 'react'
import './Page.css'
import './WeeklyReports.css'

function WeeklyReports() {
  // Weekly reports generated from time log data
  const [reports] = useState([
    {
      id: 0,
      week: '2026-01-26',
      weekLabel: 'Week of January 26, 2026',
      keyUpdates: [
        "Ashwin has enhanced the UI and codebase to closely match Pournami's advanced UI designs in Figma; enhancements are being completed and tested for a new release next week",
        "Onboarded new team members: Ammemah (Product), Ruturaj (Engineering), Ravi (Product), Ankit (Product Marketing), and Yaseer (Product)",
        "Shivangi and Ruhani resigned from the team",
        "Following next week's release (Windows and Mac), the team will conduct another round of testing followed by a team-wide NPS and PMF survey to establish an NPS baseline metric",
        '17 new feedbacks were submitted by the product team',
        'Sprint 6 (HITL) is on schedule to be completed next week',
        'Creating new sprints for Enterprise Browser features and a dedicated Chromium version of Oasis to address prospective client requirements',
        'Generated 6 new MQLs from high-intent enterprise visitors including Walgreens (Retail), Glean (AI/Search), and Middlesex Water Company (Utilities)',
        'Significant progress on Windows production build (Davis Victor - 41 hours logged)',
        'Advanced HITL (Human-in-the-Loop) implementation and database schema design (Revanth, Rushyanth - 50+ hours)',
        'Refined supervisor agent system prompts and RLHF research (Likhitha - 20 hours)',
        'Enhanced command interface UI/UX and bug fixes (Akalpit, Revanth)',
        'Expanded content operations with new editor onboarding and animation focus (Dhruv Patel)',
        'Completed Sprint 7 work and moved into parallel track reorganization for Sprints 8-10',
        'Initial assessment of enterprise browser requirements (Okta, Netskope DLP, Managed Sessions)'
      ],
      timeBreakdown: {
        'Product Development': 152.5,
        'HITL & Research': 96.0,
        'Marketing & Content': 45.0,
        'Operations & Admin': 25.0,
        'Learning & Training': 16.0
      },
      areasToImprove: [
        'Increase MQLs and SQLs per week (Product Marketing & Sales) through increased blog and YouTube video production',
        'Focus on high-value use cases: providing secure SaaS access for short-term consultants via managed browser (Okta/Netskope integration) without shipping hardware',
        'Maintain Windows build momentum for upcoming PM release',
        'Coordinate team-wide testing and NPS/PMF survey following next week\'s release'
      ],
      metrics: {
        totalHours: 334.5,
        teamMembers: 25,
        entries: 34,
        mqls: 6,
        sqls: 1,
        impressions: 50800,
        impressionsGrowth: -13.9,
        timeLogParticipation: 50.0,
        waitlistSignups: 141
      },
      quarterlyGoals: {
        nps: 0,
        pilots: 0,
        payingSubscribers: 0
      }
    },
    {
      id: 1,
      week: '2026-01-19',
      weekLabel: 'Week of January 19, 2026',
      keyUpdates: [
        'Generated 6 Marketing Qualified Leads (MQLs) from high-intent website visitors',
        'High-intent leads from enterprise organizations including CLP (Utilities - 5K-10K employees), Duke University (Education - 10K-50K employees), and City of Medford (Government)',
        'Enterprise visitor engagement: Eddie Wu (Deputy Director at CLP) viewed security guide, profile management docs, and enterprise browsers blog',
        'Education sector interest: Kenneth Rogerson (Associate Professor at Duke University) visited blog hub multiple times',
        'Early Access form submission from Elodie indicating product interest',
        'Significant progress on HITL (Human-in-the-Loop) framework research and implementation',
        'Revanth completed 25 hours on HITL best practices, DB design research, and demo implementation',
        'Likhitha enhanced system prompt for supervisor agent with tool descriptions and continued RLHF/DPO research',
        'Rushyanth worked on HITL implementation and product development tasks',
        'Aishwarya researched HITL framework use cases and tested browser functionality',
        'Windows build progress: Davis Victor completed 21 hours building Windows version across 3 days',
        'YouTube marketing strategy development: Shivangi Chamoli dedicated 20 hours to strategy work',
        'Content creation expansion: Dhruv Patel brought in 2 editors and approached a third editor with animation/design focus',
        'University outreach strategy and mail draft preparation',
        'Learning and sprint work: Agrima Gupta completed Sprint 6 work and team meetings',
        'Business plan review: Akansha reviewed Kahana 2026 business plan and sensitivity analysis',
        'Team coordination: Hasan Bohra had strategic conversations about Kahana history and sales strategy',
        'Continued learning activities across team members (30 hours logged)'
      ],
      timeBreakdown: {
        'HITL & Research': 76.0,
        'Marketing & Content': 42.0,
        'Learning & Training': 30.0,
        'Product Development': 26.0,
        'Operations & Admin': 20.0
      },
      areasToImprove: [
        'Follow up on high-intent enterprise leads (CLP, Duke University, City of Medford)',
        'Continue accelerating HITL framework implementation to enable product tester feedback loops',
        'Maintain momentum on Windows build to ensure timely PM release',
        'Scale content creation capacity with new editor onboarding',
        'Balance research activities with product development execution',
        'Increase time log participation to capture more comprehensive team activity'
      ],
      metrics: {
        totalHours: 194.0,
        teamMembers: 10,
        entries: 16,
        mqls: 6,
        sqls: 0,
        impressions: 46900,
        impressionsGrowth: -74.1,
        timeLogParticipation: 28.6,
        waitlistSignups: 138
      },
      quarterlyGoals: {
        nps: 0,
        pilots: 0,
        payingSubscribers: 0
      }
    },
    {
      id: 2,
      week: '2026-01-12',
      weekLabel: 'Week of January 12, 2026',
      keyUpdates: [
        'Generated strong lead activity: 15 MQLs (Marketing Qualified Leads)',
        'High-intent leads from enterprise organizations including Charles Schwab, IBM, Meta, AT&T, and Duke Health',
        'Multiple form submissions including Early Access requests and enterprise inquiries',
        'Product testing and feedback collection across multiple team members',
        'Windows packaging completed for PM release - ready for distribution',
        'Critical bug fixes including assistant recursion error resolution',
        'Design iterations and feedback compilation with sprint revisions',
        'GTM plan initiatives mapped and coordinated with team members',
        'Sprint planning and execution across multiple teams (Sprints 1, 2, 4)',
        'Research on LLM training methods for HITL (DPO method)',
        'CRM design and enterprise org chart research for B2B targeting',
        'Team outreach and networking activities to improve collaboration',
        'Competitive analysis and market research for inbound channel optimization',
        'Learning and training activities across team members (55 hours logged)',
        'Held strategic 1:1 meetings with engineering team and leadership',
        'Prepared and scheduled LinkedIn content for upcoming week'
      ],
      timeBreakdown: {
        'Product Development': 290.0,
        'Marketing & Content': 65.0,
        'Learning & Training': 55.0,
        'Design': 13.0,
        'Research': 20.0
      },
      areasToImprove: [
        'Continue improving time log participation rate across all team members',
        'Follow up on high-intent enterprise leads (Charles Schwab, IBM, Meta, AT&T)',
        'Maintain focus on product quality through comprehensive testing',
        'Accelerate GTM execution and marketing initiatives',
        'Streamline sprint planning to reduce coordination overhead'
      ],
      metrics: {
        totalHours: 423.0,
        teamMembers: 21,
        entries: 40,
        mqls: 15,
        sqls: 0,
        impressions: 174700,
        impressionsGrowth: 28.9,
        timeLogParticipation: 56.8
      },
      quarterlyGoals: {
        nps: 0,
        pilots: 0,
        payingSubscribers: 0
      }
    },
    {
      id: 3,
      week: '2026-01-05',
      weekLabel: 'Week of January 5, 2026',
      keyUpdates: [
        'Achieved 174.7K impressions with 28.9% increase in marketing reach',
        'Set up Mixpanel analytics integration and testing environment',
        'Team-wide review of 2026 business plan and sensitivity analysis',
        'Continued Firefox Oasis build setup, troubleshooting, and Windows packaging',
        'Developed YouTube marketing strategy and content creation framework',
        'Conducted extensive B2B outreach including conversations with Votive and Charles Schwab',
        'Worked on security infrastructure including Microsoft Entra ID provisioning'
      ],
      timeBreakdown: {
        'B2B Sales & Outreach': 155.0,
        'Product Development': 137.5,
        'Marketing & Content': 56.5,
        'Design': 6.0,
        'Operations & Admin': 1.0
      },
      areasToImprove: [
        'Improve coordination across large team to maximize productivity',
        'Balance time between B2B outreach and product development',
        'Continue streamlining onboarding and administrative processes'
      ],
      metrics: {
        totalHours: 356.0,
        teamMembers: 18,
        entries: 28,
        impressions: 174700,
        impressionsGrowth: 28.9,
        timeLogParticipation: 45.9,
        mqls: 0,
        sqls: 0
      },
      quarterlyGoals: {
        nps: 0,
        pilots: 0,
        payingSubscribers: 0
      }
    },
    {
      id: 4,
      week: '2025-12-29',
      weekLabel: 'Week of December 29, 2025',
      keyUpdates: [
        'Set up Mixpanel analytics integration and testing in local environment',
        'Conducted introductory meetings to introduce Kahana and company mission',
        'Team began comprehensive review of 2026 business plan and strategic direction'
      ],
      timeBreakdown: {
        'Operations & Admin': 50.0,
        'Marketing & Content': 21.0
      },
      areasToImprove: [
        'Reduce time spent on administrative tasks to focus more on core product work',
        'Increase focus on product development activities',
        'Continue tracking time allocation to optimize team productivity'
      ],
      metrics: {
        totalHours: 71.0,
        teamMembers: 2,
        entries: 2,
        timeLogParticipation: 5.4,
        mqls: 0,
        sqls: 0
      },
      quarterlyGoals: {
        nps: 0,
        pilots: 0,
        payingSubscribers: 0
      }
    }
  ])

  const [selectedWeek, setSelectedWeek] = useState('all')
  const [expandedReportId, setExpandedReportId] = useState(reports.length > 0 ? reports[0].id : null)

  // Get unique weeks for filter dropdown
  const availableWeeks = useMemo(() => {
    const weeks = reports.map(r => ({ value: r.week, label: r.weekLabel }))
    return [{ value: 'all', label: 'All Weeks' }, ...weeks]
  }, [reports])

  // Filter reports based on selected week
  const filteredReports = useMemo(() => {
    if (selectedWeek === 'all') {
      return reports
    }
    return reports.filter(r => r.week === selectedWeek)
  }, [reports, selectedWeek])

  // Update expanded report when filter changes
  useEffect(() => {
    if (filteredReports.length > 0) {
      // If current expanded report is not in filtered list, expand first one
      const isExpandedInFiltered = filteredReports.some(r => r.id === expandedReportId)
      if (!isExpandedInFiltered) {
        setExpandedReportId(filteredReports[0].id)
      }
    }
  }, [filteredReports, expandedReportId])

  // Handle accordion toggle
  const toggleReport = (reportId) => {
    setExpandedReportId(expandedReportId === reportId ? null : reportId)
  }

  // Calculate the Monday-Friday business week range for a given week date
  // The weekDate should represent the Monday of that week (format: YYYY-MM-DD)
  const getBusinessWeekRange = (weekDate) => {
    // Parse the date string to avoid timezone issues
    const [year, month, day] = weekDate.split('-').map(Number)
    const monday = new Date(year, month - 1, day)
    
    // Friday is 4 days after Monday
    const friday = new Date(monday)
    friday.setDate(monday.getDate() + 4)
    
    const formatDate = (d) => {
      return d.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric'
      })
    }
    
    return `${formatDate(monday)} - ${formatDate(friday)}`
  }

  // Calculate total time percentages for display
  const calculateTimePercentages = (breakdown) => {
    const total = Object.values(breakdown).reduce((sum, val) => sum + val, 0)
    return Object.entries(breakdown).map(([key, value]) => ({
      category: key,
      hours: value,
      percentage: ((value / total) * 100).toFixed(1)
    }))
  }

  // Get previous week's report for comparison
  const getPreviousWeekReport = (currentReport) => {
    // Sort reports by week (most recent first)
    const sortedReports = [...reports].sort((a, b) => new Date(b.week) - new Date(a.week))
    const currentIndex = sortedReports.findIndex(r => r.id === currentReport.id)
    
    if (currentIndex < sortedReports.length - 1) {
      return sortedReports[currentIndex + 1]
    }
    return null
  }

  // Calculate change from previous week
  const calculateChange = (currentValue, previousValue) => {
    if (previousValue === null || previousValue === undefined) {
      return null
    }
    return currentValue - previousValue
  }

  // Format change for display
  const formatChange = (change) => {
    if (change === null) return null
    if (change === 0) return '0'
    return change > 0 ? `+${change}` : `${change}`
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Weekly Reports</h1>
        <p className="page-subtitle">
          Weekly updates on key progress, team time allocation, and areas for improvement
        </p>
      </div>

      <section className="page-section">
        <div className="reports-filter">
          <label htmlFor="week-filter">Filter by Week:</label>
          <select
            id="week-filter"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="week-select"
          >
            {availableWeeks.map(week => (
              <option key={week.value} value={week.value}>
                {week.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {filteredReports.length === 0 ? (
        <section className="page-section">
          <div className="content-block">
            <p>No reports found for the selected week.</p>
          </div>
        </section>
      ) : (
        filteredReports.map(report => {
          const isExpanded = expandedReportId === report.id
          return (
            <section key={report.id} className={`page-section weekly-report ${isExpanded ? 'expanded' : 'collapsed'}`}>
              <div 
                className="report-header clickable"
                onClick={() => toggleReport(report.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleReport(report.id)
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div className="report-header-content">
                  <h2>{report.weekLabel}</h2>
                  <span className="report-date">{getBusinessWeekRange(report.week)}</span>
                </div>
                <div className={`accordion-icon ${isExpanded ? 'expanded' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={`report-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
              {/* Key Updates */}
              <div className="report-section">
                <h3>Key Updates</h3>
                <ul className="updates-list">
                  {report.keyUpdates.map((update, index) => (
                    <li key={index}>{update}</li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="report-section">
                <h3>Key Weekly Metrics</h3>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-value">{report.metrics.totalHours}</div>
                    <div className="metric-label">Total Hours Logged</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">{report.metrics.teamMembers}</div>
                    <div className="metric-label">Team Members</div>
                  </div>
                  {report.metrics.timeLogParticipation !== undefined && (
                    <div className="metric-card">
                      <div className="metric-value">{report.metrics.timeLogParticipation.toFixed(1)}%</div>
                      <div className="metric-label">Time Log Participation</div>
                    </div>
                  )}
                  {report.metrics.mqls !== undefined && (
                    <div className="metric-card">
                      <div className="metric-value">{report.metrics.mqls}</div>
                      <div className="metric-label">MQLs</div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        marginTop: '4px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontStyle: 'italic'
                      }}>
                        Marketing Qualified Leads
                      </div>
                    </div>
                  )}
                  {report.metrics.sqls !== undefined && (
                    <div className="metric-card">
                      <div className="metric-value">{report.metrics.sqls}</div>
                      <div className="metric-label">SQLs</div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        marginTop: '4px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontStyle: 'italic'
                      }}>
                        Sales Qualified Leads
                      </div>
                    </div>
                  )}
                  {report.metrics.enterpriseAccounts && (
                    <div className="metric-card">
                      <div className="metric-value">{report.metrics.enterpriseAccounts}</div>
                      <div className="metric-label">Enterprise Accounts</div>
                    </div>
                  )}
                  {report.metrics.impressions && (
                    <div className="metric-card">
                      <div className="metric-value">
                        {(report.metrics.impressions / 1000).toFixed(1)}K
                      </div>
                      <div className="metric-label">
                        Impressions
                        {report.metrics.impressionsGrowth && (
                          <span style={{ 
                            display: 'block', 
                            fontSize: '0.75rem', 
                            marginTop: '4px',
                            color: 'rgba(255, 255, 255, 0.9)'
                          }}>
                            {report.metrics.impressionsGrowth > 0 ? '↑' : '↓'} {Math.abs(report.metrics.impressionsGrowth)}%
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {report.metrics.waitlistSignups !== undefined && (
                    <div className="metric-card">
                      <div className="metric-value">{report.metrics.waitlistSignups}</div>
                      <div className="metric-label">Total Waitlist Signups</div>
                    </div>
                  )}
                  {!report.metrics.mqls && !report.metrics.impressions && !report.metrics.timeLogParticipation && !report.metrics.waitlistSignups && (
                    <>
                      <div className="metric-card">
                        <div className="metric-value">{report.metrics.entries}</div>
                        <div className="metric-label">Time Entries</div>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">{Object.keys(report.timeBreakdown).length}</div>
                        <div className="metric-label">Categories</div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Time Breakdown */}
              <div className="report-section">
                <h3>Time Breakdown</h3>
                <p className="section-description">
                  How the team allocated time across different activities this week
                </p>
                <div className="time-breakdown">
                  {calculateTimePercentages(report.timeBreakdown).map((item, index) => (
                    <div key={index} className="time-item">
                      <div className="time-item-header">
                        <span className="time-category">{item.category}</span>
                        <span className="time-stats">
                          {item.hours}h ({item.percentage}%)
                        </span>
                      </div>
                      <div className="time-bar-container">
                        <div 
                          className="time-bar" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quarterly Goals */}
              {(() => {
                const previousWeek = getPreviousWeekReport(report)
                const npsChange = calculateChange(report.quarterlyGoals.nps, previousWeek?.quarterlyGoals?.nps)
                const pilotsChange = calculateChange(report.quarterlyGoals.pilots, previousWeek?.quarterlyGoals?.pilots)
                const subscribersChange = calculateChange(report.quarterlyGoals.payingSubscribers, previousWeek?.quarterlyGoals?.payingSubscribers)
                
                return (
                  <div className="report-section">
                    <h3>Quarterly Goals</h3>
                    <p className="section-description">
                      Progress toward Q1 2026 goals: NPS improvement, enterprise pilots, and paying subscribers
                    </p>
                    <div className="metrics-grid">
                      <div className="metric-card">
                        <div className="metric-value">{report.quarterlyGoals.nps}</div>
                        <div className="metric-label">NPS</div>
                        {npsChange !== null && (
                          <div style={{ 
                            fontSize: '0.75rem', 
                            marginTop: '4px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: '500'
                          }}>
                            {formatChange(npsChange)} from last week
                          </div>
                        )}
                        <div style={{ 
                          fontSize: '0.75rem', 
                          marginTop: npsChange !== null ? '2px' : '4px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontStyle: 'italic'
                        }}>
                          Baseline not calculated
                        </div>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">{report.quarterlyGoals.pilots}</div>
                        <div className="metric-label">Enterprise Pilots</div>
                        {pilotsChange !== null && (
                          <div style={{ 
                            fontSize: '0.75rem', 
                            marginTop: '4px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: '500'
                          }}>
                            {formatChange(pilotsChange)} from last week
                          </div>
                        )}
                        <div style={{ 
                          fontSize: '0.75rem', 
                          marginTop: pilotsChange !== null ? '2px' : '4px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontStyle: 'italic'
                        }}>
                          Target: 3 pilots
                        </div>
                      </div>
                      <div className="metric-card">
                        <div className="metric-value">{report.quarterlyGoals.payingSubscribers}</div>
                        <div className="metric-label">Paying Subscribers</div>
                        {subscribersChange !== null && (
                          <div style={{ 
                            fontSize: '0.75rem', 
                            marginTop: '4px',
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontWeight: '500'
                          }}>
                            {formatChange(subscribersChange)} from last week
                          </div>
                        )}
                        <div style={{ 
                          fontSize: '0.75rem', 
                          marginTop: subscribersChange !== null ? '2px' : '4px',
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontStyle: 'italic'
                        }}>
                          $20/month plan
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}

              {/* Areas to Improve */}
              <div className="report-section">
                <h3>Areas to Improve</h3>
                <ul className="improvements-list">
                  {report.areasToImprove.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </div>
              </div>
            </section>
          )
        })
      )}

      {filteredReports.length > 0 && (
        <section className="page-section">
          <div className="content-block">
            <p className="reports-note">
              <strong>Note:</strong> Weekly reports are updated every Friday with the respective week's data. 
              Historical reports are archived and available for review.
            </p>
          </div>
        </section>
      )}
    </div>
  )
}

export default WeeklyReports
