const curry = require('./curry');

// gte :: a -> a -> Boolean
const gte = curry(2, function gte (a, b) {
  return b >= a;
});

module.exports = gte;
