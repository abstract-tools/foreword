const curry = require('../function/curry')

function has (a, str) {
  return str.includes(a)
}

module.exports = curry(2, has)
