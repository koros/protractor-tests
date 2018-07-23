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
  		browser.get('https://research.geopoll.com/Account/Login');	
  		expect(browser.getTitle()).toEqual('Survey Research through Mobile - GeoPoll');
  	});

  	it('should promt for password if left blank', function() {
		browser.driver.findElement(by.id('username')).sendKeys(settings.fakeAccount.user);
		browser.driver.findElement(by.id('password')).sendKeys('');
		browser.driver.findElement(by.className('btn btn-primary pull-right')).click().then(function() {
	        expect(browser.driver.findElement(by.className('gp-error  alert alert-danger')).getText()).toEqual("The provided username or password are invalid. Please contact us for assistance and provide as much detail as possible.");
	    }, 10000);
  	});

  	it('should fail to login when wrong credentials are entered', function() {
		var emailField = browser.driver.findElement(by.id('username'));
		emailField.clear().then(function() {
			emailField.sendKeys(settings.fakeAccount.user);
			browser.driver.findElement(by.id('password')).sendKeys(settings.fakeAccount.password);
			browser.driver.findElement(by.className('btn btn-primary pull-right')).click().then(function() {
			expect(browser.driver.findElement(by.className('gp-error  alert alert-danger')).getText()).toEqual("The provided username or password are invalid. Please contact us for assistance and provide as much detail as possible.");
			}, 10000);
		})
		
  	});

  	it('should login', function() {
		var emailField = browser.driver.findElement(by.id('username'));
		var passwordField = browser.driver.findElement(by.id('password'));
		emailField.clear().then(function() {
			emailField.sendKeys(username);
			passwordField.sendKeys(password);
			browser.driver.findElement(by.className('btn btn-primary pull-right')).click().then(function() {
				browser.driver.sleep(2000);
				expect(browser.driver.getCurrentUrl()).toMatch('/SubscriptionServices');
			}, 10000);
		})
  	});

	it('should load my products ', function() {
		browser.driver.sleep(2000);
  		browser.get('https://research.geopoll.com/SubscriptionServices/MyProducts');	
  		expect(browser.getTitle()).toEqual('Survey Research through Mobile - GeoPoll');
  		20000;
  	});

});