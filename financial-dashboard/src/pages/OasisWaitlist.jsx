import React from 'react'
import './Page.css'

const OASIS_WAITLIST_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1wwcPh854iSBBcbH9tebTlsjrwCrHkLKVOUsr6KwXWvI/edit?gid=0#gid=0'

function OasisWaitlist() {
  return (
    <div className="page" id="oasis-waitlist">
      <div className="page-header">
        <h1>Oasis waitlist</h1>
        <p className="page-subtitle">
          Marketing-owned spreadsheet for people interested in Oasis—signups, outreach, and follow-up.
        </p>
      </div>

      <section className="page-section">
        <div className="content-block">
          <p>
            The canonical list lives in Google Sheets. Open it to view or edit rows; keep access aligned with
            your marketing and privacy practices.
          </p>
          <p>
            <a href={OASIS_WAITLIST_SHEET_URL} target="_blank" rel="noopener noreferrer">
              Open Oasis waitlist (Google Sheet)
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default OasisWaitlist
