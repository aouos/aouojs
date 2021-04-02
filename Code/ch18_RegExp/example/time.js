let regexp = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

// 时间可以忽略前面的0 
// let regexp = /^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/;

console.log(regexp.test("23:59"));
// true

console.log(regexp.test("08:02"));
// true

console.log(regexp.test("04:59"));
// true

console.log(regexp.test("3:9"));
// false