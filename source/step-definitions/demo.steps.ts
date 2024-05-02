import { Given, When,Then } from "@wdio/cucumber-framework";

Given(/^Google page is opened$/,async ()=>{
    browser.url(`https://www.google.com/`)
    browser.debug()
})