'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import gutil        from 'gulp-util';
import uglify       from 'gulp-uglify';
import streamify    from 'gulp-streamify';
import sourcemaps   from 'gulp-sourcemaps';

import browserSync  from 'browser-sync';
import handleErrors from '../util/handleErrors';

import buffer       from 'vinyl-buffer';
import source       from 'vinyl-source-stream';

import watchify     from 'watchify';
import babelify     from 'babelify';
import debowerify   from 'debowerify';
import browserify   from 'browserify';
import ngAnnotate   from 'browserify-ngannotate';

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {

  let bundler = browserify({
    entries: [config.sourceDir + '/' + file],
    debug: true, // include source maps
    cache: {},
    packageCache: {},
    fullPaths: config.browserify.fullPaths,
  });

  if (watch && config.browserify.watch) {
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

  transforms.forEach(transform => {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    const stream = bundler.bundle();

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulpif(config.browserify.sourcemaps, buffer()))
      .pipe(gulpif(config.browserify.sourcemaps, sourcemaps.init({loadMaps: true})))
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

gulp.task('browserify:watch', () => {
  return buildScript('main.js', true);
});
