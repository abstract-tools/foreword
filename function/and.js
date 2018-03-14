const curry = require('./curry');

// and :: Boolean -> Boolean -> Boolean
const and = curry(2, function and (a, b) {
  return a && b;
});

module.exports = and;
