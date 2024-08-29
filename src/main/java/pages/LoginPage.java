package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	public WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"user_name\"]")
	WebElement USER_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@id='login_submit']")
	WebElement SIGNIN_ELEMENT;

	public void insertUsername(String username) {
		USER_NAME_ELEMENT.sendKeys(username);
	}

	public void insertValidPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
	}

	public void clickSignin() {
		SIGNIN_ELEMENT.click();
	}

	public String getPageTile() {
		return driver.getTitle();
	}
}
