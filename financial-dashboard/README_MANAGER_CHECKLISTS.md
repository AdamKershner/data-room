# Manager checklist pages (clone, run locally, add your own)

This guide is for **managers** who want to use the **financial-dashboard** React app as a template: run it on your machine, then add a **personal project checklist** page (for example a URL like `/jane-doe-projects`) with tasks you own, without changing how the rest of the dashboard works.

The two best references in this repo are:

| Reference | Files | Best when you want… |
|-----------|--------|----------------------|
| **Onboarding-style** | `src/pages/Onboarding.jsx`, `onboardingSteps.js`, `Onboarding.css`, optional `OnboardingStep.jsx` | A **day-grouped** checklist with checkboxes, progress bar, confetti, and links to **per-task instruction** pages. |
| **SOC2-style** | `src/pages/SOC2Type1Checklist.jsx`, `soc2Type1Instructions.js`, `SOC2Type1Checklist.css` | A **dense table** with task IDs, owners, time estimates, expandable instructions, and rich link syntax. |
| **Marketing narrative** | `src/pages/MarketingNarrativeChecklist.jsx`, `marketingNarrativeSections.js`, `marketingNarrativeInstructions.js`, `MarketingNarrativeChecklist.css` | SOC2-style table by **story framework** beats; each row maps to a **Linear** issue/subtask via optional `linearId` (e.g. `KAH-5`). Split into **B2C** (Chrome privacy) and **B2B** (data leakage / consortium) via `NARRATIVE_CATEGORIES`, see below. |

You can duplicate **one** of these patterns (or mix ideas) to build something like `firstname-lastname-projects`.

---

## 1. Prerequisites

- **Git** installed  
- **Node.js 18+** (LTS is fine) and **npm**

---

## 2. Clone the repository

From your machine:

```bash
git clone <YOUR_FORK_OR_UPSTREAM_URL> data-room
cd data-room
```

If you only care about the dashboard:

```bash
cd financial-dashboard
```

---

## 3. Install dependencies and run the app (localhost)

```bash
cd financial-dashboard
npm install
npm run dev
```

- The dev server is configured for **port 3000** (see `vite.config.js`).  
- Open **http://localhost:3000** in your browser (Vite may open it automatically).

You should see the dashboard with the slide-out **Table of Contents** navigation. Existing checklist-style pages include **Onboarding** (`/onboarding`) and **SOC2 Type 1 Checklist** (`/soc2-type1-checklist`).

---

## 4. Add a new checklist page (example: `jane-doe-projects`)

Use a **URL slug** that is unique and URL-safe: lowercase, hyphens, no spaces, e.g. `jane-doe-projects`.

### 4.1 Copy the files you need

**If you start from the Onboarding pattern:**

| Action | Suggested new names |
|--------|---------------------|
| Copy page | `Onboarding.jsx` → `JaneDoeProjects.jsx` (PascalCase component file) |
| Copy styles | `Onboarding.css` → `JaneDoeProjects.css` (or reuse `Onboarding.css` while prototyping) |
| Copy step data | `onboardingSteps.js` → `janeDoeProjectSteps.js` |
| Shared layout | Keep importing `./Page.css` like the originals |

**If you start from the SOC2 pattern:**

| Action | Suggested new names |
|--------|---------------------|
| Copy page | `SOC2Type1Checklist.jsx` → `JaneDoeProjectsChecklist.jsx` |
| Copy styles | `SOC2Type1Checklist.css` → `JaneDoeProjectsChecklist.css` |
| Copy instructions | `soc2Type1Instructions.js` → `janeDoeProjectInstructions.js` |

### 4.2 Make the new page **yours** (required edits)

1. **Component name**  
   Rename the default export function to match the file, e.g. `function JaneDoeProjects() { ... }`.

2. **localStorage key (must be unique)**  
   - Onboarding uses something like `onboarding-checklist`.  
   - SOC2 uses `soc2-type1-checklist`.  
   For your page use a **new** key, e.g. `jane-doe-projects-checklist`, so managers’ browsers do not overwrite each other’s progress when switching pages.

3. **Page title and subtitle**  
   Change the `<h1>`, subtitle, and any section headings to describe *your* program.

4. **Task list**  
   - **Onboarding-style:** Edit the exported array in your new `*Steps.js` file (`id`, `label`, `day`, `badge`, etc., see `onboardingSteps.js`).  
   - **SOC2-style:** Edit task rows, `INSTRUCTIONS`, `ASSIGNMENTS`, and `TIME_ESTIMATES` in your copied modules (see `SOC2Type1Checklist.jsx` for how they connect).

5. **Routes to step detail pages (Onboarding only)**  
   `Onboarding.jsx` links to `/onboarding/:stepId`. The big `OnboardingStep.jsx` file maps each `stepId` to custom content.  
   - **Lightweight approach:** Point task links to external Notion/Google Docs, or remove per-step routes until you need them.  
   - **Full approach:** Copy `OnboardingStep.jsx` to e.g. `JaneDoeProjectStep.jsx`, switch imports to your steps module, and add a route like `/jane-doe-projects/:stepId`.

### 4.3 Register the route in `App.jsx`

1. Import your component:

   ```jsx
   import JaneDoeProjects from './pages/JaneDoeProjects'
   ```

2. Add a `Route` inside `<Routes>`:

   ```jsx
   <Route path="/jane-doe-projects" element={<JaneDoeProjects />} />
   ```

   If you added a step-detail page:

   ```jsx
   <Route path="/jane-doe-projects/:stepId" element={<JaneDoeProjectStep />} />
   ```

### 4.4 Add a navigation entry (optional but useful)

In `src/components/Navigation.jsx`, add an item under the category that fits (or create a small “My projects” category):

```js
{ path: '/jane-doe-projects', label: 'Jane Doe: Projects', id: 'jane-doe-projects' }
```

If you use a path prefix like `/jane-doe-projects`, you can extend `isActive()` the same way `/onboarding` is handled so child paths highlight the menu item.

### 4.5 Run again

```bash
npm run dev
```

Visit **http://localhost:3000/jane-doe-projects** and confirm checkboxes, storage, and links behave as expected.

---

## 5. Git workflow: branch off `main`, push when ready, merge & deploy

Use a **dedicated branch** for your checklist work so `main` stays stable and Adam can review and ship it quickly.

### 5.1 Create a branch from `main`

Naming your branch after your page (e.g. `jane-doe-projects`) keeps it obvious in GitHub and matches your URL slug.

```bash
git checkout main
git pull origin main
git checkout -b jane-doe-projects
```

(Replace `jane-doe-projects` with `firstname-lastname-projects` or whatever matches your route.)

### 5.2 Commit your checklist changes

Work under `financial-dashboard/` as described in **section 4** above. When you’re happy locally:

```bash
git add financial-dashboard/
git status   # review what’s included
git commit -m "Add jane-doe-projects checklist page"
```

### 5.3 Push the branch to the remote when it’s ready

```bash
git push -u origin jane-doe-projects
```

Then open a **pull request** into `main` (or notify Adam with the branch name, whatever your team agrees on).

### 5.4 Merge and go live

**Adam** (or repo maintainer) **merges** the PR into `main` and **deploys** the dashboard to the live site, typically **within minutes** if deployment is wired to `main` (e.g. Vercel). After deploy, your page is available at the production URL path you registered (e.g. `https://<live-site>/jane-doe-projects`).

---

## 6. Marketing narrative checklist: B2C vs B2B categories

Route: `/marketing-narrative-checklist`. Task data lives in `marketingNarrativeSections.js` as **`NARRATIVE_CATEGORIES`** (not a flat `SECTIONS` list):

| Category | `id` | Audience | Typical source doc |
|----------|------|----------|-------------------|
| B2C Narrative | `b2c` | Chrome privacy / switcher story + Product Hunt Brief 01 | `can you focus on privacy and data collection conce.md`, `docs/product-hunt-brief-01-privacy-angle.md` |
| B2B Narrative | `b2b` | Data leakage, consortium, IBM 2025 | `data-leakage-consortium-summary.md` |

**Narrative spine (no features):** `docs/b2c-narrative-spine.md`: full B2C story arc (six beats); Magic gifts gift table synced to product. Token `[[B2C_NARRATIVE_SPINE]]` → `/b2c-strategic-narrative#narrative-spine`.

**Story framework stage callouts (B2C checklist):** Each section has a collapsed **Learn how to create content for this stage** control (generic Andy Raskin beat pedagogy, not Oasis copy). Full guide: `docs/marketing/story-framework-stage-guide.md`; token `[[STORY_FRAMEWORK_STAGE_GUIDE]]` → `/b2c-strategic-narrative#story-framework-stages`. Publishable narrative: section intros + copy banks.

**Format content playbook (B2C):** LinkedIn carousels, short-form video, humble stick-figure animations, polls, and blog, `docs/marketing/b2c-format-content-playbook.md`. Task definitions (`mn-*` IDs, instructions, deliverables) remain in repo files but are **not shown** on the checklist until re-added to `marketingNarrativeSections.js`.

**Checklist UI (story-only):** Section titles, collapsible framework callouts (B2C), and story intros, no task rows. Propose content via **Suggest idea** in the page left sidebar (Tally: `https://tally.so/r/Xx8PWO`), prefilled with the active B2C/B2B category.

**B2C content suggestions (Ideas.docx):** On each B2C beat, **Content suggestions (Ideas.docx)** lists verbatim creative concepts from `Ideas.docx` as collapsible briefs (same `<details>` pattern as End of Privacy real stories on beat 1). Data: `financial-dashboard/src/data/b2cCreativeConceptSuggestions.js`; component: `B2cCreativeConceptSuggestions.jsx`. Beat 1 shows both real stories and content suggestions.

**B2C launch posts (Oasis_Final_Posts.docx):** Below Ideas on each B2C beat, **Launch posts (Oasis_Final_Posts.docx)** lists verbatim LinkedIn PH-week copy. Mapping: beat 1 (change) Posts 1–2; beat 3 (winners-losers) optional Post 3; beat 6 (evidence) publishing sequence + Launch Day post. Data: `b2cFinalPostsSuggestions.js`; component: `B2cFinalPostsSuggestions.jsx`. Evidence beat notes May 21 (docx) vs May 27 (checklist PH date).

**B2C launch copy (descriptions and taglines):** Below Final Posts, **Launch copy (descriptions and taglines)** holds Adam's shared launch prose and seven taglines (verbatim). Beat 4 (promised-land): three description paragraphs + taglines; beat 6 (evidence): taglines only. Does not replace `B2C_REFUGE_SECTION_INTRO` (related but Oasis-named launch variants). Data: `b2cLaunchCopySuggestions.js`; component: `B2cLaunchCopySuggestions.jsx` (green accent).

**B2C six beats:** Name the change Ad Nauseam (felt villain) → Name the villain Chrome Colossus (structural villain) → Winners and losers Winners/Losers + bridge → Promised Land REFUGE → Magic gifts Magic gifts → Present evidence Oasis evidence.

**Ad Nauseam / Name the change (B2C Name the change):** Name the change intro = villain story (trap, seep-in, mental RAM, bug zapper) + handoff to Name the villain colossus. **no PH in Name the change**. **Real stories:** five anonymous End of Privacy submissions (May 2026) in Checklist · Name the change + `endOfPrivacyTestimonials.js`; copy bank `docs/b2c-ad-nauseam-change-copy.md#real-stories-end-of-privacy`. Six structured beats in `docs/b2c-ad-nauseam-change-copy.md` (source: `can you create a structured section that cleans th.md`). Tasks: `mn-change-chrome-01` … `04`. Token `[[AD_NAUSEAM_BRIEF]]` → `/b2c-strategic-narrative#ad-nauseam-change`.

**Chrome Colossus (B2C Name the villain):** Name the villain intro = three paragraphs (monoculture → ad empire → antitrust/breach + handoff to Winners and losers). Copy bank `docs/b2c-chrome-villain-copy.md` (source: `now lets focus on writing a story outline around t.md`). Tasks: `mn-villain-chrome-01` … `05` (share, ad empire, antitrust, breach, bridge). Token `[[CHROME_VILLAIN_BRIEF]]` → `/b2c-strategic-narrative#chrome-villain`. **No Oasis product pitch in Name the villain.**

**Product Hunt (B2C):** canonical hook `PH_PRIVACY_HOOK`: *Your browser works for Google. Ours works for you.* Launch tasks: `mn-ph-chrome-01` … `mn-ph-chrome-08` (`mn-ph-chrome-01` bridge lives in **Winners and losers**, not Name the change). Link tokens: `[[PRODUCT_HUNT]]`, `[[PH_BRIEF]]`.

**Winners and Losers (B2C Winners and losers):** Winners and losers intro = three paragraphs (quiet rebels / attack surface → stay on default / hollow husk → stakes). Evidence `mn-winners-chrome-01` … `04`; framework posts `05` … `09`; PH split-screen `mn-ph-chrome-02`–`03`. Copy bank: `docs/b2c-winners-losers-copy.md`; token `[[WINNERS_LOSERS_BRIEF]]` → `/b2c-strategic-narrative#winners-losers`.

**REFUGE tease (B2C Promised Land only):** Promised Land intro = **four paragraphs** (`B2C_REFUGE_SECTION_INTRO`) including product-backed data promises. Pre-launch tease uses codename `REFUGE`. **no Oasis** in `mn-promised-chrome-01` … `07` or the REFUGE half of `mn-ph-chrome-04`. Product truth: `docs/marketing/oasis-your-data-and-training.md` (v1.0.0.12). New tasks: `mn-promised-chrome-06` (local refuge on device), `07` (assistant on your terms). Copy bank: `docs/b2c-refuge-promised-land-copy.md`; tokens `[[REFUGE_BRIEF]]`, `[[REFUGE_DATA_BRIEF]]` → `/b2c-strategic-narrative#refuge-data-promises`.

**Magic gifts (B2C Magic gifts):** Magic gifts intro = **three-paragraph story** (`B2C_MAGIC_GIFTS_SECTION_INTRO`). Product hub `docs/product/oasis-capability-index.md` (v1.0.0.12); mapping `docs/marketing/b2c-magical-gifts-mapping.md`; copy bank `docs/b2c-magic-gifts-copy.md`. Tasks: `mn-gifts-chrome-01` … `04` + `mn-ph-chrome-06`–`07`. Token `[[MAGIC_GIFTS_BRIEF]]` → `/b2c-strategic-narrative#magic-gifts`.

**Oasis of Life (B2C Present evidence):** Present evidence intro = two-paragraph story + poem modal + **Oasis in action** image gallery (7 screenshots under poem button); Lena/taglines in copy bank / tasks. `[[OASIS_LIFE_BRIEF]]` → `/b2c-strategic-narrative#oasis-of-life`.

**Task labels (B2C + B2B):** each row shows **channel** + **format** badges and an **Imagine…** essence line; production specs (size, typography, file types) are in the instructions **Deliverable** block. Style guide: `docs/marketing-narrative-task-label-style-guide.md`; metadata: `financial-dashboard/src/data/marketingNarrativeTaskMeta.js`.

**B2C** has **six** story beats (change → chrome villain → winners/losers → promised land → gifts → evidence). **B2B** has **five** beats (change → winners/losers → promised land → gifts → evidence). When adding a task:

1. Pick the category (`b2c` or `b2b`) and beat section inside `NARRATIVE_CATEGORIES`.
2. Assign a **stable** `id` (e.g. `mn-ph-chrome-09` or `mn-change-chrome-04`), do **not** rename ids after publish; completion is stored in `localStorage` under key `marketing-narrative-checklist`.
3. Add matching entry in `marketingNarrativeInstructions.js` keyed by the same `id`.
4. Optional: set `linearId` (e.g. `KAH-5`) on the task object.

`SECTIONS` is exported as a flat list for back-compat. The page uses a **B2C / B2B filter** (default **B2C**); only the selected category’s beats and tasks are shown. Filter choice is stored in `localStorage` key `marketing-narrative-category-filter`.

---

## 7. Multiple managers, same repo pattern

- Each manager should use their **own branch** (e.g. `ada-lovelace-projects`, `team-alpha-q3`) and their **own** route slug + `localStorage` key so nothing collides.  
- Forking the repo is optional; **branches off the same upstream** plus PRs are enough for most teams.

---

## 8. Production build (optional)

```bash
npm run build
npm run preview
```

`preview` serves the built app locally so you can sanity-check routing before deploy. Deployment notes for this app live in the main [README.md](./README.md).

---

## 9. Quick reference: files touched for a new Onboarding-like page

| File | Change |
|------|--------|
| `src/pages/<YourPage>.jsx` | New page (copied from `Onboarding.jsx`) |
| `src/pages/<yourSteps>.js` | Your task definitions |
| `src/pages/<YourPage>.css` | Optional; can reuse `Onboarding.css` |
| `src/App.jsx` | `import` + `<Route path="/your-slug" ... />` |
| `src/components/Navigation.jsx` | Optional nav link |

---

## 10. Quick reference: files touched for a new SOC2-like page

| File | Change |
|------|--------|
| `src/pages/<YourChecklist>.jsx` | New page (copied from `SOC2Type1Checklist.jsx`) |
| `src/pages/<yourInstructions>.js` | Instruction text and task metadata |
| `src/pages/<YourChecklist>.css` | Optional; often copied and trimmed |
| `src/App.jsx` | `import` + `<Route />` |
| `src/components/Navigation.jsx` | Optional nav link |

---

Questions or improvements to this doc can go through a pull request or your usual repo contribution process.
