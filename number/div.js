const curry = require('../function/curry');

// div :: Number -> Number -> Number
module.exports = curry((a, b) => {
  return b / a;
});
