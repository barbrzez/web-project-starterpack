
module.exports.init = function() {
   var gulp = require('gulp');
   
   gulp.task('html', function () {  
      return gulp.src('./src/html/*.html')
         .pipe(gulp.dest('out'));
   });
}

