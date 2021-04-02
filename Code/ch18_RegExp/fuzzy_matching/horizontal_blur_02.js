let regexp = /ab{2,5}c/;

console.log(regexp.test("abc"));
// false

console.log(regexp.test("abbbc"));
// true 

console.log(regexp.test("abbbbbc"));
// true 

console.log(regexp.test("abbbbbbbbbc"));
// false