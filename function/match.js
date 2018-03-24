const curry = require('../function/curry')

// match :: Array (a -> Boolean, a -> b) -> a -> b
function match (arr = [], a) {
  const [_, f] = arr.find(([g]) => g(a))

  return f(a)
}

module.exports = curry(2, match)
