const curry = require('./curry');

// lt :: a -> a -> Boolean
const lt = curry(2, function lt (a, b) {
  return b < a;
});

module.exports = lt;
