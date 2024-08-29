$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resourses/features/CodefiosAddAccount.feature");
formatter.feature({
  "name": "Codefios Other Add New Account validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to loging succefully and add a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewAccount"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"\u003cusername_variable\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password as \"\u003cpassword_variable\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks the Signin button",
  "keyword": "When "
});
formatter.step({
  "name": "User should land on the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on listAccounts",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on the Account List page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on addAccount",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountName\u003e\" in the accountName field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the description field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the initialBalance field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the accountNumber field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the contactPerson field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username_variable",
        "password_variable",
        "accountName",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "IndianaJonesLKM",
        "Creating an account for LKM",
        "50000",
        "555235",
        "LubnaK_M"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginStepDefination.userIsOnTheCodefiosLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to loging succefully and add a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewAccount"
    }
  ]
});
formatter.step({
  "name": "User enters username as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Signin button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_clicks_the_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefination.user_should_land_on_the_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on listAccounts",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_clicks_on_ListAccounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on the Account List page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_should_land_on_the_AccountList_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on addAccount",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_clicks_on_addAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"IndianaJonesLKM\" in the accountName field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_enters_in_the_accountName_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Creating an account for LKM\" in the description field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_enters_in_the_description_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"50000\" in the initialBalance field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_enters_in_the_initialBalance_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"555235\" in the accountNumber field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_enters_in_the_accountNumber_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"LubnaK_M\" in the contactPerson field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_enters_in_the_contactPerson_field_in_accounts_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Save",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_clicks_on_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddAccountStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
});