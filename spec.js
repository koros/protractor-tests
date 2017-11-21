// at the top of the test spec:
var fs = require('fs');
var secrets = require('./secrets');

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
		browser.driver.findElement(by.id('EmailAddress')).sendKeys(secrets.login.user);
		browser.driver.findElement(by.id('Password')).sendKeys(secrets.login.password);
		browser.driver.findElement(by.className('ui-button-large')).click().then(function() {
			browser.driver.sleep(2000);
	        expect(browser.driver.getCurrentUrl()).toMatch('/GeoPoll/Polls');
	    }, 10000);
  	});

});