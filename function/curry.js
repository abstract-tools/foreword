// curry :: ((a, b) -> c) -> a -> b -> c
const curry = (f, ...args) => {
  if (f.length <= args.length) {
    return f(...args);
  }

  return (...rest) => {
    return curry(f, ...args, ...rest);
  };
};

module.exports = curry;
