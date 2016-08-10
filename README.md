# grunt-clean-console

> Quick JavaScript error sanity check for deployed pages using
[clean-console](https://github.com/bahmutov/clean-console)

[![NPM][grunt-clean-console-icon]][grunt-clean-console-url]

[![Build status][grunt-clean-console-ci-image]][grunt-clean-console-ci-url]
[![dependencies][grunt-clean-console-dependencies-image]][grunt-clean-console-dependencies-url]
[![devdependencies][grunt-clean-console-devdependencies-image]][grunt-clean-console-devdependencies-url]
[![semantic-release][semantic-image] ][semantic-url]

## Install

```shell
npm install grunt-clean-console --save-dev
```

**note** this does not install phantomjs, assumes it is in the path.

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-clean-console');
grunt.initConfig({
  'clean-console': {
    all: {
      options: {
        url: 'dist/index.html',
        timeout: 5 // seconds to wait for any errors
      }
    }
  }
})
```

**url** could point to a local file, a remote url or a list of urls
```js
// test local file
url: 'dist/index.html'

// test several urls, local and remote
url: ['dist/index.html', 'http://localhost:8080/index.html']
```

## Small print

Author: Gleb Bahmutov &copy; 2013

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[grunt-clean-console-icon]: https://nodei.co/npm/grunt-clean-console.svg?downloads=true
[grunt-clean-console-url]: https://npmjs.org/package/grunt-clean-console
[grunt-clean-console-ci-image]: https://travis-ci.org/bahmutov/grunt-clean-console.svg?branch=master
[grunt-clean-console-ci-url]: https://travis-ci.org/bahmutov/grunt-clean-console
[grunt-clean-console-dependencies-image]: https://david-dm.org/bahmutov/grunt-clean-console.svg
[grunt-clean-console-dependencies-url]: https://david-dm.org/bahmutov/grunt-clean-console
[grunt-clean-console-devdependencies-image]: https://david-dm.org/bahmutov/grunt-clean-console/dev-status.svg
[grunt-clean-console-devdependencies-url]: https://david-dm.org/bahmutov/grunt-clean-console#info=devDependencies
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
