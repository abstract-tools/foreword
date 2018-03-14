const curry = require('../function/curry');

// includes :: String -> Object k v -> Boolean
const includes = curry(2, function includes (k = '', obj = {}) {
  return Object.keys(obj).includes(k);
});

module.exports = includes;
