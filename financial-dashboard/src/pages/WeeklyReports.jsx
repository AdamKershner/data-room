import React, { useState, useMemo, useEffect } from 'react'
import './Page.css'
import './WeeklyReports.css'

function WeeklyReports() {
  // Weekly reports generated from time log data
  const [reports] = useState([
    {
      id: 1,
      week: '2026-01-12',
      weekLabel: 'Week of January 12, 2026',
      keyUpdates: [
        'Generated strong lead activity: 15 MQLs (Marketing Qualified Leads)',
        'High-intent leads from enterprise organizations including Charles Schwab, IBM, Meta, AT&T, and Duke Health',
        'Multiple form submissions including Early Access requests and enterprise inquiries',
        'Continued Firefox Oasis build setup and troubleshooting across multiple platforms',
        'Research on LLM training methods for HITL (DPO method) and document preparation',
        'Held strategic 1:1 meetings with engineering team and leadership',
        'Prepared and scheduled LinkedIn content for upcoming week'
      ],
      timeBreakdown: {
        'Product Development': 34.0,
        'B2B Sales & Outreach': 20.0
      },
      areasToImprove: [
        'Continue tracking time allocation to optimize team productivity',
        'Follow up on high-intent enterprise leads (Charles Schwab, IBM, Meta, AT&T)',
        'Maintain focus on high-impact activities aligned with business goals'
      ],
      metrics: {
        totalHours: 54.0,
        teamMembers: 3,
        entries: 4,
        mqls: 15,
        sqls: 0,
        impressions: 174700,
        impressionsGrowth: 28.9,
        timeLogParticipation: 8.1
      },
      quarterlyGoals: {
        nps: 0,
        pilots: 0,
        payingSubscribers: 0
      }
    },
    {
      id: 2,
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
      id: 3,
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
                  <span className="report-date">{new Date(report.week).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
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
                            ↑ {report.metrics.impressionsGrowth}%
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {!report.metrics.mqls && !report.metrics.impressions && !report.metrics.timeLogParticipation && (
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
