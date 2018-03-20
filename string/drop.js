const curry = require('../function/curry')

// drop :: Number -> String -> String
function drop (n = 0, str = '') {
  return str.slice(n, Infinity)
}

module.exports = curry(2, drop)
