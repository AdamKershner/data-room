# Manager checklist pages (clone, run locally, add your own)

This guide is for **managers** who want to use the **financial-dashboard** React app as a template: run it on your machine, then add a **personal project checklist** page (for example a URL like `/jane-doe-projects`) with tasks you own—without changing how the rest of the dashboard works.

The two best references in this repo are:

| Reference | Files | Best when you want… |
|-----------|--------|----------------------|
| **Onboarding-style** | `src/pages/Onboarding.jsx`, `onboardingSteps.js`, `Onboarding.css`, optional `OnboardingStep.jsx` | A **day-grouped** checklist with checkboxes, progress bar, confetti, and links to **per-task instruction** pages. |
| **SOC2-style** | `src/pages/SOC2Type1Checklist.jsx`, `soc2Type1Instructions.js`, `SOC2Type1Checklist.css` | A **dense table** with task IDs, owners, time estimates, expandable instructions, and rich link syntax. |

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
   - **Onboarding-style:** Edit the exported array in your new `*Steps.js` file (`id`, `label`, `day`, `badge`, etc.—see `onboardingSteps.js`).  
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
{ path: '/jane-doe-projects', label: 'Jane Doe — Projects', id: 'jane-doe-projects' }
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

Then open a **pull request** into `main` (or notify Adam with the branch name—whatever your team agrees on).

### 5.4 Merge and go live

**Adam** (or repo maintainer) **merges** the PR into `main` and **deploys** the dashboard to the live site—typically **within minutes** if deployment is wired to `main` (e.g. Vercel). After deploy, your page is available at the production URL path you registered (e.g. `https://<live-site>/jane-doe-projects`).

---

## 6. Multiple managers, same repo pattern

- Each manager should use their **own branch** (e.g. `ada-lovelace-projects`, `team-alpha-q3`) and their **own** route slug + `localStorage` key so nothing collides.  
- Forking the repo is optional; **branches off the same upstream** plus PRs are enough for most teams.

---

## 7. Production build (optional)

```bash
npm run build
npm run preview
```

`preview` serves the built app locally so you can sanity-check routing before deploy. Deployment notes for this app live in the main [README.md](./README.md).

---

## 8. Quick reference — files touched for a new Onboarding-like page

| File | Change |
|------|--------|
| `src/pages/<YourPage>.jsx` | New page (copied from `Onboarding.jsx`) |
| `src/pages/<yourSteps>.js` | Your task definitions |
| `src/pages/<YourPage>.css` | Optional; can reuse `Onboarding.css` |
| `src/App.jsx` | `import` + `<Route path="/your-slug" ... />` |
| `src/components/Navigation.jsx` | Optional nav link |

---

## 9. Quick reference — files touched for a new SOC2-like page

| File | Change |
|------|--------|
| `src/pages/<YourChecklist>.jsx` | New page (copied from `SOC2Type1Checklist.jsx`) |
| `src/pages/<yourInstructions>.js` | Instruction text and task metadata |
| `src/pages/<YourChecklist>.css` | Optional; often copied and trimmed |
| `src/App.jsx` | `import` + `<Route />` |
| `src/components/Navigation.jsx` | Optional nav link |

---

Questions or improvements to this doc can go through a pull request or your usual repo contribution process.
