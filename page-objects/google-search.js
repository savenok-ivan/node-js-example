module.exports = {

    url: 'https://app-staging.usabilla.com',

    elements: {
        login: by.name('_username'),
        password: by.name('_password'),
        submit: by.css('.bttn'),
        linkToCreateNewButton: by.css('.add_new.tooltips'),
        nameButtonInput: by.name('site_form[name]'),
        submitNewButton: by.css('#button_setup > button.link_button.gradient.rounded_button.green_button'),
        advancedSettingsLink: by.className('advanced'),
        generateFullPageScreenshotCheckbox: by.id('site_form_full_page_screenshot'),
        inputKeywordAutoLabeling: by.id('site_form_auto_label_0_auto_label_text'),
        inputLabelAutoLabeling: by.id('site_form_auto_label_0_auto_label_name'),
        selectOperatorAutoLabeling: by.id('site_form_auto_label_0_auto_label_operator'),
        feedbackButtonContainer: by.className('usabilla_live_button_container'),
        genericFeedbackContainer: by.css('.choice.choice_general'),
        frameSelectFeedback: by.css('body > div.usabilla_scroller_area > iframe'),
        frameFeedback: by.css('body > div.usabilla_scroller_area > div > iframe'),
        radioButtonRatingFive: by.className('rating_5'),
        textAreaFeedback: by.name('feedback'),
        radioButtonRecommendRatingTen: by.css('#usabilla-metadata-container > div > form > span > div.element_control.radio_input > fieldset > div > label:nth-child(11)'),
        emailFeedback: by.name('email'),
        submitFeedback: by.css("#usabilla-metadata-container > div > form > div.bottom > button"),
        continueBrowsingButton: by.className("continue")
    },
    
    signIn: function () {
        var loginVal = shared["test-data"].username;
        var passwordVal = shared["test-data"].password;

        driver.findElement(page["google-search"].elements.login).sendKeys(loginVal);
        driver.findElement(page["google-search"].elements.password).sendKeys(passwordVal);

        return driver.findElement(page["google-search"].elements.submit).click();
    },

    navigateToButtonCreationPage: function () {
        return driver.findElement(page["google-search"].elements.linkToCreateNewButton).click();
    },

    createNewButton: function () {
        var nameButton = shared["test-data"].nameButton;

        return driver.findElement(page["google-search"].elements.nameButtonInput).sendKeys(nameButton);
    },

    generateFullPageScreenshot: function () {
        driver.findElement(page["google-search"].elements.advancedSettingsLink).click();

        return driver.findElement(page["google-search"].elements.generateFullPageScreenshotCheckbox).click();
    },

    setUpAutoLabeling: function () {
        var keywordAutoLabeling = shared["test-data"].keywordAutoLabeling;
        var labelAutoLabeling = shared["test-data"].labelAutoLabeling;
        var operatorAutoLabeling = shared["test-data"].operatorAutoLabeling;

        driver.findElement(page["google-search"].elements.inputKeywordAutoLabeling).sendKeys(keywordAutoLabeling);
        driver.findElement(page["google-search"].elements.inputLabelAutoLabeling).sendKeys(labelAutoLabeling);
        driver.findElement(page["google-search"].elements.selectOperatorAutoLabeling).sendKeys(operatorAutoLabeling);
    },

    saveButton: function () {
        return driver.findElement(page["google-search"].elements.submitNewButton).click();
    },

    feedbackThroughFeedbackButton: function () {
        var emailForFeedback = shared["test-data"].emailForFeedback;

        driver.findElement(page["google-search"].elements.feedbackButtonContainer).click();
        driver.sleep(1000);
        driver.switchTo().frame(driver.findElement(page["google-search"].elements.frameSelectFeedback));
        driver.findElement(page["google-search"].elements.genericFeedbackContainer).click();
        driver.sleep(1000);
        driver.switchTo().frame(driver.findElement(page["google-search"].elements.frameFeedback));
        driver.findElement(page["google-search"].elements.radioButtonRatingFive).click();
        driver.findElement(page["google-search"].elements.textAreaFeedback).sendKeys('Test feedback');
        driver.findElement(page["google-search"].elements.radioButtonRecommendRatingTen).click();
        driver.findElement(page["google-search"].elements.emailFeedback).sendKeys(emailForFeedback);
        driver.findElement(page["google-search"].elements.submitFeedback).click();
        driver.sleep(1000);
        driver.findElement(page["google-search"].elements.continueBrowsingButton).click();
        driver.switchTo().defaultContent();
    }
};