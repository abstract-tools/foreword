const curry = require('./curry');

// or :: Boolean -> Boolean -> Boolean
const or = curry(2, function or (a, b) {
  return a || b;
});

module.exports = or;
