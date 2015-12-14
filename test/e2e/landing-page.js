'use strict';

describe('E2E: Landing Page', function() {

  beforeEach(function() {
    browser.get('');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('');
  });

  it('should show the number defined in the controller', function() {
    let element = browser.findElement(by.css('h1'));
    expect(element.getText()).toEqual('Angular Project Skeleton');
  });

});
