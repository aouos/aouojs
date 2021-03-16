let person = {};

Object.defineProperties(person, {
  name: {
    configurable: false,
    enumerable: true,
    value: 'aouos'
  },
  age: {
    enumerable: true,
    writable: false,
    value: 22,
  },
  hight: {
    value: 185
  }
})

console.log(person);
// { name: 'aouos', age: 22 }

let descriptor = Object.getOwnPropertyDescriptor(person, "hight")
console.log(descriptor);
// { value: 185, writable: false, enumerable: false, configurable: false }

console.log(Object.getOwnPropertyDescriptors(person));
// {
//   name: {
//     value: 'aouos',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   age: { 
//     value: 22, 
//     writable: false, 
//     enumerable: true, 
//     configurable: false },
//   hight: {
//     value: 185,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }