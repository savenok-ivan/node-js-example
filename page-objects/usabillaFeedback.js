module.exports = {

    labelFeedback: '',
    
    elements: {
        feedbackButtonContainer: by.className('usabilla_live_button_container'),
        genericFeedbackContainer: by.css('.choice.choice_general'),
        frameSelectFeedback: by.css('body > div.usabilla_scroller_area > iframe'),
        frameFeedback: by.css('body > div.usabilla_scroller_area > div > iframe'),
        radioButtonRatingFive: by.className('rating_5'),
        textAreaFeedback: by.name('feedback'),
        radioButtonRecommendRatingTen: by.css('#usabilla-metadata-container > div > form > span > div.element_control.radio_input > fieldset > div > label:nth-child(11)'),
        emailFeedback: by.name('email'),
        submitFeedback: by.css("#usabilla-metadata-container > div > form > div.bottom > button"),
        continueBrowsingButton: by.className("continue"),
        commentLastFeedback: by.css("list-container > div > list-item:nth-child(1) > div a.feedback-item__comment-text"),
        resetFeedback: by.css(".filter__reset"),
        feedbackItemContainer: by.css("list-container > div > list-item:nth-child(1)"),
        selectLabelForFeedback: by.css(".sb-dropdown__button.sb-form-control__input"),
        firstItemLabelFromSelect: by.css('.sb-dropdown__menu > li:nth-child(2)'),
        secondItemLabelFromSelect: by.css('.sb-dropdown__menu > li:nth-child(3)'),
        secondItemLabelTextFromSelect: by.css('.sb-dropdown__menu > li:nth-child(3) .sb-checkbox__text'),
        inputDateContainer: by.css('body > div:nth-child(3) > ui-main-frame > div > div > div > ui-view > ui-view > div > web-feedback-list > web-feedback-filters > ui-filter > div > div > ng-transclude > ui-filter-control.web-feedback-filters__date > div > div.filter__item-control'),
        selectedFirstDateContainer: by.css('.pika-lendar .pika-table tr:nth-child(2) > td:nth-child(2)'),
        selectedSecondDateContainer: by.css('.pika-lendar .pika-table tr:nth-child(2) > td:nth-child(6)'),
        inputFilterOnComment: by.css('body > div:nth-child(3) > ui-main-frame > div > div > div > ui-view > ui-view > div > web-feedback-list > web-feedback-filters > ui-filter > div > div > ng-transclude > ui-filter-control:nth-child(13) > div > div.filter__item-control > ui-text-field > div > input')

    },

    feedbackThroughFeedbackButton: function () {
        var emailForFeedback = shared["test-data"].emailForFeedback;
        var commentFeedbackText = shared["test-data"].commentFeedbackText;

        driver.sleep(1000);
        driver.findElement(page.usabillaFeedback.elements.feedbackButtonContainer).click();
        driver.sleep(1000);
        driver.switchTo().frame(driver.findElement(page["usabillaFeedback"].elements.frameSelectFeedback));
        driver.findElement(page.usabillaFeedback.elements.genericFeedbackContainer).click();
        driver.sleep(1000);
        driver.switchTo().frame(driver.findElement(page["usabillaFeedback"].elements.frameFeedback));
        driver.findElement(page.usabillaFeedback.elements.radioButtonRatingFive).click();
        driver.findElement(page.usabillaFeedback.elements.textAreaFeedback).sendKeys(commentFeedbackText);
        driver.findElement(page.usabillaFeedback.elements.radioButtonRecommendRatingTen).click();
        driver.findElement(page.usabillaFeedback.elements.emailFeedback).sendKeys(emailForFeedback);
        driver.findElement(page.usabillaFeedback.elements.submitFeedback).click();
        driver.sleep(2000);
        driver.findElement(page.usabillaFeedback.elements.continueBrowsingButton).click();
        driver.switchTo().defaultContent();
    },

    checkSubmittedFeedbackIitemIsPresent: function (expectedFeedbackName) {
        var commentFeedbackText = shared["test-data"].commentFeedbackText;
        driver.sleep(10*1000);
        driver.findElement(page.usabillaFeedback.elements.resetFeedback).click();
        driver.sleep(1000);
        driver.findElement(page.usabillaFeedback.elements.commentLastFeedback).getText().then(function (actualFeedbackName) {
            assert.equal(actualFeedbackName, commentFeedbackText, "actualFeedbackName does not match expected");
        });
    },

    openDetailedViewOfFeedbackItem: function () {
        driver.sleep(1000);
        driver.findElement(page.usabillaFeedback.elements.feedbackItemContainer).click();
    },

    addTwoLabelToFeedbackItem: function () {
        driver.findElement(page.usabillaFeedback.elements.selectLabelForFeedback).click();
        driver.findElement(page.usabillaFeedback.elements.firstItemLabelFromSelect).click();
        driver.findElement(page.usabillaFeedback.elements.secondItemLabelFromSelect).click();
    },

    removeOneLabelOfFeedbackItem: function () {
        driver.sleep(2000);
        driver.findElement(page.usabillaFeedback.elements.selectLabelForFeedback).click();
        driver.findElement(page.usabillaFeedback.elements.firstItemLabelFromSelect).click();
        driver.findElement(page.usabillaFeedback.elements.secondItemLabelTextFromSelect).getText().then(function (text) {
            page.usabillaFeedback.labelFeedback = text;
        });
    },

    enterDateThroughCalendar: function () {
        driver.sleep(2000);
        driver.findElement(page.usabillaFeedback.elements.inputDateContainer).click();
        driver.findElement(page.usabillaFeedback.elements.selectedFirstDateContainer).click();
        driver.findElement(page.usabillaFeedback.elements.selectedSecondDateContainer).click();
    },

    filterOnUserComment: function () {
        var commentFeedbackText = shared["test-data"].commentFeedbackText;

        driver.sleep(3000);
        driver.findElement(page.usabillaFeedback.elements.inputFilterOnComment).sendKeys(commentFeedbackText);
    }
};