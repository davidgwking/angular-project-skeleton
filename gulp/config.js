'use strict';

export default {

  browserPort: 9000,
  uiPort: 9001,

  sourceDir: 'app',
  buildDir: 'dist',

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'dist/styles',
    prodSourcemap: false,
    sassIncludePaths: [],
  },

  scripts: {
    src: 'app/scripts/**/*.js',
    dest: 'dist/scripts',
  },

  images: {
    src: 'app/images/**/*',
    dest: 'dist/images',
  },

  fonts: {
    src: 'app/fonts/**/*',
    dest: 'dist/fonts',
  },

  views: {
    index: 'app/index.html',
    src: 'app/views/**/*.html',
    dest: 'app/scripts',
    watch: ['app/index.html', 'app/views/**/*.html'],
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false,
  },

  gzip: {
    src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'dist/',
    options: {},
  },

};
