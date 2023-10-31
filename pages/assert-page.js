const { Support } = require("../setup/support")
const support = new Support()

class AssertPage {

  async pageTitle(expectedTitle) {
    await expect(page).toHaveTitle(expectedTitle);
  }

  async pageURL(expectedURL) {
    await expect(page).toHaveURL(expectedURL);
  }

  async assertValue(value, locator) {
    let selector = await support.getLocator(locator);
    const actualValue = await page.locator(selector).textContent();
    let expectedValue = await support.getData(value);
    console.log('Expecting :', expectedValue, ", Actual Value :", actualValue)
    await expect(expectedValue).to.equal(actualValue);
  }

  async assertContainText(value, locator) {
    let selector = await support.getLocator(locator);
    const actualValue = await page.locator(selector).textContent();
    let expectedValue = await support.getData(value);
    console.log('Expecting :', expectedValue, ", Actual Value :", actualValue)
    await expect(expectedValue).toContainText(actualValue);
  }

  async assertHaveText(value, locator) {
    let selector = await support.getLocator(locator);
    const actualValue = await page.locator(selector).textContent();
    let expectedValue = await support.getData(value);
    console.log('Expecting :', expectedValue, ", Actual Value :", actualValue)
    await expect(expectedValue).toHaveText(actualValue);
  }

  async assertChecked(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeChecked();
  }

  async assertDisabled(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeDisabled();
  }

  async assertEnabled(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeEnabled();
  }

  async assertFocused(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeFocused();
  }

  async assertHidden(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeHidden();
  }

  async assertVisible(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeVisible();
  }

  async assertEmptyTxtBox(locator) {
    let selector = await support.getLocator(locator);
    await expect(selector).toBeEmpty();
  }

  async pause(sec) {
    await page.waitForTimeout(1000 * sec)
  }
}

module.exports = { AssertPage }
