module.exports = {
    
    elements: {
        linkToCreateNewButton: by.css('.add_new.tooltips'),
        nameButtonInput: by.name('site_form[name]'),
        submitNewButton: by.css('#button_setup > button.link_button.gradient.rounded_button.green_button'),
        advancedSettingsLink: by.className('advanced'),
        generateFullPageScreenshotCheckbox: by.id('site_form_full_page_screenshot'),
        inputKeywordAutoLabeling: by.id('site_form_auto_label_0_auto_label_text'),
        inputLabelAutoLabeling: by.id('site_form_auto_label_0_auto_label_name'),
        selectOperatorAutoLabeling: by.id('site_form_auto_label_0_auto_label_operator')
    },
    navigateToButtonCreationPage: function () {
        driver.findElement(page.usabillaSetup.elements.linkToCreateNewButton).click();
    },

    createNewButton: function () {
        var nameButton = shared["test-data"].nameButton;
        driver.findElement(page.usabillaSetup.elements.nameButtonInput).sendKeys(nameButton);
    },

    generateFullPageScreenshot: function () {
        driver.sleep(1000);
        driver.findElement(page.usabillaSetup.elements.advancedSettingsLink).click();
        driver.findElement(page.usabillaSetup.elements.generateFullPageScreenshotCheckbox).click();
    },

    setUpAutoLabeling: function () {
        var keywordAutoLabeling = shared["test-data"].keywordAutoLabeling;
        var labelAutoLabeling = shared["test-data"].labelAutoLabeling;
        var operatorAutoLabeling = shared["test-data"].operatorAutoLabeling;
        
        driver.sleep(1000);
        driver.findElement(page.usabillaSetup.elements.inputKeywordAutoLabeling).sendKeys(keywordAutoLabeling);
        driver.findElement(page.usabillaSetup.elements.inputLabelAutoLabeling).sendKeys(labelAutoLabeling);
        driver.findElement(page.usabillaSetup.elements.selectOperatorAutoLabeling).sendKeys(operatorAutoLabeling);
    },

    saveButton: function () {
        driver.sleep(1000);
        driver.findElement(page.usabillaSetup.elements.submitNewButton).click();
    }
};