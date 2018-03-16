const array = require('./array')
const fn = require('./function')
const maybe = require('./maybe')
const number = require('./number')
const object = require('./object')
const string = require('./string')

module.exports = {
  array,
  fn,
  maybe,
  number,
  object,
  string,
  A: array,
  F: fn,
  M: maybe,
  N: number,
  O: object,
  S: string
}
