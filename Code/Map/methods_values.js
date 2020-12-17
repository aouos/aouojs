/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:26:09 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-12-17 11:31:37
 */

// Map.prototype.values()

const map = new Map();

map.set('name', 'aouo');
map.set('age', 22);
// Map { 'name' => 'aouo', 'age' => 22 }

const mapIter = map.values();
console.log(mapIter);
// [Map Iterator] { 'aouo', 22 }