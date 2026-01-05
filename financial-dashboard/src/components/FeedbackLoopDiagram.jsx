import React from 'react'
import './FeedbackLoopDiagram.css'

function FeedbackLoopDiagram() {
  return (
    <div className="feedback-loop-diagram">
      <div className="flow-container">
        {/* Step 1: Installation & Testing */}
        <div className="flow-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h4>Installation & Testing</h4>
            <p>Product managers install browser from installations page</p>
          </div>
        </div>
        
        <div className="flow-arrow">→</div>
        
        {/* Step 2: Feedback Collection */}
        <div className="flow-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h4>Feedback Collection</h4>
            <p>Submit feedback via AI assistant interface</p>
          </div>
        </div>
        
        <div className="flow-arrow">→</div>
        
        {/* Step 3: Measurement */}
        <div className="flow-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h4>Measurement</h4>
            <p>Complete PMF/NPS survey after testing</p>
          </div>
        </div>
        
        <div className="flow-arrow">→</div>
        
        {/* Step 4: Consolidation */}
        <div className="flow-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h4>Consolidation</h4>
            <p>Feedback auto-consolidates to Google Sheet</p>
          </div>
        </div>
        
        <div className="flow-arrow">→</div>
        
        {/* Step 5: Sprint Planning */}
        <div className="flow-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h4>Sprint Planning</h4>
            <p>Engineers organize feedback into sprints in Notion</p>
          </div>
        </div>
        
        <div className="flow-arrow">→</div>
        
        {/* Step 6: Weekly Releases */}
        <div className="flow-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h4>Weekly Releases</h4>
            <p>New release published to installations page</p>
          </div>
        </div>
      </div>
      
      {/* Loop back arrow */}
      <div className="loop-back">
        <div className="loop-arrow">↻</div>
        <p>Cycle repeats weekly</p>
      </div>
    </div>
  )
}

export default FeedbackLoopDiagram

