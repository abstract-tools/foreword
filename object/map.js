const curry = require('../function/curry');

// map :: Object k (a -> b) -> Object k v -> Object k v
module.exports = curry((spec, obj) => {
  return Object.assign({}, obj, Object.keys(spec).reduce((acc, key) => {
    return (obj[key] === undefined) ? acc : Object.assign({}, acc, {
      [key]: spec[key](obj[key])
    });
  }, {}));
});
