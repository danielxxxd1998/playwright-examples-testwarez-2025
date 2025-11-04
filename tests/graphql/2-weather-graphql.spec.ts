import { test, expect } from '@playwright/test'

// Page: http://localhost:3000/practice/weatherAppGraphql/index.html

function getTodayDateString(): string {
  const now = new Date()
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

test.describe('Weather by day', { tag: ['@graphql'] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should fetch weather by day for today', async ({ request }) => {
    // Arrange: compute today's date as YYYY-MM-DD and prepare variables
    const day = getTodayDateString()

    const query = `
      query WeatherByDay($day: String!) {
        weatherByDay(day: $day) { temp date wind }
      }
    `

    // Act:
    const response = await request.post('/api/practice/weather/v1/graphql', {
      data: { query, variables: { day } },
    })
    const body = await response.json()

    // Assert:
    expect(response.status(), `Body: ${JSON.stringify(body)}`).toBe(200)
    expect(body.data.weatherByDay).toHaveProperty('temp')
    expect(body.data.weatherByDay).toHaveProperty('date')
    expect(body.data.weatherByDay).toHaveProperty('wind')
  })

  test('weatherByDay returns requested day in date', async ({ request }) => {
    // Arrange: compute today's date as YYYY-MM-DD and prepare variables
    const day = getTodayDateString()

    const query = `
      query WeatherByDay($day: String!) {
        weatherByDay(day: $day) { temp date wind }
      }
    `

    // Act:
    const response = await request.post('/api/practice/weather/v1/graphql', {
      data: { query, variables: { day } },
    })
    const body = await response.json()

    // Assert:
    expect(response.status(), `Body: ${JSON.stringify(body)}`).toBe(200)
    const wb = body.data.weatherByDay
    expect(typeof wb.date).toBe('string')
    // Some backends return full ISO date-time, so check prefix match
    expect(
      wb.date.startsWith(day) || wb.date.includes(day),
      `Expected date to include day ${day} but got ${wb.date}`
    ).toBeTruthy()
  })
})
