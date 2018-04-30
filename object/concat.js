function concat (arr) {
  return arr.reduce((acc, a) => Object.assign(acc, a), {})
}

module.exports = concat
