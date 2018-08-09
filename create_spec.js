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
  	it('should load landing page then redirect to login page', function() {
  		browser.get('https://geopoll.com');	
  		expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
  		browser.driver.sleep(2000);
  		browser.driver.findElement(by.className('menu-item menu-item-type-custom menu-item-object-custom has-mega-menu')).click().then(function() {
			expect(browser.driver.getCurrentUrl()).toMatch('https://research.geopoll.com/Account/Login');
			}, 10000);
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

  	it('should check for required fields - survey', function() { 
  		browser.driver.findElement(by.className('collapse navbar-collapse js-navbar-collapse ')).click().then(function() {
  			browser.driver.sleep(2000); 
  			browser.driver.findElement(by.className('nav navbar-nav navbar-right')).click().then(function() {
  				browser.driver.sleep(2000);
  				expect(browser.driver.getCurrentUrl()).toMatch('/Surveys/Survey');
  				browser.driver.findElement(by.className('btn btn-lg btn-default surveyButton')).click().then(function() { 
  					browser.driver.sleep(2000);
  					//browser.driver.findElement(by.className('container gp-info')).click().then(function() { 
  						//browser.driver.sleep(2000);
  						//browser.driver.findElement(by.className('alert alert-danger')).click().then(function() { 
  							//expect(browser.driver.findElement(by.css('alert alert-danger li:nth-child(1)')).getText()).toEqual("Survey name is required.");
  						//})
  					//})
  				}, 10000);
  			}, 10000);
  		}, 10000);
  	});


//Country is required.


});