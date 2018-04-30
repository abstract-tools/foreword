function flatten (arr) {
  return arr.reduce((acc, a) => {
    return acc.concat(Array.isArray(a) ? flatten(a) : a)
  }, [])
}

module.exports = flatten
