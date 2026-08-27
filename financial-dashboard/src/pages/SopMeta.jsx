import React from 'react'

export function SopMeta({ category, who, cadence, trigger, updatedAt, duration }) {
  const rows = [
    category ? ['Function', category] : null,
    who ? ['Who', who] : null,
    cadence ? ['When', cadence] : null,
    trigger ? ['Trigger', trigger] : null,
    duration ? ['Time', duration] : null,
    updatedAt ? ['Updated', updatedAt] : null,
  ].filter(Boolean)

  if (!rows.length) return null

  return (
    <dl className="sop-meta">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
