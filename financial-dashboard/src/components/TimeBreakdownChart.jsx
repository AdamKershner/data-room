import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import './TimeBreakdownChart.css'

function TimeBreakdownChart({ timeLogs = [] }) {
  // Parse time logs and aggregate by task/project
  const timeBreakdown = useMemo(() => {
    if (!timeLogs || timeLogs.length === 0) {
      return []
    }

    const taskHours = {}
    let totalHours = 0

    // Standard weekly tasks that everyone does (1 hour 15 minutes = 1.25 hours per week)
    const STANDARD_WEEKLY_HOURS = {
      'Time Log Entry': 0.25, // 15 minutes
      'Social Media Engagement': 0.25, // 15 minutes
      'Product Hunt Engagement': 0.25, // 15 minutes
      'Engineering Standup': 0.5, // 30 minutes
    }

    timeLogs.forEach(log => {
      const hours = parseFloat(log.hours) || 0
      totalHours += hours

      // Add standard hours for this week (1.25 hours total)
      Object.entries(STANDARD_WEEKLY_HOURS).forEach(([taskName, standardHours]) => {
        if (!taskHours[taskName]) {
          taskHours[taskName] = 0
        }
        taskHours[taskName] += standardHours
      })

      // Calculate discretionary time (logged hours minus standard 1.25 hours)
      const discretionaryHours = Math.max(0, hours - 1.25)

      // Parse description to extract tasks
      // Look for common task patterns in the description
      const description = (log.description || '').toLowerCase()
      
      // Try to identify tasks from description
      let taskName = 'Other'
      
      if (description.includes('ui/ux') || description.includes('ui') || description.includes('ux')) {
        taskName = 'UI/UX Development'
      } else if (description.includes('testing') || description.includes('test')) {
        taskName = 'Testing & QA'
      } else if (description.includes('meeting') || description.includes('collaborat')) {
        taskName = 'Meetings & Collaboration'
      } else if (description.includes('bug') || description.includes('fix')) {
        taskName = 'Bug Fixes'
      } else if (description.includes('feature') || description.includes('development')) {
        taskName = 'Feature Development'
      } else if (description.includes('sprint') || description.includes('planning')) {
        taskName = 'Sprint Planning'
      } else if (description.includes('demo') || description.includes('sales')) {
        taskName = 'Demos & Sales'
      } else if (description.includes('content') || description.includes('marketing')) {
        taskName = 'Content & Marketing'
      } else if (description.includes('design')) {
        taskName = 'Design'
      } else if (description.includes('infrastructure') || description.includes('devops') || description.includes('ci/cd')) {
        taskName = 'Infrastructure & DevOps'
      } else if (description.includes('analytics') || description.includes('tracking')) {
        taskName = 'Analytics & Tracking'
      } else if (description.includes('survey') || description.includes('pmf') || description.includes('nps')) {
        taskName = 'User Research & Surveys'
      } else if (description.includes('lead') || description.includes('outreach')) {
        taskName = 'Lead Generation'
      } else if (description.includes('partner')) {
        taskName = 'Partner Program'
      }

      if (!taskHours[taskName]) {
        taskHours[taskName] = 0
      }
      taskHours[taskName] += discretionaryHours
    })

    // Convert to array and sort by hours
    const breakdown = Object.entries(taskHours)
      .map(([name, hours]) => ({
        name,
        hours: Math.round(hours * 10) / 10, // Round to 1 decimal
        percentage: totalHours > 0 ? Math.round((hours / totalHours) * 100) : 0
      }))
      .sort((a, b) => b.hours - a.hours)

    return { breakdown, totalHours }
  }, [timeLogs])

  if (timeBreakdown.breakdown.length === 0) {
    return (
      <div className="time-breakdown-empty">
        <p>No time logs available yet.</p>
        <p className="time-log-note">Team members submit weekly time logs to track task breakdown.</p>
      </div>
    )
  }

  // Color palette for pie chart
  const COLORS = [
    '#7A9200', // Oasis Green
    '#F5D742', // Desert Yellow
    '#4A90E2', // Blue
    '#7B68EE', // Purple
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#FFA07A', // Orange
    '#98D8C8', // Mint
    '#BB8FCE', // Lavender
    '#85C1E2', // Sky Blue
    '#F8B739', // Gold
    '#95A5A6', // Gray
  ]

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null // Don't show label for slices < 5%
    
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="time-breakdown-chart-container">
      <div className="time-breakdown-header">
        <h4>Time Breakdown (Last 4 Weeks)</h4>
        <div className="total-hours">
          Total: {timeBreakdown.totalHours.toFixed(1)} hours
        </div>
      </div>
      
      <div className="time-breakdown-content">
        <div className="pie-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={timeBreakdown.breakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="hours"
              >
                {timeBreakdown.breakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} hours (${timeBreakdown.breakdown.find(d => d.hours === value)?.percentage || 0}%)`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="time-breakdown-legend">
          {timeBreakdown.breakdown.map((item, index) => (
            <div key={index} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div className="legend-details">
                <span className="legend-name">{item.name}</span>
                <span className="legend-hours">{item.hours}h ({item.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeBreakdownChart

