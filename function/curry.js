// curry :: Number -> ((a, b) -> c) -> a -> b -> c
const curry = (n = 0, f, ...args) => {
  if (!n) {
    return f(...args);
  }

  return (...rest) => {
    return curry(n - rest.length, f, ...args, ...rest);
  };
};

module.exports = curry;
