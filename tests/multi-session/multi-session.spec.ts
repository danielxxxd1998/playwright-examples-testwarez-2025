import test, { expect, Page } from '@playwright/test'

// recording tic tac toe game
async function login(page: Page, user: string, password: string) {
  await page.goto('/login/')
  await page.getByPlaceholder('Enter User Email').fill(user)
  await page.getByPlaceholder('Enter Password').fill(password)
  await page.getByRole('button', { name: 'LogIn' }).click()
}

test.use({
  trace: 'on',
  launchOptions: {
    slowMo: 500, // milliseconds
  },
})

test('Play game', async ({ page, browser }) => {
  test.setTimeout(60_000)

  // Arrange
  const paths = {
    login: '/login/',
    game: '/games/tic-tac-toe.html',
  }

  const users = {
    host: { email: 'Moses.Armstrong@Feest.ca', password: 'test1' },
    guest: { email: 'Dortha.Blick@Walker.name', password: '5Damien43' },
  }

  const uiText = {
    accept: 'Accept',
    startNewGame: 'Start New Game',
    joinGame: 'Join Game',
    currentPlayerOpponent: 'Current player: Opponent',
    winnerGuestSees: 'Game ended. Winner: Opponent',
    winnerHostSees: 'Game ended. Winner: You!',
  }

  const placeholders = {
    email: 'Enter User Email',
    password: 'Enter Password',
    sessionCode: 'Enter session code',
  }

  const selectors = {
    boardCells: '.board .cell',
  }

  const context = await browser.newContext()
  const pageHost = await context.newPage()

  // Act
  // Host logs in and starts a new game (creating the session)
  await login(pageHost, users.host.email, users.host.password)

  await pageHost.goto(paths.game)
  await pageHost.getByText(uiText.accept, { exact: true }).click()
  await pageHost.getByRole('button', { name: uiText.startNewGame }).click()

  const sessionCodeInput = pageHost.getByPlaceholder(placeholders.sessionCode)
  await expect(sessionCodeInput).not.toHaveValue('')
  const sessionCode = await sessionCodeInput.inputValue()
  expect(sessionCode).not.toBe('')

  // Guest logs in and joins the host's session
  await login(page, users.guest.email, users.guest.password)

  await page.goto(paths.game)
  await page.getByText(uiText.accept, { exact: true }).click()
  await page.getByPlaceholder(placeholders.sessionCode).fill(sessionCode)
  await page.getByRole('button', { name: uiText.joinGame }).click()

  // Turn-taking actions, asserting move results as we go to ensure stability
  await expect(page.getByText(uiText.currentPlayerOpponent)).toBeVisible()
  const guestBoard = page.locator(selectors.boardCells)
  const hostBoard = pageHost.locator(selectors.boardCells)

  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      // Host's turn
      if (i > 1) {
        await expect(hostBoard.nth(i - 1)).toHaveText('❌')
      }
      await hostBoard.nth(i).click()
      await expect(hostBoard.nth(i)).toHaveText('✅')
    } else {
      // Guest's turn
      await expect(guestBoard.nth(i - 1)).toHaveText('❌')
      await guestBoard.nth(i).click()
      await expect(guestBoard.nth(i)).toHaveText('✅')
    }
  }

  // Assert
  await expect(page.getByText(uiText.winnerGuestSees)).toBeVisible()
  await expect(pageHost.getByText(uiText.winnerHostSees)).toBeVisible()
})
