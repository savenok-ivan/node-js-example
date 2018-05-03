@search
Feature: Test automation scenarios of Usabilla

  Background:
    Given Login to the Usabilla ("https://app-staging.usabilla.com") (login: "Dzmitry", password: "l}0S'Yt>]!1})E%4?=-{$Ft\$.~@*3ZJ").

  Scenario Outline: Creation feedback
    When Navigate to the button creation page ("https://app-staging.usabilla.com/member/live/setup").
    Then Create a new button and assign a name.
    And Turn on full-page screenshot generation for the newly created button.
    And Set up Auto labeling for keyword "test keyword contains" with the label "testing contains". Set operator to "CONTAIN".
    And Save the button.
    And Provide feedback through the feedback button and its form which were created (email: "alexey.bazhin.jazzteam@gmail.com").
