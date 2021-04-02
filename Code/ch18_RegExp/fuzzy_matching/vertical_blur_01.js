let regexp = /a[xyz]b/g;

let str = "axb atb ayb azb asb";

let arr = str.match(regexp);

console.log(arr);
// [ 'axb', 'ayb', 'azb' ]