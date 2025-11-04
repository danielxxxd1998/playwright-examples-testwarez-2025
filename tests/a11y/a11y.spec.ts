import { test, expect } from '@playwright/test'
const { AxeBuilder } = require('@axe-core/playwright')

test.describe('Accessibility', { tag: ['@accessibility'] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  // This test will fail because the example site has accessibility issues.
  test.skip('any accessibility issues (this test will fail)', async ({ page }) => {
    const a11yScanResults = await new AxeBuilder({ page }).analyze()

    expect(a11yScanResults.violations).toEqual([])
  })

  // This test will fail because the example site has accessibility issues.
  test('WCAG A or AA violations (this test will fail)', async ({ page }) => {
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(a11yScanResults.violations).toEqual([])
  })
})
