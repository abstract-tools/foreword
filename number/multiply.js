const curry = require('../function/curry')

function multiply (...args) {
  return args.reduce((a, b) => a * b)
}

module.exports = curry(2, multiply)
