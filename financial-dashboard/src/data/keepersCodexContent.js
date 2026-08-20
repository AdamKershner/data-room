import plateLibrary from '../images/sops/plate-library.jpg'
import plateCreateChooser from '../images/sops/plate-create-chooser.jpg'
import plateCreateIncomplete from '../images/sops/plate-create-incomplete.jpg'
import plateCreateReady from '../images/sops/plate-create-ready.jpg'
import plateFeed from '../images/sops/plate-feed.jpg'
import plateEvents from '../images/sops/plate-events.jpg'
import plateEventDetails from '../images/sops/plate-event-details.jpg'
import plateEventMeeting from '../images/sops/plate-event-meeting.jpg'
import plateMembers from '../images/sops/plate-members.jpg'
import plateFeedback from '../images/sops/plate-feedback.jpg'
import plateWishlist from '../images/sops/plate-wishlist.jpg'
import plateChooseHub from '../images/sops/plate-choose-hub.jpg'
import plateAddContent from '../images/sops/plate-add-content.jpg'
import { KAHANA_FEEDBACK_URL, KAHANA_SUPPORT_URL } from '../constants/kahanaSite'

/**
 * Step bodies for /sops/keepers-codex/:stepId
 * Block types: p, h2, ol, ul, table, callout, copy, link, image
 */

export const KEEPERS_CODEX_CONTENT = {
  'halls-and-shelves': {
    intro:
      'A library is not one thing but three: the vaults that hold what is written, the halls where readers gather, and the shelf in each hall that says — this, now, together.',
    blocks: [
      {
        type: 'p',
        text: 'In the product these are called hubs, clubs, and Wish lists. Those are the names on every button, so those are the names used in every instruction that follows.',
      },
      {
        type: 'table',
        rows: [
          ['Name', 'What it is', 'Who sees it'],
          [
            'Hub',
            'A container for content — files, links, embedded videos. Content actually lives here.',
            'Public or private, per hub settings',
          ],
          [
            'Club',
            'A private group gathered around reading or watching together. A club holds no content itself; it points at hubs and links.',
            'Members only, unless visibility is changed',
          ],
          [
            'Wish list',
            'The club’s reading or watch list. Entries may point to a Library hub, one of your own hubs, an uploaded file, or any external URL.',
            'Club members',
          ],
        ],
      },
      {
        type: 'image',
        src: plateLibrary,
        alt: 'Kahana sidebar: Library, Clubs, My clubs, Create, and the Library search bar.',
        caption: 'PLATE I — Where everything lives. 1 Library · 2 Clubs · 3 My clubs · 4 Create · 5 Search',
      },
      { type: 'h2', text: 'Of books and of moving pictures' },
      {
        type: 'callout',
        kind: 'important',
        title: 'Know this first',
        text: 'There is no separate book club or video club in the product. Both are made through the same Create club flow, with identical settings. The difference is a convention we keep — and keeping it is what makes Clubs discovery legible to a stranger.',
      },
      {
        type: 'table',
        rows: [
          ['', 'Book club', 'Video club'],
          ['Creation flow', 'Create club — identical', 'Create club — identical'],
          ['Naming', 'Say the format: “Sci-Fi Book Club”', 'Say the format: “Design Watch Club”'],
          ['Description', 'State format in the first line', 'State format in the first line'],
          [
            'Wish list',
            'eBooks and documents — Library hubs, your hubs, uploads',
            'YouTube links and video hubs, added via Add a link',
          ],
          ['Events', 'Discussion after a chapter or title', 'Watch-along, or discussion after a video'],
        ],
      },
      {
        type: 'p',
        text: 'The test: a reader should know the format from the club name alone, without opening the shelf.',
      },
      {
        type: 'callout',
        kind: 'help',
        text: 'Naming is a team convention, not something the product enforces. Whether it should be enforced is still an open decision.',
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/open-decisions',
        label: 'See Open decisions →',
      },
    ],
  },

  'create-club': {
    intro:
      'No hall opens itself. Someone must name it, light it, and decide who may cross the threshold. Every one of those decisions is easier made now than explained later to a reader standing at a locked door.',
    blocks: [
      { type: 'h2', text: '1.1 Opening the create flow' },
      {
        type: 'ol',
        items: [
          {
            text: 'Click Create in the left sidebar (under My stuff). You can also open Create club from the Clubs page (top right) — same builder.',
          },
          { text: 'Create hub — for a new content container. Not what you want here.' },
          { text: 'Add content — for putting files, links or videos into a hub that already exists.' },
          { text: 'Create club — this one. Choose it.' },
        ],
      },
      {
        type: 'image',
        src: plateCreateChooser,
        alt: 'Create chooser: Create hub, Add content, Create club.',
        caption: 'PLATE II — Create → Create club',
      },
      { type: 'h2', text: '1.2 Furnishing the hall' },
      {
        type: 'p',
        text: 'The club opens as a settings panel with seven sections down the left rail. Name and Description must be filled before Create & publish will fire. Work the rest of the rail before you invite anyone.',
      },
      {
        type: 'ol',
        items: [
          {
            text: 'Name — required. It appears on the club page and in Clubs discovery. Follow the naming convention (state book or video).',
          },
          {
            text: 'Work down the rail: Description, Photos, Visibility, Join mode, Policies, Invite link.',
          },
          {
            text: 'The Restricted badge shows the current visibility state. Confirm it is what you intend.',
          },
          {
            text: 'Create & publish stays greyed until Name and Description are filled. If you chose a discoverable visibility, Policies must also be complete.',
          },
        ],
      },
      {
        type: 'image',
        src: plateCreateIncomplete,
        alt: 'Create club builder with Name empty and Create & publish disabled.',
        caption: 'PLATE III — Before the required fields are complete — note the greyed Create & publish',
      },
      { type: 'h2', text: 'What each rail section governs' },
      {
        type: 'table',
        rows: [
          ['Section', 'What to set', 'Required'],
          ['Name', 'Club name, stating the format', 'Yes — to create'],
          [
            'Description',
            'One line on format and cadence; one line on who it is for',
            'Yes — to create (also required before the invite link activates)',
          ],
          [
            'Photos',
            'One upload sets both the cover banner and the circular avatar. Drag the preview to set the focal point. Portrait, 3:4, reads best.',
            'Optional for publish — required by this codex before you invite (see Launch threshold)',
          ],
          [
            'Visibility',
            'Restricted (invite link only, hidden from Clubs). Anyone with the link (preview without listing). Visible on Clubs page (discoverable).',
            'Yes — set it deliberately. Default is Restricted.',
          ],
          [
            'Join mode',
            'Auto-join: anyone with access joins at once. Request to join: you approve each person.',
            'Strongly advised — confirm before sharing a link widely',
          ],
          [
            'Policies',
            'Age rating, adult-content declaration, public listing terms, content-rights attestation.',
            'Required before Anyone with the link or Visible on Clubs page. Private (Restricted) clubs can skip until they go discoverable.',
          ],
          [
            'Invite link',
            'The shareable join link. Copy link becomes available once the club exists.',
            'Optional at founding — copy it after publish',
          ],
        ],
      },
      {
        type: 'callout',
        kind: 'help',
        title: 'Product vs convention',
        text: 'The product will let you publish a Restricted club with only a name and description. Photos are optional for publish; one file sets cover and avatar together. Policies are required only when the club is discoverable. This codex still asks you to complete Photos and Join mode before inviting — an empty hall with no cover reads as abandoned.',
      },
      { type: 'h2', text: '1.3 Lighting the lamp' },
      {
        type: 'ol',
        items: [
          { text: 'With Name and Description complete, Create & publish becomes active (unless Policies are blocking a discoverable visibility).' },
          {
            text: 'Check Visibility and Join mode once more. These are far cheaper to set now than to explain to a confused member later.',
          },
          { text: 'Click Create & publish.' },
          { text: 'Copy link becomes available once the club exists. Keep it for Inviting people.' },
        ],
      },
      {
        type: 'image',
        src: plateCreateReady,
        alt: 'Create club builder with name filled and Create & publish active.',
        caption: 'PLATE IV — Ready — name filled, Create & publish active',
      },
      {
        type: 'callout',
        kind: 'help',
        text: 'The Preview button in the create builder is currently unreliable — use Create & publish, then check the live club.',
      },
      {
        type: 'link',
        to: '/sops/running-a-book-or-video-club',
        label: 'Long-form SOP 1: Running a Book Club or Video Club →',
      },
    ],
  },

  'launch-threshold': {
    intro:
      'A hall is a draft until every line below is true. Do not summon anyone before then: an empty club with no cover and a bare shelf reads as abandoned, and a reader who finds one does not return.',
    blocks: [
      {
        type: 'ul',
        items: [
          'Name follows the convention and states book or video',
          'Description explains format, cadence, and who it is for',
          'Cover photo uploaded (one file sets banner and avatar)',
          'Visibility and Join mode set deliberately, not left at default unless default is what you intend',
          'Policies completed if the club is Anyone with the link or Visible on Clubs page',
          'At least three items on the Wish list',
          'A first event scheduled, or a first Feed post published',
          'Invite link opened and tested in a private browser window',
        ],
      },
      {
        type: 'p',
        text: 'Work the later labours in this checklist to make those last four true. Then come back and mark this row Done.',
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/wishlist',
        label: 'Next: stock the Wish list →',
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/feed',
        label: 'Or seed the Feed first →',
      },
    ],
  },

  feed: {
    intro:
      'A hall left untended is indistinguishable from a hall abandoned. The shelves do not mind. The readers do, and they leave quietly, and they do not say why.',
    blocks: [
      {
        type: 'p',
        text: 'A published club has four tabs: Wish list, Feed, Events, Members. The Feed is the hall’s record of talk. Do this before inviting anyone.',
      },
      {
        type: 'ol',
        items: [
          { text: 'Open the Feed tab.' },
          { text: 'Use Create post in the header for ordinary posting.' },
          {
            text: 'On an empty club use the Create a post prompt to seed the first conversation. Do this before inviting anyone.',
          },
        ],
      },
      {
        type: 'image',
        src: plateFeed,
        alt: 'Empty club Feed tab with Create post and Start the conversation.',
        caption: 'PLATE V — Feed — posts remain as the club’s discussion archive',
      },
      {
        type: 'p',
        text: 'Members post after finishing a hub or chapter. Replies stay there as the club’s history. Encourage Aura on hubs the group enjoys — that is how good work rises on Kahana.',
      },
    ],
  },

  events: {
    intro:
      'Use the Events tab to schedule live discussions or watch-alongs. Pair with Feed for what was discussed after.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'Open the Events tab.' },
          { text: 'Use Schedule discussion in the header once events exist.' },
          { text: 'On an empty club use Schedule a discussion in the prompt.' },
        ],
      },
      {
        type: 'image',
        src: plateEvents,
        alt: 'Empty club Events tab with Schedule discussion.',
        caption: 'PLATE VI — Events — upcoming gatherings; past ones remain in the archive',
      },
      { type: 'h2', text: 'The event: Details' },
      {
        type: 'ol',
        items: [
          { text: 'Details opens by default. This is what members see on the Events tab.' },
          { text: 'Title — required. Name the actual discussion, not “Weekly discussion”.' },
          { text: 'Start — required. Date and time.' },
          {
            text: 'Time zone — IANA format, e.g. America/Chicago. Set it every single time; this team spans US and India hours.',
          },
          { text: 'Description — optional agenda or notes.' },
          { text: 'Publish event once the Meeting tab is also done.' },
        ],
      },
      {
        type: 'image',
        src: plateEventDetails,
        alt: 'New event Details: title, start, timezone, description, Publish event.',
        caption: 'PLATE VII — New event → Details',
      },
      { type: 'h2', text: 'The event: Meeting' },
      {
        type: 'ol',
        items: [
          { text: 'Open Meeting in the left rail.' },
          { text: 'Google Meet — generate a Meet link.' },
          { text: 'Schedule in Zoom — create a scheduled Zoom meeting.' },
          { text: 'Start Zoom now — for an immediate session.' },
          { text: 'Meeting link — or paste any Zoom, Meet, Teams or other http(s) join link.' },
          {
            text: 'Prep tells members what to read or watch beforehand (you can link a Wish list item). Reminders governs notification timing (in-app and email: 1 week, 1 day, 1 hour before).',
          },
        ],
      },
      {
        type: 'image',
        src: plateEventMeeting,
        alt: 'New event Meeting: Google Meet, Zoom, paste link, location.',
        caption: 'PLATE VIII — New event → Meeting',
      },
    ],
  },

  rhythm: {
    intro: 'The cadence that keeps a hall from going quiet — and where a broken thing goes.',
    blocks: [
      { type: 'h2', text: 'The rhythm' },
      {
        type: 'table',
        rows: [
          ['Act', 'How often', 'Whose hand'],
          ['Feed post', 'Weekly at least — after a title, chapter or video', 'Club owner'],
          ['Wish list refresh', 'Every two weeks, or when the current title ends', 'Club owner'],
          ['Event or discussion', 'Every two weeks minimum; weekly if the hall is lively', 'Club owner'],
          ['Member review', 'Monthly — clear pending joins, rouse the quiet ones', 'Club owner'],
          ['Content gap review', 'Weekly — see The missing volume', 'Club owner → Pod B'],
        ],
      },
      {
        type: 'p',
        text: 'Each cycle the group picks what to read or watch next from the Wish list. Members upvote items; sort by Votes or Recent. Ask members to vote nudges anyone who has not voted, once every 24 hours. Set the winner with Set as focus so it becomes the Current focus banner. Clear focus when the cycle ends.',
      },
      {
        type: 'link',
        to: '/sops/choosing-what-the-club-reads',
        label: 'Long-form SOP 3: Choosing What the Club Reads →',
      },
      { type: 'h2', text: 'When something breaks' },
      {
        type: 'table',
        rows: [
          ['The situation', 'Where it goes'],
          ['Something in the product is broken', 'Feedback form — category Bug'],
          ['A feature would make clubs work better', 'Feedback form — category Feature idea'],
          ['An account matter needing a reply', 'The Support link on the feedback page'],
          [
            'A club launch or deadline is blocked',
            'Slack, tagging the Clubs lead — then file the form so it is on record',
          ],
          [
            'A confirmed bug needing engineering time',
            'Raise to Divya Emmadi for the Linear backlog, stating the reader problem and the KPI it moves',
          ],
        ],
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/log-feedback',
        label: 'How to file the form →',
      },
    ],
  },

  'invite-members': {
    intro:
      'A door is only hospitable if it opens. Test yours before thirty people arrive at it. Every invitation control sits on the Members tab. Three routes lead in, and they behave differently. Choose deliberately.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'Get invite link — a shareable join link. Best for group channels and social.' },
          {
            text: 'Invite by email — enter an address. Existing Kahana users also receive an in-app invitation; new people may sign up with that email and join.',
          },
          { text: 'Send — dispatches it.' },
          {
            text: 'Suggested people — those you follow, who follow you, or whose hubs you have saved. You may also search any name.',
          },
          { text: 'Invite on a person’s row sends an in-app invitation.' },
          { text: 'Copy join link — puts the link on your clipboard.' },
        ],
      },
      {
        type: 'image',
        src: plateMembers,
        alt: 'Members tab: Get invite link, email invite, Suggested people, Copy join link.',
        caption: 'PLATE IX — Members — invite link, email invitation, and suggested people',
      },
      { type: 'h2', text: 'Which door for whom' },
      {
        type: 'table',
        rows: [
          ['The reader', 'The route', 'Why'],
          ['Friends and family', 'Invite link / Copy join link', 'Least friction — one link, one click'],
          ['Someone already on Kahana', 'Suggested people → Invite', 'They receive it in-app at once'],
          [
            'Someone not yet on Kahana',
            'Invite by email',
            'They sign up with that address and land inside the club',
          ],
          ['A channel or community', 'Get invite link', 'One link, many joiners'],
          [
            'A creator you are courting',
            'Email invite, with the letter in Templates',
            'Context persuades; a bare link does not',
          ],
        ],
      },
      { type: 'h2', text: 'What the invited see' },
      {
        type: 'ul',
        items: [
          'Existing Kahana users receive an in-app invitation as well as the email.',
          'Those without an account may sign up with the invited address and join from there.',
          'Whether a joiner enters at once or waits as pending depends on the club’s Join mode. Confirm it before sharing a link widely.',
        ],
      },
      {
        type: 'callout',
        kind: 'important',
        title: 'Test the door',
        text: 'Open your invite link in a private browser window before you share it. It costs ten seconds and catches every visibility and join-mode mistake before thirty people meet it.',
      },
      {
        type: 'p',
        text: 'Aim for a small, active core rather than a large, silent list. Member count matters later: when we ask a creator to add their work, the number of real members who wanted their title is the heart of the pitch. Accurate numbers only.',
      },
      {
        type: 'link',
        to: '/sops/inviting-members-to-a-club',
        label: 'Long-form SOP 2: Inviting Members to a Club →',
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/templates',
        label: 'Copy-ready invitation text →',
      },
    ],
  },

  'log-feedback': {
    intro:
      'Nothing is mended that is not reported. Say plainly what broke, where it stood, and how one might break it again. The form is the default channel. Slack is for urgency, never for the record.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'Feature idea — something that does not exist and would help.' },
          { text: 'Bug — something that exists and does not work.' },
          { text: 'Other — neither of the above.' },
          {
            text: 'Your feedback — required. Use the form in Templates; a single line can rarely be acted upon.',
          },
          { text: 'Submit.' },
          {
            text: 'Support — use this instead if you need a reply about your own account. The feedback form is not a support ticket and promises no answer.',
          },
        ],
      },
      {
        type: 'link',
        href: KAHANA_FEEDBACK_URL,
        label: 'Open the improvement survey →',
      },
      {
        type: 'image',
        src: plateFeedback,
        alt: 'What can we improve form: Feature idea, Bug, Other, Your feedback, Submit, Support.',
        caption: 'PLATE X — The feedback form — category, account, submission',
      },
      { type: 'h2', text: 'What a good report contains' },
      {
        type: 'table',
        rows: [
          ['Field', 'What to write'],
          ['What happened', 'One plain sentence. “The invite link opened a 404 for a non-member.”'],
          [
            'Steps to reproduce',
            'Numbered, from a clean start. If you cannot reproduce it, say so.',
          ],
          ['Expected vs actual', 'What you thought would happen, and what did.'],
          ['Club URL', 'Paste it in full. Without it, most reports cannot be investigated.'],
          ['Screenshots', 'Attach or link, with the element marked.'],
          ['Severity', 'Blocker, Major, or Minor — see below.'],
          ['Browser and device', 'e.g. Chrome 128, macOS. It matters more often than anyone expects.'],
        ],
      },
      { type: 'h2', text: 'The three degrees' },
      {
        type: 'table',
        rows: [
          ['Degree', 'Meaning', 'And also'],
          [
            'Blocker',
            'A core club action cannot be completed at all',
            'Post in Slack at once, then file the form',
          ],
          [
            'Major',
            'It works, but with a poor workaround or risk to data',
            'File the form; raise it in the weekly update',
          ],
          ['Minor', 'Cosmetic, or rarely encountered', 'File the form only'],
        ],
      },
      { type: 'h2', text: 'Which channel' },
      {
        type: 'table',
        rows: [
          ['Channel', 'For'],
          ['Feedback form', 'Every fault and idea. This is what creates the record.'],
          ['Support link', 'Account matters where you need a reply.'],
          ['Slack', 'Urgency and coordination only — never the sole record. File the form as well.'],
          [
            'Linear',
            'Engineering-owned work, raised through Divya Emmadi. Not filed directly by GTM.',
          ],
        ],
      },
      {
        type: 'link',
        href: KAHANA_SUPPORT_URL,
        label: 'Support (account reply) →',
      },
      {
        type: 'link',
        to: '/sops/logging-feedback-and-issues',
        label: 'Long-form SOP 5: Logging Feedback and Issues →',
      },
    ],
  },

  wishlist: {
    intro:
      'The shelf is the first thing a reader looks at and the last thing they forgive. Never leave it bare, and never let it wander. The Wish list should never be empty when invitations go out.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'On the Wish list tab, click Add to Wish list.' },
          {
            text: 'Add a link — Goodreads, YouTube, Coursera, any URL. This is also the placeholder route for a volume the library does not yet hold.',
          },
          {
            text: 'From Library — search public hubs already on Kahana. Prefer this above all others.',
          },
          { text: 'From your hubs — your own hubs and files, private ones included.' },
          {
            text: 'Upload a file — creates a private hub you own, then adds it. Only for material you hold the rights to.',
          },
        ],
      },
      {
        type: 'image',
        src: plateWishlist,
        alt: 'Add to Wish list: Add a link, From Library, From your hubs, Upload a file.',
        caption: 'PLATE XI — Wish list → Add to Wish list, and its four sources',
      },
      { type: 'h2', text: 'The order of preference' },
      {
        type: 'p',
        text: 'Work down. Descend only when the tier above genuinely holds nothing.',
      },
      {
        type: 'table',
        rows: [
          ['Order', 'Source', 'When'],
          [
            '1',
            'From Library',
            'The title is already on Kahana. Keeps the reader inside the library and gives the creator their Aura.',
          ],
          ['2', 'From your hubs', 'You or the team published it already.'],
          [
            '3',
            'Upload a file',
            'Openly licensed material, rights verified first. Who approves an upload is still an open decision.',
          ],
          [
            '4',
            'Add a link',
            'Nothing on Kahana yet. A temporary placeholder, and a gap to be opened.',
          ],
        ],
      },
      { type: 'h2', text: 'Keeping the shelf' },
      {
        type: 'ul',
        items: [
          'Search before adding. Duplicates are the commonest fault and are invisible to whoever adds them.',
          'One purpose to a hall. If the shelf drifts across two unrelated themes, found a second club rather than let it sprawl.',
          'Keep the current title obvious. Set as focus pins the winner as Current focus so a reader sees what to read now, not merely what exists.',
          'Members upvote items; sort by Votes or Recent. Ask members to vote nudges anyone who has not voted, once every 24 hours.',
          'Prune what is finished or abandoned. A shelf is curated, not accumulated.',
        ],
      },
      {
        type: 'callout',
        kind: 'exception',
        title: 'Without exception',
        text: 'Every external link added under order 4 must have a matching row in the Ledger of Missing Volumes. This is the only way a gap ever becomes a volume.',
      },
      {
        type: 'link',
        to: '/sops/choosing-what-the-club-reads',
        label: 'Long-form SOP 3: Choosing What the Club Reads →',
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/ledger',
        label: 'Ledger of Missing Volumes →',
      },
    ],
  },

  'add-content': {
    intro:
      'When content must go into a hub first — material you are publishing on the team’s behalf, for instance — use Create → Add content.',
    blocks: [
      {
        type: 'ol',
        items: [
          { text: 'Choose the destination hub, or Create new if none exists.' },
          { text: 'Existing hubs are searchable by name.' },
          { text: 'Create new raises a fresh hub within the same flow.' },
          { text: 'Continue.' },
        ],
      },
      {
        type: 'image',
        src: plateChooseHub,
        alt: 'Choose a hub: search, existing hubs, Create new, Continue.',
        caption: 'PLATE XII — Add content → Choose a hub',
      },
      {
        type: 'ol',
        items: [
          { text: 'Confirm the ADDING TO banner names the right hub before uploading anything.' },
          { text: 'Upload files — documents and eBooks.' },
          { text: 'Add a link — embed a webpage URL.' },
          {
            text: 'Add YouTube — embed a YouTube or Shorts video. The chief route for video club content.',
          },
        ],
      },
      {
        type: 'image',
        src: plateAddContent,
        alt: 'Add content: Upload files, Add a link, Add YouTube.',
        caption: 'PLATE XIII — Add content → the three kinds',
      },
    ],
  },

  'content-gap': {
    intro:
      'Sooner or later a reader asks for a volume the library does not hold. What happens next is the whole difference between a library and a list of links.',
    blocks: [
      {
        type: 'callout',
        kind: 'proposed',
        title: 'Proposed, not yet ordained',
        text: 'What follows is the method this codex proposes. It is grounded in what the product supports today and awaits confirmation from the Sponsor or Clubs lead before it is treated as settled. See Open decisions.',
      },
      {
        type: 'table',
        rows: [
          ['Stage', 'What happens', 'Whose hand'],
          [
            '1 · The gap appears',
            'A reader or club owner wants a title the library does not hold.',
            'Club owner',
          ],
          [
            '2 · A placeholder is set',
            'Add it to the Wish list via Add a link, pointing at the public source. The hall is not blocked.',
            'Club owner',
          ],
          [
            '3 · The gap is written down',
            'A row in the Ledger with source URL and requesting club.',
            'Club owner',
          ],
          [
            '4 · Rights are weighed',
            'Is the creator free to publish? Same criteria as creator acquisition — self-published and selling outside Amazon is the strong signal.',
            'Pod B',
          ],
          [
            '5 · The letter is sent',
            'Template in Copy-ready templates. The founder writes to high-value creators; otherwise the club owner does.',
            'Pod B / Founder',
          ],
          ['6 · The volume arrives', 'The creator publishes on Kahana.', 'The creator'],
          [
            '7 · The shelf is corrected',
            'Replace the placeholder with the true Kahana hub via From Library. Close the row.',
            'Club owner',
          ],
        ],
      },
      {
        type: 'callout',
        kind: 'exception',
        title: 'Never omit stage 7',
        text: 'A placeholder left standing after the creator has published sends readers out of the library and denies the creator their Aura. Closing the loop is the entire purpose of the workflow.',
      },
      {
        type: 'link',
        to: '/sops/outreach-to-creators-for-a-club',
        label: 'Long-form SOP 4: Outreach to Creators for a Club →',
      },
    ],
  },

  'creator-letter': {
    intro:
      'The hall’s name — a real club of real readers already waiting on this exact title — is the hook, and it outperforms any description of the platform.',
    blocks: [
      {
        type: 'callout',
        kind: 'proposed',
        title: 'Proposed, not yet ordained',
        text: 'Handoff thresholds and who sends the letter are still open decisions. Until then, coordinate so only one person contacts a given creator.',
      },
      { type: 'h2', text: 'What the letter must carry' },
      {
        type: 'ul',
        items: [
          'The hall’s name — a real club of real readers is already waiting on this exact title.',
          'Why Kahana — Aura is earned through genuine reader appreciation, never bought. Discovery here is not pay-to-play.',
          'What “done” looks like — publish the title as a hub so the club may shelve it. Be concrete.',
          'What they receive — white glove onboarding, featured placement, a Growth plan discount.',
          'One next step only. A reply, or a call. Never two asks in one letter.',
        ],
      },
      { type: 'h2', text: 'Passing the work to Pod B' },
      {
        type: 'p',
        text: 'Club-driven outreach and the wider creator acquisition programme draw on one pipeline. Hand over; do not run a second one in parallel.',
      },
      {
        type: 'ul',
        items: [
          'High-value or multi-title creators → to Pod B, for founder-sent sequenced outreach.',
          'One-off, low-profile creators → the club owner may write directly using the template, but must still record the prospect centrally.',
          'Traditionally published or Amazon-exclusive authors → do not pursue. A title in Kindle Unlimited means KDP Select, and the author cannot publish elsewhere. Close the row with that reason and keep the placeholder.',
        ],
      },
      {
        type: 'p',
        text: 'Be honest with numbers. Never inflate the member count or the vote. Coordinate first within the club so only one person reaches out.',
      },
      {
        type: 'link',
        to: '/sops/keepers-codex/templates',
        label: 'Copy the letter template →',
      },
      {
        type: 'link',
        to: '/sops/outreach-to-creators-for-a-club',
        label: 'Long-form SOP 4: Outreach to Creators →',
      },
    ],
  },

  templates: {
    intro: 'Ready to copy. Fill the brackets; do not send the brackets.',
    blocks: [
      { type: 'h2', text: 'I.1 Invitation — short' },
      {
        type: 'copy',
        text: 'I started a club on Kahana for [topic] — we’re reading [current title] and discussing it on [date]. Small group, one link, no ceremony. Join here: [invite link]',
      },
      { type: 'h2', text: 'I.2 Invitation — for a group channel' },
      {
        type: 'copy',
        text: 'Starting a [book/video] club on Kahana for anyone into [topic]. First up is [title], discussion on [date]. No pressure to keep pace — join, read what you want, turn up anyway. [invite link]',
      },
      { type: 'h2', text: 'I.3 Fault report' },
      {
        type: 'p',
        text: 'Paste this into the Your feedback field and fill it in.',
      },
      {
        type: 'copy',
        text: 'What happened: [one sentence]  ·  Steps: 1) … 2) … 3) …  ·  Expected: [what should have happened]  ·  Actual: [what did]  ·  Club URL: [paste]  ·  Severity: [Blocker / Major / Minor]  ·  Browser and device: [e.g. Chrome 128, macOS]  ·  Screenshot: [attached / link]',
      },
      { type: 'h2', text: 'I.4 Letter to a creator' },
      {
        type: 'p',
        text: 'Subject: A club on Kahana is waiting for [Title]',
      },
      {
        type: 'copy',
        text: 'Hi [Name] — I run a [book/video] club on Kahana, a digital library where what rises does so because readers valued it, not because someone paid for the placement. Our members put [Title] on the club’s shelf, but it isn’t on the platform yet, so for now we can only link out to it. If you published it on Kahana, the club could read it there directly — and you’d reach readers who asked for your work by name. Publishing is straightforward and we’ll set it up with you: white glove onboarding, featured placement at launch, and a discount on the Growth plan. Worth a short conversation? — [Your name], Kahana',
      },
      { type: 'h2', text: 'I.5 Club description — the pattern' },
      {
        type: 'copy',
        text: 'Line 1, format and cadence: “A book club reading one title every two weeks.”  ·  Line 2, who it is for: “For people who’d rather think about [topic] with others than alone.”  ·  Line 3, what happens: “Discussion every other Thursday. Read what you can; come anyway.”',
      },
    ],
  },

  ledger: {
    intro:
      'A gap noticed and not written down is a gap forgotten. This ledger is the only thread joining what readers ask for to what the library goes out and gets. Where the sheet lives is still an open decision — until then, keep a row somewhere the Clubs lead can see.',
    blocks: [
      {
        type: 'table',
        rows: [
          ['Column', 'Contents'],
          ['Title', 'The work the club wants'],
          ['Creator / Author', 'Name'],
          ['Requesting club', 'Which hall raised it'],
          ['Requested by', 'Member or club owner'],
          ['Date raised', 'Date'],
          [
            'Source URL',
            'Where it lives today — the same link used as the Wish list placeholder',
          ],
          ['Format', 'eBook · Video · Document'],
          [
            'Rights tier',
            'P1 non-exclusive · P2 partial rights · Excluded (KDP Select / traditionally published)',
          ],
          [
            'Status',
            'Not sourced → Qualified → Letter sent → Replied → Published → Shelved → Closed',
          ],
          ['Owner', 'Whose hand it is in now'],
          [
            'Decline reason',
            'Recorded on every no. This is what makes the ledger worth keeping.',
          ],
          ['Last updated', 'Date'],
        ],
      },
      { type: 'h2', text: 'The weekly reading of the ledger' },
      {
        type: 'ul',
        items: [
          'Any row at Not sourced beyond seven days — qualify it or close it.',
          'Any row at Published but not Shelved — correct it at once; the hall is still sending readers away.',
          'The same title asked for by two clubs is a priority, not a duplicate to delete.',
          'Read the decline reasons together. They are the cheapest signal available on where the offer fails to land.',
        ],
      },
    ],
  },

  'open-decisions': {
    intro:
      'Each of these needs a decision from the Sponsor or the Clubs lead before this codex passes from draft to standing. Each one blocks something real. Do not treat them as settled.',
    blocks: [
      {
        type: 'table',
        rows: [
          ['#', 'The matter', 'What it blocks'],
          [
            '1',
            'Is an external link an acceptable Wish list placeholder while outreach runs, or should gaps stay off the shelf entirely?',
            'Setting the shelf and The missing volume — the whole content gap workflow',
          ],
          [
            '2',
            'Where does the Ledger live, and who keeps it?',
            'The Ledger; the weekly reading cannot begin without it',
          ],
          [
            '3',
            'Which creators are club-owner-sent and which founder-sent, and at what threshold?',
            'The handoff rule in Write the creator letter',
          ],
          [
            '4',
            'Is there a target response time on feedback submissions?',
            'Log feedback — whether Slack escalation applies to Major as well as Blocker',
          ],
          [
            '5',
            'Are club naming conventions enforced, or left to the owner?',
            'Halls and shelves — legibility of Clubs discovery',
          ],
          [
            '6',
            'Who approves an uploaded file for rights before it reaches a shelf?',
            'Wish list order 3',
          ],
        ],
      },
      { type: 'h2', text: 'The trial' },
      {
        type: 'p',
        text: 'Before this codex is signed, one keeper who has never founded a club shall attempt all six labours below using these pages alone, and asking no one anything. Whatever they stumble on is a fault in the codex, not in them — and shall be corrected before signing.',
      },
      {
        type: 'ul',
        items: [
          'Found and publish a club',
          'Summon one reader by email and one by link',
          'Set three items on the shelf, drawn from three different sources',
          'Hold one event, with a meeting link and prep notes',
          'Report one fault in the proper form',
          'Open one gap, and enter it correctly in the Ledger',
        ],
      },
      {
        type: 'p',
        text: 'Aura is earned, never bought.',
      },
    ],
  },
}
