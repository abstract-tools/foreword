const curry = require('./curry');

// apply :: (a -> b) -> a -> b
module.exports = curry(2, (f, a) => {
  return f(a);
});
