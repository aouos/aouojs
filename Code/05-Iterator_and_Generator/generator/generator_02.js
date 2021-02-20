function* generatorFn() {
  console.log("I'm aouos");
}

console.log(generatorFn);
// [GeneratorFunction: generatorFn]

const genFn = generatorFn();
console.log(genFn === genFn[Symbol.iterator]());
// true