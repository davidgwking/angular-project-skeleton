'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import sourcemaps   from 'gulp-sourcemaps';
import sass         from 'gulp-sass';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('styles', () => {
  return gulp.src(config.styles.src)
    .pipe(gulpif(config.styles.sourcemaps, sourcemaps.init()))
    .pipe(sass({
      sourceComments: config.styles.comments,
      outputStyle: config.styles.compress ? 'compressed' : 'nested',
      includePaths: config.styles.sassIncludePaths,
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulpif(config.styles.sourcemaps, sourcemaps.write('./')))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({once: true}));
});
