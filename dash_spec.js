// at the top of the test spec:
var fs = require('fs');

beforeEach(function() {
	browser.ignoreSynchronization = true;
});

afterEach(function() {
  	
});

describe('Live links', function() {
  	it('should load Home', function() {
  	 browser.get('https://geopoll.com');
     browser.driver.sleep(2000);     
  	 expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
  	});

    it('should load About', function() {
          browser.get('https://geopoll.com/about');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Contact', function() {
     browser.get('https://geopoll.com/contact-us');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Resilience', function() {
          browser.get('https://geopoll.com/resilience');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Support', function() {
          browser.get('https://geopoll.com/user-support/');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Out/home', function() {
          browser.get('https://geopoll.com/out-of-home');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Brand', function() {
          browser.get('https://geopoll.com/brand-health-tracking');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Methodology', function() {
          browser.get('https://geopoll.com/about/methodology');
          browser.driver.sleep(2000);
          expect(browser.getTitle()).toEqual('Methodology - GeoPoll');
    });

    it('should load Newsletter', function() {
          browser.get('https://geopoll.com/about/newsletter-sign-up');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Food', function() {
          browser.get('https://geopoll.com/resources/food-security-west-africa');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Drc1', function() {
          browser.get('https://geopoll.com/resources/drc-ituri-province-emergency-assessment');
          browser.driver.sleep(2000);
          //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Q1 2018', function() {
      browser.get('https://geopoll.com/blog/geopoll-quarter-one-2018-radio-tv-audience-ratings-report');
      browser.driver.sleep(2000);
      //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load World cup', function() {
     browser.get('https://geopoll.com/blog/2018-world-cup-insights-africa');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Drc2', function() {
     browser.get('https://geopoll.com/blog/data-drc-ituri-province-conflict');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Market', function() {
     browser.get('https://geopoll.com/market-research');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load App', function() {
     browser.get('https://geopoll.com/geopoll-application');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Custom', function() {
     browser.get('https://geopoll.com/custom-research');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Login');
    });

    it('should load Audience', function() {
     browser.get('https://geopoll.com/audience-measurement');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
    }); 

    it('should load Promoter', function() {
     browser.get('https://geopoll.com/net-promoter-score');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
    });

    it('should load Customer', function() {
     browser.get('https://geopoll.com/customer-satisfaction');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Better, faster data from Africa, Middle East and Asia by GeoPoll');
    });

    it('should load Mob-app', function() {
     browser.get('https://geopoll.com/mobile-application-surveys-tasks');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('Research Services and Mobile Surveys in Emerging Markets');
    });

    it('should load Food2', function() {
     browser.get('https://geopoll.com/food-security-agriculture');
     browser.driver.sleep(2000);
     expect(browser.getTitle()).toEqual('Food Security and Agriculture Research in Developing Countries');
    });

    it('should load Int-development', function() {
     browser.get('https://geopoll.com/international-development');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Health', function() {
     browser.get('https://geopoll.com/health-nutrition');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Ebola', function() {
     browser.get('https://geopoll.com/resources/long-term-economic-impacts-ebola');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Democracy', function() {
     browser.get('https://geopoll.com/democracy-governance');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Kenya', function() {
     browser.get('https://geopoll.com/resources/access-to-finance-for-electricity-in-kenya');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Brand 2015', function() {
     browser.get('https://geopoll.com/resources/top-brands-in-africa-2015');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Sms', function() {
     browser.get('https://geopoll.com/text-message-surveys-sms');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Demand', function() {
     browser.get('https://geopoll.com/on-demand-terms');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Privacy', function() {
     browser.get('https://geopoll.com/privacy-policy');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load SA', function() {
     browser.get('https://geopoll.com/resources/state-of-the-nation-south-africa');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Mob-web', function() {
     browser.get('https://geopoll.com/mobile-web-surveys/');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Surveys', function() {
     browser.get('https://geopoll.com/self-service-surveys');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Terms', function() {
     browser.get('https://geopoll.com/subscription-terms');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Resources', function() {
     browser.get('https://geopoll.com/resources');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Careers', function() {
     browser.get('https://geopoll.com/about/careers');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Blog', function() {
     browser.get('https://geopoll.com/blog');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });

    it('should load Panel', function() {
     browser.get('https://geopoll.com/about/country-coverage-panel');
     browser.driver.sleep(2000);
     //expect(browser.getTitle()).toEqual('');
    });  	

});