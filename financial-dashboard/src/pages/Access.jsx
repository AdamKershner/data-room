import React, { useEffect, useState } from 'react'
import './Page.css'
import './Access.css'

const ROLE_OPTIONS = [
  { value: 'staff', label: 'Staff / onboarding' },
  { value: 'advisor', label: 'Advisor' },
  { value: 'other', label: 'Other' },
]

function roleLabel(role) {
  return ROLE_OPTIONS.find((option) => option.value === role)?.label || role
}

function Access() {
  const [people, setPeople] = useState([])
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)
  const [invite, setInvite] = useState({
    name: '',
    email: '',
    role: 'staff',
    admin: false,
  })

  async function loadPeople() {
    const response = await fetch('/api/access/people')
    const body = await response.json().catch(() => ({}))
    if (!response.ok) {
      setError(body.error === 'admin_only' ? 'Only directory admins can manage access.' : 'Could not load the access list.')
      return
    }
    setPeople(body.people || [])
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('flash') === 'approved') setNotice('Access granted and a sign-in link was emailed.')
    loadPeople()
  }, [])

  async function post(url, payload) {
    setBusy(true)
    setError('')
    setNotice('')
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(body.error || 'request_failed')
      }
      if (body.link) {
        setNotice(`Saved. Email is not configured, so use this local sign-in link: ${body.link}`)
      } else if (body.emailed === false) {
        setNotice('Saved. The sign-in link is in the local server log until Resend is configured.')
      } else {
        setNotice('Saved. They will get a sign-in link by email.')
      }
      await loadPeople()
      return body
    } catch (err) {
      setError(err.message === 'cannot_revoke_directory_admin'
        ? 'Directory admins in DATA_ROOM_ADMINS cannot be revoked here.'
        : 'That action did not work. Try again.')
      return null
    } finally {
      setBusy(false)
    }
  }

  async function onInvite(event) {
    event.preventDefault()
    const body = await post('/api/access/invite', invite)
    if (body) setInvite({ name: '', email: '', role: 'staff', admin: false })
  }

  const pending = people.filter((person) => person.status === 'pending')
  const everyoneElse = people.filter((person) => person.status !== 'pending')

  return (
    <div className="page access-page">
      <div className="page-header">
        <h1>Access</h1>
        <p className="access-lede">
          Grant or revoke people one at a time. Staff and advisors sign in with their own email link — there is no shared password to rotate.
        </p>
      </div>

      {error ? <p className="access-banner access-banner--error">{error}</p> : null}
      {notice ? <p className="access-banner access-banner--ok">{notice}</p> : null}

      <section className="page-section">
        <h2>Invite someone</h2>
        <form className="access-invite" onSubmit={onInvite}>
          <label>
            Name
            <input
              value={invite.name}
              onChange={(event) => setInvite({ ...invite, name: event.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={invite.email}
              onChange={(event) => setInvite({ ...invite, email: event.target.value })}
              required
            />
          </label>
          <label>
            Role
            <select
              value={invite.role}
              onChange={(event) => setInvite({ ...invite, role: event.target.value })}
            >
              {ROLE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
          <label className="access-check">
            <input
              type="checkbox"
              checked={invite.admin}
              onChange={(event) => setInvite({ ...invite, admin: event.target.checked })}
            />
            Can manage access
          </label>
          <button type="submit" disabled={busy}>Send invite</button>
        </form>
      </section>

      <section className="page-section">
        <h2>Waiting on approval ({pending.length})</h2>
        {pending.length === 0 ? (
          <p className="access-empty">No open requests.</p>
        ) : (
          <ul className="access-list">
            {pending.map((person) => (
              <li key={person.email} className="access-card">
                <div>
                  <strong>{person.name || person.email}</strong>
                  <div className="access-meta">{person.email} · {roleLabel(person.role)}</div>
                  {person.reason ? <p className="access-reason">{person.reason}</p> : null}
                </div>
                <div className="access-actions">
                  <button type="button" disabled={busy} onClick={() => post('/api/access/approve', { email: person.email, decision: 'approve' })}>
                    Approve
                  </button>
                  <button type="button" className="access-secondary" disabled={busy} onClick={() => post('/api/access/approve', { email: person.email, decision: 'deny' })}>
                    Deny
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="page-section">
        <h2>Directory ({everyoneElse.length})</h2>
        <ul className="access-list">
          {everyoneElse.map((person) => (
            <li key={person.email} className="access-card">
              <div>
                <strong>{person.name || person.email}</strong>
                <div className="access-meta">
                  {person.email} · {roleLabel(person.role)} · {person.status}
                  {person.admin ? ' · admin' : ''}
                </div>
              </div>
              <div className="access-actions">
                {person.status === 'approved' ? (
                  <>
                    <button type="button" className="access-secondary" disabled={busy} onClick={() => post('/api/access/invite', { ...person, admin: person.admin })}>
                      Email new link
                    </button>
                    <button type="button" className="access-secondary" disabled={busy} onClick={() => post('/api/access/revoke', { email: person.email })}>
                      Revoke
                    </button>
                  </>
                ) : (
                  <button type="button" disabled={busy} onClick={() => post('/api/access/approve', { email: person.email, decision: 'approve' })}>
                    Restore
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Access
