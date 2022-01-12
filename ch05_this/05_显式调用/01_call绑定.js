function add() {
  console.log(this);
  // { message: 'hello' }
}

var obj = {
  message: 'hello',
};

// 通过 call 显式绑定
add.call(obj);
