const { Support } = require("../setup/support")
const support = new Support()

class ActionPage {

  async navigateToScreen(url) {
    let app_url = await support.getData(url);
    console.log('Navigating to :', app_url)
    await page.goto(app_url)
  }

  async click(locator) {
    let selector = await support.getLocator(locator);
    console.log('Clicking on :', selector)
    await page.click(selector)
  }

  async dblclick(locator) {
    let selector = await support.getLocator(locator);
    console.log('Double Clicking on :', selector)
    await page.dblclick(selector)
  }

  async fillText(value, locator) {
    let selector = await support.getLocator(locator);
    //    let data = await support.getData(value);
    console.log('Entering Value :', value, "In locator:", selector)
    await page.fill(selector, value)
  }

  async uploadFile(filePath, locator) {
    let selector = await support.getLocator(locator);
    //    let data = await support.getData(value);
    let file = path.join(__dirname, 'filePath')
    await page.setInputFiles(selector, file)
  }

  async dragDrop(locator1, locator2) {
    let SourceLoc = await support.getLocator(locator1);
    //    let data = await support.getData(value);
    let DestinationLoc = await support.getLocator(locator2);
    await page.dragTo(SourceLoc, DestinationLoc)
  }

  async pressKey(key, locator) {
    let selector = await support.getLocator(locator);
    //    let data = await support.getData(value);
    console.log('Entering Value :', press, "In locator:", selector)
    await page.press(selector, key)
  }

  async selectCheckBox(locator) {
    let selector = await support.getLocator(locator);
    console.log('Selecting CheckBox :', selector)
    await page.check(selector)
  }

async clear(locator) {
    let selector = await support.getLocator(locator);
    console.log('Clear field :', selector)
    await page.clear(selector)
  }

async screenshot() {
    const currentTimestamp = support.getTimeStamp()
    await page.screenshot({ path: './output/screenshots/'+currentTimestamp+'.png',fullPage: true  });
  }

  async selectDropdown(value, locator) {
    let selector = await support.getLocator(locator);
    console.log('Selecting DropDown value:', value, 'from :', selector)
    await page.selectOption(selector, value)
  }

  async pause(sec) {
    await page.waitForTimeout(1000 * sec)
  }
}

module.exports = { ActionPage }
