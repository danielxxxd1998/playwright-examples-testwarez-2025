import { test, expect } from '@playwright/test'

// Visual regression test for Playwright navbar logo using element-level screenshot baseline
// Inspired by Playwright snapshot testing recommendations: https://playwright.dev/docs/test-snapshots

test.describe('visual regression: Playwright logo', { tag: ['@visual'] }, () => {
  test.use({
    colorScheme: 'light',
    viewport: { width: 1280, height: 720 },
  })

  test('navbar logo matches baseline screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/', { waitUntil: 'networkidle' })

    const logo = page.locator('.navbar__logo img')
    await expect(logo).toBeVisible()

    await expect(logo).toHaveScreenshot('playwright-logo.png', {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixels: 50,
    })
  })
})
