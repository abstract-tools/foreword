const curry = require('./curry')

function append (a, b) {
  return b.concat(a)
}

function concat (arr) {
  return arr.join('')
}

function drop (n, str) {
  return str.slice(n, Infinity)
}

function includes (a, str) {
  return str.includes(a)
}

function indexOf (a, str) {
  return str.indexOf(a)
}

function isEmpty (str) {
  return !str.length
}

function join (str, arr) {
  return arr.join(str)
}

function length (str) {
  return str.length
}

function match (reg, str) {
  return str.match(reg)
}

function repeat (n, str) {
  return str.repeat(n)
}

function replace (a, b, str) {
  return str.replace(a, b)
}

function reverse (str) {
  return str.split('').reverse().join('')
}

function search (reg, str) {
  return str.search(reg)
}

function slice (a, b, str) {
  return str.slice(a, b)
}

function split (a, b) {
  return b.split(a)
}

function take (n, str) {
  return str.slice(0, n)
}

function toLower (str) {
  return str.toLowerCase()
}

function toUpper (str) {
  return str.toUpperCase()
}

function trim (str) {
  return str.trim()
}

module.exports = {
  append: curry(2, append),
  concat,
  drop: curry(2, drop),
  includes: curry(2, includes),
  indexOf: curry(2, indexOf),
  isEmpty,
  join: curry(2, join),
  length,
  match: curry(2, match),
  repeat: curry(2, repeat),
  replace: curry(3, replace),
  reverse,
  search: curry(2, search),
  slice: curry(3, slice),
  split: curry(2, split),
  take: curry(2, take),
  toLower,
  toUpper,
  trim
}
