const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return src('assets/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('css'));
}

function buildScripts() {
    return src('assets/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('js'));
}

function watchTask() {
    watch(['assets/scss/**/*.scss'], buildStyles);
    watch(['assets/js/**/*.js'], buildScripts);
}

exports.default = series(buildStyles, buildScripts, watchTask);
