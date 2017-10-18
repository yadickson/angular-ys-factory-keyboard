# angular-ys-factory-keyboard

[![TravisCI Status][travis-image]][travis-url]
[![CircleCI Status][circle-image]][circle-url]
[![AppVeyor Status][appveyor-image]][appveyor-url]
[![Test Coverage][codeclimate-image]][codeclimate-url]

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

### Install unit test/coverage tools

```
$ npm install --save-dev bower
$ npm install --save-dev karma chai mocha
$ npm install --save-dev karma-chai karma-bro karma-mocha karma-phantomjs-launcher
$ npm install --save-dev karma-coverage
$ npm install --save-dev karma-mocha-reporter karma-junit-reporter
$ npm install --save-dev codeclimate-test-reporter
```

### Prepare application

```
$ bower install && npm install
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

[circle-image]: https://circleci.com/gh/yadickson/angular-ys-factory-keyboard.svg?style=shield&circle-token=:circle-token
[circle-url]: https://circleci.com/gh/yadickson/angular-ys-factory-keyboard

[appveyor-image]: https://img.shields.io/appveyor/ci/yadickson/angular-ys-factory-keyboard.svg?label=appveyor
[appveyor-url]: https://ci.appveyor.com/project/yadickson/angular-ys-factory-keyboard

[codeclimate-image]: https://codeclimate.com/github/yadickson/angular-ys-factory-keyboard/badges/coverage.svg
[codeclimate-url]: https://codeclimate.com/github/yadickson/angular-ys-factory-keyboard

