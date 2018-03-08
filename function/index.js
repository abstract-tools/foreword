const always = require('./always');
const and = require('./and');
const andThen = require('./andThen');
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
const thrush = require('./thrush');
const withDefault = require('./withDefault');

module.exports = {
  always,
  and,
  andThen,
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
  thrush,
  withDefault,
  A: apply,
  B: compose,
  C: flip,
  I: identity,
  K: always,
  T: thrush,
};
