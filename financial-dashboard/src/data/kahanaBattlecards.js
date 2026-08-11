/**
 * Aura Library battlecards — thin shim over the company landscape database.
 * Prefer importing from kahanaCompanyDatabase.js for new code.
 */

export { BATTLECARD_OVERRIDES } from './kahanaBattlecardOverrides'
export {
  COMPANY_GROUPS as BATTLECARD_GROUPS,
  filterCompanies as filterBattlecards,
  getCompanies as getBattlecards,
} from './kahanaCompanyDatabase'
