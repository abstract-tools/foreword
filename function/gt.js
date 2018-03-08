const curry = require('./curry');

// gt :: a -> a -> Boolean
module.exports = curry((a, b) => {
  return b > a;
});
