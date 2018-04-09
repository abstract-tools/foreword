const curry = require('../function/curry')

function reduce (f, init, arr) {
  return arr.reduce(f, init)
}

module.exports = curry(3, reduce)
