'use strict';

import angular from 'angular';

function factoryFn() {
  return {
    banner: 'Angular Project Skeleton',
  };
}

angular.module('app.common')
  .factory('greeting', factoryFn);
