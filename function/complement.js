const curry = require('./curry')

// complement :: (a -> Boolean) -> a -> Boolean
function complement (f, a) {
  return !f(a)
}

module.exports = curry(2, complement)
