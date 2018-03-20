const curry = require('../function/curry')

// cond :: Array (a -> Boolean, a -> b) -> a -> b
function cond (arr = [], a) {
  const [_, f] = arr.find(([g]) => g(a))

  return f(a)
}

module.exports = curry(2, cond)
