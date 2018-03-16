const curry = require('../function/curry')

// includes :: String -> String -> Boolean
const includes = curry(2, function includes (a = '', str = '') {
  return str.includes(a)
})

module.exports = includes
