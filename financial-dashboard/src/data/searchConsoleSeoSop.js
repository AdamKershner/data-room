/**
 * SOP 30 - Search Console and branded search.
 * Ops checklist for Google Search Console health on kahana.io after product
 * SEO ships, plus the monthly branded-query readout. Content SEO stays SOP 12.
 */

import {
  GOOGLE_SEARCH_CONSOLE_URL,
  LINEAR_KAH_94_URL,
  TOOLS_ACCESS_TALLY_URL,
} from '../constants/kahanaSite'

const APP_LIBRARY_URL = 'https://app.kahana.io/library'
const APP_SITEMAP_URL = 'https://app.kahana.io/sitemap.xml'
const FOUNDERS_KEEPERS_HUB_URL =
  'https://app.kahana.io/hub/G6EwC3tBS6T0PKcLMumx'

export const SEARCH_CONSOLE_SEO_ALIASES = {
  gsc: 'search-console-seo',
  'search-console': 'search-console-seo',
  'branded-search': 'search-console-seo',
  'url-inspection': 'search-console-seo',
}

export const SEARCH_CONSOLE_SEO_SOP = {
  id: 'search-console-seo',
  title: 'Search Console and branded search',
  category: 'Marketing',
  owner: 'Marketing Lead',
  format: 'checklist',
  description:
    'Inspect Library and one public hub in Google Search Console, run Test live URL against the crawled copy, ping the product sitemap from the Sitemaps list, and save a monthly kahana query readout. Content clusters, UTMs, and Mixpanel referrer stay SOP 12.',
  excerpt:
    'This is how we keep Kahana (AKA “The Aura Library”) fetchable in Google after a product SEO ship, and how we read branded search each month. We do it so Googlebot sees Library HTML, not an empty app shell, and so exact kahana rank and CTR are a tracked number, not a guess.',
  keywords: [
    'search console',
    'sitemap',
    'library',
    'googlebot',
    'branded search',
    'kahana',
    'indexing',
    'live test',
    'url inspection',
    'gsc',
    'hubs',
  ],
  who: 'Anyone with kahana.io Search Console access (Marketing). Ask Engineering only if a live test fails or bot HTML changed.',
  when: 'After a product SEO, sitemap, robots, or nginx bot-proxy ship, and on a Monthly branded-query pass.',
  notes: [
    'The property is Domain kahana.io (sc-domain:kahana.io), not a single-host prefix. It covers app., about., help., and apex.',
    'URL Inspection Request indexing queues one URL. It does not re-read the sitemap.',
    'The sitemap detail page has no Resubmit. The three-dot menu is Remove sitemap only. Never remove. Ping by submitting the same URL on the Sitemaps list under Add a new sitemap.',
    'Do not Request indexing again on a URL already queued or already on Google unless VIEW CRAWLED PAGE is the old SPA and TEST LIVE URL is the new bot HTML (Page changed?).',
    'Never push kahana-web to Heroku kahana-public.',
    'Copy hub IDs from the sitemap loc. Use the digit 0, not the letter O. A mistyped id 404s.',
    'Keyword clusters, UTMs, and Mixpanel sign-up source are SOP 12. This SOP is Search Console health.',
  ],
  sections: [
    {
      id: 'access',
      title: '1. Open the right property',
      intro:
        'Work in the kahana.io domain property. Mixpanel is SOP 12 and SOP 21, not this checklist.',
      steps: [
        {
          id: 'gsc-open',
          label: 'Open Google Search Console on kahana.io',
          minutes: 5,
          doneWhen: 'Open Google Search Console on the kahana.io domain property.',
          text: 'Open Google Search Console on the kahana.io domain property (sc-domain:kahana.io). If you cannot see the property, ask Marketing Lead or a Manager to invite your Google account. Use the tools form first if you still lack Kahana analytics access.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'gsc-tools',
          label: 'Request tools access if you cannot see the property',
          minutes: 5,
          doneWhen: 'Request tools access if you cannot see the kahana.io property, then wait for the invite.',
          text: 'Request tools access if you cannot see the kahana.io property. Say you need Google Search Console. Do not invent a second GSC property for app.kahana.io.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get Access to Tools and Data',
        },
        {
          id: 'gsc-not-mixpanel',
          label: 'Leave Mixpanel for SOP 12 and SOP 21',
          minutes: 2,
          doneWhen: 'Leave Mixpanel for SOP 12 and SOP 21. This SOP is Search Console only.',
          text: 'Leave Mixpanel for SOP 12 (UTMs and referring domain on sign-ups) and SOP 21 (boards). This SOP does not ask you to open Mixpanel.',
          href: '/sops/seo',
          hrefLabel: 'SOP 12: SEO',
        },
      ],
    },
    {
      id: 'after-ship',
      title: '2. After a product SEO ship',
      intro:
        'Run this when Library HTML, robots.txt, the nginx bot proxy, or app.kahana.io/sitemap.xml changed. Confirm the live sitemap, then inspect Library and one hub.',
      steps: [
        {
          id: 'gsc-open-sitemap',
          label: 'Open the live product sitemap in a browser',
          minutes: 5,
          doneWhen: 'Open https://app.kahana.io/sitemap.xml and confirm the first loc is Library.',
          text: 'Open the live product sitemap in a browser. The first loc must be https://app.kahana.io/library. Count is Library-listed hubs (about 227 as of August 2026), not Search Console’s stale Discovered pages number. Copy the first hub loc for the inspect step. Use the digit 0 in the id, not the letter O.',
          href: APP_SITEMAP_URL,
          hrefLabel: 'app.kahana.io/sitemap.xml',
        },
        {
          id: 'gsc-inspect-library',
          label: 'Inspect app.kahana.io/library in URL Inspection',
          minutes: 10,
          doneWhen: 'Paste https://app.kahana.io/library into URL Inspection and open the result.',
          text: 'Paste https://app.kahana.io/library into the inspect bar at the top of Search Console. Stay on the Google Index tab first. Do not click Request indexing yet.',
          href: APP_LIBRARY_URL,
          hrefLabel: 'app.kahana.io/library',
        },
        {
          id: 'gsc-view-crawled',
          label: 'Open VIEW CRAWLED PAGE for Library',
          minutes: 5,
          doneWhen: 'Open VIEW CRAWLED PAGE and check screenshot and HTML for what Google already has.',
          text: 'Click VIEW CRAWLED PAGE. Open Screenshot and HTML. This is the copy already in the index. A good crawl shows Kahana, Public hubs, and server HTML. A bad crawl is a blank SPA or an empty #root shell. Note last crawl if shown.',
        },
        {
          id: 'gsc-live-library',
          label: 'Run TEST LIVE URL on Library',
          minutes: 10,
          doneWhen: 'Run TEST LIVE URL on /library and open VIEW TESTED PAGE.',
          text: 'Click TEST LIVE URL (top right of the inspect result). Wait for the live test. Then click VIEW TESTED PAGE. Pass: HTTP 200, Page can be indexed, screenshot shows Kahana plus Public hubs, HTML is server HTML (not an empty #root shell). “Page doesn’t use any resources” is expected for bot HTML. A live-test pass means Googlebot can fetch it now. It does not mean the URL is ranked.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'gsc-inspect-hub',
          label: 'Repeat inspect and live test on the first sitemap hub',
          minutes: 10,
          doneWhen: 'Inspect the first hub loc from the sitemap, then run TEST LIVE URL.',
          text: 'Paste the first hub loc from the live sitemap into URL Inspection. As of August 2026 that is Founders keepers. Copy the id from the sitemap. Use the digit 0 after T (G6EwC3tBS6T0PKcLMumx), not the letter O. Click VIEW CRAWLED PAGE, then TEST LIVE URL. Pass: title Founders keepers | Kahana, Page can be indexed, 200.',
          href: FOUNDERS_KEEPERS_HUB_URL,
          hrefLabel: 'Founders keepers hub',
        },
        {
          id: 'gsc-request-when',
          label: 'Request indexing only when crawled is stale or unknown',
          minutes: 5,
          doneWhen: 'Request indexing only if crawled HTML is the old SPA and live is good, or the URL is unknown to Google.',
          text: 'Request indexing only if VIEW CRAWLED PAGE is empty or the SPA shell and TEST LIVE URL is the new bot HTML (Page changed?), or the Google Index tab says the URL is unknown to Google. Do not click Request again on a URL already queued or already on Google with good crawled HTML. Extra submits do not move the queue.',
        },
        {
          id: 'gsc-sitemap-ping',
          label: 'Ping the product sitemap from the Sitemaps list',
          minutes: 5,
          doneWhen: 'On Indexing then Sitemaps (the list, not the detail card), submit https://app.kahana.io/sitemap.xml under Add a new sitemap.',
          text: 'Click Sitemaps in the left nav so you are on the list, not the sitemap detail card. The detail card three-dot menu is Remove sitemap only. Never click Remove. At the top of the list, use Add a new sitemap. Paste https://app.kahana.io/sitemap.xml (the same URL already there) and Submit. Google will accept a URL that already exists. That is the recrawl ping. Last read can stay old for hours or days. If the add field is missing, skip this step. robots.txt already lists this sitemap.',
          href: APP_SITEMAP_URL,
          hrefLabel: 'app.kahana.io/sitemap.xml',
        },
      ],
    },
    {
      id: 'monthly',
      title: '3. Monthly branded readout',
      intro:
        'North star is exact kahana in Search Console: impressions, clicks, CTR, and average position. A live-test pass the same day is not rank.',
      steps: [
        {
          id: 'gsc-queries-kahana',
          label: 'Export or screenshot exact kahana in Performance Queries',
          minutes: 10,
          doneWhen: 'Save impressions, clicks, CTR, and average position for the query kahana.',
          text: 'Open Performance, then Queries. Filter or find exact kahana. Screenshot or export the row (impressions, clicks, CTR, position). Also check kahana library, kahana app, and kahana.io if they appear. Save the file on your machine. Do not commit Search Console CSVs to git.',
          href: GOOGLE_SEARCH_CONSOLE_URL,
          hrefLabel: 'Google Search Console (kahana.io)',
        },
        {
          id: 'gsc-oasis-watch',
          label: 'Check leftover Oasis and kahana.co queries',
          minutes: 5,
          doneWhen: 'Note kahana oasis and kahana.co clicks versus exact kahana.',
          text: 'Find kahana oasis and kahana.co (and site:kahana.co if present). If those convert more than exact kahana, that is a brand problem, not a win. File Linear on KAH-94 rather than celebrating Oasis clicks.',
          href: LINEAR_KAH_94_URL,
          hrefLabel: 'KAH-94 branded search',
        },
        {
          id: 'gsc-pages-buckets',
          label: 'Read Pages buckets, do not request every URL',
          minutes: 10,
          doneWhen: 'Note Discovered currently not indexed and Duplicate Google chose different canonical, then file Linear if the counts jump.',
          text: 'Open Indexing, then Pages. Discovered - currently not indexed and Duplicate, Google chose different canonical are the buckets to watch. File Linear if they jump. Do not Request indexing on every URL in those lists.',
        },
        {
          id: 'gsc-success',
          label: 'Judge success on kahana position and CTR over weeks',
          minutes: 5,
          doneWhen: 'Compare this month’s kahana position and CTR to last month, not to today’s live test.',
          text: 'Success is kahana average position tightening and CTR rising over weeks. Library live-test pass is fetch health only. Recheck URL Inspection in a few days if a hub still says URL is not on Google after you queued it.',
        },
      ],
    },
    {
      id: 'fail',
      title: '4. If a live test fails',
      intro:
        'Stop requesting indexing. File Linear. Engineering fetches with a Googlebot user agent, not a logged-in browser.',
      steps: [
        {
          id: 'gsc-file-linear',
          label: 'File Linear on KAH-94 or a new bug',
          minutes: 10,
          doneWhen: 'File Linear with the inspected URL, live-test screenshot, and HTTP status from MORE INFO.',
          text: 'File Linear on KAH-94 or a new bug. Include the inspected URL, the live-test screenshot, and MORE INFO (HTTP status, content type). Do not keep clicking Request indexing.',
          href: LINEAR_KAH_94_URL,
          hrefLabel: 'KAH-94 branded search',
        },
        {
          id: 'gsc-eng-googlebot',
          label: 'Ask Engineering to fetch as Googlebot on prod',
          minutes: 15,
          doneWhen: 'Ask Engineering to curl prod /library and /hub/:id with User-Agent Googlebot if the live test failed.',
          text: 'Ask Engineering to fetch production /library and /hub/:id with User-Agent Googlebot. Browsers still get the SPA. A Googlebot 200 with Kahana in the title and hub links is the pass. Do not use a logged-in Chrome tab as proof.',
        },
      ],
    },
  ],
  doneWhen: [
    'Library and one sitemap hub were live-tested (or this month is readout-only and last ship already passed).',
    'The product sitemap was pinged from the Sitemaps list, or it was already submitted and you did not click Remove.',
    'Monthly kahana impressions, clicks, CTR, and position were saved (screenshot or CSV on your machine, not in git).',
  ],
}
