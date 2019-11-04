const postcss = require('postcss');
const util = require('gulp-util')

module.exports = postcss.plugin('postcss-custom', (opts) => {
   return (root, result) => {
      root.walkRules((rule) => {
         util.log("Encountered the following rule in CSS: " + rule.selector);
      });
   }
});
