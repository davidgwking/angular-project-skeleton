'use strict';

import config from '../config';
import gulp   from 'gulp';

gulp.task('watch', ['browserSync'], () => {
  // scripts are handled by watchify in the browserify task
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.watch, ['views']);
});
