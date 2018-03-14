const curry = require('../function/curry');

// slice :: Number -> Number -> String -> String
module.exports = curry(3, (a = 0, b = Infinity, str = '') => {
  return str.slice(a, b);
});
