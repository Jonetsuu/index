const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

function css() {
  return src('src/assets/css/application.scss')
    .pipe(sass())
    .pipe(dest('dist/assets/css'))
}

function js() {
  return src('src/assets/js/application.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('dist/assets/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);