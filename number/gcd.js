const curry = require('../function/curry')

// gcd :: Number -> Number -> Number
const gcd = curry(2, function gcd (a = 0, b = 0) {
  let x = Math.abs(a)
  let y = Math.abs(b)

  while (y !== 0) {
    let z = x % y

    x = y
    y = z
  }

  return x
})

module.exports = gcd
