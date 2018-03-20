const curry = require('./curry')

// compose :: (b -> c) -> (a -> b) -> a -> c
function compose (f, g, a) {
  return f(g(a))
}

module.exports = curry(3, compose)
