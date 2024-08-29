@NegativeLoginFeature @Regression
Feature: This will test all the negetive test cases for Login page


@LoginScenario1
Scenario: User Login with Valid Username and Password
Given User is on the codefios login page
When User enters username as "demo@codefios.com"
When User enters password as "abc123"
When User clicks the Signin button
Then User should land on the Dashboard page

@LoginScenario2
Scenario: User Login with Valid Username and Incorrect Password
Given User is on the codefios login page
When User enters username as "demo@codefios.com"
When User enters password as "abc1234"
When User clicks the Signin button
Then User should land on the Dashboard page

@LoginScenario3
Scenario: User Login with Valid InvalidUsername and Password
Given User is on the codefios login page
When User enters username as "demos@codefios.com"
When User enters password as "abc123"
When User clicks the Signin button
Then User should land on the Dashboard page

@LoginScenario4
Scenario: User Login with Valid Username and No Password
Given User is on the codefios login page
When User enters username as "demo@codefios.com"
When User enters password as ""
When User clicks the Signin button
Then User should land on the Dashboard page

@LoginScenario1
Scenario: User Login with Valid Username and Password
Given User is on the codefios login page
When User enters username as ""
When User enters password as ""
When User clicks the Signin button
Then User should land on the Dashboard page