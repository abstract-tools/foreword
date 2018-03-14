const curry = require('./curry');

// pipe :: Array (a -> b) -> a -> b
const pipe = curry(2, function pipe (arr = [], a) {
  return arr.reduce((acc, f) => f(acc), a);
});

module.exports = pipe;
