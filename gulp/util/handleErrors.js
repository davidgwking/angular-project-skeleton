'use strict';

import config from '../config';
import notify from 'gulp-notify';

export default function(error) {
  if (config.notifications) {
    var args = Array.prototype.slice.call(arguments);

    // send error to notification center with gulp-notify
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>',
    }).apply(this, args);
  } else {
    console.log(error);
  }

  if (config.exitOnError) {
    process.exit(1);
  } else {
    // keep gulp from hanging on this task
    this.emit('end');
  }
}
