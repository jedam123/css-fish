'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');

gulp.task('sass', function () {
  return gulp.src('dev-css/styles.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('css/'));
});
