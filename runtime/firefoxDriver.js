'use strict';

var firefox = require('geckodriver');
var selenium = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Firefox as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function() {

    var driver = new selenium.Builder().withCapabilities({
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        firefoxOptions: {
            args: ['headless']
        },
        'webdriver.firefox.bin': firefox.path
    }).usingServer('http://localhost:4444/wd/hub').build();

    driver.manage().window();

    return driver;
};
