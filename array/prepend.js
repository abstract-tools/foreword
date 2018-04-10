const curry = require('../function/curry')

function prepend (a, b) {
  return [a, ...b]
}

module.exports = curry(2, prepend)
