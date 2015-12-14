'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], cb => {
  runSequence(['styles', 'images', 'fonts', 'views', 'modernizr', 'browserify:watch'], 'watch', cb);
});
