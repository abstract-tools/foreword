const curry = require('./curry')

function complement (f, ...args) {
  return !f(...args)
}

module.exports = curry(2, complement)
