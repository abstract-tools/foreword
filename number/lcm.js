const curry = require('../function/curry')
const gcd = require('./gcd')

// lcm :: Number -> Number -> Number
function lcm (a = 0, b = 0) {
  return Math.abs(Math.floor(a / gcd(a, b) * b))
}

module.exports = curry(2, lcm)
