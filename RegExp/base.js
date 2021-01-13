// 横向模糊匹配
const reg = /ab{2,5}c/g;
let string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";

console.log(string.match(reg));
// [ 'abbc', 'abbbc', 'abbbbc', 'abbbbbc' ]

console.log(string.search(reg));
// 4

console.log(string.replace(reg, 'oo'));
// abc oo oo oo oo abbbbbbc

console.log(reg.exec(string));
// [
//   'abbc',
//   index: 4,
//   input: 'abc abbc abbbc abbbbc abbbbbc abbbbbbc',
//   groups: undefined
// ]
console.log(reg.exec(string).index);
// 9
console.log(reg.exec(string).input);
// abc abbc abbbc abbbbc abbbbbc abbbbbbc

console.log(reg.test(string));
// true

// 纵向模糊匹配
const rege = /a[123]b/g;
let newstring = "a0b a2b a2b a3b a4b";

console.log(newstring.match(rege));
// [ 'a2b', 'a2b', 'a3b' ]