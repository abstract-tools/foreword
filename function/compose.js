const curry = require('./curry')

// compose :: (b -> c) -> (a -> b) -> a -> c
function compose (f, g, ...args) {
  return f(g(...args))
}

module.exports = curry(3, compose)
