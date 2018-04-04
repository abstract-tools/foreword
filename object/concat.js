function concat (arr = []) {
  return arr.reduce((a, b) => Object.assign(a, b), {})
}

module.exports = concat
