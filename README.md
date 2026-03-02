# Vavilon Solutions - Marketing Website

Static Next.js marketing site for [Vavilon Solutions](https://vavilonsolutions.rs) — a real-time spoken translation platform for tours, museums, and conferences.

> **Separate from the web app** ([vavilonapp.rs](https://www.vavilonapp.rs)). This repository contains only the public marketing/landing page.

---

## Tech Stack

| Layer        | Technology                            |
|--------------|---------------------------------------|
| Framework    | Next.js 15 (App Router)               |
| UI Library   | React 19                              |
| Styling      | Tailwind CSS v3 (custom brand tokens) |
| Language     | TypeScript                            |
| Fonts        | Inter (self-hosted via `next/font`)   |
| Testing      | Playwright (E2E, desktop + mobile)    |

---

## Brand Colors (Tailwind Tokens)

| Token             | Hex / Value   | Usage                      |
|-------------------|---------------|----------------------------|
| `brand-bg`        | `#171A1C`     | Page background            |
| `brand-surface`   | `#1F2428`     | Card / section surfaces    |
| `primary`         | `#344CB7`     | Primary blue - nav, labels |
| `primary-hover`   | `#3B56D1`     | Blue hover state           |
| `accent`          | `#C4581B`     | Orange - primary CTA       |
| `accent-hover`    | `#CC6931`     | Orange hover state         |

---

## Project Structure

```
vavilon-website/
├── app/
│   ├── globals.css          # Tailwind directives + utility classes
│   ├── layout.tsx           # Root layout: Header, Footer, StickyContactButton
│   └── page.tsx             # Homepage: Hero, WhatWeOffer, FeaturesGrid, Mission
├── components/
│   ├── Header.tsx           # Sticky header with desktop nav + mobile hamburger
│   ├── Hero.tsx             # Split-layout hero, CTA below copy
│   ├── WhatWeOffer.tsx      # Two-column: visual left + feature list right
│   ├── FeaturesGrid.tsx     # 3x2 responsive card grid
│   ├── FeatureCard.tsx      # Individual feature card component
│   ├── Mission.tsx          # Full-width mission statement section
│   ├── Footer.tsx           # Multi-column footer with Book a Demo CTA
│   └── StickyContactButton.tsx  # Right-side persistent vertical button
├── public/
│   ├── vavilon-logo.png     # Brand logo
│   ├── placeholder-hero.svg # Hero section app illustration
│   └── placeholder-offer.svg # What We Offer illustration
├── tests/
│   └── e2e.spec.ts          # Playwright E2E tests
├── tailwind.config.ts       # Brand color tokens
├── playwright.config.ts     # Test runner config (auto-starts dev server)
└── README.md
```

---

## Layout Decisions (Different from original site)

| Original site                    | This site                                      |
|----------------------------------|------------------------------------------------|
| Clustered CTAs at the top        | Single prominent "Book a Demo" below hero copy |
| Centered single-column hero      | Split hero: text left + app visual right       |
| CTAs in the header               | Header is nav-only; CTAs in hero + footer      |
| No persistent contact affordance | Sticky right-side "Contact Us" button          |
| Standard list-style features     | 3x2 card grid with icons                       |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

The production server runs at [http://localhost:3000](http://localhost:3000).

---

## Running Tests

Install Playwright browsers first (one-time):

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

View the HTML report after a run:

```bash
npx playwright show-report
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
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`
- `aria-label` on all navigation elements and the sticky button
- `aria-expanded` / `aria-controls` on mobile menu button
- All images have descriptive `alt` text
- Focus rings on all interactive elements (`:focus-visible`)
- Minimum 44x44px tap targets on CTAs and the sticky button
- Colour contrast: white text on dark backgrounds exceeds 7:1

---

## GitHub Repository

Live at: [https://github.com/bantula/vavilon-website](https://github.com/bantula/vavilon-website)

Push future changes:

```bash
git add .
git commit -m "your message"
git push
```

---

## Customisation Checklist

- [ ] Replace `info@vavilonsolutions.rs` with the real contact/demo booking email
- [ ] Replace SVG placeholder illustrations with real screenshots/photography
- [ ] Add OG image (`public/og-image.png`, 1200x630)
- [ ] Update `vavilonsolutions.rs` links if the domain changes
- [ ] Add Google Analytics / Plausible script in `layout.tsx` if needed
- [ ] Set up Vercel / Azure Static Web Apps deployment

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

---

*Vavilon Solutions d.o.o. - Built in Serbia*
