import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import './OTAGuide.css'

function OTAGuide() {
  return (
    <div className="page" id="ota-guide">
      <div className="page-header">
        <h1>OTA & Automatic Software Updates – Developer Guide</h1>
        <p className="page-subtitle">
          Sprint 15 introduces OTA (over-the-air) updates for Oasis. This guide explains the update system, release workflows, and how they impact development. Read this to get up to speed on the new infrastructure and what it means for how we ship updates.
        </p>
      </div>

      <section className="page-section ota-purpose-section">
        <h2>Purpose</h2>
        <div className="content-block">
          <p>
            OTA (over-the-air) updates let us deliver new versions of Oasis directly to users without requiring them to manually download and reinstall. Oasis is built on Firefox, which ships with a built-in updater—but by default it points to Mozilla's servers. We've built our own update service and re-pointed the client so users receive <em>Oasis</em> updates, not Firefox's.
          </p>
          <p>
            This infrastructure is essential for shipping security patches, bug fixes, and new features to all installed users in a controlled, auditable way.
          </p>
        </div>
      </section>

      <section className="page-section ota-benefits-section">
        <h2>Benefits / Why We Did This</h2>
        <div className="content-block">
          <ul className="ota-benefits-list">
            <li><strong>Users stay on Oasis</strong> – Without our own update server, users would either get no updates or—worse—could "update" to official Firefox and lose Oasis branding and features.</li>
            <li><strong>Security</strong> – We can push Mozilla's security patches (CVEs) to users as soon as we've integrated them, instead of leaving users on vulnerable builds.</li>
            <li><strong>No manual reinstalls</strong> – Users get updates in-app via Settings → Oasis Updates. No need to re-download the DMG or reinstall.</li>
            <li><strong>Canary-first validation</strong> – New builds land on canary first. We test before promoting to stable, reducing the risk of bad releases.</li>
            <li><strong>Fast rollback</strong> – If a bad build is promoted, we can roll back by repointing the ring to a prior version—no rebuild required.</li>
          </ul>
        </div>
      </section>

      <p className="ota-intro">
        This page covers the architecture, release process, and key constraints every developer should know.
      </p>

      <div className="ota-callout ota-callout-critical">
        <p><strong>Critical risk:</strong> If the update URL is not changed correctly, Oasis could try to "update" using official Firefox binaries—overwriting our branding and custom features. Never ship with the default Mozilla update URL.</p>
      </div>

      <section className="page-section">
        <h2>1. High-Level Architecture</h2>
        <div className="content-block">
          <h3>Two-Ring Model</h3>
          <div className="ota-strategy-cards">
            <div className="ota-strategy-card">
              <div className="ota-strategy-icon">🔬</div>
              <h4>oasis-canary</h4>
              <p>Early/bleeding-edge builds. New versions land here first for validation.</p>
            </div>
            <div className="ota-strategy-card">
              <div className="ota-strategy-icon">✅</div>
              <h4>oasis-stable</h4>
              <p>Production builds. Promoted from canary by metadata pointer change only—no rebuild.</p>
            </div>
          </div>
          <p>Canary receives new versions first. After validation, stable is promoted by changing which version the ring points to. Artifacts stay immutable.</p>
          <h3>How Updates Work</h3>
          <ol className="ota-numbered-list">
            <li><strong>Client</strong> – Firefox's built-in updater checks for updates.</li>
            <li><strong>Update URL</strong> – Uses the standard Firefox path; backend serves <code>update.xml</code> that points to MAR files.</li>
            <li><strong>Rollout/Rollback</strong> – Done by changing which version a ring points to.</li>
          </ol>
          <div className="ota-example-ui">
            <h4>Example: Update UI on macOS</h4>
            <p>Users access updates via <strong>Settings → General → Oasis Updates</strong> (or <code>about:preferences</code>). The UI shows current version, check/download/install buttons, and Update History. Below is a screenshot of the working update flow on Firefox (Mac):</p>
            <img src="/images/oasis-updates-preferences-mac.png" alt="Oasis Updates section in about:preferences showing version 1.0.0.1 and Update History dialog with successfully installed update" className="ota-example-screenshot" />
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>2. Release Workflows (GitHub Actions)</h2>
        <div className="content-block">
          <p>All releases use tags in the form <strong>vX.Y.Z.N</strong> (e.g. <code>v1.0.0.1</code>). Do not use <code>v1.0.0</code>; use four segments.</p>
          <div className="ota-workflow-cards">
            <div className="ota-workflow-card">
              <h4>Workflow 1: Oasis Release Canary</h4>
              <p><strong>Trigger:</strong> Manual <code>workflow_dispatch</code> with <code>release_tag</code> (e.g. <code>v1.0.0.1</code>).</p>
              <p>Builds assistant bundles, browser with <code>--enable-update-channel=oasis-canary</code>, signs, notarizes, creates MAR, uploads to GitHub Release <code>canary</code>, and points canary ring to the new version.</p>
            </div>
            <div className="ota-workflow-card">
              <h4>Workflow 2: Oasis Release Publish</h4>
              <p>Same flow as canary, but for <code>oasis-stable</code>. Uses <code>--enable-update-channel=oasis-stable</code>.</p>
            </div>
            <div className="ota-workflow-card">
              <h4>Workflow 3: Oasis Stable Ring Promote</h4>
              <p><strong>Trigger:</strong> Manual with <code>target_version</code> (e.g. <code>1.0.0.1</code>).</p>
              <p>Verifies version exists on canary, then updates <code>oasis-stable</code> ring pointer to the same version. <strong>No rebuild.</strong> Same binaries served for both rings.</p>
            </div>
          </div>
          <div className="ota-releases-link">
            <p><strong>GitHub Releases:</strong> <a href="https://github.com/Kahana-LLC/firefox-oasis/releases" target="_blank" rel="noopener noreferrer" className="ota-inline-link">Kahana-LLC/firefox-oasis/releases</a> – Canary builds and stable releases are published here.</p>
            <a href="https://github.com/Kahana-LLC/firefox-oasis/releases" target="_blank" rel="noopener noreferrer">
              <img src="/images/oasis-github-releases-canary.png" alt="GitHub Releases page showing Canary Builds with DMG and signed artifacts" className="ota-releases-screenshot" />
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>3. Impact on Development Cycles</h2>
        <div className="content-block">
          <h3>Before Releasing</h3>
          <ul className="ota-checklist">
            <li><strong>Version format</strong> – Use <code>X.Y.Z.N</code> in <code>browser/config/version.txt</code> and <code>version_display.txt</code>.</li>
            <li><strong>Assistant bundles</strong> – CI builds <code>ui-preact</code> and <code>build</code> before the main build. Local changes must be committed and included in the tagged commit.</li>
            <li><strong>Tag before release</strong> – Create and push a tag (e.g. <code>v1.0.0.2</code>) before running the canary workflow.</li>
          </ul>
          <h3>Release Flow</h3>
          <ol className="ota-numbered-list">
            <li>Merge and test on main (or your release branch).</li>
            <li>Create tag: <code>git tag v1.0.0.2 && git push origin v1.0.0.2</code></li>
            <li>Run <strong>Oasis Release Canary</strong> with <code>release_tag: v1.0.0.2</code></li>
            <li>Wait for build, sign, notarize (~30–60 min).</li>
            <li>Test canary installs and OTA updates.</li>
            <li>Run <strong>Oasis Stable Ring Promote</strong> with <code>target_version: 1.0.0.2</code> when ready.</li>
          </ol>
          <div className="ota-callout">
            <p><strong>Constraints:</strong> No tag reuse. Canary-first—stable promotion requires the version to exist on canary. Current workflows target <code>Darwin_aarch64-gcc3</code> (Apple Silicon).</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>4. Update Service & Key Files</h2>
        <div className="content-block">
          <p><strong>Local testing:</strong> <code>tools/oasis-update-service/server.py</code></p>
          <p><strong>Production:</strong> <code>supabase/functions/oasis-update/index.ts</code></p>
          <p><strong>CI helper:</strong> <code>tools/oasis-update-service/publish_update.py</code> – Registers artifacts and updates ring pointers.</p>
          <div className="ota-key-files">
            <div className="ota-key-file-row"><span>Canary workflow</span><code>.github/workflows/oasis-canary.yml</code></div>
            <div className="ota-key-file-row"><span>Stable promote</span><code>.github/workflows/oasis-stable-promote.yml</code></div>
            <div className="ota-key-file-row"><span>MAR build/sign/verify</span><code>scripts/update-signing/</code></div>
            <div className="ota-key-file-row"><span>Updater certs</span><code>toolkit/mozapps/update/updater/oasis_*.der</code></div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>5. Rollback & Incident Response</h2>
        <div className="content-block">
          <p>Rollback is done by repointing the ring metadata to a prior known-good version. No rebuild required.</p>
          <div className="ota-incident-cards">
            <div className="ota-incident-card">
              <h4>Bad build promoted to stable</h4>
              <p>Run rollback procedure to repoint stable to last known-good version. Investigate root cause before promoting again.</p>
            </div>
            <div className="ota-incident-card">
              <h4>Update service down</h4>
              <p>Users won't receive updates until service is restored. Clients retry on next interval. No client-side change needed.</p>
            </div>
            <div className="ota-incident-card">
              <h4>Key compromise (MAR or code signing)</h4>
              <p>Stop all promotions. Disable compromised key. Rotate to last known-good build. Ship emergency client with new cert pair if needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>6. Troubleshooting</h2>
        <div className="content-block">
          <div className="ota-troubleshoot-table">
            <div className="ota-troubleshoot-row ota-troubleshoot-header">
              <span>Symptom</span>
              <span>Likely cause</span>
              <span>Action</span>
            </div>
            <div className="ota-troubleshoot-row">
              <span>Update loop (repeated download, never applies)</span>
              <span>Wrong MAR_CHANNEL_ID or signature mismatch</span>
              <span>Verify client channel matches MAR channel. Check MAR signed with correct cert.</span>
            </div>
            <div className="ota-troubleshoot-row">
              <span>"Access Denied" on Windows</span>
              <span>Maintenance Service not installed/renamed/re-signed</span>
              <span>Ensure Maintenance Service is built, renamed for Oasis, and signed with fork certs.</span>
            </div>
            <div className="ota-troubleshoot-row">
              <span>User on old version, not seeing updates</span>
              <span>Update URL wrong; channel mismatch; no artifact for build_target/locale</span>
              <span>Check AppUpdateURL policy. Verify ring points to version with artifact for user's platform.</span>
            </div>
            <div className="ota-troubleshoot-row">
              <span>De-forking (user gets Firefox after "update")</span>
              <span>Update URL still points to Mozilla</span>
              <span>Verify AppUpdateURL policy and build config. Never ship with default Mozilla URL.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <h2>7. Strategic Context – Why This Matters</h2>
        <div className="content-block">
          <p>The update service is not just a file delivery tool—it's a recurring engineering commitment. Mozilla follows a strict 4-week release cadence. Every update includes critical security patches (CVEs) and internal API changes.</p>
          <ul className="ota-checklist">
            <li><strong>Continuous re-integration</strong> – Each Mozilla update requires our AI assistant code and UI modifications to be rebased or merged.</li>
            <li><strong>Operational risk</strong> – If we lag behind upstream by even a few days, the fork becomes a security liability.</li>
            <li><strong>Resource allocation</strong> – This requires a permanent engineering commitment to handle merge conflicts and regression testing every month.</li>
          </ul>
          <p>We align our infrastructure with the existing <code>nsUpdateService</code> and MAR architecture. Building a simplified alternative would likely lead to OS-level blocking, unpatched security gaps, and increased manual maintenance.</p>
        </div>
      </section>

      <section className="page-section">
        <h2>8. Glossary</h2>
        <div className="content-block">
          <div className="ota-glossary">
            <div className="ota-glossary-item"><strong>MAR</strong> – Mozilla Archive. Custom compressed format for browser updates.</div>
            <div className="ota-glossary-item"><strong>Ring</strong> – A rollout channel. <code>oasis-canary</code> (early) and <code>oasis-stable</code> (production).</div>
            <div className="ota-glossary-item"><strong>MAR_CHANNEL_ID</strong> – Channel stamped into a MAR file. Must match client's channel or update is rejected.</div>
            <div className="ota-glossary-item"><strong>AppUpdateURL</strong> – Enterprise policy that overrides the built-in update URL.</div>
            <div className="ota-glossary-item"><strong>Ring pointer</strong> – Metadata indicating which version a ring serves. Changing it is how promotion and rollback work.</div>
          </div>
        </div>
      </section>

      <div className="ota-questions-note">
        <p><strong>Questions?</strong> Reach out to Ashwin John or Adam Kershner. Or check the full technical doc in the Logos repo: <code>OTA_AND_RELEASE_WORKFLOWS.md</code></p>
        <p style={{ marginTop: '12px' }}>Related: <Link to="/sprints" className="ota-inline-link">Sprint 15 – Automatic Software Updates</Link></p>
      </div>
    </div>
  )
}

export default OTAGuide
