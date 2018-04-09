const curry = require('../function/curry')

function mod (a, b) {
  return ((a % b) + b) % b
}

module.exports = curry(2, mod)
