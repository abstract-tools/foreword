const test = require('tape');
const add = require('../../number/add');

test('number add', t => {
  const result = add(1, 1);

  t.same(result, 2);
  t.end();
});
