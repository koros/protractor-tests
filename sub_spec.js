// at the top of the test spec:
var fs = require('fs');
var settings = require('./settings');
var username = process.env.GP_USER;
var password = process.env.GP_PASSWORD;

beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Login', function() {
  	it('should have a title', function() {
  		browser.get('https://intranet.geopoll.com/Account/Login');
  		expect(browser.getTitle()).toEqual('Login');
  	});

  	it('should login', function() {
		var emailField = browser.driver.findElement(by.id('EmailAddress'));
		var passwordField = browser.driver.findElement(by.id('Password'));
		emailField.clear().then(function() {
			emailField.sendKeys(username);
			passwordField.sendKeys(password);
			browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
				browser.driver.sleep(2000);
				expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls');
			}, 10000);
		})
  	});

  	it ('should redirect to Subform page and click Save button', function() {
  		browser.driver.findElement(by.css('a[href*="/GeoPoll/Polls/Subform"]')).click().then(function() {
 		browser.driver.sleep(2000);		
 			expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls/Subform');
  			}, 10000);
  		browser.driver.findElement(by.css('[data-bind="click:saveClick,visible:!isSaving() && !isSavingQuestions()"]')).click().then(function() {
 		browser.driver.sleep(2000);	
 			expect(browser.driver.findElement(by.css('[data-bind="visible:settingsErrors().length>0"] li:nth-child(1)')).getText()).toEqual("All Settings fields are required");
		  	//expect(browser.driver.findElement(by.css('.alert alert-danger li:nth-child(2)')).getText()).toEqual("Finance Option is required");
		  	//expect(browser.driver.findElement(by.css('.alert alert-danger li:nth-child(3)')).getText()).toEqual("Salesforce Id is required");
 			}, 10000);
  	});

});