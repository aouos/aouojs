const reg = /^([01][0-9]|2[0-9]):([0-5][0-9])$/

// 省略时间前"0"
// const reg = /^(0?[0-9]|1[0-9]|2[0-9]):(0?[0-9]|[1-5][0-9])$/

console.log(reg.test("23:59"));
console.log(reg.test("7:8"));
console.log(reg.test("12:9"));
console.log(reg.test("02:08"));
console.log(reg.test("25:61"));