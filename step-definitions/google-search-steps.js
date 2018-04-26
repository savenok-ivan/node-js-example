module.exports = function () {
    
    this.setDefaultTimeout(60*1000);
    
    this.Before(function () {
        console.log(" ----------- Before")
    })

    this.After(function () {
        console.log(" ----------- After")
    })


    this.When("Login to the Usabilla environment", function () {
        return helpers.loadPage("https://app-staging.usabilla.com").then(function() {
            page.usabillaLogin.signIn();
        });
    });

    this.Then("Navigate to the 'Usabilla for Websites' button creation page", function () {
        return helpers.loadPage("https://app-staging.usabilla.com/member/live/setup").then(function() {
            page.usabillaSetup.navigateToButtonCreationPage();
        });
    });

    this.Then("Feedback button: Create a new button and assign a name", function () {
        page.usabillaSetup.createNewButton();
    });

    this.Then("Button advanced setting: Turn on full-page screenshot generation for the newly created button", function () {
        page.usabillaSetup.generateFullPageScreenshot();
    });

    this.Then("Button advanced setting: Set up Auto labeling for keyword 'test keyword contains' with the label 'testing contains'. Set operator to Contain.", function () {
        page.usabillaSetup.setUpAutoLabeling();
    });

    this.Then("Feedback button: Save the button", function () {
        page.usabillaSetup.saveButton();
    });

    this.Then("Feedback button: Provide feedback through the feedback button and its form which were created in the steps 3 through 6.", function () {
        page.usabillaFeedback.feedbackThroughFeedbackButton();
    });

    this.Then("Feedback page: Load the page which lists all the feedback items", function () {
        helpers.loadPage("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/");
    });

    this.Then(/^Feedback page: Confirm that the newly submitted feedback item is present \(last comment text "([^"]*)"\)$/, function (expectedFeedbackName) {
        page.usabillaFeedback.checkSubmittedFeedbackIitemIsPresent(expectedFeedbackName);
    });

    this.Then("Feedback item: Open the detailed view of the feedback item", function () {
        page.usabillaFeedback.openDetailedViewOfFeedbackItem();
    });


    //--------------------------------------------------------------------------------------------------------------------------------------


    this.Then("Feedback item: Check if the generated screenshot is present with the feedback item", function () {
        driver.sleep(1000);
        driver.findElement(by.css('.screenshot .screenshot__image')).getCssValue('width').then(function (width) {
            driver.findElement(by.css('.screenshot .screenshot__image')).getCssValue('height').then(function (height) {
                return assert.isTrue(+(width.slice(0, -2)) > 0 && +(height.slice(0, -2)) > 0, "Generated screenshot is not present with the feedback item");
            });
        });
    });

    this.Then("Feedback item: Manually add two labels to an individual feedback item. Refresh page to see that label is present.", function () {
        driver.sleep(1000);
        page.usabillaFeedback.addTwoLabelToFeedbackItem();
        driver.navigate().refresh();
        driver.sleep(2000);
        return driver.findElement(by.id('select-tag-dropdown-84')).getText().then(function (text) {
            return assert.equal(text, "2 labels", "Labels is not present.");
        });
    });

    this.Then("Feedback item: Remove one label from the same feedback item. Refresh page to see that label is removed.", function () {
        driver.sleep(1000);
        page.usabillaFeedback.removeOneLabelOfFeedbackItem();
        driver.navigate().refresh();
        driver.sleep(2000);
        return driver.findElement(by.id('select-tag-dropdown-84')).getText().then(function (text) {
            return assert.equal(text, "1 label", "Label is not remove.");
        });
    });

    this.Then("Feedback page: Enter a custom date through the calendar", function () {
        return helpers.loadPage("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/").then(function() {
            //return driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);
            // use a method on the page object which also returns a promise
            //return page.googleSearch.enterDateThroughCalendar();
        });
    });

    this.Then("Feedback page: Filter on the score provided (optional validate score inside individual feedback item)", function () {
        /*return helpers.loadPage("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/").then(function() {
         //return driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);
         // use a method on the page object which also returns a promise
         return page.googleSearch.enterDateThroughCalendar();
         });*/
    });

    this.Then("Feedback page: Filter on the Net Promoter Score", function () {
        /*return helpers.loadPage("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/").then(function() {
         //return driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);
         // use a method on the page object which also returns a promise
         return page.googleSearch.enterDateThroughCalendar();
         });*/
    });

    this.Then("Feedback page: Filter on specific user comment left in test case 7.", function () {
        var commentFeedbackText = shared["test-data"].commentFeedbackText;

        page.usabillaFeedback.filterOnUserComment();

        return driver.findElement(by.css("list-container > div > list-item:nth-child(1) > div a.feedback-item__comment-text")).getText().then(function (text) {
            return assert.equal(text, commentFeedbackText, "Feedback with such comment not found");
        });
    });

    this.Then("Feedback page: Filter on a label added in test case 12", function () {
        console.log("-----------------------------");
        console.log(page.usabillaFeedback.labelFeedback);
        console.log("-----------------------------");
        /*var commentFeedbackText = shared["test-data"].commentFeedbackText;

         page.googleSearch.filterOnUserComment();

         return driver.findElement(by.css("list-container > div > list-item:nth-child(1) > div a.feedback-item__comment-text")).getText().then(function (text) {
         return assert.equal(text, commentFeedbackText, "Feedback with such comment not found");
         });*/
    });
    
};
