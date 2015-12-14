'use strict';

import config from '../config';
import notify from 'gulp-notify';

export default err => {
  if (config.notifications) {
    let args = Array.prototype.slice.call(arguments);

    // send error to notification center with gulp-notify
    notify.onError({
      title: 'Compile Error',
      message: '<%= err.message %>',
    }).apply(this, args);
  } else {
    console.log(err);
  }

  if (config.exitOnError) {
    process.exit(1);
  } else {
    // keep gulp from hanging on this task
    this.emit('end');
  }
};
