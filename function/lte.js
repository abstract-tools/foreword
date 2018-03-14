const curry = require('./curry');

// lte :: a -> a -> Boolean
module.exports = curry(2, (a, b) => {
  return b <= a;
});
