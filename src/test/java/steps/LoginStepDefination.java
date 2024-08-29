package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase{


	LoginPage loginpage;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginpage = PageFactory.initElements(driver,LoginPage.class);
	}
	
	@Given ("User is on the codefios login page")
	public void userIsOnTheCodefiosLoginPage() {
		driver.get("https://codefios.com/ebilling/");
	}
	
	@When("User enters username as {string}")
	public void user_enters_username_as(String username) {
	  loginpage.insertUsername(username);
	}

	@When("User enters password as {string}")
	public void user_enters_password_as(String password) {
	 loginpage.insertValidPassword(password);
	}

	@When("User clicks the Signin button")
	public void user_clicks_the_Signin_button() {
	   loginpage.clickSignin();
	}

	@Then("User should land on the Dashboard page")
	public void user_should_land_on_the_Dashboard_page() {
	  String expectedText = "Codefios";
	  String actualText = loginpage.getPageTile();
	  Assert.assertEquals("Page Title Doesn't match!!", expectedText, actualText);
	}

}
