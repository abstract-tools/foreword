const curry = require('./curry');

// equals :: a -> a -> Boolean
const equals = curry(2, function equals (a, b) {
  return a === b;
});

module.exports = equals;
