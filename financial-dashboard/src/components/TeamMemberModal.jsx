import React from 'react'
import './TeamMemberModal.css'
import TimeBreakdownChart from './TimeBreakdownChart'

function TeamMemberModal({ member, isOpen, onClose }) {
  if (!isOpen || !member) return null

  const getRoleColor = (role) => {
    const roleColors = {
      'Engineering': '#4A90E2',
      'Product': '#7B68EE',
      'Marketing': '#FF6B6B',
      'Analytics': '#4ECDC4',
      'Sales': '#FFA07A',
      'Customer Success': '#98D8C8',
      'Finance': '#F7DC6F',
      'Design': '#BB8FCE',
      'Support': '#85C1E2',
      'Project': '#F8B739',
    }
    return roleColors[role] || '#95A5A6'
  }

  // Get team goal based on roles
  const getTeamGoal = (member) => {
    if (!member.roles || member.roles.length === 0) {
      return null
    }
    
    // Product and Engineering share the same goal
    if (member.roles.includes('Product') || member.roles.includes('Engineering')) {
      return '+15 NPS'
    }
    
    // Marketing team goal
    if (member.roles.includes('Marketing')) {
      return '40 Paying Subscribers'
    }
    
    // Sales team goal
    if (member.roles.includes('Sales')) {
      return '3 enterprise pilots'
    }
    
    // Design team goal
    if (member.roles.includes('Design')) {
      return 'Support +15 NPS'
    }
    
    // Default for other roles
    return 'Team Goals'
  }

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className="team-member-modal-overlay" onClick={onClose}>
      <div className="team-member-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          {getTeamGoal(member) && (
            <div className="modal-team-goal">
              <span className="modal-goal-label">Quarterly Team Goal:</span>
              <span className="modal-goal-value">{getTeamGoal(member)}</span>
            </div>
          )}
          <div className="modal-header-content">
            <div className="modal-avatar">
              {member.avatar ? (
                <img src={member.avatar} alt={member.name} />
              ) : (
                <div className="modal-avatar-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="modal-header-info">
              <h2>{member.name}</h2>
              <div className="modal-roles">
              {member.roles && member.roles.length > 0 ? (
                member.roles.map((role, index) => (
                  <span
                    key={index}
                    className="modal-role-tag"
                    style={{ backgroundColor: getRoleColor(role) }}
                  >
                    {role}
                  </span>
                ))
              ) : (
                <span className="modal-role-tag modal-role-placeholder">
                  Roles TBD
                </span>
              )}
            </div>
            </div>
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-section">
            <h3>Employment Status</h3>
            <div className="status-info">
              <span className={`status-badge ${
                member.employmentStatus === 'full-time' ? 'full-time' : 
                member.employmentStatus === 'intern' ? 'intern' : 'part-time'
              }`}>
                {member.employmentStatus === 'full-time' ? 'Full-Time' : 
                 member.employmentStatus === 'intern' ? 'Intern' : 'Part-Time'}
              </span>
              <span className="hours-info">
                {member.employmentStatus === 'full-time' 
                  ? 'Full-time commitment' 
                  : member.employmentStatus === 'intern'
                  ? `Minimum ${member.hoursPerWeek || 20} hours/week (${member.hoursPerWeek / 5 || 4} hours/day, Mon-Fri)`
                  : `Minimum ${member.hoursPerWeek || 20} hours/week (${member.hoursPerWeek / 5 || 4} hours/day, Mon-Fri)`}
              </span>
            </div>
          </div>

          {member.availability && (
            <div className="modal-section">
              <h3>Availability & Schedule</h3>
              <div className="availability-grid">
                {daysOfWeek.map(day => {
                  const dayAvailability = member.availability[day.toLowerCase()]
                  if (!dayAvailability || !dayAvailability.active) {
                    return (
                      <div key={day} className="availability-day inactive">
                        <div className="day-name">{day}</div>
                        <div className="day-status">Not available</div>
                      </div>
                    )
                  }
                  return (
                    <div key={day} className="availability-day active">
                      <div className="day-name">{day}</div>
                      <div className="day-time">{dayAvailability.timeRange}</div>
                      {dayAvailability.timezone && (
                        <div className="day-timezone">{dayAvailability.timezone}</div>
                      )}
                      {dayAvailability.activities && dayAvailability.activities.length > 0 && (
                        <div className="day-activities">
                          <strong>Activities:</strong>
                          <ul>
                            {dayAvailability.activities.map((activity, idx) => (
                              <li key={idx}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {member.timeLogs && member.timeLogs.length > 0 && (
            <div className="modal-section">
              <h3>Time Breakdown</h3>
              <TimeBreakdownChart timeLogs={member.timeLogs} memberName={member.name} />
            </div>
          )}

          {member.q1Goals && (
            <div className="modal-section">
              <h3>Q1 2026 Goals</h3>
              <div className="q1-goals-container">
                <div className="q1-goal-overview">
                  <h4>{member.q1Goals.overview}</h4>
                  {member.q1Goals.target && (
                    <div className="q1-target">
                      <strong>Target:</strong> {member.q1Goals.target}
                    </div>
                  )}
                </div>
                {member.q1Goals.weeklyBreakdown && member.q1Goals.weeklyBreakdown.length > 0 && (
                  <div className="weekly-goals">
                    <h4>Weekly Breakdown:</h4>
                    <div className="weekly-goals-grid">
                      {member.q1Goals.weeklyBreakdown.map((week, idx) => (
                        <div key={idx} className="weekly-goal-card">
                          <div className="week-label">Week {week.week}</div>
                          <div className="week-goal">{week.goal}</div>
                          {week.metric && (
                            <div className="week-metric">{week.metric}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {member.q1Goals.keyMetrics && member.q1Goals.keyMetrics.length > 0 && (
                  <div className="q1-key-metrics">
                    <strong>Key Metrics:</strong>
                    <ul>
                      {member.q1Goals.keyMetrics.map((metric, idx) => (
                        <li key={idx}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {member.projects && member.projects.length > 0 && (
            <div className="modal-section">
              <h3>Current & Past Projects</h3>
              <div className="projects-list">
                {member.projects.map((project, index) => (
                  <div key={index} className={`project-card ${project.status || 'active'}`}>
                    <div className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <span className={`project-status-badge ${project.status || 'active'}`}>
                        {project.status === 'completed' ? 'Completed' : 
                         project.status === 'on-hold' ? 'On Hold' : 'Active'}
                      </span>
                    </div>
                    {project.description && (
                      <p className="project-description">{project.description}</p>
                    )}
                    {project.scope && project.scope.length > 0 && (
                      <div className="project-scope">
                        <strong>Scope:</strong>
                        <ul>
                          {project.scope.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.goals && project.goals.length > 0 && (
                      <div className="project-goals">
                        <strong>Goals:</strong>
                        <ul>
                          {project.goals.map((goal, idx) => (
                            <li key={idx}>{goal}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.startDate && (
                      <div className="project-dates">
                        <span>Started: {project.startDate}</span>
                        {project.endDate && <span>Completed: {project.endDate}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {member.notes && (
            <div className="modal-section">
              <h3>Notes</h3>
              <p className="modal-notes">{member.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberModal

