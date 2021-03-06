let gulp = require('gulp');
let sass = require('gulp-sass');
browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});

function defaultTask(cb) {
    cb();
  }
  
  exports.default = defaultTask