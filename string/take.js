const curry = require('../function/curry');

// take :: Number -> String -> String
module.exports = curry(2, (n = Infinity, str = '') => {
  return str.slice(0, n);
});
