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

	it('should redirect to Qs page and add new group', function(){
		browser.get('https://intranet.geopoll.com/geoPoll/polls/questions/4208908');
  		expect(browser.getTitle()).toEqual('Questions');
  		browser.driver.sleep(5000);
		browser.driver.findElement(by.css('[data-bind="click:addNewQuestionGroup"]')).click().then(function() {
 		expect(browser.getTitle()).toEqual('Questions');
 		browser.driver.sleep(2000);
  		});
	});

});