import React from 'react'
import './Page.css'

const OASIS_RFP_DOC_URL =
  'https://docs.google.com/document/d/1bkC2Y37FGyv7yugaZKvM3mIQatHekriPFXOX3Tu9AaA/edit?tab=t.0'

function OasisRfp() {
  return (
    <div className="page" id="oasis-rfp">
      <div className="page-header">
        <h1>Oasis RFP (request for proposal)</h1>
        <p className="page-subtitle">
          Working Kahana Oasis RFP document for enterprise and procurement-style conversations—duplicate and
          tailor per opportunity.
        </p>
      </div>

      <section className="page-section">
        <div className="content-block">
          <p>
            The live template is maintained in Google Docs. Use it as the starting point for security,
            deployment, and commercial questions; coordinate with stakeholders before sharing externally.
          </p>
          <p>
            <a href={OASIS_RFP_DOC_URL} target="_blank" rel="noopener noreferrer">
              Open Kahana Oasis RFP (Google Doc)
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default OasisRfp
