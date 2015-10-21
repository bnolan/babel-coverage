// Karma configuration
// Generated on Tue Jun 23 2015 17:33:28 GMT-0700 (PDT)

var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({
   coverageReporter: {
      reporters: [
          { type: 'html' },
          { type: 'text-summary' }
      ]
    },

    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'browserify'],
    files: [
      './src/*.js?(x)',
      './src/*.ts?(x)',
      './test/*.js?(x)'
    ],
    exclude: [],
    browserify: {
          debug: true,
          plugin: [
                ['tsify', {
                    module: 'commonjs',
                    target: 'es5',
                    noImplicitAny: true,
                    removeComments: false,
                    sourcemap: true,
                    preserveConstEnums: true
                }]
            ],
          transform: [
            'babelify',
            istanbul()
        ],
        extensions: ['.js', '.jsx', '.ts']
    },
    preprocessors: {
      './src/*.js?(x)': ['browserify'],
      './src/*.ts': ['browserify'],
      './test/*.js?(x)': ['browserify']
    },
    reporters: ['progress', 'coverage'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  })
};

