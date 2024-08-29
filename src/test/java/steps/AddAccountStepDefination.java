package steps;


import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import junit.framework.Assert;
import pages.AddAccountPage;
import pages.DashboardPage;
import pages.TestBase;

public class AddAccountStepDefination extends TestBase {


	DashboardPage dbpage;
	AddAccountPage addaccountpage;

	@And("User clicks on listAccounts")
	public void user_clicks_on_ListAccounts() {
		dbpage = PageFactory.initElements(driver, DashboardPage.class);
		dbpage.click_ListAccount();
	}

	@Then("User should land on the Account List page")
	public void user_should_land_on_the_AccountList_page() {
		addaccountpage = PageFactory.initElements(driver, AddAccountPage.class);
		String expectedText = "Manage Account";
		String actualText = addaccountpage.getAccountPageTile();
		Assert.assertEquals("Page Title Doesn't match!!", expectedText, actualText);
	}

	@And("User clicks on addAccount")
	public void user_clicks_on_addAccount() {
		addaccountpage.click_AddAccount_button();
	}

	@Then("User enters {string} in the accountName field in accounts page")
	public void user_enters_in_the_accountName_field_in_accounts_page(String accountname) {
		addaccountpage.insertAccountName(accountname);
	}

	@Then("User enters {string} in the description field in accounts page")
	public void user_enters_in_the_description_field_in_accounts_page(String description) {
		addaccountpage.insertDescription(description);
	}

	@Then("User enters {string} in the initialBalance field in accounts page")
	public void user_enters_in_the_initialBalance_field_in_accounts_page(String balance) throws InterruptedException {
		addaccountpage.insertInitialBalance(balance);
	}

	@Then("User enters {string} in the accountNumber field in accounts page")
	public void user_enters_in_the_accountNumber_field_in_accounts_page(String accNumber) {
		addaccountpage.insertAccountNumber(accNumber);
	}

	@Then("User enters {string} in the contactPerson field in accounts page")
	public void user_enters_in_the_contactPerson_field_in_accounts_page(String cPerson) {
		addaccountpage.insertContactPerson(cPerson);
	}

	@Then("User clicks on Save")
	public void user_clicks_on_Save() {
		addaccountpage.clickOnSaveButton();
	}

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {

	}

}
