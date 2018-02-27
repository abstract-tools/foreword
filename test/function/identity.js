const test = require('tape');
const identity = require('../../function/identity');

test('function identity: returns itself', t => {
  const result = identity('a');

  t.same(result, 'a');
  t.end();
});
