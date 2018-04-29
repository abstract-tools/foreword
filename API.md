# API

- [Basics](#basics)
  - [add](#number-add)
  - [always](#function-always)
  - [and](#function-and)
  - [ap](#function-ap)
  - [apply](#function-apply)
  - [both](#function-both)
  - [clamp](#number-clamp)
  - [complement](#function-complement)
  - [compose](#function-compose)
  - [curry](#function-curry)
  - [dec](#number-dec)
  - [divide](#number-divide)
  - [either](#function-either)
  - [equal](#function-equal)
  - [equalBy](#function-equalBy)
  - [flip](#function-flip)
  - [gt](#function-gt)
  - [gte](#function-gte)
  - [identity](#function-identity)
  - [inc](#number-inc)
  - [isEven](#number-isEven)
  - [isOdd](#number-isOdd)
  - [lt](#function-lt)
  - [lte](#function-lte)
  - [match](#function-match)
  - [max](#number-max)
  - [min](#number-min)
  - [mod](#number-mod)
  - [multiply](#number-multiply)
  - [negate](#number-negate)
  - [not](#function-not)
  - [on](#function-on)
  - [or](#function-or)
  - [pipe](#function-pipe)
  - [pow](#number-pow)
  - [rem](#number-rem)
  - [subtract](#number-subtract)
  - [unless](#function-unless)
  - [when](#function-when)
- [Array](#array)
  - [append](#array-append)
  - [concat](#array-concat)
  - [concatMap](#array-concatMap)
  - [countBy](#array-countBy)
  - [drop](#array-drop)
  - [dropWhile](#array-dropWhile)
  - [every](#array-every)
  - [filter](#array-filter)
  - [find](#array-find)
  - [flatten](#array-flatten)
  - [get](#array-get)
  - [gets](#array-gets)
  - [groupBy](#array-groupBy)
  - [head](#array-head)
  - [includes](#array-includes)
  - [init](#array-init)
  - [isEmpty](#array-isEmpty)
  - [last](#array-last)
  - [length](#array-length)
  - [map](#array-map)
  - [max](#array-max)
  - [maxBy](#array-maxBy)
  - [min](#array-min)
  - [minBy](#array-minBy)
  - [partition](#array-partition)
  - [prepend](#array-prepend)
  - [range](#array-range)
  - [reduce](#array-reduce)
  - [reject](#array-reject)
  - [reverse](#array-reverse)
  - [scan](#array-scan)
  - [slice](#array-slice)
  - [some](#array-some)
  - [sort](#array-sort)
  - [sortBy](#array-sortBy)
  - [span](#array-span)
  - [tail](#array-tail)
  - [take](#array-take)
  - [takeWhile](#array-takeWhile)
  - [unique](#array-unique)
  - [uniqueBy](#array-uniqueBy)
  - [zip](#array-zip)
- [Maybe](#maybe)
  - [encase](#maybe-encase)
  - [isNothing](#maybe-isNothing)
  - [map](#maybe-map)
  - [toArray](#maybe-toArray)
  - [withDefault](#maybe-withDefault)
- [Object](#object)
  - [concat](#object-concat)
  - [every](#object-every)
  - [filter](#object-filter)
  - [find](#object-find)
  - [get](#object-get)
  - [gets](#object-gets)
  - [includes](#object-includes)
  - [isEmpty](#object-isEmpty)
  - [length](#object-length)
  - [map](#object-map)
  - [reject](#object-reject)
  - [some](#object-some)
  - [update](#object-update)
- [String](#string)
  - [append](#string-append)
  - [concat](#string-concat)
  - [drop](#string-drop)
  - [dropWhile](#string-dropWhile)
  - [includes](#string-includes)
  - [isEmpty](#string-isEmpty)
  - [join](#string-join)
  - [length](#string-length)
  - [repeat](#string-repeat)
  - [reverse](#string-reverse)
  - [slice](#string-slice)
  - [span](#string-span)
  - [split](#string-split)
  - [take](#string-take)
  - [takeWhile](#string-takeWhile)
  - [toLower](#string-toLower)
  - [toUpper](#string-toUpper)
  - [trim](#string-trim)

---

<div id="basics" class="section-name"></div>

## Basics
```javascript
const F = require('foreword')
// or
const { add, always, ... } = require('foreword')
```

<div id="number-add" class="section-name"></div>

### add
`Number -> Number -> Number`

Adds two numbers.

```javascript
add(2, 2)
//=> 4
```

<div id="function-always" class="section-name"></div>

### always
`a -> b -> a`

Returns its first argument.

```javascript
always('a', 'b')
//=> 'a'
```

*Aliases: K*

<div id="function-and" class="section-name"></div>

### and
`Boolean -> Boolean -> Boolean`

Returns `true` if both values are `true`.

```javascript
and(true, false)
//=> false
```

<div id="function-ap" class="section-name"></div>

### ap
`Array (a -> b) -> Array a -> Array b`

Applies a list of functions over a list of values.

```javascript
ap([mul(2), add(3)], [1, 2, 3])
//=> [ 2, 4, 6, 4, 5, 6 ]
```

*Aliases: S*

<div id="function-apply" class="section-name"></div>

### apply
`(a -> b) -> a -> b`

Applies function to value.

```javascript
apply(add(1), 1)
//=> 2
```

*Aliases: A*

<div id="function-both" class="section-name"></div>

### both
`(a -> Boolean) -> (a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `and` comparison. Short-circuits if the first predicate returns false.

```javascript
const test = both(gt(10), lt(20))

test(15)
//=> true

test(30)
//=> false
```

<div id="number-clamp" class="section-name"></div>

### clamp
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

<div id="function-complement" class="section-name"></div>

### complement
`(a -> Boolean) -> a -> Boolean`

Returns the opposite boolean value that the predicate returned.

```javascript
complement(equal(1), 1)
//=> false
```

<div id="function-compose" class="section-name"></div>

### compose
`(b -> c) -> (a -> b) -> a -> c`

Applies value through two functions, from right to left.

```javascript
compose(Math.sqrt, add(1), 99)
//=> 10
```

*Aliases: B, comp*

<div id="function-curry" class="section-name"></div>

### curry
`Number -> ((a, b) -> c) -> a -> b -> c`

Wraps a function and allows you to supply your arguments one at a time.

```javascript
const add = curry(2, (a, b) => a + b)
const add1 = add(1)
add1(1)
//=> 2
```

<div id="number-dec" class="section-name"></div>

### dec
`Number -> Number`

Decrements a number.

```javascript
dec(10)
//=> 9
```

<div id="number-divide" class="section-name"></div>

### divide
`Number -> Number -> Number`

Divides two numbers.

```javascript
divide(2, 10)
//=> 5
```

*Aliases: div*

<div id="function-either" class="section-name"></div>

### either
`(a -> Boolean) -> (a -> Boolean) -> a -> Boolean`

Applies a value over two predicate functions, returns the result of an `or` comparison. Short-circuits if the first predicate returns true.

```javascript
const test = either(gt(10), isEven)

test(15)
//=> true

test(5)
//=> false

test(4)
//=> true
```

<div id="function-equal" class="section-name"></div>

### equal
`a -> a -> Boolean`

Returns the result of comparing two values.

```javascript
equal('abc', 'abc')
//=> true

equal('abc', 'xyz')
//=> false
```

*Alias: eq*

<div id="function-equalBy" class="section-name"></div>

### equalBy
`a -> a -> Boolean`

Returns the result of comparing two values, after applying a function over the values

```javascript
equalBy(Math.abs, 5, -5)
//=> true
```

*Alias: eqBy*

<div id="function-flip" class="section-name"></div>

### flip
`(a -> b -> c) -> b -> a -> c`

Reverses the order of the first two arguments of the provided function.

```javascript
const gt_ = flip(gt)
gt_(1, 2)
//=> false
```

*Aliases: C*

<div id="function-gt" class="section-name"></div>

### gt
`a -> a -> Boolean`

Determines if a value is greater.

```javascript
gt(1, 2)
//=> true

gt('a', 'b')
//=> true
```

<div id="function-gte" class="section-name"></div>

### gte
`a -> a -> Boolean`

Determines if a value is greater than or equal.

```javascript
gte(1, 1)
//=> true

gte(1, 2)
//=> true
```

<div id="function-identity" class="section-name"></div>

### identity
`a -> a`

Returns itself.

```javascript
identity('a')
//=> 'a'

A.filter(identity, [0, 1, null, 'test'])
//=> [ 1, 'test' ]
```

*Aliases: I, id*

<div id="number-inc" class="section-name"></div>

### inc
`Number -> Number`

Increments a number.

```javascript
inc(10)
//=> 11
```

<div id="number-isEven" class="section-name"></div>

### isEven
`Number -> Boolean`

Determines if a number is even.

```javascript
isEven(10)
//=> true
```

<div id="number-isOdd" class="section-name"></div>

### isOdd
`Number -> Boolean`

Determines if a number is odd.

```javascript
isOdd(9)
//=> true
```

<div id="function-lt" class="section-name"></div>

### lt
`a -> a -> Boolean`

Determines if a value is lesser.

```javascript
lt(2, 1)
//=> true
```

<div id="function-lte" class="section-name"></div>

### lte
`a -> a -> Boolean`

Determines if a value is less than or equal.

```javascript
lte(1, 1)
//=> true

lte(2, 1)
//=> true
```

<div id="function-match" class="section-name"></div>

### match
`Array (a -> Boolean, a -> b) -> a -> b`

Contains predicate and transformer pairs, to determine which transformer to apply over a value.

```javascript
match([
  [lt(1), inc],
  [gt(1), dec],
  [always(true), identity]
], 10)
//=> 9
```

<div id="number-max" class="section-name"></div>

### max
`Number -> Number -> Number`

Returns the larger number.

```javascript
max(4, 9)
//=> 9
```

<div id="number-min" class="section-name"></div>

### min
`Number -> Number -> Number`

Returns the smaller number.

```javascript
min(4, 9)
//=> 4
```

<div id="number-mod" class="section-name"></div>

### mod
`Number -> Number -> Number`

Behaves like the mathematical modulo operator.

```javascript
mod(-20, 3)
//=> 1
```

<div id="number-multiply" class="section-name"></div>

### multiply
`Number -> Number -> Number`

Multiplies two numbers.

```javascript
multiply(2, 5)
//=> 10
```

*Aliases: mul*

<div id="number-negate" class="section-name"></div>

### negate
`Number -> Number`

Negated number.

```javascript
negate(10)
//=> -10
```

<div id="function-not" class="section-name"></div>

### not
`Boolean -> Boolean`

Returns the opposite boolean value.

```javascript
not(true)
//=> false

not(A.some(equal(1), [1, 2, 3]))
//=> false
```

<div id="function-on" class="section-name"></div>

### on
`(b -> b -> c) -> (a -> b) -> a -> a -> c`

Applies a binary function over a unary function twice.

```javascript
const sameLength = on(equal, S.length)
sameLength('hey', 'now')
//=> true
```

*Aliases: P*

<div id="function-or" class="section-name"></div>

### or
`Boolean -> Boolean -> Boolean`

Returns `true` if one or both values are `true`.

```javascript
or(true, false)
//=> true
```

<div id="function-pipe" class="section-name"></div>

### pipe
`Array (a -> b) -> a -> b`

Applies a sequence of transformations over a value.

```javascript
pipe([add(1), Math.sqrt], 99)
//=> 10
```

<div id="number-pow" class="section-name"></div>

### pow
`Number -> Number -> Number`

Returns the power.

```javascript
pow(2, -2)
//=> 4
```

<div id="number-rem" class="section-name"></div>

### rem
`Number -> Number -> Number`

Returns the remainder.

```javascript
rem(3, -20)
//=> -2
```

<div id="number-subtract" class="section-name"></div>

### subtract
`Number -> Number -> Number`

Subtracts two numbers.

```javascript
subtract(2, 10)
//=> 8
```

*Aliases: sub*

<div id="function-unless" class="section-name"></div>

### unless
`(a -> Boolean) -> (a -> b) -> a -> b`

If the predicate is not matched, run a transformer function, otherwise return the original value.

```javascript
unless(lt(10), inc, 15)
//=> 16

unless(lt(10), inc, 5)
//=> 5
```

<div id="function-when" class="section-name"></div>

### when
`(a -> Boolean) -> (a -> b) -> a -> b`

If the predicate is matched, run a transformer function, otherwise return the original value.

```javascript
when(lt(10), inc, 5)
//=> 6
```

---

<div id="array" class="section-name"></div>

## Array
```javascript
const A = require('foreword/array')
```

<div id="array-append" class="section-name"></div>

### append
`a -> Array a -> Array a`

Adds a value to the end of an array.

```javascript
A.append(4, [1, 2, 3])
//=> [ 1, 2, 3, 4 ]

A.append([4], [1, 2, 3])
//=> [ 1, 2, 3, [ 4 ] ]
```

<div id="array-concat" class="section-name"></div>

### concat
`Array a -> Array a`

Concatenate an array of arrays into a single array, removing one level of nesting.

```javascript
A.concat([[1, 2], [3], [4, 5]])
//=> [ 1, 2, 3, 4, 5 ]
```

<div id="array-concatMap" class="section-name"></div>

### concatMap
`(a -> Array b) -> Array a -> Array b

Concatenates the result of a map function.

```javascript
A.concatMap(x => [x, x], [1, 2, 3])
//=> [ 1, 1, 2, 2, 3, 3 ]

A.concatMap(x => A.range(1, inc(x)), [1, 2, 3])
//=> [ 1, 1, 2, 1, 2, 3 ]
```

<div id="array-countBy" class="section-name"></div>

### countBy
`(a -> b) -> Array a -> Object b Number`

Returns an object with keys as the result of applying a function to elements, and the value is the amount of every matched element.

```javascript
A.countBy(Math.floor, [4.2, 6.1, 6.4])
//=> { 4: 1, 6: 2 }

A.countBy(S.length, ['one', 'two', 'three'])
//=> { 3: 2, 5: 1 }
```

<div id="array-drop" class="section-name"></div>

### drop
`Number -> Array a -> Array a`

Drops the first n elements in an array.

```javascript
A.drop(2, [1, 2, 3, 4, 5])
//=> [ 3, 4, 5 ]
```

<div id="array-dropWhile" class="section-name"></div>

### dropWhile
`(a -> Boolean) -> Array a -> Array a`

Drops the first items of an array which match the predicate.

```javascript
A.dropWhile(isEven, [2, 4, 5, 6])
//=> [ 5, 6 ]
```

<div id="array-every" class="section-name"></div>

### every
`(a -> Boolean) -> Array a -> Boolean`

Determines if every element satisfies the predicate.

```javascript
A.every(equal(1), [1, 1, 1])
//=> true

A.every(equal('a'), ['a', 'b', 'c'])
//=> false
```

<div id="array-filter" class="section-name"></div>

### filter
`(a -> Boolean) -> Array a -> Array a`

Returns an array of every element that matches the predicate.

```javascript
A.filter(equal(1), [1, 2, 3])
//=> [ 1 ]
```

<div id="array-find" class="section-name"></div>

### find
`(a -> Boolean) -> Array a -> Maybe a`

Returns the value of the first element that matches the predicate, or `undefined` if it does not exist.

```javascript
A.find(equal(1), [1, 2, 3])
//=> 1
```

<div id="array-flatten" class="section-name"></div>

### flatten
`Array a -> Array a`

Recursively flattens an array of arrays.

```javascript
A.flatten([1, [[2], 3], [4, [[5]]]])
//=> [ 1, 2, 3, 4, 5 ]
```

<div id="array-get" class="section-name"></div>

### get
`Number -> Array a -> Maybe a`

Retrieves an element of an array by index.

```javascript
A.get(0, [1, 2, 3])
//=> 1

A.get(1, [])
//=> undefined
```

<div id="array-gets" class="section-name"></div>

### gets
`Array Number -> Array a -> Array (Maybe a)`

Retrieves multiple elements of an array by index.

```javascript
A.gets([0, 1], [1, 2, 3])
//=> [1, 2]

A.gets([0, 1], [])
//=> [undefined, undefined]
```

<div id="array-groupBy" class="section-name"></div>

### groupBy
`(a -> b) -> Array a -> Object b (Array a)`

Returns an object with keys as the result of applying a function to elements, and the value is an array of every matched element.

```javascript
A.groupBy(Math.floor, [4.2, 6.1, 6.4])
//=> { '4': [ 4.2 ], '6':  [ 6.1, 6.4 ] }
```

<div id="array-head" class="section-name"></div>

### head
`Array a -> Maybe a`

Returns the first element in an array.

```javascript
A.head([1, 2, 3, 4, 5])
//=> 1

A.head([])
//=> undefined
```

<div id="array-includes" class="section-name"></div>

### includes
`a -> Array a -> Boolean`

Determines if an array contains a value.

```javascript
A.includes('a', ['a', 'b', 'c'])
//=> true
```

<div id="array-init" class="section-name"></div>

### init
`Array a -> Array a`

Returns every element except the last.

```javascript
A.init([1, 2, 3, 4, 5])
//=> [ 1, 2, 3, 4 ]
```

<div id="array-isEmpty" class="section-name"></div>

### isEmpty
`Array a -> Boolean`

Determines if an array contains any elements.

```javascript
A.isEmpty([1])
//=> false
```

<div id="array-last" class="section-name"></div>

### last
`Array a -> Maybe a`

Returns the last element in an array.

```javascript
A.last([1, 2, 3, 4, 5])
//=> 5

A.last([])
//=> undefined
```

<div id="array-length" class="section-name"></div>

### length
`Array a -> Number`

Returns the number of elements in an array.

```javascript
A.length([1, 2, 3])
//=> 3
```

<div id="array-map" class="section-name"></div>

### map
`(a -> b) -> Array a -> Array b`

Applies a function over every element in an array.

```javascript
A.map(O.get('a'), [{a: 1}, {a: 2}, {a: 3}])
//=> [ 1, 2, 3 ]
```

<div id="array-max" class="section-name"></div>

### max
`Array a -> Maybe a`

Returns the highest value element in an array.

```javascript
A.max([1, 2, 3])
//=> 3
```

<div id="array-maxBy" class="section-name"></div>

### maxBy
`(a -> b) -> Array a -> Maybe a`

Returns the highest value element in an array.

```javascript
A.maxBy(S.length, ['bc', 'abc', 'a', 'b'])
//=> 'abc'
```

<div id="array-min" class="section-name"></div>

### min
`Array a -> Maybe a`

Returns the lowest value element in an array.

```javascript
A.min([3, 2, 1])
//=> 1
```

<div id="array-minBy" class="section-name"></div>

### minBy
`(a -> b) -> Array a -> Maybe a`

Returns the lowest value element in an array after applying a function to the element.

```javascript
A.minBy(S.length, ['bc', 'abc', 'a', 'b'])
//=> 'a'
```

<div id="array-partition" class="section-name"></div>

### partition
`(a -> Boolean) -> Array a -> Array (a, a)`

Equivalent to `[filter(f, arr), reject(f, arr)]`.

```javascript
A.partition(isEven, [1, 2, 3, 4, 5])
//=> [ [ 2, 4 ], [ 1, 3, 5 ] ]
```

<div id="array-prepend" class="section-name"></div>

### prepend
`a -> Array a -> Array a`

Adds a value to the beginning of an array.

```javascript
A.prepend(4, [1, 2, 3])
//=> [ 4, 1, 2, 3 ]

A.concat(A.prepend([4, 5], [1, 2, 3]))
//=> [ 4, 5, 1, 2, 3 ]
```

<div id="array-range" class="section-name"></div>

### range
`Number -> Number -> Array Number`

Returns an array of numbers from the start (inclusive) to the end (exclusive).

```javascript
A.range(0, 5)
//=> [ 0, 1, 2, 3, 4 ]

A.range(20, 25)
//=> [ 20, 21, 22, 23, 24 ]
```

<div id="array-reduce" class="section-name"></div>

### reduce
`(a -> b -> b) -> b -> Array a -> b`

Applies a function over an accumulator and every element in an array, returning the result as a single value.

```javascript
A.reduce(add, 0, [1, 2, 3])
//=> 6
```

<div id="array-reject" class="section-name"></div>

### reject
`(a -> Boolean) -> Array a -> Array a`

Returns an array of all elements that do not match the predicate.

```javascript
A.reject(isEven, [1, 2, 3, 4, 5])
//=> [ 1, 3, 5 ]
```
 
<div id="array-reverse" class="section-name"></div>

### reverse
`Array a -> Array a`

Returns a new array with the elements in reverse order.

```javascript
A.reverse([1, 2, 3])
//=> [ 3, 2, 1 ]
```

<div id="array-scan" class="section-name"></div>

### scan
`(a -> b -> b) -> b -> Array a -> Array b`

Like `reduce`, but returns a list with the initial value, the intermediate values, and the final value.

```javascript
A.scan(add, 0, [1, 2, 3])
//=> [ 0, 1, 3, 6 ]
```

<div id="array-slice" class="section-name"></div>

### slice
`Number -> Number -> Array a -> Array a`

Returns a subset of an array, providing starting and ending indexes.

```javascript
A.slice(1, 3, [1, 2, 3, 4, 5])
//=> [ 2, 3 ]
```

<div id="array-some" class="section-name"></div>

### some
`(a -> Boolean) -> Array a -> Boolean`

Determines if any elements match the predicate.

```javascript
A.some(equal(1), [1, 2, 3])
//=> true
```

<div id="array-sort" class="section-name"></div>

### sort
`((a, a) -> Number) -> Array a -> Array a`

Returns a sorted array, given a comparison function.

```javascript
A.sort((a, b) => a - b, [5, 39, 1])
//=> [ 1, 5, 39 ]
```

<div id="array-sortBy" class="section-name"></div>

### sortBy
`(a -> b) -> Array a -> Array a`

Sort an array by applying a function to elements.

```javascript
A.sortBy(S.length, ['abc', 'a', 'ab'])
//=> [ 'a', 'ab', 'abc' ]

A.sortBy(O.get('name'), [{ name: 'bob'}, { name: 'alice' }, { name: 'charlie' }])
//=> [ { name: 'alice' }, { name: 'bob' }, { name: 'charlie' } ]
```

<div id="array-span" class="section-name"></div>

### span
`(a -> Boolean) -> Array a -> Array (a, a)`

Equivalent to `[takeWhile(f, arr), dropWhile(f, arr)]`.

```javascript
A.span(isEven, [2, 4, 5, 6])
//=> [ [ 2, 4 ], [ 5, 6 ] ]
```

<div id="array-tail" class="section-name"></div>

### tail
`Array a -> Array a`

Returns every element except the first.

```javascript
A.tail([1, 2, 3, 4, 5])
//=> [ 2, 3, 4, 5 ]
```

<div id="array-take" class="section-name"></div>

### take
`Number -> Array a -> Array a`

Returns the first n elements in an array.

```javascript
A.take(2, [1, 2, 3, 4, 5])
//=> [ 1, 2 ]
```

<div id="array-takeWhile" class="section-name"></div>

### takeWhile
`(a -> Boolean) -> Array a -> Array a`

Returns the first elements in an array which match the predicate.

```javascript
A.takeWhile(isEven, [2, 4, 5, 6])
//=> [ 2, 4 ]
```

<div id="array-unique" class="section-name"></div>

### unique
`Array a -> Array a`

Returns a list of unique elements.

```javascript
A.unique([1, 1, 1, 3, 5, 5, 9])
//=> [ 1, 3, 5, 9 ]
```

<div id="array-uniqueBy" class="section-name"></div>

### uniqueBy
`(a -> b) -> Array a -> Array a`

Returns an array of unique values from the applied function.

```javascript
A.uniqueBy(S.length, ['and', 'here', 'are', 'some', 'words'])
//=> [ 'and', 'here', 'words' ]
```

<div id="array-zip" class="section-name"></div>

### zip
`Array k -> Array v -> Object k v`

Returns an object, combining an array of keys and an array of values.

```javascript
A.zip(['a', 'b', 'c'], [1, 2, 3, 4])
//=> { a: 1, b: 2, c: 3 }

A.zip(['a', 'b', 'c'], [1, 2])
//=> { a: 1, b: 2 }
```

---

<div id="maybe" class="section-name"></div>

## Maybe
A set of functions for dealing with unwanted values.

```javascript
const Maybe = require('foreword/maybe')
```

<div id="maybe-encase" class="section-name"></div>

### encase
`(a -> b) -> a -> Maybe b`

Applies a function that may throw and a value, returns the result or, if it throws, `undefined`.

```javascript
Maybe.encase(x => x.a.b.c, {a: 0})
undefined

Maybe.encase(x => x.a.b.c, {a: {b: {c: 0}}})
0
```

<div id="maybe-isNothing" class="section-name"></div>

### isNothing
`a -> Boolean`

Determines if a value exists.

```javascript
Maybe.isNothing(null || undefined)
true

Maybe.isNothing(0)
false
```

<div id="maybe-map" class="section-name"></div>

### map
`(a -> Maybe b) -> Maybe a -> Maybe b`

Applies function to value, if value exists, or returns value.

```javascript
Maybe.map(add(1), 1)
//=> 2

Maybe.map(add(1), undefined)
//=> undefined

pipe([
  Maybe.map(A.head),
  Maybe.map(multiply(2)),
  Maybe.map(isEven)
], [])
//=> undefined
```

<div id="maybe-toArray" class="section-name"></div>

### toArray
`Maybe a -> Array a`

Returns an empty array if value does not exist, or an array with the value.

```javascript
Maybe.toArray(undefined)
//=> []

Maybe.toArray(1)
//=> [1]
```

<div id="maybe-withDefault" class="section-name"></div>

### withDefault
`a -> Maybe a -> a`

Returns the first value, if the second does not exist.

```javascript
Maybe.withDefault(1, undefined)
//=> 1

Maybe.withDefault(1, 10)
//=> 10
```

---

<div id="object" class="section-name"></div>

## Object
```javascript
const O = require('foreword/object')
```

<div id="object-concat" class="section-name"></div>

### concat
`Array (Object k v) -> Object k v`

Combine an array of objects into one object.

```javascript
O.concat([{ name: 'bob': id: 123 }, { name: 'alice' }, { id: 321 }])
{ name: 'alice', id: 321 }
```

<div id="object-every" class="section-name"></div>

### every
`Object k (v -> Boolean) -> Object k v -> Boolean`

Returns whether every key matches the predicate.

```javascript
const test = O.every({
  a: equal('foo'),
  b: not(equal('bar')),
  x: gt(10),
  y: lt(20)
})

test({ a: 'foo', b: 'baz', x: 15, y: 15 })
//=> true

test({ a: 'foo', b: 'baz': x: 10, y: 15 })
//=> false
```

<div id="object-filter" class="section-name"></div>

### filter
`Array k -> Object k v -> Object k v`

Returns a subset of an object, with only the specified keys.

```javascript
O.filter(['id', 'name'], { id: 123, name: 'bob', test: 'testing' })
//=> { id: 123, name: 'bob' }

A.map(O.filter(['id']), [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
//=> [ { id: 1 }, { id: 2 } ]
```

<div id="object-find" class="section-name"></div>

### find
`Array k -> Object k v -> Maybe v`

Returns a value from a nested object path.

```javascript
O.find(['a', 'b', 'c'], { a: { b: { c: 1 } } })
//=> 1
```

<div id="object-get" class="section-name"></div>

### get
`k -> Object k v -> Maybe v`

Returns the property of an object, if it exists.

```javascript
O.get('a', { a: 'test' })
//=> 'test'

A.map(O.get('a'), [{ a: 1 }, { a: 2 }, { a: 3 }])
//=> [ 1, 2, 3 ]
```

<div id="object-gets" class="section-name"></div>

### gets
`Array k -> Object k v -> Array (Maybe v)`

Returns an array of values where Object k is found. 

```javascript
O.gets(['a', 'b'], { a: 1, b: 2 })
//=> [ 1, 2 ]
```

<div id="object-includes" class="section-name"></div>

### includes
`k -> Object k v -> Boolean`

Determines if an object contains a key.

```javascript
O.includes('a', { a: 1, b: 2 })
//=> true
```

<div id="object-isEmpty" class="section-name"></div>

### isEmpty
`Object k v -> Boolean`

Determines if an object contains any keys.

```javascript
O.isEmpty({})
//=> true
```

<div id="object-length" class="section-name"></div>

### length
`Object k v -> Number`

Returns the number of keys in an object.

```javascript
O.length({ a: 1, b: 2 })
//=> 2

O.length({})
//=> 0
```

<div id="object-map" class="section-name"></div>

### map
`Object k (a -> b) -> Object k a -> Object k b`

Returns an object with transformations applied over specified keys.

```javascript
O.map({ ms: inc }, { id: 123, ms: 999 })
//=> { id: 123, ms: 1000 }
```

<div id="object-reject" class="section-name"></div>

### reject
`Array k -> Object k v -> Object k v`

Returns an object, without the keys specified.

```javascript
O.reject(['name', 'test'], { id: 123, name: 'alice', test: 'test' })
//=> { id: 123 }

A.map(O.reject(['id']), [{ id: 1, name: 'alice' }, { id: 2, name: 'bob' }])
//=> [ { name: 'alice' }, { name: 'bob' } ]
```

<div id="object-some" class="section-name"></div>

### some
`Object k (v -> Boolean) -> Object k v -> Boolean`

Returns whether some keys matches the predicate.

```javascript
const test = O.some({
  x: gt(10),
  y: lt(20)
})

test({ x: 15, y: 25 })
//=> true

test({ x: 5, y: 25 })
//=> false
```

<div id="object-update" class="section-name"></div>

### update
`Object k v -> Object k v -> Object k v`

Creates a new object with values from the first argument merged over the second argument.

```javascript
O.update({ a: true }, { a: false })
//=> { a: true }
```

---

<div id="string" class="section-name"></div>

## String
```javascript
const S = require('foreword/string')
```

<div id="string-append" class="section-name"></div>

### append
`String -> String -> String`

Combine two strings.

```javascript
S.append('ing', 'append')
//=> 'appending'
```

<div id="string-concat" class="section-name"></div>

### concat
`Array String -> String`

Combines a list of strings into one string.

```javascript
S.concat(['a', 'b', 'c'])
//=> 'abc'
```

<div id="string-drop" class="section-name"></div>

### drop
`Number -> String -> String`

Drops the first n elements in a string.

```javascript
S.drop(3, 'mmmhmmm')
//=> 'hmmm'
```

<div id="string-dropWhile" class="section-name"></div>

### dropWhile
`(String -> Boolean) -> String -> String`

Drops the first elements of a string that pass the predicate.

```javascript
S.dropWhile(equal('m'), 'mmmhmm')
//=> 'hmm'
```

<div id="string-includes" class="section-name"></div>

### includes
`String -> String -> Boolean`

Determines if a string contains a substring.

```javascript
S.includes('abc', 'abcdef')
//=> true
```

<div id="string-isEmpty" class="section-name"></div>

### isEmpty
`String -> Boolean`

Determines if a string contains any characters.

```javascript
S.isEmpty('abc')
//=> false
```

<div id="string-join" class="section-name"></div>

### join
`String -> Array String -> String`

Joins every element in an array with a string, creating a single string.

```javascript
S.join(':', ['a', 'b', 'c'])
//=> 'a:b:c'
```

<div id="string-length" class="section-name"></div>

### length
`String -> Number`

Returns the number of values in a string.

```javascript
S.length('abc')
//=> 3
```

<div id="string-repeat" class="section-name"></div>

### repeat
`Number -> String -> String`

Repeated a string n amount of times.

```javascript
S.repeat(3, 'abc')
//=> 'abcabcabc'
```

<div id="string-reverse" class="section-name"></div>

### reverse
`String -> String`

Reverses the order of a string.

```javascript
S.reverse('abc')
//=> 'cba'
```

<div id="string-slice" class="section-name"></div>

### slice
`Number -> Number -> String -> String`

Returns a subset of a string, given starting and ending indexes.

```javascript
S.slice(1, 3, 'abcdef')
//=> 'bc'
```

<div id="string-span" class="section-name"></div>

### span
`(String -> Boolean) -> String -> Array (String, String)`

Equivalent to `[takeWhile(f, str), dropWhile(f, str)]`.

```javascript
S.span(equal('m'), 'mmmhmm')
//=> [ 'mmm', 'hmm' ]
```

<div id="string-split" class="section-name"></div>

### split
`String -> String -> Array String`

Splits a string into an array of substrings.

```javascript
S.split(':', 'a:b:c')
//=> [ 'a', 'b', 'c' ]
```

<div id="string-take" class="section-name"></div>

### take
`Number -> String -> String`

Returns the first n elements in a string.

```javascript
S.take(3, 'mmmhmmm')
//=> 'mmm'
```

<div id="string-takeWhile" class="section-name"></div>

### takeWhile
`(String -> Boolean) -> String -> String`

Takes the first elements of a string that pass the predicate.

```javascript
S.takeWhile(equal('m'), 'mmmhmm')
//=> 'mmm'
```

<div id="string-toLower" class="section-name"></div>

### toLower
`String -> String`

Returns an all lowercase string.

```javascript
S.toLower('ABCDEF')
//=> 'abcdef'
```

<div id="string-toUpper" class="section-name"></div>

### toUpper
`String -> String`

Returns an all uppercase string.

```javascript
S.toUpper('abcdef')
//=> 'ABCDEF'
```

<div id="string-trim" class="section-name"></div>

### trim
`String -> String`

Removes whitespace from both ends of a string.

```javascript
S.trim('   a \n')
//=> 'a'
```
