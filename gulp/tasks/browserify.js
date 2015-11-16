'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import gutil        from 'gulp-util';
import source       from 'vinyl-source-stream';
import sourcemaps   from 'gulp-sourcemaps';
import buffer       from 'vinyl-buffer';
import streamify    from 'gulp-streamify';
import watchify     from 'watchify';
import browserify   from 'browserify';
import babelify     from 'babelify';
import uglify       from 'gulp-uglify';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import debowerify   from 'debowerify';
import ngAnnotate   from 'browserify-ngannotate';

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

  var bundler = browserify({
    entries: [config.sourceDir + '/scripts/' + file],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: config.browserify.fullPaths,
  });

  if (config.browserify.watch) {
    bundler = watchify(bundler);

    bundler.on('update', () => {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  const transforms = [
    {name: babelify, options: {}},
    {name: debowerify, options: {}},
    {name: ngAnnotate, options: {}},
    {name: 'brfs', options: {}},
    {name: 'bulkify', options: {}},
  ];

  transforms.forEach((transform) => {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    const stream = bundler.bundle();

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulpif(config.browserify.sourcemaps, buffer()))
      .pipe(gulpif(config.browserify.sourcemaps, sourcemaps.init()))
      .pipe(gulpif(config.browserify.uglify, streamify(uglify({
        // jscs:disable requirePaddingNewLinesBeforeLineComments
        mangle: false,
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        compress: {drop_console: true},
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        // jscs:enable requirePaddingNewLinesBeforeLineComments
      }))))
      .pipe(gulpif(config.browserify.sourcemaps, sourcemaps.write('./')))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream({once: true}));
  }

  return rebundle();
}

gulp.task('browserify', () => {
  return buildScript('main.js');
});
