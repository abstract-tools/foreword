const curry = require('../function/curry');

// min :: Number -> Number -> Number
module.exports = curry((a, b) => {
  return Math.min(a, b);
});
