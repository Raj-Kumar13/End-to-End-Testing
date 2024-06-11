import reporter from "../utils/reporter.ts"
import type { WebdriverIoElement } from '../types/webElement.d.ts'

export default class BasePage {
    open(pageUrl: string) {
        reporter.logStep(`>> Opening URL: ${pageUrl} `)
        return browser.url(pageUrl)
    }
    async waitForValueDisplayed(element: WebdriverIoElement, value: string) {

        await browser.waitUntil(
            async () => ((await element.getValue()) === value),
            {
                timeout: 5000,
                timeoutMsg: `Timeout : expected value to be different after 5s - ${value}`
            }
        )
    }
    async waitForTextDisplayed(element: WebdriverIoElement, value: string) {
        await browser.waitUntil(
            async () => ((await element.getText()) === value),
            {
                timeout: 5000,
                timeoutMsg: `Timeout : expected value to be different after 5s - ${value}`
            }
        )
    }
    async clickElement(element: WebdriverIoElement) {
        await element.click()
        reporter.logStep(`>> Clicked the element '${await element.selector}' `)
    }


};