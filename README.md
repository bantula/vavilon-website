# Vavilon Solutions — Marketing Website

Public marketing / landing page for [vavilonsolutions.rs](https://vavilonsolutions.rs) — a real-time spoken translation platform for tours, museums, and conferences.

> **Separate from the web app** ([vavilonapp.rs](https://www.vavilonapp.rs)). This repository contains only the public marketing site.

---

## Tech Stack

| Layer        | Technology                                       |
|--------------|--------------------------------------------------|
| Framework    | Next.js 15 (App Router, SSR + API Routes)        |
| UI Library   | React 19                                         |
| Styling      | Tailwind CSS v3 (custom brand tokens)            |
| Language     | TypeScript                                       |
| Fonts        | Inter (self-hosted via `next/font`)              |
| Database     | Azure Cache for Redis (lead storage)             |
| Hosting      | Azure Static Web Apps (GitHub Actions CI/CD)     |
| Testing      | Playwright (E2E, desktop + mobile)               |

---

## Features

### Pages & Sections

| Section             | File                          | Description                                                                 |
|---------------------|-------------------------------|-----------------------------------------------------------------------------|
| Header              | `components/Header.tsx`       | Sticky nav with desktop links, mobile hamburger menu, and language switcher |
| Hero                | `components/Hero.tsx`         | Split layout — headline left, app visual right; stat badges below           |
| What We Offer       | `components/WhatWeOffer.tsx`  | Two-column: animated feature list + product visual                          |
| Features Grid       | `components/FeaturesGrid.tsx` | 3×2 responsive card grid of platform capabilities                           |
| Mission             | `components/Mission.tsx`      | Full-width mission statement with three value pillars                       |
| Pricing             | `components/PricingSection.tsx` | Two pricing cards (Free Trial + Professional) each with a lead capture form |
| Book a Demo         | `components/BookingSection.tsx` | Embedded Calendly inline widget for scheduling demos                        |
| Newsletter / CTA    | `components/Newsletter.tsx`   | Email signup form + secondary "Book a Demo" CTA block                       |
| Footer              | `components/Footer.tsx`       | Multi-column footer: brand description, product links, company links        |
| Sticky Contact      | `components/StickyContactButton.tsx` | Persistent right-side vertical "Contact Us" button                   |

### Bilingual Support (EN / SR)

- Language switcher dropdown in the header (English / Srpski)
- All visible text — headings, body copy, form labels, error messages, buttons — is fully translated
- Language preference persisted to `localStorage('vavilon-lang')`
- No external i18n library; custom `lib/translations.ts` + `contexts/LanguageContext.tsx`

### Lead Capture API

- **Endpoint:** `POST /api/leads`
- Accepts: `plan`, `name`, `surname`, `email`, `phone` (optional)
- Stores each lead as JSON in Azure Cache for Redis under key `lead:<uuid>`
- Also logs to stdout so leads are never lost even if Redis is unavailable
- Always returns `201` — Redis failure is non-fatal
- **Health check:** `GET /api/leads/health`

### Booking (Calendly)

- Embedded Calendly inline widget in `BookingSection`
- Lazy-loaded via `next/script strategy="lazyOnload"`
- Calendly URL configured via `CALENDLY_URL` constant in `BookingSection.tsx`

---

## Project Structure

```
vavilon-website/
├── app/
│   ├── api/
│   │   └── leads/
│   │       ├── route.ts          # POST /api/leads — lead capture endpoint
│   │       ├── health/
│   │       │   └── route.ts      # GET /api/leads/health
│   │       └── _redis.ts         # Redis client (Azure Cache, rediss:// + TLS)
│   ├── globals.css               # Tailwind directives + utility classes
│   ├── layout.tsx                # Root layout: LanguageProvider, Header, Footer, StickyContactButton
│   └── page.tsx                  # Homepage: all sections composed in order
├── components/
│   ├── Header.tsx                # Sticky header + mobile menu + LangSwitcher dropdown
│   ├── Hero.tsx                  # Split-layout hero with stat badges
│   ├── WhatWeOffer.tsx           # Two-column feature overview
│   ├── FeaturesGrid.tsx          # 3×2 feature card grid
│   ├── FeatureCard.tsx           # Individual feature card
│   ├── Mission.tsx               # Mission statement + value pillars
│   ├── PricingSection.tsx        # Pricing cards with lead capture forms
│   ├── BookingSection.tsx        # Calendly embed
│   ├── Newsletter.tsx            # Newsletter signup + demo CTA
│   ├── Footer.tsx                # Site footer
│   └── StickyContactButton.tsx   # Persistent right-side contact button
├── contexts/
│   └── LanguageContext.tsx       # React context: LanguageProvider + useLanguage() hook
├── lib/
│   └── translations.ts           # ~130 bilingual keys (EN / SR) via getTranslations(lang)
├── scripts/
│   └── list-leads.mjs            # CLI script: reads .env.local, prints all Redis leads
├── public/
│   ├── vavilon-logo.png          # Brand logo
│   ├── placeholder-hero.svg      # Hero app illustration (replace with real screenshot)
│   └── placeholder-offer.svg     # What We Offer illustration (replace with real screenshot)
├── tests/
│   └── e2e.spec.ts               # Playwright E2E test suite
├── tailwind.config.ts            # Brand color tokens
├── playwright.config.ts          # Playwright config (auto-starts dev server)
└── README.md
```

---

## Brand Colors (Tailwind Tokens)

| Token           | Hex       | Usage                        |
|-----------------|-----------|------------------------------|
| `brand-bg`      | `#171A1C` | Page background              |
| `brand-surface` | `#1F2428` | Cards / section surfaces     |
| `primary`       | `#344CB7` | Primary blue — nav, labels   |
| `primary-hover` | `#3B56D1` | Blue hover state             |
| `accent`        | `#C4581B` | Orange — primary CTA buttons |
| `accent-hover`  | `#CC6931` | Orange hover state           |

---

## Environment Variables

| Variable         | Where set                        | Description                                      |
|------------------|----------------------------------|--------------------------------------------------|
| `REDIS_URL`      | Azure SWA Application Settings   | Redis hostname (e.g. `*.redis.cache.windows.net`) |
| `REDIS_PASSWORD` | Azure SWA Application Settings   | Redis primary access key (44-char base64)        |

For local development, create `.env.local`:

```env
REDIS_URL=your-redis-host.redis.cache.windows.net
REDIS_PASSWORD=your-primary-key=
```

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9+

### Install & Run

```bash
npm install
npm run dev       # http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## Deployment

The site is hosted on **Azure Static Web Apps** and deploys automatically on every push to `master` via GitHub Actions (workflow in `.github/workflows/`).

Live URL: [https://www.vavilonsolutions.rs](https://www.vavilonsolutions.rs)

---

## Inspecting Leads (Redis)

To view captured leads locally:

```bash
node scripts/list-leads.mjs
```

Requires `REDIS_URL` and `REDIS_PASSWORD` to be set in `.env.local`.

---

## Running Tests

Install Playwright browsers (one-time):

```bash
npx playwright install
```

Run all tests (dev server starts automatically):

```bash
npm run test:e2e
```

Open the interactive Playwright UI:

```bash
npm run test:e2e:ui
```

### What the tests verify

- **Hero:** H1 heading visible on desktop and mobile, "Book a Demo" CTA visible
- **Mobile viewport (375px):** CTA has 44px+ tap target (WCAG 2.5.5)
- **Sticky button:** Visible, links to `#contact`, adequate tap target
- **Navigation:** Desktop nav, mobile hamburger menu open/close
- **Sections:** All major sections render headings
- **Accessibility:** All images have alt text, single H1, `<main>` landmark present
- **Skip link:** Present and points to `#main-content`

---

## Accessibility (WCAG AA)

- Skip-to-content link (visible on keyboard focus)
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `aria-label` on all navigation elements and the sticky button
- `aria-expanded` / `aria-controls` on mobile menu button
- All images have descriptive `alt` text
- Focus rings on all interactive elements (`:focus-visible`)
- Minimum 44×44px tap targets on CTAs and the sticky button
- Colour contrast: white text on dark backgrounds exceeds 7:1

---

## Scripts Reference

| Script              | Command                |
|---------------------|------------------------|
| Dev server          | `npm run dev`          |
| Production build    | `npm run build`        |
| Production server   | `npm run start`        |
| Lint                | `npm run lint`         |
| E2E tests           | `npm run test:e2e`     |
| E2E tests (UI mode) | `npm run test:e2e:ui`  |
| List Redis leads    | `node scripts/list-leads.mjs` |

---

## Customisation Checklist

- [ ] Replace SVG placeholder illustrations with real product screenshots
- [ ] Add OG image (`public/og-image.png`, 1200×630)
- [ ] Connect newsletter form to a mailing service (Mailchimp, Resend, etc.)
- [ ] Add analytics (Google Analytics / Plausible) in `app/layout.tsx`

---

*Vavilon Solutions d.o.o. — Built in Serbia 🇷🇸*
