@LoginFeature @Regression
Feature: This will Validate the Login Page

  @LoginScenario1
  Scenario Outline: User Login with different set of test data
    Given User is on the codefios login page
    When User enters username as "<username_variable>"
    When User enters password as "<password_variable>"
    When User clicks the Signin button
    Then User should land on the Dashboard page

    Examples: 
      | username_variable | password_variable |
      | demo@codefios.com | abc123            |
