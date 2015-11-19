'use strict';

import config      from '../config';
import gulp        from 'gulp';
import changed     from 'gulp-changed';

import browserSync from 'browser-sync';

gulp.task('fonts', () => {
  return gulp.src([config.fonts.src, config.fonts.glyphicons])
    .pipe(changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({once: true}));
});
