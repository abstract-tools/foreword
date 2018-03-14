const curry = require('./curry');

// or :: Boolean -> Boolean -> Boolean
module.exports = curry(2, (a, b) => {
  return a || b;
});
