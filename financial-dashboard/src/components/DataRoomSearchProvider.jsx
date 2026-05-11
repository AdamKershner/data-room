import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { DataRoomSearchModal } from './DataRoomSearch'

const DataRoomSearchContext = createContext(null)

export function useDataRoomSearch() {
  const ctx = useContext(DataRoomSearchContext)
  if (!ctx) {
    throw new Error('useDataRoomSearch must be used within DataRoomSearchProvider')
  }
  return ctx
}

/** Safe for optional use (e.g. tests) */
export function useDataRoomSearchOptional() {
  return useContext(DataRoomSearchContext)
}

export function DataRoomSearchProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openSearch = useCallback(() => setOpen(true), [])
  const closeSearch = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({
      openSearch,
      closeSearch,
      isOpen: open,
    }),
    [open, openSearch, closeSearch]
  )

  return (
    <DataRoomSearchContext.Provider value={value}>
      {children}
      <DataRoomSearchModal open={open} onClose={closeSearch} />
      <button
        type="button"
        className="drs-fab"
        onClick={openSearch}
        title="Click to search pages, onboarding steps, and knowledge base topics"
        aria-label="Open search: find pages in the data room by title, topic, or business area"
      >
        <span className="drs-fab-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <span className="drs-fab-text">
          <span className="drs-fab-line">
            <span className="drs-fab-strong">Search data room</span>
            <span className="drs-fab-hint"> for pages, teams, topics…</span>
          </span>
          <span className="drs-fab-tap">Tap to search</span>
        </span>
      </button>
    </DataRoomSearchContext.Provider>
  )
}
