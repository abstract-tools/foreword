const curry = require('../function/curry');

// take :: Number -> String -> String
module.exports = curry((n, str) => {
  return str.slice(0, n);
});
