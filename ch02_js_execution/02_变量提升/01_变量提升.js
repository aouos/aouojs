var message = 'AouoCode';

console.log(message);
// AouoCode
console.log(age);
// undefined

var age = 23;

console.log(age);
// 23

// 转换为 AST 之前创建全局 GO 对象
// window 会指向当前的全局对象
var globalObject = {
  String: '...',
  Number: '...',
  setTimeout: '...',
  window: globalObject,
  message: undefined,
  age: undefined,
};
