let regexp = /ab{2,5}c/g;

let str = "abc abbbc abbbbbbc abbc abbbbbc";

let arr = str.match(regexp);

console.log(arr);
// [ 'abbbc', 'abbc', 'abbbbbc' ]