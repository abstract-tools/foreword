const curry = require('../function/curry')

function has (a, arr) {
  return arr.includes(a)
}

module.exports = curry(2, has)
