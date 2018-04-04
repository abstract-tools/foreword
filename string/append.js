const curry = require('../function/curry')

function append (a = '', b = '') {
  return b.concat(a)
}

module.exports = curry(2, append)
