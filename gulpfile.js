var postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat')
var gulp = require('gulp');


gulp.task('css', function () {
     return gulp.src('./src/*.css')
          .pipe(concat('concat.css'))
          .pipe(postcss())
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(rename({
               extname: '.css',
               basename: 'home-purged'
         }))
         .pipe(gulp.dest('./dest'));
});
 

