'use strict';

import angular from 'angular';

import 'angular-ui-router';
import './templates';
import './controllers';
import './directives';
import './filters';
import './services';

let requires = [
  'ui.router',
  'templates',
  'app.controllers',
  'app.directives',
  'app.filters',
  'app.services',
];

angular.module('app', requires);
