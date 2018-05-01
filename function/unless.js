const curry = require('../function/curry')

function unless (f, g, ...args) {
  return f(...args) ? undefined : g(...args)
}

module.exports = curry(3, unless)
