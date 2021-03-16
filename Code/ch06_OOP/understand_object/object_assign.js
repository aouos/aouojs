// ***Simple copy*** //

let src = { name: 'aouos' };
let res = {};

Object.assign(res, src);

console.log(res);
// { name: 'aouos' }

console.log(res === src);
// false

// ***Copy multiple sources*** //

Object.assign(res, { name: 'aouos' }, { age: 22 });

console.log(res);
// { name: 'aouos', age: 22 }

// ***Override duplicate attributes*** //

Object.assign(res, { age: 18 }, { age: 22 });

console.log(res);
// { name: 'aouos', age: 22 }

// ***Shallow copy*** //
let person = {
  name: 'aouos',
  age: 22,
  info: {
    weight: 120,
    height: 185
  }
}
Object.assign(res, person);

console.log(res);
// { name: 'aouos', age: 22, info: { weight: 120, height: 185 } }

console.log(res.info === person.info);
// true

person.info.weight = 130;
console.log(res);
// { name: 'aouos', age: 22, info: { weight: 130, height: 185 } }
