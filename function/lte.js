const curry = require('./curry');

// lte :: a -> a -> Boolean
const lte = curry(2, function lte (a, b) {
  return b <= a;
});

module.exports = lte;
