const curry = require('./curry');

// andThen :: (a -> b) -> Maybe a -> Maybe b
module.exports = curry((f, a) => {
  return (a == null) ? a : f(a);
});
