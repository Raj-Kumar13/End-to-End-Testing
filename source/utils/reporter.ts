import allure from '@wdio/allure-reporter'
class Reporter {
    logStep(step: string) {
        allure.addStep(step)
        console.log(`>> STEP >> ${step}`)
    }
    attachFile(name: string, content: string | object | Buffer, type: string) {
        allure.addAttachment(name, content, type)
    }
}
export default new Reporter();

