const curry = require('../function/curry')

// take :: Number -> String -> String
const take = curry(2, function take (n = Infinity, str = '') {
  return str.slice(0, n)
})

module.exports = take
