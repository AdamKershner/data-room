/**
 * SOP 29 — Adding and Updating SOPs (the data room).
 * How Engineers and Managers write SOP copy, ship it to the live site, and
 * keep the company GitHub copy in sync with Adam’s repo.
 */

import {
  DATA_ROOM_COMPANY_REPO_URL,
  DATA_ROOM_LIVE_URL,
  DATA_ROOM_REPO_URL,
  LINEAR_WORKSPACE_URL,
  TOOLS_ACCESS_TALLY_URL,
} from '../constants/kahanaSite'

export const UPDATING_DATA_ROOM_ALIASES = {
  'updating-sops': 'updating-the-data-room',
  'add-sop': 'updating-the-data-room',
  'data-room-sops': 'updating-the-data-room',
  'ship-data-room': 'updating-the-data-room',
}

export const UPDATING_DATA_ROOM_SOP = {
  id: 'updating-the-data-room',
  title: 'Adding and Updating SOPs',
  category: 'Engineering',
  owner: 'Engineering Lead / Manager',
  format: 'checklist',
  description:
    'Write or enhance a SOP in the data room, run it locally, push AdamKershner/data-room so Vercel deploys, then sync Kahana-LLC/data-room. This is not kahana.io (SOP 13) and not product-code setup (SOP 22).',
  excerpt:
    'This is how Engineers and Managers add or improve SOPs in the data room and ship the live site. We do it so the gallery stays the source of truth, Vercel stays current, and the company GitHub copy matches Adam’s repo.',
  keywords: [
    'data room',
    'sop',
    'github',
    'vercel',
    'adamkershner',
    'kahana-llc',
    'update',
    'checklist',
    'deploy',
    'financial-dashboard',
  ],
  who: 'Engineers and Managers who add a SOP, rewrite a SOP, or change any other data-room page.',
  when: 'A new SOP, a SOP rewrite, or any other data-room page change.',
  notes: [
    'This SOP is the data room (data-room-two.vercel.app). Public kahana.io is SOP 13. Product app setup is SOP 22. Never push kahana-web to Heroku kahana-public.',
    'Canonical GitHub is AdamKershner/data-room. That is origin, and Vercel deploys from it. Kahana-LLC/data-room is the company copy. Push there after origin succeeds. Do not point Vercel at the org copy unless Founder Adam moves the project.',
    'Do not commit .env files, access secrets, CSVs, or untracked dumps at the repo root. Add only the dashboard and SOP files you changed.',
  ],
  sections: [
    {
      id: 'access',
      title: '1. Access and run locally',
      intro:
        'You cannot edit the live gallery from Slack. Clone Adam’s repo, run financial-dashboard, and open /sops before you write.',
      steps: [
        {
          id: 'ud-tools',
          label: 'Request GitHub access on the tools form if you lack it',
          minutes: 10,
          doneWhen: 'Request GitHub access on the tools form if you do not already have the Kahana-LLC or AdamKershner invite.',
          text: 'Request GitHub access on the tools form if you do not already have it. Say you will contribute to code and give the GitHub email you use. Watch that inbox (and spam). Do not assume you can push until the invite is accepted.',
          href: TOOLS_ACCESS_TALLY_URL,
          hrefLabel: 'Get Access to Tools and Data',
        },
        {
          id: 'ud-clone',
          label: 'Clone AdamKershner/data-room, not a random fork',
          minutes: 10,
          doneWhen: 'Clone github.com/AdamKershner/data-room and confirm origin points there.',
          text: 'Clone github.com/AdamKershner/data-room. Confirm git remote -v shows origin as that URL. This is the canonical repo. Do not start from an old zip or a personal fork unless origin still tracks AdamKershner/data-room.',
          href: DATA_ROOM_REPO_URL,
          hrefLabel: 'github.com/AdamKershner/data-room',
        },
        {
          id: 'ud-dev',
          label: 'Run npm install and npm run dev in financial-dashboard',
          minutes: 10,
          doneWhen: 'Run npm install and npm run dev in financial-dashboard and open localhost.',
          text: 'cd financial-dashboard, then npm install and npm run dev. Vite serves localhost (port 5173 unless Vite prints another). Local npm run dev skips the Kahana hub gate. Open /sops and confirm the gallery loads before you edit.',
        },
        {
          id: 'ud-gallery',
          label: 'Open /sops and find the SOP you will add or change',
          minutes: 5,
          doneWhen: 'Open /sops and find the SOP you will add or change, or confirm the next number if this is new.',
          text: 'Open /sops and find the SOP you will add or change. New SOPs take the next number after the last gallery card (29 is this SOP; the next new one is 31). Do not reuse a retired id.',
          href: '/sops',
          hrefLabel: 'SOP gallery',
        },
      ],
    },
    {
      id: 'rules',
      title: '2. Writing rules',
      intro:
        'A stranger should finish the step from the page. Command voice, a Done when, and no Slack folklore.',
      steps: [
        {
          id: 'ud-command',
          label: 'Write labels and Done when as commands',
          minutes: 10,
          doneWhen: 'Write labels and Done when as commands the reader can do without you.',
          text: 'Write labels and Done when as commands the reader can do without you. Start with a verb. Keep labels short. The body explains the clicks. If a sentence is “if / when / should,” rewrite it as the action.',
        },
        {
          id: 'ud-copy',
          label: 'Keep public copy free of em dashes and teammate names',
          minutes: 5,
          doneWhen: 'Keep public copy free of em dashes, and skip individual teammate names unless the step is Founder Adam’s.',
          text: 'Keep public copy free of em dashes. First mention of the product is Kahana (AKA “The Aura Library”). Aura is the discovery signal, not the product name. Do not name individual teammates except Founder Adam when the step is actually his (SOP check, his Calendly).',
          href: '/sops/brand-guidelines',
          hrefLabel: 'SOP 6: Brand Guidelines',
        },
        {
          id: 'ud-meta',
          label: 'Set Function, Who, When or Trigger, and time on each step',
          minutes: 10,
          doneWhen: 'Set Function, Who, When (Daily, Weekly, Monthly, Quarterly, Annually) or Trigger, and minutes on each step.',
          text: 'Set Function, Who, and either When (Daily, Weekly, Monthly, Quarterly, Annually for routines) or Trigger (the event that starts the work). Put minutes on each step so the row badge and the SOP total are honest. The gallery shows cadence or trigger plus total time.',
        },
        {
          id: 'ud-feedback',
          label: 'Use Feedback when a SOP step is hard to follow',
          minutes: 5,
          doneWhen: 'Use the Feedback button on the SOP page when a step is hard to follow, then fix that page.',
          text: 'Use the Feedback button (top right) on the SOP page when a step is hard to follow. SOP 28 tells Managers to gather that from new hires. This SOP is how you ship the fix. Do not only explain the stuck moment in Slack.',
          href: '/sops/onboarding-as-a-manager',
          hrefLabel: 'SOP 28: Onboarding as a Manager',
        },
      ],
    },
    {
      id: 'add',
      title: '3. Add a new SOP',
      intro:
        'A new SOP is a data file plus a one-line register. Gallery, step routes, and search already read SOPS. Do not add an App.jsx route.',
      steps: [
        {
          id: 'ud-file',
          label: 'Create a new *Sop.js file next to the other SOP modules',
          minutes: 20,
          doneWhen: 'Create a new *Sop.js file in financial-dashboard/src/data, modeled on managerOnboardingSop.js.',
          text: 'Create a new *Sop.js file in financial-dashboard/src/data, modeled on managerOnboardingSop.js. Export the SOP object and a small aliases map. Give the SOP a stable id (kebab-case slug). Put sections, steps with id, label, doneWhen, text, and minutes. Optional href on a step for the live tool.',
        },
        {
          id: 'ud-register',
          label: 'Register it in sopContent.js with the next number',
          minutes: 15,
          doneWhen: 'Register it in sopContent.js: import, SOPS_RAW with the next number, SOP_READY_THROUGH, SOP_SCHEDULE, aliases.',
          text: 'Register it in sopContent.js: import the SOP and aliases, add { ...YOUR_SOP, number: N } to SOPS_RAW, set SOP_READY_THROUGH to N when it is ready for review, add SOP_SCHEDULE (cadence and/or trigger), and include the aliases in resolveSopId. The next new SOP after this one is 31.',
          href: '/sops',
          hrefLabel: 'SOP gallery',
        },
        {
          id: 'ud-kb',
          label: 'Add a Knowledge base row if the SOP should show on /knowledge-base',
          minutes: 5,
          doneWhen: 'Add a Knowledge base row if the SOP should show on /knowledge-base.',
          text: 'Add a Knowledge base row in knowledgeBaseEntries.js if the SOP should show on /knowledge-base. Gallery, /sops/:sopId, /sops/:sopId/:stepId, and search already pick up SOPS. Do not add a new App.jsx route.',
        },
      ],
    },
    {
      id: 'enhance',
      title: '4. Enhance an existing SOP',
      intro:
        'Edit the source file that already owns that SOP. Keep step ids stable so checklist progress does not reset.',
      steps: [
        {
          id: 'ud-source',
          label: 'Edit the source file that already owns that SOP',
          minutes: 20,
          doneWhen: 'Edit the source file that already owns that SOP (functionSops.js, a dedicated *Sop.js, or Codex/Quality step files).',
          text: 'Edit the source file that already owns that SOP. Most live in functionSops.js. Dedicated files include communityBuildingSop.js, productManagementPlaybookSop.js, managerOnboardingSop.js, searchConsoleSeoSop.js, and this file. Codex and Product Quality have their own step files. Keep step id values stable so saved checkboxes still match.',
        },
        {
          id: 'ud-stamp',
          label: 'Set SOP_LAST_UPDATED when the SOP copy ships',
          minutes: 2,
          doneWhen: 'Set SOP_LAST_UPDATED in sopStepUtils.js when the SOP copy ships.',
          text: 'Set SOP_LAST_UPDATED in sopStepUtils.js when the SOP copy ships. That stamp shows on every SOP. Use Eastern time, written out (for example August 27, 2026, 3:10 PM EST).',
        },
      ],
    },
    {
      id: 'ship',
      title: '5. Ship the live site',
      intro:
        'Vercel builds financial-dashboard from AdamKershner/data-room. Push origin, wait, then confirm data-room-two.vercel.app.',
      steps: [
        {
          id: 'ud-local',
          label: 'Check the changed pages on localhost before you commit',
          minutes: 15,
          doneWhen: 'Check the changed gallery card, SOP index, and at least one step page on localhost.',
          text: 'Check the changed gallery card, SOP index, and at least one step page on localhost. Click through like a reader. Hunt for a broken adjacent SOP, a missing badge, or a raw file path in public copy.',
        },
        {
          id: 'ud-add',
          label: 'Add only the dashboard and SOP files you changed',
          minutes: 5,
          doneWhen: 'Add only the dashboard and SOP files you changed. Leave .env, secrets, CSVs, and root dumps untracked.',
          text: 'git add only the dashboard and SOP files you changed. Never add .env, credentials, the access store, CSVs, or untracked dumps at the repo root. If login API files are sitting untracked, leave them unless you were asked to ship auth.',
        },
        {
          id: 'ud-push',
          label: 'Push origin to AdamKershner/data-room',
          minutes: 10,
          doneWhen: 'Commit and push origin (AdamKershner/data-room) so Vercel can deploy.',
          text: 'Commit with a short why-focused message, then git push origin. origin is AdamKershner/data-room. That push is what Vercel watches. Do not wait to “also” push the company copy before origin; Vercel will not see Kahana-LLC unless the project is moved.',
          href: DATA_ROOM_REPO_URL,
          hrefLabel: 'github.com/AdamKershner/data-room',
        },
        {
          id: 'ud-live',
          label: 'Confirm the change on data-room-two.vercel.app',
          minutes: 10,
          doneWhen: 'Confirm the change on data-room-two.vercel.app after Vercel finishes the deploy.',
          text: 'Confirm the change on data-room-two.vercel.app after Vercel finishes (usually a couple of minutes). Hard-refresh the SOP. Same-week edits from SOP 28 feedback count as this SOP.',
          href: DATA_ROOM_LIVE_URL,
          hrefLabel: 'data-room-two.vercel.app',
        },
      ],
    },
    {
      id: 'sync',
      title: '6. Sync the company repo',
      intro:
        'After origin succeeds, the same commit must land on Kahana-LLC/data-room. That org copy is not the Vercel source.',
      steps: [
        {
          id: 'ud-remote',
          label: 'Add a kahana remote for Kahana-LLC/data-room if it is missing',
          minutes: 5,
          doneWhen: 'Add a kahana remote for github.com/Kahana-LLC/data-room if git remote does not already list it.',
          text: 'Add a kahana remote if it is missing: git remote add kahana https://github.com/Kahana-LLC/data-room.git. Confirm with git remote -v. origin stays AdamKershner/data-room.',
          href: DATA_ROOM_COMPANY_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/data-room',
        },
        {
          id: 'ud-create',
          label: 'Ask Founder or Manager to create the org repo if GitHub 404s',
          minutes: 15,
          doneWhen: 'Ask Founder Adam or a Manager to create private Kahana-LLC/data-room if the URL 404s, then do the first push.',
          text: 'Ask Founder Adam or a Manager to create private Kahana-LLC/data-room if the URL 404s. Do not invent a second Vercel project. After it exists, git push kahana main (or git push -u kahana HEAD:main on the first push).',
          href: DATA_ROOM_COMPANY_REPO_URL,
          hrefLabel: 'github.com/Kahana-LLC/data-room',
        },
        {
          id: 'ud-match',
          label: 'Push kahana main and confirm both repos share the same SHA',
          minutes: 10,
          doneWhen: 'Push kahana main and confirm AdamKershner/data-room and Kahana-LLC/data-room show the same main SHA.',
          text: 'git push kahana main after origin succeeded. Confirm both GitHub main pages show the same commit SHA. If the org push is denied, Slack Founder Adam or a Manager for org access. Do not leave the company copy a week behind.',
          href: LINEAR_WORKSPACE_URL,
          hrefLabel: 'Linear (Kahana workspace)',
        },
      ],
    },
  ],
  doneWhen: [
    'The SOP or page change is on localhost, then on AdamKershner/data-room, then on data-room-two.vercel.app.',
    'Kahana-LLC/data-room main matches that SHA, or Founder Adam / a Manager is unblocking org access the same day.',
    'No secrets, .env, or stray CSVs were committed. Gallery number, aliases, and SOP_LAST_UPDATED are correct.',
    'This was not shipped as kahana-web or as SOP 13 (marketing site / Heroku).',
  ],
}
