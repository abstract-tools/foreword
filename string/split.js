const curry = require('../function/curry');

// split :: String -> String -> Array String
module.exports = curry((a, str) => {
  return str.split(a);
});
