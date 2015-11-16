'use strict';

export default {

  appPort: 9000,
  browserSyncPort: 9001,

  sourceDir: 'app',
  buildDir: 'dist',

  notifications: true,

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'dist/styles',
    comments: true,
    compress: false,
    sourcemaps: false,
    sassIncludePaths: [],
  },

  scripts: {
    src: 'app/scripts/**/*.js',
    dest: 'dist/scripts',
  },

  images: {
    src: 'app/images/**/*',
    dest: 'dist/images',
    imagemin: true,
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
    sourcemaps: false,
    fullPaths: true,
    watch: true,
    uglify: true,
  },

  gzip: {
    src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'dist/',
    options: {},
  },

};
