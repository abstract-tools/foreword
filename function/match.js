const curry = require('../function/curry')

function match (arr, ...args) {
  const [, f] = arr.find(([g]) => g(...args))

  return f(...args)
}

module.exports = curry(2, match)
