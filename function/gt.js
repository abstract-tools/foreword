const curry = require('./curry')

// gt :: a -> a -> Boolean
const gt = curry(2, function gt (a, b) {
  return b > a
})

module.exports = gt
