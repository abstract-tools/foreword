const curry = require('./curry')

// flip : (a -> b -> c) -> b -> a -> c
const flip = curry(3, function flip (f, a, b) {
  return f(b, a)
})

module.exports = flip
