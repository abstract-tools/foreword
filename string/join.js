const curry = require('../function/curry')

// join :: String -> Array String -> String
function join (str = '', arr = []) {
  return arr.join(str)
}

module.exports = curry(2, join)
