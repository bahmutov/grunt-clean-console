/*
 * grunt-clean-console
 * https://github.com/bahmutov/grunt-clean-console
 *
 * Copyright (c) 2013 Gleb Bahmutov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

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

    complexity: {
      all: {
        src: ['*.js', 'tasks/*.js'],
        options: {
          cyclomatic: 5,
          halstead: 10,
          maintainability: 100
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-complexity');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean-console']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'complexity']);

};
