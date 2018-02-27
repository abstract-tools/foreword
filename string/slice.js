const curry = require('../function/curry');

// slice :: Number -> Number -> String -> String
module.exports = curry((a, b, str) => {
  return str.slice(a, b);
});
