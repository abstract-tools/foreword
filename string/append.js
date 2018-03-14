const curry = require('../function/curry');

// append :: String -> String -> String
module.exports = curry(2, (a = '', b = '') => {
  return b.concat(a);
});
