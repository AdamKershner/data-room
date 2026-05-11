import React from 'react'
import './Page.css'

const LETTER_OF_ENGAGEMENT_DOC_URL =
  'https://docs.google.com/document/d/10ga6whRAGXOa_jhCVBk3mv_ymn6vebWZ/edit'

function LetterOfEngagement() {
  return (
    <div className="page" id="letter-of-engagement">
      <div className="page-header">
        <h1>Letter of Engagement template</h1>
        <p className="page-subtitle">
          Working template for engagement letters used in B2B pilots and scoped work—copy and adapt per deal.
        </p>
      </div>

      <section className="page-section">
        <div className="content-block">
          <p>
            The canonical template lives in Google Docs. Open it to duplicate or export; adjust terms,
            scope, and signatures with counsel as needed for your jurisdiction and deal structure.
          </p>
          <p>
            <a href={LETTER_OF_ENGAGEMENT_DOC_URL} target="_blank" rel="noopener noreferrer">
              Open Letter of Engagement template (Google Doc)
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default LetterOfEngagement
