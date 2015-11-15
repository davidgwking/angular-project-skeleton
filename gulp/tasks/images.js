'use strict';

import config      from '../config';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import changed     from 'gulp-changed';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('images', () => {
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(gulpif(global.isProd, imagemin()))
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({once: true}));
});
