/**
 * End of Privacy community stories for B2C checklist Name the change (Ad Nauseam).
 * Source: feedback/end-of-privacy-submissions-2026-05-20.csv: names omitted from app exports.
 */

export const END_OF_PRIVACY_COLLECTION_LABEL = 'End of Privacy, May 2026'

export const END_OF_PRIVACY_THEME_LABELS = {
  'work-interrupt': 'Work interrupt',
  retargeting: 'Retargeting',
  'search-to-ad': 'Search → ad',
  'paid-platform-ads': 'Paid TV',
  'commerce-stalking': 'Commerce stalking',
}

/** @typedef {'change'} EndOfPrivacyNarrativeBeat */

/**
 * @typedef {Object} EndOfPrivacyTestimonial
 * @property {string} id
 * @property {string} anonymousLabel
 * @property {keyof typeof END_OF_PRIVACY_THEME_LABELS[]} themes
 * @property {string} quote
 * @property {EndOfPrivacyNarrativeBeat} narrativeBeat
 * @property {string} submittedAt ISO date (YYYY-MM-DD)
 */

/** @type {EndOfPrivacyTestimonial[]} */
export const END_OF_PRIVACY_TESTIMONIALS = [
  {
    id: 'eop-work-preroll',
    anonymousLabel: 'Masters student, deadline night',
    themes: ['work-interrupt'],
    quote: `It was during my 1st semester in Masters. I was trying to make dashboards using Tableau for an assignment as part of the coursework. Back then, I wasn't a fan of AI so I'd do my research on Google or watch a video if I need help. During that time, I'd almost created the entire project and had to just make it interactive for the users. I was trying to search for different videos on YouTube and finally started to see one of them, to my memory it was no more than 8 minutes but had around 3 ads in between. I felt so frustrated as it was almost the end of my project and it was a very small feature I was looking for which would only take a click to activate, but there I was spending nearly 2–3 minutes on watching commercials that weren't even entertaining. Yeah. This was my most frustrating memory and I'd say this was my Ad nauseam.`,
    narrativeBeat: 'change',
    submittedAt: '2026-05-19',
  },
  {
    id: 'eop-retargeting-swarm',
    anonymousLabel: 'Person casually considering a camera',
    themes: ['retargeting'],
    quote: `Recently, I have been thinking about buying a camera. I wasn't even actively searching for one yet, but somehow I started getting ads everywhere about cameras being on sale. After I finally looked up a few cameras online, it got even worse. Suddenly almost every app, website, and social media platform started showing me camera ads nonstop. It felt strange how quickly advertisements seemed to follow me across the internet after just a small amount of interest. Instead of helping, it started becoming overwhelming and repetitive.

Another experience I had was on YouTube on my TV, where it said “90+ ads” during one viewing session. I honestly don't even know how that's possible. I hadn't used YouTube in a while, so I was genuinely shocked. Netflix also started to give out ads, which makes streaming feel less enjoyable and more exhausting over time. Situations like this make me more aware of how much user activity and data is constantly being tracked for advertising purposes.`,
    narrativeBeat: 'change',
    submittedAt: '2026-05-19',
  },
  {
    id: 'eop-search-youtube',
    anonymousLabel: 'Someone who searched, then opened YouTube',
    themes: ['search-to-ad'],
    quote: `It always feels really creepy when I search for a product on Google and then immediately see an ad for it while watching a YouTube video. It seriously feels like someone is watching over my shoulder and tracking my every move. It makes you realize that true privacy doesn't really exist anymore, even on a phone that you own.

On top of that, the sheer amount of ads on YouTube is so annoying. Having a video constantly interrupted by ads totally ruins the experience. What irritates me the most is when they leave those annoying links stuck on the screen even after the ad is over, which just clutters up whatever I'm trying to watch.`,
    narrativeBeat: 'change',
    submittedAt: '2026-05-19',
  },
  {
    id: 'eop-hulu-paid',
    anonymousLabel: 'Paid streaming subscriber',
    themes: ['paid-platform-ads'],
    quote: `So whenever I watch a show on Hulu despite paying for the platform. I do need to see several ads in a very small duration. For example, a 30-min episode has typically 9 ads in total released in sets of 3. The worst part is the timing: you get an ad before the episode starts, and then in a very short interval you get it right after the intro and then of course one in the middle. It is extremely nauseating to sit through for sure.

P.S. Most of these ads are either about ozempic, skin conditions with extreme side effects, or extra-processed food alternatives.`,
    narrativeBeat: 'change',
    submittedAt: '2026-05-19',
  },
  {
    id: 'eop-commerce-stalking',
    anonymousLabel: 'Someone researching a big purchase',
    themes: ['commerce-stalking'],
    quote: `Fun fact about ads: whatever you think about pops up as an ad on your mobile. YouTube, Instagram, other social media platforms feel like they are literally stalking us. One of my experiences was I just searched about a good LED TV and boom. I literally got a call from a showroom asking “Mam are you looking for tv.” It feels so frustrating seeing our data being used against us to make money.

And at these times when we check for those products I saw an increase in price, maybe it was a misunderstanding, but yeah these are issues we go through every day. Ads are important to promote but being like a stalker!!!`,
    narrativeBeat: 'change',
    submittedAt: '2026-05-20',
  },
]
