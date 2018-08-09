// at the top of the test spec:
var fs = require('fs');

beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Live links', function() {
  	it('should load Int-prod', function() {
  	 browser.get('https://intranet.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Login');
  	});

  	it('should load Int-Int', function() {
  	 browser.get('https://intranet-int.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Login');
  	});

  	it('should load Int-Staging', function() {
  	 browser.get('https://intranet-dev.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Login');
  	});

  	it('should load Int-Dev', function() {
  	 browser.get('https://intranet-staging.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Login');
  	});

  	it('should load Client-prod', function() {
  	 browser.get('https://research.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
  	}); 

  	it('should load Client-prod redirect', function() {
  	 browser.get('https://geopoll.com');
  	 expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
  	});

  	it('should load Client-qa', function() {
  	 browser.get('https://client-qa.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Better, faster data from Africa, Middle East and Asia by GeoPoll');
  	});

  	it('should load Client-staging', function() {
  	 browser.get('https://client-stage.geopoll.com');
  	 expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
  	});

  	it('should load Mobile Web', function() {
  	 browser.get('https://m.geopoll.com');
  	 expect(browser.getTitle()).toEqual('');
  	});

  	it('should load Mobile Web-int', function() {
  	 browser.get('https://mock-int.geopoll.com');
  	 expect(browser.getTitle()).toEqual('');
  	});
  	
  	it('should load Mobile Web-m0', function() {
  	 browser.get('https://m0.geopoll.com');
  	 expect(browser.getTitle()).toEqual('');
  	});
  	
  	it('should load Mobile Web-m1', function() {
  	 browser.get('https://m1.geopoll.com');
  	 expect(browser.getTitle()).toEqual('');
  	});

  	it('should load Mobile Web-Dev', function() {
  	 browser.get('https://m-dev.geopoll.com');
  	 expect(browser.getTitle()).toEqual('');
  	});

});