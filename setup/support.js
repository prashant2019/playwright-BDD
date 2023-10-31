const fs = require('fs');
const yaml = require('js-yaml');

class Support {

  async getLocator(selector) {
    try {
      let result;
      let locType;
      // Read the YAML file
      const yamlFileContent = fs.readFileSync("./locators/sample.yml", 'utf8');
      // Parse the YAML content
      const config = yaml.load(yamlFileContent);
      const indexOfPlus = config[selector].indexOf('+');
 if (indexOfPlus === -1) {
 throw new Error('Locator syntax incorrect for');
}
      if (indexOfPlus !== -1) {
        locType = config[selector].slice(0, indexOfPlus).trim();
        if (locType == "getByRole") {
          result = await page.getByRole(config[selector].slice(indexOfPlus + 1).trim());
        }
        else if (locType == "getByLabel") {
          result = await page.getByLabel(config[selector].slice(indexOfPlus + 1).trim());
        }
        else if (locType == "getByText") {
          result = await page.getByText(config[selector].slice(indexOfPlus + 1).trim());
        }
        else if (locType == "getByAltText") {
          result = await page.getByAltText(config[selector].slice(indexOfPlus + 1).trim());
        }
        else if (locType == "getByTitle") {
          result = await page.getByTitle(config[selector].slice(indexOfPlus + 1).trim());
        }
        else if (locType == "getByTestId") {
          result = await page.getByTestId(config[selector].slice(indexOfPlus + 1).trim());
        }
        else {
          result = config[selector].slice(indexOfPlus + 1).trim();
        }
        return result
      }
    } catch (err) {
    throw new Error('Error reading or Locator syntax incorrect :' ,err)
    }
  }

  getData(data) {
    try {
      let yamlFileContent;
      if (process.env.TEST_ENV == "int") {
        yamlFileContent = fs.readFileSync("./test-data/int-env-test-data.yml", 'utf8');
      }
      else {
        yamlFileContent = fs.readFileSync("./test-data/dev-env-test-data.yml", 'utf8');
      }

      const config = yaml.load(yamlFileContent);

      return config[data];
    } catch (err) {
      console.error('Error reading or parsing the Data YAML file:', err);
    }
  }

  getTimeStamp(){
  const now = new Date(); // Create a Date object representing the current date and time
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // Months are zero-based, so add 1
  const currentDay = now.getDate();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  console.log(`Current Date and Time: ${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}`);
  const displayTime = currentYear+''+currentMonth+''+currentDay+''+currentHour+''+currentMinute
  return displayTime
  }

}

module.exports = { Support }