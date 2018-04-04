const curry = require('../function/curry')

function split (a = '', str = '') {
  return str.split(a)
}

module.exports = curry(2, split)
