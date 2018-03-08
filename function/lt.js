const curry = require('./curry');

// lt :: a -> a -> Boolean
module.exports = curry((a, b) => {
  return b < a;
});
