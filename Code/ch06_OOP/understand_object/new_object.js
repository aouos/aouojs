let person = new Object();
person.name = 'aouos';
person.age = 22;
person.hight = 185;
person.sayInfo = function () {
  console.log(this.name + ' age is ' + this.age);
}

console.log(person);
// { name: 'aouos', age: 22, hight: 185, sayInfo: f() }

person.sayInfo();
// aouos age is 22