const curry = require('../function/curry')

function append (a, b) {
  return [...b, a]
}

module.exports = curry(2, append)
