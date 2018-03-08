const curry = require('./curry');

// gte :: a -> a -> Boolean
module.exports = curry((a, b) => {
  return b >= a;
});
