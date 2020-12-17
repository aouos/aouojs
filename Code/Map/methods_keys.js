/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:26:09 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-12-17 11:33:53
 */

// Map.prototype.keys()

const map = new Map();

map.set('name', 'aouo');
map.set('age', 22);
// Map { 'name' => 'aouo', 'age' => 22 }

const mapIter = map.keys();
console.log(mapIter);
// [Map Iterator] { 'name', 'age' }