const curry = require('../function/curry');

// drop :: Number -> String -> String
module.exports = curry(2, (n = 0, str = '') => {
  return str.slice(n, Infinity);
});
