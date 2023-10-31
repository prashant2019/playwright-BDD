const reporter = require("cucumber-html-reporter")

const options = {
  theme: "bootstrap",
  jsonFile: "output/cucumber_report.json",
  output: "output/html-reports/cucumber_report.html",
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "SIT",
    Browser: "Chrome 118.0",
    Platform: "Mac os",
  },
}

reporter.generate(options)
