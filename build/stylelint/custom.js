const stylelint = require("stylelint");
const ruleName = "css/custom";
const messages = stylelint.utils.ruleMessages(ruleName, {
   expected: "Do not use test classes",
});

module.exports = stylelint.createPlugin(ruleName, () => {
   return function (postcssRoot, postcssResult) {
      postcssRoot.walkRules((rule) => {
         if (rule.selector.includes(".test")) {
            stylelint.utils.report({
               ruleName: ruleName,
               result: postcssResult,
               node: rule,
               message: messages.expected
            });
         }
      })
   }
})

module.exports.ruleName = ruleName
module.exports.messages = messages