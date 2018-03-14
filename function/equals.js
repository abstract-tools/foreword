const curry = require('./curry');

// equals :: a -> a -> Boolean
module.exports = curry(2, (a, b) => {
  return a === b;
});
