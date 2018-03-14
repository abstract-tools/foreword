const curry = require('../function/curry');

// includes :: String -> String -> Boolean
module.exports = curry(2, (a = '', str = '') => {
  return str.includes(a);
});
