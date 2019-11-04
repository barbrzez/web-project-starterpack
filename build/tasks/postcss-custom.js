var postcss = require('postcss');
var util = require('gulp-util')

module.exports = postcss.plugin('postcss-custom', function (opts) {
   return function (root, result) {
      root.walkRules(function (rule) {
         util.log("Encountered the following rule in CSS: " + rule.selector);
      });
   }
});
