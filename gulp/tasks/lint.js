'use strict';

import config from '../config';
import gulp   from 'gulp';
import jscs   from 'gulp-jscs';
import jshint from 'gulp-jshint';

gulp.task('lint:jshint', () => {
  return gulp.src([config.scripts.src, config.gulp.src, '!app/scripts/templates.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint:jscs', () => {
  return gulp.src([config.scripts.src, config.gulp.src, '!app/scripts/templates.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('lint', ['lint:jshint', 'lint:jscs'], cb => cb());
