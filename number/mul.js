const curry = require('../function/curry');

// mul :: Number -> Number -> Number
module.exports = curry((a, b) => {
  return a * b;
});
