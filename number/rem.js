const curry = require('../function/curry')

function rem (a = 0, b = 0) {
  return b % a
}

module.exports = curry(2, rem)
