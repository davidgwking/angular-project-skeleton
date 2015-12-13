'use strict';

import angular from 'angular';

function BannerController(greeting) {
  this.contents = greeting.banner;
}

angular.module('app.common')
  .controller('BannerController', /*@ngInject*/ BannerController);
