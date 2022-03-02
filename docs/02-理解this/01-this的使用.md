---
tags:
  - this
---

## this 全局作用域的指向

### 浏览器环境

浏览器环境下 `this` 指向 `window`

```
window
```

### Node 环境

`Node` 环境下指向一个空对象，执行时绑定了空对象 `call({})`

```
{}
```
