const curry = require('../function/curry');

// join :: String -> Array String -> String
module.exports = curry(2, (str = '', arr = []) => {
  return arr.join(str);
});
