const curry = require('../function/curry')

function includes (a, str) {
  return str.includes(a)
}

module.exports = curry(2, includes)
