const gulp = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task("spec", function() {
  return gulp
    .src("spec/index.html")
    .pipe(mochaPhantomJS());
});

var jshint = require('gulp-jshint');
gulp.task("lint", function() {
  return gulp
    .src("./lib/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});
