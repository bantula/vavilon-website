import { test, expect } from '@playwright/test'

/**
 * Vavilon Website — End-to-End Tests
 *
 * Verifies that key elements are visible and accessible across
 * desktop and mobile viewports.
 */

test.describe('Homepage — Hero', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('H1 heading is visible on desktop', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1 })
    ).toBeVisible()
  })

  test('H1 heading contains key copy', async ({ page }) => {
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toContainText(/language barrier/i)
  })

  test('"Book a Demo" primary CTA is visible', async ({ page }) => {
    // The first Book a Demo button is in the hero section below the copy
    const cta = page.getByRole('link', { name: /book a demo/i }).first()
    await expect(cta).toBeVisible()
  })

  test('"See It Live" secondary CTA is visible', async ({ page }) => {
    const cta = page.getByRole('link', { name: /see it live/i }).first()
    await expect(cta).toBeVisible()
  })

  test('eyebrow badge "Real-Time Translation Platform" is visible', async ({ page }) => {
    await expect(page.getByText(/real-time translation platform/i).first()).toBeVisible()
  })
})

test.describe('Homepage — Hero (mobile viewport)', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('H1 heading is visible on mobile', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1 })
    ).toBeVisible()
  })

  test('"Book a Demo" CTA is visible on mobile', async ({ page }) => {
    const cta = page.getByRole('link', { name: /book a demo/i }).first()
    await expect(cta).toBeVisible()
  })

  test('hero CTA has adequate tap target size (≥44px)', async ({ page }) => {
    const cta = page.getByRole('link', { name: /book a demo/i }).first()
    const box = await cta.boundingBox()
    expect(box).not.toBeNull()
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(44)
    }
  })
})

test.describe('Sticky Contact Button', () => {
  test('is visible on desktop', async ({ page }) => {
    await page.goto('/')
    const stickyBtn = page.getByRole('link', { name: /contact vavilon solutions/i })
    await expect(stickyBtn).toBeVisible()
  })

  test('has adequate tap target on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
    const stickyBtn = page.getByRole('link', { name: /contact vavilon solutions/i })
    const box = await stickyBtn.boundingBox()
    expect(box).not.toBeNull()
    if (box) {
      // Minimum 44px in either dimension per WCAG 2.5.5
      const adequateTarget = box.width >= 44 || box.height >= 44
      expect(adequateTarget).toBe(true)
    }
  })

  test('navigates to #contact anchor', async ({ page }) => {
    await page.goto('/')
    const stickyBtn = page.getByRole('link', { name: /contact vavilon solutions/i })
    const href = await stickyBtn.getAttribute('href')
    expect(href).toBe('#contact')
  })
})

test.describe('Navigation', () => {
  test('header nav is visible on desktop', async ({ page }) => {
    await page.goto('/')
    await expect(
      page.getByRole('navigation', { name: /primary navigation/i })
    ).toBeVisible()
  })

  test('mobile hamburger menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    // Primary nav should not be visible on mobile
    const desktopNav = page.getByRole('navigation', { name: /primary navigation/i })
    await expect(desktopNav).not.toBeVisible()

    // Tap hamburger
    const hamburger = page.getByRole('button', { name: /open navigation menu/i })
    await hamburger.click()

    // Mobile nav should appear
    const mobileNav = page.getByRole('navigation', { name: /mobile navigation/i })
    await expect(mobileNav).toBeVisible()

    // Close menu
    const closeBtn = page.getByRole('button', { name: /close navigation menu/i })
    await closeBtn.click()
    await expect(mobileNav).not.toBeVisible()
  })

  test('skip-to-content link is present in DOM', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipLink).toHaveAttribute('href', '#main-content')
  })
})

test.describe('Sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('"What We Offer" section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /what we offer/i })).toBeVisible()
  })

  test('"Features" section heading is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /everything your team needs/i })).toBeVisible()
  })

  test('Mission section is present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /our mission/i })).toBeVisible()
  })

  test('Newsletter section and "Book a Demo" footer CTA are present', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /get product updates/i })).toBeVisible()
    // Footer CTA (second "Book a Demo")
    const ctaLinks = await page.getByRole('link', { name: /book a demo/i }).all()
    expect(ctaLinks.length).toBeGreaterThanOrEqual(2)
  })
})

test.describe('Accessibility', () => {
  test('images have non-empty alt text', async ({ page }) => {
    await page.goto('/')
    const images = await page.getByRole('img').all()
    for (const img of images) {
      const alt = await img.getAttribute('alt')
      expect(alt).not.toBeNull()
      expect(alt).not.toBe('')
    }
  })

  test('page has a single h1', async ({ page }) => {
    await page.goto('/')
    const h1s = await page.getByRole('heading', { level: 1 }).all()
    expect(h1s.length).toBe(1)
  })

  test('main landmark is present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('main')).toBeVisible()
  })
})
