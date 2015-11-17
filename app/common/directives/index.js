'use strict';

import angular from 'angular';
const bulk = require('bulk-require');

const directivesModule = angular.module('app.directives', []);

const directives = bulk(__dirname, ['./**/*.js']);

Object.keys(directives).forEach(key => {
  let item = directives[key];

  directivesModule.directive(item.name, item.fn);
});

export default directivesModule;
