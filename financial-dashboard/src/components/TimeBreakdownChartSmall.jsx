import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

function TimeBreakdownChartSmall({ timeLogs = [] }) {
  const timeBreakdown = useMemo(() => {
    if (!timeLogs || timeLogs.length === 0) {
      return []
    }

    const taskHours = {}
    let totalHours = 0

    timeLogs.forEach(log => {
      const hours = parseFloat(log.hours) || 0
      totalHours += hours

      const description = (log.description || '').toLowerCase()
      let taskName = 'Other'
      
      // Feedback loop specific activities (check first for specificity)
      // Prioritize execution/development work over planning (engineers spend ~1hr/week planning, rest is development)
      if (description.includes('install') && (description.includes('installations page') || description.includes('installations'))) {
        taskName = 'Product Testing'
      } else if (description.includes('installed') && (description.includes('release') || description.includes('version'))) {
        taskName = 'Product Testing'
      } else if (description.includes('feedback form') || (description.includes('submitted feedback') && description.includes('form'))) {
        taskName = 'Product Testing'
      } else if (description.includes('create') && description.includes('release') && (description.includes('installations') || description.includes('page'))) {
        taskName = 'Release Mgmt'
      } else if (description.includes('updated installations page') || description.includes('update installations')) {
        taskName = 'Release Mgmt'
      } else if (description.includes('executed story points') || description.includes('completed sprint tasks')) {
        taskName = 'Product Development'
      } else if (description.includes('story point') && (description.includes('execute') || description.includes('completed') || description.includes('delivered'))) {
        taskName = 'Product Development'
      } else if (description.includes('implemented') || description.includes('developed') || description.includes('fixed') || description.includes('improved') || 
                 description.includes('worked on') || description.includes('focused on')) {
        // Development work - prioritize this over planning (most of engineer's time)
        taskName = 'Development'
      } else if (description.includes('reviewed feedback google sheet') && 
                 (description.includes('organized') || description.includes('estimate') || description.includes('plan')) &&
                 !description.includes('executed') && !description.includes('implemented') && !description.includes('completed')) {
        // Only categorize as Sprint Planning if it's ONLY about planning/organizing, not execution
        taskName = 'Planning'
      } else if (description.includes('ui/ux') || description.includes('ui') || description.includes('ux')) {
        taskName = 'UI/UX'
      } else if (description.includes('testing') || description.includes('test')) {
        taskName = 'Testing'
      } else if (description.includes('meeting') || description.includes('collaborat')) {
        taskName = 'Meetings'
      } else if (description.includes('bug') || description.includes('fix')) {
        taskName = 'Bug Fixes'
      } else if (description.includes('feature') || description.includes('development')) {
        taskName = 'Development'
      } else if (description.includes('sprint planning') || (description.includes('sprint') && description.includes('plan') && 
                 !description.includes('executed') && !description.includes('implemented'))) {
        // Only match explicit sprint planning, not just "sprint"
        taskName = 'Planning'
      } else if (description.includes('demo') || description.includes('sales')) {
        taskName = 'Demos'
      } else if (description.includes('content') || description.includes('marketing')) {
        taskName = 'Marketing'
      } else if (description.includes('design')) {
        taskName = 'Design'
      } else if (description.includes('infrastructure') || description.includes('devops')) {
        taskName = 'DevOps'
      } else if (description.includes('analytics') || description.includes('tracking')) {
        taskName = 'Analytics'
      } else if (description.includes('survey') || description.includes('pmf') || description.includes('nps')) {
        taskName = 'Research'
      } else if (description.includes('lead') || description.includes('outreach')) {
        taskName = 'Outreach'
      } else if (description.includes('partner')) {
        taskName = 'Partners'
      }

      if (!taskHours[taskName]) {
        taskHours[taskName] = 0
      }
      taskHours[taskName] += hours
    })

    const breakdown = Object.entries(taskHours)
      .map(([name, hours]) => ({
        name,
        hours: Math.round(hours * 10) / 10,
        percentage: totalHours > 0 ? Math.round((hours / totalHours) * 100) : 0
      }))
      .sort((a, b) => b.hours - a.hours)
      .slice(0, 4) // Top 4 tasks for small chart

    return { breakdown, totalHours }
  }, [timeLogs])

  if (timeBreakdown.breakdown.length === 0) {
    return null
  }

  const COLORS = [
    '#7A9200', // Oasis Green
    '#F5D742', // Desert Yellow
    '#4A90E2', // Blue
    '#7B68EE', // Purple
  ]

  return (
    <div className="time-chart-small">
      <div className="time-chart-small-header">
        <span className="time-chart-small-label">Time (Last 4 weeks)</span>
        <span className="time-chart-small-hours">{timeBreakdown.totalHours.toFixed(0)}h</span>
      </div>
      <div className="time-chart-small-pie">
        <ResponsiveContainer width="100%" height={80}>
          <PieChart>
            <Pie
              data={timeBreakdown.breakdown}
              cx="50%"
              cy="50%"
              outerRadius={35}
              fill="#8884d8"
              dataKey="hours"
            >
              {timeBreakdown.breakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => `${value}h`}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="time-chart-small-legend">
        {timeBreakdown.breakdown.slice(0, 2).map((item, index) => (
          <div key={index} className="time-chart-small-legend-item">
            <div 
              className="time-chart-small-legend-color" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="time-chart-small-legend-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeBreakdownChartSmall



