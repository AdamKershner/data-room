import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './CopyPageLink.css'

const LIVE_ORIGIN = 'https://data-room-two.vercel.app'

export function canonicalPageUrl(location, { hostname, origin } = window.location) {
  const path = `${location.pathname || '/'}${location.hash || ''}`
  const host = (hostname || '').replace(/^www\./i, '').toLowerCase()
  const base =
    host === 'localhost' || host === '127.0.0.1' ? LIVE_ORIGIN : origin.replace(/\/$/, '')
  return `${base}${path}`
}

function CopyPageLink() {
  const location = useLocation()
  const [copied, setCopied] = useState(false)
  const url = useMemo(
    () => canonicalPageUrl(location),
    [location.pathname, location.hash]
  )

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const field = document.createElement('textarea')
      field.value = url
      field.setAttribute('readonly', '')
      field.style.position = 'fixed'
      field.style.left = '-9999px'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      document.body.removeChild(field)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      className={`copy-page-link${copied ? ' copy-page-link--copied' : ''}`}
      onClick={handleCopy}
      aria-label={copied ? `Copied ${url}` : `Copy link ${url}`}
    >
      {copied ? 'Copied' : 'Copy link'}
    </button>
  )
}

export default CopyPageLink
