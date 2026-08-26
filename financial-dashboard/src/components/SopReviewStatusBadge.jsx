import { getSopReviewStatus, getSopReviewStatusLabel } from '../data/sopContent'

export function SopReviewStatusBadge({ number, className = '' }) {
  const status = getSopReviewStatus(number)
  const label = getSopReviewStatusLabel(number)
  return (
    <span className={`sop-status-badge sop-status-badge--${status} ${className}`.trim()}>
      {label}
    </span>
  )
}
