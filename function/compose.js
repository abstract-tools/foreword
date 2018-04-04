const curry = require('./curry')

function compose (f, g, ...args) {
  return f(g(...args))
}

module.exports = curry(3, compose)
