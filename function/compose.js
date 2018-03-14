const curry = require('./curry');

// compose :: (b -> c) -> (a -> b) -> a -> c
module.exports = curry(3, (f, g, a) => {
  return f(g(a));
})
