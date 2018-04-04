const curry = require('../function/curry')

function join (str = '', arr = []) {
  return arr.join(str)
}

module.exports = curry(2, join)
