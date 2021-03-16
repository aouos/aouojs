let config = {};

Object.defineProperty(config, 'values', {
  configurable: false,
  enumerable: true,
  value: 'aouos'
})

console.log(config);
// { values: 'aouos' }

delete config.values;

console.log(config);
// { values: 'aouos' }

// Error
Object.defineProperty(config, 'values', {
  configurable: true,
  value: 'aouos'
})