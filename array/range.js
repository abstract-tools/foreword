const curry = require('../function/curry')

function range (a = 0, b = 0) {
  const arr = []

  for (let i = a, len = b; i < len; i++) {
    arr.push(i)
  }

  return arr
}

module.exports = curry(2, range)
