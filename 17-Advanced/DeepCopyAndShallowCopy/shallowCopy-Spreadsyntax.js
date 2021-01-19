let source = { a: 1, b: { c: 2 } };

let target = { ...source };

console.log(target);
// { a: 1, b: { c: 2 } }

source.a = 3
source.b.c = 4;
console.log(source);
// { a: 3, b: { c: 4 } }
console.log(target);
// { a: 1, b: { c: 4 } }