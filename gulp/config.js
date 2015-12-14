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
    glyphicons: 'node_modules/bootstrap-sass/assets/fonts/**/*',
  },

  images: {
    src: 'assets/images/**/*',
    dest: 'dist/images',
    imagemin: false,
  },

  styles: {
    src: 'assets/styles/**/*.scss',
    dest: 'dist/styles',
    comments: true,
    compress: false,
    sourcemaps: false,
    sassIncludePaths: [
      'assets/styles',
      'node_modules/bootstrap-sass/assets/stylesheets',
    ],
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
    sourcemaps: false,
    fullPaths: true,
    watch: true,
    uglify: false,
  },

  modernizr: {
    fileName: 'modernizr.js',
    dest: 'dist/scripts/vendor',
    sourcemaps: false,
    uglify: false,
  },

  gzip: {
    src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'dist/',
    options: {},
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js',
  },

  gulp: {
    src: 'gulp/**/*.js',
  },

};
