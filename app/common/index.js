'use strict';

import angular from 'angular';

let requires = [
  'templates',
];

angular.module('app.common', requires);

// import module components
const bulk = require('bulk-require');
bulk(__dirname, ['./**/*.js']);
