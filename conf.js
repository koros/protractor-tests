const os = require('os');

const HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
const JasmineReporters = require('jasmine-reporters');

const prefix = './'.replace(/[^/]+/g,'.');

var webbrowserDriver= '';
if (os.platform() === 'win32') {
    webbrowserDriver = prefix + 'node_modules/webdriver-manager/selenium/chromedriver_2.26.exe';
} else {
    webbrowserDriver = prefix + 'node_modules/webdriver-manager/selenium/chromedriver_2.26';
}

exports.config = {
  framework: 'jasmine',
  seleniumServerJar: prefix + 'node_modules/webdriver-manager/selenium/selenium-server-standalone-3.7.1.jar',
  specs: ['spec.js'],

  onPrepare: function() {

        browser.driver.manage().window().setSize(1280, 1024);

        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            savePath: 'build/reports/e2e',
            consolidateAll: false
        }));

        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: "build/reports/e2e/screenshots"
        }));

    }
}
