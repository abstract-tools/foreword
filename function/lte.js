const curry = require('./curry');

// lte :: a -> a -> Boolean
module.exports = curry((a, b) => {
  return b <= a;
});
