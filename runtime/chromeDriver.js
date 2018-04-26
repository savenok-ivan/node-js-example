'use strict';

var chromedriver = require('chromedriver');
var selenium = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using Chrome as the browser
 * @returns {ThenableWebDriver} selenium web driver
 */
module.exports = function() {

    var driver = new selenium.Builder().withCapabilities({
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
            args: ['start-maximized', 'headless']
        },
        path: chromedriver.path
    }).usingServer('http://192.168.1.11:4444/wd/hub').build();

    driver.manage().window()/*.maximize()*/;

    return driver;
};
