'use strict';

export default {

  appPort: 9000,
  browserSyncPort: 9001,

  sourceDir: 'app',
  buildDir: 'dist',

  exitOnError: true,
  notifications: true,

  fonts: {
    src: 'assets/fonts/**/*',
    dest: 'dist/fonts',
  },

  images: {
    src: 'assets/images/**/*',
    dest: 'dist/images',
    imagemin: true,
  },

  styles: {
    src: 'assets/styles/**/*.scss',
    dest: 'dist/styles',
    comments: true,
    compress: true,
    sourcemaps: true,
    sassIncludePaths: [],
  },

  scripts: {
    src: 'app/**/*.js',
    dest: 'dist/scripts',
  },

  views: {
    index: 'app/index.html',
    src: 'app/**/views/**/*.html',
    dest: 'app',
    watch: ['app/index.html', 'app/**/views/**/*.html'],
  },

  browserify: {
    bundleName: 'main.js',
    sourcemaps: true,
    fullPaths: true,
    watch: true,
    uglify: true,
  },

  modernizr: {
    fileName: 'modernizr.js',
    dest: 'dist/scripts/vendor',
    sourcemaps: true,
    uglify: true,
  },

  gzip: {
    src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'dist/',
    options: {},
  },

  gulp: {
    src: 'gulp/**/*.js',
  },

};
