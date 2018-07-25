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

  	it ('should open the register page', function() {
   		browser.driver.findElement(by.className('btn btn-default btn-block')).click().then(function() {
  		browser.driver.sleep(2000);	
  			expect(browser.driver.getCurrentUrl()).toMatch('/Account/Register');
  			browser.driver.sleep(2000);
   		})
  	});

});