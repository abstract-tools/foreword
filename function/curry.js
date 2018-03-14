// curry :: Number -> ((a, b) -> c) -> a -> b -> c
const curry = function curry (n = 0, f, ...args) {
  if (n <= 0) {
    return f(...args);
  }

  return (...rest) => {
    return curry(n - rest.length, f, ...args, ...rest);
  };
};

module.exports = curry;
