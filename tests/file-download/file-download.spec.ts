import { test, expect } from '@playwright/test'

test.describe('Download Reports', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/practice/downloads/simple-docx-download.html')
  })

  test('should download the docx report', async ({ page }) => {
    // Arrange
    const expectedFileName = 'business-report.docx'
    const downloadPromise = page.waitForEvent('download')

    // Act
    await page.getByRole('button', { name: 'Download Report' }).click()
    const download = await downloadPromise

    // Assert
    const suggestedFileName = download.suggestedFilename()
    expect(suggestedFileName).toBe(expectedFileName)
  })

  test('should download the docx report with response check', async ({ page }) => {
    // Arrange
    const expectedFileName = 'business-report.docx'
    const responsePromise = page.waitForResponse('api/practice/download/docx')
    const downloadPromise = page.waitForEvent('download')

    // Act
    await page.getByRole('button', { name: 'Download Report' }).click()
    const response = await responsePromise
    const download = await downloadPromise

    // Assert
    expect(response.status()).toBe(200)
    const suggestedFileName = download.suggestedFilename()
    expect(suggestedFileName).toBe(expectedFileName)
  })
})
