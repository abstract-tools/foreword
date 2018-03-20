const curry = require('../function/curry')

// includes :: String -> Object k v -> Boolean
function includes (str = '', obj = {}) {
  return Object.keys(obj).includes(str)
}

module.exports = curry(2, includes)
