/*
 * grunt-clean-console
 * https://github.com/bahmutov/grunt-clean-console
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

var check = require('check-types');

module.exports = function (grunt) {

  function hasValue(v) {
    return !!v;
  }

  var title = 'Quickly checks deployed page for JavaScript errors';
  grunt.registerMultiTask('clean-console', title, function () {

    var opts = this.options({
      urls: []
    });

    if (check.string(opts.urls)) {
      opts.urls = [opts.urls];
    }

    var urls = opts.urls.concat(opts.url).filter(hasValue);

    check.verify.array(urls, 'missing url(s) to check');
    var allValid = urls.every(function (url) {
      grunt.verbose.writeln('checking', url);
      return true;
    });
    return allValid;
  });

};
