const curry = require('../function/curry')

function add (a, b) {
  return a + b
}

module.exports = curry(2, add)
