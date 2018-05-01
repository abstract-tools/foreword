const curry = require('../function/curry')

function when (f, g, ...args) {
  return f(...args) ? g(...args) : undefined
}

module.exports = curry(3, when)
