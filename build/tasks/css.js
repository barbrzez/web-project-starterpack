
module.exports.init = () => {
   const postcss = require('gulp-postcss');
   const gulp = require('gulp');
   const concat = require('gulp-concat');
   const nested = require('postcss-nested');
   const custom = require('./postcss-custom');
   
   gulp.task('css-compile', () => {
      const processors = [
         custom,
         nested,
      ];
   
      return gulp.src('./src/css/**/*.css')
         .pipe(concat("src.css"))
         .pipe(postcss(processors))
         .pipe(gulp.dest('out'));
   })

   gulp.task('css', gulp.series('lint-css', 'css-compile'));
}

