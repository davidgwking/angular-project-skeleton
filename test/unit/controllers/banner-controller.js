'use strict';

describe('Controller: BannerController', function() {

  let $controller;
  let greetingMock = {banner: 'Angular Project Skeleton'};

  beforeEach(function() {
    angular.mock.module('app.common');
  });

  beforeEach(function() {
    angular.mock.inject(function(_$controller_) {
      $controller = _$controller_;
    });
  });

  let makeController = () => {
    return $controller('BannerController', {greetingMock});
  };

  it('should instantiate ok', function() {
    expect(makeController).not.toThrow();
  });

  it('should set its content to the value of the greeting service\'s banner text', function() {
    let bannerCtrl = makeController();

    expect(bannerCtrl.contents).toEqual(greetingMock.banner);
  });

});
