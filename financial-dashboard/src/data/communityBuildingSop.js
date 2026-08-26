/**
 * SOP 2 — Community Building.
 * Combines the former club SOPs (run a club, invite, choose titles,
 * creator outreach, log issues) plus The Keeper’s Codex checklist.
 */

import { KAHANA_FEEDBACK_URL, MIXPANEL_URL } from '../constants/kahanaSite'

export const COMMUNITY_BUILDING_SOP = {
  id: 'community-building',
  title: 'Community Building',
  category: 'Community',
  owner: 'Community',
  format: 'checklist',
  description:
    'Stand up and run Kahana clubs: create, invite, pick titles, reach creators, monitor with Kahana analytics, log issues, and work The Keeper’s Codex through the first cycle.',
  keywords: [
    'community',
    'book club',
    'video club',
    'create club',
    'invite',
    'wishlist',
    'outreach',
    'analytics',
    'monitor',
    'mixpanel',
    'keeper',
    'codex',
    'feedback',
    'aura',
  ],
  who: 'Club hosts, intern keepers, and anyone helping grow a hall',
  when: 'From founding through every cycle — setup once, then invite, vote, outreach, monitor, and log as you go.',
  notes: [
    'As of August 12, 2026. The Preview button in the create builder is unreliable — use Create and publish, then check the live club.',
    'The Keeper’s Codex is the click-by-click checklist for founding through first cycle. Use it alongside the sections below.',
    'Coordinate creator outreach so only one person contacts a given author. Honest member counts only.',
  ],
  sections: [
    {
      id: 'setup',
      title: 'Running a club — setup',
      steps: [
        {
          id: 'cb-theme',
          text: 'Decide the club’s focus and frequency before you create it. A clear theme — short documentary films, true crime, contemporary fiction by women — helps you recruit the right members and pick titles later.',
        },
        {
          id: 'cb-frequency',
          text: 'Frequency can be one title per week or per month. These are decisions you make, not fields the form asks for, so put them in the description so members can decide if they can commit.',
        },
        {
          id: 'cb-create',
          text: 'In the left sidebar, open My Clubs, then click Create club (top right). Go through Name, Description, Photos, Visibility, Join mode, Policies, and Invite link, then create and publish.',
        },
        {
          id: 'cb-name',
          text: 'Give the club a clear name. Required. It appears on the club page and in Clubs discovery.',
        },
        {
          id: 'cb-description',
          text: 'Write a description that states the theme, the frequency, and that members vote on what to read or watch. A clear description is what convinces someone to join.',
        },
        {
          id: 'cb-photo',
          text: 'Add a photo. One upload sets both the cover banner and the circular main photo. Portrait, 3:4, works best; use the focal point sliders to fix the crop.',
        },
        {
          id: 'cb-visibility',
          text: 'Choose visibility. Restricted (default): invite link only, hidden from Clubs. Anyone with the link: preview with the link, still hidden. Visible on Clubs page: discoverable. Keep Restricted or Anyone with the link for invite-only.',
        },
        {
          id: 'cb-join-mode',
          text: 'Choose a join mode. Autojoin lets anyone join immediately. Request to join lets you approve members. Pick based on how much control you want.',
        },
        {
          id: 'cb-policies',
          text: 'Complete Policies before a club can be discoverable: age rating, adult content, public listing terms, and rights to the cover photo. A public club will not publish without this.',
        },
        {
          id: 'cb-publish',
          text: 'Click Create and publish. Copy the invite link on creation.',
        },
      ],
    },
    {
      id: 'managing',
      title: 'Running a club — managing over time',
      steps: [
        {
          id: 'cb-wishlist',
          text: 'Build the Wishlist. Add a link (Goodreads, YouTube, Coursera, or any URL), a Library hub, one of your own hubs, or an uploaded file. A title that is not yet a Kahana hub can still go on as a link.',
        },
        {
          id: 'cb-cycle',
          text: 'Run one cycle at a time. The group picks the next title from the Wishlist; you set the dates. Members upvote; sort by Votes or Recent. Ask members to vote nudges anyone who has not voted, once every 24 hours.',
        },
        {
          id: 'cb-focus',
          text: 'Set the winner with Set as focus. It becomes the Current focus banner. Clear focus when the cycle ends.',
        },
        {
          id: 'cb-feed',
          text: 'Use the Feed tab as the discussion archive. Members post with Create post; replies stay as the club’s history.',
        },
        {
          id: 'cb-events',
          text: 'Use Events to schedule live discussions. Builder covers Details, Meeting (Meet / Zoom / Teams or a paste-in link), Prep (Wishlist item + note), and Reminders (1 week, 1 day, 1 hour). Past events stay archived.',
        },
        {
          id: 'cb-aura',
          text: 'Encourage members to give Aura to hubs they enjoy — that is how good work rises on Kahana and keeps the club tied to the library.',
        },
      ],
    },
    {
      id: 'invite-members',
      title: 'Inviting members',
      intro:
        'Grow a small active core. Member count must stay honest — it is the heart of later creator outreach.',
      steps: [
        {
          id: 'cb-invite-routes',
          text: 'Open the Members tab. Three routes: invite by email, Suggested people, and the join link. Use whichever fits the person.',
        },
        {
          id: 'cb-invite-email',
          text: 'Invite by email. Existing Kahana users get an in-app invitation; new people can sign up with that email to join.',
        },
        {
          id: 'cb-invite-suggested',
          text: 'Suggested people: search by name, or pick from people you follow, who follow you, or whose hubs you have saved. They get an in-app invitation.',
        },
        {
          id: 'cb-invite-link',
          text: 'Join link: copy and share anywhere. Anyone with it can join, subject to join mode. Good for group chats and social.',
        },
        {
          id: 'cb-invite-pitch',
          text: 'Tell the person what they are joining in one line: theme, frequency, and that the group reads together and votes on what is next.',
        },
        {
          id: 'cb-invite-core',
          text: 'Aim for a small, active core rather than a large silent list. Keep inviting when numbers dip.',
        },
      ],
    },
    {
      id: 'monitor-analytics',
      title: 'Monitoring community with Kahana analytics',
      intro:
        'A club you do not watch becomes a silent list. Use Kahana’s own signals first, then Mixpanel for the cohort — every cycle, not only when something feels off.',
      steps: [
        {
          id: 'cb-monitor-members',
          text: 'Open the club’s Members tab and read the real count. Who joined this cycle, who went quiet, who is still in the active core. Honest numbers only — this is the same count you later use in creator outreach.',
        },
        {
          id: 'cb-monitor-in-kahana',
          text: 'Watch in-Kahana activity, not vanity. Wishlist votes, Feed posts and replies, event RSVPs and who actually showed, Aura given to the current-focus hub. If votes, posts, and events are all flat, the hall is emptying — invite before the next cycle, do not wait.',
        },
        {
          id: 'cb-monitor-mixpanel',
          text: 'In Mixpanel Kahana PROD, check the club/community cohort: joins, return visits, Feed/event activity, and whether new members come back. Prefer product events over impressions. If a board does not exist yet, ask Analytics to pin one rather than screenshotting random explores.',
          href: MIXPANEL_URL,
          hrefLabel: 'Mixpanel Kahana project',
        },
        {
          id: 'cb-monitor-cadence',
          text: 'Do this weekly while a cycle is live, and once at cycle close. Write one line: living hall vs silent list, and the next action (invite, change frequency, pick a more voted title, or file a product gap).',
        },
      ],
    },
    {
      id: 'choose-title',
      title: 'Choosing what the club reads',
      intro:
        'Keep a running list of titles the club wanted but did not find on Kahana. That list is your outreach pipeline and failed-search signal.',
      steps: [
        {
          id: 'cb-gather',
          text: 'Gather what the group wants next. Note titles, authors, and creators — whether or not they are on Kahana.',
        },
        {
          id: 'cb-add-wishlist',
          text: 'Add candidates to the Wishlist as a hub if they are on Kahana, or as a link if they are not, so they can still be voted on.',
        },
        {
          id: 'cb-vote',
          text: 'Let the group choose. Members upvote; sort by Votes. Use Ask members to vote (once every 24 hours) for anyone who has not voted.',
        },
        {
          id: 'cb-set-focus',
          text: 'Set the winner with Set as focus so everyone knows what to read now.',
        },
        {
          id: 'cb-read-anywhere',
          text: 'The club reads the winner wherever it lives. On Kahana or via the Wishlist link — discussion still happens in the Feed. A club is never blocked by a title not being on Kahana.',
        },
        {
          id: 'cb-pass-outreach',
          text: 'If the winning title — or any title with real votes — is not on Kahana, pass it to outreach (below) with the title, creator name, member count, and vote.',
        },
      ],
    },
    {
      id: 'outreach-coordinate',
      title: 'Outreach to creators — coordinate first',
      intro:
        'Any club member can do this, not just the host — but only one person should contact a given creator.',
      steps: [
        {
          id: 'cb-flag-outreach',
          text: 'Before contacting anyone, flag it in the club (for example in the Feed) that you are going to reach out, so nobody else does the same.',
        },
        {
          id: 'cb-check-dup',
          text: 'Check nobody has already reached out to this creator. If someone has, leave it with them.',
        },
        {
          id: 'cb-one-sender',
          text: 'Agree on one sender. Usually the person who raised the title, or the host. One voice, one message.',
        },
      ],
    },
    {
      id: 'outreach-message',
      title: 'Outreach to creators — the message',
      steps: [
        {
          id: 'cb-msg-appreciate',
          text: 'Always open with genuine, specific appreciation for their work. No flattery you cannot back up.',
        },
        {
          id: 'cb-msg-why',
          text: 'Explain why: you host a book or video club on Kahana, a digital library, with a stated number of members.',
        },
        {
          id: 'cb-msg-poll',
          text: 'Make it personal: the club ran a poll, and their title came out on top — the one the most members wanted.',
        },
        {
          id: 'cb-msg-ask',
          text: 'Make the ask plainly: upload their work to Kahana so the club can read or watch it, free or at a price they set.',
        },
        {
          id: 'cb-msg-help',
          text: 'Offer white-glove help getting set up, and mention featured placement and Growth plan benefits where appropriate.',
        },
        {
          id: 'cb-msg-close',
          text: 'Close warmly and leave the decision with them. Do not follow up endlessly.',
        },
      ],
    },
    {
      id: 'outreach-rules',
      title: 'Outreach to creators — rules',
      steps: [
        {
          id: 'cb-honest-numbers',
          text: 'Be honest with numbers. Never inflate the member count or the vote. If the club has eight members, say eight.',
        },
        {
          id: 'cb-rights',
          text: 'Only approach creators who can say yes. Traditionally published authors often do not hold digital rights; KDP Select / Kindle Unlimited titles are barred from posting elsewhere. If in doubt, check before sending.',
        },
        {
          id: 'cb-one-message',
          text: 'One kind message. If they decline or do not reply, do not chase. Log the outcome and move on.',
        },
        {
          id: 'cb-personalize',
          text: 'Personalize every outreach message. A template that reads like a mass mail undoes the demand-led advantage.',
        },
      ],
    },
    {
      id: 'log-feedback',
      title: 'Logging feedback and issues',
      intro:
        'Hosts see club problems first. Silent frustration helps no one. Bugs, rough edges, and feature ideas — including new community-building and monitoring tools — go in Kahana’s feedback section.',
      steps: [
        {
          id: 'cb-log-now',
          text: 'When you hit a bug, a rough edge, or an idea while running a club, capture it straight away rather than trusting memory.',
        },
        {
          id: 'cb-log-app-feedback',
          text: 'Open the feedback section in the Kahana app (What can we improve / support panel). Pick Feature idea, Bug, or Other, write enough that someone who was not there can act, and Submit.',
          href: KAHANA_FEEDBACK_URL,
          hrefLabel: 'Kahana feedback (What can we improve)',
        },
        {
          id: 'cb-log-feature-ideas',
          text: 'Want a new community-building or monitoring feature — club analytics you cannot see, better member insights, vote/event dashboards, reminders, moderation tools? File it as a Feature idea in that same feedback section. Do not only Slack it. The form is the record Product uses.',
        },
        {
          id: 'cb-log-detail',
          text: 'Describe what happened, what you expected, and where. For a bug, the steps to reproduce matter most. For a feature idea, say the job you were trying to do and what you wished Kahana showed or did.',
        },
        {
          id: 'cb-log-pm',
          text: 'If it is blocking club work, also flag it to the Project Manager so it can hit the technical backlog quickly. The feedback form still gets filed.',
        },
      ],
    },
    {
      id: 'keepers-codex',
      title: 'The Keeper’s Codex',
      intro:
        'The Codex is the digestible, click-by-click checklist for founding, tending, inviting, stocking, and growing a hall. Work it from founding through the first cycle, then as the rhythm of the hall.',
      steps: [
        {
          id: 'cb-codex-open',
          text: 'Open The Keeper’s Codex and check Done as you complete each labour. Section VI (creator outreach / missing volume) is proposed, not standing.',
          href: '/sops/keepers-codex',
          hrefLabel: 'The Keeper’s Codex checklist',
        },
      ],
    },
  ],
  doneWhen: [
    'A club is published with name, description, visibility, join mode, and (if discoverable) policies set deliberately.',
    'There are enough active members to run a poll, and they understand theme and frequency.',
    'The current cycle has a chosen title, a place to read it, Feed discussion, and a next event.',
    'Community health was checked in Kahana (Members, votes, Feed, events, Aura) and in Mixpanel — living hall vs silent list, with a next action.',
    'Titles not on Kahana are passed to one coordinated, honest outreach and the outcome is logged.',
    'Bugs and feature ideas — including new community-building and monitoring features — are in the Kahana feedback section; blockers are flagged to the PM.',
    'Keeper’s Codex labours through first cycle are in progress or done.',
  ],
}

export const COMMUNITY_BUILDING_ALIASES = {
  'running-a-book-or-video-club': 'community-building',
  'inviting-members-to-a-club': 'community-building',
  'choosing-what-the-club-reads': 'community-building',
  'outreach-to-creators-for-a-club': 'community-building',
  'logging-feedback-and-issues': 'community-building',
}
