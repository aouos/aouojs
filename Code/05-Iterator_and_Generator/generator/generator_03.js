function* generatorFn() {
  yield 'Hello';
  yield 'World';
  return 'aouos'
}

const genFn = generatorFn();

console.log(genFn);

console.log(genFn.next());
// { value: 'Hello', done: false }
console.log(genFn.next());
// { value: 'World', done: false }
console.log(genFn.next());
// { value: 'aouos', done: true }
console.log(genFn.next());
// { value: undefined, done: true }