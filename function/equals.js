const curry = require('./curry');

// equals :: a -> a -> Boolean
module.exports = curry((a, b) => {
  return a === b;
});
