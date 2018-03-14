const curry = require('./curry');

// complement :: (a -> Boolean) -> a -> Boolean
const complement = curry(2, function complement (f = x => x, a) {
  return !f(a);
});

module.exports = complement;
