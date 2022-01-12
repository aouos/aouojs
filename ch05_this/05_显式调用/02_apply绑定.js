function add() {
  console.log(this);
  // { message: 'hello' }
}

var obj = {
  message: 'hello',
};

// 通过 apply 显式绑定
add.apply(obj);
