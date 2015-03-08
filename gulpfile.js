"use strict";

var del = require("del");
var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

var paths = {
  js: ["src/**/*.js"]
};

gulp.task("clean", function(cb) {
  del("dst", cb);
});

gulp.task("compile", ["clean"],function() {
  return gulp.src(paths.js, {base: "./"})
    .pipe(sourcemaps.init())
    .pipe(babel({whitelist: ["es6.arrowFunctions"]}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dst"));
});

gulp.task("default", ["compile"]);
