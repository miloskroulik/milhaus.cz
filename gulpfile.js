var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({minifyCSS: true, collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});