// apping
var fs = require('fs');
var settings = require('./settings');
var username = process.env.GP_USER;
var password = process.env.GP_PASSWORD;


beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Live links', function() {
    it('should load Home', function() {
     browser.get('localhost:5000');
     browser.driver.sleep(2000);     
     expect(browser.getTitle()).toEqual('GeoPoll');
    });

    it('should register', function() { 
    	browser.driver.findElement(by.className('mobilenumber form-control')).sendKeys(settings.fakeNumber.appNo);
    	browser.driver.sleep(2000); 
    	browser.driver.findElement(by.className('signup btn btn-default btn-block btn-lg')).click().then(function() {
    });
});