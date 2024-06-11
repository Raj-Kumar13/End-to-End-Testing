import { WebdriverIoElement } from "../types/webElement";
import reporter from "./reporter.ts";

class AssertionUtils {
    async saveScrollIntoScreenshot(element: WebdriverIoElement) {
        if (process.env.ALLURE_ASSERT_REPORT_SCREEN?.toLocaleLowerCase() === 'yes') {
            (await element).scrollIntoView();
            await browser.takeScreenshot();
        }

    }
    async assertToHaveText(element: WebdriverIoElement, value: string) {
        await expect(element).toHaveText(value)
        await this.saveScrollIntoScreenshot(element)
        reporter.logStep(`>> Validated text : '${value}'`)

    }
}
export default new AssertionUtils();