const curry = require('./curry');

// always :: a -> b -> a
const always = curry(2, function always (a, b) {
  return a;
});

module.exports = always;
