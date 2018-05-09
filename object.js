const curry = require('./curry')

function concat (arr) {
  return arr.reduce((acc, a) => Object.assign(acc, a), {})
}

function every (a, b) {
  return Object.keys(a).every(k => {
    return b.hasOwnProperty(k) ? a[k](b[k]) : false
  })
}

function filter (keys, obj) {
  return keys.reduce((acc, k) => {
    return Object.assign(acc, {
      [k]: obj[k]
    })
  }, {})
}

function find ([key, ...rest], obj) {
  if (!rest.length) {
    return obj[key]
  }

  if (obj[key] == null) {
    return undefined
  }

  return find(rest, obj[key])
}

function get (k, obj) {
  return obj[k]
}

function gets (keys, obj) {
  return keys.map(k => obj[k])
}

function includes (k, obj) {
  return obj.hasOwnProperty(k)
}

function isEmpty (obj) {
  return !Object.keys(obj).length
}

function length (obj) {
  return Object.keys(obj).length
}

function map (a, b) {
  return Object.assign({}, b, Object.keys(a).reduce((acc, k) => {
    return !b.hasOwnProperty(k) ? acc : Object.assign(acc, {
      [k]: a[k](b[k])
    })
  }, {}))
}

function reject (keys, obj) {
  return Object.keys(obj).reduce((acc, k) => {
    return keys.includes(k) ? acc : Object.assign(acc, {
      [k]: obj[k]
    })
  }, {})
}

function some (a, b) {
  return Object.keys(a).some(k => {
    return b.hasOwnProperty(k) ? a[k](b[k]) : false
  })
}

function update (a, b) {
  return Object.assign({}, b, a)
}

module.exports = {
  concat,
  every: curry(2, every),
  filter: curry(2, filter),
  find: curry(2, find),
  get: curry(2, get),
  gets: curry(2, gets),
  includes: curry(2, includes),
  isEmpty,
  length,
  map: curry(2, map),
  reject: curry(2, reject),
  some: curry(2, some),
  update: curry(2, update)
}
