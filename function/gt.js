const curry = require('./curry')

// gt :: a -> a -> Boolean
function gt (a, b) {
  return b > a
}

module.exports = curry(2, gt)
