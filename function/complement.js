const curry = require('./curry')

// complement :: (a -> Boolean) -> a -> Boolean
const complement = curry(2, function complement (f, a) {
  return !f(a)
})

module.exports = complement
