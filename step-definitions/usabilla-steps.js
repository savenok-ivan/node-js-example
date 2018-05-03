/* eslint-disable no-trailing-spaces */
module.exports = function () {
    this.setDefaultTimeout(60 * 1000);
    
    this.Before(function () {
        return console.log(' ----------- Before ----------- ');
    });

    this.After(function () {
        console.log(' ----------- After ----------- ');
        driver.quit();
    });

    this.Given(/^Login to the Usabilla \("([^"]*)"\) \(login: "([^"]*)", password: "([^"]*)"\)\.$/, function (url, login, password) {
        helpers.loadPage(url).then(function() {
            console.log(' ----------- Done - Open site ----------- ');
            page.usabillaLogin.signIn(login, password);
            console.log(' ----------- Done - Login to the Usabilla ----------- ');
        });
    });

    //------------------------------------------------------------------------------------------------------------------
    /* Scenario: Creation */
    //------------------------------------------------------------------------------------------------------------------
    this.When(/^Navigate to the button creation page \("([^"]*)"\)\.$/, function (url) {
        helpers.loadPage(url).then(function() {
            page.usabillaSetup.navigateToButtonCreationPage();
            console.log(' ----------- Done - Navigate to the button creation page ----------- ');

        });
    });

    this.When('Create a new button and assign a name.', function () {
        page.usabillaSetup.createNewButton();
        console.log(' ----------- Done - Create a new button and assign a name ----------- ');

    });

    this.Then('Turn on full-page screenshot generation for the newly created button.', function () {
        page.usabillaSetup.generateFullPageScreenshot();
        console.log(' ----------- Done - Turn on full-page screenshot generation for the newly created button. ----------- ');

    });

    this.Then(/^Set up Auto labeling for keyword "([^"]*)" with the label "([^"]*)"\. Set operator to "([^"]*)"\.$/, function (keyword, label, operator) {
        page.usabillaSetup.setUpAutoLabeling(keyword, label, operator);
        console.log(' ----------- Done - Set up Auto labeling for keyword ----------- ');

    });

    this.Then('Save the button.', function () {
        page.usabillaSetup.saveButton();
        console.log(' ----------- Done Save the button. - ----------- ');

    });

    this.Then(/^Provide feedback through the feedback button and its form which were created \(email: "([^"]*)"\)\.$/, function (email) {
        page.usabillaFeedback.feedbackThroughFeedbackButton(email);
        console.log(' ----------- Done -  Provide feedback through the feedback button and its form which were created----------- ');

    });

    //------------------------------------------------------------------------------------------------------------------
    /* Scenario: Analysis */
    //------------------------------------------------------------------------------------------------------------------
    this.When(/^Load the page which lists all the feedback items \("([^"]*)"\)\.$/, function (url) {
        return helpers.loadPage(url);
    });

    this.Then('Confirm that the newly submitted feedback item is present.', function () {
        return page.usabillaFeedback.checkSubmittedFeedbackIitemIsPresent();
    });

    this.When('Open the detailed view of the feedback item.', function () {
        return page.usabillaFeedback.openDetailedViewOfFeedbackItem();
    });

    this.Then('Check if the generated screenshot is present with the feedback item.', function () {
        return page.usabillaFeedback.checkGeneratedScreenshotOfFeedbackItem();
    });

    this.When('Manually add two labels to feedback item. Refresh page to see that label is present.', function () {
        return page.usabillaFeedback.checkAddTwoLabelToFeedbackItem();
    });

    this.When('Remove one label from the same feedback item. Refresh page to see that label is removed.', function () {
        return page.usabillaFeedback.checkRemoveOneLabelOfFeedbackItem();
    });

    this.Then(/^Enter a custom date through the calendar \("([^"]*)"\)\.$/, function (url) {
        return helpers.loadPage(url);
    });

    this.Then('Filter on the score provided.', function () {});

    this.Then('Filter on the Net Promoter Score.', function () {});

    this.Then('Filter on specific user comment left in test case 7.', function () {
        return page.usabillaFeedback.checkCommentCreatedFeedback();
    });

    this.Then('Filter on a label added in test case 12.', function () {
        return page.usabillaFeedback.checkLabelCreatedFeedback();
    });
};
