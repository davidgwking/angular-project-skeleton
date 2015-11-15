'use strict';

import fs from 'fs';

const tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(task => {
  require('./tasks/' + task);
});
