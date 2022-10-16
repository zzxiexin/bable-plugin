const lodash = require('lodash');
// const uniq = require('lodash/uniq')
const arr = [1,2,3,4,4,5,3,2,1];
console.warn(arr.includes(1))
console.warn(lodash.uniq(arr))
// console.warn(uniq(arr))
console.log(uniq(arr))