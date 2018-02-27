const test = require('tape');
const apply = require('../../function/apply');

test('function apply: applies function to value', t => {
  const result = apply(x => x + 1, 1);

  t.same(result, 2);
  t.end();
});
