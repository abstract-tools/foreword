const test = require('tape');
const gt = require('../../function/gt');

test('function gt', t => {
  const result = gt(0, 1);

  t.same(result, true);
  t.end();
});
