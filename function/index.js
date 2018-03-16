const always = require('./always')
const and = require('./and')
const ap = require('./ap')
const apply = require('./apply')
const both = require('./both')
const complement = require('./complement')
const compose = require('./compose')
const cond = require('./cond')
const curry = require('./curry')
const either = require('./either')
const equals = require('./equals')
const flip = require('./flip')
const gt = require('./gt')
const gte = require('./gte')
const identity = require('./identity')
const lt = require('./lt')
const lte = require('./lte')
const not = require('./not')
const on = require('./on')
const or = require('./or')
const pipe = require('./pipe')
const when = require('./when')

module.exports = {
  always,
  and,
  ap,
  apply,
  both,
  complement,
  compose,
  cond,
  curry,
  either,
  equals,
  flip,
  gt,
  gte,
  identity,
  lt,
  lte,
  not,
  on,
  or,
  pipe,
  when,
  comp: compose,
  eq: equals,
  A: apply,
  B: compose,
  C: flip,
  I: identity,
  K: always,
  S: ap,
  P: on
}
