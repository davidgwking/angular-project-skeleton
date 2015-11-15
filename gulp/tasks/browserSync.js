'use strict';

import config      from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browserSync', cb => {
  browserSync.init({
    server: {baseDir: config.buildDir},
    port: config.browserPort,
    ui: {port: config.uiPort},
    ghostMode: {links: false},
  }, cb);
});
