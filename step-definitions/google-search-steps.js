module.exports = function () {
    
    this.setDefaultTimeout(60*1000);

    this.When("Login to the Usabilla environment", function () {

        return helpers.loadPage("https://app-staging.usabilla.com").then(function() {

            // use a method on the page object which also returns a promise
            return page.googleSearch.signIn();
        });
    });

    this.Then("Navigate to the 'Usabilla for Websites' button creation page", function () {

        return helpers.loadPage("https://app-staging.usabilla.com/member/live/setup").then(function() {
            //return driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);
            // use a method on the page object which also returns a promise
            return page.googleSearch.navigateToButtonCreationPage();
        });
    });

    this.Then("Feedback button: Create a new button and assign a name", function () {
        driver.sleep(1000);
        return page.googleSearch.createNewButton();
    });

    this.Then("Button advanced setting: Turn on full-page screenshot generation for the newly created button", function () {
        driver.sleep(1000);
        return page.googleSearch.generateFullPageScreenshot();
    });

    this.Then("Button advanced setting: Set up Auto labeling for keyword 'test keyword contains' with the label 'testing contains'. Set operator to Contain.", function () {
        driver.sleep(1000);
        return page.googleSearch.setUpAutoLabeling();
    });

    this.Then("Feedback button: Save the button", function () {
        driver.sleep(1000);
        return page.googleSearch.saveButton();
    });

    this.Then("Feedback button: Provide feedback through the feedback button and its form which were created in the steps 3 through 6.", function () {
        driver.sleep(1000);
        return page.googleSearch.feedbackThroughFeedbackButton();
    });

    this.Then("Feedback page: Load the page which lists all the feedback items", function () {
        driver.sleep(2000);
        return helpers.loadPage("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/").then(function() {
            console.log('yes');
        });
    });

    this.When("Test 1", function () {
        driver.sleep(2000);
        console.log(" ------- 1 -------")
    });

    this.Then("Test 22", function () {
        driver.sleep(2000);
        console.log(" ------- 22 -------")
    });

    this.Then("Test 333", function () {
        driver.sleep(2000);
        console.log(" ------- 333 -------")
    });



};
