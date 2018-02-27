const curry = require('./curry');

// or :: Boolean -> Boolean -> Boolean
module.exports = curry((a, b) => {
  return a || b;
});
