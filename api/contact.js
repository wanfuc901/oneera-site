const nodemailer  = require('nodemailer');
const { google }  = require('googleapis');

/* ─── Google Sheets — append one row ─────────────────────────────────────── */
async function appendToSheet({ timestamp, name, phone, email, project, message }) {
  const sa   = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: sa.client_email,
      private_key:  sa.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets        = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const RANGE         = 'Sheet1!A:F';
  const HEADERS       = ['Thời gian', 'Họ và tên', 'Điện thoại', 'Email', 'Dự án quan tâm', 'Ghi chú'];

  /* tạo header nếu sheet còn trống */
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1',
  });
  if (!data.values || data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range:            'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody:      { values: [HEADERS] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range:            RANGE,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[timestamp, name, phone, email || '', project || '', message || '']],
    },
  });
}

/* ─── HTML email template ─────────────────────────────────────────────────── */
function buildHtml({ name, phone, email, project, message, timestamp, sheetUrl }) {

  const emailRow = email
    ? `<a href="mailto:${escHtml(email)}" style="color:#1d4ed8;text-decoration:none;font-size:14px;">${escHtml(email)}</a>`
    : `<span style="color:#94a3b8;font-size:14px;">—</span>`;

  const projectRow = project
    ? `<span style="font-size:15px;font-weight:700;color:#0f172a;">${escHtml(project)}</span>`
    : `<span style="font-size:14px;color:#94a3b8;font-style:italic;">Chưa chọn dự án cụ thể</span>`;

  const messageSection = message ? `
        <!-- Divider -->
        <tr><td height="1" style="background:#f1f5f9;font-size:0;line-height:0;" colspan="2">&nbsp;</td></tr>
        <tr>
          <td style="padding:14px 24px 6px;font-size:10px;font-weight:700;color:#94a3b8;
                     text-transform:uppercase;letter-spacing:1.2px;" colspan="2">
            Nhu cầu / Ghi chú
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:0 24px 20px;">
            <div style="background:#f8fafc;border-left:3px solid #C8A96E;
                        padding:13px 16px;font-size:14px;color:#334155;line-height:1.75;
                        border-radius:0 6px 6px 0;">
              ${escHtml(message)}
            </div>
          </td>
        </tr>` : '';

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Thông báo đăng ký tư vấn</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;
             font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
<tr><td align="center">

  <table width="580" cellpadding="0" cellspacing="0"
         style="max-width:580px;width:100%;">

    <!-- ── HEADER ────────────────────────────────────────── -->
    <tr>
      <td style="background:#0f172a;border-radius:10px 10px 0 0;
                 padding:0 0 0 0;overflow:hidden;">

        <!-- Gold accent line -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background:#C8A96E;height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:26px 32px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:top;">
                    <div style="font-size:9px;color:#C8A96E;letter-spacing:3px;
                                text-transform:uppercase;font-weight:700;margin-bottom:7px;">
                      Địa ốc
                    </div>
                    <div style="font-size:22px;font-weight:800;color:#ffffff;
                                letter-spacing:-0.3px;line-height:1.1;">
                      Kim Oanh Group
                    </div>
                    <div style="font-size:12px;color:#64748b;margin-top:5px;
                                font-weight:400;">
                      Thông báo đăng ký tư vấn bất động sản
                    </div>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <div style="border:1px solid #1e3a5f;border-radius:6px;
                                padding:9px 14px;text-align:right;display:inline-block;">
                      <div style="font-size:9px;color:#475569;text-transform:uppercase;
                                  letter-spacing:1px;font-weight:600;margin-bottom:4px;">
                        Thời gian nhận
                      </div>
                      <div style="font-size:12px;color:#94a3b8;font-weight:500;">
                        ${timestamp}
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- ── NOTICE BAR ─────────────────────────────────────── -->
    <tr>
      <td style="background:#fefce8;border-left:3px solid #C8A96E;
                 border-right:3px solid #C8A96E;padding:12px 29px;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td>
            <span style="font-size:13px;font-weight:600;color:#713f12;letter-spacing:.1px;">
              Khách hàng mới vừa gửi yêu cầu tư vấn — vui lòng liên hệ lại trong 30 phút.
            </span>
          </td>
        </tr></table>
      </td>
    </tr>

    <!-- ── BODY ───────────────────────────────────────────── -->
    <tr>
      <td style="background:#ffffff;padding:0;">

        <table width="100%" cellpadding="0" cellspacing="0">

          <!-- Section label: Thông tin khách hàng -->
          <tr>
            <td colspan="2" style="padding:28px 32px 12px;">
              <div style="font-size:9px;font-weight:700;color:#94a3b8;
                          text-transform:uppercase;letter-spacing:1.5px;">
                Thông tin khách hàng
              </div>
              <div style="height:1px;background:#f1f5f9;margin-top:10px;"></div>
            </td>
          </tr>

          <!-- Họ tên -->
          <tr>
            <td width="140" style="padding:11px 16px 11px 32px;font-size:11px;
                font-weight:600;color:#94a3b8;text-transform:uppercase;
                letter-spacing:.5px;vertical-align:middle;">
              Họ và tên
            </td>
            <td style="padding:11px 32px 11px 16px;font-size:16px;
                font-weight:700;color:#0f172a;vertical-align:middle;">
              ${escHtml(name)}
            </td>
          </tr>
          <tr><td colspan="2" style="padding:0 32px;"><div style="height:1px;background:#f8fafc;"></div></td></tr>

          <!-- Điện thoại -->
          <tr>
            <td style="padding:11px 16px 11px 32px;font-size:11px;
                font-weight:600;color:#94a3b8;text-transform:uppercase;
                letter-spacing:.5px;vertical-align:middle;">
              Điện thoại
            </td>
            <td style="padding:11px 32px 11px 16px;vertical-align:middle;">
              <a href="tel:${phone.replace(/\s/g,'')}"
                 style="font-size:20px;font-weight:800;color:#b8924a;
                        text-decoration:none;letter-spacing:.5px;">
                ${escHtml(phone)}
              </a>
            </td>
          </tr>
          <tr><td colspan="2" style="padding:0 32px;"><div style="height:1px;background:#f8fafc;"></div></td></tr>

          <!-- Email -->
          <tr>
            <td style="padding:11px 16px 11px 32px;font-size:11px;
                font-weight:600;color:#94a3b8;text-transform:uppercase;
                letter-spacing:.5px;vertical-align:middle;">
              Email
            </td>
            <td style="padding:11px 32px 11px 16px;vertical-align:middle;">
              ${emailRow}
            </td>
          </tr>

          <!-- Section label: Dự án -->
          <tr>
            <td colspan="2" style="padding:28px 32px 12px;">
              <div style="font-size:9px;font-weight:700;color:#94a3b8;
                          text-transform:uppercase;letter-spacing:1.5px;">
                Dự án quan tâm
              </div>
              <div style="height:1px;background:#f1f5f9;margin-top:10px;"></div>
            </td>
          </tr>

          <tr>
            <td colspan="2" style="padding:0 32px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#fffbf2;border:1px solid #e8d4aa;
                             border-radius:8px;padding:14px 18px;">
                    ${projectRow}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${messageSection}

        </table>

      </td>
    </tr>

    <!-- ── CTA ────────────────────────────────────────────── -->
    <tr>
      <td style="background:#ffffff;padding:0 32px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background:#f8fafc;border:1px solid #e2e8f0;
                       border-radius:8px;padding:18px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <div style="font-size:11px;color:#94a3b8;margin-bottom:4px;
                                text-transform:uppercase;letter-spacing:.8px;font-weight:600;">
                      Danh sách leads
                    </div>
                    <div style="font-size:13px;color:#475569;line-height:1.5;">
                      Xem toàn bộ dữ liệu đăng ký<br>trong Google Sheets
                    </div>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <a href="${sheetUrl}"
                       style="display:inline-block;background:#0f172a;color:#C8A96E;
                              font-size:13px;font-weight:700;padding:11px 22px;
                              border-radius:7px;text-decoration:none;
                              letter-spacing:.2px;white-space:nowrap;">
                      Xem Google Sheet
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── FOOTER ─────────────────────────────────────────── -->
    <tr>
      <td style="background:#f8fafc;border:1px solid #e2e8f0;
                 border-top:none;border-radius:0 0 10px 10px;
                 padding:18px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align:middle;">
              <div style="font-size:12px;font-weight:700;color:#334155;margin-bottom:3px;">
                Kim Oanh Group
              </div>
              <div style="font-size:11px;color:#94a3b8;line-height:1.8;">
                0909 91 5678 &nbsp;·&nbsp; 0907 839 986 &nbsp;·&nbsp; kimoanhservices@gmail.com
              </div>
            </td>
            <td align="right" style="vertical-align:middle;">
              <div style="font-size:10px;color:#cbd5e1;text-align:right;line-height:1.7;">
                Email tự động, vui lòng không phản hồi.<br>
                Kim Oanh CRM
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── OUTER SPACER ───────────────────────────────────── -->
    <tr><td height="32" style="font-size:0;line-height:0;">&nbsp;</td></tr>

  </table>

</td></tr>
</table>
</body>
</html>`;
}

/* ─── Escape HTML ─────────────────────────────────────────────────────────── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─── Handler ─────────────────────────────────────────────────────────────── */
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, email, project, message } = req.body || {};
  if (!name || !phone) {
    return res.status(400).json({ error: 'Thiếu thông tin bắt buộc (name, phone)' });
  }

  const timestamp = new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kimoanhservices@gmail.com',
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const subject = `[Lead mới] ${name} · ${project || 'Chưa chọn dự án'} · ${phone}`;

  const sheetUrl = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}/edit`;
  const data = { name, phone, email, project, message, timestamp, sheetUrl };

  const [mailResult, sheetResult] = await Promise.allSettled([
    transporter.sendMail({
      from:    '"Kim Oanh Group CRM" <kimoanhservices@gmail.com>',
      to:      process.env.MAIL_TO || 'phuc.pham.vst@gmail.com',
      subject,
      html:    buildHtml(data),
    }),
    appendToSheet(data),
  ]);

  if (mailResult.status === 'rejected') {
    console.error('[contact] Gmail error:', mailResult.reason?.message);
    return res.status(500).json({ error: 'Gửi email thất bại' });
  }
  if (sheetResult.status === 'rejected') {
    console.error('[contact] Sheets error:', sheetResult.reason?.message);
  }

  return res.status(200).json({ success: true });
};
