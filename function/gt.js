const curry = require('./curry');

// gt :: a -> a -> Boolean
module.exports = curry(2, (a, b) => {
  return b > a;
});
