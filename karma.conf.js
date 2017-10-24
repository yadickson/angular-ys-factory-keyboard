module.exports = function(config) {
  config.set({

    basePath: '',
    // frameworks to use
    frameworks: ['browserify', 'mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    reporters: ['progress', 'mocha', 'junit', 'coverage', 'istanbul'],

    hostname: 'localhost',

    port: 9000,

    colors: true,

    autoWatch: true,

    browsers: ['PhantomJS'],

    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    coverageReporter: {
      dir: 'coverage',
      reporters: [{
          type: 'html',
          subdir: '.'
        }
      ]
    },

    istanbulReporter: {
      dir : 'coverage',
      reporters: [{
          type: 'lcov',
          subdir: '.'
        }
      ]
    },

    junitReporter: {
      outputDir: 'reports',
      outputFile: 'test-results.xml',
      useBrowserName: false
    }

  });
};
