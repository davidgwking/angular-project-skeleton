'use strict';

import config      from '../config';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browserSync', cb => {
  browserSync.init({
    server: {baseDir: config.buildDir},
    port: config.appPort,
    ui: {port: config.browserSyncPort},
    ghostMode: {links: false},
  }, cb);
});
