const curry = require('../function/curry')

function repeat (n, str) {
  return str.repeat(n)
}

module.exports = curry(2, repeat)
