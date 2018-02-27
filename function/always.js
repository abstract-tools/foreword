const curry = require('./curry');

// always :: a -> b -> a
module.exports = curry((a, b) => {
  return a;
});
