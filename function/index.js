const always = require('./always');
const and = require('./and');
const apply = require('./apply');
const complement = require('./complement');
const compose = require('./compose');
const curry = require('./curry');
const equals = require('./equals');
const flip = require('./flip');
const gt = require('./gt');
const gte = require('./gte');
const identity = require('./identity');
const lt = require('./lt');
const lte = require('./lte');
const not = require('./not');
const or = require('./or');
const pipe = require('./pipe');

module.exports = {
  always,
  and,
  apply,
  complement,
  compose,
  curry,
  equals,
  flip,
  gt,
  gte,
  identity,
  lt,
  lte,
  not,
  or,
  pipe,
  A: apply,
  B: compose,
  C: flip,
  I: identity,
  K: always
};
