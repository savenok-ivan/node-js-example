@search
Feature: Test automation scenarios of Usabilla

  Background:
    Given Login to the Usabilla ("https://app-staging.usabilla.com") (login: "Dzmitry", password: "l}0S'Yt>]!1})E%4?=-{$Ft\$.~@*3ZJ").

  Scenario Outline: Creation feedback
    When Navigate to the button creation page ("https://app-staging.usabilla.com/member/live/setup").
    Then Create a new button and assign a name.
    And Turn on full-page screenshot generation for the newly created button.
    And Set up Auto labeling for keyword "<keyword>" with the label "<label>". Set operator to "<operator>".
    And Save the button.
    And Provide feedback through the feedback button and its form which were created (email: "<email>").

    Examples:
      | keyword               | label            | operator | email                            |
      | test keyword contains | testing contains | CONTAIN  | alexey.bazhin.jazzteam@gmail.com |

  Scenario: Analysis feedback
    When Load the page which lists all the feedback items ("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/").
    Then Confirm that the newly submitted feedback item is present.
    When Open the detailed view of the feedback item.
    Then Check if the generated screenshot is present with the feedback item.
    #When Manually add two labels to feedback item. Refresh page to see that label is present.
    #And Remove one label from the same feedback item. Refresh page to see that label is removed.
    #Then Enter a custom date through the calendar ("https://app-staging.usabilla.com/member/#/websites/buttons/feedback/").
    #And Filter on the score provided.
    #And Filter on the Net Promoter Score.
    #And Filter on specific user comment left in test case 7.
    #And Filter on a label added in test case 12.
