const curry = require('../function/curry');

// includes :: String -> String -> Boolean
module.exports = curry((a, str) => {
  return str.includes(a);
});
