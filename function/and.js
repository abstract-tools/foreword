const curry = require('./curry');

// and :: Boolean -> Boolean -> Boolean
module.exports = curry(2, (a, b) => {
  return a && b;
});
