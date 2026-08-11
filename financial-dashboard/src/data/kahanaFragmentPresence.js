/**
 * Aura Library vs company coverage across Market Map content fragments.
 * Chart layout: content types as columns; Aura Library supports all; company shows which they support.
 */

import { MARKET_MAP_CATEGORIES } from './kahanaCompanyDatabase'
import { getReviewedFragmentPresence } from './companyFragmentCoverage'

/** @typedef {'yes' | 'no'} FragmentPresence */

export const PRESENCE_LABELS = {
  yes: 'Yes',
  no: '—',
}

/**
 * Aura Library target coverage — the library aims to encompass every content modality.
 * @type {Record<string, FragmentPresence>}
 */
export const KAHANA_FRAGMENT_PRESENCE = Object.fromEntries(
  MARKET_MAP_CATEGORIES.map((cat) => [cat.id, 'yes']),
)

/**
 * Company supports a modality if reviewed Yes, else Market Map primary/secondary.
 * @param {{ id?: string, primaryFragmentId?: string | null, secondaryFragmentIds?: string[], marketFragmentIds?: string[] }} company
 * @param {string} fragmentId
 * @returns {FragmentPresence}
 */
export function getCompanyFragmentPresence(company, fragmentId) {
  const reviewed = getReviewedFragmentPresence(fragmentId, company?.id)
  if (reviewed != null) {
    return reviewed
  }

  const ids = company?.marketFragmentIds?.length
    ? company.marketFragmentIds
    : [
      company?.primaryFragmentId,
      ...(company?.secondaryFragmentIds || []),
    ].filter(Boolean)
  return ids.includes(fragmentId) ? 'yes' : 'no'
}

/**
 * Ordered modality columns for the comparison chart.
 */
export function getComparisonModalities() {
  return MARKET_MAP_CATEGORIES.map((cat) => ({
    fragmentId: cat.id,
    label: cat.label,
    name: cat.name,
  }))
}

/**
 * Per-modality presence for Aura Library + company (for transposed chart).
 * @param {{ id?: string, name?: string, primaryFragmentId?: string | null, secondaryFragmentIds?: string[], marketFragmentIds?: string[] }} company
 */
export function buildKahanaComparisonRows(company) {
  return getComparisonModalities().map((cat) => ({
    fragmentId: cat.fragmentId,
    label: cat.label,
    name: cat.name,
    kahana: 'yes',
    company: getCompanyFragmentPresence(company, cat.fragmentId),
  }))
}
