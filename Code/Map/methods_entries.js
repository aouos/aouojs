/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:35:41 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-12-17 11:36:43
 */

// Map.prototype.entries()

const map = new Map();

map.set('name', 'aouo');
map.set('age', 22);
// Map { 'name' => 'aouo', 'age' => 22 }

const mapIter = map.entries();
console.log(mapIter);
// [Map Entries] { [ 'name', 'aouo' ], [ 'age', 22 ] }