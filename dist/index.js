"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Person1 = /*#__PURE__*/function () {
  function Person1(name) {
    (0, _classCallCheck2["default"])(this, Person1);
    this.name = name;
  }
  (0, _createClass2["default"])(Person1, [{
    key: "say",
    value: function say() {}
  }]);
  return Person1;
}();
var person = new Person("test");
person.say();