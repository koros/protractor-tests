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
     browser.get('https://intranet.geopoll.com');
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

  it('should open blast page', function() {
  	browser.driver.findElement(by.css('a[href*="/GeoPoll/MnoBlastLogger"]')).click().then(function() {
 		browser.driver.sleep(2000);		
 			expect(browser.getTitle()).toEqual('MNO Blast Log');
  			}, 15000);
  });

  it('should add new blast', function() { 
  	browser.driver.findElement(by.css('a[href*="javascript: void(0)"]')).click().then(function() {
  		browser.driver.findElement(by.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons')).click().then(function() {
  			browser.driver.findElement(by.className('modal-dialog editor')).click().then(function() {
  				
  			})
  		})
  	}, 100000);
  });

});