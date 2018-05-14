const curry = require('./curry')

function append (a, b) {
  return b + a 
}

function concat (arr) {
  return arr.join('')
}

function drop (n, str) {
  return str.slice(n, Infinity)
}

function dropWhile (f, str) {
  const i = Array.from(str).findIndex(x => !f(x))

  return i < 0 ? '' : str.slice(i)
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

function span (f, str) {
  const i = Array.from(str).findIndex(x => !f(x))
  const n = i < 0 ? Infinity : i

  return [str.slice(0, n), str.slice(n)]
}

function split (a, b) {
  return b.split(a)
}

function take (n, str) {
  return str.slice(0, n)
}

function takeWhile (f, str) {
  const i = Array.from(str).findIndex(x => !f(x))

  return i < 0 ? str : str.slice(0, i)
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
  dropWhile: curry(2, dropWhile),
  includes: curry(2, includes),
  indexOf: curry(2, indexOf),
  isEmpty,
  join: curry(2, join),
  length,
  repeat: curry(2, repeat),
  replace: curry(3, replace),
  reverse,
  search: curry(2, search),
  slice: curry(3, slice),
  span: curry(2, span),
  split: curry(2, split),
  take: curry(2, take),
  takeWhile: curry(2, takeWhile),
  toLower,
  toUpper,
  trim
}
