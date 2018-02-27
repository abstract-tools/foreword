const curry = require('./curry');

// complement :: (a -> Boolean) -> a -> Boolean
module.exports = curry((f, a) => {
  return !f(a);
})
