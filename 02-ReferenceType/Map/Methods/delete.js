/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:15:42 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-12-17 11:18:23
 */

// Map.prototype.delete(key)

const map = new Map();

map.set('name', 'aouo');
map.set('age', 22);
// Map { 'name' => 'aouo', 'age' => 22 }

map.delete('age');
// Map { 'name' => 'aouo' }