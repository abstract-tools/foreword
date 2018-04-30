const curry = require('../function/curry')

function add (...args) {
  return args.reduce((a, b) => a + b)
}

module.exports = curry(2, add)
