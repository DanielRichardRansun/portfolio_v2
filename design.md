# Design System & Typography Guidelines
> **Portfolio v2 (Based on Framer Portfolica)**  
> Reference: [Portfolica Framer](https://portfolica.framer.website/)  
> Primary Display Font: **Clash Grotesk** (Fontshare)  
> Secondary / Body Font: **Inter** (Google Fonts)

Dokumen ini merupakan panduan utama (*single source of truth*) untuk desain, ukuran font, ketebalan (*font-weight*), jarak baris (*line-height*), spasi (*letter-spacing*), serta token warna dan komponen untuk seluruh halaman portfolio ini.

Setiap kali Anda ingin membuat atau mengupdate halaman baru (misalnya halaman About, Projects, Contact, atau Detail Project), selalu cocokkan komponen dan teks dengan spesifikasi di bawah ini.

---

## 1. Typography Presets (Portfolica Standard)

Semua tipografi diatur menggunakan preset standar yang diekstrak langsung dari komponen Framer Portfolica:

| Preset Name | Target Elemen | Desktop (>1200px) | Tablet (810–1199px) | Mobile (≤809px) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|---|
| **`rrfvpp`** | Hero Name Display | clamp(3.2rem, 5.8vw, 5.4rem) | clamp(3.2rem, 5.8vw, 5.4rem) | clamp(2.35rem, 9vw, 3.4rem) | 500 (Medium) | 1.18 | `-0.010em` |
| **`1m11noy`** | Section Titles (H2), Stat Numbers | **64px** | **52px** | **40px** | 500 (Medium) | 110% (`1.1`) | `0em` |
| **`6xvhop`** | About Statements, Service Descriptions, Career Roles | **24px** | **24px** | **20px** | 400 (Regular) | 130% (`1.3`) | `0em` |
| **`8hairs`** | Service Card Titles, Career Periods | **24px** | **24px** | **20px** | 500 (Medium) | 130% (`1.3`) | `0em` |
| **`1jkb8qo`** | Step Numbers (`01`, `02`), Section Category Labels | **20px** | **20px** | **18px** | 500 (Medium) | 130% (`1.3`) | `0em` |
| **`ime0kt`** | Hero Tagline, Stat Labels, Section Descriptions, Client Labels | **20px** | **20px** | **16px** | 400 (Regular) | 130% (`1.3`) | `0em` |
| **`tmxfhe`** | FAQ Questions, Accordion Headers | **18px** | **18px** | **17px** | 500 (Medium) | 140% (`1.4`) | `0em` |
| **`8e7dfp`** | Secondary Body Text, FAQ Answers | **18px** | **18px** | **16px** | 400 (Regular) | 130% (`1.3`) | `0em` |
| **`1d9au52`** | Nav Links, Buttons (Primary/Secondary), Card Tags | **16px** | **16px** | **16px** | 500 (Medium) | 130% (`1.3`) | `0em` |
| **`nr9bxu`** | Form Labels, Footer Links, Copyright Text | **16px** | **16px** | **14px** | 400 (Regular) | 130% (`1.3`) | `0em` |
| **`hfok2e`** | Pill Badges, Project Tags, Rating Badges, Strip Labels | **14px** | **14px** | **14px** | 500 (Medium) | 120% (`1.2em`) | `0em` |
| **`1offsbe`** | Sub-pill Text, Rating Review Counts | **14px** | **14px** | **13px** | 400 (Regular) | 130% (`1.3`) | `0em` |

---

## 2. Component-by-Component Typography Guide

### A. Navigation Bar
* **Class**: `.nav-link`, `.mobile-nav-link`
  * Font: `'Clash Grotesk', sans-serif`
  * Size: `16px`
  * Weight: `500`
  * Line Height: `1.3`
  * Letter Spacing: `0em`
  * Hover / Active: `color: var(--accent-orange)`
* **Connect / Call Button**: `.nav-btn-call`
  * Font: `'Clash Grotesk', sans-serif`
  * Size: `16px`
  * Weight: `500`
  * Line Height: `1.3`
  * Height: `52px` | Padding: `0 24px` | Border Radius: `9999px`

### B. Hero Section (Homepage)
* **Hero Name**: `.hero-name`
  * Layout: 2 baris (Baris 1: `Daniel` + avatar squircle, Baris 2: `Richard Ransun`)
  * Font: `'Clash Grotesk', sans-serif`
  * Size Desktop: `clamp(3.2rem, 5.8vw, 5.4rem)`
  * Size Mobile (≤640px): `clamp(2.35rem, 9vw, 3.4rem)`
  * Weight: `500`
  * Line Height: `1.18`
  * Letter Spacing: `-0.010em`
  * Second line: `white-space: nowrap;` (mencegah teks Richard Ransun terpecah ke baris ke-3)
* **Rating Pill**:
  * Score (`.rating-badge-star`): `14px`, weight `500`, line-height `1.2em`
  * Review count (`.rating-text`): `14px`, weight `400`, line-height `1.3`
* **Hero Tagline**: `.hero-tagline`
  * Font: `'Clash Grotesk', sans-serif`
  * Size Desktop: `20px` | Mobile (≤809px): `18px`
  * Weight: `400`
  * Line Height: `1.3`
  * Letter Spacing: `0em`
  * Color: `var(--text-secondary)`
* **CTA Buttons**: `.btn-primary`, `.btn-secondary`
  * Font: `'Clash Grotesk', sans-serif`
  * Size: `16px`
  * Weight: `500`
  * Line Height: `1.3`
  * Padding: `13px 26px`
  * Border Radius: `9999px`
* **Showcase Marquee Card Badge**: `.marquee-card-badge`
  * Size: `14px`, weight `500`, line-height `1.2em`
* **Quick Info Strip**:
  * Label (`.info-strip-label`): `14px`, weight `500`, uppercase, line-height `1.2em`, letter-spacing `0em`
  * Value (`.info-strip-val`): `16px`, weight `500`, line-height `1.3`, letter-spacing `0em`

### C. Section Headers & Badges
* **Section Badge**: `.badge`
  * Font: `'Clash Grotesk', sans-serif`
  * Size: `14px`
  * Weight: `500`
  * Line Height: `1.2em`
  * Letter Spacing: `0em`
  * Padding: `8px 22px`
  * Background: `var(--bg-surface)` | Border: `1px solid var(--border-subtle)`
* **Section Title**: `.section-subtitle`
  * Font: `'Clash Grotesk', sans-serif`
  * Desktop (>1200px): `64px`
  * Tablet (810–1199px): `52px`
  * Mobile (≤809px): `40px`
  * Weight: `500`
  * Line Height: `1.1` (110%)
  * Letter Spacing: `0em`
* **Section Description**: `.section-desc`
  * Font: `'Clash Grotesk', sans-serif`
  * Size: `20px` | Mobile: `16px`
  * Weight: `400`
  * Line Height: `1.3`
  * Letter Spacing: `0em`

### D. Featured Projects (Cards)
* **Pill Badge**:
  * Project Title (`.project-badge-title`): `14px`, weight `500`, line-height `1.2em`
  * Slash (`.project-badge-slash`): `14px`, weight `500`, line-height `1.2em`
  * Year (`.project-badge-year`): `14px`, weight `500`, line-height `1.2em`
* **Card Container**: `border-radius: 28px` (Mobile: `20px`) | `aspect-ratio: 1 / 0.95`
* **Action Button**: Circular `48px`, floating bottom-right with arrow icon.

### E. Stats Grid
* **Stat Number**: `.stat-val`
  * Font: `'Clash Grotesk', sans-serif`
  * Desktop (>1200px): `64px`
  * Tablet (810–1199px): `52px`
  * Mobile (≤809px): `40px`
  * Weight: `500`
  * Line Height: `1.1`
  * Letter Spacing: `0em`
* **Stat Label**: `.stat-label`
  * Font: `'Clash Grotesk', sans-serif`
  * Desktop / Tablet: `20px` | Mobile: `16px`
  * Weight: `400`
  * Line Height: `1.3`
  * Letter Spacing: `0em`

### F. About Me (Interactive Story Sheet)
* **Category Tag**: `.about-card-tag`
  * Font: `'Clash Grotesk', sans-serif`
  * Size: `16px`, weight `500`, line-height `1.3`
  * Color: `var(--accent-orange)`
* **Huge Statement**: `.about-huge-statement`
  * Font: `'Clash Grotesk', sans-serif`
  * Desktop / Tablet: `24px` | Mobile: `20px`
  * Weight: `400`
  * Line Height: `1.3`
  * Letter Spacing: `0em`
* **Career Role**: `.about-huge-career-role`
  * Size: `24px` | Mobile: `20px`
  * Weight: `400`, line-height `1.3`, letter-spacing `0em`
* **Career Period**: `.about-huge-career-period`
  * Size: `24px` | Mobile: `18px`
  * Weight: `500`, line-height `1.3`, letter-spacing `0em`
* **Status Pill**: `.about-status-pill .status-pill-text`
  * Size: `14px`, weight `500`, line-height `1.2em`

### G. Services & Offerings
* **Card Container**: `border-radius: 24px` | `padding: 30px` | `gap: 32px` | `border: 2px solid #ffffff`
* **Card Title**: `.service-card-title`
  * Font: `'Clash Grotesk', sans-serif`
  * Desktop / Tablet: `24px` | Mobile: `20px`
  * Weight: `500`
  * Line Height: `1.3`
  * Letter Spacing: `0em`
* **Card Description**: `.service-card-desc`
  * Font: `'Clash Grotesk', sans-serif`
  * Desktop / Tablet: `24px` | Mobile: `19px`
  * Weight: `400`
  * Line Height: `1.3`
  * Letter Spacing: `0em`
* **Icon Squircle**: `80px x 80px`, `border-radius: 40px`, background `#fafafa`, SVG size `36px`

### H. Project Detail Page
* **Project Main Title**: `.project-detail-title` -> `64px` (Tablet: `52px`, Mobile: `40px`), weight `500`, line-height `1.1`
* **Project Subtitle**: `.project-detail-subtitle` -> `20px` (Mobile: `18px`), weight `400`, line-height `1.3`
* **Feature Block Title**: `.detail-feature-title` -> `40px` (Mobile: `28px`), weight `500`, line-height `1.2`
* **Feature Block Body Paragraphs**: `.detail-feature-desc p` -> `18px`, weight `400`, line-height `1.6`
* **Info Strip (Client, Timeline, Service, Industry)**:
  * Label: `14px`, weight `500`, uppercase, line-height `1.2em`
  * Value: `16px`, weight `500`, line-height `1.3`

---

## 3. Color Tokens

### Light Mode (Default)
```css
:root {
  --bg-primary: #f4f4f5;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #ffffff;
  --bg-card: #ffffff;
  --bg-card-hover: #ffffff;
  --bg-subtle: #f0f0f2;

  --text-primary: #27272a;
  --text-secondary: #52525b;
  --text-muted: #71717a;
  --text-dim: #a1a1aa;

  --border-subtle: rgba(0, 0, 0, 0.06);
  --border-light: #e4e4e7;
  --border-accent: rgba(0, 0, 0, 0.16);

  --accent-orange: #fd6e32;
  --accent-orange-hover: #f64617;
  --accent-orange-glow: rgba(253, 110, 50, 0.25);
  --accent-orange-subtle: rgba(253, 110, 50, 0.08);

  --accent-green: #10b981;
  --accent-green-glow: rgba(16, 185, 129, 0.18);
}
```

### Dark Mode (`[data-theme="dark"]`)
```css
[data-theme="dark"] {
  --bg-primary: #09090b;
  --bg-surface: #121215;
  --bg-surface-elevated: #18181c;
  --bg-card: rgba(24, 24, 28, 0.75);
  --bg-card-hover: rgba(32, 32, 38, 0.9);
  --bg-subtle: #1f1f23;

  --text-primary: #f4f4f5;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --text-dim: #52525b;

  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-light: rgba(255, 255, 255, 0.12);
  --border-accent: rgba(255, 255, 255, 0.22);
}
```

---

## 4. Spacing & Radius Tokens

* **Container Width**:
  * Standard: `max-width: 1240px; padding: 0 32px;`
  * Narrow / Detail: `max-width: 880px; padding: 0 24px;`
* **Section Padding**:
  * Desktop: `100px - 140px`
  * Mobile: `64px - 80px`
* **Border Radii**:
  * `--radius-sm`: `8px`
  * `--radius-md`: `14px`
  * `--radius-lg`: `20px`
  * `--radius-xl`: `24px`
  * Pill / Full: `9999px`

---

## 5. Micro-Interactions & Animation Patterns

1. **Button & Nav Flip Animation**:
   Setiap link atau button interaktif menggunakan struktur `.btn-flip-wrapper`:
   ```html
   <span class="btn-flip-wrapper">
     <span class="btn-flip-text">
       <span class="btn-flip-front">Text Label</span>
       <span class="btn-flip-back" aria-hidden="true">Text Label</span>
     </span>
   </span>
   ```
   Saat di-hover, teks depan tergulung ke atas (`translateY(-100%)`) dan teks belakang muncul dari bawah dengan warna oranye `var(--accent-orange)`.

2. **Scroll Reveal Animation**:
   Elemen dengan class `.reveal-blur` atau `.anim-scroll-reveal` dianimasikan bertahap saat masuk ke viewport dengan transisi smooth opacity & blur filter.

3. **Card Elevate on Hover**:
   Card menggunakan `transform: translateY(-3px)` atau `translateY(-4px)` dengan subtle shadow expansion pada hover.
