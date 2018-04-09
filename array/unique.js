function unique (arr) {
  return Object.values(arr.reduce((a, b) => {
    return a[b] ? a : Object.assign(a, {
      [b]: b
    })
  }, {}))
}

module.exports = unique
