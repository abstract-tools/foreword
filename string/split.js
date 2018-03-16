const curry = require('../function/curry')

// split :: String -> String -> Array String
const split = curry(2, function split (a = '', str = '') {
  return str.split(a)
})

module.exports = split
