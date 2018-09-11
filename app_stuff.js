// at the top of the test spec:
var fs = require('fs');

beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Live links', function() {
    it('should load Home', function() {
     browser.get('localhost:5000');
     browser.driver.sleep(10000);     
     expect(browser.getTitle()).toEqual('GeoPoll');
    })
});