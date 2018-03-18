# (a -> b)
A library for data transformation.

`npm install @bchar/a-to-b`

#### Why (a -> b)
- Ability to partially apply all functions, allowing you to write smaller, cleaner code.
- Restrict functions to one type of data.
- Leverage type separation into a more interesting interface, such as [A.map](#array-map) and [O.map](#object-map).
- Provide useful functions for handling unwanted values.
- Ensure correctness of transformations, not allowing references to be mutated.

A benefit of this approach is that `(a -> b)` will have no trouble adding functions for new types in the future, like `Map` or `Set`.


## <a name="array"></a>Array
```javascript
const A = require('@bchar/a-to-b/array')
```

### <a name="array-append"></a>append
`Array a -> Array a -> Array a`

Combines two arrays.

```javascript
A.append([4], [1, 2, 3])
//=> [ 1, 2, 3, 4 ]
```

### <a name="array-compact"></a>compact
`Array a -> Array a`

Returns an array of only truthy values.

```javascript
A.compact([0, 1, true, false, 'hey', null])
//=> [ 1, true, 'hey' ]
```

### <a name="array-concat"></a>concat
`Array a -> Array a`

Concatenate an array of arrays into a single array, removing one level of nesting.

```javascript
A.concat([[1, 2], [3], [4, 5]])
//=> [ 1, 2, 3, 4, 5 ]
```

### <a name="array-difference"></a>difference
`Array a -> Array a -> Array a`

Returns an array with the elements present in the first that are not in the second.

```javascript
A.difference([1, 2, 3], [1])
//=> [ 2, 3 ]
```

### <a name="array-drop"></a>drop
`Number -> Array a -> Array a`

Drops the first n elements in an array.

```javascript
A.drop(2, [1, 2, 3, 4, 5])
//=> [ 3, 4, 5 ]
```

### <a name="array-dropWhile"></a>dropWhile
`(a -> Boolean) -> Array a -> Array a`

Drops the first items of an array which match the predicate.

```javascript
A.dropWhile(N.isEven, [2, 4, 5, 6])
//=> [ 5, 6 ]
```

### <a name="array-every"></a>every
`(a -> Boolean) -> Array a -> Boolean`

Determines if every element satisfies the predicate.

```javascript
A.every(F.equals(1), [1, 1, 1])
//=> true

A.every(F.equals('a'), ['a', 'b', 'c'])
//=> false
```

### <a name="array-filter"></a>filter
`(a -> Boolean) -> Array a -> Array a`

Returns an array of every element that matches the predicate.

```javascript
A.filter(F.equals(1), [1, 2, 3])
//=> [ 1 ]
```

### <a name="array-find"></a>find
`(a -> Boolean) -> Array a -> Maybe a`

Returns the value of the first element that matches the predicate, or `undefined` if it does not exist.

```javascript
A.find(F.equals(1), [1, 2, 3])
//=> 1
```

### <a name="array-flatten"></a>flatten
`Array a -> Array a`

Recursively flattens an array of arrays.

```javascript
A.flatten([1, [[2], 3], [4, [[5]]]])
//=> [ 1, 2, 3, 4, 5 ]
```

### <a name="array-groupBy"></a>groupBy
`(a -> b) -> Array a -> Object k (Array a)`

Returns an object with keys as the result of applying a function to elements, and the value is an array of every matched element.

```javascript
A.groupBy(Math.floor, [4.2, 6.1, 6.4])
//=> { '4': [ 4.2 ], '6':  [ 6.1, 6.4 ] }
```

### <a name="array-head"></a>head
`Array a -> Maybe a`

Returns the first element in an array.

```javascript
A.head([1, 2, 3, 4, 5])
//=> 1

A.head([])
//=> undefined
```

### <a name="array-includes"></a>includes
`a -> Array a -> Boolean`

Determines if an array contains a value.

```javascript
A.includes('a', ['a', 'b', 'c'])
//=> true
```

### <a name="array-init"></a>init
`Array a -> Array a`

Returns every element except the last.

```javascript
A.init([1, 2, 3, 4, 5])
//=> [ 1, 2, 3, 4 ]
```

### <a name="array-intersection"></a>intersection
`Array a -> Array a -> Array a`

Returns an array containing elements present in both arrays.

```javascript
A.intersection([1, 2, 3], [2, 3, 4, 5])
//=> [ 2, 3 ]
```

### <a name="array-isEmpty"></a>isEmpty
`Array a -> Boolean`

Determines if an array contains any elements.

```javascript
A.isEmpty([1])
//=> false
```

### <a name="array-last"></a>last
`Array a -> Maybe a`

Returns the last element in an array.

```javascript
A.last([1, 2, 3, 4, 5])
//=> 5

A.last([])
//=> undefined
```

### <a name="array-length"></a>length
`Array a -> Number`

Returns the number of elements in an array.

```javascript
A.length([1, 2, 3])
//=> 3
```

### <a name="array-map"></a>map
`(a -> b) -> Array a -> Array b`

Applies a function over every element in an array.

```javascript
A.map(O.get('a'), [{a: 1}, {a: 2}, {a: 3}])
//=> [ 1, 2, 3 ]
```

### <a name="array-max"></a>max
`Array a -> Maybe a`

Returns the highest value element in an array.

```javascript
A.max([1, 2, 3])
//=> 3
```

### <a name="array-maxBy"></a>maxBy
`(a -> b) -> Array a -> Maybe a`

Returns the highest value element in an array.

```javascript
A.maxBy(S.length, ['bc', 'abc', 'a', 'b'])
//=> 'abc'
```

### <a name="array-mean"></a>mean
`Array Number -> Maybe Number`

Returns the mean of the elements in an array.

```javascript
A.mean([1, 2, 3, 4, 5])
//=> 3
```

### <a name="array-min"></a>min
`Array a -> Maybe a`

Returns the lowest value element in an array.

```javascript
A.min([3, 2, 1])
//=> 1
```

### <a name="array-minBy"></a>minBy
`(a -> b) -> Array a -> Maybe a`

Returns the lowest value element in an array after applying a function to the element.

```javascript
A.minBy(S.length, ['bc', 'abc', 'a', 'b'])
//=> 'a'
```

### <a name="array-partition"></a>partition
`(a -> Boolean) -> Array a -> Array (a, a)`

Equivalent to `[filter(f, arr), reject(f, arr)]`.

```javascript
A.partition(N.isEven, [1, 2, 3, 4, 5])
//=> [ [ 2, 4 ], [ 1, 3, 5 ] ]
```

### <a name="array-product"></a>product
`Array Number -> Number`

Returns the product of the elements in an array.

```javascript
A.product([1, 2, 3])
//=> 6
```

### <a name="array-reduce"></a>reduce
`(a -> b -> b) -> b -> Array a -> b`

Applies a function over an accumulator and every element in an array, returning the result as a single value.

```javascript
A.reduce(N.add, 0, [1, 2, 3])
//=> 6
```

### <a name="array-reject"></a>reject
`(a -> Boolean) -> Array a -> Array a`

Returns an array of all elements that do not match the predicate.

```javascript
A.reject(N.isEven, [1, 2, 3, 4, 5])
//=> [ 1, 3, 5 ]
```
 
### <a name="array-reverse"></a>reverse
`Array a -> Array a`

Returns a new array with the elements in reverse order.

```javascript
A.reverse([1, 2, 3])
//=> [ 3, 2, 1 ]
```

### <a name="array-scan"></a>scan
`(a -> b -> b) -> b -> Array a -> Array b`

Like `reduce`, but returns a list with the initial value, the intermediate values, and the final value.

```javascript
A.scan(N.add, 0, [1, 2, 3])
//=> [ 0, 1, 3, 6 ]
```

### <a name="array-slice"></a>slice
`Number -> Number -> Array a -> Array a`

Returns a subset of an array, providing starting and ending indexes.

```javascript
A.slice(1, 3, [1, 2, 3, 4, 5])
//=> [ 2, 3 ]
```

### <a name="array-some"></a>some
`(a -> Boolean) -> Array a -> Boolean`

Determines if any elements match the predicate.

```javascript
A.some(F.equals(1), [1, 2, 3])
//=> true
```

### <a name="array-sort"></a>sort
`((a, a) -> Number) -> Array a -> Array a`

Returns a sorted array, given a comparison function.

```javascript
A.sort((a, b) => a - b, [5, 39, 1])
//=> [ 1, 5, 39 ]
```

### <a name="array-sortBy"></a>sortBy
`(a -> b) -> Array a -> Array a`

Sort an array by applying a function to elements.

```javascript
A.sortBy(S.length, ['abc', 'a', 'ab'])
//=> [ 'a', 'ab', 'abc' ]

A.sortBy(O.get('name'), [{ name: 'bob'}, { name: 'alice' }, { name: 'charlie' }])
//=> [ { name: 'alice' }, { name: 'bob' }, { name: 'charlie' } ]
```

### <a name="array-span"></a>span
`(a -> Boolean) -> Array a -> Array (a, a)`

Equivalent to `[takeWhile(f, arr), dropWhile(f, arr)]`.

```javascript
A.span(N.isEven, [2, 4, 5, 6])
//=> [ [ 2, 4 ], [ 5, 6 ] ]
```

### <a name="array-sum"></a>sum
`Array Number -> Number`

Sums up the elements in an array.

```javascript
A.sum([1, 2, 3, 4, 5])
//=> 15
```

### <a name="array-tail"></a>tail
`Array a -> Array a`

Returns every element except the first.

```javascript
A.tail([1, 2, 3, 4, 5])
//=> [ 2, 3, 4, 5 ]
```

### <a name="array-take"></a>take
`Number -> Array a -> Array a`

Returns the first n elements in an array.

```javascript
A.take(2, [1, 2, 3, 4, 5])
//=> [ 1, 2 ]
```

### <a name="array-takeWhile"></a>takeWhile
`(a -> Boolean) -> Array a -> Array a`

Returns the first elements in an array which match the predicate.

```javascript
A.takeWhile(N.isEven, [2, 4, 5, 6])
//=> [ 2, 4 ]
```

### <a name="array-union"></a>union
`Array a -> Array a -> Array a`

Returns an array of unique elements in both arrays.

```javascript
A.union([1, 5, 7], [3, 5])
//=> [ 1, 5, 7, 3 ]
```

### <a name="array-unique"></a>unique
`Array a -> Array a`

Returns a list of unique elements.

```javascript
A.unique([1, 1, 1, 3, 5, 5, 9])
//=> [ 1, 3, 5, 9 ]
```

### <a name="array-uniqueBy"></a>uniqueBy
`(a -> b) -> Array a -> Array a`

Returns an array of unique values from the applied function.

```javascript
A.uniqueBy(S.length, ['and', 'here', 'are', 'some', 'words'])
//=> [ 'and', 'here', 'words' ]
```


## <a name="function"></a>Function
```javascript
const F = require('@bchar/a-to-b/function')
```

### <a name="function-always"></a>always
`a -> b -> a`

Returns its first argument.

```javascript
always('a', 'b')
//=> 'a'
```

### <a name="function-and"></a>and
`Boolean -> Boolean -> Boolean`

Returns `true` if both values are `true`.

```javascript
and(true, false)
//=> false
```

### <a name="function-ap"></a>ap
`Array (a -> b) -> Array a -> Array b`

Applies a list of functions over a list of values.

```javascript
ap([N.mul(2), N.add(3)], [1, 2, 3])
//=> [ 2, 4, 6, 4, 5, 6 ]
```

### <a name="function-apply"></a>apply
`(a -> b) -> a -> b`

Applies function to value.

```javascript
apply(N.add(1), 1)
//=> 2
```

### <a name="function-both"></a>both
`(a -> Boolean) -> (a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `and` comparison. Short-circuits if the first predicate returns false.

```javascript
const test = both(gt(10), lt(20))

test(15)
//=> true

test(30)
//=> false
```

### <a name="function-complement"></a>complement
`(a -> Boolean) -> a -> Boolean`

Returns the opposite boolean value that the predicate returned.

```javascript
complement(equals(1), 1)
//=> false
```

### <a name="function-compose"></a>compose
`(b -> c) -> (a -> b) -> a -> c`

Applies value through two functions, from right to left.

```javascript
compose(Math.sqrt, N.add(1), 99)
//=> 10
```

### <a name="function-cond"></a>cond
`Array (a -> Boolean, a -> b) -> a -> b`

Contains predicate and transformer pairs, to determine which transformer to apply over a value.

```javascript
cond([
  [lt(1), N.inc],
  [gt(1), N.dec],
  [always(true), identity]
], 10)
//=> 9
```

### <a name="function-curry"></a>curry
`Number -> ((a, b) -> c) -> a -> b -> c`

Wraps a function and allows you to supply your arguments one at a time.

```javascript
const add = curry(2, (a, b) => a + b)
const add1 = add(1)
add1(1)
//=> 2
```

### <a name="function-either"></a>either
`(a -> Boolean) -> (a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `or` comparison. Short-circuits if the first predicate returns true.

```javascript
const test = either(gt(10), N.isEven)

test(15)
//=> true

test(5)
//=> false

test(4)
//=> true
```

### <a name="function-equals"></a>equals
`a -> a -> Boolean`

Returns the result of comparing two values.

```javascript
equals('abc', 'abc')
//=> true

equals('abc', 'xyz')
//=> false
```

### <a name="function-flip"></a>flip
`(a -> b -> c) -> b -> a -> c`

Reverses the order of the first two arguments of the provided function.

```javascript
const prepend = flip(A.append)
prepend([1], [2, 3, 4])
//=> [ 1, 2, 3, 4 ]
```

### <a name="function-gt"></a>gt
`a -> a -> Boolean`

Determines if a value is greater.

```javascript
gt(1, 2)
//=> true
```

### <a name="function-gte"></a>gte
`a -> a -> Boolean`

Determines if a value is greater than or equal.

```javascript
gte(1, 1)
//=> true

gte(1, 2)
//=> true
```

### <a name="function-identity"></a>identity
`a -> a`

Returns itself.

```javascript
identity('a')
//=> 'a'

A.filter(identity, [0, 1, null, 'test'])
//=> [ 1, 'test' ]
```

### <a name="function-lt"></a>lt
`a -> a -> Boolean`

Determines if a value is lesser.

```javascript
lt(2, 1)
//=> true
```

### <a name="function-lte"></a>lte
`a -> a -> Boolean`

Determines if a value is less than or equal.

```javascript
lte(1, 1)
//=> true

lte(2, 1)
//=> true
```

### <a name="function-not"></a>not
`Boolean -> Boolean`

Returns the opposite boolean value.

```javascript
not(true)
//=> false

not(A.some(equals(1), [1, 2, 3]))
//=> false
```

### <a name="function-on"></a>on
`(b -> b -> c) -> (a -> b) -> a -> a -> c`

Applies a binary function over a unary function twice.

```javascript
const sameLength = on(equals, S.length)
sameLength('hey', 'now')
//=> true
```

### <a name="function-or"></a>or
`Boolean -> Boolean -> Boolean`

Returns `true` if one or both values are `true`.

```javascript
or(true, false)
//=> true
```

### <a name="function-pipe"></a>pipe
`Array (a -> b) -> a -> b`

Applies a sequence of transformations over a value.

```javascript
pipe([N.add(1), Math.sqrt], 99)
//=> 10
```

### <a name="function-when"></a>when
`(a -> Boolean) -> (a -> b) -> a -> b`

If the predicate is matched, run a transformer function, otherwise return the original value.

```javascript
when(lt(10), N.inc, 5)
//=> 6
```


## <a name="maybe"></a>Maybe
A set of functions for dealing with unwanted values.

```javascript
const M = require('@bchar/a-to-b/maybe')
```

### <a name="maybe-andThen"></a>andThen
`(a -> Maybe b) -> Maybe a -> Maybe b`

Applies function to value, if value exists, or returns value.

```javascript
M.andThen(N.add(1), 1)
//=> 2

M.andThen(N.add(1), undefined)
//=> undefined

pipe([
  M.andThen(A.head),
  M.andThen(N.multiply(2)),
  M.andThen(N.isEven)
], [])
//=> undefined
```

### <a name="maybe-withDefault"></a>withDefault
`a -> Maybe a -> a`

Returns the first value, if the second does not exist.

```javascript
M.withDefault(1, undefined)
//=> 1

M.withDefault(1, 10)
//=> 10
```


## <a name="number"></a>Number
```javascript
const N = require('@bchar/a-to-b/number')
```

### <a name="number-add"></a>add
`Number -> Number -> Number`

Adds two numbers.

```javascript
N.add(2, 2)
//=> 4
```

### <a name="number-clamp"></a>clamp
`Number -> Number -> Number -> Number`

Retricts a number to be within a range.

```javascript
const test = clamp(1, 10)
test(0)
//=> 1

test(20)
//=> 10

test(5)
//=> 5
```

### <a name="number-dec"></a>dec
`Number -> Number`

Decrements a number.

```javascript
N.dec(10)
//=> 9
```

### <a name="number-divide"></a>divide
`Number -> Number -> Number`

Divides two numbers.

```javascript
N.divide(2, 10)
//=> 5
```

### <a name="number-gcd"></a>gcd
`Number -> Number -> Number`

Greatest common denominator.

```javascript
N.gcd(12, 18)
//=> 6
```

### <a name="number-inc"></a>inc
`Number -> Number`

Increments a number.

```javascript
N.inc(10)
//=> 11
```

### <a name="number-isEven"></a>isEven
`Number -> Boolean`

Determines if a number is even.

```javascript
N.isEven(10)
//=> true
```

### <a name="number-isOdd"></a>isOdd
`Number -> Boolean`

Determines if a number is odd.

```javascript
N.isOdd(9)
//=> true
```

### <a name="number-lcm"></a>lcm
`Number -> Number -> Number`

Least common multiple.

```javascript
N.lcm(12, 18)
//=> 36
```

### <a name="number-max"></a>max
`Number -> Number -> Number`

Returns the larger number.

```javascript
max(4, 9)
//=> 9
```

### <a name="number-min"></a>min
`Number -> Number -> Number`

Returns the smaller number.

```javascript
min(4, 9)
//=> 4
```

### <a name="number-mod"></a>mod
`Number -> Number -> Number`

Behaves like the mathematical modulo operator.

```javascript
N.mod(-20, 3)
//=> 1
```

### <a name="number-multiply"></a>multiply
`Number -> Number -> Number`

Multiplies two numbers.

```javascript
N.multiply(2, 5)
//=> 10
```

### <a name="number-negate"></a>negate
`Number -> Number`

Negated number.

```javascript
N.negate(10)
//=> -10
```

### <a name="number-pow"></a>pow
`Number -> Number -> Number`

Returns the power.

```javascript
N.pow(2, -2)
//=> 4
```

### <a name="number-rem"></a>rem
`Number -> Number -> Number`

Returns the remainder.

```javascript
N.rem(3, -20)
//=> -2
```

### <a name="number-subtract"></a>subtract
`Number -> Number -> Number`

Subtracts two numbers.

```javascript
N.subtract(2, 10)
//=> 8
```

## <a name="object"></a>Object
```javascript
const O = require('@bchar/a-to-b/object')
```

### <a name="object-filter"></a>filter
`Array k -> Object k v -> Object k v`

Returns a subset of an object, with only the specified keys.

```javascript
O.filter(['id', 'name'], { id: 123, name: 'bob', test: 'testing' })
//=> { id: 123, name: 'bob' }

A.map(O.filter(['id']), [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
//=> [ { id: 1 }, { id: 2 } ]
```

### <a name="object-get"></a>get
`k -> Object k v -> Maybe v`

Returns the property of an object, if it exists.

```javascript
O.get('a', { a: 'test' })
//=> 'test'

A.map(O.get('a'), [{ a: 1}, { a: 2 }, { a: 3 }])
//=> [ 1, 2, 3 ]
```

### <a name="object-gets"></a>gets
`Array k -> Object k v -> Array (Maybe v)`

Returns an array of values where Object k is found. 

```javascript
O.gets(['a', 'b'], { a: 1, b: 2 })
//=> [ 1, 2 ]
```

### <a name="object-includes"></a>includes
`k -> Object k v -> Boolean`

Determines if an object contains a key.

```javascript
O.includes('a', { a: 1, b: 2 })
//=> true
```

### <a name="object-isEmpty"></a>isEmpty
`Object k v -> Boolean`

Determines if an object contains any keys.

```javascript
O.isEmpty({})
//=> true
```

### <a name="object-keys"></a>keys
`Object k v -> Array k`

Returns an array of every key in an object.

```javascript
O.keys({ a: 1, b: 2 })
//=> [ 'a', 'b' ]
```

### <a name="object-map"></a>map
`Object k (a -> b) -> Object k a -> Object k b`

Returns an object with transformations applied over specified keys.

```javascript
O.map({ ms: N.inc }, { id: 123, ms: 999 })
//=> { id: 123, ms: 1000 }
```

### <a name="object-path"></a>path
`Array k -> Object k v -> Maybe v`

Returns a value from a nested object path.

```javascript
O.path(['a', 'b', 'c'], {a: {b: {c: 1}}})
//=> 1
```

### <a name="object-reject"></a>reject
`Array k -> Object k v -> Object k v`

Returns an object, without the keys specified.

```javascript
O.reject(['name', 'test'], { id: 123, name: 'alice', test: 'test' })
//=> { id: 123 }

A.map(O.reject(['id']), [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
//=> [ { name: 'alice' }, { name: 'bob' } ]
```

### <a name="object-update"></a>update
`Object k v -> Object k v -> Object k v`

Creates a new object with values from the first argument merged over the second argument.

```javascript
O.update({ a: true }, { a: false })
//=> { a: true }
```

### <a name="object-values"></a>values
`Object k v -> Array v`

Returns an array of every value in an object.

```javascript
O.values({ a: 1, b: 2 })
//=> [ 1, 2 ]
```

### <a name="object-where"></a>where
`Object k (v -> Boolean) -> Object k v -> Boolean`

Returns whether every key matches the predicate.

```javascript
const test = O.where({
  a: F.equals('foo'),
  b: F.not(F.equals('bar')),
  x: F.gt(10),
  y: F.lt(20)
})

test({ a: 'foo', b: 'baz', x: 15, y: 15 })
//=> true

test({ a: 'foo', b: 'baz': x: 10, y: 15 })
//=> false
```


## <a name="string"></a>String
```javascript
const S = require('@bchar/a-to-b/string')
```

### <a name="string-append"></a>append
`String -> String -> String`

Combine two strings.

```javascript
S.append('ing', 'append')
//=> 'appending'
```

### <a name="string-capitalize"></a>capitalize
`String -> String`

Capitalize a string.

```javascript
S.capitalize('hello, world!')
//=> 'Hello, world!'
```

### <a name="string-chars"></a>chars
`String -> Array String`

Returns an array of every character in a string.

```javascript
S.chars('hello!')
//=> [ 'h', 'e', 'l', 'l', 'o', '!' ]
```

### <a name="string-concat"></a>concat
`Array String -> String`

Combines a list of strings into one string.

```javascript
S.concat(['a', 'b', 'c'])
//=> 'abc'
```

### <a name="string-drop"></a>drop
`Number -> String -> String`

Drops the first n elements in a string.

```javascript
S.drop(3, 'mmmhmmm')
//=> 'hmmm'
```

### <a name="string-dropWhile"></a>dropWhile
`(String -> Boolean) -> String -> String`

Drops the first elements of a string that pass the predicate.

```javascript
S.dropWhile(equals('m'), 'mmmhmm')
//=> 'hmm'
```

### <a name="string-includes"></a>includes
`String -> String -> Boolean`

Determines if a string contains a substring.

```javascript
S.includes('abc', 'abcdef')
//=> true
```

### <a name="string-isEmpty"></a>isEmpty
`String -> Boolean`

Determines if a string contains any characters.

```javascript
S.isEmpty('abc')
//=> false
```

### <a name="string-join"></a>join
`String -> Array String -> String`

Joins every element in an array with a string, creating a single string.

```javascript
S.join(':', ['a', 'b', 'c'])
//=> 'a:b:c'
```

### <a name="string-length"></a>length
`String -> Number`

Returns the number of values in a string.

```javascript
S.length('abc')
//=> 3
```

### <a name="string-lines"></a>lines
`String -> Array String`

Creates an array from a string that might contain line breaks.

```javascript
S.lines('foo\nbar\nbar')
//=> [ 'foo', 'bar', 'baz' ]
```

### <a name="string-repeat"></a>repeat
`Number -> String -> String`

Repeated a string n amount of times.

```javascript
S.repeat(3, 'abc')
//=> 'abcabcabc'
```

### <a name="string-reverse"></a>reverse
`String -> String`

Reverses the order of a string.

```javascript
S.reverse('abc')
//=> 'cba'
```

### <a name="string-slice"></a>slice
`Number -> Number -> String -> String`

Returns a subset of a string, given starting and ending indexes.

```javascript
S.slice(1, 3, 'abcdef')
//=> 'bc'
```

### <a name="string-span"></a>span
`(String -> Boolean) -> String -> Array (String, String)`

Equivalent to `[takeWhile(f, str), dropWhile(f, str)]`.

```javascript
S.span(F.equals('m'), 'mmmhmm')
//=> [ 'mmm', 'hmm' ]
```

### <a name="string-split"></a>split
`String -> String -> Array String`

Splits a string into an array of substrings.

```javascript
S.split(':', 'a:b:c')
//=> [ 'a', 'b', 'c' ]
```

### <a name="string-take"></a>take
`Number -> String -> String`

Returns the first n elements in a string.

```javascript
S.take(3, 'mmmhmmm')
//=> 'mmm'
```

### <a name="string-takeWhile"></a>takeWhile
`(String -> Boolean) -> String -> String`

Takes the first elements of a string that pass the predicate.

```javascript
S.takeWhile(F.equals('m'), 'mmmhmm')
//=> 'mmm'
```

### <a name="string-toLower"></a>toLower
`String -> String`

Returns an all lowercase string.

```javascript
S.toLower('ABCDEF')
//=> 'abcdef'
```

### <a name="string-toUpper"></a>toUpper
`String -> String`

Returns an all uppercase string.

```javascript
S.toUpper('abcdef')
//=> 'ABCDEF'
```

### <a name="string-trim"></a>trim
`String -> String`

Removes whitespace from both ends of a string.

```javascript
S.trim('   a \n')
//=> 'a'
```

### <a name="string-words"></a>words
`String -> Array String`

Returns an array containing word groups in a string.

```javascript
S.words('foo bar baz')
//=> [ 'foo', 'bar', 'baz' ]
```
