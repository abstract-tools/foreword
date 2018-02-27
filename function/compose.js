const curry = require('./curry');

// compose :: (b -> c) -> (a -> b) -> a -> c
module.exports = curry((f, g, a) => {
  return f(g(a));
})
