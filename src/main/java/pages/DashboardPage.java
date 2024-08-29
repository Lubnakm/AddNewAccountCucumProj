package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

	WebDriver driver;
	
	public DashboardPage(WebDriver driver) {

		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH,using = "/html/body/div[1]/aside[1]/div/nav/ul[2]/li[3]/a/span") WebElement LIST_ACCOUNT_ELEMENT;
	
	public void click_ListAccount() {
		LIST_ACCOUNT_ELEMENT.click();
	}
}

