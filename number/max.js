const curry = require('../function/curry')

function max (...args) {
  return args.reduce((a, b) => a > b ? a : b)
}

module.exports = curry(2, max)
