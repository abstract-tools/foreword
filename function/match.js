const curry = require('../function/curry')

// match :: Array (a -> Boolean, a -> b) -> a -> b
function match (arr = [], ...args) {
  const [_, f] = arr.find(([g]) => g(...args))

  return f(...args)
}

module.exports = curry(2, match)
