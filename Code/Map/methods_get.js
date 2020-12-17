/*
 * @Author: GJQ 
 * @Date: 2020-12-17 11:15:42 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-12-17 11:20:45
 */

// Map.prototype.get(key)

const map = new Map();

map.set('name', 'aouo');
// Map { 'name' => 'aouo' }

map.get('name');
// aouo

map.get('age');
// undefined