/**
 * Visual branding for the fragment map: category icons + company logo domains.
 * Logos load from Google’s favicon service (directional recognition, not brand-kit assets).
 */

export const PLAYER_LOGO_DOMAIN = {
  'amazon-kindle': 'amazon.com',
  'apple-books': 'apple.com',
  'google-play-books': 'play.google.com',
  kobo: 'kobo.com',
  wattpad: 'wattpad.com',
  goodreads: 'goodreads.com',
  fable: 'fable.co',
  'royal-road': 'royalroad.com',
  inkitt: 'inkitt.com',
  tapas: 'tapas.io',
  radish: 'radishfiction.com',
  draft2digital: 'draft2digital.com',
  smashwords: 'smashwords.com',
  ingramspark: 'ingramspark.com',
  publishdrive: 'publishdrive.com',
  tiktok: 'tiktok.com',
  'instagram-reels': 'instagram.com',
  'youtube-shorts': 'youtube.com',
  snapchat: 'snapchat.com',
  triller: 'triller.co',
  kwai: 'kwai.com',
  likee: 'likee.video',
  'youtube-long': 'youtube.com',
  vimeo: 'vimeo.com',
  nebula: 'watchnebula.com',
  curiositystream: 'curiositystream.com',
  twitch: 'twitch.tv',
  rumble: 'rumble.com',
  netflix: 'netflix.com',
  'prime-video': 'primevideo.com',
  'disney-plus': 'disneyplus.com',
  max: 'max.com',
  hulu: 'hulu.com',
  crunchyroll: 'crunchyroll.com',
  'paramount-plus': 'paramountplus.com',
  peacock: 'peacocktv.com',
  'apple-tv-plus': 'tv.apple.com',
  udemy: 'udemy.com',
  coursera: 'coursera.org',
  kajabi: 'kajabi.com',
  teachable: 'teachable.com',
  podia: 'podia.com',
  thinkific: 'thinkific.com',
  skool: 'skool.com',
  edx: 'edx.org',
  domestika: 'domestika.org',
  'mighty-networks': 'mightynetworks.com',
  disco: 'disco.co',
  maven: 'maven.com',
  masterclass: 'masterclass.com',
  substack: 'substack.com',
  beehiiv: 'beehiiv.com',
  medium: 'medium.com',
  ghost: 'ghost.org',
  'substack-writer-gmv': 'substack.com',
  wsj: 'wsj.com',
  nyt: 'nytimes.com',
  ft: 'ft.com',
  economist: 'economist.com',
  'kit-convertkit': 'kit.com',
  wordpress: 'wordpress.com',
  spotify: 'spotify.com',
  'apple-music': 'music.apple.com',
  'amazon-music': 'music.amazon.com',
  'youtube-music': 'music.youtube.com',
  audible: 'audible.com',
  'apple-podcasts': 'podcasts.apple.com',
  scribd: 'scribd.com',
  deezer: 'deezer.com',
  megaphone: 'megaphone.fm',
  libsyn: 'libsyn.com',
  simplecast: 'simplecast.com',
  'google-play-audiobooks': 'play.google.com',
  pandora: 'pandora.com',
  iheartradio: 'iheart.com',
  onlyfans: 'onlyfans.com',
  patreon: 'patreon.com',
  linktree: 'linktr.ee',
  gumroad: 'gumroad.com',
  beacons: 'beacons.ai',
  'stan-store': 'stan.store',
  'ko-fi': 'ko-fi.com',
  buymeacoffee: 'buymeacoffee.com',
  memberful: 'memberful.com',
  pensight: 'pensight.com',
  circle: 'circle.so',
}

export function getPlayerLogoUrl(playerId, size = 64) {
  const domain = PLAYER_LOGO_DOMAIN[playerId]
  if (!domain) return null
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`
}

/** Simple geometric category icons (SVG path sets). */
export const FRAGMENT_ICON_PATHS = {
  'ebook-reading': {
    viewBox: '0 0 24 24',
    // open book
    d: 'M4 5.5C4 4.67 4.67 4 5.5 4H11v14H5.5C4.67 18 4 17.33 4 16.5V5.5zm16 0v11c0 .83-.67 1.5-1.5 1.5H13V4h5.5c.83 0 1.5.67 1.5 1.5z',
  },
  'short-form-video': {
    viewBox: '0 0 24 24',
    // phone / vertical video
    d: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 15h4v1.5h-4V17zm1-11 5 3.5-5 3.5V6z',
  },
  'long-form-video': {
    viewBox: '0 0 24 24',
    // play in rectangle
    d: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm7 3.5v7l6-3.5-6-3.5z',
  },
  'series-films-streaming': {
    viewBox: '0 0 24 24',
    // film strip
    d: 'M3 4h18v16H3V4zm2 2v2h2V6H5zm0 4v2h2v-2H5zm0 4v2h2v-2H5zm12-8v2h2V6h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zM9 8h6v8H9V8z',
  },
  'courses-learning': {
    viewBox: '0 0 24 24',
    // graduation cap (simplified)
    d: 'M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5L5.07 13 3 14.12 12 19l9-4.88L18.93 13 12 16.5z',
  },
  'newsletters-written': {
    viewBox: '0 0 24 24',
    // document / newsletter
    d: 'M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3.5h8V17H8v-1.5z',
  },
  'audio-listening': {
    viewBox: '0 0 24 24',
    // headphones
    d: 'M12 3a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h1v-7H5v-2a7 7 0 0 1 14 0v2h-3v7h1a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8z',
  },
  'creator-monetization': {
    viewBox: '0 0 24 24',
    // link (link-in-bio) mark
    d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  },
}
