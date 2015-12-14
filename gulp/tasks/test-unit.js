'use strict';

import config   from '../config';
import path     from 'path';
import gulp     from 'gulp';
import {Server} from 'karma';

gulp.task('test:unit', ['views:templates'], () => {
  new Server({
    configFile: path.resolve(__dirname, '../..', config.test.karma),
    singleRun: true,
  }).start();
});
