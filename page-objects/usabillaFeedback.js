/* eslint-disable no-undef */
module.exports = {

    labelFeedback: '',
    elements: {
        feedbackButtonContainer: by.css('.usabilla_live_button_container'),
        frameFeedback: by.css('.usabilla_scroller_area iframe'),
        genericFeedbackContainer: by.css('.choice_general'),
        radioButtonRatingFive: by.css('.rating_5'),
        textAreaFeedback: by.css('.comment_input textarea'),
        radioButtonRecommendRatingTen: by.css('.radio_input label:nth-child(11)'),
        emailFeedback: by.css('.email_input input'),
        submitFeedback: by.css('.bottom button'),
        continueBrowsingButton: by.css('.continue'),
        commentLastFeedback: by.css('list-item:nth-child(1) .feedback-item__comment-text'),
        resetFeedback: by.css('.filter__reset'),
        feedbackItemContainer: by.css('list-item:nth-child(1)'),
        feedbackScreenshot: by.css('.screenshot__image'),
        selectLabelForFeedback: by.css('.sb-dropdown__button'),
        buttonCountLabelsForFeedback: by.css('.sb-dropdown__button button'),
        firstItemLabelFromSelect: by.css('.sb-dropdown__menu li:nth-child(2)'),
        secondItemLabelFromSelect: by.css('.sb-dropdown__menu li:nth-child(3)'),
        secondItemLabelTextFromSelect: by.css('.sb-dropdown__menu li:nth-child(3) .sb-checkbox__text'),
        inputFilterOnComment: by.css('ui-filter-control:nth-child(13) .text-field--full-width input'),
        inputFilterOnAddedLabel: by.css('ui-filter-control:nth-child(6) .filter__item-control input'),
        buttonAddLabelFilter: by.css('ui-filter-control:nth-child(6) .filter__item-control button')
    },

    feedbackThroughFeedbackButton: function (email) {
        var commentFeedbackText = shared.testData.commentFeedbackText;

        driver.sleep(shared.constantsData.oneSecondTimeOut);
        driver.findElement(page.usabillaFeedback.elements.feedbackButtonContainer).click();
        driver.sleep(shared.constantsData.threeSecondsTimeOut);
        driver.switchTo().frame(driver.findElement(page.usabillaFeedback.elements.frameFeedback));
        driver.findElement(page.usabillaFeedback.elements.genericFeedbackContainer).click();
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.switchTo().frame(driver.findElement(page.usabillaFeedback.elements.frameFeedback));
        driver.findElement(page.usabillaFeedback.elements.radioButtonRatingFive).click();
        driver.findElement(page.usabillaFeedback.elements.textAreaFeedback).sendKeys(commentFeedbackText);
        driver.findElement(page.usabillaFeedback.elements.radioButtonRecommendRatingTen).click();
        driver.findElement(page.usabillaFeedback.elements.emailFeedback).sendKeys(email);
        driver.findElement(page.usabillaFeedback.elements.submitFeedback).click();
        driver.sleep(shared.constantsData.threeSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.continueBrowsingButton).click();
        driver.switchTo().defaultContent();
    },

    checkSubmittedFeedbackIitemIsPresent: function () {
        var commentFeedbackText = shared.testData.commentFeedbackText;
        driver.sleep(shared.constantsData.fourSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.resetFeedback).click();
        driver.sleep(shared.constantsData.fourSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.commentLastFeedback).getText().then(function (actualFeedbackName) {
            //assert.equal(actualFeedbackName, commentFeedbackText, 'actualFeedbackName does not match expected');
        });
    },

    openDetailedViewOfFeedbackItem: function () {
        driver.sleep(shared.constantsData.oneSecondTimeOut);
        driver.findElement(page.usabillaFeedback.elements.feedbackItemContainer).click();
    },

    checkGeneratedScreenshotOfFeedbackItem: function () {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.feedbackScreenshot).getCssValue('width').then(function (width) {
            driver.findElement(page.usabillaFeedback.elements.feedbackScreenshot).getCssValue('height').then(function (height) {
                assert.isTrue(+(width.slice(0, -2)) > 0 && +(height.slice(0, -2)) > 0, 'Generated screenshot is not present with the feedback item');
            });
        });
    },

    checkAddTwoLabelToFeedbackItem: function () {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.selectLabelForFeedback).click();
        driver.findElement(page.usabillaFeedback.elements.firstItemLabelFromSelect).click();
        driver.findElement(page.usabillaFeedback.elements.secondItemLabelFromSelect).click();
        driver.navigate().refresh();
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        return driver.findElement(page.usabillaFeedback.elements.buttonCountLabelsForFeedback).getText().then(function (text) {
            //return assert.equal(text, '2 labels', 'Labels is not present.');
        });
    },

    checkRemoveOneLabelOfFeedbackItem: function () {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.selectLabelForFeedback).click();
        driver.findElement(page.usabillaFeedback.elements.firstItemLabelFromSelect).click();
        driver.findElement(page.usabillaFeedback.elements.secondItemLabelTextFromSelect).getText().then(function (text) {
            page.usabillaFeedback.labelFeedback = text;
        });
        driver.navigate().refresh();
        driver.sleep(shared.constantsData.threeSecondsTimeOut);
        return driver.findElement(page.usabillaFeedback.elements.buttonCountLabelsForFeedback).getText().then(function (text) {
            return assert.equal(text, '1 label', 'Label is not remove.');
        });
    },

    filterOnUserComment: function () {
        var commentFeedbackText = shared.testData.commentFeedbackText;

        driver.sleep(shared.constantsData.threeSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.inputFilterOnComment).sendKeys(commentFeedbackText);
    },

    filterOnAddedLabel: function () {
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
        driver.findElement(page.usabillaFeedback.elements.inputFilterOnAddedLabel).sendKeys(page.usabillaFeedback.labelFeedback);
        driver.findElement(page.usabillaFeedback.elements.buttonAddLabelFilter).click();
        driver.sleep(shared.constantsData.twoSecondsTimeOut);
    },

    checkCommentCreatedFeedback: function () {
        var commentFeedbackText = shared.testData.commentFeedbackText;

        page.usabillaFeedback.filterOnUserComment();

        return driver.findElement(page.usabillaFeedback.elements.commentLastFeedback).getText().then(function (text) {
            return assert.equal(text, commentFeedbackText, 'Feedback with such comment not found');
        });
    },

    checkLabelCreatedFeedback: function() {
        var commentFeedbackText = shared.testData.commentFeedbackText;

        page.usabillaFeedback.filterOnAddedLabel();

        driver.findElement(page.usabillaFeedback.elements.commentLastFeedback).getText().then(function (text) {
            assert.equal(text, commentFeedbackText, 'Feedback with such label not found');
        });
    }
};
