const curry = require('./curry')

// compose :: (b -> c) -> (a -> b) -> a -> c
const compose = curry(3, function compose (f, g, a) {
  return f(g(a))
})

module.exports = compose
