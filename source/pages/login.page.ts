import BasePage from "./base.page.ts";

class LogIn extends BasePage {
    private get submitButton() { return $(`[type='submit']`) }
    private get inputUserName() { return $(`[name="username"]`) }
    private get inputPassword() { return $(`[name="password"]`) }
    private get logInTitle() { return $(`//h5[@class="oxd-text oxd-text--h5 orangehrm-login-title"]`) }
    get loginAlert() { return $(`[class=oxd-userdropdown-name]`) }

    async login(username: string, password: string) {
        await this.waitForTextDisplayed(this.logInTitle, 'Login')
        await this.inputUserName.setValue(username)
        await this.inputPassword.setValue(password)
        await this.clickElement(this.submitButton)
    }

    async reloadSessionAndLogin(username: string, password: string) {
        const currentURL = await browser.getUrl()
        await browser.reloadSession()
        await browser.url(currentURL)
        await this.login(username, password)
        await browser.url(currentURL)
    }
}
export default new LogIn();
