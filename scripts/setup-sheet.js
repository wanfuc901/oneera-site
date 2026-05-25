/**
 * One-time setup: format Google Sheet thành dạng đẹp, hiện đại, dễ dùng.
 * Chạy: node scripts/setup-sheet.js
 */

const { google } = require('googleapis');
const sa            = require('C:/Users/hoangphuc/Downloads/kim-oanh-497407-adfe4e4f5112.json');
const SPREADSHEET_ID = '18dfrk2LFlfFq1bIAKD35FzKvwgcMgpSvkQx_nAa6uEw';

/* ── Màu sắc ──────────────────────────────────────────────────────────────── */
const C = {
  navy:      { red: 0.059, green: 0.090, blue: 0.165 },  // #0f172a
  navyLight: { red: 0.102, green: 0.149, blue: 0.255 },  // #1a2640
  gold:      { red: 0.784, green: 0.663, blue: 0.431 },  // #C8A96E
  goldLight: { red: 0.910, green: 0.831, blue: 0.667 },  // #E8D4AA
  white:     { red: 1,     green: 1,     blue: 1     },
  row1:      { red: 1,     green: 1,     blue: 1     },   // white
  row2:      { red: 0.973, green: 0.976, blue: 0.988 },   // #f8f9fc
  border:    { red: 0.878, green: 0.898, blue: 0.941 },   // #e0e5f0
  textDark:  { red: 0.059, green: 0.090, blue: 0.165 },   // #0f172a
  textMuted: { red: 0.467, green: 0.545, blue: 0.627 },   // #778ba0
  phoneCol:  { red: 0.722, green: 0.573, blue: 0.267 },   // #b8924a (gold dark)
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */
const border = (style = 'SOLID', color = C.border) => ({
  style, colorStyle: { rgbColor: color },
});

const allBorders = (style, color) => ({
  top: border(style, color), bottom: border(style, color),
  left: border(style, color), right: border(style, color),
});

/* ── Main ─────────────────────────────────────────────────────────────────── */
async function setup() {
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: sa.client_email, private_key: sa.private_key },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  /* lấy sheetId và tên thật */
  const meta     = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const sheet    = meta.data.sheets[0];
  const sheetId  = sheet.properties.sheetId;
  const sheetName = sheet.properties.title;
  console.log(`Sheet: "${sheetName}" (id=${sheetId})`);

  /* ghi header nếu chưa có */
  const check = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID, range: `${sheetName}!A1`,
  });
  if (!check.data.values || check.data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [['Thời gian', 'Họ và tên', 'Điện thoại', 'Email', 'Dự án quan tâm', 'Ghi chú']],
      },
    });
    console.log('Header row created.');
  }

  /* xoá banding cũ nếu có (idempotent) */
  const existingBanding = sheet.bandedRanges || [];
  const deleteBanding   = existingBanding.map(b => ({
    deleteBanding: { bandedRangeId: b.bandedRangeId },
  }));

  const requests = [
    ...deleteBanding,

    /* ── 1. Tên sheet ──────────────────────────────────────────────────────── */
    {
      updateSheetProperties: {
        properties: {
          sheetId,
          title: sheetName,
          tabColorStyle: { rgbColor: C.gold },
          gridProperties: { frozenRowCount: 1, rowCount: 2000, columnCount: 6 },
        },
        fields: 'tabColorStyle,gridProperties.frozenRowCount',
      },
    },

    /* ── 2. Header row ─────────────────────────────────────────────────────── */
    {
      repeatCell: {
        range: { sheetId, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: 6 },
        cell: {
          userEnteredFormat: {
            backgroundColor:    C.navy,
            textFormat:         { foregroundColor: C.gold, bold: true, fontSize: 11, fontFamily: 'Arial' },
            horizontalAlignment:'CENTER',
            verticalAlignment:  'MIDDLE',
            wrapStrategy:       'CLIP',
            borders:            allBorders('SOLID', C.navyLight),
          },
        },
        fields: 'userEnteredFormat',
      },
    },

    /* ── 3. Header row height ──────────────────────────────────────────────── */
    {
      updateDimensionProperties: {
        range: { sheetId, dimension: 'ROWS', startIndex: 0, endIndex: 1 },
        properties: { pixelSize: 44 },
        fields: 'pixelSize',
      },
    },

    /* ── 4. Data rows default format ───────────────────────────────────────── */
    {
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 6 },
        cell: {
          userEnteredFormat: {
            textFormat:         { fontSize: 10, fontFamily: 'Arial', foregroundColor: C.textDark },
            verticalAlignment:  'MIDDLE',
            wrapStrategy:       'CLIP',
          },
        },
        fields: 'userEnteredFormat(textFormat,verticalAlignment,wrapStrategy)',
      },
    },

    /* ── 5. Data row height ────────────────────────────────────────────────── */
    {
      updateDimensionProperties: {
        range: { sheetId, dimension: 'ROWS', startIndex: 1, endIndex: 2000 },
        properties: { pixelSize: 34 },
        fields: 'pixelSize',
      },
    },

    /* ── 6. Banded rows (alternating) ──────────────────────────────────────── */
    {
      addBanding: {
        bandedRange: {
          range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 6 },
          rowProperties: {
            firstBandColorStyle:  { rgbColor: C.row1 },
            secondBandColorStyle: { rgbColor: C.row2 },
          },
        },
      },
    },

    /* ── 7. Column widths ──────────────────────────────────────────────────── */
    ...[155, 175, 125, 195, 190, 260].map((pixelSize, i) => ({
      updateDimensionProperties: {
        range: { sheetId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
        properties: { pixelSize },
        fields: 'pixelSize',
      },
    })),

    /* ── 8. Timestamp col — center + muted ─────────────────────────────────── */
    {
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 0, endColumnIndex: 1 },
        cell: {
          userEnteredFormat: {
            horizontalAlignment: 'CENTER',
            textFormat: { fontSize: 9, foregroundColor: C.textMuted },
          },
        },
        fields: 'userEnteredFormat(horizontalAlignment,textFormat)',
      },
    },

    /* ── 9. Phone col — bold + gold ────────────────────────────────────────── */
    {
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 2, endColumnIndex: 3 },
        cell: {
          userEnteredFormat: {
            horizontalAlignment: 'CENTER',
            textFormat: { bold: true, fontSize: 10, foregroundColor: C.phoneCol },
          },
        },
        fields: 'userEnteredFormat(horizontalAlignment,textFormat)',
      },
    },

    /* ── 10. Notes col — wrap ──────────────────────────────────────────────── */
    {
      repeatCell: {
        range: { sheetId, startRowIndex: 1, startColumnIndex: 5, endColumnIndex: 6 },
        cell: {
          userEnteredFormat: {
            wrapStrategy: 'WRAP',
            textFormat: { fontSize: 9, foregroundColor: C.textMuted },
          },
        },
        fields: 'userEnteredFormat(wrapStrategy,textFormat)',
      },
    },

    /* ── 11. Auto-filter ───────────────────────────────────────────────────── */
    {
      setBasicFilter: {
        filter: {
          range: { sheetId, startRowIndex: 0, startColumnIndex: 0, endColumnIndex: 6 },
        },
      },
    },

    /* ── 12. Outer border toàn bảng ────────────────────────────────────────── */
    {
      updateBorders: {
        range: { sheetId, startRowIndex: 0, startColumnIndex: 0, endRowIndex: 1, endColumnIndex: 6 },
        bottom: border('SOLID_MEDIUM', C.gold),
      },
    },
  ];

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: { requests },
  });

  console.log('Sheet formatted successfully.');
}

setup().catch(err => {
  console.error('ERROR:', err.message);
  process.exit(1);
});
