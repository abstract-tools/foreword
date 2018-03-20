const curry = require('../function/curry')

// split :: String -> String -> Array String
function split (a = '', str = '') {
  return str.split(a)
}

module.exports = curry(2, split)
