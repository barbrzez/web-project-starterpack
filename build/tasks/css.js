
module.exports.init = function() {
   var postcss = require('gulp-postcss');
   var gulp = require('gulp');
   var concat = require('gulp-concat');
   var nested = require('postcss-nested');
   var custom = require('./postcss-custom');
   
   gulp.task('css', function () {
      var processors = [
         nested,
         custom
      ];
   
      return gulp.src('./src/css/**/*.css')
         .pipe(concat("src.css"))
         .pipe(postcss(processors))
         .pipe(gulp.dest('out'));
   });
}

