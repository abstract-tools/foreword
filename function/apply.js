const curry = require('./curry');

// apply :: (a -> b) -> a -> b
module.exports = curry((f, a) => {
  return f(a);
});
