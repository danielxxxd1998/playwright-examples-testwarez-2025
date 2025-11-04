import { test, expect } from '@playwright/test'

// Page: http://localhost:3000/practice/weatherAppGraphql/index.html

test.describe('Simple weather GraphQL data fetch', { tag: ['@graphql'] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should fetch weather data', async ({ request }) => {
    // Arrange:
    const query = `
        query {
          currentWeather {
            temp
            date
            wind
          }
        }
    `

    // Act:
    const response = await request.post('/api/practice/weather/v1/graphql', {
      data: {
        query,
      },
    })
    const body = await response.json()

    // Assert:
    expect(response.status(), `Expected status 200: ${JSON.stringify(body)}`).toBe(200)
    expect.soft(body.data.currentWeather, `Data: ${JSON.stringify(body)}`).toHaveProperty('temp')
    expect.soft(body.data.currentWeather, `Data: ${JSON.stringify(body)}`).toHaveProperty('date')
    expect.soft(body.data.currentWeather, `Data: ${JSON.stringify(body)}`).toHaveProperty('wind')
  })
})
