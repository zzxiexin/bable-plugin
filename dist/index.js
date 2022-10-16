"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var lodash = require('lodash');
// const uniq = require('lodash/uniq')
var arr = [1, 2, 3, 4, 4, 5, 3, 2, 1];
console.warn((0, _includes["default"])(arr).call(arr, 1));
console.warn(lodash.uniq(arr));
// console.warn(uniq(arr))