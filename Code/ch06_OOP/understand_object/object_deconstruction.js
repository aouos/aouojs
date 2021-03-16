let person = {
  name: 'aouos',
  age: 22,
}

let perName = person.name;
let perAge = person.age;

console.log(perName, perAge);
// aouos 22

let { name: personName, age: personAge } = person;

console.log(personName, personAge);
// aouos 22

let { name, age } = person;

console.log(name, age);
// aouos 22