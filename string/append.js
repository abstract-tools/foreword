const curry = require('../function/curry');

// append :: String -> String -> String
const append = curry(2, function append (a = '', b = '') {
  return b.concat(a);
});

module.exports = append;
