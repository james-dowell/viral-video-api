'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'app',
  test: 'test'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean']);
