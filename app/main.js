'use strict';

import angular from 'angular';

import 'angular-ui-router';
import './templates';
import './common';

let requires = [
  'ui.router',
  'templates',
  'app.common',
];

angular.module('app', requires);
