const curry = require('../function/curry')

function rem (a, b) {
  return b % a
}

module.exports = curry(2, rem)
