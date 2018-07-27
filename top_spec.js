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

describe('TopU', function() {
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

	it('should validate required fields on the GpTU page', function(){
		browser.driver.findElement(by.css('a[href*="/GeoPoll/Topup"]')).click().then(function() {
 		browser.driver.sleep(2000);		
 			expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Topup');
  			}, 10000);
		browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
			expect(browser.driver.findElement(by.className('validation-summary-errors')).getText()).toEqual("Error! Invalid input.");
          	expect(browser.driver.findElement(by.className('field-validation-error')).getText()).toEqual("The Mobile Numbers('comma separated') field is required.");
		}, 10000);
	});

	it('should select default Bill P', function() {
		browser.driver.findElement(by.css('[value="7"]')).click().then(function() {
			browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
				expect(browser.driver.findElement(by.className('validation-summary-errors')).getText()).toEqual("Error! Invalid input.");
	          	expect(browser.driver.findElement(by.className('field-validation-error')).getText()).toEqual("The Mobile Numbers('comma separated') field is required.");
			})
		});
	});	

	it('should select default Top C', function() {
		browser.driver.findElement(by.css('[value="Kenyan_Shilling_KES"]')).click().then(function() {
			browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
				expect(browser.driver.findElement(by.className('validation-summary-errors')).getText()).toEqual("Error! Invalid input.");
	          	expect(browser.driver.findElement(by.className('field-validation-error')).getText()).toEqual("The Mobile Numbers('comma separated') field is required.");
			})
		});
	});	


	it('should validate number', function(){
		var mobileNumberfield = browser.driver.findElement(by.id('MobileNumbers'));
		mobileNumberfield.clear().then(function() {
			mobileNumberfield.sendKeys(settings.fakeNumber.number);
				browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
					browser.driver.sleep(2000);
					expect(browser.driver.findElement(by.className('validation-summary-errors')).getText()).toEqual("Error! Invalid input.");
					expect(browser.driver.findElement(by.className('field-validation-error')).getText()).toEqual("Could not locate users for mobile numbers: " + settings.fakeNumber.number);
				}, 10000);
			})
	});

});