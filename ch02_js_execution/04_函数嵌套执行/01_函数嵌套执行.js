var message = 'AouoCode';

function foo() {
  console.log(m);
  // undefined
  // 变量提升，AO 对象 m 赋值为 undefined
  var m = 10;

  function bar() {
    console.log(message);
    // AouoCode
    // 沿着父级作用域一直寻找，一直到 GO

    console.log(m);
    // 10
  }

  bar();
}

foo();
