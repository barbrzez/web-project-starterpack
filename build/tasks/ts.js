module.exports.init = function () {
   var gulp = require('gulp');
   var ts = require('gulp-typescript');
   var tsProject = ts.createProject('src/tsconfig.json');
   var concat = require('gulp-concat');

   gulp.task('ts', function () {
      return tsProject.src()
         .pipe(tsProject())
         .js.pipe(concat("src.js"))
         .pipe(gulp.dest('out'));
   });
}