let person = {};

Object.defineProperty(person, 'name', {
  enumerable: true,
  writable: false,
  value: 'aouos'
})

console.log(person);
// { name: 'aouos' }

person.name = 'aouoplus';

console.log(person);
// { name: 'aouos' }