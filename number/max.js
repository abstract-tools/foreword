const curry = require('../function/curry');

// max :: Number -> Number -> Number
module.exports = curry((a, b) => {
  return Math.max(a, b);
});
