const curry = require('../function/curry')

// cond :: Array (a -> Boolean, a -> b) -> a -> b
const cond = curry(2, function cond (arr = [], a) {
  const [_, f] = arr.find(([g]) => g(a))

  return f(a)
})

module.exports = cond
