const curry = require('../function/curry');

// drop :: Number -> Array a -> Array a
const drop = curry(2, function drop (n = 0, arr = []) {
  return arr.slice(n, Infinity);
});

module.exports = drop;
