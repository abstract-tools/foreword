const curry = require('./curry')

function encase (f, a) {
  try {
    return f(a)
  } catch (err) {
    return undefined
  }
}

function isNothing (a) {
  return a == null
}

function map (f, a) {
  return a == null ? a : f(a)
}

function toArray (a) {
  return a == null ? [] : Array.isArray(a) ? a : [a]
}

function withDefault (a, b) {
  return b == null ? a : b
}

module.exports = {
  encase: curry(2, encase),
  isNothing,
  map: curry(2, map),
  toArray,
  withDefault: curry(2, withDefault)
}
