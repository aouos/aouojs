let source = { a: 1, b: { c: 2 } };

function deepClone(obj) {
  let cloneObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      cloneObj[key] = deepClone(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

let target = deepClone(source);

console.log(target);
// { a: 1, b: { c: 2 } }

source.a = 3
source.b.c = 4;
console.log(source);
// { a: 3, b: { c: 4 } }
console.log(target);
// { a: 1, b: { c: 2 } }