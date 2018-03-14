const curry = require('../function/curry');

// div :: Number -> Number -> Number
module.exports = curry(2, (a = 0, b = 0) => {
  return b / a;
});
