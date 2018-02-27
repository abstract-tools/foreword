const test = require('tape');
const thrush = require('../../function/thrush');

test('function thrush: applies function to value', t => {
  const result = thrush(1, x => x + 1);

  t.same(result, 2);
  t.end();
});
