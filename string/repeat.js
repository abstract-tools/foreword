const curry = require('../function/curry')

// repeat :: Number -> String -> String
const repeat = curry(2, function repeat (n = 1, str = '') {
  return str.repeat(n)
})

module.exports = repeat
