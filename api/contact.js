const nodemailer = require('nodemailer');

/* ─── HTML email template ─────────────────────────────────────────────────── */
function buildHtml({ name, phone, email, project, message, timestamp }) {
  const projectBlock = project
    ? `<div style="font-size:17px;font-weight:800;color:#0f172a;">${project}</div>`
    : `<div style="font-size:14px;color:#94a3b8;font-style:italic;">Chưa chọn dự án cụ thể</div>`;

  const messageBlock = message ? `
    <!-- Message -->
    <div style="font-size:11px;font-weight:700;color:#b8924a;text-transform:uppercase;
                letter-spacing:1.5px;margin:28px 0 14px;">Nhu cầu / Ghi chú</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #C8A96E;
                   border-radius:0 8px 8px 0;padding:14px 18px;">
          <div style="font-size:14px;color:#334155;line-height:1.75;">${escHtml(message)}</div>
        </td>
      </tr>
    </table>` : '';

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Đăng ký tư vấn mới</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;
             font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0"
       style="background:#eef2f7;padding:36px 16px;">
<tr><td align="center">

  <!-- CARD -->
  <table width="600" cellpadding="0" cellspacing="0"
         style="max-width:600px;width:100%;border-radius:14px;
                overflow:hidden;box-shadow:0 6px 32px rgba(0,0,0,.13);">

    <!-- TOP GOLD BAR -->
    <tr>
      <td style="background:linear-gradient(90deg,#8A6E3E,#C8A96E,#E8D4AA,#C8A96E,#8A6E3E);
                 height:4px;font-size:0;line-height:0;">&nbsp;</td>
    </tr>

    <!-- HEADER -->
    <tr>
      <td style="background:linear-gradient(150deg,#0f172a 0%,#1a2640 60%,#0f172a 100%);
                 padding:28px 36px 22px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align:middle;">
              <div style="font-size:10px;color:#C8A96E;letter-spacing:3px;
                          text-transform:uppercase;font-weight:700;margin-bottom:6px;">
                Địa ốc
              </div>
              <div style="font-size:24px;font-weight:900;color:#C8A96E;
                          letter-spacing:-0.5px;line-height:1;">
                KIM OANH GROUP
              </div>
              <div style="font-size:11px;color:#7a8fa8;margin-top:5px;letter-spacing:.5px;">
                Hệ thống tiếp nhận đăng ký tư vấn
              </div>
            </td>
            <td align="right" style="vertical-align:middle;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:rgba(200,169,110,.12);
                             border:1px solid rgba(200,169,110,.3);
                             border-radius:8px;padding:10px 16px;text-align:right;">
                    <div style="font-size:10px;color:#C8A96E;text-transform:uppercase;
                                letter-spacing:1px;font-weight:700;">Thời gian nhận</div>
                    <div style="font-size:12px;color:#cbd5e1;margin-top:4px;
                                font-weight:600;">${timestamp}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ALERT BANNER -->
    <tr>
      <td style="background:#C8A96E;padding:13px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td>
            <span style="font-size:14px;font-weight:800;color:#0f172a;">
              🔔&nbsp; Có khách hàng mới đăng ký — Liên hệ lại trong 30 phút!
            </span>
          </td>
        </tr></table>
      </td>
    </tr>

    <!-- BODY -->
    <tr>
      <td style="background:#ffffff;padding:32px 36px 36px;">

        <!-- Section: Khách hàng -->
        <div style="font-size:11px;font-weight:700;color:#b8924a;text-transform:uppercase;
                    letter-spacing:1.5px;margin-bottom:14px;">
          Thông tin khách hàng
        </div>

        <table width="100%" cellpadding="0" cellspacing="0"
               style="border-radius:10px;overflow:hidden;
                      border:1px solid #e2e8f0;">

          <!-- Tên -->
          <tr>
            <td width="130" style="background:#f8fafc;padding:13px 16px;
                border-right:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;
                font-size:11px;font-weight:700;color:#94a3b8;
                text-transform:uppercase;letter-spacing:.4px;vertical-align:middle;">
              Họ và tên
            </td>
            <td style="background:#ffffff;padding:13px 18px;
                border-bottom:1px solid #e2e8f0;
                font-size:16px;font-weight:800;color:#0f172a;">
              ${escHtml(name)}
            </td>
          </tr>

          <!-- SĐT -->
          <tr>
            <td style="background:#f8fafc;padding:13px 16px;
                border-right:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;
                font-size:11px;font-weight:700;color:#94a3b8;
                text-transform:uppercase;letter-spacing:.4px;vertical-align:middle;">
              Điện thoại
            </td>
            <td style="background:#fffbf2;padding:13px 18px;
                border-bottom:1px solid #e2e8f0;">
              <a href="tel:${phone.replace(/\s/g,'')}"
                 style="font-size:18px;font-weight:900;color:#C8A96E;
                        text-decoration:none;letter-spacing:.5px;">
                ${escHtml(phone)}
              </a>
            </td>
          </tr>

          <!-- Email -->
          <tr>
            <td style="background:#f8fafc;padding:13px 16px;
                border-right:1px solid #e2e8f0;
                font-size:11px;font-weight:700;color:#94a3b8;
                text-transform:uppercase;letter-spacing:.4px;vertical-align:middle;">
              Email
            </td>
            <td style="background:#ffffff;padding:13px 18px;
                font-size:14px;color:#475569;">
              ${email ? `<a href="mailto:${escHtml(email)}"
                   style="color:#3b82f6;text-decoration:none;">${escHtml(email)}</a>` : '—'}
            </td>
          </tr>

        </table>

        <!-- Section: Dự án -->
        <div style="font-size:11px;font-weight:700;color:#b8924a;text-transform:uppercase;
                    letter-spacing:1.5px;margin:28px 0 14px;">
          Dự án quan tâm
        </div>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="background:linear-gradient(135deg,rgba(200,169,110,.07),
                        rgba(200,169,110,.02));
                       border:1px solid rgba(200,169,110,.28);
                       border-radius:10px;padding:16px 20px;">
              ${projectBlock}
            </td>
          </tr>
        </table>

        ${messageBlock}

        <!-- CTA -->
        <table width="100%" cellpadding="0" cellspacing="0"
               style="margin-top:32px;">
          <tr>
            <td align="center">
              <a href="tel:${phone.replace(/\s/g,'')}"
                 style="display:inline-block;background:#0f172a;color:#C8A96E;
                        font-size:14px;font-weight:800;padding:14px 32px;
                        border-radius:10px;text-decoration:none;
                        border:1.5px solid rgba(200,169,110,.35);
                        letter-spacing:.3px;">
                📞&nbsp; Gọi ngay — ${escHtml(phone)}
              </a>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td style="background:#0f172a;padding:20px 36px;
                 border-top:1px solid rgba(200,169,110,.15);">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align:middle;">
              <div style="font-size:13px;font-weight:800;color:#C8A96E;
                          margin-bottom:5px;">Kim Oanh Group</div>
              <div style="font-size:11px;color:#7a8fa8;line-height:1.8;">
                Hotline: 0909 91 5678 · 0907 839 986<br>
                kimoanhservices@gmail.com
              </div>
            </td>
            <td align="right" style="vertical-align:middle;">
              <div style="font-size:10px;color:#475569;line-height:1.6;text-align:right;">
                Email tự động — đừng reply<br>
                Kim Oanh CRM v1.0
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- BOTTOM GOLD BAR -->
    <tr>
      <td style="background:linear-gradient(90deg,#8A6E3E,#C8A96E,#E8D4AA,#C8A96E,#8A6E3E);
                 height:3px;font-size:0;line-height:0;">&nbsp;</td>
    </tr>

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

  const subject = `🏠 [KH MỚI] ${name} — ${project || 'Chưa chọn dự án'} — ${phone}`;

  try {
    await transporter.sendMail({
      from: '"Kim Oanh Group CRM" <kimoanhservices@gmail.com>',
      to:   'kimoanhservices@gmail.com',
      subject,
      html: buildHtml({ name, phone, email, project, message, timestamp }),
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[contact] Gmail error:', err.message);
    return res.status(500).json({ error: 'Gửi email thất bại' });
  }
};
