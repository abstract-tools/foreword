const curry = require('./curry');

// compose :: (b -> c) -> (a -> b) -> a -> c
const compose = curry(3, function compose (f = x => x, g = x => x, a) {
  return f(g(a));
});

module.exports = compose;
