// ***Shorthand attribute*** //
let name = 'aouos';
let person = {
  name: name
}

console.log(person);
// { name: 'aouos' }

let sPerson = {
  name
}

console.log(sPerson);
// { name: 'aouos' }

// ***Shorthand method name*** //
let info = {
  sayName: function () {
    console.log(`My name is ${name}`);
  }
}

info.sayName();
// My name is aouos

let sInfo = {
  sayName() {
    console.log(`My name is ${name}`);
  }
}
sInfo.sayName();
// My name is aouos