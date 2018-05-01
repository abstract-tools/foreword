const curry = require('../function/curry')

function matchReducer (args) {
  return (acc, f) => {
    return (acc !== undefined) ? acc : f(...args)
  }
}

function match (arr, ...args) {
  return arr.reduce(matchReducer(args), undefined)
}

module.exports = curry(2, match)
