const curry = require('../function/curry')

function withDefault (a, b) {
  return b == null ? a : b
}

module.exports = curry(2, withDefault)
