const test = require('tape');
const lte = require('../../function/lte');

test('function lte', t => {
  t.same(lte(1, 1), true);
  t.same(lte(2, 1), true);

  t.end();
});
