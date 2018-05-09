const curry = require('./curry')

function append (a, b) {
  return [...b, a]
}

function concat (arr) {
  return arr.reduce((acc, a) => acc.concat(a), [])
}

function concatMap (f, arr) {
  return arr.reduce((acc, a) => acc.concat(f(a)), [])
}

function countBy (f, arr) {
  return arr.reduce((acc, a) => {
    const k = f(a)

    return Object.assign(acc, {
      [k]: acc.hasOwnProperty(k) ? acc[k] + 1 : 1
    })
  }, {})
}

function drop (n, arr) {
  return arr.slice(n, Infinity)
}

function every (f, arr) {
  return arr.every(f)
}

function filter (f, arr) {
  return arr.filter(f)
}

function find (f, arr) {
  return arr.find(f)
}

function findIndex (f, arr) {
  return arr.findIndex(f)
}

function get (n, arr) {
  return arr[n]
}

function gets (keys, arr) {
  return keys.map(k => arr[k])
}

function groupBy (f, arr) {
  return arr.reduce((acc, a) => {
    const k = f(a)

    return Object.assign(acc, {
      [k]: acc.hasOwnProperty(k) ? [...acc[k], a] : [a]
    })
  }, {})
}

function head (arr) {
  return arr[0]
}

function includes (a, arr) {
  return arr.includes(a)
}

function init (arr) {
  return arr.slice(0, -1)
}

function isEmpty (arr) {
  return !arr.length
}

function last (arr) {
  return arr[arr.length - 1]
}

function length (arr) {
  return arr.length
}

function map (f, arr) {
  return arr.map(f)
}

function max (arr) {
  return arr.reduce((a, b) => a >= b ? a : b)
}

function maxBy (f, arr) {
  return arr.reduce((a, b) => f(a) >= f(b) ? a : b)
}

function min (arr) {
  return arr.reduce((a, b) => a <= b ? a : b)
}

function minBy (f, arr) {
  return arr.reduce((a, b) => f(a) <= f(b) ? a : b)
}

function partition (f, arr) {
  return arr.reduce(([a, b], v) => {
    return f(v) ? [[...a, v], b] : [a, [...b, v]]
  }, [[], []])
}

function prepend (a, b) {
  return [a, ...b]
}

function range (a, b) {
  const arr = []

  for (let i = a, len = b; i < len; i++) {
    arr.push(i)
  }

  return arr
}

function reduce (f, init, arr) {
  return arr.reduce(f, init)
}

function reject (f, arr) {
  return arr.filter(v => !f(v))
}

function reverse (arr) {
  return [...arr].reverse()
}

function scan (f, init, arr) {
  return arr.reduce((acc, a) => {
    return [...acc, f(acc[acc.length - 1], a)]
  }, [init])
}

function slice (a, b, arr) {
  return arr.slice(a, b)
}

function some (f, arr) {
  return arr.some(f)
}

function sort (f, arr) {
  return [...arr].sort(f)
}

function sortBy (f, arr) {
  return [...arr].sort((a, b) => {
    const x = f(a)
    const y = f(b)

    return x > y ? 1 : x < y ? -1 : 0
  })
}

function tail (arr) {
  return arr.slice(1)
}

function take (n, arr) {
  return arr.slice(0, n)
}

function unique (arr) {
  return Object.values(arr.reduce((acc, a) => {
    return acc.hasOwnProperty(a) ? acc : Object.assign(acc, {
      [a]: a
    })
  }, {}))
}

function uniqueBy (f, arr) {
  return Object.values(arr.reduce((acc, a) => {
    const k = f(a)

    return acc.hasOwnProperty(k) ? acc : Object.assign(acc, {
      [k]: a
    })
  }, {}))
}

function zip (a, b) {
  const arr = a.length < b.length ? a : b

  return arr.reduce((acc, _, i) => {
    return Object.assign(acc, {
      [a[i]]: b[i]
    })
  }, {})
}

module.exports = {
  append: curry(2, append),
  concat,
  concatMap: curry(2, concatMap),
  countBy: curry(2, countBy),
  drop: curry(2, drop),
  every: curry(2, every),
  filter: curry(2, filter),
  find: curry(2, find),
  findIndex: curry(2, findIndex),
  get: curry(2, get),
  gets: curry(2, gets),
  groupBy: curry(2, groupBy),
  head,
  includes: curry(2, includes),
  init,
  isEmpty,
  last,
  length,
  map: curry(2, map),
  max,
  maxBy: curry(2, maxBy),
  min,
  minBy: curry(2, minBy),
  partition: curry(2, partition),
  prepend: curry(2, prepend),
  range: curry(2, range),
  reduce: curry(3, reduce),
  reject: curry(2, reject),
  reverse,
  scan: curry(3, scan),
  slice: curry(3, slice),
  some: curry(2, some),
  sort: curry(2, sort),
  sortBy: curry(2, sortBy),
  tail,
  take: curry(2, take),
  unique,
  uniqueBy: curry(2, uniqueBy),
  zip: curry(2, zip)
}
