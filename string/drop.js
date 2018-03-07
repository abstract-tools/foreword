const curry = require('../function/curry');

// drop :: Number -> String -> String
module.exports = curry((n, str) => {
  return str.slice(n, Infinity);
});
