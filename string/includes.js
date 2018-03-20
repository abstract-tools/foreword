const curry = require('../function/curry')

// includes :: String -> String -> Boolean
function includes (a = '', str = '') {
  return str.includes(a)
}

module.exports = curry(2, includes)
