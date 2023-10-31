const { Support } = require("../setup/support")
const AxeBuilder = require('@axe-core/playwright').default; // 1

class AccessibilityPage {

// tag value allowed 'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'
  async axeCheck(tagValue) {
    const accessibilityScanResults = await new AxeBuilder({ page }) .withTags([tagValue]).analyze();
    expect(accessibilityScanResults.violations).to.deep.equal([]); // 5
  }

}

module.exports = { AccessibilityPage }
