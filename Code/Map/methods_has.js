/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:15:42 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-12-17 11:23:48
 */

// Map.prototype.has(key)

const map = new Map();

map.set('name', 'aouo');
// Map { 'name' => 'aouo' }

map.has('name');
// true

map.has('age');
// false