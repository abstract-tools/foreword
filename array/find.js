const curry = require('../function/curry')

function find (f, arr) {
  return arr.find(f)
}

module.exports = curry(2, find)
