const curry = require('./curry')

// complement :: (a -> Boolean) -> a -> Boolean
function complement (f, ...args) {
  return !f(...args)
}

module.exports = curry(2, complement)
