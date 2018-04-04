const curry = require('../function/curry')

function both (f, g, ...args) {
  return f(...args) && g(...args)
}

module.exports = curry(3, both)
