const curry = require('../function/curry')

function either (f, g, ...args) {
  return f(...args) || g(...args)
}

module.exports = curry(3, either)
