/*
 * @Author: aouos 
 * @Date: 2021-01-21 21:20:48 
 * @Last Modified by:   aouos 
 * @Last Modified time: 2021-01-21 21:20:48 
 */

const arr = [1, 9, 3, 4, 2, 5, 3, 6, 2, 4, 3, 2, 5, 5, 4, 2, 2, 5, 6, 9, 5];

let newArr = [...new Set(arr)];

console.log(newArr);
// [1, 9, 3, 4, 2, 5, 6]