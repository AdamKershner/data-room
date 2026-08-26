/** Copy-paste Apps Script for SOP 16. Bound to the creator database spreadsheet. */
export const CREATOR_OUTREACH_APPS_SCRIPT = String.raw`/**
 * Kahana creator outreach (SOP 16).
 * Bound script on Influencer & Creator Profiles.
 * Menu: Kahana → Set up / Send test to me / Send all Ready rows / Check quota.
 *
 * Sends only rows where Channel is Email (or blank), Outreach Status is Ready,
 * Email looks like an email, and First Name + Acknowledgment are filled.
 * Instagram/TikTok/YouTube DM rows are sent by hand (SOP 16 section 4).
 */

var SUBJECT = 'Collab?';
var CONFIG_SHEET_NAME = 'Config';
var STATUS_READY = 'Ready';
var STATUS_SENT = 'Sent';
var HEADER_EMAIL = 'Email';
var HEADER_FIRST_NAME = 'First Name';
var HEADER_ACK = 'Acknowledgment';
var HEADER_STATUS = 'Outreach Status';
var HEADER_CHANNEL = 'Channel';
var HEADER_SENT_AT = 'Sent At';
var HEADER_NOTES = 'Notes';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Kahana')
    .addItem('Set up Config and outreach columns', 'setupSheet')
    .addSeparator()
    .addItem('Send test to me', 'sendTestToMe')
    .addItem('Send all Ready rows', 'sendReadyRows')
    .addSeparator()
    .addItem('Check remaining email quota', 'checkQuota')
    .addToUi();
}

function setupSheet() {
  var ss = SpreadsheetApp.getActive();
  var profiles = ss.getSheets()[0];
  var headers = headerMap_(profiles);
  var toAdd = [];
  if (headers[HEADER_FIRST_NAME] == null) toAdd.push(HEADER_FIRST_NAME);
  if (headers[HEADER_ACK] == null) toAdd.push(HEADER_ACK);
  if (headers[HEADER_CHANNEL] == null) toAdd.push(HEADER_CHANNEL);
  if (headers[HEADER_STATUS] == null) toAdd.push(HEADER_STATUS);
  if (headers[HEADER_SENT_AT] == null) toAdd.push(HEADER_SENT_AT);
  if (toAdd.length) {
    var last = profiles.getLastColumn();
    profiles.getRange(1, last + 1, 1, toAdd.length).setValues([toAdd]);
  }

  var cfg = ss.getSheetByName(CONFIG_SHEET_NAME);
  if (!cfg) {
    cfg = ss.insertSheet(CONFIG_SHEET_NAME);
  }
  if (cfg.getLastRow() < 2) {
    cfg.getRange(1, 1, 9, 2).setValues([
      ['Key', 'Value'],
      ['SENDER_NAME', ''],
      ['TEST_EMAIL', Session.getActiveUser().getEmail()],
      ['DEMO_VIDEO', 'https://youtu.be/YUKRcYzdAm4'],
      ['CALENDAR_URL', 'https://calendly.com/adam-kahana-s5hl/30min'],
      ['ABOUT_URL', 'https://about.kahana.io/?utm_source=email&utm_medium=creator_outreach&utm_campaign=collab'],
      ['SITE_URL', 'https://kahana.io/?utm_source=email&utm_medium=creator_outreach&utm_campaign=collab'],
      ['HUB_PROOF', 'Amy Wang’s hub The Ultimate Guide to getting Internship/Research Opportunities (https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W)'],
      ['REPLY_TO', ''],
    ]);
    cfg.setColumnWidth(1, 160);
    cfg.setColumnWidth(2, 560);
  }
  SpreadsheetApp.getUi().alert(
    'Setup done. Email rows: First Name, Acknowledgment, Channel = Email, Outreach Status = Ready. DM rows are sent by hand, not this menu. Fill SENDER_NAME and HUB_PROOF on Config, then Send test to me.'
  );
}

function checkQuota() {
  SpreadsheetApp.getUi().alert('Remaining Gmail quota today: ' + MailApp.getRemainingDailyQuota() + ' messages.');
}

function sendTestToMe() {
  sendBatch_({ testOnly: true });
}

function sendReadyRows() {
  sendBatch_({ testOnly: false });
}

function sendBatch_(opts) {
  var ui = SpreadsheetApp.getUi();
  var cfg = getConfig_();
  var problems = configProblems_(cfg);
  if (problems.length) {
    ui.alert('Fix Config first:\n\n' + problems.join('\n'));
    return;
  }

  var sheet = SpreadsheetApp.getActive().getSheets()[0];
  var headers = headerMap_(sheet);
  var missing = requiredHeaders_(headers);
  if (missing.length) {
    ui.alert('Run Kahana > Set up Config and outreach columns first. Missing: ' + missing.join(', '));
    return;
  }

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    ui.alert('No creator rows.');
    return;
  }

  var width = sheet.getLastColumn();
  var values = sheet.getRange(2, 1, lastRow - 1, width).getValues();
  var ready = [];
  for (var i = 0; i < values.length; i++) {
    var row = rowObj_(headers, values[i]);
    var why = skipReason_(row);
    if (!why) ready.push({ rowNumber: i + 2, row: row });
  }

  if (!ready.length) {
    ui.alert('No Ready Email rows. Fill Email, First Name, Acknowledgment, Channel = Email, and Outreach Status = Ready. DM rows are not sent by this script.');
    return;
  }

  var quota = MailApp.getRemainingDailyQuota();
  var toSend = opts.testOnly ? 1 : ready.length;
  if (quota < toSend) {
    ui.alert('Not enough Gmail quota. Need ' + toSend + ', remaining ' + quota + '. Send from the Kahana Workspace account, or wait until tomorrow.');
    return;
  }

  var senderEmail = Session.getActiveUser().getEmail();
  if (opts.testOnly) {
    var sample = ready[0];
    var preview = buildBody_(cfg, sample.row);
    GmailApp.sendEmail(cfg.TEST_EMAIL, SUBJECT, preview, mailOptions_(cfg, preview));
    ui.alert(
      'Test sent to ' + cfg.TEST_EMAIL + ' from ' + senderEmail +
        '. Preview used row ' + sample.rowNumber + ' (' + sample.row[HEADER_FIRST_NAME] +
        '). Creator rows were not marked Sent. Read the test, then run Send all Ready rows.'
    );
    return;
  }

  var confirm = ui.alert(
    'Send Collab? emails',
    'This will email ' + ready.length + ' creator(s) from ' + senderEmail + '. Each Ready row is one send. Continue?',
    ui.ButtonSet.YES_NO
  );
  if (confirm !== ui.Button.YES) return;

  var sent = 0;
  var failed = [];
  for (var j = 0; j < ready.length; j++) {
    var item = ready[j];
    var body = buildBody_(cfg, item.row);
    try {
      GmailApp.sendEmail(item.row[HEADER_EMAIL], SUBJECT, body, mailOptions_(cfg, body));
      sheet.getRange(item.rowNumber, headers[HEADER_STATUS] + 1).setValue(STATUS_SENT);
      sheet.getRange(item.rowNumber, headers[HEADER_SENT_AT] + 1).setValue(new Date());
      if (headers[HEADER_NOTES] != null) {
        var notesCell = sheet.getRange(item.rowNumber, headers[HEADER_NOTES] + 1);
        var prior = String(notesCell.getValue() || '').trim();
        var stamp = 'Collab? sent ' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
        notesCell.setValue(prior ? prior + ' | ' + stamp : stamp);
      }
      sent++;
    } catch (err) {
      failed.push('Row ' + item.rowNumber + ': ' + err.message);
    }
    Utilities.sleep(400);
  }

  var summary = 'Sent ' + sent + ' of ' + ready.length + '.';
  if (failed.length) summary += '\n\nFailed:\n' + failed.join('\n');
  ui.alert(summary);
}

function getConfig_() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(CONFIG_SHEET_NAME);
  if (!sheet) {
    throw new Error('No Config tab. Run Kahana > Set up Config and outreach columns.');
  }
  var values = sheet.getDataRange().getValues();
  var cfg = {};
  for (var i = 1; i < values.length; i++) {
    var key = String(values[i][0] || '').trim();
    if (key) cfg[key] = String(values[i][1] || '').trim();
  }
  return cfg;
}

function configProblems_(cfg) {
  var problems = [];
  if (!cfg.SENDER_NAME) problems.push('SENDER_NAME is empty.');
  if (!cfg.TEST_EMAIL || cfg.TEST_EMAIL.indexOf('@') < 0) problems.push('TEST_EMAIL must be a real inbox for the test send.');
  if (!isHttp_(cfg.DEMO_VIDEO)) problems.push('DEMO_VIDEO must be the current YouTube demo URL.');
  if (!isHttp_(cfg.CALENDAR_URL)) problems.push('CALENDAR_URL must be the booking link.');
  if (!isHttp_(cfg.ABOUT_URL)) problems.push('ABOUT_URL must be an https link.');
  if (!isHttp_(cfg.SITE_URL)) problems.push('SITE_URL must be an https link.');
  if (!cfg.HUB_PROOF || /replace this/i.test(cfg.HUB_PROOF)) {
    problems.push('HUB_PROOF still says replace this. Lead with Amy Wang’s hub (https://kahana.io/hub/UMKtgp76MN1MvZuD6p7W).');
  }
  return problems;
}

function requiredHeaders_(headers) {
  var need = [HEADER_EMAIL, HEADER_FIRST_NAME, HEADER_ACK, HEADER_STATUS, HEADER_SENT_AT];
  var missing = [];
  for (var i = 0; i < need.length; i++) {
    if (headers[need[i]] == null) missing.push(need[i]);
  }
  return missing;
}

function headerMap_(sheet) {
  var last = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, last).getValues()[0];
  var map = {};
  for (var i = 0; i < headers.length; i++) {
    var key = String(headers[i] || '').trim();
    if (key) map[key] = i;
  }
  return map;
}

function rowObj_(headers, values) {
  var row = {};
  for (var key in headers) {
    if (headers.hasOwnProperty(key)) row[key] = values[headers[key]];
  }
  return row;
}

function skipReason_(row) {
  var status = String(row[HEADER_STATUS] || '').trim();
  if (status !== STATUS_READY) return 'not Ready';
  var channel = String(row[HEADER_CHANNEL] || 'Email').trim();
  if (!/^email$/i.test(channel)) return 'not email channel';
  var email = String(row[HEADER_EMAIL] || '').trim();
  if (!/.+@.+\..+/.test(email) || /\s/.test(email)) return 'bad Email';
  if (!String(row[HEADER_FIRST_NAME] || '').trim()) return 'no First Name';
  var ack = String(row[HEADER_ACK] || '').trim();
  if (ack.length < 20) return 'Acknowledgment too short';
  if (/[\[\]]/.test(ack)) return 'Acknowledgment still has brackets';
  return '';
}

function buildBody_(cfg, row) {
  var firstName = String(row[HEADER_FIRST_NAME]).trim();
  var ack = String(row[HEADER_ACK]).trim();
  return (
    'Hi ' + firstName + ',\n\n' +
    ack + '\n\n' +
    'I\'m ' + cfg.SENDER_NAME + ' at Kahana (AKA "The Aura Library"), a digital library and book/video club platform. Creators host hubs of their work, run clubs around them, and get discovered through Aura (a daily recognition signal). Kahana sits alongside the platforms you already post on; it is not a replacement for TikTok, Instagram, or YouTube.\n\n' +
    'What Kahana is: ' + cfg.ABOUT_URL + '\n' +
    'The product: ' + cfg.SITE_URL + '\n\n' +
    'Creators already have hubs live on Kahana, including ' + cfg.HUB_PROOF + '.\n\n' +
    'Here is a short demo of how a hub looks: ' + cfg.DEMO_VIDEO + '\n\n' +
    'If we collaborate, we white-glove the hub with you. You tell us your vision. You create a Kahana account, start a hub, and invite our team as collaborators. We migrate your content and build the hub privately. You review it. When it matches what you wanted, you publish it to the library. Then you can add it to your link in bio or Linktree and let your audience know.\n\n' +
    'As part of the collab we also give you a complimentary Growth plan (large files and unlimited hubs), a success story on our blog and official social (only with your say-so), and featured placement in the library, including featured collections.\n\n' +
    'If you are open to it, grab a time here: ' + cfg.CALENDAR_URL + '\n\n' +
    'Best,\n' +
    cfg.SENDER_NAME
  );
}

function mailOptions_(cfg, body) {
  var opts = {
    htmlBody: htmlBody_(body),
    name: cfg.SENDER_NAME,
  };
  if (cfg.REPLY_TO && cfg.REPLY_TO.indexOf('@') > -1) opts.replyTo = cfg.REPLY_TO;
  return opts;
}

function htmlBody_(text) {
  var parts = text.split('\n\n');
  var html = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i]
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    p = p.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');
    p = p.replace(/\n/g, '<br>');
    html.push('<p>' + p + '</p>');
  }
  return '<div style="font-family:Georgia,serif;font-size:15px;line-height:1.55;color:#111">' + html.join('') + '</div>';
}

function isHttp_(value) {
  return /^https?:\/\//i.test(String(value || '').trim());
}
`