const { Given, When, Then } = require("@cucumber/cucumber")
const { ActionPage } = require("../pages/action-page")
const { AssertPage } = require("../pages/assert-page")
const { AccessibilityPage } = require("../pages/accessibility-page")
const { Support } = require("../setup/support")
const support = new Support()

const actionPage = new ActionPage()
const assertPage = new AssertPage()
const accessibilityPage = new AccessibilityPage()


Given(/^I navigate to "([^"]*)"$/, async function (url) {
  await actionPage.navigateToScreen(url)
})

When(/^I enter "([^"]*)" into "([^"]*)"$/, async function (value, selector) {
  await actionPage.fillText(value,selector)
})

When(/^I enter "([^"]*)" sequentially into "([^"]*)"$/, async function (value, selector) {
  await actionPage.fillSequentially(value,selector)
})

Then(/^I dblclick "([^"]*)"$/, async function (selector) {
  await actionPage.dblclick(selector)
})

Then(/^I click "([^"]*)"$/, async function (selector) {
  await actionPage.click(selector)
})

Then(/^I clear "([^"]*)"$/, async function (selector) {
  await actionPage.clear(selector)
})

Then(/^I select "([^"]*)" checkbox$/, async function (selector) {
  await actionPage.selectCheckBox(selector)
})

Then(/^I take current page screenshot$/, async function () {
  await actionPage.screenshot()
})

Then(/^I run accessibility "([^"]*)" check on current page$/, async function (tagValue) {
  await accessibilityPage.axeCheck(tagValue)
})


When(/^I select "([^"]*)" from "([^"]*)"$/, async function (value, selector) {
  await actionPage.selectDropdown(value, selector)
})

Then(/^I click on "([^"]*)"$/, async function (selector) {
//   let sele  = await page.getByRole("button", { name: "Accept all"})
 let sele  = await support.getLocator(selector);
 await sele.click();
 console.log('sele..',sele);
 await page.locator('input[value="Google Search"]>> visible=true').click();
})

Then(/^I wait for "([^"]*)" seconds$/, async function (sec) {
  await actionPage.pause(sec)
})
