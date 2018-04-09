function curry (n, f, ...args) {
  if (n <= 0) {
    return f(...args)
  }

  return (...rest) => {
    return curry(n - rest.length, f, ...args, ...rest)
  }
}

module.exports = curry
