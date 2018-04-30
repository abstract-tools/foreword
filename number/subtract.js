const curry = require('../function/curry')

function subtract (...args) {
  return args.reverse().reduce((a, b) => a - b)
}

module.exports = curry(2, subtract)
