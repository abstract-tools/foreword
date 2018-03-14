const curry = require('./curry');

// lt :: a -> a -> Boolean
module.exports = curry(2, (a, b) => {
  return b < a;
});
