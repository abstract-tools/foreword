const curry = require('./curry')

function apply (f, ...args) {
  return f(...args)
}

module.exports = curry(2, apply)
