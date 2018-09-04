"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _os = _interopRequireDefault(require("os"));

var _clipboardy = _interopRequireDefault(require("clipboardy"));

var _inquirer = _interopRequireDefault(require("inquirer"));

function _default(templateConfig) {
  var parseConfigItemToQuestion = function parseConfigItemToQuestion(_ref) {
    var name = _ref.name,
        message = _ref.message,
        defaultAnswer = _ref.defaultAnswer;
    return {
      type: 'editor',
      name: name,
      message: message + _os["default"].EOL,
      "default": defaultAnswer
      /* format, parseEmoji, etc. */

    };
  };

  var questions = Object.keys(templateConfig).map(function (key) {
    return parseConfigItemToQuestion(Object.assign({}, templateConfig[key], {
      name: key
    }));
  });
  return _inquirer["default"].prompt(questions).then(function (answers) {
    return _clipboardy["default"].write(Object.keys(answers).reduce(function (prev, item) {
      return prev + templateConfig[item].message + _os["default"].EOL + answers[item] + _os["default"].EOL;
    }, '').trim());
  }).then(function () {
    return process.exit(0);
  }, function (error) {
    console.error(error);
    process.exit(1);
  });
}

module.exports = exports.default;