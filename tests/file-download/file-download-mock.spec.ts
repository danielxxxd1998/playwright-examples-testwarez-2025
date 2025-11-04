import { test, expect } from '@playwright/test'

test.describe('Download Reports', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/downloads/simple-docx-download.html')
  })

  test('should download the docx report', async ({ page }) => {
    // Mock the download request to return File not Found 404
    await page.route('/api/practice/download/docx', async (route) => {
      console.log('Mocking DOCX download response')
      await route.fulfill({
        status: 404,
        body: JSON.stringify({ error: 'File not found' }),
        contentType: 'application/json',
      })
    })

    // Wait for the download event
    await page.getByRole('button', { name: 'Download Report' }).click()

    // Assert download properties
    await expect(page.locator('#status-message')).toHaveText(
      'Unable to download: Server responded with 404'
    )
  })
})
