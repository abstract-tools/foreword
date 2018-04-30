function unique (arr) {
  return Object.values(arr.reduce((acc, a) => {
    return acc.hasOwnProperty(a) ? acc : Object.assign(acc, {
      [a]: a
    })
  }, {}))
}

module.exports = unique
