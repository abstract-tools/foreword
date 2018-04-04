const curry = require('../function/curry')

function includes (a, arr = []) {
  return arr.includes(a)
}

module.exports = curry(2, includes)
