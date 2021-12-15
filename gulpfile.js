const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = 'assets/js/carousel.js';

function imgTask() {
    return src('assets/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function jsTask() {
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('carousel.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));
}

exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.default = jsTask;