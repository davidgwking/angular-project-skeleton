'use strict';

describe('Directive: banner', function() {
  let $compile;
  let $rootScope;

  beforeEach(function() {
    angular.mock.module('app.common');
  });

  beforeEach(function() {
    angular.mock.inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  let makeDirective = scope => {
    let element = $compile('<banner></banner>')(scope || $rootScope);
    $rootScope.$digest();
    return element;
  };

  it('should compile and link', function() {
    expect(makeDirective).not.toThrow();
  });
});
