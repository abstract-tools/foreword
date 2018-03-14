const curry = require('./curry');

// complement :: (a -> Boolean) -> a -> Boolean
module.exports = curry(2, (f, a) => {
  return !f(a);
})
