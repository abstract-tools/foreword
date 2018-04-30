const curry = require('../function/curry')

function min (...args) {
  return args.reduce((a, b) => a > b ? b : a)
}

module.exports = curry(2, min)
