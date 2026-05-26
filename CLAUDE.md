# Kim Oanh Group — Landing Page

Landing page tĩnh cho **Kim Oanh Group** (công ty địa ốc, miền Nam VN).  
Deploy tự động lên Vercel qua GitHub Actions mỗi khi push lên `master`.

---

## Tech Stack

| Layer | Chi tiết |
|---|---|
| Markup | Thuần `index.html` — không framework, không build step |
| Styling | CSS thuần trong `<style>` — CSS custom properties, mobile-first |
| Icons | Lucide CDN (`unpkg.com/lucide@latest/dist/umd/lucide.min.js`) |
| Font | Be Vietnam Pro (Google Fonts) |
| Serverless API | `api/contact.js` — Vercel Serverless Function (Node.js) |
| Email | Nodemailer + Gmail SMTP (App Password qua env var) |
| Leads | Google Sheets API v4 (Service Account) |
| CI/CD | GitHub Actions → `npx vercel --prod` |
| Hosting | Vercel (static + serverless) |
| Deps | `nodemailer`, `googleapis` (xem `package.json`) |

---

## Cấu trúc thư mục

```
.
├── index.html              # Toàn bộ UI — HTML + CSS + JS inline
├── api/
│   └── contact.js          # Vercel Serverless Function — nhận form, gửi email + ghi Sheet
├── scripts/
│   └── setup-sheet.js      # One-time script tạo header cho Google Sheet
├── img/                    # Ảnh tĩnh
│   ├── logo.png            # Logo Kim Oanh (PNG thật, alpha trong suốt)
│   ├── favicon.png         # Favicon 512×512
│   ├── hero-bg.jpg         # Ảnh nền hero (5.1MB — cân nhắc optimize)
│   ├── og-image.jpg        # OG image 1200×630
│   ├── one-era.jpg         # Ảnh dự án ONE ERA
│   ├── century-city.jpg    # Ảnh dự án Century City
│   ├── legacy-central.jpg  # Ảnh dự án Legacy Central
│   └── golden-future-city.jpg # Ảnh dự án Golden Future City
├── fonts/                  # Font tự host (Afacad Flux, Asgard Trial) — không dùng trong index.html chính
├── assets/                 # Build artifact của ONE ERA SPA (oneera.com.vn mirror) — không phải project này
├── oneera.com.vn/          # HTTrack mirror của oneera.com.vn — chỉ tham khảo
├── info/                   # HTTrack mirror của congtykimoanh.vn — chỉ tham khảo
├── vercel.json             # Routing config — SPA rewrite + security headers + cache
├── package.json            # npm deps (nodemailer, googleapis)
├── site.webmanifest        # PWA manifest (tên còn là ONE ERA — cần update về Kim Oanh)
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deploy
└── .claude/
    └── settings.local.json # Allowed bash commands cho Claude Code
```

---

## Deploy Pipeline

```
git push origin master
    → GitHub Actions (ubuntu-latest)
    → npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }} --yes
    → Live tại Vercel
```

**Secrets cần thiết trên GitHub repo:**
- `VERCEL_TOKEN` — token Vercel (đã set)

**Env vars cần set trên Vercel Dashboard** (cho `api/contact.js`):
- `GMAIL_USER` — tài khoản Gmail gửi mail (vd: `notifications@...`)
- `GMAIL_PASS` — App Password 16 ký tự (không phải mật khẩu Gmail thường)
- `MAIL_TO` — địa chỉ nhận lead, default `phuc.pham.vst@gmail.com`
- `GOOGLE_SERVICE_ACCOUNT` — JSON string của Service Account key (toàn bộ file JSON)
- `GOOGLE_SHEET_ID` — ID của Google Sheet lưu leads (lấy từ URL sheet)

**Vercel project IDs** (dùng trong deploy.yml):
```
VERCEL_ORG_ID:     team_ky3AzzeULE5oEF0nuGfuDvy2
VERCEL_PROJECT_ID: prj_90OuwksWbPs9zUquQxfBUmYbK1uJ
```

---

## vercel.json — Routing

- `cleanUrls: true` — bỏ `.html` extension
- `trailingSlash: false`
- SPA rewrite: mọi path (trừ `assets/`, `fonts/`, `img/`, `favicon.png`, `og-image.jpg`, `site.webmanifest`) → `/index.html`
- Cache headers: `/assets/*` immutable 1 năm, `/img/*` 30 ngày
- Security headers: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`

---

## index.html — Kiến trúc

File duy nhất chứa tất cả: HTML + CSS (trong `<style>`) + JS (trong `<script>`).

### CSS Design Tokens

```css
--gold:    #C8A96E   /* vàng chính */
--gold-l:  #E8D4AA   /* vàng nhạt */
--gold-d:  #8A6E3E   /* vàng đậm */
--bg:      #0f172a   /* nền tối chính */
--bg2:     #131e33   /* nền section thứ 2 */
--bg3:     #1a2640   /* nền card/item */
--surface: rgba(255,255,255,.04)
--border:  rgba(200,169,110,.14)
--text:    #e2e8f0
--muted:   #7a8fa8
--r:       14px      /* border-radius chuẩn */
--ease:    cubic-bezier(.4,0,.2,1)
```

### Sections theo thứ tự

1. **Skeleton loader** (`#sk`) — shimmer animation, tự remove sau 900ms
2. **Nav** (`nav#nav`) — fixed, blur backdrop, scroll-aware background
3. **Hero** (`section#hero`) — full-height, ảnh nền + overlay gradient + grid pattern
4. **Projects** (`section#projects`) — 4 dự án tiêu biểu
5. **Stats strip** (`.strip`) — gold background
6. **Why us** (`section#why`) — 6 card lý do
7. **Banking partners** (`section#banks`)
8. **Contact** (`section#contact`) — form gửi lead + thông tin liên hệ
9. **Footer**
10. **Project detail modal** (`#projModal`) — 4 dự án × 7 tabs
11. **Toast** (`#toast`) — confirm sau submit form

### JS — Chức năng chính

- `lucide.createIcons()` — khởi tạo tất cả icons
- Skeleton dismiss sau `window.load` + 900ms delay
- `IntersectionObserver` cho scroll reveal (`.r` → `.v` classes)
- Nav background đổi khi `scrollY > 40`
- `doSubmit(e)` — POST đến `/api/contact`, hiện toast
- `openProject(key)` — mở modal, render tabs + panes từ `PROJ_DATA`
- `switchTab(idx)` — chuyển tab, scroll body về 0
- `closeModal(e)` — đóng khi click overlay hoặc nhấn Escape
- `scrollToContact()` — đóng modal + smooth scroll đến form
- Mobile menu toggle, floating Zalo CTA

### Mobile Menu & Floating CTA

- Hamburger menu hiện trên mobile (< 900px)
- Floating Zalo button (bottom-right) với pulse animation
- Menu overlay với backdrop blur

---

## 4 Dự án — Dữ liệu modal (`PROJ_DATA`)

Mỗi dự án có 7 tabs:
`Tổng quan / Vị trí / Tiện ích / Sản phẩm / Giá·PTTT / Pháp lý / Giá trị tương lai`

| Key | Tên | Loại | Giá | Vị trí |
|---|---|---|---|---|
| `one-era` | ONE ERA | Khu đô thị tích hợp | Liên hệ | Thượng Đông, TP.HCM |
| `century-city` | Century City | Đất nền sổ đỏ | Từ 16,8tr/m² | Long Thành, Đồng Nai |
| `legacy-central` | Legacy Central | Căn hộ cao cấp | Studio từ 890tr | Thuận An, Bình Dương |
| `golden-future-city` | Golden Future City | Đất nền nhà phố | Từ 610tr/nền | Bàu Bàng, Bình Dương |

---

## api/contact.js — Serverless Function

**Endpoint:** `POST /api/contact`

**Flow:**
1. Parse body JSON `{ name, phone, email, project, message }`
2. Validate `name` + `phone` bắt buộc
3. `appendToSheet()` → Google Sheets API (Service Account auth)
   - Tự tạo header nếu sheet còn trống
   - Lấy tên sheet đầu tiên động (không hardcode "Sheet1")
4. `buildHtml()` → HTML email template chuyên nghiệp
5. Nodemailer SMTP → Gmail → gửi đến `MAIL_TO`
6. Response `{ ok: true }`

**Google Sheets columns:** `Thời gian | Họ và tên | Điện thoại | Email | Dự án quan tâm | Ghi chú`

---

## scripts/setup-sheet.js

One-time script format header row của Google Sheet (bold, freeze row 1, set column width).  
Chạy: `node scripts/setup-sheet.js`  
Cần env vars `GOOGLE_SERVICE_ACCOUNT` và `GOOGLE_SHEET_ID` trong `.env` local.

---

## Thông tin liên hệ (Kim Oanh Group)

- **Hotline:** 0909 91 5678 / 0907 839 986
- **Website chính thức:** www.congtykimoanh.vn
- **Facebook:** facebook.com/congtykimoanh.vn

---

## Việc cần làm / Known Issues

- [ ] `site.webmanifest` còn tên "ONE ERA" — cần đổi thành "Kim Oanh Group"
- [ ] `hero-bg.jpg` nặng 5.1MB — cân nhắc optimize xuống < 500KB
- [ ] `img/logo.jpg` và `img/temp.jpg`, `img/temp2.png` — file thừa, có thể xóa
- [ ] Thiếu `robots.txt` và `sitemap.xml` cho SEO
- [ ] Form chưa có client-side validation đầy đủ (chỉ `required` HTML)
- [ ] Chưa có analytics (Google Analytics / GTM)

---

## Lịch sử tính năng đã làm

| Commit | Tính năng |
|---|---|
| `ec7bd7e` | GitHub Actions auto-deploy on push master |
| `512f466` | Fix logo PNG alpha transparency |
| `032a76d` | Project detail modal — 4 dự án × 7 tabs |
| `6451829` | Mobile menu, floating Zalo CTA, form submit thật |
| `0b33fae` | Font Be Vietnam Pro |
| `417d0f7` | Serverless function Gmail SMTP |
| `fe35601` | HTML email template chuyên nghiệp |
| `e474b00` | Auto-save leads Google Sheets |
| `35fd53a` | Fix dynamic sheet name lookup |
| `01fb646` | Script setup-sheet.js |
