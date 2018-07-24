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

  	it ('should open the recipients page - blank option', function() {
  		browser.driver.findElement(by.className('addLink sep-all-orange radiusTopRight')).click().then(function() {
  			browser.driver.sleep(2000);		
  			browser.driver.findElement(by.className('ui-button ui-widget ui-state-default ui-corner-all')).click().then(function() {
  				browser.driver.sleep(2000);
  				expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls/Create');
  			}, 10000);
  		})
  	});  

	it ('should show error messages for required fields', function() {
		// element(by.css('div[ng-show=notValid]'));
  		browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
  			browser.driver.sleep(2000);	
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Finance Option is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Country field is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(4)')).getText()).toEqual("Language field is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(5)')).getText()).toEqual("Client field is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(6)')).getText()).toEqual("Project Category is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(7)')).getText()).toEqual("Finance field is required!");
  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(8)')).getText()).toEqual("Targeted Completes is required");
  		}, 10000);
  	});

  	it ('should select Default Language: from dropdown', function() {
  		browser.driver.findElement(by.id('languages')).click().then(function() {
  			browser.driver.sleep(1000);
  			browser.driver.findElement(by.css('[value="en"]')).click().then(function() {
  				browser.driver.sleep(2000);
  				browser.driver.findElement(by.css('[data-bind="click:saveAndContinue"]')).click().then(function() {
		  			browser.driver.sleep(2000);	
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(1)')).getText()).toEqual("Poll Name is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(2)')).getText()).toEqual("Finance Option is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(3)')).getText()).toEqual("Country field is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(4)')).getText()).toEqual("Client field is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(5)')).getText()).toEqual("Project Category is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(6)')).getText()).toEqual("Finance field is required!");
		  			expect(browser.driver.findElement(by.css('.validation-summary-errors li:nth-child(7)')).getText()).toEqual("Targeted Completes is required");
		  		}, 10000);
  			}, 10000);
  		}, 10000);
  	});

});