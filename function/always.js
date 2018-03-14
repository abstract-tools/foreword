const curry = require('./curry');

// always :: a -> b -> a
module.exports = curry(2, (a, b) => {
  return a;
});
