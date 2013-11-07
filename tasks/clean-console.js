/*
 * grunt-clean-console
 * https://github.com/bahmutov/grunt-clean-console
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var check = require('check-types');
var cleanConsoleCheck = require('clean-console');
var qx = require('qx');

module.exports = function (grunt) {

  function hasValue(v) {
    return !!v;
  }

  var title = 'Quickly checks deployed page for JavaScript errors';
  grunt.registerMultiTask('clean-console', title, function () {

    var opts = this.options({
      urls: [],
      timeout: 5000
    });

    if (check.string(opts.urls)) {
      opts.urls = [opts.urls];
    }

    var urls = opts.urls.concat(opts.url).filter(hasValue);
    check.verify.array(urls, 'missing url(s) to check');

    check.verify.positiveNumber(opts.timeout, 'invalid timeout ' + opts.timeout);

    var urlChecks = urls.map(function (url) {
      return cleanConsoleCheck.bind(null, {
        url: url,
        timeout: opts.timeout
      });
    });

    var done = this.async();

    qx.some(urlChecks).then(function (someCheckFailed) {
      if (someCheckFailed) {
        grunt.log.error('one of the urls failed clean-console check');
      }
      done(!someCheckFailed);
    });
  });

};
