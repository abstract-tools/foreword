// concat :: [{k: v}] -> {k: v}
function concat (arr) {
  return arr.reduce((acc, a) => Object.assign(acc, a), {})
}

// every :: {k: (v -> Boolean)} -> {k: v} -> Boolean
function every (a) {
  return b => Object.keys(a).every(k => {
    return b.hasOwnProperty(k) ? a[k](b[k]) : false
  })
}

// filter :: [k] -> {k: v} -> {k: v}
function filter (ks) {
  return obj => ks.reduce((acc, k) => {
    return Object.assign(acc, {
      [k]: obj[k]
    })
  }, {})
}

// find :: [k] -> {k: v} -> v?
function find ([key, ...rest]) {
  return obj => {
    if (!rest.length) {
      return obj[key]
    }

    if (obj[key] == null) {
      return undefined
    }

    return find(rest)(obj[key])
  }
}

// get :: k -> {k: v} -> v?
function get (k) {
  return obj => obj[k]
}

// gets :: [k] -> {k: v} -> [v?]
function gets (ks) {
  return obj => ks.map(k => obj[k])
}

// includes :: k -> {k: v} -> Boolean
function includes (k) {
  return obj => obj.hasOwnProperty(k)
}

// isEmpty :: {k: v} -> Boolean
function isEmpty (obj) {
  return !Object.keys(obj).length
}

// length :: {k: v} -> Number
function length (obj) {
  return Object.keys(obj).length
}

// map :: {k: (a -> b)} -> {k: a} -> {k: b}
function map (a) {
  return b => Object.assign({}, b, Object.keys(a).reduce((acc, k) => {
    return !b.hasOwnProperty(k) ? acc : Object.assign(acc, {
      [k]: a[k](b[k])
    })
  }, {}))
}

// reject :: [k] -> {k: v} -> {k: v}
function reject (ks) {
  return obj => Object.keys(obj).reduce((acc, k) => {
    return ks.includes(k) ? acc : Object.assign(acc, {
      [k]: obj[k]
    })
  }, {})
}

// some :: {k: (v -> Boolean)} -> {k: v} -> Boolean
function some (a) {
  return b => Object.keys(a).some(k => {
    return b.hasOwnProperty(k) ? a[k](b[k]) : false
  })
}

// update :: {k: v} -> {k: v} -> {k: v}
function update (a) {
  return b => Object.assign({}, b, a)
}

module.exports = {
  concat,
  every,
  filter,
  find,
  get,
  gets,
  includes,
  isEmpty,
  length,
  map,
  reject,
  some,
  update
}
