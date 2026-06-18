/**
 * Send Learning Internship acceptance emails from this spreadsheet.
 *
 * Setup: Extensions → Apps Script → paste this file → Save → Authorize MailApp.
 *
 * Configure SEND_CONFIG below, then run sendAcceptanceEmails() or use the menu.
 *
 * In the toolbar, open the function dropdown beside Run ▶ and choose **sendAcceptanceEmails**
 * (not logLine, onOpen, or other helpers — those are not the main send flow).
 */

// --- CONFIG: edit before each send ---
// The script reads the LIVE Google Sheet (not a CSV file on disk). Row numbers are the
// sheet’s row gutter. If you email yourself, Gmail often shows the message only under
// “Sent”, not as a new Inbox message — check Sent + Spam.
const SEND_CONFIG = {
  /** Comma-separated row ranges (1-based sheet rows, same as row numbers in the grid).
   * Examples: "25"  OR  "17-24"  OR  "17-20,22-24"  OR  "5,8,12-15"
   */
  rowRanges: '25',

  /** Extra email addresses to send to even if not covered by row ranges (optional). */
  extraEmails: [
    // 'someone@example.com',
  ],

  /** If true, logs recipients and does NOT send mail (MailApp is never called). Set false to send. */
  dryRun: true,

  /** Column numbers (1 = A). Must match your sheet. */
  columns: {
    fullName: 4, // D — "Full Name"
    email: 5, // E — "Email"
  },

  /** From address. Must be a verified “Send mail as” alias for the account that runs this script.
   * Use '' (empty string) to send from that account’s primary Gmail address instead (good for debugging). */
  from: 'adam@kahana.io',

  /** Reply-To address (optional). Leave empty to use your account default. */
  replyTo: '',

  /** Bcc yourself on every send (optional). */
  bccSelf: true,
};

const ACCEPTANCE_SUBJECT =
  "Congratulations – You're Accepted to the Learning Internship Program!";

const SLACK_INVITE_URL =
  'https://join.slack.com/t/kahanaworkspace/shared_invite/zt-1pdah6gwn-W6HaRPH2iy~juLOlafO2HA';

const LEARNING_INTERNSHIP_PAGE_URL = 'https://kahana.io/learning-internship';

const ADAM_LINKEDIN_URL = 'https://www.linkedin.com/in/adam-kershner/';

/** Writes one line to the Execution log via console.log (not `log` — that name matched Run ▶ too easily). */
function logLine(msg) {
  if (arguments.length === 0) {
    void console.log(
      'You ran logLine with no message. In the Run dropdown choose sendAcceptanceEmails instead.'
    );
    return;
  }
  const line = msg == null ? '[null]' : String(msg);
  const out = line === '' ? '[empty]' : line;
  void console.log(out);
}

/** Popup when run from the sheet; falls back to log when Run is used in the editor (no UI). */
function safeAlert(message) {
  const text = message == null ? '' : String(message);
  try {
    SpreadsheetApp.getUi().alert(text);
  } catch (e) {
    // One log line only — avoids duplicate / odd transcript lines in some runtimes
    logLine(
      '(No popup — run from the spreadsheet menu, or read below.)\n\n' + text
    );
  }
}

/**
 * Add menu when the spreadsheet opens (save the script, refresh the sheet).
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Internship emails')
    .addItem('Send acceptance emails (uses SEND_CONFIG)', 'sendAcceptanceEmails')
    .addItem('Dry run only (same as SEND_CONFIG.dryRun)', 'sendAcceptanceEmailsDryRun')
    .addToUi();
}

function sendAcceptanceEmailsDryRun() {
  const prev = SEND_CONFIG.dryRun;
  SEND_CONFIG.dryRun = true;
  try {
    sendAcceptanceEmails();
  } finally {
    SEND_CONFIG.dryRun = prev;
  }
}

/**
 * Collects unique emails from row ranges + extraEmails, loads names from sheet, sends MailApp emails.
 */
function sendAcceptanceEmails() {
  try {
    sendAcceptanceEmails_();
  } catch (e) {
    const err = e && e.message ? e.message : String(e);
    logLine('[internship-email] ERROR: ' + err);
    try {
      SpreadsheetApp.getUi().alert('Script error:\n' + err);
    } catch (ignore) {
      logLine('(Could not show error dialog — see execution log.)');
    }
    throw e;
  }
}

function sendAcceptanceEmails_() {
  logLine(
    '[internship-email] START | dryRun=' +
      SEND_CONFIG.dryRun +
      ' | rowRanges=' +
      SEND_CONFIG.rowRanges +
      ' | (dryRun=true means no MailApp send)'
  );

  const sheet = SpreadsheetApp.getActiveSheet();
  const cfg = SEND_CONFIG;
  const rows = parseRowRangesString(cfg.rowRanges);
  const col = cfg.columns;

  logLine(
    'Sheet: "' +
      sheet.getName() +
      '" | Parsed rows: ' +
      JSON.stringify(rows) +
      ' | dryRun=' +
      cfg.dryRun
  );

  const emailToFirstName = new Map();

  for (const r of rows) {
    const name = String(sheet.getRange(r, col.fullName).getValue() || '').trim();
    const email = String(sheet.getRange(r, col.email).getValue() || '')
      .trim()
      .toLowerCase();
    if (!email || !isLikelyEmail(email)) {
      logLine(
        'Skip row ' +
          r +
          ': missing or invalid email (cell shows: ' +
          JSON.stringify(String(sheet.getRange(r, col.email).getDisplayValue() || '')) +
          ')'
      );
      continue;
    }
    if (!emailToFirstName.has(email)) {
      emailToFirstName.set(email, firstNameFromFullName(name));
    }
  }

  for (const raw of cfg.extraEmails) {
    const email = String(raw || '')
      .trim()
      .toLowerCase();
    if (!email || !isLikelyEmail(email)) continue;
    if (!emailToFirstName.has(email)) {
      const row = findRowByEmail(sheet, email, col.email);
      const name =
        row > 0
          ? String(sheet.getRange(row, col.fullName).getValue() || '').trim()
          : '';
      emailToFirstName.set(email, firstNameFromFullName(name));
    }
  }

  if (emailToFirstName.size === 0) {
    logLine('No recipients. Check rowRanges / extraEmails / columns (D=name, E=email).');
    safeAlert(
      'No valid recipients found.\n\n' +
        'See the execution log: each skipped row explains what was in the email cell.'
    );
    return;
  }

  const me = Session.getActiveUser().getEmail();
  const bcc =
    cfg.bccSelf && me
      ? me
      : '';

  const lines = [];
  lines.push('Prepared ' + emailToFirstName.size + ' message(s). dryRun=' + cfg.dryRun);
  let sendOk = 0;
  let sendFail = 0;

  for (const [email, first] of emailToFirstName) {
    const bodies = buildEmailBodies(first);
    if (cfg.dryRun) {
      logLine('[DRY RUN] To: ' + email + ' | First: ' + first);
      lines.push('[DRY RUN] ' + email + ' — ' + first);
    } else {
      const opts = {
        to: email,
        subject: ACCEPTANCE_SUBJECT,
        body: bodies.plain,
        htmlBody: bodies.html,
        name: 'Adam Kershner',
        from:
          cfg.from && String(cfg.from).trim()
            ? String(cfg.from).trim()
            : undefined,
        replyTo: cfg.replyTo || undefined,
        bcc: bcc || undefined,
      };
      logLine(
        '[MAIL] send start — to=' +
          email +
          ' from=' +
          (opts.from || '(account default)') +
          ' bcc=' +
          (bcc || '(none)') +
          ' subject="' +
          ACCEPTANCE_SUBJECT +
          '"'
      );
      try {
        MailApp.sendEmail(opts);
        const ts = new Date().toISOString();
        logLine('[MAIL] send ok — to=' + email + ' at ' + ts);
        const runner = (Session.getActiveUser().getEmail() || '').toLowerCase();
        if (runner && email === runner) {
          logLine(
            '[MAIL] You emailed your own address — check Gmail Sent, not only Inbox.'
          );
        }
        logLine('Sent to: ' + email);
        lines.push('Sent: ' + email);
        sendOk++;
      } catch (err) {
        sendFail++;
        const msg = err && err.message ? err.message : String(err);
        logLine('[MAIL] send FAILED — to=' + email + ' error=' + msg);
        logLine('Send failed for ' + email + ': ' + msg);
        lines.push('FAILED: ' + email + ' — ' + msg);
      }
    }
  }

  if (!cfg.dryRun && emailToFirstName.size > 0) {
    logLine(
      '[MAIL] batch done — sent=' + sendOk + ' failed=' + sendFail + ' total=' + emailToFirstName.size
    );
  }

  if (cfg.dryRun) {
    logLine(
      '[internship-email] DRY RUN ONLY — no email was sent. Set SEND_CONFIG.dryRun = false to send mail.'
    );
    lines.push('');
    lines.push('(Dry run — no email sent. Set dryRun: false in the script to send.)');
  }

  safeAlert(lines.join('\n'));
}

/**
 * Parses "17-24, 17-20, 22-24, 5" into unique ascending row numbers.
 */
function parseRowRangesString(s) {
  const out = new Set();
  const parts = String(s || '')
    .split(',')
    .map(function (p) {
      return p.trim();
    })
    .filter(Boolean);

  for (const p of parts) {
    const m = p.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      let a = parseInt(m[1], 10);
      let b = parseInt(m[2], 10);
      if (a > b) {
        const t = a;
        a = b;
        b = t;
      }
      for (let r = a; r <= b; r++) out.add(r);
    } else if (/^\d+$/.test(p)) {
      out.add(parseInt(p, 10));
    } else {
      logLine('Ignored range token: ' + p);
    }
  }

  return Array.from(out).sort(function (x, y) {
    return x - y;
  });
}

function firstNameFromFullName(fullName) {
  const s = String(fullName || '').trim();
  if (!s) return 'there';
  const parts = s.split(/\s+/);
  const raw = parts[0] || '';
  if (!raw) return 'there';
  return capitalizeFirstLetter(raw);
}

/** First letter uppercase, rest lowercase (e.g. JOHN → John). */
function capitalizeFirstLetter(str) {
  const t = String(str).trim();
  if (!t) return '';
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}

function isLikelyEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function findRowByEmail(sheet, emailLower, emailCol) {
  const last = sheet.getLastRow();
  if (last < 2) return -1;
  const values = sheet.getRange(2, emailCol, last, emailCol).getValues();
  for (let i = 0; i < values.length; i++) {
    const v = String(values[i][0] || '')
      .trim()
      .toLowerCase();
    if (v === emailLower) return i + 2;
  }
  return -1;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Plain text (fallback) + HTML for Gmail. Keeps your wording; list + link are structured.
 */
function buildEmailBodies(firstName) {
  const plainName = firstName || 'there';
  const safeHtmlName = escapeHtml(plainName);

  const plain =
    'Hi ' +
    plainName +
    ',\n\n' +
    'Thank you again for taking the time to complete your application and for your interest in joining us at Kahana. After reviewing your materials, I\'m excited to let you know that you\'ve been accepted into our Learning Internship program — ' +
    LEARNING_INTERNSHIP_PAGE_URL +
    '\n\n' +
    'We\'re really looking forward to the opportunity to work with you and support your growth during this internship.\n\n' +
    'To move forward, please do the following at your earliest convenience:\n\n' +
    '1. Email me back or DM me on Slack to confirm whether you are accepting the position and will join the internship.\n\n' +
    '2. Join our Slack workspace using this link:\n   ' +
    SLACK_INVITE_URL +
    '\n\n' +
    '3. Once you\'re in Slack, please DM me (Adam Kershner) so I know you\'ve joined.\n\n' +
    'After you confirm your acceptance, you\'ll receive a formal offer letter along with next steps for onboarding.\n\n' +
    'Congratulations again, and I\'m excited to hopefully have you on the team!\n\n' +
    'Best,\n' +
    'Adam Kershner\n' +
    'Founder & CEO, Kahana\n' +
    'Connect with me on LinkedIn: ' +
    ADAM_LINKEDIN_URL +
    '\n';

  const html =
    '<div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,\'Helvetica Neue\',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#202124;max-width:560px;">' +
    '<p style="margin:0 0 16px;">Hi ' +
    safeHtmlName +
    ',</p>' +
    '<p style="margin:0 0 16px;">Thank you again for taking the time to complete your application and for your interest in joining us at Kahana. After reviewing your materials, I&rsquo;m excited to let you know that you&rsquo;ve been accepted into our <a href="' +
    LEARNING_INTERNSHIP_PAGE_URL +
    '" style="color:#1a73e8;text-decoration:underline;">Learning Internship</a> program.</p>' +
    '<p style="margin:0 0 16px;">We&rsquo;re really looking forward to the opportunity to work with you and support your growth during this internship.</p>' +
    '<p style="margin:0 0 10px;"><strong>To move forward, please do the following at your earliest convenience:</strong></p>' +
    '<ol style="margin:0 0 18px;padding-left:22px;">' +
    '<li style="margin:0 0 12px;">Email me back or DM me on Slack to confirm whether you are accepting the position and will join the internship.</li>' +
    '<li style="margin:0 0 12px;">Join our Slack workspace: <a href="' +
    SLACK_INVITE_URL +
    '" style="color:#1a73e8;text-decoration:underline;">open the invite link</a></li>' +
    '<li style="margin:0 0 0;">Once you&rsquo;re in Slack, please DM me (Adam Kershner) so I know you&rsquo;ve joined.</li>' +
    '</ol>' +
    '<p style="margin:0 0 16px;">After you confirm your acceptance, you&rsquo;ll receive a formal offer letter along with next steps for onboarding.</p>' +
    '<p style="margin:0 0 16px;">Congratulations again, and I&rsquo;m excited to hopefully have you on the team!</p>' +
    '<p style="margin:0 0 4px;">Best,</p>' +
    '<p style="margin:0;font-weight:600;color:#202124;">Adam Kershner</p>' +
    '<p style="margin:6px 0 0;font-size:14px;color:#5f6368;">Founder &amp; CEO, Kahana</p>' +
    '<p style="margin:12px 0 0;font-size:14px;"><a href="' +
    ADAM_LINKEDIN_URL +
    '" style="color:#1a73e8;text-decoration:underline;">Connect with me on LinkedIn</a></p>' +
    '</div>';

  return { plain: plain, html: html };
}
