const test = require('tape');
const withDefault = require('../../maybe/withDefault');

test('maybe withDefault: returns first value if second is null', t => {
  const result = withDefault(1, null);

  t.same(result, 1);
  t.end();
});

test('maybe withDefault: returns second value if not null', t => {
  const result = withDefault(1, 2);

  t.same(result, 2);
  t.end();
});
