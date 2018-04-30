function concat (arr) {
  return arr.reduce((acc, a) => acc.concat(a), [])
}

module.exports = concat
