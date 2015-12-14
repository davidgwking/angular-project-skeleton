'use strict';

import angular from 'angular';

angular.module('app.common')
  .directive('banner', () => {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'common/views/banner.html',
      controller: 'BannerController',
      controllerAs: 'bannerCtrl',
    };
  });
