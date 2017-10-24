# angular-ys-factory-keyboard

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

Angular factory to check keyboard event press button

### Prepare

```
$ bower init
$ npm init
```

### Install dependencies

```
$ bower install --save jquery@~1.12.0
$ bower install --save angular@~1.3.20
```

### Install develop dependencies

```
$ bower install --save-dev mocha@~3.5.3
$ bower install --save-dev chai@~4.1.2
$ bower install --save-dev angular-mocks@~1.3.20
```

### Install compiler dependencies

```
$ npm install --save-dev babel-cli babel-preset-env
$ npm install --save-dev babel-preset-babili
```

### Install unit test/coverage tools

```
$ npm install --save-dev bower
$ npm install --save-dev karma chai mocha
$ npm install --save-dev karma-chai karma-bro karma-mocha karma-phantomjs-launcher
$ npm install --save-dev karma-coverage karma-istanbul
$ npm install --save-dev karma-mocha-reporter karma-junit-reporter
$ npm install --save-dev coveralls
```

### Prepare application

```
$ bower install && npm install
```

### Compiler application

```
$ npm run compile
```

### Test application

```
$ npm test
```

### Register (previusly make a git tag version)

```
$ bower register angular-ys-factory-keyboard https://github.com/yadickson/angular-ys-factory-keyboard.git
```

[travis-image]: https://img.shields.io/travis/yadickson/angular-ys-factory-keyboard.svg?label=travisci
[travis-url]: https://travis-ci.org/yadickson/angular-ys-factory-keyboard

[coveralls-image]: https://coveralls.io/repos/github/yadickson/angular-ys-factory-keyboard/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/yadickson/angular-ys-factory-keyboard

