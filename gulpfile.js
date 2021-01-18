var postcss = require('gulp-postcss');
const rename = require('gulp-rename');
var gulp = require('gulp');


gulp.task('css', function () {
     return gulp.src('./src/*.css')
         .pipe(postcss())
          .pipe(rename({
              extname: '.csss'
         }))
         .pipe(gulp.dest('./dest'));
});
 

