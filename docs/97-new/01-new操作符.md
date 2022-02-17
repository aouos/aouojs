## new 原理

new 主要作用就是执行一个构造函数，返回一个实例化对象

```javascript
function Person(name, age, hight) {
  this.name = name;
  this.age = age;
  this.hight = hight;
}

const aouos = new Person('aouos', 23, 185);

console.log(aouos);
// { name: 'aouos', age: 23, hight: 185 }
```
new 执行过程


:::info 笔记
- 首先创建一个对象
- 将构造函数的作用域赋值到新对象（this指向新对象）
- 执行构造函数内部的代码（添加属性给新对象等）
- 返回新对象
:::


new 执行之后总是会返回一个对象，如果构造函数 return 的值不是一个对象，返回构造函数的实例对象，否则返回 return 的对象


> return 为非对象情况：

```javascript
function Person(name, age, hight) {
  this.name = name;
  this.age = age;
  this.hight = hight;

  return "wakaka";
}

const aouos = new Person('aouos', 23, 185);

console.log(aouos);
// { name: 'aouos', age: 23, hight: 185 }
```
> return 为对象的情况

```javascript
function Person(name, age, hight) {
  this.name = name;
  this.age = age;
  this.hight = hight;

  return {
    "weight": 125
  };
}

const aouos = new Person('aouos', 23, 185);

console.log(aouos);
// { weight: 125 }
```
## 实现 new

手动实现 new 操作
```javascript
function createNew(Con, ...args) {
  // 创建一个新的空对象
  const obj = {};
  // 把 this 绑定到空对象, __proto__ 指向构造函数的原型
  obj.__proto__ = Con.prototype;
  // 执行构造函数, 为空对象添加属性
  let result = Con.apply(obj, args);

  // 判断返回构造函数的返沪值是否为对象
  return result instanceof Object ? result : obj;
}

function Person(name, age, hight) {
  this.name = name;
  this.age = age;
  this.hight = hight;
}

const aouos = createNew(Person, 'aouos', 23, 185);

console.log(aouos);
// { name: 'aouos', age: 23, hight: 185 }
```


