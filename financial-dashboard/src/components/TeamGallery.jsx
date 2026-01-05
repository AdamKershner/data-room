import React, { useState, useMemo } from 'react'
import TeamMemberModal from './TeamMemberModal'
import './TeamGallery.css'

function TeamGallery({ teamMembers = [] }) {
  // Role color mapping (similar to Notion tags)
  const roleColors = {
    'Engineering': '#4A90E2',
    'Product': '#7B68EE',
    'Product Marketing': '#FF6B6B',
    'Analytics': '#4ECDC4',
    'Sales': '#FFA07A',
    'Customer Success': '#98D8C8',
    'Finance': '#F7DC6F',
    'Design': '#BB8FCE',
    'Support': '#85C1E2',
    'Project': '#F8B739',
  }

  const getRoleColor = (role) => {
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
    
    // Product Marketing team goal
    if (member.roles.includes('Product Marketing')) {
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

  // Get all unique roles from team members
  const allRoles = useMemo(() => {
    const rolesSet = new Set()
    teamMembers.forEach(member => {
      if (member.roles && member.roles.length > 0) {
        member.roles.forEach(role => rolesSet.add(role))
      }
    })
    return Array.from(rolesSet).sort()
  }, [teamMembers])

  // Filter state
  const [selectedRoles, setSelectedRoles] = useState([])

  // Toggle role filter
  const toggleRoleFilter = (role) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    )
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedRoles([])
  }

  // Filter team members based on selected roles
  const filteredMembers = useMemo(() => {
    if (selectedRoles.length === 0) {
      return teamMembers
    }
    return teamMembers.filter(member => {
      if (!member.roles || member.roles.length === 0) {
        return false
      }
      return member.roles.some(role => selectedRoles.includes(role))
    })
  }, [teamMembers, selectedRoles])

  // Modal state
  const [selectedMember, setSelectedMember] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (member) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  return (
    <div className="team-gallery">
      {teamMembers.length === 0 ? (
        <div className="team-gallery-empty">
          <p>Team members will be added here.</p>
        </div>
      ) : (
        <>
          {/* Filter Section */}
          <div className="team-gallery-filters">
            <div className="filters-header">
              <span className="filters-label">Filter by role:</span>
              {selectedRoles.length > 0 && (
                <button 
                  className="clear-filters-btn"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="filters-list">
              {allRoles.map(role => (
                <button
                  key={role}
                  className={`filter-chip ${selectedRoles.includes(role) ? 'active' : ''}`}
                  onClick={() => toggleRoleFilter(role)}
                  style={{
                    backgroundColor: selectedRoles.includes(role) 
                      ? getRoleColor(role) 
                      : 'transparent',
                    borderColor: getRoleColor(role),
                    color: selectedRoles.includes(role) ? 'white' : getRoleColor(role)
                  }}
                >
                  {role}
                </button>
              ))}
            </div>
            {selectedRoles.length > 0 && (
              <div className="filter-results-count">
                Showing {filteredMembers.length} of {teamMembers.length} team members
              </div>
            )}
          </div>

          {/* Team Grid */}
          {filteredMembers.length === 0 ? (
            <div className="team-gallery-empty">
              <p>No team members match the selected filters.</p>
            </div>
          ) : (
            <div className="team-gallery-grid">
              {filteredMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="team-member-card"
                  onClick={() => handleCardClick(member)}
                >
                  {getTeamGoal(member) && (
                    <div className="team-member-goal">
                      <span className="team-goal-label">Quarterly Team Goal:</span>
                      <span className="team-goal-value">{getTeamGoal(member)}</span>
                    </div>
                  )}
                  <div className="team-member-avatar">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} />
                    ) : (
                      <div className="team-member-avatar-placeholder">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="team-member-name">{member.name}</div>
                  <div className="team-member-roles">
                    {member.roles && member.roles.length > 0 ? (
                      member.roles.map((role, roleIndex) => (
                        <span
                          key={roleIndex}
                          className="team-member-role-tag"
                          style={{ backgroundColor: getRoleColor(role) }}
                        >
                          {role}
                        </span>
                      ))
                    ) : (
                      <span className="team-member-role-tag team-member-role-placeholder">
                        Roles TBD
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default TeamGallery

