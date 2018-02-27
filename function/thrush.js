const curry = require('./curry');

// thrush :: a -> (a -> b) -> b
module.exports = curry((a, f) => {
  return f(a);
});
