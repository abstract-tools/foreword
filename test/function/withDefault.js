const test = require('tape');
const withDefault = require('../../function/withDefault');

test('function withDefault: returns first value if second is null', t => {
  const result = withDefault(1, null);

  t.same(result, 1);
  t.end();
});

test('function withDefault: returns second value if not null', t => {
  const result = withDefault(1, 2);

  t.same(result, 2);
  t.end();
});
