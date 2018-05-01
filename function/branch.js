const curry = require('./curry')

function branch (p, f, g, ...args) {
  return p(...args) ? f(...args) : g(...args)
}

module.exports = curry(4, branch)
