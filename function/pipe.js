const curry = require('./curry')

// pipe :: Array (a -> b) -> a -> b
const pipe = curry(2, function pipe (arr = [], a) {
  return arr.reduce((x, f) => f(x), a)
})

module.exports = pipe
