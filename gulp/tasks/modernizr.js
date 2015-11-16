'use strict';

import config           from '../config';
import gulp             from 'gulp';
import gulpif           from 'gulp-if';
import uglify           from 'gulp-uglify';
import streamify        from 'gulp-streamify';
import sourcemaps       from 'gulp-sourcemaps';

import intoStream       from 'into-stream';
import buffer           from 'vinyl-buffer';
import source           from 'vinyl-source-stream';

import modernizr        from 'modernizr';
import modernizrConfig  from '../../modernizr-config.json';

gulp.task('modernizr', () => {
  modernizr.build(modernizrConfig, result => {
    intoStream(result)
      .pipe(source(config.modernizr.fileName))
      .pipe(gulpif(config.modernizr.sourcemaps, buffer()))
      .pipe(gulpif(config.modernizr.sourcemaps, sourcemaps.init()))
      .pipe(gulpif(config.modernizr.uglify, streamify(uglify({
        // jscs:disable requirePaddingNewLinesBeforeLineComments
        mangle: false,
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        compress: {drop_console: true},
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        // jscs:enable requirePaddingNewLinesBeforeLineComments
      }))))
      .pipe(gulpif(config.modernizr.sourcemaps, sourcemaps.write('./')))
      .pipe(gulp.dest(config.modernizr.dest));
  });
});
