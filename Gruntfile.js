/*
 * grunt-clean-console
 * https://github.com/bahmutov/grunt-clean-console
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    complexity: grunt.file.readJSON('complexity.json'),

    'clean-console': {
      noErrors: {
        options: {
          urls: ['test/index.html']
        }
      },
      asyncError: {
        options: {
          urls: ['test/async_error.html'],
          timeout: 10
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  var plugins = module.require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean-console:noErrors']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['deps-ok', 'nice-package', 'jshint', 'test', 'complexity']);

};
