const curry = require('../function/curry')

function match (arr = [], ...args) {
  const [_, f] = arr.find(([g]) => g(...args)) // eslint-disable-line no-unused-vars

  return f(...args)
}

module.exports = curry(2, match)
