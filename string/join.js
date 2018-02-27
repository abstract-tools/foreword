const curry = require('../function/curry');

// join :: String -> Array String -> String
module.exports = curry((a, arr) => {
  return arr.join(a);
});
