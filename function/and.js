const curry = require('./curry');

// and :: Boolean -> Boolean -> Boolean
module.exports = curry((a, b) => {
  return a && b;
});
