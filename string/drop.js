const curry = require('../function/curry');

// drop :: Number -> String -> String
const drop = curry(2, function drop (n = 0, str = '') {
  return str.slice(n, Infinity);
});

module.exports = drop;
