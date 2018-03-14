const curry = require('../function/curry');

// split :: String -> String -> Array String
module.exports = curry(2, (a = '', str = '') => {
  return str.split(a);
});
