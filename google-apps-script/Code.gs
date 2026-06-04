/**
 * MySocietyCoach — waitlist intake for Google Sheets
 * =================================================================
 * Paste this into the bound Apps Script of your Google Sheet
 * (Extensions ▸ Apps Script), then deploy it as a Web App.
 * See the README for the full step-by-step.
 *
 * Writes each submission to a tab per audience, matching the tab
 * names already in the sheet (Parent/Student, Society, Coach),
 * creating the header row on first submit.
 *
 * The "Timestamp" is generated here (server-side) as a real date
 * value so the sheet formats it nicely (e.g. 02/06/2026 23:54:10),
 * and "Source" records which CTA the visitor used.
 */

// role -> { tab name, ordered columns [{ key, header }] }
var CONFIG = {
  parent: {
    sheet: 'Parent/Student',
    columns: [
      { key: 'timestamp',  header: 'Timestamp' },
      { key: 'source',     header: 'Source' },
      { key: 'name',       header: 'Parent / Student Name' },
      { key: 'phone',      header: 'Phone' },
      { key: 'society',    header: 'Housing Society' },
      { key: 'childAge',   header: "Child's Age" },
      { key: 'sport',      header: 'Sport' },
    ],
  },
  society: {
    sheet: 'Society',
    columns: [
      { key: 'timestamp',  header: 'Timestamp' },
      { key: 'source',     header: 'Source' },
      { key: 'name',       header: 'Name' },
      { key: 'phone',      header: 'Phone' },
      { key: 'society',    header: 'Society Name' },
      { key: 'position',   header: 'Position' },
      { key: 'facilities', header: 'Sports Facilities Available' },
      { key: 'coaching',   header: 'Sports Coaching Required' },
    ],
  },
  coach: {
    sheet: 'Coach',
    columns: [
      { key: 'timestamp',  header: 'Timestamp' },
      { key: 'source',     header: 'Source' },
      { key: 'name',       header: 'Coach Name' },
      { key: 'phone',      header: 'Phone' },
      { key: 'sport',      header: 'Primary Sport' },
      { key: 'experience', header: 'Experience' },
      { key: 'location',   header: 'Location' },
    ],
  },
};

var TIMESTAMP_FORMAT = 'dd/MM/yyyy HH:mm:ss';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // serialise concurrent writes
  try {
    var data = JSON.parse(e.postData.contents);
    var config = CONFIG[data.role];
    if (!config) {
      return json({ result: 'error', message: 'Unknown role: ' + data.role });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(config.sheet);
    if (!sheet) {
      sheet = ss.insertSheet(config.sheet);
    }

    // Ensure header row exists.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(config.columns.map(function (c) { return c.header; }));
      sheet.setFrozenRows(1);
    }

    // Build the row in the configured column order.
    var row = config.columns.map(function (c) {
      if (c.key === 'timestamp') return new Date(); // real date value
      var v = data[c.key];
      return v == null ? '' : String(v);
    });
    sheet.appendRow(row);

    // Format the Timestamp cell (column 1) so it reads like a date-time.
    if (config.columns[0].key === 'timestamp') {
      sheet.getRange(sheet.getLastRow(), 1).setNumberFormat(TIMESTAMP_FORMAT);
    }

    return json({ result: 'success' });
  } catch (err) {
    return json({ result: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Simple health check when you open the /exec URL in a browser.
function doGet() {
  return json({ result: 'ok', message: 'MySocietyCoach waitlist endpoint is live.' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
