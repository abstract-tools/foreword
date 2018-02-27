const curry = require('./curry');

// pipe :: Array (a -> b) -> a -> b
module.exports = curry((arr, a) => {
  return arr.reduce((acc, f) => f(acc), a);
});
