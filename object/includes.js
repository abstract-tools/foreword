const curry = require('../function/curry')

// includes :: String -> Object k v -> Boolean
const includes = curry(2, function includes (str = '', obj = {}) {
  return Object.keys(obj).includes(str)
})

module.exports = includes
