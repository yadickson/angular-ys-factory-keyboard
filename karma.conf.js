module.exports = function(config) {
  config.set({

    basePath: '',
    // frameworks to use
    frameworks: ['browserify', 'mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/mocha/mocha.js',
      'bower_components/chai/chai.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    reporters: ['progress', 'mocha', 'junit', 'coverage'],

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
        },
        {
          type: 'lcov',
          subdir: '.'
        }
      ]
    },

    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      },
      output: 'autowatch'
    },

    junitReporter: {
      outputDir: 'reports',
      outputFile: 'test-results.xml',
      useBrowserName: false
    }

  });
};
