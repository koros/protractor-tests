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

  	it('should promt for password if left blank', function() {
		browser.driver.findElement(by.id('EmailAddress')).sendKeys(settings.fakeAccount.user);
		browser.driver.findElement(by.id('Password')).sendKeys('');
		browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
	        expect(browser.driver.findElement(by.className('field-validation-error')).getText()).toEqual("The Password field is required.");
	    }, 10000);
  	});

  	it('should fail to login when wrong credentials are entered', function() {
		var emailField = browser.driver.findElement(by.id('EmailAddress'));
		emailField.clear().then(function() {
			emailField.sendKeys(settings.fakeAccount.user);
			browser.driver.findElement(by.id('Password')).sendKeys(settings.fakeAccount.password);
			browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
			expect(browser.driver.findElement(by.tagName('li')).getText()).toEqual("Incorrect username or password!");
			}, 10000);
		})
		
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

});