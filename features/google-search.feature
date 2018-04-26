@search
Feature: Searching for vote cards app
  As an internet user
  In order to find out more about the itunes vote cards app
  I want to be able to search for information about the itunes vote cards app
  
  Scenario: Login to the Usabilla environment
    When Login to the Usabilla environment
    Then Navigate to the 'Usabilla for Websites' button creation page
    Then Feedback button: Create a new button and assign a name
    Then Button advanced setting: Turn on full-page screenshot generation for the newly created button
    Then Button advanced setting: Set up Auto labeling for keyword 'test keyword contains' with the label 'testing contains'. Set operator to Contain.
    Then Feedback button: Save the button
    Then Feedback button: Provide feedback through the feedback button and its form which were created in the steps 3 through 6.
    Then Feedback page: Load the page which lists all the feedback items
    Then Feedback page: Confirm that the newly submitted feedback item is present (last comment text "Test feedback")
    Then Feedback item: Open the detailed view of the feedback item
    Then Feedback item: Check if the generated screenshot is present with the feedback item
    Then Feedback item: Manually add two labels to an individual feedback item. Refresh page to see that label is present.
    Then Feedback item: Remove one label from the same feedback item. Refresh page to see that label is removed.
    Then Feedback page: Enter a custom date through the calendar
    Then Feedback page: Filter on the score provided (optional validate score inside individual feedback item)
    Then Feedback page: Filter on the Net Promoter Score
    Then Feedback page: Filter on specific user comment left in test case 7.
    Then Feedback page: Filter on a label added in test case 12

  #Scenario: Google search for course of life app
  #  When I search Google for "CourseOf.Life"
  # Then I should see some results
