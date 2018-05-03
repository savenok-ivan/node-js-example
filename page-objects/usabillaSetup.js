/* eslint-disable no-undef */
module.exports = {
    elements: {
        linkToCreateNewButton: by.css('.add_new.tooltips'),
        nameButtonInput: by.css('#site_form_name'),
        submitNewButton: by.css('#button_setup .green_button'),
        advancedSettingsLink: by.css('.advanced'),
        generateFullPageScreenshotCheckbox: by.css('#site_form_full_page_screenshot'),
        inputKeywordAutoLabeling: by.css('#site_form_auto_label_0_auto_label_text'),
        inputLabelAutoLabeling: by.css('#site_form_auto_label_0_auto_label_name'),
        selectOperatorAutoLabeling: by.css('#site_form_auto_label_0_auto_label_operator')
    },
    navigateToButtonCreationPage: function () {
        driver.findElement(page.usabillaSetup.elements.linkToCreateNewButton).click();
    },

    createNewButton: function () {
        driver.sleep(shared.constantsData.oneSecondTimeOut);
        var nameButton = shared.testData.nameButton;
        driver.findElement(page.usabillaSetup.elements.nameButtonInput).sendKeys(nameButton);
    },

    generateFullPageScreenshot: function () {
        driver.sleep(shared.constantsData.fourSecondsTimeOut);
        driver.findElement(page.usabillaSetup.elements.advancedSettingsLink).click();
        driver.findElement(page.usabillaSetup.elements.generateFullPageScreenshotCheckbox).click();
    },

    setUpAutoLabeling: function (keyword, label, operator) {
        driver.sleep(shared.constantsData.oneSecondTimeOut);
        driver.findElement(page.usabillaSetup.elements.inputKeywordAutoLabeling).sendKeys(keyword);
        driver.findElement(page.usabillaSetup.elements.inputLabelAutoLabeling).sendKeys(label);
        driver.findElement(page.usabillaSetup.elements.selectOperatorAutoLabeling).sendKeys(operator);
    },

    saveButton: function () {
        driver.sleep(shared.constantsData.oneSecondTimeOut);
        driver.findElement(page.usabillaSetup.elements.submitNewButton).click();
    }
};
