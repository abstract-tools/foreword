const always = require('./always')
const and = require('./and')
const ap = require('./ap')
const apply = require('./apply')
const both = require('./both')
const complement = require('./complement')
const compose = require('./compose')
const curry = require('./curry')
const either = require('./either')
const equal = require('./equal')
const equalBy = require('./equalBy')
const flip = require('./flip')
const gt = require('./gt')
const gte = require('./gte')
const identity = require('./identity')
const lt = require('./lt')
const lte = require('./lte')
const match = require('./match')
const not = require('./not')
const on = require('./on')
const or = require('./or')
const pipe = require('./pipe')
const unless = require('./unless')
const when = require('./when')

module.exports = {
  always,
  and,
  ap,
  apply,
  both,
  complement,
  compose,
  curry,
  either,
  equal,
  equalBy,
  flip,
  gt,
  gte,
  identity,
  lt,
  lte,
  match,
  not,
  on,
  or,
  pipe,
  unless,
  when,
  comp: compose,
  eq: equal,
  eqBy: equalBy,
  A: apply,
  B: compose,
  C: flip,
  I: identity,
  K: always,
  S: ap,
  P: on
}
