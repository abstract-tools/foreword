const curry = require('../function/curry')
const gcd = require('./gcd')

// lcm :: Number -> Number -> Number
const lcm = curry(2, function lcm (a = 0, b = 0) {
  return Math.abs(Math.floor(a / gcd(a, b) * b))
})

module.exports = lcm
