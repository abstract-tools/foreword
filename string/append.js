const curry = require('../function/curry');

// append :: String -> String -> String
module.exports = curry((a, b) => {
  return b.concat(a);
});
