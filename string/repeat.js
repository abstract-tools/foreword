const curry = require('../function/curry')

function repeat (n = 1, str = '') {
  return str.repeat(n)
}

module.exports = curry(2, repeat)
