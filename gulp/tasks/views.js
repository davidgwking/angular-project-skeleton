'use strict';

import config        from '../config';
import gulp          from 'gulp';
import browserSync   from 'browser-sync';
import templateCache from 'gulp-angular-templatecache';

gulp.task('views:index', () => {
  return gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream({once: true}));
});

gulp.task('views:templates', () => {
  // use angular's $templateCache
  return gulp.src(config.views.src)
    .pipe(templateCache({standalone: true}))
    .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({once: true}));
});

gulp.task('views', ['views:index', 'views:templates'], (cb) => cb());
