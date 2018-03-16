const curry = require('../function/curry')

// join :: String -> Array String -> String
const join = curry(2, function join (str = '', arr = []) {
  return arr.join(str)
})

module.exports = join
