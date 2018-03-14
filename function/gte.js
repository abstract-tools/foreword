const curry = require('./curry');

// gte :: a -> a -> Boolean
module.exports = curry(2, (a, b) => {
  return b >= a;
});
