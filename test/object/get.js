const test = require('tape');
const get = require('../../object/get');

test('object get: return object value by key', t => {
  const result = get('a', {a:1,b:2});

  t.same(result, 1);
  t.end();
});
