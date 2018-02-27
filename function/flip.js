const curry = require('./curry');

// flip : (a -> b -> c) -> b -> a -> c
module.exports = curry((f, a, b) => {
  return f(b, a);
});
