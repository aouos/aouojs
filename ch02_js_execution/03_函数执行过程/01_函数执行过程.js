var message = 'AouoCode';

function foo() {
  console.log(m);
  // undefined
  // 变量提升，AO 对象 m 赋值为 undefined
  var m = 10;

  console.log(message);
  // AouoCode
}

foo();
