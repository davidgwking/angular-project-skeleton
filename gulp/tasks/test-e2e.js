'use strict';

import config       from '../config';
import gulp         from 'gulp';
import {
  protractor,
  webdriver,

// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
  webdriver_update as webdriverUpdate,

// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
} from 'gulp-protractor';

gulp.task('webdriver:update', webdriverUpdate);

gulp.task('webdriver', webdriver);

gulp.task('test:e2e', ['webdriver:update', 'webdriver', 'browserSync'], () => {
  gulp.src('test/e2e/**/*.js').pipe(protractor({
    configFile: config.test.protractor,
  })).on('error', err => {
    throw err;
  }).on('end', () => {
    process.exit();
  });
});
