function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const genFn = generatorFn();

console.log(genFn.next());
// { value: 1, done: false }
console.log(genFn.return(4));
// { value: 4, done: true }
console.log(genFn.next());
// { value: undefined, done: true }