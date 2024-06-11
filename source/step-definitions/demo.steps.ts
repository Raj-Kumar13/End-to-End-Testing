import { Given, When, Then, DataTable } from "@wdio/cucumber-framework";
import LogIn from "../pages/login.page.ts";
import { WebApp } from "../env/manager.ts";
import { getCredential } from "../constants/userConstants.ts";
import AssertionUtils from "../utils/assertionUtils.ts"


Given(/^User launches to the OrangeHRM portal$/, async () => {
    await LogIn.open(WebApp.APP_URL)
})
When(/^User logs in to the OrangeHRM application$/, async (dataTable: DataTable) => {
    const user = getCredential(dataTable.raw()[0][0])
    await LogIn.reloadSessionAndLogin(user.username, user.password)
})
Then(/^Verify User navigates to correct landing page$/, async () => {
    await AssertionUtils.assertToHaveText(LogIn.loginAlert, "travis Chirici")
})