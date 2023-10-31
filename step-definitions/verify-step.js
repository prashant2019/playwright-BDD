const { Given, When, Then } = require("@cucumber/cucumber")
const { AssertPage } = require("../pages/assert-page")
const { Support } = require("../setup/support")

const support = new Support()
const assertPage = new AssertPage()

Then (/^Verify current page title is "([^"]*)"$/, async function (title) {
  await assertPage.pageTitle(title)
})

Then (/^Verify current page url is "([^"]*)"$/, async function (url) {
  await assertPage.pageURL(url)
})

Then(/^I verify "([^"]*)" text is display at "([^"]*)"$/, async function (value, selector) {
   await assertPage.assertValue(value,selector)
})

Then(/^Verify "([^"]*)" contains text "([^"]*)"$/, async function ( selector,value) {
   await assertPage.assertContainText(value,selector)
})

Then(/^Verify "([^"]*)" have text "([^"]*)"$/, async function ( selector,value) {
   await assertPage.assertHaveText(value,selector)
})

Then (/^Verify "([^"]*)" is checked$/, async function (selector) {
  await assertPage.assertChecked(selector)
})

Then (/^Verify "([^"]*)" is disabled/, async function (selector) {
  await assertPage.assertDisabled(selector)
})

Then (/^Verify "([^"]*)" is enabled/, async function (selector) {
  await assertPage.assertEnabled(selector)
})

Then (/^Verify "([^"]*)" is focused/, async function (selector) {
  await assertPage.assertFocused(selector)
})

Then (/^Verify "([^"]*)" is hidden/, async function (selector) {
  await assertPage.assertHidden(selector)
})

Then (/^Verify "([^"]*)" is visible/, async function (selector) {
  await assertPage.assertVisible(selector)
})

Then (/^Verify "([^"]*)" is empty/, async function (selector) {
  await assertPage.assertEmptyTxtBox(selector)
})