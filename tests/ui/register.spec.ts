import { expect, test } from '@playwright/test'
import { RegisterPage } from '../../src/pages/register.page'
import { LoginPage } from '../../src/pages/login.page'
import { generateUser } from '../../src/helpers/user.generator'

test.describe('Verify register', () => {
  test('register with correct data and login @GAD-R03-01 @GAD-R03-02 @GAD-R03-03', async ({
    page,
  }) => {
    // Arrange
    const user = generateUser()

    const registerPage = new RegisterPage(page)

    // Act
    await registerPage.goto()
    await registerPage.register(user.firstName, user.lastName, user.email, user.password)

    const expectedAlertPopupText = 'User created'

    // Assert
    await expect(registerPage.alertPopup).toHaveText(expectedAlertPopupText)

    const loginPage = new LoginPage(page)
    await loginPage.waitForPageToLoadUrl()
    const titleLogin = await loginPage.title()
    expect.soft(titleLogin).toContain('Login')

    // Assert
    await loginPage.login(user.email, user.password)

    const titleWelcome = await page.title()
    expect(titleWelcome).toContain('Welcome')
  })
})
