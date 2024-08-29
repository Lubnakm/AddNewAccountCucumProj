Feature: Codefios Other Add New Account validation

  Background: 
    Given User is on the codefios login page

  @AddNewAccount
  Scenario Outline: User should be able to loging succefully and add a new account
    When User enters username as "<username_variable>"
    When User enters password as "<password_variable>"
    When User clicks the Signin button
    Then User should land on the Dashboard page
    And User clicks on listAccounts
    Then User should land on the Account List page
    And User clicks on addAccount
    And User enters "<accountName>" in the accountName field in accounts page
    And User enters "<description>" in the description field in accounts page
    And User enters "<initialBalance>" in the initialBalance field in accounts page
    And User enters "<accountNumber>" in the accountNumber field in accounts page
    And User enters "<contactPerson>" in the contactPerson field in accounts page
    And User clicks on Save
    Then User should be able to validate account created successfully

    Examples: 
      | username_variable | password_variable | accountName     | description                 | initialBalance | accountNumber | contactPerson |
      | demo@codefios.com | abc123            | IndianaJonesLKM | Creating an account for LKM |          50000 |        555235 | LubnaK_M          |
