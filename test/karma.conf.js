'use strict';

module.exports = config => {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'app/**/*.js': ['browserify'],
    },
    browsers: ['Chrome'],

    autoWatch: true,

    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: [
        'babelify',
        'browserify-ngannotate',
        'bulkify',
      ],
    },

    proxies: {
      '/': 'http://localhost:9876/',
    },

    urlRoot: '/__karma__/',

    files: [
      'app/main.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/unit/**/*.js',
    ],

  });

};
